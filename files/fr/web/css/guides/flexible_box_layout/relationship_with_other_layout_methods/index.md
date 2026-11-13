---
title: Lien entre les boîtes flexibles et les autres méthodes de disposition
short-title: Boîtes flexibles et autres méthodes de disposition
slug: Web/CSS/Guides/Flexible_box_layout/Relationship_with_other_layout_methods
l10n:
  sourceCommit: 08c6d21d1e741aa3d96296edaa4964ebfcdbaded
---

Dans cet article, nous examinons comment les boîtes flexibles s'intègrent avec tous les autres modules CSS. Nous voyons quelles spécifications vous devez également prendre en compte si vous voulez apprendre les boîtes flexibles, et nous découvrons pourquoi les boîtes flexibles sont différentes de certains autres modules.

## Le module d'alignement des boîtes

Beaucoup de gens se tournent d'abord vers les boîtes flexibles lorsqu'ils veulent aligner correctement les éléments flexibles à l'intérieur d'un conteneur flexible. Les boîtes flexibles donnent accès à des propriétés qui permettent l'alignement des éléments sur leur axe transversal et la justification des éléments sur l'axe principal.

Les boîtes flexibles sont initialement définies dans leur propre module de [disposition en boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout), mais les propriétés et valeurs communes à d'autres méthodes de disposition sont définies dans le module [CSS d'alignement des boîtes](/fr/docs/Web/CSS/Guides/Box_alignment). Ce module détaille comment l'alignement, la justification, les espaces et les gouttières fonctionnent dans tous les systèmes de disposition — pas seulement les boîtes flexibles. Lorsqu'une fonctionnalité est définie dans les deux spécifications, notez que le module d'alignement des boîtes prévaut sur le module de disposition en boîtes flexibles.

## Modes d'écriture

Dans l'article [Concepts de base des boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts), il est indiqué que les boîtes flexibles sont **conscientes du mode d'écriture**. Les modes d'écriture sont entièrement détaillés dans le module [CSS des modes d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes), qui explique comment CSS prend en charge les différents modes d'écriture existant à l'international. Nous devons être conscients de l'impact que cela a sur nos mises en page flexibles, car le mode d'écriture modifie la direction dans laquelle les blocs sont disposés dans notre document. Comprendre les directions **bloc** et **incise** est essentiel pour les nouvelles méthodes de disposition.

Il convient de noter que nous pourrions vouloir changer le mode d'écriture de notre document pour des raisons autres que la publication de contenu dans une langue qui utilise un mode d'écriture différent. Le module CSS des modes d'écriture définit comment le texte peut être écrit horizontalement, de gauche à droite et de droite à gauche, et verticalement, de haut en bas. Cela est important pour l'internationalisation et les traductions, mais ces fonctionnalités peuvent également être utilisées pour des conceptions créatives.

### Les modes d'écriture

La spécification des modes d'écriture définit les valeurs suivantes de la propriété {{CSSxRef("writing-mode")}}, qui servent à changer la direction dans laquelle les blocs sont disposés sur la page, afin de correspondre à la direction dans laquelle les blocs sont disposés lorsque le contenu est formaté dans ce mode d'écriture particulier. Vous pouvez changer l'exemple interactif ci-dessous pour ces modes afin de voir ce qui se passe avec la disposition flexible.

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

