---
title: Propriété CSS `flex-direction`
short-title: flex-direction
slug: Web/CSS/Reference/Properties/flex-direction
l10n:
  sourceCommit: c965bd5938085b2dab7d19734adbe3db0914ba5d
---

La propriété [CSS](/fr/docs/Web/CSS) **`flex-direction`** définit la façon dont les éléments flexibles sont placés dans le conteneur flexible, en définissant l'axe principal et la direction (normale ou inversée).

{{InteractiveExample("Démonstration CSS&nbsp;: flex-direction")}}

```css interactive-example-choice
flex-direction: row;
```

```css interactive-example-choice
flex-direction: row-reverse;
```

```css interactive-example-choice
flex-direction: column;
```

```css interactive-example-choice
flex-direction: column-reverse;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Élément Un</div>
    <div>Élément Deux</div>
    <div>Élément Trois</div>
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
}

#example-element > div {
  background-color: rgb(0 0 255 / 0.2);
  border: 3px solid blue;
  width: 60px;
  margin: 10px;
}
```

## Syntaxe

```css
/* Valeurs avec un mot-clé */
flex-direction: row;
flex-direction: row-reverse;
flex-direction: column;
flex-direction: column-reverse;

/* Valeurs globales */
flex-direction: inherit;
flex-direction: initial;
flex-direction: revert;
flex-direction: revert-layer;
flex-direction: unset;
```

### Valeurs

Cette propriété est définie par l'un des mots-clés suivants&nbsp;:

- `row`
  - : Définit l'axe principal du conteneur flex pour qu'il soit le même que la direction du texte. C'est la valeur par défaut.
- `row-reverse`
  - : Se comporte de la même manière que `row` mais définit que la direction du contenu est inversée, le premier élément étant placé au bord de fin en incise.
- `column`
  - : Définit l'axe principal du conteneur flexible comme étant identique à l'axe de bloc.
- `column-reverse`
  - : Se comporte de la même manière que `column`, mais définit un sens de contenu inversé, le premier élément étant placé au bord de fin de bloc.

## Description

La propriété `flex-direction` permet de définir la manière dont les éléments flexibles sont placés dans un conteneur flexible, en définissant l'axe principal du conteneur et la direction des éléments flexibles. Cette propriété s'applique uniquement aux éléments conteneurs dont la propriété {{CSSxRef("display")}} est définie sur `flex` ou `inline-flex`. La propriété `flex-direction`, associée à la propriété {{CSSxRef("flex-wrap")}}, doit être définie à l'aide de la forme raccourcie {{CSSxRef("flex-flow")}}.

Lorsqu'elle est définie sur un conteneur flexible, la propriété `flex-direction` définit si les éléments flexibles sont disposés dans la même direction ou perpendiculairement à la direction du texte, et si les éléments sont disposés normalement ou inversés.

La valeur par défaut est `row`. Par défaut, ou lorsque `row` est explicitement défini, l'axe principal du conteneur flexible est défini comme étant le même que la direction du texte. Le premier élément flexible dans l'ordre du DOM est placé aux bords de début en incise et de début de bloc. Les éléments supplémentaires sont placés au bord de fin en incise de l'élément précédent. Les lignes supplémentaires, si le conteneur est défini pour s'enrouler avec `flex-wrap: wrap`, sont ajoutées au bord de fin de bloc. Les points **main-start** et **main-end** sont les mêmes que la direction du contenu, main-start étant le bord de début en incise et main-end étant le bord de fin en incise, et cross-start et cross-end étant respectivement les bords de début et de fin de bloc.

La valeur `row-reverse` est utilisée pour changer la direction en incise, se comportant comme `row`, mais inversée. Le premier élément est placé aux bords de fin en incise et de début de bloc, les éléments flexibles suivants étant placés au bord de début en incise de l'élément précédent, et les lignes supplémentaires ajoutées au bord de fin de bloc. Les points main-start et main-end sont les mêmes que les bords de fin en incise et de début en incise du mode d'écriture, respectivement, et cross-start et cross-end sont respectivement les bords de début et de fin de bloc.

