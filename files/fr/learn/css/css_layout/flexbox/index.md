---
title: Flexbox
slug: Learn/CSS/CSS_layout/Flexbox
translation_of: Learn/CSS/CSS_layout/Flexbox
original_slug: Apprendre/CSS/CSS_layout/Flexbox
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

[Flexbox](/fr/docs/Web/CSS/CSS_Flexible_Box_Layout) est une méthode de mise en page selon un axe principal, permettant de disposer des éléments en ligne ou en colonne. Les éléments se dilatent ou se rétractent pour occuper l'espace disponible. Cet article en explique tous les fondamentaux.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les fondamentaux du HTML (étudiez
        <a href="/fr/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >) et avoir une idée de la manière dont la CSS fonctionne (étudiez
        <a href="/fr/Learn/CSS/First_steps">Introduction aux CSS</a
        >).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre à utiliser le système Flexbox pour créer des mises en page
        web.
      </td>
    </tr>
  </tbody>
</table>

## Pourquoi Flexbox&nbsp;?

Pendant longtemps, les seuls outils de mise en page CSS fiables et compatibles avec les navigateurs, étaient les propriétés concernant les [flotteurs (boîtes flottantes)](/fr/docs/Learn/CSS/CSS_layout/Floats) et le [positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning). Ces outils sont bien et fonctionnent, mais restent à certains égards plutôt limitatifs et frustrants.

Les simples exigences de mise en page suivantes sont difficiles sinon impossibles à réaliser de manière pratique et souple avec ces outils&nbsp;:

- Centrer verticalement un bloc de contenu dans son parent&nbsp;;
- Faire que tous les enfants d'un conteneur occupent tous une même quantité de hauteur/largeur disponible selon l'espace offert&nbsp;;
- Faire que toutes les colonnes dans une disposition multi‑colonnes aient la même hauteur même si leur quantité de contenu diffère.

Comme vous le verrez dans les paragraphes suivants, Flexbox facilite considérablement les tâches de mise en page. Approfondissons un peu&nbsp;!

## Voici un exemple simple

Dans cet article, nous allons commencer une série d'exercices pour vous faciliter la compréhension du fonctionnement de Flexbox. Pour commencer, faites une copie locale du premier fichier de démarrage — [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html) de notre dépôt GitHub. Chargez‑le dans un navigateur moderne (comme Firefox ou Chrome) et regardez le code dans votre éditeur. Vous pouvez le [voir en direct ici](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox0.html) aussi.

![Une image montrant le point de départ de ce didacticiel sur Flexbox](bih741v.png)

Qu'avons‑nous&nbsp;? Un élément [`<header>`](/fr/docs/Web/HTML/Element/header) avec un en‑tête de haut niveau à l'intérieur, et un élément [`<section>`](/fr/docs/Web/HTML/Element/section) contenant trois éléments [`<article>`](/fr/docs/Web/HTML/Element/article). Nous allons les utiliser pour créer une disposition vraiment classique sur trois colonnes.

## Détermination des éléments à disposer en boîtes flexibles

Pour commencer, sélectionnons les éléments devant être présentés sous forme de boîtes flexibles. Pour ce faire, donnons une valeur spéciale à la propriété  [`display`](/fr/docs/Web/CSS/display) du parent de ces éléments à disposer. Dans ce cas, comme cela concerne les éléments [`<article>`](/fr/docs/Web/HTML/Element/article), nous affectons la valeur `flex` à l'élément [`<section>`](/fr/docs/Web/HTML/Element/section) (qui devient un conteneur flex)&nbsp;:

```css
section {
  display: flex;
}
```

Voici le résultat&nbsp;:

