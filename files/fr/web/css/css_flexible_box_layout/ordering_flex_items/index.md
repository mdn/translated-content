---
title: Ordonner les éléments flexibles
slug: Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
tags:
  - Accessibilité
  - Boîtes flexibles
  - CSS
  - Guide
  - Intermediate
  - a11y
  - flexbox
translation_of: Web/CSS/CSS_Flexible_Box_Layout/Ordering_Flex_Items
original_slug: Web/CSS/CSS_Flexible_Box_Layout/Ordonner_éléments_flexibles
---
{{CSSRef}}

Les nouvelles méthodes de disposition telles que les boîtes flexibles (_flexbox_) et la grille CSS (_CSS Grid_) apportent la possibilité de contrôler l'ordre du contenu. Dans cet article, nous verrons comment changer l'ordre visuel du contenu grâce aux boîtes flexibles. Nous examinerons également les conséquences de cette réorganisation du point de vue de l'accessibilité.

## Inverser l'affichage des éléments

La propriété {{cssxref("flex-direction")}} peut être utilisée avec quatre valeurs :

- `row`
- `column`
- `row-reverse`
- `column-reverse`

Les deux premières valeurs permettent de conserver l'ordre des éléments tels qu'ils apparaissent dans le document source et de les afficher les uns à la suite des autres à partir de la ligne du début.

![Les objets sont affichés sur une ligne horizontale qui commence à gauche.](basics1.png)

![Les objets sont affichés sur une colonne qui commence en haut.](align10.png)

Les deux valeurs suivantes inversent l'ordre des éléments en échangeant les lignes de début et de fin.

