---
title: background-position
slug: Web/CSS/background-position
---

{{ PreviousNext("CSS:background-image", "CSS:background-repeat") }}

## Resumen

`background-position` define la posición inicial de la imagen de fondo especificada.

- {{ Cssxref("initial", "Valor inicial") }}: 0% 0%
- Se aplica a: todos los elementos
- {{ Cssxref("inheritance", "Herencia") }}: no
- Porcentajes: se refiere al tamaño de la caja misma
- Medio: {{ Cssxref("Media:Visual", "visual") }}
- {{ Cssxref("computed value", "Valor calculada") }}: para \<length> el valor absoluto, para otros un porcentaje.

## Sintaxis

```
background-position: [ <percentage> | <length> | left | center | right  ]
                     [ <percentage> | <length> | top  | center | bottom ] ? ;
```

```
background-position: [ top | center | bottom ];
```

```
background-position: inherit;
```

### Valores

- {{ Cssxref("porcentaje") }} \<percentage>
  - : Con el par de valores '0% 0%', la esquina izquierda de la imagen es alineada con la esquina izquierda del borde del espaciado de la caja. Un valor '100% 100%' pone la esquina inferior de la imagen en la esquina inferior del área de espaciado. Con un valor '14% 84%', el punto a 14% a la derecha y 84% abajo de la imagen es colocado en el punto al 14% derecha y 84% abajo del área de espaciado.
- {{ Cssxref("length") }} \<length>
  - : con un valor '2cm 1cm', la esquina superior izquierda de la imagen es colocada a 2 cm a la derecha y a 1cm debajo de la esquina superior izquierda del área de espaciado.
- top left y left top
  - : Es igual a '0% 0%'.
- top, top center y center top
  - : Es igual a '50% 0%'.
- right top y top right
  - : Es igual a '100% 0%'.
- left, left center y center left
  - : Es igual a '0% 50%'.
- center and center center
  - : Es igual a '50% 50%'.
- right, right center y center right
  - : Es igual a '100% 50%'.
- bottom left y left bottom
  - : Es igual a '0% 100%'.
- bottom, bottom center y center bottom
  - : Es igual a '50% 100%'.
- bottom right y right bottom
  - : Es igual a '100% 100%'.

Si solo se especifica un valor, se entenderá que es la posición horizontal con la vertical al 50%. De otra manera el primer valor especifica la posición horizontal. Se admiten valores negativos y combinaciones de palabras claves, largos (lenght) o porcentajes, pero en el caso de mezclar las palabras claves con otros valores, '**left' y 'right'** solo se utilizarán como primer valor y '**top' y 'bottom'** como segundo.

## Ejemplos

```
.exampleone {
 background-image: url("logo.png");
 background-position: top center;
}

.exampletwo {
 background-image: url("logo.png");
 background-position: 25% 75%;
}

.examplethree {
 background-image: url("logo.png");
 background-position: 2cm bottom;
}

.examplefour {
 background-image: url("logo.png");
 background-position: center 10%;
}

.examplefive {
 background-image: url("logo.png");
 background-position: 2cm 50%;
}
```

### Especificaciones

{{Specifications}}

### Compatibilidad con navegadores

{{Compat}}

### Ver también

{{ Cssxref("background") }}, {{ Cssxref("background-attachment") }}, {{ Cssxref("background-color") }}, {{ Cssxref("background-image") }}, {{ Cssxref("background-position") }}, {{ Cssxref("background-repeat") }}
