---
title: Maîtriser le passage à la ligne des éléments flexibles
slug: Web/CSS/CSS_flexible_box_layout/Mastering_wrapping_of_flex_items
l10n:
  sourceCommit: ec9d2eb49c0916c394842d5caa923e1d86ed47ed
---

{{CSSRef}}

Les boîtes flexibles ont été conçues comme une méthode de disposition unidimensionnelle. Autrement dit, elles permettent de disposer des éléments en lignes ou en colonnes mais pas en lignes et en colonnes en même temps. Il existe toutefois la possibilité de passer des éléments flexibles à la ligne pour créer de nouvelles lignes horizontales si [`flex-direction`](/fr/docs/Web/CSS/flex-direction) vaut `row` ou de nouvelles colonnes si `flex-direction` vaut `column`. Dans ce guide, nous verrons comment cela fonctionne, les cas pour lesquels cela a été prévu et les situations qui nécessitent plutôt d'utiliser [une disposition en grille](/fr/docs/Web/CSS/CSS_grid_layout).

## Créer des passages à la ligne

La valeur initiale de la propriété [`flex-wrap`](/fr/docs/Web/CSS/flex-wrap) est `nowrap`. Cela signifie que si on a un ensemble d'éléments flexibles trop larges pour tenir dans le conteneur, ces éléments dépasseront. Si on souhaite que ces éléments créent une nouvelle ligne lorsque la largeur du conteneur est dépassée, on peut ajouter la propriété `flex-wrap` avec la valeur `wrap`, ou utiliser la propriété raccourcie [`flex-flow`](/fr/docs/Web/CSS/flex-flow) avec les valeurs `row wrap` ou `column wrap`.

Les éléments passeront alors à la ligne dans le conteneur. Dans l'exemple qui suit, on dispose de 10 éléments pour lesquels `flex-basis` vaut `160px` et qui peuvent grandir/rétrécir. Une fois que la première ligne est composée de suffisamment d'éléments et qu'il n'y a plus d'espace suffisant pour placer un autre objet de 160 pixels, une nouvelle ligne flexible est créée dans laquelle on place les éléments suivants et ainsi de suite. Les éléments pouvant grandir, ils s'étireront sur plus de 160 pixels afin de remplir chaque ligne complètement. S'il n'y a qu'un seul élément sur la dernière ligne, cet élément s'étirera pour remplir toute la ligne.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-wrap.html", '100%', 650)}}

On peut avoir le même effet en colonnes. Ici le conteneur devra avoir une hauteur afin que les éléments créent de nouvelles colonnes et s'étirent en hauteur pour remplir chaque colonne.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/column-wrap.html", '100%', 810)}}

## Le retour à la ligne et `flex-direction`

Le retour à la ligne fonctionne comme on pourrait s'y attendre lorsqu'on manipule `flex-direction`. Si `flex-direction` vaut `row-reverse`, les éléments commenceront à créer une nouvelle ligne à partir de la ligne de fin du conteneur et rempliront les lignes dans l'ordre inverse.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/row-reverse-wrap.html", '100%', 700)}}

On notera que l'inversion a uniquement lieu dans le sens de la ligne. On démarre à droite puis on passe à la deuxième ligne pour laquelle on démarre également à droite. On n'inverse pas les deux directions et on ne commence donc pas à partir du bas du conteneur pour le remplir vers le haut.

## Des explications sur cette disposition unidimensionnelle

Comme nous avons pu le voir dans les exemples précédents, si les éléments peuvent grandir et rétrécir, lorsqu'il y a moins d'éléments dans la dernière ligne ou colonne, ces éléments grandissent pour occuper tout l'espace disponible.

Il n'existe pas de méthode, avec les boîtes flexibles, qui permettent d'aligner les éléments d'une ligne avec ceux de la ligne du dessus&nbsp;: chaque ligne flexible agit comme un nouveau conteneur, décorrélé du précédent et gère la distribution de l'espace sur l'axe principal pour cette ligne uniquement. S'il n'y a qu'un seul élément et que celui-ci peut grandir, il remplira alors tout l'espace, comme si on avait un conteneur flexible avec un seul élément flexible.

Si on souhaite organiser du contenu sur deux dimensions, mieux vaut utiliser les grilles CSS. On peut comparer notre exemple précédent avec la version utilisant une disposition en grille pour observer les différences. Dans l'exemple qui suit, on utilise une grille CSS composée d'autant de colonnes de 160 pixels de large que possible et on distribue l'espace restant entre chaque colonne. Toutefois, les éléments restent ici sur la grille et ne s'étirent pas s'il y en a moins sur la dernière ligne.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/grid-example.html", '100%', 580)}}

C'est la différence entre une disposition unidimensionnelle et une disposition bidimensionnelle. Avec une méthode unidimensionnelle comme les boîtes flexibles, on ne contrôle que la ligne ou la colonne. Avec une méthode bidimensionnelle, on contrôle les deux axes simultanément. Aussi, si vous souhaitez organiser l'espace ligne par ligne ou colonne par colonne, vous pouvez utiliser les boîtes flexibles mais sinon, utilisez les grilles CSS.

## Comment fonctionnent les systèmes de grilles basés sur les boîtes flexibles ?

