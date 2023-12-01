---
title: "-webkit-mask-position"
slug: Web/CSS/mask-position
---

{{CSSRef}}{{Non-standard_header}}

## Sumario

La propiedad CSS `-webkit-mask-position` fija la posición inicial de una máscara de imagen.

{{cssinfo}}

## Síntaxis

{{csssyntax}}

## Valores

Acepta uno o dos valores. Se permiten valores negativos para {{cssxref("&lt;percentage&gt;")}} y {{cssxref("&lt;length&gt;")}}.

- Si sólo se especifica un valor, el segundo valor se supone que es center.
- El primer valor representa la posición horizontal y el segundo la posición vertical (si al menos un valor no es una palabra clave).

<!---->

- `<percentage>`
  - : Con un par de valores 0% 0%, (es igual a 0 0) la esquina superior izquierda de la imagen se alinea con la esquina superior izquierda del borde del relleno del cuadro. Un valor par de 100% 100% coloca la esquina inferior derecha de la imagen en la esquina inferior derecha del zona del relleno. Con un par de valores de 14% 84%, el punto del 14% a lo largo y el 84% hacia abajo de la imagen son situados el punto del 14% a lo largo y el 84% del área del relleno.
- `<length>`
  - : Con un par de valores 2cm 1cm, la esquina superior izquierda de la imagen se coloca a 2cm a la derecha y 1cm por debajo de la esquina superior izquierda del área del relleno.
- **`top`**
  - : Equivalente al 0% para la posición vertical.
- **`right`**
  - : Equivalente al 100% para la posición horizontal.
- **`bottom`**
  - : Equivalente al 100% para la posición vertical.
- **`left`**
  - : Equivalente al 0% para la posición horizontal.
- **`center`**
  - : Equivalente al 50% para la posición horizontal si no se da otra forma, o 50% para la posición vertical si lo es.

## Ejemplos

```css
.exampleOne {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position: bottom right;
}

.exampleTwo {
  -webkit-mask-image: url(mask.png);
  -webkit-mask-position: 25%;
}
```

## Especificaciones

No forma parte de ninguna especificación.

## Compatibilidad con navegadores

{{Compat}}

## Ver tambien

{{cssxref("-webkit-mask-origin")}}, {{cssxref("-webkit-mask-box-image")}}, {{cssxref("-webkit-mask-attachment")}}, {{cssxref("-webkit-mask-clip")}}, {{cssxref("-webkit-mask-image")}}, {{cssxref("-webkit-mask-composite")}}, {{cssxref("-webkit-mask-repeat")}}
