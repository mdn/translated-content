---
title: Plantilla de página de glosario
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE]
> _Elimina toda esta nota explicativa antes de publicar._
>
> ---
>
> **Front matter de la página:**
>
> El front matter en la parte superior de la página se usa para definir "metadatos de la página".
> Los valores deben actualizarse adecuadamente para el método en particular.
>
> ```md
> ---
> title: Término que se está definiendo
> slug: Glossary/Termino_que_se_esta_definiendo
> page-type: glossary-definition OR glossary-disambiguation
> sidebar: glossarysidebar
> ---
> ```
>
> - **title**
>   - : Título que se muestra en la parte superior de la página.
>     Formato como: `Término que se está definiendo`.
> - **slug**
>   - : El final de la ruta de URL después de `https://developer.mozilla.org/es/docs/`).
>     Se formateará como snake case del título: `Glossary/Termino_que_se_esta_definiendo`.
> - **page-type**
>   - : `glossary-definition` para una página de definición o `glossary-disambiguation` para una página de desambiguación.
> - **sidebar**
>   - : Siempre es `glossarysidebar`.
>     Consulta [Estructuras de página: Barras laterales](/es/docs/MDN/Writing_guidelines/Page_structures/Sidebars) para obtener más detalles.
>
> ---
>
> _Recuerda eliminar toda esta nota explicativa antes de publicar._

El **TérminoQueSeEstáDefiniendo** es _(incluye una definición concisa del término)_.

Incluye más información de respaldo según sea necesario, pero no mucha — no más de 2 párrafos pequeños. Cualquier información más detallada, ejemplos de código, tutoriales, etc. debe ir en artículos separados.

## Véase también

Incluye una lista de enlaces que apunten a información general y técnica más detallada. Por ejemplo, puedes agregar enlaces a artículos de Wikipedia, otras entradas de enciclopedia, tutoriales técnicos y especificaciones. Para obtener pautas sobre cómo agregar esta lista de enlaces, consulta la [sección Véase también](/es/docs/MDN/Writing_guidelines/Writing_style_guide#see_also_section) en la _Guía de estilo de escritura_.

- enlace1
- enlace2
