---
title: Contrôler les proportions des boîtes flexibles le long de l'axe principal
slug: >-
  Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
tags:
  - Boîtes flexibles
  - CSS
  - Flex
  - Guide
  - Intermediate
  - flexbox
translation_of: >-
  Web/CSS/CSS_Flexible_Box_Layout/Controlling_Ratios_of_Flex_Items_Along_the_Main_Ax
original_slug: >-
  Web/CSS/CSS_Flexible_Box_Layout/Contrôler_les_proportions_des_boîtes_flexibles_le_long_de_l_axe_principal
---
{{CSSRef}}

Dans ce guide, nous verrons les trois propriétés appliquées aux éléments flexibles qui permettent de contrôler leurs tailles et flexibilités le long de l'axe principal : {{cssxref("flex-grow")}}, {{cssxref("flex-shrink")}} et {{cssxref("flex-basis")}}. Comprendre le fonctionnement de ces propriétés est primordial pour maîtriser les boîtes flexibles.

## Un premier aperçu

Ces trois propriétés contrôlent différents aspects relatifs à la flexibilité des éléments :

- `flex-grow` : quelle proportion de l'espace libre peut-on allouer en supplément à cet élément ?
- `flex-shrink` : quelle proportion de l'espace peut être retirée à cet élément ?
- `flex-basis` : quelle est la taille de l'élément avant tout agrandissement/réduction ?

Ces propriétés sont généralement définies via la propriété raccourcie {{cssxref("flex")}}. Le code suivant définira `flex-grow` avec la valeur `2`, `flex-shrink` avec la valeur `1` et `flex-basis` avec la valeur `auto`.

```css
.item {
  flex: 2 1 auto;
}
```

Dans l'article sur [les concepts de base relatifs aux boîtes flexibles](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox), nous avons pu introduire ces propriétés. Ici, nous les étudierons en profondeur afin de comprendre comment le navigateur les interprète.

## Les concepts majeurs relatifs à l'axe principal

Avant de rentrer dans le détail des propriétés, définissons certains concepts clés qui interviennent lorsqu'on travaille sur les proportions le long de l'axe principal. Ces concepts se basent sur la taille _naturelle_ des éléments flexibles (avant tout redimensionnement) et sur la notion d'espace libre.

### Le dimensionnement des objets flexibles

Afin de connaître l'espace disponible pour l'organisation des éléments flexibles, le navigateur doit connaître la taille de l'élément. Comment faire lorsque les éléments ne sont pas dimensionnés avec une largeur ou une hauteur exprimée dans une unité de longueur absolue ?

CSS permet d'utiliser les valeurs {{cssxref('width','min-content','#min-content')}} et  {{cssxref('width','max-content','#max-content')}} — ces mots-clés sont définis [dans la spécification CSS pour le dimensionnement intrinsèque et extrinsèque](https://drafts.csswg.org/css-sizing-3/#width-height-keywords) et ces valeurs peuvent être utilisées comme [unité de longueurs](/fr/docs/Web/CSS/length).

Dans l'exemple qui suit, on a deux paragraphes qui contiennent chacun une chaîne de caractères. La largeur du premier paragraphe est `min-content`. Si le navigateur utilisé prend en charge ce mot-clé, on peut voir que le texte passe à la ligne dès que c'est possible, sans dépasser de la boîte. Autrement dit, la longueur `min-content` correspond à la taille du plus grand mot du paragraphe.

Dans le second paragraphe, on utilise la valeur `max-content` et on voit le résultat opposé. Le texte prend autant de place que possible et aucun saut à la ligne supplémentaire n'est introduit. Le texte dépasserait de la boîte si le conteneur était trop étroit.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/min-max-content.html", '100%', 750)}}

Si votre navigateur ne prend pas en charge ces mots-clés, les paragraphes seront affichés normalement. La capture d'écran qui suit illustre le résultat obtenu avec un navigateur compatible :

