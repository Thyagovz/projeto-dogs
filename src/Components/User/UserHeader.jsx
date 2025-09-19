import React from "react";
import UserHeaderNav from "./UserHeaderNav";
import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

const UserHeader = () => {
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const pathname  = location.pathname;
    if (pathname.startsWith("/account/post")) {
      setTitle("Poste Sua Foto");
    } else if (pathname.startsWith("/account/statistics")) {
      setTitle("Estatísticas");
    } else {
      setTitle("Minha Conta");
    }
  }, [location.pathname]);
  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav />
    </header>
  );
};

export default UserHeader;