```html live-sample___writing-modes
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css live-sample___writing-modes
.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}

.boite {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("writing-modes")}}

Notez que vous ne devez normalement pas utiliser CSS et la propriété `writing-mode` pour changer l'ensemble d'un document à un autre mode d'écriture. Cela se fait avec HTML, en ajoutant un attribut [`dir`](/fr/docs/Web/HTML/Reference/Global_attributes/dir) et [`lang`](/fr/docs/Web/HTML/Reference/Global_attributes/lang) à l'élément {{HTMLElement("html")}} pour indiquer la langue du document et la direction du texte par défaut. Cela signifie que le document s'affiche correctement même si CSS ne se charge pas.

## Les boîtes flexibles et les autres méthodes de disposition

Certaines propriétés ont été conçues en supposant que le contenu est disposé en utilisant le système de disposition en blocs standard, et ne s'appliquent pas dans le contexte de la disposition flexible. Un élément défini avec `display: flex` se comporte dans la plupart des cas comme tout autre conteneur de niveau bloc qui établit un bloc contenant. Les éléments flottants n'interviennent pas, et les marges des conteneurs ne s'effondrent pas.

En ce qui concerne les éléments flexibles, si un élément est flottant ou effacé puis devient un élément flexible en raison de l'application de `display: flex` au parent, le flottement et l'effacement ne se produisent plus, et l'élément n'est plus retiré du flux normal comme le sont les éléments flottants. Si vous avez utilisé la propriété {{CSSxRef("vertical-align")}}, comme utilisé avec `inline-block` ou la disposition en tableau pour l'alignement, cela n'affecte plus l'élément et vous pouvez utiliser les propriétés d'alignement de boîte flexible à la place.

Dans l'exemple interactif suivant, les éléments enfants ont été des éléments flottants, puis leur conteneur a eu `display: flex` appliqué. Si vous supprimez `display: flex`, vous devez voir que l'élément `.boite` s'effondre, car aucun effacement n'est appliqué. Cela démontre que le flottement se produit. Réappliquez `display: flex` et l'effondrement ne se produit pas. Cela s'explique par le fait que les éléments n'ont plus de flottement appliqué, car ils ont été transformés en éléments flexibles.

```html live-sample___floats
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
</div>
```

```css live-sample___floats
.boite {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  float: left;
}
```

{{EmbedLiveSample("floats")}}

## Disposition de boîte flexible et de grille

[La disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) et les boîtes flexibles partagent de nombreuses propriétés et valeurs. Pour les propriétés divergentes, si un élément flexible devient un élément de grille, toutes les valeurs `flex` affectées aux éléments enfants, telles que `flex-end`, sont ignorées. Comme indiqué ci-dessus, les valeurs définies dans le module d'alignement des boîtes qui fonctionnent avec les deux méthodes de disposition remplacent celles qui sont définies uniquement dans les boîtes flexibles.

### Boîtes flexibles et grille — quelle différence ?

Une question fréquente consiste à demander quelle est la différence entre les boîtes flexibles et la disposition en grille CSS — pourquoi avons-nous deux spécifications qui semblent parfois faire la même chose&nbsp;?

La réponse la plus directe à cette question se trouve dans les spécifications elles-mêmes. Les boîtes flexibles constituent une méthode de disposition unidimensionnelle, tandis que la disposition en grille est une méthode de disposition bidimensionnelle. L'exemple ci-dessous utilise une disposition flexible. Comme indiqué dans l'article [Concepts de base](/fr/docs/Web/CSS/Guides/Flexible_box_layout/Basic_concepts), les éléments flexibles peuvent être autorisés à revenir à la ligne, mais chaque ligne se comporte alors comme si elle constitue son propre conteneur flexible. Lorsque l'espace est réparti, les boîtes flexibles ne tiennent pas compte du placement des éléments dans les autres lignes et n'essaient pas de les aligner entre eux.

```html live-sample___flex-layout
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
</div>
```

```css live-sample___flex-layout
.boite {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  padding: 1em;
  flex: 1 1 200px;
}
```

{{EmbedLiveSample("flex-layout", "", 300)}}

Si nous créons une disposition très similaire avec une grille, nous pouvons contrôler la disposition à la fois dans les lignes et dans les colonnes.

```html live-sample___grid-layout
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
</div>
```

```css live-sample___grid-layout
.boite {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, auto));
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-layout", "", 300)}}

Ces exemples montrent une autre différence essentielle entre ces méthodes de disposition. Avec une disposition en grille, vous définissez la majeure partie du dimensionnement sur le conteneur, en configurant les pistes puis en y plaçant les éléments. Avec les boîtes flexibles, vous créez un conteneur flexible et définissez la direction à ce niveau, mais tout contrôle du dimensionnement des éléments doit s'effectuer sur les éléments eux-mêmes.

Dans certains cas, vous pouvez utiliser l'une ou l'autre méthode de disposition. À mesure que vous maîtrisez les deux, vous constatez que chacune convient mieux à certains besoins de disposition, et vous finissez par utiliser les deux méthodes dans votre CSS. Il existe rarement une bonne ou mauvaise réponse.

En règle générale, si vous définissez des largeurs sur les éléments flexibles pour aligner les éléments d'une ligne d'un conteneur flexible qui revient à la ligne avec ceux des lignes supérieures, optez plutôt pour une disposition en grille bidimensionnelle.

