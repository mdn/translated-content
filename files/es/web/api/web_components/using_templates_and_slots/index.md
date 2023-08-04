---
title: Usando plantillas y slots
slug: Web/API/Web_components/Using_templates_and_slots
---

{{DefaultAPISidebar("Web Components")}}

Este artículo explica como puedes usar los elementos {{htmlelement("template")}} y {{htmlelement("slot")}} para crear una plantilla flexible que luego puede ser usada para rellenar el shadow DOM de un componente web.

## La verdad acerca del elemento \<template>

Cuando tienes que reutilizar las mismas estructuras de lenguaje de marcado repetidas veces en una página web, tiene sentido utilizar algún tipo de plantilla en lugar de repetir la misma estructura una y otra vez. Esto ya era posible hacerlo antes, pero ahora es mucho mas fácil con el elemento HTML {{htmlelement("template")}} (que está bien soportado en los navegadores modernos). Este elemento y su contenido no son renderizados en el DOM, pero pueden ser referenciados vía JavaScript.

Echemos un vistazo a un ejemplo sencillo:

```html
<template id="my-paragraph">
  <p>Mi párrafo</p>
</template>
```

Esto no aparecerá en tu página hasta que hagas una referencia a él con JavaScript y luego lo agregues al DOM, usando algo parecido a lo siguiente:

```js
let template = document.getElementById("my-paragraph");
let templateContent = template.content;
document.body.appendChild(templateContent);
```

Aunque de una manera simple, ya puedes empezar a ver su utilidad.

## Usando el elemento \<template> con componentes web

Las plantillas son útiles por si mismas, pero trabajan aún mejor con componentes web. Definamos un componente web que use nuestra plantilla como el contenido de su shadow DOM. Lo nombraremos `<my-paragraph>`:

```js
customElements.define(
  "my-paragraph",
  class extends HTMLElement {
    constructor() {
      super();
      let template = document.getElementById("my-paragraph");
      let templateContent = template.content;

      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        templateContent.cloneNode(true),
      );
    }
  },
);
```

El punto clave a tener en cuenta aquí es que agregamos un clon del contenido de la plantilla al shadow root creado usando el método {{domxref("Node.cloneNode()")}}.

Y debido a que estamos agregando su contenido a un shadow DOM, podemos incluir cierta información de estilo dentro de la plantilla en un elemento {{htmlelement("style")}}, que luego se encapsula dentro del elemento personalizado. Esto no funcionaría si nosotros solo lo agregásemos al DOM estandar.

Por ejemplo:

```html
<template id="my-paragraph">
  <style>
    p {
      color: white;
      background-color: #666;
      padding: 5px;
    }
  </style>
  <p>Mi párrafo</p>
</template>
```

Ahora podemos usarlo simplemente agregándolo a nuestro documento HTML:

```html
<my-paragraph></my-paragraph>
```

> **Nota:** Las plantillas están bien soportadas en los navegadores: la API del Shadow DOM es compatible por defecto con Firefox (version 63 en adelante), Chrome, Opera y Safari, Edge está trabajando en una implementación.

## Añadiendo flexibilidad con el elemento \<slot>

Hasta aquí bien, pero el elemento no es muy flexible. Solo podemos mostrar una parte de texto dentro de él, lo que quiere decir que, hasta el momento, es menos útil que un párrafo normal. Podemos mostrar diferente texto en cada instancia de elemento de una forma declarativa agradable usando el elemento {{htmlelement("slot")}}. Este tiene un soporte más limitado que el elemento {{htmlelement("template")}}, disponible desde Chrome 53, Opera 40, Safari 10, Firefox 59, pero aún no disponible en Edge.

Los slots son identificados por su atributo `name`, y te permiten definir marcadores de posición en tu plantilla que pueden rellenarse con cualquier fragmento de marcado cuando el elemento es usado.

Así que, si queremos agregar un slot dentro de nuestro ejemplo sencillo, podemos actualizar el elemento de párrafo de la plantilla de la siguiente manera:

```html
<p><slot name="my-text">Mi texto predeterminado</slot></p>
```

Si el contenido del slot no está definido cuando el elemento se agrega al marcado, o si el navegador no soporta el elemento slot, `<my-paragraph>` solo contiene el texto alternativo "Mi texto predeterminado".

