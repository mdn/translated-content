---
title: font-variation-settings
slug: Web/CSS/Reference/At-rules/@font-face/font-variation-settings
original_slug: Web/CSS/@font-face/font-variation-settings
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`font-variation-settings`**, associé à la [la règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@font-face")}} permet d'indiquer les variations de police de bas niveau pour les polices OpenType ou TrueType.

Depuis que ce descripteur définit des valeurs de variation sur l'objet de police dans la règle `@font-face` et non sur un élément entier, seuls certains glyphes d'un élément peuvent être rendus à l'aide de ce descripteur.

## Syntaxe

```css
/* Utilise les paramètres par défaut */
font-variation-settings: normal;

/* Indique les valeurs pour les noms des axes OpenType */
font-variation-settings: "xhgt" 0.7;
```

### Valeurs

- `normal`
  - : Le texte est disposé avec les paramètres par défaut.
- `<string> <number>`
  - : Lorsque le texte est affiché, la liste des noms des axes OpenType est envoyée au moteur afin d'activer ou de désactiver des paramètres de la police. Chaque paramètre se compose d'un nom ({{cssxref("&lt;string&gt;")}}) de 4 caractères ASCII, suivis d'un nombre ({{cssxref("number")}}) qui indique la valeur de l'axe. Si la chaîne de caractères contient moins ou plus de caractères ou contient des caractères en dehors de l'intervalle de points de code U+20 - U+7E, la propriété entière sera considérée comme invalide. Le nombre utilisé peut être décimal ou négatif.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Modifier le poids et l'étirement de la police dans une règle @font-face

```css
@font-face {
  font-family: "OpenTypeFont";
  src: url("open_type_font.woff2") format("woff2");
  font-weight: normal;
  font-style: normal;
  font-variation-settings:
    "wght" 400,
    "wdth" 300;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/src", "src")}}
- Le descripteur {{cssxref("@font-face/unicode-range", "unicode-range")}}
