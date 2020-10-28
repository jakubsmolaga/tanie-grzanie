<script>
    import { link } from "svelte-routing";
</script>

<!-- Navbar -->
<nav class="light-blue lighten-1" role="navigation">
    <div class="nav-wrapper container">
        <a use:link id="logo-container" href="/" class="brand-logo">
            TanieGrzanie
        </a>
        <ul class="right hide-on-med-and-down">
            <li>
                <a use:link href="/info">
                    <div class="row">
                        <i class="material-icons col 6s">info</i>
                        Informacje
                    </div>
                </a>
            </li>
            <li>
                <a use:link href="/shop">
                    <div class="row">
                        <i class="material-icons col 6s">store</i>
                        Sklep
                    </div>
                </a>
            </li>
            <li>
                <a use:link href="/login">
                    <div class="row">
                        <i class="material-icons col 6s">cloud</i>
                        Panel Sterowania
                    </div>
                </a>
            </li>
        </ul>

        <ul id="nav-mobile" class="sidenav">
            <li>
                <a use:link href="/info">
                    <i class="material-icons">info</i>
                    Informacje
                </a>
            </li>
            <li>
                <a use:link href="/shop">
                    <i class="material-icons">store</i>
                    Sklep
                </a>
            </li>
            <li>
                <a use:link href="/login">
                    <i class="material-icons">cloud</i>
                    Panel Sterowania
                </a>
            </li>
        </ul>

        <a href="#!" data-target="nav-mobile" class="sidenav-trigger">
            <i class="material-icons">menu</i>
        </a>
    </div>
</nav>

<!-- Content -->
<slot />
