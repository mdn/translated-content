---
title: Fonction CSS `progress()`
short-title: progress()
slug: Web/CSS/Reference/Values/progress
l10n:
  sourceCommit: b760560abe30bd69ca968dac38528102f423b5ea
---

La [fonction](/fr/docs/Web/CSS/Reference/Values/Functions) [CSS](/fr/docs/Web/CSS) **`progress()`** retourne une valeur {{CSSxRef("&lt;number&gt;")}} représentant la position d'une valeur (la valeur de progression) par rapport à deux autres valeurs (les valeurs de début et de fin de progression).

## Syntaxe

```css-nolint
/* Avec une valeur de progression fixe */
progress(300, 0, 1000)
progress(50px, 0px, 100px)
progress(50%, 30%, 80%)

/* Avec une propriété personnalisée */
progress(var(--container-width), 320, 1200)

/* Dans une fonction mathématique */
calc((progress(var(--container-width), 20%, 80%) / 2) + 0.5)

/* Dans une fonction non mathématique */
rgb(
  calc(255 * progress(var(--container-width), 320px, 1200px))
  calc(255 * progress(var(--container-width), 320px, 1200px)) 255 / 0.5
);

/* Fonction mathématique à l'intérieur de progress() */
progress(calc(20 + 30), 0, 100)
```

### Paramètres

La fonction `progress()` prend trois expressions {{CSSxRef("&lt;calc-sum&gt;")}} séparées par des virgules comme paramètres&nbsp;:

```plain
progress(<calc-sum>, <calc-sum>, <calc-sum>)
```

Respectivement, ce sont&nbsp;:

- Valeur de progression
  - : La valeur dont on veut calculer la position par rapport aux deux autres valeurs.
- Début de progression
  - : La borne inférieure de la progression.
- Fin de progression
  - : La borne supérieure de la progression.

### Valeur de retour

Un nombre ({{CSSxRef("&lt;number&gt;")}}) représentant la position de la valeur de progression par rapport aux deux autres valeurs. Cela se calcule comme suit&nbsp;:

```plain
(progress - progress start) / (progress end - progress start)
```

Si la valeur de progression se situe entre les valeurs de début et de fin de progression, la valeur de retour est comprise entre `0` et `1`, représentant un pourcentage. Si la valeur de progression est inférieure à la valeur de début de progression ou supérieure à la valeur de fin de progression, la fonction est toujours valide, mais la valeur de retour est limitée à `0` ou `1`, respectivement.

## Description

La fonction CSS `progress()` fournit un moyen de calculer un ratio de progression, ce qui est utile pour créer des cas d'utilisation tels que des animations de barres de progression ou des boîtes qui apparaissent progressivement à mesure qu'elles s'élargissent pour révéler leur contenu.

L'utilisation la plus simple pourrait ressembler à ceci&nbsp;:

```css
opacity: progress(5, 0, 10);
```

Dans ce cas, la valeur calculée de {{CSSxRef("opacity")}} est `0.5`, car 5 est à mi-chemin entre `0` et `10`.

### Types d'unités autorisés

Les paramètres d'une fonction `progress()` peuvent être des expressions mathématiques ou des valeurs simples. Les valeurs (ou les résultats des expressions) peuvent être des valeurs {{CSSxRef("&lt;number&gt;")}}, {{CSSxRef("&lt;dimension&gt;")}} ou {{CSSxRef("&lt;percentage&gt;")}}. Elles peuvent avoir des unités différentes, mais elles doivent toutes être du même type, sinon la fonction est invalide.

L'exemple que nous avons vu précédemment est valide — tous ses paramètres sont des valeurs `<number>` sans unité&nbsp;:

```css example-good
progress(5, 0, 10)
```

L'exemple suivant est également valide — tous ses paramètres ont des unités {{CSSxRef("&lt;length&gt;")}}. En coulisses, les valeurs calculées sont utilisées pour le calcul. À condition que la {{CSSxRef("font-size")}} soit `16px` au moment du calcul, `3em` est converti en `48px`, ce qui représente `48%` du chemin entre `0px` et `100px`, donc la valeur de retour est `0.48`.

```css example-good
progress(3em, 0px, 100px)
```

Les deux derniers exemples de cette section ne sont cependant pas valides. Les types ne correspondent pas, donc les calculs résultants n'ont pas de sens.

```css example-bad
progress(3s, 0px, 100px)
progress(3em, 0, 100)
```

### Créer des valeurs sans unité

