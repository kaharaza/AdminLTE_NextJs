import ContentSidebar from "./ContentSidebar"
import Footer from "./Footer";
import Heander from "./Heander"
import Slidebar from "./Slidebar"

export default function Layout({ children }: any) {
  return (
    <>
      <Heander />
      <ContentSidebar />
      <Slidebar />
      <div className="wrapper">
        <div className="content-wrapper">
          <div className="pt-3"></div>
          <div className="content">
            <div className="container-fluid">{children}</div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
}