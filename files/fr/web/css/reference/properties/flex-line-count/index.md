---
title: Propriété CSS `flex-line-count`
short-title: flex-line-count
slug: Web/CSS/Reference/Properties/flex-line-count
l10n:
  sourceCommit: e5cd1cab36e2fdcf5dfe28e10b0a7cb235354e62
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`flex-line-count`** définit le nombre minimum de lignes flexibles sur lesquelles les éléments flexibles sont équilibrés dans les cas où la propriété {{CSSxRef("flex-wrap")}} ou {{CSSxRef("flex-flow")}} d'un conteneur flexible inclut le mot-clé `balance`.

{{InteractiveExample("Démonstration CSS&nbsp;: flex-line-count")}}

```css interactive-example-choice
flex-line-count: 1;
```

```css interactive-example-choice
flex-line-count: 3;
```

```css interactive-example-choice
flex-line-count: 4;
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
  </div>
</section>
```

```css interactive-example
#example-element {
  border: 1px solid #c5c5c5;
  width: 80%;
  display: flex;
  flex-wrap: wrap balance;
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
/* Valeurs entières */
flex-line-count: 1;
flex-line-count: 3;
flex-line-count: 12;

/* Valeurs globales */
flex-line-count: inherit;
flex-line-count: initial;
flex-line-count: revert;
flex-line-count: revert-layer;
flex-line-count: unset;
```

### Valeurs

Cette propriété est définie avec la valeur suivante&nbsp;:

- {{CSSxRef("&lt;integer&gt;")}}
  - : Un entier positif définissant le nombre minimum de lignes flexibles sur lesquelles les éléments flexibles équilibrés et enveloppés sont répartis. La valeur par défaut est `1`.

## Description

La propriété `flex-line-count` définit le nombre minimum de lignes flexibles sur lesquelles les éléments flexibles sont répartis dans les conteneurs flexibles équilibrés et enveloppants — en d'autres termes, les conteneurs flexibles qui incluent une propriété {{CSSxRef("flex-wrap")}} ou {{CSSxRef("flex-flow")}} avec le mot-clé `balance` défini en plus du mot-clé `wrap` ou `wrap-reverse`.

Un cas d'utilisation clé de `flex-line-count` est la création d'un ensemble équilibré de deux (ou plus) colonnes, quel que soit le nombre d'éléments dans une liste. Dans de tels cas, définir une {{CSSxRef("height")}} ou {{CSSxRef("max-height")}} explicite ne fonctionne pas, car vous ne savez pas combien de contenu vous avez, et vous risquez de vous retrouver avec moins ou plus de colonnes que souhaité. Voir [Créer des colonnes équilibrées](#créer_des_colonnes_équilibrées) pour un exemple d'implémentation.

Si `balance` n'est pas défini, ou si les éléments flexibles ne sont pas configurés pour s'enrouler sur plusieurs lignes flexibles, la propriété `flex-line-count` n'a aucun effet.

Si la valeur de `flex-line-count` est égale ou supérieure au nombre d'éléments flexibles, il y a un élément flexible par ligne flexible.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Effet des différentes valeurs de `flex-line-count`

Cet exemple démontre les effets de différentes valeurs de `flex-line-count` sur quatre boîtes.

#### HTML

Nous incluons quatre conteneurs {{HTMLElement("div")}}, chacun avec une `class` de `boite` et dix `<div>` enfants&nbsp;; chaque conteneur `<div>` a une valeur `id` différente.

```html
<div class="boite" id="boite-sans-equilibre">
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

<div class="boite" id="boite1">...</div>
<div class="boite" id="boite2">...</div>
<div class="boite" id="boite3">...</div>
```

```html hidden live-sample___flex-line-count
<p>Pas d'équilibre (<code>balance</code>)</p>

<div class="boite" id="boite-sans-equilibre">
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

<p><code>flex-line-count: 3</code></p>

<div class="boite" id="boite1">
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

<p><code>flex-line-count: 4</code></p>

<div class="boite" id="boite2">
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

<p><code>flex-line-count: 5</code></p>

<div class="boite" id="boite3">
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

#### CSS

```css hidden live-sample___flex-line-count
* {
  box-sizing: border-box;
}

.boite {
  width: 100%;
  border: 2px dotted gray;
  margin-bottom: 20px;
  gap: 10px;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: lightgray;
}
```

Nous appliquons `display: flex` à toutes les boîtes pour en faire des conteneurs flexibles, puis nous leur donnons une valeur `flex-wrap` de `wrap balance` pour que tous leurs enfants flex se répartissent sur plusieurs lignes équilibrées.

```css live-sample___flex-line-count
.boite {
  display: flex;
  flex-wrap: wrap balance;
}
```

Nous appliquons également une valeur {{CSSxRef("flex")}} de `1 1 150px` aux enfants flexibles, afin qu'ils aient une largeur de base de `150px` et qu'ils distribuent tout espace excédentaire de manière uniforme entre les éléments de chaque ligne flexible.

```css live-sample___flex-line-count
.boite > * {
  flex: 1 1 150px;
}
```

Pour le conteneur flexible `#boite-sans-equilibre`, nous supprimons l'équilibrage, annulant ainsi le nombre de lignes, en remplaçant la valeur originale `flex-wrap: wrap balance` par `wrap`. Nous appliquons différentes valeurs de `flex-line-count` à chaque conteneur flexible, en les incrémentant afin que leurs enfants soient disposés sur un nombre de lignes flexibles progressivement plus grand.

