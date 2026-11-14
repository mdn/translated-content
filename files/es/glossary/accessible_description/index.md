---
title: Descripción accesible
slug: Glossary/Accessible_description
l10n:
  sourceCommit: c44003c788a907ef19e0d766e98f29ffca5b6798
---

Una **descripción accesible** es la descripción de un elemento de la interfaz de usuario y aporta información adicional para ayudar a los usuarios de tecnologías de asistencia a comprender ese elemento y su contexto. Está asociada a un elemento HTML o SVG y proporciona contexto adicional a los usuarios sobre su propósito, más allá de lo que ofrece el {{glossary("accessible name", "nombre accesible")}} del elemento. Esto es especialmente importante para quienes dependen de tecnologías de asistencia como los {{glossary("Screen_reader", "lectores de pantalla")}}. La descripción accesible de un elemento forma parte del {{glossary("accessibility tree", "árbol de accesibilidad")}}.

Por ejemplo, el nombre accesible de un elemento {{htmlelement("table")}} lo proporciona su primer {{htmlelement("caption")}}. En el caso de las tablas de datos complejas, una o dos oraciones que describan la tabla pueden servir de descripción. Puede ser un párrafo situado justo antes o justo después de la tabla, tanto visualmente como en el orden del código fuente. Si el texto está en otra parte del código fuente, o si quieres que la asociación sea explícita, puedes usar el atributo [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) para asociar la tabla con su descripción.

Del mismo modo, cuando se pide a un usuario que cree una contraseña, la etiqueta `<label>` del elemento {{htmlelement("input")}} de tipo `password` proporciona su nombre accesible. Una buena descripción accesible incluye los requisitos de la contraseña de manera que sean visibles para todos los usuarios. Se puede asociar de forma explícita con el elemento input mediante su atributo `aria-describedby`, lo que la añade al árbol de accesibilidad como la 'descripción' de ese nodo.

Las descripciones se reducen a cadenas de texto. En nuestro ejemplo de la contraseña, si el valor del atributo `aria-describedby` del elemento {{htmlelement("input")}} es el `id` de un elemento {{htmlelement("ul")}} de HTML con una lista de requisitos, la descripción es la concatenación del texto y los equivalentes de texto de todos los elementos de la lista.

Puedes inspeccionar la descripción accesible de cualquier elemento de tu página: consulta la pestaña de accesibilidad en las herramientas para desarrolladores de tu navegador, que muestra la información de accesibilidad del elemento que tengas seleccionado.

## Cálculo de la descripción accesible

En los elementos HTML, si un elemento no tiene descripción accesible, esta debe asociarse mediante programación con el elemento correspondiente. El modelo de objetos de accesibilidad (AOM, por sus siglas en inglés) calcula la descripción accesible comprobando las siguientes características, en orden, hasta que esta quede definida:

1. El atributo [`aria-describedby`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby).

2. El atributo [`aria-description`](/es/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-description).

3. Las características específicas del lenguaje que participan en el cálculo de la descripción, siempre que no se estén usando ya para definir el {{glossary("accessible name", "nombre accesible")}}. Por ejemplo:
   - Un elemento {{htmlelement("summary")}} se describe con el contenido del elemento {{htmlelement("details")}} en el que está anidado.
   - Los botones {{htmlelement("input")}} (con el atributo `type` igual a `button`, `submit` o `reset`) se describen con el valor de su atributo `value`.
   - En SVG, se usa el contenido del elemento {{svgelement("desc")}}, si está presente; de lo contrario, el texto de los elementos descendientes contenedores de texto (es decir, {{svgelement("text")}}), siempre que no se usen ya para definir el {{glossary("accessible name", "nombre accesible")}}.

4. Si ninguno de los anteriores proporciona una descripción, se usa el atributo [`title`](/es/docs/Web/HTML/Reference/Global_attributes/title), siempre que `title` no sea el {{glossary("accessible name", "nombre accesible")}} de ese elemento.

5. Si ninguna de las opciones anteriores define una descripción accesible, entonces la descripción accesible queda vacía.

Los pasos para definir la descripción accesible en HTML se detallan en [HTML-AAM Accessible Description](https://w3c.github.io/html-aam/#accdesc-computation). La descripción accesible de los elementos SVG sigue los mismos pasos, con pequeñas diferencias que se enumeran en [SVG-AAM Accessible Description](https://w3c.github.io/svg-aam/#mapping_additional_nd).

## Véase también

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
  - {{Glossary("Accessible name", "Nombre accesible")}}
  - {{Glossary("ARIA")}}
