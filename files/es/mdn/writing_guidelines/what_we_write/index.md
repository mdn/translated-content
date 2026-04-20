---
title: Lo que escribimos
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: 427efbee9e0da53517f45420af87a66a2a6b6e19
---

MDN Web Docs contiene documentación _neutral al navegador_ que permite a los desarrolladores web escribir código _agnóstico al navegador_. En este artículo, encontrará información sobre si un tema o tipo de contenido determinado debe incluirse en MDN Web Docs.

## Políticas editoriales

Esta sección describe las políticas establecidas por el personal de Mozilla MDN para controlar el contenido de MDN Web Docs. Se espera que todos los colaboradores de MDN Web Docs cumplan con estas políticas.

### Relevancia

Todo el contenido de MDN Web Docs debe ser relevante para la sección de tecnología en la que aparece. El spam (publicidad comercial) y otros contenidos irrelevantes nunca serán aceptados en el sitio. Los colaboradores que sigan intentando enviar spam pueden ser expulsados de MDN a discreción del personal de Mozilla MDN.

Los enlaces salientes a sitios comerciales que sean relevantes para el tema desde el que se enlazan se evaluarán caso por caso. Su valor para ayudar a los desarrolladores web debe superar el beneficio comercial del sitio vinculado.

> [!NOTE]
> Verá enlaces a sitios comerciales en la sección [Aprende desarrollo web](/es/docs/Learn_web_development) de MDN, pero estos se usan con moderación, y solo vinculamos a socios educativos confiables. Puede leer más sobre esto en [Directrices de escritura de Aprende desarrollo web > Enlaces de socios y elementos integrados](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

### Neutralidad

Los artículos en MDN Web Docs deben mantener un [punto de vista neutral](https://es.wikipedia.org/wiki/Wikipedia:Punto_de_vista_neutral), informando sobre las variaciones del navegador sin sesgo editorial. No se aceptan comentarios despectivos sobre ningún navegador o agente de usuario.

### Estandarización

Las tecnologías web que se documentarán en MDN Web Docs deben estar en una vía de estándares y deben ser implementadas por al menos un motor de renderizado. Las variaciones en el soporte del navegador se documentan en la sección [compatibilidad con navegadores](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) de un artículo.

## Sugerir contenido

Si desea sugerir contenido para MDN Web Docs, asegúrese de leer esta página antes de enviarlo para asegurarse de que lo que está sugiriendo sea apropiado.

Para páginas de referencia nuevas o guías, abra un [issue nuevo](https://github.com/mdn/mdn/issues/new/choose) que describa qué contenido está sugiriendo y por qué (sea lo más explícito posible).

Para sugerir proyectos más grandes que involucren nuevas secciones de contenido, consulte la página [Criterios de inclusión](/es/docs/MDN/Writing_guidelines/Criteria_for_inclusion), que también describe el proceso de solicitud.

## Temas que pertenecen a MDN Web Docs

En general, si se trata de una tecnología web abierta, la documentamos en MDN Web Docs. Esto incluye cualquier característica que pueda ser utilizada por los desarrolladores web para crear sitios web y aplicaciones, ahora y en un futuro cercano.

Si una característica es implementada por varios navegadores y aceptada como estándar o está avanzando hacia la estandarización, entonces sí, definitivamente la documentamos aquí. Si una característica sigue siendo muy experimental y no se implementa en varios navegadores y/o puede cambiar, entonces sigue siendo adecuada para su inclusión, pero puede que no se considere una prioridad para que el equipo de redacción trabaje en ella.

En otras palabras, las tecnologías web que se documentarán en MDN Web Docs deben cumplir todos los siguientes criterios:

- Estar en una vía de estándares.
- Estar especificada en una especificación publicada por un organismo de estándares confiable.
- Ser implementada por al menos un motor de renderizado.
- Ser lanzada en una versión de navegador estable.

Nuestro enfoque principal es escribir sobre las siguientes tecnologías web front-end:

- [HTML](/es/docs/Web/HTML)
- [CSS](/es/docs/Web/CSS)
- [JavaScript](/es/docs/Web/JavaScript)
- [APIs web](/es/docs/Web/API)
- [HTTP](/es/docs/Web/HTTP)

También documentamos algunos temas más amplios, como [SVG](/es/docs/Web/SVG), [XML](/es/docs/Web/XML), [WebAssembly](/es/docs/WebAssembly) y [Accesibilidad](/es/docs/Learn_web_development/Core/Accessibility). Además, proporcionamos [guías de aprendizaje](/es/docs/Learn_web_development) extensas para estas tecnologías y también un [glosario](/es/docs/Glossary).

> [!NOTE]
> Las tecnologías de backend generalmente tienen su propia documentación en otro lugar que MDN Web Docs no intenta reemplazar, aunque [tenemos algunas excepciones](/es/docs/Learn_web_development/Extensions/Server-side).

Todo el contenido de MDN Web Docs debe ser relevante para la sección de tecnología en la que aparece. Se espera que los colaboradores sigan estas [directrices de escritura de MDN](/es/docs/MDN/Writing_guidelines) para el estilo de escritura, las muestras de código y otros temas.

Para obtener más detalles sobre los criterios para documentar o no una tecnología en MDN Web Docs, consulte la página [Criterios de inclusión](/es/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Cuando documentamos una tecnología nueva

En MDN Web Docs, buscamos constantemente documentar las nuevas tecnologías de estándares web según corresponda.
Tratamos de encontrar un equilibrio entre publicar la documentación lo suficientemente pronto para que los desarrolladores puedan conocer las nuevas características tan pronto como las necesiten y publicarla lo suficientemente tarde para que la tecnología esté madura y estable para que la documentación no necesite actualizaciones constantes o eliminación rápida.

En general, nuestra definición de lo más pronto que consideraremos documentar una tecnología nueva es: _Cuando la característica está en una vía de estándares y se implementa en algún lugar._

Consideramos documentar una tecnología nueva si:

- Está especificada en un documento de especificación publicado bajo una organización de estándares confiable (como W3C, WHATWG, Khronos, IETF, etc.) y ha alcanzado un nivel razonable de estabilidad (por ejemplo, un borrador de trabajo del W3C o una recomendación candidata o cuando la especificación se ve bastante estable judging por el flujo de problemas presentados en su contra), y
- Está implementada de manera consistente en al menos un navegador, con otros desarrolladores de navegadores mostrando signos de interés (como un ticket activo o un proceso de "intención de implementar" en efecto).

No documentamos una tecnología nueva si:

- No tiene una especificación o la especificación es una nota aproximada que parece susceptible de cambiar,
- Uno o cero navegadores la han implementado actualmente y los navegadores no compatibles no muestran signos de interés en implementarla. Puede medir esto preguntando a los ingenieros que trabajan en esos navegadores y mirando los rastreadores de errores del navegador y las listas de correo, etc.,
- No es una tecnología expuesta en la web y/o es completamente propietaria, o
- Ya está mostrando signos de estar en desuso o reemplazada por una característica similar.

## Temas que no pertenecen a MDN Web Docs

En general, cualquier cosa que no sea un estándar web abierto no pertenece a MDN Web Docs. El spam (publicidad comercial) y otros contenidos irrelevantes nunca serán aceptados en el sitio. Los colaboradores que sigan intentando enviar spam pueden ser expulsados de MDN a discreción del personal de Mozilla MDN.

Algunos ejemplos de temas inapropiados para MDN Web Docs incluyen:

- Tecnología que no está expuesta a la web y es específica de un navegador.
- Tecnología no relacionada con la web.
- Documentación para usuarios finales. Para los productos de Mozilla, por ejemplo, dicha documentación pertenece al [sitio de soporte de Mozilla](https://support.mozilla.org).
- Enlaces externos de autoenlace o autopromoción. Consulte estas directrices en nuestra [guía de estilo de escritura](/es/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) antes de agregar un enlace externo.

### Cuando eliminamos documentación

Las páginas se eliminan de MDN Web Docs si ya no contienen información que sea útil de alguna manera, están lo suficientemente desactualizadas y/o pueden ser incorrectas hasta el punto de que mantenerlas pueda ser engañoso.

Los siguientes ejemplos describen situaciones en las que se pueden eliminar páginas/contenido:

- Los artículos contienen información sobre características que no se implementaron en todos los navegadores y que luego se retiraron (generalmente características experimentales, como la funcionalidad con prefijo).
- Las páginas de referencia describen características que se eliminaron de la especificación antes de implementarse en cualquier navegador.
- Los artículos cubren técnicas que luego se demostró que eran malas prácticas y fueron reemplazadas por técnicas mejores.
- Los artículos contienen información que luego fue reemplazada por otros artículos de mejor calidad.
- Los artículos contienen contenido inapropiado para MDN Web Docs.
- Las secciones de MDN Web Docs no se centran en tecnologías web abiertas y son una carga de mantenimiento.

Para obtener más información sobre _cómo_ eliminar documentos, consulte la guía [Crear, mover y eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting).

## Tipos de documentos permitidos en MDN Web Docs

En general, nuestra documentación se clasifica en las siguientes categorías:

- Referencia
- Guía
- Glosario
- Aprende/Tutoriales

En general, MDN Web Docs es para la documentación de _productos_, no para la documentación de _proyectos_ o _procesos_. Entonces, si el documento trata sobre "cómo usar una cosa" o "cómo funciona una cosa" (donde, la "cosa" está en una de las categorías de temas mencionadas anteriormente), entonces puede ir en MDN Web Docs.

Si un documento trata sobre "quién está trabajando en el desarrollo de una cosa" o "planes para desarrollar una cosa", entonces no debería ir en MDN Web Docs.

Aquí hay algunos ejemplos de tipos de documentos que _no_ deberían colocarse en MDN Web Docs:

- Documentos de planificación
- Documentos de diseño
- Propuestas de proyectos
- Especificaciones o estándares
- Material promocional, publicidad o información personal
