---
title: Cas d'utilisation classiques de flexbox
slug: Web/CSS/CSS_flexible_box_layout/Typical_use_cases_of_flexbox
---

{{CSSRef}}

Dans ce guide, nous verrons quels sont les cas d'utilisation classiques pour les boîtes flexibles et lorsque cette méthode est plus pertinente qu'une autre méthode de disposition.

## Pourquoi choisir les boîtes flexibles ?

Dans un monde où la compatibilité entre navigateurs serait un lointain souvenir, on pourrait choisir d'utiliser les boîtes flexibles lorsqu'on souhaite organiser un ensemble d'élément dans une direction ou dans une autre. Lorsqu'on place les éléments, on souhaite contrôler les dimensions de ces éléments dans cette direction ou contrôler l'espacement ainsi créé entre les éléments. C'est ce pourquoi les boîtes flexibles ont été conçues. Vous pouvez approfondir les différences entre les boîtes flexibles et la disposition en grille CSS avec [l'article sur les relations entre _flexbox_ et les autres méthodes de disposition](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Relationship_of_Flexbox_to_Other_Layout_Methods) où nous voyons comment s'inscrivent les boîtes flexibles dans le paysage de CSS.

Dans la réalité, on utilise souvent les boîtes flexibles pour créer des organisations qu'il serait plus pertinent de construire avec une disposition en grille et pour lesquelles les boîtes flexibles sont une méthode de recours et offrent une certaine capacité d'alignement. Sur ce deuxième aspect, cela pourra évoluer lorsque l'alignement des boîtes sera implémenté dans la disposition en bloc. Dans ce guide, nous verrons quels sont les cas classiques où on utilise les boîtes flexibles aujourd'hui.

## La navigation

Un motif souvent utilisé pour la navigation consiste à avoir une liste d'objets qui forment une barre horizontale. Ce motif, bien que simple, était plutôt compliqué à obtenir avant l'apparition des boîtes flexibles. C'est l'exemple le plus simple pour les boîtes flexibles et cela constitue un cas d'utilisation idéal.

Lorsqu'on a un ensemble d'objets qu'on souhaite organiser horizontalement, on peut avoir plus d'espace que nécessaire. Il faut décider comment utiliser cet espace : on peut afficher cet espace entre les éléments afin de les espacer ou bien agrandir les objets. Dans ce dernier cas, il nous faut une méthode pour permettre aux objets de grandir et d'occuper cet espace.

### L'espace distribué en dehors des éléments

Pour répartir l'espace entre les éléments ou autour d'eux, on pourra utiliser les propriétés d'alignement des boîtes flexibles et la propriété {{cssxref("justify-content")}}. Vous pouvez approfondir cette propriété avec le guide [Aligner des objets dans un conteneur flexible](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container), qui décrit comment aligner des objets sur l'axe principal.

Dans l'exemple qui suit, on affiche les éléments en utilisant leur taille naturelle et on écrit `justify-content: space-between` afin de répartir l'espace équitablement entre chaque élément. Cette répartition de l'espace peut être modifiée en utilisant la valeur `space-around` ou, lorsqu'elle est prise en charge, la valeur `space-evenly`. On peut également utiliser `flex-start` afin de placer l'espace après les éléments ou encore `flex-end` pour placer l'espace avant les éléments voire `center` afin de centrer les éléments.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation.html", '100%', 550)}}

### L'espace distribué au sein des éléments

On pourrait aussi répartir cet espace disponible afin d'agrandir les éléments plutôt que de les espacer. Dans ce cas, on utilisera les propriétés {{cssxref("flex")}} afin de permettre aux éléments de grandir/rétrécir proportionnellement les uns aux autres, comme nous avons pu le détailler dans [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax).

Si on souhaite que tous les éléments de la barre aient la même largeur, on utilisera `flex: auto` qui correspond à la notation raccourcie de `flex: 1 1 auto` — tous les objets grandissent et rétrécissent de la même façon à partir d'une taille de base automatique. Cela signifie que le plus grand élément occupera plus d'espace.

Dans l'exemple qui suit, vous pouvez modifier `flex: auto` pour utiliser `flex: 1` qui correspond à la notation raccourcie de `flex: 1 1 0` et qui permet d'avoir la même largeur pour chaque élément, car la base (`flex-basis`) vaut 0 et permet de répartir l'intégralité de l'espace de façon équitable.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/navigation-flex.html", '100%', 550)}}

## La navigation séparée

Une autre façon d'aligner les éléments le long de l'axe principal consiste à utiliser des marges automatiques. Cela permet d'obtenir une barre où une partie des éléments sont alignés à gauche alors qu'un second groupe est aligné à droite.

Dans l'exemple qui suit, on utilise la technique des marges automatiques détaillée dans [Utiliser les marges automatiques pour l'alignement sur l'axe principal](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container#utiliser_les_marges_automatiques_pour_aligner_sur_l'axe_principal). Les éléments sont alignés le long de l'axe principal avec `flex-start`, ce qui correspond au comportement initial (par défaut) des boîtes flexibles, et on affecte une marge automatique à gauche pour les éléments qu'on souhaite aligner à droite. Dans le code de l'exemple, vous pouvez déplacer la classe pour l'appliquer sur un autre élément afin de voir comment la césure se déplace.

