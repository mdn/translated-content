---
title: Estructurando la web con HTML
short-title: HTML
slug: Learn_web_development/Core/Structuring_content
l10n:
  sourceCommit: 25a3f6c781777a135143b0edd4b5e1f85857b802
---

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}

HTML es la tecnología que define el contenido y la estructura de cualquier sitio web. Bien escrito, también debería definir la semántica (el significado) del contenido de forma que una máquina pueda interpretarla, algo esencial para la accesibilidad, para la optimización en buscadores y para aprovechar las funcionalidades que los navegadores ofrecen de serie para que el contenido funcione de la mejor manera. Este módulo cubre los fundamentos del lenguaje, antes de pasar a áreas clave como la estructura del documento, los enlaces, las listas, las imágenes, los formularios y más.

## Prerrequisitos

Antes de empezar este módulo no necesitas conocimientos previos de HTML, pero deberías estar familiarizado, al menos de forma básica, con el uso de computadoras y con el uso pasivo de la web (es decir, sólo mirarla y consumir su contenido). Debes tener configurado un entorno de trabajo básico (como se detalla en [Instalación de software básico](/es/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software)) y comprender cómo crear y administrar archivos (como se detalla en [Manejo de archivos](/es/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files)). Ambos forman parte de nuestro módulo para principiantes [Introducción a la web](/es/docs/Learn_web_development/Getting_started/Your_first_website).

