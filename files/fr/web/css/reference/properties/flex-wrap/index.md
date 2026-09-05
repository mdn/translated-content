---
title: Propriété CSS `flex-wrap`
short-title: flex-wrap
slug: Web/CSS/Reference/Properties/flex-wrap
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

La propriété [CSS](/fr/docs/Web/CSS) **`flex-wrap`** définit si les éléments flexibles sont forcés sur une seule ligne ou peuvent passer à la ligne sur plusieurs lignes. Si le retour à la ligne est autorisé, elle définit la direction dans laquelle les lignes sont empilées.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-wrap")}}

```css interactive-example-choice
flex-wrap: nowrap;
```

```css interactive-example-choice
flex-wrap: wrap;
```

```css interactive-example-choice
flex-wrap: wrap-reverse;
```

```css interactive-example-choice
flex-wrap: wrap balance;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    <div>Élément Un</div>
    <div>Élément Deux</div>
    <div>Élément Trois</div>
    <div>Élément Quatre</div>
    <div>Élément Cinq</div>
    <div>Élément Six</div>
    <div>Élément Sept</div>
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

La propriété raccourcie {{CSSxRef("flex-flow")}} permet de définir à la fois les propriétés {{CSSxRef("flex-direction")}} et `flex-wrap`, qui définissent respectivement les axes principal et transversal du conteneur flexible.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
flex-wrap: nowrap;
flex-wrap: wrap;
flex-wrap: wrap-reverse;
flex-wrap: balance;
flex-wrap: wrap balance;
flex-wrap: balance wrap-reverse;

/* Valeurs globales */
flex-wrap: inherit;
flex-wrap: initial;
flex-wrap: revert;
flex-wrap: revert-layer;
flex-wrap: unset;
```

### Valeurs

Cette propriété est définie comme une seule valeur parmi la liste suivante ou comme deux valeurs séparées par un espace lorsqu'on utilise `balance`&nbsp;:

- `nowrap`
  - : Les éléments flexibles sont disposés sur une seule ligne, ce qui peut entraîner un dépassement du conteneur flexible. Il s'agit de la valeur initiale.
- `wrap`
  - : Les éléments flexibles peuvent passer à la ligne sur plusieurs lignes.
- `wrap-reverse`
  - : Se comporte de la même manière que `wrap`, mais avec les lignes disposées dans l'ordre inverse.
- `balance`
  - : Définit que les éléments flexibles répartis sur plusieurs lignes sont distribués de manière à ce que les longueurs des lignes soient aussi similaires que possible. Si `balance` est défini comme seul mot-clé, l'autre mot-clé par défaut est `wrap`.

## Description

La propriété `flex-wrap` est utilisée pour définir si les éléments flexibles enfants du conteneur flexible peuvent passer sur plusieurs lignes flexibles ou non et, si elle est définie sur `wrap`, si les enfants doivent être répartis de manière uniforme sur les lignes flexibles.

La valeur initiale de `nowrap` définit que tous les éléments doivent être disposés sur une seule ligne flexible, ce qui peut entraîner un dépassement du conteneur. Les mots-clés `wrap` et `wrap-reverse` empêchent le dépassement en définissant que les éléments flexibles peuvent s'écouler, ou passer, sur plusieurs lignes.

Avec `wrap`, le début de l'axe transversal est l'équivalent de [`inline-start` ou `block-start`](/fr/docs/Glossary/Flow_relative_values), en fonction de la valeur de {{CSSxRef("flex-direction")}} et du [mode d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes) actuel. Avec `wrap-reverse`, le début de l'axe transversal est l'équivalent de `inline-end` ou `block-end`.

### Équilibrer la distribution des éléments flexibles

Par défaut, lorsque `wrap` ou `wrap-reverse` est défini chaque ligne flexible est remplie avec des éléments flexibles avant que les éléments ne passent à la ligne suivante. Cela peut entraîner une distribution inégale des éléments, la dernière ligne flexible étant composée de moins d'éléments. Si les valeurs de {{CSSxRef("flex-grow")}} de ces éléments sont non nulles, l'espace supplémentaire disponible est réparti entre ces quelques éléments, les rendant beaucoup plus grands que les éléments des lignes flexibles remplies.