La fonction `progress()` retourne des valeurs sans unité, elle peut donc être utilisée pour supprimer les unités des valeurs de la même manière que [l'astuce `tan(atan2())` <sup>(angl.)</sup>](https://dev.to/janeori/css-type-casting-to-numeric-tanatan2-scalars-582j). Notez cependant que, en raison des mises à jour du comportement autour de [l'arithmétique typée CSS](/fr/docs/Web/CSS/Guides/Values_and_units/Using_typed_arithmetic), cela peut également être réalisé avec une simple division.

### Combiner `progress()` avec d'autres fonctions et propriétés personnalisées

Parce que `progress()` ne retourne qu'une valeur sans unité comprise entre `0` et `1`, il est courant de la combiner avec une autre fonction mathématique telle que {{CSSxRef("calc()")}} pour obtenir la valeur et les unités souhaitées. Vous pouvez également utiliser des [propriétés personnalisées CSS](/fr/docs/Web/CSS/Reference/Properties/--*) à l'intérieur des fonctions `progress()` — cela a du sens, car vous voulez souvent définir les mêmes valeurs à plusieurs endroits, et/ou les baser sur des propriétés personnalisées définies par JavaScript.

L'exemple suivant calcule le pourcentage de la largeur de la fenêtre entre une largeur minimale de `320px` et une largeur maximale de `1200px`. La fonction `calc()` est utilisée pour multiplier la valeur de retour de `progress()` par `600px` afin de la convertir en une valeur en pixels qui représente la moitié de la progression de la largeur de la fenêtre entre `320px` et `1200px`.

```css
width: calc(progress(100vw, 320px, 1200px) * 600px);
```

Par exemple, si la largeur de la fenêtre est de `700px`, la valeur de progression est calculée comme `((700 - 320) / (1200 - 320))` = `0.431818`. La largeur est alors calculée comme `0.431818 * 600px`, ce qui équivaut à `259.1px`.

L'exemple suivant est une mise à jour du précédent, dans lequel nous avons utilisé des propriétés personnalisées pour les valeurs de progression, de début de progression et de fin de progression.

```css
width: calc(
  progress(
      var(--container-width),
      var(--custom-min-width),
      var(--custom-max-width)
    ) *
    var(--custom-max-width)
);
```

Il est possible d'utiliser des fonctions `progress()` pour calculer des valeurs individuelles à l'intérieur d'autres fonctions et des valeurs de composants à l'intérieur de valeurs de propriétés abrégées, à condition que vos fonctions retournent des types valides pour ces valeurs.

Cela peut donner lieu à des expressions complexes. Par exemple, ici nous calculons les deux premiers canaux d'une couleur [`rgb()`](/fr/docs/Web/CSS/Reference/Values/color_value/rgb) proportionnellement à la même proportion de largeur qu'auparavant&nbsp;:

```css
background-color: rgb(
  calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-min-width),
          var(--custom-max-width)
        )
    )
    calc(
      255 *
        progress(
          var(--container-width),
          var(--custom-min-width),
          var(--custom-max-width)
        )
    )
    255 / 0.5
);
```

## Syntaxe formelle

{{CSSSyntax}}

## Exemples

### Utilisation simple de `progress()`

Dans cet exemple, nous allons montrer l'utilisation de base de la fonction `progress()` pour définir la `width` d'une barre de progression en pourcentage, égale au ratio de progression de la `width` de son parent entre sa `min-width` et sa `max-width`.

#### HTML

Notre HTML comporte un élément HTML {{HTMLElement("section")}} représentant notre contenu, et un élément HTML {{HTMLElement("div")}} représentant la barre de progression de largeur.

```html live-sample___basic
<section>
  <div class="progress"></div>
</section>
```

#### CSS

Dans notre CSS, nous définissons d'abord quelques propriétés personnalisées sur notre élément `<section>` pour représenter sa `min-width`, sa `max-width` et sa `width`. Nous définissons ensuite ces propriétés aux valeurs appropriées, puis nous donnons à notre `<section>` une {{CSSxRef("background-color")}} solide afin qu'il soit visible.

```css hidden live-sample___basic
html {
  height: 100%;
  font-family: sans-serif;
}

body,
section {
  height: inherit;
}
```

```css live-sample___basic
section {
  --custom-min-width: 300px;
  --custom-max-width: 700px;
  --custom-width: 600px;

  min-width: var(--custom-min-width);
  max-width: var(--custom-max-width);
  width: var(--custom-width);

  background-color: cyan;
}
```

