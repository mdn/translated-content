---
title: Catégories de contenu
slug: Web/HTML/Guides/Content_categories
l10n:
  sourceCommit: e66301dff87e1ac68bd5e6e9dace12ead3eded6f
---

La plupart des éléments [HTML](/fr/docs/Web/HTML) font partie d'une ou plusieurs **catégories de contenu** — ces catégories regroupent des éléments qui partagent des caractéristiques communes. Il s'agit d'un regroupement souple (cela ne crée pas réellement de relation entre les éléments de ces catégories), mais cela permet de définir et de décrire le comportement partagé des catégories et leurs règles associées. Il est possible que certains éléments (comme {{HTMLElement("track")}}) ne fassent partie d'_aucune_ de ces catégories.

Les catégories de contenu servent à définir le _modèle de contenu_ des éléments, c'est-à-dire ce que chaque élément peut avoir comme descendants. Par exemple, un élément `<p>` ne peut contenir que du _contenu phrasé_, tandis qu'un élément `<div>` peut contenir du _contenu de flux_.

Il existe sept principales catégories de contenu, qui peuvent être résumées par le diagramme de Venn ci-dessous&nbsp;:

![Un diagramme de Venn montrant comment les différentes catégories de contenu s'entrecroisent. Les sections suivantes expliquent ces relations en détail.](content_categories_venn.png)

> [!NOTE]
> Une discussion plus détaillée sur ces catégories de contenu et leurs fonctionnalités comparées dépasse le cadre de cet article&nbsp;; pour cela, vous pouvez lire les [sections pertinentes de la spécification HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/dom.html#kinds-of-content).

## Contenu de méta-données

Les éléments appartenant à la catégorie de _contenu de méta-données_ modifient la présentation ou le comportement du reste du document, créent des liens vers d'autres documents, ou transmettent d'autres informations _hors bande_. Tout ce qui se trouve dans {{HTMLElement("head")}}, y compris `<title>`, `<link>`, `<script>`, `<style>`, et le moins utilisé `<base>`, constitue du contenu de méta-données. Il existe un élément `<meta>` pour les méta-données qui ne peuvent pas être représentées par ces autres éléments.

Les éléments de méta-données sont&nbsp;:

- {{HTMLElement("base")}}
- {{HTMLElement("link")}}
- {{HTMLElement("meta")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("script")}}
- {{HTMLElement("style")}}
- {{HTMLElement("template")}}
- {{HTMLElement("title")}}

Quelques-uns de ces éléments appartiennent à plus d'une catégorie de contenu. Par exemple, `<script>` est membre des catégories de contenu de méta-données, de flux et de phrasé, et est un élément supportant les scripts&nbsp;; `<script>` peut être utilisé là où du contenu de méta-données, du contenu phrasé, ou des éléments supportant les scripts sont attendus.

## Contenu de flux

Le contenu de flux est une catégorie large qui englobe la plupart des éléments pouvant se trouver à l'intérieur de l'élément {{HTMLElement("body")}}, y compris les éléments d'en-tête, les éléments sectionnants, les éléments phrasés, les éléments d'intégration, les éléments interactifs et les éléments liés aux formulaires. Il inclut aussi les noeuds de texte (mais pas ceux qui ne contiennent que des caractères d'espacement).

Les éléments de flux sont&nbsp;:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("dialog")}}
- {{HTMLElement("div")}}
- {{HTMLElement("dl")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("form")}}
- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("header")}}
- {{HTMLElement("hgroup")}}
- {{HTMLElement("hr")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("menu")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("ol")}}
- {{HTMLElement("output")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("search")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("ul")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- [Éléments personnalisés autonomes](/fr/docs/Web/API/Web_components/Using_custom_elements)
- Texte brut

Quelques autres éléments appartiennent à cette catégorie, mais seulement si une condition spécifique est remplie&nbsp;:

- {{HTMLElement("area")}}, s'il est un descendant de l'élément {{HTMLElement("map")}}
- {{HTMLElement("link")}}, si l'attribut [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) est présent
- {{HTMLElement("meta")}}, si l'attribut [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) est présent

## Contenu sectionnant

Le contenu sectionnant, sous-ensemble du contenu de flux, crée une [section dans le plan du document](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) qui définit la portée des éléments {{HTMLElement("header")}} et {{HTMLElement("footer")}}.

Les éléments sectionnants sont&nbsp;:

- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("section")}}

## Contenu de titre

