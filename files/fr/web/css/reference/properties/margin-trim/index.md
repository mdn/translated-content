---
title: margin-trim
slug: Web/CSS/Reference/Properties/margin-trim
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`margin-trim`** permet à un conteneur de rogner les marges de ses éléments enfants qui sont adjacentes aux bords du conteneur.

## Syntaxe

```css
margin-trim: none;
margin-trim: block;
margin-trim: block-start;
margin-trim: block-end;
margin-trim: inline;
margin-trim: inline-start;
margin-trim: inline-end;

/* Valeurs globales */
margin-trim: inherit;
margin-trim: initial;
margin-trim: revert;
margin-trim: revert-layer;
margin-trim: unset;
```

### Valeurs

- `none` {{Experimental_Inline}}
  - : Les marges ne sont pas rognées par le conteneur.

- `block` {{Experimental_Inline}}
  - : Les marges des enfants de type bloc qui sont adjacentes aux bords du conteneur sont rognées à zéro sans affecter les marges du conteneur lui-même.

- `block-start` {{Experimental_Inline}}
  - : La marge du premier enfant de type bloc avec le bord du conteneur est rognée à zéro.

- `block-end` {{Experimental_Inline}}
  - : La marge du dernier enfant de type bloc avec le bord du conteneur est rognée à zéro.

- `inline` {{Experimental_Inline}}
  - : Les marges des enfants en ligne qui sont adjacentes aux bords du conteneur sont rognées à zéro, sans affecter l'espacement au début et à la fin de la ligne.

- `inline-start` {{Experimental_Inline}}
  - : La marge entre le bord du conteneur et le premier enfant en ligne est rognée à zéro.

- `inline-end` {{Experimental_Inline}}
  - : La marge entre le bord du conteneur et le dernier enfant en ligne est rognée à zéro.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

Une fois la prise en charge de cette propriété implémentée, elle fonctionnera probablement ainsi&nbsp;:

Lorsque vous avez un conteneur avec des enfants en ligne et que vous souhaitez mettre une marge entre chaque enfant sans que cela n'interfère avec l'espacement à la fin de la ligne, vous pourriez faire quelque chose comme ceci&nbsp;:

```css
article {
  background-color: red;
  margin: 20px;
  padding: 20px;
  display: inline-block;
}

article > span {
  background-color: black;
  color: white;
  text-align: center;
  padding: 10px;
  margin-right: 20px;
  margin-left: 30px;
}
```

Le problème ici est que vous vous retrouveriez avec 20px de trop à droite de la ligne, donc vous pourriez faire ceci pour corriger&nbsp;:

```css
span:last-child {
  margin-right: 0;
  margin-left: 0;
}
```

C'est pénible d'avoir à écrire une autre règle pour obtenir ce résultat, et ce n'est pas très flexible. À la place, `margin-trim` pourrait corriger cela&nbsp;:

```css
article {
  margin-trim: inline-end;
  /* … */
}
```

De même, pour supprimer la marge gauche avec le bord du conteneur&nbsp;:

```css
article {
  margin-trim: inline-start;
  /* … */
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{CSSxRef("margin")}}
