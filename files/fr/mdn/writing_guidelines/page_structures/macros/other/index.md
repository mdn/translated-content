---
title: Autres macros
slug: MDN/Writing_guidelines/Page_structures/Macros/Other
l10n:
  sourceCommit: 269fa421f0a79b18f6000a26baebe30c74571b1f
---

Contrairement aux macros listées dans [Macros couramment utilisées](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), les macros documentées dans cet article sont rarement utilisées, réservées à des contextes spécifiques, ou dépréciées.

## Contextes spéciaux

Cette macro n'est utilisée que dans des contextes particuliers, comme une référence d'API spécifique.

- [`RFC`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/rfc.rs) crée un lien vers le RFC spécifié, à partir de son numéro. La syntaxe est `\{{RFC(numéro)}}`. Par exemple, `\{{RFC(2616)}}` donne {{ RFC(2616) }}.

### Composants de page d'accueil

Il existe plusieurs macros permettant de générer automatiquement le contenu des pages d'accueil. Les voici&nbsp;:

#### Listes de sous-pages

- [`ListSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/listsubpages.rs) génère une liste non ordonnée de liens vers tous les enfants directs de la page courante&nbsp;: utile pour générer automatiquement des tables des matières pour des ensembles de documentation.
- [`SubpagesWithSummaries`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs) construit une liste de définitions de tous les enfants directs de la page courante, avec leur titre comme {{HTMLElement("dt")}} et leur résumé SEO comme {{HTMLElement("dd")}}. Cela permet de générer facilement des pages d'accueil attractives.
- [`APIListAlpha`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/api_list_alpha.rs) construit une liste des sous-pages de la page courante, formatée comme une liste de termes d'API, triée par première lettre. Il y a trois paramètres. Le premier est 0 pour inclure toutes les sous-pages de premier niveau, ou 1 pour exclure celles contenant un «&nbsp;.&nbsp;» dans leur nom. Les deuxième et troisième paramètres permettent d'ajouter du texte à afficher dans chaque lien (par exemple «&nbsp;<&nbsp;» et «&nbsp;>&nbsp;» pour les éléments, ou «&nbsp;()&nbsp;» pour les méthodes).

### Listes de liens

Une macro est spécialement conçue pour créer des [listes de liens](/fr/docs/MDN/Writing_guidelines/Page_structures/Sidebars) dans le contenu&nbsp;:

- [`QuickLinksWithSubpages`](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs) crée une liste de liens composée des pages situées sous la page courante (ou une page spécifiée). Jusqu'à deux niveaux de profondeur sont générés.
