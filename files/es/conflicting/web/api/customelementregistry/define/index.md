---
title: Document.registerElement()
slug: conflicting/Web/API/CustomElementRegistry/define
original_slug: Web/API/Document/registerElement
---

{{APIRef("DOM")}}{{Deprecated_header}}

El **`Document.registerElement()`** registra un nuevo [elemento personalizado](/es/docs/Web/Web_Components/Custom_Elements) en el navegador y devuelve un constructor para el nuevo elemento.

> **Nota:** Esta es una tecnología experimental. El navegador que utilice debe ser compatible con Web Components. Ver [Web Components habilitados en Firefox](/es/docs/Web/Web_Components#Enabling_Web_Components_in_Firefox).

## Sintaxis

```js
var constructor = document.registerElement(tag-name, options);
```

### Parámetros

- _tag-name_
  - : El nombre del elemento personalizado. El nombre debe contener un guión (-), por ejemplo `my-tag`.
- _options {{optional_inline}}_
  - : Un objeto que da nombre al prototipo que sirve de base para el elemento personalizado, y una etiqueta existente para extender. Ambos son opcionales.

## Ejemplo

Aquí hay un ejemplo muy simple:

```js
var Mytag = document.registerElement('my-tag');
```

Ahora el nuevo tag se ha registrado en el navegador. La variable MyTag contiene un constructor que lo puedes usar para crear un elemento my-tag en el documento de la siguiente manera:

```js
document.body.appendChild(new Mytag());
```

Esto inserta un elemento my-tag vacío que será visible si utiliza las herramientas de desarrollo del navegador. No será visible si usa la capacidad de ver el código fuente del navegador. Y no será visible en el navegador a menos que agregue algún contenido para la etiqueta. Esta es la manera de agregar contenido a la nueva etiqueta:

```js
var mytag = document.getElementsByTagName("my-tag")[0];
mytag.textContent = "I am a my-tag element.";
```

## Especificaciones

{{Specifications}}

## Compatibilidad del Navegador

{{Compat}}

## Ver también

- [Custom Elements](/es/docs/Web/Web_Components/Custom_Elements)
