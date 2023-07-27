---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
---

{{APIRef("CustomElementRegistry")}}

El método **`define()`** de la interfaz {{domxref("CustomElementRegistry")}} define un nuevo elemento personalizado.

Se pueden crear dos tipos de elementos personalizados:

- **Elementos personalizados autónomos**: Elementos autónomos; estos heredan de HTMLElement (Elemento HTML genérico).
- **Elementos personalizados preconstruidos**: Estos elementos heredan - y extienden - elementos HTML ya existentes (p.ej HTMLParagraphElement que es el elemento HTML [`<p>`](/es/docs/Web/HTML/Element/p)).

## Sintaxis

```
customElements.define(name, constructor, options);
```

### Parámetros

- name
  - : Nombre del nuevo elemento personalizado. Fíjate en que los nombres de elementos personalizados deben contener un guión.
- constructor
  - : Constructor para el nuevo elemento personalizado
- options {{optional_inline}}

  - : Objecto que controla cómo se define el elemento. Actualmente solo se permite una opción:

    - `extends`: Cadena que especifica el nombre del elemento preconstruido del cual se va a extender. Se usa para crear _elementos personalizados preconstruidos_.

### Valor de retorno

Void.

### Excepciones

| Excepción           | Descripción                                                                                                                                                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `NotSupportedError` | El {{domxref("CustomElementRegistry")}} ya contiene una entrada con el mismo nombre o el mismo constructor (o se ha definido ya de alguna otra manera), o se ha especificado `extends` pero el elemento del que se está intentando extender es desconocido. |
| `SyntaxError`       | El nombre proporcionado no es un [nombre válido de elemento personalizado](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name).                                                                                          |
| `TypeError`         | El constructor referenciado no es un constructor                                                                                                                                                                                                            |

> **Nota:** A menudo se obtienen excepciones `NotSupportedError`s cuando el método `define()` está fallando, pero realmente es un problema relacionado con {{domxref("Element.attachShadow()")}}.

## Ejemplos

### Elemento personalizado autónomo

El siguiente código está tomado de nuestro ejemplo [popup-info-box-web-component](https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component) ([verlo en vivo](https://mdn.github.io/web-components-examples/popup-info-box-web-component/)).

```js
// Crear una clase para el elemento
class PopUpInfo extends HTMLElement {
  constructor() {
    // Siempre lo primero es llamar a super en el constructor
    super();

    // Crear una shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Crear tres elementos span
    var wrapper = document.createElement("span");
    wrapper.setAttribute("class", "wrapper");

    var icon = document.createElement("span");
    icon.setAttribute("class", "icon");
    icon.setAttribute("tabindex", 0);

    var info = document.createElement("span");
    info.setAttribute("class", "info");

    // Coger el contenido del atributo text y ponerlo en el span info
    var text = this.getAttribute("text");
    info.textContent = text;

    // Coger el contenido del atributo img (si existe) y ponerlo en el span icon
    var imgUrl;
    if (this.hasAttribute("img")) {
      imgUrl = this.getAttribute("img");
    } else {
      imgUrl = "img/default.png";
    }

    // El span no puede tener directamente una imagen, pero si contener un elemento img
    var img = document.createElement("img");
    img.src = imgUrl;
    icon.appendChild(img);

    // Crear los estilos CSS e incluirlos en el shadow DOM
    var style = document.createElement("style");

    style.textContent =
      ".wrapper {" +
      "position: relative;" +
      "}" +
      ".info {" +
      "font-size: 0.8rem;" +
      "width: 200px;" +
      "display: inline-block;" +
      "border: 1px solid black;" +
      "padding: 10px;" +
      "background: white;" +
      "border-radius: 10px;" +
      "opacity: 0;" +
      "transition: 0.6s all;" +
      "position: absolute;" +
      "bottom: 20px;" +
      "left: 10px;" +
      "z-index: 3;" +
      "}" +
      "img {" +
      "width: 1.2rem" +
      "}" +
      ".icon:hover + .info, .icon:focus + .info {" +
      "opacity: 1;" +
      "}";

    // adjuntar los elementos creados (spans y estilo) al shadow DOM
    // notese que el span wrapper contiene los spans icon e info

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Definir el nuevo elemento
customElements.define("popup-info", PopUpInfo);
```

```html
<popup-info
  img="img/alt.png"
  text="Su código de validación de tarjeta (CVC) es una característica extra de seguridad — consiste en 3 o 4 numeros en la parte posterior de su tarjeta."></popup-info>
```

> **Nota:** Los constructores de elementos personalizados autónomos deben extender {{domxref("HTMLElement")}}.

### Elemento personalizado preconstruido

El siguiente código está tomado de nuestro ejemplo [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) ([verlo en vivo](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Crear una clase para el elemento
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Siempre lo primero es llamar a super en el constructor
    super();

    // contar palabras del padre de este elemento
    var wcParent = this.parentNode;

    // la función countWords cuenta palabras (aunque estén separadas por más de un espacio)
    // que existe en el nodo pasado como parámetro.
    // innerText está definido para objetos HTMLElement, mientras que textContent para todos los objetos Node
    // el operador || hace que obtengamos al menos uno de los dos

    function countWords(node) {
      var text = node.innerText || node.textContent;
      return text.split(/\s+/g).length;
    }

    var count = "Words: " + countWords(wcParent);

    // // Crear una shadow root
    var shadow = this.attachShadow({ mode: "open" });

    // Crear un nodo span con el número de palabras
    var text = document.createElement("span");
    text.textContent = count;

    // Añadirlo a la shadow root
    shadow.appendChild(text);

    // Actualizar el contador cuando el contenido del elemento cambie
    setInterval(function () {
      var count = "Words: " + countWords(wcParent);
      text.textContent = count;
    }, 200);
  }
}

// Define the new element
customElements.define("word-count", WordCount, { extends: "p" });
```

```html
<p is="word-count"></p>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
