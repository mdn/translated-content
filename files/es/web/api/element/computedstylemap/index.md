---
title: Element.computedStyleMap()
slug: Web/API/Element/computedStyleMap
---

{{APIRef}}{{SeeCompatTable}}

El método `computedStyleMap()` de la interfaz {{domxref("Element")}} devuelve una interfaz {{domxref("StylePropertyMapReadOnly")}} que provee una representación de solo-lectura de un bloque de declaración de CSS que es una alternativa a {{domxref("CSSStyleDeclaration")}}.

## Sintaxis

```js
var stylePropertyMapReadOnly = Element.computedStyleMap();
```

### Parámetros

Ninguno.

### Valor de resultado

Una interfaz {{domxref("StylePropertyMapReadOnly")}}.

## Ejemplos

Comenzamos con algo de HTML simple: un párrafo con un enlace, y una lista de definición a la cual le añadiremos todos los pares de Propiedad CSS / Valor.

```html
<p>
  <a href="https://example.com">Link</a>
</p>
<dl id="regurgitation"></dl>
```

Añadimos un poco de CSS

```css
a {
  --colour: red;
  color: var(--colour);
}
```

Añadimos Javascript para tomar nuestro enlace y devolvemos una lista de definición de todos los valores de propiedades CSS usando `computedStyleMap().`

```js
// obtenemos el elemento
const myElement = document.querySelector("a");

// obtenemos la <dl> que llenaremos
const stylesList = document.querySelector("#regurgitation");

// recuperamos todos los estilos calculados con computedStyleMap()
const allComputedStyles = myElement.computedStyleMap();

// iteramos a través del mapa de todas las propiedades y valores, añadiendo un <dt> y <dd> para cada mapa
for (const [prop, val] of allComputedStyles) {
  // propiedades
  const cssProperty = document.createElement("dt");
  cssProperty.appendChild(document.createTextNode(prop));
  stylesList.appendChild(cssProperty);

  // valores
  const cssValue = document.createElement("dd");
  cssValue.appendChild(document.createTextNode(val));
  stylesList.appendChild(cssValue);
}
```

En [navegadores que soportan `computedStyleMap()`](/es/docs/Web/API/Element/computedStyleMap#Browser_compatibility), verás una lista de todas las propiedades CSS y valores. En otros navegadores verás un enlace.

{{EmbedLiveSample("Examples", 300, 300)}}

¿Te diste cuenta cuántas propiedades CSS por defecto tenía un enlace? Actualiza el '`a`' a un '`p`', y notarás una diferencia en los valores calculados por defecto del `margin-top` y `margin-bottom`.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
