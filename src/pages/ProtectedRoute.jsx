// import { useEffect } from "react";
// import { useAuth } from "../contexts/FakeAuthContext";
// import { useNavigate } from "react-router-dom";

// export default function ProtectedRoute({ children }) {
//   const { isAuthenthicated } = useAuth();
//   const navigate = useNavigate();

//   useEffect(
//     function () {
//       if (isAuthenthicated) navigate("/");
//     },
//     [isAuthenthicated, navigate]
//   );

//   return isAuthenthicated ? children : null;
// }

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/FakeAuthContext";

function ProtectedRoute({ children }) {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/" />;
  }
  return children;
}

export default ProtectedRoute;
