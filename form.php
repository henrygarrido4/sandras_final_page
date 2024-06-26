<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Decoraciones y Arreglos Personalizados" />
    <meta
      name="keywords"
      content="Decorations, Arreglos Personalizados, Bouquet, Vasos, Termos, Fresas con chocolate Contactanos"
    />
    <meta name="author" content="Henrry Garrido" />
    <title>Contact</title>


    <!-- FAVICON -->
    <link rel="shortcut icon" href="images/favicon.svg" type="image/x-icon" />

    <!-- CSS -->

    <link rel="stylesheet" href="css/style.css" />
    <link rel="stylesheet" href="css/contact.css" />

    <!-- GOOGLE FONT -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap"
      rel="stylesheet"
    />

    <!-- JS -->
    <script type="text/javascript" src="jquery.js" defer></script>
    <script type="text/javascript" src="validate.js" defer></script>
    <script type="text/javascript" src="js/contact.js" defer></script>

    <!-- FONT AWESOME -->

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
      integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />

    <!-- WHATSAPP SCRIPT -->
    <script type="text/javascript">
      window.onload = function () {
        (function (d, script) {
          script = d.createElement("script");
          script.type = "text/javascript";
          script.async = true;
          script.src = "https://w.app/widget-v1/uPBoce.js";
          d.getElementsByTagName("head")[0].appendChild(script);
        })(document);
      };
    </script>
</head>

<body class="bg-contact-form">

