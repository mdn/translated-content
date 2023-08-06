---
title: Les grilles CSS et l'amélioration progressive
slug: Web/CSS/CSS_grid_layout/Grid_layout_and_progressive_enhancement
---

{{CSSRef}}

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_accessibilité", "Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition","Web/CSS/CSS_Grid_Layout")}}

Au printemps 2017, on voit pour la première fois une spécification majeure être disponible presque simultanément dans différents navigateurs : les grilles CSS (_CSS Grid_). Les grilles CSS sont disponibles dans les versions récentes de Firefox, Chrome, Opera, Safari et Edge. Malgré cela, si ces navigateurs récents permettront à la plupart d'entre nous de profiter de ces nouvelles fonctionnalités, il existe d'anciens navigateurs ou d'autres navigateurs qui ne prennent pas en charge ces fonctionnalité. Dans ce guide, nous allons parcourir différentes stratégies pour gérer cette prise en charge.

## Les navigateurs qui prennent en charge les grilles CSS

En dehors d'Internet Explorer, les propriétés et valeurs relatives aux grilles CSS ne sont pas préfixées dans Safari, Chrome, Opera, Edge et dans Firefox. Toutes les propriétés et valeurs que nous avons vues dans ce guide fonctionnent de façon interopérable entre ces navigateurs. Cela signifie que si vous écrivez des règles CSS pour paramétrer une grille, le document doit avoir le même rendu dans Firefox, Opera et dans Chrome. Les grilles CSS ne sont plus une spécification expérimentale, elles peuvent donc être utilisées en production.

## La situation pour Internet Explorer et Edge

La première implémentation des grilles CSS a eu lieu avec Internet Explorer 10. La première version de la spécification ne contenait alors pas toutes les propriétés et valeurs décrites dans la spécification actuelle. Il existe également des différences importantes entre ce qui est disponible dans IE10 et la spécification actuelle, même si les propriétés et les valeurs se ressemblent à première vue. Cette implémentation initiale est également celle qui est en place dans Edge jusqu'à la version 15.

La version implémentée pour IE/Edge (≤15) est préfixée avec `-ms` et les propriétés ont les noms suivants :

- {{cssxref("grid-template-columns")}} est appelée `-ms-grid-columns`
- {{cssxref("grid-template-rows")}} est appelée `-ms-grid-rows`
- {{cssxref("grid-row-start")}} est appelée `-ms-grid-row`
- {{cssxref("grid-column-start")}} est appelée `-ms-grid-column`
- {{cssxref("align-self")}} est appelée `-ms-grid-row-align`
- {{cssxref("justify-self")}} est appelée `-ms-grid-column-align`

La version implémentée dans Internet Explorer dispose de propriétés supplémentaires qui ne font pas partie de la nouvelle spécification : `-ms-grid-column-span` et `-ms-grid-row-span`. La version implémentée dans IE ne profite pas du placement automatique ou des zones nommées. On peut implémenter certaines grilles simples pour IE10 et jusqu'à Edge 15, grâce à ces propriétés préfixées par `-ms`. Ces propriétés étant préfixées, elles ne seront pas reconnues (et n'auront aucun effet) pour les navigateurs qui implémentent la spécification actuelle.

### L'utilisation d'autoprefixer pour la prise en charge de la grille

L'outil _[autoprefixer](https://github.com/postcss/autoprefixer)_ a été mis à jour afin de prendre en charge les versions préfixées par `-ms-` lorsqu'on utilise les nouvelles propriétés. Par défaut, les préfixes liés à la grille sont désactivés mais vous pouvez les activer avec l'option `grid: autoplace`.

```js
autoprefixer({ grid: "autoplace" });
```

Les préfixes relatifs aux grilles sont désactivés par défaut car certaines propriétés ne peuvent pas être préfixées

## Puis-je utiliser les grilles CSS sans danger ?

Comme pour les autres technologies _front-end_, la décision d'utiliser les grilles CSS se résume souvent au parc de navigateurs utilisés par le public de votre site ou votre application. S'ils ont tendance à utiliser des version à jour de Firefox, Chrome, Opera et Safari, il serait logique de commencer à utiliser les grilles CSS dès que la nouvelle version des navigateurs sera disponible. En revanche, si le marché visé repose sur d'anciens navigateurs, ce n'est peut-être pas le bon choix. Toutefois, je suggèrerai de ne pas prendre les mêmes hypothèses que pour la diffusion des autres spécifications par le passé : le travail d'implémentation et d'homogénéisation réalisés par les différents distributeurs de navigateur pour les fonctionnalités des grilles CSS est sans précédent.

