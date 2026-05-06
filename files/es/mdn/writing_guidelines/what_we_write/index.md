---
title: Qué escribimos
slug: MDN/Writing_guidelines/What_we_write
l10n:
  sourceCommit: ca0b474bb2e153ce72718cb304306e540065a888
---

MDN Web Docs contiene documentación _neutral respecto al navegador_ que permite a los desarrolladores web escribir código _agnóstico al navegador_. En este artículo, encontrarás información sobre si un tema o tipo de contenido determinado debe incluirse o no en MDN Web Docs.

## Políticas editoriales

Esta sección describe las políticas que el equipo de Mozilla MDN ha establecido para regular el contenido de MDN Web Docs. Esperamos que todos los colaboradores de MDN Web Docs sigan estas políticas.

### Relevancia

Todo el contenido de MDN Web Docs debe ser relevante para la sección de tecnología en la que aparece. Nunca aceptaremos spam (publicidad comercial) ni otro tipo de contenido irrelevante en el sitio. El personal de Mozilla MDN podrá, bajo su criterio, banear a los colaboradores que intenten enviar spam de forma persistente.

Evaluaremos caso por caso los enlaces salientes a sitios comerciales que sean relevantes para el tema desde el que se enlazan. Su valor para ayudar a los desarrolladores web debe ser mayor que el beneficio comercial para el sitio enlazado.

> [!NOTE]
> Verás enlaces a sitios comerciales en la sección [Aprende desarrollo web](/es/docs/Learn_web_development) de MDN, pero los usamos con moderación y solo enlazamos a socios educativos de confianza. Puedes leer más al respecto en [Guía de escritura para Aprende desarrollo web > Enlaces e integraciones de socios](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds).

### Neutralidad

