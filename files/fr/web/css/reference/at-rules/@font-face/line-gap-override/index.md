---
title: line-gap-override
slug: Web/CSS/Reference/At-rules/@font-face/line-gap-override
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`line-gap-override`** pour la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-face")}} définit la mesure de l'écart de lignes de la police. La mesure de l'écart de lignes est l'écart recommandé par la police ou l'écart externe.

## Syntaxe

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Valeurs

- `normal`
  - : La valeur par défaut. Lorsqu'elle est utilisée, la valeur de la mesure est obtenue à partir du fichier de police.
- `<percentage>`
  - : Une valeur exprimée en pourcentage (type {{CSSxRef("&lt;percentage&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Surcharge de la mesure d'une police de recours

La propriété `line-gap-override` peut aider à la surcharge des mesures d'une police de secours pour qu'elles correspondent mieux à celles de la police principale.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  line-gap-override: 125%;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le descripteur {{CSSxRef("@font-face/descent-override", "descent-override")}}
- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- Le descripteur {{CSSxRef("@font-face/font-stretch", "font-stretch")}}
- Le descripteur {{CSSxRef("@font-face/font-feature-settings", "font-feature-settings")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/size-adjust", "size-adjust")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
