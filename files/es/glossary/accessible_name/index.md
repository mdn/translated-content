---
title: Nombre accesible
slug: Glossary/Accessible_name
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **nombre accesible** es el nombre de un elemento de la interfaz de usuario: el texto asociado a un elemento HTML que proporciona una etiqueta para ese elemento a los usuarios de tecnologías de asistencia.

Los nombres accesibles transmiten el propósito o la intención del elemento. Esto ayuda a los usuarios a entender para qué sirve el elemento y cómo pueden interactuar con él. Por lo general, los nombres accesibles de los elementos deberían ser únicos dentro de una página. Así, los usuarios pueden distinguir un elemento de los demás e identificar con cuál quieren interactuar.

Según el elemento y el marcado HTML, el valor del nombre accesible puede derivarse de contenido visible (por ejemplo, el texto dentro de {{HTMLElement("figcaption")}}) o invisible (por ejemplo, el atributo `aria-label` aplicado a un elemento), o de una combinación de ambos. La forma en que se determina el nombre accesible de un elemento se basa en el [cálculo del nombre accesible](https://www.w3.org/WAI/ARIA/apg/practices/names-and-descriptions/#name_calculation), que varía según el elemento.

Lo mejor es usar texto visible como nombre accesible. Muchos elementos, como {{HTMLElement("a")}}, {{HTMLElement("td")}} y {{HTMLElement("button")}}, pueden obtener su nombre accesible de su contenido. Por ejemplo, en `<a href="foo.html">Bar</a>`, el nombre accesible de este hipervínculo es "Bar".

Otros elementos obtienen su nombre accesible del contenido de elementos asociados. Por ejemplo, cuando un elemento {{HTMLElement("fieldset")}} contiene un descendiente {{HTMLElement("legend")}}, o un elemento {{HTMLElement("table")}} contiene un descendiente {{HTMLElement("caption")}}, el elemento anidado se asocia automáticamente con su padre y le aporta su nombre accesible. En los elementos de formulario como {{HTMLElement("textarea")}} e {{HTMLElement("input")}}, el nombre accesible proviene del elemento {{HTMLElement("label")}} asociado. Esta asociación debe definirse de forma explícita: el atributo `for` del elemento `<label>` tiene que coincidir con el `id` del elemento de formulario. También se crea una asociación implícita cuando el control de formulario está anidado directamente dentro del elemento `<label>`.

En algunos elementos, el nombre accesible proviene de sus atributos; por ejemplo, del atributo `alt` en el caso de {{HTMLElement("img")}}. En `<img src="grape.jpg" alt="banana"/>`, el nombre accesible de la imagen es "banana".

Para crear una asociación entre contenido visible y un elemento, o entre varios nodos de texto y un elemento, puedes usar el atributo [`aria-labelledby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby). Si no hay texto visible que asociar a un elemento de la interfaz que necesita un nombre accesible, puedes usar el atributo [`aria-label`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label). No añadas nombres a los elementos que sirven para marcar texto en línea, como {{HTMLElement("code")}}, {{HTMLElement("del")}} y {{HTMLElement("mark")}}.

Muchos elementos, como las secciones de contenido textual, no necesitan un nombre accesible. Todos los controles deben tener un nombre accesible. También deben tenerlo todas las imágenes que transmiten información y no son puramente decorativas.

Las tecnologías de asistencia ofrecen a los usuarios la propiedad de nombre accesible, que incluye el nombre accesible junto con el rol del elemento. Aunque muchos elementos no necesitan un nombre accesible, es necesario proporcionar uno para anular o complementar el contenido de los elementos con [roles](/es/docs/Web/Accessibility/ARIA/Reference/Roles) específicos. Por ejemplo, un [`tabpanel`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role) es una sección de contenido que aparece al activar el elemento asociado con el rol [`tab`](/es/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role). Este rol puede asignarse a un elemento que no necesita nombre, como el elemento {{HTMLElement("div")}}. El `tab` es el control y debe tener un nombre accesible. El `tabpanel` es el hijo (la sección de contenido) del `tab`. Añadir `aria-labelledby` al `tabpanel` es una buena práctica.

## Véase también

- [Roles ARIA](/es/docs/Web/Accessibility/ARIA/Reference/Roles)
- [Atributo ARIA](/es/docs/Web/Accessibility/ARIA/Reference/Attributes)
- [Accessible Name and Description Computation 1.2 (accname)](https://w3c.github.io/accname/#mapping_additional_nd_description)
- [Accesibilidad](/es/docs/Web/Accessibility)
- [Aprender sobre accesibilidad](/es/docs/Learn_web_development/Core/Accessibility)
- [Accesibilidad web](https://es.wikipedia.org/wiki/Accesibilidad_web) en Wikipedia
- [Web Accessibility In Mind](https://webaim.org/)
- [ARIA](/es/docs/Web/Accessibility/ARIA)
- [La Web Accessibility Initiative (WAI) del W3C](https://www.w3.org/WAI/)
- [Accessible Rich Internet Applications (WAI-ARIA)](https://w3c.github.io/aria/)
- Términos relacionados del glosario:
  - {{Glossary("Accessibility", "Accesibilidad")}}
  - {{Glossary("Accessibility tree", "Árbol de accesibilidad")}}
  - {{Glossary("Accessible description", "Descripción accesible")}}
  - {{Glossary("ARIA")}}
