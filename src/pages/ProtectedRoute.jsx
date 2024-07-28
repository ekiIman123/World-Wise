import { useEffect } from "react";
import { useAuth } from "../contexts/FakeAuthContext";
import { useNavigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { isAuthenthicated } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenthicated) navigate("/");
    },
    [isAuthenthicated, navigate]
  );

  return children;
}
