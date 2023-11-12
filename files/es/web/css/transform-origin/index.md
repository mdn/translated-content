---
title: transform-origin
slug: Web/CSS/transform-origin
---

{{ CSSRef("CSS Transforms") }} {{ SeeCompatTable() }}

## Resumen

La propiedad CSS `transform-origin` le permite modificar el origen de las transformaciones de un elemento. Por ejemplo, el transform-origin de la función `rotate()` es el centro de rotación. (Esta propiedad es aplicada a la primera translación del elemento por el valor negativo de la propiedad. A continuación, aplicar la transformación del elemento y después trasladar el valor de la propiedad).

Los valores no establecidos explícitamente se restablecen a sus valores originales.

{{cssinfo}}

## Sintaxis

```
Sintaxis Formal: {{csssyntax("transform-origin")}}
```

```
transform-origin: x-offset                                   /* Sintaxis con valor único */   E.g.  transform-origin: 2px
transform-origin: offset-keyword                                                      E.g.  transform-origin: bottom

transform-origin: x-offset y-offset                          /* Sintaxis con dos valores */   E.g.  transform-origin: 3cm 2px
transform-origin: y-offset x-offset-keyword                                           E.g.  transform-origin: 2px left
transform-origin: x-offset-keyword y-offset                                           E.g.  transform-origin: left 2px
transform-origin: x-offset-keyword y-offset-keyword                                   E.g.  transform-origin: right top
transform-origin: y-offset-keyword x-offset-keyword                                   E.g.  transform-origin: top right

transform-origin: x-offset y-offset z-offset                 /* Sintaxis con tres valores */ E.g.  transform-origin: 2px 30% 10px
transform-origin: y-offset x-offset-keyword z-offset                                  E.g.  transform-origin: 2px left 10px
transform-origin: x-offset-keyword y-offset z-offset                                  E.g.  transform-origin: left 5px -3px
transform-origin: x-offset-keyword y-offset-keyword z-offset                          E.g.  transform-origin: right bottom 2cm
transform-origin: y-offset-keyword x-offset-keyword z-offset                          E.g.  transform-origin: bottom right 2cm
```

### Valores

- _x-offset_
  - : Es una {{cssxref("&lt;length&gt;")}} o un {{cssxref("&lt;percentage&gt;")}} que describe a qué distancia del borde izquierdo de la caja se establece el origen de la transformación.
- _offset-keyword_
  - : Es una de las palabras clave `left`, `right`, `top`, `bottom` o `center` que describen el correspondiente desplazamiento.
- _y-offset_
  - : Es una {{cssxref("&lt;length&gt;")}} o un {{cssxref("&lt;percentage&gt;")}} que indica a qué distancia del borde superior de la caja se establece el origen de la transformación.
- _x-offset-keyword_
  - : Es una de las palabras clave `left`, `right` o `center` que indica a qué distancia del borde izquierdo de la caja se establece el origen de la transformación.
- _y-offset-keyword_
  - : Es una de las palabras clave `top`, `bottom` o `center` que indica a qué distancia del borde superior de la caja se establece el origen de la transformación.
- _z-offset_
  - : Es una {{cssxref("&lt;length&gt;")}} (y nunca un {{cssxref("&lt;percentage&gt;")}} el cual sería una declaración no válida) que describe que tan lejos del ojo del usuario se estable el origen de la posición z=0.

Las palabras clave son abreviaciones por convención que coinciden con los siguientes valores {{cssxref("&lt;percentage&gt;")}}:

| Propiedad | Valor  |
| --------- | ------ |
| `left`    | `0%`   |
| `center`  | `50%`  |
| `right`   | `100%` |
| `top`     | `0%`   |
| `bottom`  | `100%` |

## Ejemplos

Ver [Uso de CSS transforms](/En/CSS/Using_CSS_transforms) para más ejemplos.

### Ejemplos en vivo

| `transform: none;`                                         |     |
| ---------------------------------------------------------- | --- |
| `transform: rotate(30deg);`                                |     |
| `transform: rotate(30deg); transform-origin: 0 0;`         |     |
| `transform: rotate(30deg); transform-origin: 100% 100%;`   |     |
| `transform: rotate(30deg); transform-origin: -10em -30em;` |     |
| `transform: scale(1.9);`                                   |     |
| `transform: scale(1.9); transform-origin: 0 0;`            |     |
| `transform: scale(1.9); transform-origin: 100% -30%;`      |     |
| `transform: skewX(50deg);`                                 |     |
| `transform: skewY(50deg); transform-origin: 0 0;`          |     |

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Uso de CSS transform](/es/docs/CSS/Using_CSS_transforms)
