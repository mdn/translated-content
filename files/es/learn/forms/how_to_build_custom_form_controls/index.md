---
title: Cómo crear widgets de formularios personalizados
slug: Learn/Forms/How_to_build_custom_form_controls
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Forms/Form_validation", "Learn/HTML/Forms/Sending_forms_through_JavaScript", "Learn/HTML/Forms")}}

Hay muchos casos donde los [widgets de formularios HTML disponibles](/es/docs/HTML/Forms/The_native_form_widgets) simplemente no son suficientes. si desea [establecer un estilo avanzado](/es/docs/Advanced_styling_for_HTML_forms) en algunos widgets como el elemento {{HTMLElement("select")}} o si desea proporcionar comportamientos personalizados, no tiene más opción que crear sus propios widgets.

En este aartículo, veremos cómo construir dicho widget. Para ello, trabajaremos con un ejemplo: Reconstruir el elemento {{HTMLElement("select")}}.

> **Nota:** Nos enfocaremos en construir los widgets, no en cómo hacer que el código sea genérico y reutilizable; eso implicaría algún código JavaScript no trivial y manipulación del DOM en un contexto desconocido, y eso está fuera del alcance de este artículo.

## Diseño, estructura, y semántica

Antes de crear un widget personalizado, debería iniciar por averiguar exactamente qué es lo que desea. Esto le ahorarrá tiempo considerable. En particular, es importante definir claramente todos los estados de su widget. Para hacer esto, es bueno comenzar con un widget existente, cuyos estados y comportamientos son bien conocidos, por lo que simplemente puede imitarlos tanto como sea posible.

En nuestro ejemplo, reconstruiremos el elemento {{HTMLElement("select")}}. Este es el resultado que queremos lograr:

![The three states of a select box](/files/4481/custom-select.png)

Esta captura de pantall muestra los tres estados principales de nuestro widget: el estado normal (a la izquiera); el estado activo (en el centro) y el estado abierto (a la derecha).

En términos de comportamiento, queremos que nuestro widget sea utilizable tanto con un ratón como con un teclado, al igual que cualquier widget nativo. Comencemos por definir cómo el widget llega a cada estado:

El widget está en su estado normal cuando:

- La página carga
- El widget estaba activo y el usuario hace clic en cualquier lugar fuera del widget
- El widget estaba activo y el usuario mueve el foco a otro widget usando el teclado