Dans cet exemple, on utilise également des marges sur les éléments flexibles afin de créer des gouttières entre les éléments ainsi qu'une marge négative sur le conteneur afin que les éléments aux extrémités soient bien alignés sur les bords gauche et droit. Tant que les propriétés `gap` de la spécification sur l'alignement des boîtes (_Box Alignment_) ne sont pas implémentées pour les boîtes flexibles, il nous faut utiliser les marges de cette façon si on souhaite créer une gouttière entre les éléments.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/split-navigation.html", '100%', 550)}}

## Centrer des éléments

Avant l'apparition des boîtes flexibles, une blague récurrente consistait à dire qu'un des défis majeur sur le Web était le centrage vertical des éléments. Disposant désormais des propriétés d'alignement pour les boîtes flexibles, surmonter ce défi est beaucoup plus accessible. Nous allons le voir dans l'exemple suivant.

Vous pouvez manipuler les propriétés d'alignement pour aligner les objets au début avec `flex-start` ou à la fin avec `flex-end`.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/center.html", '100%', 700)}}

À l'avenir, il ne sera peut-être plus nécessaire d'utiliser un conteneur flexible afin de centrer un seul élément, car les propriétés d'alignement des boîtes auront également été implémentées pour la disposition en bloc. Mais aujourd'hui, si on souhaite correctement centrer un objet dans un centre, il faut utiliser les boîtes flexibles. On procède comme dans l'exemple ci-avant : on modifie le conteneur afin que ce soit un conteneur flexible puis on utilise la propriété `align-items` sur l'élément parent ou bien on cible l'élément voulu avec `align-self`.

## Une disposition en cartes avec un pied ajustable

Qu'on utilise les boîtes flexibles ou les grilles CSS afin d'organiser une liste de cartes, ces méthodes fonctionnent uniquement sur les éléments fils directs du conteneur flexible ou du conteneur de grille. Cela signifie que si on dispose d'une quantité de contenu variable, la carte s'étirera sur toute la hauteur de la grille ou sur toute la hauteur du conteneur flexible. Tout le contenu à l'intérieur utilise une disposition en bloc classique qui signifie que le pied de page d'une carte avec moins de contenu sera plus haut que celui d'une carte disposant de plus de contenu pour lequel le pied est bien aligné en bas de la carte.

![Deux composants "carte" montrant que l'élément contenant le texte ne s'étire pas.](flex-cards.png)

On peut résoudre ce problème avec les boîtes flexibles. Pour commencer, on transforme la carte en conteneur flexible avec {{cssxref("flex-direction")}}`: column`. Ensuite, on affecte un coefficient `flex: 1` à la zone du contenu (ce qui correspond à la notation raccourcie `flex: 1 1 0`) : l'élément pourra s'étirer ou se rétrécir avec une base `0`. Comme c'est le seul élément de la carte qui peut grandir, il occupera tout l'espace encore disponible dans le conteneur flexible et poussera le pied en bas de carte. Dans l'exemple qui suit, si on retire la propriété `flex`, on peut voir le pied remonter pour être inscrit directement après le contenu.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/cards.html", '100%', 800)}}

## Les objets média

Un objet média est un motif classique en _design_ web. Dans ce motif, on a une image ou un autre média d'un côté et le texte associé à droite. Idéalement, on souhaite pouvoir inverser les deux composants et déplacer l'image à droite.

On peut voir ce motif utilisé avec les commentaires, les endroits où on affiche des images et leur description. Avec les boîtes flexibles, on peut dimensionner l'objet média en fonction des dimensions de l'image et occuper le reste de l'espace avec le contenu textuel.

Dans l'exemple suivant, on utilise les propriétés d'alignement des objets sur l'axe secondaire avec `flex-start` puis on définit `.content` avec `flex: 1`. Comme vu dans l'exemple précédent, `flex: 1` signifie que cette partie de la carte peut grandir.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media.html", '100%', 600)}}

Vous pouvez ici essayer d'appliquer les différentes contraintes relatives à votre conception.

