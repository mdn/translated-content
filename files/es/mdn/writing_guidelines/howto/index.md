---
title: Cómo etiquetar correctamente las páginas
slug: MDN/Writing_guidelines/Howto
---

{{MDNSidebar}}

**"Article tags"** Las etiquetas del artículo son una forma importante para poner a los visitantes en contacto con contenido útil. Cada página normalmente debería contener varias etiquetas para ayudar a mantener organizado el contenido. En esta página se explica la mejor manera de marcar las páginas para que así nuestros lectores puedan encontrar la información y podamos mantenernos organizados.

Si necesita ayuda con la interfaz de usuario de edición de etiquetas, consulte la sección de etiquetado [tagging section](/es/docs/MDN/Contribute/Editor/Basics#The_tags_box) en nuestra guía del editor.

Por favor utilice las etiquetas como se explica a continuación. Si no, nuestras herramientas automatizadas no generarán correctamente las listas de contenido, las páginas de destino y el entrecruzamiento de artículos.

## Cómo usa MDN las etiquetas (tags)

Hay varias maneras de usar las etiquetas en MDN:

- "Document categorization" Categorización de documentos
  - : ¿Qué clase de documento es? ¿Es una referencia? ¿Un tutorial? ¿Una página de inicio? Nuestros visitantes pueden usar estas etiquetas para filtrar búsquedas, ¡así que son realmente importantes!
- "Topic identification" Identificación del tema
  - : ¿Qué tema cubre el artículo? ¿Trata sobre una API? ¿El DOM? ¿Gráficos? Estas también son importantes porque se pueden usar en filtros de búsquedas.
- "Technology status" Estado de la tecnología
  - : ¿Cuál es el estado de la tecnología? ¿No es estándar? ¿Obsoleto o en desuso? ¿Experimental?
- "Skill level" Nivel de habilidad
  - : Para tutoriales y guías, ¿cómo es de avanzado el material cubierto por el artículo?
- "Document metadata" Documento de recursos
  - : La comunidad de escritores utiliza las etiquetas para hacer un seguimiento de qué páginas necesitan qué tipo de trabajo.

## Tipos de etiquetas

Guía rápida de tipos de etiquetas y sus posibles valores.

### Categoría de documento

Cuando se etiqueta un artículo con una de estas categorías, estas ayudando a las herramientas automáticas a generar con mayor precisión las páginas de destino, tablas de contenido, etc. Estos términos también serán usados por nuestro nuevo motor de búsqueda, para que nuestros visitantes puedan localizar a su antojo referencias o información de la guía.

Utilizamos los siguientes nombres de categoría como etiquetas de marcado estándar:

- `Introducción`
  - : El artículo proporciona material introductorio sobre un tema. Lo ideal sería tener solo una etiqueta "Introducción" por tema tecnológico tratado.
- `Destacado`
  - : El artículo es crítico y se mostrará de forma destacada en las páginas de inicio. Esta etiqueta se usara con moderación (nunca más de tres documentos por tema).
- `Referencia`
  - : El artículo contiene material de referencia de una API, elemento, atributo, propiedad o similares.
- `Inicio`
  - : Es una página de inicio.
- `Guía`
  - : El artículo es una página de cómo hacerlo o guía.
- `Ejemplo`
  - : El artículo es una página de ejemplo de código o contiene ejemplos de código (es decir, fragmentos reales de código útil y no de una sola línea "ejemplos de sintaxis").

### Temas

Mediante la identificación del área temática del artículo, estás ayudando a generar mejores resultados de búsqueda, páginas de inicio y navegación.

Si bien hay cierta flexibilidad para identificar los nuevos temas, tratamos de limitarlos a los nombres de APIs o tecnologías. Algunos ejemplos:

- `"HTML`
- `"CSS`
- `"JavaScript` (cuidado con la "S" mayúscula!)
- `"Documento`
- `"DOM`
- `"API` para cada interfaz, método y propiedad
- `"Método` para cada método de una API
- `"Propiedad` para cada propiedad de una API
- `"Gráficos`
- `"Firefox OS`
- `"Gecko`
- `"XUL`
- `"XPCOM`
- `"SVG`
- `"WebGL`
- `"Elemento`
- `"Nodo`
- `"Herramientas`
- `"Web`

En general, la etiqueta de identificación del tema será el nombre de la interfaz con que este relacionada la página (como nodo "[Node"](/es/docs/Web/API/Node), que tiene muchas páginas para sus diversas propiedades y métodos), o el nombre general de un tipo de tecnología. Puede etiquetar una página sobre WebGL con `Graphics` y `WebGL` ó una página sobre {{HTMLElement("canvas")}} con `HTML`, `Element`, `Canvas` y `Graphics`.

