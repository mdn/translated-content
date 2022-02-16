---
title: <length>
slug: Web/CSS/length
tags:
  - CSS
  - Reference
  - Type
  - Type de donnée
translation_of: Web/CSS/length
---
{{CSSRef}}

Le type de données CSS **`<length>`** correspond à une mesure de distance.

De nombreuses propriétés CSS utilisent des valeurs de longueurs. Entre autres, on pourra énumérer {{cssxref("width")}}, {{cssxref("margin")}}, {{cssxref("padding")}}, {{cssxref("font-size")}}, {{cssxref("border-width")}}, {{cssxref("text-shadow")}}, …

Pour certaines propriétés, l'utilisation d'une longueur négative est une erreur de syntaxe, pour d'autres, elles sont autorisées.

On notera que bien que les valeurs {{cssxref("&lt;percentage&gt;")}} soient aussi des dimensions CSS et acceptées par certaines propriétés CSS acceptant les valeurs `<length>`, ce sont bien deux types distincts. Voir {{cssxref("&lt;length-percentage&gt;")}}.

## Syntaxe

Une longueur est un nombre (type {{cssxref("&lt;number&gt;")}}) immédiatement suivi d'une unité de longueur (`px`, `em`, `pc`, `in`, `mm`…). Comme toutes les dimensions CSS, il n'y aucun espace entre le nombre et l'unité. L'unité est optionnelle pour la valeur nulle.

> **Note :** Certaines propriétés permettent d'utiliser des longueurs négatives alors que d'autres n'acceptent que des valeurs positives.

### Unités

#### Unités de longueur relatives

Les longueurs relatives permettent d'indiquer une longueur basée sur la taille d'un caractère dans une police donnée, sur la taille de l'élément parent ou sur la taille de la zone d'affichage (_viewport_). Les unités associées permettent d'indiquer à quelle taille elles se rapportent.

##### Longueurs liées à la police

Les unités relatives aux polices de caractères permettent d'obtenir des longueurs basées sur la taille d'un caractère ou la caractéristique de la police utilisée pour l'élément courant ou pour un élément parent.

- `cap`
  - : Cette unité représente la taille nominale d'une lettre capitale pour la police ({{cssxref("font")}}) de l'élément.
- `ch`
  - : Cette unité représente la largeur du caractère « 0 » (zéro, le caractère Unicode U+0030) dans la police actuelle. Dans les cas où il est impossible ou trop complexe de déterminer la taille du glyphe pour « 0 », on prend l'hypothèse que celui-ci mesure 0.5em de large sur 1em de haut.
- `em`

  - : Cette unité représente la {{cssxref("font-size")}} calculée de l'élément. Si utilisée avec la propriété {{cssxref("font-size")}}, elle représente la taille de police _héritée_ de l'élément.

    > **Note :** Cette unité est souvent utilisée pour créer des mises en page s'adaptant à la taille des contenus, qui gardent le [rythme vertical de la page](http://24ways.org/2006/compose-to-a-vertical-rhythm/), même lorsque l'utilisateur change la taille des polices. Les propriétés CSS {{cssxref("line-height")}}, {{cssxref("font-size")}}, {{cssxref("margin-bottom")}} et {{cssxref("margin-top")}} ont souvent des dimensions exprimées en **em**.

- `ex`
  - : Cette unité représente la [hauteur d'x](https://fr.wikipedia.org/wiki/Hauteur_d%27x) de la {{cssxref("font")}} de l'élément. Il peut s'agir généralement de la hauteur des lettres bas de casse de la police. `1ex ≈ 0.5em` dans de nombreuses polices.
- `ic`
  - : Cette unité représente la largeur entre le début du caractère “水” (U+6C34) et le début du caractère suivant selon la police utilisée et après que les transformations qui modifient la taille des caractères aient été appliquées.
- `lh`
  - : Cette unité représente la valeur calculée de la propriété {{cssxref("line-height")}}, convertie en longueur absolue, de l'élément sur lequel elle est utilisée.
- `rem`

  - : Cette unité représente la {{cssxref("font-size")}} de l'élément racine (par exemple la taille de la police de l'élément {{HTMLElement("html")}}). Quand utilisée avec {{cssxref("font-size")}} sur l'élément racine, elle représente sa valeur initiale.

    > **Note :** Cette unité est utile pour la création de mises en page s'adaptant à la taille des contenus. Si elle n'est pas supportée par les navigateurs ciblés, ces mises en pages peuvent être réalisées en utilisant l'unité **em**, mais la réalisation est un petit peu plus complexe.

