---
title: Tu segunda extensión
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
---

{{AddonSidebar}}

Si ya ha visto el artículo [tu primer extensión](/es/Add-ons/WebExtensions/Tu_primera_WebExtension), ya posee una idea de como escribir una extensión. En este artículo se escribirá una extensión ligeramente más compleja para demostrar un par de cosas más de las APIs.

La extensión añade un nuevo botón a la barra de herramientas de Firefox. Cuando el usuario da clic sobre el botón, mostraremos una ventana emergente que permite escoger un animal. Una vez que un animal sea escogido, reemplazaremos todas las imágenes en la página actual con la imagen del animal seleccionado.

Para implementar esto, haremos lo siguiente:

- **Definir una [acción del navegador](/es/Add-ons/WebExtensions/user_interface/Browser_action), que será el botón añadido a la barra de herramientas de Firefox**.
  Para el botón vamos a proporcionar:

  - un icono, llamado "beasts-32.png"
  - una ventana emergente para abrir cuando el botón sea presionado. La ventana emergente incluye HTML, CSS y JavaScript.

- **Define un ícono para la extensión,** llamado "beasts-48.png". Este será mostrado en el Administrador de Complementos.
- **Escribe un script de contenido, "beastify.js" que será inyectado dentro de las páginas web.**
  Este es el código que modificará las páginas web.
- **Empaqueta algunas imágenes de animales, para reemplazar las imágnes de la página web**.
  Nosotros haremos las imágenes "recursos web accesibles" para que la página web pueda referenciarlos.

Tu puedes notar que la estructura general de la extensión luce como esto:

![](untitled-1.png)

Esta es una extensión simple, pero muestra muchos de los principales conceptos de la API WebExtensions:

- Adicionando un botón a la barra de herramientas
- Definiendo un panel emergente usando HTML, CSS y JavaScript
- Inyectando scripts de contenido dentro de las páginas web
- Comunicándonos entre los scripts de contenido y el resto de la extensión
- Empaquetando recursos con tu extensión que pueden ser usados por las páginas web

Tu puedes encontrar el [código fuente completo de la extensión en GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify).

Para escribir una extensión, necesitará de Firefox 45 o más reciente.

## Escribiendo la extensión

Crea una carpeta nueva y navega hacia ella:

```bash
mkdir beastify
cd beastify
```

### manifest.json

Ahora crea un archivo llamado "manifest.json", y agrega el siguiente contenido:

```json
{
  "manifest_version": 2,
  "name": "Beastify",
  "version": "1.0",

  "description": "Agrega un icono de acción navegación a la barra de herramientas. Haga clic en el botón para elegir una bestia. El contenido del cuerpo de la pestaña activa se sustituye por una imagen de la bestia elegida. Consulte https://developer.mozilla.org/es/Add-ons/WebExtensions/Examples#beastify",
  "homepage_url": "https://github.com/mdn/webextensions-examples/tree/master/beastify",
  "icons": {
    "48": "icons/beasts-48.png"
  },

  "permissions": ["activeTab"],

  "browser_action": {
    "default_icon": "icons/beasts-32.png",
    "default_title": "Bestificar",
    "default_popup": "popup/choose_beast.html"
  },

  "web_accessible_resources": [
    "beasts/frog.jpg",
    "beasts/turtle.jpg",
    "beasts/snake.jpg"
  ]
}
```