```css live-sample___flex-line-count
#boite-sans-equilibre {
  flex-line-count: 6;
  flex-wrap: wrap;
}

#boite1 {
  flex-line-count: 3;
}

#boite2 {
  flex-line-count: 4;
}

#boite3 {
  flex-line-count: 5;
}
```

Nous avons masqué le reste du CSS par souci de concision.

#### Résultats

{{EmbedLiveSample("flex-line-count", "100%", 700)}}

Notez les points suivants&nbsp;:

- Comme le premier conteneur flexible n'a pas le mot-clé `balance` défini dans sa valeur `flex-wrap`, ses enfants ne reçoivent pas une distribution équilibrée et sa valeur `flex-line-count` est ignorée.
- La déclaration `flex-line-count: 3` du deuxième conteneur flexible n'a pas d'effet sur la disposition des enfants flexibles&nbsp;; comme les éléments flex sont par défaut répartis sur quatre lignes flexibles, toute valeur de `4` ou moins n'a aucun effet.

### Créer des colonnes équilibrées

Cet exemple montre comment `flex-line-count` peut être utilisé pour créer un ensemble équilibré de deux colonnes.

#### HTML

Nous incluons un élément HTML {{HTMLElement("ol")}} contenant dix éléments HTML {{HTMLElement("li")}}.

```html
<ol>
  <li>
    <a href="#">Le cartographe silencieux</a>, publié par Meridian House, sorti
    le 12 mars 2014.
  </li>
  <li>
    <a href="#">Échos du champ en jachère</a>, publié par Northbridge Press,
    sorti le 4 juillet 2009.
  </li>

  …
</ol>
```

```html hidden live-sample___balanced-columns
<ol>
  <li>
    <a href="#">Le cartographe silencieux</a>, publié par Meridian House, sorti
    le 12 mars 2014.
  </li>
  <li>
    <a href="#">Échos du champ en jachère</a>, publié par Northbridge Press,
    sorti le 4 juillet 2009.
  </li>
  <li>
    <a href="#">Un registre de petits regrets</a>, publié par Ashwood & Kline,
    sorti le 21 novembre 2017.
  </li>
  <li>
    <a href="#">L'ombre de la fille de l'horloger</a>, publié par Hollow Pine
    Publishing, sorti le 8 février 2011.
  </li>
  <li>
    <a href="#">Sel et signal</a>, publié par Redcliffe Editions, sorti le 30
    septembre 2019.
  </li>
  <li>
    <a href="#">Sous un ciel emprunté</a>, publié par Fenwick & Marsh, sorti le
    16 mai 2006.
  </li>
  <li>
    <a href="#">Le dernier cartel de l'hiver</a>, publié par Graywolf Bindery,
    sorti le 2 janvier 2021.
  </li>
  <li>
    <a href="#">Notes d'un atlas inachevé</a>, publié par Coastline Books, sorti
    le 27 juin 2013.
  </li>
  <li>
    <a href="#">Le poids des pièces vides</a>, publié par Draymoor House, sorti
    le 15 octobre 2008.
  </li>
  <li>
    <a href="#">Une brève histoire de presque tout le monde</a>, publié par
    Ferngate Press, sorti le 9 avril 2022.
  </li>
</ol>
```

#### CSS

Nous définissons la propriété {{CSSxRef("display")}} de la liste sur `flex`. Nous définissons une valeur {{CSSxRef("flex-direction")}} de `column` et une valeur {{CSSxRef("flex-wrap")}} de `balance` en utilisant le raccourci {{CSSxRef("flex-flow")}} afin que les lignes flexibles soient disposées en colonnes et s'équilibrent lorsqu'elles sont enveloppées. La valeur {{CSSxRef("gap")}} `10px 40px` définit un écart de `10px` entre les éléments flexibles dans chaque colonne et de `40px` entre les lignes flexibles.

Enfin, nous définissons une valeur {{CSSxRef("flex-line-count")}} de `2`, ce qui signifie que, même si aucune hauteur fixe n'est définie sur la liste, son contenu est toujours réparti sur deux colonnes équilibrées, quel que soit le volume de contenu inclus.

```css live-sample___balanced-columns
ol {
  display: flex;
  gap: 10px 40px;
  flex-flow: column balance;
  flex-line-count: 2;
}
```

```css hidden live-sample___flex-line-count live-sample___balanced-columns
* {
  box-sizing: border-box;
}

body {
  padding: 10px 30px;
}

@supports not (flex-line-count: 3) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété flex-line-count.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

Nous avons masqué le reste du CSS pour plus de concision.

#### Résultats

{{EmbedLiveSample("balanced-columns", "100%", 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("flex-wrap")}}
- La propriété raccourcie {{CSSxRef("flex-flow")}}
- [Les concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts)
- [Maîtriser l'enveloppement des éléments flexibles > Enveloppement équilibré](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Wrapping_items#enveloppement_équilibré)
- Le module [de mise en page flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
