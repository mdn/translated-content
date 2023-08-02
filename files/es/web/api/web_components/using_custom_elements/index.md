---
title: Usando elementos personalizados
slug: Web/API/Web_components/Using_custom_elements
---

{{DefaultAPISidebar("Web Components")}}

Una de las características claves del estándar de Componentes Web es la capacidad de crear elementos personalizados que encapsulan tu funcionalidad en una página HTML, en vez de tener que hacerlo con una larga lista de elementos anidados que juntos proveen una funcionalidad o característica personalizada en una página. Este artículo presenta el uso del API de Elementos Personalizados.

> **Nota:** Los Elementos Personalizados funcionan por defecto en Firefox, Chrome, y Edge (76). Opera y Safari solo adminten Elementos Personalizados autónomos (que extienden HTMLElement).

## Vista de alto nivel

El controlador de los elementos personalizados en un documento web es el objeto {{domxref("CustomElementRegistry")}} — este objeto te permite registrar un elemento personalizado en la página, devolver información de qué elementos personalizados se han registrado, etc.

Para registrar un elemento personalizado en la página, debes usar el método {{domxref("CustomElementRegistry.define()")}} . Éste toma los siguientes argumentos:

- Un {{domxref("DOMString")}} que representa el nombre que estás dando al elemento. Nótese que los nombres de los elementos personalizados [deben contener un guión](https://stackoverflow.com/questions/22545621/do-custom-elements-require-a-dash-in-their-name) (kebab-case); Los nombres no pueden ser palabras simples.
- Un objeto [class](/es/docs/Web/JavaScript/Reference/Classes) que define el comportamiento del ejemplo.
- Opcionalmente, un objeto de opciones que contiene la propiedad `extends` , que especifica el elemento preconstruido del que hereda (solo es relevante para elementos personalizados preconstruidos; ver la definición más abajo).

Entonces por ejemplo, podríamos definir un elemento personalizado [word-count](https://mdn.github.io/web-components-examples/word-count-web-component/) como este:

```js
customElements.define("word-count", WordCount, { extends: "p" });
```

El elemento se llama `word-count`, la clase es `WordCount`, y extiende el elemento {{htmlelement("p")}}.

Para escribir una clase que defina un elemento personalizado, usamos la sintáxis estándar de ES 2015. Por ejemplo, `WordCount` está estructurada así:

```js
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Siempre llamar primero a super en el constructor
    super();

    // La funcionalidad del elemento se escribe aquí

    ...
  }
}
```

Esto es solo un ejemplo sencillo, pero aquí se pueden hacer más cosas. Dentro de la clase podemos definir callbacks de ciclo de vida, que se ejecutan en momentos específicos del ciclo de vida del elemento. Por ejemplo, `connectedCallback` se invoca cada vez que el elemento se añade a un documento, mientras que `attributeChangedCallback` se invoca cuando uno de los atributos del elemento se ha añadido, quitado o cambiado.

Aprenderás más sobre estos callbacks en la sección [Using the lifecycle callbacks](#using_the_lifecycle_callbacks) más abajo.

Hay dos tipos de elementos personalizados :

- **Elementos personalizados autónomos** — estos no heredan de elementos estándar HTML. Se usan estos elementos en una página escribiéndolos literalmente como un elemento HTML nuevo. Por ejemplo `<popup-info>`, o `document.createElement("popup-info")`.
- **Elementos preconstruidos** **personalizados** heredan de elementos HTML básicos. Para crear un elemento de este tipo, tienes que especificar qué elemento extiende (como se verá en los ejemplos de abajo), y se usan escribiendo el nombre del elemento básico, pero añadiendo un atributo (o propiedad) [`is`](/es/docs/Web/HTML/Global_attributes#is) y dándole como valor el nombre del elemento personalizado que se ha desarrollado. Por ejemplo `<p is="word-count">`, o `document.createElement("p", { is: "word-count" })`.

## Trabajando mediante algunos ejemplos sencillos

Llegados a este punto, veamos con más detalle cómo se crean los elementos personalizados, a través de algunos ejemplos.

### Elementos personalizados autónomos

Echemos un vistazo al ejemplo de un elemento personalizado autónomo — [`<popup-info-box>`](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) (ver el [ejemplo en vivo](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)). Este ejemplo toma un icono y una cadena de texto, y los incrusta en la página. Cuando el icono toma el foco, se muestra el texto en una caja emergente (popup) de información para proporcionar más información de contexto.

Para empezar, en un fichero JavaScript se define una clase llamada `PopUpInfo`, que extiende la clase genérica {{domxref("HTMLElement")}}.

```js
class PopUpInfo extends HTMLElement {
  constructor() {
    // Siempre llamar primero a super en el constructor
    super();

    // La funcionalidad del elemento se escribe aquí

    ...
  }
}
```

El trozo de código anterior contiene un [`constructor()`](/es/docs/Web/JavaScript/Reference/Classes/constructor) para la clase, que siempre empieza llamando a [`super()`](/es/docs/Web/JavaScript/Reference/Operators/super) de forma que se establezca correctamente el encadenado del prototipo.

Dentro del constructor, definimos toda la funcionalidad que tendrá el elemento cuando se instancie. En este caso, adjuntamos una shadow root al elemento personalizado, mediante manipulación de DOM creamos la estructura interna del shadow DOM del elemento — que se adjunta a su vez a la shadow root — y finalmente añadimos algo de estilos CSS al shadow root.

```js
// Creamos un shadow root
var shadow = this.attachShadow({ mode: "open" });

// Creamos spans
var wrapper = document.createElement("span");
wrapper.setAttribute("class", "wrapper");
var icon = document.createElement("span");
icon.setAttribute("class", "icon");
icon.setAttribute("tabindex", 0);
var info = document.createElement("span");
info.setAttribute("class", "info");

// Tomamos el contenido del atributo y lo ponemos dentro del span
var text = this.getAttribute("data-text");
info.textContent = text;

// Añadimos el icono
var imgUrl;
if (this.hasAttribute("img")) {
  imgUrl = this.getAttribute("img");
} else {
  imgUrl = "img/default.png";
}
var img = document.createElement("img");
img.src = imgUrl;
icon.appendChild(img);

// Creamos un poco de CSS para aplicar al shadow dom
var style = document.createElement("style");

style.textContent =
  ".wrapper {" +
  // CSS truncado por brevedad

  // añade los elementos creados al shadow dom

  shadow.appendChild(style);
shadow.appendChild(wrapper);
wrapper.appendChild(icon);
wrapper.appendChild(info);
```

Finalmente, registraremos nuestro elemento en el `CustomElementRegistry` usando el método `define()` que mencionamos anteriormente — en los parámetros especificamos el nombre del elemento, y el nombre de la clase que define su funcionalidad::

```js
customElements.define("popup-info", PopUpInfo);
```

Ahora ya está disponible para usarse en nuestra página. En nuestro HTML, lo usamos de esta manera:

```html
<popup-info
  img="img/alt.png"
  data-text="Your card validation code (CVC)
  is an extra security feature — it is the last 3 or 4 numbers on the
  back of your card."></popup-info>
```

> **Nota:** Puedes ver el código [fuente JavaScript completo](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-web-component/main.js) aquí.

> **Nota:** Recuerda que para que los elementos personalizados funcionen, el script que los registra tiene que cargarse después de que el DOM lo interprete. Esto puede hacerse incluyendo un elemento `<script>` al final del `<body>`, o poniendo el atributo `defer` en tu elemento `<script>`.

### Estilos internos vs. externos

En el ejemplo de arriba, aplicamos estilos al Shadow DOM usando el elemento {{htmlelement("style")}} , pero podríamos perfectamente hacerlo referenciando una hoja de estilos externa mediante un elemento {{htmlelement("link")}}.

Por ejemplo, echemos un vistazo al código de ejemplo de [popup-info-box-external-stylesheet](https://mdn.github.io/web-components-examples/popup-info-box-external-stylesheet/) (ver el [código fuente](https://github.com/mdn/web-components-examples/blob/master/popup-info-box-external-stylesheet/main.js)):

```js
// Creamos elemento link para cargar hoja de estilos externa
const linkElem = document.createElement("link");
linkElem.setAttribute("rel", "stylesheet");
linkElem.setAttribute("href", "style.css");

// Añadimos el elemento creado al shadow dom
shadow.appendChild(linkElem);
```

Nótese que los elementos {{htmlelement("link")}} no bloquean el pintado de shadow root, por lo que podría verse un flash o contenido sin estilo (FOUC) mientras se carga la hoja de estilos.

Muchos navegadores modernos implementan una optimización para etiquetas {{htmlelement("style")}} clonadas de un nodo común o que tienen texto idéntico, que les permite compartir una única hoja de estilo por detrás. Con esta optimización, el rendimiento de estilos externos e internos debería ser parecido.

### Elementos preconstruidos personalizados

Echemos un vistazo ahora a otro ejemplo de elemento preconstruído personalizado — [expanding-list](https://github.com/mdn/web-components-examples/tree/master/expanding-list-web-component) (ver el [ejemplo en vivo](https://mdn.github.io/web-components-examples/expanding-list-web-component/)). Este ejemplo convierte cualquier lista sin orden \<UL> en un menú expandible/colapsable.

Primero de todo, definimos nuesta clase, de la misma forma que antes:

```js
class ExpandingList extends HTMLUListElement {
  constructor() {
    // Siempre llamar primero a super en el constructor
    super();

    // La funcionalidad del elemento se escribe aquí

    ...
  }
}
```

No explicaremos la funcionalidad del elemento en detalle aquí, pero puedes descubrir cómo funciona mirando el código fuente. La única diferencia real es que nuestro elemento extiende de la interfaz {{domxref("HTMLUListElement")}}, y no de {{domxref("HTMLElement")}}. Por lo que tiene todas las características de un elemento {{htmlelement("ul")}} además de la funcionalidad que agreguemos nosotros, en vez de ser un elemento autónomo. Esto es lo que lo hace un elemento preconstruido personalizado en vez de uno autónomo.

Después, registramos el elemento usando el método `define()` como antes, excepto que esta vez incluimos un objeto de opciones, en el tercer parámetro, que detalla de qué elemento hereda:

```js
customElements.define("expanding-list", ExpandingList, { extends: "ul" });
```

El uso de un elemento preconstruido en un documento web también es algo distinto:

```html
<ul is="expanding-list">
  ...
</ul>
```

Usas el elemento `<ul>` como siempre, pero especificas el nombre del elemento personalizado mediante un atributo `is` .

> **Nota:** De nuevo, puedes ver el código [fuente JavaScript completo](https://github.com/mdn/web-components-examples/blob/master/expanding-list-web-component/main.js)aquí.

## Usando callbacks de ciclo de vida

Puedes definir varios callbacks dentro de la definición de la clase de un elemento personalizado. Estos callbacks se disparan en distintos puntos del ciclo de vida de elemento:

- `connectedCallback`: Se invoca cada vez que se añade un elemento personalizado a un documento. Esto ocurrirá cada vez que el nodo se mueva, y puede suceder antes de que todo el contenido se haya parseado.

  > **Nota:** `connectedCallback` puede llamarse cuando el elemento ya no esté conectado. Para asegurarse usar {{domxref("Node.isConnected")}}.

- `disconnectedCallback`: Se invoca cada vez que el elemento se desconecta del DOM del documento.
- `adoptedCallback`: Se invoca cada vez que el elemento se mueve a un nuevo documento.
- `attributeChangedCallback`: Se invoca cada vez que los atributos del elemento se añaden, quitan o cambian. Deben especificarse previamente en el método estático `observedAttributes` los atributos que queremos que nos sean notificados.

Echemos un vistazo a un ejemplo de todo esto. El código de abajo se ha tomado del ejemplo [life-cycle-callbacks](https://github.com/mdn/web-components-examples/tree/master/life-cycle-callbacks) (ver el [ejemplo en vivo](https://mdn.github.io/web-components-examples/life-cycle-callbacks/)). Se trata de un ejemplo trivial que simplemente genera un cuadrado coloreado de un tamaño fijo en la página. El elemento personalizado es algo como esto:

```html
<custom-square l="100" c="red"></custom-square>
```

El constructor de la clase es muy simple — adjuntamos un shadow DOM al elemento, y después adjuntamos un {{htmlelement("div")}} vacío y un elemento {{htmlelement("style")}} al shadow root:

```js
var shadow = this.attachShadow({ mode: "open" });

var div = document.createElement("div");
var style = document.createElement("style");
shadow.appendChild(style);
shadow.appendChild(div);
```

La función clave en este ejemplo es `updateStyle()` — esta toma un elemento, obtiene su shadow root, busca su elemento `<style>`, y añade al estilo {{cssxref("width")}}, {{cssxref("height")}}, y {{cssxref("background-color")}}.

```js
function updateStyle(elem) {
  const shadow = elem.shadowRoot;
  shadow.querySelector("style").textContent = `
    div {
      width: ${elem.getAttribute("l")}px;
      height: ${elem.getAttribute("l")}px;
      background-color: ${elem.getAttribute("c")};
    }
  `;
}
```

Las actualizaciones se manejan mediande los callbacks que se incluyen en la definición de la clase. El método `connectedCallback()` se ejecuta cada vez que el elemento se añade al DOM — en este instante ejecutamos la función `updateStyle()` para asegurarnos que el cuadrado se pinta tal y como se definió en sus atributos:

```js
connectedCallback() {
  console.log('Custom square element added to page.');
  updateStyle(this);
}
```

Los callbacks `disconnectedCallback()` y `adoptedCallback()` simplemente imprimen mensajes a la consola para informarnos cuando el elemento se quita del DOM, o bien se mueve a una página distinta:

```js
disconnectedCallback() {
  console.log('Custom square element removed from page.');
}

adoptedCallback() {
  console.log('Custom square element moved to new page.');
}
```

El callback `attributeChangedCallback()` se ejecuta cuando los atributos cambian de alguna forma. Como puedes ver en sus propiedades, es posible actuar sobre atributos individuales, teniendo en cuenta su nombre, y sus valores anterior y nuevo. Sinembargo en este ejemplo, simplemente ejecutamos de nuevo la función `updateStyle()` para asegurarnos de que el cuadrado tiene el estilo adecuado a sus nuevos valores:

```js
attributeChangedCallback(name, oldValue, newValue) {
  console.log('Custom square element attributes changed.');
  updateStyle(this);
}
```

Nótese que el callback `attributeChangedCallback()` se dispara cuando un atributo cambia y está observándose el atributo. Esto se hace mediante el método `static get observedAttributes()` dentro de la clase - este debería devolver un array que contiene los nombres de los atributos que se deben observar:

```js
static get observedAttributes() { return ['c', 'l']; }
```

Este código se coloca en la parte de arriba del constructor en nuestro ejemplo.

> **Nota:** Busca el [código JavaScript completo](https://github.com/mdn/web-components-examples/blob/master/life-cycle-callbacks/main.js)aquí.

## Polyfills vs. clases

Polyfills de los elementos personalizados pueden parchear constructores nativos como `HTMLElement` y otros, y devolver una instancia de una clase diferente de la que se acaba de crear.

Si necesitas un `constructor` y una llamada obligatoria a `super`, recuerda indicar los argumentos opcionales en el constructor y pasarlos a `super`.

```js
class CustomElement extends HTMLElement {
  constructor(...args) {
    const self = super(...args);
    // self functionality written in here
    // self.addEventListener(...)
    // return the right context
    return self;
  }
}
```

Si no necesitar realizar ninguna operación en el constructor, simplemente omítelo, ya que se preservará su comportamiento nativo (ver a continuación).

```js
 constructor(...args) { return super(...args); }
```

## Transpiladores vs. clases

Nótese que las clases ES2015 no pueden transpilarse con Babel 6 o TypeScript para navegadores antiguos. Puedes usar Babel 7 o el plugin [babel-plugin-transform-builtin-classes](https://www.npmjs.com/package/babel-plugin-transform-builtin-classes) para Babel 6, y especificar ES2015 como destino (target) en TypeScript en vez de legacy.

## Librerías

Existen varias librerías que se han construido sobre Web Components con la intención de incrementar el nivel de abstracción cuando se crean elementos personalizados. Algunas de estas librerías son [snuggsi ツ](https://github.com/devpunks/snuggsi), [X-Tag](https://x-tag.github.io/), [Slim.js](http://slimjs.com/), [LitElement](https://lit-element.polymer-project.org/), [Smart](https://www.htmlelements.com/), y [Stencil](https://stenciljs.com).