![Les éléments sont affichés dans l'ordre inverse et commencent à droite.](align9.png)

![Les éléments sont affichés en colonne et dans l'ordre inverse, ils commencent par le bas.](align11.png)

Rappelons ici que les lignes de début et de fin sont liées aux modes d'écritures. Les exemples en lignes ci-avant illustrent comment `row` et `row-reverse` fonctionnent dans une langue qui s'écrit de gauche à droite (le français par exemple). Si on travaille avec une langue écrite de droite à gauche (l'arabe par exemple), `row` correspondrait au côté droit et  `row-reverse` au côté gauche.

![Des conteneurs flexibles avec des lettres arabes illustrant comment le contenu commence à droite normalement et commence à gauche lorsqu'on utilise row-reverse.](order-rtl.png)

Cette méthode peut donc sembler efficace pour afficher des éléments dans un ordre inversé. Toutefois, il faut garder à l'esprit que seul l'_affichage_ est inversé. Sur ce sujet, la spécification explique :

> “Note : les possibilités de réorganisation de la disposition flexible modifient uniquement et intentionnellement le rendu visuel. L'ordre de lecture et l'ordre de navigation restent basés sur l'ordre des éléments dans le document source. Cela permet aux auteurs de manipuler la présentation visuelle toute en conservant intact l'ordre de la source pour les agents utilisateurs qui n'utilisent pas CSS et pour les modèles de navigation linéaires comme la navigation vocale ou séquentielle.” - [Ordre et Orientation](https://www.w3.org/TR/css-flexbox-1/#flow-order)

Si les éléments présentés étaient des liens ou d'autres éléments sur lequel un utilisateur pourrait naviguer grâce aux tabulations, l'ordre de la navigation au clavier serait celui des éléments dans le document source et ne correspondrait alors pas à l'ordre visuel.

Si vous utilisez une valeur qui inverse cet affichage ou une méthode qui réordonne vos éléments, demandez-vous s'il ne faut pas modifier l'ordre logique des éléments dans le document source. Par la suite, la spécification émet un avertissement : ces valeurs de réorganisation ne doivent pas être utilisées comme palliatifs à un problème dans l'ordre du document source :

> “Les auteurs ne doivent pas utiliser `order` ou les valeurs _-reverse_ de `flex-flow`/`flex-direction` comme remplacement d'un ordre correct dans le document source car cela peut nuire à l'accessibilité du document._”_

> **Note :** Pendant plusieurs années, Firefox possédait un bug avec lequel il essayait de suivre l'ordre visuel plutôt que l'ordre de la source, à la différence des autres navigateurs. Ce bug a été corrigé. Il faut toujours considérer l'ordre des éléments dans le document source comme étant l'ordre logique, tous les agents utilisateurs modernes respectent la spécification à cet égard.

Dans l'exemple qui suit, nous avons ajouté une mise en forme sur le focus afin que vous puissiez voir quel lien est actif lorsque vous naviguez au clavier. Si vous modifier la valeur de `flex-direction`, vous pouvez voir que la navigation au clavier continue de suivre l'ordre dans lequel les éléments sont écrits dans le document source.

{{EmbedGHLiveSample("css-examples/flexbox/order/order.html", '100%', 500)}}

De la même façon, changer la valeur de `flex-direction` ne modifie pas l'ordre avec lequel on navigue parmi les éléments. Cela ne modifie pas non plus l'ordre dans lequel les éléments sont rendus à l'écran. Il s'agit uniquement d'une inversion visuelle.

## La propriété `order`

En plus de cette inversion, il est également possible de cibler des éléments en particulier et de modifier leur ordre visuel grâce à la propriété {{cssxref("order")}}.

La propriété `order` permet de disposer les éléments au sein de _groupes ordinaux_. Cela signifie que chaque élément reçoit un entier qui représente le numéro d'un groupe. Les éléments sont ensuite placés visuellement dans l'ordre qui correspond à cet entier, les éléments avec les numéros les plus petits étant placés en premiers. Si plusieurs éléments possèdent le même coefficient, les éléments de ce groupe sont alors ordonnés en suivant l'ordre du document source entre eux.

Dans l'exemple qui suit, on dispose de 5 objets flexibles et on affecte les valeurs `order` comme suit :

- Premier élément selon la source : `order: 2`
- Deuxième élément selon la source : `order: 3`
- Troisième élément selon la source : `order: 1`
- Quatrième élément selon la source :`order: 3`
- Cinquième élément selon la source :`order: 1`

Les éléments seront affichés sur la page dans l'ordre suivant :

- Troisième élément selon la source&nbsp;: `order: 1`
- Cinquième élément selon la source : `order: 1`
- Premier élément selon la source&nbsp;: `order: 2`
- Deuxième élément selon la source : `order: 3`
- Quatrième élément selon la source : `order: 3`

![Les éléments contiennent un nombre qui illustre leur ordre selon la source et on peut voir que leur ordre visuel a été réarrangé.](order-property.png)

Vous pouvez manipuler les valeurs dans l'exemple qui suit afin de voir comment l'ordre est modifié. Essayez également de modifier la valeur de `flex-direction` pour utiliser `row-reverse` — la ligne de début est inversée et l'ordre des éléments commence à partir du côté opposé.

{{EmbedGHLiveSample("css-examples/flexbox/order/flex-direction.html", '100%', 440)}}

Par défaut, la valeur de la propriété `order` est `0` pour les éléments flexibles. Aussi, si on utilise un coefficient supérieur à 0, les éléments concernés seront affichés après les éléments pour lesquels aucune valeur explicite n'a été fournie pour `order`.

On peut également utiliser des valeurs négatives. Cela est plutôt pratique si on souhaite afficher un élément en premier sans avoir à indiquer de valeurs pour les autres éléments : il suffira d'affecter l'ordre `-1` au premier élément. Cette valeur étant inférieure à 0, l'élément sera toujours affiché en premier.

Dans l'exemple qui suit, les éléments sont disposés avec les boîtes flexibles. En modifiant l'élément qui possède la classe `active` dans le code HTML, vous pouvez modifier l'élément qui apparaît en premier et qui prend alors toute la largeur en haut, les autres éléments étant affichés en dessous.

{{EmbedGHLiveSample("css-examples/flexbox/order/negative-order.html", '100%', 520)}}

Les éléments sont affichés dans ce que la spécification intitule _un ordre modifié à partir de l'ordre du document (en anglais "order-modified document order"_). La valeur de la propriété `order` est prise en compte avant que les éléments soient affichés.

L'ordre modifie également l'ordre de rendu des éléments à l'écran. Les éléments pour lesquels `order` est plus petit seront affichés en premier et ceux avec un coefficient d'ordre plus élevé seront affichés ensuite.

## La propriété `order` et l'accessibilité

La propriété `order` aura exactement les mêmes conséquences qu'une modification de `flex-direction` sur l'accessibilité. Utiliser `order` modifie l'ordre dans lequel les éléments sont affichés à l'écran et l'ordre dans lequel ils sont présentés visuellement. Cela ne modifie pas l'ordre de navigation. Aussi, si un utilisateur navigue grâce aux tabulations entre les éléments, cette disposition peut prêter à confusion.

En utilisant la tabulation pour naviguer au sein des exemples de cette page, vous pouvez voir comment l'ordre peut créer une expérience pour le moins étrange de navigation si on n'utilise pas de pointeur (souris, stylet, interface tactile). Pour approfondir cette notion et les problèmes qu'un déphasage entre l'ordre visuel et logique peut causer, vous pouvez consulter les ressources suivantes :

- [Une déconnexion entre les boîtes flexibles et la navigation au clavier (en anglais)](https://tink.uk/flexbox-the-keyboard-navigation-disconnect/)
- [L'ordre de la source HTML vs l'ordre d'affichage CSS (en anglais)](https://adrianroselli.com/2015/10/html-source-order-vs-css-display-order.html)
- [Le conflit entre l'ordre _responsive_ et le focus clavier (en anglais)](https://alastairc.ac/2017/06/the-responsive-order-conflict)

## Cas d'utilisation pour `order`

Il existe certains cas où l'ordre logique (correspondant à l'ordre de lecture) est distinct de l'ordre visuel. Dans ces cas, utiliser la propriété `order` à bon escient permet d'implémenter certains motifs récurrents.

Prenons comme exemple une disposition avec des cartes dont chacune contient une nouvelle. Le titre de la nouvelle est l'élément qui doit être mis en avant et celui sur lequel l'utilisateur doit arriver s'il navigue au clavier à la recherche d'un contenu à lire. Chaque carte possède également une date de façon à obtenir un _design_ comme celui-ci.

![Un composant avec une date, un titre puis un contenu.](order-card.png)

Visuellement, la date apparaît au-dessus du titre. Toutefois, si la carte était lue par un lecteur d'écran, on préfèrerait que le titre soit annoncé en premier puis que soit ensuite lue la date de publication. Pour ce faire, on peut utiliser la propriété `order`.

Dans cet exemple, la carte sera le conteneur flexible et `flex-direction` aura la valeur `column`. Pour la date, on affectera un ordre avec la propriété `order` qui vaut `-1` qui permettra de la placer au-dessus du titre.

{{EmbedGHLiveSample("css-examples/flexbox/order/usecase-order.html", '100%', 730)}}

Ces légères adaptations sont caractéristiques des cas où la propriété `order` se révèle pertinente. L'ordre logique doit suivre l'ordre de lecture et de navigation au clavier dans le document. Il doit maintenir la structure de la façon la plus accessible. `order` peut alors être ensuite utilisé pour opérer des ajustements visuels. Lorsque vous réordonnez des éléments, assurez-vous que cela n'a pas d'impact sur les éléments parmi lesquels on peut naviguer au clavier. De façon générale, lorsque vous utilisez de nouvelles méthodes de disposition, assurez-vous que la phase de test via le navigateur inclut également des tests de navigation au clavier (sans souris ni écran tactile). Vous pourrez alors rapidement constater si vos choix de développement rendent certains contenus difficiles d'accès.
