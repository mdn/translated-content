---
title: Valeurs et unités CSS
slug: Learn/CSS/Building_blocks/Values_and_units
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}

Chaque propriété utilisée en CSS possède un type de valeur qui définit l'ensemble des valeurs autorisées pour cette propriété. Visiter des pages de propriétés sur MDN vous aidera à comprendre les valeurs associées à un type de valeur, qui sont valides pour une propriété particulière. Dans cette leçon, nous allons observer quelques-uns des types de valeur les plus fréquemment utilisés, ainsi que leurs valeurs et unités les plus communes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Maîtrise élémentaire de l'informatique,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >suite logicielle de base installée</a
        >, compétences élémentaires pour
        <a
          href="/fr/docs/Apprendre/Commencer_avec_le_web/Gérer_les_fichiers"
          >travailler avec des fichiers</a
        >, connaissance de base du HTML (cf.
        <a href="/fr/docs/Apprendre/HTML/Introduction_à_HTML"
          >Introduction à HTML</a
        >), et une idée de
        <a href="/fr/docs/Learn/CSS/First_steps/How_CSS_works"
          >Comment fonctionne CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre les différents types de valeurs et d'unités utilisés dans les
        propriétés CSS.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est-ce qu'une valeur CSS&nbsp;?

Dans les spécifications CSS et sur les pages de propriétés présentes sur MDN, vous pourrez identifier les types de valeurs, car ils sont entourés par des chevrons, tel que [`<color>`](/fr/docs/Web/CSS/color_value) ou [`<length>`](/fr/docs/Web/CSS/length). Quand vous voyez le type de valeur `<color>`, valide pour une propriété particulière, cela signifie que vous pouvez utiliser n'importe quelle couleur valide comme valeur pour cette propriété, comme énoncé dans la page de référence de [`<color>`](/fr/docs/Web/CSS/color_value).

> **Note :** Vous verrez également des valeurs CSS appelées _types de données_. Les termes sont interchangeables — Quand vous voyez quelque chose en CSS identifié comme type de données, c'est juste une façon différente de dire type de valeur. Le terme _valeur_ se rapporte à n'importe quelle expression particulière supportée par un type de valeur que vous avez choisi d'utiliser.

> **Note :** Oui, les types de valeurs CSS tendent à être indiqués par des chevrons, pour les différencier des propriétés CSS (ex : la propriété [`color`](/fr/docs/Web/CSS/color), comparée au type de données [\<color>](/fr/docs/Web/CSS/color_value)). Vous pourriez aussi être désorienté entre les types de données CSS et les éléments HTML, car ils utilisent tous deux les chevrons, mais c'est peu probable — ils sont utilisés dans des contextes très différents.

Dans l'exemple suivant, nous avons défini la couleur de notre titre en utilisant un mot-clé, et la couleur de fond en utilisant la fonction `rgb()`&nbsp;:

```css
h1 {
  color: black;
  background-color: rgb(197, 93, 161);
}
```

Un type de valeur en CSS est une manière de définir un ensemble de valeurs autorisées. Cela signifie que si vous voyez `<color>` comme valide, vous n'avez pas besoin de vous demander quel type de valeur vous pouvez utiliser — mot-clés, valeurs hex, fonctions `rgb()`, etc. Vous pouvez utiliser _n'importe quelle_ valeur `<color>` disponible, en supposant qu'elle soit supportée par votre navigateur. La page MDN pour chaque valeur vous donnera les informations au sujet du support par le navigateur. Par exemple, si vous regardez la page [`<color>`](/fr/docs/Web/CSS/color_value), vous verrez que la section sur la compatibilité des navigateurs liste différents types de valeurs pour "color" et le support.

Observons quelques-uns des types de valeurs et d'unités que vous pouvez fréquemment rencontrer, avec des exemples, pour que vous puissiez essayer différentes valeurs possibles.

## Nombres, longueurs et pourcentages

Il existe plusieurs types de valeur numérique que vous pourrez utiliser en CSS. Les types qui suivent sont classés comme numériques :

