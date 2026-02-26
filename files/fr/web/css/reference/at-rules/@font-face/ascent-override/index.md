---
title: ascent-override
slug: Web/CSS/Reference/At-rules/@font-face/ascent-override
l10n:
  sourceCommit: ad9776a6cf53eaf570ac0515402247e82ecefcfe
---

Le {{Glossary("CSS_Descriptor", "descripteur")}} [CSS](/fr/docs/Web/CSS) **`ascent-override`** pour la [règle @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) {{CSSxRef("@font-face")}} définit la mesure du jambage supérieur pour la police. La mesure du jambage supérieur est la hauteur au-dessus de la ligne de base que CSS utilise pour disposer les boîtes de ligne dans un contexte de mise en forme en ligne.

## Syntaxe

```css
ascent-override: normal;
ascent-override: 90%;
```

### Valeurs

- `normal`
  - : La valeur par défaut. La mesure du jambage supérieur est obtenue à partir du fichier de police.
- `<percentage>`
  - : Une valeur exprimée en pourcentage ({{CSSxRef("&lt;percentage&gt;")}}).

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

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

- Le descripteur {{CSSxRef("@font-face/descent-override", "descent-override")}}
- Le descripteur {{CSSxRef("@font-face/font-display", "font-display")}}
- Le descripteur {{CSSxRef("@font-face/font-family", "font-family")}}
- Le descripteur {{CSSxRef("@font-face/font-weight", "font-weight")}}
- Le descripteur {{CSSxRef("@font-face/font-style", "font-style")}}
- Le descripteur {{CSSxRef("@font-face/font-stretch", "font-stretch")}}
- Le descripteur {{CSSxRef("@font-face/font-feature-settings", "font-feature-settings")}}
- Le descripteur {{CSSxRef("@font-face/font-variation-settings", "font-variation-settings")}}
- Le descripteur {{CSSxRef("@font-face/line-gap-override", "line-gap-override")}}
- Le descripteur {{CSSxRef("@font-face/src", "src")}}
- Le descripteur {{CSSxRef("@font-face/size-adjust", "size-adjust")}}
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}}
