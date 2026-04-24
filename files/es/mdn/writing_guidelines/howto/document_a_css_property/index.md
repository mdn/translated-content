---
title: Cómo documentar una propiedad CSS
short-title: Documentar una propiedad CSS
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: 719645a32546d9e514ac530a5eb66aa4c26d4f51
---

A medida que los estándares de [CSS](/es/docs/Web/CSS) evolucionan, siempre se añaden nuevas propiedades. La [Referencia de CSS](/es/docs/Web/CSS/Reference) en MDN Web Docs debe mantenerse actualizada con estos avances. Este artículo proporciona instrucciones paso a paso para crear una página de referencia de una propiedad CSS.

Cada página de referencia de propiedad CSS sigue la misma estructura. Esto ayuda a los lectores a encontrar información más fácilmente, especialmente después de que se familiarizan con el formato estándar de las páginas de referencia.

## Paso 1 — Determinar la propiedad a documentar

Primero, deberás identificar la propiedad CSS que deseas documentar. Es posible que hayas notado que falta una página, o que hayas visto contenido faltante reportado en nuestra [lista de problemas (issues)](https://github.com/mdn/content/issues). Para obtener detalles sobre la propiedad CSS, necesitarás encontrar su especificación correspondiente (por ejemplo, una [especificación del W3C](https://www.w3.org/Style/CSS/), o un informe de error para una propiedad no estándar utilizada en motores de renderizado como Gecko o Blink).

> [!NOTE]
> Al usar una especificación del W3C, utiliza siempre el **Editor's Draft** (nota el banner rojo en el lado izquierdo) y no una versión publicada (por ejemplo, Working Draft). ¡El Editor's Draft siempre está más cerca de la versión final!

Si la implementación y la especificación divergen, no dudes en mencionarlo en el error de implementación. Es posible que se dé una de las siguientes situaciones:

* Puede ser un error en la implementación (y se registrará un error de seguimiento).
* Puede deberse a un retraso en la publicación de una nueva especificación.
* Puede ser un error en la especificación (en cuyo caso, vale la pena registrar un error de especificación).

## Paso 2 — Consultar la base de datos de propiedades CSS

Varias características de una propiedad CSS, como su sintaxis o si se puede animar, se mencionan en varias páginas y, por lo tanto, se almacenan en una base de datos ad hoc. Las macros que utilizarás en la página necesitan información sobre la propiedad que se almacena allí, así que comienza por [verificar que esta información esté presente](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Paso 3 — Crear la página de la propiedad CSS

¡Preparativos terminados! Ahora podemos añadir la página de la propiedad CSS real. La forma más sencilla de crear una nueva página de propiedad CSS es copiar el contenido de una página existente y editarlo para la nueva propiedad. Para crear una página nueva, consulta las instrucciones en nuestra guía sobre [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

Al crear una página de referencia, querrás añadir _Ejemplos_. Para hacerlo, sigue este [tutorial sobre ejemplos en vivo (live samples)](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Recuerda que la página de propiedad que estás creando es para una sola propiedad, por lo que los ejemplos que añadas deberán mostrar cómo funciona esta propiedad de forma aislada, no cómo se utiliza toda la especificación. Por lo tanto, los ejemplos para la propiedad `list-style-type` deben mostrar los resultados utilizando diferentes valores para la propiedad, no cómo combinarla con otras propiedades, pseudoclases o pseudoelementos para generar efectos atractivos. Se pueden escribir tutoriales y guías para mostrar más.

## Paso 4 — Solicitar la revisión del contenido

Después de haber creado la página de la propiedad, envíala como una solicitud de extracción (pull request). Se asignará automáticamente a un miembro de nuestro equipo de revisión para que revise tu página.
