//manages authentication context and provides a hook to access it
// import { useContext } from "react";
// import { AuthContext } from "./AuthContext";

// export const useAuth = () => {
//   const context = useContext(AuthContext);

//   if (!context) {
//     throw new Error("useAuth must be used inside AuthProvider");
//   }

//   return context;
// };
// context/useAuth.ts
import { useContext } from "react";
import { AuthContext } from "./AuthContext";

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error("useAuth must be inside AuthProvider");
  return ctx;
};
