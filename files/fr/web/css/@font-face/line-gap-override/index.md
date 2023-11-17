---
title: line-gap-override
slug: Web/CSS/@font-face/line-gap-override
---

{{CSSRef}}

Le descripteur CSS **`line-gap-override`** définit la mesure de l'écart de lignes de la police. La mesure de l'écart de lignes peut être l'écart recommandé par la police ou encore un écart externe.

## Syntaxe

```css
line-gap-override: normal;
line-gap-override: 90%;
```

### Valeurs

- `normal`
  - : La valeur par défaut. Lorsqu'elle est utilisée, la valeur de la mesure est obtenue à partir du fichier de police.
- `<percentage>`
  - : Une valeur exprimée en pourcentage (type {{cssxref("&lt;percentage&gt;")}}) qui traduit l'augmentation ou la réduction par rapport à la taille de la police ({{cssxref("font-size")}}).

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

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

- {{cssxref("@font-face/descent-override", "descent-override")}}
- {{cssxref("@font-face/font-display", "font-display")}}
- {{cssxref("@font-face/font-family", "font-family")}}
- {{cssxref("@font-face/font-weight", "font-weight")}}
- {{cssxref("@font-face/font-style", "font-style")}}
- {{cssxref("@font-face/font-stretch", "font-stretch")}}
- {{cssxref("@font-face/font-variant", "font-variant")}}
- {{cssxref("font-feature-settings", "font-feature-settings")}}
- {{cssxref("@font-face/font-variation-settings", "font-variation-settings")}}
- {{cssxref("@font-face/line-gap-override", "line-gap-override")}}
- {{cssxref("@font-face/src", "src")}}
- {{cssxref("@font-face/size-adjust", "size-adjust")}}
- {{cssxref("@font-face/unicode-range", "unicode-range descriptor")}}
