---
title: Arrière-plans et bordures
slug: Learn_web_development/Core/Styling_basics/Backgrounds_and_borders
l10n:
  sourceCommit: 2b4a2ad5d9ba084a9eaa2f9204102655e7b575c4
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}

Dans cette leçon, nous allons découvrir quelques-unes des possibilités créatives qu'offrent les arrière-plans et les bordures en CSS. Qu'il s'agisse d'ajouter des dégradés, des images d'arrière-plan ou des coins arrondis, les arrière-plans et les bordures apportent une réponse à de nombreuses questions de mise en forme en CSS.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases du HTML (voir
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Introduction au HTML</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units">Valeurs et unités CSS</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Sizing">La taille CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Mettre en forme l'arrière-plan — couleurs et images.</li>
          <li>Taille, répétition, position et attachement des images d'arrière-plan.</li>
          <li>Dégradés d'arrière-plan — concept général et dégradés linéaires (les dégradés radiaux, coniques et répétitifs sont plus avancés&nbsp;; une connaissance approfondie n'est pas requise à ce stade.)</li>
          <li>Considérations d'accessibilité pour les arrière-plans — assurer un bon contraste.</li>
          <li>Bases des bordures — largeur, style, couleur et raccourci pour les bordures. Rayon des bordures pour des coins arrondis.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Couleurs d'arrière-plan

La propriété {{CSSxRef("background-color")}} définit la couleur d'arrière-plan de n'importe quel élément en CSS. La propriété accepte n'importe quelle valeur {{CSSxRef("&lt;color&gt;")}} valide. Une `background-color` s'étend sous le contenu et la zone de remplissage de l'élément.

Dans l'exemple ci-dessous, nous avons utilisé différentes valeurs de couleur pour ajouter une couleur d'arrière-plan à la boîte, à un titre et à un élément {{HTMLElement("span")}}.

Essayez de modifier l'exemple et de remplacer les couleurs définies par n'importe quelle valeur {{CSSxRef("&lt;color&gt;")}} disponible.

```html live-sample___color
<div class="boite">
  <h2>Couleurs d'arrière-plan</h2>
  <p>Essayez de changer les <span>couleurs</span> d'arrière-plan.</p>
</div>
```

```css live-sample___color
.boite {
  padding: 0.3em;
  background-color: #567895;
}

h2 {
  background-color: black;
  color: white;
}
span {
  background-color: rgb(255 255 255 / 50%);
}
```

{{EmbedLiveSample("color")}}

### Images d'arrière-plan

