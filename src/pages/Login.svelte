<script>
    import { navigate } from "svelte-routing";
    const onSubmit = (e) => {
        e.preventDefault();
        navigate("/control");
    };
</script>

<div class="container" style="min-height: 70vh;">
    <div class="section">
        <div class="row">
            <br />
            <br />

            <h3 class="header center">
                Zaloguj się aby uzyskać dostęp do Panelu Sterowania
            </h3>

            <br />
            <br />

            <form class="col s12 m4 offset-m4 center" on:submit={onSubmit}>
                <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <input id="icon_prefix" type="text" class="validate" />
                    <label for="icon_prefix">Adres Email</label>
                </div>
                <div class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input
                        id="icon_telephone"
                        type="password"
                        class="validate" />
                    <label for="icon_telephone">Hasło</label>
                </div>

                <br />

                <button
                    class="btn waves-effect waves-light"
                    type="submit"
                    name="action">
                    Zaloguj się
                    <i class="material-icons right">send</i>
                </button>

                <p>lub <a href="#!">stwórz nowe konto</a></p>
            </form>
        </div>
    </div>
</div>
