---
title: initial-letter
slug: Web/CSS/Reference/Properties/initial-letter
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`initial-letter`** définit la taille et l'enfoncement des lettrines descendantes, montantes et enfoncées. Cette propriété s'applique aux pseudo-éléments {{CSSxRef("::first-letter")}} et aux premiers enfants en ligne des conteneurs de bloc.

```css
initial-letter: normal;

/* Une valeur */
initial-letter: 3; /* 3 lignes de hauteur, ligne de base à la ligne 3 */
initial-letter: 1.5; /* 1.5 lignes de hauteur, ligne de base à la ligne 2 */

/* Deux valeurs */
initial-letter: 3 2; /* 3 lignes de hauteur, ligne de base à la ligne 2 (relevée d'une ligne) */
initial-letter: 3 1; /* 3 lignes de hauteur, ligne de base inchangée (relevée de 2 lignes) */

/* Valeurs globales */
initial-letter: inherit;
initial-letter: initial;
initial-letter: revert;
initial-letter: revert-layer;
initial-letter: unset;
```

## Syntaxe

La valeur de cette propriété peut être le mot-clé `normal` ou un nombre (`<number>`) éventuellement suivi d'un entier (`<integer>`).

### Valeurs

- `normal`
  - : Le texte se comporte de façon normale et on n'a pas de lettrines.
- `<number>`
  - : Cet argument définit le facteur de taille appliqué pour calculer la taille de la première lettre par rapport à la taille de la ligne du texte. Les valeurs négatives ne sont pas autorisées.
- `<integer>`
  - : Cet argument définit le nombre de lignes dont s'enfoncera la lettrine vers le bas. La valeur utilisée doit être supérieure à 0. Si cet argument est absent, on dupliquera la valeur du premier argument, arrondi vers le bas à l'entier positif le plus proche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la taille de la lettrine

#### HTML

```html
<p class="normal">La lettrine est normale</p>
<p class="onefive">La lettrine occupe 1 ligne et demie</p>
<p class="three">La lettrine occupe 3 lignes</p>
```

#### CSS

```css
.normal::first-letter {
  -webkit-initial-letter: normal;
  initial-letter: normal;
}

.onefive::first-letter {
  -webkit-initial-letter: 1.5;
  initial-letter: 1.5;
}

.three::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}

p {
  outline: 1px dashed red;
}
```

#### Résultat

{{EmbedLiveSample("Définir la taille de la lettrine", 250, 180)}}

### Définir la valeur d'enfoncement

Dans cet exemple, toutes les lettrines ont la même taille, mais avec différentes valeurs d'enfoncement.

#### HTML

```html
<p class="four">Lettrine&nbsp;: valeur d'enfoncement = 4</p>
<p class="same">
  Lettrine&nbsp;: valeur d'enfoncement non déclarée (identique à la taille)
</p>
<p class="two">Lettrine&nbsp;: valeur d'enfoncement = 2</p>
<p class="one">Lettrine&nbsp;: valeur d'enfoncement = 1</p>
```

#### CSS

```css
.four::first-letter {
  -webkit-initial-letter: 3 4;
  initial-letter: 3 4;
}

.same::first-letter {
  -webkit-initial-letter: 3;
  initial-letter: 3;
}

.two::first-letter {
  -webkit-initial-letter: 3 2;
  initial-letter: 3 2;
}

.one::first-letter {
  -webkit-initial-letter: 3 1;
  initial-letter: 3 1;
}

p {
  outline: 1px dashed red;
}
```

#### Résultat

{{EmbedLiveSample("Définir la valeur d'enfoncement", 250, 240)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le pseudo-élément {{CSSxRef("::first-letter")}}
- La pseudo-classe {{CSSxRef(":first-child")}}
- [Lettrines en CSS <sup>(angl.)</sup>](https://www.oddbird.net/2017/01/03/initial-letter/) sur Oddbird (2017)
