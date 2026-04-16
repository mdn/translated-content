---
title: "HTML: Lenguaje de Marcado de Hipertexto"
short-title: HTML
slug: Web/HTML
l10n.sourceCommit: d1f3f179175c80c18b1b78ba0df0ea7d15ca32cc
---

HTML (Lenguaje de Marcado de Hipertexto, del inglés _HyperText Markup Language_) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, normalmente se utilizan otras tecnologías para describir la apariencia o presentación de una página web ([CSS](/es/docs/Web/CSS)) y su funcionalidad o comportamiento ([JavaScript](/es/docs/Web/JavaScript)).

El "hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un mismo sitio web o entre distintos sitios web. Los enlaces son un aspecto fundamental de la Web. Al publicar contenido en Internet y enlazarlo con páginas creadas por otras personas, te conviertes en un participante activo de la World Wide Web.

HTML utiliza "marcado" para etiquetar texto, imágenes y otros contenidos que se muestran en un navegador web. El marcado HTML incluye elementos como {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("search")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} y muchos otros.

Un elemento HTML se diferencia del resto del contenido de un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por "<" y ">". El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, puede escribirse en mayúsculas, minúsculas o una combinación de ambas. Por ejemplo, la etiqueta "<title>" puede escribirse como "<Title>", "<TITLE>" o de cualquier otra forma. No obstante, la convención y la práctica recomendada es escribir las etiquetas en minúsculas.

Los siguientes artículos pueden ayudarte a aprender más sobre HTML.

---

## Tutoriales para principiantes

Nuestros módulos principales de aprendizaje de desarrollo web contienen tutoriales modernos y actualizados que cubren los fundamentos de HTML.

**[Tu primer sitio web: creación del contenido](/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content)**
: Este artículo ofrece una introducción a qué es HTML y cómo utilizarlo, dirigido a personas sin experiencia previa en desarrollo web.

**[Estructuración del contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content)**
: Este módulo cubre los conceptos básicos del lenguaje HTML, así como aspectos clave como la estructura del documento, enlaces, listas, imágenes, formularios y más.

**[Formularios HTML](/es/docs/Learn_web_development/Extensions/Forms)**
: Los formularios son una parte fundamental de la Web: proporcionan gran parte de la funcionalidad necesaria para interactuar con los sitios web, como registrarse, iniciar sesión, enviar comentarios o realizar compras. Este módulo te ayuda a comenzar a crear la parte del cliente (interfaz de usuario) de los formularios.

---

## Guías

Las [guías de HTML](/es/docs/Web/HTML/Guides) te ayudan a crear contenido para la Web. Cubren temas como formularios, CORS, precarga de contenido e imágenes responsivas.

**[Hoja de referencia de HTML para sintaxis y tareas comunes](/es/docs/Web/HTML/Guides/Cheatsheet)**
: Referencia rápida de la sintaxis y las tareas más habituales en HTML.

**[Uso de comentarios HTML ``](/es/docs/Web/HTML/Guides/Comments)**
: Los comentarios HTML se utilizan para añadir notas explicativas al marcado o para evitar que el navegador procese partes específicas del documento.

**[Uso de la validación de formularios HTML y la API de validación de restricciones](/es/docs/Web/HTML/Guides/Constraint_validation)**
: HTML5 introdujo la validación de restricciones para facilitar la validación de formularios en el lado del cliente. Las restricciones básicas pueden comprobarse sin necesidad de JavaScript mediante atributos en los elementos del formulario.

**[Categorías de contenido](/es/docs/Web/HTML/Guides/Content_categories)**
: HTML se compone de distintos tipos de contenido, cada uno de los cuales puede utilizarse en ciertos contextos y está restringido en otros. Del mismo modo, cada contexto define qué categorías de contenido puede contener y qué elementos pueden o no utilizarse en él.

**[Uso de formatos de fecha y hora en HTML](/es/docs/Web/HTML/Guides/Date_and_time_formats)**
: Algunos elementos HTML utilizan valores de fecha y/o de hora. Esta guía describe los formatos de las cadenas que representan dichos valores.

