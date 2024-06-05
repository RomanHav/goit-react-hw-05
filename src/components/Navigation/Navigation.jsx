import { NavLink, useLocation } from "react-router-dom";
import css from "./Navigation.module.css";

export default function Navigation() {
  const location = useLocation();
  console.log(location);
  return (
    <nav className={css.navigation}>
      <NavLink
        className={`${location.pathname === "/" ? css.isActive : ""} ${
          css.home
        }`}
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={`${
          location.pathname.includes("movies") ? css.isActive : ""
        } ${css.movies}`}
        to="/movies"
      >
        Movies
      </NavLink>
    </nav>
  );
}