Passons maintenant à notre `<div>` — nous lui donnons d'abord une `height` et une `background-color` sombre afin qu'il se démarque de notre élément `<section>`. Nous calculons ensuite sa `width` en utilisant une fonction `progress()` pour calculer le ratio de progression de la largeur entre la largeur minimale et maximale, puis en utilisant une fonction `calc()` pour multiplier la valeur retournée par `progress()` par `100%` afin d'obtenir un pourcentage.

```css live-sample___basic
.progress {
  height: 4px;
  background-color: red;

  width: calc(
    progress(
        var(--custom-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
}
```

#### Résultat

Cette démonstration s'affiche comme suit&nbsp;:

{{EmbedLiveSample("basic", "100%", 150)}}

La largeur du `<div>` est de `75%` de la largeur du `<section>`, car la largeur minimum (`min-width`) est de `400px`, la largeur maximum (`max-width`) est de `700px` et la largeur (`width`) est de `600px`, ce qui représente `75%` de la distance entre les deux valeurs précédentes.

### Effets de redimensionnement sur un conteneur

Cet exemple montre des utilisations plus avancées de la fonction `progress()`, entraînant des effets intéressants lorsque la fenêtre du navigateur est redimensionnée.

Cet exemple fonctionne beaucoup mieux lorsqu'il est affiché en plein écran dans un onglet de navigateur de bureau. Par conséquent, nous ne l'avons pas rendu dans un exemple en direct intégré sur cette page. Vous pouvez plutôt le trouver en cours d'exécution dans la [démonstration de la fonction CSS `progress()` <sup>(angl.)</sup>](https://mdn.github.io/dom-examples/css-progress/) (voir également le [code source <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/tree/main/css-progress)).

Ouvrez l'exemple en direct dans un onglet séparé, et essayez d'augmenter et de diminuer la largeur de la fenêtre du navigateur pour voir l'effet. Gardez cet onglet ouvert afin de pouvoir vous y référer pendant que vous lisez l'explication ci-dessous.

#### HTML

Notre HTML comporte un élément HTML {{HTMLElement("article")}} qui contient le reste de notre contenu, et deux éléments HTML {{HTMLElement("section")}} — l'un pour accrocher une image de fond, et l'autre pour contenir notre contenu. Le `<section class="content">` contient également un `<div class="progress">` représentant une barre de progression de largeur, identique à celle de notre démonstration précédente. Nous avons omis le reste du contenu pour des raisons de concision.

```html
<article>
  <section class="background"></section>
  <section class="content">
    <div class="progress"></div>
    <!-- Contenu ici -->
  </section>
</article>
```

#### JavaScript

Dans notre script, nous commençons par récupérer une référence à notre élément `<article>`. Nous définissons ensuite une fonction appelée `setContainerWidth()`, qui récupère la largeur client de l'élément `<article>` avec {{DOMxRef("Element.getBoundingClientRect()")}} et définit une propriété personnalisée sur celui-ci appelée `--container-width`, qui est égale à la largeur client arrondie vers le bas, avec `px` ajouté.

Nous définissons ensuite un écouteur d'évènement {{DOMxRef("Window.resize_event", "resize")}} sur l'objet `Window`, qui exécute `setContainerWidth()` lorsque la fenêtre du navigateur est redimensionnée. Nous l'exécutons également une fois pour définir la propriété personnalisée `--container-width` sur l'élément `<article>` une fois la page chargée.

```js
const articleElem = document.querySelector("article");

function setContainerWidth() {
  const clientWidth = articleElem.getBoundingClientRect().width;
  articleElem.style.setProperty(
    "--container-width",
    `${Math.floor(clientWidth)}px`,
  );
}

window.addEventListener("resize", setContainerWidth);

setContainerWidth();
```

Avec cette configuration, nous pouvons maintenant définir certaines valeurs de propriété en fonction de `--container-width`, de sorte que certaines parties de notre conception changent dynamiquement lorsque la fenêtre est redimensionnée.

#### CSS

La section suivante explique uniquement le CSS pertinent à l'utilisation de la fonction `progress()` dans la démonstration. Pour le CSS complet, voir la [source CSS <sup>(angl.)</sup>](https://github.com/mdn/dom-examples/blob/main/css-progress/index.css).

