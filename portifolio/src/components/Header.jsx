import React from "react";

export default function Header() {
    return(
        <>
            <header class="masthead">
                <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                    <div class="d-flex justify-content-center">
                        <div class="text-center">
                            <h1 class="mx-auto my-0 text-uppercase">Front-end</h1>
                            <h2 class="text-white-50 mx-auto mt-2 mb-5">HTML, CSS, JavaScript, React, Bootstrap, Typescript.</h2>
                            <a class="btn btn-primary" href="#about">Get Started</a>
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}