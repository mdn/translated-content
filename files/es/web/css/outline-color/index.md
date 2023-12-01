---
title: outline-color
slug: Web/CSS/outline-color
---

{{CSSRef}}

La propiedad CSS **`outline-color`** establece el color del contorno de un elemento.

{{EmbedInteractiveExample("pages/css/outline-color.html")}}

## Sintaxis

```css
/* Valores de <color> */
outline-color: #f92525;
outline-color: rgb(30, 222, 121);
outline-color: blue;

/* Valor de palabra clave */
outline-color: invert;

/* Valores globales */
outline-color: inherit;
outline-color: initial;
outline-color: revert;
outline-color: revert-layer;
outline-color: unset;
```

La propiedad `outline-color` se especifica como cualquiera de los valores enumerados a continuación.

### Valores

- {{cssxref("&lt;color&gt;")}}
  - : El color del contorno, especificado como `<color>`.
- `invert`
  - : Para asegurarse de que el contorno sea visible, realiza una inversión de color del fondo. Tenga en cuenta que no es necesario que los navegadores admitan este valor; si no lo hacen, esta palabra clave se considera no válida.

## Descripción

Un contorno es una línea que se dibuja alrededor de un elemento, fuera de {{cssxref("border")}}. A diferencia del borde del elemento, el contorno se dibuja fuera del marco del elemento y puede superponerse a otro contenido. El borde, por otro lado, en realidad alterará el diseño de la página para asegurarse de que encaje sin superponerse con nada más (a menos que lo establezca explícitamente para que se superponga).

Suele ser más conveniente usar la propiedad abreviada {{cssxref("outline")}} al definir la apariencia de un contorno.

## Problemas de accesibilidad

Los [estilos de enfoque](/es/docs/Web/CSS/:focus) personalizados normalmente implican realizar ajustes en la propiedad {{cssxref("outline")}}. Si se ajusta el color del contorno, es importante asegurarse de que la relación de contraste entre este y el fondo sobre el que se coloca el contorno sea lo suficientemente alta como para que las personas con problemas de visión puedan percibirlo.

La relación de contraste de color se determina comparando la luminosidad del texto y los valores de color de fondo. Para cumplir con las [Directrices de Accesibilidad al Contenido Web (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/) actuales, se requiere una proporción de 4.5:1 para el contenido de texto y de 3:1 para textos más grandes, como los encabezados. El texto grande se define como 18.66 px y en [negrita](/es/docs/Web/CSS/font-weight) o más grande, o 24 px o más.

- [WebAIM: Comprobador de contraste de color](https://webaim.org/resources/contrastchecker/)
- [MDN Entendiendo las WCAG, Directriz 1.4 explicaciones](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.4_make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Comprender el Criterio de Conformidad 1.4.3 | W3C Entendiendo las WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

## Definicion formal

{{cssinfo}}

## Sintaxis formal

{{csssyntax}}

## Ejemplo

### Establecer un contorno azul sólido

#### HTML

```html
<p>Como puedes ver, mi contorno es azul.</p>
```

#### CSS

```css
p {
  outline: 2px solid; /* Establecer el ancho y el estilo del contorno */
  outline-color: #0000ff; /* Hacer el contorno azul */
  margin: 5px;
}
```

#### Resultado

{{ EmbedLiveSample('Establecer_un_contorno_azul_solido') }}

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- {{cssxref("outline")}}
- {{cssxref("outline-color")}}
- {{cssxref("outline-style")}}
- {{cssxref("outline-width")}}
- El tipo de dato {{cssxref("&lt;color&gt;")}}
- Otras propiedades relacionadas con el color: {{cssxref("color")}}, {{cssxref("background-color")}}, {{cssxref("border-color")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-emphasis-color")}}, {{cssxref("text-shadow")}}, {{cssxref("caret-color")}}, y {{cssxref("column-rule-color")}}
- [Aplicar color a elementos HTML usando CSS](/es/docs/Web/CSS/CSS_Colors/Applying_color)
