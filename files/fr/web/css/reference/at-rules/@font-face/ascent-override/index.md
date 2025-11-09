---
title: ascent-override
slug: Web/CSS/Reference/At-rules/@font-face/ascent-override
original_slug: Web/CSS/@font-face/ascent-override
l10n:
  sourceCommit: 635820782735cd00f71ce3929ff9377b091f8995
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`ascent-override`** pour la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{cssxref("@font-face")}} définit la mesure du jambage supérieur pour la police. La mesure du jambage supérieur est la hauteur au-dessus de la ligne de base que CSS utilise pour disposer les boîtes de ligne dans un contexte de mise en forme en ligne.

## Syntaxe

```css
ascent-override: normal;
ascent-override: 90%;
```

### Valeurs

- `normal`
  - : La valeur par défaut. La mesure du jambage supérieur est obtenue à partir du fichier de police.
- `<percentage>`
  - : Une valeur exprimée en pourcentage ({{cssxref("&lt;percentage&gt;")}}).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Surcharge de la mesure d'une police de repli

La propriété `ascent-override` peut aider à la surcharge de la mesure d'une police de repli pour qu'elle corresponde mieux à celle de la police principale.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  ascent-override: 125%;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face/descent-override", "descent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- Le descripteur {{cssxref("@font-face/unicode-range", "unicode-range")}}
