import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

import AuthLayout from "./layouts/AuthLayout";
import LoginView from "./views/auth/Login";
import RoleSelectionView from "./views/auth/RoleSelection";
import CreateStep1View from "./views/auth/CreateAccountStep1";
import CreateStep2View from "./views/auth/CreateAccountStep2";

function App() {
  return (
    <BrowserRouter>
      <AuthLayout>
        <Routes>
          <Route path="/" element={<LoginView />} />
          <Route path="/role-selection" element={<RoleSelectionView />} />
          <Route path="/create-1" element={<CreateStep1View />} />
          <Route path="/create-2" element={<CreateStep2View />} />
        </Routes>
      </AuthLayout>
    </BrowserRouter>
  );
}

export default App;
