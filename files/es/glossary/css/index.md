---
title: CSS
slug: Glossary/CSS
---

{{GlossarySidebar}}

**CSS,** de las siglas en inglés **C**ascading **S**tyle **S**heets (Hojas de Estilo en Cascada), es un lenguaje declarativo que controla el aspecto de las páginas web en el {{glossary("browser","navegador")}}. El navegador aplica declaraciones de estilo CSS a los elementos seleccionados para exhibirlos correctamente. Una declaración de estilos contiene las propiedades y sus respectivos valores, los cuales determinan cómo se verá una página web.

CSS es una de las tres principales tecnologias web, junto con {{Glossary("HTML")}} y {{Glossary("JavaScript")}}. CSS usualmente le da estilo a los ({{Glossary("Element","elementos HTML")}}), pero también puede ser utilizado con otros lenguajes de marcado como {{Glossary("SVG")}} o {{Glossary("XML")}}.

Una regla CSS es un conjunto de {{Glossary("CSS Property","propiedades")}} asociadas con un {{Glossary("CSS selector","selector")}}. Aquí tenemos un ejemplo que hace que cada párrafo HTML sea amarillo, sobre un fondo negro:

```css
/* El selector "p" indica que todos los párrafos del documento serán afectados por esta regla */
p {
  /* La propiedad "color" define el color del texto, en este caso amarillo. */
  color: yellow;

  /* La propiedad "background-color" define el color del fondo, en este caso negro. */
  background-color: black;
}
```

El término "en cascada" se refiere a las reglas que determinan cómo los selectores son jerarquizados al cambiar la apariencia de una página web. Esta es una característica muy importante, ya que un sitio web complejo puede contener miles de reglas CSS.

## Aprende más

### Conocimiento general

- [Aprende CSS](/es/docs/Learn/CSS)
- [CSS](https://es.wikipedia.org/wiki/CSS) en Wikipedia

### Referencia Técnica

- [Documentación sobre CSS en MDN](/es/docs/Web/CSS)
- [Trabajos recientes del Grupo de Trabajo de CSS](https://www.w3.org/Style/CSS/current-work)
