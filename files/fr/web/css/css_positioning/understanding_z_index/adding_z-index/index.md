---
title: Ajouter z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index
tags:
  - Avancé
  - CSS
  - Guide
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index
original_slug: Web/CSS/Comprendre_z-index/Ajout_de_z-index
---
{{CSSRef}}{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Empilement_et_float","Web/CSS/Comprendre_z-index/Empilement_de_couches", "Web/CSS/Comprendre_z-index")}}

## Ajouter `z-index`

Dans le premier exemple, [« empilement sans `z-index` »](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index),  illustre comment l'empilement fonctionne par défaut. Pour définir un ordre d'empilement différent, il faut utiliser la propriété CSS {{cssxref("z-index")}}.

Cette propriété, dont l'attribut est une valeur entière (positive ou négative), représente la position de l'élément le long de l'axe Z. Pour se représenter cette notion, on peut imaginer que la page possède plusieurs couches, les unes au dessus des autres. Chaque couche est numérotée. Un couche avec une grande valeur de `z-index` est affichée par dessus toutes celles dont la valeur est inférieure à la sienne.

> **Attention :** `z-index` a un effet sur les éléments uniquement si ceux-ci sont [positionnés](/fr/docs/Web/CSS/position).

- _Bas : couche la plus lointaine de l'observateur_
- …
- Couche -3
- Couche -2
- Couche -1
- Couche 0 _couche de rendu par défaut_
- Couche 1
- Couche 2
- Couche 3
- …
- _Haut : couche la plus proche de l'observateur_

> **Note :**
>
> - Lorsque la propriété `z-index` n'est pas définie, les éléments sont rendus sur la couche 0 par défaut.
> - Si plusieurs éléments possède la même valeur de `z-index` (c'est-à-dire qu'ils sont placés sur la même couche), alors les règles d'empilement expliquées dans [empilement sans `z-index`](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index) s'appliquent.

Dans l'exemple qui suit, l'empilement des couches a été réordonné en utilisant `z-index`. Le `z-index` du bloc DIV#5 n'a pas d'effet, l'élément n'étant pas positionné.

{{EmbedLiveSample("Code_source_de_l’exemple", '468', '365')}}

## **Code source de l’exemple**

### HTML

```html
<div id="abs1">
  <b>DIV #1</b>
  <br />position: absolute;
  <br />z-index: 5;
</div>

<div id="rel1">
  <b>DIV #2</b>
  <br />position: relative;
  <br />z-index: 3;
</div>

<div id="rel2">
  <b>DIV #3</b>
  <br />position: relative;
  <br />z-index: 2;
</div>

<div id="abs2">
  <b>DIV #4</b>
  <br />position: absolute;
  <br />z-index: 1;
</div>

<div id="sta1">
  <b>DIV #5</b>
  <br />no positioning
  <br />z-index: 8;
</div>
```

### CSS

```css
div {
  padding: 10px;
  opacity: 0.7;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  z-index: 5;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  left: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#rel1 {
  z-index: 3;
  height: 100px;
  position: relative;
  top: 30px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  z-index: 2;
  height: 100px;
  position: relative;
  top: 15px;
  left: 20px;
  border: 1px dashed #696;
  background-color: #cfc;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  z-index: 1;
  position: absolute;
  width: 150px;
  height: 350px;
  top: 10px;
  right: 10px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  z-index: 8;
  height: 70px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Empilement_et_float","Web/CSS/Comprendre_z-index/Empilement_de_couches", "Web/CSS/Comprendre_z-index")}}
