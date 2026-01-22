---
title: Tu segunda extensión
slug: Mozilla/Add-ons/WebExtensions/Your_second_WebExtension
l10n:
  sourceCommit: 09109b6f9444d22215ba330ec1e64e73980b2a6c
---

Si ya ha visto el artículo [tu primera extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Your_first_WebExtension), ya posee una idea de como escribir una extensión. En este artículo se escribirá una extensión ligeramente más compleja para demostrar un par de cosas más de las APIs.

La extensión añade un nuevo botón a la barra de herramientas de Firefox. Cuando el usuario da clic sobre el botón, mostraremos una ventana emergente que permite escoger un animal. Una vez que un animal sea escogido, reemplazaremos todas las imágenes en la página actual con la imagen del animal seleccionado.

Para implementar esto, haremos lo siguiente:

- **Definir una [acción del navegador](/es/docs/Mozilla/Add-ons/WebExtensions/user_interface/Toolbar_button), que será el botón añadido a la barra de herramientas de Firefox**.
  Para el botón vamos a proporcionar:
  - un ícono, llamado "beasts-32.png"
  - una ventana emergente para abrir cuando el botón sea presionado. La ventana emergente incluye HTML, CSS y JavaScript.

- **Define un ícono para la extensión,** llamado "beasts-48.png". Este será mostrado en el Administrador de Complementos.
- **Escribe un script de contenido, "beastify.js" que será inyectado dentro de las páginas web.**
  Este es el código que modificará las páginas web.
- **Empaqueta algunas imágenes de animales, para reemplazar las imágenes de la página web**.
  Declaramos las imágenes como "recursos web accesibles" para que la página web pueda referenciarlos.

Se puede visualizar la estructura general de la extensión así:

![El archivo manifest.json incluye íconos, acciones del navegador, incluyendo las ventanas emergentes, y recursos web accesibles. El recurso choose_beast de la ventana emergente llama al script beastify.js.](untitled-1.png)

Esta es una extensión simple, pero muestra muchos de los principales conceptos de la API WebExtensions:

- Adicionar un botón a la barra de herramientas
- Definir un panel emergente usando HTML, CSS y JavaScript
- Inyectar scripts de contenido dentro de las páginas web
- Comunicar entre los scripts de contenido y el resto de la extensión
- Empaquetar recursos con la extensión que pueden ser usados por las páginas web

