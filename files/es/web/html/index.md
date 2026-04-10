---
title: "HTML: Lenguaje de etiquetas de hipertexto"
short-title: HTML
slug: Web/HTML
l10n:
  sourceCommit: d1f3f179175c80c18b1b78ba0df0ea7d15ca32cc
---

**HTML** (Lenguaje de Marcas de Hipertexto, del inglés _HyperText Markup Language_) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web ([CSS](/es/docs/Web/CSS)) o la funcionalidad/comportamiento ([JavaScript](/es/docs/Web/JavaScript)).

"Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «_World Wide Web_» (Red Informática Mundial).

HTML utiliza "marcas" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. Las marcas HTML incluyen "elementos" especiales como {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} y muchos otros.

Un elemento HTML se distingue de otro texto en un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por "`<`" y "`>`". El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta `<title>` se puede escribir como `<Title>`, `<TITLE>` o de cualquier otra forma. Sin embargo, la convención y la práctica recomendada es, escribir las etiquetas en minúsculas.

Los siguientes artículos pueden ayudarte a obtener más información sobre HTML.

## Tutorialas para principiantes

Nuestros [Módulos centrales de aprendizaje](/es/docs/Learn_web_development/Core) contienen tutoriales modernos y actualizados que cubren los fundamentos de HTML.

- [Tú primer sitio web: Creando el contenido](/es/docs/Learn_web_development/Getting_started/Your_first_website/Creating_the_content) 
  - : Este artículo proveé un breve tour acerca de qué es HTML y cómo usarlo. Enfocado para personas que son completamente nuevas en el desarrollo web.
- [Estructurando contenido con HTML](/es/docs/Learn_web_development/Core/Structuring_content).
  - : Este módulo cubre los fundamentos de el lenguaje HTML, antes de ver areas clave como estructura del documento, enlaces, listas, imagenes, formularios y más.
- [Formularios HTML](/es/docs/Learn_web_development/Extensions/Forms)
  - : Los formularios son una parte muy importante de la Web - estos proveén mucha de la funcionalidad que necesitas para interactuar con sitios web, p. ej., registrarte e iniciar sesión, enviar retroalimentación, comprar productos y más. Este módulo te ayuda a iniciar a crear las partes de formularios para la interfaz de usuario.

## Guías

Las [Guías de HTML](/es/docs/Web/HTML/Guides) te ayudan a construir con HTML en la web. Cubren temas como, formularios, CORS, precarga de contenido e imagenes responsivas.

- [HTML cheatsheet for syntax and common tasks](/es/docs/Web/HTML/Guides/Cheatsheet)
  - : Quick reference for common HTML syntax and tasks.
- [Using HTML comments `<!-- … -->`](/es/docs/Web/HTML/Guides/Comments)
  - : HTML comments are used to add explanatory notes to the markup or to prevent the browser from interpreting specific parts of the document.
- [Using HTML form validation and the Constraint Validation API](/es/docs/Web/HTML/Guides/Constraint_validation)
  - : HTML5 introduced constraint validation to ease form validation on the client side. Basic constraints can be checked without JavaScript by setting attributes on form elements.
- [Content categories](/es/docs/Web/HTML/Guides/Content_categories)
  - : HTML is comprised of several kinds of content, each of which is allowed to be used in certain contexts and is disallowed in others. Similarly, each context has a set of other content categories it can contain and elements that can or can't be used in them. This is a guide to these categories.
- [Using date and time formats in HTML](/es/docs/Web/HTML/Guides/Date_and_time_formats)
  - : Certain HTML elements use date and/or time values. This guide describes the formats of the strings that specify these values.
- [Using microdata in HTML](/es/docs/Web/HTML/Guides/Microdata)
  - : Microdata is used to nest metadata within existing content on web pages. Search engines and web crawlers can extract and process microdata to provide a richer browsing experience.
- [Using microformats in HTML](/es/docs/Web/HTML/Guides/Microformats)
  - : Microformats are standards used to embed semantics and structured data in HTML for use by social web applications, search engines, aggregators, and other tools.