> **Nota:** Mover el foco al rededor de la página generalmente se hace presionando la tecla de tabulación, pero este no es el estándar en todas partes. Por ejemplo, el ciclo a través de enlaces en una página se realiza en Safari de forma predeterminada usando la combinación [combinación Opction+Tab](https://www.456bereastreet.com/archive/200906/enabling_keyboard_navigation_in_mac_os_x_web_browsers/).

El widget está en su estado activo cuando:

- El usuario hace clic en él
- El usuario presiona la tecla tab y obtiene foco
- El widget estaba en su estado abierto y el usuario hace clic en el widget.

El widget está en su estado abierto cuando:

- El widget está en cualquier otro estado diferente a abierto y el usuario hace clic en él.

Una vez que sabemos cómo cambiar los estados, es importante definir cómo cambiar el valor del widget:

El valor cambia cuando:

- El usuario hace clic en una opción cuando el widget está en estado abierto
- El usuario pulsa las teclas de flecha hacia arriba o hacia abajocuando el widget está en estado activo

Finalmente, definamos cómo se comportarán las opciones del widget:

- Cuando se abre el widget, se resalta la opción seleccionada
- Cuando el ratón está sobre una opción, la opción se resalta y la opción resaltada anteriormente vuelve a su estado normal

Para los fines de nuestro ejemplo, nos detendremos con eso; sin embargo, si eres un lector cuidadoso, notarás que faltan algunos comportamientos. Por ejemplo, ¿qué crees que sucederá si el usuario pulsa la tecla de tabulación mientras el widget está en estado abierto? La respuesta es ... nada. OK, el comportamiento correcto parece obvio, pero el hecho es que, como no está definido en nuestras especificaciones, es muy fácil pasar por alto este comportamiento. Esto es especialmente cierto en un entorno de equipo cuando las personas que diseñan el comportamiento del widget son diferentes de las que lo implementan.

Otro ejemplo divertido: ¿qué pasará si el usuario pulsa las teclas de flecha hacia arriba o hacia abajo mientras el widget está en estado abierto? Este es un poco más complicado. Si considera que el estado activo y el estado abierto son completamente diferentes, la respuesta es nuevamente "no pasará nada" porque no definimos ninguna interacción de teclado para el estado abierto. Por otro lado, si considera que el estado activo y el estado abierto se superponen un poco, el valor puede cambiar pero la opción definitivamente no se resaltará en consecuencia, una vez más porque no definimos ninguna interacción del teclado sobre las opciones cuando el widget es en su estado abierto (solo hemos definido lo que debería suceder cuando se abre el widget, pero nada después de eso).

En nuestro ejemplo, las especificaciones faltantes son obvias, así que las manejaremos, pero puede ser un problema real en widgets nuevos y exóticos, para los cuales nadie tiene la menor idea de cuál es el comportamiento correcto. Por lo tanto, siempre es bueno pasar tiempo en esta etapa de diseño, porque si defines un comportamiento deficiente u olvidas definir uno, será muy difícil redefinirlo una vez que los usuarios se hayan acostumbrado. Si tiene dudas, solicite las opiniones de los demás y, si tiene el presupuesto para ello, no dude en realizar las pruebas de usuario. Este proceso se llama Diseño UX. Si desea obtener más información sobre este tema, debe consultar los siguientes recursos útiles:

- [UXMatters.com](https://www.uxmatters.com/)
- [UXDesign.com](https://uxdesign.com/)
- [The UX Design section of SmashingMagazine](https://uxdesign.smashingmagazine.com/)

> **Nota:** Ademas, en la mayoría de los sistemas hay una forma de abrir el elemento {{HTMLElement("select")}} para ver todas las opciones disponibles (esto es lo mismo que hacer clic en el elemento {{HTMLElement("select")}} con un ratón). Esto se logra con Alt+Flecha abajo en Windows y no fué implementado en nuestro ejemplo —pero sería facil hacerlo, ya que el mecanismo ya se implementó para el evento `clic`.

### Definiendo la estructura y semántica HTML

Ahora que se ha decidido la funcionalidad básica del widget, es hora de comenzar a construir nuestro widget. El primer paso es definir su estructura HTML y darle una semántica básica. Esto es lo que necesitamos para reconstruir un elemento {{HTMLElement("select")}}:

```html
<!-- Este es nuestro contenedor principal para nuestro widget.
     El atributo tabindex es lo que permite al usuario enforcar el widget.
     Veremos más adelante que es mejor configurarlo a través de JavaScript. -->
<div class="select" tabindex="0">
  <!-- Este contenedor será usado para mostrar el valor actual del widget -->
  <span class="value">Cherry</span>

  <!-- Este contenedor contedrá todas las opciones disponibles para nuestro widget.
       Como es una lista, tiene sentido usar el elemento ul. -->
  <ul class="optList">
    <!-- Cada opción solo contiene el valor que se mostrará, veremos más tarde
         cómo manejar el valor real que será enviado con el formulario de datos -->
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

Tenga en cuanta el uso de nombres de clases; estos identifican cada parte relevante independientemente de los elementos HTML subyacentes reales utilizados. Esto es importante para garantizar que no vinculamos nuestro CSS y JavaScript a una estructura HTML sólida, de modo que podamos realizar cambios despues en la implementación sin romper el código que usa el widget. Pro ejemplo, si desea implementar el equivalente del elemento {{HTMLElement("optgroup")}}.

### Creating the look and feel using CSS

Now that we have a structure, we can start designing our widget. The whole point of building this custom widget is to be able to style this widget exactly as we want. To that end, we will split our CSS work into two parts: the first part will be the CSS rules absolutely necessary to have our widget behave like a {{HTMLElement("select")}} element, and the second part will consist of the fancy styles used to make it look the way we want.

#### Required styles

The required styles are those necessary to handle the three states of our widget.

```css
.select {
  /* This will create a positioning context for the list of options */
  position: relative;

  /* This will make our widget become part of the text flow and sizable at the same time */
  display: inline-block;
}
```

We need an extra class `active` to define the look and feel of our widget when it is in its active state. Because our widget is focusable, we double this custom style with the {{cssxref(":focus")}} pseudo-class in order to be sure they will behave the same.

```css
.select.active,
.select:focus {
  outline: none;

  /* This box-shadow property is not exactly required, however it's so important to be sure
     the active state is visible that we use it as a default value, feel free to override it. */
  box-shadow: 0 0 3px 1px #227755;
}
```

Now, let's handle the list of options:

```css
/* The .select selector here is syntactic sugar to be sure the classes we define are
   the ones inside our widget. */
.select .optList {
  /* This will make sure our list of options will be displayed below the value
     and out of the HTML flow */
  position: absolute;
  top: 100%;
  left: 0;
}
```

We need an extra class to handle when the list of options is hidden. This is necessary in order to manage the differences between the active state and the open state that do not exactly match.

```css
.select .optList.hidden {
  /* This is a simple way to hide the list in an accessible way,
     we will talk more about accessibility in the end */
  max-height: 0;
  visibility: hidden;
}
```

#### Beautification

So now that we have the basic functionality in place, the fun can start. The following is just an example of what is possible, and will match the screenshot at the beginning of this article. However, you should feel free to experiment and see what you can come up with.

```css
.select {
  /* All sizes will be expressed with the em value for accessibility reasons
     (to make sure the widget remains resizable if the user uses the
     browser's zoom in a text-only mode). The computations are made
     assuming 1em == 16px which is the default value in most browsers.
     If you are lost with px to em conversion, try https://riddle.pl/emcalc/ */
  font-size: 0.625em; /* this (10px) is the new font size context for em value in this context */
  font-family: Verdana, Arial, sans-serif;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* We need extra room for the down arrow we will add */
  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */
  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  /* The first declaration is for browsers that do not support linear gradients.
     The second declaration is because WebKit based browsers haven't unprefixed it yet.
     If you want to support legacy browsers, try https://www.colorzilla.com/gradient-editor/ */
  background: #f0f0f0;
  background: -webkit-linear-gradient(90deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  /* Because the value can be wider than our widget, we have to make sure it will not
     change the widget's width */
  display: inline-block;
  width: 100%;
  overflow: hidden;

  vertical-align: top;

  /* And if the content overflows, it's better to have a nice ellipsis. */
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

We don't need an extra element to design the down arrow; instead, we're using the {{cssxref("::after")}} pseudo-element. However, it could also be implemented using a simple background image on the `select` class.

```css
.select:after {
  content: "▼"; /* We use the unicode caracter U+25BC; see https://www.utf8-chartable.de */
  position: absolute;
  z-index: 1; /* This will be important to keep the arrow from overlapping the list of options */
  top: 0;
  right: 0;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  height: 100%;
  width: 2em; /* 20px */
  padding-top: 0.1em; /* 1px */

  border-left: 0.2em solid #000; /* 2px */
  border-radius: 0 0.1em 0.1em 0; /* 0 1px 1px 0 */

  background-color: #000;
  color: #fff;
  text-align: center;
}
```

Next, let's style the list of options:

```css
.select .optList {
  z-index: 2; /* We explicitly said the list of options will always overlap the down arrow */

  /* this will reset the default style of the ul element */
  list-style: none;
  margin: 0;
  padding: 0;

  -moz-box-sizing: border-box;
  box-sizing: border-box;

  /* This will ensure that even if the values are smaller than the widget,
     the list of options will be as large as the widget itself */
  min-width: 100%;

  /* In case the list is too long, its content will overflow vertically
     (which will add a vertical scrollbar automatically) but never horizontally
     (because we haven't set a width, the list will adjust its width automatically.
     If it can't, the content will be truncated) */
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;

  border: 0.2em solid #000; /* 2px */
  border-top-width: 0.1em; /* 1px */
  border-radius: 0 0 0.4em 0.4em; /* 0 0 4px 4px */

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4); /* 0 2px 4px */
  background: #f0f0f0;
}
```

For the options, we need to add a `highlight` class to be able to identify the value the user will pick (or has picked).

```css
.select .option {
  padding: 0.2em 0.3em; /* 2px 3px */
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

So here's the result with our three states:

#### Basic state

```html hidden
<div class="select">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("",120,130)}}

#### Active state

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList hidden">
    <li class="option">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

{{EmbedLiveSample("",120,130)}}

#### Open state

```html hidden
<div class="select active">
  <span class="value">Cherry</span>
  <ul class="optList">
    <li class="option highlight">Cherry</li>
    <li class="option">Lemon</li>
    <li class="option">Banana</li>
    <li class="option">Strawberry</li>
    <li class="option">Apple</li>
  </ul>
</div>
```

```css hidden
.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #fff;
}
```

{{EmbedLiveSample("",120,130)}}

## Bring your widget to life with JavaScript

Now that our design and structure are ready, we can write the JavaScript code to make the widget actually work.

> **Advertencia:** The following code is educational and should not be used as-is. Among many things, as we'll see, it is not future-proof and it will not work on legacy browsers. It also has redundant parts that should be optimized in production code.

> **Nota:** Creating reusable widgets is something that can be a bit tricky. The [W3C Web Component draft](https://dvcs.w3.org/hg/webcomponents/raw-file/tip/explainer/index.html) is one of the answers to this specific issue. [The X-Tag project](http://x-tags.org/) is a test implementation of this specification; we encourage you to take a look at it.

### Why isn't it working?

Before we start, it's important to remember something very important about JavaScript: inside a browser, **it's an unreliable technology**. When you are building custom widgets, you'll have to rely on JavaScript because it's a necessary thread to tie everything together. However, there are many cases in which JavaScript isn't able to run in the browser:

- The user has turned off JavaScript: This is the most unusual case ever; very few people turn off JavaScript nowadays.
- The script is not loading. This is one of the most common cases, especially in the mobile world where the network is not very reliable.
- The script is buggy. You should always consider this possibility.
- The script is in conflict with a third party script. This can happen with tracking scripts or any bookmarklets the user uses.
- The script is in conflict with, or is affected by, a browser extension (such as Firefox's [NoScript](https://addons.mozilla.org/fr/firefox/addon/noscript/) extension or Chrome's [NotScripts](https://chrome.google.com/webstore/detail/notscripts/odjhifogjcknibkahlpidmdajjpkkcfn) extension).
- The user is using a legacy browser, and one of the features you require is not supported. This will happen frequently when you make use of cutting-edge APIs.

Because of these risks, it's really important to seriously consider what will happen if JavaScript isn't working. Dealing in detail with this issue is out of the scope of this article because it's closely linked to how you want to make your script generic and reusable, but we'll consider the basics of this in our example.

In our example, if our JavaScript code isn't running, we'll fall back to displaying a standard {{HTMLElement("select")}} element. To achieve this, we need two things.

First, we need to add a regular {{HTMLElement("select")}} element before each use of our custom widget. This is actually also required in order to be able to send data from our custom widget along with the rest of our form data; more about this later.

```html
<body class="no-widget">
  <form>
    <select name="myFruit">
      <option>Cherry</option>
      <option>Lemon</option>
      <option>Banana</option>
      <option>Strawberry</option>
      <option>Apple</option>
    </select>

    <div class="select">
      <span class="value">Cherry</span>
      <ul class="optList hidden">
        <li class="option">Cherry</li>
        <li class="option">Lemon</li>
        <li class="option">Banana</li>
        <li class="option">Strawberry</li>
        <li class="option">Apple</li>
      </ul>
    </div>
  </form>
</body>
```

Second, we need two new classes to let us hide the unneeded element (that is, the "real" {{HTMLElement("select")}} element if our script isn't running, or the custom widget if it is running). Note that by default, our HTML code hides our custom widget.

```css
.widget select,
.no-widget .select {
  /* This CSS selector basically says:
     - either we have set the body class to "widget" and thus we hide the actual {{HTMLElement("select")}} element
     - or we have not changed the body class, therefore the body class is still "no-widget",
       so the elements whose class is "select" must be hidden */
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

Now we just need a JavaScript switch to determine if the script is running or not. This switch is very simple: if at page load time our script is running, it will remove the `no-widget` class and add the `widget` class, thereby swapping the visibility of the {{HTMLElement("select")}} element and of the custom widget.

```js
window.addEventListener("load", function () {
  document.body.classList.remove("no-widget");
  document.body.classList.add("widget");
});
```

#### Without JS

Check out the [full source code](/es/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#no_js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}
```

{{EmbedLiveSample("Without_JS",120,130)}}

#### With JS

Check out the [full source code](/es/docs/Learn/Forms/How_to_build_custom_form_controls/Example_2#js).

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});
```

{{EmbedLiveSample("",120,130)}}

> **Nota:** If you really want to make your code generic and reusable, instead of doing a class switch it's far better to just add the widget class to hide the {{HTMLElement("select")}} elements, and to dynamically add the DOM tree representing the custom widget after every {{HTMLElement("select")}} element in the page.

### Making the job easier

In the code we are about to build, we will use the standard DOM API to do all the work we need. However, although DOM API support has gotten much better in browsers, there are always issues with legacy browsers (especially with good old Internet Explorer).

If you want to avoid trouble with legacy browsers, there are two ways to do so: using a dedicated framework such as [jQuery](https://jquery.com/), [$dom](https://github.com/julienw/dollardom), [prototype](http://prototypejs.org/), [Dojo](https://dojotoolkit.org/), [YUI](https://yuilibrary.com/), or the like, or by polyfilling the missing feature you want to use (which can easily be done through conditional loading, with the [yepnope](https://yepnopejs.com/) library for example).

The features we plan to use are the following (ordered from the riskiest to the safest):

1. {{domxref("element.classList","classList")}}
2. {{domxref("EventTarget.addEventListener","addEventListener")}}
3. [`forEach`](/es/docs/JavaScript/Reference/Global_Objects/Array/forEach) (This is not DOM but modern JavaScript)
4. {{domxref("element.querySelector","querySelector")}} and {{domxref("element.querySelectorAll","querySelectorAll")}}

Beyond the availability of those specific features, there is still one issue remaining before starting. The object returned by the {{domxref("element.querySelectorAll","querySelectorAll()")}} function is a {{domxref("NodeList")}} rather than an [`Array`](/es/docs/JavaScript/Reference/Global_Objects/Array). This is important because `Array` objects support the [`forEach`](/es/docs/JavaScript/Reference/Global_Objects/Array/forEach) function, but {{domxref("NodeList")}} doesn't. Because {{domxref("NodeList")}} really looks like an `Array` and because `forEach` is so convenient to use, we can easily add the support of `forEach` to {{domxref("NodeList")}} in order to make our life easier, like so:

```js
NodeList.prototype.forEach = function (callback) {
  Array.prototype.forEach.call(this, callback);
};
```

We weren't kidding when we said it's easy to do.

### Building event callbacks

The ground is ready, we can now start to define all the functions that will be used each time the user interacts with our widget.

```js
// This function will be used each time we want to deactivate a custom widget
// It takes one parameter
// select : the DOM node with the `select` class to deactivate
function deactivateSelect(select) {
  // If the widget is not active there is nothing to do
  if (!select.classList.contains("active")) return;

  // We need to get the list of options for the custom widget
  var optList = select.querySelector(".optList");

  // We close the list of option
  optList.classList.add("hidden");

  // and we deactivate the custom widget itself
  select.classList.remove("active");
}

// This function will be used each time the user wants to (de)activate the widget
// It takes two parameters:
// select : the DOM node with the `select` class to activate
// selectList : the list of all the DOM nodes with the `select` class
function activeSelect(select, selectList) {
  // If the widget is already active there is nothing to do
  if (select.classList.contains("active")) return;

  // We have to turn off the active state on all custom widgets
  // Because the deactivateSelect function fulfill all the requirement of the
  // forEach callback function, we use it directly without using an intermediate
  // anonymous function.
  selectList.forEach(deactivateSelect);

  // And we turn on the active state for this specific widget
  select.classList.add("active");
}

// This function will be used each time the user wants to open/closed the list of options
// It takes one parameter:
// select : the DOM node with the list to toggle
function toggleOptList(select) {
  // The list is kept from the widget
  var optList = select.querySelector(".optList");

  // We change the class of the list to show/hide it
  optList.classList.toggle("hidden");
}

// This function will be used each time we need to highlight an option
// It takes two parameters:
// select : the DOM node with the `select` class containing the option to highlight
// option : the DOM node with the `option` class to highlight
function highlightOption(select, option) {
  // We get the list of all option available for our custom select element
  var optionList = select.querySelectorAll(".option");

  // We remove the highlight from all options
  optionList.forEach(function (other) {
    other.classList.remove("highlight");
  });

  // We highlight the right option
  option.classList.add("highlight");
}
```

That's all you need in order to handle the various states of the custom widget.

Next, we bind these functions to the appropriate events:

```js
// We handle the event binding when the document is loaded.
window.addEventListener("load", function () {
  var selectList = document.querySelectorAll(".select");

  // Each custom widget needs to be initialized
  selectList.forEach(function (select) {
    // as well as all its `option` elements
    var optionList = select.querySelectorAll(".option");

    // Each time a user hovers their mouse over an option, we highlight the given option
    optionList.forEach(function (option) {
      option.addEventListener("mouseover", function () {
        // Note: the `select` and `option` variable are closures
        // available in the scope of our function call.
        highlightOption(select, option);
      });
    });

    // Each times the user click on a custom select element
    select.addEventListener("click", function (event) {
      // Note: the `select` variable is a closure
      // available in the scope of our function call.

      // We toggle the visibility of the list of options
      toggleOptList(select);
    });

    // In case the widget gain focus
    // The widget gains the focus each time the user clicks on it or each time
    // they use the tabulation key to access the widget
    select.addEventListener("focus", function (event) {
      // Note: the `select` and `selectList` variable are closures
      // available in the scope of our function call.

      // We activate the widget
      activeSelect(select, selectList);
    });

    // In case the widget loose focus
    select.addEventListener("blur", function (event) {
      // Note: the `select` variable is a closure
      // available in the scope of our function call.

      // We deactivate the widget
      deactivateSelect(select);
    });
  });
});
```

At that point, our widget will change state according to our design, but its value doesn't get updated yet. We'll handle that next.

#### Live example

```html hidden
<form class="no-widget">
  <select name="myFruit" tabindex="-1">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" tabindex="0">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener(
      "click",
      (event) => {
        toggleOptList(select);
      },
      false,
    );

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      if (event.keyCode === 27) {
        deactivateSelect(select);
      }
    });
  });
});
```

| Live example                                                                                |
| ------------------------------------------------------------------------------------------- |
| {{EmbedLiveSample("",120,130)}}                                                             |
| [Check out the source code](/es/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_3) |

### Handling the widget's value

Now that our widget is working, we have to add code to update its value according to user input and make it possible to send the value along with form data.

The easiest way to do this is to use a native widget under the hood. Such a widget will keep track of the value with all the built-in controls provided by the browser, and the value will be sent as usual when a form is submitted. There's no point in reinventing the wheel when we can have all this done for us.

As seen previously, we already use a native select widget as a fallback for accessibility reasons; we can simply synchronize its value with that of our custom widget:

```js
// This function updates the displayed value and synchronizes it with the native widget.
// It takes two parameters:
// select : the DOM node with the class `select` containing the value to update
// index  : the index of the value to be selected
function updateValue(select, index) {
  // We need to get the native widget for the given custom widget
  // In our example, that native widget is a sibling of the custom widget
  var nativeWidget = select.previousElementSibling;

  // We also need  to get the value placeholder of our custom widget
  var value = select.querySelector(".value");

  // And we need the whole list of options
  var optionList = select.querySelectorAll(".option");

  // We set the selected index to the index of our choice
  nativeWidget.selectedIndex = index;

  // We update the value placeholder accordingly
  value.innerHTML = optionList[index].innerHTML;

  // And we highlight the corresponding option of our custom widget
  highlightOption(select, optionList[index]);
}

