import React from "react";

export default function About(){
    return(
        <>
            <section class="about-section text-center" id="about">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-4 gx-lg-5 justify-content-center">
                        <div class="col-lg-8">
                            <h2 class="text-white mb-4">Sobre mim</h2>
                            <p class="text-white-50">
                                Sou um desenvolvedor front-end, com quase 2 anos de estudos e projetos, em busca de uma primeira oportunidade de ingressar no mercado de trabalho e aprimorar minhas habilidades.
                            </p>
                        </div>
                    </div>
                    <img class="img-fluid" src="assets/img/ipad.png" alt="..." />
                </div>
            </section>
        </>
    )
}