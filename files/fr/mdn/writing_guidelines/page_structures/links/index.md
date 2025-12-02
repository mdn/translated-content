---
title: Macros de liens
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 3e543cdfe8dddfb4774a64bf3decdcbab42a4111
---

MDN propose de nombreuses macros pour créer des liens toujours à jour vers le contenu MDN. Ce guide présente les macros de renvoi croisé MDN que vous pouvez utiliser pour inclure un lien unique vers une autre page ou une liste de liens vers toutes les sous-pages d'un document.

## Listes de liens

MDN propose des macros qui créent une liste de liens&nbsp;:

- [`\{{SubpagesWithSummaries}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Insère une liste de définitions ({{HTMLElement("dl")}}) des sous-pages de la page courante, avec le titre de chaque page comme terme {{HTMLElement("dt")}} et son premier paragraphe comme terme {{HTMLElement("dd")}}.

- [`\{{ListSubpagesForSidebar()}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Sans paramètre, insère une liste ordonnée de liens vers les sous-pages de la page courante. Le premier paramètre est le slug de la page parente de l'arborescence. Le texte du lien est affiché comme code. Un second paramètre à `true` ou `1` convertit les liens en texte brut. Un troisième paramètre à `true` ou `1` ajoute un lien vers la page parente en haut de la liste avec «&nbsp;Aperçu&nbsp;» comme texte du lien.

- [`\{{QuickLinksWithSubpages()}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Crée un ensemble de liens rapides utilisant les enfants de la page courante (ou de la page spécifiée) comme destinations. Cela crée des listes hiérarchiques jusqu'à deux niveaux. Les titres des pages sont utilisés comme texte du lien et leurs résumés comme info-bulle.

### Exemple de liste de liens

Pour inclure une liste ordonnée de liens qui inclut cette page et ses pages sœurs, écrivez&nbsp;:

```md
\{{ListSubpagesForSidebar("/fr/docs/MDN/Writing_guidelines/Page_structures/Macros", 1)}}
```

## Liens de renvoi croisé

Certaines macros créent un lien unique pour référencer une fonctionnalité CSS, JavaScript, SVG ou HTML, y compris des attributs, éléments, propriétés, types de données et API. Les macros qui créent des liens uniques nécessitent au moins un paramètre&nbsp;: la fonctionnalité référencée.

Ces macros sont&nbsp;:

- [`\{{CSSxRef("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/cssxref.rs)
- [`\{{DOMxRef("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/domxref.rs)
- [`\{{HTMLElement("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/htmlxref.rs)
- [`\{{Glossary("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/glossary.rs)
- [`\{{JSxRef("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/jsxref.rs)
- [`\{{SVGAttr("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgattr.rs)
- [`\{{SVGElement("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/svgxref.rs)
- [`\{{HTTPMethod("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)
- [`\{{HTTPStatus("")}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/links/http.rs)

Le premier paramètre de chaque macro est la dernière section du slug du document référencé. Par exemple, pour les éléments HTML, incluez `\{{HTMLElement("")}}` avec la partie du slug qui suit `Web/HTML/Reference/Elements/` comme premier paramètre. Avec `\{{CSSxRef("")}}`, ajoutez la partie du slug qui suit `Web/CSS/`. Le lien pointera vers cette page.

Par défaut, le texte affiché est la ressource liée telle qu'écrite dans le premier paramètre, entre chevrons pour `\{{HTMLElement()}}`. Ce n'est pas toujours ce que vous souhaitez. Par exemple, le slug pour le type d'entrée range est `Web/HTML/Reference/Elements/input/range`. Inclure `\{{HTMLElement("input/range")}}` produit «&nbsp;{{HTMLElement("input/range")}}&nbsp;». Ce n'est pas ce que vous voulez. Toutes les macros acceptent des paramètres supplémentaires, vous pouvez donc fournir le texte à afficher.

Le second paramètre, s'il est présent, fournit le texte du lien. Dans le cas de l'entrée range, on écrira `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` qui produit «&nbsp;{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}&nbsp;». Cette macro retire le {{HTMLElement("code")}} et les chevrons si le second paramètre contient un espace, donc on ajoute les balises et chevrons.

Chaque macro est différente&nbsp;!

Pour éviter le rendu HTML ou le style code CSS, certaines macros de renvoi croisé acceptent un paramètre `"nocode"` pour désactiver ce style.

Par exemple, `\{{CSSxRef("background-color")}}` crée le lien code «&nbsp;{{CSSxRef("background-color")}}&nbsp;» et `\{{DOMxRef("CSS.supports_static", "voir la prise en charge", "", "nocode")}}` crée le lien texte «&nbsp;{{DOMxRef("CSS.supports_static", "voir la prise en charge", "", "nocode")}}&nbsp;».

Consultez le code source pour comprendre le fonctionnement de la macro utilisée et l'ordre des paramètres&nbsp;: même si la documentation est généralement complète, il existe des exceptions comme «&nbsp;ne pas afficher en code si le second paramètre contient un espace&nbsp;» pour `\{{HTMLElement("")}}` qui n'est documentée que dans le code.

Pour connaître les paramètres de chaque macro et leur ordre, le fichier source de la macro (lien ci-dessus) inclut la documentation. Il existe une [liste des macros courantes](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), qui produisent toutes des liens dans le contenu principal de la page.

## Voir aussi

- [Utiliser les macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros courantes](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), y compris les macros BCD (`\{{Compat}}`) et les macros de spécification (`\{{Specifications}}`).
- [Guide des bannières et avis](/fr/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) incluant les macros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` et `\{{SecureContext_Header}}`.
