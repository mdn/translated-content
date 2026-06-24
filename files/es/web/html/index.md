---
title: "HTML: Lenguaje de Marcado de Hipertexto"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: d1f3f179175c80c18b1b78ba0df0ea7d15ca32cc
---

**HTML** (Lenguaje de Marcado de Hipertexto, del inglés _HyperText Markup Language_) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación ([CSS](/es/docs/Web/CSS)) de una página web o la funcionalidad/comportamiento ([JavaScript](/es/docs/Web/JavaScript)).

El "hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un mismo sitio web o entre distintos sitios web. Los enlaces son un aspecto fundamental de la Web. Al publicar contenido en Internet y enlazarlo con páginas creadas por otras personas, te conviertes en un participante activo de la World Wide Web.

HTML utiliza "marcado" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. El marcado HTML incluye "elementos" especiales como {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} y muchos otros.

Un elemento HTML se distingue de otro texto en un documento mediante "etiquetas", las cuales consisten en el nombre del elemento rodeado por "`<`" y "`>`". El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta `<title>` se puede escribir como `<Title>`, `<TITLE>` o de cualquier otra forma. Sin embargo, la convención y la práctica recomendada es, escribir las etiquetas en minúsculas.

Los siguientes artículos pueden ayudarte a obtener más información sobre HTML.

## Tutorialas para principiantes

Nuestros [Módulos centrales de aprendizaje](/es/docs/Learn_web_development/Core) contienen tutoriales modernos y actualizados que cubren los fundamentos de HTML.

- [Tú primer sitio web: Creando el contenido](/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)
  - : Este artículo provee un breve tour acerca de qué es HTML y cómo usarlo. Enfocado para personas que son completamente nuevas en el desarrollo web.
- [Estructurando contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content).
  - : Este módulo cubre los fundamentos de el lenguaje HTML, antes de ver areas clave como estructura del documento, enlaces, listas, imágenes, formularios y más.
- [Formularios HTML](/es/docs/Learn_web_development/Extensions/Forms)
  - : Los formularios son una parte muy importante de la Web - estos proveen mucha de la funcionalidad que necesitas para interactuar con sitios web, p. ej., registrarte e iniciar sesión, enviar retroalimentación, comprar productos y más. Este módulo te ayuda a iniciar a crear las partes de formularios para la interfaz de usuario.

## Guías

Las [Guías de HTML](/es/docs/Web/HTML/Guides) te ayudan a construir con HTML en la web. Cubren temas como, formularios, CORS, precarga de contenido e imágenes responsivas.

- [Hoja de referencia para sintaxis y tareas comunes HTML](/es/docs/Web/HTML/Guides/Cheatsheet)
  - : Referencia rápida para sintaxis y tareas comuned de HTML.
- [Usando comentarios HTML `<!-- … -->`](/es/docs/Web/HTML/Guides/Comments)
  - : Los comentarios HTML son usados para agregar explicaciones a las etiquetas o para prevenir que el navegador interprete partes del documento.
- [Usando validación de formularios HTML y la API de validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation)
  - : HTML5 introdujo la validación de restricciones para facilitar la validación de formularios en el lado del cliente. Restricciones básicas pueden ser validadas sin JavaScript agregando atributos a los elementos de formulario.
- [Categorías de contenido](/es/docs/Web/HTML/Guides/Content_categories)
  - : HTML se compone de diferentes tipos de contenido, a cada cual se le permite ser usado en ciertos contextos y no se le permite en otros. De igual manera, cada contexto tiene un conjunto de categorías de otro contenido que puede contener y elementos que pueden o no ser usados en éstas. Esta es una guía para estas categorías.
- [Usando formatos de fechas y horas en HTML](/es/docs/Web/HTML/Guides/Date_and_time_formats)
  - : Ciertos elementos usan valores de fechas y/u horas. Esta guía describe los formatos de las cadenas de caracteres que especifican estos valores.
- [Usando microdatos en HTML](/es/docs/Web/HTML/Guides/Microdata)
  - : Los microdatos son utilizados para anidar metadatos dentro de contenido existente en las páginas web. Los motores de busqueda y rastreadores web pueden extraer y procesar microdatos para proveer una experiencia de navegación más enriquecedora.
- [Usando microformatos en HTML](/es/docs/Web/HTML/Guides/Microformats)
  - : Los microformatos son estándares utilizaods para fijar datos semánticos y estructurados en HTML para ser usados por aplicaciones web sociales, motores de busqueda, agregadores y otras herramientas.
