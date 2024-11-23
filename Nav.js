import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <Link class="navbar-brand" to="/showarticles">
          Museum
        </Link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link
                class="nav-link active"
                aria-current="page"
                to="/showarticles"
              >
                Show Articles
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/addarticles">
                Add Articles
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/updatearticles">
                Update Articles
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
