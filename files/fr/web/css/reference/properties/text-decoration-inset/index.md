---
title: Propriété CSS `text-decoration-inset`
short-title: text-decoration-inset
slug: Web/CSS/Reference/Properties/text-decoration-inset
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`text-decoration-inset`** permet d'ajuster les points de départ et de fin de la décoration de texte d'un élément afin qu'elle puisse être raccourcie, allongée ou déplacée par rapport au texte rendu.

{{InteractiveExample("Démonstration CSS&nbsp;: text-decoration-inset")}}

```css interactive-example-choice
text-decoration-inset: 20px;
```

```css interactive-example-choice
text-decoration-inset: -0.5em;
```

```css interactive-example-choice
text-decoration-inset: 20px 1em;
```

```css interactive-example-choice
text-decoration-inset: -0.5rem -1.5rem;
```

```css interactive-example-choice
text-decoration-inset: -2ex 10vw;
```

```html interactive-example
<section id="default-example">
  <p id="example-element">Karmadrome</p>
</section>
```

```css interactive-example
#example-element {
  font: 2.5em sans-serif;
  text-decoration: underline 0.3em limegreen;
}
```

## Syntaxe

```css
/* Le mot-clé auto */
text-decoration-inset: auto;

/* Une valeur de type <length> */
text-decoration-inset: 20px;
text-decoration-inset: -2rem;

/* Deux valeurs de type <length> */
text-decoration-inset: 20px 1em;
text-decoration-inset: -0.5rem -1.5rem;
text-decoration-inset: -2ex 1vw;

/* Valeurs globales */
text-decoration-inset: inherit;
text-decoration-inset: initial;
text-decoration-inset: revert;
text-decoration-inset: revert-layer;
text-decoration-inset: unset;
```

### Valeurs

Une ou deux valeurs {{CSSxRef("&lt;length&gt;")}}, ou le mot-clé `auto`.

- {{CSSxRef("&lt;length&gt;")}}
  - : Définit la quantité de décalage de la décoration de texte. Les valeurs positives insèrent la décoration de texte (la rendent plus courte) tandis que les valeurs négatives la font ressortir (la rendent plus longue). Si une seule valeur est définie, elle s'applique aux points de départ et de fin de la décoration de texte. Si deux valeurs sont définies, la première s'applique au point de départ de la décoration de texte et la seconde au point de fin.
- `auto`
  - : Le navigateur choisit une quantité de décalage pour le début et la fin afin de s'assurer que, si deux boîtes de texte décorées apparaissent côte à côte, un espace est créé entre leurs décorations de texte afin qu'elles ne semblent pas avoir une seule décoration de texte.

## Description

Par défaut, la décoration de texte d'un élément, telle que définie par la propriété raccourcie {{CSSxRef("text-decoration")}} et les propriétés longues associées, a la même taille que le texte rendu.