Puedes encontrar el [código fuente completo de la extensión en GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify).

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

  "description": "Agrega un ícono de acción navegación a la barra de herramientas. Haga clic en el botón para elegir una bestia. El contenido del cuerpo de la pestaña activa se sustituye por una imagen de la bestia elegida. Consulte https://developer.mozilla.org/es/Add-ons/WebExtensions/Examples#beastify",
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
- [`icons`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) es opcional, pero recomendada: permite la especificación de un ícono para la extensión, que será mostrada en el Administrador de Complementos.
- [`permissions`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) lista los permisos que la extensión necesita. Aquí solo se pide el permiso de [`activeTab` permission](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions#activetab_permission).
- [`browser_action`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_action) especifica el botón de la barra de herramientas. Nosotros proveemos tres piezas de información aquí:
  - `default_icon` es obligatorio y enlaza al ícono para el botón
  - `default_title` es opcional y será mostrado como descripción
  - `default_popup` es usado si se desea mostrar una ventana emergente cuando el usuario dé clic en el botón. Nosotros sí la queremos, así que hemos incluido esta llave que apunta a un archivo HTML de la extensión.

- [`web_accessible_resources`](/es/docs/Mozilla/Add-ons/WebExtensions/manifest.json/web_accessible_resources) lista los archivos que queremos hacer accesibles a las páginas web. Como la extensión reemplaza imágenes en una página por imágenes que hemos empaquetado, necesitamos hacer que estas imágenes sean accesibles a la página.

Nota que todas las rutas dadas son relativas a manifest.json.

### El ícono

La extensión debería tener un ícono. Este será mostrado junto a la lista de complementos en el Administrador de Complementos (puedes visitar la URL "about:addons" para abrirlo). El manifest.json promete que se posee un ícono para la barra de herramientas en "icons/beasts-48.png".

Cree el directorio "icons" y guarde un ícono ahí y nómbrelo como "beasts-48.png". Puede utilizar [uno de nuestro ejemplo](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-48.png), el cual ha sido tomado del [conjunto de íconos Aha-Soft's Free Retina](https://www.aha-soft.com/free-icons/free-retina-icon-set/), que es utilizado bajo el término de su propia licencia.

Si elige proporcionar su propio ícono, debería ser de 48x48 pixeles. También puede proporcionar un ícono de 96x96 pixeles, para pantallas de altas resoluciones, y si haces esto, deberás especificarlo como la propiedad `96` del objeto `icons` en el manifest.json:

```json
"icons": {
  "48": "icons/beasts-48.png",
  "96": "icons/beasts-96.png"
}
```

### El botón de la barra de herramientas

El botón de la barra de herramientas necesita un ícono, y nuestro manifest.json promete que existe un ícono para la barra de herramientas en "icons/beasts-32.png".

Guarde un ícono llamado "beasts-32.png" en el directorio "icons". Se puede usar [uno de nuestros ejemplos](https://github.com/mdn/webextensions-examples/blob/master/beastify/icons/beasts-32.png), los cuales son tomados desde el sitio [IconBeast Lite icon set](http://www.iconbeast.com/free) y empleados bajo sus términos de [licencia](http://www.iconbeast.com/faq/).

Si usted no provee una ventana emergente, entonces el evento clic es disparado hacia su extensión cuando el usuario dé clic sobre el botón. Si provee una ventana emergente entonces el evento clic no se disparará, pero en cambio, se muestra la ventana emergente. Nosotros queremos una ventana emergente, así que vamos a crearla enseguida.

### La ventana emergente

La función de la ventana emergente es permitir al usuario escoger uno de los tres animales.

Crea una nueva carpeta llamada "popup" bajo la carpeta raíz de la extensión. Esta será donde pondremos el código para la ventana emergente. La carpeta "popup" contendrá estos tres archivos:

- **`choose_beast.html`** define el contenido del panel
- **`choose_beast.css`** los estilos CSS para el contenido
- **`choose_beast.js`** maneja las opciones del usuario ejecutando un script de contenido en la pestaña activa

```bash
mkdir popup
cd popup
touch choose_beast.html choose_beast.css choose_beast.js
```

#### choose_beast.html

El archivo HTML luce así:

```html
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <link rel="stylesheet" href="choose_beast.css" />
  </head>

  <body>
    <div id="popup-content">
      <button>Rana</button>
      <button>Tortuga</button>
      <button>Serpiente</button>
      <button type="reset">Resetear</button>
    </div>
    <div id="error-content" class="hidden">
      <p>No se puede "beastify" este sitio web.</p>
      <p>Intenta con una página diferente.</p>
    </div>
    <script src="choose_beast.js"></script>
  </body>
</html>
```

Tenemos un elemento [`<div>`](/es/docs/Web/HTML/Reference/Elements/div) con un ID `"popup-content"` que contiene un elemento para cada elección de animal. Además, tenemos otro `<div>` con un ID `"error-content"` y una clase `"hidden"`, que usaremos en el caso de que surja algún problema al inicializar la ventana emergente.

Note que referenciamos los archivos CSS y JS en el HTML como se hace con una página web.

#### choose_beast.css

El CSS ajusta el tamaño de la ventana emergente, se asegura que las tres posibles opciones llenen el espacio y les da un poco de estilo básico. Además oculta los elementos con `class="hidden"`. Esto significa que nuestro elemento `<div id="error-content"...` estará oculto por defecto.

```css
html,
body {
  width: 100px;
}

.hidden {
  display: none;
}

button {
  border: none;
  width: 100%;
  margin: 3% auto;
  padding: 4px;
  text-align: center;
  font-size: 1.5em;
  cursor: pointer;
  background-color: #e5f2f2;
}

button:hover {
  background-color: #cff2f2;
}

button[type="reset"] {
  background-color: #fbfbc9;
}

button[type="reset"]:hover {
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
 * Detecta los clics en los botones y envía el mensaje apropiado
 * al script de contenido de la página.
 */
function listenForClicks() {
  document.addEventListener("click", (e) => {
    /**
     * Recibe el nombre de una bestia y obtiene la URL de la imagen correspondiente.
     */
    function beastNameToURL(beastName) {
      switch (beastName) {
        case "Rana":
          return browser.extension.getURL("beasts/frog.jpg");
        case "Serpiente":
          return browser.extension.getURL("beasts/snake.jpg");
        case "Tortuga":
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
      console.error(`No se pudo ejecutar "beastify": ${error}`);
    }

    /**
     * Toma la pestaña activa y
     * llama a "beastify()" o "reset()" según corresponda.
     */
    if (e.target.tagName !== "BUTTON" || !e.target.closest("#popup-content")) {
      // Ignora un clic que no es sobre un botón en <div id="popup-content">.
      return;
    }
    if (e.target.type === "reset") {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(reset)
        .catch(reportError);
    } else {
      browser.tabs
        .query({ active: true, currentWindow: true })
        .then(beastify)
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
  console.error(
    `Error al ejecutar el script de contenido "beastify: ${error.message}`,
  );
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

Empecemos por la linea 99. La ventana emergente ejecuta un script de contenido en la pestaña activa tan pronto como se termina de cargar, usando la API [`browser.tabs.executeScript()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/executeScript). Si la ejecución del script de contenido es exitosa, este quedará cargado en la página hasta que sea cerrada la pestaña o el usuario navegue hacia una página distinta.

Un motivo común por el cual el llamdo a `browser.tabs.executeScript()` puede fallar es porque no se puede ejectuar scripts de contenido en todas las páginas. Por ejemplo, no se puede ejecutarlos en páginas de navegador privilegiadas como about:debugging o páginas del dominio [addons.mozilla.org](https://addons.mozilla.org/). Si falla, `reportExecuteScriptError()` ocultará el elemento `<div id="popup-content">`, mostrará el elemento `<div id="error-content"...` y reportará un error en la [consola](https://extensionworkshop.com/documentation/develop/debugging/).

Si la ejecución del script de contenido es exitosa, se llamará a `listenForClicks()`, que atiende los eventos que se generan al cliquear en la ventana emergente.

- Si el clic no se produjo en un botón en la ventana, lo ignoramos y no hacemos nada.
- Si el clic se produjo en el botón con `type="reset"`, se llama a `reset()`.
- Si el clic se produjo en cualquier otro botón (es decir, los de los animales), se llama a `beastify()`.

La función `beastify()` hace tres cosas:

- Asocia el botón con una URL de un imagen de un animal particular
- Oculta todo el contenido de la página al insertar CSS con la API [`browser.tabs.insertCSS()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/insertCSS)
- Envía un mensaje "beastify" al script de contenido usando la API [`browser.tabs.sendMessage()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/sendMessage), solicitándole "bestificar" la página, y enviándole la URL de la imagen.

La función `reset()` deshace lo hecho por `beastify()`:

- Remueve el CSS que agregó, usando la API [`browser.tabs.removeCSS()`](/es/docs/Mozilla/Add-ons/WebExtensions/API/tabs/removeCSS)
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

Lo primero que hace el script de contenido es revisar la variable global `window.hasRun`: si está inicializada termina su ejecución, sino, la inicializa y continúa. La razón por la que hacemos esto es porque cada vez que el usuario abre la ventana emergente, se vuelve a ejecutar el script de contenido en la pestaña activa, por lo que podríamos tener múltiples instancias del script ejecutándose en una sola pestaña. Si esto sucede, necesitamos asegurarnos de que sea sólo la primera instancia la que vaya a realizar cambios.

Luego, en la linea 40, donde el script de contenido atiende mensajes provenientes de la ventana emergente (usando la API [`browser.runtime.onMessage`](/es/docs/Mozilla/Add-ons/WebExtensions/API/runtime/onMessage)), vemos que ésta puede enviar dos mensajes diferentes: "beastify" y "reset".

- si el mensaje es "beastify", esperamos que contenga la URL de la imagen. Removemos el contenido que ha sido agregado por el anterior llamado a "beastify", y luego construimos y añadimos un elemento [`<img>`](/es/docs/Web/HTML/Reference/Elements/img) cuyo atributo `src` contiene la URL de la imagen.
- si el mensaje es "reset", simplemente removemos cualquier imagen que haya sido agregada antes.

### Las bestias

Finalmente, necesitamos incluir las imágenes de los animales.

Cree una carpeta nueva llamada "beasts", y adicione tres imágenes en ella, con su nombre apropiado. Usted puede obtener estas imágenes desde el [repositorio en GitHub](https://github.com/mdn/webextensions-examples/tree/master/beastify/beasts), o desde aquí:

![Una rana.](frog.jpg)

![Una boa esmeralda con rayas blancas.](snake.jpg)

![Una tortuga de orejas rojas.](turtle.jpg)

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

Ahora cargue la extensión como un complemento temporal. Abre "about:debugging" en Firefox, dé clic en "Cargar complemento temporalmente", y seleccione el archivo manifest.json. Entonces, debería ver que el ícono de la extensión aparece en la barra de herramientas de Firefox:

![El ícono en la barra de herramientas en Firefox](beastify_icon.png)

Abra una página web, luego haga clic sobre el ícono, seleccione una bestia y vea cómo cambia la página web:

![Una página reemplazada con el imagen de una tortuga](beastify_page.png)

## Desarrollo desde la línea de comandos

Puede automatizar el paso de instalación temporal mediante la herramienta [web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/). Pruebe esto:

```bash
cd beastify
web-ext run
```

## Que sigue?

Ahora que ha creado una extensión de web más avanzada para Firefox:

- [lea sobre la anatomía de una extensión](/es/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [explore los ejemplos de extensiones](/es/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [aprenda lo que necesite para desarrollar, probar y publicar su extensión](/es/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [continúe con su experiencia de aprendizaje](/es/docs/Mozilla/Add-ons/WebExtensions/What_next#continue_your_learning_experience).