- [Understanding quirks and standards modes](/es/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode)
  - : Historical information on quirks mode and standards mode.
- [Using responsive images in HTML](/es/docs/Web/HTML/Guides/Responsive_images)
  - : Learn about responsive images that work well on devices with widely differing screen sizes, resolutions, and other features, improving performance across different devices.
- [Media types and formats on the web](/es/docs/Web/Media/Guides/Formats)
  - : The {{HTMLElement("audio")}} and {{HTMLElement("video")}} elements allow you to play audio and video media natively within your content without the need for external software support.

## How to

- [Define terms with HTML](/es/docs/Web/HTML/How_to/Define_terms_with_HTML)
  - : HTML provides several ways to convey description semantics, whether inline or as structured glossaries. This article shows how to properly mark up keywords when defining them.
- [Use data attributes](/es/docs/Web/HTML/How_to/Use_data_attributes)
  - : HTML5 is designed with extensibility in mind for data that should be associated with a particular element but need not have any defined meaning. `data-*` attributes allow us to store extra information on standard, semantic HTML elements.
- [Use cross-origin images in a canvas](/es/docs/Web/HTML/How_to/CORS_enabled_image)
  - : Some HTML elements that provide support for [CORS](/es/docs/Web/HTTP/Guides/CORS), such as {{HTMLElement("img")}} or {{HTMLElement("video")}}, have a `crossorigin` attribute (`crossOrigin` property), which lets you configure the CORS requests for the element's fetched data.
- [Add a hitmap on top of an image](/es/docs/Web/HTML/How_to/Add_a_hit_map_on_top_of_an_image)
  - : Image maps allow hyperlinks to be associated with different parts of an image. This article shows how to create and implement them.
- [Author fast-loading HTML pages](/es/docs/Web/HTML/How_to/Author_fast-loading_HTML_pages)
  - : These tips are based on common knowledge and experimentation. An optimized web page not only provides for a more responsive site for your visitors but also reduces the load on your web servers and internet connection.
- [Add JavaScript to your web page](/es/docs/Web/HTML/How_to/Add_JavaScript_to_your_web_page)
  - : This article explains how to add JavaScript code to an HTML file.

## Referencia

HTML consists of **elements**, each of which may be modified by some number of **attributes**. HTML documents are connected to each other with **links**. Browse the complete [HTML reference](/es/docs/Web/HTML/Reference) documentation.

- [HTML elements](/es/docs/Web/HTML/Reference/Elements)
  - : Reference for all HTML {{glossary("Element", "elements")}}.
- [HTML attributes](/es/docs/Web/HTML/Reference/Attributes)
  - : Reference for all HTML attributes. Attributes are additional values that configure elements or adjust their behavior in various ways.
- [Global attributes](/es/docs/Web/HTML/Reference/Global_attributes)
  - : Reference for global attributes that may be specified on all HTML elements, _even those not specified in the standard_. This means that any non-standard elements must still permit these attributes, even though those elements make the document HTML5-noncompliant.

### Atributos por elemento

- [Input types](/es/docs/Web/HTML/Reference/Elements/input)
  - : Used to create interactive controls for web-based forms.
- [Script types](/es/docs/Web/HTML/Reference/Elements/script/type)
  - : Indicates the type of script represented by the element.
- [meta name](/es/docs/Web/HTML/Reference/Elements/meta/name)
  - : Provides metadata in name-value pairs for the whole page.

### Valores de Atributos

- [rel keywords](/es/docs/Web/HTML/Reference/Attributes/rel)
  - : Defines the relationship between a linked resource and the current document.

## Temas relacionados

- [Applying color to HTML elements using CSS](/es/docs/Web/CSS/Guides/Colors/Applying_color)
  - : This article covers most of the ways you use CSS to add color to HTML content, listing what parts of HTML documents can be colored and what CSS properties to use when doing so.
