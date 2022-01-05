---
title: Empilement et éléments flottants
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_and_float
original_slug: Web/CSS/Comprendre_z-index/Empilement_et_float
---
{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Empilement_sans_z-index","Web/CSS/Comprendre_z-index/Ajout_de_z-index", "Web/CSS/Comprendre_z-index")}}

## L'empilement et les éléments flottants

Pour les blocs flottants, l'ordre d'empilement est légèrement différent. Les blocs flottants sont disposés entre les blocs non positionnés et les blocs positionnés. Voici l'ordre d'empilement :

1.  L'arrière-plan et les bordures de l'élément racine du document
2.  Les blocs qui descendent les uns des autres et qui sont situés dans le flux normal, dans l'ordre dans lequel ils apparaissent (pour HTML) ;
3.  Les blocs flottants ;
4.  Les éléments enfants positionnés, dans leur ordre d'apparence (pour HTML).

En fait, comme on le voit avec l'exemple ci-après, l'arrière-plan et la bordure du bloc non positionné (DIV n°4) ne sont pas impactés par les blocs flottants alors que le contenu est affecté. Il s'agit du comportement standard de la propriété CSS {{cssxref("float")}}.

Ce comportement peut être expliqué en améliorant la liste précédente :

1.  L'arrière-plan et les bordures de l'élément racine ;
2.  Les blocs enfants dans le flux normal, dans leur ordre d'apparence (en HTML) ;
3.  Les blocs flottants ;
4.  Les éléments « en-ligne » enfants dans le flux normal ;
5.  Les éléments enfants positionnés, dans leur ordre d'apparence (en HTML).

> **Note :** Dans l'exemple qui suit, tous les blocs sont transparents, excepté celui qui n'est pas positionné, montrant ainsi l'ordre d'empilement. Si l'on réduit l'opacité du bloc non positionné (DIV #4), il se produit quelque chose d'étrange : l'arrière-plan et la bordure de cet élément se placent par dessus les blocs flottants et les blocs positionnés. Il s'agit d'une interprétation particulière des spécifications CSS : l'application de l'opacité crée un nouveau contexte d'empilement (voir l'article : [What No One Told You About Z-Index](https://philipwalton.com/articles/what-no-one-told-you-about-z-index/) de Philip Walton ou son excellente traduction de Vincent De Oliveira, [Ce que personne ne vous a dit sur z-index](https://iamvdo.me/blog/comprendre-z-index-et-les-contextes-dempilement) et, bien-sûr, la [spécification](https://www.w3.org/TR/CSS2/zindex.html)).

{{EmbedLiveSample("Code_source_de_lexemple", 600, 250)}}

## Code source de l'exemple

### **HTML**

```html
<div id="abs1">
  <b>DIV #1</b><br />position: absolute;</div>

<div id="flo1">
  <b>DIV #2</b><br />float: left;</div>

<div id="flo2">
  <b>DIV #3</b><br />float: right;</div>

<br />

<div id="sta1">
  <b>DIV #4</b><br />no positioning</div>

<div id="abs2">
  <b>DIV #5</b><br />position: absolute;</div>
```

### CSS

```css
div {
  padding: 10px;
  text-align: center;
}

b {
  font-family: sans-serif;
}

#abs1 {
  position: absolute;
  width: 150px;
  height: 200px;
  top: 10px;
  right: 140px;
  border: 1px dashed #900;
  background-color: #fdd;
}

#sta1 {
  height: 100px;
  border: 1px dashed #996;
  background-color: #ffc;
  margin: 0px 10px 0px 10px;
  text-align: left;
}

#flo1 {
  margin: 0px 10px 0px 20px;
  float: left;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#flo2 {
  margin: 0px 20px 0px 10px;
  float: right;
  width: 150px;
  height: 200px;
  border: 1px dashed #090;
  background-color: #cfc;
}

#abs2 {
  position: absolute;
  width: 150px;
  height: 100px;
  top: 130px;
  left: 100px;
  border: 1px dashed #990;
  background-color: #fdd;
}
```

## **Voir aussi**

- [L'empilement sans z-index](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_without_z-index) : Règles d'empilement par défaut
- [Ajouter z-index](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Adding_z-index) : Utiliser z-index pour modifier l'empilement par défaut
- [L'empilement de couches](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) : Remarques sur l'empilement de couches
- [Exemple d'empilement n°1](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_1) : Hiérarchie HTML à 2 niveaux, z-index sur le dernier niveau
- [Exemple d'empilement n°2](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_2) : Hiérarchie HTML à 2 niveaux, z-index sur tous les éléments
- [Exemple d'empilement n°3](/fr/docs/Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3) : Hiérarchie HTML à 3 niveaux, z-index sur le deuxième niveau

{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Empilement_sans_z-index","Web/CSS/Comprendre_z-index/Ajout_de_z-index", "Web/CSS/Comprendre_z-index")}}
