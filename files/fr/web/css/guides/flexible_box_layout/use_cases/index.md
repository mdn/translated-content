---
title: Cas d'utilisation classiques de boîtes flexibles
short-title: Cas d'utilisation classiques
slug: Web/CSS/Guides/Flexible_box_layout/Use_cases
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Dans ce guide, nous voyons quels sont les cas d'utilisation classiques pour les boîtes flexibles et lorsque cette méthode est plus pertinente qu'une autre méthode de disposition.

## Pourquoi choisir les boîtes flexibles ?

Les boîtes flexibles constituent généralement la solution de disposition CSS appropriée lorsque vous souhaitez organiser un ensemble d'éléments dans une seule dimension ou contrôler l'espacement entre les éléments. Dans ce guide, nous examinons certains des cas d'utilisation classiques des boîtes flexibles.

## Navigation

Un motif souvent utilisé pour la navigation consiste à avoir une liste d'éléments affichés sous forme de barre horizontale. C'est probablement l'exemple le plus courant de l'utilisation des boîtes flexibles et peut être considéré comme un cas d'utilisation idéal.

Lorsque nous avons un ensemble d'éléments que nous voulons afficher horizontalement, il se peut que nous nous retrouvions avec de l'espace supplémentaire. Nous devons décider quoi faire de cet espace et avons quelques options. Nous pouvons soit afficher l'espace à l'extérieur des éléments — les espaçant ainsi avec de l'espace blanc entre ou autour d'eux — soit absorber l'espace supplémentaire à l'intérieur des éléments et donc avoir besoin d'une méthode permettant aux éléments de grandir et d'occuper cet espace.

### Espace distribué en dehors des éléments

Pour distribuer l'espace entre les éléments ou autour d'eux, nous utilisons les propriétés d'alignement dans les boîtes flexibles et la propriété {{CSSxRef("justify-content")}}. Vous pouvez en savoir plus sur cette propriété dans l'article [Aligner des éléments dans un conteneur flexible](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items), qui traite de l'alignement des éléments sur l'axe principal.

Dans cet exemple, nous affichons les éléments à leur taille naturelle et utilisons `justify-content: space-between` pour répartir l'espace de manière égale entre les éléments. Vous pouvez modifier la répartition de l'espace en utilisant les valeurs `space-around` ou `space-evenly`. Vous pouvez également utiliser `start` pour placer l'espace à la fin des éléments, `end` pour le placer avant eux, ou `center` pour centrer les éléments de navigation.

```html live-sample___navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 est plus longue</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: black;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
}
```

{{EmbedLiveSample("navigation")}}

### Espace distribué au sein des éléments

Un autre modèle pour la navigation consiste à répartir l'espace disponible au sein des éléments eux-mêmes, plutôt que de créer de l'espace entre eux. Les propriétés {{CSSxRef("flex")}} permettent aux éléments de grandir et de rétrécir proportionnellement les uns par rapport aux autres, comme décrit dans [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios).

Si vous souhaitez respecter la propriété de taille de vos éléments de navigation tout en partageant l'espace disponible de manière égale entre eux, vous pouvez utiliser `flex: auto`, qui est la notation raccourcie de `flex: 1 1 auto` — tous les éléments grandissent et rétrécissent à partir d'une taille de base (`flex-basis`) de `auto`. Cela signifie que l'élément le plus long a plus d'espace parce qu'il part d'une taille plus grande, même si la même quantité d'espace disponible lui est attribuée que les autres.

Dans l'exemple interactif ci-dessous, essayez de changer `flex: auto` en `flex: 1`. Cette notation raccourcie pour `flex: 1 1 0` fait en sorte que tous les éléments deviennent de la même largeur, car ils partent d'une `flex-basis` de `0`, ce qui permet de répartir l'espace disponible de manière égale.

```html live-sample___navigation-flex
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 est plus longue</a></li>
    <li><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___navigation-flex
nav {
  border: 2px solid #eeeeee;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
}

nav a {
  text-decoration: none;
  color: black;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav li {
  flex: auto;
}
```

{{EmbedLiveSample("navigation-flex")}}

