import usFlag from "../assets/images/us.png";
import faFlag from "../assets/images/fa.png";
import { useRef, useState, useEffect } from "react";
import { useAppContext } from "../contexts/app/app-context";

const ChangeLanguage = () => {
  const [show, setShow] = useState(false);

  const { language, changeLanguage } = useAppContext();

  const ref = useRef();

  useEffect(() => {
    setShow(false);
  }, [language]);

  useEffect(() => {
    const checkIfClickOutside = (e) => {
      if (show && ref.current && !ref.current.contains(e.target)) {
        setShow(false);
      }
    };

    document.addEventListener("mousedown", checkIfClickOutside);

    return () => {
      document.removeEventListener("mousedown", checkIfClickOutside);
    };
  }, [show]);

  return (
    <div className="dropdown">
      <a className="nav-flag dropdown-toggle" onClick={() => setShow(true)}>
        <img src={language === "fa" ? faFlag : usFlag} alt="English" />
      </a>
      <div
        ref={ref}
        className={`dropdown-menu dropdown-menu-end ${
          show ? "show" : undefined
        }`}
      >
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          onClick={() => changeLanguage("fa")}
        >
          <img src={faFlag} width="20" className="ms-2" />
          <span className="align-middle">فارسی</span>
        </a>
        <a
          className="dropdown-item fw-bolder d-flex align-items-center gap-2"
          onClick={() => changeLanguage("en")}
        >
          <img src={usFlag} width="20" className="ms-2" />
          <span className="align-middle">English</span>
        </a>
      </div>
    </div>
  );
};

export default ChangeLanguage;