## Commencer à utiliser les grilles CSS en production

On notera qu'il n'est pas nécessaire d'avoir une rupture brutale pour utiliser les grilles CSS. On peut commencer par améliorer quelques éléments avec une grille et conserver l'ancienne méthode d'affichage pour les navigateurs historiques. Surcharger ces méthodes historiques avec les grilles fonctionne très bien étant donné la façon dont les grilles interagissent avec ces autres méthodes.

### Effectuer la transition depuis une disposition flottante

Jusqu'à présent, pour créer une disposition sur plusieurs colonnes, on a utilisé [des dispositions flottantes](/fr/docs/Learn/CSS/CSS_layout/Floats). Si vous avez un objet qui flotte et que celui-ci est également un objet d'une grille CSS : dans un navigateur qui prend en charge les grilles CSS, le flottement ne sera plus appliqué sur l'objet. En fait, la grille prend le pas sur le flottement. Dans l'exemple qui suit, on a simplement un objet média. Pour un navigateur historique, on utilise {{cssxref("float")}}, cependant, on a également défini un conteneur de grille dans lequel on pourra utiliser les propriétés d'alignement disponibles pour les navigateurs qui implémentent les grilles CSS.

Le mode {{cssxref("float")}} ne s'applique plus sur l'objet et on peut utiliser la propriété {{cssxref("align-self")}} afin d'aligner le contenu vers la fin du conteneur.

```css
* {
  box-sizing: border-box;
}
img {
  max-width: 100%;
  display: block;
}
.media {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 400px;
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-areas: "img content";
  margin-bottom: 1em;
}
.media::after {
  content: "";
  display: block;
  clear: both;
}
.media .image {
  float: left;
  width: 150px;
  margin-right: 20px;
}
.media .text {
  padding: 10px;
  align-self: end;
}
```

```html
<div class="media">
  <div class="image">
    <img src="http://placehold.it/150x150" alt="placeholder" />
  </div>
  <div class="text">
    Voici un exemple avec un média. On utilise le flottement pour les anciens
    navigateurs et une grille pour les nouveaux.
  </div>
</div>
```

{{EmbedLiveSample('Effectuer_la_transition_depuis_une_disposition_flottante', '500', '180')}}

Dans l'image qui suit, on voit à gauche ce qu'on obtient dans un navigateur qui ne prend pas en charge les grilles CSS et à droite le résultat obtenu pour un navigateur qui permet de les utiliser.

![A simple example of overriding a floated layout using grid.](10-float-simple-override.png)

### Utiliser les requêtes de fonctionnalité (_feature queries_)

L'exemple que nous venons de voir est très simple et on peut résoudre le problème sans avoir à écrire de code qui gênerait les navigateurs historiques, le code historique ne pose pas non plus de problème pour les navigateurs qui prennent en charge les grilles CSS. Dans la réalité, on fait parfois face à des cas plus complexes.

#### Un exemple plus complexe

