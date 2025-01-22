---
title: hsl()
slug: Web/CSS/color_value/hsl
l10n:
  sourceCommit: 78a78cb2c94a5fd970fef00d4629c40c0b9437b7
---

{{CSSRef}}

La notation fonctionnelle **`hsl()`** exprime une couleur [sRGB](/fr/docs/Glossary/RGB) selon ses composantes de _teinte_ (<i lang="en">hue</i> en anglais), _saturation_, et _luminosité_. Une composante _alpha_ optionnelle représente l'opacité de la couleur.

{{EmbedInteractiveExample("pages/css/function-hsl.html")}}

Il est facile d'utiliser des _couleurs complémentaires_ avec `hsl()`, car celles-ci sont positionnées à l'opposé du cercle de couleur utilisé par la teinte. Ainsi, si `theta` est l'angle de la teinte d'une couleur, on pourra obtenir la couleur complémentaire avec l'angle `180deg-theta`.

## Syntaxe

```css
/* Séparation des arguments par des espaces */
hsl(teinte saturation luminosite)
hsl(teinte saturation luminosite / alpha)

/* Séparation des valeurs par des virgules */
hsl(teinte, saturation, luminosite)
hsl(teinte, saturation, luminosite, alpha)
```

### Valeurs

- `teinte`

  - : Un angle (type [`<angle>`](/fr/docs/Web/CSS/angle)) sur le cercle des couleurs. Lorsqu'il est écrit sans unité, il est interprété comme étant exprimé en degré. Par définition, on a `red=0deg=360deg`, et les autres couleurs distribuées sur le cercle avec `green=120deg`, `blue=240deg`, etc. Sa valeur étant un `<angle>`, elle boucle sur elle-même et on a donc `-120deg=240deg`, `480deg=120deg`, `-1turn=1turn`, etc. Ce cercle chromatique pourra vous aider à trouver l'angle associé à une couleur donnée&nbsp;: ![Un cercle chromatique indiquant l'angle de la teinte pour les couleurs primaires (rouge-vert-bleu) et secondaires (jaune-cyan-magenta).](hue-wheel.png)

- `saturation`

  - : Un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) où `100%` indique une couleur complètement saturée et où `0%` indique une couleur complètement désaturée, c'est-à-dire un niveau de gris.

- `luminosite`

  - : Un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) où `100%` fournit du blanc, où `0%` fournit du noir, et où `50%` fournit une couleur «&nbsp;normale&nbsp;».

- `alpha` {{optional_inline}}

  - : `A` (alpha) peut être un nombre (type [`<number>`](/fr/docs/Web/CSS/number)) compris entre `0` et `1`, ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)), où `1` correspond à `100%` (opacité complète) et `0` à `0%` (transparence complète).

## Exemples

La fonction `hsl()` fonctionne bien avec la fonction [`conic-gradient()`](/fr/docs/Web/CSS/gradient/conic-gradient), les deux travaillant avec des angles.

```html hidden
<div></div>
```

```css
div {
  width: 100px;
  height: 100px;
  background: conic-gradient(
    hsl(360, 100%, 50%),
    hsl(315, 100%, 50%),
    hsl(270, 100%, 50%),
    hsl(225, 100%, 50%),
    hsl(180, 100%, 50%),
    hsl(135, 100%, 50%),
    hsl(90, 100%, 50%),
    hsl(45, 100%, 50%),
    hsl(0, 100%, 50%)
  );
  clip-path: circle(closest-side);
}
```

{{EmbedLiveSample('', '100%', '140px')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction [`hsla()`](/fr/docs/Web/CSS/color_value/hsl), un synonyme historique pour cette fonction.
- Le type [`<color>`](/fr/docs/Web/CSS/color_value) qui permet de représenter n'importe quelle couleur en CSS.
- [Un sélecteur de couleur HSL](https://hslpicker.com/)