Le mot-clé `balance` peut être utilisé pour répartir les éléments sur plusieurs lignes de manière plus uniforme. Facultativement, la propriété {{CSSxRef("flex-line-count")}} peut être utilisée pour définir le nombre minimum de lignes sur lesquelles les éléments équilibrés doivent être répartis.

Si `balance` est le seul mot-clé défini, l'autre mot-clé par défaut est `wrap`.

Un conteneur flexible enveloppant équilibré peut avoir une valeur {{CSSxRef("flex-line-count")}} appliquée pour définir le nombre minimum de lignes sur lesquelles les éléments flexibles doivent être répartis. La propriété `flex-line-count` n'a aucun effet si `balance` n'est pas défini dans `flex-wrap`.

Si `balance` est défini en même temps que `nowrap`, la propriété n'est pas valide.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les valeurs de retour à la ligne du conteneur flexible

#### HTML

```html live-sample___flex-wrap-values
<h4>Un exemple de <code>flex-wrap:wrap</code></h4>
<div class="contenu">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>

<h4>Un exemple de <code>flex-wrap:nowrap</code></h4>
<div class="contenu1">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>

<h4>Un exemple de <code>flex-wrap:wrap-reverse</code></h4>
<div class="contenu2">
  <div class="rouge">1</div>
  <div class="vert">2</div>
  <div class="bleu">3</div>
</div>
```

#### CSS

```css live-sample___flex-wrap-values
/* Styles communs */
.contenu,
.contenu1,
.contenu2 {
  color: white;
  font: 100 24px/100px sans-serif;
  height: 150px;
  width: 897px;
  text-align: center;
}

.contenu div,
.contenu1 div,
.contenu2 div {
  height: 50%;
  width: 300px;
}
.rouge {
  background: orangered;
}
.vert {
  background: yellowgreen;
}
.bleu {
  background: steelblue;
}

/* Styles pour les boîtes flexibles*/
.contenu {
  display: flex;
  flex-wrap: wrap;
}
.contenu1 {
  display: flex;
  flex-wrap: nowrap;
}
.contenu2 {
  display: flex;
  flex-wrap: wrap-reverse;
}
```

#### Résultat

{{EmbedLiveSample("flex-wrap-values", "100%", 700)}}

### Démonstration du mot-clé `balance`

Cet exemple montre les effets du mot-clé `balance` dans la propriété `flex-wrap` et des différentes valeurs de `flex-line-count`.

#### HTML

```html hidden live-sample___the-balance-keyword
<form>
  <div>
    <input type="checkbox" id="reverse" name="reverse" />
    <label for="reverse">Définir <code>wrap-reverse</code>&nbsp;?</label>
  </div>
  <div>
    <input type="checkbox" id="balance" name="balance" checked />
    <label for="balance">Définir <code>balance</code>&nbsp;?</label>
  </div>
  <div>
    <label for="line-count"><code>flex-line-count</code></label>
    <input
      type="range"
      id="line-count"
      name="line-count"
      min="1"
      max="12"
      value="3" />
    <output>3</output>
  </div>
</form>

<hr />

<p>
  Valeurs actuelles&nbsp;: <code>flex-wrap: wrap; flex-line-count: 3;</code>
</p>

<hr />
```

Nous incluons un conteneur {{HTMLElement("div")}} avec une `class` de `boite`, qui contient dix éléments enfants `<div>`.

