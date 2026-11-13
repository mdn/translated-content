---
title: "HTML: Lenguaje de Marcado de Hipertexto"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: 8e2fe58f37aad757276d6bfdfa8f2a57aac73749
---

**HTML** (Lenguaje de Marcado de Hipertexto, del inglés _HyperText Markup Language_) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, normalmente se usan otras tecnologías para describir la apariencia o presentación de una página web ([CSS](/es/docs/Web/CSS)) o su funcionalidad o comportamiento ([JavaScript](/es/docs/Web/JavaScript)).

El "hipertexto" hace referencia al texto que contiene enlaces que conectan páginas web entre sí, ya sea dentro de un mismo sitio web o entre distintos sitios web. Los enlaces son un aspecto fundamental de la Web. Al publicar contenido en Internet y enlazarlo con páginas creadas por otras personas, te conviertes en un participante activo de la World Wide Web.

HTML usa "marcado" para anotar texto, imágenes y otros contenidos que se muestran en un navegador web. El marcado HTML incluye "elementos" especiales como {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} y muchos otros.

Un elemento HTML se diferencia del resto del texto de un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por `<` y `>`. El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, puede escribirse en mayúsculas, en minúsculas o con una combinación de ambas. Por ejemplo, la etiqueta `<title>` puede escribirse como `<Title>`, `<TITLE>` o de cualquier otra forma. No obstante, la convención y la práctica recomendada es escribir las etiquetas en minúsculas.

Los siguientes artículos pueden ayudarte a aprender más sobre HTML.

## Tutoriales para principiantes

Nuestros [módulos principales de aprendizaje de desarrollo web](/es/docs/Learn_web_development/Core) contienen tutoriales modernos y actualizados que cubren los fundamentos de HTML.

- [Tu primer sitio web: crear el contenido](/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Este artículo ofrece un breve recorrido por qué es HTML y cómo usarlo, pensado para personas que no tienen ninguna experiencia en desarrollo web.
- [Estructurar contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content)
  - : Este módulo cubre los conceptos básicos del lenguaje HTML, antes de ver áreas clave como la estructura de los documentos, los enlaces, las listas, las imágenes, los formularios y más.
- [Formularios HTML](/es/docs/Learn_web_development/Extensions/Forms)
  - : Los formularios son una parte muy importante de la Web: ofrecen gran parte de la funcionalidad que necesitas para interactuar con los sitios web, por ejemplo, registrarte e iniciar sesión, enviar comentarios, comprar productos y más. Este módulo te ayuda a empezar a crear la parte del lado del cliente (front-end) de los formularios.

## Guías

Las [guías de HTML](/es/docs/Web/HTML/Guides) te ayudan a crear con HTML en la web. Cubren temas como los formularios, CORS, la precarga de contenido y las imágenes responsivas.

- [Hoja de referencia de HTML para la sintaxis y las tareas comunes](/es/docs/Web/HTML/Guides/Cheatsheet)
  - : Referencia rápida de la sintaxis y las tareas más habituales en HTML.
- [Usar comentarios HTML `<!-- … -->`](/es/docs/Web/HTML/Guides/Comments)
  - : Los comentarios HTML se usan para añadir notas explicativas al marcado o para evitar que el navegador interprete partes concretas del documento.
- [Usar la validación de formularios HTML y la API de validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation)
  - : HTML5 introdujo la validación de restricciones para facilitar la validación de formularios del lado del cliente. Las restricciones básicas se pueden comprobar sin JavaScript estableciendo atributos en los elementos del formulario.
- [Categorías de contenido](/es/docs/Web/HTML/Guides/Content_categories)
  - : HTML se compone de varios tipos de contenido, cada uno de los cuales puede usarse en ciertos contextos y no está permitido en otros. Del mismo modo, cada contexto tiene un conjunto de categorías de contenido que puede contener y de elementos que pueden o no usarse en él. Esta es una guía de esas categorías.
- [Usar formatos de fecha y hora en HTML](/es/docs/Web/HTML/Guides/Date_and_time_formats)
  - : Algunos elementos HTML usan valores de fecha u hora. Esta guía describe los formatos de las cadenas que especifican estos valores.
- [Usar microdatos en HTML](/es/docs/Web/HTML/Guides/Microdata)
  - : Los microdatos se usan para anidar metadatos dentro del contenido existente de las páginas web. Los motores de búsqueda y los rastreadores web pueden extraer y procesar los microdatos para ofrecer una experiencia de navegación más rica.
- [Usar microformatos en HTML](/es/docs/Web/HTML/Guides/Microformats)
  - : Los microformatos son estándares que se usan para incrustar semántica y datos estructurados en HTML, para su uso por parte de aplicaciones web sociales, motores de búsqueda, agregadores y otras herramientas.
- [Comprender el modo quirks y el modo estándar](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Información histórica sobre el modo quirks y el modo estándar.
- [Usar imágenes responsivas en HTML](/es/docs/Web/HTML/Guides/Responsive_images)
  - : Aprende sobre las imágenes responsivas, que funcionan bien en dispositivos con tamaños de pantalla, resoluciones y otras características muy distintas, y mejoran el rendimiento en distintos dispositivos.
- [Tipos y formatos de medios en la web](/es/docs/Web/Media/Guides/Formats)
  - : Los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}} te permiten reproducir audio y video de forma nativa dentro de tu contenido, sin necesidad de software externo.

