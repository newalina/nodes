import { createContext, useContext, useState } from "react";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";

const AlertContext = createContext();

export const AlertProvider = ({ children }) => {
  const [alert, setAlert] = useState({ severity: "", message: "" });

  return (
    <AlertContext.Provider value={{ setAlert }}>
      {children}
      {alert.severity && (
        <div className="alert">
          <Alert
            severity={alert.severity}
            onClose={() => setAlert({ severity: "", message: "" })}
            sx={{ whiteSpace: "pre-line" }}
          >
            <AlertTitle>
              {alert.severity === "success" ? "Success" : "Error"}
            </AlertTitle>
            {alert.message}
          </Alert>
        </div>
      )}
    </AlertContext.Provider>
  );
};

export const useAlert = () => useContext(AlertContext);