```html live-sample___the-balance-keyword
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

Nous incluons également des contrôles pour modifier les fonctionnalités du conteneur flexible, notamment&nbsp;:

- Basculer `flex-wrap` entre les valeurs `wrap` et `wrap-reverse`.
- Activer et désactiver le mot-clé `balance`.
- Modifier la valeur de `flex-line-count`.

Nous avons masqué le code HTML et JavaScript par souci de concision.

#### CSS

Nous appliquons `display: flex` à `.boite` pour le transformer en conteneur flexible, puis définissons des valeurs de `flex-wrap` et de `flex-line-count` afin que les éléments enfants flexibles se répartissent uniformément sur au moins trois lignes flexibles. Vous pouvez modifier les valeurs dans la démonstration interactive. Nous définissons également une valeur de {{CSSxRef("flex")}} égale à `1 1 150px` sur les éléments enfants flexibles afin qu'ils aient une largeur de base de `150px`, l'espace restant étant réparti uniformément entre les éléments de la même ligne flexible.

```css live-sample___the-balance-keyword
.boite {
  display: flex;
  flex-wrap: wrap balance;
  flex-line-count: 3;
}

.boite > * {
  flex: 1 1 150px;
}
```

```css hidden live-sample___the-balance-keyword
.boite {
  width: 100%;
  border: 2px dotted rgb(96 139 168);
  gap: 10px;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-wrap: balance) {
  body::before {
    content: "Votre navigateur ne prend pas en charge flex-wrap: balance.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

Nous avons masqué le reste du code CSS par souci de concision.

```js hidden live-sample___the-balance-keyword
const elementBoite = document.querySelector(".boite");
const elementSortie = document.querySelector("output");
const elementCodeP = document.querySelector("p code");
const entreeInversee = document.getElementById("reverse");
const entreeEquilibree = document.getElementById("balance");
const entreeCompteLigne = document.getElementById("line-count");

let valeurWrap = "wrap";
let valeurCompteLignes = "3";

function mettreAJourValeursActuelles() {
  elementCodeP.textContent = `flex-wrap: ${valeurWrap}; flex-line-count: ${valeurCompteLignes};`;
}

function definirRetourLigne() {
  valeurWrap = "";
  if (entreeInversee.checked) {
    valeurWrap += "wrap-reverse";
  } else {
    valeurWrap += "wrap";
  }

  if (entreeEquilibree.checked) {
    valeurWrap += " balance";
  }

  elementBoite.style.flexWrap = valeurWrap;
  mettreAJourValeursActuelles();
}

function definirNombreLignes() {
  valeurCompteLignes = entreeCompteLigne.value;
  elementBoite.style.flexLineCount = valeurCompteLignes;
  elementSortie.textContent = valeurCompteLignes;
  mettreAJourValeursActuelles();
}

entreeInversee.addEventListener("change", definirRetourLigne);
entreeEquilibree.addEventListener("change", definirRetourLigne);
entreeCompteLigne.addEventListener("input", definirNombreLignes);
```

#### Résultats

{{EmbedLiveSample("the-balance-keyword", "100%", 400)}}

Modifiez les paramètres des contrôles du formulaire pour voir leur effet sur le résultat. Notez que&nbsp;:

- Basculer entre `wrap` et `wrap-reverse` modifie la direction dans laquelle les lignes flexibles sont disposées le long de l'axe transversal.
- Définir `balance` répartit uniformément les éléments flexibles sur les lignes flexibles disponibles.
- Modifier la valeur de `flex-line-count` modifie le nombre minimal de lignes sur lesquelles les éléments sont répartis. La propriété `flex-line-count`, et donc le curseur, n'a aucun effet si `balance` n'est pas coché.
- Comme les éléments flexibles sont répartis par défaut sur quatre lignes flexibles, définir `flex-line-count` sur une valeur inférieure à `5` n'a aucun effet. Les valeurs de `5` à `10` ajoutent une ligne flexible supplémentaire.
- Comme il y a 10 éléments flexibles, les valeurs de `flex-line-count` supérieures ou égales à `10` ont toutes le même effet — un élément est placé sur chacune des 10 lignes flexibles.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flex-direction")}}
- La propriété raccourcie {{CSSxRef("flex-flow")}}
- [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Maîtriser le retour à la ligne des éléments flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items)
- Le module [du modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
