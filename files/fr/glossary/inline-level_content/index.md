---
title: Éléments en ligne
slug: Glossary/Inline-level_content
---

{{GlossarySidebar}}

Les éléments HTML (**Hypertext Markup Language**) étaient historiquement catégorisés comme des éléments de type « bloc » (_block_ en anglais) ou de type « en ligne » (_inline_ en anglais). Comme il s'agit d'une caractéristique de présentation, elle est aujourd'hui spécifiée par CSS dans le module de spécification [_Flow Layout_](/fr/docs/Web/CSS/CSS_display/Flow_layout) qui définit l'organisation visuelle par défaut des éléments (le « flux » normal). Les éléments en lignes n'occupent que l'espace entre leurs balises et s'insèrent dans le flux du contenu plutôt que de créer un nouveau « bloc » visuel. Dans cet article, nous verrons en détails ces éléments en ligne et leurs différences par rapport aux [éléments de bloc](/fr/docs/Glossary/Block-level_content).

> [!NOTE]
> Un élément en ligne ne commence pas sur une nouvelle ligne et prend uniquement la largeur qui lui est nécessaire.

## Éléments en ligne et éléments de bloc : un exemple

Un exemple vaut mieux qu'une longue explication. Voici pour commencer la feuille de style CSS que nous utiliserons :

```css
.highlight {
  background-color: #ee3;
}
```

### Élément en ligne

Le fragment de code HTML qui suit utilise un élément en ligne avec la classe `highlight` :

```html
<p>
  L'élément span qui suit est un
  <span class="highlight">élément en ligne</span> ; son arrière-plan est coloré
  afin d'illustrer la zone couverte par cet élément en ligne.
</p>
```

Dans cet exemple, l'élément [`<p>`](/fr/docs/Web/HTML/Reference/Elements/p) (le paragraphe) est un élément de bloc qui contient du texte. Dans ce texte, on a un élément [`<span>`](/fr/docs/Web/HTML/Reference/Elements/span) qui est un élément en ligne. L'élément `<span>` étant un élément en ligne, le paragraphe est bien affiché sous la forme d'un flux de texte sans rupture :

{{EmbedLiveSample("Élément_en_ligne", "", 120)}}

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color: #ee3;
}
```

### Élément de bloc

Transformons l'exemple précédent pour passer d'un élément `<span>` à un élément [`<div>`](/fr/docs/Web/HTML/Reference/Elements/div) qui est un élément de bloc :

```html
<p>L'élément div qui suit est un <div class="highlight">élément de bloc</div> ;
son arrière-plan est coloré afin d'illustrer la zone couverte par cet élément de
bloc.</p>
```

```css hidden
body {
  margin: 0;
  padding: 4px;
  border: 1px solid #333;
}