![Échantillon d'utilisation de Flexbox](flexbox-example2.png)

Cette unique déclaration donne tout ce dont nous avons besoin — incroyable, non&nbsp;? Nous avons ainsi notre disposition en plusieurs colonnes de largeur égale et toutes de même hauteur. Ceci parce que les valeurs par défaut données aux éléments flex (les enfants du conteneur flex) sont configurés pour résoudre des problèmes courants tels celui-ci.

Récapitulons ce qui se passe ici&nbsp;: l'élément auquel nous avons affecté une valeur [`display`](/fr/docs/Web/CSS/display) de `flex` se comporte d'une manière d'un élément de bloc par rapport à sa façon d'interagir avec le reste de la page, tandis que les enfants se disposent comme des éléments flexibles. On en reparlera plus tard. À noter également que vous pouvez définir une valeur `inline-flex` pour [`display`](/fr/docs/Web/CSS/display) si vous voulez disposer des éléments en ligne sous forme de boîtes modulables.

## Aparté sur le modèle flex

Lorsque les éléments sont disposés en boîtes flexibles, ils sont disposés le long de deux axes&nbsp;:

![Terminologie pour les boîtes modulables](flex_terms.png)

- L'**axe principal (*main axis*)** est l'axe de la direction dans laquelle sont disposés les éléments flex (par exemple, horizontalement sur la page, ou verticalement de haut en bas de la page). Le début et la fin de cet axe sont appelés l'**origine principale (*main start*)** et la **fin principale (*main end*)**.
- L'**axe croisé (*cross axis*)** est l'axe perpendiculaire à l'axe principal, c'est-à-dire à la direction dans laquelle sont disposés les éléments flex. Le début et la fin de cet axe sont appelés le **début (*cross start*)** et la **fin (*cross end*)** de l'axe croisé.
- L'élément parent dont la propriété est `display: flex` ([`<section>`](/fr/docs/Web/HTML/Element/section) dans notre exemple) est appelé le **conteneur flex (*flex container*)**.
- Les éléments disposés en tant que boîtes flexibles à l'intérieur du conteneur flex sont appelés **éléments flex (*flex items*)** (les éléments [`<article>`](/fr/docs/Web/HTML/Element/article) dans notre exemple).

Gardez cette terminologie en tête en lisant les paragraphes suivants. Vous pouvez toujours vous y référer si vous avez un doute sur la signification des termes utilisés.

## Colonnes ou lignes&nbsp;?

Flexbox dispose de la propriété [`flex-direction`](/fr/docs/Web/CSS/flex-direction) pour indiquer la direction de l'axe principal (direction dans laquelle les enfants flexibles sont disposés). Cette propriété est égale par défaut à `row`&nbsp;: ils sont donc disposés en ligne, dans le sens de lecture de la langue par défaut du navigateur (de gauche à droite, dans le cas d'un navigateur français).

Ajoutez la déclaration suivante dans la règle CSS pour l'élément [`<section>`](/fr/docs/Web/HTML/Element/section)&nbsp;:

```css
flex-direction: column;
```

Cela dispose de nouveau les éléments en colonnes, comme c'était le cas avant l'ajout de la CSS. Avant de poursuivre, enlevez cette déclaration de l'exemple.

> **Note :** Vous pouvez aussi disposer les éléments flex dans la direction inverse avec les valeurs `row-reverse` et `column-reverse`. Expérimentez ces valeurs aussi&nbsp;!

## Enveloppement

Problème&nbsp;: quand votre structure est de largeur ou hauteur fixe, il arrive que les éléments flex débordent du conteneur et brisent cette structure. Voyez l'exemple [flexbox-wrap0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox-wrap0.html) et essayez-le [directement](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox-wrap0.html) (faites une copie locale de ce fichier maintenant si vous voulez suivre cet exemple)&nbsp;:

![Débordement des éléments modulables](flexbox-example3.png)

Ici, nous voyons que les enfants débordent du conteneur. Une façon d'y remédier est d'ajouter la déclaration suivante à votre règle pour [`<section>`](/fr/docs/Web/HTML/Element/section)&nbsp;:

```css
flex-wrap: wrap;
```

Ajoutez aussi la déclaration suivante à votre règle pour [`<article>`](/fr/docs/Web/HTML/Element/article)&nbsp;:

```css
flex: 200px;
```

Essayons&nbsp;; la disposition est bien meilleure avec ces ajouts&nbsp;:

![Conditionnement des éléments modulables](flexbox-example4.png)Nous avons maintenant plusieurs lignes — un nombre sensé d'enfants flexibles est placé sur chaque ligne, et le débordement est déplacé vers le bas sur une ligne supplémentaire. La déclaration `flex: 200px` pour les éléments `article` signifie que chacun aura au moins 200px de large ; nous discuterons de cette propriété plus en détail plus tard. Vous noterez aussi que chacun des enfants de la dernière rangée est plus large, de façon à ce que toute la rangée reste remplie.

Mais nous pouvons faire plus ici. Tout d'abord, essayez de changer la valeur de la propriété [`flex-direction`](/fr/docs/Web/CSS/flex-direction) en `row-reverse` — maintenant vous avez toujours la disposition sur plusieurs lignes, mais elles commencent dans l'angle opposé de la fenêtre du navigateur et se disposent à l'envers.

## Forme abrégée «&nbsp;flex-flow&nbsp;»

Notez maintenant qu'il y a une forme abrégée pour [`flex-direction`](/fr/docs/Web/CSS/flex-direction) et [`flex-wrap`](/fr/docs/Web/CSS/flex-wrap) — [`flex-flow`](/fr/docs/Web/CSS/flex-flow). Ainsi, par exemple, vous pouvez remplacer&nbsp;:

```css
flex-direction: row;
flex-wrap: wrap;
```

par&nbsp;:

```css
flex-flow: row wrap;
```

## Taille modulable des éléments flex

