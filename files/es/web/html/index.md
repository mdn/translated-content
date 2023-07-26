---
title: "HTML: Lenguaje de etiquetas de hipertexto"
slug: Web/HTML
---

{{HTMLSidebar}}

**HTML** (Lenguaje de Marcas de Hipertexto, del inglés _HyperText Markup Language_) es el componente más básico de la Web. Define el significado y la estructura del contenido web. Además de HTML, generalmente se utilizan otras tecnologías para describir la apariencia/presentación de una página web ([CSS](/es/docs/Web/CSS)) o la funcionalidad/comportamiento ([JavaScript](/es/docs/Web/JavaScript)).

"Hipertexto" hace referencia a los enlaces que conectan páginas web entre sí, ya sea dentro de un único sitio web o entre sitios web. Los enlaces son un aspecto fundamental de la Web. Al subir contenido a Internet y vincularlo a las páginas creadas por otras personas, te conviertes en un participante activo en la «_World Wide Web_» (Red Informática Mundial).

HTML utiliza "marcas" para etiquetar texto, imágenes y otro contenido para mostrarlo en un navegador Web. Las marcas HTML incluyen "elementos" especiales como {{HTMLElement("head")}}, {{HTMLElement("title")}}, {{HTMLElement("body")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("p")}}, {{HTMLElement("div")}}, {{HTMLElement("span")}}, {{HTMLElement("img")}}, {{HTMLElement("aside")}}, {{HTMLElement("audio")}}, {{HTMLElement("canvas")}}, {{HTMLElement("datalist")}}, {{HTMLElement("details")}}, {{HTMLElement("embed")}}, {{HTMLElement("nav")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("video")}}, {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("li")}} y muchos otros.

Un elemento HTML se distingue de otro texto en un documento mediante "etiquetas", que consisten en el nombre del elemento rodeado por "`<`" y "`>`". El nombre de un elemento dentro de una etiqueta no distingue entre mayúsculas y minúsculas. Es decir, se puede escribir en mayúsculas, minúsculas o una mezcla. Por ejemplo, la etiqueta `<title>` se puede escribir como `<Title>`, `<TITLE>` o de cualquier otra forma.

Los siguientes artículos pueden ayudarte a obtener más información sobre HTML.

## Recursos clave

- Introducción a HTML
  - : Si eres nuevo en el desarrollo Web, asegúrate de leer el artículo [Conceptos básicos de HTML](/es/docs/Learn/Getting_started_with_the_web/HTML_basics) para aprender qué es HTML y cómo usarlo.
- Tutoriales HTML
  - : Para ver artículos sobre cómo usar HTML, así como tutoriales y ejemplos completos, consulte el [Área de aprendizaje de HTML](/es/docs/Learn/HTML).
- Referencia HTML
  - : En nuestra extensa sección [referencia HTML](/es/docs/Web/HTML/Referencia) encontrarás los detalles sobre cada elemento y atributo en HTML.

> **Observación:**
>
> ### ¿Quieres transformarte en un desarrollador de la interfaz de usuario web?
>
> Hemos elaborado un curso que incluye toda la información esencial que necesitas para trabajar hacia tu objetivo.
>
> [Empieza aquí](/docs/Learn/Front-end_web_developer)

## Tutoriales para principiantes

El [Área de aprendizaje de HTML](/es/docs/Learn/HTML) incluye varios módulos que enseñan HTML desde cero, sin necesidad de conocimientos previos.

- [Introducción a HTML](/es/docs/Learn/HTML/Introduction_to_HTML)
  - : Este módulo prepara el escenario para que te acostumbres a conceptos y sintaxis importantes, tal como la aplicación de HTML al texto, cómo crear hipervínculos y cómo utilizar HTML para estructurar una página web.
- [Multimedia e inserción](/es/docs/Learn/HTML/Multimedia_and_embedding)
  - : Este módulo explora cómo usar HTML para incluir multimedia en tus páginas web, incluidas las diferentes formas en que se pueden incluir imágenes y cómo insertar video, audio e incluso otras páginas web completas.
- [tablas HTML](/es/docs/Learn/HTML/Tables)
  - : Representar datos tabulares en una página web de una manera comprensible y accesible puede ser un desafío. Este módulo cubre el marcado básico de tablas, junto con características más complejas como la implementación de subtítulos y resúmenes.
- [Formularios HTML](/es/docs/Learn/HTML/Forms)
  - : Los formularios son una parte muy importante de la Web — proporcionan gran parte de la funcionalidad que necesitas para interactuar con sitios web, p. ej. registrarte e iniciar sesión, enviar comentarios, comprar productos y más. Este módulo te ayuda a comenzar a crear las partes de formularios del lado del cliente/Interfaz de usuario.
- [Utilizar HTML para resolver problemas comunes](/es/docs/Learn/HTML/Howto)
  - : Proporciona enlaces a secciones de contenido que explican cómo usar HTML para resolver muchos problemas comunes al crear una página web: tratar con títulos, agregar imágenes o videos, enfatizar el contenido, crear un formulario básico, etc.

