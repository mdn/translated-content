---
title: Cómo documentar una propiedad CSS
slug: MDN/Writing_guidelines/Howto/Document_a_CSS_property
l10n:
  sourceCommit: aa66311219951396e7305df61eb31831360d2c79
---

{{MDNSidebar}}

A medida que evolucionan los estándares [CSS](/es/docs/Web/CSS), siempre se agregan nuevas propiedades. La [Referencia de CSS](/es/docs/Web/CSS/Reference) en MDN Web Docs debe mantenerse actualizada con estos desarrollos. Este artículo proporciona instrucciones paso a paso para crear una página de referencia de propiedades CSS.

Cada página de referencia de propiedades CSS sigue la misma estructura. Esto ayuda a los lectores a encontrar información más fácilmente, especialmente después de familiarizarse con el formato de página de referencia estándar.

## Paso 1 — Determinar la propiedad a documentar

Primero, deberá averiguar la propiedad CSS que desea documentar. Es posible que haya notado que falta una página o que haya visto contenido faltante informado en nuestra [lista de problemas](https://github.com/mdn/content/issues) del contenido principal o en nuestra [lista de problemas](https://github.com/mdn/translated-content/issues) del contenido traducido. Para obtener detalles sobre la propiedad CSS, deberá encontrar una especificación relevante para ella (por ejemplo, una [especificación W3C](https://www.w3.org/Style/CSS/), o un informe de error para una propiedad no estándar utilizada en motores de renderizado como Gecko o Blink).

> **Nota:** Cuando utilice una especificación W3C, utilice siempre el **Borrador del editor** (observe el cartel rojo en el lado izquierdo) y no una versión publicada (p. ej., Borrador de trabajo). ¡El borrador del editor siempre está más cerca de la versión final!

Si la implementación y la especificación difieren, no dude en mencionarlo en el error de implementación. Una de las siguientes situaciones es posible:

- Puede ser un error en la implementación (y se llenará un reporte de error de seguimiento).
- Puede deberse a un retraso en la publicación de una nueva especificación.
- Puede ser un error en la especificación (en cuyo caso, vale la pena llenar un reporte de error de especificación).

## Paso 2: Verifique la base de datos de propiedades CSS

Varias características de una propiedad CSS, como su sintaxis o si se puede animar, se mencionan en varias páginas y, por lo tanto, se almacenan en una base de datos acorde. Las macros que usará en la página necesitan información sobre la propiedad que está almacenada allí, así que comience [verificando que esta información esté allí](https://github.com/mdn/data/blob/main/docs/updating_css_json.md).

## Paso 3: Crea la página de propiedades CSS

¡Preparativos terminados! Ahora podemos agregar la página de propiedades CSS real. La forma más fácil de crear una nueva página de propiedades CSS es copiar el contenido de una página de propiedades CSS existente y editarla para la nueva propiedad. Para crear una nueva página, consulta las instrucciones en nuestra guía [cómo crear una página](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

Al crear una página de referencia, querrá agregar _Ejemplos_. Para ello, sigue este [tutorial sobre muestras en vivo](/es/docs/MDN/Writing_guidelines/Page_structures/Live_samples). Recuerde que la página de propiedades que está creando es para una sola propiedad, por lo que los ejemplos que agregue deberán mostrar cómo funciona esta propiedad de forma aislada, no cómo se usa la especificación completa. Por lo tanto, los ejemplos de la propiedad `list-style-type` deberían mostrar los resultados usando diferentes valores para la propiedad, no cómo combinarla con otras propiedades, pseudoclases o pseudoelementos para generar buenos efectos. Se pueden escribir tutoriales y guías para mostrar más.

## Paso 4: Conseguir que se revise el contenido

Una vez que haya creado la página de propiedades, envíela como una solicitud de incorporación de cambios (Pull Request en Inglés). Se asignará automáticamente a un miembro de nuestro equipo de revisión para que revise su página.
