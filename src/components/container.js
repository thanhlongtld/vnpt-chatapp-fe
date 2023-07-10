import { useRouter } from "next/router";
import { useEffect } from "react";

const Container = ({ children }) => {
  const router = useRouter();

  useEffect(() => {
    window.addEventListener("storage", () => {
      if (!localStorage.getItem("access") || !localStorage.getItem("refresh")) {
        toast.warn("You need to login again!");

        setAuthenticatedUser(null);

        router.push("/login");
      }
    });
  }, []);
};

export default Container;
