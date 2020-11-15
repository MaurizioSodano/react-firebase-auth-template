import React from "react";

import { Provider as AuthProvider } from "../context/AuthContext";
import Routes from "./Routes";

/**
 * Wrap all providers here
 */

export default function Providers() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