## Cómo

- [Definir términos con HTML](/es/docs/Web/HTML/How_to/Define_terms_with_HTML)
  - : HTML ofrece varias formas de transmitir la semántica de una descripción, ya sea en línea o en glosarios estructurados. Este artículo muestra cómo marcar correctamente las palabras clave al definirlas.
- [Usar atributos de datos](/es/docs/Web/HTML/How_to/Use_data_attributes)
  - : HTML5 está diseñado pensando en la extensibilidad para los datos que deben asociarse a un elemento concreto pero que no necesitan tener ningún significado definido. Los atributos `data-*` nos permiten guardar información adicional en elementos HTML semánticos estándar.
- [Usar imágenes de origen cruzado en un canvas](/es/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Algunos elementos HTML que admiten [CORS](/es/docs/Web/HTTP/Guides/CORS), como {{HTMLElement("img")}} o {{HTMLElement("video")}}, tienen un atributo `crossorigin` (la propiedad `crossOrigin`), que te permite configurar las solicitudes CORS de los datos que obtiene el elemento.
- [Añadir un mapa de zonas sobre una imagen](/es/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
  - : Los mapas de imagen permiten asociar hipervínculos a distintas partes de una imagen. Este artículo muestra cómo crearlos e implementarlos.
- [Crear páginas HTML de carga rápida](/es/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)
  - : Estos consejos se basan en el conocimiento común y en la experimentación. Una página web optimizada no solo ofrece un sitio que responde mejor a tus visitantes, sino que también reduce la carga de tus servidores web y de tu conexión a internet.
- [Añadir JavaScript a tu página web](/es/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)
  - : Este artículo explica cómo añadir código JavaScript a un archivo HTML.

## Referencia

HTML está compuesto por **elementos**, cada uno de los cuales puede modificarse con varios **atributos**. Los documentos HTML se conectan entre sí mediante **enlaces**. Consulta la documentación completa de la [referencia de HTML](/es/docs/Web/HTML/Reference).

- [Elementos HTML](/es/docs/Web/HTML/Reference/Elements)
  - : Referencia de todos los {{glossary("Element", "elementos")}} HTML.
- [Atributos HTML](/es/docs/Web/HTML/Reference/Attributes)
  - : Referencia de todos los atributos HTML. Los atributos son valores adicionales que configuran los elementos o ajustan su comportamiento de distintas formas.
- [Atributos globales](/es/docs/Web/HTML/Reference/Global_attributes)
  - : Referencia de los atributos globales, que pueden especificarse en todos los elementos HTML, _incluso en los que no están especificados en el estándar_. Esto significa que cualquier elemento no estándar debe seguir admitiendo estos atributos, aunque esos elementos hagan que el documento no cumpla con HTML5.

### Atributos por elemento

- [Tipos de input](/es/docs/Web/HTML/Reference/Elements/input)
  - : Se usan para crear controles interactivos en formularios web.
- [Tipos de script](/es/docs/Web/HTML/Reference/Elements/script/type)
  - : Indican el tipo de script que representa el elemento.
- [meta name](/es/docs/Web/HTML/Reference/Elements/meta/name)
  - : Proporciona metadatos en pares nombre-valor para toda la página.

### Valores de atributo

- [Palabras clave de rel](/es/docs/Web/HTML/Reference/Attributes/rel)
  - : Define la relación entre un recurso enlazado y el documento actual.

## Temas relacionados

- [Aplicar color a elementos HTML con CSS](/es/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Este artículo cubre la mayoría de las formas de usar CSS para añadir color al contenido HTML, e indica qué partes de los documentos HTML se pueden colorear y qué propiedades CSS usar para hacerlo.
