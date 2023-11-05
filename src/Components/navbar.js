import React from 'react'

export const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg" style={{ backgroundColor: 'skyblue' }}>
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Home</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-link active" aria-current="page" href="#">About Us</a>
                            <a class="nav-link" href="#">Contact Us</a>
                            <a class="nav-link" href="#">Jobs</a>
                            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Business</a>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}
