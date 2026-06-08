---
title: Macros de liens
slug: MDN/Writing_guidelines/Page_structures/Links
l10n:
  sourceCommit: 94e900db86109d76e8a1e120e3b135db0d543c87
---

MDN propose de nombreuses macros pour créer des liens toujours à jour vers le contenu MDN. Ce guide présente les macros de renvoi croisé MDN que vous pouvez utiliser pour inclure un lien unique vers une autre page ou une liste de liens vers toutes les sous-pages d'un document.

## Listes de liens

MDN propose des macros qui créent une liste de liens&nbsp;:

- [`\{{SubpagesWithSummaries}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/subpages_with_summaries.rs)
  - : Insère une liste de définitions ({{HTMLElement("dl")}}) des sous-pages de la page courante, avec le titre de chaque page comme terme {{HTMLElement("dt")}} et son premier paragraphe comme terme {{HTMLElement("dd")}}.

- [`\{{ListSubpagesForSidebar()}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/list_subpages_for_sidebar.rs)
  - : Sans paramètre, insère une liste ordonnée de liens vers les sous-pages de la page courante. Le premier paramètre est le slug de la page parente de l'arborescence. Le texte du lien est affiché comme code. Un second paramètre à `true` ou `1` convertit les liens en texte brut. Un troisième paramètre à `true` ou `1` ajoute un lien vers la page parente en haut de la liste avec «&nbsp;Aperçu&nbsp;» comme texte du lien.

- [`\{{QuickLinksWithSubpages()}}` <sup>(angl.)</sup>](https://github.com/mdn/rari/blob/main/crates/rari-doc/src/templ/templs/quick_links_with_subpages.rs)
  - : Crée un ensemble de liens rapides utilisant les enfants de la page courante (ou de la page définie) comme destinations. Cela crée des listes hiérarchiques jusqu'à deux niveaux. Les titres des pages sont utilisés comme texte du lien et leurs résumés comme info-bulle.

Par exemple, pour inclure une liste ordonnée de liens qui inclut cette page et ses pages sœurs, écrivez&nbsp;:

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

### Utilisation simple

Pour le premier paramètre requis, vous dérivez le nom de la fonctionnalité à partir de la dernière section du slug du document vers lequel vous souhaitez créer un lien.
Par exemple, pour créer un lien vers la page de l'élément `<select>` avec le slug `Web/HTML/Reference/Elements/select`, vous écrivez la macro comme `\{{HTMLElement("select")}}`.
Cela produit le lien «&nbsp;{{HTMLElement("select")}}&nbsp;», qui est à la fois formaté en code et inclut les chevrons.
C'est parce que les macros ajoutent un formatage spécifique à la fonctionnalité au texte du lien.
Ainsi, vous n'avez jamais à vous soucier de quoi que ce soit d'autre que le nom de la fonctionnalité elle-même lors de l'utilisation d'une macro.
C'est pourquoi l'utilisation des macros pour ajouter des liens est rapide et facile.

### Personnaliser le texte affiché

Par défaut, le texte affiché du lien est le premier paramètre passé à la macro. Pour afficher un texte différent, utilisez le deuxième paramètre. Par exemple, `\{{JSxRef("Array")}}` produit {{JSxRef("Array")}}. Pour afficher une variation de ce texte, utilisez `\{{JSxRef("Array", "Tableaux JavaScript")}}`, ce qui produit {{JSxRef("Array", "Tableaux JavaScript")}}. Vous pouvez remarquer que le lien résultant est formaté en code en raison du comportement par défaut de la macro. Consultez la section sur [Désactiver le formatage du code](#disabling_code_formatting) pour voir comment ignorer le style de code.

### Lien vers des pages imbriquées

Certaines fonctionnalités de référence ont des pages imbriquées pour des fonctionnalités connexes. Par exemple, l'élément HTML `<input>` a plusieurs pages imbriquées pour différents types d'entrée, comme `Web/HTML/Reference/Elements/input/range` pour le type d'entrée range.

En passant les informations de chemin à la macro dans le premier paramètre comme dans `\{{HTMLElement("input/range")}}`, cela produit le lien «&nbsp;{{HTMLElement("input/range")}}&nbsp;», ce qui n'est pas ce que vous voulez. Utilisez le deuxième paramètre pour afficher un texte de lien différent. Ainsi, pour un lien vers le type d'entrée range, nous écririons la macro comme `\{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}` pour produire «&nbsp;{{HTMLElement("input/range", "<code>&lt;input type=&quot;range&quot;&gt;</code>")}}&nbsp;». (Notez que si le deuxième paramètre inclut un espace, comme celui entre `input` et `type` ici, cette macro supprime le formatage du code&nbsp;; nous avons donc ajouté les balises {{HTMLElement("code")}} explicitement.)

### Utiliser `CSSxRef` avec la référence CSS

Chaque macro est légèrement différente.

La macro `CSSxRef` détermine automatiquement le chemin correct à partir du nom de la fonctionnalité que vous fournissez en tant que premier paramètre à la macro. La macro détecte si une fonctionnalité est une propriété, un sélecteur, une règle @, une fonction ou un type de données, et crée un lien vers le document approprié sous `Web/CSS/Reference/`.

Par exemple&nbsp;:

- `\{{CSSxRef("cursor")}}` crée un lien vers la page de la propriété à `Web/CSS/Reference/Properties/cursor`.
- `\{{CSSxRef(":hover")}}` crée un lien vers la page de la pseudo-classe à `Web/CSS/Reference/Selectors/:hover`.
- `\{{CSSxRef("@media")}}` crée un lien vers la page de la règle @ à `Web/CSS/Reference/At-rules/@media`.
- `\{{CSSxRef("pow")}}` crée un lien vers la page de la fonction à `Web/CSS/Reference/Values/pow`.
- `\{{CSSxRef("<color>")}}` crée un lien vers la page du type de données à `Web/CSS/Reference/Values/color_value`.

Tout comme la macro `HTMLElement`, la macro `CSSxRef` ajoute le style approprié au texte du lien en fonction du type de fonctionnalité. Ainsi, `\{{CSSxRef("acos")}}` ajoute des crochets angulaires au texte du lien résultant comme dans {{CSSxRef("acos")}}.

Quelques autres comportements de la macro `CSSxRef` méritent d'être notés&nbsp;:

- Les pages imbriquées sont gérées automatiquement. Par exemple&nbsp;:
  - `\{{CSSxRef("basic-shape/circle")}}` crée un lien vers le document à `Web/CSS/Reference/Values/basic-shape/circle` avec le lien {{CSSxRef("basic-shape/circle")}}.
  - `\{{CSSxRef("animation-timeline/scroll")}}` crée un lien vers le document à `Web/CSS/Reference/Properties/animation-timeline/scroll` avec le lien {{CSSxRef("animation-timeline/scroll")}}.
- Certaines fonctionnalités CSS ont le même nom. En plus de leur emplacement dans le répertoire, leurs chemins contiennent des suffixes pour refléter leur type. Par exemple, la propriété `position` a le chemin `Web/CSS/Reference/Properties/position`, tandis que le type de données `<position>` a le chemin `Web/CSS/Reference/Values/position_value`.

  La macro `CSSxRef` gère automatiquement ces fonctionnalités ayant le même nom. Ainsi, `\{{CSSxRef("position")}}` crée un lien vers la page de la propriété avec le lien {{CSSxRef("position")}}, et `\{{CSSxRef("<position>")}}` crée un lien vers la page du type de données avec le lien {{CSSxRef("&lt;position&gt;")}}.

  D'autres fonctionnalités ayant des noms partagés incluent&nbsp;:
  - La propriété `color` (`Web/CSS/Reference/Properties/color`) et le type de données `<color>` (`Web/CSS/Reference/Values/color_value`)

    **Macro**&nbsp;: `\{{CSSxRef("color")}}` et `\{{CSSxRef("<color>")}}`

  - La fonction `fit-content()` (`Web/CSS/Reference/Values/fit-content_function`) et le mot-clé `fit-content` (`Web/CSS/Reference/Values/fit-content`)

    **Macro**&nbsp;: `\{{CSSxRef("fit-content_function", "fit-content()")}}` et `\{{CSSxRef("fit-content")}}` (c'est actuellement une exception où vous devez fournir le deuxième paramètre pour obtenir le texte de lien correct pour la fonction.)

  - La propriété `flex` (`Web/CSS/Reference/Properties/flex`) et le type de données `<flex>` (`Web/CSS/Reference/Values/flex_value`)

    **Macro**&nbsp;: `\{{CSSxRef("flex")}}` et `\{{CSSxRef("<flex>")}}`

  - La pseudo-classe `:host` (`Web/CSS/Reference/Selectors/:host`) et la fonction pseudo-classe `:host()` (`Web/CSS/Reference/Values/:host_function`)

    **Macro**&nbsp;: `\{{CSSxRef(":host")}}` et `\{{CSSxRef(":host()")}}`

  - La propriété `overflow` (`Web/CSS/Reference/Properties/overflow`) et le type de données `<overflow>` (`Web/CSS/Reference/Values/overflow_value`)

    **Macro**&nbsp;: `\{{CSSxRef("overflow")}}` et `\{{CSSxRef("<overflow>")}}`

  - La fonction `url()` (`Web/CSS/Reference/Values/url_function`) et le type de données `<url>` (`Web/CSS/Reference/Values/url_value`)

    **Macro**&nbsp;: `\{{CSSxRef("url()")}}` et `\{{CSSxRef("<url>")}}`

### Désactiver le formatage du code

Les macros de référence croisée appliquent par défaut un formatage de code au texte du lien.
Pour éviter les styles de code HTML et CSS appliqués par les macros, utilisez le paramètre `"nocode"`.

Par exemple, `\{{CSSxRef("background-color")}}` crée le lien "{{CSSxRef("background-color")}}" avec le style de code, tandis que `\{{DOMxRef("CSS.supports_static", "check support", "", "nocode")}}` crée le lien en texte brut «&nbsp;{{DOMxRef("CSS.supports_static", "check support", "", "nocode")}}&nbsp;». De même, pour créer le lien vers le tableau JavaScript sans formatage de code, nous écririons `\{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}` pour produire «&nbsp;{{JSxRef("Array", "JavaScript arrays", "", "nocode")}}&nbsp;».

## Voir aussi

- [Utiliser les macros](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros)
- [Macros courantes](/fr/docs/MDN/Writing_guidelines/Page_structures/Macros/Commonly_used_macros), y compris les macros BCD (`\{{Compat}}`) et les macros de spécification (`\{{Specifications}}`).
- [Guide des bannières et avis](/fr/docs/MDN/Writing_guidelines/Page_structures/Banners_and_notices) incluant les macros `\{{SeeCompatTable}}`, `\{{Deprecated_Header}}` et `\{{SecureContext_Header}}`.
