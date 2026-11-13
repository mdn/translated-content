---
title: Définir la taille des éléments en CSS
short-title: Définir la taille
slug: Learn_web_development/Core/Styling_basics/Sizing
l10n:
  sourceCommit: 38397b7418708bd0a7c5ee8e69b16e985c85de33
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Test_your_skills/Values", "Learn_web_development/Core/Styling_basics/Test_your_skills/Sizing", "Learn_web_development/Core/Styling_basics")}}

Au cours des différentes leçons abordées jusqu'à présent, vous avez découvert plusieurs façons de définir la taille des éléments d'une page web à l'aide du CSS. Il est important de bien comprendre quelles dimensions ont les différents éléments qui composent votre mise en page. Dans cette leçon, nous allons donc passer en revue les différentes méthodes permettant de définir la taille des éléments à l'aide du CSS et définir quelques termes relatifs au changement de taille qui vous seront utiles à l'avenir.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases du HTML (étudier
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content/Basic_HTML_syntax"
          >Syntaxe de base HTML</a
        >), <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Getting_started">Syntaxe de base CSS</a>, <a href="/fr/docs/Learn_web_development/Core/Styling_basics/Basic_selectors">Sélecteurs CSS</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Comprendre le concept de taille intrinsèque.</li>
          <li>Définir des tailles absolues et en pourcentage.</li>
          <li>Définir des largeurs et hauteurs maximales et minimales.</li>
          <li>Comprendre les unités de zone d'affichage (<i lang="en">viewport</i> en anglais) et pourquoi elles sont utiles.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## La taille naturelle ou intrinsèque des choses

Les éléments HTML ont une taille naturelle, définie avant d'être affectés par le CSS. Un exemple simple est une image. Un fichier image contient des informations de dimension, décrites comme sa **taille intrinsèque**. Cette taille est déterminée par l'image _elle-même_, et non par tout formatage que nous pourrions appliquer.

Si vous placez une image sur une page et ne modifiez pas sa hauteur ou sa largeur, que ce soit en utilisant des attributs `<img>` ou du CSS, elle est affichée en utilisant cette taille intrinsèque. Nous avons donné à l'image de l'exemple ci-dessous une bordure afin que vous puissiez voir l'étendue de sa taille telle que définie dans son fichier.

```html live-sample___intrinsic-image
<img
  alt="étoile"
  src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
```

```css live-sample___intrinsic-image
img {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-image", "100%", 80)}}

Un élément {{HTMLElement("div")}} vide, en revanche, n'a pas de taille en soi. Si vous ajoutez un {{HTMLElement("div")}} à votre HTML sans aucun contenu, puis que vous lui ajoutez une bordure comme nous l'avons fait avec l'image, vous voyez une ligne s'afficher sur la page. Il s'agit de la bordure effondrée du `<div>` — il n'y a pas de contenu pour la maintenir ouverte.

Dans l'exemple ci-dessous, cette bordure couvre toute la largeur du conteneur, car il s'agit d'un élément de type bloc, un comportement avec lequel vous devez commencer à être familier. Il n'a pas de hauteur (ou de taille dans l'axe de bloc), car il n'a pas de contenu.

```html live-sample___intrinsic-text
<div class="boite"></div>
```

```css live-sample___intrinsic-text
.boite {
  border: 5px solid darkblue;
}
```

{{EmbedLiveSample("intrinsic-text", "100%", 60)}}

Dans l'exemple ci-dessus, essayez d'ajouter du texte à l'intérieur de l'élément vide. Vous voyez la bordure s'ouvrir, car la hauteur de l'élément est définie par le contenu. Encore une fois, il s'agit de la taille intrinsèque de l'élément — sa taille est définie par son contenu.

## Définir une taille spécifique

Nous pouvons, bien sûr, donner aux éléments de notre conception une taille spécifique. Lorsqu'une taille est donnée à un élément (dont le contenu doit ensuite s'adapter à cette taille), nous parlons de **taille extrinsèque**.

Dans l'exemple suivant, nous donnons à deux `<div>` des valeurs spécifiques de {{CSSxRef("width")}} et de {{CSSxRef("height")}}, et ils ont désormais cette taille, peu importe le contenu placé à l'intérieur. Comme le montre le `<div>` de droite, une hauteur définie peut provoquer un débordement du contenu si celui-ci dépasse l'espace disponible dans son conteneur (vous en apprendrez davantage sur [le débordement](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow) dans une leçon ultérieure).

```html live-sample___height
<div class="enveloppe">
  <div class="boite"></div>
  <div class="boite">
    Ces boîtes ont toutes deux une hauteur définie, cette boîte contient du
    contenu qui nécessite plus d'espace que la hauteur attribuée, et donc nous
    obtenons un débordement.
  </div>
