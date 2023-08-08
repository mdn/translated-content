---
title: Exemple d'empilement 2
slug: Web/CSS/CSS_positioned_layout/Understanding_z-index/Stacking_context_example_2
---

{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Exemple_1","Web/CSS/Comprendre_z-index/Exemple_3", "Web/CSS/Comprendre_z-index")}}

## Deuxième exemple

Ce deuxième exemple est très simple, mais il est essentiel à la compréhension du concept de _contexte d'empilement_. Nous avons les 4 mêmes blocs que l'exemple précédent, mais maintenant, nous appliquons des propriétés {{cssxref("z-index")}} aux deux niveaux de la hiérarchie.

{{ EmbedLiveSample('Exemple', '352', '270') }}

Vous pouvez voir que le bloc _DIV #2_ (z-index&nbsp;: 2) est au dessus du bloc _DIV #3_ (z-index&nbsp;: 1), parce qu'ils appartiennent tout les deux au même contexte d'empilement (celui de la racine), donc les valeurs de `z-index` régissent l'empilement des éléments.

Ce qui peut apparaitre comme étrange, c'est que le bloc _DIV #2_ (z-index&nbsp;: 2) est au dessus du bloc _DIV #4_ (z-index&nbsp;: 10), malgré leurs valeurs de `z-index`. La raison est qu'ils n'appartiennent pas au même contexte d'empilement. Le bloc _DIV #4_ appartient au contexte d'empilement créé par le bloc _DIV #3_, et, comme expliqué précédemment, le bloc _DIV #3_ (et tout son contenu) est au dessous du bloc _DIV #2_.

Pour mieux comprendre la situation, voici la hiérarchie du contexte d'empilement&nbsp;:

- Contexte d'empilement racine

  - DIV #2 (z-index 2)
  - DIV #3 (z-index 1)

    - DIV #4 (z-index 10)

> **Note :** Il est important de se souvenir qu'en général, la hiérarchie HTML est différente de la hiérarchie du contexte d'empilement. Dans la hiérarchie du contexte d'empilement, les éléments qui ne créent pas un contexte d'empilement sont regroupés avec leur parents.

## Exemple

### CSS

```css
div {
  font: 12px Arial;
}

span.bold {
  font-weight: bold;
}

#div2 {
  z-index: 2;
}

#div3 {
  z-index: 1;
}

#div4 {
  z-index: 10;
}

#div1,
#div3 {
  height: 80px;
  position: relative;
  border: 1px dashed #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#div2 {
  opacity: 0.8;
  position: absolute;
  width: 150px;
  height: 200px;
  top: 20px;
  left: 170px;
  border: 1px dashed #990000;
  background-color: #ffdddd;
  text-align: center;
}

#div4 {
  opacity: 0.8;
  position: absolute;
  width: 200px;
  height: 70px;
  top: 65px;
  left: 50px;
  border: 1px dashed #000099;
  background-color: #ddddff;
  text-align: left;
  padding-left: 10px;
}
```

### HTML

```html
<br />

<div id="div1">
  <br /><span class="bold">DIV #1</span> <br />position: relative;
  <div id="div2">
    <br /><span class="bold">DIV #2</span> <br />position: absolute;
    <br />z-index: 2;
  </div>
</div>

<br />

<div id="div3">
  <br /><span class="bold">DIV #3</span> <br />position: relative;
  <br />z-index: 1;
  <div id="div4">
    <br /><span class="bold">DIV #4</span> <br />position: absolute;
    <br />z-index: 10;
  </div>
</div>
```

{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Exemple_1","Web/CSS/Comprendre_z-index/Exemple_3", "Web/CSS/Comprendre_z-index")}}
