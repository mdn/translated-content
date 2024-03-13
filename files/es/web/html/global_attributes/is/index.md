---
title: is
slug: Web/HTML/Global_attributes/is
---

{{HTMLSidebar("Global_attributes")}}

La construcción is [global attribute](/es/docs/Web/HTML/Atributos_Globales) permite especificar que un elemento HTML estándar se debería comportar como un elemento personalizado provisto originalmente por el lenguaje (para más detalles, vea [Utilizando elementos personalizados](/es/docs/Web/Web_Components/Using_custom_elements)).

Este atributo puede ser utilizado sólo si nombre del elemento personalizado especificado ha sido [definido](/es/docs/Web/API/CustomElementRegistry/define) extósamente en el documento actual, y extiende el tipo de elemento al que está siendo aplicado.

## Ejemplos

El siguiente código fue tomado de nuestro ejemplo [word-count-web-component](https://github.com/mdn/web-components-examples/tree/master/word-count-web-component) ([véalo también en vivo](https://mdn.github.io/web-components-examples/word-count-web-component/)).

```js
// Crea una clase para el elemento
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Siempre llamar a super al comienzo del constructor
    super();

    // Contenido del constructor omitido para mayor brevedad
    ...

  }
}

// Define el nuevo elemento
customElements.define('word-count', WordCount, { extends: 'p' });
```

```html
<p is="word-count"></p>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Vea también

- Todos los [atributos globales](/es/docs/Web/HTML/Atributos_Globales).
