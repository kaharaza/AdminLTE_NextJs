export default function Heander() {
  return (
    <>
      <nav className="main-header navbar navbar-expand navbar-white navbar-light px-3">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a
              className="nav-link"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fas fa-bars"></i>
            </a>
          </li>
        </ul>
      
        <ul className="navbar-nav ml-auto">
          <a
            href="#"
            className="nav-link"
            data-widget="control-sidebar"
            data-controlsidebar-slide="true"
            role="button"
          >
            <i className="fa-solid fa-ellipsis-vertical"></i>
          </a>
        </ul>
      </nav>
    </>
  );
}
