import { useState, useEffect } from "react";
import { db } from "../services/firebase";
import { collection, getDocs } from "firebase/firestore";

function Mentors() {
  const [mentors, setMentors] = useState([]);

  useEffect(() => {
    const fetchMentors = async () => {
      const querySnapshot = await getDocs(collection(db, "mentors"));
      const data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setMentors(data);
    };
    fetchMentors();
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-blue-600 mb-4">👩‍🏫 Our Mentors</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="bg-white p-4 rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-gray-800">{mentor.name}</h3>
            <p className="text-gray-600">{mentor.subject}</p>
            <p className="text-sm text-gray-500">Experience: {mentor.experience} years</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Mentors;