Nous commençons par centrer l'élément `<article>` à l'intérieur du `<body>` en utilisant [les boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout), puis nous définissons quelques propriétés personnalisées dessus pour représenter les valeurs `min-width` et `max-width` que nous utilisons ailleurs. Nous ciblons ensuite l'élément `<article>`, lui donnant des valeurs {{CSSxRef("min-width")}} et {{CSSxRef("max-width")}} égales aux propriétés personnalisées que nous avons définies précédemment. Nous définissons sa {{CSSxRef("position")}} sur `relative` afin de pouvoir positionner son contenu par rapport à lui, puis lui donnons un pourcentage de largeur ({{CSSxRef("width")}}), une hauteur ({{CSSxRef("height")}}) fixe et une bordure ({{CSSxRef("border")}}).

```css
body {
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  --custom-min-width: 320px;
  --custom-max-width: 1200px;
}

article {
  min-width: var(--custom-min-width);
  max-width: var(--custom-max-width);
  position: relative;
  width: 70%;
  height: 600px;
  border: 3px solid black;
}
```

Maintenant, passons à notre `<div>` `progress`. Nous définissons sa `width` égale à un pourcentage basé sur le ratio de progression de la propriété personnalisée `--container-width` définie sur l'élément `<article>` avec JavaScript entre sa `min-width` et sa `max-width` (nous utilisons les mêmes propriétés personnalisées ici pour les deuxième et troisième paramètres de `progress()` que nous avons utilisés pour les `min-width` et `max-width` de `<article>`).

Nous lui donnons également une `height` et une couleur d'arrière-plan ({{CSSxRef("background-color")}}), puis nous le positionnons absolument dans le coin supérieur gauche de l'élément `<article>`.

```css
.progress {
  width: calc(
    progress(
        var(--container-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
  height: 4px;
  background-color: red;
  position: absolute;
  top: 0;
  left: 0;
}
```

Ensuite, nous allons examiner notre `<section>` `background`. Nous la positionnons absolument par rapport à notre `<article>`, en définissant {{CSSxRef("inset", "inset: 0")}} dessus afin qu'elle adopte la même taille et se place au-dessus de celui-ci. Nous définissons ensuite une {{CSSxRef("background-image")}} assez large dessus, et positionnons l'image de fond en donnant à la propriété {{CSSxRef("background-position-x")}} la même valeur que celle que nous avons donnée à la propriété `width` de la barre de progression. Cela a pour effet que, lorsque vous augmentez la largeur de la fenêtre du navigateur, l'image de fond est déplacée vers la gauche, créant un joli effet de défilement de l'image.

```css
.background {
  position: absolute;
  inset: 0;
  background-image: url("https://mdn.github.io/shared-assets/images/examples/wide-background.jpg");
  background-position-x: calc(
    progress(
        var(--container-width),
        var(--custom-min-width),
        var(--custom-max-width)
      ) *
      100%
  );
}
```

Nous positionnons la `<section>` `content` absolument afin qu'elle se place au-dessus de la `<section>` `background`, puis nous lui donnons un peu de {{CSSxRef("padding")}}. Nous faisons ensuite varier deux valeurs de propriété lorsque la fenêtre du navigateur est redimensionnée, en utilisant le même ratio de progression qu'auparavant&nbsp;:

- Nous faisons varier les composants R et G de la `background-color`, en multipliant le ratio de progression par 255 dans chaque cas pour obtenir une valeur de canal proportionnelle. À mesure que la fenêtre devient plus large, la couleur de fond devient moins bleue et plus blanche, donnant l'impression que la scène passe de la nuit au jour (la valeur de couleur a une opacité de `0.5`, elle agit donc comme une teinte pour l'image sous-jacente).
- Nous faisons varier l'opacité ({{CSSxRef("opacity")}}) afin que le contenu apparaisse progressivement lorsque la fenêtre devient plus large.

```css
.content {
  position: absolute;
  inset: 0;
  padding: 20px;
  background-color: rgb(
    calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          )
      )
      calc(
        255 *
          progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          )
      )
      255 / 0.5
  );
  opacity: calc(
    (
        progress(
            var(--container-width),
            var(--custom-min-width),
            var(--custom-max-width)
          ) /
          2
      ) +
      0.5
  );
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le module [des valeurs et unités CSS](/fr/docs/Web/CSS/Guides/Values_and_units)
- [Requêtes de style de conteneur](/fr/docs/Web/CSS/Guides/Containment/Container_size_and_style_queries#requêtes_de_style_de_conteneur)
- [Requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using)
- [Requêtes de fonctionnalités](/fr/docs/Web/CSS/Guides/Conditional_rules/Using_feature_queries)
