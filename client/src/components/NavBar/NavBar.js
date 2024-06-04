import "./NavBar.css";

function NavBar() {
  return (
    <div className="NavBar">
      <div class="nav">
        <div class="navItemContainer">
          <div class="navItem" data-index="0">
            Home
          </div>
          <div class="navItem" data-index="1">
            Pricing
          </div>
          <div class="navItem" data-index="2">
            About
          </div>
          <div class="navItem" data-index="3">
            Contact
          </div>
          <div class="navItemActiveContainer">
            <div class="navItemActive">
              <div class="navItemActiveLeft"></div>
              <div class="navItemActiveCenter"></div>
              <div class="navItemActiveRight"></div>
            </div>
            <div class="navItemActive">
              <div class="navItemActiveCopyLeft"></div>
              <div class="navItemActiveCopyCenter"></div>
              <div class="navItemActiveCopyRight"></div>
            </div>
          </div>
        </div>
        <div class="burgerMenu">
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div>
      <div class="mobileNav">
        <div class="mobileNavItem" data-index="0">
          Home
        </div>
        <div class="mobileNavItem" data-index="1">
          Pricing
        </div>
        <div class="mobileNavItem" data-index="2">
          About
        </div>
        <div class="mobileNavItem" data-index="3">
          Contact
        </div>
        <div class="mobilenavItemActiveContainer">
          <div class="mobilenavItemActive">
            <div class="mobilenavItemActiveCenter"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
