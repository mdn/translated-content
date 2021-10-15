---
title: L'empilement de couches
slug: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
tags:
  - Avancé
  - CSS
  - Guide
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context
original_slug: Web/CSS/Comprendre_z-index/Empilement_de_couches
---
{{CSSRef}}{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Ajout_de_z-index","Web/CSS/Comprendre_z-index/Exemple_1", "Web/CSS/Comprendre_z-index")}}

## Le contexte d'empilement

Dans l'exemple précédent, [Ajout de z-index](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index), les blocs _DIV_ sont rendus les uns au dessus des autres (de l'arrière vers l'avant), en commençant par celui dont la valeur de {{cssxref("z-index")}} est la plus faible et en finissant par celui dont la valeur de `z-index` est la plus forte. Dans cet exemple, il n'y a qu'un seul _contexte d'empilement_, qui est l'élément `HTML` racine de la page.

Dans certaines conditions, un contexte d'empilement enfant peut être créé à l'intérieur d'un bloc _DIV_ (ou un autre élément) n'importe où dans le document. En particulier, un élément positionné (en absolu ou en relatif) possédant une valeur de `z-index` différente de _auto_ crée son propre contexte d'empilement : tous ses éléments enfants sont entièrement empilés dans ce contexte, suivant les mêmes règles que celles expliquées précédemment. Les valeurs de `z-index` de ses enfants n'ont de signification que dans ce contexte. Le bloc _DIV_ entier et son contenu sont empilés comme un seul élément dans le contexte d'empilement de leur parent.

Un contexte d'empilement est formé dans le document par n'importe quel élément qui répond à l'un de ces critères :

- L'élément racine du document (HTML)
- Un élément pour lequel {{cssxref("position")}} vaut `absolute` ou `relative` et pour lequel {{cssxref("z-index")}} est différente de `auto`
- Un élément pour lequel {{cssxref("position")}} vaut `fixed` ou `sticky`
- Un élément qui est le fils d'un conteneur flexible ({{cssxref("flexbox")}}) pour lequel {{cssxref("z-index")}} est différente de `auto`
- Un élément qui est le fils d'un conteneur en grille ({{cssxref("grid")}}) pour lequel {{cssxref("z-index")}} est différente de `auto`
- Un élément pour lequel {{cssxref("opacity")}} est inférieure à 1 (cf. [la spécification](https://www.w3.org/TR/css3-color/#transparency))
- Un élément pour lequel {{cssxref("mix-blend-mode")}} est différente de `normal`
- Un élément pour lequel n'importe laquelle de ces propriétés est différente de `none` :

  - {{cssxref("transform")}}
  - {{cssxref("filter")}}
  - {{cssxref("perspective")}}
  - {{cssxref("clip-path")}}
  - {{cssxref("mask")}} / {{cssxref("mask-image")}} / {{cssxref("mask-border")}}

- Un élément pour lequel {{cssxref("isolation")}} vaut `isolate`
- Un élément pour lequel {{cssxref("-webkit-overflow-scrolling")}} vaut `touch`.
- Un élément pour lequel la valeur de la propriété {{cssxref("will-change")}} concerne une propriété qui créerait un contexte d'empilement avec une valeur non-initiale.
- Un élément pour lequel la valeur de la propriété {{cssxref("contain")}} est `layout`, `paint` ou une valeur composite contenant un de ces mots-clés (par exemple `contain: strict` ou `contain: content`).

Sans contexte d'empilement, les éléments fils sont empilés selon les règles vues avant. Les valeurs des `z-index` pour les contextes d'empilement des éléments fils ont uniquement un sens pour l'élément parent. Les contextes d'empilement sont traités de façon atomique, comme une seule unité, dans le contexte de l'élément parent.

En bref :

- Les contextes d'empilement peuvent être enfants d'autres contextes d'empilement, et ensemble forment une hiérarchie de contextes d'empilement.
- Chaque contexte d'empilement est indépendant de ses voisins : seuls les éléments enfants sont pris en compte lorsque l'empilement est traité.
- Chaque contexte d'empilement est autonome : Une fois que le contenu de l'élément est empilé, l'élément entier est pris en compte dans l'ordre d'empilement du contexte parent.

> **Note :** La hiérarchie des contextes d'empilement est un sous-ensemble de la hiérarchie des éléments HTML, car seuls les éléments positionnés dans l'espace (avec la propriété `z-index` créent des contextes d'empilement. On peut dire que les éléments qui ne créent pas leur propre contexte d'empilement sont _assimilés_ par le contexte d'empilement parent.

#### Illustration

![Figure 1. Exemple de règles d'empilement modifiées avec la propriété z-index](understanding_zindex_04.png)

Dans cet exemple, tous les éléments positionnés créent leur propre contexte d'empilement, du fait de leur positionnement et de leur valeur `z-index`. La hiérarchie des contextes d'empilement est organisée comme suit :

- Racine

  - DIV #1
  - DIV #2
  - DIV #3

    - DIV #4
    - DIV #5
    - DIV #6

Il est important de noter que les blocs _DIV #4_, _DIV #5_ et _DIV #6_ sont les enfants du bloc _DIV #3_, donc leur empilement est complètement résolu à l'intérieur de ce dernier. Une fois que l'empilement et le rendu à l'intérieur du bloc 3 sont définis, la totalité de l'élément _DIV #3_ est prise en compte pour l'empilement dans l'élément racine par rapport à ses _DIV_ voisins.

> **Note :**
>
> - _DIV #4_ est rendu dans le bloc _DIV #1_ car le `z-index` (5) de celui-ci est valide à l'intérieur du contexte d'empilement de l'élément racine, alors que le `z-index` (6) du bloc _DIV #4_ est valide à l'intérieur du contexte d'empilement du bloc _DIV #3_. Ainsi, DIV #4 se trouve sous _DIV #1_, parce que _DIV #4_ appartient à _DIV #3_, qui possède une valeur de `z-index` plus petite.
> - Pour la même raison _DIV #2_ (dont le `z-index` est 2) est rendu sous _DIV#5_ (de `z-index` égal à 1) parce que _DIV #5_ appartient à _DIV #3_, qui possède une valeur de `z-index` plus grande.
> - Le `z-index` du bloc _DIV #3_ est 4, mais cette valeur est indépendante du `z-index` du bloc _DIV #4_, _DIV #5_ et _DIV #6_, parce qu'il appartient à un contexte d'empilement différent.

## Exemple

### CSS

```css
* {
  margin: 0;
}

html {
  padding: 20px;
  font: 12px/20px Arial, sans-serif;
}

div {
  opacity: 0.7;
  position: relative;
}

h1 {
  font: inherit;
  font-weight: bold;
}

#div1, #div2 {
  border: 1px dashed #696;
  padding: 10px;
  background-color: #cfc;
}

#div1 {
  z-index: 5;
  margin-bottom: 190px;
}

#div2 {
  z-index: 2;
}

#div3 {
  z-index: 4;
  opacity: 1;
  position: absolute;
  top: 40px;
  left: 180px;
  width: 330px;
  border: 1px dashed #900;
  background-color: #fdd;
  padding: 40px 20px 20px;
}

#div4, #div5 {
  border: 1px dashed #996;
  background-color: #ffc;
}

#div4 {
  z-index: 6;
  margin-bottom: 15px;
  padding: 25px 10px 5px;
}

#div5 {
  z-index: 1;
  margin-top: 15px;
  padding: 5px 10px;
}

#div6 {
  z-index: 3;
  position: absolute;
  top: 20px;
  left: 180px;
  width: 150px;
  height: 125px;
  border: 1px dashed #009;
  padding-top: 125px;
  background-color: #ddf;
  text-align: ce        }
```

### HTML

```html
<div id="div1">
  <h1>Division Element #1</h1>
  <code>position: relative;<br/>
  z-index: 5;</code>
</div>

<div id="div2">
  <h1>Division Element #2</h1>
  <code>position: relative;<br/>
  z-index: 2;</code>
</div>

<div id="div3">

  <div id="div4">
    <h1>Division Element #4</h1>
    <code>position: relative;<br/>
    z-index: 6;</code>
  </div>

  <h1>Division Element #3</h1>
  <code>position: absolute;<br/>
  z-index: 4;</code>

  <div id="div5">
    <h1>Division Element #5</h1>
    <code>position: relative;<br/>
    z-index: 1;</code>
  </div>

  <div id="div6">
    <h1>Division Element #6</h1>
    <code>position: absolute;<br/>
    z-index: 3;</code>
  </div>
```

### Résultat

{{EmbedLiveSample("Exemple","556","396")}}

{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Ajout_de_z-index","Web/CSS/Comprendre_z-index/Exemple_1", "Web/CSS/Comprendre_z-index")}}