Revenons maintenant au premier exemple, et examinons comment nous pouvons contrôler la proportion d'éléments flexibles dans l'espace. Lancez votre copie locale de [flexbox0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox0.html) ou prenez une copie de [flexbox1.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flexbox1.html) comme nouveau point de départ ([voir en direct](https://mdn.github.io/learning-area/css/css-layout/flexbox/flexbox1.html)).

Ajoutez d'abord la règle ci-dessous en fin de la CSS&nbsp;:

```css
article {
  flex: 1;
}
```

Il s'agit d'une valeur de proportion, sans unité, définissant la quantité d'espace disponible que chaque élément flex prendra le long de l'axe principal. Dans ce cas, nous donnons à chaque élément [`<article>`](/fr/docs/Web/HTML/Element/article) une valeur de 1, ce qui signifie qu'ils prendront tous une portion égale de l'espace libre après le calcul du remplissage et de la marge. Cette valeur représente une proportion, c'est-à-dire que le fait de donner une valeur de 400 000 simultanément à tous les éléments flex aurait exactement le même effet.

Maintenant ajoutons cette règle en dessous de la précédente&nbsp;:

```css
article:nth-of-type(3) {
  flex: 2;
}
```

Maintenant, lorsque vous actualisez, vous voyez que le troisième [`<article>`](/fr/docs/Web/HTML/Element/article) occupe deux fois plus de largeur disponible que chacun des deux autres — il y a maintenant quatre unités de division disponibles au total (puisque 1&nbsp;+&nbsp;1&nbsp;+&nbsp;2&nbsp;=&nbsp;4). Les deux premiers éléments flexibles en occupent chacun un, soit 1/4 de l'espace disponible pour chacun. Le troisième remplit deux unités, soit 2/4 (la moitié) de l'espace disponible.

Vous pouvez également définir une valeur minimale de taille dans la valeur `flex`. Modifiez comme suit vos règles `article` existantes&nbsp;:

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 2 200px;
}
```

En gros, cela dit&nbsp;: «&nbsp;Chaque élément flex reçoit d'abord 200px de l'espace disponible. Ensuite, le reste de l'espace disponible est réparti selon les unités de proportion&nbsp;». Actualisez et vous devriez voir une différence dans la façon dont l'espace est réparti.

![Modulation de la largeur](flexbox-example1.png)

Le véritable intérêt de Flexbox apparaît dans sa souplesse et sa réactivité — si vous redimensionnez la fenêtre du navigateur ou ajoutez un autre élément [`<article>`](/fr/docs/Web/HTML/Element/article), la mise en page continue de fonctionner correctement.

## flex&nbsp;: forme abrégée vs forme longue

[`flex`](/fr/docs/Web/CSS/flex) est une forme abrégée de propriété qui peut servir à définir trois valeurs différentes&nbsp;:

- Une valeur de proportion sans unité, vue ci‑dessus. Elle peut être précisée seule avec la forme longue de la propriété [`flex-grow`](/fr/docs/Web/CSS/flex-grow)&nbsp;;
- Une deuxième valeur de proportion sans unité, [`flex-shrink`](/fr/docs/Web/CSS/flex-shrink), intervenant quand les éléments flex débordent du conteneur. Elle indique la quantité de dépassement à retirer de l'extension de chacun des éléments flex pour les empêcher de déborder du conteneur. Il s'agit d'une fonctionnalité avancée de Flexbox — nous n'en parlerons plus dans cet article&nbsp;;
- Une valeur de taille minimale, vue ci‑dessus. Elle peut aussi être précisée seule avec la forme longue de la propriété [`flex-basis`](/fr/docs/Web/CSS/flex-basis).

Nous vous déconseillons d'utiliser les propriétés flex sous leur forme longue, sans autre alternative possible (par exemple, pour annuler quelque chose déjà défini). Elles représentent du code supplémentaire et peuvent être quelque peu déroutantes.

## Alignement horizontal et vertical

Vous pouvez également utiliser les fonctionnalités de Flexbox pour aligner les éléments flex le long de l'axe principal ou croisé. Voyons cela avec un nouvel exemple — [flex-align0.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/flex-align0.html) ([voir aussi en direct](https://mdn.github.io/learning-area/css/css-layout/flexbox/flex-align0.html)). Nous allons le transformer facilement en une barre souple de boutons. Actuellement, nous avons une barre de menu horizontale avec quelques boutons tassés dans l'angle supérieur gauche.

![Cinq boutons alignés horizontalement dans le coin supérieur gauche](flexbox-example5.png)

D'abord, faites une copie locale de cet exemple.

Ensuite, ajoutez ce qui suit à la fin de la CSS de l'exemple&nbsp;:

```css
div {
  display: flex;
  align-items: center;
  justify-content: space-around;
}
```

![Cinq boutons espacés équitablement selon l'axe principal](flexbox_center_space-around.png)

Actualisez la page et vous verrez que les boutons sont maintenant bien centrés, horizontalement et verticalement. Cette transformation a été opérée grâce à deux nouvelles propriétés.

[`align-items`](/fr/docs/Web/CSS/align-items) fixe là où les éléments flex sont placés sur l'axe perpendiculaire, dit aussi croisé (_cross axis_).

- Par défaut, la valeur est `stretch`, qui étire tous les éléments flex de manière à emplir le conteneur parent le long de l'axe croisé. Si le parent ne possède pas de dimension définie dans la direction de l'axe croisé, alors tous les éléments flex auront la dimension du plus étiré des éléments. C'est pour cette raison que, dans notre premier exemple, les colonnes ont toutes la même hauteur par défaut.
- Avec la valeur `center` utilisée dans le code ci-dessus, les éléments gardent leur dimension intrinsèque, tout en étant centrés sur l'axe croisé. C'est la raison pour laquelle, dans l'exemple actuel, les boutons sont centrés verticalement.
- Il y a également des valeurs comme `flex-start` et `flex-end` qui alignent respectivement tous les éléments au début ou à la fin de l'axe croisé. Voyez [`align-items`](/fr/docs/Web/CSS/align-items) pour tous les détails.

Vous pouvez prendre le pas sur le comportement de [`align-items`](/fr/docs/Web/CSS/align-items) pour un élément flex donné en lui appliquant la propriété [`align-self`](/fr/docs/Web/CSS/align-self). Par exemple, ajoutez ce qui suit aux CSS&nbsp;:

```css
button:first-child {
  align-self: flex-end;
}
```

![Quatre boutons centrés et un bouton en bas d'une boîte flexible](flexbox_first-child_flex-end.png)

Voyez l'effet obtenu, puis supprimez ensuite la règle.

[`justify-content`](/fr/docs/Web/CSS/justify-content) fixe où les éléments flex sont placés sur l'axe principal.

- La valeur par défaut est `flex-start` : tous les éléments sont disposés vers l'origine de l'axe principal.
- Vous utiliserez `flex-end` pour les disposer vers la fin.
- `center` est aussi une valeur possible pour `justify-content`. Avec elle, les éléments flex sont placés vers le centre de l'axe principal.
- La valeur `space-around`, utilisée plus haut, est pratique — elle distribue régulièrement tous les éléments le long de l'axe principal, en laissant autant d'espace à chaque extrémité qu'entre chacun.
- Une autre valeur, `space-between`, est semblable à `space-around`, mais elle ne laisse pas d'espace aux extrémités.

N'hésitez pas à jouer avec ces valeurs pour visualiser leur fonctionnement avant de poursuivre.

## Ordonner les éléments flex

Flexbox dispose aussi d'une fonctionnalité pour modifier l'ordre d'affichage des éléments flex, sans en modifier l'ordre dans la source. C'est une chose impossible à réaliser avec les méthodes classiques de mise en page.

Le code pour ce faire est simple — ajoutez la règle CSS suivante dans l'exemple de code de la barre de boutons&nbsp;:

```css
button:first-child {
  order: 1;
}
```

Actualisez, et vous pouvez voir que le bouton «&nbsp;Smile&nbsp;» a été déplacé en fin de l'axe principal. Voyons en détail comment cela fonctionne&nbsp;:

- Par défaut, tous les éléments flex possèdent une valeur [`order`](/fr/docs/Web/CSS/order) égale à 0&nbsp;;
- Les éléments flex avec des valeurs `order` plus élevées apparaîtront plus tard dans l'ordre d'affichage que ceux avec des valeurs plus faibles&nbsp;;
- Les éléments flex avec les mêmes valeurs pour `order` sont affichés dans l'ordre de la source. Ainsi, si vous avez 4 éléments avec des valeurs `order` de 2, 1, 1 et 0, leur ordre d'affichage sera 4e, 2e, 3e et 1er&nbsp;;
- Le troisième élément suit le deuxième, car il a la même valeur pour `order` et qu'il est placé après dans le code source.

Vous pouvez donner des valeurs négatives à `order` pour faire en sorte que ces éléments soient affichés avant les éléments d'ordre 0. Par exemple, vous pouvez faire apparaître le bouton «&nbsp;Blush&nbsp;» en tête de l'axe principal avec la règle suivante&nbsp;:

```css
button:last-child {
  order: -1;
}
```

## Boîtes flex imbriquées

Il est possible de créer des mises en page joliment complexes avec Flexbox. Il est parfaitement loisible de déclarer un élément flex en tant que conteneur flex, de sorte que ses enfants sont également disposés en tant que boîtes modulables. Regardez [complex-flexbox.html](https://github.com/mdn/learning-area/blob/master/css/css-layout/flexbox/complex-flexbox.html) ([à voir en direct également](https://mdn.github.io/learning-area/css/css-layout/flexbox/complex-flexbox.html)).

![Imbrications avec flexbox](flexbox-example7.png)

Le HTML pour cela est vraiment simple. Voici un élément [`<section>`](/fr/docs/Web/HTML/Element/section) contenant trois éléments [`<article>`](/fr/docs/Web/HTML/Element/article). Le troisième élément [`<article>`](/fr/docs/Web/HTML/Element/article) contient trois éléments [`<div>`](/fr/docs/Web/HTML/Element/div), et le premier élément [`<div>`](/fr/docs/Web/HTML/Element/div) contient cinq éléments [`<button>`](/fr/docs/Web/HTML/Element/Button)&nbsp;:

    section - article
              article
              article - div - button
                        div   button
                        div   button
                              button
                              button

Regardez le code utilisé pour cette disposition.

Primo, nous déterminons que les enfants de l'élément [`<section>`](/fr/docs/Web/HTML/Element/section) seront des boîtes flexibles.

```css
section {
  display: flex;
}
```

Secundo, nous définissons des valeurs flex pour les éléments [`<article>`](/fr/docs/Web/HTML/Element/article) eux‑mêmes. Remarquez en particulier ici la deuxième règle — nous paramétrons le troisième élément [`<article>`](/fr/docs/Web/HTML/Element/article) pour que ses enfants soient eux-mêmes disposés en tant qu'éléments flex, mais cette fois‑ci en colonne.

```css
article {
  flex: 1 200px;
}

article:nth-of-type(3) {
  flex: 3 200px;
  display: flex;
  flex-flow: column;
}
```

Tertio, nous sélectionnons le premier élément [`<div>`](/fr/docs/Web/HTML/Element/div) et lui assignons la valeur `flex: 1 100px;` pour qu'il ait effectivement une hauteur minimale de 100px. Ensuite, nous indiquons que ses enfants (les éléments [`<button>`](/fr/docs/Web/HTML/Element/Button)) doivent être disposés en tant qu'éléments flex dans une ligne enveloppante, centrés dans l'espace disponible comme dans l'exemple des boutons vu plus haut.

```css
article:nth-of-type(3) div:first-child {
  flex: 1 100px;
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
}
```

Enfin, nous définissons un dimensionnement des boutons, et plus précisément nous leur donnons une valeur flex de `1 auto`. L'effet obtenu est très intéressant ; vous l'observerez en modifiant la largeur de la fenêtre du navigateur. Les boutons prennent autant d'espace qu'il leur est permis et sont, si possible, disposés sur la même ligne&nbsp;; sinon ils «&nbsp;descendent&nbsp;» pour créer de nouvelles lignes.

```css
button {
  flex: 1 auto;
  margin: 5px;
  font-size: 18px;
  line-height: 1.5;
}
```

## Compatibilité des navigateurs

La prise en charge de Flexbox est disponible avec la plupart des navigateurs récents — Firefox, Chrome, Opera, Microsoft Edge et IE 11, les nouvelles versions d'Android/iOS, etc. Mais vous devez être attentif au fait que l'on utilise encore des navigateurs anciens qui ne prennent pas en charge Flexbox (ou le font, mais uniquement pour des versions très anciennes, vraiment dépassées de la spécification).

Pour l'apprentissage et l'expérimentation, cela n'a pas trop d'importance. Mais utiliser Flexbox pour un site web réel nécessite de faire des tests et de s'assurer que l'expérience utilisateur est toujours acceptable dans le plus grand nombre de navigateurs possible.

Flexbox est une fonctionnalité plus complexe que les règles CSS courantes. Par exemple, une absence de prise en charge des ombres portées dans les CSS laissera le site utilisable. Mais la non prise en charge des fonctionnalités Flexbox risque de casser totalement la mise en page et de rendre le site inutilisable.

Les stratégies pour contourner les problèmes de compatibilité des navigateurs sont discutées dans le module [Tests croisés sur navigateurs](/fr/docs/Learn/Tools_and_testing/Cross_browser_testing).

## Testez vos compétences&nbsp;!

Nous avons abordé de nombreux points dans cet article, mais pourriez-vous retenir les informations les plus importantes&nbsp;? Vous trouverez des tests supplémentaires pour évaluer vos compétences sur la page [Testez vos compétences&nbsp;: Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox_skills).

## Résumé

Notre visite guidée des bases de Flexbox est maintenant terminée. Espérons que vous en êtes satisfaits, et que vous saurez jouer avec ses fonctionnalités tout en progressant dans l'apprentissage. Nous allons examiner ensuite un autre aspect important de la mise en page avec les CSS — les grilles CSS.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Normal_Flow", "Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout")}}

## Dans ce module

- [Introduction à la mise en page en CSS](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Cours normal](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grilles](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Les boîtes flottantes](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Le positionnement](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Disposition sur plusieurs colonnes](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Méthodes de mises en page traditionnelles](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Prise en charge des anciens navigateurs](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Compréhension fondamentale de la mise en page](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
