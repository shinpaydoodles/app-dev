function login(){

    return(

        <div id="box_1">
            <form id="login" action="CODAK GALLERY WEBSITE.html">
                <h2>LOGIN</h2>
                <label for="username">Username</label>
                <br>
                <input id="username" name="username" type="text" placeholder="Enter Username" required>
                <br>
                <label for="pass_word">Password</label>
                <br>
                <input id="pass_word" name="pass_word" type="password" placeholder="Enter Password" required>
                <br>
                <input type="submit" value="LOGIN">
            </form>
        </div>

        <div id="box_2">
            <h1 id="codakheader" alt="logo">
            <h1 class="title">THE ICON CLUB</h1>

            <p>Don't have an account yet? <a href="signup.html">Sign up here</a></p>
        </div>

    );

}

export default login;