Para definir el contenido de un slot, incluimos una estructura HTML dentro del elemento `<my-paragraph>` con un atributo [`slot`](/es/docs/Web/HTML/Global_attributes#slot) cuyo valor es igual al nombre del slot que queremos rellenar. Al igual que antes, esto puede ser cualquier cosa, por ejemplo:

```html
<my-paragraph>
  <span slot="my-text">¡Tengamos un texto diferente!</span>
</my-paragraph>
```

o

```html
<my-paragraph>
  <ul slot="my-text">
    <li>¡Tengamos un texto diferente!</li>
    <li>¡En una lista!</li>
  </ul>
</my-paragraph>
```

> **Nota:** Los elementos que pueden ser insertados en los slots son conocidos como {{domxref("Slotable")}}; cuando un elemento ha sido insertado en un slot, se dice que fue _eslotado_ por su término en inglés _slotted._

> **Nota:** Un {{HTMLElement("slot")}} sin nombre se rellenará con todos los nodos secundarios de nivel superior del elemento personalizado que no tengan el atributo [`slot`](/es/docs/Web/HTML/Global_attributes#slot). Esto incluye nodos de texto.

Y eso es todo nuestro ejemplo sencillo. Si quieres jugar con él un poco más, puedes encontrarlo en [GitHub](https://github.com/mdn/web-components-examples/tree/master/simple-template) (también puedes [verlo en vivo](https://mdn.github.io/web-components-examples/simple-template/)).

## Un ejemplo más completo

Para finalizar el artículo, veamos algo menos trivial.

El siguiente conjunto de fragmentos de código muestra cómo usar {{HTMLElement("slot")}} junto con {{HTMLElement("template")}} y algo de JavaScript para:

- crear un elemento **`<element-details>`** con [slots con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) en su [shadow root](/es/docs/Web/API/ShadowRoot)
- diseñar el elemento **`<element-details>`** de forma que, cuando se use en documentos, sea renderizado desde la composición del contenido del elemento junto con el contenido de su [shadow root,](/es/docs/Web/API/ShadowRoot) es decir, se utilizan partes del contenido del elemento para rellenar el [shadow root](/es/docs/Web/API/ShadowRoot) de los [slots con atributo name](/es/docs/Web/HTML/Element/slot#named-slot)

Observa que es técnicamente posible usar el elemento {{HTMLElement("slot")}} sin un elemento {{HTMLElement("template")}}, por ejemplo, dentro de un elemento {{HTMLElement("div")}} normal, y aun así tomar ventaja de los indicadores de posición de el elemento {{HTMLElement("slot")}} para el contenido del [Shadow DOM](/es/docs/Web/Web_Components/Using_shadow_DOM), y al hacerlo puedes evitar el problema de tener que acceder primero a la propiedad `content` del elemento de la plantilla y clonarlo. Sin embargo, por lo general, es más práctico agregar slots dentro de un elemento {{HTMLElement("template")}}, ya que es poco probable que necesites definir un patrón basado en un elemento ya renderizado.

Además, incluso si no está renderizado, el propósito del contenedor como plantilla debería ser semánticamente más claro cuando se usa el elemento {{HTMLElement("template")}}. Además, el elemento {{HTMLElement("template")}} puede tener elementos agregados directamente a él, como {{HTMLElement("td")}}, que desaparecerían al añadirse a un {{HTMLElement ("div")}}.

> **Nota:** Puedes encontrar el ejemplo completo en [element-details](https://github.com/mdn/web-components-examples/tree/master/element-details)(también lo puedes[ver en vivo](https://github.com/mdn/web-components-examples/tree/master/element-details))

### Creando una plantilla con algunos elementos \<slot>

En primer lugar, usamos el elemento {{HTMLElement("slot")}} dentro de un elemento {{HTMLElement("template")}} para crear un nuevo [fragmento de documento](/es/docs/Web/API/DocumentFragment) de tipo "element-details-template" que contiene algunos [slots con el atributo name](/es/docs/Web/HTML/Element/slot#named-slot):

```html
<template id="element-details-template">
  <style>
    details {
      font-family: "Open Sans Light", Helvetica, Arial;
    }
    .name {
      font-weight: bold;
      color: #217ac0;
      font-size: 120%;
    }
    h4 {
      margin: 10px 0 -8px 0;
    }
    h4 span {
      background: #217ac0;
      padding: 2px 6px 2px 6px;
    }
    h4 span {
      border: 1px solid #cee9f9;
      border-radius: 4px;
    }
    h4 span {
      color: white;
    }
    .attributes {
      margin-left: 22px;
      font-size: 90%;
    }
    .attributes p {
      margin-left: 16px;
      font-style: italic;
    }
  </style>
  <details>
    <summary>
      <span>
        <code class="name"
          >&lt;<slot name="element-name">NECESITA NOMBRE</slot>&gt;</code
        >
        <i class="desc"><slot name="description">NECESITA DESCRIPCIÓN</slot></i>
      </span>
    </summary>
    <div class="attributes">
      <h4><span>Atributos</span></h4>
      <slot name="attributes"><p>Ninguno</p></slot>
    </div>
  </details>
  <hr />
</template>
```

Ese elemento {{HTMLElement("template")}} tiene varias características.

- El {{HTMLElement ("template")}} tiene un elemento {{HTMLElement ("style")}} con un conjunto de estilos CSS ajustados al ámbito del fragmento de documento que {{HTMLElement ("template")}} crea.
- El elemento {{HTMLElement("template")}} usa {{HTMLElement("slot")}} y su atributo [`name`](/es/docs/Web/HTML/Element/slot#name) para hacer tres [slots con el atributo name](/es/docs/Web/HTML/Element/slot#named-slot):

  - `<slot name="element-name">`
  - `<slot name="description">`
  - `<slot name="attributes">`

- El elemento {{HTMLElement("template")}} envuelve los [slots con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) dentro de un elemento {{HTMLElement("details")}}.

### Crear un nuevo elemento \<element-details> desde el elemento \<template>

A continuación, crearemos un nuevo elemento personalizado llamado **`<element-details>`** y usaremos {{DOMXref("Element.attachShadow")}} para anclarlo, como su [shadow root](/es/docs/Web/API/ShadowRoot), a ese fragmento de documento que creamos anteriormente con nuestro elemento {{HTMLElement("template")}}. Usa exactamente el mismo patrón que vimos antes en el ejemplo sencillo.

```js
customElements.define(
  "element-details",
  class extends HTMLElement {
    constructor() {
      super();
      var template = document.getElementById(
        "element-details-template",
      ).content;
      const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
        template.cloneNode(true),
      );
    }
  },
);
```

### Usando el elemento \<element-details> con slots con el atributo name

Ahora tomaremos el elemento **`<element-details>`** para usarlo en nuestro documento.

```html
<element-details>
  <span slot="element-name">slot</span>
  <span slot="description"
    >Un marcador de posición dentro de un componente web que los usuarios pueden
    rellenar con su propio marcado, con el efecto de componer diferentes árboles
    DOM juntos.</span
  >
  <dl slot="attributes">
    <dt>name</dt>
    <dd>El atributo name del slot.</dd>
  </dl>
</element-details>

<element-details>
  <span slot="element-name">template</span>
  <span slot="description"
    >Un mecanismo para guardar contenido en el lado cliente que no se renderiza
    cuando la página se carga sino que posteriormente se puede instanciar en
    tiempo de ejecución usando JavaScript.</span
  >
</element-details>
```

Observa estos puntos sobre el fragmento anterior:

- El fragento tiene dos instancias de elementos **`<element-details>`** que usan el atributo [`slot`](/es/docs/Web/HTML/Global_attributes#slot) para referenciar los [slots con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) `"element-name"` y `"description"` que colocamos en el [shadow root](/es/docs/Web/API/ShadowRoot) del `<element-details>`
- Solo el primero de esos dos elementos **`<element-details>`** hace referencia a los `"attributes"` de [slot con atributo name.](/es/docs/Web/HTML/Element/slot#named-slot)El segundo elemento `<element-details>` carece de cualquier referencia a `"attributes"` de [slot con atributo name](/es/docs/Web/HTML/Element/slot#named-slot).
- El primer elemento `<element-details>` está referenciando los `"attributes"` de [slot con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) usando un elemento {{HTMLElement("dl")}} con {{HTMLElement("dt")}} y {{HTMLElement("dd")}} como hijos.

### Añadamos algunos estilos

Como toque final, añadiremos algunos estilos CSS a los ellementos {{HTMLElement("dl")}}, {{HTMLElement("dt")}}, y {{HTMLElement("dd")}} en el documento:

```css
dl {
  margin-left: 6px;
}
dt {
  font-weight: bold;
  color: #217ac0;
  font-size: 110%;
}
dt {
  font-family: Consolas, "Liberation Mono", Courier;
}
dd {
  margin-left: 16px;
}
```

```css hidden
body {
  margin-top: 47px;
}
```

### Resultado

Finalmente, juntemos todos los fragmentos y veamos cómo se ve el resultado renderizado.

{{ EmbedLiveSample('full_example', '300','400','element-details.png','') }}

Observa los siguientes puntos del resultado renderizado:

- Aún cuando las instancias del elemento **`<element-details>`** en el documento no usan directamente el elemento {{HTMLElement("details")}}, se renderizan usando {{HTMLElement("details")}} porque el [shadow root](/es/docs/Web/API/ShadowRoot) hace que ellos se rellenen.
- En la salida de {{HTMLElement ("details")}}, el contenido de los elementos **`<element-details>`** llena los [slots con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) desde el [shadow root](/es/docs/Web/API/ShadowRoot). En otras palabras, el árbol DOM de los elementos **`<element-details>`** se compone junto con el contenido del [shadow root](/es/docs/Web/API/ShadowRoot).
- Para ambos elementos **`<element-details>`**, un encabezado de **Attributes** se añade automáticamente desde el [shadow root](/es/docs/Web/API/ShadowRoot) antes de la posición `"attributes"` del [slot con atributo name](/es/docs/Web/HTML/Element/slot#named-slot).
- Ya que el primer elemento **`<element-details>`** tiene un elemento {{HTMLElement("dl")}} que hace referencia explicita al [slot con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) `"attributes"` desde su [shadow root](/es/docs/Web/API/ShadowRoot), el contenido de ese {{HTMLElement("dl")}} reemplaza el [slot con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) `"attributes"` desde el [shadow root](/es/docs/Web/API/ShadowRoot)
- Ya que el segundo elemento **`<element-details>`** no hace referencia explícita al [slot con atributo name](/es/docs/Web/HTML/Element/slot#named-slot) `"attributes"` desde su [shadow root](/es/docs/Web/API/ShadowRoot), su contenido se rellena con el contenido predeterminado desde el [shadow root](/es/docs/Web/API/ShadowRoot).

```html hidden
<!doctype html>
<html>
  <head>
    <title>ejemplo de slot</title>
    <style>
      dl {
        margin-left: 6px;
      }
      dt {
        font-weight: bold;
        color: #217ac0;
        font-size: 110%;
      }
      dt {
        font-family: Consolas, "Liberation Mono", Courier;
      }
      dd {
        margin-left: 16px;
      }
    </style>
  </head>
  <body>
    <template id="element-details-template">
      <style>
        details {
          font-family: "Open Sans Light", Helvetica, Arial;
        }
        .name {
          font-weight: bold;
          color: #217ac0;
          font-size: 120%;
        }
        h4 {
          margin: 10px 0 -8px 0;
        }
        h4 span {
          background: #217ac0;
          padding: 2px 6px 2px 6px;
        }
        h4 span {
          border: 1px solid #cee9f9;
          border-radius: 4px;
        }
        h4 span {
          color: white;
        }
        .attributes {
          margin-left: 22px;
          font-size: 90%;
        }
        .attributes p {
          margin-left: 16px;
          font-style: italic;
        }
      </style>
      <details>
        <summary>
          <span>
            <code class="name"
              >&lt;<slot name="element-name">NECESITA NOMBRE</slot>&gt;</code
            >
            <i class="desc"
              ><slot name="description">NECESITA DESCRIPCIÓN</slot></i
            >
          </span>
        </summary>
        <div class="attributes">
          <h4><span>Attributos</span></h4>
          <slot name="attributes"><p>Ninguno</p></slot>
        </div>
      </details>
      <hr />
    </template>

    <element-details>
      <span slot="element-name">slot</span>
      <span slot="description"
        >Un marcador de posición dentro de un componente web que los usuarios
        pueden rellenar con su propio marcado, con el efecto de componer
        diferentes árboles DOM juntos.</span
      >
      <dl slot="attributes">
        <dt>name</dt>
        <dd>El atributo name del slot.</dd>
      </dl>
    </element-details>

    <element-details>
      <span slot="element-name">template</span>
      <span slot="description"
        >Un mecanismo para guardar contenido en el lado cliente que no se
        renderiza cuando la página se carga sino que posteriormente se puede
        instanciar en tiempo de ejecución usando JavaScript.</span
      >
    </element-details>

    <script>
      customElements.define(
        "element-details",
        class extends HTMLElement {
          constructor() {
            super();
            const template = document.getElementById(
              "element-details-template",
            ).content;
            const shadowRoot = this.attachShadow({ mode: "open" }).appendChild(
              template.cloneNode(true),
            );
          }
        },
      );
    </script>
  </body>
</html>
```
