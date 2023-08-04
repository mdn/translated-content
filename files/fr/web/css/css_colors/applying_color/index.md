---
title: Appliquer des couleurs sur des éléments HTML grâce à CSS
slug: Web/CSS/CSS_colors/Applying_color
---

{{HTMLSidebar}}

La couleur fait partie intégrante des moyens d'expressions. Lorsqu'on écrit un site web, il est naturel d'y ajouter des couleurs dans la mise en forme. Avec [CSS](/fr/docs/Web/CSS), il existe de nombreuses façons d'ajouter de la couleur aux [éléments](/fr/docs/Web/HTML/Element) [HTML](/fr/docs/Web/HTML) afin d'obtenir le résultat souhaité. Cet article est une introduction détaillée aux différentes méthodes permettant d'appliquer des couleurs CSS en HTML.

L'ajout de couleur à un document HTML s'avère assez simple et permet de colorer presque tous les éléments.

Nous allons aborder la plupart des points que vous devez connaître lorsque vous utilisez des couleurs, y compris une [liste de ce que vous pouvez colorer et des propriétés CSS concernées](#things_that_can_have_color), [comment décrire une couleur](#how_to_describe_a_color), et comment [utiliser les couleurs à la fois dans les feuilles de style et dans les scripts](#using_color). Nous verrons également comment [permettre à l'utilisateur de choisir une couleur](#letting_the_user_pick_a_color).

Ensuite, nous terminerons avec une brève discussion sur [l'utilisation judicieuse des couleurs](#using_color_wisely) : comment sélectionner les couleurs adéquates tout en gardant à l'esprit les besoins des personnes daltoniennes par exemple.

## Ce qui peut être coloré

On peut appliquer une couleur sur chaque élément HTML. Voyons plutôt quelles sont les choses que l'on peut dessiner sur les éléments : le texte, la bordure, etc. Pour chacune de ces choses, nous verrons la liste des propriétés CSS qui permettent de les colorer.

De façon générale, la propriété [`color`](/fr/docs/Web/CSS/color) permet de définir la couleur de premier plan pour le contenu d'un élément HTML et la propriété [`background-color`](/fr/docs/Web/CSS/background-color) permet de définir la couleur utilisée pour l'arrière-plan de l'élément. Ces propriétés peuvent être utilisées sur la quasi-totalité des éléments HTML.

### Texte

Lorsqu'un élément est affiché à l'écran, les propriétés suivantes déterminent la couleur du texte, celle de son arrière-plan et celle des décorations.

- [`color`](/fr/docs/Web/CSS/color)
  - : Cette propriété correspondra à la couleur utilisée pour dessiner le texte ainsi que [ses décorations](/fr/docs/Learn/CSS/Styling_text/Fundamentals#font_style_font_weight_text_transform_and_text_decoration) (tels que le soulignement, le surlignement, les rayures, etc.).
- [`background-color`](/fr/docs/Web/CSS/background-color)
  - : Cette propriété correspondra à la couleur utilisée en arrière-plan du texte.
- [`text-shadow`](/fr/docs/Web/CSS/text-shadow)
  - : Cette propriété permet d'ajouter un effet d'ombre au texte. Parmi les options de cette ombre, on a la couleur de base de l'ombre (qui participe au flou et qui est fusionnée avec l'arrière-plan selon les autres paramètres. Voir [ce paragraphe](/fr/docs/Learn/CSS/Styling_text/Fundamentals#text_drop_shadows) pour en savoir plus.
- [`text-decoration-color`](/fr/docs/Web/CSS/text-decoration-color)
  - : Par défaut, les décorations du texte (le soulignement, les rayures, etc.) utilise la propriété `color` pour leurs couleurs. Il est cependant possible de passer outre cette valeur et de fournir une couleur différente avec la propriété `text-decoration-color`.
- [`text-emphasis-color`](/fr/docs/Web/CSS/text-emphasis-color)
  - : Cette propriété correspondra à la couleur utilisée pour dessiner les symboles d'emphase utilisés à côté des caractères du texte. Ces symboles sont principalement utilisés dans des textes écrits dans des langues d'Asie orientale.
- [`caret-color`](/fr/docs/Web/CSS/caret-color)
  - : Cette propriété correspondra à la couleur utilisée pour dessiner le curseur de saisie de texte dans l'élément. Cette propriété est uniquement pertinente pour les éléments qui sont éditables (par exemple [`<input>`](/fr/docs/Web/HTML/Element/Input) et [`<textarea>`](/fr/docs/Web/HTML/Element/Textarea) ou les éléments dont l'attribut [`contenteditable`](/fr/docs/Web/HTML/Global_attributes#attr-contenteditable) est activé).

### Boîtes

Chaque élément est une boîte avec du contenu. Cette boîte possède un arrière-plan et une bordure, quel que soit le contenu qu'elle renferme

- [Bordures](#borders)
  - : Voir la section [Bordures](#borders) pour la liste des propriétés CSS qui peuvent être utilisées pour colorer la bordure d'une boîte.
- [`background-color`](/fr/docs/Web/CSS/background-color)
  - : Cette propriété correspondra à la couleur d'arrière-plan, utilisée dans les zones où l'élément ne possède pas de contenu au premier plan.
- [`column-rule-color`](/fr/docs/Web/CSS/column-rule-color)
  - : Cette propriété correspondra à la couleur utilisée pour dessiner la ligne qui sépare des colonnes de texte.
- [`outline-color`](/fr/docs/Web/CSS/outline-color)
  - : Cette propriété correspondra à la couleur utilisée pour le contour de l'élément. Le contour est différent de la bordure, car il occupe un espace autour de la boîte et peut alors chevaucher le contenu d'une autre boîte. Le contour est généralement utilisé afin d'indiquer que l'élément a le focus et ainsi montrer quel élément reçoit les évènements de saisie.

### Bordures

Tout élément possède une [bordure](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) dessinée autour. Une bordure simple est représentée par une ligne dessinant un rectangle autour du contenu de l'élément. Vous pouvez lire [la mise en forme des bordures grâce à CSS](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders) afin d'approfondir ce sujet.

Il est possible d'utiliser la propriété raccourcie [`border`](/fr/docs/Web/CSS/border) qui permet de configurer l'ensemble des caractéristiques d'une bordure en une seule règle (y compris les caractéristiques qui ne sont pas liées aux couleurs comme [la largeur](/fr/docs/Web/CSS/border-width), [le style](/fr/docs/Web/CSS/border-style) (ligne pleine, pointillés, etc.) et ainsi de suite).

- [`border-color`](/fr/docs/Web/CSS/border-color)
  - : Cette propriété correspondra à la couleur qui sera utilisée pour chacun des côtés de la bordure.
- [`border-left-color`](/fr/docs/Web/CSS/border-left-color), [`border-right-color`](/fr/docs/Web/CSS/border-right-color), [`border-top-color`](/fr/docs/Web/CSS/border-top-color), [`border-bottom-color`](/fr/docs/Web/CSS/border-bottom-color)
  - : Ces propriétés permettent d'indiquer une couleur différente pour chaque côté de la bordure de l'élément.
- [`border-block-start-color`](/fr/docs/Web/CSS/border-block-start-color) et [`border-block-end-color`](/fr/docs/Web/CSS/border-block-end-color)
  - : Ces propriétés permettent de définir les couleurs utilisées pour les côtés de la bordure dans l'axe orthogonal au sens d'écriture. Ainsi, si le texte est écrit en français (de gauche à droite), `border-block-start-color` permettra de définir le côté haut de la bordure et `border-block-end-color` le côté bas. Ces propriétés sont complétées par les propriétés `border-inline-*` qui agissent sur l'autre axe.
- [`border-inline-start-color`](/fr/docs/Web/CSS/border-inline-start-color) et [`border-inline-end-color`](/fr/docs/Web/CSS/border-inline-end-color)
  - : Ces propriétés permettent de définir les couleurs utilisées pour les bordures pour les côtés sur l'axe du sens d'écriture. Les côtés impactés dépendent donc des propriétés [`writing-mode`](/fr/docs/Web/CSS/writing-mode), [`direction`](/fr/docs/Web/CSS/direction), and [`text-orientation`](/fr/docs/Web/CSS/text-orientation) qui permettent, la plupart du temps, d'ajuster la directionnalité du texte en fonction de la langue utilisée. Si le texte est écrit de droite à gauche, `border-inline-start-color` correspondra à la couleur appliquée sur le côté droit.

### Autres méthodes pour utiliser de la couleur

CSS n'est pas la seule technologie web qui gère des couleurs. Voici les autres technologies qui permettent d'apporter de la couleur sur une page web.

- [L'API Canvas](/fr/docs/Web/API/Canvas_API)
  - : Cette API permet de dessiner des graphiques matriciels en deux dimensions à l'intérieur d'un élément [`<canvas>`](/fr/docs/Web/HTML/Element/canvas). Vous pouvez lire [le tutoriel sur l'API Canvas](/fr/docs/Web/API/Canvas_API/Tutorial) pour en savoir plus.
- [SVG](/fr/docs/Web/SVG) (_Scalable Vector Graphics_)
  - : Ce format permet de dessiner des images en indiquant des commandes pour dessiner des formes, des motifs et des lignes afin de composer une image. Les commandes SVG sont construites dans un fichier XML et peuvent être embarquées dans une page web grâce à un élément [`<img>`](/fr/docs/Web/HTML/Element/Img).
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : L'API Web Graphics Library est une API basée sur OpenGL ES qui permet de dessiner en deux ou trois dimensions sur le Web. Voir [le tutoriel WebGL](/fr/docs/Web/API/WebGL_API/Tutorial) afin d'en savoir plus.

## Comment décrire une couleur

Afin de représenter une couleur en CSS, il est nécessaire de trouver une méthode pour « traduire » le concept analogique de couleur dans un format numérique qu'un ordinateur pourra utiliser. Pour ce faire, on décompose la couleur en différentes composantes. Cela peut être la part de chaque couleur primaire ou bien la teinte et la luminosité de la couleur. Bref, il existe différentes façons de décrire une couleur en CSS.

Pour des informations plus détaillées sur chaque type de valeur, vous pouvez consulter la page de la référence CSS à propos de l'unité [`<color>`](/fr/docs/Web/CSS/color_value).

### Mots-clés

Un ensemble standard de noms de couleurs a été défini et il est possible d'utiliser l'un de ces mots-clés plutôt qu'une représentation numérique s'il existe un mot-clé pour la valeur qu'on souhaite utiliser. Les mots-clés désignant les couleurs regroupent les couleurs primaires et secondaires (tels que `red` pour rouge, `blue` pour bleu, `orange`), les tons de gris (allant de `black` pour noir à `white` pour blanc et incluant des niveaux tels que `darkgray` (gris foncé) et `lightgrey` (gris clair)). D'autres couleurs sont également disponibles avec un mot-clé comme `lightseagreen`, `cornflowerblue` ou `rebeccapurple`.

Vous pouvez consulter [cette liste](/fr/docs/Web/CSS/color_value#color_keywords) pour connaître l'ensemble des mots-clés disponibles.

### Valeurs RGB

Il existe trois façons de représenter une couleur RGB en CSS.

#### La notation hexadécimale

On peut utiliser une chaîne de caractères avec des chiffres hexadécimaux afin de représenter chacune des composantes (rouge, verte, bleue) (soit, en anglais, _red_, _green_, _blue_ qui donne l'acronyme RGB). On peut également décrire une quatrième composante pour l'opacité. Chaque composante est représentée par un nombre entre 0 et 255 (ce qui correspond à 0x00 et 0xFF en notation hexadécimale) ou par un nombre entre 0 et 15 (ce qui correspond à 0x0 et 0xF en notation hexadécimale). Toutes les composantes doivent être indiquées avec le même nombre de chiffres. Si c'est la notation à un seul chiffre qui est utilisée, la couleur finale sera calculée avec chaque composante doublée, autrement dit, `"#D"` sera converti en `"#DD"`.

Lorsqu'on utilise une chaîne de caractères avec un code hexadécimal, la chaîne de caractères commence toujours par le caractère `"#"`. Le reste de la chaîne correspond aux chiffres hexadécimaux. L'utilisation des majuscules ou minuscules n'a pas d'importance.

- `"#rrggbb"`
  - : Cette forme indique une couleur opaque dont les deux premiers chiffres hexadécimaux indiquent la composante rouge (`0xrr`), les deux chiffres suivants indiquent la composante verte (`0xgg`) et les deux derniers chiffres indiquent la composante bleue (`0xbb`).
- `"#rrggbbaa"`
  - : Cette forme indique une couleur dont les deux premiers chiffres hexadécimaux indiquent la composante rouge (`0xrr`), les deux chiffres suivants indiquent la composante verte (`0xgg`), les deux chiffres suivants indiquent la composante bleue (`0xbb`), enfin, les deux derniers chiffres indiquent la composante alpha (`0xaa`) utilisée pour indiquer l'opacité de la couleur (plus la valeur est faible, plus la couleur est transparente).
- `"#rgb"`
  - : Cette forme indique une couleur dont la composante rouge vaut `0xrr`, la composante verte vaut `0xgg` et dont la composante bleue vaut `0xbb`.
- `"#rgba"`
  - : Cette forme indique une couleur dont la composante rouge vaut `0xrr`, la composante verte vaut `0xgg` et dont la composante bleue vaut `0xbb`. Le canal alpha vaut `0xaa` (plus la valeur est faible, plus la couleur sera transparente).

Par exemple, on pourra représenter un bleu pur et opaque avec les chaînes de caractères `"#0000ff"` ou `"#00f"`. Pour le rendre opaque à 25%, on utilisera `"#0000ff44"` ou `"#00f4"`.

#### La notation fonctionnelle RGB

La notation fonctionnelle RGB permet, comme les chaînes de caractères hexadécimales, de représenter des couleurs avec leurs composantes rouge, verte, bleue et éventuellement avec une composante alpha pour l'opacité. Toutefois, au lieu d'utiliser une chaîne de caractères, on utilise ici la fonction CSS [`rgb()`](/fr/docs/Web/CSS/color_value#rgb_colors). Cette fonction prend trois arguments pour chacune des composantes (dans cet ordre) rouge, verte et bleue. Un quatrième paramètre, optionnel, permet d'indiquer la valeur du canal alpha.

Voici les valeurs qui peuvent être utilisées pour chacun de ces paramètres :

- `red`, `green` et `blue`
  - : Chaque composante doit être un entier (type [`<integer>`](/fr/docs/Web/CSS/integer)) compris entre 0 et 255 (inclus) ou un pourcentage (type [`<percentage>`](/fr/docs/Web/CSS/percentage)) compris entre 0% et 100%.
- `alpha`
  - : Le canal alpha est un nombre entre 0.0 (la couleur est alors totalement transparente) et 1.0 (complètement opaque). On peut également utiliser un pourcentage où 0% correspondra à la valeur 0.0 et 100% correspondra à la valeur 1.0.

Par exemple, on pourra représenter un rouge pur à moitié opaque grâce à `rgb(255, 0, 0, 0.5)` ou grâce à `rgb(100%, 0, 0, 50%)`.

### La notation fonctionnelle HSL

D'autres personnes préfèrent manipuler [la notation HSL ou aussi appelée « Teinte saturation luminosité »](https://fr.wikipedia.org/wiki/Teinte_saturation_luminosité) (NDT : HSL signifie _Hue Saturation Lightness_ en anglais). Sur le Web, les couleurs HSL sont représentées grâce à la notation fonctionnelle `hsl()` (qui fonctionne de façon analogue à la fonction `rgb()`).

Le diagramme qui suit illustre un cylindre de couleur pour le modèle HSL : _Hue_ (la teinte) définit la couleur sur un axe radial qui parcourt les couleurs du spectre visible. La saturation est un pourcentage de la teinte entre un gris total et la couleur de la teinte vive. Enfin, la luminosité permet d'avoir des couleurs plus sombres (noir pour une luminosité nulle ou blanc pour une luminosité maximale). Cette image a été créée par [SharkD](http://commons.wikimedia.org/wiki/User:SharkD) sur [Wikipédia](https://www.wikipedia.org/) et est distribuée avec la licence [CC BY-SA 3.0](http://creativecommons.org/licenses/by-sa/3.0).

![Cylindre de couleur HSL](640px-hsl_color_solid_cylinder.png)

La valeur de la teinte (**H**) est un angle qui commence au rouge, parcourt le jaune, le vert, le cyan, le bleu et le magenta (avant de revenir à rouge avec un angle de 360°). Cette valeur identifie la teinte de base. La valeur utilisée est de type [`<angle>`](/fr/docs/Web/CSS/angle) et on peut utiliser différentes unités disponibles en CSS comme les degrés (`deg`), les radians (`rad`), les grades (`grad`) ou les tours (`turn`).

Ensuite, la saturation (**S**) indique la force de la teinte dans la couleur. Enfin, la luminosité (**L**) indique le niveau de gris de la couleur.

On peut faire une analogie avec la conception d'une couleur pour une peinture :

1. On commence avec une peinture de base qui possède l'intensité la plus forte pour une couleur donnée (par exemple, le bleu le plus intense qui puisse être affiché) : c'est la teinte (_hue_) (**H**). En CSS, c'est un angle qui détermine la couleur parmi une roue de couleurs.
2. Ensuite, on choisit une peinture avec un niveau de gris qui la force de la couleur. Est-ce qu'on veut qu'elle soit claire ou sombre, voire complètement noire ? C'est la luminosité (**L**). En CSS, c'est un pourcentage, 0% indiquant une couleur noire et 100% une couleur blanche.
3. Enfin, avec ces deux peintures, on décide de la proportion de chacune pour le mélange final : c'est la saturation (**S**). Plus cette valeur est élevée, plus on utilise la couleur de base, plus cette valeur est faible et plus on utilise la peinture grise.

Il est également possible d'ajouter un canal alpha afin d'avoir une couleur partiellement (ou totalement) transparente.

#### Exemples avec HSL

Voici quelques exemples utilisant la notation HSL :

```css hidden
table {
  border: 1px solid black;
  font:
    16px "Open Sans",
    Helvetica,
    Arial,
    sans-serif;
  border-spacing: 0;
  border-collapse: collapse;
}

th,
td {
  border: 1px solid black;
  padding: 4px 6px;
  text-align: left;
}

th {
  background-color: hsl(0, 0%, 75%);
}
```

```html hidden
<table>
  <thead>
    <tr>
      <th scope="col">Couleur en notation HSL</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>hsl(90deg, 100%, 50%)</code></td>
      <td style="background-color: hsl(90deg, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(90, 100%, 50%)</code></td>
      <td style="background-color: hsl(90, 100%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 50%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 50%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 75%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 75%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(0.15turn, 90%, 50%)</code></td>
      <td style="background-color: hsl(0.15turn, 90%, 50%);">&nbsp;</td>
    </tr>
    <tr>
      <td><code>hsl(270deg, 90%, 50%)</code></td>
      <td style="background-color: hsl(270deg, 90%, 50%);">&nbsp;</td>
    </tr>
  </tbody>
</table>
```

{{EmbedLiveSample("Exemples_avec_HSL", 300, 260)}}

> **Note :** Il est possible d'omettre l'unité pour la valeur de la teinte (_hue_), l'unité par défaut utilisée sera alors les degrés (`deg`).

## Utiliser les couleurs

Maintenant qu'on connaît les différentes propriétés CSS, comment décrire une couleur et dans quel format, on peut assembler cela pour utiliser les couleurs dans un document web. Comme on l'a vu précédemment, de nombreuses choses peuvent être colorées. Pour ce faire, on peut utiliser deux mécanismes : une « **feuille de style** » et du code JavaScript pour modifier et ajouter des couleurs dynamiquement.

### Indiquer les couleurs via une feuille de style

La façon la plus simple (et la plus fréquemment utilisée) pour appliquer des couleurs est d'utiliser une feuille de style CSS qui sera traitée par le navigateur au moment d'afficher les éléments à l'écran. Par la suite, nous verrons plusieurs exemples (sans pour autant exploiter toutes ces propriétés).

Prenons un exemple et commençons par le résultat :

{{EmbedLiveSample("Indiquer_les_couleurs_via_une_feuille_de_style", 650, 200)}}

#### HTML

Voici le fragment de code HTML utilisé pour cet exemple :

```html
<div class="conteneur">
  <div class="boite boiteGauche">
    <p>Voici la première boîte.</p>
  </div>
  <div class="boite boiteDroite">
    <p>Voici la seconde boîte.</p>
  </div>
</div>
```

Ce fragment est plutôt simple : on utilise un élément [`<div>`](/fr/docs/Web/HTML/Element/div) qui enveloppe le contenu, constitué de deux `<div>`, chacun avec une classe différente et contenant chacun un paragraphe (c'est-à-dire un élément [`<p>`](/fr/docs/Web/HTML/Element/p)).

Voyons ensuite la feuille de style CSS appliquée au bloc HTML précédent.

#### CSS

Nous allons ici étudier la feuille de style en la décomposant, partie par partie.

```css
.conteneur {
  width: 620px;
  height: 110px;
  margin: 0;
  padding: 10px;
  border: 6px solid mediumturquoise;
}
```

Le sélecteur de classe `.conteneur` permet d'appliquer des styles à l'élément [`<div>`](/fr/docs/Web/HTML/Element/div) qui enveloppe le reste du contenu. Pour ce style, on indique une largeur avec la propriété [`width`](/fr/docs/Web/CSS/width) et une hauteur avec la propriété [`height`](/fr/docs/Web/CSS/height), on définit aussi une marge et une zone de remplissage avec [`margin`](/fr/docs/Web/CSS/margin) et [`padding`](/fr/docs/Web/CSS/padding).

La règle la plus intéressante est celle où on manipule la propriété [`border`](/fr/docs/Web/CSS/border) afin de dessiner une bordure sur l'extérieur de l'élément. Cette bordure sera une ligne pleine de 6 pixels avec la couleur `mediumturquoise`.

Les deux boîtes colorées possèdent un certain nombre de propriétés communes. On utilise donc une classe : `.boite` pour laquelle on définit ces propriétés qui seront appliquées sur les deux éléments :

```css
.boite {
  width: 290px;
  height: 100px;
  margin: 0;
  padding: 4px 6px;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  display: flex;
  justify-content: center;
  align-items: center;
}
```

Pour résumer, les styles ciblés par `.boite` indiquent la taille de la boîte, la configuration de la police de caractères utilisée, centrent le contenu des boîtes grâce [aux boîtes flexibles CSS](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout). Pour cela, on utilise le mode d'affichage `flex` avec [`display: flex`](/fr/docs/Web/CSS/display) et on paramètre les propriétés [`justify-content`](/fr/docs/Web/CSS/justify-content) et [`align-items`](/fr/docs/Web/CSS/align-items) avec la valeur `center`. Ensuite, on crée une classe pour chacune des deux boîtes dont chacune définit les propriétés qui diffèrent entre ces éléments.

```css
.boiteGauche {
  float: left;
  background-color: rgb(245, 130, 130);
  outline: 2px solid darkred;
}
```

La classe `.boiteGauche` permet de mettre en forme la boîte située à gauche et on l'utilise pour définir certaines couleurs :

- La couleur de l'arrière-plan est définie grâce à la propriété [`background-color`](/fr/docs/Web/CSS/background-color) pour laquelle on fournit la valeur `rgb(245, 130, 130)`.
- Un contour est défini autour de la boîte grâce à la propriété [`outline`](/fr/docs/Web/CSS/outline). Ici, ce contour est une ligne pleine, rouge foncée (le mot-clé `darkred`) de deux pixels.
- On notera ici qu'on ne définit pas de couleur pour le texte. La valeur qui sera utilisée pour la propriété [`color`](/fr/docs/Web/CSS/color) sera celle qui est héritée par le plus proche élément englobant qui définit cette propriété. La couleur par défaut est le noir.

```css
.boiteDroite {
  float: right;
  background-color: hsl(270deg, 50%, 75%);
  outline: 4px dashed rgb(110, 20, 120);
  color: hsl(0deg, 100%, 100%);
  text-decoration: underline wavy #88ff88;
  text-shadow: 2px 2px 3px black;
}
```

Enfin, la classe `.boiteDroite` décrit les propriétés de la boîte dessinée à droite. On configure cette boîte afin qu'elle flotte à droite de la boîte précédente. Ensuite, on paramètre les couleurs suivantes :

- La propriété `background-color` est définie avec la notation fonctionnelle HSL : `hsl(270deg, 50%, 75%)`. Cela correspond à un violet.
- La propriété `outline` permet d'indiquer un contour de 4 pixels formé par une ligne pointillée dont la couleur est exprimée avec la notation fonctionnelle RGB `rgb(110, 20, 120)` (violet foncé).
- La couleur de premier plan (c'est-à-dire celle utilisée pour le texte) est définie avec la propriété [`color`](/fr/docs/Web/CSS/color) et la valeur `hsl(0deg, 100%, 100%)` qui correspond au blanc.
- On ajoute une ligne verte ondulée sous le texte avec [`text-decoration`](/fr/docs/Web/CSS/text-decoration).
- Enfin, on ajoute une ombre au texte avec la propriété [`text-shadow`](/fr/docs/Web/CSS/text-shadow) dont le paramètre de couleur vaut `black` (noir).

## Permettre à l'utilisateur de choisir une couleur

Il existe différentes situations où l'on peut/doit permettre à l'utilisateur de sélectionner une couleur. Il peut s'agir d'une interface personnalisable, d'une application de dessin, d'une application d'édition où on peut choisir la couleur du texte, etc. Bien que, par le passé, il fût nécessaire d'implémenter son propre sélecteur de couleur, HTML fournit désormais aux navigateurs une façon homogène de le faire avec un élément [`<input>`](/fr/docs/Web/HTML/Element/Input) dont l'attribut [`type`](/fr/docs/Web/HTML/Element/Input#attr-type) vaut `"color"`.

Lorsqu'on choisit une couleur via un élément `<input>`, la valeur stockée dans le document et envoyée via le formulaire est représentée avec une chaîne de caractères hexadécimale.

### Exemple : sélectionner une couleur

Prenons un exemple simple où l'utilisateur choisit une couleur qui est immédiatement appliquée sur la bordure de l'exemple. Une fois la couleur finale sélectionnée, la valeur du sélecteur de couleur est affichée.

{{EmbedLiveSample("Exemple_sélectionner_une_couleur", 525, 275)}}

> **Note :** Sur macOS, pour indiquer qu'on a fini de choisir la couleur, il faut fermer la fenêtre du sélecteur de couleur.

#### HTML

Voici le fragment HTML qui permet de créer une boîte qui contient un sélecteur de couleur avec un libellé associé (l'élément [`<label>`](/fr/docs/Web/HTML/Element/Label)) ainsi qu'un paragraphe ([`<p>`](/fr/docs/Web/HTML/Element/p)) vide dans lequel nous placerons plus tard du texte avec JavaScript.

```html
<div id="box">
  <label for="colorPicker">Couleur de la bordure :</label>
  <input type="color" value="#8888ff" id="colorPicker" />
  <p id="output"></p>
</div>
```

#### CSS

La feuille CSS détermine la taille de la boîte et une mise en forme simple. La bordure mesure deux pixels de large (mais sera modifiée par le code JavaScript qui va suivre…).

```css
#box {
  width: 500px;
  height: 200px;
  border: 2px solid rgb(245, 220, 225);
  padding: 4px 6px;
  font:
    16px "Lucida Grande",
    "Helvetica",
    "Arial",
    "sans-serif";
}
```

#### JavaScript

Le script est utilisé pour mettre à jour la couleur de la bordure afin que celle-ci corresponde à la valeur courante du sélecteur. On ajoute ensuite deux gestionnaires d'évènements pour « écouter » ce qui se passe avec l'élément [`<input type="color">`](/fr/docs/Web/HTML/Element/Input/color).

```js
let colorPicker = document.getElementById("colorPicker");
let box = document.getElementById("box");
let output = document.getElementById("output");

box.style.borderColor = colorPicker.value;

colorPicker.addEventListener(
  "input",
  function (event) {
    box.style.borderColor = event.target.value;
  },
  false,
);

colorPicker.addEventListener(
  "change",
  function (event) {
    output.innerText = "Couleur choisie : " + colorPicker.value;
  },
  false,
);
```

L'évènement [`input`](/fr/docs/Web/API/HTMLElement/input_event) est envoyé chaque fois que la valeur de l'élément change, c'est-à-dire chaque fois que l'utilisateur ajuste la couleur via le sélecteur. Pour chacun de ces évènements, on modifie la couleur de la bordure afin qu'elle corresponde à celle du sélecteur.

L'évènement [`change`](/fr/docs/Web/API/HTMLElement/change_event) est reçu lors de la finalisation du choix de la couleur via le sélecteur. Lorsque cet évènement suvient, on modifie le contenu de l'élément `<p>` (le paragraphe) qui possède l'identifiant `"output"` en y ajoutant une chaîne de caractères qui décrit la couleur choisie.

## L'art de choisir une couleur

Choisir les bonnes couleurs lors de la conception d'un site web peut s'avérer plus compliqué qu'il n'y paraît. Un mauvais choix de couleur peut nuire à l'attractivité du site voire empêcher les utilisateurs de consulter le contenu si le contraste est trop faible ou les couleurs trop criardes. Dans le pire des cas, le site peut être inutilisable à cause des couleurs choisies pour les personnes qui ont des handicaps visuels.

### Trouver les bonnes couleurs

Il existe des outils qui permettent de faciliter la sélection des couleurs. Bien qu'ils ne remplacent pas un bon designer, ils permettent au moins de commencer.

#### La couleur de base

La première étape consiste à choisir la couleur de base. C'est la couleur principale qui participe à la définition du site web ou du sujet dont il est question. Par exemple, on associe la couleur jaune à La Poste, le bleu au ciel ou à quelque chose de marin, etc. Voici quelques idées (parmi les nombreuses qui existent) pour choisir une couleur de base :

- Une couleur naturellement associée au contenu : la couleur d'un produit ou une couleur rattachée à un concept ou une émotion dont il serait question sur le site.
- Naviguer parmi les sites existants et les bibliothèques d'image pour puiser de l'inspiration parmi les couleurs.

Une fois la couleur de base sélectionnée, vous pouvez utiliser certaines extensions de navigateur pour « prélever » des couleurs existantes sur le web. Le site web [ColorZilla](http://www.colorzilla.com/), par exemple, propose une extension ([Chrome](http://www.colorzilla.com/chrome) / [Firefox](http://www.colorzilla.com/firefox)) qui permet d'utiliser une pipette pour identifier les couleurs utilisées à un endroit d'une page web. Cette extension permet également de mesurer la couleur moyenne des pixels d'une zone donnée.

> **Note :** On peut s'apercevoir qu'un site contient plusieurs couleurs très proches les unes des autres, utiliser une « moyenne » permet alors de récupérer le ton principal sous la forme d'une seule couleur.

#### Agrémenter la palette

Une fois la couleur de base sélectionnée et identifiée, il existe de nombreux outils qui permettent de construire une palette de couleurs qui pourront être utilisées avec cette couleur de base. Ces outils utilisent la théorie des couleurs pour déterminer les couleurs appropriées. Certains de ces outils permettent également de voir les couleurs « filtrées » afin de visualiser ce qu'une personne daltonienne verrait.

Voici quelques exemples (libres d'accès et gratuits au moment où nous écrivons ces lignes) de tels outils :

- [Le sélecteur de couleur MDN](/fr/docs/Web/CSS/CSS_Colors/Color_picker_tool)
- [Paletton](http://paletton.com) (en anglais)
- [La roue des couleurs en ligne d'Adobe Color CC](https://color.adobe.com/fr/create/color-wheel)

Lorsque vous concevez votre palette de couleurs, gardez à l'esprit qu'en plus des couleurs générées par ces outils, il faudra vraisemblablement prévoir des couleurs neutres (telles que le blanc ou un ton de blanc, du noir ou un ton de noir et certaines nuances de gris).

> **Note :** On utilise généralement le moins de couleurs possibles afin de garder une cohérence. En utilisant des couleurs afin d'accentuer certains éléments plutôt que d'en utiliser pour tous les éléments de la page, on rend le contenu plus facile à lire et à parcourir. De plus, les couleurs ont ainsi plus d'impact

### Quelques ressources sur la théorie des couleurs

Décrire l'ensemble des notions liées à la théorie des couleurs dépasse le sujet de cet article. Toutefois, il existe de nombreux articles traitant de ce sujet ainsi que des cours pour apprendre ces notions. Voici quelques-unes des ressources disponibles en ligne à propos de la théorie des couleurs :

- [La science des couleurs (en anglais)](https://www.khanacademy.org/partner-content/pixar/color) ([Khan Academy](https://www.khanacademy.org/) en association avec [Pixar](https://www.pixar.com/))
  - : Un cours en ligne qui introduit certains concepts : qu'est-ce qu'une couleur, comment est-elle perçue, comment utiliser les couleurs afin de véhiculer certaines idées.
- [La théorie des couleurs sur Wikipédia (en anglais)](https://en.wikipedia.org/wiki/Color_theory)
  - : La page Wikipédia qui traite de la théorie des couleurs et qui fournit de nombreuses informations techniques.

### Les couleurs et l'accessibilité

Une couleur peut poser différents problèmes d'accessibilité. Une couleur mal choisie pourra empêcher certaines personnes d'utiliser l'interface du site, ce qui peut se traduire par une baisse de fréquentation, une mauvaise image (au sens propre comme au figuré), etc.

Pour commencer, n'hésitez pas à vous renseigner sur le daltonisme et les différents types de daltonisme : confusion rouge/vert, confusion sur l'ensemble des couleurs.

> **Note :** Une règle d'or consiste à ne jamais utiliser une couleur comme seule façon d'indiquer une information. Si, par exemple, vous souhaitez indiquer une réussite ou un échec en changeant uniquement la couleur d'un symbole (un drapeau par exemple), les utilisateurs souffrant de daltonismes et avec une confusion rouge/vert ne pourront pas lire cette information. Il est sans doute préférable d'utiliser du texte et de la couleur afin que tout le monde puisse être en mesure de comprendre ce qui a changé.

Pour plus d'informations sur le daltonisme, vous pouvez consulter les articles suivants (en anglais, n'hésitez pas à éditer la page pour ajouter des ressources francophones) :

- [Medline Plus: Color Blindness](https://medlineplus.gov/colorblindness.html)
- [American Academy of Ophthamology: What Is Color Blindness?](https://www.aao.org/eye-health/diseases/what-is-color-blindness)
- [Color Blindness & Web Design](https://www.usability.gov/get-involved/blog/2010/02/color-blindness.html)

### Un exemple de conception de palette

Considérons un exemple rapide pour construire une palette. Imaginons qu'on souhaite construire un site web pour un jeu dont l'action se déroule sur Mars. On peut [rechercher des images relatives à Mars sur Google](https://www.google.com/search?q=Mars&tbm=isch) ou sur un autre moteur de recherche. On utilise un sélecteur de couleur pour sélectionner un échantillon de couleur.

Avec une pipette, on identifie la couleur de base : c'est la couleur de code `D79C7A`, qui correspond à un rouge orangé rouillé, typique de l'imaginaire collectif pour la surface martienne.

Une fois la couleur de base sélectionnée, on construit la palette. Pour cela, nous avons choisi [Paletteon](http://www.paletton.com/) afin de compléter avec d'autres couleurs. Lorsqu'on ouvre Palleton, on voit ceci :

![L'affichage du site Palleton après l'ouverture](paletton1.png)

Ensuite, on saisit le code de la couleur (`D79C7A`) dans le champ "Base RGB" situé en bas à gauche de l'outil :

![After entering base color](paletton2.png)

On obtient alors une palette monochromatique, basée sur la couleur sélectionnée. Si vous avez besoin d'un nuancier autour de cette couleur, la palette monochromatique pourra sans doute vous aider. Mais ici, on souhaite plutôt avoir une couleur qui ressorte, pour cela on clique sur la case "_add complementary_" sous le menu permettant de sélectionner le type de palette (et qui vaut "Monochromatic"). Paletteon calcule alors une couleur complémentaire appropriée et indique le code de cette nouvelle couleur dans le coin inférieur droit : `#508D7C`.

![Now with complementary colors included.](paletton3.png)

Si vous n'êtes pas satisfait du résultat obtenu, vous pouvez faire varier le schéma de composition. Ainsi, on pourra utiliser le thème "Triad" qui fournira le résultat suivant :

![Triad color scheme selected](paletton4.png)

On obtient alors un bleu gris en haut à droite. En cliquant dessus, on obtient le code `#556E8D`. On pourra utiliser cette couleur afin d'accentuer certains éléments tels que les titres ou les onglets mis en évidence ou bien d'autres indicateurs sur le site :

![Triad color scheme selected](paletton-color-detail.png)

Maintenant, nous disposons d'une couleur de base, d'une couleur d'accentuation ainsi que de variations autour de celles-ci au cas où nous aurions besoin de dégradés. On peut exporter les couleurs sous différents formats afin de les utiliser.

Avec ces couleurs, il faudra probablement sélectionner quelques couleurs neutres. Une pratique courante consiste à trouver le contraste suffisant pour que le texte soit pleinement lisible mais sans que ce contraste soit trop fort. Il est facile de s'égarer dans l'une ou l'autre des directions : n'hésitez pas à demander des retours sur les couleurs que vous avez sélectionnées. Si le contraste est trop faible, le texte sera illisible et on ne pourra pas le distinguer de l'arrière-plan, cela pourra également poser des problèmes d'accessibilité. Si le contraste est trop élevé, le site pourra paraître criard.

### Couleurs, arrière-plans, contraste et impression

Le rendu d'un document peut être différent selon que ce dernier est affiché sur un écran ou sur du papier. De plus, sur papier, on peut chercher à économiser l'encre superflu. Lorsqu'un utilisateur imprime une page, il n'est par exemple peut-être pas nécessaire d'imprimer les arrière-plans. Par défaut, la plupart des navigateurs retirent les images d'arrière-plan à l'impression.

Si les couleurs d'arrière-plan ou les images sont importantes pour l'ensemble du document, on peut utiliser la propriété [`color-adjust`](/fr/docs/Web/CSS/color-adjust) afin d'indiquer au navigateur qu'il ne faut pas modifier l'apparence du contenu.

Par défaut, la propriété `color-adjust` vaut `economy` et indique au navigateur qu'il peut modifier l'apparence afin d'optimiser la lisibilité du contenu et d'économiser de l'encre selon le support d'imprimerie.

`color-adjust` peut être paramétré avec la valeur `exact` afin d'indiquer au navigateur qu'un ou plusieurs éléments doivent être conservés tels quels afin que l'ensemble du document ne soit pas détérioré.

> **Note :** Il n'est pas garanti que le navigateur respecte exactement la feuille de style utilisée avec `color-adjust: exact`. En effet, si le navigateur fournit une option à l'utilisateur pour ne pas imprimer les arrière-plans, ce réglage prendra le pas sur la feuille de style.

## Voir aussi

- [Dessiner des graphiques](/fr/docs/Learn/JavaScript/Client-side_web_APIs/Drawing_graphics)
- [Le graphisme sur le Web](/fr/docs/Web/Guide/Graphics)
- [Un outil de sélection de couleur sur MDN](/fr/docs/Web/CSS/CSS_Colors/Color_picker_tool)
