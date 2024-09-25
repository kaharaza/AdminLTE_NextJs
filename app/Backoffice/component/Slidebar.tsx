export default function Slidebar() {
    return (
      <>
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
          <div className="d-flex justify-content-between align-items-center">
            <a href="/" className="brand-link text-decoration-none">
              <span className="brand-text" style={{ fontWeight: 500 }}>
                <i className="fa-regular fa-circle-user"></i> {"Phop"}{" "}
                {"Mooraphun"}
              </span>
            </a>
            <a
              className="brand-link text-decoration-none"
              data-widget="pushmenu"
              href="#"
              role="button"
            >
              <i className="fa-solid fa-xmark text-white"></i>
            </a>
          </div>
          <div className="border"></div>
          <div className="sidebar">
            <nav className="mt-2">
              <ul
                className="nav nav-pills nav-sidebar flex-column"
                data-widget="treeview"
                role="menu"
                data-accordion="false"
              >
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link">
                    <i className="nav-icon fas fa-database"></i>
                    <p>
                      Lorem
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>

                  <ul className="nav nav-treeview">
                    <li
                      className={`nav-item`}
                    >
                      <a href={""} className="nav-link">
                        <i className="far fa-calendar nav-icon"></i>
                        <p>link 1</p>
                      </a>
                    </li>
                  </ul>
                </li>
                <li className="nav-item menu-open">
                  <a href="#" className="nav-link">
                    <i className="fa-solid fa-magnifying-glass-arrow-right nav-icon"></i>
                    <p>
                      Lorem
                      <i className="right fas fa-angle-left"></i>
                    </p>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="sidebar-box-absolute">
            <div
              className=" bg-white"
              style={{
                position: "absolute",
                bottom: 0,
                width: "100%",
                textAlign: "center",
              }}
            >
              {"Test"}
            </div>
          </div>
        </aside>
      </>
    );
}