| Type de donnée                                | Description                                                                                                                                                                                                                                                                                                                                                                 |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`<integer>`](/fr/docs/Web/CSS/integer)       | Une valeur de type `<integer>` est un nombre entier comme `1024` ou `-55`.                                                                                                                                                                                                                                                                                                  |
| [`<number>`](/fr/docs/Web/CSS/number)         | Une valeur de type `<number>` représente un nombre décimal (qui peut avoir ou ne pas avoir de partie décimale). Par exemple : `0.255`, `128`, ou `-1.2`.                                                                                                                                                                                                                    |
| [`<dimension>`](/fr/docs/Web/CSS/dimension)   | Une valeur de type `<dimension>` est une valeur de type `<number>` à laquelle est attachée une unité. Par exemple : `45deg`, `5s`, ou `10px`. `<dimension>` est une catégorie de type qui inclut les types [`<length>`](/fr/docs/Web/CSS/length), [`<angle>`](/fr/docs/Web/CSS/angle), [`<time>`](/fr/docs/Web/CSS/time), et [`<resolution>`](/fr/docs/Web/CSS/resolution). |
| [`<percentage>`](/fr/docs/Web/CSS/percentage) | Une valeur de type `<percentage>` représente une fraction relative à une autre valeur. Par exemple : `50%`. Les valeurs de pourcentages sont toujours relatives à une autre quantité. Ainsi, la longueur d'un élément pourra être relative à la longueur de son élément parent.                                                                                             |

### Longueurs

Le type numérique que vous rencontrerez le plus souvent est le type `<length>`. Par exemple : `10px` (pixels) ou `30em`. Il existe deux types de longueurs en CSS&nbsp;: les longueurs relatives et les longueurs absolues. Connaître la différence entre les deux est important pour comprendre la taille que les éléments obtiendront.

#### Unités de longueur absolue

La liste qui suit contient uniquement des unités de longueur **absolue**. Ces quantités ne sont pas relatives à quoi que ce soit d'autre et leur taille sera considérée comme constante.

| Unité | Nom                              | Équivalent à         |
| ----- | -------------------------------- | -------------------- |
| `cm`  | Centimètres                      | 1cm = 38px = 25/64in |
| `mm`  | Millimètres                      | 1mm = 1/10th of 1cm  |
| `Q`   | Quarts de millimètre             | 1Q = 1/40th of 1cm   |
| `in`  | Pouces (<i lang="en">inches</i>) | 1in = 2.54cm = 96px  |
| `pc`  | Picas                            | 1pc = 1/6e de 1in    |
| `pt`  | Points                           | 1pt = 1/72e de 1in   |
| `px`  | Pixels                           | 1px = 1/96th de 1in  |

La plupart de ces unités sont utiles pour l'impression plutôt que pour l'affichage sur un écran. Ainsi, on n'utilise généralement pas `cm` (centimètres) sur un écran. La seule unité ici que vous rencontrerez fréquemment est `px` (pixels).

#### Unités de longueur relative

Les unités de longueur relative permettent d'exprimer des quantités relatives à quelque chose d'autre comme la taille de la police de l'élément parent ou la taille de la zone d'affichage (<i lang="en">viewport</i>). L'avantage d'utiliser des unités relatives est qu'avec un peu d'organisation, on peut faire que la taille du texte ou d'autres éléments se mette à l'échelle, relativement à quelque chose d'autre sur la page. La plupart des unités les plus utiles pour le développement web sont présentes dans le tableau qui suit.

