---
title: drop-shadow()
slug: Web/CSS/filter-function/drop-shadow()
tags:
  - CSS
  - Fonction
  - Reference
  - Type
translation_of: Web/CSS/filter-function/drop-shadow()
---
{{CSSRef}}

La fonction CSS **`drop-shadow()`** permet d'appliquer une ombre portée sur une image. Le résultat obtenu par cette fonction est une valeur {{cssxref("&lt;filter-function&gt;")}}.

{{EmbedInteractiveExample("pages/css/function-drop-shadow.html")}}

En pratique, une ombre portée correspond à une version floutée et décalée du masque alpha de l'image, dessiné dans une couleur donnée et fusionné sous l'image.

> **Note :** Cette fonction s'apparente à la propriété {{cssxref("box-shadow")}}. La propriété `box-shadow` permet de créer une ombre rectangulaire sous **la boîte entière** d'un élément. En revanche, la fonction `drop-shadow()` permet de créer un ombre qui épouse la forme (le canal alpha) de **l'image même**.

## Syntaxe

    drop-shadow(décalage-x, décalage-y, rayon-flou, rayon-étalement, couleur)

La fonction `drop-shadow()` accepte un paramètre de type `<shadow>` (défini avec la propriété {{cssxref("box-shadow")}}), mais où le mot-clé `inset` n'est pas autorisé.

### Paramètres

- `décalage-x` `décalage-y`
  - : Deux longueurs ({{cssxref("&lt;length&gt;")}}) qui déterminent le décalage de l'ombre sous l'image. `décalage-x` indique la distance horizontale (les valeurs négatives décalent l'ombre vers la gauche et les valeurs positives la décalent vers la droite). `décalage-y` indique la distance verticale (les valeurs négatives décalent l'ombre vers le haut et les valeurs positives vers le bas). Si les deux valeurs sont égales à `0`, l'ombre est directement placée sous l'image.
- `rayon-flou` {{optional_inline}}
  - : Une longueur ({{cssxref("&lt;length&gt;")}}) qui représente le rayon du flou. Plus la valeur est élevée, plus l'ombre sera grande et floue. La valeur par défaut est `0` ce qui correspond à un contour net, sans flou. Il n'est pas possible d'utiliser des valeurs négatives
- `rayon-étalement`{{optional_inline}}

  - : Le rayon d'étalement de l'ombre, défini sous la forme d'une longueur ({{cssxref("&lt;length&gt;")}}). Les valeurs positives permettent d'avoir une ombre plus grande et plus étendue et les valeurs négatives permettent de réduire la zone d'ombre. La valeur par défaut est `0` : l'ombre a alors la même taille que l'image.

    > **Attention :** Chrome et Safari (basés sur WebKit) ne prennent pas en charge ce paramètre. S'il est utilisé, l'effet ne sera pas applique du tout.

- `couleur`{{optional_inline}}
  - : La couleur de l'ombre, indiquée sous la forme d'une valeur {{cssxref("&lt;color&gt;")}}. La valeur par défaut dépend du navigateur. Pour Firefox et Internet Explorer, c'est la valeur de la propriété {{cssxref("color")}} qui sera utilisée alors que les navigateurs basés sur WebKit utiliseront une ombre transparente par défaut.

## Exemples

```css
/* Une ombre noire avec un flou de 10px de rayon. */
drop-shadow(16px 16px 10px black)

/* Une ombre rouge avec un flou de 1rem de rayon et de .3rem d'étalement */
/* Attention, à l'heure actuelle, ce type d'ombre n'est pas pris en charge */
/* par l'ensemble des navigateurs */
drop-shadow(.5rem .5rem 1rem .3rem #e23)
```

## Voir aussi

- {{cssxref("&lt;filter-function&gt;")}}
- La propriété CSS {{cssxref("box-shadow")}}