### Estado tecnológico

Para ayudar al visitante a comprender el estado actual de una tecnología, usamos estas etiquetas en las páginas para describir la situación de las especificaciones de cada tecnología. Esta descripción no es suficientemente detallada como para explicar los aspectos y avances de las especificaciones (para ello existe la Tabla de Especificaciones), pero ayuda al lector a juzgar si es una buena idea usar la tecnología descrita en el artículo.

Aquí tienen los posibles valores de esta etiqueta:

- `Not-standard`
  - : Indica que la tecnología o API descrita en la página no forma parte de un estándar, pero se considera estable en cualquier aplicación de navegador. Si no utiliza esta etiqueta, sus lectores asumirán que la tecnología es estándar. La tabla de compatibilidad en la página debe aclarar qué navegador o navegadores soportan esta tecnología o API.
- `Deprecated`
  - : La tecnología o API cubierta en la página se marca como en desuso en las especificaciones y es probable que con el tiempo sea eliminada de navegadores actuales.
- `Obsolete`
  - : La tecnología o API ha sido considerada obsoleta y ha sido eliminada (o actualmente se está retirando) de la totalidad de los navegadores actuales.
- `Experimental`
  - : La tecnología no es estandar y es una tecnología o API experimental que pueden o no llegar a ser parte de un estandar. También está sujeta a cambios en el motor del navegador (normalmente sólo uno) que lo implementa.
- `Necesita Privilegios`
  - : La API requiere acceso privilegiado al dispositivo en el que se ejecuta el código.
- `Solo Certificado`
  - : La API sólo funciona con código certificado.

¡Estas etiquetas no excluyen el uso de la [tabla de compatibilidad](/es/docs/Project:Compatibility_tables) en su artículo!

### Nivel de habilidad

Utilice este tipo de etiquetas solo para guías y tutoriales (es decir, para páginas que ya esten etiquetadas como `Guía`) para ayudar a los usuarios a elegir los tutoriales en base a su nivel. Hay tres valores posibles:

- `Principiante`
  - : Los artículos diseñados para introducir al lector en una tecnología que nunca han usado o sólo tienen una vaga familiaridad.
- `Intermedio`
  - : Artículos para los usuarios que ya saben trabajar con la tecnología, pero no son expertos.
- `Advanced`
  - : Artículos sobre como ampliar las capacidades de una tecnología y del lector.

### Metadatos

La comunidad de escritores utiliza estas etiquetas para designar los artículos que requieran algun tipo trabajo específico. He aquí una lista de los que más utilizamos:

- `basura`
  - : El artículo debe ser eliminado.
- `NecesitaContenido`
  - : El artículo es un esbozo o carece de información. Esta etiqueta significa que alguien debe revisar el contenido, añadir más detalles y/o terminar de escribir el artículo.
- `NecesitaEjemplos`
  - El artículo necesita uno o más ejemplos para ayudar a demostrar la finalidad el artículo. Estos ejemplos deben utilizar el sistema [live sample system](/es/docs/Project:MDN/Contributing/How_to_help/Code_samples).
