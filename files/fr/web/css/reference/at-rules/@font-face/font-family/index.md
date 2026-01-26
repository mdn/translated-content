---
title: font-family
slug: Web/CSS/Reference/At-rules/@font-face/font-family
l10n:
  sourceCommit: 1dbba9f7a2c2e35c6e01e8a63159e2aac64b601b
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-family`** définit la famille de polices pour une police spécifiée dans une [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-face")}}.

La valeur est utilisée pour la correspondance de noms contre un `@font-face` particulier lors du style des éléments utilisant la propriété [`font-family`](/fr/docs/Web/CSS/Reference/Properties/font-family).
N'importe quel nom peut être utilisé, et cela remplace tout nom spécifié dans les données de police sous-jacentes.

## Syntaxe

```css
/* Valeurs de chaînes de caractères */
/* Type <string>                    */
font-family: "police de caractères a";
font-family: "une autre police";

/* Valeur de type <custom-ident> */
font-family: exemplepolice;
```

### Valeurs

- `<family-name>`
  - : Définit le nom de la police de caractères.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Changer le nom de la famille de polices

```css
@font-face {
  font-family: exemplepolice;
  src: url("exemplepolice.ttf");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-stretch", "font-stretch")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-feature-settings", "font-feature-settings")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