- [Comprende los modos quirk y estándar](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Información historica acerca de el modo quirk y el modo estándar.
- [Usando imágenes responsivas en HTML](/es/docs/Web/HTML/Guides/Responsive_images)
  - : Aprende acerca de imágenes responsivas que funcionan bien en dispositivos con un amplia variedad de tamaños de pantalla, resoluciones y otras características, mejorando el rendimiento en diferentes dispositivos.
- [Tipos de medios y formatos en la web](/es/docs/Web/Media/Guides/Formats)
  - : Los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}} permiten reproducir medios de audio y video nativamente dentro de tú contenido, sin la necesidad de software de soporte externo.

## Cómo hacer

- [Definir términos con HTML](/es/docs/Web/HTML/How_to/Define_terms_with_HTML)
  - : HTML provee múltiples maneras de transmitir descripciones semánticas, ya sea en línea o como glosarios estructurados. Este artículo muestra cómo marcar apropiadamente palabras clave al definirlos.
- [Usar atributos data](/es/docs/Web/HTML/How_to/Use_data_attributes)
  - : HTML5 esta diseñado con extensibilidad en mente para datos que debería asociarse con un elemento en particular, pero que no necesita tener algún significado definido. Los atributos `data-*` nos permiten guardar información extra en elementos HTML semanticos estándar.
- [Usar imágenes cross-origin en canvas](/es/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Algunos elementos HTML proveen soporte para [CORS](/es/docs/Web/HTTP/Guides/CORS), tales como {{HTMLElement("img")}} o {{HTMLElement("video")}}, que tienen un atributo `crossorigin` (propiedad `crossOrigin`), la cual te permite configurar las solicitudes CORS para los datos traidos del elemento.
- [Agregar un hitmap sobre una imagen](/es/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
  - : Los mapas de imágenes permiten asociar hiperenlaces con diferentes partes de una imágen. Este artículo muestra cómo se les puede crear e implementar.
- [Crea páginas HTML de carga rápida](/es/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)
  - : Estos consejos están basados en conocmiento común y experimentación. Una página web optimizada, no solo provee un sitio más responsivo para tús visitantes, pero también reduce la carga en tús servidores web y la conección de internet.
- [Agregar JavaScript a tu página web](/es/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)
  - : Este artículo explica cómo agregar código JavaScript a un archivo HTML.

## Referencia

HTML consiste en **elementos**, cada uno de los cuales puede ser modificado por algún número de **atributos**. Los documentos HTML están conectados entre sí, a través de **enlaces**. Revisa la documentación completa de la [referencia HTML](/es/docs/Web/HTML/Reference).

- [Elementos HTML](/es/docs/Web/HTML/Reference/Elements)
  - : Referencia para todos los {{glossary("Element", "elementos")}} HTML.
- [Atributos HTML](/es/docs/Web/HTML/Reference/Attributes)
  - : Referencia para todos los atributos. Los atributos, son valores adicionales que configuran o ajustan el comportamiento de los elementos de varias maneras.
- [Atributos Globales](/es/docs/Web/HTML/Reference/Global_attributes)
  - : Referencia de atributos globales que pueden ser especificados en todos los elementos HTML, _inclusive aquellos que no están especificados en el estándar_. Esto significa que cualquier elemento no estándar aún debe permitir estos atributos, a pesar que esos elementos hacen que el documento no este conforme al estándar HTML5.

### Atributos por elemento

- [Tipos input](/es/docs/Web/HTML/Reference/Elements/input)
  - : Utilizado para crear controles interactivos para formularios basados en la web.
- [Tipos script](/es/docs/Web/HTML/Reference/Elements/script/type)
  - : Indica el tipo de script representado por el elemento.
- [atributo name de elementos meta](/es/docs/Web/HTML/Reference/Elements/meta/name)
  - : Provee metadatos en pares nombre-valor para la página entera.

### Valores de Atributos

- [Palabras reservadas rel](/es/docs/Web/HTML/Reference/Attributes/rel)
  - : Definen la relación entre un recurso enlazado y el documento actual.

## Temas relacionados

- [Aplicando color a elementos HTML mediante CSS](/es/docs/Web/CSS/Guides/Colors/Applying_color)
  - : Este artículo cubre la mayoría de las formas en que puedes agregar color al contenido de HTML, lista a que partes de los documentos HTML se les puede agregar color y que propiedades de CSS usar para hacerlo.
