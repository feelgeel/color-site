import React from "react";

export default function NavBarFlexbox() {
  return (
    <div>
      <header class="masthead">
        <div class="centered">
          <div class="site-branding">
            <h1 class="site-title">Flexbox Menus</h1>
          </div>
        </div>
      </header>
      <main class="main-area">
        <div class="centered">
          <section class="menu-section">
            <h1 class="menu-heading">simple-menu</h1>
            <nav class="single-nav menu">
              <ul>
                <li>
                  {" "}
                  <a href="#">menu</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">services</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">testimonial</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">portofolio</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">blog</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">about</a>{" "}
                </li>
                <li>
                  {" "}
                  <a href="#">contact</a>{" "}
                </li>
              </ul>
            </nav>
          </section>
          <div class="centered">
            <section class="menu-section">
              <h1 class="menu-heading">advanced-menu</h1>
              <nav class="advanced-nav menu">
                <ul>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="icon">
                        <i class="fas fa-futbol"></i>
                      </div>
                      <div class="text">
                        football
                        <span>is great sport</span>
                      </div>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="#">
                      <div class="icon">
                        <i class="fas fa-film"></i>
                      </div>
                      <div class="text">
                        movies
                        <span>make life cute</span>
                      </div>
                    </a>{" "}
                  </li>

                  <li>
                    {" "}
                    <a href="#">
                      <div class="icon">
                        <i class="fas fa-camera"></i>
                      </div>
                      <div class="text">
                        camera
                        <span>make memories</span>
                      </div>
                    </a>{" "}
                  </li>
                </ul>
              </nav>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
