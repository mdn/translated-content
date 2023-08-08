---
title: "::placeholder"
slug: Web/CSS/::placeholder
---

{{CSSRef}}

El [pseudo-elemento CSS](/es/docs/Web/CSS/Pseudo-elements) **`::placeholder`** representa el [texto provisional](/es/docs/Web/HTML/Forms_in_HTML#The_placeholder_attribute) en un elemento {{HTMLElement("input")}} o un elemento {{HTMLElement("textarea")}}.

```css
::placeholder {
  color: blue;
  font-size: 1.5em;
}
```

Solo el subconjuto de las propiedades CSS que aplican al pseudo-elemento {{cssxref("::first-line")}} puede ser usado en una regla utilizando `::placeholder` en su selector.

> **Nota:** En la mayoría de navegadores, la apariencia del texto provisional es traslúcido o un color gris claro por defecto.

## Sintáxis

{{csssyntax}}

## Ejemplos

### Texto rojo

#### HTML

```html
<input placeholder="Type something here!" />
```

#### CSS

```css
input::placeholder {
  color: red;
  font-size: 1.2em;
  font-style: italic;
}
```

#### Resultado

{{EmbedLiveSample("Red_text", 200, 60)}}

### Texto verde

#### HTML

```html
<input placeholder="Type something here..." />
```

#### CSS

```css
input::placeholder {
  color: green;
}
```

#### Result

{{EmbedLiveSample("Green_text", 200, 60)}}

## Preocupaciones por la accesibilidad

### Contraste de color

#### Contraste de color

El texto temporal generalmente tiene un color más claro para indicar que es una sugerencia para el tipo de entrada que será válido, y no es una entrada real de cualquier tipo.

Es importante asegurarse que el radio de contraste entre el color del texto provisional y el fondo de la entrada es lo suficientemente alto para que las personas que experimenten condiciones de visión baja sean capaces de leer el texto mientras también asegurarse que hay diferencia suficiente entre el color del texto temporal y el color del texto de entrada para que los usuarios no confundad el texto provisional con la información de ingreso.

El radio del color de contraste es determinado al comparar la luminosidad entre dos colores. Para cumplir las actuales [Pautas de Accesibilidad para el Contenido Web (WCAG)](https://www.w3.org/WAI/standards-guidelines/wcag/es), un radio de 4.5:1 es requerido para el contenido de un texto y 3:1 para textos más grandes como encabezados. Un texto grando es definido como 18.66px o mayor en negritas; o 24px o mayor.

- [WebAIM: Comprobador de contraste de color](https://webaim.org/resources/contrastchecker/)
- [MDN Entendiendo WCAG, Explicaciones del lineamiento 1.4](/es/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Entendiendo críterios exitósos 1.4.3 | W3C Entendiendo WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html)

#### Usabilidad

Un texto temporal con suficiente contraste puede ser interpretado como una entrada. El texto provisional podría desaparecer cuando una persona ingresa contenido en un elemento {{htmlelement("input")}}. Ámbas circunstancias pueden interferir con el correcto llenado de un formulario, especialmente para personas con dificultades cogniticas.

Un acercamiento alternativo para proveer información provisional es incluirla afuera del campo de entrada en proximidad visual, entonces usar [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/ARIA_Techniques/Using_the_aria-describedby_attribute) para programáticamente asociar la entrada {{HTMLElement("input")}} con su sugerencia.

Con esta implementación, el contenido de la sugerencia, esta disponible incluso cuando información es ingresada en el campo de entrada, y la entrada aparece libre de una _entrada_ preexistente cuando la página ha cargado. Muchas de las tecnologías de lectores de pantalla usan `aria-describedby` para leer la sugerencia después de que la etiqueta de la entrada de texto hay sido anunciada, y la persona utilizando el lector de pantalla puede silenciarla si encuentra la información adicional innecesaria..

```html
<label for="user-email">Your email address</label>
<span id="user-email-hint" class="input-hint">Example: jane@sample.com</span>
<input
  id="user-email"
  aria-describedby="user-email-hint"
  name="email"
  type="email" />
```

- [Los textos provisionales en los campos del formulario son dañinos (Placeholders in Form Fields Are Harmful) — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

### Modo de alto contraste de Windows

El campo temporal puede aparecer con el mismo estilo como el texto ingresado por el usuario cuando se utiliza el [Modo de alto contraste de Windows](/es/docs/Web/CSS/-ms-high-contrast). Eso hará difícil para algunas personas determinar que contenido ha sido ingresado y que contenido es un texto temporal

- [Greg Whitworth — Cómo usar -ms-high-contrast (How to use -ms-high-contrast)](http://www.gwhitworth.com/blog/2017/04/how-to-use-ms-high-contrast)

### Etiquetas

El texto provisional no es un reemplazo para el elemento {{htmlelement("label")}}. Sin una etiqueta que ha sido programaticamente asociada con la entrada usando una combinación de los atributos [`for`](/es/docs/Web/HTML/Element/label#for) y [`id`](/es/docs/Web/HTML/Global_attributes#id), tecnología asistiva como los lectores de pantalla no pueden leer los elementos {{htmlelement("input")}}.

- [Sugerencias básicas de formularios (MDN Basic form hints)](/es/docs/Web/Accessibility/ARIA/forms/Basic_form_hints)
- [Los textos provisionales en los campos del formulario son dañinos (Placeholders in Form Fields Are Harmful) — Nielsen Norman Group](https://www.nngroup.com/articles/form-design-placeholders/)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- La pseudo-clase {{cssxref(":placeholder-shown")}} provee estilos a un elemento que _tiene_ un texto provisional activo.
- Elementos HTML relacionados: {{HTMLElement("input")}}, {{HTMLElement("textarea")}}
- [Formularios HTML](/es/docs/Learn/HTML/Forms)
