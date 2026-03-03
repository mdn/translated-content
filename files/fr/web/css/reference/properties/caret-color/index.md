---
title: caret-color
slug: Web/CSS/Reference/Properties/caret-color
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

La propriété [CSS](/fr/docs/Web/CSS) **`caret-color`** définit la couleur du **curseur d'insertion**, parfois appelé **curseur de saisie**. Il s'agit du marqueur visible qui apparaît au point d'insertion où le prochain caractère tapé sera ajouté ou où le prochain caractère supprimé sera retiré.

{{InteractiveExample("Démonstration CSS&nbsp;: caret-color")}}

```css interactive-example-choice
caret-color: red;
```

```css interactive-example-choice
caret-color: auto;
```

```css interactive-example-choice
caret-color: transparent;
```

```html interactive-example
<section class="default-example container" id="default-example">
  <div>
    <p>Entrez du texte dans le champ pour voir le curseur&nbsp;:</p>
    <p><input id="example-element" type="text" /></p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-size: 1.2rem;
}
```

## Syntaxe

```css
/* Valeur avec un mot-clé */
caret-color: auto;
caret-color: transparent;
caret-color: currentColor;

/* Valeurs de type <color> */
caret-color: red;
caret-color: #5729e9;
caret-color: rgb(0 200 0);
caret-color: hsl(228deg 4% 24% / 80%);

/* Valeurs globales */
caret-color: inherit;
caret-color: initial;
caret-color: revert;
caret-color: revert-layer;
caret-color: unset;
```

### Valeurs

- `auto`
  - : En général, il se rapporte à [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor), la couleur ({{CSSxRef("color")}}) du texte qui sera modifié.

- {{CSSxRef("&lt;color&gt;")}}
  - : La couleur du curseur.

## Description

Un curseur d'insertion est un indicateur visible de l'endroit, dans un texte éditable — ou dans un élément qui accepte une saisie de texte — où le contenu sera inséré (ou supprimé) par l'utilisateur·ice. Le curseur est généralement une fine ligne verticale indiquant où l'ajout ou la suppression de caractères aura lieu. Il clignote généralement (s'allume et s'éteint), ce qui le rend plus visible. Le curseur n'apparaît que lorsque l'élément éditable a la sélection. Par défaut, ce curseur prend la couleur du texte. La propriété `caret-color` peut être utilisée pour définir la couleur de ce curseur sur autre chose que `currentColor`, ou pour réinitialiser un curseur coloré à sa valeur par défaut.

La valeur `auto` définit le curseur d'insertion sur `currentColor`, qui est la couleur ({{CSSxRef("color")}}) du texte ajouté ou supprimé. Les agents utilisateurs peuvent choisir une couleur différente pour garantir une bonne visibilité et un bon contraste avec le contenu environnant, en tenant compte de la couleur ({{CSSxRef("color")}}), de la couleur d'arrière-plan ({{CSSxRef("background-color")}}), des ombres et d'autres facteurs. En pratique, cependant, tous les navigateurs utilisent la couleur courante par défaut, et lorsque `caret-color` est défini sur `auto`. Vous pouvez définir n'importe quelle valeur `<color>` valide.

### Comprendre les curseurs d'insertion

Le curseur d'insertion, et donc cette propriété, ne s'applique qu'au texte ou aux éléments pouvant accepter une saisie de texte. Le curseur apparaît dans les éléments d'interface utilisateur ayant la sélection, où les utilisateur·ice·s peuvent modifier le contenu, comme les éléments HTML {{HTMLElement("input")}} acceptant du texte libre, l'élément HTML {{HTMLElement("textarea")}}, et les éléments avec l'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).

Le curseur peut apparaître dans les éléments `<input>` de type `password`, `text`, `search`, `tel` et `email`. Aucun curseur n'apparaît avec les types d'entrée date, `color`, `hidden`, `radio` ou `checkbox`. Certains navigateurs affichent un curseur avec le type d'entrée `number`. Il est possible, dans certains navigateurs, de faire apparaître un curseur dans des éléments qui n'ont jamais de contenu texte — par exemple, en définissant [`appearance: none`](/fr/docs/Web/CSS/Reference/Properties/appearance) et en ajoutant l'attribut `contenteditable`. Cependant, cela n'est pas recommandé.

Un curseur peut être affiché dans un élément éditable ou ses descendants, à condition que l'éditabilité ne soit pas désactivée, par exemple en définissant l'attribut `contentEditable` d'un descendant à `false`. Si un élément n'est pas éditable ou sélectionnable, par exemple si {{CSSxRef("user-select")}} est défini sur `none`, le curseur ne doit pas apparaître.

### Différence entre curseur d'insertion et curseur de navigation

Il existe plusieurs types de curseurs. Seul le curseur d'insertion est affecté par la propriété `caret-color`.

De nombreux navigateurs disposent d'un **curseur de navigation**, qui agit de façon similaire au curseur d'insertion mais peut être déplacé dans du texte non éditable.

L'image du curseur de la souris affichée pour certaines valeurs de la propriété {{CSSxRef("cursor")}} (par exemple, `auto` ou `text`) peut ressembler à un curseur, mais ce n'en est pas un. Il s'agit d'un pointeur.

### Animation depuis `auto`

En général, lorsque la propriété `caret-color` est définie sur `auto` ou prend cette valeur par défaut, les agents utilisateurs utilisent `currentColor`, qui est animable. Cependant, `auto` n'est pas une valeur animable par défaut&nbsp;: lors de l'animation ou de la transition de `caret-color` de `auto` vers une autre valeur de couleur, aucune interpolation n'a lieu. L'animation est [discrète](/fr/docs/Web/CSS/Guides/Animations/Animatable_properties#discrète)&nbsp;; la couleur bascule de ou vers la couleur `currentColor` au milieu de la {{CSSxRef("animation-duration")}} ou de la {{CSSxRef("transition-duration")}}.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir une couleur de curseur personnalisée

#### HTML

```html
<input value="Ce champ utilise un curseur par défaut." size="64" />
<input
  class="custom"
  value="J'ai une couleur de curseur personnalisée !"
  size="64" />
<p contenteditable class="custom">
  Ce paragraphe est éditable, et son curseur a aussi une couleur
  personnalisée&nbsp;!
</p>
```

#### CSS

```css
input {
  caret-color: auto;
  display: block;
  margin-bottom: 0.5em;
}

input.custom {
  caret-color: orange;
}

p.custom {
  caret-color: green;
}
```

#### Result

{{EmbedLiveSample("Définir une couleur de curseur personnalisée", 500, 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés {{CSSxRef("caret-animation")}}, {{CSSxRef("caret-shape")}}
- La propriété raccourcie {{CSSxRef("caret")}}
- La propriété {{CSSxRef("color")}}
- La propriété {{CSSxRef("text-emphasis")}}
- La propriété {{CSSxRef("cursor")}}
- La propriété {{CSSxRef("text-emphasis")}}
- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- L'élément HTML {{HTMLElement("input")}}
- L'attribut HTML [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable)
