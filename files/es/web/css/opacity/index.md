---
title: opacity
slug: Web/CSS/opacity
---

{{ CSSRef() }}

## Resumen

La propiedad CSS `opacity` define la transparencia de un elemento, esto es, en qué grado se superpone el fondo al elemento.

Usar esta propiedad con un valor diferente a 1 situa al elemento en un nuevo [contexto de apilamiento](/en/CSS/Understanding_z-index/The_stacking_context).

{{cssinfo}}

## Sintaxis

```
opacity:  <valor alfanumérico>
```

### Valores

- `<alphavalue>`

  - : Es un número cuyo valor se encuentra entre 0.0 y 1.0, ambos incluidos. Este valor representa la opacidad. Si el valor se sale de la escala, será ajustado al valor válido más cercano.

    | valor                       | Significado                              |
    | --------------------------- | ---------------------------------------- |
    | `0`                         | El elemento es transparente (invisible). |
    | Cualquier valor entre 0 y 1 | El elemento es translúcido.              |
    | `1`                         | El elemento es opaco (sólido).           |

## Ejemplos

```css
hbox.example {
  opacity: 0.5; /* see the background through the hbox */
}
```

### Live Example

```
pre {                               /* make the box translucent (20% opaque) */
   border: solid red;
   opacity: 0.2;
   filter: alpha(opacity=20);       /* IE8 and lower */
   zoom: 1;       /* set "zoom", "width" or "height" to trigger "hasLayout" in IE 7 and lower */
}
```

```
pre {                               /* make the box translucent (50% opaque) */
   border: solid red;
   opacity: 0.5;
   filter: alpha(opacity=50);       /* IE8 and lower */
   zoom: 1;       /* set "zoom", "width" or "height" to trigger "hasLayout" in IE 7 and lower */
}
```

```
pre {                               /* make the box translucent (80% opaque) */
   border: solid red;
   opacity: 0.8;
   filter: alpha(opacity=80);       /* IE8 and lower */
   zoom: 1;       /* set "zoom", "width" or "height" to trigger "hasLayout" in IE 7 and lower */
}
```

### Variando la opacidad con :hover

```html
<!doctype html>
<html>
  <head>
    <style>
      img.opacity {
        opacity: 1;
        filter: alpha(opacity=50);
        zoom: 1;
      }

      img.opacity:hover {
        opacity: 0.5;
        filter: alpha(opacity=100);
        zoom: 1;
      }
    </style>
  </head>

  <body>
    <img
      src="//developer.mozilla.org/media/img/mdn-logo.png"
      alt="MDN logo"
      width="128"
      height="146"
      class="opacity" />
  </body>
</html>
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Más información

- [MSDN Microsoft's filter:alpha(opacity=xx)](http://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