.highlight {
  background-color: #ee3;
}
```

Et voici le résultat qu'on obtient :

{{EmbedLiveSample("Élément_de_bloc", "", 150)}}

On voit ici que l'élément `<div>` modifie complètement la disposition du texte et le découpe en trois parties : une partie avant le `<div>`, une partie constituée avec le texte de l'élément `<div>` et une dernière partie ensuite.

### Modifier le type d'un d'élément

Il est possible de choisir le mode d'affichage d'un élément afin de modifier son comportement par défaut grâce à la propriété CSS [`display`](/fr/docs/Web/CSS/display). En passant la valeur de `display` de `"inline"` à `"block"`, on peut indiquer au navigateur d'afficher l'élément comme une boîte de bloc plutôt que comme une boîte en ligne. Attention, l'élément ne sera plus affiché de la même façon, vérifiez le résultat obtenu. De plus, ce changement n'impactera pas la catégorie et le modèle de contenu de l'élément : utiliser `display:block` sur un élément [`<span>`](/fr/docs/Web/HTML/Reference/Elements/span) ne permettra toujours pas de lui imbriquer un élément [`<div>`](/fr/docs/Web/HTML/Reference/Elements/div) à l'intérieur.

## Différences conceptuelles

Voici, en résumé, les différences conceptuelles entre les éléments en ligne et les éléments de bloc :

- Modèle de contenu
  - : En général, les éléments en ligne ne peuvent contenir que des données ou d'autres éléments en ligne. Il n'est pas possible de placer des éléments de bloc à l'intérieur d'éléments en ligne.
- Formatage
  - : Par défaut, les éléments en ligne n'introduisent pas de saut de ligne dans le flux du document. En revanche, les éléments de bloc provoquent un saut de ligne (ce comportement peut être modifié grâce au CSS).

## Liste des éléments en ligne

Bien que cette notion de présentation soit désormais (depuis HTML5) portée par le CSS et remplacée par les [catégories de contenu](/fr/docs/Web/HTML/Guides/Content_categories), voici les éléments HTML qui se comportent par défaut comme des éléments en ligne:

- [`<a>`](/fr/docs/Web/HTML/Reference/Elements/a)
- [`<abbr>`](/fr/docs/Web/HTML/Reference/Elements/abbr)
- [`<acronym>`](/fr/docs/Web/HTML/Reference/Elements/acronym)
- [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio) (si les contrôles sont visibles)
- [`<b>`](/fr/docs/Web/HTML/Reference/Elements/b)
- [`<bdi>`](/fr/docs/Web/HTML/Reference/Elements/bdi)
- [`<bdo>`](/fr/docs/Web/HTML/Reference/Elements/bdo)
- [`<big>`](/fr/docs/Web/HTML/Reference/Elements/big)
- [`<br>`](/fr/docs/Web/HTML/Reference/Elements/br)
- [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button)
- [`<canvas>`](/fr/docs/Web/HTML/Reference/Elements/canvas)
- [`<cite>`](/fr/docs/Web/HTML/Reference/Elements/cite)
- [`<code>`](/fr/docs/Web/HTML/Reference/Elements/code)
- [`<data>`](/fr/docs/Web/HTML/Reference/Elements/data)
- [`<datalist>`](/fr/docs/Web/HTML/Reference/Elements/datalist)
- [`<del>`](/fr/docs/Web/HTML/Reference/Elements/del)
- [`<dfn>`](/fr/docs/Web/HTML/Reference/Elements/dfn)
- [`<em>`](/fr/docs/Web/HTML/Reference/Elements/em)
- [`<embed>`](/fr/docs/Web/HTML/Reference/Elements/embed)
- [`<i>`](/fr/docs/Web/HTML/Reference/Elements/i)
- [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe)
- [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img)
- [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input)
- [`<ins>`](/fr/docs/Web/HTML/Reference/Elements/ins)
- [`<kbd>`](/fr/docs/Web/HTML/Reference/Elements/kbd)
- [`<label>`](/fr/docs/Web/HTML/Reference/Elements/label)
- [`<map>`](/fr/docs/Web/HTML/Reference/Elements/map)
- [`<mark>`](/fr/docs/Web/HTML/Reference/Elements/mark)
- [`<meter>`](/fr/docs/Web/HTML/Reference/Elements/meter)
- [`<noscript>`](/fr/docs/Web/HTML/Reference/Elements/noscript)
- [`<object>`](/fr/docs/Web/HTML/Reference/Elements/object)
- [`<output>`](/fr/docs/Web/HTML/Reference/Elements/output)
- [`<picture>`](/fr/docs/Web/HTML/Reference/Elements/picture)
- [`<progress>`](/fr/docs/Web/HTML/Reference/Elements/progress)
- [`<q>`](/fr/docs/Web/HTML/Reference/Elements/q)
- [`<ruby>`](/fr/docs/Web/HTML/Reference/Elements/ruby)
- [`<s>`](/fr/docs/Web/HTML/Reference/Elements/s)
- [`<samp>`](/fr/docs/Web/HTML/Reference/Elements/samp)
- [`<script>`](/fr/docs/Web/HTML/Reference/Elements/script)
- [`<select>`](/fr/docs/Web/HTML/Reference/Elements/select)
- [`<slot>`](/fr/docs/Web/HTML/Reference/Elements/slot)
- [`<small>`](/fr/docs/Web/HTML/Reference/Elements/small)
- [`<span>`](/fr/docs/Web/HTML/Reference/Elements/span)
- [`<strong>`](/fr/docs/Web/HTML/Reference/Elements/strong)
- [`<sub>`](/fr/docs/Web/HTML/Reference/Elements/sub)
- [`<sup>`](/fr/docs/Web/HTML/Reference/Elements/sup)
- [`<svg>`](/fr/docs/Web/SVG/Reference/Element/svg)
- [`<template>`](/fr/docs/Web/HTML/Reference/Elements/template)
- [`<u>`](/fr/docs/Web/HTML/Reference/Elements/u)
- [`<tt>`](/fr/docs/Web/HTML/Reference/Elements/tt)
- [`<var>`](/fr/docs/Web/HTML/Reference/Elements/var)
- [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video)
- [`<wbr>`](/fr/docs/Web/HTML/Reference/Elements/wbr)

## Voir aussi

- [Les éléments de bloc](/fr/docs/Glossary/Block-level_content)
- [Référence des éléments HTML](/fr/docs/Web/HTML/Reference/Elements)
- [La propriété CSS `display`](/fr/docs/Web/CSS/display)
- [Les catégories de contenu](/fr/docs/Web/HTML/Guides/Content_categories)
- [Les éléments de bloc et les éléments en ligne dans le flux normal](/fr/docs/Web/CSS/CSS_display/Block_and_inline_layout_in_normal_flow)

{{QuickLinksWithSubpages("/fr/docs/Web/HTML/")}}