La propriété {{CSSxRef("background-image")}} permet d'afficher une image dans l'arrière-plan d'un élément. Dans l'exemple ci-dessous, nous avons deux boîtes — l'une avec une image de fond plus grande que la boîte ([balloons.jpg](https://mdn.github.io/shared-assets/images/examples/balloons.jpg)), l'autre avec une petite image représentant une seule étoile ([star.png](https://mdn.github.io/shared-assets/images/examples/star.png)).

Cet exemple illustre deux points concernant les images de fond. Par défaut, l'image grande n'est pas redimensionnée pour s'adapter à la boîte, donc nous ne voyons qu'un petit coin de celle-ci, tandis que la petite image est répétée pour remplir la boîte.

```html live-sample___background-image
<div class="enveloppe">
  <div class="boite a"></div>
  <div class="boite b"></div>
</div>
```

```css live-sample___background-image
.enveloppe {
  display: flex;
}

.boite {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}

.a {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
}

.b {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
}
```

{{EmbedLiveSample("background-image")}}

Si vous définissez une couleur d'arrière-plan en plus d'une image de fond, l'image s'affiche par-dessus la couleur.
Essayez d'ajouter une propriété `background-color` à l'exemple ci-dessus pour voir cela en action.

### Contrôler la répétition de l'arrière-plan

La propriété {{CSSxRef("background-repeat")}} permet de contrôler le comportement de pavage des images. Les valeurs disponibles sont&nbsp;:

- `no-repeat` — arrête complètement la répétition de l'arrière-plan.
- `repeat-x` — répète horizontalement.
- `repeat-y` — répète verticalement.
- `repeat` — comportement par défaut&nbsp;; répète dans les deux directions.
- `space` — répète autant de fois que possible, en ajoutant de l'espace entre les images si de l'espace supplémentaire est disponible.
- `round` — similaire à `space`, mais étire les images pour remplir tout espace supplémentaire

Essayez ces valeurs dans l'exemple ci-dessous. Nous avons défini la valeur sur `no-repeat` afin que vous ne voyiez qu'une seule étoile. Essayez les différentes valeurs pour voir leurs effets.

```html live-sample___repeat
<div class="boite"></div>
```

```css hidden live-sample___repeat
.boite {
  width: 200px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}
```

```css live-sample___repeat
.boite {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
}
```

{{EmbedLiveSample("repeat")}}

### Dimensionner l'image de fond

L'image _balloons.jpg_ utilisée dans l'exemple initial d'image de fond est une grande image qui a été recadrée, car elle était plus grande que l'élément dont elle est l'arrière-plan. Dans ce cas, nous pouvons utiliser la propriété {{CSSxRef("background-size")}} pour ajuster la taille de l'image afin qu'elle s'adapte à l'intérieur de l'arrière-plan.

`background-size` peut prendre deux valeurs de longueur ({{CSSxRef("&lt;length&gt;")}}) ou pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) pour définir la taille de l'image dans les directions horizontale et verticale, ou les mots-clés suivants&nbsp;:

- `cover` — le navigateur rend l'image juste assez grande pour couvrir complètement la zone de la boîte tout en conservant son {{Glossary("aspect ratio", "rapport d'aspect")}}. Dans ce cas, une partie de l'image risque de se retrouver en dehors de la boîte.
- `contain` — le navigateur ajuste la taille de l'image pour qu'elle s'adapte à l'intérieur de la boîte. Dans ce cas, vous pouvez vous retrouver avec des espaces de chaque côté ou en haut et en bas de l'image, si le rapport d'aspect de l'image est différent de celui de la boîte.

#### Jouer avec `background-size`

Dans l'exemple ci-dessous, l'image _balloons.jpg_ a des unités de longueur définies pour l'adapter à l'intérieur de la boîte. Vous pouvez voir que cela a déformé l'image.

Essayez les actions suivantes&nbsp;:

- Changez les unités de longueur utilisées pour modifier la taille de l'arrière-plan.
- Supprimez les unités de longueur et voyez ce qui se passe lorsque vous utilisez `background-size: cover` ou `background-size: contain`.
- Redimensionnez l'image plus petite que la boîte, puis changez la valeur de `background-repeat` pour répéter l'image.

```html live-sample___size
<div class="boite"></div>
```

```css hidden live-sample___size
.boite {
  width: 500px;
  height: 100px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 10px;
}
```

```css live-sample___size
.boite {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/balloons.jpg");
  background-repeat: no-repeat;
  background-size: 80px 10em;
}
```

{{EmbedLiveSample("size")}}

### Positionner l'image de fond

La propriété {{CSSxRef("background-position")}} permet de choisir la position de l'arrière-plan à l'intérieur de la boîte dans laquelle il est appliqué. On utilise pour cela un système de coordonnées avec l'origine `(0,0)` au coin en haut à gauche de la boîte, l'axe (`x`) étant horizontal, l'axe (`y`) vertical.

> [!NOTE]
> La valeur par défaut de `background-position` est `(0,0)`.

Les valeurs les plus communes pour `background-position` se présentent sous la forme d'un couple — une valeur horizontale suivie d'une valeur verticale.

Les valeurs les plus courantes de `background-position` prennent deux valeurs individuelles — une valeur horizontale suivie d'une valeur verticale. Vous pouvez utiliser des mots-clés tels que `top` et `right` (consultez les autres sur la page {{CSSxRef("background-position")}})&nbsp;:

```css
.boite {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top center;
}
```

Ainsi que des valeurs de {{CSSxRef("length", "longueurs")}}, ou des {{CSSxRef("percentage", "pourcentages")}}&nbsp;:

```css
.boite {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px 10%;
}
```

Vous pouvez également mélanger des valeurs de mots-clés avec des longueurs ou des pourcentages, auquel cas la première valeur se réfère à la position horizontale et la seconde à la position verticale. Par exemple&nbsp;:

```css
.boite {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: 20px top;
}
```

Enfin, vous pouvez également utiliser une syntaxe à quatre valeurs pour indiquer une distance par rapport à certains bords de la boîte. Chaque paire de valeurs représente le bord de la boîte à partir duquel décaler, et la taille du décalage par rapport à ce bord. Dans l'exemple ci-dessous, nous positionnons l'arrière-plan à `20px` du `haut` et à `10px` de la `droite`&nbsp;:

```css
.boite {
  background-image: url("image.png");
  background-repeat: no-repeat;
  background-position: top 20px right 10px;
}
```

#### Jouer avec `background-position`

Utilisez l'exemple ci-dessous pour expérimenter avec ces valeurs et déplacer l'étoile à l'intérieur de la boîte&nbsp;:

```html live-sample___position
<div class="boite"></div>
```

```css hidden live-sample___position
.boite {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}
```

```css live-sample___position
.boite {
  background-image: url("https://mdn.github.io/shared-assets/images/examples/star.png");
  background-repeat: no-repeat;
  background-position: 120px 1em;
}
```

{{EmbedLiveSample("position")}}

> [!NOTE]
> Le raccourci `background-position` est utilisé à la place de {{CSSxRef("background-position-x")}} et {{CSSxRef("background-position-y")}}, qui permettent de définir individuellement les valeurs de position sur chaque axe.

### Les arrière-plans en dégradés

Un dégradé — quand on l'utilise pour arrière-plan — se comporte comme une image, il se paramètre aussi avec la propriété {{CSSxRef("background-image")}}.

Vous pouvez en apprendre davantage sur les différents types de valeurs de dégradé et ce que vous pouvez en faire sur la page MDN consacrée au type de données {{CSSxRef("&lt;gradient&gt;")}}.

Essayez différentes valeurs de dégradé dans l'exemple ci-dessous. Initialement, nous avons un dégradé linéaire qui s'étend sur toute la première boîte, et un dégradé radial avec une taille définie, se répétant sur la deuxième boîte.

```html live-sample___gradients
<div class="enveloppe">
  <div class="boite a"></div>
  <div class="boite b"></div>
</div>
```

```css live-sample___gradients
.enveloppe {
  display: flex;
}

.boite {
  width: 400px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}

.a {
  background-image: linear-gradient(
    105deg,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
}

.b {
  background-image: radial-gradient(
    circle,
    rgb(0 249 255 / 100%) 39%,
    rgb(51 56 57 / 100%) 96%
  );
  background-size: 100px 50px;
}
```

{{EmbedLiveSample("gradients")}}

> [!NOTE]
> Une façon amusante de jouer avec les dégradés est d'utiliser l'un des nombreux générateurs de dégradés CSS disponibles sur le web, comme [CSSGradient.io <sup>(angl./<sup>)](https://cssgradient.io/). Vous pouvez créer un dégradé et copier-coller le code source qui le génère.

### Images de fond multiples

Il est également possible de définir plusieurs images de fond dans une seule déclaration. Pour ce faire, il suffit de définir plusieurs valeurs pour `background-image`, chacune séparée par une virgule.

Lorsque vous faites cela, il est possible de se retrouver avec plusieurs arrière-plans qui se chevauchent. Les arrière-plans se superposent les uns sur les autres, avec le dernier se retrouvant sur le dessus, chacun suivant à leur tour, jusqu'au premier.

> [!NOTE]
> On peut joyeusement mélanger dégradés et images de fond classiques.

Les autres propriétés `background-*` peuvent aussi avoir une série de valeurs séparées de virgules, de la même manière que `background-image`&nbsp;:

```css
background-image:
  url("image1.png"), url("image2.png"), url("image3.png"), url("image4.png");
background-repeat: no-repeat, repeat-x, repeat;
background-position:
  10px 20px,
  top right;
```

Chaque valeur des différentes propriétés correspond aux valeurs occupant la même position dans les autres propriétés. Dans l'exemple ci-dessus, par exemple, la valeur de `background-repeat` pour `image1` est `no-repeat`. Mais que se passe-t-il lorsque des propriétés ont un nombre différent de valeurs&nbsp;? La réponse est que les propriétés comportant le moins de valeurs sont répétées en boucle — dans l'exemple ci-dessus, il y a quatre images d'arrière-plan mais seulement deux valeurs pour `background-position`. Les deux premières valeurs de position sont appliquées aux deux premières images, puis le cycle recommence — `image3` se voit attribuer la première valeur de position, et `image4` la deuxième.

### Jouer avec plusieurs images de fond

Essayons. L'exemple ci-dessous inclut deux images de fond. Essayez de modifier l'exemple comme suit&nbsp;:

- Pour démontrer l'ordre d'empilement, essayez de changer l'image de fond qui apparaît en premier dans la liste.
- Ajoutez d'autres propriétés `background-*` pour modifier la position, la taille ou la valeur de répétition des images.
- Essayez d'ajouter un dégradé comme troisième `background-image`.

```html live-sample___multiple-background-image
<div class="enveloppe">
  <div class="boite"></div>
</div>
```

```css live-sample___multiple-background-image
.enveloppe {
  display: flex;
}

.boite {
  width: 500px;
  height: 80px;
  padding: 0.5em;
  border: 1px solid #cccccc;
  margin: 20px;
}

.boite {
  background-image:
    url("https://mdn.github.io/shared-assets/images/examples/star.png"),
    url("https://mdn.github.io/shared-assets/images/examples/big-star.png");
}
```

{{EmbedLiveSample("multiple-background-image")}}

## Défilement de l'arrière-plan

Une autre option pour les arrière-plans consiste à définir la façon dont ils défilent lorsque le contenu défile. Cela se contrôle avec la propriété {{CSSxRef("background-attachment")}}, qui peut prendre les valeurs suivantes&nbsp;:

- `scroll`&nbsp;: provoque le défilement de l'arrière-plan de l'élément lorsque la page défile. Si le contenu de l'élément défile, l'arrière-plan ne bouge pas. En pratique, l'arrière-plan est fixé à la même position sur la page, il défile donc avec la page.
- `fixed`&nbsp;: fixe l'arrière-plan de l'élément à la fenêtre d'affichage (viewport) afin qu'il ne défile pas lorsque la page ou le contenu de l'élément défile. Il reste toujours à la même position à l'écran.
- `local`&nbsp;: attache l'arrière-plan à l'élément sur lequel il est défini, de sorte que lorsque vous faites défiler l'élément, l'arrière-plan défile avec lui.

La propriété {{CSSxRef("background-attachment")}} n'a d'effet que lorsqu'il y a du contenu à faire défiler. Nous avons donc créé une démonstration pour montrer les différences entre ces trois valeurs — regardez [background-attachment.html <sup>(angl.)</sup>](https://mdn.github.io/learning-area/css/styling-boxes/backgrounds/background-attachment.html) (voir aussi le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/tree/main/css/styling-boxes/backgrounds)).

## Utiliser la propriété raccourcie `background`

Vous verrez souvent des arrière-plans définis grâce à la propriété raccourcie {{CSSxRef("background")}}, qui permet de définir toutes les différentes propriétés en une seule déclaration.

Si vous utilisez plusieurs arrière-plans, vous devez définir toutes les propriétés pour le premier arrière-plan, puis ajouter votre prochain arrière-plan après une virgule. Dans l'exemple ci-dessous, nous avons un dégradé avec une taille et une position, puis une image d'arrière-plan avec `no-repeat` et une position, puis une couleur.

Il existe quelques règles à respecter lors de la saisie des valeurs raccourcies des images d'arrière-plan, par exemple&nbsp;:

- Une couleur de fond (`background-color`) ne peut être définie qu'après la dernière virgule.
- La valeur de `background-size` ne peut être incluse qu'immédiatement après `background-position`, séparée par le caractère `/`, comme ceci&nbsp;: `center/80%`.

Consultez la page MDN pour {{CSSxRef("background")}} afin d'en savoir plus sur la syntaxe.

```html live-sample___background
<div class="boite"></div>
```

```css live-sample___background
.boite {
  width: 500px;
  height: 300px;
  padding: 0.5em;
  background:
    linear-gradient(
        105deg,
        rgb(255 255 255 / 20%) 39%,
        rgb(51 56 57 / 100%) 96%
      )
      center center / 400px 200px no-repeat,
    url("https://mdn.github.io/shared-assets/images/examples/big-star.png")
      center no-repeat,
    rebeccapurple;
}
```

{{EmbedLiveSample("background", "", 320)}}

## Considérations d'accessibilité avec les arrière-plans

Lorsque vous placez du texte sur une image ou une couleur d'arrière-plan, veillez à ce que le [contraste](/fr/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable/Color_contrast) soit suffisant pour que le texte soit lisible par vos visiteur·euse·s. Lorsque vous définissez une image avec du texte par-dessus, vous devez également définir une `background-color` qui permet au texte d'être lisible si l'image ne se charge pas.

Les lecteurs d'écran ne peuvent pas interpréter les images de fond&nbsp;; elles doivent donc être purement décoratives. Tout contenu important doit faire partie de la page HTML et ne pas être contenu dans un arrière-plan.

## Bordures

Lorsque vous apprenez le [modèle de boîte](/fr/docs/Learn_web_development/Core/Styling_basics/Box_model), vous découvrez comment les bordures affectent la taille de notre boîte. Dans cette leçon, nous allons voir comment utiliser les bordures de manière créative.

Généralement, lorsque nous ajoutons des bordures à un élément avec CSS, nous utilisons la propriété raccourcie {{CSSxRef("border")}} pour définir la couleur, l'épaisseur et le [style](/fr/docs/Web/CSS/Reference/Values/line-style) de la bordure sur les quatre côtés d'une boîte en une seule déclaration&nbsp;:

```css
.boite {
  border: 1px solid black;
}
```

On peut aussi cibler un seul des côtés de la boîte, par exemple&nbsp;:

```css
.boite {
  border-top: 1px solid black;
}
```

Les propriétés individuelles incluent les propriétés raccourcies {{CSSxRef("border-width")}}, {{CSSxRef("border-style")}} et {{CSSxRef("border-color")}}&nbsp;:

```css
.boite {
  border-width: 1px;
  border-style: solid;
  border-color: black;
}
```

Il existe également des propriétés détaillées pour la largeur, le style et la couleur pour chacun des quatre côtés&nbsp;:

```css
.boite {
  border-top-width: 1px;
  border-top-style: solid;
  border-top-color: black;
}
```

> [!NOTE]
> Ces propriétés de bordure supérieure, droite, inférieure et gauche ont également des [propriétés de bordure logiques](/fr/docs/Web/CSS/Guides/Logical_properties_and_values#propriétés) associées qui dépendent du mode d'écriture du document (par exemple, texte de gauche à droite ou de droite à gauche, ou de haut en bas). Vous pouvez en savoir plus à ce sujet dans la section [Gérer les différentes directions du texte](/fr/docs/Learn_web_development/Core/Styling_basics/Handling_different_text_directions).

### Jouer avec les bordures

Il existe une variété de styles que vous pouvez utiliser pour les bordures. Dans l'exemple ci-dessous, nous avons utilisé deux styles de bordure différents pour la boîte et deux styles de bordure différents pour le titre. Essayez de modifier le style, l'épaisseur et la couleur des bordures pour voir comment elles fonctionnent.

```html live-sample___borders
<div class="boite">
  <h2>Bordures</h2>
  <p>Essayez de modifier les bordures.</p>
</div>
```

```css live-sample___borders
* {
  padding: 0.2em;
}
.boite {
  width: 500px;
  background-color: #567895;
  border: 5px solid #0b385f;
  border-bottom-style: dashed;
  color: white;
}

h2 {
  border-top: 2px dotted rebeccapurple;
  border-bottom: 1em double rgb(24 163 78);
}
```

{{EmbedLiveSample("borders", "", 200)}}

### Coins arrondis

Vous pouvez ajouter des coins arrondis à une boîte en utilisant la propriété {{CSSxRef("border-radius")}} et les propriétés détaillées associées qui concernent chaque coin de la boîte. Deux longueurs ou pourcentages peuvent être utilisés comme valeur, la première valeur définissant le rayon horizontal et la seconde le rayon vertical. Dans de nombreux cas, vous ne passez qu'une seule valeur, qui est utilisée pour les deux.

Par exemple, pour donner à chacun des quatre coins d'une boîte un rayon de `10px`&nbsp;:

```css
.boite {
  border-radius: 10px;
}
```

Ou pour donner au coin en haut à droite un rayon horizontal de `1em` et un rayon vertical de `10%`&nbsp;:

```css
.boite {
  border-top-right-radius: 1em 10%;
}
```

> [!NOTE]
> Comme pour les propriétés de bordure ci-dessus, les propriétés de rayon de bordure ont également des [propriétés _logiques_ de coins arrondis](/fr/docs/Web/CSS/Guides/Logical_properties_and_values#propriétés) correspondantes.

### Jouer avec les coins arrondis

Nous avons défini les quatre coins dans l'exemple ci-dessous, puis modifié les valeurs du coin supérieur droit pour le rendre différent. Vous pouvez jouer avec les valeurs pour changer les coins. Consultez la page de la propriété {{CSSxRef("border-radius")}} pour voir les options de syntaxe disponibles. Le [générateur de coins arrondis](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Border-radius_generator) peut être utilisé pour générer des valeurs de coins arrondis pour vous.

```html live-sample___corners
<div class="boite">
  <h2>Bordures</h2>
  <p>Essayez de modifier les bordures.</p>
</div>
```

```css live-sample___corners
.boite {
  width: 500px;
  height: 110px;
  padding: 0.5em;
  border: 10px solid rebeccapurple;
  border-radius: 1em;
  border-top-right-radius: 10% 30%;
}
```

{{EmbedLiveSample("corners")}}

## Résumé

Comme vous pouvez le constater, l'ajout d'un arrière-plan ou d'une bordure à une boîte n'est pas une mince affaire. N'hésitez pas à explorer les différentes pages de propriétés si vous souhaitez en savoir plus sur l'une des fonctionnalités abordées ici. Presque toutes les pages de MDN proposent des exemples que vous pouvez tester pour approfondir vos connaissances.

Dans le prochain article, nous vous proposerons quelques exercices qui vous permettent de vérifier si vous avez bien compris et assimilé les informations que nous vous avons fournies sur la mise en forme des arrière-plans et des bordures.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics/Test_your_skills/Backgrounds_and_borders", "Learn_web_development/Core/Styling_basics")}}
