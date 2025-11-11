---
title: Pseudo-classes
slug: Web/CSS/Pseudo-classes
---

{{ CSSRef() }}

Una **pseudoclase CSS** es una palabra clave que se añade a los selectores y que especifica un estado especial del elemento seleccionado. Por ejemplo, {{ Cssxref(":hover") }} aplicará un estilo cuando el usuario haga hover sobre el elemento especificado por el selector.

```
div:hover {
  background-color: #F89B4D;
}
```

Las pseudoclases, junto con los pseudoelementos, permiten aplicar un estilo a un elemento no sólo en relación con el contenido del árbol de documento, sino también en relación a factores externos como el historial del navegador ({{ cssxref(":visited") }}, por ejemplo), el estado de su contenido (como {{ cssxref(":checked") }} en algunos elementos de formulario), o la posición del ratón (como {{ cssxref(":hover") }} que permite saber si el ratón está encima de un elemento o no).

> [!NOTE]
> En lugar de usar pseudoclases, {{cssxref("pseudo-elements")}} puede usarse para dar estilo a una _parte específica_ de un elemento.

## Sintaxis

```
selector:pseudoclase { propiedad: valor; }
```

Al igual que las clases, se pueden concatenar la cantidad de pseudoclases que se deseen en un selector.

## Indice de las pseudo-clases estándar

- {{ Cssxref(":active") }}
- {{ Cssxref(":checked") }}
- {{ Cssxref(":default") }}
- {{ Cssxref(":dir", ":dir()")}}
- {{ Cssxref(":disabled") }}
- {{ Cssxref(":empty") }}
- {{ Cssxref(":enabled") }}
- {{ Cssxref(":first") }}
- {{ Cssxref(":first-child") }}
- {{ Cssxref(":first-of-type") }}
- {{ Cssxref(":fullscreen") }}
- {{ Cssxref(":focus") }}
- {{ Cssxref(":hover") }}
- {{ Cssxref(":indeterminate") }}
- {{ Cssxref(":in-range") }}
- {{ Cssxref(":invalid") }}
- {{ Cssxref(":lang", ":lang()") }}
- {{ Cssxref(":last-child") }}
- {{ Cssxref(":last-of-type") }}
- {{ Cssxref(":left") }}
- {{ Cssxref(":link") }}
- {{ Cssxref(":not", ":not()") }}
- {{ Cssxref(":nth-child", ":nth-child()") }}
- {{ Cssxref(":nth-last-child", ":nth-last-child()") }}
- {{ Cssxref(":nth-last-of-type", ":nth-last-of-type()") }}
- {{ Cssxref(":nth-of-type", ":nth-of-type()") }}
- {{ Cssxref(":only-child") }}
- {{ Cssxref(":only-of-type") }}
- {{ Cssxref(":optional") }}
- {{ Cssxref(":out-of-range") }}
- {{ Cssxref(":read-only") }}
- {{ Cssxref(":read-write") }}
- {{ Cssxref(":required") }}
- {{ Cssxref(":right") }}
- {{ Cssxref(":root") }}
- {{ Cssxref(":scope") }}
- {{ Cssxref(":target") }}
- {{ Cssxref(":valid") }}
- {{ Cssxref(":visited") }}

## Especificaciones

{{Specifications}}