</div>
```

```css live-sample___height
body {
  font: 1.2em sans-serif;
}
.enveloppe {
  display: flex;
}

.enveloppe > * {
  margin: 20px;
}

.boite {
  border: 5px solid darkblue;
  height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("height", "", 200)}}

En raison de ce problème de débordement, fixer la hauteur des éléments avec des longueurs ou des pourcentages est quelque chose que nous devons faire très attentivement sur le web.

### Utiliser des pourcentages

De bien des manières, les pourcentages agissent de la même manière que les unités de longueur, et comme nous l'avons vu dans [la leçon sur les valeurs et unités en CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Values_and_units#percentages), ils peuvent souvent être utilisés de manière interchangeable avec les unités de longueur. Lorsque vous utilisez les pourcentages, vous devez être conscient de ce à quoi ils se réfèrent. Dans le cas d'une boîte à l'intérieur d'un autre conteneur, si vous donnez à la boîte enfant une largeur en pourcentage, elle est un pourcentage de la largeur du conteneur parent.

```html live-sample___percent-width
<div class="conteneur">
  <div class="boite">J'ai une largeur en pourcentage.</div>
</div>
```

```css live-sample___percent-width
body {
  font: 1.2em sans-serif;
}

.boite {
  border: 5px solid darkblue;
  width: 50%;
}
```

{{EmbedLiveSample("percent-width")}}

Ceci est dû au fait que les pourcentages se résolvent par rapport à la taille du bloc contenant. Sans pourcentage appliqué, notre `<div>` `boite` occupe `100%` de l'espace disponible, car il s'agit d'un élément de niveau bloc. Si nous lui donnons une largeur en pourcentage, cela devient un pourcentage de l'espace qu'il remplit normalement.

Essayez de modifier l'exemple ci-dessus&nbsp;:

1. Supprimez la déclaration `width` du `<div>` `boite` pour vérifier qu'il occupe `100%` de la largeur disponible par défaut.
2. Revenez à votre modification précédente — donnez à nouveau au `<div>` `boite` une la largeur (`width`) de `50%`.
3. Maintenant, donnez au `<div>` `conteneur` une la largeur (`width`) de `50%`. Vous voyez la largeur (`width`) du `<div>` `boite` devient plus petite, car elle est relative à la largeur (`width`) de son conteneur.

### Marges et remplissage en pourcentages

Si vous définissez les `margins` (marges extérieures) et les `paddings` (remplissage intérieur) avec des pourcentages, vous pouvez remarquer un comportement étrange.

Dans l'exemple ci-dessous, nous avons une boîte, sur laquelle nous avons défini une {{CSSxRef("margin")}} de 10% et une {{CSSxRef("padding")}} de `10%`. Le remplissage (<i lang="fr">padding</i> en anglais) et la marge en haut et en bas de la boîte sont de la même taille que le remplissage et la marge à gauche et à droite.

```html live-sample___percent-mp
<div class="boite">
  J'ai une marge et un remplissage définis à 10% de tous les côtés.
</div>
```

```css live-sample___percent-mp
body {
  font: 1.2em sans-serif;
}
.boite {
  border: 5px solid darkblue;
  width: 200px;
  margin: 10%;
  padding: 10%;
}
```

{{EmbedLiveSample("percent-mp", "", 380)}}

