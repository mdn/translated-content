---
title: overflow-clip-margin
slug: Web/CSS/Reference/Properties/overflow-clip-margin
l10n:
  sourceCommit: 2d78abb3e793352e24e976ce0e68c08d817bd7f3
---

La propriété [CSS](/fr/docs/Web/CSS) **`overflow-clip-margin`** détermine jusqu'où un élément avec [`overflow: clip`](/fr/docs/Web/CSS/Reference/Properties/overflow) peut être peint en dehors de ses limites avant d'être rogné. La limite définie par cette propriété est appelée _bord de découpe du débordement_ de la boîte.

## Syntaxe

```css
/* Valeurs de type <length> */
overflow-clip-margin: 20px;
overflow-clip-margin: 1em;

/* Valeurs de type <visual-box> | <length> */
overflow-clip-margin: content-box 5px;

/* Valeurs globales */
overflow-clip-margin: inherit;
overflow-clip-margin: initial;
overflow-clip-margin: revert;
overflow-clip-margin: revert-layer;
overflow-clip-margin: unset;
```

La valeur `<visual-box>`, qui par défaut est `padding-box`, définit le bord de la boîte à utiliser comme origine du bord de découpe du débordement. La valeur {{CSSxRef("&lt;length&gt;")}} définie dans `overflow-clip-margin` doit être non négative.

> [!NOTE]
> Si l'élément n'a pas `overflow: clip`, cette propriété sera ignorée.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### HTML

```html
<div class="box">
  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
  cillum dolore eu fugiat nulla pariatur.
</div>
```

### CSS

```css
.box {
  border: 3px solid black;
  width: 250px;
  height: 100px;
  overflow: clip;
  overflow-clip-margin: 20px;
}
```

### Résultat

{{EmbedLiveSample("Exemples", "100%", 280)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Propriétés CSS associées&nbsp;: {{CSSxRef("text-overflow")}}, {{CSSxRef("white-space")}}, {{CSSxRef("overflow")}}, {{CSSxRef("overflow-inline")}}, {{CSSxRef("overflow-x")}}, {{CSSxRef("overflow-y")}}, {{CSSxRef("clip")}}, {{CSSxRef("display")}}