## Temas avanzados

- [Imagen compatible con CORS](/es/docs/Web/HTML/CORS_enabled_image)
  - : El atributo [`crossorigin`](/es/docs/Web/HTML/Element/img#crossorigin), en combinación con un encabezado {{Glossary("CORS")}} apropiado, permite imágenes definidas por el elemento {{HTMLElement("img")}} que se cargarán desde orígenes externos y se utilizarán en un elemento {{HTMLElement("canvas")}} como si se estuvieran cargando desde el origen actual.
- [Atributos de configuración de CORS](/es/docs/Web/HTML/CORS_settings_attributes)
  - : Algunos elementos HTML que brindan soporte para [CORS](/es/docs/Web/HTTP/CORS), como {{HTMLElement("img")}} o {{HTMLElement("video")}}, tienen un atributo `crossorigin` (propiedad `crossOrigin`), que te permite configurar las solicitudes CORS para los datos extraídos del elemento.
- [Precarga de contenido con rel='preload'](/es/docs/Web/HTML/Preloading_content)
  - : El valor de `preload` del atributo {{HTMLElement("link")}} del elemento [`rel`](/es/docs/Web/HTML/Element/link#rel) te permite escribir solicitudes de recuperación declarativas en tu HTML {{HTMLElement("head")}}, que especifican los recursos que tus páginas necesitarán muy pronto después de la carga, que por lo tanto deseas comenzar a precargar al principio del ciclo de vida de la carga de una página, antes de la representación principal del navegador la maquinaria entra en acción. Esto asegura que estén disponibles antes y es menos probable que bloqueen el primer procesamiento de la página, lo que lleva a mejoras de rendimiento. Este artículo proporciona una guía básica sobre cómo funciona `preload`.

## Referencias

- [Referencia HTML](/es/docs/Web/HTML/Reference)
  - : HTML consta de **elementos**, cada uno de los cuales se puede modificar por medio de algunos **atributos**. Los documentos HTML están conectados entre sí mediante [enlaces](/es/docs/Web/HTML/Link_types).
- [Referencia del elemento HTML](/es/docs/Web/HTML/Element)
  - : Examina una lista de todos los {{Glossary("Elemento", "elementos")}} {{Glossary("HTML")}}.
- [Referencia de atributos HTML](/es/docs/Web/HTML/Attributes)
  - : Los elementos en HTML tienen **atributos**. Se trata de valores adicionales que configuran los elementos o ajustan su comportamiento de diversas formas.
- [Atributos globales](/es/docs/Web/HTML/Global_attributes)
  - : Los atributos globales se pueden especificar en todos los [elementos HTML](/es/docs/Web/HTML/Element), _incluso aquellos no especificados en el estándar_. Esto significa que cualquier elemento no estándar debe permitir esos atributos, aunque esos elementos hagan que el documento no sea compatible con HTML5.
- [Elementos en línea](/es/docs/Web/HTML/Inline_elements) y [Elementos a nivel de bloque](/es/docs/Web/HTML/Block-level_elements)
  - : Los elementos HTML suelen ser elementos "en línea" o "a nivel de bloque". Un elemento en línea ocupa solo el espacio delimitado por las etiquetas que lo definen. Un elemento a nivel de bloque ocupa todo el espacio de su elemento padre (contenedor), creando así un "bloque".
- [Tipos de enlaces](/es/docs/Web/HTML/Link_types)
  - : En HTML, se pueden usar varios tipos de enlaces para establecer y definir la relación entre dos documentos. Los elementos de enlace en los que se pueden configurar tipos incluyen {{HTMLElement("a")}}, {{HTMLElement("area")}} y {{HTMLElement("link")}}.
- [Guía de tipos y formatos de medios en la web](/es/docs/Web/Media/Formats)
  - : Los elementos {{HTMLElement("audio")}} y {{HTMLElement("video")}} te permiten reproducir audio y video de forma nativa dentro de tu contenido sin la necesidad de soporte de software externo.
- [Categorías de contenido HTML](/es/docs/Web/Guide/HTML/Content_categories)
  - : HTML se compone de varios tipos de contenido, cada uno de los cuales se puede usar en ciertos contextos y no está permitido en otros. De manera similar, cada uno tiene un conjunto de otras categorías de contenido que pueden recibir y elementos que pueden o no se pueden usar en ellos. Esta es una guía para estas categorías.
- [Modo Quirks y modo estándar](/es/docs/Web/HTML/Quirks_Mode_and_Standards_Mode)
  - : Información histórica sobre el modo peculiar («_Quirks_» en inglés) y el modo estándar.

## Temas relacionados

- [Aplicando color a elementos HTML mediante CSS](/es/docs/Web/HTML/Applying_color)
  - : Este artículo cubre la mayoría de las formas en que usas CSS para agregar color al contenido HTML, enumerando qué partes de los documentos HTML se pueden colorear y qué propiedades CSS usar al hacerlo. Incluye ejemplos, enlaces a herramientas de creación de paletas de colores y más.
