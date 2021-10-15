---
title: Exemple d'empilement 3
slug: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
tags:
  - Avancé
  - CSS
  - Guide
translation_of: Web/CSS/CSS_Positioning/Understanding_z_index/Stacking_context_example_3
original_slug: Web/CSS/Comprendre_z-index/Exemple_3
---
{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Exemple_2","", "Web/CSS/Comprendre_z-index")}}

## Troisième exemple

Ce dernier exemple illustre les problèmes qui peuvent survenir lorsqu'on utilise des éléments positionnés dans une hiérarchie HTML à plusieurs niveaux et lorsque des {{cssxref("z-index")}} sont assignés à l'aide de sélecteurs de classe.

Prenons un exemple de menu hiérarchique à 3 niveaux, fait de plusieurs _DIV_ positionnés. Les deuxième et troisième niveaux apparaissent lors du survol ou d'un clic sur leur parent. D'ordinaire, ce type de menu est généré par un script, côté client ou côté serveur, de façon à ce que les règles de styles soient assignées à l'aide de sélecteurs de classe plutôt qu'avec des sélecteurs d'_id_.

Si les trois niveaux du menu se chevauchent partiellement, alors la gestion de l'empilement peut devenir problématique.

{{ EmbedLiveSample('Exemple', '320', '330') }}

Le menu de premier niveau est positionné relativement, ainsi aucun contexte d'empilement n'est créé.

Le menu de deuxième niveau est positionné en absolu à l'intérieur de son élément parent. Afin de le faire apparaître au dessus de tous les menus de premier niveau, on utilise un `z-index`. Le problème est que pour chaque menu de deuxième niveau, un contexte d'empilement se crée et chaque menu de troisième niveau appartient au contexte d'empilement de son parent.

Ainsi donc, un menu de troisième niveau s'empilera sous les menus de deuxième niveau suivants, car tous les menus de deuxième niveau partagent la même valeur de `z-index` et que les règles d'empilement par défaut s'appliquent.

Pour mieux comprendre la situation, voici la hiérarchie du contexte d'empilement :

- Contexte d'empilement racine

  - Niveau #1

    - Niveau #2 (z-index : 1)

      - Niveau #3
      - …
      - Niveau #3

    - Niveau #2 (z-index : 1)
    - …
    - Niveau #2 (z-index : 1)

  - Niveau #1
  - …
  - Niveau #1

On peut contourner ce problème en supprimant le chevauchement entre les différents niveaux du menu, ou en utilisant des valeurs de `z-index` individuelles (et différentes) assignées à l'aide de sélecteurs d'_id_ plutôt que des sélecteurs de classe ou encore en aplatissant la hiérarchie HTML.

> **Note :** Dans le code source, vous remarquerez que les menus de deuxième et troisième niveaux sont construits à l'aide de plusieurs boîtes _DIV_ contenues dans un élément positionné en absolu. Ceci sert à les grouper et à les positionner en une seule fois.

## Exemple

### CSS

```css
div {
  font: 12px Arial;
}

span.bold {
  font-weight: bold;
}

div.lev1 {
  width: 250px;
  height: 70px;
  position: relative;
  border: 2px outset #669966;
  background-color: #ccffcc;
  padding-left: 5px;
}

#container1 {
  z-index: 1;
  position: absolute;
  top: 30px;
  left: 75px;
}

div.lev2 {
  opacity: 0.9;
  width: 200px;
  height: 60px;
  position: relative;
  border: 2px outset #990000;
  background-color: #ffdddd;
  padding-left: 5px;
}

#container2 {
  z-index: 1;
  position: absolute;
  top: 20px;
  left: 110px;
}

div.lev3 {
  z-index: 10;
  width: 100px;
  position: relative;
  border: 2px outset #000099;
  background-color: #ddddff;
  padding-left: 5px;
}
```

### HTML

```html
<br/>

<div class="lev1">
<span class="bold">LEVEL #1</span>
  <div id="container1">
    <div class="lev2">
      <br/><span class="bold">LEVEL #2</span>
      <br/>z-index: 1;
      <div id="container2">
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
        <div class="lev3"><span class="bold">LEVEL #3</span></div>
      </div>
    </div>
    <div class="lev2">
      <br/><span class="bold">LEVEL #2</span>
      <br/>z-index: 1;
    </div>
  </div>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>

<div class="lev1">
  <span class="bold">LEVEL #1</span>
</div>
```

{{PreviousMenuNext("Web/CSS/Comprendre_z-index/Exemple_2","", "Web/CSS/Comprendre_z-index")}}