**[Uso de microdatos en HTML](/es/docs/Web/HTML/Guides/Microdata)**
: Los microdatos permiten incrustar metadatos dentro del contenido existente en páginas web. Los motores de búsqueda y otros sistemas pueden procesarlos para ofrecer una experiencia de navegación más rica.

**[Uso de microformatos en HTML](/es/docs/Web/HTML/Guides/Microformats)**
: Los microformatos son estándares que permiten incrustar semántica y datos estructurados en HTML para su uso por aplicaciones web, motores de búsqueda, agregadores y otras herramientas.

**[Comprender el modo Quirks y el modo estándar](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)**
: Información histórica sobre estos modos de renderizado de los navegadores.

**[Uso de imágenes responsivas en HTML](/es/docs/Web/HTML/Guides/Responsive_images)**
: Aprende a utilizar imágenes que se adapten correctamente a dispositivos con distintos tamaños de pantalla, resoluciones y capacidades, mejorando el rendimiento.

**[Tipos y formatos de medios en la Web](/es/docs/Web/Media/Guides/Formats)**
: Los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}} permiten reproducir contenido multimedia de forma nativa sin necesidad de software adicional.

**[Definir términos con HTML](/es/docs/Web/HTML/How_to/Define_terms_with_HTML)**
: HTML ofrece varias formas de representar definiciones, ya sea en línea o mediante glosarios estructurados.

**[Uso de atributos de datos](/es/docs/Web/HTML/How_to/Use_data_attributes)**
: HTML5 permite asociar datos personalizados a elementos mediante atributos `data-*`, sin afectar a su significado semántico.

**[Uso de imágenes de origen cruzado en un canvas](/es/docs/Web/HTML/How_to/CORS_enabled_image)**
: Algunos elementos como {{HTMLElement("img")}} o {{HTMLElement("video")}} admiten el atributo `crossorigin`, que permite configurar solicitudes CORS.

**[Añadir un mapa de imagen](/es/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)**
: Los mapas de imagen permiten asociar enlaces a distintas áreas de una imagen.

**[Crear páginas HTML de carga rápida](/es/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)**
: Una página optimizada mejora la experiencia del usuario y reduce la carga en los servidores y en la red.

**[Añadir JavaScript a una página web](/es/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)**
: Este artículo explica cómo integrar código JavaScript en un documento HTML.

---

## Referencia

HTML está compuesto por elementos que pueden modificarse mediante atributos. Los documentos HTML se conectan entre sí mediante enlaces. Consulta la documentación completa de la [referencia HTML](/es/docs/Web/HTML/Reference).

**[Elementos HTML](/es/docs/Web/HTML/Reference/Elements)**
: Referencia de todos los {{glossary("Element", "elementos")}} HTML.

**[Atributos HTML](/es/docs/Web/HTML/Reference/Attributes)**
: Referencia de todos los atributos HTML.

**[Atributos globales](/es/docs/Web/HTML/Reference/Global_attributes)**
: Atributos que pueden aplicarse a todos los elementos HTML, incluso a los no estándar.

### Atributos por elemento

**[Tipos de `<input>`](/es/docs/Web/HTML/Reference/Elements/input)**
: Permiten crear controles interactivos en formularios web.

**[Tipos de script](/es/docs/Web/HTML/Reference/Elements/script/type)**
: Indican el tipo de script representado por el elemento.

**[Valores del atributo `name` en `<meta>`](/es/docs/Web/HTML/Reference/Elements/meta/name)**
: Proporcionan metadatos en pares clave-valor para toda la página.

### Valores de atributo

**[Valores del atributo `rel`](/es/docs/Web/HTML/Reference/Attributes/rel)**
: Definen la relación entre un recurso enlazado y el documento actual.

---

## Temas relacionados

**[Aplicar color a elementos HTML mediante CSS](/es/docs/Web/CSS/Guides/Colors/Applying_color)**
: Este artículo describe cómo utilizar CSS para añadir color al contenido HTML y qué propiedades utilizar.