Los artículos en MDN Web Docs deben mantener un [punto de vista neutral](https://en.wikipedia.org/wiki/Wikipedia:Neutral_point_of_view), e informar sobre las variaciones de los navegadores sin sesgos editoriales. No aceptamos comentarios despectivos sobre ningún navegador o agente de usuario.

### Estandarización

Las tecnologías web que documentamos en MDN Web Docs deben estar en vías de estandarización, y al menos un motor de renderizado debe implementarlas. Documentamos las variaciones en el soporte de los navegadores en la sección de [compatibilidad con navegadores](/es/docs/MDN/Writing_guidelines/Page_structures/Compatibility_tables) de cada artículo.

## Sugerir contenido

Si deseas sugerir contenido para MDN Web Docs, asegúrate de leer esta página antes de enviarlo para garantizar que lo que sugieres sea apropiado.

Para nuevas páginas de referencia o guías, abre un [nuevo issue](https://github.com/mdn/mdn/issues/new/choose) donde describas qué contenido sugieres y por qué (por favor, sé lo más explícito posible).

Para sugerir proyectos más grandes que involucren nuevas secciones de contenido, consulta la página de [Criterios de inclusión](/es/docs/MDN/Writing_guidelines/Criteria_for_inclusion), que también describe el proceso de solicitud.

## Temas que pertenecen a MDN Web Docs

En general, si es una tecnología web abierta, la documentamos en MDN Web Docs. Esto incluye cualquier característica que los desarrolladores web puedan utilizar para crear sitios y aplicaciones, ahora y en el futuro cercano.

Si múltiples navegadores implementan una característica y la comunidad la acepta como estándar o progresa hacia la estandarización, entonces sí, definitivamente la documentamos aquí. Si una característica todavía es muy experimental, no la implementan múltiples navegadores y/o es susceptible de cambiar, sigue siendo adecuada para su inclusión, pero es posible que el equipo de redacción no la considere una prioridad.

En otras palabras, las tecnologías web que documentamos en MDN Web Docs deben cumplir con todos los siguientes criterios:

- Estar en vías de estandarización.
- Contar con una definición en una especificación que un organismo de normalización fiable haya publicado.
- Que al menos un motor de renderizado las implemente.
- Estar disponibles en una versión de navegador estable.

Nuestro principal objetivo es escribir sobre las siguientes tecnologías web front-end:

- [HTML](/es/docs/Web/HTML)
- [CSS](/es/docs/Web/CSS)
- [JavaScript](/es/docs/Web/JavaScript)
- [APIs web](/es/docs/Web/API)
- [HTTP](/es/docs/Web/HTTP)

También documentamos algunos temas más amplios, como [SVG](/es/docs/Web/SVG), [XML](/es/docs/Web/XML), [WebAssembly](/es/docs/WebAssembly) y [Accesibilidad](/es/docs/Learn_web_development/Core/Accessibility). Además, proporcionamos extensas [guías de aprendizaje](/es/docs/Learn_web_development) para estas tecnologías y un [glosario](/es/docs/Glossary).

> [!NOTE]
> Las tecnologías de backend suelen tener su propia documentación en otros lugares, y no intentamos reemplazarla en MDN Web Docs, aunque [tenemos algunas excepciones](/es/docs/Learn_web_development/Extensions/Server-side).

Todo el contenido de MDN Web Docs debe ser relevante para la sección de tecnología en la que aparece. Esperamos que los colaboradores sigan estas [pautas de redacción de MDN](/es/docs/MDN/Writing_guidelines) para el estilo de escritura, ejemplos de código y otros temas.

Para más detalles sobre los criterios de si podemos o no documentar una tecnología en MDN Web Docs, consulta la página de [Criterios de inclusión](/es/docs/MDN/Writing_guidelines/Criteria_for_inclusion).

### Cuándo documentamos una nueva tecnología

En MDN Web Docs, buscamos constantemente documentar nuevas tecnologías de estándares web según sea apropiado. Intentamos encontrar un equilibrio entre publicar la documentación lo suficientemente pronto para que los desarrolladores aprendan sobre las nuevas funciones en cuanto las necesiten, y publicarla lo suficientemente tarde para que la tecnología sea madura y estable, de modo que la documentación no necesite actualizaciones constantes o una eliminación rápida.

En general, nuestra definición de lo más pronto que consideraremos documentar una nueva tecnología es: _Cuando la función está en vías de estandarización y algún navegador la implementa._

Consideramos documentar una nueva tecnología si:

- Cuenta con una definición en una especificación que publicó un organismo de normalización fiable (como W3C, WHATWG, Khronos, IETF, etc.) y alcanzó un nivel razonable de estabilidad (por ejemplo, un borrador de trabajo o una recomendación candidata de la W3C, o cuando la especificación parece bastante estable a juzgar por el flujo de incidencias reportadas), y
- Al menos un navegador la implementa de manera consistente, y otros desarrolladores de navegadores muestran signos de interés (como un ticket activo o un proceso de "intención de implementar" en curso).

No documentamos una nueva tecnología si:

- No tiene una especificación o la especificación es una nota preliminar que parece susceptible a cambiar.
- Uno o ningún navegador la ha implementado actualmente y los navegadores que no la soportan no muestran signos de interés en implementarla. Evalúa esto consultando a los ingenieros que trabajan en esos navegadores y revisando los sistemas de seguimiento de errores del navegador y las listas de correo, etc.
- No es una tecnología expuesta a la web y/o es completamente propietaria, o
- Ya muestra signos de estar obsoleta o de que una función similar la reemplazará.

## Temas que no pertenecen a MDN Web Docs

En general, cualquier cosa que no sea un estándar web abierto no pertenece a MDN Web Docs. Nunca aceptaremos spam (publicidad comercial) ni otros contenidos irrelevantes en el sitio. El personal de Mozilla MDN puede expulsar a su discreción a los colaboradores que intenten enviar spam de forma persistente.

Algunos ejemplos de temas inapropiados para MDN Web Docs son:

- Tecnología que no está expuesta a la web y es específica de un navegador.
- Tecnología no relacionada con la web.
- Documentación para usuarios finales. Para los productos Mozilla, por ejemplo, dicha documentación pertenece al [sitio de soporte de Mozilla](https://support.mozilla.org).
- Enlaces externos de autoenlace o autopromoción. Consulta nuestra [guía de estilo de escritura](/es/docs/MDN/Writing_guidelines/Writing_style_guide#external_links) antes de añadir un enlace externo.

### Cuándo eliminamos documentación

Eliminamos las páginas de MDN Web Docs si ya no contienen información que sea útil de ninguna manera, si están lo suficientemente desactualizadas y/o si podrían ser incorrectas hasta el punto de que mantenerlas podría ser engañoso.

Los siguientes ejemplos describen situaciones en las que podríamos eliminar páginas o contenido:

- Los artículos contienen información sobre funciones que no se implementaron en todos los navegadores y que luego se retiraron (generalmente funciones experimentales como funcionalidades con prefijo).
- Las páginas de referencia describen funciones que se eliminaron de la especificación antes de que cualquier navegador las implementara.
- Los artículos cubren técnicas que más tarde demostraron ser malas prácticas y que mejores técnicas reemplazaron.
- Los artículos contienen información que más tarde otros artículos de mejor calidad reemplazaron.
- Los artículos contienen contenido inapropiado para MDN Web Docs.
- Las secciones de MDN Web Docs no están enfocadas en tecnologías web abiertas y representan una carga de mantenimiento.

Para obtener más información sobre _cómo_ eliminar documentos individuales, consulta la guía [Crear, mover y eliminar páginas](/es/docs/MDN/Writing_guidelines/Howto/Creating_moving_deleting). Si deseas eliminar una sección completa de contenido, consulta la guía [Retirar contenido](/es/docs/MDN/Writing_guidelines/Howto/Retiring_content).

## Tipos de documentos permitidos en MDN Web Docs

Generalmente, dividimos nuestra documentación en las siguientes categorías:

- Referencias
- Guías
- Glosarios
- Aprender/Tutoriales

En general, MDN Web Docs es para documentación de _productos_, no para documentación de _proyectos_ o _procesos_. Por lo tanto, si el documento trata sobre "cómo usar algo" o "cómo funciona algo" (donde el "algo" está en una de las categorías de temas mencionadas anteriormente), entonces puede ir en MDN Web Docs.

Si un documento trata sobre "quién está trabajando en el desarrollo de algo" o "planes para desarrollar algo", entonces no debe ir en MDN Web Docs.

Estos son algunos ejemplos de tipos de documentos que _no_ debes publicar en MDN Web Docs:

- Documentos de planificación.
- Documentos de diseño.
- Propuestas de proyectos.
- Especificaciones o normas.
- Material promocional, publicidad o información personal.