<!-- HEADER NAVBAR  -->
<header role="banner" class="primary-header">
      <div class="nav-container">
        <div class="nav-wrapper">
          <a href="index.html" class="logo"
            ><img src="images/logo_group.svg" height="47" alt="Sandra Logo"
          /></a>

          <nav role="navigation" class="main-nav">
            <ul aria-label="Primary" role="list" class="nav__list">
              <li class="nav__list-item">
                <a href="index.html" class="nav__link">Home</a>
              </li>
              <li class="nav__list-item">
                <a href="catalog.html" class="nav__link">Catalog</a>
              </li>
              <li class="nav__list-item">
                <a href="contact.php" class="nav__link">Contact Us</a>
              </li>
            </ul>
          </nav>

           <button
            class="toggle_btn"
            aria-label="Menu toggle"
            aria-expanded="false"
          >
            <i class="fa-solid fa-bars"></i>
          </button>

        <div class="dropdown_menu sticky">
          <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="catalog.html">Catalog</a></li>
            <li><a href="contact.php">Contact Us</a></li>
          </ul>
        </div>
      </div>
    </header>

    <!-- CONTACT CONTAINER -->
    <main role="main" class="">

      <section class="contact-container home-intro">
        <form role="form" action="" method="POST" id="form">
                    <div class="contact-left-title">
                    <h2>Contactanos</h2>
                    <hr />
                    </div>

                    <fieldset>
                        <label for="name">Nombre: <em>*</em></label>
                        <input class="contact-inputs" type="text" name="name" id="name" class="required" autocomplete="name" value="<?php echo $form['name'] ?>"> <?php echo $error['name'] ?>

                        <label for="phone">Telefono (000-000-0000): <em>*</em></label>
                        <input class="contact-inputs" type="text" name="phone" id="phone" class="required phoneUS" autocomplete="tel" value="<?php echo $form['phone'] ?>"> <?php echo $error['phone'] ?>


                        <label for="fax">Fax (000-000-0000): <em>*</em></label>
                        <input class="contact-inputs" type="text" name="fax" id="fax" autocomplete="off" value="<?php echo $form['fax'] ?>">

                        <label for="email">Email: <em>*</em></label>
                        <input class="contact-inputs" type="text" name="email" id="email" class="required email" autocomplete="email " value="<?php echo $form['email'] ?>"> <?php echo $error['email'] ?>


                        <label for="comments">Mensaje: <em>*</em></label>
                        <textarea class="contact-inputs-textarea"  name="comments" id="comments" autocomplete="off"><?php echo $form['comments'] ?></textarea>

                        <p class="required_msg">* required fields</p>

                        <input class="contact-submit" type="submit" name="submit" id="submit" >

                    </fieldset>
            </form>

            <div class="contact-right">
            <img src="images/contact-1.PNG" alt="Secretary Image" />
          </div>

     </section>

    </main>

     <!-- FOOTER -->
     <footer
      role="contentinfo"
      class="footer bg-footer padding-block-900 text-center-sm-only"
    >
      <div class="container">
        <div class="footer-grid">
          <div>
            <a href="index.html">
              <img src="images/Black.svg" alt="Sandras Creations Black Logo" />
            </a>
            <div class="card">
              <h2>Sucribete al Noticiero</h2>
              <p class="text-sm">
                Subscribete ahora para recibir nuevos informes de producto
                entrante.
              </p>
              <form name="submit-to-google-sheet">
                <input
                  autocomplete="email"
                  type="email"
                  name="Email"
                  placeholder="Introduzca su correo electronico"
                  required
                />
                <button class="button_subscribe btn-block">Subscribete</button>
              </form>
              <span id="msg"></span>
            </div>
            <div class="social-icons">
              <a
                href="https://www.instagram.com/sandrascreations2023/"
                aria-label="Visitanos a nuestra pagina de instagram para ver mas fotos y contactarnos."
                ><i class="fa-brands fa-square-instagram"></i
              ></a>
              <a
                href="https://www.google.com/search?q=facebook&sca_esv=676f50895ef768f0&sxsrf=ACQVn0_QOq8HRNbutRX1Fgt7LPjfAaOROw%3A1709578477474&source=hp&ei=7RjmZaCoGoXJkPIPooyJkAM&iflsig=ANes7DEAAAAAZeYm_ZgCkfwbrsgPJRGmfZ2r5XSZayIB&ved=0ahUKEwjg0vOOpNuEAxWFJEQIHSJGAjIQ4dUDCBc&uact=5&oq=facebook&gs_lp=Egdnd3Mtd2l6IghmYWNlYm9vazIREC4YgAQYsQMYgwEYxwEY0QMyCxAAGIAEGLEDGMkDMgsQABiABBixAxiDATIFEAAYgAQyCxAAGIAEGIoFGJIDMggQABiABBixAzIIEAAYgAQYsQMyCBAAGIAEGLEDMggQABiABBixAzIIEAAYgAQYsQNI0wpQAFiFCXAAeACQAQCYAWigAe0EqgEDNy4xuAEDyAEA-AEBmAIIoAL_BMICChAjGIAEGIoFGCfCAgQQIxgnwgITEC4YgAQYigUYxwEYrwEYjgUYJ8ICDhAuGIAEGLEDGMcBGNEDwgIREC4YgwEYxwEYsQMY0QMYgASYAwCSBwM3LjE&sclient=gws-wiz"
                aria-label="Contactanos en Facebook para mas informacion."
              >
                <i class="fa-brands fa-square-facebook"></i
              ></a>
            </div>
          </div>
          <div class="footer_padding text_black">
            <h3>Compania</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="catalog.html">Catalog</a></li>
              <li><a href="contact.php">Contact Us</a></li>
            </ul>
          </div>
          <div class="text_black">
            <h3>Contactanos</h3>
            <ul>
              <li>
                <a href="mailto:sandrascreations2140@gmail.com"
                  >sandrascreations2140@gmail.com</a
                >
              </li>
            </ul>
          </div>
        </div>
      </div>
      <p class="text-center text_black" style="padding-top: 1rem">
        &copy; 2024 Sandra's Creations. All rights reserved.
      </p>
    </footer>

    <script>
      const scriptURL =
        "https://script.google.com/macros/s/AKfycbwA86x5HhmMJpU97SB4lYprvmdS4CP5mxYue5CghACzYTOGTg5ZBBVyTm-PjLrrd5BuXA/exec";
      const form = document.forms["submit-to-google-sheet"];
      const msg = document.getElementById("msg");

      form.addEventListener("submit", (e) => {
        e.preventDefault();
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
          .then((response) => {
            msg.innerHTML = "Gracias por Subscribirte!";
            setTimeout(function () {
              msg.innerHTML = "";
            }, 5000);
            form.reset();
          })
          .catch((error) => console.error("Error!", error.message));
      });
    </script>
  </body>
</html>
</body>
</html>