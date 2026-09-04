---
title: Plantilla de página de glosario
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE]
> _Elimina este bloque de notas completo antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter al principio de la página define los «metadatos de la página».
> Los valores deben actualizarse apropiadamente para el término en cuestión.
>
> ```md
> ---
> title: Término a definir
> slug: Glossary/Término_a_definir
> page-type: glossary-definition O glossary-disambiguation
> sidebar: glossarysidebar
> ---
> ```
>
> - **title**
>   - : Encabezado del título que se muestra en la parte superior de la página.
>     Formato: `Término a definir`.
> - **slug**
>   - : El final de la ruta URL después de `https://developer.mozilla.org/es/docs/`.
>     Se formatea en snake case del título: `Glossary/Término_a_definir`.
> - **page-type**
>   - : `glossary-definition` para una página de definición o `glossary-disambiguation` para una de desambiguación.
> - **sidebar**
>   - : Siempre es `glossarysidebar`.
>     Consulta [Estructuras de página: barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para más detalles.
>
> ---
>
> _Recuerda eliminar este bloque de notas completo antes de publicar._

El **TérminoADefinir** es _(incluye una definición concisa del término)_.

Incluye más información de apoyo según sea necesario, pero no demasiada; no más de 2 párrafos cortos adicionales. Cualquier información detallada adicional, ejemplos de código, tutoriales, etc., debe ir en artículos separados.

## Véase también

Incluye una lista de enlaces que apunten a información técnica y general más detallada. Por ejemplo, puedes añadir enlaces a artículos de Wikipedia, otras entradas de enciclopedias, tutoriales técnicos y especificaciones. Para obtener pautas sobre cómo añadir esta lista de enlaces, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#seccion_vease_tambien) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
