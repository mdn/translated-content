---
title: Handling different text directions
slug: Learn/CSS/Building_blocks/Handling_different_text_directions
translation_of: Learn/CSS/Building_blocks/Handling_different_text_directions
original_slug: Apprendre/CSS/Building_blocks/Handling_different_text_directions
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

Beaucoup des propriétés et des valeurs que nous avons rencontrées jusqu'ici dans notre apprentissage du CSS ont été associées aux dimensions physiques de notre écran. Nous créons des bordures en haut, à droite, en bas et à gauche d'une box, par exemple. Ces dimensions physiques s'accordent très bien au contenu qui est visionné horizontalement, et par défaut le web a tendance à mieux supporter les langues qui se lisent de gauche à droite (par exemple l'anglais ou le français) que celles qui se lisent de droite à gauche (comme l'arabe).

Ces dernières années cependant, le CSS a évolué pour supporter du contenu orienté dans différentes directions, comme la droite vers la gauche, mais également le haut vers le bas (comme le japonais) — Ces différentes directions sont appelées **modes d'écriture** (<i lang="en">writing modes</i> en anglais). En progressant dans votre apprentissage et en travaillant sur l'agencement, une compréhension des modes d'écriture vous sera très utile, donc nous allons vous les présenter maintenant.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Notions informatiques de base,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >avoir installé les logiciels de base</a
        >, notions élémentaires sur
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >la manipulation des fichiers</a
        >, notions élémentaires sur HTML (voir
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >l'introduction à HTML</a
        >), et une idée du fonctionnement de CSS (voir
        <a href="/fr/docs/Learn/CSS/First_steps">les premiers pas en CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Comprendre l'importance des modes d'écriture pour le CSS moderne.</td>
    </tr>
  </tbody>
</table>

## Que sont les modes d'écritures?

Un mode d'écriture en CSS fait référence au sens d'écriture du texte : horizontal ou vertical. La propriété [`writing-mode`](/fr/docs/Web/CSS/writing-mode) nous permet de passer d'un mode d'écriture à un autre. Vous n'avez pas besoin de travailler dans une langue qui utilise un mode d'écriture vertical pour vouloir l'utiliser — vous pourriez aussi changer le mode d'écriture de certaines parties de votre agencement dans un but créatif.

Dans l'exemple ci-dessous nous avons un titre affiché qui utilise `writing-mode: vertical-rl`. Le texte est maintenant affiché verticalement. Les textes verticaux sont communs dans le design graphique, et peuvent être un moyen pour ajouter un look plus intéressant à votre design web.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/simple-vertical.html", '100%', 800)}}

Les trois valeurs possibles pour la propriété [`writing-mode`](/fr/docs/Web/CSS/writing-mode) sont&nbsp;:

- `horizontal-tb`&nbsp;: Direction de bloc allant du haut vers le bas, les phrases sont écrites horizontalement.
- `vertical-rl`&nbsp;: Direction de bloc allant de droite à gauche, les phrases sont écrites verticalement.
- `vertical-lr`&nbsp;: Direction de bloc allant de gauche à droite, les phrases sont écrites verticalement.

La propriété `writing-mode` définit d'abord la direction selon laquelle les éléments de bloc sont affichés sur la page : de haut en bas, de droite à gauche ou de gauche à droite. Elle indique ensuite la direction selon laquelle le texte est écrit au sein des phrases.

## Modes d'écriture et disposition en bloc ou en ligne

Nous avons déjà abordé [la disposition en ligne et en bloc](/fr/docs/Learn/CSS/Building_blocks/The_box_model#block_and_inline_boxes) et le fait que certains éléments s'affichent en bloc et d'autres en ligne. Dans les descriptions précédentes, on voit que le caractère «&nbsp;de bloc&nbsp;» ou «&nbsp;en ligne&nbsp;» est lié au mode d'écriture du document et pas à l'écran, physique. Les blocs sont uniquement affichés de haut en bas sur la page si on utilise un mode d'écriture qui organise le texte horizontalement, comme celui utilisé pour le français.

Prenons un exemple pour éclaircir tout ça. Ici, on a deux boîtes qui contiennent un titre et un paragraphe. La première boîte utilise `writing-mode: horizontal-tb`, c'est-à-dire un mode d'écriture où le texte est écrit horizontalement et où le contenu s'organise du haut de la page vers le bas. La deuxième boîte utilise `writing-mode: vertical-rl`, c'est-à-dire un mode d'écriture où le texte est écrit verticalement et où le contenu va de droite à gauche.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/block-inline.html", '100%', 1200)}}

Lorsqu'on change de mode d'écriture, on change la direction utilisée pour l'axe de bloc et celle pour l'axe en ligne. Avec un mode d'écriture `horizontal-tb`, la direction de bloc va de haut en bas avec un mode d'écriture `vertical-rl`, la direction de bloc va de droite à gauche. Ainsi, la **dimension de bloc** correspond toujours à la direction selon laquelle les blocs sont affichés sur la page pour le mode d'écriture utilisé. La **dimension en ligne** correspond toujours à la direction selon laquelle les phrases sont écrites.

Ce schéma illustre les deux dimensions pour un mode d'écriture horizontal.

![Illustration de l'axe de bloc et de l'axe en ligne pour un mode d'écriture horizontal.](horizontal-tb.png)

Ce schéma illustre les deux dimensions pour un mode d'écriture vertical.

![Illustration de l'axe de bloc et de l'axe en ligne pour un mode d'écriture vertical.](vertical.png)

Lorsqu'on commence à travailler sur des dispositions CSS, notamment avec les méthodes de disposition récentes, les notions de bloc et d'en ligne se révèlent cruciales. Nous y reviendrons par la suite.

### Direction

En plus des modes d'écriture, il existe également la direction du texte. Comme mentionné avant, certaines langues comme l'arabe sont écrites horizontalement mais de droite à gauche. Il ne s'agit probablement pas là d'un aspect qui sera utilisé à des fins artistiques (si on souhaite aligner quelque chose à droite, il existe d'autres façons de faire) mais il est important de comprendre que cela fait partie de la nature de CSS. Le Web ne concerne pas uniquement les langues écrites de gauches à droite&nbsp;!

Étant donné que les modes d'écritures et les directions du texte peuvent varier, les nouvelles méthodes de disposition CSS ne font pas référence à la gauche, la droite, le haut ou le bas. À la place, elles utilisent les notions de _début_ et de _fin_, combinées aux notions bloc et en ligne. Ne vous souciez pas trop de ça pour le moment, mais gardez ces idées en tête lorsque vous verrez ces notions pour les méthodes de disposition, cela vous sera utile pour une bonne compréhension de CSS.

## Propriétés et valeurs logiques

Nous abordons maintenant les modes d'écriture et la direction du texte maintenant, car les propriétés que nous avons vues jusqu'à présent étaient plutôt liées aux dimensions physiques de l'écran et à un mode d'écriture horizontal.

Reprenons nos deux boîtes&nbsp;: celle avec le mode d'écriture `horizontal-tb` et celle avec le mode d'écriture `vertical-rl`. Pour ces deux boîtes, on a défini [`width`](/fr/docs/Web/CSS/width). Pour la boîte avec le mode d'écriture vertical, cela provoque un dépassement du texte.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/width.html", '100%', 1200)}}

Ce qu'on veut plus probablement dans ce scénario, c'est de passer de la largeur à la hauteur selon le mode d'écriture&nbsp;: quand on utilise un mode d'écriture vertical, on souhaite que la boîte soit redimensionnée selon l'axe de bloc, comme pour le mode horizontal.

Pour faciliter cela, CSS est désormais doté d'un ensemble de propriétés correspondantes. Dans l'ensemble, ces propriétés remplacent les propriétés physiques comme `width` ou `height` par des versions **logiques** ou **relatives au flux**.

La propriété logique qui correspond à `width` lorsqu'on utilise un mode d'écriture horizontal est appelée [`inline-size`](/fr/docs/Web/CSS/inline-size)&nbsp;: elle fait référence à la dimension selon l'axe en ligne. La propriété correspondant à `height` est quant à elle intitulée [`block-size`](/fr/docs/Web/CSS/block-size) et représente la taille selon la dimension de bloc. Vous pouvez observer leur fonctionnement dans l'exemple qui suit où nous avons remplacé `width` par `inline-size`.

{{EmbedGHLiveSample("css-examples/learn/writing-modes/inline-size.html", '100%', 950)}}

### Propriétés logiques pour les marges, bordures et remplissages

Dans les deux précédentes leçons, nous avons abordé le modèle de boîte CSS et les bordures. Pour les propriétés qui régissent les marges, bordures et le remplissage, vous verrez de nombreuses propriétés physiques comme [`margin-top`](/fr/docs/Web/CSS/margin-top), [`padding-left`](/fr/docs/Web/CSS/padding-left), et [`border-bottom`](/fr/docs/Web/CSS/border-bottom). À l'instar de la hauteur et de la largeur, ces propriétés disposent de propriétés logiques équivalentes.

La propriété physique `margin-top` correspond à la propriété logique [`margin-block-start`](/fr/docs/Web/CSS/margin-block-start) pour un mode d'écriture horizontal. Cette propriété logique fera toujours référence à la marge située au début de la dimension de bloc.

La propriété physique [`padding-left`](/fr/docs/Web/CSS/padding-left) trouve son équivalent avec [`padding-inline-start`](/fr/docs/Web/CSS/padding-inline-start), le remplissage (<i lang="en">padding</i>) appliqué au début de la direction en ligne. Cela correspond à l'endroit où les phrases commencent pour le mode d'écriture courant. La propriété [`border-bottom`](/fr/docs/Web/CSS/border-bottom) a quant à elle l'équivalent [`border-block-end`](/fr/docs/Web/CSS/border-block-end) qui représente la bordure sur à la fin de la dimension de bloc.

Vous pouvez voir une comparaison entre les propriétés physiques et logiques ci-après.

**Si vous changez le mode d'écriture des boîtes en modifiant la valeur de `writing-mode` sur le sélecteur `.box` afin de la passer à `vertical-rl`, vous pourrez voir que les propriétés physiques restent liées aux directions physiques tandis que les propriétés logiques s'adaptent en fonction du mode d'écriture.**

**Vous pouvez également voir que [`<h2>`](/fr/docs/Web/HTML/Element/Heading_Elements) a une bordure avec `border-bottom`. Pouvez-vous adapter le code afin que la bordure sous le texte suive cette direction, quel que soit le mode d'écriture&nbsp;?**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/logical-mbp.html", '100%', 1200)}}

Il existe de nombreuses propriétés détaillées pour gérer les différents aspects des bordures, vous pouvez voir l'ensemble des correspondances sur la page MDN des [propriétés et valeurs logiques](/fr/docs/Web/CSS/CSS_Logical_Properties).

### Valeurs logiques

Jusqu'à présent, nous avons étudié les noms des propriétés logiques. Il existe également des propriétés dont les valeurs sont caractérisées physiquement comme `top`, `right`, `bottom`, et `left`. Ces valeurs disposent également d'équivalences logiques&nbsp;: `block-start`, `inline-end`, `block-end`, et `inline-start`.

Ainsi, on peut faire flotter une image à gauche pour que le texte soit écrit autour de l'image. Dans l'exemple qui suit, vous pouvez remplacer `left` avec `inline-start`.

**Modifiez le mode d'écriture de cet exemple afin de le passer à `vertical-rl` pour voir ce qui se produit sur l'image. Modifiez `inline-start` à `inline-end` pour changer l'emplacement du flottement.**

{{EmbedGHLiveSample("css-examples/learn/writing-modes/float.html", '100%', 850)}}

Ici, on utilise aussi les valeurs logiques pour les marges afin de s'assurer que les marges sont correctement positionnées, quel que soit le mode d'écriture.

> **Note :** Actuellement, seul Firefox prend en charge les valeurs relatives de flux pour `float`. Si vous utilisez **Google Chrome** ou **Microsoft Edge**, vous obtiendrez vraisemblablement un résultat où l'image ne flotte pas.

### Faut-il utiliser les propriétés physiques ou logiques&nbsp;?

Les propriétés logiques et les valeurs correspondantes sont plus récentes que leurs équivalents physiques et l'implémentation de ces premières est donc également plus récente. Vous pouvez consulter la page de chaque propriété sur MDN pour vérifier le tableau de compatibilité des navigateurs. Si vous n'utilisez pas plusieurs modes d'écriture, vous pourrez préférer les versions physiques. Toutefois, on s'attend à terme que les personnes utilisent les versions logiques dans la majorité des cas étant donné leur pertinence pour certaines méthodes de dispositions comme les grilles CSS ou <i lang="en">flexbox</i>.

## Testez vos compétences&nbsp;!

Nous avons abordé de nombreux concepts dans cet article, mais avez-vous retenu les informations fondamentales ? Vous pourrez trouver différents tests sur le sujet pour vérifier que vous avez assimilé les bonnes informations&nbsp;: voir [Testez vos compétences&nbsp;: les modes d'écriture](/fr/docs/Learn/CSS/Building_blocks/Writing_Modes_Tasks).

## Résumé

Les concepts expliqués ici revêtent une importance croissante en CSS. Comprendre les directions en ligne et de bloc, ainsi que la façon dont le flux de texte change selon le mode d'écriture vous sera désormais très utile. Vous aurez une meilleure compréhension de CSS, même si vous n'utilisez qu'un seul mode d'écriture horizontal.

Dans le prochain module, nous verrons comment les dépassements sont gérés en CSS.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks/Overflowing_content", "Learn/CSS/Building_blocks")}}

## Dans ce module

1.  [Cascade et héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [Sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Sélecteurs de type, de classe et d'ID](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Sélecteurs d'attributs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinateurs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  [Le modèle de boîte](/fr/docs/Learn/CSS/Building_blocks/The_box_model)
4.  [Arrière-plans et bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Gestion de différentes directions de texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Débordements de contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Valeurs et unités CSS](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Définir la taille des éléments en CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, médias et éléments de formulaire](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Mise en page de tableaux](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Débogage de CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organiser votre CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
