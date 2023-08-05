---
title: Les liens entre flexbox et les autres méthodes de disposition
slug: Web/CSS/CSS_flexible_box_layout/Relationship_of_flexbox_to_other_layout_methods
---

{{CSSRef}}

Dans cet article, nous verrons comment les boîtes flexibles interagissent avec les autres modules CSS. Nous verrons quelles sont les spécifications qui décrivent les boîtes flexibles et pourquoi les boîtes flexibles sont différentes des autres modules.

> **Note :** Dans les versions 1 et 2 de CSS, la spécification était « monolithique » et décrite dans un seul document. Évoluant vers un langage riche possédant de nombreuses fonctionnalité, la maintenance de cette spécification unique est devenue problématiques, certaines parties évoluant à différentes vitesses. La spécification CSS a donc été modularisée et ce sont ces différents modules qui constituent CSS aujourd'hui. Ces modules sont liés les uns aux autres et sont chacun à différents stades de développement.

## Le module d'alignement des boîtes (_Box Alignment_)

La plupart des personnes s'intéressent aux boîtes flexibles car elles permettent d'aligner efficacement des éléments flexibles au sein d'un conteneur. Les boîtes flexibles permettent d'utiliser des propriétés pour aligner les éléments sur l'axe secondaire et de les justifier sur l'axe principal.

