import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

function Lessons() {
  const [lessons, setLessons] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const fetchLessons = async () => {
    const querySnapshot = await getDocs(collection(db, "lessons"));
    const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    setLessons(data);
  };

  const addLesson = async () => {
    if (!title || !description) return alert("Enter both fields!");
    await addDoc(collection(db, "lessons"), { title, description });
    setTitle("");
    setDescription("");
    fetchLessons();
  };

  useEffect(() => {
    fetchLessons();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-2xl font-bold text-blue-600 mb-4">📚 Manage Lessons</h2>
      <div className="flex gap-3 mb-6">
        <input
          className="border p-2 rounded w-1/3"
          placeholder="Lesson Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          className="border p-2 rounded w-1/2"
          placeholder="Lesson Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <button
          onClick={addLesson}
          className="bg-green-500 text-white px-4 rounded hover:bg-green-600 transition"
        >
          Add
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold">{lesson.title}</h3>
            <p className="text-gray-600">{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Lessons;
