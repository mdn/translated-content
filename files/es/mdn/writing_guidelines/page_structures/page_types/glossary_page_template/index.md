---
title: Plantilla de página de glosario
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: 77eea2b80f7352068ed59a2c2fb03de4ed85e194
---

{{MDNSidebar}}

> **Nota:** _Eliminar toda esta nota explicativa antes de publicar_
>
> ---
>
> **Metadatos de la página (_frontmatter_):**
>
> El _frontmatter_ en la parte superior de la página se usa para definir los "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el método en particular.
>
> ```md
> ---
> title: Term_being_defined
> slug: Glossary/Term_being_defined
> page-type: glossary-definition OR glossary-disambiguation
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Formatear como: `Term being defined`. Si es posible traducir al Español.
> - **slug**
>   - : El final de la ruta URL despué de `https://developer.mozilla.org/es/docs/`.
>     Esto tendrá el formato _Snake case_ del título en Inglés: `Glossary/Term_being_defined`.
> - **page-type**
>   - : `glossary-definition` para una página de definición o `glossary-desambiguation` para una página de desambiguación (No aplica para Español).
>
> ---
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar_

El **Término en proceso de definición** es _(incluye una definición concisa del término)_.

Incluya más información de respaldo según sea necesario, pero no mucha, no más de 2 párrafos pequeños. Cualquier información más detallada, ejemplos de código, tutoriales, etc. deben ir en artículos separados.

## Véase también

Incluya una lista de enlaces que apunten a información general y técnica más detallada. Por ejemplo, puede agregar enlaces a artículos de Wikipedia, otras entradas de enciclopedia, tutoriales técnicos y especificaciones. Para obtener pautas sobre cómo agregar esta lista de enlaces, consulte la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#véase_también) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
