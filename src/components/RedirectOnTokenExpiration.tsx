import { useEffect } from "react";
import { useNavigate } from "react-router";

const RedirectOnTokenExpiration = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const tokenExpirationTime = 10 * 60 * 1000; // 10 minutes in milliseconds

    if (!token) {
      navigate("/");
      return;
    }

    const timerId = setTimeout(() => {
      // Token expired, redirect to login
      navigate("/");
    }, tokenExpirationTime);

    return () => clearTimeout(timerId);
  }, [navigate]);

  return null;
};

export default RedirectOnTokenExpiration;