Pour empêcher l'image de devenir trop large, on pourra ajouter la propriété {{cssxref("max-width")}} à l'image. Cette dimension de l'objet utilisant les valeurs initiales des propriétés flexibles, elle pourra rétrécir mais pas grandir et elle utilisera `auto` comme valeur pour `flex-basis`. Toute largeur {{cssxref("width")}} ou `max-width` appliquée à l'image sera utilisée comme mesure pour `flex-basis`.

```css
.image img {
  max-width: 100px;
}
```

On peut également permettre aux deux côtés de grandir/rétrécir proportionnellement. Si on paramètre les deux côtés avec `flex: 1`, ils grandiront/rétréciront à partir d'une base {{cssxref("flex-basis")}} égale à 0 et on obtiendra alors deux colonnes de même taille. Si on souhaite plutôt utiliser la taille du contenu comme base, on pourra utiliser `flex: auto` et les deux côtés grandiront/rétréciront à partir de la taille de leur contenu ou de toute taille qui leur serait explicitement appliquée en CSS (par exemple une largeur sur l'image).

```css
.media .content {
  flex: 1;
  padding: 10px;
}

.image {
  flex: 1;
}
```

On pourrait aussi utiliser différents coefficients {{cssxref("flex-grow")}} pour chaque côté. Utiliser `flex: 1` pour le côté avec l'image et `flex: 3` pour le côté avec la description signifierait qu'ils partiraient tous les deux avec une base `flex-basis` `0` et que l'espace serait distribué dans des proportions différentes correspondantes aux valeurs de `flex-grow`. Les propriétés flexibles que nous utilisons ici sont décrites en détail dans le guide [Contrôler les proportions des éléments flexibles le long de l'axe principal](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax).

```css
.media .content {
  flex: 3;
  padding: 10px;
}

.image {
  flex: 1;
}
```

### Inverser la position de l'objet média

Si on souhaite échanger la position de l'image dans l'objet média pour l'afficher à droite avec le contenu textuel à gauche, on pourra utiliser la propriété `flex-direction` avec la valeur `row-reverse`. L'objet média est désormais affiché dans l'autre sens. Dans l'exemple, cela s'obtient grâce à l'ajout de la classe `flipped` (en plus de la classe existante `.media`). Vous pouvez donc annuler cet effet en retirant la classe dans le code HTML.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/media-flipped.html", '100%', 650)}}

## Les contrôles de formulaire

Les boîtes flexibles s'avèrent particulièrement utiles losqu'on met en forme des contrôles de formulaires. Les formulaires sont généralement constitués de nombreux éléments qu'on souhaite aligner les uns avec les autres. Un motif fréquent se compose d'un élément {{htmlelement("input")}} associé à un élément {{htmlelement("button")}} (par exemple un formulaire de recherche ou un champ où on souhaite qu'un visiteur saisisse une adresse électronique).

Les boîtes flexibles facilitent la construction de tels motifs. Dans l'exemple suivant, on enveloppe l'élément `<button>` et l'élément `<input>` dans un conteneur auquel on ajoute une bordure et pour lequel on a `display: flex`. On utilise ensuite les propriétés flexibles afin de permettre à l'élément `<input>` de grandir et de conserver la même taille pour le bouton. On a donc une paire d'éléments pour laquelle la zone de saisie s'ajuste en fonction de l'espace disponible.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/input-button.html", '100%', 550)}}

On pourrait ajouter un libellé ou une icône à gauche aussi facilement qu'on a ajouté un bouton à droite. Dans la version suivante, on ajoute un libellé et d'autres règles de mise en forme pour l'arrière-plan. Il n'est pas nécessaire de modifier le reste de la disposition. Le champ de saisie adaptable possède désormais moins d'espace mais continue à consommer l'espace disponible après le placement des deux autres objets.

{{EmbedGHLiveSample("css-examples/flexbox/use-cases/label-input-button.html", '100%', 550)}}

De tels motifs facilitent la création d'une bibliothèque d'éléments de formulaires pour les différents documents d'un projet. On tire parti de la flexibilité des boîtes flexibles en mélangeant les éléments qui peuvent s'étendre et ceux qui restent à une taille constante.

## Conclusion

En explorant les motifs de ce guide, nous avons vu certaines des meilleures façons d'utiliser les boîtes flexibles pour obtenir le résultat souhaité. La plupart du temps, plusieurs choix s'offrent à nous. Mélanger des éléments qui peuvent s'étirer avec d'autres qui ne le peuvent pas, utiliser la taille du contenu comme point de départ ou encore permettre aux boîtes flexibles de gérer tout l'espace.

Pensez à la meilleure façon de présenter le contenu dont vous disposez puis voyez comment les boîtes flexibles ou les autres méthodes de disposition peuvent vous aider à obtenir cette présentation.
