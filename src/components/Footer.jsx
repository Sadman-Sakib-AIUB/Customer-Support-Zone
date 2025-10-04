import iconEmail from "../assets/Icons/email.svg";
import iconFacebook from "../assets/Icons/facebook.svg";
import iconLinkedin from "../assets/Icons/linkedin.svg";
import iconX from "../assets/Icons/x.svg";
import Container from "./Container";

export default function Footer() {
  return (
    <footer className="bg-black pt-12 mb-0">
      <Container>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-5 border-b border-b-slate-200/20 text-[#A1A1AA]">
          {/* 1st col */}
          <div className="mb-8 space-y-4">
            <h2 className="text-lg font-semibold text-white">
              CS — Ticket System
            </h2>
            <p className=" text-justify">
              CS Ticket System — helps streamline service by converting customer
              queries into manageable tickets, assigning them to the right
              agents, and ensuring fast resolution through efficient
              communication and real-time status tracking.
            </p>
          </div>
          {/* 2nd col */}
          <div className="md:ml-8 mb-8 space-y-3">
            <h3 className="text-lg font-medium text-white">Company</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Our Mission</a>
              </li>
              <li>
                <a href="#">Contact Saled</a>
              </li>
            </ul>
          </div>
          {/* 3rd col */}
          <div className="mb-8 space-y-3">
            <h3 className="text-lg font-medium text-white">Services</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Products & Services</a>
              </li>
              <li>
                <a href="#">Customer Stories</a>
              </li>
              <li>
                <a href="#">Download Apps</a>
              </li>
            </ul>
          </div>
          {/* 4th col*/}
          <div className="mb-8 space-y-3">
            <h3 className="text-lg font-medium text-white">Information</h3>
            <ul className="space-y-2">
              <li>
                <a href="#">Privacy Policy</a>
              </li>
              <li>
                <a href="#">Terms & Conditions</a>
              </li>
              <li>
                <a href="#">Join Us</a>
              </li>
            </ul>
          </div>
          {/* 5th col */}
          <div className="space-y-3">
            <h3 className="text-lg font-medium text-white">Social Links</h3>
            <ul className="space-y-2">
              <li>
                <a className="flex items-center gap-2" href="#">
                  <img src={iconX} />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" href="#">
                  <img src={iconLinkedin} />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" href="#">
                  <img src={iconFacebook} />
                  <span>@CS — Ticket System</span>
                </a>
              </li>
              <li>
                <a className="flex items-center gap-2" href="#">
                  <img src={iconEmail} />
                  <span>support@cst.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        {/* Copyright text */}
        <div className="py-5">
          <p className="text-center text-white text-sm">
            &copy; 2025 CS — Ticket System. All rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