Il n'existe pas de règle établie comme «&nbsp;vous devez utiliser les boîtes flexibles pour les petits composants et la disposition en grille pour les plus grands&nbsp;». Un petit composant peut être bidimensionnel, et une grande disposition peut être mieux représentée par une disposition unidimensionnelle. Essayez les différentes possibilités — vous avez le choix entre plusieurs méthodes de disposition, alors profitez-en.

Pour davantage de comparaisons entre les grilles et les boîtes flexibles, consultez l'article [Lien entre les boîtes flexibles et les autres méthodes de disposition](/fr/docs/Web/CSS/Guides/Grid_layout/Relationship_with_other_layout_methods). Cet article détaille de nombreuses différences entre la disposition en grille et la disposition flexible, et présente certaines fonctionnalités supplémentaires offertes par la disposition en grille, comme la superposition des éléments sur la grille. Cela peut également vous aider à choisir la méthode de disposition à utiliser.

## Boîtes flexibles et `display: contents`

La valeur `contents` de la propriété {{CSSxRef("display")}} est décrite comme suit dans la spécification&nbsp;:

> «&nbsp;L'élément lui-même ne génère aucune boîte, mais ses enfants et pseudo-éléments génèrent toujours des boîtes normalement. Pour la génération des boîtes et la disposition, l'élément est traité comme un élément remplacé par ses enfants et ses pseudo-éléments dans l'arbre du document.&nbsp;»

Cette valeur de `display` contrôle la génération des boîtes et détermine si l'élément génère une boîte que nous pouvons mettre en forme et voir sur la page, ou si la boîte qu'il crée normalement est supprimée et si les éléments enfants remontent essentiellement pour participer à la méthode de disposition dont le parent fait partie. Cela se voit plus facilement avec un exemple.

Dans l'exemple interactif suivant, un conteneur flexible contient trois éléments flexibles. L'un d'eux contient deux éléments imbriqués, qui ne participent normalement pas à la disposition flexible. La disposition flexible s'applique uniquement aux enfants directs d'un conteneur flexible.

En ajoutant `display: contents` à l'élément qui entoure les éléments imbriqués, vous pouvez voir que l'élément disparaît de la disposition, ce qui permet de disposer les deux sous-enfants comme des enfants directs du conteneur flexible. Vous pouvez supprimer la ligne `display: contents` pour voir l'élément réapparaître.

Notez que cela supprime uniquement la boîte de la disposition&nbsp;; les sous-enfants ne deviennent pas des enfants directs d'une autre manière. Nous avons utilisé un sélecteur d'enfant direct pour ajouter l'arrière-plan et les bordures aux éléments flexibles&nbsp;; il ne s'applique pas à nos enfants imbriqués. Ceux-ci sont disposés comme des éléments flexibles, mais comme ils ne sont pas des enfants directs, ils ne reçoivent pas les autres mises en forme.

Comme la boîte est supprimée, vous ne pouvez plus l'utiliser pour — par exemple — ajouter une couleur d'arrière-plan derrière les sous-enfants imbriqués. Si vous supprimez `display: contents` dans cet exemple interactif, vous constatez que l'enfant direct que nous supprimons possède une couleur d'arrière-plan orange. Cela disparaît également lorsque la boîte disparaît.

```html live-sample___display-contents
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div class="imbrique">
    <div>Sous-élément 1</div>
    <div>Sous-élément 2</div>
  </div>
</div>
```

```css live-sample___display-contents
.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  padding: 1em;
  background-color: rgb(96 139 168 / 0.2);
}

.boite {
  border: 2px dotted rgb(96 139 168);
  padding: 1em;
  display: flex;
}

.imbrique {
  background-color: orange;
  display: contents;
}
```

{{EmbedLiveSample("display-contents")}}

> [!WARNING]
> Certains navigateurs suppriment incorrectement certains éléments avec `display: contents` de l'arbre d'accessibilité (mais leurs descendants restent présents), ce qui supprime la sémantique de ces éléments tout en conservant leur contenu enfant. Cela signifie que les lecteurs d'écran peuvent ne pas annoncer l'élément lui-même. Consultez [`display: contents`](/fr/docs/Web/CSS/Reference/Properties/display#display_contents) et [`display: contents` considéré comme nuisible <sup>(angl.)</sup>](https://ericwbailey.design/published/display-contents-considered-harmful/).
