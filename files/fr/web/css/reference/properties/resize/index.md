---
title: resize
slug: Web/CSS/Reference/Properties/resize
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`resize`** définit si un élément est redimensionnable, et si oui, dans quelles directions.

{{InteractiveExample("Démonstration CSS&nbsp;: resize")}}

```css interactive-example-choice
resize: both;
```

```css interactive-example-choice
resize: horizontal;
```

```css interactive-example-choice
resize: vertical;
```

```css interactive-example-choice
resize: none;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div id="example-element">Essayez de redimensionner cet élément.</div>
</section>
```

```css interactive-example
#example-element {
  background: linear-gradient(135deg, cyan 0%, cyan 94%, white 95%);
  border: 3px solid #c5c5c5;
  overflow: auto;
  width: 250px;
  height: 250px;
  font-weight: bold;
  color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
}
```

`resize` ne s'applique pas aux éléments suivants&nbsp;:

- Éléments en ligne
- Éléments de bloc pour lesquels la propriété {{CSSxRef("overflow")}} est définie sur `visible` ou `clip`

## Syntaxe

```css
/* Valeurs avec un mot-clé */
resize: none;
resize: both;
resize: horizontal;
resize: vertical;
resize: block;
resize: inline;

/* Valeurs globales */
resize: inherit;
resize: initial;
resize: revert;
resize: revert-layer;
resize: unset;
```

La propriété `resize` peut être définie avec l'un des mots-clés suivants.

### Valeurs

- `none`
  - : L'élément n'offre aucune méthode à l'utilisateur·ice pour que celui-ci le redimensionne.
- `both`
  - : L'élément affiche un mécanisme afin que l'utilisateur·ice puisse le redimensionner, horizontalement et verticalement.
- `horizontal`
  - : L'élément affiche un mécanisme afin que l'utilisateur·ice puisse le redimensionner dans la direction _horizontale_.
- `vertical`
  - : L'élément affiche un mécanisme afin que l'utilisateur·ice puisse le redimensionner dans la direction _verticale_.
- `block`
  - : L'élément affiche un mécanisme afin que l'utilisateur·ice puisse le redimensionner dans la direction _bloc_ (soit horizontalement, soit verticalement, en fonction de la valeur de {{CSSxRef("writing-mode")}} et de {{CSSxRef("direction")}}).
- `inline`
  - : L'élément affiche un mécanisme afin que l'utilisateur·ice puisse le redimensionner dans la direction _en ligne_ (soit horizontalement, soit verticalement, en fonction de la valeur de {{CSSxRef("writing-mode")}} et de {{CSSxRef("direction")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Désactiver le redimensionnement des éléments `textarea`

Dans de nombreux navigateurs, les éléments HTML {{HTMLElement("textarea")}} peuvent être redimensionnés par défaut. Vous pouvez remplacer ce comportement avec la propriété `resize`.

#### HTML

```html
<textarea>Saisir du texte ici.</textarea>
```

#### CSS

```css
textarea {
  resize: none; /* Désactive le redimensionnement */
}
```

#### Résultat

{{EmbedLiveSample("Désactiver le redimensionnement des éléments `textarea`", 200, 100)}}

### Utiliser `resize` sur des éléments quelconques

Vous pouvez utiliser la propriété `resize` pour rendre n'importe quel élément redimensionnable. Dans l'exemple ci-dessous, un {{HTMLElement("div")}} redimensionnable contient un paragraphe redimensionnable (élément HTML {{HTMLElement("p")}}).

#### HTML

```html
<div class="redimensionnable">
  <p class="redimensionnable">
    Ce paragraphe peut être redimensionné car la propriété CSS `resize` vaut
    `both` sur cet élément.
  </p>
</div>
```

#### CSS

```css
.redimensionnable {
  resize: both;
  overflow: scroll;
  border: 1px solid black;
}

div {
  height: 300px;
  width: 300px;
}

p {
  height: 200px;
  width: 200px;
}
```

#### Résultat

{{EmbedLiveSample("Utiliser `resize` sur des éléments quelconques", 450, 450)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("textarea")}}
