---
title: Utiliser les couleurs relatives
slug: Web/CSS/Guides/Colors/Using_relative_colors
l10n:
  sourceCommit: 33094d735e90b4dcae5733331b79c51fee997410
---

Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors) définit la **syntaxe des couleurs relatives**, qui permet de définir une valeur CSS {{CSSxRef("&lt;color&gt;")}} par rapport à une autre couleur. C'est une fonctionnalité puissante qui permet de créer de manière programmatique des compléments aux couleurs existantes — comme des variantes plus claires, plus foncées, saturées, semi-transparentes ou inversées — permettant une création de palette de couleurs plus efficace.

Cet article explique la syntaxe des couleurs relatives, montre quelles sont les différentes options et présente quelques exemples illustratifs.

## Syntaxe générale

Une valeur de couleur CSS relative a la structure de syntaxe générale suivante&nbsp;:

```css
color-function(from origin-color channel1 channel2 channel3)
color-function(from origin-color channel1 channel2 channel3 / alpha)

/* l'espace colorimétrique inclus dans le cas des fonctions color() */
color(from origin-color colorspace channel1 channel2 channel3)
color(from origin-color colorspace channel1 channel2 channel3 / alpha)
```

Les couleurs relatives sont créées en utilisant les mêmes [fonctions de couleur](/fr/docs/Web/CSS/Guides/Colors#fonctions) que les couleurs absolues, mais avec des paramètres différents&nbsp;:

1. Intégrez une fonction de couleur de base (représentée ci-dessus par _`color-function()`_), telle que {{CSSxRef("color_value/rgb", "rgb()")}}, {{CSSxRef("color_value/hsl", "hsl()")}}, etc. Le choix de la fonction dépend du modèle de couleur que vous souhaitez utiliser pour la couleur relative que vous créez (la **couleur de sortie**).
2. Transmettez la **couleur d'origine** (représentée ci-dessus par _`origin-color`_) sur laquelle votre couleur relative est basée, précédée du mot-clé `from`. Il peut s'agir de n'importe quelle valeur {{CSSxRef("&lt;color&gt;")}} valide utilisant n'importe quel modèle de couleur disponible, y compris une valeur de couleur contenue dans une [propriété CSS personnalisée](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties), les couleurs système, `currentColor`, ou même une autre couleur relative.
3. Dans le cas de la fonction {{CSSxRef("color_value/color", "color()")}}, indiquez un _{{CSSxRef("color_value/color#colorspace", "colorspace")}}_ de la couleur de sortie.
4. Indiquez une valeur de sortie pour chaque canal individuel. La couleur de sortie est définie à partir de la couleur d'origine — représentée ci-dessus par les espaces réservés _`channel1`_, _`channel2`_ et _`channel3`_. Les canaux définis ici dépendent de la [fonction de couleur](/fr/docs/Web/CSS/Guides/Colors#fonctions) que vous utilisez pour votre couleur relative. Par exemple, si vous utilisez {{CSSxRef("color_value/hsl", "hsl()")}}, vous devez définir les valeurs de teinte, de saturation et de luminosité. Chaque valeur de canal peut être une nouvelle valeur, la même que la valeur d'origine, ou une valeur relative à la valeur du canal de la couleur d'origine.
5. En option, une valeur de canal `alpha` de type {{CSSxRef("&lt;alpha-value&gt;")}} pour la couleur de sortie peut être définie, précédée d'une barre oblique (`/`). Si la valeur du canal `alpha` n'est pas explicitement définie, elle prend par défaut la valeur du canal alpha de la _`origin-color`_ (et non 100%, comme c'est le cas pour les valeurs de couleur absolues).

Le navigateur convertit la couleur d'origine en une syntaxe compatible avec la fonction de couleur, puis la décompose en canaux de couleur individuels (plus le canal `alpha` si la couleur d'origine en possède un). Ces valeurs sont disponibles sous des noms appropriés à l'intérieur de la fonction de couleur — `r`, `g`, `b` et `alpha` dans le cas de la fonction `rgb()`, `l`, `a`, `b` et `alpha` dans le cas de la fonction `lab()`, `h`, `w`, `b` et `alpha` dans le cas de `hwb()`, etc. — et peuvent être utilisées pour calculer de nouvelles valeurs de canal de sortie.

Voyons maintenant la syntaxe des couleurs relatives en action. Le CSS ci-dessous est utilisé pour styliser deux éléments {{HTMLElement("div")}}, l'un avec une couleur de fond absolue (`red`) et l'autre avec une couleur de fond relative créée avec la fonction `rgb()`, basée sur la même valeur de couleur `red`&nbsp;:

```html hidden live-sample___simple-relative-color
<div id="conteneur">
  <div class="element" id="un"></div>
  <div class="element" id="deux"></div>
</div>
```

```css hidden live-sample___simple-relative-color
#conteneur {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.element {
  flex: 1;
  margin: 20px;
}
```

```css live-sample___simple-relative-color
#un {
  background-color: red;
}

#deux {
  background-color: rgb(from red 200 g b / alpha);
}
```

La sortie est la suivante&nbsp;:

{{EmbedLiveSample("simple-relative-color", "100%", 200)}}

L'utilisation de couleur relative de la fonction {{CSSxRef("color_value/rgb", "rgb()")}}, qui prend `red` comme couleur d'origine, la convertit en une couleur `rgb()` équivalente (`rgb(255 0 0)`) puis définit la nouvelle couleur avec un canal rouge de valeur `200` et des canaux vert, bleu et alpha ayant la même valeur que la couleur d'origine (le navigateur utilise les valeurs `g` et `b` mises à disposition dans la fonction, qui sont toutes deux égales à `0`, et `alpha` est `100%`).

Cela donne une sortie de `rgb(200 0 0)` — un rouge légèrement plus foncé. Si nous avions défini une valeur de canal rouge de `255` (ou simplement la valeur `r`), la couleur de sortie résultante aurait exactement la même que la valeur d'entrée. La couleur finale de sortie du navigateur (la valeur calculée) est une valeur sRGB `color()` équivalente à `rgb(200 0 0)` — `color(srgb 0.784314 0 0)`.

> [!NOTE]
> Comme mentionné ci-dessus, lors du calcul d'une couleur relative, la première chose que le navigateur fait est de convertir la couleur d'origine fournie (`red` dans l'exemple ci-dessus) en une valeur compatible avec la fonction de couleur utilisée (dans ce cas, `rgb()`). Cela permet au navigateur de calculer la couleur de sortie à partir de la couleur d'origine. Bien que les calculs soient effectués par rapport à la fonction de couleur utilisée, la valeur réelle de la couleur de sortie dépend de l'espace colorimétrique de la couleur&nbsp;:
>
> - Les anciennes fonctions de couleur sRGB ne peuvent pas exprimer tout le spectre des couleurs visibles. Les couleurs de sortie des fonctions ({{CSSxRef("color_value/hsl", "hsl()")}}, {{CSSxRef("color_value/hwb", "hwb()")}}, et {{CSSxRef("color_value/rgb", "rgb()")}}) sont sérialisées en `color(srgb)` pour éviter ces limitations. Cela signifie que l'interrogation de la valeur de couleur de sortie avec la propriété {{DOMxRef("HTMLElement.style")}} ou la méthode {{DOMxRef("CSSStyleDeclaration.getPropertyValue()")}} retourne la couleur de sortie sous forme de valeur [`color(srgb ...)`](/fr/docs/Web/CSS/Reference/Values/color_value/color).
> - Pour les fonctions de couleur plus récentes (`lab()`, `oklab()`, `lch()`, et `oklch()`), les valeurs de sortie des couleurs relatives sont exprimées dans la même syntaxe que la fonction de couleur utilisée. Par exemple, si une fonction de couleur {{CSSxRef("color_value/lab", "lab()")}} est utilisée, la couleur de sortie est une valeur `lab()`.

Toutes les lignes suivantes produisent une couleur de sortie équivalente&nbsp;:

```css
red
rgb(255 0 0)
rgb(from red 255 0 0)
rgb(from red 255 0 0 / 1)
rgb(from red 255 0 0 / 100%)

rgb(from red 255 g b)
rgb(from red r 0 0)
rgb(from red r g b / 1)
rgb(from red r g b / 100%)

rgb(from red r g b)
rgb(from red r g b / alpha)

/* Avec `red`, les valeurs g et b sont les mêmes, ce qui les rend interchangeables */
rgb(from red r g g)
rgb(from red r b b)
rgb(from red 255 g g)
rgb(from red 255 b b)
```

## Flexibilité de la syntaxe

Il est important de faire la distinction entre les valeurs des canaux de couleur d'origine déstructurées mises à disposition dans la fonction et les valeurs des canaux de couleur de sortie définies par le·la développeur·euse.

Pour réitérer, lorsqu'une couleur relative est définie, les valeurs des canaux de la couleur d'origine sont mises à disposition dans la fonction pour être utilisées lors de la définition des valeurs des canaux de couleur de sortie. L'exemple suivant définit une couleur relative en utilisant une fonction `rgb()` et utilise les valeurs des canaux de la couleur d'origine (disponibles sous les noms `r`, `g` et `b`) pour les valeurs des canaux de sortie, ce qui signifie que la couleur de sortie est la même que la couleur d'origine&nbsp;:

```css
rgb(from red r g b)
```

Cependant, lors de la spécification des valeurs de sortie, vous n'avez pas besoin d'utiliser les valeurs des canaux de couleur d'origine. Vous devez fournir les valeurs des canaux de sortie dans le bon ordre (par exemple, rouge, puis vert, puis bleu dans le cas de `rgb()`), mais elles peuvent être n'importe quelles valeurs valides pour ces canaux. Cela donne aux couleurs CSS relatives un haut degré de flexibilité.

Par exemple, si vous le souhaitez, vous pouvez définir des valeurs absolues comme celles montrées ci-dessous, transformant `red` en `blue`&nbsp;:

```css
rgb(from red 0 0 255)
/* la couleur de sortie est équivalente à rgb(0 0 255), bleu complet */
```

> [!NOTE]
> Si vous utilisez la syntaxe des couleurs relatives mais que vous produisez la même couleur que la couleur d'origine ou une couleur qui n'est pas du tout basée sur la couleur d'origine, vous ne créez pas vraiment une couleur relative. Il est peu probable que vous fassiez cela dans un vrai projet, et vous utiliseriez probablement simplement une valeur de couleur absolue à la place. Cependant, nous avons jugé utile d'expliquer que vous _pouvez_ le faire avec la syntaxe des couleurs relatives, comme point de départ pour apprendre à l'utiliser.

Vous pouvez même mélanger ou répéter les valeurs fournies. L'exemple suivant prend un rouge légèrement plus foncé en entrée et produit une couleur gris clair — les canaux `r`, `g` et `b` de la couleur de sortie sont tous définis sur la valeur du canal `r` de la couleur d'origine&nbsp;:

```css
rgb(from rgb(200 0 0) r r r)
/* la couleur de sortie est équivalente à rgb(200 200 200), gris clair */
```

L'exemple suivant utilise les valeurs des canaux de la couleur d'origine pour les valeurs des canaux `r`, `g` et `b` de la couleur de sortie, mais dans l'ordre inverse&nbsp;:

```css
rgb(from rgb(200 170 0) b g r)
/* la couleur de sortie est équivalente à rgb(0 170 200) */
```

## Fonctions de couleur qui prennent en charge les couleurs relatives

Dans la section ci-dessus, nous n'avons vu que des couleurs relatives définies avec la fonction {{CSSxRef("color_value/rgb", "rgb()")}}. Cependant, les couleurs relatives peuvent être définies en utilisant n'importe quelle fonction de couleur CSS moderne, tels que {{CSSxRef("color_value/color", "color()")}}, {{CSSxRef("color_value/hsl", "hsl()")}}, {{CSSxRef("color_value/hwb", "hwb()")}}, {{CSSxRef("color_value/lab", "lab()")}}, {{CSSxRef("color_value/lch", "lch()")}}, {{CSSxRef("color_value/oklab", "oklab()")}}, {{CSSxRef("color_value/oklch", "oklch()")}} ou {{CSSxRef("color_value/rgb", "rgb()")}}. La structure syntaxique générale est la même dans chaque cas, bien que les valeurs des couleurs d'origine aient des noms différents appropriés à la fonction utilisée.

Ci-dessous, vous pouvez trouver des exemples de syntaxe de couleurs relatives pour chaque fonction de couleur. Chaque cas est le plus simple possible, avec les valeurs des canaux de couleur de sortie correspondant exactement aux valeurs des canaux de couleur d'origine&nbsp;:

```css
/* color() avec et sans canal alpha */
color(from red a98-rgb r g b)
color(from red a98-rgb r g b / alpha)

color(from red xyz-d50 x y z)
color(from red xyz-d50 x y z / alpha)

/* hsl() avec et sans canal alpha */
hsl(from red h s l)
hsl(from red h s l / alpha)

/* hwb() avec et sans canal alpha */
hwb(from red h w b)
hwb(from red h w b / alpha)

/* lab() avec et sans canal alpha */
lab(from red l a b)
lab(from red l a b / alpha)

/* lch() avec et sans canal alpha */
lch(from red l c h)
lch(from red l c h / alpha)

/* oklab() avec et sans canal alpha */
oklab(from red l a b)
oklab(from red l a b / alpha)

/* oklch() avec et sans canal alpha */
oklch(from red l c h)
oklch(from red l c h / alpha)

/* rgb() avec et sans canal alpha */
rgb(from red r g b)
rgb(from red r g b / alpha)
```

Il convient de rappeler une fois de plus que le système de couleurs de la couleur d'origine n'a pas besoin de correspondre au système de couleurs utilisé pour créer la couleur de sortie. Cela offre encore une grande flexibilité. En général, vous n'êtes pas intéressé par le système dans lequel la couleur d'origine est définie et vous ne le connaissez peut-être même pas (vous pourriez simplement avoir une [valeur de propriété personnalisée](#utiliser_les_propriétés_personnalisées) à manipuler). Vous voudez simplement entrer une couleur et, par exemple, créer une variante plus claire en la mettant dans une fonction `hsl()` et en modifiant la valeur de la luminosité.

## Utiliser les propriétés personnalisées

Lors de la création d'une couleur relative, vous pouvez utiliser des valeurs définies dans les [propriétés personnalisées CSS](/fr/docs/Web/CSS/Guides/Cascading_variables/Using_custom_properties) à la fois pour la couleur d'origine et pour les définitions des valeurs des canaux de couleur de sortie. Voyons un exemple.

Dans le CSS ci-dessous, nous définissons deux propriétés personnalisées&nbsp;:

- `--couleur-de-base` contient notre couleur de marque de base — `purple`. Ici, nous utilisons un mot-clé de couleur nommé, mais les couleurs relatives peuvent accepter n'importe quelle syntaxe de couleur pour la couleur d'origine.
- `--standard-opacity` contient la valeur d'opacité standard de la marque que nous voulons appliquer aux boîtes semi-transparentes — `0.75`.

Nous donnons ensuite à deux éléments {{HTMLElement("div")}} une couleur de fond. L'un reçoit une couleur absolue — notre `--couleur-de-base` violet de marque. L'autre reçoit une couleur relative égale à notre violet de marque, transformée pour ajouter un canal alpha égal à notre valeur d'opacité standard.

```html hidden
<div id="conteneur">
  <div class="element" id="un"></div>
  <div class="element" id="deux"></div>
</div>
```

```css hidden
#conteneur {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
  background-image: repeating-linear-gradient(
    45deg,
    white,
    white 24px,
    black 25px,
    black 50px
  );
}

.element {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --couleur-de-base: purple;
  --standard-opacity: 0.75;
}

#un {
  background-color: var(--couleur-de-base);
}

#deux {
  background-color: hwb(
    from var(--couleur-de-base) h w b / var(--standard-opacity)
  );
}
```

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Utiliser les propriétés personnalisées", "100%", 200)}}

## Utiliser les fonctions mathématiques

Vous pouvez utiliser les [fonctions mathématiques CSS](/fr/docs/Web/CSS/Reference/Values/Functions#math_functions) telles que {{CSSxRef("calc()")}} pour calculer les valeurs des canaux de couleur de sortie. Voyons un exemple.

Le CSS ci-dessous est utilisé pour mettre en forme trois éléments {{HTMLElement("div")}} avec différentes couleurs de fond. Le milieu reçoit une `--couleur-de-base` non modifiée, tandis que les éléments de gauche et de droite reçoivent des variantes éclaircies et assombries de cette `--couleur-de-base`. Ces variantes sont définies en utilisant des couleurs relatives — la `--couleur-de-base` est passée dans une fonction `lch()`, et la couleur de sortie a son canal de luminosité modifié pour obtenir l'effet souhaité à l'aide d'une fonction `calc()`. La couleur éclaircie a 20% ajoutés au canal de luminosité, et la couleur assombrie a 20% soustraits de celui-ci.

```html hidden
<div id="conteneur">
  <div class="element" id="un"></div>
  <div class="element" id="deux"></div>
  <div class="element" id="trois"></div>
</div>
```

```css hidden
#conteneur {
  display: flex;
  width: 100vw;
  height: 100vh;
  box-sizing: border-box;
}

.element {
  flex: 1;
  margin: 20px;
}
```

```css
:root {
  --couleur-de-base: orange;
}

#un {
  background-color: lch(from var(--couleur-de-base) calc(l + 20) c h);
}

#deux {
  background-color: var(--couleur-de-base);
}

#trois {
  background-color: lch(from var(--couleur-de-base) calc(l - 20) c h);
}
```

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Utiliser les fonctions mathématiques", "100%", 200)}}

## Manipuler le canal alpha

Cet exemple montre comment modifier le canal alpha d'une couleur nommée. Ici, nous avons un élément enveloppé dans un conteneur qui ont tous deux un arrière-plan `teal`. Pour distinguer les arrière-plans, nous faisons varier la valeur du canal alpha en utilisant la fonctionnalité de couleur relative, la fonction [`calc()`](/fr/docs/Web/CSS/Reference/Values/calc) et une [propriété personnalisée](/fr/docs/Web/CSS/Reference/Properties/--*).

```html
<div class="conteneur">
  <div class="element"></div>
</div>
```

```css hidden
.conteneur {
  padding: 60px;
}

.element {
  height: 60px;
}
```

```css
div {
  background-color: rgb(
    from teal r g b / calc(alpha * var(--mutltiplicateur-alpha))
  );
}

.conteneur {
  --mutltiplicateur-alpha: 0.3;
}

.element {
  --mutltiplicateur-alpha: 1;
}
```

Le canal alpha est référencé en utilisant le mot-clé `alpha`. Dans ce cas, l'expression `calc(alpha * var(--mutltiplicateur-alpha))` modifie la valeur du canal alpha en multipliant `alpha` par la valeur de la propriété personnalisée `--mutltiplicateur-alpha`. Le conteneur obtient un arrière-plan semi-transparent en raison du multiplicateur de `0,3` qui est inférieur à `1,0`.

Le résultat est le suivant&nbsp;:

{{EmbedLiveSample("Manipuler le canal alpha", "100%", 200)}}

## Les valeurs des canaux se résolvent en valeurs `<number>`

Pour que les calculs des valeurs des canaux fonctionnent avec les couleurs relatives, toutes les valeurs des canaux de couleur d'origine se résolvent en valeurs de type {{CSSxRef("&lt;number&gt;")}} appropriées. Par exemple, dans les exemples `lch()` ci-dessus, nous calculons de nouvelles valeurs de luminosité en ajoutant ou en soustrayant des nombres à partir de la valeur du canal `l` de la couleur d'origine. Si nous essayions de faire `calc(l + 20%)`, cela donne une couleur invalide — `l` est un `<number>` et ne peut pas avoir un pourcentage ({{CSSxRef("&lt;percentage&gt;")}}) ajouté.

- Les valeurs des canaux initialement définies en tant que `<percentage>` se résolvent en un `<number>` approprié pour la fonction de couleur de sortie.
- Les valeurs des canaux initialement définies en tant qu'angle {{CSSxRef("&lt;hue&gt;")}} se résolvent en un nombre de degrés dans une plage de `0` à `360`, inclusivement.

Consultez les différentes [pages de fonctions de couleur](/fr/docs/Web/CSS/Guides/Colors#fonctions) pour connaître les spécificités de la résolution des valeurs des canaux d'origine.

## Vérifier la prise en charge par le navigateur

Vous pouvez vérifier qu'un navigateur prend en charge les syntaxes de couleurs relatives en utilisant la règle {{CSSxRef("@supports")}}.

Par exemple&nbsp;:

```css
@supports (color: hsl(from white h s l)) {
  /* sûr d'utiliser la syntaxe de couleur relative hsl() */
}
```

## Exemples

> [!NOTE]
> Vous pouvez trouver des exemples supplémentaires démontrant l'utilisation de la syntaxe de couleur relative dans les différents types de notation fonctionnelle sur leurs pages dédiées&nbsp;: {{CSSxRef("color_value/color#utiliser_les_couleurs_relatives_avec_color", "color()")}}, {{CSSxRef("color_value/hsl#utiliser_les_couleurs_relatives_avec_hsl", "hsl()")}}, {{CSSxRef("color_value/hwb#utiliser_les_couleurs_relatives_avec_hwb", "hwb()")}}, {{CSSxRef("color_value/lab#utiliser_les_couleurs_relatives_avec_lab", "lab()")}}, {{CSSxRef("color_value/lch#utiliser_les_couleurs_relatives_avec_lch", "lch()")}}, {{CSSxRef("color_value/oklab#utiliser_les_couleurs_relatives_avec_oklab", "oklab()")}}, {{CSSxRef("color_value/oklch#utiliser_les_couleurs_relatives_avec_oklch", "oklch()")}}, {{CSSxRef("color_value/rgb#utiliser_les_couleurs_relatives_avec_rgb", "rgb()")}}.

### Générateur de palette de couleurs

Cet exemple vous permet de choisir une couleur de base et un type de palette de couleurs. Le navigateur affiche ensuite une palette de couleurs appropriée en fonction de la couleur de base choisie. Les choix de palette de couleurs sont les suivants&nbsp;:

- **Complémentaire**&nbsp;: Inclut deux couleurs situées aux extrémités opposées d'une roue chromatique, ou pour le dire autrement, _des teintes opposées_ (voir le type de données {{CSSxRef("&lt;hue&gt;")}} pour plus d'informations sur les teintes et les roues chromatiques). Les deux couleurs sont définies comme une couleur de base, et la couleur de base avec le canal de teinte +180 degrés.
- **Triadique**&nbsp;: Inclut trois couleurs espacées de manière égale autour de la roue chromatique. Les trois couleurs sont définies comme une couleur de base, la couleur de base avec le canal de teinte -120 degrés, et la couleur de base avec le canal de teinte +120 degrés.
- **Tétradique**&nbsp;: Inclut quatre couleurs espacées de manière égale autour de la roue chromatique. Les quatre couleurs sont définies comme une couleur de base, et la couleur de base avec le canal de teinte +90, +180, et +270 degrés.
- **Monochrome**&nbsp;: Inclut plusieurs couleurs avec la même teinte mais des valeurs de luminosité différentes. Dans notre exemple, nous avons défini cinq couleurs dans une palette monochrome — couleur de base, et couleur de base avec le canal de luminosité -20, -10, +10 et +20.

#### HTML

Le HTML complet est inclus ci-dessous à titre de référence. Les parties les plus intéressantes sont les suivantes&nbsp;:

- La propriété personnalisée `--couleur-de-base` est stockée en tant que [`style`](/fr/docs/Web/HTML/Reference/Global_attributes/style) embarqué sur l'élément {{HTMLElement("div")}} avec l'identifiant `conteneur`. Nous l'avons placée là afin de pouvoir mettre à jour la valeur à l'aide de JavaScript. Nous avons fourni une valeur initiale de `#ff0000` (`red`) pour afficher une palette de couleurs basée sur cette valeur lorsque l'exemple se charge. Notez que normalement, nous la définirions probablement sur l'élément {{HTMLElement("html")}}, mais l'exemple en direct de MDN la supprimait lors du rendu.
- Le sélecteur de couleur de base est créé à l'aide d'un contrôle `{{HTMLElement("input/color", "&lt;input type=\"color\"&gt;")}}`. Lorsqu'une nouvelle valeur est définie dans ce contrôle, la propriété personnalisée `--couleur-de-base` est définie sur cette valeur à l'aide de JavaScript, ce qui génère à son tour une nouvelle palette de couleurs. Toutes les couleurs affichées sont des couleurs relatives basées sur `--couleur-de-base`.
- L'ensemble des contrôles `{{HTMLElement("input/radio", "&lt;input type=\"radio\"&gt;")}}` permet de choisir un type de palette de couleurs à générer. Lorsqu'une nouvelle valeur est choisie ici, JavaScript est utilisé pour définir une nouvelle classe sur le `<div>` `conteneur` afin de représenter la palette choisie. Dans le CSS, des sélecteurs descendants sont utilisés pour cibler les `<div>` enfants (par exemple, `.comp :nth-child(1)`) afin qu'ils puissent avoir les couleurs correctes appliquées et masquer les nœuds `<div>` inutilisés.
- Le `<div>` `conteneur` contenant les `<div>` enfants qui affichent les couleurs de la palette générée. Notez qu'une classe initiale de `comp` est définie dessus, de sorte que la page affiche un schéma de couleurs complémentaires lors du premier chargement.

```html
<div>
  <h1>Générateur de palette de couleurs</h1>
  <form>
    <div id="selecteur-couleur">
      <label for="couleur">Sélectionnez une couleur de base&nbsp;:</label>
      <input type="color" id="couleur" name="couleur" value="#ff0000" />
    </div>
    <div>
      <fieldset>
        <legend>Sélectionnez un type de palette de couleurs&nbsp;:</legend>

        <div>
          <input
            type="radio"
            id="comp"
            name="palette-type"
            value="comp"
            checked />
          <label for="comp">Complémentaire</label>
        </div>

        <div>
          <input
            type="radio"
            id="triadic"
            name="palette-type"
            value="triadic" />
          <label for="triadic">Triadique</label>
        </div>

        <div>
          <input
            type="radio"
            id="tetradic"
            name="palette-type"
            value="tetradic" />
          <label for="tetradic">Tétradique</label>
        </div>

        <div>
          <input
            type="radio"
            id="monochrome"
            name="palette-type"
            value="monochrome" />
          <label for="monochrome">Monochrome</label>
        </div>
      </fieldset>
    </div>
  </form>
  <div id="conteneur" class="comp">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </div>
</div>
```

#### CSS

Ci-dessous, nous affichons uniquement le CSS qui définit les couleurs de la palette. Remarquez comment, dans chaque cas, des sélecteurs descendants sont utilisés pour appliquer la propriété {{CSSxRef("background-color")}} correcte à chaque enfant `<div>` de la palette choisie. L'ordre source des `<div>` importe davantage que le type d'élément, nous avons donc utilisé {{CSSxRef(":nth-child")}} pour les cibler.

Dans la règle précédente, nous avons utilisé le [sélecteur de voisins généraux (`~`)](/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) pour cibler les éléments `<div>` inutilisés dans chaque type de palette, en leur attribuant la propriété [`display: none`] (/fr/docs/Web/CSS/Reference/Selectors/Subsequent-sibling_combinator) pour empêcher leur affichage.

Les couleurs elles‑mêmes incluent la `--couleur-de-base`, ainsi que des couleurs relatives dérivées de cette `--couleur-de-base`. Les couleurs relatives utilisent la fonction {{CSSxRef("color_value/lch", "lch()")}} — en passant la `--couleur-de-base` d'origine et en définissant une couleur de sortie avec un ajustement du canal de luminosité ou de teinte selon le cas.

```css hidden
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}

h1 {
  margin-left: 16px;
}

/* Mise en forme de base du formulaire */

#selecteur-couleur {
  margin-left: 16px;
  margin-bottom: 20px;
}

#selecteur-couleur label,
legend {
  display: block;
  font-size: 0.8rem;
  margin-bottom: 10px;
}

input[type="color"] {
  width: 200px;
  display: block;
}

fieldset {
  display: flex;
  gap: 20px;
  border: 0;
}

/* Mise en forme du conteneur de la palette */

#conteneur {
  /* Valeur par défaut */
  --couleur-de-base: red;

  display: flex;
  width: 100vw;
  height: 250px;
  box-sizing: border-box;
}

#conteneur div {
  flex: 1;
}
```

```css
/* Couleurs complémentaires */
/* Couleur de base, et couleur de base avec canal de teinte +180 degrés */

.comp :nth-child(1) {
  background-color: var(--couleur-de-base);
}

.comp :nth-child(2) {
  background-color: lch(from var(--couleur-de-base) l c calc(h + 180));
}

/* Utilisez @supports pour ajouter la prise en charge de l'ancienne syntaxe qui nécessite que les unités deg soient définies dans les calculs de teinte. C'est requis pour Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 180deg))) {
  .comp :nth-child(2) {
    background-color: lch(from var(--couleur-de-base) l c calc(h + 180deg));
  }
}

/* Couleurs triadiques */
/* Couleur de base, couleur de base avec canal de teinte -120 degrés, et couleur de base */
/* avec canal de teinte +120 degrés */

.triadic :nth-child(1) {
  background-color: var(--couleur-de-base);
}

.triadic :nth-child(2) {
  background-color: lch(from var(--couleur-de-base) l c calc(h - 120));
}

.triadic :nth-child(3) {
  background-color: lch(from var(--couleur-de-base) l c calc(h + 120));
}

/* Utilisez @supports pour ajouter la prise en charge de l'ancienne syntaxe qui nécessite que les unités deg soient définies dans les calculs de teinte. C'est requis pour Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 120deg))) {
  .triadic :nth-child(2) {
    background-color: lch(from var(--couleur-de-base) l c calc(h - 120deg));
  }

  .triadic :nth-child(3) {
    background-color: lch(from var(--couleur-de-base) l c calc(h + 120deg));
  }
}

/* Couleurs tétradiques */
/* Couleur de base, et couleur de base avec canal de teinte +90, +180, et +270 degrés */

.tetradic :nth-child(1) {
  background-color: var(--couleur-de-base);
}

.tetradic :nth-child(2) {
  background-color: lch(from var(--couleur-de-base) l c calc(h + 90));
}

.tetradic :nth-child(3) {
  background-color: lch(from var(--couleur-de-base) l c calc(h + 180));
}

.tetradic :nth-child(4) {
  background-color: lch(from var(--couleur-de-base) l c calc(h + 270));
}

/* Utilisez @supports pour ajouter la prise en charge de l'ancienne syntaxe qui nécessite que les unités deg soient définies dans les calculs de teinte. C'est requis pour Safari 16.4+. */
@supports (color: lch(from red l c calc(h + 90deg))) {
  .tetradic :nth-child(2) {
    background-color: lch(from var(--couleur-de-base) l c calc(h + 90deg));
  }

  .tetradic :nth-child(3) {
    background-color: lch(from var(--couleur-de-base) l c calc(h + 180deg));
  }

  .tetradic :nth-child(4) {
    background-color: lch(from var(--couleur-de-base) l c calc(h + 270deg));
  }
}

/* Couleurs monochromes */
/* Couleur de base, et couleur de base avec canal de luminosité -20, -10, +10, et +20 */

.monochrome :nth-child(1) {
  background-color: lch(from var(--couleur-de-base) calc(l - 20) c h);
}

.monochrome :nth-child(2) {
  background-color: lch(from var(--couleur-de-base) calc(l - 10) c h);
}

.monochrome :nth-child(3) {
  background-color: var(--couleur-de-base);
}

.monochrome :nth-child(4) {
  background-color: lch(from var(--couleur-de-base) calc(l + 10) c h);
}

.monochrome :nth-child(5) {
  background-color: lch(from var(--couleur-de-base) calc(l + 20) c h);
}

/* Masquer les échantillons inutilisés pour chaque type de palette */
.comp :nth-child(2) ~ div,
.triadic :nth-child(3) ~ div,
.tetradic :nth-child(4) ~ div {
  display: none;
}
```

##### Petite parenthèse sur les tests `@supports`

Dans l'exemple CSS, remarquez que les blocs {{CSSxRef("@supports")}} sont utilisés pour fournir différentes valeurs de {{CSSxRef("background-color")}} aux navigateurs qui prennent en charge une spécification antérieure de la syntaxe des couleurs relatives. C'est nécessaire, car l'implémentation initiale de Safari était basée sur une version plus ancienne de la spécification dans laquelle les valeurs des canaux de couleur d'origine étaient résolues en un nombre ({{CSSxRef("&lt;number&gt;")}}) ou d'autres types d'unités selon le contexte. Cela signifiait que les valeurs nécessitaient parfois des unités lors des additions et des soustractions, ce qui créait de la confusion. Dans les nouvelles implémentations, les valeurs des canaux de couleur d'origine sont toujours résolues en une valeur équivalente {{CSSxRef("&lt;number&gt;")}}, ce qui signifie que les calculs sont toujours effectués avec des valeurs sans unité.

Notez que le test de prise en charge est effectué dans chaque cas à l'aide d'une déclaration de couleur quelconque — `color: lch(from red l c calc(h + 90deg))` par exemple — pas nécessairement la valeur réelle que nous devons varier pour d'autres navigateurs. Lors du test de valeurs complexes comme celles-ci, vous devez utiliser la déclaration la plus simple possible qui contient encore la différence syntaxique que vous souhaitez tester.

Inclure une propriété personnalisée dans le test `@supports` ne fonctionne pas — le test revient toujours positif, quel que soit la valeur donnée à la propriété personnalisée. Cela s'explique par le fait qu'une valeur de propriété personnalisée ne devient invalide que lorsqu'elle est assignée à une valeur invalide (ou partie d'une valeur invalide) d'une propriété CSS régulière. Pour contourner ce problème, dans chaque test, nous avons remplacé `var(--couleur-de-base)` par le mot-clé `red`.

#### JavaScript

Dans le JavaScript, nous&nbsp;:

- Ajoutez un écouteur d'évènement {{DOMxRef("HTMLElement/change_event", "change")}} aux boutons radio afin que lorsque l'un d'eux est sélectionné, la fonction `definirConteneur()` s'exécute. Cette fonction met à jour la valeur de `class` du `<div>` avec `id="conteneur"` avec la valeur du bouton radio sélectionné afin que les bonnes couleurs de fond soient appliquées aux `<div>` enfants pour le type de palette choisi.
- Ajoutez un écouteur d'évènement {{DOMxRef("Element/input_event", "input")}} au contrôle de sélection de couleur afin que lorsqu'une nouvelle couleur est sélectionnée, la fonction `definirCouleurDeBase()` s'exécute. Cette fonction définit la valeur de la propriété personnalisée `--couleur-de-base` sur la nouvelle couleur.

```js
const form = document.forms[0];
const radios = form.elements["palette-type"];
const selecteurCouleur = form.elements["couleur"];
const elemConteneur = document.getElementById("conteneur");

for (const radio of radios) {
  radio.addEventListener("change", definirConteneur);
}

selecteurCouleur.addEventListener("input", definirCouleurDeBase);

function definirConteneur(e) {
  const palType = e.target.value;
  console.log("radio modifié");
  elemConteneur.setAttribute("class", palType);
}

function definirCouleurDeBase(e) {
  console.log("couleur modifiée");
  elemConteneur.style.setProperty("--couleur-de-base", e.target.value);
}
```

#### Résultats

Le résultat est le suivant. Cela commence à montrer la puissance des couleurs CSS relatives — nous définissons plusieurs couleurs et générons des palettes qui sont mises à jour en direct en ajustant une seule propriété personnalisée.

{{EmbedLiveSample("Générateur de palette de couleurs", "100%", 500)}}

### Mise à jour en direct du schéma de couleurs de l'interface utilisateur

Cet exemple montre une carte contenant un titre et du texte, mais avec une particularité — en dessous de la carte se trouve un contrôle de curseur (`{{HTMLElement("input/range", "&lt;input type=\"range\"&gt;")}}`). Lorsque sa valeur est modifiée, JavaScript est utilisé pour définir la valeur de la propriété personnalisée `--teinte` sur la nouvelle valeur du curseur.

Cela ajuste à son tour le schéma de couleurs pour l'ensemble de l'interface utilisateur&nbsp;:

- La valeur de `--couleur-de-base` est une couleur relative dont le canal de teinte est défini sur la valeur de `--teinte`.
- Les autres couleurs utilisées dans le design sont des couleurs relatives basées sur `--couleur-de-base`. En conséquence, elles changent lorsque `--couleur-de-base` change.

#### HTML

Le HTML de l'exemple est montré ci-dessous.

- L'élément {{HTMLElement("main")}} agit comme un conteneur externe pour contenir le reste du contenu, permettant à la carte et au formulaire d'être centrés verticalement et horizontalement à l'intérieur de `<main>` en tant qu'unité.
- L'élément {{HTMLElement("section")}} contient les éléments [`<h1>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) et {{HTMLElement("p")}} qui définissent le contenu de la carte.
- L'élément {{HTMLElement("form")}} contient le contrôle (`{{HTMLElement("input/range", "&lt;input type=\"range\"&gt;")}}`) et son {{HTMLElement("label")}}.

```html
<main>
  <section>
    <h1>Un amour des couleurs</h1>
    <p>
      Les couleurs, l'essence vibrante de notre environnement, sont vraiment
      impressionnantes. De la chaleur ardente des rouges à la fraîcheur
      apaisante des bleus, elles apportent une richesse inégalée à notre monde.
      Les couleurs éveillent les émotions, stimulent la créativité et façonnent
      les perceptions, agissant comme un langage universel d'expression. Dans
      leur éclat, les couleurs créent une tapisserie visuellement enchanteresse
      qui invite à l'admiration et suscite la joie.
    </p>
  </section>
  <form>
    <label for="ajuster-teinte">Ajuster la teinte&nbsp;:</label>
    <input
      type="range"
      name="ajuster-teinte"
      id="ajuster-teinte"
      value="240"
      min="0"
      max="360" />
  </form>
</main>
```

#### CSS

Dans le CSS, le `:root` a une valeur par défaut `--teinte` définie, des couleurs relatives [`lch()`](/fr/docs/Web/CSS/Reference/Values/color_value/lch) pour définir le schéma de couleurs, ainsi qu'un dégradé radial qui remplit tout le corps.

Les couleurs relatives sont les suivantes&nbsp;:

- `--couleur-de-base`&nbsp;: La couleur de base prend une couleur d'origine de `red` (bien que n'importe quelle couleur complète fait l'affaire) et ajuste sa valeur de teinte à la valeur définie dans la propriété personnalisée `--teinte`.
- `--couleur-de-fond`&nbsp;: Une variante beaucoup plus claire de `--couleur-de-base`, destinée à être utilisée comme arrière-plan. C'est créé en prenant une couleur d'origine de `--couleur-de-base` et en ajoutant 40 à sa valeur de luminosité.
- `--couleur-complementaire`&nbsp;: Une couleur complémentaire à 180 degrés autour du cercle chromatique de `--couleur-de-base`. C'est créé en prenant une couleur d'origine de `--couleur-de-base` et en ajoutant 180 à sa valeur de teinte.

Maintenant, jetez un œil au reste du CSS et notez tous les endroits où ces couleurs sont utilisées. Cela inclut les [arrière-plans](/fr/docs/Web/CSS/Reference/Properties/background), les [bordures](/fr/docs/Web/CSS/Reference/Properties/border), {{CSSxRef("text-shadow")}} et même l'accent de couleur ({{CSSxRef("accent-color")}}) du curseur.

> [!NOTE]
> Pour plus de concision, seules les parties du CSS pertinentes à l'utilisation des couleurs relatives sont montrées.

```css hidden
html {
  font-family: sans-serif;
}

main {
  width: 80vw;
  margin: 2rem auto;
}

h1 {
  text-align: center;
  margin: 0;
  color: black;
  border-radius: 16px 16px 0 0;
  font-size: 3rem;
  letter-spacing: -1px;
}

p {
  line-height: 1.5;
  margin: 0;
  padding: 1.2rem;
}

form {
  width: fit-content;
  display: flex;
  margin: 2rem auto;
  padding: 0.4rem;
}
```

```css
:root {
  /* Valeur de teinte par défaut */
  --teinte: 240;

  /* Définitions de couleurs relatives */
  --couleur-de-base: lch(from red l c var(--teinte));
  --couleur-de-fond: lch(from var(--couleur-de-base) calc(l + 40) c h);
  --couleur-complementaire: lch(from var(--couleur-de-base) l c calc(h + 180));

  background: radial-gradient(
    ellipse at center,
    white 20%,
    var(--couleur-de-base)
  );
}

/* Utilisez @supports pour ajouter la prise en charge de la vieille syntaxe
   nécessitant l'unité deg dans les calculs de teinte (Safari 16.4+) */
@supports (color: lch(from red l c calc(h + 180deg))) {
  body {
    --couleur-complementaire: lch(
      from var(--couleur-de-base) l c calc(h + 180deg)
    );
  }
}

/* Mise en forme de la boîte */

section {
  background-color: var(--couleur-de-fond);
  border: 3px solid var(--couleur-de-base);
  border-radius: 20px;
  box-shadow: 10px 10px 30px rgb(0 0 0 / 0.5);
}

h1 {
  background-color: var(--couleur-de-base);
  text-shadow:
    1px 1px 1px var(--couleur-complementaire),
    -1px -1px 1px var(--couleur-complementaire),
    0 0 3px var(--couleur-complementaire);
}

/* Styles du curseur */

form {
  background-color: var(--couleur-de-fond);
  border: 3px solid var(--couleur-de-base);
}

input {
  accent-color: var(--couleur-complementaire);
}
```

#### JavaScript

Le JavaScript ajoute un écouteur d'évènement {{DOMxRef("Element/input_event", "input")}} au contrôle du curseur afin que, lorsqu'une nouvelle valeur est définie, la fonction `definirTeinte()` s'exécute. Cette fonction définit une nouvelle valeur de propriété personnalisée `--teinte` en ligne sur le `:root` (l'élément `<html>`) qui remplace la valeur par défaut originale que nous avons définie dans notre CSS.

```js
const elementRacine = document.querySelector(":root");
const glissiere = document.getElementById("ajuster-teinte");

glissiere.addEventListener("input", definirTeinte);

function definirTeinte(e) {
  elementRacine.style.setProperty("--teinte", e.target.value);
}
```

#### Résultats

La sortie est affichée ci‑dessous. Des couleurs CSS relatives sont utilisées ici pour piloter le schéma de couleurs d'une interface entière, ajustable en direct en modifiant une seule valeur.

{{EmbedLiveSample("Mise à jour en direct du schéma de couleurs de l'interface utilisateur", "100%", 450)}}

## Voir aussi

- Le type de donnée {{CSSxRef("&lt;color&gt;")}}
- Le module [des couleurs CSS](/fr/docs/Web/CSS/Guides/Colors)
- [sRGB](https://fr.wikipedia.org/wiki/SRGB) sur Wikipedia
- [CIELAB](https://fr.wikipedia.org/wiki/L*a*b*_CIE_1976) sur Wikipedia
- [Syntaxe des couleurs relatives CSS <sup>(angl.)</sup>](https://developer.chrome.com/blog/css-relative-color-syntax) sur developer.chrome.com (2023)