| Unité  | Relative à                                                                                                                                                                                                                                                     |
| ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `em`   | Pour les propriétés typographiques comme [`font-size`](/fr/docs/Web/CSS/font-size), relative à la taille de la police de l'élément parent. Pour les autres propriétés comme [`width`](/fr/docs/Web/CSS/width), relative à la taille de la police de l'élément; |
| `ex`   | La hauteur d'x de la police de l'élément.                                                                                                                                                                                                                      |
| `ch`   | La [chasse/avance](<https://fr.wikipedia.org/wiki/Chasse_(typographie)>) du glyphe « 0 » pour la police de l'élément.                                                                                                                                          |
| `rem`  | La taille de la police pour l'élément racine.                                                                                                                                                                                                                  |
| `lh`   | La hauteur de ligne pour l'élément.                                                                                                                                                                                                                            |
| `vw`   | 1% de la largeur du <i lang="en">viewport</i> (la zone d'affichage).                                                                                                                                                                                           |
| `vh`   | 1% de la hauteur du <i lang="en">viewport</i> (la zone d'affichage).                                                                                                                                                                                           |
| `vmin` | 1% de la plus petite dimension du <i lang="en">viewport</i> (la zone d'affichage).                                                                                                                                                                             |
| `vmax` | 1% de la plus grande dimension du <i lang="en">viewport</i> (la zone d'affichage).                                                                                                                                                                             |

#### Exploration d'un exemple

Dans l'exemple qui suit, vous pouvez observer le fonctionnement de certaines unités de longueur relative et absolue. La première boîte a la propriété [`width`](/fr/docs/Web/CSS/width) définie en pixels. Il s'agit d'une unité absolue et cette largeur restera donc la même, quels que soient les autres changements.

La deuxième boîte a sa largeur définie avec l'unité `vw` (relative à la largeur de la zone d'affichage). Cette valeur est relative à la largeur du <i lang="en">viewport</i>. Ainsi, `10vw` correspondra à 10 pourcents de la largeur de la zone d'affichage. Si vous changez la largeur de la fenêtre de votre navigateur, la taille de cette boîte devrait changer. Toutefois, si l'exemple est intégré dans la page avec un élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe), cela ne fonctionnera pas. Pour voir concrètement le résultat, vous devrez ouvrir [l'exemple dans un nouvel onglet avant d'ajuster la taille de votre fenêtre](https://mdn.github.io/css-examples/learn/values-units/length.html).

La troisième boîte utilise les unités `em`. Ces unités sont relatives à la taille de la police. On a défini une taille de police de `1em` sur l'élément [`<div>`](/fr/docs/Web/HTML/Element/div) englobant et qui a la classe `.wrapper`. Passez cette valeur à `1.5em` et vous pourrez voir que la taille de la police de tous les éléments augmente mais que seul le dernier élément s'élargit du fait que sa largeur soit relative à cette taille de police.

Après avoir suivi ces instructions, n'hésitez pas à modifier les valeurs autrement pour voir ce que ça donne.

{{EmbedGHLiveSample("css-examples/learn/values-units/length.html", '100%', 820)}}

#### ems et rems

`em` et `rem` sont deux unités de longueur relative que vous rencontrerez fréquemment dès que vous dimensionnerez des boîtes ou du texte. Aussi, il est intéressant de comprendre leur fonctionnement, les différences entre ces deux unités, surtout avant d'aborder des sujets plus complexes comme [la mise en forme du texte](/fr/docs/Learn/CSS/Styling_text) ou [les dispositions CSS](/fr/docs/Learn/CSS/CSS_layout). L'exemple qui suit fournit une démonstration.

Le HTML utilisé ci-après est un ensemble de listes imbriquées&nbsp;: il y a trois listes au total et les exemples partagent tous le même code HTML. La seule différence est que le premier utilise une classe _ems_ et que le second utilise une classe _rems_.

Pour commencer, on définit la taille de la police à 16px sur l'élément `<html>`.

**Pour récapituler, l'unité `em` signifie «&nbsp;la taille de police de l'élément parent&nbsp;»** pour ce qui concerne la typographie. Les éléments [`<li>`](/fr/docs/Web/HTML/Element/li) à l'intérieur de [`<ul>`](/fr/docs/Web/HTML/Element/ul) et qui ont un attribut `class` avec `ems` prendront donc leur taille en fonction de celle de leur parent. Aussi, chaque niveau plus grand que le précédent, car chacun a une taille de police de `1.3em` soit 1,3 fois plus grand que la taille de police pour l'élément parent.

**Pour récapituler, l'unité `rem` signifie «&nbsp;la taille de police de l'élément racine&nbsp;»** (rem est l'acronyme anglais de «&nbsp;<i lang="en">root em</i>&nbsp;» qu'on pourrait traduire par «&nbsp;em racine&nbsp;».) Les éléments [`<li>`](/fr/docs/Web/HTML/Element/li) à l'intérieur de [`<ul>`](/fr/docs/Web/HTML/Element/ul) et qui ont un attribut `class` avec `rems` prendront leur taille à partir de l'élément racine (`<html>`). Cela signifie que les niveaux successifs ne gagneront pas en largeur.

Toutefois, si vous modifier la taille de la police avec `font-size` pour `<html>` dans la feuille CSS, vous pourrez voir que toutes les tailles varient en fonction de celle-ci, tant celles qui utilisent `rem` que celles qui utilisent `em`.

{{EmbedGHLiveSample("css-examples/learn/values-units/em-rem.html", '100%', 1000)}}

### Pourcentages

Dans la plupart des cas, un pourcentage est traité comme une longueur. Un pourcentage est toujours relatif à une autre valeur. Ainsi, si vous définissez la propriété `font-size` d'un élément avec un pourcentage, ce pourcentage sera relatif à la valeur de `font-size` de l'élément parent. Si vous utilisez un pourcentage pour `width`, la valeur obtenue sera le pourcentage de la valeur de `width` pour l'élément parent.

Dans l'exemple qui suit, on a deux boîtes dimensionnées avec des pourcentages et deux boîtes dimensionnées en pixels, elles partagent les mêmes noms de classes. Chaque ensemble est dimensionné respectivement avec 40% et 200px.

La différence est que le deuxième ensemble avec les deux boîtes se situe dans un contenant large de 400 pixels. La boîte dimensionnée avec 200px a la même largeur que dans le premier ensemble, en revanche, la boîte dimensionnée avec 40% a une largeur de 40% de 400px ce qui est beaucoup plus étroit que l'autre&nbsp;!

**Essayez de modifier la largeur du bloc englobant ou la valeur du pourcentage pour voir comment cela fonctionne.**

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage.html", '100%', 850)}}

Le prochain exemple utilise des tailles de police définies en pourcentages. Chaque élément `<li>` a `font-size` avec 80%, ainsi les éléments de listes imbriqués deviennent de plus en plus petits en héritant de la taille de leur parent.

{{EmbedGHLiveSample("css-examples/learn/values-units/percentage-fonts.html", '100%', 650)}}

On notera que, bien que de nombreuses propriétés acceptent une longueur ou un pourcentage, il en existe certaines qui n'acceptent que des longueurs. Vous pouvez voir cette information sur les pages de référence de chaque propriété sur MDN. Si les valeurs autorisées incluent le type [`<length-percentage>`](/fr/docs/Web/CSS/length-percentage), on peut utiliser une longueur ou un pourcentage. Si les valeurs autorisées n'incluent que `<length>`, il n'est pas possible d'utiliser un pourcentage.

### Nombres

Certains types de valeur acceptent des nombres, sans unité. Une telle propriété est, par exemple, `opacity` qui contrôle l'opacité d'un élément. Cette propriété acceptera une valeur numérique (sans unité) comprise entre `0` (transparence complète) et `1` (complètement opaque).

**Dans l'exemple qui suit, essayez de modifier la valeur de la propriété `opacity` en utilisant différentes valeurs décimales entre `0` et `1` afin de voir comment la boîte et son contenu changent en opacité.**

{{EmbedGHLiveSample("css-examples/learn/values-units/opacity.html", '100%', 500)}}

> **Note :** Lorsqu'on utilise un nombre pour une valeur en CSS, il ne doit pas être écrit avec des guillemets ou quotes autour.

## Couleur

Il existe de nombreuses façons d'utiliser des couleurs en CSS, certaines ayant été plus récemment implémentées que d'autres. Les mêmes valeurs de couleur peuvent être utilisées n'importe où en CSS, qu'il s'agisse d'une couleur pour du texte, d'une couleur d'arrière-plan ou de toute autre couleur.

Le système standard de couleurs disponible pour les ordinateurs modernes utilise 24 bits, ce qui permet d'afficher 16,7 millions de couleurs différentes par des combinaisons de canaux rouge, vert et bleu dont chacun peut avoir 256 valeurs distinctes (256 x 256 x 256 = 16 777 216). Voyons quelques façons d'indiquer des couleurs en CSS.

> **Note :** Dans ce tutoriel, nous verrons les méthodes communément utilisées pour définir les couleurs et qui disposent d'une bonne prise en charge des navigateurs. Il en existe d'autres, mais elles sont moins bien prises en charge et sont moins fréquentes.

### Mots-clés pour les couleurs

Dans la plupart des exemples de cette section d'apprentissage ou à d'autres endroits sur MDN, vous verrez des mots-clés utilisés pour définir des couleurs : il s'agit d'une méthode simple et compréhensible pour indiquer une couleur. Il existe de nombreux mots-clés, certains avec des noms plutôt amusants. Vous pouvez consulter la liste complète sur la page pour le type de valeur [`<color>`](/fr/docs/Web/CSS/color_value).

**Essayez de manipuler les différentes valeurs de couleur dans l'exemple ci-après afin de mieux comprendre comment celles-ci fonctionnent.**

### Valeurs RGB hexadécimales

Les autres valeurs de couleur que vous rencontrerez assez souvent sont celles représentées avec des codes hexadécimaux. Chaque valeur hexadécimale se compose d'un croisillon (#) suivi de six chiffres hexadécimaux dont chacun peut prendre une valeur parmi 16 : de 0 à f (la lettre utilisée pour représentée 15) (les chiffres hexadécimaux sont&nbsp;: `0123456789abcdef`). Dans ces six chiffres, chaque paire de chiffre représente la valeur pour l'un des canaux de couleurs (rouge, vert et bleu) et permet d'indiquer l'une des 256 valeurs disponibles.

Ces valeurs sont un peu plus complexes et moins faciles à comprendre, mais elles permettent d'exprimer beaucoup plus de couleurs que les mots-clés. Vous pouvez utiliser les valeurs hexadécimales pour représenter n'importe quelle couleur dans votre palette.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hex.html", '100%', 700)}}

**Là encore, essayez de modifier les valeurs pour voir comment les couleurs varient.**

### Les valeurs RGB et RGBA

La troisième façon que nous aborderons ici est RGB (pour «&nbsp;<i lang="en">Red, Green, Blue</i>&nbsp;» soit&nbsp;: rouge, vert, bleu en français). Une valeur RGB est une fonction `rgb()` à laquelle on passe trois paramètres qui représentent respectivement les valeurs des canaux rouge, vert, bleu (de la même façon que pour les valeurs hexadécimales). Contrairement aux valeurs hexadécimales, les valeurs des composantes ne sont pas exprimées en hexadécimal (avec des chiffres de 0 à f) mais avec un nombre décimal compris entre 0 et 255. Cela rend la compréhension de la valeur plus simple.

Réécrivons notre dernier exemple afin d'utiliser les couleurs RGB&nbsp;:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgb.html", '100%', 700)}}

Il est aussi possible d'utiliser des couleurs RGBA&nbsp;: celles-ci fonctionnent exactement comme les couleurs RGB (et il est donc possible d'utiliser n'importe quelle valeur RGB pour une valeur RGBA). Toutefois, les valeurs RGBA utilisent une quatrième valeur qui représente le canal alpha de la couleur qui contrôle son opacité. Avec une valeur de `0` pour le canal alpha, la couleur sera complètement transparente tandis qu'avec `1`, elle sera complètement opaque. Les valeurs intermédiaires fourniront des niveaux progressifs d'opacité.

> **Note :** Définir un canal alpha sur une couleur n'est pas exactement la même chose qu'utiliser la propriété [`opacity`](/fr/docs/Web/CSS/opacity) dont nous avons parlé auparavant. Lorsqu'on utilise `opacity`, c'est tout l'élément et ce qu'il contient qui devient plus ou moins opaque/transparent alors que lorsqu'on définit une couleur RGBA, seule la couleur est plus ou moins opaque.

Dans l'exemple qui suit, on a ajouté une image d'arrière-plan au bloc englobant les boîtes colorées. On a ensuite réglé différentes valeurs d'opacité pour les différentes boîtes&nbsp;: vous pouvez voir comment l'arrière-plan est de plus en plus visible au fur et à mesure que la valeur du canal alpha est faible.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-rgba.html", '100%', 770)}}

**Dans cet exemple, essayez de modifier les valeurs pour le canal alpha afin de voir comment la couleur est modifiée.**

> **Note :** Avec la spécification <i lang="en">CSS Colors Level 4</i>, `rgba()` est un alias pour `rgb()` et `hsla()` est un alias pour `hsl()` (voir ci-après). Pour les navigateurs qui implémentent ce standard, ces fonctions synonymes acceptent les mêmes paramètres et se comportent de la même façon. Essayez de modifier l'exemple qui précède pour passer de fonctions `rgba()` à des fonctions `rgb()` pour voir si les couleurs fonctionnent toujours. Le style que vous utiliserez ne dépend que de vous mais séparer les définitions de couleurs transparentes et de couleurs non-transparentes fournira une prise en charge navigateur (légèrement) meilleure tout en explicitant visuellement (dans votre code) où les couleurs transparentes sont définies.

### Valeurs HSL et HSLA

Avec une prise en charge légèrement plus faible que RGB, on a le modèle de couleurs HSL (non pris en charge pour d'anciennes versions d'Internet Explorer) qui a été implémentée après un intérêt marqué de la part des designers. Plutôt que d'indiquer des valeurs pour les canaux rouge, vert, bleu, la fonction `hsl()` prend des paramètres pour la teinte (<i lang="en">hue</i> en anglais), la saturation et la luminosité. Cela permet aussi d'obtenir 16,7 millions de couleurs mais différemment&nbsp;:

- **Teinte (<i lang="en">hue</i>)**&nbsp;: La couleur de base. La valeur utilisée est comprise entre 0 et 360 et représente l'angle sur une roue de couleurs.
- **Saturation**&nbsp;: La saturation de la couleur. La valeur est comprise entre 0 et 100% où 0 indique qu'il n'y a pas de couleur (ce sera une nuance de gris) et où 100% indique une saturation en couleur complète.
- **Luminosité**&nbsp;: La clarté ou la luminosité de la couleur. La valeur est comprise entre 0 et 100%, où 0 indique qu'il n'y a pas de luminosité (la couleur sera complètement noire) et où 100% indique une lumière pure (la couleur sera complètement blanche).

On peut mettre à jour notre exemple RGB afin d'utiliser les couleurs HSL&nbsp;:

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsl.html", '100%', 700)}}

À l'instar de RGBA pour RGB, il existe un équivalent HSLA à HSL qui permet aussi d'indiquer une valeur pour le canal alpha. Voici un exemple où on a converti l'exemple RGBA afin d'utiliser des couleurs HSLA.

{{EmbedGHLiveSample("css-examples/learn/values-units/color-hsla.html", '100%', 770)}}

Vous pouvez utiliser n'importe laquelle de ces couleurs dans vos projets et il est probable que, pour la plupart des projets, vous décidiez d'une palette de couleurs pour vous limiter à elles dans un souci de cohérence, de même pour la méthode utilisée pour définir les couleurs. Vous pouvez bien entendu mélanger les différents modèles de définition des couleurs, mais il est souvent mieux d'être cohérent et d'en fixer un seul pour un même projet&nbsp;!

## Images

Le type de valeur [`<image>`](/fr/docs/Web/CSS/image) est utilisé à chaque endroit où une image est une valeur valide. Il peut s'agir d'une image à proprement parler dans un fichier (avec une fonction `url()` qui utilisera l'adresse du fichier avec l'image) ou d'un dégradé.

Voici un exemple où on utilise une image et un dégradé pour la propriété CSS `background-image`.

{{EmbedGHLiveSample("css-examples/learn/values-units/image.html", '100%', 740)}}

> **Note :** il existe d'autres valeurs possibles pour le type `<image>`, toutefois celles-ci sont plus récentes et moins bien prises en charge par les navigateurs. Consultez la page MDN pour le type de données [`<image>`](/fr/docs/Web/CSS/image) si vous voulez en savoir plus.

## Position

Le type de valeur [`<position>`](/fr/docs/Web/CSS/position_value) représente un ensemble de coordonnées sur deux dimensions, utilisé pour positionner un objet comme une image d'arrière-plan (via [`background-position`](/fr/docs/Web/CSS/background-position)). Ces valeurs peuvent être indiquées avec des mots-clés comme `top`, `left`, `bottom`, `right`, et `center` afin d'aligner les objets sur les bords d'une boîte en deux dimensions et avec des longueurs qui représentent les décalages par rapport au coin supérieur gauche de la boîte.

Une position se compose généralement de deux valeurs&nbsp;: la première indiquant la position horizontale et la seconde indiquant la position verticale. Si une seule valeur est fournie, l'autre valeur sera `center` par défaut.

Dans l'exemple suivant, on a positionné une image d'arrière-plan à 40px du bord haut et vers la droite du conteneur en utilisant un mot-clé.

{{EmbedGHLiveSample("css-examples/learn/values-units/position.html", '100%', 720)}}

**Manipulez, modifiez ces valeurs pour voir comment décaler l'image dans le conteneur.**

## Chaînes de caractères et identifiants

Dans les différents exemples qui précèdent, on a vu des endroits où les mots-clés sont utilisés comme valeur (par exemple `<color>` qui peut utiliser des mots-clés comme `red`, `black`, `rebeccapurple`, et `goldenrod`). Si on veut être plus précis, on dira que ces mots-clés sont des _identifiants_, une valeur spéciale comprise par le moteur CSS. Ces identifiants n'ont pas besoin d'être délimités par des guillemets/quotes&nbsp;: ce ne sont pas des chaînes de caractères.

À d'autres endroits en CSS, on utilise des chaînes de caractères, comme [lorsqu'on définit du contenu généré](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements#generating_content_with_before_and_after). Dans ces cas, la valeur est délimitée par des quotes (" ou ') pour indiquer qu'il s'agit bien d'une chaîne de caractères. Dans l'exemple qui suit, on utilise des mots-clés de couleur (des identifiants sans quote) ainsi qu'une chaîne de caractères pour du contenu généré.

{{EmbedGHLiveSample("css-examples/learn/values-units/strings-idents.html", '100%', 550)}}

## Functions

Les dernières valeurs que nous verrons ici sont les fonctions. En programmation, une fonction est une section de code réutilisable qui peut être exécutée plusieurs fois afin de réaliser une tâche de façon répétitive avec le minimum effort de la part du développeur ou de l'ordinateur. Les fonctions sont généralement associées à des langages comme JavaScript, Python ou C++ mais elles existent en CSS également pour être utilisées comme valeurs de propriétés. En fait, nous avons déjà vu des fonctions dans la section à propos des couleurs&nbsp;: `rgb()`, `hsl()`, etc. La valeur utilisée pour récupérer une image à partir d'un fichier, `url()` est également une fonction.

Une fonction qui est peut-être plus proche des langages de programmation traditionnels est la fonction CSS `calc()`. Cette fonction permet de réaliser des calculs simples à l'intérieur du code CSS. Elle s'avère particulièrement utile pour déterminer des valeurs qui ne sont pas connues d'avance lorsqu'on écrit la feuille de style CSS et pour lesquelles ce sera le navigateur qui pourra les déterminer lors de l'exécution.

Dans le prochain exemple, on utilise `calc()` afin que la boîte soit large de `20% + 100px`. Les 20% sont calculés à partir de la largeur du conteneur parent&nbsp;: `.wrapper` et changeront donc lorsque la largeur du parent changera. Ce calcul ne peut pas être effectué au préalable, car on ne peut pas savoir à l'avance ce que représenteront ces 20%. Aussi, on utilise `calc()` pour indiquer au navigateur de réaliser ce calcul.

{{EmbedGHLiveSample("css-examples/learn/values-units/calc.html", '100%', 450)}}

## Testez vos compétences&nbsp;!

Nous avons abordé de nombreuses notions dans cet article. Avez-vous retenu les informations essentielles&nbsp;? Vous pourrez trouver différents exercices pour vérifier que vous avez retenu les bonnes informations avant de poursuivre&nbsp;: rendez-vous sur [Testez vos compétences&nbsp;: valeurs et unités CSS](/fr/docs/Learn/CSS/Building_blocks/Values_tasks).

## Résumé

Voici un rapide tour des types de valeur et unités que vous pourrez rencontrer en CSS. Vous pouvez consulter la liste exhaustive des différents types sur [la page de référence MDN sur les valeurs et unités CSS](/fr/docs/Web/CSS/CSS_Values_and_Units). Vous verrez de nombreuses types et valeurs à mesure que vous progresserez dans ces leçons.

La notion cruciale à garder en mémoire est que chaque propriété possède une liste de types de valeur autorisés et que chaque type de valeur possède une définition indiquant les valeurs possibles. Vous pourrez trouver toutes les informations et détails sur MDN.

Par exemple, comprendre le type [`<image>`](/fr/docs/Web/CSS/image) vous permettra de comprendre comment créer un dégradé de couleur. C'est utile mais ce n'est pas forcément évident de prime abord.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks/Sizing_items_in_CSS", "Learn/CSS/Building_blocks")}}
