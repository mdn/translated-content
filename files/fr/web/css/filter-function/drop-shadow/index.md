---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow
translation_of: Web/CSS/filter-function/drop-shadow()
original_slug: Web/CSS/filter-function/drop-shadow()
browser-compat: css.types.filter-function.drop-shadow
---
{{CSSRef}}

La fonction CSS **`drop-shadow()`** permet d'appliquer une ombre portée sur une image. Le résultat obtenu par cette fonction est une valeur [`<filter-function>`](/fr/docs/Web/CSS/filter-function).

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

En pratique, une ombre portée correspond à une version floutée et décalée du masque alpha de l'image, dessiné avec une couleur donnée et fusionné sous l'image.

> **Note :** Cette fonction s'apparente à la propriété [`box-shadow`](/fr/docs/Web/CSS/box-shadow). La propriété `box-shadow` permet de créer une ombre rectangulaire sous **la boîte entière** d'un élément. En revanche, la fonction `drop-shadow()` permet de créer un ombre qui épouse la forme (le canal alpha) de **l'image même**.

## Syntaxe

```css
drop-shadow(decalage-x decalage-y rayon-flou couleur)
```

La fonction `drop-shadow()` accepte un paramètre de type `<shadow>` (tel que défini dans la documentation de [`box-shadow`](/fr/docs/Web/CSS/box-shadow)), mais pour lequel le mot-clé `inset` et le paramètre `spread` ne sont pas acceptés.

### Paramètres

- `decalage-x` `decalage-y` (required)
  - : Deux valeurs de longueur ( type [`<length>`](/fr/docs/Web/CSS/length)) qui déterminent le décalage de l'ombre. `decalage-x` indique la distance horizontale, les valeurs négatives décalant l'ombre vers la gauche de l'élément. `decalage-y` indique la distance verticale, les valeurs négatives décalant l'ombre vers le haut de l'élément. Si les deux valeurs sont `0`, l'ombre est placée directement sous l'élément.
- `rayon-flou` (optional)
  - : Le rayon de flou de l'ombre, indiqué comme une longueur (type [`<length>`](/fr/docs/Web/CSS/length)). Plus la valeur est grande, plus l'ombre sera grande et floue. Si cette valeur n'est pas fournie, elle prendra 0 comme valeur par défaut, ce qui créera une ombre au contour net. Les valeurs négatives ne sont pas autorisées.
- `couleur` (optional)
  - : La couleur de l'ombre, indiquée sous la forme d'une valeur de type [`<color>`](/fr/docs/Web/CSS/color_value). Si cette valeur n'est pas fournie, c'est la couleur indiquée par la propriété [`color`](/fr/docs/Web/CSS/color) qui est utilisée.

## Exemples

### Définir une ombre portée avec des décalages et un rayon de flou exprimés en pixels

```css
/* Une ombre noire avec un rayon de flou de 10px */
drop-shadow(16px 16px 10px black)
```

### Définir une ombre portée avec des décalages et un rayon de flou en rem

```css
/* Une ombre rougeâtre avec un rayon de flou de 1rem */
drop-shadow(.5rem .5rem 1rem #e23)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
## Voir aussi

- [`<filter-function>`](/fr/docs/Web/CSS/filter-function) et les autres fonctions associées
  - [`blur()`](/fr/docs/Web/CSS/filter-function/blur())
  - [`brightness()`](/fr/docs/Web/CSS/filter-function/brightness())
  - [`contrast()`](/fr/docs/Web/CSS/filter-function/contrast())
  - [`grayscale()`](/fr/docs/Web/CSS/filter-function/grayscale())
  - [`hue-rotate()`](/fr/docs/Web/CSS/filter-function/hue-rotate())
  - [`invert()`](/fr/docs/Web/CSS/filter-function/invert())
  - [`opacity()`](/fr/docs/Web/CSS/filter-function/opacity())
  - [`saturate()`](/fr/docs/Web/CSS/filter-function/saturate())
  - [`sepia()`](/fr/docs/Web/CSS/filter-function/sepia())
- La propriété CSS [`box-shadow`](/fr/docs/Web/CSS/box-shadow)
