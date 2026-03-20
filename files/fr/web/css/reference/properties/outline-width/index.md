---
title: outline-width
slug: Web/CSS/Reference/Properties/outline-width
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`outline-width`** définit l'épaisseur du contour d'un élément. Un contour est une ligne tracée autour d'un élément, à l'extérieur de la {{CSSxRef("border")}}.

{{InteractiveExample("Démonstration CSS&nbsp;: outline-width")}}

```css interactive-example-choice
outline-width: 12px;
```

```css interactive-example-choice
outline-width: thin;
```

```css interactive-example-choice
outline-width: medium;
```

```css interactive-example-choice
outline-width: thick;
```

```html interactive-example
<section class="default-example" id="default-example">
  <div class="transition-all" id="example-element">
    Ceci est une boîte avec un contour autour.
  </div>
</section>
```

```css interactive-example
#example-element {
  outline: 0.75em solid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

Il est souvent plus pratique d'utiliser la propriété raccourcie {{CSSxRef("outline")}} lors de la définition de l'apparence d'un contour.

## Syntaxe

```css
/* Valeurs avec un mot clé */
outline-width: thin;
outline-width: medium;
outline-width: thick;

/* Valeurs de type <length> */
outline-width: 1px;
outline-width: 0.1em;

/* Valeurs globales */
outline-width: inherit;
outline-width: initial;
outline-width: revert;
outline-width: revert-layer;
outline-width: unset;
```

La propriété `outline-width` est définie avec une des valeurs listées ci-après.

### Valeurs

- {{CSSxRef("&lt;length&gt;")}}
  - : La largeur du contour définie en tant que `<length>`.
- `thin`
  - : Dépend de l'agent utilisateur. Généralement équivalent à `1px` dans les navigateurs de bureau (y compris Firefox).
- `medium`
  - : Dépend de l'agent utilisateur. Généralement équivalent à `3px` dans les navigateurs de bureau (y compris Firefox).
- `thick`
  - : Dépend de l'agent utilisateur. Généralement équivalent à `5px` dans les navigateurs de bureau (y compris Firefox).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir la largeur du contour d'un élément

#### HTML

```html
<span id="thin">thin</span>
<span id="medium">medium</span>
<span id="thick">thick</span>
<span id="twopixels">2px</span>
<span id="oneex">1ex</span>
<span id="em">1.2em</span>
```

#### CSS

```css
span {
  outline-style: solid;
  display: inline-block;
  margin: 20px;
}

#thin {
  outline-width: thin;
}

#medium {
  outline-width: medium;
}

#thick {
  outline-width: thick;
}

#twopixels {
  outline-width: 2px;
}

#oneex {
  outline-width: 1ex;
}

#em {
  outline-width: 1.2em;
}
```

#### Résultat

{{EmbedLiveSample("Définir la largeur du contour d'un élément", "100%", 80)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("outline")}}
- La propriété {{CSSxRef("outline-style")}}
- La propriété {{CSSxRef("outline-color")}}