## Navigation séparée

Une autre façon d'aligner les éléments le long de l'axe principal consiste à utiliser des marges automatiques. Cela permet d'obtenir une barre où une partie des éléments sont alignés à gauche alors qu'un second groupe est aligné à droite. Dans l'exemple qui suit, on utilise la technique des marges automatiques détaillée dans [Utiliser les marges automatiques pour l'alignement sur l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Aligning_items#utiliser_les_marges_automatiques_pour_aligner_sur_laxe_principal).

Les éléments sont alignés sur l'axe principal avec `normal`, ce qui se comporte comme `start`, car c'est le comportement initial des boîtes flexibles. La propriété {{CSSxRef("gap")}} crée des espaces entre les éléments. Et nous alignons le dernier élément sur la droite en lui attribuant une valeur de `margin-left` automatique. Vous pouvez déplacer la classe d'un élément à l'autre pour modifier l'emplacement de la séparation.

```html live-sample___split-navigation
<nav>
  <ul>
    <li><a href="#">Page 1</a></li>
    <li><a href="#">Page 2</a></li>
    <li><a href="#">Page 3 est plus longue</a></li>
    <li class="pousse-a-droite"><a href="#">Page 4</a></li>
  </ul>
</nav>
```

```css live-sample___split-navigation
nav {
  border: 2px solid #eeeeee;
}

nav a {
  text-decoration: none;
  color: black;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
  display: block;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  gap: 20px;
}

.pousse-a-droite {
  margin-left: auto;
}
```

{{EmbedLiveSample("split-navigation")}}

## Centrer un élément

Une blague récurrente parmi les développeur·euse·s est que le problème le plus difficile en conception web est le centrage vertical. Le centrage vertical du contenu est très simple avec les propriétés d'alignement des boîtes flexibles, comme le montre l'exemple interactif suivant.

Cliquez sur **«&nbsp;Exécuter&nbsp;»** et essayez de modifier l'alignement, par exemple en alignant l'élément au début avec `start` ou à la fin avec `end`&nbsp;:

```html live-sample___center
<div class="boite">
  <div></div>
</div>
```

```css live-sample___center
.boite {
  height: 300px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: center;
  justify-content: center;
}

.boite div {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  width: 100px;
  height: 100px;
}
```

{{EmbedLiveSample("center", "", 320)}}

