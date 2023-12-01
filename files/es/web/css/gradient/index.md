---
title: <gradient>
slug: Web/CSS/gradient
---

{{CSSRef}}

## Resumen

El tipo de datos [CSS](/es/docs/CSS) `<gradient>` indica un tipo de {{cssxref("&lt;image&gt;")}} que consiste de una transición progresiva entre dos o más colores (Degradado).

{{EmbedInteractiveExample("pages/css/type-gradient.html")}}

Un gradiente de CSS no es un {{cssxref("&lt;color&gt;")}} pero tampoco es una imagen con [dimensiones intrínsecas](/es/docs/Web/CSS/image#no_intrinsic); es decir, que no tiene tamaño natural o preferido, ni una relación preferida. Su tamaño concreto coincidirá con los elementos a los que se aplica.

**Funciones de las Gradientes**

Hay tres tipos de gradientes de color:

#### Linear gradients (gradiente lineal)

Generados por la función {{cssxref("linear-gradient", "linear-gradient()")}}, donde el color se desvanece suavemente a lo largo de una línea imaginaria.

```html
A rainbow made from a gradient
```

```css
body {
  background: -moz-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: -webkit-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: -ms-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: -o-linear-gradient(
    left,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
  background: linear-gradient(
    to right,
    red,
    orange,
    yellow,
    green,
    blue,
    indigo,
    violet
  );
}
```

{{ EmbedLiveSample('linear-gradient', 600, 20) }}

#### Radial gradient (gradientes radiales)

Generados por la función {{cssxref("radial-gradient", "radial-gradient()")}}. Cuanto más lejos de un origen sea un punto, más lejos del color original será.

```html
Radial gradient
```

```css
body {
  background: -moz-radial-gradient(red, yellow, rgb(30, 144, 255)) repeat scroll
    0% 0% transparent;
  background: radial-gradient(red, yellow, rgb(30, 144, 255));
}
```

{{ EmbedLiveSample('radial-gradient', 600, 20) }}

#### Repeating gradient (gradientes de repetición)

Donde se repiten gradientes lineales o radiales tanto como sea necesario para llenar toda la caja.

```html
Repeating gradient
```

```css
body {
  background: -moz-repeating-linear-gradient(
    top left -45deg,
    red,
    red 5px,
    white 5px,
    white 10px
  );
  background: repeating-linear-gradient(
    to top left,
    red,
    red 5px,
    white 5px,
    white 10px
  );
}
```

{{ EmbedLiveSample('repeating-gradient', 600, 20) }}

## Interpolación

Al igual que con cualquier caso de interpolación de colores, los gradientes se calculan en el espacio de color alfa-premultiplicado. Esto impide que sombras de gris inesperadas aparezcan cuando el color o la opacidad están variando. (debe tener en cuenta que los navegadores mas antiguos no tienen incorporado este tipo de comportamient cuando utiliza la palabra clave "[transparent](/es/docs/Web/CSS/color_value#transparent_keyword)" del inglés transparente ( para más información hacer clic en el link))

## Especificaciones

{{Specifications}}

## Compatibilidad del navegador

Cada tipo de gradiente tiene una matriz de compatibilidad diferente. Por favor, consulte cada artículo individualmente.

## Ver también

- [Usando Gradientes CSS](/es/docs/CSS/Using_CSS_gradients), {{cssxref("&lt;gradient&gt;")}}, {{cssxref("linear-gradient", "linear-gradient()")}}, {{cssxref("radial-gradient", "radial-gradient()")}}, {{cssxref("repeating-linear-gradient", "repeating-linear-gradient()")}}, {{cssxref("repeating-radial-gradient", "repeating-radial-gradient()")}}
