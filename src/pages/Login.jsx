import { useState } from "react";
import { auth } from "../services/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);

  const handleAuth = async () => {
    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        alert("✅ Logged in successfully!");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("✅ Account created!");
      }
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-blue-600">
        {isLogin ? "Login to EduBridge" : "Create Account"}
      </h2>
      <div className="flex flex-col bg-white shadow-md rounded-lg p-6 w-80">
        <input
          className="border p-2 mb-3 rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="border p-2 mb-3 rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          onClick={handleAuth}
          className="bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition"
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
        <p
          onClick={() => setIsLogin(!isLogin)}
          className="text-blue-500 text-center mt-3 cursor-pointer"
        >
          {isLogin ? "Need an account? Sign Up" : "Already have an account? Login"}
        </p>
      </div>
    </div>
  );
}

export default Login;
