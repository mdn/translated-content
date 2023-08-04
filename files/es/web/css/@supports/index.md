---
title: "@supports"
slug: Web/CSS/@supports
---

{{ CSSRef() }}

## Resumen

La regla "CSS `@supports"`asocia un conjunto de declaraciones anidadas en un bloque CSS (que está delimitado por corchetes) con una condición consistente en probar declaraciones de CSS (es decir, pares propiedad-valor, así como conjunciones, disjunciones o negaciones abritrarias sobre ellas). A esas condiciones se le llama condición "soporta" _(supports condition)_.

`@supports` otorga la habilidad de realizar consultas que comprueben si ciertas funcionalidades están disponibles _(feature query)_.

La regla `@supports` puede ser usada tanto en el nivel superior de una hoja de estilos, como dentro de cualquier [regla de grupo condicional](/en/CSS/At-rule#Conditional_Group_Rules) y se puede acceder a ella a través del modelo de objetos de CSS {{domxref("CSSSupportsRule")}}.

## Sintaxis

Una condición "soporta" _(supports condition)_ consiste en una o varias declaraciones combinadas por diferentes operadores lógicos. La precedencia de los operadores puede ser definida usando paréntesis.

### Sintaxis de una declaración

La expresión más simple es una declaración CSS, es decir el nombre de una propiedad CSS seguida por un valor, separada por dos puntos. La siguiente expresión

```css
( transform-origin: 5% 5% )
```

devuelve "cierto" si la {{ cssxref("transform-origin") }} implementa una sintaxis que reconoce `5% 5%` como válida.

Una declaración CSS está siempre rodeada entre paréntesis.

### El operador "`not` "

El operador `not` puede preceder cualquier expresión para crear una nueva, resultando en la negación de la expresión original. La siguiente expresión

```css
not ( transform-origin: 10em 10em 10em )
```

devuelve "cierto" si {{ cssxref("transform-origin") }} no reconoceo `10em 10em 10em` como una sintaxis válida.

Como cualquier operador, el operador `not` puede ser aplicado a una declaración de complejidad arbitraria. Los siguientes ejemplos son todas expresiones válidas:

```css
not ( not ( transform-origin: 2px ) )
(display: flexbox) and ( not (display: inline-grid) )
```

> **Nota:** no hay necesidad de encerrar el operador `not` entre paréntesis cuando se encuentra en el nivel superior. Para combinarlo con otros operadores, como `and` y `or`, sí se requieren paréntesis

### El operador "`and`"

Partiendo de dos expresiones, el operador `and` crea una nueva expresión consistente en la conjunción de dos originales; la expresión resultante es verdadera si sólo ambas expresiones originales lo son. En este ejemplo, la expresión completa resuelve a true si y sólo si, las dos expresiones son simultáneamente veraderas:

```css
(display: table-cell) and (display: list-item)
```

Varias conjunciones pueden ser yuxtapuestas sin la necesidad de agregar paréntesis:

```css
(display: table-cell) and (display: list-item) and (display:run-in)
```

es equivalente a:

```css
(display: table-cell) and ((display: list-item) and (display:run-in))
```

### El operador "`or"`

Partiendo de dos expresiones, el operador `or` crea una nueva expresión consistente en la disyunción de dos originales; la expresión resultante es verdadera si una o ambas expresiones originales lo son. En este ejemplo, la expresión completa resuelve a true si al menos una de las dos expresiones es veradera:

```css
( transform-style: preserve ) or ( -moz-transform-style: preserve )
```

Varias disyunciones pueden ser yuxtapuestas sin la necesidad de agregar paréntesis:

```css
( transform-style: preserve ) or ( -moz-transform-style: preserve ) or
( -o-transform-style: preserve ) or ( -webkit-transform-style: preserve  )
```

es equivalente a:

```css
( transform-style: preserve-3d ) or (( -moz-transform-style: preserve-3d ) or
(( -o-transform-style: preserve-3d ) or ( -webkit-transform-style: preserve-3d  )))
```

> **Nota:** cuando se usan `and` y `or`, el paréntesis debe ser usado para definir el orden en el cual aplican. Si no, la condición es inválida provocando que se ignore todo el "at-rule" .

### Sintaxis formal

{{csssyntax}}

## Ejemplos

### Prueba "soporta" de una propiedad CSS determinada

```css
@supports (animation-name: test) {
    … /* specific CSS applied when animations are supported unprefixed */
    @keyframes { /* @supports being a CSS conditional group at-rule, it can includes other relevant at-rules */
      …
    }
}
```

### Prueba "soporta" de una propiedad CSS determinada o de una versión con prefijo

```css
@supports ( (perspective: 10px) or (-moz-perspective: 10px) or (-webkit-perspective: 10px) or
            (-ms-perspective: 10px) or (-o-perspective: 10px) ) {
    … /* specific CSS applied when 3D transforms, eventually prefixed, are supported */
}
```

### Prueba "soporta" para propiedades customizadas

```css
@supports not ((text-align-last:justify) or (-moz-text-align-last:justify) ){
    … /* specific CSS applied to simulate text-align-last:justify */
}
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La clase CSSOM {{ domxref("CSSSupportsRule") }}, y el método {{ domxref("CSS.supports") }} que permite chequear via JavaScript.