Lorsque `flex-direction` est défini sur `column`, l'axe principal est l'axe de bloc. Comme pour `row`, le premier élément est placé aux bords de début en incise et de début de bloc, mais les éléments supplémentaires sont placés au bord de fin de bloc de l'élément précédent plutôt qu'au bord en incise. Si le conteneur est défini pour s'enrouler, des colonnes supplémentaires sont ajoutées au bord de fin en incise. Les points **main-start** et **main-end** sont basés sur la direction de bloc du mode d'écriture, main-start étant le bord de début de bloc et main-end étant le bord de fin de bloc, et cross-start et cross-end étant respectivement les bords de début et de fin en incise.

Avec `column-reverse`, l'axe principal est l'axe de bloc, mais en commençant au bord de fin de bloc. Le premier élément est placé aux bords de début en incise et de fin de bloc, les éléments suivants étant placés au bord de début de bloc de l'élément précédent. Si le conteneur est défini pour s'enrouler, des colonnes supplémentaires sont ajoutées au bord de fin en incise. Les points **main-start** et **main-end** sont basés sur la direction de bloc du mode d'écriture, main-start étant le bord de fin de bloc et main-end étant le bord de début de bloc, et cross-start et cross-end étant respectivement les bords de début et de fin en incise.

Les valeurs `row` et `row-reverse` sont affectées par la direction du conteneur flexible. Si son attribut [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) est `ltr`, `row` représente l'axe horizontal orienté de la gauche vers la droite, et `row-reverse` de la droite vers la gauche&nbsp;; si l'attribut `dir` est `rtl`, `row` représente l'axe orienté de la droite vers la gauche, et `row-reverse` de la gauche vers la droite.

## Accessibilité

Lorsqu'on utilise `flex-direction` avec les valeurs `row-reverse` ou `column-reverse`, on crée une déconnexion entre la présentation visuelle du contenu et l'ordre du DOM. Cela a un impact négatif sur l'expérience des utilisateur·ice·s malvoyant·e·s qui naviguent sur la page à l'aide de technologies d'assistance telles qu'un lecteur d'écran. Si l'ordre visuel est important, les utilisateur·ice·s de lecteurs d'écran n'ont pas accès à l'ordre correct pour la lecture.

- [L'importance de l'ordre de la source <sup>(angl.)</sup>](https://adrianroselli.com/2015/09/source-order-matters.html) par Adrian Roselli (2015)
- [Les boîtes flexibles et la déconnexion par rapport à la navigation au clavier <sup>(angl.)</sup>](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/) par Léonie Watson (2016)
- [Comprendre la norme SC 1.3.2&nbsp;: Séquence significative <sup>(angl.)</sup>](https://www.w3.org/WAI/WCAG22/Understanding/meaningful-sequence) sur WCAG 2.2 (2023)

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Inverser les colonnes et les lignes du conteneur flexible

#### HTML

```html
<h4>Un exemple avec column-reverse</h4>
<div id="col-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
<h4>Un exemple avec row-reverse</h4>
<div id="row-rev" class="content">
  <div class="box red">A</div>
  <div class="box lightblue">B</div>
  <div class="box yellow">C</div>
</div>
```

#### CSS

```css
.content {
  width: 200px;
  height: 200px;
  border: 1px solid #c3c3c3;
  display: flex;
}

.box {
  width: 50px;
  height: 50px;
}

#col-rev {
  flex-direction: column-reverse;
}

#row-rev {
  flex-direction: row-reverse;
}

.red {
  background-color: red;
}

.lightblue {
  background-color: lightblue;
}

.yellow {
  background-color: yellow;
}
```

### Résultat

{{EmbedLiveSample("Inverser les colonnes et les lignes du conteneur flexible", "", 550)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("flex-flow")}}
- La propriété {{CSSxRef("flex-wrap")}}
- La propriété {{CSSxRef("gap")}}
- [Les concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Ordonner les éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Ordering_items)
- Le module [de modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