Vous pouvez vous attendre à ce que les marges en haut et en bas soient un pourcentage de la hauteur de l'élément, et que les marges à gauche et à droite soient un pourcentage de la largeur de l'élément. Cependant, ce n'est pas le cas&nbsp;!

Lorsque vous utilisez des marges et des remplissages définis en pourcentages, la valeur est calculée à partir de la **taille en ligne** du bloc contenant — donc, la largeur lorsque vous travaillez dans une langue horizontale. Dans notre exemple, toutes les marges et les remplissages sont `10%` de la largeur. Cela signifie que vous pouvez avoir des marges et des remplissages de taille égale tout autour de la boîte. C'est un fait à retenir si vous utilisez des pourcentages de cette manière.

## Tailles minimales et maximales

En plus de donner aux éléments une taille fixe, nous pouvons demander à CSS de leur attribuer une taille minimale (`min-`) ou maximale (`max-`). Si vous avez une boîte qui peuvent contenir une quantité variable de contenu, et que vous voulez toujours qu'elle ait _au moins_ une certaine hauteur, vous pouvez définir la propriété {{CSSxRef("min-height")}}. La boîte sera toujours au moins de cette hauteur, mais elle peut ensuite devenir plus grande s'il y a plus de contenu que l'espace disponible à sa hauteur minimale.

Dans l'exemple suivant, vous pouvez voir deux boîtes, toutes deux avec une `min-height` définie à 100 pixels. La boîte de gauche mesure 100 pixels de haut&nbsp;; la boîte de droite contient du contenu qui nécessite plus d'espace, et elle a donc grandi au-delà de 100 pixels.

```html live-sample___min-height
<div class="enveloppe">
  <div class="boite"></div>
  <div class="boite">
    Ces boîtes ont toutes deux une hauteur minimale définie. Cette boîte
    contient du contenu, ce qui nécessite plus d'espace que la hauteur assignée,
    et elle grandit donc à partir du minimum.
  </div>
</div>
```

```css live-sample___min-height
body {
  font: 1.2em sans-serif;
}
.enveloppe {
  display: flex;
  align-items: flex-start;
}

.enveloppe > * {
  margin: 20px;
}

.boite {
  border: 5px solid darkblue;
  min-height: 100px;
  width: 200px;
}
```

{{EmbedLiveSample("min-height", "", 220)}}

C'est très utile pour éviter le débordement lorsqu'on traite des quantités variables de contenu.

### `max-width` on images

Une utilisation courante de {{CSSxRef("max-width")}} consiste à réduire la taille des images s'il n'y a pas assez d'espace pour les afficher à leur largeur intrinsèque, tout en veillant à ce qu'elles ne dépassent pas cette largeur.

Par exemple, si vous définissez `width: 100%` sur une image et que sa largeur intrinsèque est inférieure à celle de son conteneur, l'image est forcée de s'étirer et de s'agrandir, ce qui la rend pixelisée.

Si vous utilisez plutôt `max-width: 100%`, et que sa largeur intrinsèque est inférieure à celle de son conteneur, l'image n'est pas forcée de s'étirer et de s'agrandir, ce qui empêche la pixellisation.

Dans l'exemple ci-dessous, nous avons intégré la même image trois fois&nbsp;:

- La première image a reçu la valeur `width: 100%` et se trouve dans un conteneur plus grand qu'elle, elle s'étire donc pour remplir la largeur du conteneur.
- La deuxième image a la propriété `max-width: 100%` définie et ne s'étire donc pas pour remplir le conteneur.
- La troisième boîte contient à nouveau la même image, également avec `max-width: 100%` défini&nbsp;; dans ce cas, vous pouvez voir comment elle a été réduite pour s'adapter à la boîte.

```html live-sample___max-width
<div class="enveloppe">
  <div class="boite">
    <img
      alt="étoile"
      class="width"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="boite">
    <img
      alt="étoile"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
  <div class="mini-boite">
    <img
      alt="étoile"
      class="max"
      src="https://mdn.github.io/shared-assets/images/examples/big-star.png" />
  </div>
</div>
```

