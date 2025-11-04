import { useEffect, useState } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function Dashboard() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const fetchLessons = async () => {
      const querySnapshot = await getDocs(collection(db, "lessons"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setLessons(data);
    };
    fetchLessons();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-blue-600 mb-4">🎓 EduBridge Dashboard</h1>
      <p className="mb-6 text-gray-600">Welcome! Here are your available lessons:</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="bg-white shadow-md p-4 rounded-lg hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-gray-800">{lesson.title}</h3>
            <p className="text-gray-600 mt-2">{lesson.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