// This function returns the current selected index in the native widget
// It takes one parameter:
// select : the DOM node with the class `select` related to the native widget
function getIndex(select) {
  // We need to access the native widget for the given custom widget
  // In our example, that native widget is a sibling of the custom widget
  var nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}
```

With these two functions, we can bind the native widgets to the custom ones:

```js
// We handle event binding when the document is loaded.
window.addEventListener("load", function () {
  var selectList = document.querySelectorAll(".select");

  // Each custom widget needs to be initialized
  selectList.forEach(function (select) {
    var optionList = select.querySelectorAll(".option"),
      selectedIndex = getIndex(select);

    // We make our custom widget focusable
    select.tabIndex = 0;

    // We make the native widget no longer focusable
    select.previousElementSibling.tabIndex = -1;

    // We make sure that the default selected value is correctly displayed
    updateValue(select, selectedIndex);

    // Each time a user clicks on an option, we update the value accordingly
    optionList.forEach(function (option, index) {
      option.addEventListener("click", function (event) {
        updateValue(select, index);
      });
    });

    // Each time a user uses their keyboard on a focused widget, we update the value accordingly
    select.addEventListener("keyup", function (event) {
      var length = optionList.length,
        index = getIndex(select);

      // When the user hits the down arrow, we jump to the next option
      if (event.keyCode === 40 && index < length - 1) {
        index++;
      }

      // When the user hits the up arrow, we jump to the previous option
      if (event.keyCode === 38 && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

In the code above, it's worth noting the use of the [`tabIndex`](/es/docs/Web/API/HTMLElement/tabIndex) property. Using this property is necessary to ensure that the native widget will never gain focus, and to make sure that our custom widget gains focus when the user uses his keyboard or his mouse.

With that, we're done! Here's the result:

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select">
    <span class="value">Cherry</span>
    <ul class="optList hidden">
      <li class="option">Cherry</li>
      <li class="option">Lemon</li>
      <li class="option">Banana</li>
      <li class="option">Strawberry</li>
      <li class="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");

    optionList.forEach((option) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });
  });
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.key === "Escape") {
        deactivateSelect(select);
      }
      if (event.key === "ArrowDown" && index < optionList.length - 1) {
        index++;
      }
      if (event.key === "ArrowUp" && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

| Live example                                                                                |
| ------------------------------------------------------------------------------------------- |
| {{EmbedLiveSample("",120,130)}}                                                             |
| [Check out the source code](/es/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_4) |

But wait a second, are we really done?

## Make it accessible

We have built something that works and though we're far from a fully-featured select box, it works nicely. But what we've done is nothing more than fiddle with the DOM. It has no real semantics, and even though it looks like a select box, from the browser's point of view it isn't one, so assistive technologies won't be able to understand it's a select box. In short, this pretty new select box isn't accessible!

Fortunately, there is a solution and it's called [ARIA](/es/docs/Accessibility/ARIA). ARIA stands for "Accessible Rich Internet Application", and it's [a W3C specification](https://www.w3.org/TR/wai-aria/) specifically designed for what we are doing here: making web applications and custom widgets accessible. It's basically a set of attributes that extend HTML so that we can better describe roles, states and properties as though the element we've just devised was the native element it tries to pass for. Using these attributes is dead simple, so let's do it.

### The `role` attribute

The key attribute used by [ARIA](/es/docs/Accessibility/ARIA) is the [`role`](/es/docs/Accessibility/ARIA/ARIA_Techniques) attribute. The [`role`](/es/docs/Accessibility/ARIA/ARIA_Techniques) attribute accepts a value that defines what an element is used for. Each role defines its own requirements and behaviors. In our example, we will use the [`listbox`](/es/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role) role. It's a "composite role", which means elements with that role expect to have children, each with a specific role (in this case, at least one child with the `option` role).

It's also worth noting that ARIA defines roles that are applied by default to standard HTML markup. For example, the {{HTMLElement("table")}} element matches the role `grid`, and the {{HTMLElement("ul")}} element matches the role `list`. Because we use a {{HTMLElement("ul")}} element, we want to make sure the `listbox` role of our widget will supersede the `list` role of the {{HTMLElement("ul")}} element. To that end, we will use the role `presentation`. This role is designed to let us indicate that an element has no special meaning, and is used solely to present information. We will apply it to our {{HTMLElement("ul")}} element.

To support the [`listbox`](/es/docs/Accessibility/ARIA/ARIA_Techniques/Using_the_listbox_role) role, we just have to update our HTML like this:

```html
<!-- We add the role="listbox" attribute to our top element -->
<div class="select" role="listbox">
  <span class="value">Cherry</span>
  <!-- We also add the role="presentation" to the ul element -->
  <ul class="optList" role="presentation">
    <!-- And we add the role="option" attribute to all the li elements -->
    <li role="option" class="option">Cherry</li>
    <li role="option" class="option">Lemon</li>
    <li role="option" class="option">Banana</li>
    <li role="option" class="option">Strawberry</li>
    <li role="option" class="option">Apple</li>
  </ul>
</div>
```

> **Nota:** Including both the `role` attribute and a `class` attribute is only necessary if you want to support legacy browsers that do not support the [CSS attribute selectors](/es/docs/CSS/Attribute_selectors).

### The `aria-selected` attribute

Using the [`role`](/es/docs/Accessibility/ARIA/ARIA_Techniques) attribute is not enough. [ARIA](/es/docs/Accessibility/ARIA) also provides many states and property attributes. The more and better you use them, the better your widget will be understood by assistive technologies. In our case, we will limit our usage to one attribute: `aria-selected`.

The `aria-selected` attribute is used to mark which option is currently selected; this lets assistive technologies inform the user what the current selection is. We will use it dynamically with JavaScript to mark the selected option each time the user chooses one. To that end, we need to revise our `updateValue()` function:

```js
function updateValue(select, index) {
  var nativeWidget = select.previousElementSibling;
  var value = select.querySelector(".value");
  var optionList = select.querySelectorAll(".option");

  // We make sure that all the options are not selected
  optionList.forEach(function (other) {
    other.setAttribute("aria-selected", "false");
  });

  // We make sure the chosen option is selected
  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}
```

Here is the final result of all these changes (you'll get a better feel for this by trying it with an assistive technology such as [NVDA](http://www.nvda-project.org/) or [VoiceOver](https://www.apple.com/accessibility/voiceover/)):

```html hidden
<form class="no-widget">
  <select name="myFruit">
    <option>Cherry</option>
    <option>Lemon</option>
    <option>Banana</option>
    <option>Strawberry</option>
    <option>Apple</option>
  </select>

  <div class="select" role="listbox">
    <span class="value">Cherry</span>
    <ul class="optList hidden" role="presentation">
      <li class="option" role="option" aria-selected="true">Cherry</li>
      <li class="option" role="option">Lemon</li>
      <li class="option" role="option">Banana</li>
      <li class="option" role="option">Strawberry</li>
      <li class="option" role="option">Apple</li>
    </ul>
  </div>
</form>
```

```css hidden
.widget select,
.no-widget .select {
  position: absolute;
  left: -5000em;
  height: 0;
  overflow: hidden;
}

.select {
  position: relative;
  display: inline-block;
}

.select.active,
.select:focus {
  box-shadow: 0 0 3px 1px #227755;
  outline: none;
}

.select .optList {
  position: absolute;
  top: 100%;
  left: 0;
}

.select .optList.hidden {
  max-height: 0;
  visibility: hidden;
}

.select {
  font-size: 0.625em; /* 10px */
  font-family: Verdana, Arial, sans-serif;

  box-sizing: border-box;

  padding: 0.1em 2.5em 0.2em 0.5em; /* 1px 25px 2px 5px */
  width: 10em; /* 100px */

  border: 0.2em solid #000; /* 2px */
  border-radius: 0.4em; /* 4px */

  box-shadow: 0 0.1em 0.2em rgba(0, 0, 0, 0.45); /* 0 1px 2px */

  background: #f0f0f0;
  background: linear-gradient(0deg, #e3e3e3, #fcfcfc 50%, #f0f0f0);
}

.select .value {
  display: inline-block;
  width: 100%;
  overflow: hidden;

  white-space: nowrap;
  text-overflow: ellipsis;
  vertical-align: top;
}

.select:after {
  content: "▼";
  position: absolute;
  z-index: 1;
  height: 100%;
  width: 2em; /* 20px */
  top: 0;
  right: 0;

  padding-top: 0.1em;

  box-sizing: border-box;

  text-align: center;

  border-left: 0.2em solid #000;
  border-radius: 0 0.1em 0.1em 0;

  background-color: #000;
  color: #fff;
}

.select .optList {
  z-index: 2;

  list-style: none;
  margin: 0;
  padding: 0;

  background: #f0f0f0;
  border: 0.2em solid #000;
  border-top-width: 0.1em;
  border-radius: 0 0 0.4em 0.4em;

  box-shadow: 0 0.2em 0.4em rgba(0, 0, 0, 0.4);

  box-sizing: border-box;

  min-width: 100%;
  max-height: 10em; /* 100px */
  overflow-y: auto;
  overflow-x: hidden;
}

.select .option {
  padding: 0.2em 0.3em;
}

.select .highlight {
  background: #000;
  color: #ffffff;
}
```

```js hidden
function deactivateSelect(select) {
  if (!select.classList.contains("active")) return;

  const optList = select.querySelector(".optList");

  optList.classList.add("hidden");
  select.classList.remove("active");
}

function activeSelect(select, selectList) {
  if (select.classList.contains("active")) return;

  selectList.forEach(deactivateSelect);
  select.classList.add("active");
}

function toggleOptList(select, show) {
  const optList = select.querySelector(".optList");

  optList.classList.toggle("hidden");
}

function highlightOption(select, option) {
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.classList.remove("highlight");
  });

  option.classList.add("highlight");
}

function updateValue(select, index) {
  const nativeWidget = select.previousElementSibling;
  const value = select.querySelector(".value");
  const optionList = select.querySelectorAll(".option");

  optionList.forEach((other) => {
    other.setAttribute("aria-selected", "false");
  });

  optionList[index].setAttribute("aria-selected", "true");

  nativeWidget.selectedIndex = index;
  value.innerHTML = optionList[index].innerHTML;
  highlightOption(select, optionList[index]);
}

function getIndex(select) {
  const nativeWidget = select.previousElementSibling;

  return nativeWidget.selectedIndex;
}

window.addEventListener("load", () => {
  const form = document.querySelector("form");

  form.classList.remove("no-widget");
  form.classList.add("widget");
});

window.addEventListener("load", () => {
  const selectList = document.querySelectorAll(".select");

  selectList.forEach((select) => {
    const optionList = select.querySelectorAll(".option");
    const selectedIndex = getIndex(select);

    select.tabIndex = 0;
    select.previousElementSibling.tabIndex = -1;

    updateValue(select, selectedIndex);

    optionList.forEach((option, index) => {
      option.addEventListener("mouseover", () => {
        highlightOption(select, option);
      });

      option.addEventListener("click", (event) => {
        updateValue(select, index);
      });
    });

    select.addEventListener("click", (event) => {
      toggleOptList(select);
    });

    select.addEventListener("focus", (event) => {
      activeSelect(select, selectList);
    });

    select.addEventListener("blur", (event) => {
      deactivateSelect(select);
    });

    select.addEventListener("keyup", (event) => {
      let index = getIndex(select);

      if (event.keyCode === 27) {
        deactivateSelect(select);
      }
      if (event.keyCode === 40 && index < optionList.length - 1) {
        index++;
      }
      if (event.keyCode === 38 && index > 0) {
        index--;
      }

      updateValue(select, index);
    });
  });
});
```

| Live example                                                                                      |
| ------------------------------------------------------------------------------------------------- |
| {{EmbedLiveSample("",120,130)}}                                                                   |
| [Check out the final source code](/es/docs/HTML/Forms/How_to_build_custom_form_widgets/Example_5) |

## Conclusion

We have seen all the basics of building a custom form widget, but as you can see it's not trivial to do, and often it's better and easier to rely on third-party libraries instead of coding them from scratch yourself (unless, of course, your goal is to build such a library).

Here are a few libraries you should consider before coding your own:

- [jQuery UI](https://jqueryui.com/)
- [msDropDown](https://github.com/marghoobsuleman/ms-Dropdown)
- [Nice Forms](https://www.emblematiq.com/lab/niceforms/)
- [And many more…](https://www.google.fr/search?q=HTML+custom+form+controls&ie=utf-8&oe=utf-8&aq=t&rls=org.mozilla:fr:official&client=firefox-a)

If you want to move forward, the code in this example needs some improvement before it becomes generic and reusable. This is an exercise you can try to perform. Two hints to help you in this: the first argument for all our functions is the same, which means those functions need the same context. Building an object to share that context would be wise. Also, you need to make it feature-proof; that is, it needs to be able to work better with a variety of browsers whose compatibility with the Web standards they use vary. Have fun!

{{PreviousMenuNext("Learn/HTML/Forms/Form_validation", "Learn/HTML/Forms/Sending_forms_through_JavaScript", "Learn/HTML/Forms")}}
