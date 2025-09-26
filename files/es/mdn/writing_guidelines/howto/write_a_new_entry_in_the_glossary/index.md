---
title: ¿Cómo escribir una entrada en el glosario?
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

Este artículo explica cómo agregar y vincular entradas en el [glosario de MDN Web Docs](/es/docs/Glossary).
También proporciona pautas sobre el diseño y el contenido de las entradas del glosario.
El glosario proporciona definiciones para todos los términos, jerga, abreviaturas y acrónimos que encontrará al leer contenido de MDN sobre la web y el desarrollo web.

Es posible que el glosario nunca esté completo porque la web siempre está cambiando.
Al contribuir con nuevas entradas o solucionar problemas, puede ayudarnos a actualizar el glosario y llenar los vacíos.

Contribuir al glosario es una manera fácil de ayudar a que la web sea más comprensible para todos.
No necesitas habilidades técnicas de alto nivel.
Las entradas del glosario pretenden ser sencillas y breves.

## Cómo escribir una entrada

Primero, elija el tema para el que le gustaría escribir una entrada en el glosario.
Si está buscando temas que necesitan una entrada en el glosario, consulte la lista de términos en la barra lateral de la [página de destino del glosario](/es/docs/Glossary).

Si tiene una idea para una nueva entrada del glosario, [cree una nueva página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) debajo de la [página de destino del glosario](https://github.com/mdn/content/tree/main/files/es/glosario).

### Escribe un resumen

El primer párrafo de cualquier página del glosario es una descripción breve y sencilla del término.
Preferiblemente, esto no debe ser más de dos oraciones.
Asegúrese de que cualquier persona que lea la descripción pueda comprender inmediatamente el término definido.

> [!NOTE]
> Por favor, no copie y pegue de otras definiciones o contenido en Internet.
> (Y especialmente no de Wikipedia, ya que su rango de versiones de licencia es más pequeño e incompatible con MDN). La entrada de su glosario debe ser contenido original.

#### Escribir una buena entrada de glosario

Agregue algunos párrafos adicionales si es necesario, pero es fácil encontrarse escribiendo un artículo completo.
Escribir un artículo está bien, pero no lo cree en/para el glosario.
Si no está seguro de dónde colocar su artículo, no dude en [comunicarse para discutirlo](/es/docs/MDN/Community/Discussions).

Hay algunas pautas simples a considerar para escribir una mejor entrada de glosario:

- Cuando use términos en la descripción del término del glosario o cuando use abreviaturas, debe crear los enlaces apropiados.
  A menudo, esto solo implica crear enlaces a otras páginas del glosario.
- Use términos relacionados apropiados (con enlaces) en la entrada del glosario, si puede hacerlo sin dificultar el seguimiento del artículo.
  Tener una buena red de enlaces útiles y relacionados hace que una página, o un conjunto de páginas, sea mucho más fácil de usar.
- Piense en los términos de búsqueda que elegiría si quisiera encontrar esta página.
  Trate de usar todas las palabras que usaría para buscar el término, pero sin que la entrada del glosario sea absurda, larga o difícil de leer.

### Ampliar con enlaces

Una entrada del glosario siempre debe terminar con una sección _Véase también_.
Esta sección debe contener enlaces para ayudar al lector a avanzar: descubrir más detalles; aprender a utilizar la tecnología pertinente.

Es una buena práctica organizar los enlaces en tres grupos:

- Conocimiento general
  - : Estos enlaces proporcionan información de alto nivel sobre el término o tema.
    Por ejemplo: un enlace a una página relevante de [Wikipedia](https://es.wikipedia.org/).
- Referencia tecnica
  - : Estos enlaces ofrecen información técnica detallada en MDN Web Docs u otros sitios.
- Aprende sobre eso
  - : Estos son enlaces a tutoriales, ejercicios, ejemplos o cualquier otro contenido instructivo que ayude al lector a aprender.

## Lidiando con la desambiguación

Algunos términos pueden tener múltiples significados dependiendo del contexto.
Para resolver la ambigüedad, siga estas pautas:

- La página principal del término debe ser una página de desambiguación que contenga la macro [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs).
- El término tiene subpáginas que definen el término para diferentes contextos.

Ilustremos esto con un ejemplo.
El término _signature_ puede tener diferentes significados en al menos dos contextos diferentes: seguridad y función.

1. La página [Glossary/Signature](/es/docs/Glossary/Signature) es la página de desambiguación con la macro [`GlossaryDisambiguation`](https://github.com/mdn/yari/blob/main/kumascript/macros/GlossaryDisambiguation.ejs).
2. La página [Glossary/Signature/Security](/es/docs/Glossary/Signature/Security) es la página que define una firma en un contexto de seguridad.
3. La página [Glossary/Signature/Function](/es/docs/Glossary/Signature/Function) es la página que define la firma de una función.