Le contenu de titre, sous-ensemble du contenu de flux, définit le titre d'une section. Cette définition s'applique aussi bien aux sections marquées par un élément explicite de [contenu sectionnant](#contenu_sectionnant) qu'à celles définies implicitement par le contenu de titre lui‑même.

Les éléments de titre sont&nbsp;:

- {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>-<code>&lt;h6&gt;</code>")}}
- {{HTMLElement("hgroup")}}

> [!NOTE]
> Bien que susceptible de contenir du contenu de titre, le {{HTMLElement("header")}} n'est pas lui-même un contenu de titre.

### Contenu phrasé

Le contenu phrasé, sous-ensemble du contenu de flux, désigne le texte et le balisage présents dans un document. Des séquences de contenu phrasé forment des paragraphes.

Les éléments de phrasé sont&nbsp;:

- {{HTMLElement("abbr")}}
- {{HTMLElement("audio")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("br")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("datalist")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("i")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("input")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("noscript")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("script")}}
- {{HTMLElement("select")}}
- {{HTMLElement("slot")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("template")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- {{HTMLElement("wbr")}}
- [Éléments personnalisés autonomes](/fr/docs/Web/API/Web_components/Using_custom_elements)
- Texte brut

Quelques autres éléments appartiennent à cette catégorie mais seulement selon certaines conditions&nbsp;:

- {{HTMLElement("a")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("area")}} s'il est un descendant de l'élément {{HTMLElement("map")}}
- {{HTMLElement("del")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("ins")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("link")}} si l'attribut [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) est présent
- {{HTMLElement("map")}} s'il contient seulement du contenu phrasé
- {{HTMLElement("meta")}} si l'attribut [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) est présent

## Contenu intégré

Le contenu intégré, sous-ensemble du contenu de flux, importe une autre ressource ou insère du contenu provenant d'un autre langage de balisage ou d'un autre espace de noms dans le document.

Les éléments de contenu intégré sont&nbsp;:

- {{HTMLElement("audio")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{MathMLElement("math")}}
- {{HTMLElement("object")}}
- {{HTMLElement("picture")}}
- {{SVGElement("svg")}}
- {{HTMLElement("video")}}

## Contenu interactif

Le contenu interactif, sous-ensemble du contenu de flux, regroupe des éléments conçus spécifiquement pour une interaction avec l'utilisateur·ice.

Les éléments de contenu interactif sont&nbsp;:

- {{HTMLElement("button")}}
- {{HTMLElement("details")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("label")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

Quelques éléments appartiennent à cette catégorie seulement sous certaines conditions&nbsp;:

- {{HTMLElement("a")}}, si l'attribut [`href`](/fr/docs/Web/HTML/Reference/Elements/a#href) est présent
- {{HTMLElement("audio")}}, si l'attribut [`controls`](/fr/docs/Web/HTML/Reference/Elements/audio#controls) est présent
- {{HTMLElement("img")}}, si l'attribut [`usemap`](/fr/docs/Web/HTML/Reference/Elements/img#usemap) est présent
- {{HTMLElement("input")}}, si l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) ne vaut pas `hidden`
- {{HTMLElement("object")}}, si l'attribut [`usemap`](/fr/docs/Web/HTML/Reference/Elements/object#usemap) est présent
- {{HTMLElement("video")}}, si l'attribut [`controls`](/fr/docs/Web/HTML/Reference/Elements/video#controls) est présent

## Contenu tangible

**Contenu tangible** est un contenu qui n'est ni vide ni caché&nbsp;; c'est un contenu rendu et substantiel. Le contenu tangible n'est pas utilisé pour définir des modèles de contenu mais sert à définir une règle générale&nbsp;: les éléments dont le modèle de contenu autorise du contenu de flux ou du contenu phrasé doivent comporter au moins un nœud dans leur contenu qui soit du contenu tangible et qui n'ait pas l'attribut `hidden` défini.

Les éléments palpables sont&nbsp;:

- {{HTMLElement("a")}}
- {{HTMLElement("abbr")}}
- {{HTMLElement("address")}}
- {{HTMLElement("article")}}
- {{HTMLElement("aside")}}
- {{HTMLElement("b")}}
- {{HTMLElement("bdi")}}
- {{HTMLElement("bdo")}}
- {{HTMLElement("blockquote")}}
- {{HTMLElement("button")}}
- {{HTMLElement("canvas")}}
- {{HTMLElement("cite")}}
- {{HTMLElement("code")}}
- {{HTMLElement("data")}}
- {{HTMLElement("del")}}
- {{HTMLElement("details")}}
- {{HTMLElement("dfn")}}
- {{HTMLElement("div")}}
- {{HTMLElement("em")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("footer")}}
- {{HTMLElement("figure")}}
- {{HTMLElement("form")}}
- {{HTMLElement("iframe")}}
- {{HTMLElement("img")}}
- {{HTMLElement("ins")}}
- {{HTMLElement("kbd")}}
- {{HTMLElement("label")}}
- {{HTMLElement("main")}}
- {{HTMLElement("map")}}
- {{HTMLElement("mark")}}
- {{MathMLElement("math")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("nav")}}
- {{HTMLElement("object")}}
- {{HTMLElement("p")}}
- {{HTMLElement("picture")}}
- {{HTMLElement("pre")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("q")}}
- {{HTMLElement("ruby")}}
- {{HTMLElement("s")}}
- {{HTMLElement("samp")}}
- {{HTMLElement("search")}}
- {{HTMLElement("section")}}
- {{HTMLElement("select")}}
- {{HTMLElement("small")}}
- {{HTMLElement("span")}}
- {{HTMLElement("strong")}}
- {{HTMLElement("sub")}}
- {{HTMLElement("sup")}}
- {{SVGElement("svg")}}
- {{HTMLElement("table")}}
- {{HTMLElement("textarea")}}
- {{HTMLElement("time")}}
- {{HTMLElement("u")}}
- {{HTMLElement("var")}}
- {{HTMLElement("video")}}
- [Éléments personnalisés autonomes](/fr/docs/Web/API/Web_components/Using_custom_elements)
- Texte brut qui n'est pas des [espaces blancs inter-éléments](/fr/docs/Glossary/Whitespace)

Certains éléments appartiennent à cette catégorie seulement sous certaines conditions&nbsp;:

- {{HTMLElement("audio")}}, si l'attribut [`controls`](/fr/docs/Web/HTML/Reference/Elements/audio#controls) est présent
- {{HTMLElement("dl")}}, si les enfants de l'élément incluent au moins un groupe nom-valeur
- {{HTMLElement("input")}}, si l'attribut [`type`](/fr/docs/Web/HTML/Reference/Elements/input#type) ne vaut pas `hidden`
- {{HTMLElement("ol")}}, si ses enfants incluent au moins un élément {{HTMLElement("li")}}
- {{HTMLElement("ul")}}, si ses enfants incluent au moins un élément {{HTMLElement("li")}}

## Éléments supports de script

Les **éléments supports de script** sont des éléments qui ne contribuent pas directement à la sortie rendue d'un document. Ils servent plutôt à prendre en charge les scripts, soit en contenant ou en définissant directement du code de script, soit en définissant des données qui seront utilisées par des scripts. Presque tous les éléments, y compris ceux qui n'acceptent que des éléments spécifiques (comme {{HTMLElement("ul")}}, qui accepte des éléments {{HTMLElement("li")}}), peuvent contenir des éléments supports de script.

Les éléments supports de script sont&nbsp;:

- {{HTMLElement("script")}}
- {{HTMLElement("template")}}

## Contenu associé aux formulaires

Le contenu associé aux formulaires est un sous-ensemble du contenu de flux comprenant des éléments qui ont un propriétaire de formulaire et qui peuvent être utilisés partout où du contenu de flux est attendu. Un propriétaire de formulaire est soit l'élément {{HTMLElement("form")}} englobant, soit le `<form>` dont l'`id` est indiqué dans l'attribut `form` de l'élément.

Les éléments associés aux formulaires sont&nbsp;:

- {{HTMLElement("button")}}
- {{HTMLElement("fieldset")}}
- {{HTMLElement("input")}}
- {{HTMLElement("label")}}
- {{HTMLElement("meter")}}
- {{HTMLElement("object")}}
- {{HTMLElement("output")}}
- {{HTMLElement("progress")}}
- {{HTMLElement("select")}}
- {{HTMLElement("textarea")}}

This category contains several sub-categories:

- listed (éléments listés)
  - : Les éléments qui figurent dans les collections {{DOMxRef("HTMLFormElement.elements")}} et {{DOMxRef("HTMLFieldSetElement.elements")}}. Comprend {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("object")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
- submittable (éléments participants à l'envoi du formulaire)
  - : Les éléments pouvant être utilisés pour construire l'ensemble des données du formulaire lors de son envoi. Comprend {{HTMLElement("button")}}, {{HTMLElement("input")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
- resettable (éléments de ré-initialisation)
  - : Les éléments pouvant être affectés lors de la réinitialisation d'un formulaire. Comprend {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
- autocapitalize-and-autocorrect-inheriting (éléments héritant des attributs autocapitalize et autocorrect)
  - : Les éléments qui héritent des attributs [`autocapitalize`](/fr/docs/Web/HTML/Reference/Global_attributes/autocapitalize) et [`autocorrect`](/fr/docs/Web/HTML/Reference/Global_attributes/autocorrect) de leur propriétaire de formulaire. Comprend {{HTMLElement("button")}}, {{HTMLElement("fieldset")}}, {{HTMLElement("input")}}, {{HTMLElement("output")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.
- labelable (éléments étiquetables)
  - : Les éléments pouvant être associés avec des éléments {{HTMLElement("label")}}. Ce sont&nbsp;: {{HTMLElement("button")}}, {{HTMLElement("input")}} (tous les types sauf `hidden`), {{HTMLElement("meter")}}, {{HTMLElement("output")}}, {{HTMLElement("progress")}}, {{HTMLElement("select")}} et {{HTMLElement("textarea")}}.

## Modèle de contenu transparent

En plus des catégories de contenu énumérées, le modèle de contenu d'un élément peut aussi être défini comme «&nbsp;transparent&nbsp;». Si le contenu autorisé d'un élément X est «&nbsp;transparent&nbsp;», on examine alors le parent de X. On intersecte le contenu autorisé du parent de X avec les catégories de contenu de X, et le résultat correspond à ce que «&nbsp;transparent&nbsp;» signifie dans ce contexte. Si le parent de X a lui aussi un modèle de contenu transparent, on remonte l'arbre jusqu'à trouver un modèle non transparent. Lorsqu'il n'existe pas un tel parent, «&nbsp;transparent&nbsp;» signifie «&nbsp;contenu de flux&nbsp;».

Par exemple, un élément {{HTMLElement("ruby")}} accepte du contenu phrasé. L'élément {{HTMLElement("ins")}} appartient à la catégorie du contenu phrasé lorsqu'il contient uniquement du contenu phrasé. Par conséquent, un élément {{HTMLElement("ins")}} peut être placé à l'intérieur d'un élément {{HTMLElement("ruby")}}. Le contenu autorisé de l'élément `<ins>` est «&nbsp;transparent&nbsp;», ce qui, lorsqu'il est imbriqué dans `<ruby>`, signifie «&nbsp;contenu phrasé&nbsp;». Toutefois, les éléments {{HTMLElement("rt")}} ne sont pas du contenu phrasé. Ainsi, un élément {{HTMLElement("rt")}} ne peut pas être imbriqué à l'intérieur de cet élément `<ins>`, même si `<rt>` et `<ins>` peuvent tous deux se trouver dans `<ruby>`, et que `<ins>` est «&nbsp;transparent&nbsp;».

```html example-bad
<ruby>
  Texte avant
  <ins>
    <!-- Invalide : rt ne peut pas être placé à l'intérieur de ins ici -->
    <rt>Prononciation</rt>
  </ins>
</ruby>
```

```html example-good
<ruby>
  Texte avant
  <!-- Valide : ins peut être à l'intérieur de ruby, et rt peut être à l'intérieur de ruby -->
  <ins>Texte inséré</ins>
  <rt>Prononciation</rt>
</ruby>
```

```html example-good
<ruby>
  Texte avant
  <!-- Valide : rt peut être à l'intérieur de ruby, et ins peut être à l'intérieur de rt -->
  <rt><ins>Prononciation</ins></rt>
</ruby>
```

Le caractère transparent est un _modèle de contenu_, pas une _catégorie de contenu_, il définit uniquement ce qu'un élément peut contenir, et non l'endroit où l'élément peut être placé. Autrement dit, lorsqu'on détermine la licéité des enfants d'un élément, on ne peut pas «&nbsp;voir à travers&nbsp;» des enfants transparents. Par exemple, un élément {{HTMLElement("ul")}} n'accepte que des éléments {{HTMLElement("li")}} et des éléments supports de script, et n'autorise pas `<del>` ou `<ins>`, même si le `<del>` ne contient que des éléments `<li>`.

```html example-bad
<ul>
  <del>
    <li>Oranges</li>
    <li>Papier toilette</li>
  </del>
  <li>Dentifrice</li>
</ul>
```

```html example-good
<ul>
  <li><del>Oranges</del></li>
  <li><del>Papier toilette</del></li>
  <li>Dentifrice</li>
</ul>
```
