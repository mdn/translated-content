---
title: Appliquer des couleurs aux éléments HTML avec CSS
short-title: Appliquer des couleurs
slug: Web/CSS/Guides/Colors/Applying_color
l10n:
  sourceCommit: a516a9818e8cef06c626d436ee1d73fc6d87ec51
---

Avec [CSS](/fr/docs/Web/CSS), il existe de nombreuses façons d'ajouter de la couleur à vos [éléments](/fr/docs/Web/HTML/Reference/Elements) [HTML](/fr/docs/Web/HTML) afin d'obtenir l'apparence souhaitée. Ce guide est une introduction à l'utilisation de CSS pour appliquer des couleurs aux éléments HTML. Il inclut [des listes des propriétés CSS qui définissent une couleur dans leurs valeurs](#propriétés_qui_peuvent_avoir_une_couleur) et explique comment utiliser les couleurs [dans les feuilles de style](#spécification_des_couleurs_dans_les_feuilles_de_style) et [d'autres façons](#autres_facons_dutiliser_la_couleur).

> [!NOTE]
> Il est important de [bien utiliser les couleurs](/fr/docs/Web/CSS/Guides/Colors/Using_color_wisely). Choisissez toujours des couleurs appropriées, assurez-vous que le contraste entre le texte et l'arrière-plan est suffisant pour la lisibilité, et gardez à l'esprit les besoins des personnes ayant des capacités visuelles différentes.

Pour en savoir plus sur les couleurs CSS en tant que type de donnée, voir la référence du [type de donnée CSS `<color>`](/fr/docs/Web/CSS/Reference/Values/color_value) et le [guide des valeurs de couleur CSS](/fr/docs/Web/CSS/Guides/Colors/Color_values).

## Propriétés qui peuvent avoir une couleur

Au niveau des éléments, tout dans HTML peut recevoir une couleur. Examinons les différents éléments rendus sur la page — texte, bordures, etc. — avec des listes des propriétés CSS qui appliquent une couleur à chacun.

De manière fondamentale, la propriété {{CSSxRef("color")}} définit la couleur de premier plan du contenu d'un élément HTML et la propriété {{CSSxRef("background-color")}} définit la couleur d'arrière-plan de l'élément. Elles peuvent être utilisées sur quasiment tout élément.

### Texte

Lorsqu'un élément est rendu, ces propriétés déterminent la couleur du texte, de son arrière-plan, et des décorations appliquées au texte.

- {{CSSxRef("color")}}
  - : La couleur utilisée pour dessiner le texte et ses [décorations de texte](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals#style_de_fonte_graisse_transformation_et_décoration_de_texte) (soulignement, surlignement, barré, etc.).

- {{CSSxRef("background-color")}}
  - : La couleur d'arrière-plan du texte.

- {{CSSxRef("text-shadow")}}
  - : Configure un effet d'ombre appliqué au texte. Parmi les options figure la couleur de base de l'ombre (ensuite estompée et mélangée à l'arrière-plan selon les autres paramètres). Voir [Ombres portées sur le texte](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals#ombres_du_texte) pour en savoir plus.

- {{CSSxRef("text-decoration-color")}}
  - : Par défaut, les décorations de texte (soulignement, barré, etc.) utilisent [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor), qui représente la valeur actuelle de `color`. Vous pouvez remplacer cette valeur avec `text-decoration-color` pour choisir une autre couleur.

- {{CSSxRef("text-emphasis-color")}}
  - : La couleur pour le rendu des symboles d'emphase adjacents à chaque caractère du texte. Principalement utilisée pour les langues d'Asie de l'Est.

- {{CSSxRef("caret-color")}}
  - : La couleur du {{Glossary("caret")}} (curseur de saisie). Utile dans les éléments éditables comme {{HTMLElement("input")}} et {{HTMLElement("textarea")}} ou ceux dont l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) vaut `true`.

### Boîtes

Chaque élément est une boîte avec un contenu, un arrière-plan et une bordure.

- [Bordures](#bordures_2)
  - : Voir la section [Bordures](#bordures_2) pour la liste des propriétés CSS permettant de définir les couleurs des bordures d'une boîte.

- {{CSSxRef("background-color")}}
  - : La couleur d'arrière-plan des zones de l'élément sans contenu au premier plan.

- {{CSSxRef("box-shadow")}}
  - : Configure des ombres internes et externes sur la boîte. Chaque ombre possède notamment une couleur de base (puis estompée et mélangée selon les autres paramètres).

- {{CSSxRef("column-rule-color")}}
  - : La couleur de la ligne séparant des colonnes de texte en [mise en page multicolonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout).

- {{CSSxRef("outline-color")}}
  - : La couleur du contour tracé autour de l'extérieur de l'élément. À la différence de la bordure, aucun espace ne lui est réservé dans le document. Les contours ne participent pas au [modèle de boîtes](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) et peuvent chevaucher d'autres contenus. Les contours servent souvent d'indicateurs de la sélection.

### Bordures

Tout élément peut avoir une bordure autour de lui. Une bordure de base est une ligne tracée autour des bords du contenu de l'élément. Voir [Le modèle de boîtes](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) pour comprendre la relation entre les éléments et leurs bordures, et l'article [Mettre en forme les bordures avec CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) pour en savoir plus sur la mise en forme des bordures.

Vous pouvez utiliser la propriété raccourcie {{CSSxRef("border")}}, qui permet de configurer toute la bordure en une fois (y compris la [largeur](/fr/docs/Web/CSS/Reference/Properties/border-width), le [style](/fr/docs/Web/CSS/Reference/Properties/border-style) — plein, pointillé, etc.).

- {{CSSxRef("border-color")}} (version courte)
  - : Définie une couleur unique pour chaque côté de la bordure de l'élément.

- {{CSSxRef("border-left-color")}}, {{CSSxRef("border-right-color")}}, {{CSSxRef("border-top-color")}} et {{CSSxRef("border-bottom-color")}}
  - : Permettent de définir la couleur du côté correspondant de la bordure de l'élément.

- {{CSSxRef("border-block-start-color")}} et {{CSSxRef("border-block-end-color")}}
  - : Définissent les couleurs des bordures au début et à la fin du bloc entouré par la bordure. En écriture de gauche à droite, le début de bloc correspond au bord supérieur et la fin de bloc au bord inférieur. Cela diffère du début et de la fin en ligne, qui correspondent aux bords gauche et droit (là où commencent et se terminent les lignes de texte du bloc).

- {{CSSxRef("border-inline-start-color")}} et {{CSSxRef("border-inline-end-color")}}
  - : Définissent la couleur des bords de la bordure proches du début et de la fin des lignes de texte. Le côté concerné dépend de {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}, souvent utilisés pour l'orientation selon la langue. Par exemple, pour un texte rendu de droite à gauche, `border-inline-start-color` s'applique au côté droit de la bordure.

## Spécification des couleurs dans les feuilles de style

Maintenant que vous savez quelles [propriétés CSS permettent d'appliquer des couleurs](#proprietes_qui_peuvent_avoir_une_couleur), vous pouvez commencer à en ajouter à vos sites. Observons des exemples d'utilisation de la couleur dans une {{Glossary("style sheet", "feuille de style")}}. Ici nous utilisons plusieurs propriétés mentionnées plus haut, le principe restant identique quelle que soit la propriété.

Regardons d'abord le résultat, puis le code à écrire pour l'obtenir&nbsp;:

{{EmbedLiveSample("Spécification des couleurs dans les feuilles de style", 650, 150)}}

### HTML

Le HTML responsable du résultat ci-dessus&nbsp;:

```html
<div class="conteneur">
  <div class="boiteGauche">
    <p>Je suis une boîte.</p>
  </div>
  <div class="boiteDroite">
    <p>Je suis la autre boîte.</p>
  </div>
</div>
```

Ici, nous avons un conteneur englobant {{HTMLElement("div")}} avec deux `<div>` enfants, chacun contenant un paragraphe ({{HTMLElement("p")}}). Chaque `<div>` reçoit une apparence différente.

### CSS

Regardons le CSS qui produit le résultat, étape par étape.

> [!NOTE]
> Nous utilisons plusieurs [types de valeurs de couleurs CSS](/fr/docs/Web/CSS/Guides/Colors/Color_values) afin d'en démontrer l'usage. Ce n'est pas recommandé en production. Choisissez une notation de couleur unique au sein de l'équipe.

```css
.conteneur {
  height: 110px;
  padding: 10px;
  display: flex;
  gap: 10px;
  text-align: center;
  font:
    28px "Marker Felt",
    "Zapfino",
    cursive;
  border: 6px solid mediumturquoise;
}

div {
  flex: 1;
}
```

La classe `.conteneur` applique des styles au {{HTMLElement("div")}} englobant le contenu. Elle fixe la hauteur avec {{CSSxRef("height")}}. La largeur du bloc par défaut vaut 100% de son parent. En définissant {{CSSxRef("display")}} à `flex` et un {{CSSxRef("gap")}} de `10px`, on crée un conteneur flex qui aligne les enfants côte à côte avec un espacement. On utilise {{CSSxRef("flex")}} pour permettre aux enfants de grandir et remplir le conteneur&nbsp;; cela n'affecte pas le conteneur lui-même.

Ce qui nous intéresse davantage ici est l'utilisation de la propriété {{CSSxRef("border")}} pour établir une bordure autour du bord extérieur de l'élément. Cette bordure est une ligne pleine, de 6 pixels de large, dans la [couleur nommée](/fr/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Dans le conteneur, on a une boîte gauche et une boîte droite.

```css
.boiteGauche {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

La classe `.boiteGauche`, appliquée à la boîte de gauche, définit l'arrière-plan et le contour&nbsp;:

- La couleur d'arrière-plan de la boîte est définie en modifiant la valeur de la propriété CSS {{CSSxRef("background-color")}} à `rgb(245 130 130)`, en utilisant la notation fonctionnelle {{CSSxRef("color_value/rgb", "rgb()")}}.
- Un contour est défini pour la boîte. Contrairement à la propriété {{CSSxRef("border")}}, {{CSSxRef("outline")}} n'affecte pas la mise en page&nbsp;; il se dessine par-dessus ce qui se trouve à l'extérieur de la boîte au lieu de réserver de l'espace comme le fait `border`. Ce contour est une ligne pleine, de couleur rouge foncé, d'une épaisseur de deux pixels. Notez l'utilisation du mot-clé `darkred` lors de la spécification de la couleur.
- Remarquez que nous ne définissons pas explicitement la couleur du texte. Cela signifie que la valeur de {{CSSxRef("color")}} est héritée de l'élément conteneur le plus proche qui la définit. Par défaut, c'est noir.

```css
.boiteDroite {
  background-color: hwb(270deg 63% 13%);
  outline: 4px dashed #6e1478;
  color: hsl(0deg 95% 95%);
  text-decoration-line: underline;
  text-decoration-style: wavy;
  text-decoration-color: #8f8;
  text-decoration: underline wavy #8f8;
  text-shadow: 2px 2px 3px black;
}
```

> [!NOTE]
> Les propriétés `text-decoration-*` sont incluses séparément, car Safari ne prend pas en charge {{CSSxRef("text-decoration")}} en tant que raccourci.

Enfin, `.boiteDroite` définit plusieurs styles sur la boîte de droite. Les couleurs suivantes sont établies (avec cinq notations différentes)&nbsp;:

- La couleur d'arrière plan (`background-color`) est définie avec la notation fonctionnelle {{CSSxRef("color_value/hwb", "hwb()")}} — `hwb(270deg 63% 13%)`. C'est un violet moyen.
- Le contour de la boîte (`outline`) est utilisé pour définir que la boîte doit être entourée d'une ligne pointillée de quatre pixels d'épaisseur dont la couleur est un violet un peu plus foncé, en utilisant la couleur hexadécimale à six chiffres {{CSSxRef("hex-color")}} `#6e1478`.
- La couleur du texte est définie en utilisant la propriété {{CSSxRef("color")}} avec la notation fonctionnelle {{CSSxRef("color_value/hsl", "hsl()")}} — `hsl(0deg 95% 95%)`. C'est une couleur rose très clair.
- Nous ajoutons une ligne ondulée verte sous le texte avec le raccourci {{CSSxRef("text-decoration")}}, ainsi que la composante longue pour la compatibilité avec les navigateurs. Nous avons utilisé la couleur hexadécimale à trois chiffres {{CSSxRef("hex-color")}} `#8f8`, ce qui équivaut à `#88ff88`.
- Enfin, une ombre est ajoutée au texte en utilisant {{CSSxRef("text-shadow")}}. Son paramètre `color` est défini sur `black`, une valeur de {{CSSxRef("named-color")}}.

Nous avons volontairement utilisé cinq syntaxes de couleur pour illustrer ce qui est possible. En pratique, choisissez une notation de couleur cohérente au sein de votre équipe.

## Autres façons d'utiliser la couleur

CSS n'est pas la seule technologie Web à gérer la couleur. Par exemple&nbsp;:

- [L'API Canvas](/fr/docs/Web/API/Canvas_API) de HTML
  - : Permet de dessiner des graphismes 2D bitmap dans un élément HTML {{HTMLElement("canvas")}}. Voir le [tutoriel Canvas](/fr/docs/Web/API/Canvas_API/Tutorial) pour en apprendre plus.
- [SVG](/fr/docs/Web/SVG) (<i lang="en">Scalable Vector Graphics</i>)
  - : Permet de créer des images en utilisant des commandes qui dessinent des formes, des motifs et des lignes spécifiques. Les commandes SVG sont formatées en XML et peuvent être intégrées directement dans une page Web ou placées dans la page en utilisant l'élément HTML {{HTMLElement("img")}}, comme tout autre type d'image.
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : Bibliothèque graphique Web basée sur OpenGL ES pour des graphismes 2D/3D performants. Voir le [tutoriel WebGL](/fr/docs/Web/API/WebGL_API/Tutorial). Voir aussi [WebGPU](/fr/docs/Web/API/WebGPU_API), successeur moderne de WebGL.

> [!NOTE]
> Quelques attributs HTML désormais obsolètes acceptaient des couleurs comme valeurs, tels que `bgcolor` et `vlink`. Ces attributs n'acceptaient que les {{CSSxRef("named-color")}} et les {{CSSxRef("hex-color")}} sur 3 ou 6 chiffres.

## Voir aussi

- Type de donnée {{CSSxRef("&lt;color&gt;")}}
- Le guide [des valeurs de couleur CSS](/fr/docs/Web/CSS/Guides/Colors/Color_values)
- [Bien utiliser les couleurs](/fr/docs/Web/CSS/Guides/Colors/Using_color_wisely)
- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Dessiner des graphiques](/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