- Las tres primeras llaves: [`manifest_version`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version) , [`name`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name) , y [`version`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) , son obligatorias y contienen los metadatos básicos para la extensión.
- [`description`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) y [`homepage_url`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/homepage_url) son opcionales, pero recomendadas: proporcionan información útil acerca de la extensión.
- [`icons`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) es opcional, pero recomedada: permite la especificación de un ícono para la extensión, que será mostrada en el Administrador de Complementos.
- [`permissions`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) lista los permisos que la extensión necesita. Aquí solo se pide el permiso de [`activeTab` permission](/es/Add-ons/WebExtensions/manifest.json/permissions#activeTab_permission).
- [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) especifica el botón de la barra de herramientas. Nosotros proveemos tres piezas de información aquí:

  - `default_icon` es obligatorio y enlaza al icono para el botón
  - `default_title` es opcional y será mostrado como descripción
  - `default_popup` es usado su tu quieres una ventana emergente que será mostrada cuando el usuario de clic en el botón. Lo hacemos y hemos incluido esta llave que apunta a un archivo HTML de la extensión.

- [`web_accessible_resources`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) lista los archivos que queremos hacer accesibles a las páginas web. Como la extensión reemplaza imágenes en una página con imágenes que hemos empaquetado, necesitamos hacer estas imágenes accesibles a la página.

Nota que todas las rutas dadas son relativas a manifest.json.

### El ícono

La extensión debería tener un íncono. Éste, será mostrado junto a la lista de complementos en el Administrador de Complementos (Pude abrirlo introduciendo en la URL "about:addons"). El manifest.json promete que se posee un ícono para la barra de herramientas en "icons/beasts-48.png".

Cree el directorio "icons" y guarde un ícono ahí y nómbrelo como "beasts-48.png". Puede utilizar [uno de nuestro ejemplo](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-48.png), el cual ha sido tomado del [conjuto de íconos Aha-Soft's Free Retina](https://www.iconfinder.com/iconsets/free-retina-icon-set), que es utilizado bajo el término de su propia [licencia](http://www.aha-soft.com/free-icons/free-retina-icon-set/).

Si elige proporcionar su propio ícono, debería ser de 48x48 pixeles. También puede proporcionar un ícono de 96x96 pixeles, para pantallas de altas resoluciones y, si usted hace esto, deberá especificarlo como la propiedad `96` del objeto `icons` en el manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### El botón de la barra de herramientas

El botón de la barra de herramientas necesita un ícono, y nuestro manifest.json promete eso y nos gustaría tener un ícono para la barra de herramientas en "icons/beasts-32.png".

Guarde un ícono llamado "beasts-32.png" en el directorio "icons". Tu podrías usar [uno de nuestros ejemplos](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png), los cuales son tomados desde el sitio [IconBeast Lite icon set](http://www.iconbeast.com/free) y empleados bajo sus términos de [licencia](http://www.iconbeast.com/faq/).

Si tu no provees una ventana emergente, entonces el evento clic es disparado hacia tu extensión cuando el usuario de clic sobre el botón. Si provees una ventana emergente entonces el evento clic no se disparará, pero en cambio, se muestra la ventana emergente. Nosotros queremos una ventana emergente, así que vamos a crearla.

### La ventana emergente

La función de la ventana emergente es habilitada si el usuario escoge una de los tres animales.

Crea una nueva carpeta llamada "popup" bajo la carpeta raíz de la extensión . Esta será donde pondremos el código para la ventana emergente. La carpeta "popup" contendrá estos tres archivos:

- **`choose_beast.html`** define el contenido del panel
- **`choose_beast.css`** los estilos CSS para el contenido
- **`choose_beast.js`** maneja las opciones del usuario ejecutando un script de contenido en la pestaña activa

#### choose_beast.html

El archivo HTML luce así:

```html
<!doctype html>

<html>
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <div class="button beast">Frog</div>
      <div class="button beast">Turtle</div>
      <div class="button beast">Snake</div>
      <div class="button reset">Reset</div>
    </div>
    <div id="error-content" class="hidden">
      <p>Can't beastify this web page.</p>
      <p>Try a different page.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

Tenemos un elemento `<div>` con un ID `"popup-content"` que contiene un elemento para cada elección de animal. Además, tenemos otro `<div>` con un ID `"error-content"` y una clase `"hidden"`, que usaremos en el case de que surja algún problema al inicializar la ventana emergente.

Note que referenciamos los archivos CSS y JS en el HTML como lo haríamos si se tratase de una página web.

#### choose_beast.css

El CSS ajusta el tamaño de la ventana emergente, se asegura que las tres posibles opciones llenen el espacio y les da un poco de estilo básico. Además oculta los elementos con `class="hidden"`: esto significa que nuestro `"error-content"` `<div>` estará oculto por defecto.

```css
html,
body {
  width: 100px;
}

.hidden {
  display: none;
}

.button {
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
}

.beast:hover {
  background-color: #cff2f2;
}

.beast {
  background-color: #e5f2f2;
}

.reset {
  background-color: #fbfbc9;
}

.reset:hover {
  background-color: #eaea9d;
}
```

#### choose_beast.js

Aquí está el JavaScript para la ventana emergente:

```js
/**
 * CSS para ocultar toda la página
 * Excepto los elementos que pertenecen a la clase "beastify-image".
 */
const hidePage = `body > :not(.beastify-image) {
                    display: none;
                  }`;

/**
 * Esucha los clicks en los botones y envía el mensaje apropiado
 * al script de contenido de la página.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Recibe el nombre de una bestia y obtiene la URL de la imagen correspondiente.
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Frog":
          return browser.extension.getURL("beasts/frog.jpg");
        case "Snake":
          return browser.extension.getURL("beasts/snake.jpg");
        case "Turtle":
          return browser.extension.getURL("beasts/turtle.jpg");
      }
    }

    /**
     * Inserta dentro de la pestaña activa el CSS que oculta la página
     * luego toma la URL de la imagen y
     * envía un mensaje "beastify" al script de contenido de la pestaña activa.
     */
    function beastify(tabs) {
      browser.tabs.insertCSS({ code: hidePage }).then(() => {
        let url = beastNameToURL(e.target.textContent);
        browser.tabs.sendMessage(tabs[0].id, {
          command: "beastify",
          beastURL: url,
        });
      });
    }

    /**
     * Remueve el CSS que oculta la página y
     * envía un mensaje de "reset" al script de contenido de la pestaña activa.
     */
    function reset(tabs) {
      browser.tabs.removeCSS({ code: hidePage }).then(() => {
        browser.tabs.sendMessage(tabs[0].id, {
          command: "reset",
        });
      });
    }

    /**
     * Imprime el error en consola.
     */
    function reportError(error) {
      console.error(`Could not beastify: ${error}`);
    }

    /**
     * Toma la pestaña activa y
     * llama a "beastify()" o "reset()" según corresponda.
     */
    if (e.target.classList.contains("beast")) {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
        .catch(reportError);
    } else if (e.target.classList.contains("reset")) {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(reset)
        .catch(reportError);
    }
  });
}