Dans le prochain exemple, nous aurons un ensemble de cartes disposées avec du flottement. On a défini une largeur ({{cssxref("width")}}) sur ces cartes afin de pouvoir appliquer le flottement {{cssxref("float")}}. Pour créer des espaces entre les cartes, on utilise une marge ({{cssxref("margin")}}) sur les objets puis une marge négative sur le conteneur.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}
.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  overflow: hidden;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}
.wrapper li {
  float: left;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>Un</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Deux</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Trois</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Quatre</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Cinq</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
  </ul>
</div>
```

{{EmbedLiveSample('Un_exemple_plus_complexe', '550', '400')}}

Dans la capture qui suit, on voit un problème classique qui est causé par les dispositions flottantes : si on ajoute du contenu à l'une des cartes, la disposition est chamboulée.

![A floated cards layout demonstrating the problem caused by uneven content height.](10-floated-cards.png)

Pour gérer les anciens navigateurs dans une certaine mesure, on peut indiquer une hauteur minimale pour les boîtes avec {{cssxref("min-height")}} et espérer que les éditeurs n'ajouteront pas trop de contenu dans chaque boîte…

Voyons comment améliorer cette disposition avec une grille : on transforme l'élément {{HTMLElement("ul")}} en un conteneur de grille avec trois pistes en colonne. Malheureusement, la largeur qu'on avait affectée aux éléments de la liste s'applique toujours et désormais, chaque élément de la liste occupe uniquement un tiers de la piste correspondante.

![After applying grid to our container, the width of the items is now incorrect as they display at one third of the item width.](10-float-width-problem.png)

Si on réinitialise la largeur avec `auto`, on n'aura plus le résultat souhaité dans les anciens navigateurs. Il faut donc trouver un moyen de définir la largeur pour les anciens navigateurs et de supprimer la largeur quand le navigateur prend en charge les grilles CSS. Grâce [aux requêtes de fonctionnalité CSS](/fr/docs/Web/CSS/@supports), on peut le faire directement en CSS.

#### Une solution avec les requêtes de fonctionnalité

Les requêtes de fonctionnalité ressemblent beaucoup aux [requêtes de média](/fr/docs/Web/CSS/Media_Queries) qu'on utilise pour créer des dispositions adaptatives. Ici, plutôt que de vérifier la largeur de la zone d'affichage ou telle caractéristique du navigateur ou de l'appareil, on vérifie la prise en charge d'une propriété CSS avec une certaine valeur grâce à une règle {{cssxref("@supports")}}. À l'intérieur de cette requête, on peut écrire le CSS nécessaire pour obtenir la nouvelle disposition et retiré tout ce qui est nécessaire pour l'ancienne mise en forme.

```css
@supports (display: grid) {
  .wrapper {
    // ajouter les règles qu'on souhaite
    // pour les navigateurs qui prennent
    // en charge les grilles
  }
}
```

La prise en charge des requêtes de fonctionnalité par les différents navigateurs est excellente. Tous les navigateurs qui prennent en charge la nouvelle spécification pour les grilles CSS supportent aussi les requêtes de fonctionnalité. On peut donc les utiliser pour résoudre le problème précédent pour améliorer la disposition flottante.

On utilise donc `@supports` pour vérifier la prise en charge de `display: grid`;, ensuite on indique que {{HTMLElement("ul")}} est le conteneur de la grille, on définit la largeur et {{cssxref("min-height")}} avec `auto` pour les éléments {{HTMLElement("li")}}. On retire également les marges, les marges négatives et on remplace l'espacement avec la propriété {{cssxref("gap")}}. Cela signifie qu'il n'y aura pas de marge finale sur la dernière ligne de boîtes. La disposition fonctionne également désormais lorsqu'une carte possède plus de contenu qu'une autre.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}
.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  overflow: hidden;
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}
.wrapper li {
  float: left;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
@supports (display: grid) {
  .wrapper ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 0;
  }
  .wrapper li {
    width: auto;
    min-height: auto;
    margin: 0;
  }
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>Un</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Deux</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Trois</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Quatre</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Cinq</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
  </ul>
</div>
```

{{EmbedLiveSample('Une_solution_avec_les_requêtes_de_fonctionnalité', '550', '480')}}

## Surcharger les autres valeurs pour `display`

Étant donné ces problèmes pour créer des grilles d'objets avec du flottement, il est probable que nous aurions choisi un autre méthode initialement, par exemple `display: inline-block`.

Là encore, on peut utiliser les requêtes de fonctionnalité pour surcharger `display: inline-block`. Ici aussi, il n'est pas nécessaire de tout surcharger. Pour les éléments concernés par `inline-block`, ils deviendront des objets de la grille et `inline-block` ne s'appliquera plus. Dans l'exemple qui suit, on utilise la propriété `vertical-align` sur les éléments lorsqu'on utilise le mode `inline-block`, cette propriété n'étant pas appliquée aux éléments d'une grille, elle est ignorée lorsque l'élément devient un objet de la grille.

```css hidden
* {
  box-sizing: border-box;
}

.wrapper {
  border: 2px solid #f76707;
  border-radius: 5px;
  background-color: #fff4e6;
  max-width: 600px;
  margin: 0 auto;
}

.wrapper li {
  border: 2px solid #ffa94d;
  border-radius: 5px;
  background-color: #ffd8a8;
  padding: 1em;
  color: #d9480f;
}
```

```css
.wrapper ul {
  margin: 0 -10px;
  padding: 0;
  list-style: none;
}

.wrapper li {
  display: inline-block;
  vertical-align: top;
  width: calc(33.333333% - 20px);
  margin: 0 10px 20px 10px;
}
@supports (display: grid) {
  .wrapper ul {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin: 0;
  }
  .wrapper li {
    width: auto;
    margin: 0;
  }
}
```

```html
<div class="wrapper">
  <ul>
    <li class="card">
      <h2>Un</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Deux</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Trois</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Quatre</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Cinq</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
    <li class="card">
      <h2>Six</h2>
      <p>
        On peut utiliser la grille CSS pour surcharger d'anciennes méthodes.
      </p>
    </li>
  </ul>
</div>
```

{{EmbedLiveSample('Surcharger_les_autres_valeurs_pour_display', '500', '480')}}

Ici aussi, il faut reparamétrer la largeur de l'élément puis améliorer les autres propriétés. Dans cet exemple également on a utilisé `grid-gap` plutôt que des marges et des marges négatives pour créer les « gouttières ».

## Comment la spécification gère-t-elle cette surcharge ?

La spécification sur les grilles CSS détaille comment on peu surcharger le comportement de certaines propriétés lorsqu'un élément devient un objet d'une grille. Les sections principales sur ce sujet sont :

- [La création de conteneurs de grille (_Establishing Grid Containers_)](https://drafts.csswg.org/css-grid/#grid-containers)
- [Les objets de la grille (_Grid Items_)](https://drafts.csswg.org/css-grid/#grid-items)
- [L'affichage d'un objet de la grille (_Grid Item Display_)](https://drafts.csswg.org/css-grid/#grid-item-display)

Ce comportement est détaillé dans la spécification et on peut donc l'utiliser pour surcharger les règles utilisées pour les navigateurs qui ne prennent pas en charge les grilles CSS. Ce que nous avons appliqué n'est pas une bidouille, on tire simplement parti de l'interaction entre les différents modes de disposition, tel que décrit dans la spécification.

### Les autres valeurs de `display`

Lorsqu'un élément possède un parent pour lequel `display: grid`, cet élément devient un bloc (cf. [la specification](https://drafts.csswg.org/css-display-3/#blockify)). C'est pour cela que, pour l'élément qui utilisait `inline-block`, `display: inline-block` ne s'appliquait plus.

Si la disposition historique utilise `display: table`, un élément avec `display: table-cell` génèrera des boîtes anonymes. Aussi, si on utilise `display: table-cell` sans élément parent avec `display-table`, un tableau implicite sera créé autour des cellules adjacentes (comme si on a avait enveloppé le tout dans un `div` ou autre pour lequel on aurait défini `display: table`). Si on a un objet pour lequel `display: table-cell` et que, dans une requête de fonctionnalité, on utilise `display: grid` pour l'élément parent, il n'y aura plus de création de boîtes anonymes. Cela signifie qu'on peut surcharger `display: table` sans avoir ces boîtes anonymes supplémentaires.

### Les éléments flottants

Comme nous l'avons déjà vu, {{cssxref("float")}}, ainsi que {{cssxref("clear")}} n'ont aucun effet sur un objet de grille. Il n'est donc pas nécessaire d'utiliser explicitement `float: none` sur les éléments.

### L'alignement vertical

La propriété d'alignement {{cssxref("vertical-align")}} n'a aucun effet sur un objet d'une grille. Pour les dispositions qui utilisent `display: inline-block` ou `display: table`, la propriété `vertical-align` était utilisée pour réaliser des alignements basiques. Avec une disposition en grille, on peut utiliser les propriétés d'alignement des boîtes sur la grille, plus puissantes.

### La disposition sur plusieurs colonnes

Il est aussi possible de partir d'une disposition sur plusieurs colonnes car les propriétés `column-*` ne s'appliquent pas sur un conteneur de grille.

## Approfondir la question

- Pour mieux comprendre comment utiliser les requêtes média en CSS, vous pouvez lire [cet excellent article de Hacks](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/).
- Un récapitulatif des différences d'implémentation entre celle utilisée par IE/Edge ≤15 et celle qui décrit la version moderne de la spécification. Cet article évoque également la prise en charge d'_autoprefixer_ : _[Should I try to use the IE implementation of CSS Grid Layout?](https://rachelandrew.co.uk/archives/2016/11/26/should-i-try-to-use-the-ie-implementation-of-css-grid-layout/)_
- [Autoprefixer et le placement automatique des grilles pour IE](https://github.com/postcss/autoprefixer#grid-autoplacement-support-in-ie)
- [Les grilles CSS et la nouvelle version d'Autoprefixer](https://css-tricks.com/css-grid-in-ie-css-grid-and-the-new-autoprefixer)

{{PreviousMenuNext("Web/CSS/CSS_Grid_Layout/Les_grilles_CSS_et_l_accessibilité", "Web/CSS/CSS_Grid_Layout/Modèle_de_grille_et_autres_modèles_de_disposition","Web/CSS/CSS_Grid_Layout")}}
