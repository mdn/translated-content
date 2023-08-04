---
title: Rétrocompatibilité des boîtes flexibles (flexbox)
slug: Web/CSS/CSS_flexible_box_layout/Backwards_compatibility_of_flexbox
---

{{CSSRef}}

Les boîtes flexibles (<i lang="en">flexbox</i>) sont largement prises en charge par les navigateurs modernes. Toutefois, quelques problèmes peuvent survenir. Dans ce guide, nous verrons précisément quelle est la prise en charge des boîtes flexibles dans les navigateurs. Nous verrons les problèmes éventuels ainsi que les ressources et méthodes afin de créer des méthodes de contournement ou des alternatives.

## L'histoire des boîtes flexibles

Comme toute spécification CSS, la spécification <i lang="en">Flexbox</i> a vu de nombreuses modifications avant d'atteindre le statut de <i lang="en">Candidate Recommendation</i> dont elle dispose aujourd'hui. Dans cet état actuel, il ne devrait pas y avoir de modification majeure dans la spécification, mais cette stabilité n'a pas toujours existé par le passé.

Les boîtes flexibles ont été implémentées de façon expérimentale dans plusieurs navigateurs. À cette époque, créer une implémentation expérimentale consistait à utiliser un préfixe spécifique. Ces préfixes devaient permettre aux implémentations de la spécification d'être testées et manipulées par les équipes de développement des navigateurs et par les développeuses et développeurs web, sans qu'il y ait de conflit avec les autres implémentations. On ne devait pas utiliser d'implémentation expérimentale pour du code de production. Toutefois, les préfixes ont fini par être utilisés en production et les modifications apportées à la spécification expérimentale nécessitaient une réactivité des développeuses et développeurs web pour maintenir leurs sites.