- `NecesitaEjemplosReales`
  - El artículo tiene uno o más ejemplos que necesitan ser actualizados para usar el sistema [live sample system](/es/docs/Project:MDN/Contributing/How_to_help/Code_samples).
- `NecesitaActualizacion`
  - : El contenido no está actualizado y necesita una actualización.
- `excluir`
  - : El contenido no necesita ser localizado y no aparecerá en las páginas de estados de localización.
- `prioridad`
  - : El contenido es importante y debe ser marcado como prioritario para traductores de MDN.

### Mapa de Alfabetización Web

El proyecto [WebMaker](https://webmaker.org), a través de [Web Literacy Map](https://webmaker.org/literacy) ha definido las habilidades necesarias para leer, escribir y participar en la Web de forma óptima. Utilizaremos etiquetas de "Web Literacy Map" en MDN para ayudar a nuestros usuarios a encontrar los recursos que mejor se adapten a sus necesidades:

- `Navegacion`
  - : Cómo navegar por la Web
- `WebMecanicas`
  - : Cómo está organizada y cómo funciona la web
- `Buscar`
  - : Cómo encontrar información, personas y recursos en la Web
- `Credibilidad`
  - : Cómo evaluar críticamente la información que encuentre en la Web
- `Seguridad`
  - : Cómo mantener sistemas, identidades y seguridad de los contenidos
- `Composición`
  - : Cómo crear y organizar contenido para la Web
- `remezcla`
  - : Cómo modificar recursos Web existentes para crear algo nuevo
- `Diseno`
  - : Cómo mejorar la estética visual y la experiencia del usuario
- `Accesibilidad`
  - : Cómo comunicarse de una manera universalmente reconocible a través de los recursos de la Web
- `CodigoScript`
  - : Cómo codificar y / o crear experiencias interactivas en la Web
- `infraestructura`
  - : Cómo funcionan los detalles técnicos de la Internet
- `Compartir`
  - : Cómo crear recursos con otras personas
- `Colaborar`
  - : Cómo trabajar con otras personas
- `Comunidad`
  - : Cómo participar en las comunidades Web y entender cómo funcionan
- `Privacidad`
  - : Cómo examinar las consecuencias de compartir datos en línea
- `Abriendo`
  - : Cómo ayudar a mantener la Web accesible a todo el mundo

## Resumen

Para cada página debes asignar distintos tipos de etiquetas, por ejemplo:

**Un tutorial sobre WebGL para principiantes:** `WebGL, Gráficos, Guía, Principiante`

**Página de referencia para {{HTMLElement ("Canvas")}}:** `Canvas, HTML, elemento, gráficos`

**Una página de inicio de herramientas para desarrolladores de Firefox OS**: `Herramientas, Firefox OS, Inicio`

## Filtros de etiquetas y búsqueda

Los filtros de búsqueda no funcionarán adecuadamente a menos que etiquetamos correctamente las páginas MDN. A continuación hay una tabla de filtros de búsqueda y las etiquetas de búsqueda que funcionan para dichos filtros.

> **Nota:** Si varias etiquetas se muestran bajo "Nombre de etiqueta", significa que una o más de las etiquetas deben estar presentes en el artículo.

| Grupo          | Nombre filtro          | Nombre de etiqueta                                                                    |
| -------------- | ---------------------- | ------------------------------------------------------------------------------------- |
| Tema           | Open Web Apps          | `Apps`                                                                                |
|                | HTML                   | `HTML`                                                                                |
|                | CSS                    | `CSS`                                                                                 |
|                | JavaScript             | `JavaScript`                                                                          |
|                | APIs and DOM           | `API`                                                                                 |
|                | Canvas                 | `Canvas`                                                                              |
|                | SVG                    | `SVG`                                                                                 |
|                | MathML                 | `MathML`                                                                              |
|                | WebGL                  | `WebGL`                                                                               |
|                | XUL                    | `XUL`                                                                                 |
|                | Marketplace            | `Marketplace`                                                                         |
|                | Firefox                | `Firefox`                                                                             |
|                | Firefox para Android   | `Firefox Mobile`                                                                      |
|                | Firefox para Desktop   | `Firefox Desktop`                                                                     |
|                | Firefox OS             | `Firefox OS`                                                                          |
|                | Movil                  | `Movil`                                                                               |
|                | Web Development        | `Web Development`                                                                     |
|                | Add-ons & Extensions   | `Add-ons` \|\| `Extensions` \|\| `Plugins` \|\| `Themes`                              |
|                | Juegos                 | `Juegos`                                                                              |
| Nivel          | Soy experto            | `Experto`                                                                             |
|                | Intermedio             | `Intermedio`                                                                          |
|                | Soy aprendiz           | `Aprendiz`                                                                            |
| Tipo Documento | Docs                   | Restringirá la búsqueda al contenido de los docs, dejando fuera otros contenidos MDN. |
|                | Demostración           | Incluirá el contenido de demostración en los resultados de búsqueda.                  |
|                | Herramientas           | `Herramientas`                                                                        |
|                | Ejemplo Código         | `Ejemplo`                                                                             |
|                | Como & Tutorial        | `Guia`                                                                                |
|                | Perfiles Desarrollador | Incluirá perfiles de desarrolladores de MDN en los resultados de búsqueda.            |
|                | Recurso externo        | Es algo que el equipo de desarrollo todavía está descifrando...                       |

## Problemas de etiquetado que puedes solucionar

Hay varios tipos de problemas de etiquetado que puedes ayudar a solucionar:

- Sin etiquetas
  - : Generalmente los artículos deben tener por lo menos una etiqueta "categoría" y una etiqueta de "tema". Si puedes ayudar a asegurar que el mínino de etiquetas estén presentes, ¡te convertirás en nuestro héroe de documentación!
- Etiquetas que no siguen nuestras normas de etiquetado
  - : Por favor, corrija los documentos en los que las etiquetas no siguen las normas de esta página.
- Etiquetas incorrectos
  - : Si está buscando en un artículo acerca de "HTML" y esta etiquetado como "JavaScript", eso probablemente es incorrecto! Del mismo modo, si un artículo de discusión interna de Mozilla tiene una etiqueta "Web", probablemente sea incorrecto también. Remueva las etiquetas y añada las etiquetas correctas si aun no están. Por favor, corrija también los errores ortográficos (por ejemplo, "Javascript" coincide ya que las etiquetas no son sensibles a las mayúsculas, ¡pero no nos descuidemos!).
- Etiquetas que faltan
  - : Si un artículo tiene algunas pero no todas las etiquetas que necesita, no dude en añadir más. Por ejemplo, si una página en referencia a JavaScript está (correctamente) etiquetado como "JavaScript" pero nada más, ¡estás invitado a etiquetar la página como "Referencia"!
- Etiqueta Spam
  - : Es el mayor problema de etiquetado de la Web, la publicidad no deseada. ¡Tenemos que eliminar estas etiquetas de inmediato!, son desagradables y difíciles de manejar si permanecen mucho tiempo en la web. Además, son terribles para {{Glossary("SEO")}}.

Si ve uno (o más) de estos problemas, por favor acceda a MDN "[log into MDN](/es/docs/Project:MDN/Contributing/Getting_started#Logging_into_MDN)" y haz clic en Editar en la parte superior derecha de la ventana de MDN. Una vez que cargue el editor, desplácese hasta la parte inferior de la página, donde puedes encontrar el cuadro de etiquetas. Para más detalles sobre la interfaz de etiquetado, consulte el cuadro de etiquetas "[The tags box"](/es/docs/Project:MDN/Contributing/Editor_guide#The_tags_box) en la guía del editor de MDN.
