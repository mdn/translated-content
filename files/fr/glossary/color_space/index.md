---
title: Espace de couleur
slug: Glossary/Color_space
l10n:
  sourceCommit: a6d1fd388b053e6fc6ce21003348f34d0ef8115f
---

Les **espaces de couleur** (<i lang="en">color spaces</i> en anglais) sont des organisations nommées de couleurs pour des modèles de couleur sous-jacents basés sur des coordonnées. Un modèle de couleur définit comment les composants d'une couleur (par exemple, les canaux `h`, `w`, et `b` d'une couleur {{CSSxRef("color_value/hwb", "hwb()")}}) se rapportent à un espace de couleur. La plupart des espaces de couleur sont des grilles tridimensionnelles ou quadridimensionnelles qui représentent les couleurs. Chaque dimension (ou axe) correspond à un canal différent. Les couleurs peuvent être exprimées dans plusieurs espaces de couleur, et peuvent être transformées d'un espace de couleur à un autre, tout en conservant la même apparence.

Les espaces de couleur catégorisent et définissent des gammes spécifiques de couleurs. Chaque espace de couleur est défini par un modèle mathématique et un ensemble de règles associées. Chaque espace de couleur a un {{Glossary("Gamut", "gamut")}} défini, qui fait référence à la gamme spécifique de couleurs qu'il peut représenter. Ces règles permettent une représentation cohérente et reproductible des couleurs sur différents appareils et logiciels.

L'espace de couleur _sRGB_ (rouge, vert et bleu standard) a été créé pour le web, mais nous ne sommes plus limités à cet espace de couleur. Le [Module de couleur CSS de niveau 4](https://drafts.csswg.org/css-color-4) spécifie plusieurs espaces de couleur prédéfinis, et le [Module de couleur CSS de niveau 5](https://drafts.csswg.org/css-color-5/) va plus loin, spécifiant des fonctionnalités pour définir des espaces de couleur personnalisés.

## Espaces de couleur nommés

