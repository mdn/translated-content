---
title: ¿Cuáles son las herramientas de desarrollo del navegador?
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
---

Todos los navegadores web modernos incluyen un potente conjunto de herramientas para desarrolladores. Estas herramientas hacen una variedad de cosas, desde inspeccionar HTML, CSS y JavaScript actualmente cargados, hasta mostrar qué activos ha solicitado la página y cuánto tiempo tardaron en cargarse. Este artículo explica cómo utilizar las funciones básicas de las herramientas de desarrollo de tu navegador.

> **Nota:** Antes de ejecutar los siguientes ejemplos, abre el [sitio de ejemplo para principiantes](http://mdn.github.io/beginner-html-site-scripted/) que creamos durante la serie de artículos [Introducción a la Web](/es/Learn/Getting_started_with_the_web). Lo deberías tener abierto mientras sigues los pasos que explicamos a continuación.

## Cómo abrir devtools en tu navegador

Las herramientas para desarrolladores (`devtools`) viven dentro de tu navegador en una subventana que se ve más o menos así, dependiendo del navegador que estés utilizando:

![Devtools](devtools_63_inspector.png)

¿Cómo la levantas? Existen tres distintas maneras:

- _**Teclado:** <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>I</kbd>_, excepto en

  - **Internet Explorer y Edge:**

    <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd>+<kbd>⌥</kbd>+<kbd>I</kbd>_

- _**Barra de menú:**_

  - **Firefox**: Menú ![Devtools](2014-01-10-13-08-08-f52b8c.png)

    _➤ Desarrollador web ➤ Alternar herramientas,_ o _➤ Herramientas_

    _➤ Alternar herramientas del desarrollador web_

  - **Chrome:** _Más herramientas ➤ Herramientas del desarrollador_
  - **Safari:** _Desarrollador ➤ Mostrar el inspector web._ Si no puedes ver el menú _Desarrollar_, ve a _Safari ➤ Preferencias ➤ Avanzado_ y marca la casilla de verificación _Mostrar menú desarrollador en la barra de menú_.
  - **Opera**: _Desarrollador ➤ Herramientas para desarrolladores_

- **_Menú contextual:_** Presiona y mantén presionado / haz clic con el botón derecho en un elemento en una página web (Ctrl-clic en Mac) y elige _Inspeccionar elemento_ en el menú contextual que aparece. (_Una ventaja adicional:_ este método, inmediatamente resalta el código del elemento en el que hiciste clic con el botón derecho).

![Inspector](inspector_context.png)

## El inspector: explorador del DOM y editor CSS

Las herramientas del desarrollador, generalmente se abren de forma predeterminada en el inspector, parecido a la siguiente captura de pantalla. Esta herramienta muestra cómo se ve el HTML en tu página en tiempo de ejecución, así como qué CSS se aplica a cada elemento de la página. También te permite modificar instantáneamente el HTML y CSS y ver los resultados de tus cambios reflejados en vivo en la ventana del navegador.

![Inspector resaltado](inspector_highlighted.png)

Si _no_ ves al inspector,

- Toca o haz clic en la pestaña _Inspector_.
- En Internet Explorer, toca/haz clic en _Explorador del DOM_ o presiona

  <kbd>Ctrl</kbd>

  \+

  <kbd>1</kbd>

  .

- En Microsoft Edge u Opera, toca/haz clic en Elementos.
- En Safari, los controles no se presentan con tanta claridad, pero deberías ver el HTML si no has seleccionado otra cosa para que aparezca en la ventana. Presiona el botón _Estilo_ para ver el CSS.

### Explorando el DOM con el inspector

Para empezar, haz clic con el botón derecho (Ctrl+clic) en un elemento HTML en el inspector del DOM y observa el menú contextual. Las opciones disponibles en el menú varían según el navegador, pero en su mayoría, las más importantes son las mismas:

![Inspector del DOM](dom_inspector.png)

- **Eliminar nodo** (A veces _Eliminar elemento_). Elimina el elemento actual.
- **Editar como HTML** (A veces _Agregar atributo_/_Editar texto_). Te permite cambiar el HTML y ver los resultados en tiempo real. Muy útil para depurar y probar.
- **:hover/:active/:focus**. Obliga a que se activen los estados de los elementos, para que puedas ver cómo se vería su estilo.
- **Copiar/Copiar como HTML**. Copie el HTML seleccionado actualmente.
- Algunos navegadores también disponen de _Copiar ruta CSS_ y _Copiar XPath_, para permitirte copiar el selector CSS o la expresión XPath que seleccionaría el elemento HTML actual.

Intenta editar algo de tu DOM ahora. Haz doble clic en un elemento o haz clic con el botón derecho del mouse y selecciona _Editar como HTML_ en el menú contextual. Puedes realizar los cambios que desees, pero no los puedes guardar.

### Explorar el editor CSS

De manera predeterminada, el editor CSS muestra las reglas CSS aplicadas al elemento seleccionado actualmente:

![Inspector CSS](css_inspector.png)

Estas características son especialmente útiles:

- Las reglas aplicadas al elemento actual se muestran en orden de mayor a menor especificidad.
- Haz clic en las casillas de verificación junto a cada declaración para ver qué pasaría si eliminaras la declaración.
- Haz clic en la pequeña flecha al lado de la abreviatura de cada propiedad para mostrar los nombres completos equivalentes de la propiedad.
- Haz clic en el nombre o valor de una propiedad para que aparezca un cuadro de texto, donde puedes ingresar un nuevo valor para obtener una vista previa en vivo de un cambio de estilo.
- Junto a cada regla está el nombre del archivo y el número de línea en el que se define la regla. Al hacer clic en esa regla, las herramientas de desarrollo saltan para mostrarlas en su propia vista, donde generalmente puedes editar y guardar.
- También puedes hacer clic en la llave de cierre de cualquier regla para que aparezca un cuadro de texto en una nueva línea, donde puedes escribir una declaración completamente nueva para tu página.

Notarás una serie de pestañas en las que se puede hacer clic en la parte superior del Visor CSS:

- _Calculado_: Muestra los estilos calculados para el elemento seleccionado actualmente (los valores finales normalizados que aplica el navegador).
- _Diseño_: En Firefox, esta área incluye dos secciones:

  - _Modelo de caja_: representa visualmente el modelo de caja del elemento actual, por lo que de un vistazo puedes identificar qué relleno, borde y margen se le aplica, y qué tan grande es su contenido.
  - _Cuadrícula_: Si la página que estás inspeccionando utiliza Grid CSS, esta sección te permite ver los detalles de la cuadrícula.

- _Fuentes_: En Firefox, la pestaña _Fuentes_ muestra los tipos de letra aplicados al elemento actual.

### Conocer más

Obtén más información sobre el Inspector en diferentes navegadores:

- [Inspector de páginas de Firefox.](/es/docs/Tools/Page_Inspector)
- [Explorador del DOM de Edge.](https://docs.microsoft.com/es-es/microsoft-edge/)
- [inspector del DOM de Chrome.](https://developers.google.com/web/tools/chrome-devtools/inspect-styles?utm_source=dcc&utm_medium=redirect&utm_campaign=2016q3) (el inspector de Opera funciona igual que este)
- [Safari inspector y explorador de estilos.](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## El depurador de JavaScript

El depurador de JavaScript te permite observar el valor de las variables y establecer puntos de interrupción, lugares en tu código en los que deseas pausar la ejecución e identificar los problemas que impiden que tu código se ejecute correctamente.

![Depurador de Firefox](firefox_debugger.png)

Para llegar al depurador:

**Firefox**: Selecciona ![](2014-01-10-13-08-08-f52b8c.png) ➤ _Desarrollador Web_ ➤ _Depurador_ o presiona <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>S</kbd> para abrir el depurador de JavaScript. Si ya estás viendo las herramientas, haz clic en la pestaña **Depurador**.

**Chrome**: Abre las herramientas para desarrolladores y luego selecciona la pestaña **Fuentes**. (Opera funciona de la misma manera).

**Edge e Internet Explorer 11**: presiona <kbd>F12</kbd> y luego <kbd>Ctrl</kbd>+<kbd>3</kbd>, o si ya estás viendo las herramientas, haz clic en la pestaña Depurador.

**Safari**: Abre las herramientas para desarrolladores y luego selecciona la pestaña Depurador.

### Explorando el depurador

En Firefox hay tres paneles en el depurador de JavaScript.

#### Lista de archivos

El primer panel de la izquierda contiene la lista de archivos asociados con la página que estás depurando. Selecciona el archivo con el que deseas trabajar de esta lista. Haz clic en un archivo para seleccionarlo y ver su contenido en el panel central del depurador.

![Lista de archivos](file_list.png)

#### Código fuente

Establece puntos de interrupción donde desees pausar la ejecución. En la siguiente imagen, el resaltado del número 18 muestra que la línea tiene un punto de interrupción establecido.

![Código fuente](source_code.png)

#### Ver expresiones y puntos de interrupción

El panel de la derecha muestra una lista de las expresiones en observación que has agregado y los puntos de interrupción que has establecido.

En la imagen, la primera sección, **Ver expresiones**, muestra que se ha agregado la variable `listItems`. Puedes expandir la lista para ver los valores del arreglo.

La siguiente sección, **Puntos de interrupción**, enumera los puntos de interrupción establecidos en la página. En `example.js`, se ha establecido un punto de interrupción en la instrucción `listItems.push(inputNewItem.value);`

Las dos últimas secciones solo aparecen cuando el código se está ejecutando.

La sección **Pila de llamadas** muestra qué código se ejecutó para llegar a la línea actual. Puedes ver que el código está en la función que maneja un clic del mouse y que el código está actualmente en pausa en el punto de interrupción.

La sección final, **Alcances**, muestra qué valores son visibles desde varios puntos dentro de tu código. Por ejemplo, en la siguiente imagen, puedes ver los objetos disponibles para el código en la función `addItemClick`.

![ver elementos](watch_items.png)

### Conocer más

Obtén más información sobre el depurador de JavaScript en diferentes navegadores:

- [Depurador de JavaScript en Firefox.](/es/docs/Tools/Debugger)
- [Depurador de Microsoft Edge.](https://docs.microsoft.com/es-es/microsoft-edge/devtools-guide/debugger)
- [Depurador de Chrome.](https://developers.google.com/web/tools/chrome-devtools/javascript/)
- [Depurador de Safari.](https://developer.apple.com/safari/tools/)

## La consola de JavaScript

La consola de JavaScript es una herramienta increíblemente útil para depurar JavaScript que no funciona como se esperaba. Te permite ejecutar líneas de JavaScript en la página actualmente cargada en el navegador e informa los errores encontrados cuando el navegador intenta ejecutar tu código. Para acceder a la consola en cualquier navegador:

Si las herramientas para desarrolladores ya están abiertas, haz clic o presiona la pestaña Consola.

De lo contrario, Firefox te permite abrir la consola directamente usando <kbd>Ctrl</kbd>+<kbd>Mayús</kbd>+<kbd>K</kbd> o usando el comando del menú: Menú ![](2014-01-10-13-08-08-f52b8c.png) _➤ Desarrollador web ➤ Consola web,_ o _Herramientas ➤ Desarrollador web ➤ Consola web._ En otro navegador, abre las herramientas para desarrolladores y luego haz clic en la pestaña Consola.

Esto te dará una ventana como la siguiente:

![Sólo consola](console_only.png)

Para ver qué sucede, intenta ingresar los siguientes fragmentos de código en la consola uno por uno (y luego presiona Intro):

```js
alert("hello!");
```

```js
document.querySelector("html").style.backgroundColor = "purple";
```

```js
const myWordmark = document.createElement("img");
myWordmark.setAttribute(
  "src",
  "https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png",
);
document.querySelector("h1").appendChild(myWordmark);
```

Ahora intenta ingresar las siguientes versiones incorrectas del código y ve lo que obtienes.

```js
alert('hello!);
```

```js
document.cheeseSelector("html").style.backgroundColor = "purple";
```

```js
const myWordmark = document.createElement("img");
myBanana.setAttribute(
  "src",
  "https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png",
);
document.querySelector("h1").appendChild(myWordmark);
```

Comenzarás a ver el tipo de errores que devuelve el navegador. A menudo, estos errores son bastante crípticos, ¡pero debería ser bastante sencillo resolver estos problemas!

### Conocer más

Obtén más información sobre la consola de JavaScript en diferentes navegadores:

- [Consola Web de Firefox.](/es/docs/Tools/Web_Console)
- [Consola de JavaScript Edge.](https://docs.microsoft.com/es-es/microsoft-edge/devtools-guide-chromium)
- [Consola JavaScript de Chrome.](https://developer.chrome.com/devtools/docs/console) (el inspector de Opera funciona de la misma manera)
- [Consola en Safari.](https://developer.apple.com/library/safari/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

## Ve también

- [Depurar HTML.](/es/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Depurar CSS.](/es/docs/Learn/CSS/Introduction_to_CSS/Debugging_CSS)
