<template>
  <header class="top-header">
    <div class="content">
      <div class="container ">
        <nav class="navbar navbar-expand-lg navbar-dark">
          <div class="container-fluid">
            <a class="navbar-brand" href="#"><h1>Logo</h1></a>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navHeader"
              aria-expanded="false"
            >
              <i class="fas fa-bars"></i>
            </button>
            <div class="collapse navbar-collapse" id="navHeader">
              <ul class="navbar-nav ms-auto">
                <li class="close-button d-block d-lg-none">
                  <button
                    class="btn-close"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navHeader"
                    aria-expanded="false"
                  ></button>
                </li>
                <li class="nav-item">
                  <a class="nav-link active" aria-current="page" href="#"
                    >Home</a
                  >
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Link</a>
                </li>
                <li class="nav-item submenu">
                  <a class="nav-link submenu-toggle">
                    Dropdown

                    <i class="fas fa-angle-down"></i>
                  </a>
                  <ul class="submenu-menu">
                    <li><a class="submenu-item" href="#">Action</a></li>
                    <li>
                      <a class="submenu-item" href="#">Another action</a>
                    </li>
                    <li>
                      <a class="submenu-item" href="#">Something else here</a>
                    </li>
                  </ul>
                </li>
                <li class="nav-item">
                  <button class="btn btn-outline-light fw-bold border-2">
                    Get it Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div class="hero">
          <div class="row justify-content-center">
            <div class="col-lg-6">
              <h1 class="text-center fw-bold text-white mb-5">Our Customers</h1>
              <div class="input-group flex-nowrap align-items-center mb-4">
                <span class="search-icon"><i class="fas fa-search"></i></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Ask Your Question"
                />
                <span class="search-btn"
                  ><button class="btn btn-primary">Search</button></span
                >
              </div>
              <div
                class="popular-tags d-flex flex-wrap justify-content-start align-items-center "
              >
                <p class="text-light me-3 d-none d-md-block">Popular Tags :</p>
                <ul
                  class="list-unstyled d-flex justify-content-md-start justify-content-center flex-grow-1"
                >
                  <li class="me-2">
                    <a class="btn btn-outline-light border-2 btn-xs">Design</a>
                  </li>
                  <li class="me-2">
                    <a class="btn btn-outline-light border-2 btn-xs">Ui / Ux</a>
                  </li>
                  <li class="me-2">
                    <a class="btn btn-outline-light border-2 btn-xs"
                      >Front End</a
                    >
                  </li>
                  <li class="me-2">
                    <a class="btn btn-outline-light border-2 btn-xs"
                      >Back End</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="overlay"></div>
  </header>
</template>
