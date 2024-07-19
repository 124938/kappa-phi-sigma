import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Stories from "./pages/Stories";
import CareTaker from "./pages/CareTaker";
import FamilyMember from "./pages/FamilyMember";
import { useAuth } from "./contexts/AuthContextProvider";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { get } from "./firebase/firebase";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
    // children: {
    //   // path: "/careta"
    // }
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/stories",
    element: <Stories />,
  },
  {
    path: "/caretaker",
    element: <CareTaker />,
  },
  {
    path: "/familymember",
    element: <FamilyMember />,
  }
]);
const Route = () => {
  const { setUser } = useAuth();

  useEffect(() => {
    (async () => {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          console.log(user);
          if (user.displayName === null) {
            try {
              const userFromDB = await get("users", user.uid);
              console.log(userFromDB.data());
              if (userFromDB.exists()) {
                setUser({ name: userFromDB.data().name, uid: user.uid });
              }
            } catch (e: any) {
              console.log("Error getting name from db", e);
            }
          } else setUser({ name: user.displayName, uid: uid });
        } else {
          console.log("User hi nahi hai");
          // User is signed out
          // ...
        }
      });
    })();
  }, []);

  return <RouterProvider router={router} />;
};

export default Route;
