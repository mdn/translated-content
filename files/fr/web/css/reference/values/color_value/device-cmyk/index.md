---
title: device-cmyk()
slug: Web/CSS/Reference/Values/color_value/device-cmyk
l10n:
  sourceCommit: 7d0031545bb606d2ff7fb033180f9cec451a6f8d
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`device-cmyk()`** permet d'exprimer des couleurs dans l'espace de couleurs CMJN (CMYK en anglais), en indiquant les composantes de cyan, de magenta, de jaune et de noir.

Cette approche colorimétrique peut s'avérer utile afin de créer des supports destinés à être imprimés sur une imprimante particulière, lorsque la sortie pour des combinaisons d'encres données est connue. Le moteur CSS peut tenter une approximation de la couleur pour les autres médias&nbsp;; mais le résultat sera probablement différent de ce qui sera imprimé sans connaître les paramètres colorimétriques précis de la sortie. Une déclaration {{CSSxRef("@color-profile")}} pour `device-cmyk` permet de définir le profil de couleur exact à utiliser pour la conversion.

## Syntaxe

```css
device-cmyk(0 81% 81% 30%);
device-cmyk(none 0.81 0.81 0.3);
device-cmyk(0 81% 81% 30% / .5);
```

### Valeurs

Notation fonctionnelle&nbsp;: `device-cmyk(C M Y K[ / A])`

- `C`, `M`, `Y`, `K`
  - : Chaque composante peut être un nombre ({{CSSxRef("&lt;number&gt;")}}) entre `0` et `1`, un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) entre `0%` et `100%`, ou le mot-clé `none` fournissant les composantes cyan, magenta, jaune et noir de la couleur CMJN.
    > [!NOTE]
    > Voir [Composantes de couleur manquantes](/fr/docs/Web/CSS/Reference/Values/color_value#composantes_de_couleur_manquantes) pour plus d'informations sur l'effet de `none`.

- `A` {{Optional_Inline}}
  - : Une valeur {{CSSxRef("&lt;alpha-value&gt;")}} représentant la valeur du canal alpha de la couleur, où le nombre `0` correspond à `0%` (totalement transparent) et `1` correspond à `100%` (totalement opaque). De plus, le mot-clé `none` peut être utilisé pour définir explicitement l'absence de canal alpha.

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

Actuellement, aucun navigateur ne prend en charge cette fonctionnalité.

## Voir aussi

- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- La règle {{CSSxRef("@page")}}
