---
title: Árbol de accesibilidad (AOM)
slug: Glossary/Accessibility_tree
---

{{GlossarySidebar}}

El **árbol de accesibilidad** o **modelo de objeto de accesibillidad (AOM)**, contiene información relacionada con {{Glossary("accessibility")}} para la mayoría de los elementos HTML.

Los navegadores convierten el lenguaje markup en una representación interna denominada _[DOM tree](/es/docs/conflicting/Web/API/Document_Object_Model/Using_the_Document_Object_Model)_ (árbol DOM). El árbol DOM contiene objetos para todos los elementos de markup, atributos y nodos de texto. Luego, los navegadores crean un árbol de accesibilidad basado en el árbol de DOM, el cual es usado por Accessibility APIs de plataformas específicas para las tecnologías asistenciales como los lectores de pantalla.

Hay cuatro elementos en un árbol de objeto de accesibilidad:

- **nombre**
  - : ¿Cómo podemos referirnos a este objeto? Por ejemplo, un enlace con el texto 'Leer más' se llamará 'Leer más' (más información sobre cómo se computan los nombres se puede encontrar en [Accessible Name and Description Computation spec](https://www.w3.org/TR/accname-1.1/)).
- **descripción**
  - : ¿Cómo describimos este elemento si queremos añadir algo al nombre? La descripción de una tabla podría explicar qué tipo de información ofrece esa tabla.
- **rol**
  - : ¿Qué tipo de elemento es? Por ejemplo, es un botón, una barra de navegación o una lista de elementos?
- **estado**
  - : ¿Tiene un estado? Piensa en marcado/desmarcado para las casillas de verificación o en desplegado/oculto para los elementos {{HTMLElement('summary')}} (resumen).

Además, el árbol de accesibilidad usualmente contiene información sobre lo que se puede hacer con un elemento: _seguir_ un enlace, _completar_ un cuadro de texto, etc.

## Véase también

- [Glosario de MDN Web Docs](/es/docs/Glossary)
  - {{Glossary("Accessibility")}}
  - {{Glossary("ARIA")}}