Ces propriétés sont apparues dans la spécification dédiée aux boîtes flexibles mais font désormais également partie de [la spécification sur l'alignement des boîtes (_Box Alignment_)](https://www.w3.org/TR/css-align-3/). Cette spécification détaille la façon dont l'alignement fonctionne pour l'ensemble des dispositions (et pas uniquement pour les boîtes flexibles). L'alignement des boîtes permet de gérer l'alignement et la justification, ainsi que la distribution de l'espace le long d'un axe.

Ces propriétés d'alignement sont actuellement détaillées dans les spécifications de _flexbox_ et d'alignement des boîtes afin d'être sûr que la spécification des boîtes flexibles n'est pas bloquée par l'état de la spécification sur l'alignement des boîtes. Dans la spécification _flexbox_, une note indique que lorsque la spécification sur l'alignement des boîtes sera terminée, ces définitions remplaceront celles de la spécification sur les boîtes flexibles :

> « Note : Bien que les propriétés d'alignement soient définies dans le module CSS _Box Alignment_ [CSS-ALIGN-3](https://www.w3.org/TR/css-align-3/), le module _Flexible Box Layout_ reproduit les définitions des propriétés qui sont ici pertinentes afin de ne pas créer de dépendance normative qui ralentirait l'avancement de la spécification. Ces propriétés s'appliquent uniquement à la disposition flexible jusqu'à ce que _CSS Box Alignment Level 3_ soit terminé et définisse leurs effets pour les autres modes de disposition. De plus, toute nouvelle valeur qui apparaîtra dans le module _Box Alignment_ s'appliquera également à la disposition en boîtes flexibles. Autrement dit, le module _Box Alignment_, lorsqu'il sera complet, remplacera les définitions énoncées ici. »

Dans un prochain article de ce guide ([Aligner les éléments d'un conteneur flexibles](/fr/docs/Web/CSS/Disposition_flexbox_CSS/Aligner_des_éléments_dans_un_conteneur_flexible)), nous verrons dans le détail comment les propriétés du module d'alignement des boîtes s'appliquent aux éléments flexibles.

### Les propriétés d'espacement (_gap_)

Récemment, les propriétés {{cssxref("row-gap")}} et {{cssxref("column-gap")}}, ainsi que la propriété raccourcie {{cssxref("gap")}} ont été ajoutées au module d'alignement des boîtes. Ces propriétés furent initialement définies dans la spécification de la grille CSS et étaient nommées `grid-row-gap`, `grid-column-gap` et `grid-gap`. Elles ont été renommées et déplacées dans le module d'alignement des boîtes afin de pouvoir être utilisées dans d'autres modes de disposition et, à terme, avec les boîtes flexibles. Avant la prise en charge des propriétés `gap`, c'était les propriétés {{cssxref("margin")}} qui étaient utilisées afin de créer des espaces entre les éléments.

## Les modes d'écritures (_Writing Modes_)

Dans l'article sur [les concepts de bases relatifs aux _flexbox_](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox), nous avons vu que les boîtes flexibles prenaient en compte le mode d'écriture (la direction du texte). Les différents modes d'écritures sont décrits dans la spécification CSS [Writing Modes](https://www.w3.org/TR/css-writing-modes-3/) qui détaille comment CSS prend en charge les différents modes d'écritures qui existent dans le monde. Cette spécification permet notamment de comprendre les directions **de bloc** et **en ligne** qui sont fondamentales pour les axes principal et secondaires des boîtes flexibles.

On notera qu'il est possible de modifier le mode d'écriture d'un document pour d'autres raisons que des raisons linguistiques. Vous pouvez [consulter cet article](https://24ways.org/2016/css-writing-modes/) pour en savoir plus sur les différentes façons d'utiliser les modes d'écriture, que ce soit en fonction de la langue du contenu ou pour des raisons créatives.

### Les différents modes d'écritures

La spécification sur les modes d'écriture définit les différentes valeurs qui peuvent être utilisées avec la propriété {{cssxref("writing-mode")}}. Cette propriété permet de modifier la direction de la disposition des blocs sur la page pour correspondre à l'orientation d'un mode d'écriture donné. Vous pouvez manipuler l'exemple qui suit en utilisant les valeurs suivantes pour voir l'impact que cela a sur la disposition flexible :

- `horizontal-tb`
- `vertical-rl`
- `vertical-lr`
- `sideways-rl`
- `sideways-lr`

{{EmbedGHLiveSample("css-examples/flexbox/relationship/writing-modes.html", '100%', 360)}}

Actuellement, seul Firefox prend en charge `sideways-rl` et `sideways-lr`. Il existe également certains problèmes relatifs à `writing-mode` et aux boîtes flexibles. Pour plus d'informations, vous pouvez consulter [les informations de compatibilité pour la propriété `writing-mode`](/fr/docs/Web/CSS/writing-mode#compatibilité_des_navigateurs). Toutefois, si vous souhaitez utiliser les modes d'écritures pour votre site/application, il est fortement conseillé de tester les résultats obtenus, ne serait-ce que parce que cela peut fortement nuire à la lisibilité !

On notera que la propriété `writing-mode` CSS ne doit pas être utilisée pour modifier le mode d'écriture d'un document entier. Cela doit être fait avec HTML en ajoutant un attribut `dir` et `lang` sur l'élément `html` afin d'indiquer la direction du texte par défaut et la langue du document. Ainsi, le document serait correctement affiché, même si le CSS n'était pas chargé.

## Les boîtes flexibles et les autres méthodes de disposition

La spécification sur les boîtes flexibles contient [une définition](https://www.w3.org/TR/css-flexbox-1/#flex-containers) de ce qui se produit lorsqu'un élément utilisant une autre méthode de disposition devient un élément flexible (par exemple : un élément est positionné de façon flottante et son élément parent devient un conteneur flexible). Elle décrit également comment un conteneur flexible s'inscrit dans une disposition.

Un élément avec `display: flex` se comportera majoritairement comme un conteneur de bloc qui établit un bloc englobant. Les éléments flottants ne rentreront pas dans ce conteneur et [les marges des conteneurs ne fusionneront pas](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing).

Pour un élément flexible, si celui-ci était avant un élément flottant ou dégagé (_cleared_) et qu'il devient flexible car son élément parent reçoit `display: flex`, le flottement et le dégagement ne s'appliquent plus. L'élément ne sera pas retiré du flux normal (ce qui aurait lieu avec un flottement). Si on a utilisé la propriété {{cssxref("vertical-align")}} avec `inline-block` ou si on a utilisé une disposition tabulaire, cela n'aura plus d'effet et on pourra utiliser les propriétés d'alignement des boîtes flexibles à la place.

Dans le prochain exemple, on applique un flottement sur les éléments fils puis leur conteneur reçoit `display: flex`. Si vous retirez `display: flex`, vous pouvez voir que l'élément `.box` s'écrase car aucun dégagement n'est appliqué. Cela permet de voir que le flottement s'applique. En remettant `display: flex`, l'élément ne s'écrase plus car les éléments fils sont devenus des éléments flexibles.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/floats.html", '100%', 430)}}

## Les boîtes flexibles et la disposition en grille

[La disposition en grille (_CSS Grid_)](/fr/docs/Web/CSS/CSS_Grid_Layout) et les boîtes flexibles agissent de la même façon lorsqu'elles surchargent les autres méthodes de disposition. Les boîtes flexibles pourront être utilisées comme solution de repli si les grilles CSS ne sont pas prises en charge. En effet, les boîtes flexibles bénéficient d'une meilleure prise en charge pour les navigateurs moins récents. Cette approche fonctionne sans problème car, si un élément flexible devient un élément d'une grille, les propriétés `flex` qui auraient pu être affectées aux éléments enfants seront ignorées.

Les propriétés du module d'alignement des boîtes peuvent être utilisées pour ces deux modes de dispositions.

### _Flexbox_ / grille : quelle différence ?

On demande souvent quelle est la différence entre la disposition avec les boîtes flexibles et la disposition avec la grille CSS. Pourquoi avoir deux spécifications quand celles-ci semblent avoir le même effet ?

La réponse la plus directe se trouve dans ces deux spécifications. Les boîtes flexibles sont une méthode de disposition unidimensionnelle alors que la grille CSS est une méthode de disposition bidimensionnelle. Dans l'exemple ci-après, on utilise une disposition avec les boîtes flexibles. Comme nous avons vu dans l'article sur les concepts de base, les éléments flexibles peuvent « passer à la ligne » mais chaque ligne forme alors un conteneur flexible indépendant. On voit ici que l'espace est distribué sans prendre en compte le placement des éléments sur les autres lignes/colonnes, il n'y a pas d'alignement.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/flex-layout.html", '100%', 750)}}

Si on crée une disposition semblable avec une grille, on peut à la fois contrôler la disposition des lignes et des colonnes.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/grid-layout.html", '100%', 700)}}

Ces exemples illustrent une autre différence majeure entre ces méthodes. Avec la disposition en grille, la majeure partie du dimensionnement s'applique au conteneur (on y définit les pistes et on place les éléments sur ces pistes). Avec la disposition utilisant les boîtes flexibles, on crée un conteneur flexible et on indique sa direction, tout le reste est géré au niveau des éléments.

Dans certains cas, les deux méthodes peuvent fonctionner sans problème. En les utilisant plus fréquemment, vous pourrez voir qu'elles répondent à des besoins différents et vous utiliserez sans doute ces deux méthodes dans votre CSS. Comme souvent, il n'y a pas de solution miracle et de « bonne » ou de « mauvaise » réponse.

De façon générale, si vous ajoutez des marges autour d'éléments flexibles afin que ceux-ci soient alignés, vous devriez utiliser une méthode de disposition bidimensionnelle comme la grille CSS qui vous permettra de mieux organiser votre contenu. La taille du composant à mettre en forme n'a pas d'importance, on n'utilisera pas plus les boîtes flexibles pour un « petit » composant et la grille pour un « grand ». Essayez les différentes méthodes, profitez de la liberté de choix qui existe désormais avec ces outils.

Pour approfondir cette comparaison entre la grille et les boîtes flexibles, vous pouvez consulter [cet article à propos des relations entre la grille CSS et les autres méthodes de disposition](/fr/docs/Web/CSS/CSS_Grid_Layout/Relationship_of_Grid_Layout). Cet article détaille les nombreuses différences entre la grille CSS et les boîtes flexibles ; il illustre aussi les fonctionnalités supplémentaires provenant de la grille. Cet article pourra vous aider à choisir la méthode de disposition à privilégier.

## Les boîtes flexibles et `display: contents`

La valeur `contents` de la propriété {{cssxref("display")}} est une nouvelle valeur, décrite ainsi dans la spécification :

> « L'élément ne génère aucune boîte de lui-même mais ses éléments fils et ses pseudo-éléments continuent de générer des boîtes normalement. En termes de génération de boîtes et de disposition, l'élément doit être traité comme s'il avait été remplacé par ses éléments fils et ses pseudo-éléments dans l'arbre du document. »

La valeur de la propriété `display` contrôle la façon dont les boîtes sont générées et si un élément doit générer une boîte qui puisse être mise en forme et vue sur la page ou si la boîte normalement créée devrait être retirée afin que ses éléments fils soient « remontés » dans l'arbre et participent à la disposition dont l'élément (parent) aurait dû faire partie. Un exemple étant beaucoup plus efficace qu'un long discours, passons à la suite.

Dans l'exemple suivant on dispose d'un conteneur flexible avec trois éléments fils. L'un de ces éléments flexibles possède deux éléments à l'intérieur. Normalement, ces deux éléments ne participent pas à la disposition en boîtes flexibles, car cette disposition s'applique uniquement aux éléments fils **directs** du conteneur flexible.

En ajoutant `display: contents` à l'élément flexible qui contient deux éléments fils, on peut voir que l'élément disparaît de la disposition et permet à ses deux éléments fils d'agir comme des éléments flexibles. Vous pouvez essayer de retirer la ligne avec `display: contents` afin que l'élément parent « revienne ».

On notera que cela ne retire que la boîte de la disposition. Les éléments fils au deuxième niveau ne deviennent pas des éléments fils directs pour d'autres notions. On peut voir dans l'exemple qu'on utilise un sélecteur sur les éléments fils directs pour gérer l'arrière-plan et les bordures : ces styles n'ont pas été appliqués aux éléments fils de deuxième rang. Ces éléments ont été disposés comme des éléments flexibles, mais ils ne récupèrent pas la mise en forme des éléments fils directs.

> **Attention :** Utiliser `display: contents` entraînera la suppression de l'élément dans l'arbre d'accessibilité et les lecteurs d'écran ne pourront pas en voir le contenu (comme si on avait utilisé `display: none`). La valeur `contents` doit uniquement être utilisée pour les éléments de présentation (et pas de contenu).

En retirant la boîte de l'élément parent, on ne peut pas utiliser cette boîte pour, par exemple, ajouter une couleur d'arrière-plan commune aux éléments fils imbriqués. Si on retire `display: contents` dans l'exemple, on peut voir que l'arrière-plan orange rattaché à l'élément disparaît avec la boîte.

{{EmbedGHLiveSample("css-examples/flexbox/relationship/display-contents.html", '100%', 650)}}

La prise en charge de `display:contents` est actuellement limitée parmi les différents navigateurs et cette fonctionnalité est nécessaire au bon fonctionnement de cette démonstration. Firefox prend en charge `display: contents` et la gestion de cette valeur est en cours d'implémentation dans Chrome. Lorsque cette fonctionnalité sera plus largement disponible, elle sera très utile lorsqu'on souhaitera utiliser une structure à des fins sémantiques mais sans, pour autant, afficher les boîtes générées par défaut.