- `rlh`
  - : Cette unité représente la valeur calculée de la propriété {{cssxref("line-height")}} de l'élément racine, convertie en longueur absolue. Lorsque cette unité est utilisée pour les propriétés {{cssxref("font-size")}} ou {{cssxref("line-height")}} de l'élément racine, l'unité `rlh` fait référence aux valeurs initiales des propriétés.

##### Longueurs liées au _viewport_

Les longueurs liées au _viewport_ définissent une longueur relative à la taille du _viewport_, qui correspond à la partie visible du document.

Dans un bloc de déclaration {{cssxref("@page")}}, l'utilisation des longueurs liées au _viewport_ sont invalides et la déclaration sera ignorée.

- `vb`
  - : 1 % de la taille du bloc englobant initial selon la direction de bloc (la direction orthogonale au sens d'écriture) de l'élément racine.
- `vh`

  - : 1/100

    <sup>e</sup>

    de la hauteur du _viewport_.

- `vi`
  - : 1 % de la taille du bloc englobant initial selon la direction en ligne (la direction du sens d'écriture) de l'élément racine.
- `vw`

  - : 1/100

    <sup>e</sup>

    de la largeur du _viewport_.

- `vmin`

  - : 1/100

    <sup>e</sup>

    du côté le plus petit du _viewport_.

- `vmax`

  - : 1/100

    <sup>e</sup>

    du côté le plus grand du _viewport_.

#### Unités de longueur absolues

Les unités de longueur absolues représentent une mesure physique. Cela est réalisé en faisant correspondre une des unités à une unité physique et en définissant les autres relativement à elle. La correspondance est différente pour les périphériques basse-résolution, tels que les écrans, et pour les périphériques haute-résolution, comme les imprimantes.

Pour les périphériques ayant un faible nombre de points par pouce, l’unité **px** représente le pixel de _référence physique_ et les autres sont définies de façon relative à lui. Ainsi, `1in` est définit comme `96px`, ce qui équivaut à `72pt`. Sur de tels périphériques, cette définition à pour conséquence que la longueur exprimée en pouces (`in`), centimètres (`cm`) et millimètres (`mm`) ne correspondent pas forcément à la longueur de l’unité physique du même nom.

Pour les périphériques ayant un nombre de points par pouce élevé, les pouces (`in`), centimètres (`cm`) et millimètres (`mm`) sont définis comme leur équivalent physique. Par conséquent, l’unité **px** est définie comme étant relavite à eux (1/96 de pouce).

> **Note :** Les utilisateurs peuvent augmenter la taille des polices pour des raisons d’accessibilité. Pour permettre des mises en page adaptées quelque soit la taille des polices, utilisez uniquement des unités de longueur quand les caractéristiques physiques du média de sortie sont connues, telles que les images matricielles (bitmap) et sinon, privilégiez les unités relatives telles que `em` et `rem` (notamment pour {{cssxref("font-size")}}).

- `px`
  - : Pour l'affichage sur écran, correspond typiquement à un pixel de l'affichage. Pour les écrans en haute résolution et les imprimantes, un pixel CSS correspond à plusieurs pixels du périphérique, de sorte que le nombre de pixels par pouce (ppi) reste aux alentours de 96.
- `mm`
  - : Un millimètre. Pour l'affichage sur écran, le nombre de pixels par millimètre est déterminé par l'estimation du système (souvent incorrecte) de la résolution de son affichage.
- `Q`{{experimental_inline}}

  - : Un quart de millimètre (1/40

    <sup>e</sup>

    de centimètre).

- `cm`
  - : Un centimètre (ou 10 millimètres). Pour l'affichage sur écran, le nombre de pixels par centimètre est déterminé par l'estimation du système (souvent incorrecte) de la résolution de son affichage.
- `in`
  - : Un pouce (soit 2,54 centimètres). Pour l'affichage sur écran, le nombre de pixels par pouce est déterminé par l'estimation du système (souvent incorrecte) de la résolution de son affichage.
- `pt`

  - : Un point pica (soit 1/72

    <sup>e</sup>

    de pouce). Pour l'affichage sur écran, le nombre de pixels par point est déterminé par l'estimation du système (souvent incorrecte) de la résolution de son affichage.

- `pc`

  - : Un pica (soit 12 points, soit 1/6

    <sup>e</sup>

    de pouce). Pour l'affichage sur écran, le nombre de pixels par pica est déterminé par l'estimation du système (souvent incorrecte) de la résolution de son affichage.

- `mozmm` {{non-standard_inline}}, retiré avec Firefox 59
  - : Une unité expérimentale qui tente de représenter exactement un millimètre, quelque soit la taille ou la résolution de l’affichage. C’est rarement ce que nous voulons, mais peut être utile en particulier pour les terminaux mobiles.

## Unités CSS et points par pouce

> **Note :** L’unité `in` ne représente pas un pouce physique de l’écran, mais `96px`. Celà signifie que quelque soit la densité de pixel réelle de l’écran, elle est supposée correspondre à `96dpi`. Sur les périphériques dotés d’une plus grande densité de pixel, `1in` fera moins d’1 pouce physique. De la même manière, `mm`, `cm`, et `pt` ne sont pas des longueurs absolues.

Quelques exemples particuliers :

- `1in` est toujours égal à `96px,`
- `3pt` est toujours égal à `4px`,
- `25.4mm` est toujours égal à `96px.`

## Interpolation

Les valeurs du type `<length>` peuvent être interpolées de manière à rendre les animations possibles. Dans ce cas l'interpolation se fait par des nombres réels à virgule flottante. L'interpolation se fait sur les valeurs calculées. La rapidité de l'interpolation est déterminée par la {{cssxref("easing-function","fonction de temporisation","",1)}} associée à l'animation.

## Spécifications

| Spécification                                                                                | État                             | Commentaires                                                                                     |
| -------------------------------------------------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 Values', '#lengths', '&lt;length&gt;')}}                 | {{Spec2('CSS4 Values')}} | Ajout des unités `vi`, `vb`, `ic`, `lh` et `rlh`.                                                |
| {{SpecName('CSS3 Values', '#lengths', '&lt;length&gt;')}}                 | {{Spec2('CSS3 Values')}} | Ajout des unités `ch`, `rem`, `vw`, `vh`, `vmin`, `vmax`                                         |
| {{SpecName('CSS2.1', 'syndata.html#length-units', '&lt;length&gt;')}} | {{Spec2('CSS2.1')}}         | Définition explicite des unités `em`, `pt`, `pc`, `px` (la définition était implicite pour CSS1) |
| {{SpecName('CSS1', '#length-units', '&lt;length&gt;')}}                     | {{Spec2('CSS1')}}         | Définition initiale. Définition implicite des unités `em`, `pt`, `pc` et `px`.                   |

## Compatibilité des navigateurs

{{Compat("css.types.length")}}

## Voir aussi

- [Tutoriel sur les unités et valeurs CSS](/en-US/docs/Learn/CSS/Building_blocks/Values_and_units)
- [Référence des unités et valeurs en CSS](/fr/docs/Web/CSS/CSS_Values_and_Units)
- [Modèle de boîtes CSS](/fr/docs/Web/CSS/CSS_Box_Model)