/**
 * Si hubo algún error al ejecutar el script,
 * Despliega un popup con el mensaje de error y oculta la UI normal.
 */
function reportExecuteScriptError(error) {
  document.querySelector("#popup-content").classList.add("hidden");
  document.querySelector("#error-content").classList.remove("hidden");
  console.error(`Failed to execute beastify content script: ${error.message}`);
}

/**
 * Cuando se carga la ventana emergente, inyecta el script de contenido en la pestaña activa,
 * y agrega un manejador de eventos.
 * Si no es posible inyectar el script, se ocupa de manejar el error.
 */
browser.tabs
  .executeScript({ file: "/content_scripts/beastify.js" })
  .then(listenForClicks)
  .catch(reportExecuteScriptError);
```

Empecemos por la linea 96. La ventana emergente ejecuta un script de contenido en la pestaña activa tan pronto como se termina de cargar, usando la API [`browser.tabs.executeScript()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Si la ejecución del script de contenido es exitosa, este quedará cargado en la página hasta que sea cerrada la pestaña o hasta que el usuario navegue hacia una página distinta.

> **Nota:** Un motivo común por el cual el llamado a `browser.tabs.executeScript()` puede fallar, es porque no es posible ejecutar scripts de contenido en todas las páginas, por ejemplo, en páginas de navegador privilegiadas como about:debugging, o páginas del dominio [addons.mozilla.org](https://addons.mozilla.org/), no es posible hacerlo.

Si la ejecución falla, `reportExecuteScriptError()` ocultará el `<div>` `"popup-content"`, mostrará el `<div>` `"error-content"`, y reportará el error en la consola.

Si la ejecución del script de contenido es exitosa, se llamará a `listenForClicks()`, que atiende los eventos que se generan al cliquear en la ventana emergente.

- Si el clic se produjo en el botón con `class="beast"`, se llama a `beastify()`.
- Si el clic se produjo en el botón con `class="reset"`, se llama a `reset()`.

La función `beastify()` hace tres cosas:

- map the button clicked to a URL pointing to an image of a particular beast
- Oculta todo el contenido de la página al insertar CSS con la API [`browser.tabs.insertCSS()`](/es/Add-ons/WebExtensions/API/tabs/insertCSS)
- Envía un mensaje "beastify" al script de contenido usando la API [`browser.tabs.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), solicitándole "bestificar" la página, y enviándole la URL de la imagen.

La función `reset()` deshace lo hecho por `beastify()`:

- Remueve el CSS que agregó, usando la API [`browser.tabs.removeCSS()`](/es/Add-ons/WebExtensions/API/tabs/removeCSS)
- Envía un mensaje de "reset" al script de contenido, solicitándole que resetee la página

### El script de contenido

Crea una carpeta nueva bajo la raíz del complemento llamada "content_scripts" y crea un nuevo archivo en ella llamado "beastify.js", con el contenido siguiente:

```js
(function () {
  /**
   * Revisa e inicializa una variable de guardia.
   * Si este script de contenido es insertado más de una vez
   * en la misma página, dejará de ejecutarse.
   */
  if (window.hasRun) {
    return;
  }
  window.hasRun = true;

  /**
   * Recibe la URL de la imagen, remueve las que se hayan agregado antes,
   * crea un nodo IMG que apunt hacia la imagen
   * e inserta ese nodo en el documento.
   */
  function insertBeast(beastURL) {
    removeExistingBeasts();
    let beastImage = document.createElement("img");
    beastImage.setAttribute("src", beastURL);
    beastImage.style.height = "100vh";
    beastImage.className = "beastify-image";
    document.body.appendChild(beastImage);
  }

  /**
   * Remueve todas las bestias de la página.
   */
  function removeExistingBeasts() {
    let existingBeasts = document.querySelectorAll(".beastify-image");
    for (let beast of existingBeasts) {
      beast.remove();
    }
  }

  /**
   * Atiende mensajes del script de segundo plano.
   * Llama a "beastify()" o "reset()".
   */
  browser.runtime.onMessage.addListener((message) => {
    if (message.command === "beastify") {
      insertBeast(message.beastURL);
    } else if (message.command === "reset") {
      removeExistingBeasts();
    }
  });
})();
```

Lo primero que hace el script de contenido es revisar la variable global `window.hasRun`: si está inicializada termina su ejecución, sino, la inicializa y continúa. La razón por la que hacemos esto es porque cada vez que el usuario abre la ventana emergente, se vuelve a ejecutar el script de contenido en la pestaña activa, por lo que podríamos tener múltiples instancias del script ejecutandose en una sola pestaña. Si esto sucede, necesitamos asegurarnos de que sea sólo la primera instancia la que vaya a realizar cambios.

Luego, en la linea 40, donde el script de contenido atiende mensajes provenientes de la ventana emergente (usando la API [`browser.runtime.onMessage`](/es/Add-ons/WebExtensions/API/runtime/onMessage)), vemos que ésta puede enviar dos mensajes diferentes: "beastify" y "reset".

- si el mensaje es "beastify", esperamos que contenga la URL de la imagen. Removemos el contenido que ha sido agregado por el anterior llamado a "beastify", y luego construimos y añadimos un elemento [`<img>`](/es/docs/Web/HTML/Element/img) cuyo atributo `src` contiene la URL de la imagen.
- si el mensaje es "reset", simplemente removemos cualquier imagen que haya sido agregada antes.

### Las bestias

Finalmente, necesitamos incluir las imágenes de los animales.

Crea una carpeta nueva llamada "beasts", y adiciona tres imágenes en ella, con su nombre apropiado. Tu puedes obtener estas imágenes desde el [repositorio en GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts), o desde aquí:

![](frog.jpg)![](snake.jpg)![](turtle.jpg)

## Probándolo

Primero, comprueba nuevamente que tienes todos los archivos necesarios en el lugar adecuado:

```plain
beastify/

    beasts/
        frog.jpg
        snake.jpg
        turtle.jpg

    content_scripts/
        beastify.js

    icons/
        beasts-32.png
        beasts-48.png

    popup/
        choose_beast.css
        choose_beast.html
        choose_beast.js

    manifest.json
```

Comenzando con Firefox 45, pueden instalar temporalmente una extensión desde el disco.

Abre "about:debugging" en Firefox, de clic en "Cargar complemento temporalmente", y seleccione el archivo manifest.json. Entonces, debería de ver el ícono de la extensión aparecer en la barra de herramientas de Firefox:

{{EmbedYouTube("sAM78GU4P34")}}

Abra una página web, luego haga clic sobre el ícono, seleccione una bestia, y vea cómo cambia la página web:

{{EmbedYouTube("YMQXyAQSiE8")}}

## Desarrollo desde la línea de comandos

Puede automatizar el paso de instalación temporal mediante la herramienta [web-ext](/es/Add-ons/WebExtensions/Getting_started_with_web-ext). Pruebe esto:

```bash
cd beastify
web-ext run
```
