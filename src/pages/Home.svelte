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
                    Zmniejsz swoje rachunki za ogrzewanie jednym prostym trikiem
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
                            dziecko lub polityk.
                        </p>
                    </div>
                </div>

                <div class="col s12 m4">
                    <div class="icon-block">
                        <h2 class="center light-blue-text">
                            <i class="material-icons">group</i>
                        </h2>
                        <h5 class="center">Sprawdzony Przez Miliony</h5>

                        <p class="light">
                            System co prawda testowały tylko trzy osoby ale
                            testowały go bardzo dużo razy więc to w sumie prawie
                            tak jakby testowały go miliony.
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
                            Nasz system oparty jest na najnowszych osiągnięciach
                            nauki takich jak termometr z botlandu, serwo od pana
                            Krzysztofa z elektronicznego i Arduino z PW.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <br /><br />
    </div>
</div>
