import React,{ReactNode} from "react";
import Header1 from "../elements/Headers/Heade1";
import Footer1 from "../sections/Footer/Footer1";

interface Layout1Props {
  children: ReactNode;
}

const Layout1: React.FC<Layout1Props>=({ children }) => {
  return (
    <>
      <Header1 />
      <main style={{minHeight:"80vh"}}>{children}</main>
      <Footer1 />
    </>
  );
};

export default Layout1;