Les [espaces de couleur RGB](#espaces_de_couleur_rgb) prédéfinis incluent `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, et `rec2020`. Les [espaces de couleur CIELAB](#espaces_de_couleur_cielab) prédéfinis incluent `lab-d50` et `lab-d65`. Les [espaces de couleur XYZ](#espaces_de_couleur_xyz) prédéfinis incluent `xyz-d50`, et `xyz-d65` (et `xyz`, un alias pour `xyz-d65`).

Les espaces de couleur sont soit [rectangulaires soit polaires <sup>(angl.)</sup>](https://ericportis.com/posts/2024/okay-color-spaces/). Les espaces de couleur rectangulaires incluent `srgb`, `srgb-linear`, `display-p3`, `a98-rgb`, `prophoto-rgb`, `rec2020`, `lab`, `oklab`, `xyz-d50`, et `xyz-d65` (ou `xyz`). Les espaces de couleur polaires incluent `hsl`, `hwb`, `lch`, et `oklch`.

### Espaces de couleur RGB

RGB est un modèle de couleur qui représente les couleurs comme des mélanges de trois composants sous-jacents — les canaux de couleur rouge, vert et bleu — qui créent diverses teintes lorsqu'ils sont combinés. sRGB, ou «&nbsp;RGB standard&nbsp;», est l'espace de couleur sous-jacent pour les couleurs {{Glossary("RGB")}}. sRGB est destiné à codifier la spécification d'affichage des PC et des systèmes d'imagerie basés sur le {{Glossary("world wide web", "Web")}}. C'est maintenant généralement l'espace de couleur supposé pour ceux qui n'ont pas de balise ou qui n'ont pas de profil de couleur intégré.

Il existe plusieurs espaces de couleur RGB, comme l'espace de couleur _Adobe RGB_, qui peuvent représenter un {{Glossary("gamut")}} de couleur plus large que l'espace de couleur _sRGB_. Les coordonnées dans _sRGB_ et _Adobe RGB_ (`a98-rgb`) sont différentes. Il existe de nombreuses façons de décrire les composants RGB d'une couleur. En {{Glossary("CSS")}}, ils peuvent être représentés comme un entier unique de 24 bits en notation hexadécimale (par exemple, `#add8e6` est bleu clair), ou en notation fonctionnelle {{CSSxRef("color_value/rgb", "rgb()")}} comme trois nombres séparés entre 0 et 255 (par exemple, `rgb(46 139.5 87)`).

Les valeurs CSS `<color>` dans les espaces de couleur sRGB incluent {{CSSxRef("hex-color")}}, {{CSSxRef("named-color")}}, {{CSSxRef("color_value/rgb", "rgb()")}}, {{CSSxRef("color_value/hsl", "hsl()")}} (teinte, saturation, luminosité), et {{CSSxRef("color_value/hwb", "hwb()")}} (teinte, blancheur, noirceur). Il y a aussi les espaces de couleur `srgb`, `srgb-linear`, `a98-rgb`, et `prophoto-rgb` pour la fonction {{CSSxRef("color_value/color", "color()")}}.

L'espace de couleur HSV (teinte, saturation et valeur), et son synonyme HSB (teinte, saturation et luminosité), sont représentés en CSS comme {{CSSxRef("color_value/hwb", "hwb()")}}. Les couleurs nommées sont simplement des mots-clés mappés à des valeurs hexadécimales spécifiques. La conversion de ces diverses notations de couleur vers sRGB est mathématiquement simple. Notez que {{CSSxRef("&lt;color&gt;","currentColor","#mot-clé_currentcolor")}} peut être n'importe quelle couleur — elle n'est pas restreinte à sRGB.

La fonction de couleur `rgb()` n'est pas la seule fonction de couleur qui peut représenter l'espace de couleur _sRGB_. Les systèmes de coordonnées cylindriques comme les modèles de couleur [`HSL`](/fr/docs/Web/CSS/Reference/Values/color_value/hsl) (_teinte-saturation-luminosité_) ou [`HWB`](/fr/docs/Web/CSS/Reference/Values/color_value/hwb) (_teinte-blancheur-noirceur_) sont également utilisés pour représenter une couleur sRGB sur le web.

- Espace de couleur `srgb`
  - : L'espace de couleur sRGB, ou «&nbsp;RGB standard&nbsp;», est l'espace de couleur RGB (rouge, vert, bleu) standard. Il a été créé pour être utilisé sur les moniteurs, imprimantes et le Web. C'est l'espace de couleur le plus largement utilisé et il est pris en charge par la plupart des systèmes d'exploitation, programmes logiciels, moniteurs et imprimantes. sRGB est basé sur `r`, `g`, et `b`, avec des valeurs dans le gamut allant de `0` à `1`. Le point blanc est D65.

- Espace de couleur `srgb-linear`
  - : L'espace de couleur sRGB à éclairage linéaire prédéfini, `srgb-linear`, est le même que `srgb` sauf que la fonction de transfert est à éclairage linéaire sans codage gamma. L'espace de couleur `srgb-linear` accepte les trois valeurs `r`, `g`, et `b` comme paramètres numériques, avec des couleurs dans le gamut allant de `0` à `1`. Le point blanc est D65.

- Espace de couleur `display-p3`
  - : Défini par Apple, l'espace de couleur [**Display P3** <sup>(angl.)</sup>](https://www.color.org/chardata/rgb/DisplayP3.xalter) combine le gamut de couleur DCI-P3, le point blanc D65 et la courbe gamma sRGB. C'est un espace à large gamut typique des moniteurs à large gamut actuels, permettant des verts et des rouges plus vibrants que le gamut de couleur sRGB. Le `display-p3` est basé sur `r`, `g`, et `b`, avec des valeurs dans le gamut allant de `0` à `1`. Le point blanc est D65.

- Espace de couleur `a98-rgb`
  - : `a98-rgb` est l'espace de couleur Adobe® 1998 RGB conçu pour représenter toutes les couleurs CMYK en RGB. Environ 50% des couleurs visibles spécifiées par l'[espace de couleur CIELab](#espaces_de_couleur_cielab) peuvent être atteintes, englobant plus de teintes cyan-vert que d'autres espaces de couleur RGB. Les valeurs `r`, `g`, et `b` dans le gamut vont de `0` à `1`. La courbe de transfert est une fonction gamma, proche mais pas exactement 1/2.2. Le point blanc est D65.

- `prophoto-rgb`
  - : Développé par Kodak, l'espace de couleur `prophoto-rgb` peut représenter toutes les couleurs susceptibles de se produire dans la nature et environ 90% des [couleurs CIElab](#espaces_de_couleur_cielab). Les valeurs `r`, `g`, et `b` dans le gamut vont de `0` à `1`. La courbe de transfert est une fonction gamma, avec une valeur de 1/1.8, et une petite portion linéaire près du noir. Le point blanc est D50, le même que celui utilisé par CIELab.

- `rec2020`
  - : `rec2020` est un standard de l'industrie de la diffusion pour les téléviseurs ultra-haute définition 4k et 8k. L'espace à gamut ultra-large est capable de représenter presque toutes les couleurs réelles visibles, au-delà des capacités de la plupart des écrans actuels. La couverture devrait augmenter avec le temps à mesure que les écrans s'améliorent. Les valeurs `r`, `g`, et `b` dans le gamut vont de `0` à `1`. Le point blanc est D65.

> [!NOTE]
> Les espaces RGB cylindriques supplémentaires qui ne sont pas dans la spécification CSS incluent&nbsp;: `HSI` (teinte, saturation et intensité), `Okhsv`, `Okhsl`, `HSLuv`, `HPLuv`, et `Cubehelix`.

### Espaces de couleur CIELAB

L'espace de couleur CIELAB (ou CIELab), également appelé L\*a\*b* (ou Lab* en abrégé), représente toute la gamme de couleurs que les humain·e·s peuvent voir. Cet espace de couleur a été défini par la Commission internationale de l'éclairage (CIE). Il exprime la couleur comme trois valeurs&nbsp;: L\* pour la luminosité perceptuelle, et a\* et b\* pour les quatre couleurs uniques de la vision humaine&nbsp;: rouge, vert, bleu et jaune.

Lab est un système de coordonnées rectangulaires, avec un axe central de luminosité `L`. Les valeurs positives le long de l'axe `a` sont un rouge pourpre tandis que les valeurs négatives sont le complément&nbsp;: vert. Les valeurs positives le long de l'axe `b` sont jaunes et les négatives sont bleues/violettes. Les couleurs désaturées ont de petites valeurs pour `a` et `b` avec des valeurs absolues plus grandes étant plus saturées.

Les fonctions de couleur CIELab incluent {{CSSxRef("color_value/lab", "lab()")}} (luminosité, axe a, axe b) et {{CSSxRef("color_value/lch", "lch()")}} (luminosité, chroma, teinte) ainsi que {{CSSxRef("color_value/oklab", "oklab()")}} et {{CSSxRef("color_value/oklch", "oklch()")}}. Les valeurs de luminosité sont les mêmes, mais `lch()` et `oklch` sont des systèmes de coordonnées polaires, cylindriques, qui utilisent des coordonnées polaires `C` (chroma) et `H` (teinte) plutôt que des axes.

> [!NOTE]
> La teinte et la luminosité dans `lch()` et `oklch` sont différentes des valeurs de même nom dans {{CSSxRef("color_value/hsl", "hsl()")}} ou d'autres espaces de couleur sRGB.

Les espaces de couleur CIELab, y compris Lab, LCH, Oklab et OkLCh, sont des espaces de couleur indépendants de l'appareil.

- Espace de couleur `lab-d50`
  - : Exprime la couleur comme `L` dans une plage de `0` à `100`, et `a` et `b` avec une plage de `-125` à `125`. Les axes `a` et `b` ne sont pas liés par ces valeurs de plage, qui sont des références pour définir les entrées et sorties de pourcentage en relation avec l'espace de couleur `Display P3`. Le point blanc est D50.

- Espace de couleur `lab-d65`
  - : Cet espace de couleur est le même que `lab-d50`, sauf que le point blanc est D65.

- Espace de couleur `oklab`
  - : Similaire à `lab-d65`, mais la plage pour `L` est `0` à `1`, et `a` et `b` vont de `-0.4` à `0.4`.

### Espaces de couleur XYZ

Bien que les combinaisons de rouge, vert et bleu fonctionnent bien pour représenter les couleurs à l'écran, sRGB ne correspond pas directement à la façon dont les humain·e·s perçoivent la couleur. Créés par la Commission internationale de l'éclairage (CIE) en 1931, les espaces de couleur CIE 1931 XYZ (ou XYZ en abrégé) sont les premiers liens quantitatifs définis entre les distributions de longueurs d'onde dans le spectre visible électromagnétique et les couleurs perçues dans la vision humaine.

Les personnes avec une vision normale ont trois types de cellules coniques qui détectent la lumière, ayant des pics de sensibilité spectrale à différentes longueurs d'onde. Les paramètres CIE X, Y et Z correspondent aux niveaux de stimuli des trois types de cellules coniques qui, en principe, décrivent chaque couleur visible. Le canal `Y` représente la luminance d'une couleur. Le canal `Z` reflète la quantité de bleu dans la couleur mais n'est pas le même que le `B` en RGB. L'axe `X` est orthogonal aux axes Y et Z du système de coordonnées 3D de couleur XYZ.

- Espaces de couleur `xyz` et `xyz-d65`
  - : L'identifiant `xyz` est un synonyme pour l'espace de couleur `xyz-d65`. Les axes ne sont pas limités à une plage de `0` à `1` car l'espace de couleur n'est pas lié à cette plage&nbsp;; ces valeurs ne sont utilisées que comme points de référence pour définir les entrées et sorties de pourcentage. Le point blanc est D65.

- Espace de couleur `xyz-d50`
  - : `xyz-d50` est le même que `xyz-d65` sauf qu'il utilise D50 comme point blanc.

## Voir aussi

- La fonctionnalité `@media` {{CSSxRef("@media/color-gamut", "color-gamut")}}
- [Type de donnée CSS&nbsp;: `<color>`](/fr/docs/Web/CSS/Reference/Values/color_value)
- [Espace de couleur sRGB <sup>(angl.)</sup>](https://webstore.iec.ch/en/publication/6168)
- [Espace de couleur CIELAB](https://fr.wikipedia.org/wiki/L*a*b*_CIE_1976) sur Wikipédia
- [Espace de couleur CIE 1931](https://fr.wikipedia.org/wiki/CIE_XYZ) sur Wikipédia
- [Espace de couleur Oklab <sup>(angl.)</sup>](https://bottosson.github.io/posts/oklab/)