```css hidden live-sample___max-width
.enveloppe {
  display: flex;
  align-items: flex-start;
}

.enveloppe > * {
  margin: 20px;
}

.boite,
.mini-boite {
  border: 5px solid darkblue;
}
```

```css live-sample___max-width
.boite {
  width: 200px;
}
.mini-boite {
  width: 30px;
}
.width {
  width: 100%;
}
.max {
  max-width: 100%;
}
```

{{EmbedLiveSample("max-width", "", 260)}}

Cette technique sert à rendre les images _adaptatives_ (<i lang="en">responsive</i> en anglais), de sorte qu'elles s'adaptent correctement à la taille de l'écran lorsqu'elles sont affichées sur un appareil plus petit. Vous ne devez toutefois pas utiliser cette technique pour charger des images très volumineuses puis les réduire dans le navigateur. Les images doivent être dimensionnées de manière appropriée, de sorte qu'elles ne soient pas plus grandes que nécessaire pour la plus grande taille à laquelle elles sont affichées dans la mise en page. Le téléchargement d'images trop volumineuses ralentit votre site et peut coûter plus cher aux utilisateur·ice·s si elles ou ils paient leurs données au mégaoctet.

## Unités de la zone d'affichage

La zone d'affichage (<i lang="en">viewport</i> en anglais) — qui est la zone visible de votre page dans le navigateur que vous utilisez pour consulter un site — a également une taille. En CSS, nous avons des unités qui se rapportent à la taille de la zone d'affichage — l'unité `vw` pour la largeur de la zone d'affichage, et `vh` pour la hauteur de la zone d'affichage. En utilisant ces unités, vous pouvez dimensionner quelque chose par rapport à la zone d'affichage de l'utilisateur·ice.

`1vh` équivaut à `1%` de la hauteur de la zone d'affichage, et `1vw` équivaut à `1%` de la largeur de la zone d'affichage. Vous pouvez utiliser ces unités pour dimensionner des boîtes, mais aussi du texte. Dans l'exemple ci-dessous, nous avons une boîte dimensionnée en `20vh` et `20vw`. La boîte contient une lettre `A`, à laquelle une {{CSSxRef("font-size")}} de `10vh` a été attribuée.

```html live-sample___vw-vh
<div class="boite">A</div>
```

```css live-sample___vw-vh
body {
  font-family: sans-serif;
}

.boite {
  border: 5px solid darkblue;
  width: 20vw;
  height: 20vh;
  font-size: 10vh;
}
```

{{EmbedLiveSample("vw-vh")}}

Changer les valeurs de `vh` et `vw` modifie respectivement la taille de la boîte et de la police&nbsp;; changer la taille de la zone d'affichage modifie également la taille de la boîte et de la police, car elles sont dimensionnées par rapport à la zone d'affichage. Pour voir la taille de la boîte et du texte changer lorsque vous ajustez la taille de la zone d'affichage, {{LiveSampleLink("vw-vh", "chargez l'exemple dans un nouvel onglet")}} et redimensionnez la fenêtre du navigateur.

Dimensionner les éléments en fonction de la zone d'affichage peut être utile dans vos conceptions. Par exemple, si vous voulez qu'une bannière pleine page s'affiche avant le reste de votre contenu, rendre cette partie de votre page `100vh` de hauteur pousse le reste du contenu en dessous de la zone d'affichage, ce qui signifie qu'il n'apparaît que lorsque le document est défilé.

## Résumé

Cette leçon vous a donné un aperçu de certaines des principales problématiques que vous pouvez rencontrer lors du dimensionnement des éléments sur le Web. Lorsque vous passez à [la mise en page en CSS](/fr/docs/Learn_web_development/Core/CSS_layout), le dimensionnement devient très important pour maîtriser les différentes méthodes de mise en page, il est donc utile de comprendre les concepts ici avant de continuer.

Dans le prochain article, nous vous proposerons quelques tests que vous pourrez utiliser pour vérifier dans quelle mesure vous avez compris et retenu les informations que nous avons fournies sur le dimensionnement en CSS.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Values_and_units", "Learn_web_development/Core/Styling_basics/Images_media_forms", "Learn_web_development/Core/Styling_basics")}}
