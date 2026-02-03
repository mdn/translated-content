---
title: caret-animation
slug: Web/CSS/Reference/Properties/caret-animation
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{SeeCompatTable}}

La propriété [CSS](/fr/docs/Web/CSS) **`caret-animation`** permet d'activer ou de désactiver le clignotement du **curseur d'insertion**, le marqueur visible qui apparaît dans les éléments éditables pour indiquer où le prochain caractère sera inséré ou supprimé.

Lorsque vous appliquez une animation personnalisée au curseur, vous devez désactiver le clignotement par défaut afin qu'il n'interfère pas avec l'animation.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
caret-animation: auto;
caret-animation: manual;

/* Valeurs globales */
caret-animation: inherit;
caret-animation: initial;
caret-animation: revert;
caret-animation: revert-layer;
caret-animation: unset;
```

### Valeurs

La propriété `caret-animation` est définie avec l'une des valeurs de mot-clé listées ci-dessous.

- `auto`
  - : Le curseur clignote. Il s'agit de la valeur par défaut (initiale).
- `manual`
  - : Le curseur ne clignote pas.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `caret-animation`

Cet exemple montre la différence entre le fait d'avoir `caret-animation` défini sur `auto` ou sur `manual` sur un élément éditable.

#### HTML

Le balisage comporte deux éléments HTML {{HTMLElement("p")}} avec l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) pour les rendre éditables.

```html live-sample___caret-animation-basic
<p contenteditable="true">
  Mon curseur s'anime car <code>caret-animation</code> est défini sur
  <code>auto</code>.
</p>
<p contenteditable="true">
  Mon curseur ne s'anime pas car <code>caret-animation</code> est défini sur
  <code>manual</code>.
</p>
```

#### CSS

Le CSS définit la valeur de {{CSSxRef("caret-color")}} à `red`. Il donne ensuite au premier paragraphe une valeur `caret-animation` de `auto` et au second une valeur `caret-animation` de `manual`.

```css live-sample___caret-animation-basic
p {
  caret-color: red;
}

p:first-of-type {
  caret-animation: auto;
}

p:last-of-type {
  caret-animation: manual;
}
```

#### Résultat

Le résultat rendu ressemble à ceci&nbsp;:

{{EmbedLiveSample('caret-animation-basic', 'auto', 100)}}

Essayez de sélectionner les deux paragraphes pour voir la différence de comportement du curseur.

### Créer une animation de curseur personnalisée

Dans cet exemple, une animation de curseur personnalisée est appliquée à un paragraphe éditable et à un champ de saisie texte.

#### HTML

Le balisage comporte un élément HTML {{HTMLElement("p")}} et deux éléments HTML {{HTMLElement("input")}} texte. L'élément `<p>` possède l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) pour le rendre éditable. Le paragraphe et le premier champ de saisie texte ont une classe `custom-caret`.

```html live-sample___caret-animation-custom
<p contenteditable="true" class="custom-caret">
  Ce paragraphe a une animation personnalisée appliquée, en plus de
  <code>caret-animation: manual</code> pour arrêter le clignotement par défaut
  du curseur et permettre de voir l'animation fluide.
</p>

<input
  type="text"
  class="custom-caret"
  value="J'ai une animation de curseur personnalisée" />

<input type="text" value="J'ai le curseur clignotant par défaut" />
```

#### CSS

Nous définissons d'abord un ensemble de {{CSSxRef("@keyframes")}} qui fait passer la {{CSSxRef("caret-color")}} de `transparent` à `darkblue`.

```css live-sample___caret-animation-custom
@keyframes custom-caret-animation {
  from {
    caret-color: transparent;
  }

  to {
    caret-color: darkblue;
  }
}
```

Nous appliquons ensuite au `<p>` et au premier `<input>` l'animation personnalisée `@keyframes`, une {{CSSxRef("caret-color")}}, et une valeur `caret-animation` de `manual` pour désactiver le clignotement par défaut du curseur.

```css hidden live-sample___caret-animation-custom
body {
  display: flex;
  flex-direction: column;
}

input {
  margin-bottom: 20px;
}
```

```css live-sample___caret-animation-custom
.custom-caret {
  animation: custom-caret-animation infinite linear alternate 0.75s;
  caret-color: darkblue;
  caret-animation: manual;
}

p,
input {
  font-size: 1.6rem;
}
```

#### Résultat

Le résultat rendu ressemble à ceci&nbsp;:

{{EmbedLiveSample('caret-aniamtion-custom', 'auto', 260)}}

Essayez de sélectionner les deux premiers éléments pour voir à quoi ressemble l'animation personnalisée du curseur. Pour comparer avec le curseur clignotant par défaut, vous pouvez sélectionner le troisième élément.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("caret-color")}}, {{CSSxRef("caret-shape")}}
- La propriété raccourcie {{CSSxRef("caret")}}
- Le module [d'interface utilisateur de base CSS](/fr/docs/Web/CSS/Guides/Basic_user_interface)
