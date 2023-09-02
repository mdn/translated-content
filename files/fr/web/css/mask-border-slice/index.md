---
title: mask-border-slice
slug: Web/CSS/mask-border-slice
---

{{CSSRef}}{{SeeCompatTable}}

La propriété CSS **`mask-border-slice`** permet de découper l'image source, fournie par {{cssxref("mask-border-source")}}, en différentes régions. Ces régions sont utilisées pour former les composants du [masque de la bordure](/fr/docs/Web/CSS/mask-border).

Cette découpe permet d'obtenir neuf régions au total : quatre pour les coins, quatre pour les côtés et une région pour le centre. Cette découpe est effectuée selon 4 lignes qui sont écartées d'une certaine distance des bords de l'image.

[![The nine regions defined by the border-image or border-image-slice properties](border-image-slice.png)](border-image-slice.png)

Le diagramme ci-avant illustre l'emplacement de chaque région.

- Les zones de 1 à 4 sont les zones aux coins. Chacune sera utilisée une seule fois pour construire les coins de l'image du masque.
- Les zones 5 à 8 sont les zones de côtés. Ces zones peuvent être [répétées, redimensionnées, ou modifiées](/fr/docs/Web/CSS/mask-border-repeat) afin que le masque de bordule final aient les mêmes dimensions que l'élément.
- La zone 9 est la zone centrale. Par défaut, elle n'est pas utilisée mais elle pourra être utilisée comme image d'arrière-plan si le mot-clé `fill` est utilisé.

Les propriétés {{cssxref("mask-border-repeat")}}, {{cssxref("mask-border-width")}} et {{cssxref("mask-border-outset")}} déterminent la façon dont ces régions sont utilisées pour construire le masque final.

## Syntaxe

```css
/* Une valeur pour tous les côtés */
mask-border-slice: 30%;

/* vertical | horizontal */
mask-border-slice: 10% 30%;

/* haut | horizontal | bas */
mask-border-slice: 30 30% 45;

/* haut | droit | bas | gauche */
mask-border-slice: 7 12 14 5;

/* Utilisation du mot-clé `fill` */
mask-border-slice: 10% fill 7 12;

/* Valeurs globales */
mask-border-slice: inherit;
mask-border-slice: initial;
mask-border-slice: unset;
```

La propriété `mask-border-slice` peut être définie avec une, deux, trois ou quatre valeurs `<number-percentage>` qui représentent la distance entre le trait de coupe et le bord de l'image. Les valeurs négatives sont invalides et les valeurs supérieures à la dimension de l'image sur cet axe sont ramenées à `100%`.

- Lorsqu'une seule valeur est utilisée, les quatre traits de découpe se situent à la même distance de leurs côtés respectifs.
- Lorsque deux valeurs sont utilisées, la première valeur indique la distance des traits de coupe pour le côté haut et bas et la deuxième indique la distance des traits de coupe pour le côté droit et gauche.
- Lorsque trois positions sont utilisées, la première indique la distance pour le trait de coupe du côté haut, la deuxième indique la distance pour les traits de coupe des côtés droit et gauche et la troisième valeur indique la distance pour le trait de coupe par rapport au côté bas.
- Si 4 valeurs sont employées, elles indiquent respectivement les distances des traits de coupe par rapport aux côtés haut, droit, bas et gauche (c'est-à-dire dans l'ordre des aiguilles d'une montre).

La valeur optionnelle `fill` peut être utilisée et placée à n'importe quel endroit de la déclaration.

### Valeurs

- {{cssxref("&lt;number&gt;")}}
  - : Une valeur numérique représentant le décalage entre le trait de coupe et le bord de l'image. La valeur est exprimée en nombre de pixels pour les images matricielles (_bitmap_/_raster_) et en coordonnées pour les images vectorielles. Pour les images vecorielles, le nombre utilisé est relatif à la taille de l'élément et pas à la taille de l'image source. Dans ce dernier cas, il peut être préférable d'utiliser des valeurs en pourcentage.
- {{cssxref("&lt;percentage&gt;")}}
  - : Le décalage entre le trait de découpe et le bord de l'image, exprimé relativement à la taille de l'image source (pour les traits horizontaux, la distance est proportionnelle à la hauteur et pour les traits verticaux, la distance est proportionnelle à la largeur).
- `fill`
  - : La zone centrale est conservée ; sa largeur et sa hauteur correspondent aux dimensions utilisées pour les régions haute et gauche.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Description illustrée de la syntaxe pouvant couvrir de 1 à 4 valeurs](/fr/docs/Web/CSS/Shorthand_properties#quelques_cas_aux_limites_épineux)
