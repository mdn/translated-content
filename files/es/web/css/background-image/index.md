---
title: background-image
slug: Web/CSS/background-image
l10n:
  sourceCommit: 642f2385b7cf791b3a40a81a17752f5b0c3208ea
---

{{CSSRef}}

La propiedad [CSS](/es/docs/Web/CSS) **`background-image`** establece una o más imágenes de fondo para un elemento.

{{EmbedInteractiveExample("pages/css/background-image.html")}}

Las imágenes de fondo se dibujan apilando capas de contexto una encima de la otra. La primera capa especificada se dibuja como si estuviera más cerca del usuario.

Los [bordes](/es/docs/Web/CSS/border) del elemento se dibujan encima de ellos y el {{cssxref("background-color")}} se dibuja debajo de ellos. La forma en que se dibujan las imágenes en relación con el cuadro y sus bordes se define mediante las propiedades CSS {{cssxref("background-clip")}} y {{cssxref("background-origin")}}.

Si no se puede dibujar una imagen específica (por ejemplo, cuando no se puede cargar el archivo indicado por el URI especificado), los navegadores lo manejan como si fuera un valor `none`.

> [!NOTE]
> Incluso si las imágenes son opacas y el color no se mostrará en circunstancias normales, los desarrolladores web siempre deben especificar un {{cssxref("background-color")}}. Si las imágenes no se pueden cargar, por ejemplo, cuando la red no funciona, el color de fondo se utilizará como alternativa.

## Sintaxis

Cada imagen de fondo se especifica como la palabra clave `none` o como un valor {{cssxref("&lt;image&gt;")}}.

Para especificar varias imágenes de fondo, proporcione varios valores, separados por una coma:

```css
background-image:
  linear-gradient(to bottom, rgba(255, 255, 0, 0.5), rgba(0, 0, 255, 0.5)),
  url("cat-front.png");

/* Valores globales */
background-image: inherit;
background-image: initial;
background-image: revert;
background-image: revert-layer;
background-image: unset;
```

### Valores

- `none`
  - : Utilizado para especificar que un elemento no debe tener imagen de fondo.
- `<image>`
  - : Es un {{cssxref("&lt;image&gt;")}} que indica la imagen que se va a mostrar. Puede haber varios, separados por comas, ya que se admiten [fondos múltiples](/es/docs/Web/CSS/CSS_backgrounds_and_borders/Using_multiple_backgrounds).

## Problemas de accesibilidad

Los navegadores no brindan ninguna información especial sobre imágenes de fondo a la tecnología de asistencia. Esto es importante principalmente para los lectores de pantalla, ya que un lector de pantalla no anunciará su presencia y, por lo tanto, no transmitirá nada a sus usuarios. Si la imagen contiene información crítica para comprender el propósito general de la página, es mejor describirla semánticamente en el documento.

- [MDN Entendiendo las WCAG, Directriz 1.1 explicaciones](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_%e2%80%94_providing_text_alternatives_for_non-text_content)
- [Comprender el Criterio de Conformidad 1.1.1 | W3C Entendiendo las WCAG 2.0](https://www.w3.org/TR/2016/NOTE-UNDERSTANDING-WCAG20-20161007/text-equiv-all.html)

## Definicion formal

{{cssinfo}}

## Sytaxis formal

{{csssyntax}}

## Ejemplos

### Imagenes por capas

Tenga en cuenta que la imagen de la estrella es parcialmente transparente y se superpone a la imagen del gato.

#### HTML

```html
<div>
  <p class="catsandstars">Este párrafo está lleno de gatos<br />y estrellas.</p>
  <p>Este párrafo no.</p>
  <p class="catsandstars">Aquí hay más gatos para ti.<br />¡Míralos!</p>
  <p>Y no mas.</p>
</div>
```

#### CSS

```css
p {
  font-size: 1.5em;
  color: #fe7f88;
  background-image: none;
  background-color: transparent;
}

div {
  background-image: url("mdn_logo_only_color.png");
}

.catsandstars {
  background-image: url("star-transparent.gif"), url("cat-front.png");
  background-color: transparent;
}
```

#### Result

{{EmbedLiveSample('Ejemplos')}}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Implementando sprites de imagen en CSS](/es/docs/Web/CSS/CSS_Images/Implementing_image_sprites_in_CSS)
- {{HTMLElement("img")}}
- Tipos de datos relacionados con imágenes: {{cssxref("&lt;image&gt;")}}, {{cssxref("&lt;gradient&gt;")}}
- Funciones relacionadas con la imagen:

  - {{cssxref("cross-fade", "cross-fade()")}}
  - {{cssxref("element", "element()")}}
  - {{cssxref("image/image", "image()")}}
  - {{cssxref("image/image-set", "image-set()")}}
  - {{cssxref("gradient/linear-gradient", "linear-gradient()")}}
  - {{cssxref("gradient/radial-gradient", "radial-gradient()")}}
  - {{cssxref("gradient/conic-gradient", "conic-gradient()")}}
  - {{cssxref("gradient/repeating-linear-gradient", "repeating-linear-gradient()")}}
  - {{cssxref("gradient/repeating-radial-gradient", "repeating-radial-gradient()")}}
  - {{cssxref("gradient/repeating-conic-gradient", "repeating-conic-gradient()")}}
  - {{cssxref("image/paint", "paint()")}}
  - {{cssxref("url", "url()")}}
