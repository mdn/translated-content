---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
---

{{APIRef}}

El método `Element.attachShadow()` adjunta un árbol DOM "sombra" al elemento especificado y devuelve una referencia a su raíz {{domxref("ShadowRoot")}}.

## Elementos a los que puedes adjuntar un DOM "sombra"

No se puede adjuntar un DOM "sombra" a cualquier tipo de elemento. Hay algunos que no pueden tenerlo por razones de seguridad (por ejemplo {{htmlelement("a")}}), y algunos más. Los siguientes elementos de la lista **pueden** adjuntar un DOM "sombra":

- Cualquier elemento autónomo con un [nombre válido](https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name)
- {{htmlelement("article")}}
- {{htmlelement("aside")}}
- {{htmlelement("blockquote")}}
- {{htmlelement("body")}}
- {{htmlelement("div")}}
- {{htmlelement("footer")}}
- {{htmlelement("h1")}}
- {{htmlelement("h2")}}
- {{htmlelement("h3")}}
- {{htmlelement("h4")}}
- {{htmlelement("h5")}}
- {{htmlelement("h6")}}
- {{htmlelement("header")}}
- {{htmlelement("main")}}
- {{htmlelement("nav")}}
- {{htmlelement("p")}}
- {{htmlelement("section")}}
- {{htmlelement("span")}}

## Syntaxis

```
var shadowroot = element.attachShadow(shadowRootInit);
```

### Parámetros

- `shadowRootInit`

  - : Un diccionario `ShadowRootInit` , que puede contener los siguientes campos:

    - `mode`

      - : Una cadena que especifique el _modo de encapsulación_ para el árbol DOM "sombra". Este puede tener uno de los siguientes valores:

        - `open`: Los elementos del árbol son accesibles desde fuera del elemento, por ejemplo usando {{domxref("Element.shadowRoot")}}:

          ```
          element.shadowRoot; // Returns a ShadowRoot obj
          ```

        - `closed`: Deniega el acceso a lo(s) nodo(s) desde fuera mediante JavaScript:

          ```
          element.shadowRoot; // Returns null
          ```

    - `delegatesFocus`
      - : Un booleano que, si se establece a `true`, mitiga problemas de comportamiento relativos a la capacidad de tomar el foco. Cuando se hace click en una parte del DOM "sombra" que no puede tomar el foco, la primera parte del árbol que pueda tomar el foco lo hará, y le dará cualquier estilo disponible mediante CSS con `:focus`.

### Valor retorno

Devuelve un objeto {{domxref("ShadowRoot")}}.

### Excepciones

| Excepción           | Explicación                                                                                                                                                 |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | El elemento que estás intentando adjuntar ya tiene una DOM "sombra".                                                                                        |
| `NotSupportedError` | Estás intentando adjuntar DOM "sombra" a un elemento fuera del espacio de nombres HTML, o el elemento no puede tener una DOM "sombra". adjunta (ver abajo). |

## Ejemplos

Los siguientes ejemplos están tomados de la demo [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) ([verlo también en modo live](https://mdn.github.io/web-components-examples/word-count-web-component/)). Puedes ver que usamos `attachShadow()` en mitad del código para crear una DOM "sombra", a la que luego adjuntamos el contenido de nuesto elemento personalizado.

```js
// Crear una clase para el elemento
class CuentaPalabras extends HTMLParagraphElement {
  constructor() {
    // Siemmpre llamar a super en el constructor
    super();

    // contar las palabras en el nodo padre
    var cpPadre = this.parentNode;

    function cuentaPalabras(nodo) {
      var texto = nodo.innerText || nodo.textContent;
      return texto.trim().split(/\s+/g).length;
    }

    var cuenta = "Palabras: " + cuentaPalabras(cpPadre);

    // Crear un DOM "sombra"
    var sombra = this.attachShadow({ mode: "open" });

    // Crear el nodo de texto y añadirle el contador de palabras
    var texto = document.createElement("span");
    texto.textContent = count;

    // Añadirlo a la sombra
    sombra.appendChild(texto);

    // Actualizar el contador cuando el contenido del elemento cambie
    setInterval(function () {
      var cuenta = "Palabras: " + cuentaPalabras(cpPadre);
      texto.textContent = cuenta;
    }, 200);
  }
}

// Definir el nuevo elemento
customElements.define("cuenta-palabras", CuentaPalabras, { extends: "p" });
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
