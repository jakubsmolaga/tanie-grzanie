<script>
    import { link } from "svelte-routing";
</script>

<div style="min-height: 80vh;">
    <div class="section no-pad-bot" id="index-banner">
        <div class="container">
            <br /><br />
            <h1 class="header center orange-text">Przyszłość Ogrzewania</h1>
            <div class="row center">
                <h5 class="header col s12 light">
                    Uratuj planetę i zmniejsz swoje rachunki za ogrzewanie
                </h5>
            </div>
            <div class="row center">
                <a
                    use:link
                    href="/info"
                    id="download-button"
                    class="btn-large waves-effect waves-light orange">
                    Dowiedz się więcej
                </a>
            </div>
            <br /><br />
        </div>
    </div>

    <div class="container">
        <div class="section">
            <!--   Icon Section   -->
            <div class="row">
                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                            <i class="material-icons">flash_on</i>
                        </h2>
                        <h5 class="center">Szybka Instalacja</h5>

                        <p class="light">
                            Zamontowanie naszego systemu zajmuje mniej niż 5
                            minut. Jest to tak proste że da radę to zrobić nawet
                            dziecko.
                        </p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                            <i class="material-icons">group</i>
                        </h2>
                        <h5 class="center">Z Myślą O Użytkowniku</h5>

                        <p class="light">
                            Intuicyjna aplikacja sprawi że zarządzanie
                            ogrzewaniem będzie prostsze niż kiedykolwiek.
                        </p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                            <i class="material-icons">settings</i>
                        </h2>
                        <h5 class="center">Zaawansowana Technologia</h5>

                        <p class="light">
                            Nasz system oparty jest na nowoczesnych
                            rozwiązaniach z dziedziny Internetu Rzeczy.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
    </div>
</div>
