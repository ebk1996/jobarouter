import { NavLink, Outlet } from "react-router-dom";

export default function HelpLayout() {
  return (
    <div className="help-layout">

      <h2>Website Help</h2>
      <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>

      <nav>
        <NavLink to="faq">View the FAQ</NavLink>    
        <NavLink to="contact">Contact Us</NavLink>
      </nav>

      <Outlet />
      
    </div>
  );
}
