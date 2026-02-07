---
title: font-variant-position
slug: Web/CSS/Reference/Properties/font-variant-position
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

La propriété [CSS](/fr/docs/Web/CSS) **`font-variant-position`** permet d'utiliser des glyphes de plus petite taille positionnés en exposant ou en indice par rapport à la ligne de base utilisée (qui reste la même).

Généralement, les glyphes utilisés sont ceux utilisés pour les éléments HTML {{HTMLElement("sub")}} et {{HTMLElement("sup")}}.

Lorsque ces glyphes alternatifs sont activés, si un caractère de l'ensemble concerné ne possède pas de glyphe correspondant, l'ensemble des caractères est affiché avec une méthode de secours qui synthétise ces glyphes.

Ces glyphes alternatifs possèdent la même boîte em et la même ligne de base que le reste du texte. La modification est purement graphique et il n'y a pas d'impact sur la hauteur de ligne ou sur les autres caractéristiques liées aux boîtes.

## Syntaxe

```css
/* Valeurs avec un mot-clé */
font-variant-position: normal;
font-variant-position: sub;
font-variant-position: super;

/* Valeurs globales */
font-variant-position: inherit;
font-variant-position: initial;
font-variant-position: revert;
font-variant-position: revert-layer;
font-variant-position: unset;
```

La propriété `font-variant-position` se définit avec l'une des valeurs par mot-clé listées ci-dessous.

### Valeurs

- `normal`
  - : Les glyphes alternatifs sont désactivés.
- `sub`
  - : Ce mot-clé permet d'utiliser les glyphes utilisés en indice.
- `super`
  - : Ce mot-clé permet d'utiliser les glyphes utilisés en exposant.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Définir les formes exposant et indice

#### HTML

```html
<p class="normal">Normal&nbsp;!</p>
<p class="super">Exposant&nbsp;!</p>
<p class="sub">Indice&nbsp;!</p>
```

#### CSS

```css
p {
  display: inline;
}

.normal {
  font-variant-position: normal;
}

.super {
  font-variant-position: super;
}

.sub {
  font-variant-position: sub;
}
```

#### Résultat

{{EmbedLiveSample("Définir les formes exposant et indice")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("font-variant")}}
- La propriété {{CSSxRef("font-variant-alternates")}}
- La propriété {{CSSxRef("font-variant-caps")}}
- La propriété {{CSSxRef("font-variant-east-asian")}}
- La propriété {{CSSxRef("font-variant-emoji")}}
- La propriété {{CSSxRef("font-variant-ligatures")}}
- La propriété {{CSSxRef("font-variant-numeric")}}
