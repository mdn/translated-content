---
title: ":empty"
slug: Web/CSS/:empty
---

{{ CSSRef() }}

La [pseudo-clase](/es/docs/Web/CSS/Pseudo-classes) **`:empty`** de [CSS](/es/docs/Web/CSS) representa cualquier elemento que no tenga hijos. Los hijos pueden ser nodos de elemento o texto (incluido el espacio en blanco). Los comentarios o las instrucciones de procesamiento no afectan si un elemento se considera vacío.

> **Nota:** En [Selectors Level 4](https://drafts.csswg.org/selectors-4/#the-empty-pseudo) la pseudo-clase `:empty` fue modificada para actuar como {{CSSxRef(":-moz-only-whitespace")}}, pero ningún navegador actualmente suporta aún esto.

```css
/* Selecciona cualquier <div> que no contenga contenido */
div:empty {
  background: lime;
}
```

## Sintaxis

{{csssyntax}}

## Ejemplo

### HTML

```html
<div class="box"><!-- Voy a ser de color lima. --></div>
<div class="box">Voy a ser de color rosa.</div>
<div class="box">
  <!-- Seré de color rosa debido a los espacios en blanco alrededor de este comentario. -->
</div>
```

### CSS

```css hidden
body {
  display: flex;
  justify-content: space-around;
}
```

```css
.box {
  background: pink;
  height: 80px;
  width: 80px;
}

.box:empty {
  background: lime;
}
```

### Resultado

{{EmbedLiveSample('Ejemplo', 300, 80)}}

## Problemas de accesibilidad

La tecnología de asistencia, como los lectores de pantalla, no puede analizar el contenido interactivo que está vacío. Todo el contenido interactivo debe tener un nombre accesible, que se crea proporcionando un valor de texto para el elemento principal del control interactivo ([anclajes](/es/docs/Web/HTML/Element/a), [botones](/es/docs/Web/HTML/Element/button), etc.). Los nombres accesibles exponen el control interactivo al [árbol de accesibilidad](/es/docs/Learn/Accessibility/What_is_accessibility#Accessibility_APIs), una API que comunica información útil para las tecnologías de asistencia.

El texto que proporciona el nombre accesible del control interactivo se puede ocultar mediante una [combinación de propiedades](https://gomakethings.com/hidden-content-for-better-a11y/#hiding-the-link) que lo eliminan visualmente de la pantalla, pero que la tecnología de asistencia lo puede analizar. Esto se usa comúnmente para botones que dependen solo de un ícono para transmitir el propósito.

- [Qué es un nombre accesible (What is an accessible name?) | The Paciello Group](https://developer.paciellogroup.com/blog/2017/04/what-is-an-accessible-name/)
- [Contenido oculto para mejor a11y (Hidden content for better a11y) | Go Make Things](https://gomakethings.com/hidden-content-for-better-a11y/)
- [MDN entendiendo WCAG, explicaciones para el lineamiento 2.4](/es/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.4_%E2%80%94_Navigable_Provide_ways_to_help_users_navigate_find_content_and_determine_where_they_are)
- [Understanding Success Criterion 2.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/navigation-mechanisms-refs.html)

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
