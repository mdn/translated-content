---
title: Cómo agregar una entrada al glosario
short-title: Agregar una entrada al glosario
slug: MDN/Writing_guidelines/Howto/Write_a_new_entry_in_the_glossary
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Este artículo explica cómo agregar y vincular entradas en el [glosario de MDN Web Docs](/es/docs/Glossary).
También proporciona pautas sobre el diseño y el contenido de las entradas del glosario.
El glosario ofrece definiciones para todos los términos, jerga, abreviaturas y acrónimos que encontrarás al leer contenido de MDN sobre la web y el desarrollo web.

Es posible que el glosario nunca esté completo, porque la web siempre está cambiando.
Al contribuir con nuevas entradas o corregir problemas, puedes ayudarnos a mantener el glosario actualizado y llenar sus vacíos.

Contribuir al glosario es una manera fácil de ayudar a que la web sea más comprensible para todos.
No necesitas habilidades técnicas avanzadas.
Las entradas del glosario están pensadas para ser sencillas y breves.

## Cómo escribir una entrada

Primero, elige el término para el que quieres crear una entrada en el glosario.
Si buscas términos sin entrada, consulta la lista en la barra lateral de la [página de inicio del glosario](/es/docs/Glossary).

Si tienes una idea para una nueva entrada del glosario, [crea una nueva página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting#creating_pages) dentro de la [página de inicio del glosario](https://github.com/mdn/content/tree/main/files/en-us/glossary).

### Escribir un resumen

El primer párrafo de cualquier página del glosario es una descripción breve y sencilla del término.
Preferiblemente, no debe tener más de dos oraciones.
Asegúrate de que quien lea la descripción entienda el término de inmediato.

> [!NOTE]
> Por favor, no copies y pegues de otras definiciones o contenido en Internet.
> (Y especialmente no de Wikipedia, ya que su rango de versiones de licencia es más reducido e incompatible con MDN.) Tu entrada en el glosario debe ser contenido original.

#### Escribir una buena entrada de glosario

Agrega algunos párrafos adicionales si es necesario, pero es fácil acabar escribiendo un artículo completo.
Escribir un artículo está bien, pero no lo crees en el glosario ni para el glosario.
Si no estás seguro de dónde colocar tu artículo, no dudes en [comunicarte para discutirlo](/es/docs/MDN/Community/Discussions).

Hay algunas pautas sencillas a considerar para escribir una mejor entrada de glosario:

- Cuando uses términos en la descripción del término del glosario o cuando uses abreviaturas, debes crear los enlaces apropiados.
  A menudo, esto solo implica crear enlaces a otras páginas del glosario.
- Usa términos relacionados apropiados (con enlaces) en la entrada del glosario, siempre que sea posible sin que el artículo resulte difícil de seguir.
  Tener una buena red de enlaces relacionados y útiles hace que una página, o conjunto de páginas, sea mucho más fácil de usar.
- Piensa en los términos de búsqueda que usarías si quisieras encontrar esta página.
  Trata de usar todas las palabras que usarías para buscar el término, pero sin que la entrada pierda sentido, sea demasiado larga o difícil de leer.

### Ampliar con enlaces

Una entrada del glosario siempre debe terminar con una sección _Véase también_.
Esta sección debe contener enlaces que ayuden al lector a avanzar: descubrir más detalles y aprender a utilizar la tecnología pertinente.

Es buena práctica organizar los enlaces en tres grupos:

- Conocimiento general
  - : Estos enlaces proporcionan información de alto nivel sobre el término o tema.
    Por ejemplo: un enlace a una página relevante de [Wikipedia](https://es.wikipedia.org/).
- Referencia técnica
  - : Estos enlaces ofrecen información técnica detallada, ya sea en MDN Web Docs u otros sitios.
- Aprende al respecto
  - : Estos son enlaces a tutoriales, ejercicios, ejemplos u otro contenido didáctico que ayude al lector a aprender.

## Manejar la desambiguación

Algunos términos pueden tener múltiples significados según el contexto.
Para resolver la ambigüedad, sigue estas pautas:

- La página principal del término debe ser una página de desambiguación que contenga la macro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs).
- El término tiene subpáginas que lo definen para diferentes contextos.

Ilustremos esto con un ejemplo.
El término _signature_ puede tener diferentes significados en al menos dos contextos distintos: seguridad y función.

1. La página [Glossary/Signature](/es/docs/Glossary/Signature) es la página de desambiguación con la macro [`GlossaryDisambiguation`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossarydisambiguation.rs).
2. La página [Glossary/Signature/Security](/es/docs/Glossary/Signature/Security) define una firma en un contexto de seguridad.
3. La página [Glossary/Signature/Function](/es/docs/Glossary/Signature/Function) define una firma de función.