Avec les propriétés [d'alignement de boîte CSS](/fr/docs/Web/CSS/Guides/Box_alignment), vous pouvez centrer verticalement un élément à l'intérieur d'un autre sans utiliser les boites flexibles. Dans l'exemple ci-dessus, essayez de supprimer les propriétés `flex` de la boite et d'ajouter `align-content: center`. Ajoutez ensuite `margin: auto` à l'élément que vous souhaitez centrer horizontalement.

## Disposition en cartes avec un pied de page ajustable

Que vous utilisez les boîtes flexibles ou les grilles pour disposer une liste de composants de carte, ces méthodes de disposition ne fonctionnent que sur les enfants directs du composant flexible ou de la grille. Cela signifie que si vous avez des quantités variables de contenu, la carte s'étire à la hauteur de la zone de la grille ou du conteneur flexible. Tout contenu à l'intérieur utilise la disposition de bloc régulière, ce qui signifie que sur une carte avec moins de contenu, le pied de page remonte au bas du contenu plutôt que de rester collé au bas de la carte.

![Deux composants de carte montrant que les éléments internes du composant ne s'étirent pas avec l'élément englobant.](flex-cards.png)

On peut résoudre ce problème avec les boîtes flexibles. Pour commencer, on transforme la carte en conteneur flexible avec {{CSSxRef("flex-direction", "flex-direction: column")}}. Nous définissons ensuite la zone de contenu sur `flex: 1`, ce qui est le raccourci pour `flex: 1 1 0` — l'élément peut croître et rétrécir à partir d'une base flexible de `0`. Comme c'est le seul élément qui peut croître, il occupe tout l'espace disponible dans le conteneur flexible et pousse le pied de page vers le bas. Si vous supprimez la propriété `flex` de l'exemple en direct, vous voyez le pied de page remonter pour s'asseoir directement sous le contenu.

```html live-sample___cards
<div class="cartes">
  <div class="carte">
    <div class="contenu">
      <p>Cette carte n'a pas beaucoup de contenu.</p>
    </div>
    <footer>Pied de carte</footer>
  </div>
  <div class="carte">
    <div class="contenu">
      <p>
        Cette carte a beaucoup plus de contenu, ce qui signifie qu'elle définit
        la hauteur du conteneur dans lequel se trouvent les cartes. J'ai disposé
        les cartes en utilisant la grille, donc les cartes elles-mêmes s'étirent
        pour avoir la même hauteur.
      </p>
    </div>
    <footer>Pied de carte</footer>
  </div>
</div>
```

```css live-sample___cards
body {
  font-family: sans-serif;
}
.cartes {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;
}

.carte {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
}

.carte .contenu {
  padding: 10px;
  flex: 1 1 auto;
}

.carte footer {
  background-color: rgb(96 139 168 / 0.2);
  padding: 10px;
}
```

{{EmbedLiveSample("cards", "", 280)}}

## Objets média

L'objet média — une image ou tout autre élément média accompagné d'un texte descriptif placé à côté — est un modèle courant dans la conception web. Les objets médias doivent pouvoir être inversés, c'est-à-dire que l'image doit pouvoir être déplacée d'un côté à l'autre.

Ce modèle est utilisé pour les commentaires et d'autres contextes où des images sont placées à côté de leurs descriptions. Nous pouvons utiliser une boîte flexible pour permettre à la partie de l'objet média contenant l'image de tirer ses informations de dimensions de l'image, tandis que le contenu de l'objet média s'adapte pour occuper l'espace restant.

Dans cet exemple, l'objet média est aligné sur `flex-start` et le `.contenu` est configuré pour s'étendre, avec un facteur de croissance défini sur `1`. Ces propriétés sont identiques à celles utilisées pour notre modèle de carte à mise en page en colonnes ci-dessus.

```html live-sample___media
<div class="media">
  <div class="image">
    <img
      alt="Une montgolfière colorée contre un ciel bleu"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="contenu">
    Ceci est le contenu de mon objet média. Les éléments directement à
    l'intérieur du conteneur flexible sont alignés sur flex-start.
  </div>
</div>
```

```css live-sample___media
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.media .contenu {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media", "", 320)}}

Certaines choses que vous pouvez vouloir essayer dans cet exemple en direct concernent les différentes façons dont vous pouvez vouloir contraindre l'objet média dans votre conception.

Pour empêcher l'image de devenir trop large, vous devez ajouter une {{CSSxRef("max-width")}} à l'image. Comme ce côté de l'objet média utilise les valeurs initiales de boîte flexible, il peut rétrécir, mais pas grandir, et utilise un `flex-basis` automatique. Toute {{CSSxRef("width")}} ou `max-width` appliquée à l'image devient le `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

Vous pouvez également permettre aux deux côtés de grandir et de rétrécir proportionnellement. Si vous définissez les deux côtés sur `flex: 1`, ils s'agrandissent et se rétrécissent à partir d'un {{CSSxRef("flex-basis")}} de `0`, de sorte que vous obtenez deux colonnes de taille égale. Vous pouvez soit prendre le contenu comme guide et définir les deux sur `flex: auto`, auquel cas ils s'agrandissent et se rétrécissent à partir de la taille du contenu ou de toute taille appliquée directement aux éléments flexibles, comme une `width` sur l'image.

```css
.media .contenu {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

Vous pouvez également donner à chaque côté des facteurs {{cssxref("flex-grow")}} différents, par exemple en définissant le côté avec l'image sur `flex: 1` et le côté avec le contenu sur `flex: 3`. Cela signifie qu'ils utilisent un `flex-basis` de `0` mais distribuent cet espace à des rythmes différents selon le facteur `flex-grow` que vous avez attribué. Les propriétés flexibles que nous utilisons pour ce faire sont décrites en détail dans le guide [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Controlling_flex_item_ratios).

```css
.media .contenu {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Inverser la position de l'objet média

Pour inverser l'affichage de l'objet média et avoir l'image à droite et le contenu à gauche, nous définissons la propriété `flex-direction` sur `row-reverse`.

Dans cet exemple, nous avons ajouté une classe `inverse` en plus de la classe `media`. Supprimez cette classe dans le code HTML pour voir comment l'affichage change.

```html live-sample___media-flipped
<div class="media inverse">
  <div class="image">
    <img
      alt="Une montgolfière colorée contre un ciel bleu"
      src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />
  </div>
  <div class="contenu">
    Ceci est le contenu de mon objet média. Les éléments directement à
    l'intérieur du conteneur flexible sont alignés sur flex-start.
  </div>
</div>
```

```css live-sample___media-flipped
img {
  max-width: 100%;
  display: block;
}

.media {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  align-items: flex-start;
}

.inverse {
  flex-direction: row-reverse;
}

.media .contenu {
  flex: 1;
  padding: 10px;
}
```

{{EmbedLiveSample("media-flipped", "", 320)}}

## Contrôles de formulaire

Les boîtes flexibles sont particulièrement utiles lorsqu'il s'agit de mettre en forme des contrôles de formulaires. Les formulaires sont généralement constitués de nombreux petits éléments qu'on souhaite aligner les uns avec les autres. Un motif fréquent se compose d'un élément HTML {{htmlelement("label")}} et d'un élément HTML {{htmlelement("input")}} associé à un {{htmlelement("button")}}, par exemple pour un formulaire de recherche ou un formulaire d'inscription à une newsletter où l'on souhaite que le·la visiteur·euse saisisse son adresse électronique.

Les boîtes flexibles permettent de réaliser ce type de mise en page avec seulement quelques déclarations. Les éléments `<label>`, `<input>` et `<button>` sont contenus dans un conteneur défini avec `display: flex`. Les propriétés de flexibilité permettent au champ `<input>` de s'étendre, tandis que le bouton et l'étiquette ne s'étendent pas. Le champ de saisie de texte s'étend et se réduit en fonction de l'espace disponible.

```html live-sample___label-input-button
<form class="exemple">
  <div class="enveloppe">
    <label for="texte">Étiquette</label>
    <input id="texte" type="text" />
    <input type="submit" value="Envoyer" />
  </div>
</form>
```

```css live-sample___label-input-button
* {
  font: 1.1em sans-serif;
}

.enveloppe {
  display: flex;
  border: 1px solid rgb(96 139 168);
}
.enveloppe > * {
  padding: 10px;
  border: none;
  color: white;
}
.enveloppe > input[type="text"] {
  background-color: rgb(96 139 168 / 0.5);
  border-right: 1px solid rgb(96 139 168);
  flex: 1 1 auto;
}
.enveloppe input[type="submit"] {
  background-color: rgb(96 139 168);
  color: white;
}
.enveloppe label {
  background-color: #666666;
}
```

{{EmbedLiveSample("label-input-button")}}

Les modèles comme celui-ci peuvent faciliter la création d'une bibliothèque d'éléments de formulaire pour votre conception, qui s'adaptent facilement à l'ajout d'éléments supplémentaires. Vous tirez parti de la flexibilité de la boîte flexible en mélangeant des éléments qui ne grandissent pas avec ceux qui le font.

## Conclusion

En explorant les modèles présentés ci-dessus, vous avez, nous l'espérons, commencé à comprendre comment réfléchir à la meilleure façon d'utiliser les boîtes flexibles pour obtenir le résultat souhaité. Bien souvent, plusieurs options s'offrent à vous. Mélangez des éléments qui ne peuvent pas s'étirer avec ceux qui le peuvent, utilisez le contenu pour déterminer la taille, ou laissez les boîtes flexibles répartir l'espace de manière proportionnelle. C'est à vous de choisir.

Réfléchissez à la meilleure façon de présenter votre contenu, puis voyez comment les boîtes flexibles ou d'autres méthodes de mise en page peuvent vous aider à y parvenir.