La propriété `text-decoration-inset` permet d'ajuster les points de début et/ou de fin de la décoration de texte d'un conteneur de texte. Cela est utile pour créer des effets où vous souhaitez que la décoration de texte soit en retrait ou en saillie par rapport au texte lui-même, ou décalée en position. Voir [Cas d'utilisation simple](#cas_dutilisation_simple) pour un exemple de chaque.

Une seule valeur `<length>` définit le retrait (si positif) ou la saillie (si négatif) aux positions de début et de fin de la décoration de texte. Pour définir séparément les positions de début et de fin, vous pouvez utiliser deux valeurs `<length>` — la première s'applique à la position de début de la décoration de texte et la seconde à la fin.

La propriété `text-decoration-inset` peut aussi prendre le mot-clé `auto`. Cela fait en sorte que le navigateur décale les points de début et de fin de la décoration de texte pour garantir que, si deux boîtes de texte décorées apparaissent côte à côte, elles ne semblent pas avoir une seule décoration de texte. La valeur `auto` est particulièrement importante lors du rendu du texte chinois, où le soulignement est utilisé pour [ponctuer les noms propres <sup>(angl.)</sup>](https://www.w3.org/International/clreq/#id88), et les noms propres adjacents doivent avoir des soulignements séparés. Voir [Effet de la valeur `auto`](#effect_of_the_auto_value) pour un exemple.

La valeur `auto` n'a pas le même effet que la valeur initiale `0`. Définir `text-decoration-inset` à `0` fait qu'il n'y a pas d'espace entre les décorations.

La propriété `text-decoration-inset` n'est pas héritée et n'est pas une propriété constitutive de la propriété raccourcie {{CSSxRef("text-decoration")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Cas d'utilisation simple

Dans cet exemple, nous montrons les cas d'utilisation de saillie, de retrait et de «&nbsp;décalage&nbsp;».

#### HTML

Nous définissons une liste non ordonnée avec trois éléments de liste, chacun avec un `id` distinct.

```html live-sample___use-case-examples
<ul>
  <li id="one">Décoration en saillie</li>
  <li id="two">Décoration en retrait</li>
  <li id="three">Décoration décalée</li>
</ul>
```

#### CSS

Nous donnons à chaque élément de liste une {{CSSxRef("text-decoration")}} et une valeur différente de `text-decoration-inset`&nbsp;:

- Le premier a un soulignement épais vert citron, qui est en saillie de `10px` de chaque côté.
- Le second a une ligne médiane blanche de moyenne épaisseur, qui est en retrait de `0.5em` de chaque côté.
- Le troisième a un soulignement fin ondulé bleu, qui est décalé vers la droite de `1em`.

```css hidden live-sample___use-case-examples
li {
  font-family: sans-serif;
  font-size: 2em;
  margin-bottom: 20px;
}

@supports not (text-decoration-inset: auto) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété text-decoration-inset.";
    background-color: wheat;
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
}
```

```css live-sample___use-case-examples
#one {
  text-decoration: underline 0.3em limegreen;
  text-decoration-inset: -10px;
}

#two {
  text-decoration: line-through 5px white;
  text-decoration-inset: 0.5em;
}

#three {
  text-decoration: underline wavy 2px blue;
  text-decoration-inset: 1em -1em;
}
```

#### Résultat

Ceci s'affiche ainsi&nbsp;:

{{EmbedLiveSample("use-case-examples", "100%", "230")}}

### Effet de la valeur `auto`

Cet exemple montre l'effet de la valeur `text-decoration-inset: auto`.

#### HTML

Nous définissons deux groupes d'éléments HTML {{HTMLElement("u")}} côte à côte&nbsp;:

```html live-sample___auto-example
<p lang="zh" id="one"><u>石井</u><u>艾俐俐</u></p>

<p lang="zh" id="two"><u>石井</u><u>艾俐俐</u></p>
```

#### CSS

Chaque élément `<u>` a une couleur `red` et une épaisseur de `3px` appliquées à son soulignement. Le premier groupe d'éléments `<u>` a une valeur `text-decoration-inset` de `auto`, tandis que le second groupe a explicitement la valeur initiale `text-decoration-inset` de `0`, à des fins de comparaison&nbsp;:

```css hidden live-sample___auto-example
u {
  font-family: sans-serif;
  font-size: 2em;
}

@supports not (text-decoration-inset: auto) {
  body::before {
    content: "Votre navigateur ne prend pas en charge la propriété text-decoration-inset.";
    background-color: wheat;
    display: block;
    padding: 10px 0;
    width: 100%;
    text-align: center;
  }
}
```

```css live-sample___auto-example
u {
  text-decoration-color: red;
  text-decoration-thickness: 3px;
}

#one u {
  text-decoration-inset: auto;
}

#two u {
  text-decoration-inset: 0;
}
```

#### Résultat

Ceci s'affiche ainsi&nbsp;:

{{EmbedLiveSample("auto-example", "100%", "200")}}

Notez comment la valeur `auto` décale subtilement la décoration de texte des deux côtés, créant un espace entre les soulignements des deux éléments (aucun espace n'est ajouté entre les deux éléments eux-mêmes). La valeur `0` n'ajoute aucun espace.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("text-decoration")}}
- Le module [de décoration de texte CSS](/fr/docs/Web/CSS/Guides/Text_decoration)