La plupart du temps, les systèmes de grilles basés sur les boîtes flexibles fonctionnent en combinant les boîtes flexibles et les dispositions avec les flottements (<i lang="en">floats</i>). Si on affecte des largeurs en pourcentage aux éléments flexibles (via `flex-basis` ou avec une largeur sur l'élément et avec `flex-basis` en `auto`), on peut obtenir l'impression d'une disposition organisée sur deux dimensions, comme on peut voir dans l'exemple ci-après.

Dans cet exemple, on a `flex-grow` et `flex-shrink` qui valent `0` afin que les éléments ne soient pas flexibles et que leur flexibilité puisse être maîtrisée avec des pourcentages, comme on pouvait le faire avec des dispositions flottantes.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/flex-grid.html", '100%', 650)}}

Si on souhaite que les éléments flexibles s'alignent le long de l'axe secondaire, on pourra ajuster les largeurs avec ces pourcentages. Dans la plupart des cas, cet ajout de largeur aux éléments flexibles témoigne plutôt d'un scénario où les grilles CSS seraient plus pertinentes.

## Créer des gouttières entre les éléments

Pour créer des espaces ou des gouttières entre les éléments flexibles, utilisez la propriété [`gap`](/fr/docs/Web/CSS/gap).

La propriété `gap` en CSS est une abréviation pour `row-gap` et `column-gap`, spécifiant la taille des gouttières, c'est-à-dire l'espace entre les lignes et les colonnes dans les mises en page de type grille, boîtes flexibles et multi-colonnes.

Avec les boîtes flexibles, la propriété `gap` est appliquée au conteneur flexible. Elle crée un espace fixe entre les éléments flexibles adjacents. Cependant, la propriété `gap` n'est pas la seule à pouvoir créer de l'espace entre les éléments. Les marges, le remplissage (<i lang="en">padding</i>), `justify-content` et `align-content` peuvent également augmenter la taille de la gouttière, ce qui influe sur la taille réelle de l'espace.

Pour voir comment la propriété `gap` diffère de `margin` dans les deux axes, essayez de modifier la valeur de `gap` dans le conteneur `.box` et d'ajouter une valeur de `margin` à la règle `.box > *` dans la feuille de style ci-dessous. Cliquez sur le bouton «&nbsp;Reset&nbsp;» pour revenir aux valeurs précédentes.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/gaps.html", '100%', 830)}}

## L'impact de `visibility: collapse`

La spécification sur les boîtes flexibles détaille la façon dont un élément flexible est replié lorsqu'on lui applique `visibility: collapse` (voir la documentation de [`visibility`](/fr/docs/Web/CSS/visibility)). La spécification décrit le comportement standard comme suit&nbsp;:

> "Indiquer `visibility: collapse` sur un élément flexible le transforme en un élément flexible replié et produit un effet similaire à l'application de `visibility: collapse` sur une ligne ou colonne de tableau. L'élément flexible replié est intégralement retiré du rendu mais laisse une toise qui permet de conserver la taille de la ligne flexible selon l'axe secondaire. Ainsi, si un conteneur flexible ne possède qu'une ligne flexible, replier ou déplier des éléments flexibles pourra modifier la dimension principale du conteneur mais n'aura aucun effet sur l'axe secondaire et empêchera ainsi le reste de la page d'osciller. Le passage à la ligne est réappliqué après le repliage des éléments et il se peut donc que la dimension secondaire d'un conteneur flexible sur plusieurs lignes puisse évoluer." — [Éléments repliés (spécification en anglais)](https://www.w3.org/TR/css-flexbox-1/#visibility-collapse)

Ce comportement s'avère utile lorsqu'on souhaite cibler certains éléments flexibles avec JavaScript afin d'afficher/masquer leur contenu. Un des exemples de la spécification illustre un tel scénario.

Dans l'exemple qui suit, on a un conteneur flexible sans passage à la ligne. Le troisième élément possède plus de contenu que les autres mais est paramétré avec `visibility: collapse` et le conteneur flexible conserve donc une toise pour la hauteur nécessaire à l'affichage de cet élément. Si on retire `visibility: collapse` ou qu'on modifie la valeur de `visible`, on pourra voir l'élément disparaître et l'espace être redistribué entre les éléments qui ne sont pas repliés. La hauteur du conteneur flexible ne devrait pas changer.

> [!NOTE]
> Il est nécessaire d'utiliser Firefox pour les deux exemples présentés ensuite, car Chrome et Safari considèrent `collapse` comme équivalent à `hidden`.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/visibility-collapse.html", '100%', 650)}}

Lorsqu'on manipule des conteneurs flexibles qui sont composés de plusieurs lignes flexibles, il faut être conscient que le passage à la ligne est réappliqué après le repliage des éléments. Ainsi, le navigateur doit réappliquer les mécanismes de passage à la ligne afin de tenir compte de l'espace libéré par l'élément plié dans la direction principale.

Cela signifie qu'un ou plusieurs éléments pourraient être déplacés sur une autre ligne que leur ligne initiale.

Vous pouvez observer ce comportement dans l'exemple qui suit. On peut voir comment la composition des lignes varie en fonction de l'élément qui est replié. Si vous ajoutez plus de contenu au deuxième élément, il changera de ligne s'il est suffisamment grand. La ligne du haut sera alors aussi haute qu'une seule ligne de texte.

{{EmbedGHLiveSample("css-examples/flexbox/wrapping/wrapped-visibility-collapse.html", '100%', 750)}}

Si cela pose problème dans votre structure, il peut être nécessaire de revoir son organisation et, par exemple, de placer chaque ligne de contenu dans un conteneur flexible séparé afin que le contenu ne puisse pas changer de ligne.

### Utiliser `visibility: hidden` et `display: none`

Dans l'exemple précédent, essayez d'utiliser `visibility: hidden` ou `display: none` au lieu de `visiblity: collapse`. En utilisant `visibility: hidden`, l'élément est rendu invisible mais la boîte est conservée dans l'architecture de la page, de sorte qu'elle se comporte toujours comme si elle faisait partie de la mise en page.

Lorsque vous utilisez `display: none`, l'élément est complètement supprimé de l'architecture de la page. Non seulement il est invisible, mais la structure est également supprimée. Cela signifie que les compteurs l'ignorent et que les transitions ne s'exécutent pas.