> [!NOTE]
> Si estás trabajando en una computadora, tablet u otro dispositivo en el que no puedas crear archivos, puedes probar el código en un editor en línea como [CodePen](https://codepen.io/) o [JSFiddle](https://jsfiddle.net/).

## Tutoriales y desafíos

- [Primeros pasos con HTML](/es/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax)
  - : Cubre lo más básico de {{glossary("HTML")}} para que puedas empezar: definimos los elementos, los atributos y otros términos importantes, y mostramos dónde encajan dentro del lenguaje. También mostramos cómo se estructura una página HTML típica y cómo se estructura un elemento HTML, y explicamos otras características básicas del lenguaje. Por el camino jugaremos un poco con HTML para que le tomes el gusto.
- [¿Qué hay en la cabecera? Metadatos en HTML](/es/docs/Learn_web_development/Core/Structuring_content/Webpage_metadata)
  - : La {{Glossary("Head","cabecera")}} de un documento HTML es la parte que **no** se muestra en el navegador cuando se carga la página. Contiene metadatos como el {{htmlelement("title")}} de la página, enlaces a {{glossary("CSS")}} (si quieres dar estilo a tu contenido HTML con CSS), enlaces a favicons personalizados y metadatos (datos sobre el HTML, como quién lo escribió y las palabras clave importantes que describen el documento).
- [Fundamentos de texto en HTML](/es/docs/Learn_web_development/Core/Structuring_content/Headings_and_paragraphs)
  - : Una de las tareas principales de HTML es dar estructura al texto para que el navegador muestre un documento HTML tal como pretende quien lo desarrolla. Este artículo explica cómo usar HTML para proporcionar la estructura fundamental de una página definiendo encabezados y párrafos.
- [Énfasis e importancia](/es/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance)
  - : El artículo anterior explicaba por qué la semántica es importante en HTML, y se centraba en los encabezados y los párrafos. Este artículo continúa con el tema de la semántica, y examina los elementos HTML que aplican énfasis e importancia al texto (el equivalente a la cursiva y la negrita en los medios impresos).
- [Listas](/es/docs/Learn_web_development/Core/Structuring_content/Lists)
  - : Las listas están por todas partes: desde la lista de la compra hasta la lista de indicaciones que sigues sin pensar para llegar a tu casa cada día, pasando por las listas de instrucciones que sigues en estos tutoriales. No te sorprenderá que HTML tenga un conjunto de elementos que nos permite definir distintos tipos de lista. En la web hay tres tipos: sin ordenar, ordenadas y de descripción. Esta lección te muestra cómo usar cada una.
- [Formateo de texto avanzado](/es/docs/Learn_web_development/Core/Structuring_content/Advanced_text_features)
  - : HTML tiene muchos otros elementos para definir la semántica del texto que no vimos en el artículo [Énfasis e importancia](/es/docs/Learn_web_development/Core/Structuring_content/Emphasis_and_importance). Los elementos que se describen aquí son menos conocidos, pero conviene conocerlos (y esta sigue sin ser una lista completa, ni de lejos). Aprenderás a marcar citas, código y otro texto relacionado, subíndices y superíndices, información de contacto y más.

- [Marcando una carta](/es/docs/Learn_web_development/Core/Structuring_content/Marking_up_a_letter) <sup>Desafío</sup>
  - : Todos aprendemos a escribir una carta tarde o temprano; además es un ejemplo útil para poner a prueba nuestras habilidades de formateo de texto. En este desafío tendrás que marcar una carta como prueba de tus habilidades con el formateo de texto en HTML, con los hipervínculos y con el uso correcto del elemento `<head>`.

- [Estructura web y documentación](/es/docs/Learn_web_development/Core/Structuring_content/Structuring_documents)
  - : Además de definir las partes individuales de tu página (como «un párrafo» o «una imagen»), HTML cuenta con varios elementos de bloque que sirven para definir zonas de tu sitio web (como «la cabecera», «el menú de navegación» o «la columna de contenido principal»). Este artículo explica cómo planificar la estructura básica de un sitio web y cómo escribir el HTML que la representa.

- [Crear hipervínculos](/es/docs/Learn_web_development/Core/Structuring_content/Creating_links)
  - : Los enlaces (también llamados hipervínculos) son realmente importantes: son lo que convierte a la Web en _una web_. Este artículo muestra la sintaxis necesaria para crear un enlace y comenta las buenas prácticas al usarlos.

- [Estructuración de una página de contenido](/es/docs/Learn_web_development/Core/Structuring_content/Structuring_a_page_of_content) <sup>Desafío</sup>
  - : Estructurar una página de contenido lista para maquetarla con CSS es una habilidad muy importante, así que en este desafío se pondrá a prueba tu capacidad para pensar en cómo puede acabar viéndose una página y elegir la semántica estructural adecuada sobre la que construir una maquetación.
- [Imágenes en HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_images)
  - : Al principio la web era sólo texto, y resultaba bastante aburrida. Por suerte, no pasó mucho tiempo antes de que se añadiera la capacidad de incrustar imágenes (y otros tipos de contenido más interesantes) dentro de las páginas web. En este artículo veremos en profundidad cómo usar el elemento {{htmlelement("img")}}, desde lo básico hasta cómo anotarlo con pies de foto usando {{htmlelement("figure")}}, y qué relación tiene con las imágenes de fondo de {{glossary("CSS")}}.
- [Contenido de audio y video](/es/docs/Learn_web_development/Core/Structuring_content/HTML_video_and_audio)
  - : Ahora que sabemos añadir imágenes sencillas a una página web, el siguiente paso es empezar a añadir reproductores de video y audio a tus documentos HTML. En este artículo veremos justamente eso con los elementos {{htmlelement("video")}} y {{htmlelement("audio")}}; terminaremos viendo cómo añadir subtítulos a tus videos.
- [Página de bienvenida](/es/docs/Learn_web_development/Core/Structuring_content/Splash_page) <sup>Desafío</sup>
  - : En este desafío pondremos a prueba lo que sabes de algunas de las técnicas comentadas en las últimas lecciones, pidiéndote que añadas imágenes y video a una página de bienvenida sobre bichos y otros animalillos.
- [Conceptos básicos de las tablas HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
  - : Este artículo te introduce en las tablas HTML y cubre lo más básico, como las filas, las celdas, los encabezados, hacer que una celda ocupe varias filas y columnas, y cómo agrupar todas las celdas de una columna para darles estilo.
- [Funciones avanzadas de las tablas HTML y accesibilidad](/es/docs/Learn_web_development/Core/Structuring_content/Table_accessibility)
  - : En este artículo veremos más funciones de accesibilidad de las tablas HTML, como los pies y los resúmenes, agrupar las filas en secciones de cabecera, cuerpo y pie, y delimitar el ámbito de columnas y filas.
- [Estructurando datos planetarios](/es/docs/Learn_web_development/Core/Structuring_content/Planet_data_table) <sup>Desafío</sup>
  - : En este desafío te damos datos sobre los planetas de nuestro sistema solar. Tu tarea es estructurarlos en una tabla HTML accesible.
- [Formularios y botones en HTML](/es/docs/Learn_web_development/Core/Structuring_content/HTML_forms)
  - : Los formularios y los botones de HTML son herramientas potentes para interactuar con quien usa la página: lo más habitual es usarlos para recopilar datos o para permitir controlar una interfaz de usuario. En este artículo presentamos los fundamentos de los formularios y los botones.
- [Depuración de HTML](/es/docs/Learn_web_development/Core/Structuring_content/Debugging_HTML)
  - : Escribir HTML está muy bien, pero ¿qué pasa cuando algo va mal y no consigues averiguar dónde está el error en el código? Este artículo te presentará algunas herramientas que te ayudarán a encontrar y corregir errores en HTML.

## Pon a prueba tus habilidades

Entre los artículos del tutorial encontrarás artículos de tipo «Pon a prueba tus habilidades» para comprobar si has retenido la información más importante antes de seguir adelante. Si quieres verlos todos juntos, los tienes listados en [Pon a prueba tus habilidades: HTML](/es/docs/Learn_web_development/Core/Structuring_content/Test_your_skills).

## Tutoriales adicionales

Estos tutoriales no forman parte del itinerario de aprendizaje, pero resultan interesantes de todos modos; considéralos objetivos opcionales, para estudiarlos cuando hayas terminado los artículos principales de Core.

- [Agregar gráficos vectoriales a la web](/es/docs/Learn_web_development/Core/Structuring_content/Including_vector_graphics_in_HTML)
  - : Los gráficos vectoriales son muy útiles en muchas situaciones: ocupan poco y son muy escalables, así que no se pixelan al ampliarlos o al mostrarlos a gran tamaño. En este artículo te mostramos cómo incluir uno en tu página web.
- [Desde object hasta iframe: otras tecnologías de incrustación](/es/docs/Learn_web_development/Core/Structuring_content/General_embedding_technologies)
  - : Al hablar de incrustar contenido en páginas web solemos pensar en imágenes, video y audio. En este artículo damos un paso al costado y vemos algunos elementos que permiten incrustar una gran variedad de tipos de contenido: los elementos {{htmlelement("iframe")}}, {{htmlelement("embed")}} y {{htmlelement("object")}}. Los `<iframe>` sirven para incrustar otras páginas web, y los otros dos permiten incrustar recursos externos como archivos PDF.

## Véase también

- [Learn HTML and CSS](https://scrimba.com/learn-html-and-css-c0p?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : El curso _Learn HTML and CSS_ de [Scrimba](https://scrimba.com?via=mdn) te enseña HTML y CSS construyendo y desplegando cinco proyectos, con lecciones y desafíos interactivos impartidos por docentes con experiencia.
- [Learn HTML](https://www.codecademy.com/learn/learn-html), Codecademy
  - : Otro recurso útil para aprender los fundamentos de HTML.
- [The basics of semantic HTML](https://scrimba.com/the-frontend-developer-career-path-c0j/~0xid?via=mdn), Scrimba <sup>[_socio de aprendizaje de MDN_](/es/docs/MDN/Writing_guidelines/Learning_content#partner_links_and_embeds)</sup>
  - : Esta lección interactiva ofrece una descripción útil de HTML, con especial énfasis en por qué es importante su aspecto _semántico_.

{{NextMenu("Learn_web_development/Core/Structuring_content/Basic_HTML_syntax", "Learn_web_development/Core")}}
