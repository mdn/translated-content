---
title: Propriété CSS `mask-border-slice`
short-title: mask-border-slice
slug: Web/CSS/Reference/Properties/mask-border-slice
l10n:
  sourceCommit: bcbb4bd6a80292c0663b723d5466759cfaaa8315
---

La propriété [CSS](/fr/docs/Web/CSS) **`mask-border-slice`** permet de découper l'image source, fournie par {{CSSxRef("mask-border-source")}}, en différentes régions. Ces régions sont utilisées pour former les composants du [masque de la bordure](/fr/docs/Web/CSS/Reference/Properties/mask-border).

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
mask-border-slice: revert;
mask-border-slice: revert-layer;
mask-border-slice: unset;
```

La propriété `mask-border-slice` peut être définie avec une, deux, trois ou quatre valeurs `<number-percentage>` qui représentent la distance entre le trait de coupe et le bord de l'image. Les valeurs négatives sont invalides et les valeurs supérieures à la dimension de l'image sur cet axe sont ramenées à `100%`.

- Lorsque **une** seule valeur est définie, les quatre traits de découpe se situent à la même distance de leurs côtés respectifs.
- Lorsque **deux** valeurs sont définies, la première valeur indique la distance des traits de coupe pour le côté **haut et bas** et la deuxième indique la distance des traits de coupe pour le côté **gauche et droite**.
- Lorsque **trois** valeurs sont définies, la première indique la distance pour le trait de coupe du côté **haut**, la deuxième indique la distance pour les traits de coupe des côtés **droite et gauche** et la troisième valeur indique la distance pour le trait de coupe par rapport au côté **bas**.
- Lorsque **quatre** valeurs sont définies, elles indiquent respectivement les distances des traits de coupe par rapport aux côtés **haut**, **droite**, **bas** et **gauche** dans cet ordre (c'est-à-dire le sens horaire).

La valeur optionnelle `fill` peut être utilisée et placée à n'importe quel endroit de la déclaration.

### Valeurs

- {{CSSxRef("&lt;number&gt;")}}
  - : Représente un décalage par rapport au bord en _pixels_ pour les images matricielles et en _coordonnées_ pour les images vectorielles. Pour les images vectorielles, le nombre est relatif à la taille de l'élément, et non à la taille de l'image source, donc les pourcentages sont généralement préférables dans ces cas.
- {{CSSxRef("&lt;percentage&gt;")}}
  - : Représente un décalage par rapport au bord en pourcentage de la taille de l'image source : la largeur de l'image pour les décalages horizontaux, la hauteur pour les décalages verticaux.
- `fill`
  - : Conserve la région centrale de l'image. Sa largeur et sa hauteur sont ajustées pour correspondre aux régions supérieure et gauche de l'image, respectivement.

## Description

Cette découpe permet d'obtenir neuf régions au total&nbsp;: quatre pour les coins, quatre pour les côtés et une région pour le centre. Cette découpe est effectuée selon 4 lignes qui sont écartées d'une certaine distance des bords de l'image.

[![The nine regions defined by the border-image or border-image-slice properties](border-image-slice.png)](border-image-slice.png)

Le diagramme ci-avant illustre l'emplacement de chaque région.

- Les zones de 1 à 4 sont les zones aux coins. Chacune sera utilisée une seule fois pour construire les coins de l'image du masque.
- Les zones 5 à 8 sont les zones de côtés. Ces zones peuvent être [répétées, redimensionnées, ou modifiées](/fr/docs/Web/CSS/Reference/Properties/mask-border-repeat) afin que le masque de bordure final ait les mêmes dimensions que l'élément.
- La zone 9 est la zone centrale. Par défaut, elle n'est pas utilisée mais elle pourra être utilisée comme image d'arrière-plan si le mot-clé `fill` est utilisé.

Les propriétés {{CSSxRef("mask-border-repeat")}}, {{CSSxRef("mask-border-width")}} et {{CSSxRef("mask-border-outset")}} déterminent la façon dont ces régions sont utilisées pour construire le masque de bordure final.

## Définition formelle

{{CSSInfo}}

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple

`mask-border-slice` sert à définir la taille des tranches prélevées dans l'image source et est utilisé pour créer le masque de bordure.

```css
mask-border-slice: 30 fill;
```

Les navigateurs basés sur Chromium prennent en charge une version obsolète de cette propriété — `mask-box-image-slice` — avec un préfixe&nbsp;:

```css
-webkit-mask-box-image-slice: 30 fill;
```

> [!NOTE]
> La page {{CSSxRef("mask-border")}} propose un exemple fonctionnel (utilisant les propriétés de masque de bordure préfixées obsolètes prises en charge par Chromium), afin que vous puissiez vous faire une idée de l'effet.

> [!NOTE]
> Le mot-clé `fill` doit être inclus si vous souhaitez que le contenu de l'élément soit visible.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété raccourcie {{CSSxRef("mask-border")}}
- La propriété {{CSSxRef("mask-border-mode")}}
- La propriété {{CSSxRef("mask-border-outset")}}
- La propriété {{CSSxRef("mask-border-repeat")}}
- La propriété {{CSSxRef("mask-border-source")}}
- La propriété {{CSSxRef("mask-border-width")}}
- [Description illustrée de la syntaxe pouvant couvrir de 1 à 4 valeurs](/fr/docs/Web/CSS/Guides/Cascade/Shorthand_properties#quelques_cas_aux_limites_délicats)
