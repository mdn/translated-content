---
title: Empilement sans z-index
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
tags:
  - Avancé
  - CSS
  - Guide
  - z-index
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index
original_slug: Web/CSS/Comprendre_z-index/Empilement_sans_z-index
---
{{PreviousMenuNext("","Web/CSS/Comprendre_z-index/Empilement_et_float", "Web/CSS/Comprendre_z-index")}}

## Empilement sans `z-index`

Lorsqu’aucun élément n'a de {{cssxref("z-index")}} définis, tous les éléments sont empilés dans cet ordre (de bas en haut)&nbsp;:

1.  Arrière-plans et bordures de l'élément racine
2.  Blocs enfants dans le flux normal, dans leur ordre d'apparition (en HTML)
3.  Éléments enfants positionnés, dans leur ordre d'apparition (en HTML)

On gardera à l'esprit que, lorsque la propriété {{cssxref("order")}} modifie l'ordre visuel des conteneurs flexibles ({{cssxref("flex")}}), cela modifie également l'ordre du contexte d'empilement.

Dans l'exemple suivant, les blocs en position absolue et relative sont correctement positionnés et dimensionnés pour illustrer les règles d'empilement. L'opacité a été réduite pour rendre les éléments transparents et faciliter ainsi la visualisation des superpositions.

> **Note :**
>
> - Dans un groupe d'éléments sans aucune propriété `z-index`, tel que les blocs positionnés (DIV #1 à #4) dans l'exemple, l'ordre d'empilement des éléments est celui de leur ordre dans la hiérarchie HTML, quelle que soit leur position.
> - Les blocs standards (DIV #5) dans le flux normal, sans aucune propriété de positionnement, sont toujours rendus avant les éléments positionnés, et apparaissent en dessous de ces derniers, même s'ils interviennent plus tard dans la hiérarchie HTML.
> - **Attention** : en copiant-collant le code ci-dessous, l'exemple ne fonctionnera pas pour le DIV#5 à cause de la propriété d'opacité qui lui a été affecté. Il apparaîtra donc au dessus des autres blocs.

{{EmbedLiveSample("Exemple", 600, 400)}}

## Exemple

### HTML

```html
<div id="abs1" class="absolute">
  <b>DIV #1</b><br />position: absolute;</div>
<div id="rel1" class="relative">
  <b>DIV #2</b><br />position: relative;</div>
<div id="rel2" class="relative">
  <b>DIV #3</b><br />position: relative;</div>
<div id="abs2" class="absolute">
  <b>DIV #4</b><br />position: absolute;</div>
<div id="sta1" class="static">
  <b>DIV #5</b><br />position: static;</div>
```

### CSS

```css
b {
  font-family: sans-serif;
}

div {
  padding: 10px;
  border: 1px dashed;
  text-align: center;
}

.static {
  position: static;
  height: 80px;
  background-color: #ffc;
  border-color: #996;
}

.absolute {
  position: absolute;
  width: 150px;
  height: 350px;
  background-color: #fdd;
  border-color: #900;
  opacity: 0.7;
}

.relative {
  position: relative;
  height: 80px;
  background-color: #cfc;
  border-color: #696;
  opacity: 0.7;
}

#abs1 {
  top: 10px;
  left: 10px;
}

#rel1 {
  top: 30px;
  margin: 0px 50px 0px 50px;
}

#rel2 {
  top: 15px;
  left: 20px;
  margin: 0px 50px 0px 50px;
}

#abs2 {
  top: 10px;
  right: 10px;
}

#sta1 {
  background-color: #ffc;
  margin: 0px 50px 0px 50px;
}
```

{{PreviousMenuNext("","Web/CSS/Comprendre_z-index/Empilement_et_float", "Web/CSS/Comprendre_z-index")}}
