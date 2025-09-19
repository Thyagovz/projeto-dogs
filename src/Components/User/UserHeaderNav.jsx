import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import Feed from "../../Assets/feed.svg?react";
import Stats from "../../Assets/estatisticas.svg?react";
import Add from "../../Assets/adicionar.svg?react";
import Out from "../../Assets/sair.svg?react";
import styles from "./UserHeaderNav.module.css";

const UserHeaderNav = () => {
  const { mobile, setMobile } = React.useState(null);
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/account" end>
        <Feed />
        {mobile && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/account/statistics">
        <Stats />
        {mobile && "Estatísticas"}
      </NavLink>
      <NavLink to="/account/post">
        <Add />
        {mobile && "Adicionar Foto"}
      </NavLink>
      <button onClick={userLogout}>
        <Out />
        {mobile && "Sair"}
      </button>
    </nav>
  );
};

export default UserHeaderNav;
