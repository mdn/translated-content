---
title: Referencia de Elementos HTML
slug: Web/HTML/Element
original_slug: Web/HTML/Elemento
---

{{HTMLSidebar("Elements")}}

Esta página lista todos los {{Glossary("Element","elementos")}} {{Glossary("HTML")}}. Están agrupados por funciones para ayudarte a encontrar lo que tienes en mente con facilidad. Aunque esta guía está escrita para aquellos que son nuevos escribiendo código, se pretende que sea una referencia útil para cualquiera.

> **Nota:** Para más información básica acerca de los elementos y atributos HTML, vea [la sección sobre elementos en el artículo 'Introducción a HTML'](/es/docs/Web/Guide/HTML/Introduction#Elements_%E2%80%94_the_basic_building_blocks).

## Raíz principal

{{HTMLRefTable("HTML Root Element")}}

## Metadatos del documento

Los metadatos contienen información sobre la página. Esto incluye información sobre estilos, _scripts_ y datos que ayudan al _software_ ({{Glossary("search engine", "search engines")}}, {{Glossary("Browser","browsers")}}, etc.) a usar y generar la página. Los metadatos de estilos y _scripts_ pueden estar definidos en la página o estar enlazados a otro fichero que contiene la información.

{{HTMLRefTable("HTML Document Metadata")}}

## Seccionamiento básico

{{HTMLRefTable("Sectioning Root Element")}}

## Seccionamiento del contenido

Los elementos de seccionamiento del contenido te permiten organizar los contenidos del documento en partes lógicas. Usa los elementos de seccionado para crear una descripción amplia de los contenidos de tu página, incluyendo el encabezado y pie de página y elementos para identificar secciones.

{{HTMLRefTable("HTML Sections")}}

## Contenido del texto

Utiliza los elementos HTML de contenido del texto para organizar bloques o secciones de contenido colocados entre los tags de apertura{{HTMLElement("body")}} y cierre. Es importante para la {{Glossary("accessibility")}} y el {{Glossary("SEO")}}, que estos elementos se identifiquen con el objetivo o la estructura de ese contenido.

{{HTMLRefTable("HTML Grouping Content")}}

## Semántica del texto en línea

Utilice la semántica del texto en línea HTML para definir el significado, estructura, o el estilo de una palabra, una línea o cualquier pieza arbitraria de texto.

{{HTMLRefTable("HTML Text-Level Semantics")}}

## Imagen y multimedia

HTML soporta varios recursos multimedia como imágenes, audio, y video.

{{HTMLRefTable("multimedia")}}

## Contenido incrustado

Además de los contenidos multimedia habituales, HTML puede incluir otra variedad de contenidos, aunque no siempre es fácil de interactuar con ellos.

{{HTMLRefTable({"include":["HTML embedded content"], "exclude":["multimedia"]})}}

## Scripting

Con el fin de crear contenido dinámico y aplicaciones Web, HTML soporta el uso de lenguajes de scripting, el más prominente es JavaScript. Ciertos elementos soportan esta capacidad.

{{HTMLRefTable("HTML Scripting")}}

## Ediciones demarcadas

Estos elementos permiten proporcionar indicios de que determinadas partes del texto han sido alteradas.

{{HTMLRefTable("HTML Edits")}}

## Tablas

Estos elementos son usados para crear y manejar datos tabulados.

{{HTMLRefTable("HTML tabular data")}}

## Formularios

HTML provee un número de elementos que pueden usarse conjuntamente para crear formularios los cuales el usuario puede completar y enviar al sitio Web o a una aplicación. Hay una gran cantidad de información acerca de ésto disponible en la [HTML forms guide](/es/docs/Web/Guide/HTML/Forms).

{{HTMLRefTable({"include": ["HTML forms"], "exclude":["Deprecated"]})}}

## Elementos Interactivos

HTML ofrece una selección de elementos que pueden ayudar a crear objetos de interfaz de usuario interactivos.

{{HTMLRefTable("HTML interactive elements")}}

## Componentes Web

Los Componentes Web son una tecnología relacionada con HTML que hacen que sea posible, en esencia, crear y personalizar elementos como si fueran HTML normal. Además, pueden crear versiones personalizadas de los elementos HTML estándar.

{{HTMLRefTable({"include":["Web Components"],"elements":["shadow"]})}}

## Elementos obsoletos y en desuso

> **Advertencia:** Estos son elementos HTML viejos los cuales están obsoletos y no deben usarse. **Nunca debería usarlos en un nuevo proyecto y debería reemplazarlos en proyectos viejos tan pronto como sea posible.** Se listan aquí solo con propósitos informativos.

{{HTMLRefTable({"include":["Deprecated","Obsolete"]})}}
