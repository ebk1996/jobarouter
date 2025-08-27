import { Outlet } from "react-router-dom";

export default function CareersLayout() {
    return (
        <div className="career-layout">
            <h2>Careers</h2>
            <p>Lorem Ipsum dolor sit amet, consectetur adipiscing elit.</p>

            <Outlet />
        </div>
    );
}
