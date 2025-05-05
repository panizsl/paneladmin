import { useReducer, createContext, useContext, useEffect } from "react";
import appReducer from "./app-reducer";
import { useTranslation } from "react-i18next";

const AppContext = createContext();
const initionState = {
  language: localStorage.getItem("language") || "fa",
  theme: localStorage.getItem("theme") || "light",
  showSidebar: true,
};
//useReducer: look like redux
//1-reducer => function => handle state
//2-action => abject => dispatch to reducer (type,payload)
//3-store => store state ذخیره stat
const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initionState);
  const { i18n } = useTranslation();

  const changeLanguage = (language) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  const changeTheme = (theme) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };
  const toggleSidebar = () => {
    dispatch({ type: "TOGGLE_SIDEBAR" });
  };

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.body.dataset.direction = state.language === "fa" ? "rtl" : "ltr";
    document.body.dataset.sidebarposition =
      state.language === "fa" ? "right" : "left";
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);
  return (
    <AppContext.Provider
      value={{ ...state, changeLanguage, changeTheme, toggleSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { useAppContext, AppProvider };
