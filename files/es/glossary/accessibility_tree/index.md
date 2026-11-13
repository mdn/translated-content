---
title: Árbol de accesibilidad
slug: Glossary/Accessibility_tree
l10n:
  sourceCommit: 7d4f930455a349e3c73836500add3d4840c76f5d
---

El **árbol de accesibilidad** contiene información relacionada con la {{Glossary("accessibility", "accesibilidad")}} de la mayoría de los elementos HTML.

Los navegadores convierten el marcado en una representación interna llamada _[árbol DOM](/es/docs/Web/API/Document_Object_Model)_. El árbol DOM contiene objetos que representan todos los elementos, atributos y nodos de texto del marcado. A partir de este árbol DOM, los navegadores crean un árbol de accesibilidad, que las API de accesibilidad específicas de cada plataforma utilizan para ofrecer una representación que las tecnologías de asistencia, como los lectores de pantalla, puedan interpretar.

Un objeto del árbol de accesibilidad tiene cuatro propiedades:

- **nombre**
  - : ¿Cómo podemos referirnos a este objeto? Por ejemplo, un enlace con el texto "Leer más" tendrá "Leer más" como nombre (puedes consultar cómo se calculan los nombres en la [especificación Accessible Name and Description Computation](https://w3c.github.io/accname/)).
- **descripción**
  - : ¿Cómo describimos este objeto si queremos añadir información más allá del nombre? La descripción de una tabla podría explicar qué tipo de información contiene.
- [**rol**](/es/docs/Web/Accessibility/ARIA/Reference/Roles)
  - : ¿Qué tipo de objeto es? Por ejemplo, ¿un botón, una barra de navegación o una lista de elementos?
- [**estado**](/es/docs/Web/Accessibility/ARIA/Reference/Attributes)
  - : ¿Tiene algún estado? Algunos ejemplos son los estados marcado o desmarcado de una casilla de verificación y los estados contraído o expandido del elemento [`<summary>`](/es/docs/Web/HTML/Reference/Elements/summary).

Además, el árbol de accesibilidad suele incluir información sobre lo que se puede hacer con un elemento: un enlace se puede _seguir_, en un campo de texto se puede _escribir_, etc.

Aunque en abril de 2022 seguía siendo un borrador del Web Incubator Community Group, el **[Accessibility Object Model](https://wicg.github.io/aom/explainer.html) (AOM)** pretende incubar API para expresar la semántica de accesibilidad y, potencialmente, permitir el acceso de lectura al árbol de accesibilidad calculado.

## Véase también

- [Accesibilidad](/es/docs/Web/Accessibility)
- [Aprender sobre accesibilidad](/es/docs/Learn_web_development/Core/Accessibility)
- [Accesibilidad web](https://en.wikipedia.org/wiki/Web_accessibility) en Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/es/docs/Web/Accessibility/ARIA)
- [La Web Accessibility Initiative (WAI) del W3C](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Términos relacionados del glosario:
  - {{Glossary("Accessibility", "Accesibilidad")}}
  - {{Glossary("Accessible description", "Descripción accesible")}}
  - {{Glossary("Accessible name", "Nombre accesible")}}
  - {{Glossary("ARIA")}}
