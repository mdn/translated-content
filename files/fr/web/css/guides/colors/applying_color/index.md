---
title: Appliquer des couleurs aux éléments HTML avec CSS
short-title: Appliquer des couleurs aux éléments HTML
slug: Web/CSS/Guides/Colors/Applying_color
original_slug: Web/CSS/CSS_colors/Applying_color
l10n:
  sourceCommit: 39a17e10bc078c6e76717683b26a5b20d9d9c574
---

Avec [CSS](/fr/docs/Web/CSS), il existe de nombreuses façons d'ajouter de la couleur à vos [éléments](/fr/docs/Web/HTML/Reference/Elements) [HTML](/fr/docs/Web/HTML) afin d'obtenir l'apparence souhaitée. Ce guide est une introduction à l'utilisation de CSS pour appliquer des couleurs aux éléments HTML. Il inclut [des listes des propriétés CSS qui définissent une couleur dans leurs valeurs](#propriétés_qui_peuvent_avoir_une_couleur) et explique comment utiliser les couleurs [dans les feuilles de style](#spécification_des_couleurs_dans_les_feuilles_de_style) et [d'autres façons](#autres_facons_dutiliser_la_couleur).

> [!NOTE]
> Il est important de [bien utiliser les couleurs](/fr/docs/Web/CSS/CSS_colors/Using_color_wisely). Choisissez toujours des couleurs appropriées, assurez-vous que le contraste entre le texte et l'arrière-plan est suffisant pour la lisibilité, et gardez à l'esprit les besoins des personnes ayant des capacités visuelles différentes.

Pour en savoir plus sur les couleurs CSS en tant que type de donnée, voir la référence du [type de donnée CSS `<color>`](/fr/docs/Web/CSS/Reference/Values/color_value) et le [guide des valeurs de couleur CSS](/fr/docs/Web/CSS/CSS_colors/Color_values).

## Propriétés qui peuvent avoir une couleur

Au niveau des éléments, tout dans HTML peut recevoir une couleur. Examinons les différents éléments rendus sur la page — texte, bordures, etc. — avec des listes des propriétés CSS qui appliquent une couleur à chacun.

De manière fondamentale, la propriété {{cssxref("color")}} définit la couleur de premier plan du contenu d'un élément HTML et la propriété {{cssxref("background-color")}} définit la couleur d'arrière-plan de l'élément. Elles peuvent être utilisées sur quasiment tout élément.

### Texte

Lorsqu'un élément est rendu, ces propriétés déterminent la couleur du texte, de son arrière-plan, et des décorations appliquées au texte.

- {{cssxref("color")}}
  - : La couleur utilisée pour dessiner le texte et ses [décorations de texte](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals#style_de_fonte_graisse_transformation_et_décoration_de_texte) (soulignement, surlignement, barré, etc.).

- {{cssxref("background-color")}}
  - : La couleur d'arrière-plan du texte.

- {{cssxref("text-shadow")}}
  - : Configure un effet d'ombre appliqué au texte. Parmi les options figure la couleur de base de l'ombre (ensuite estompée et mélangée à l'arrière-plan selon les autres paramètres). Voir [Ombres portées sur le texte](/fr/docs/Learn_web_development/Core/Text_styling/Fundamentals#text_drop_shadows) pour en savoir plus.

- {{cssxref("text-decoration-color")}}
  - : Par défaut, les décorations de texte (soulignement, barré, etc.) utilisent [`currentColor`](/fr/docs/Web/CSS/Reference/Values/color_value#mot-clé_currentcolor), qui représente la valeur actuelle de `color`. Vous pouvez remplacer cette valeur avec `text-decoration-color` pour choisir une autre couleur.

- {{cssxref("text-emphasis-color")}}
  - : La couleur pour le rendu des symboles d'emphase adjacents à chaque caractère du texte. Principalement utilisée pour les langues d'Asie de l'Est.

- {{cssxref("caret-color")}}
  - : La couleur du {{Glossary("caret")}} (curseur de saisie). Utile dans les éléments éditables comme {{HTMLElement("input")}} et {{HTMLElement("textarea")}} ou ceux dont l'attribut [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) vaut `true`.

### Boîtes

Chaque élément est une boîte avec un contenu, un arrière-plan et une bordure.

- [Bordures](#bordures)
  - : Voir la section [Bordures](#bordures) pour la liste des propriétés CSS permettant de définir les couleurs des bordures d'une boîte.

- {{cssxref("background-color")}}
  - : La couleur d'arrière-plan des zones de l'élément sans contenu au premier plan.

- {{cssxref("box-shadow")}}
  - : Configure des ombres internes et externes sur la boîte. Chaque ombre possède notamment une couleur de base (puis estompée et mélangée selon les autres paramètres).

- {{cssxref("column-rule-color")}}
  - : La couleur de la ligne séparant des colonnes de texte en [mise en page multicolonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout).

- {{cssxref("outline-color")}}
  - : La couleur du contour tracé autour de l'extérieur de l'élément. À la différence de la bordure, aucun espace ne lui est réservé dans le document. Les contours ne participent pas au [modèle de boîtes](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) et peuvent chevaucher d'autres contenus. Les contours servent souvent d'indicateurs de focus.

### Bordures

Tout élément peut avoir une bordure autour de lui. Une bordure de base est une ligne tracée autour des bords du contenu de l'élément. Voir [Le modèle de boîtes](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model) pour comprendre la relation entre les éléments et leurs bordures, et l'article [Mettre en forme les bordures avec CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Backgrounds_and_borders) pour en savoir plus sur la mise en forme des bordures.

Vous pouvez utiliser la propriété raccourcie {{cssxref("border")}}, qui permet de configurer toute la bordure en une fois (y compris la [largeur](/fr/docs/Web/CSS/Reference/Properties/border-width), le [style](/fr/docs/Web/CSS/Reference/Properties/border-style) — plein, pointillé, etc.).

- {{cssxref("border-color")}} (version courte)
  - : Spécifie une couleur unique pour chaque côté de la bordure de l'élément.

- {{cssxref("border-left-color")}}, {{cssxref("border-right-color")}}, {{cssxref("border-top-color")}}, {{cssxref("border-bottom-color")}}
  - : Permettent de définir la couleur du côté correspondant de la bordure de l'élément.

- {{cssxref("border-block-start-color")}} et {{cssxref("border-block-end-color")}}
  - : Définissent les couleurs des bordures au début et à la fin du bloc entouré par la bordure. En écriture de gauche à droite, le début de bloc correspond au bord supérieur et la fin de bloc au bord inférieur. Cela diffère du début et de la fin en ligne, qui correspondent aux bords gauche et droit (là où commencent et se terminent les lignes de texte du bloc).

- {{cssxref("border-inline-start-color")}} et {{cssxref("border-inline-end-color")}}
  - : Définissent la couleur des bords de la bordure proches du début et de la fin des lignes de texte. Le côté concerné dépend de {{cssxref("writing-mode")}}, {{cssxref("direction")}} et {{cssxref("text-orientation")}}, souvent utilisés pour l'orientation selon la langue. Par exemple, pour un texte rendu de droite à gauche, `border-inline-start-color` s'applique au côté droit de la bordure.

## Spécification des couleurs dans les feuilles de style

Maintenant que vous savez quelles [propriétés CSS permettent d'appliquer des couleurs](#proprietes_qui_peuvent_avoir_une_couleur), vous pouvez commencer à en ajouter à vos sites. Observons des exemples d'utilisation de la couleur dans une {{Glossary("stylesheet")}}. Ici nous utilisons plusieurs propriétés mentionnées plus haut, le principe restant identique quelle que soit la propriété.

Regardons d'abord le résultat, puis le code à écrire pour l'obtenir&nbsp;:

{{EmbedLiveSample("spécifications_des_couleurs_dans_les_feuilles_de_style", 650, 150)}}

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

Ici, nous avons un {{HTMLElement("div")}} conteneur avec deux `<div>` enfants, chacun contenant un paragraphe ({{HTMLElement("p")}}). Chaque `<div>` reçoit une apparence différente.

### CSS

Regardons le CSS qui produit le résultat, étape par étape.

> [!NOTE]
> Nous utilisons plusieurs [types de valeurs de couleurs CSS](/fr/docs/Web/CSS/CSS_colors/Color_values) afin d'en démontrer l'usage. Ce n'est pas recommandé en production. Choisissez une notation de couleur unique au sein de l'équipe.

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

La classe `.conteneur` applique des styles au {{HTMLElement("div")}} englobant le contenu. Elle fixe la hauteur avec {{cssxref("height")}}. La largeur du bloc par défaut vaut 100% de son parent. En définissant {{cssxref("display")}} à `flex` et un {{cssxref("gap")}} de `10px`, on crée un conteneur flex qui aligne les enfants côte à côte avec un espacement. On utilise {{cssxref("flex")}} pour permettre aux enfants de grandir et remplir le conteneur&nbsp;; cela n'affecte pas le conteneur lui-même.

Point central ici&nbsp;: la propriété {{cssxref("border")}} définit une bordure autour de l'élément, ligne pleine de 6 pixels en [couleur nommée](/fr/docs/Web/CSS/Reference/Values/named-color) `mediumturquoise`.

Dans le conteneur, on a une boîte gauche et une boîte droite.

```css
.boiteGauche {
  background-color: rgb(245 130 130);
  outline: 2px solid darkred;
}
```

La classe `.boiteGauche`, appliquée à la boîte de gauche, définit l'arrière-plan et le contour&nbsp;:

- L'arrière-plan est défini via {{cssxref("background-color")}} à `rgb(245 130 130)` avec la notation fonctionnelle {{CSSXref("color_value/rgb", "rgb()")}}.
- Un contour est défini. Contrairement à {{cssxref("border")}}, {{cssxref("outline")}} n'affecte pas la mise en page&nbsp;: il se dessine par-dessus ce qui se trouve à l'extérieur de la boîte au lieu de réserver de l'espace. Ici, ligne pleine `darkred` de 2 pixels.
- Remarquez que la couleur du texte n'est pas fixée&nbsp;: {{cssxref("color")}} est héritée du conteneur le plus proche qui la définit. Par défaut, c'est noir.

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
> Les propriétés `text-decoration-*` sont incluses séparément car Safari ne prend pas en charge {{cssxref("text-decoration")}} en tant que raccourci.

Enfin, `.boiteDroite` définit plusieurs styles sur la boîte de droite. Les couleurs suivantes sont établies (avec cinq notations différentes)&nbsp;:

- `background-color` via {{CSSXref("color_value/hwb", "hwb()")}} — `hwb(270deg 63% 13%)` (violet moyen).
- `outline` en ligne pointillée de 4 pixels avec la couleur hexadécimale {{cssxref("hex-color")}} `#6e1478`.
- Couleur de texte avec {{cssxref("color")}} via {{CSSXref("color_value/hsl", "hsl()")}} — `hsl(0deg 95% 95%)` (rose très clair).
- Soulignement ondulé vert via {{cssxref("text-decoration")}} et ses composantes longues, avec la couleur hexadécimale 3 chiffres `#8f8` (équivalent `#88ff88`).
- Une ombre portée au texte via {{cssxref("text-shadow")}} avec la couleur nommée `black`.

Nous avons volontairement utilisé cinq syntaxes de couleur pour illustrer ce qui est possible. En pratique, choisissez une notation de couleur cohérente au sein de votre équipe.

## Autres façons d'utiliser la couleur

CSS n'est pas la seule technologie Web à gérer la couleur. Par exemple&nbsp;:

- [API Canvas](/fr/docs/Web/API/Canvas_API)
  - : Permet de dessiner des graphismes 2D bitmap dans un élément {{HTMLElement("canvas")}}. Voir le [tutoriel Canvas](/fr/docs/Web/API/Canvas_API/Tutorial).
- [SVG](/fr/docs/Web/SVG) (Scalable Vector Graphics)
  - : Permet de créer des images en décrivant des formes, motifs et lignes. Les commandes SVG sont en XML et peuvent être intégrées directement dans une page ou utilisées via {{HTMLElement("img")}}.
- [WebGL](/fr/docs/Web/API/WebGL_API)
  - : Bibliothèque graphique Web basée sur OpenGL ES pour des graphismes 2D/3D performants. Voir le [tutoriel WebGL](/fr/docs/Web/API/WebGL_API/Tutorial). Voir aussi [WebGPU](/fr/docs/Web/API/WebGPU_API), successeur moderne de WebGL.

> [!NOTE]
> Quelques attributs HTML désormais obsolètes acceptaient des couleurs comme valeurs, tels que `bgcolor` et `vlink`. Ces attributs n'acceptaient que les {{cssxref("named-color")}} et les {{cssxref("hex-color")}} sur 3 ou 6 chiffres.

## Voir aussi

- Type de donnée [`<color>`](/fr/docs/Web/CSS/Reference/Values/color_value)
- [Valeurs de couleur CSS](/fr/docs/Web/CSS/CSS_colors/Color_values)
- [Bien utiliser les couleurs](/fr/docs/Web/CSS/CSS_colors/Using_color_wisely)
- Le module [Couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [Dessiner des graphiques](/fr/docs/Learn_web_development/Extensions/Client-side_APIs/Drawing_graphics)
