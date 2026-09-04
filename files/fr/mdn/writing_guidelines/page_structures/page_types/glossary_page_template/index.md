---
title: Modèle de page de glossaire
slug: MDN/Writing_guidelines/Page_structures/Page_types/Glossary_page_template
l10n:
  sourceCommit: a84b606ffd77c40a7306be6c932a74ab9ce6ab96
---

> [!NOTE]
> _Supprimez cette note explicative avant de publier._
>
> ---
>
> **Page de garde&nbsp;:**
>
> Les métadonnées en haut de la page sont utilisées pour définir les «&nbsp;métadonnées de la page&nbsp;».
> Les valeurs doivent être mises à jour de manière appropriée pour l'interface particulière.
>
> ```md
> ---
> title: Terme en cours de définition
> slug: Glossary/Term_being_defined
> page-type: glossary-definition OU glossary-disambiguation
> sidebar: glossarysidebar
> ---
> ```
>
> - **title**
>   - : Titre affiché en haut de la page.
>     Format&nbsp;: `Terme en cours de définition`.
> - **slug**
>   - : La fin du chemin URL après `https://developer.mozilla.org/en-US/docs/`).
>     C'est formaté en casse serpent (<i lang="en">snake case</i> en anglais) du titre&nbsp;: `Glossary/Term_being_defined`.
> - **page-type** (pages anglaises uniquement)
>   - : `glossary-definition` pour une page de définition ou `glossary-disambiguation` pour une page de désambigüisation.
> - **sidebar** (pages anglaises uniquement)
>   - : C'est toujours `glossarysidebar`.
>     Voir [Structures de page&nbsp;: Barres latérales](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) pour plus de détails.
>
> ---
>
> _N'oubliez pas de supprimer cette note explicative avant de publier._

Le **TermeEnCoursDeDéfinition** est _(inclure une définition concise du terme)_.

Incluez des informations supplémentaires si nécessaire, mais pas trop — pas plus de 2 petits paragraphes supplémentaires. Toute information détaillée supplémentaire, exemples de code, tutoriels, etc. doivent être placés dans des articles séparés.

## Voir aussi

Incluez une liste de liens pointant vers des informations générales et techniques plus détaillées. Par exemple, vous pouvez ajouter des liens vers des articles Wikipédia, d'autres entrées d'encyclopédie, des tutoriels techniques et des spécifications. Pour des directives sur l'ajout de cette liste de liens, consultez la [section Voir aussi](/fr/docs/MDN/Writing_guidelines/Writing_style_guide#section_«_voir_aussi_») dans le _Guide de style d'écriture_.

- lien1
- lien2