![Le premier paragraphe est aussi large que le plus long mot qu'il contient alors que le second est étendu sur une seule ligne et dépasse.](ratios-size.png)

Pour la suite de cet article, gardez à l'esprit l'impact de `min-content` et `max-content` lorsque nous verrons les propriétés `flex-grow` et `flex-shrink`.

### Espace libre positif et négatif

Pour étudier ces propriétés, nous devons définir le concept d'**espace libre positif et négatif**. Lorsqu'un conteneur flexible possède un espace libre positif, il dispose de plus d'espace qu'il n'est nécessaire pour afficher les éléments flexibles qu'il contient. Si on a, par exemple, un conteneur dont la largeur mesure 500 pixels, la propriété {{cssxref("flex-direction")}} qui vaut `row` et trois éléments qui mesurent chacun 100 pixels, il reste alors 200 pixels d'espace libre positif qui pourrait être réparti entre les éléments si on le souhaitait.

![Une image illustrant l'espace restant après que les éléments aient été affichés.](basics7.png)

L'espace libre négatif est l'espace supplémentaire qui aurait été nécessaire pour contenir tous les éléments à l'intérieur du conteneur flexible. Si on dispose d'un conteneur dont la largeur mesure 500 pixels et trois éléments flexibles dont chacun mesure 200, l'espace total occupé mesure 600 pixels et on a donc 100 pixels d'espace libre négatif. Cet espace pourrait être retiré des éléments afin qu'ils soient contenus dans le conteneur.

![Les objets dépassent du conteneur.](ratios1.png)

C'est cette distribution de l'espace libre qu'il est nécessaire de comprendre afin d'étudier les différentes propriétés relatives aux propriétés flexibles.

Les exemples étudiés par la suite utilisent la propriété {{cssxref("flex-direction")}} avec la valeur `row`, ce sera donc leur largeur qui sera leur dimension principale. Vous pouvez modifier les exemples afin d'utiliser `flex-direction: column` (dans ce cas, l'axe principal sera celui des colonnes et la dimension principale sera la hauteur).

## La propriété `flex-basis`

La propriété {{cssxref("flex-basis")}} définit la taille initiale de l'élément flexible avant la répartition de l'espace. La valeur initiale de cette propriété est `auto`. Si  `flex-basis` vaut `auto`, le navigateur vérifie si la taille de l'élément est définie de façon absolue et utilise cette valeur pour `flex-basis` (par exemple si on indique dans la feuille de style que l'élément mesure 200 pixels, c'est cette mesure qui sera utilisée comme valeur pour `flex-basis` pour cet élément).

Si la taille initiale de l'élément n'est pas définie de façon absolue, `auto` correspondra à la taille déterminée automatique. C'est là qu'on comprend mieux l'utilité de `min-` et `max-content`, car la boîte flexible utilisera `max-content` comme valeur pour `flex-basis`. Dans l'exemple suivant, nous verrons comment en tirer parti.

Dans cet exemple, on crée un ensemble de boîtes inflexibles avec la valeur `0` pour `flex-grow` et `flex-shrink`. On peut voir comment le premier objet, ayant une largeur explicite de 150 pixels, occupe une `flex-basis` de `150px` tandis que les deux autres objets qui n'ont pas de largeur sont dimensionnés en fonction de la largeur de leur contenu.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-basis.html", '100%', 500)}}

En plus du mot-clé `auto`, on peut également utiliser le mot-clé `content` comme valeur pour `flex-basis`. Ainsi, `flex-basis` sera calculée en fonction de la taille du contenu, même s'il y a une largeur explicitement définie sur l'objet. Ce mot-clé est plus récent et est moins largement pris en charge. Toutefois, on peut obtenir le même effet en utilisant le mot-clé `auto` et en s'assurant que l'objet n'a pas de largeur définie, ainsi, le dimensionnement automatique sera effectué en fonction du contenu.

Si on souhaite que la boîte flexible ignore complètement la taille du contenu lors de la répartition de l'espace, on pourra utiliser `flex-basis` avec la valeur `0`. En résumé, cela revient à indiquer que tout l'espace est disponible et peut être réparti proportionnellement. Nous verrons des exemples utilisant cette valeur lorsque nous étudierons `flex-grow`.

## La propriété `flex-grow`

La propriété {{cssxref("flex-grow")}} définit **le coefficient d'agrandissement flexible**, qui détermine la façon dont l'objet flexible grandira par rapport aux autres objets flexibles du même conteneur lorsque l'espace libre sera distribué.

Si tous les objets possèdent la même valeur pour le coefficient `flex-grow`, l'espace sera réparti également entre chacun. Dans ce cas, on utilisera généralement la valeur `1`. Ceci étant dit, on pourrait tout aussi bien utiliser la valeur `88`, `100` ou `1.2` — ce coefficient est un simple ratio. Si le coefficient est le même pour tous les objets et qu'il reste de l'espace libre dans le conteneur, cet espace sera réparti équitablement.

### Combiner `flex-grow` et `flex-basis`

Les choses se compliquent lorsque `flex-grow` et `flex-basis` interagissent. Prenons un exemple où trois objets flexibles ont chacun des contenus de longueurs différentes et auxquels on applique la règle suivante :

`flex: 1 1 auto;`

Dans ce cas, `flex-basis` vaut `auto` et les objets n'ont pas de largeur explicite définie : ils sont donc dimensionnés automatiquement. Cela signifie que la boîte flexible utilisera la taille `max-content` des éléments. Après avoir disposé les objets, il reste de l'espace libre dans le conteneur flexible (ce qui correspond à la zone hachurée de la figure suivante) :

![Une image illustrant l'espace libre positif avec une zone hachurée.](ratios2.png)

On utilise ici une valeur `flex-basis` égale à la taille du contenu, l'espace disponible qui peut être distribué est donc égal à la taille du conteneur (ici sa largeur) moins la taille des éléments. Cet espace est partagé équitablement entre les différents objets. Ainsi, l'objet le plus grand finira avec une taille plus grande, car sa taille de départ est plus importante bien que la même quantité d'espace restant ait été affectée aux autres objets :

![L'espace positif est réparti entre les éléments.](ratios3.png)

Si on souhaite obtenir trois objets de la même taille alors qu'ils ont des tailles initiales différentes, on pourra utiliser :

`flex: 1 1 0;`

Ici, on indique que, lors de la phase de répartition de l'espace, la taille des objets vaut `0` — tout l'espace peut être utilisé. Or, les trois objets ayant tous le même coefficient `flex-grow`, ils récupèrent chacun la même quantité d'espace. On obtient donc trois objets flexibles de même largeur.

Vous pouvez modifier le coefficient `flex-grow` pour le passer de 1 à 0 dans l'exemple qui suit pour observer la façon dont les objets se comportent :

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow.html", '100%', 520)}}

### Affecter différents coefficients `flex-grow` aux éléments

Notre compréhension du fonctionnement de `flex-grow` avec `flex-basis` nous permet de mieux contrôler chacun des éléments en leur affectant différents coefficients `flex-grow`. Si on conserve la valeur `0` pour `flex-basis` afin que tout l'espace soit distribué, on pourra affecter différentes valeurs de `flex-grow` afin qu'ils grandissent différemment. Dans l'exemple qui suit, on utilise les valeurs suivantes :

- `1` pour le premier élément
- `1` pour le deuxième élément
- `2` pour le troisième

On utilise `flex-basis` avec la valeur `0` ce qui signifie que l'espace disponible est réparti de la façon suivante. On additionne les différents facteurs `flex-grow` puis on divise l'espace libre du conteneur par cette somme (dans notre exemple, elle vaut 4). Ensuite, on répartit l'espace en fonction des différents coefficients individuels : le premier objet récupère une part d'espace, le deuxième en récupère également une et le dernier récupère deux parts. Autrement dit, le troisième objet sera deux fois plus grand que le premier et le deuxième objet.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-grow-ratios.html", '100%', 520)}}

Rappelons qu'on peut utiliser n'importe quelle valeur positive pour ces facteurs. C'est le rapport entre ces différents facteurs qui importe. Vous pouvez aussi bien utiliser des nombres entiers ou des nombres décimaux. Pour tester cela, vous pouvez changer les coefficients précédents afin de plutôt utiliser respectivement `.25`, `.25` et `.50` — vous obtiendrez alors le même résultat.

## La propriété `flex-shrink`

La propriété {{cssxref("flex-shrink")}} définit **le coefficient de rétrécissement flexible** qui détermine la façon dont l'objet flexible se réduit relatviement aux autres objets du conteneur flexible lorsque l'espace négatif est distribué.

Cette propriété est utilisée lorsque le navigateur calcule les valeurs `flex-basis` des différents objets flexibles et obtient des valeurs qui dépassent la taille du conteneur flexible. Tant que `flex-shrink` possède une valeur positive, les éléments pourront rétrécir afin de ne pas dépasser du conteneur.

Ainsi, si `flex-grow` gère la façon dont on peut ajouter de l'espace disponible, `flex-shrink` gère la façon dont on retire de l'espace aux boîtes des objets afin qu'ils ne dépassent pas de leur conteneur.

Dans le prochain exemple, on dispose de trois éléments dans le conteneur flexible. Chacun mesure 200 pixels de large dans un conteneur qui mesure 500 pixels de large. Si `flex-shrink` vaut `0`, les éléments ne sont pas autorisés à rétrécir et ils dépassent donc de la boîte.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink.html", '100%', 500)}}

En passant la valeur de `flex-shrink` à `1`, on peut voir que la taille de chaque élément diminue de la même façon afin que l'ensemble des objets tiennent dans la boîte. Les éléments ont désormais une taille inférieure à leur taille initiale.

### Combiner `flex-shrink` et `flex-basis`

On pourrait dire et penser que `flex-shrink` fonctionne de la même façon que `flex-grow`. Toutefois, deux arguments viennent contrecarrer cette analogie.

Le premier, expliqué de façon subtile dans la spécification est la différence de comportement entre `flex-shrink` et l'espace libre négatif et celui de `flex-grow` avec l'espace libre positif :

> “Note : Le coefficient `flex-shrink` est multiplié par la taille de base (`flex-basis`) lors de la distribution de l'espace négatif. Ainsi, l'espace négatif est distribué proportionnellement au rétrécissement possible de l'élément. Autrement dit, un petit élément ne sera pas réduit à une taille nulle avant qu'un plus grand élément n'ait été réduit de façon notable.”

Le second argument s'explique par l'impossibilité de réduire les petits éléments à une taille nulle lors de la suppression de l'espace libre négatif. Les éléments seront au maximum rétrécis jusqu'à obtenir leur taille  `min-content` — c'est-à-dire la taille qu'ils obtiennent s'ils utilisent tous les emplacements de rupture de ligne possibles.

On peut observer ce seuil avec `min-content` dans l'exemple qui suit où `flex-basis` est résolu avec la taille du contenu. Si on change la largeur du conteneur flexible (en l'augmentant à 700 pixels par exemple) puis en réduisant la largeur de l'élément flexible, on peut voir que les deux premiers objets passent à la ligne. Toutefois, ils ne deviennent pas plus petits que `min-content`. Lorsque la boîte se réduit, l'espace est simplement retiré du troisième élément.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-min-content.html", '100%', 500)}}

En pratique, cette méthode de rétrécissement fournit des résultats prévisibles, car on ne souhaite pas que le contenu disparaisse entièrement ou que les boîtes soient plus petites que leur contenu minimal. Les règles présentées ci-avant sont donc pertinentes lorsqu'on souhaite rétrécir des objets afin qu'ils rentrent dans un conteneur.

### Utiliser différents coefficients `flex-shrink` pour différents éléments

Comme avec `flex-grow`, on peut utiliser différents coefficients `flex-shrink`. Cela permet de modifier le comportement par défaut et on peut ainsi avoir un élément qui se réduit plus ou moins rapidement que ses voisins (voire qui ne se réduit pas du tout).

Dans l'exemple suivant, le premier objet possède un coefficient `flex-shrink` égal à 1, le deuxième a un coefficient égal à `0` (il ne rétrécira pas du tout) et le troisième est paramétré avec `4`. Ainsi, le troisième élément rétrécit plus vite que le premier. N'hésitez pas à utiliser différentes valeurs pour observer le résultat obtenu. De la même façon qu'avec `flex-grow`, on peut utiliser nombres entiers ou des nombres décimaux, utilisez ce qui vous paraît le plus pertinent.

{{EmbedGHLiveSample("css-examples/flexbox/ratios/flex-shrink-ratios.html", '100%', 570)}}

## Maîtriser le dimensionnement des objets flexibles

Comprendre le dimensionnement des objets flexibles revient avant tout à comprendre les différentes étapes qui sont déroulées et notamment celles-ci que nous avons pu étudier dans ces guides :

### Quelle est la taille de base de l'objet ?

1.  Si  `flex-basis` vaut `auto` et que l'objet possède une dimension explicitement définie, c'est cette dimension qui sera utilisée.
2.  Si  `flex-basis` vaut `auto` ou `content` (pour les navigateurs qui prennent en charge cette valeur), c'est la taille du contenu qui déterminera la taille de base de l'élément
3.  Si `flex-basis` est exprimée avec une valeur de longueur non nulle, c'est cette valeur qui sera la taille de base de l'élément.
4.  Si  `flex-basis` vaut `0`, la taille de l'élément n'est pas pris en compte lors de la répartition de l'espace.

### De l'espace est-il disponible ?

Les objets ne s'étendent pas s'il n'y a pas d'espace libre positif et ne se réduisent pas s'il n'y a pas d'espace libre négatif.

1.  Si on prend tous les objets et qu'on somme leur dimension principale (la largeur si on travaille en ligne ou la hauteur si on travaille en colonne) et qu'on obtient une quantité inférieure à la dimension principale du conteneur, on aura alors un espace libre positif et c'est la propriété `flex-grow` qui entrera en jeu.
2.  Si cette somme dépasse la taille du conteneur flexible, on aura alors un espace libre négatif et c'est la propriété `flex-shrink` qui sera utilisée.

### Les autres façons de distribuer l'espace

Si on ne souhaite pas ajouter d'espace aux objets, on pourra tout aussi bien répartir cet espace libre entre les objets ou autour grâce aux propriétés d'alignement vu dans [le guide sur l'alignement](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Aligning_Items_in_a_Flex_Container). La propriété {{cssxref("justify-content")}} permettra de répartir cet espace entre les objets ou autour d'eux. Les marges automatiques peuvent être utilisées sur les objets flexibles afin d'absorber l'espace et de créer des gouttières entre ces objets.

Tout ces outils relatifs aux boîtes flexibles vous permettent d'accomplir la plupart des dispositions et n'auront plus de secret au fur et à mesure de vos essais et expérimentations.