[En 2009](https://www.w3.org/TR/2009/WD-css3-flexbox-20090723/), la spécification était plutôt différente. Pour créer un conteneur flexible, il fallait utiliser `display: box` et on disposait ensuite de différentes propriétés `box-*` qui permettaient d'obtenir des résultats semblables à ceux qu'offrent les boîtes flexibles actuelles.

Vint ensuite [une mise à jour de la spécification](https://www.w3.org/TR/2012/WD-css3-flexbox-20120322/) pour mettre à jour la syntaxe `display: flexbox`. Là encore, ces valeurs étaient préfixées.

Enfin, la spécification a été mise à jour pour définir `display: flex` comme façon de créer un conteneur flexible. La prise en charge des navigateurs sur la version à jour de la spécification est excellent à partir de ce moment.

Quelques anciens articles font référence à d'anciennes versions de la spécification. Ceux-ci sont facilement identifiables en raison des modifications concernant la création d'un conteneur flexible. Si vous lisez des règles telles que `display: box` ou `display: flexbox`, vous pouvez en déduire qu'il s'agit d'informations obsolètes.

## État de la compatibilité des navigateurs

La prise en charge des navigateurs pour les boîtes flexibles est excellente et la grande partie des navigateurs n'a pas besoin de préfixe. Safari a été le dernier des principaux navigateurs à retirer les préfixes avec la sortie de Safari 9 en 2015. Les deux navigateurs pour lesquels il est nécessaire de faire attention à la compatibilité sont&nbsp;:

- Internet Explorer 10 qui implémentait la version `display: flexbox` avec le préfixe `-ms-`.
- UC Browser qui prend en charge la version de 2009 avec `display: box` et avec le préfixe `-webkit-`.

On notera qu'Internet Explorer 11 prend bien en charge la spécification actuelle avec `display: flex` mais que de nombreux bugs sont présents dans cette implémentation.

## Problèmes fréquents

La plupart des problèmes relatifs aux boîtes flexibles sont liés aux modifications de la spécification lors de son développement et au fait que de nombreuses personnes ont essayé d'utiliser des implémentations expérimentales en production. Si vous souhaitez garantir une rétrocompatibilité avec certaines anciennes versions de navigateurs et notamment IE10 et IE11, le site [Flexbugs](https://github.com/philipwalton/flexbugs) représente une ressource précieuse. Vous pourrez voir que de nombreux bugs sont présents pour d'anciennes versions des navigateurs et sont désormais corrigés pour les versions actuelles. Chacun de ces bugs possède une méthode de contournement associée, ce qui peut faire gagner un temps précieux.

Si vous souhaitez inclure de très anciens navigateurs prenant en charge les boîtes flexibles, il vous faudra inclure les préfixes éditeurs dans votre feuille CSS, en plus de la version non-préfixée. Cela devient de moins en moins nécessaire vue l'étendue de la compatibilité actuelle.

```css
.wrapper {
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
}
```

[<i lang="en">Autoprefixer Online</i>](https://autoprefixer.github.io/) est un outil utile pour déterminer quels préfixes sont recommandés selon les versions des navigateurs qu'on souhaite prendre en charge. Vous pouvez également consulter [<i lang="en">Can I Use</i>](https://caniuse.com/#feat=flexbox) ou les tableaux de compatibilité en bas des pages de référence MDN pour savoir quand les préfixes ont été retirés des navigateurs.

## Techniques de recours

La mise en place des boîtes flexibles dans un document est effectuée grâce à la propriété [`display`](/fr/docs/Web/CSS/display). Lorsqu'on souhaite prendre en charge de très anciens navigateurs qui ne prennent pas du tout en charge les boîtes flexibles, des méthodes alternatives peuvent être construites en surchargeant une méthode de disposition par une autre. La spécification définit ce qui se produit si on utilise une autre méthode de disposition sur un élément qui devient ensuite un élément flexible.

### Éléments flottants

> "`float` et `clear` ne créent pas de flottement ou de dégagement pour les éléments flexibles et ne les retirent pas du flux." - [3. Conteneurs flexibles](https://www.w3.org/TR/css-flexbox-1/#flex-containers)

Dans l'exemple qui suit, on a deux blocs flottants et on applique ensuite `display: flex` sur le conteneur. Les éléments sont alors des éléments flexibles ce qui signifie qu'ils sont étirés sur des hauteurs égales. Tout comportement associé au flottement n'aura pas lieu.

Pour tester le comportement alternatif, vous pouvez retirer `display: flex` du conteneur englobant.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/float.html", '100%', 550)}}

### `display: inline-block`

Lorsqu'un élément disposé avec `inline-block` devient un élément flexible, cet élément devient analogue à un bloc et le comportement de `display: inline-block` qui permet de conserver les espaces blancs entre les éléments ne s'applique plus.

Vous pouvez retirer la règle avec `display: flex` dans l'exemple qui suit pour voir le comportement alternatif. Vous verrez de l'espace ajouté entre les éléments, car c'est ce que préfère `display: inline-block`.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/inline-block.html", '100%', 550)}}

### `display: table-`

Les propriétés CSS relatives aux dispositions en tableaux s'avèrent potentiellement très utiles comme méthode de recours, car elles permettent d'obtenir des organisations de contenu analogues avec des colonnes sur toute la hauteur, du centrage vertical et car elles fonctionnent jusqu'à Internet Explorer 8.

Si vous utilisez `display: table-cell` sur un élément HTML, cet élément récupèrera la mise en forme d'une cellule de tableau HTML. Pour celles-ci, CSS crée des boîtes anonymes qui représentent ces éléments et il n'est pas nécessaire d'envelopper chaque élément dans un conteneur pour représenter une ligne puis dans un second qui représente le tableau. Il n'est pas possible de mettre en forme ces boîtes anonymes, celles-ci servent uniquement à corriger la structure.

Si vous déclarez ensuite `display: flex` sur l'élément parent, ces boîtes anonymes ne sont pas créées et l'élément redevient un enfant direct qui peut devenir un élément flexible, perdant tout aspect relatif au tableau.

> "Note&nbsp;: certaines valeurs de `display` déclenchent normalement la création de boîtes anonymes autour de la boîte originale. Si une telle boîte est un élément flexible, cet élément devient un bloc puis la création des boîtes anonymes n'a pas lieu. Ainsi, deux éléments flexibles adjacents avec `display: table-cell` deviendront deux éléments flexibles distincts avec `display: block` plutôt que d'être enveloppés au sein d'un même tableau anonyme." - [4. Éléments flexibles](https://www.w3.org/TR/css-flexbox-1/#flex-items)

{{EmbedGHLiveSample("css-examples/flexbox/browsers/table-cell.html", '100%', 550)}}

### La propriété `vertical-align`

L'exemple qui suit illustre l'utilisation de la propriété [`vertical-align`](/fr/docs/Web/CSS/vertical-align) associée au mode `display: inline-block`. Les deux modes `display: table-cell` et `display: inline-block` permettent d'utiliser cette propriété. La propriété `vertical-align` permet d'opérer un alignement vertical avant l'application des boîtes flexibles. Cette propriété est ignorée avec les boîtes flexibles et elle peut donc être utilisée avec `display: table-cell` ou `display: inline-block` comme méthode d'alignement alternative aux propriétés d'alignement des boîtes flexibles.

{{EmbedGHLiveSample("css-examples/flexbox/browsers/vertical-align.html", '100%', 550)}}

## `@supports` et <i lang="en">flexbox</i>

Il est possible d'utiliser [`@supports`](/fr/docs/Web/CSS/@supports) afin de détecter la prise en charge des boîtes flexibles&nbsp;:

```css
@supports (display: flex) {
  /* code utilisé pour les navigateurs qui
     prennent en charge cette fonctionnalité */
}
```

On notera qu'Internet Explorer 11 ne prend pas en charge les requêtes de fonctionnalité mais prend bien en charge les boîtes flexibles. Si vous choisissez de considérer l'implémentation d'IE11 comme étant trop erronée et que vous souhaitez que ce navigateur utilise votre code de recours, vous pouvez alors utiliser les requêtes de fonctionnalité pour ne servir le code <i lang="en">flexbox</i> qu'aux navigateurs qui disposent d'une prise en charge suffisante. Pour rappel, si on souhaite inclure les versions des navigateurs qui utilisaient des préfixes spécifiques, on devra inclure la version préfixée dans la requête de fonctionnalité. La requête suivant inclura par exemple UC Browser qui prend en charge les requêtes de fonctionnalités et une ancienne syntaxe, préfixée, pour les boîtes flexibles&nbsp;:

```css
@supports (display: flex) or (display: -webkit-box) {
  /* code pour les navigateurs qui
     prennent en charge cette fonctionnalité */
}
```

Pour plus d'informations sur les requêtes de fonctionnalités, vous pouvez lire [<i lang="en">Using Feature Queries in CSS (en anglais)</i>](https://hacks.mozilla.org/2016/08/using-feature-queries-in-css/) sur le blog Hacks de Mozilla.

## Conclusion

Bien que nous ayons vu ici certains problèmes potentiels et méthodes alternatives, les boîtes flexibles peuvent tout à fait être utilisées en production et de façon généralisée. Ce guide vous sera utile si vous rencontrez un problème particulier ou qu'il vous faut prendre en charge de plus vieux navigateurs.
