---
title: descent-override
slug: Web/CSS/@font-face/descent-override
---

{{CSSRef}}

Le descripteur CSS **`descent-override`** définit la mesure du jambage inférieur (descendant) de la police (voir la [définition de jambage](https://fr.wikipedia.org/wiki/Jambage)). La mesure du jambage inférieur correspond à la distance verticale par rapport à la hauteur d'X (hauteur du caractère bas de casse, à l'exclusion des jambages inférieurs et supérieurs) que CSS doit utiliser pour agencer les boîtes dans un contexte de formatage en ligne.

## Syntaxe

```css
descent-override: normal;
descent-override: 90%;
```

### Valeurs

- `normal`
  - : La valeur par défaut. La mesure du jambage inférieur est obtenue à partir du fichier de police.
- `<percentage>`
  - : Une valeur exprimée en pourcentage (type {{cssxref("&lt;percentage&gt;")}}) qui traduit l'augmentation ou la réduction par rapport à la taille de la police ({{cssxref("font-size")}}.

## Définition formelle

{{cssinfo}}

## Syntaxe formelle

{{csssyntax}}

## Exemples

### Surcharge de la mesure d'une police de recours

La propriété `descent-override` peut aider à la surcharge de la mesure d'une police de secours pour qu'elle corresponde mieux à celle de la police principale.

```css
@font-face {
  font-family: web-font;
  src: url("https://example.com/font.woff");
}

@font-face {
  font-family: local-font;
  src: local(Local Font);
  descent-override: 125%;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{cssxref("@font-face/ascent-override", "ascent-override")}}
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
