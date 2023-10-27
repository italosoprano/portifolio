import React from "react"

export default function Projects() {
    return(
        <>
            <section class="projects-section bg-light" id="projects">
                <div class="container px-4 px-lg-5">
                    <div class="row gx-0 mb-4 mb-lg-5 align-items-center">
                        <div class="col-xl-8 col-lg-7"><a href="#!"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg" alt="..." /></a>
                        </div>
                        <div class="col-xl-4 col-lg-5">
                            <div class="featured-text text-center text-lg-left">
                                <h4>Weather Report</h4>
                                <p class="text-black-50 mb-0">
                                Projeto desenvolvido com uso de React e Bootstrap. A Aplicação faz a consumação de uma API grátuita de previsao do tempo, permitindo que o usuario veja a previsão do tempo de qualquer localidade que ele quiser. As informações são recebidas em formas de Json e passadas para os componentes por meio de props. Disponivel no Github Pages, basta clicar na imagem ou <a href="#!">aqui</a>.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-0 mb-5 mb-lg-0 justify-content-center">
                        <div class="col-lg-6"><a href="#!"><img class="img-fluid" src="assets/img/demo-image-01.jpg" alt="..." /></a></div>
                        <div class="col-lg-6">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 class="text-white">Projeto Cordel</h4>
                                        <p class="mb-0 text-white-50">Similar ao projeto anterior, esse foi desenvolvido também com uso de Media Querys e efeito paralax nas imagens, causando um efeito quando a tela e scrollada. Disponivel no Github Pages, basta clicar na imagem ou <a href="#!">aqui</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row gx-0 justify-content-center">
                        <div class="col-lg-6"><a href="#!"><img class="img-fluid" src="assets/img/demo-image-02.jpg" alt="..." /></a></div>
                        <div class="col-lg-6 order-lg-first">
                            <div class="bg-black text-center h-100 project">
                                <div class="d-flex h-100">
                                    <div class="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 class="text-white">Weather Report</h4>
                                        <p class="mb-0 text-white-50">Projeto desenvolvido com uso de React e Bootstrap. A Aplicação faz a consumação de uma API grátuita de previsao do tempo, permitindo que o usuario veja a previsão do tempo de qualquer localidade que ele quiser. As informações são recebidas em formas de Json e passadas para os componentes por meio de props. Disponivel no Github Pages, basta clicar na imagem ou <a href="#!">aqui</a>.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}