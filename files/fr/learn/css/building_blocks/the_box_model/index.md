---
title: Le modèle de boîte
slug: Learn/CSS/Building_blocks/The_box_model
translation_of: Learn/CSS/Building_blocks/The_box_model
original_slug: Apprendre/CSS/Building_blocks/Le_modele_de_boite
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

En CSS, tout élément est inclus dans une boîte ("_box_" en anglais). Comprendre le fonctionnement de ces boîtes est essentiel pour maîtriser la mise en page CSS ainsi que le positionement des éléments d'une page HTML. Dans cette leçon, nous verrons en détails le _Modèle de Boîtes CSS_ - son fonctionnement ainsi que sa terminologie - pour vous permettre de réaliser des mises en pages plus complexes.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Compétences informatique basiques,
        <a
          href="/fr/docs/Learn/Getting_started_with_the_web/Installing_basic_software"
          >Logiciels de base installés</a
        >, connaissance simple en
        <a href="/fr/docs/Learn/Getting_started_with_the_web/Dealing_with_files"
          >manipulation de fichiers</a
        >, les bases du HTML (voir
        <a href="/fr/docs/Learn/HTML/Introduction_to_HTML"
          >Introduction au HTML</a
        >), et une esquisse du fonctionnement du CSS (voir
        <a href="/fr/docs/Learn/CSS/First_steps">premiers pas en CSS</a>).
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre les principes du Modèle de Boîte en CSS, ce qui constitue le
        Modèle de Boîte et comment passer au modèle alternatif.
      </td>
    </tr>
  </tbody>
</table>

## Les boîtes en ligne et boîte de bloc

En CSS, il existe deux type de boîtes : les boîtes **en bloc** ("_block boxes_" en anglais) et les boîtes **en ligne** (_"inline boxes"_ en anglais ou également « boîtes en incise » en français). Ces deux qualifications renvoient au comportement de la boîte au sein de la page et vis-à-vis des autres boîtes :

Si une boîte est définie en bloc, elle suivra alors les règles suivantes :

- La boîte s'étend en largeur pour remplir totalement l'espace offert par son conteneur. Dans la plupart des cas, la boîte devient alors aussi large que son conteneur, occupant 100% de l'espace disponible.
- La boîte occupe sa propre nouvelle ligne et crée un retour à la ligne, faisant ainsi passer les éléments suivants à la ligne d'après.
- Les propriétés de largeur ([`width`](/fr/docs/Web/CSS/width)) et de hauteur ([`height`](/fr/docs/Web/CSS/height)) sont toujours respectées.
- Les propriétés [`padding`](/fr/docs/Web/CSS/padding), [`margin`](/fr/docs/Web/CSS/margin) et [`border`](/fr/docs/Web/CSS/border) — correspondantes respectivement aux écarts de

  <i lang="en">padding</i>

  , à la marge et à la bordure de la boîte — auront pour effet de repousser les autres éléments.

À moins que l'on ne décide de changer le type de positionnement de la boîte en "en ligne", certains éléments tels que les titres (`<h1>`,`<h2>`, etc.) et les paragraphes (`<p>`) utilisent le mode "bloc" comme propriété de positionnement extérieur par défaut.

Si une boîte est positionnée en ligne, alors :

- La boîte ne crée pas de retour à la ligne, les autres éléments se suivent donc en ligne.
- Les propriétés de largeur ([`width`](/fr/docs/Web/CSS/width)) et de hauteur ([`height`](/fr/docs/Web/CSS/height)) ne s'appliquent pas.
- Le

  <i lang="en">padding</i>

  , les marges et les bordures verticales (en haut et en bas) seront appliquées mais ne provoqueront pas de déplacement des éléments alentours.

- Le

  <i lang="en">padding</i>

  , les marges et les bordures horizontales (à gauche et à droite) seront appliquées et provoqueront le déplacement des éléments alentours.

Les éléments `<a>`, utilisés pour les liens, ou encore `<span>`, `<em>` et `<strong>` sont tous des éléments qui s'affichent "en ligne" par défaut.

Le type de boîte appliqué à un élément est défini par la valeur de la propriété [`display`](/fr/docs/Web/CSS/display) tel que `block` ou `inline`, et se réfère à la valeur extérieure de positionnement (ou "_display_" en anglais).

## Aparté : les positionnements intérieurs et extérieurs

Au point où nous en sommes, il faut aborder la différence entre les propriétés de positionnement **intérieurs** ("_inner dipslay_") et **extérieurs** ("_outer display_"). Comme nous l'avons évoqué, les boîtes en CSS possèdent un type de positionnement _extérieur_ qui détermine si la boîte est "en ligne" ou bien "en bloc".

Cependant, les boîtes ont aussi un type de positionnement intérieur, qui décrit le comportement de mise en page des éléments contenus dans la boîte. Par défaut, les éléments contenus dans la boîte sont affichés dans la **[disposition normale](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)**, ce qui signifie qu'ils se comportent exactement comme n'importe quel autre élément "en bloc" ou "en ligne" (comme décrit auparavant).

Ce type de positionnement intérieur peut naturellement être modifié, en utilisant la valeur `flex` de la propriété `display`. Ainsi, si on donne la propriété `display: flex;` à un élément, son type de positionnement extérieur est "en bloc" (`block`), mais son type de positionnement intérieur est modifié en `flex`. Tout élément directement enfant de cette boîte se voit alors changé en élément flex, et sera mis en page selon les règles précisées dans les spécifications de [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox), dont on reparlera plus tard.

> **Note :** Pour en apprendre d'avantage sur les valeurs prises par la propriété display, et le comportement des boîtes dans une mise en page en bloc ou en ligne, jettez un coup d'oeil au guide MDN sur la [Disposition en ligne et en bloc](/fr/docs/Web/CSS/CSS_Flow_Layout/Block_and_Inline_Layout_in_Normal_Flow).

Lorsque vous en apprendrez plus sur la mise en page en CSS, vous découvrirez une variété d'autres valeurs de positionnement intérieur pour une boîte, tel que `flex`, ou encore [`grid`](/fr/docs/Learn/CSS/CSS_layout/Grids).

Les dispositions "en ligne" et "en bloc" demeurent néanmoins le comportement par défaut des éléments sur le Web — ce qui, comme nous l'avons vu, est appelé la **disposition normale** ("_normal flow_" en anglais), puisque sans instructions supplémentaires de notre part, c'est ainsi que les boîtes sont mises en page.

## Exemples de quelques types de positionnement

Lançons nous à présent dans la pratique et étudions quelques exemples. Vous trouverez ci-dessous trois éléments HTML différents, mais qui sont tous en postionnement extérieur "en bloc" (`block`). Le premier est un paragraphe, possèdant une bordure ajoutée en CSS. Le navigateur va alors disposer l'élément comme une boîte "en bloc" lors de sa phase de rendu : le paragraphe occupe alors sa propre nouvelle ligne et s'étend en largeur pour occuper tout l'espace disponible.

Le deuxième élément est une liste, qui est disposée selon la règle `display: flex;`. Ceci définit une mise en page "flex" pour tous les éléments contenus dans la liste, bien que la liste en elle-même est en disposition "en bloc" — c'est pourquoi elle s'étend en largeur sur une nouvelle ligne, exactement comme le premier paragraphe.

Juste en dessous, se trouve un autre paragraphe, diposé en bloc comme le précédent, dans lequel sont insérés deux éléments `<span>`. Ces deux éléments sont par défaut disposés "en ligne". Cependant, on a ajouté à l'un des deux `<span>` une classe CSS nommée "block" qui lui attribue la propriété `display: block;`, ce qui explique la différence de mise en page observée.

{{EmbedGHLiveSample("css-examples/learn/box-model/block.html", '100%', 1050)}}

Nous avons dans cet exemple le comportement typique d'un élément en ligne (`inline`), observant chacune des règles énoncées plus haut : l'élément `<span>` du premier paragraphe ne force pas de retour à la ligne et se place à la suite - _en ligne_ donc - des autres éléments.

Nous avons en suite un élément `<ul>` dont la propriété de positionnement est `display: inline-flex;`, ce qui fait du `<ul>` une boîte en ligne, contenant des éléments de liste (`<li>`) dipsosés en "flex".

Pour finir, nous avons deux paragraphes, tous deux définis en `display: inline;`. Le texte dans ces paragraphes, tout comme les éléments de listes, sont disposés sur la même ligne sans retour à la ligne pour chaque élément, contrairement à une disposition en bloc.

**Dans cet exemple, nous vous invitons à passer de `display: inline;` à `display: block;` ou encore de `display: inline-flex;` à `display: flex;` pour observer les modifications apportées par ces modes de positionnement.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline.html", '100%', 1000)}}

Vous rencontrerez des mises en page de type "flex" plus tard dans ces lessons, pas d'inquiétude si ce type de positionnement n'est pas maîtrisé. L'important est ici de se souvenir que c'est la valeur de la propriété `display` qui permet de modifier l'affichage extérieur (en ligne ou en bloc), ce qui définit l'interaction de la boîte par rapport à son environnement dans la mise en page.

Pour le reste de la leçon, nous ne parlerons plus que du **type de positionnement extérieur**.

## Qu'est-ce que le modèle de boîte CSS ?

Le modèle de boîte que nous allons voir s'applique totalement aux boîtes en bloc, mais les boîtes en ligne ne reprennent que certains aspects — le modèle est alors simplifié ! Ce modèle définit comment chaque composant de la boîte, à savoir la _marge_, la _bordure_, le _padding_ (remplissage intérieur) et le contenu, fonctionnent ensemble pour former l'aspect final rendu à l'écran. Pour ajouter un soupçon de complexité, il est aussi possible de passer du modèle standard à un modèle alternatif.

### Les composants d'une boîte

Lorsque l'on crée une boîte en bloc, on se retrouve avec les composants suivant :

- **La boîte de contenu**&nbsp;: Il s'agit de la zone où sont affichés les éléments contenus par notre boîte, qui peut être dimensionnée en utilisant les propriétés CSS [`width`](/fr/docs/Web/CSS/width) et [`height`](/fr/docs/Web/CSS/height).
- **La boîte de <i lang="en">padding</i>** **(marge intérieure)**&nbsp;: Le

  <i lang="en">padding</i>

  (ou remplissage en français) est une zone vierge qui se présente comme un espacement encadrant le contenu; sa taille peut être contrôlée sur chaque côté en utilisant la propriété [`padding`](/fr/docs/Web/CSS/padding) et ses autres propriétés connexes.

- **La boîte de bordure**&nbsp;: La bordure englobe le contenu et le

  <i lang="en">padding</i>

  pour former une bordure. Sa taille et son style sont paramétrés par la propriété [`border`](/fr/docs/Web/CSS/border) et ses propriétés sous-jacentes.

- **La boîte de marge**&nbsp;: La marge est la couche la plus à l'extérieur, englobant le contenu, le

  <i lang="en">padding</i>

  et la bordure. Comme le

  <i lang="en">padding</i>

  , il s'agit d'une zone vierge d'espacement mais qui est cette fois située à l'extérieur de l'élément, séparant l'élément des autres éléments de la page. sa taille peut être contrôlée sur chaque côté en utilisant la propriété [`margin`](/fr/docs/Web/CSS/margin) et ses autres propriétés connexes.

Le schéma ci-dessous montre la structure de ces différentes couches:

![Diagramme du modèle de boîte](box-model.png)

### Le modèle de boîte CSS standard

Dans le modèle standard, lorsque vous spécifiez les propriétés de largeur (`width`) et de hauteur (`height`), celles-ci définissent alors la hauteur et la largeur de la boîte de contenu (la boîte la plus à l'intérieur donc). La taille du <i lang="en">padding</i> et de la bordure (s'ils existent) s'ajoutent à la largeur et à la hauteur définies dans `width` et `height` pour obtenir les dimensions totales occupées par la boîte. La marge étant extérieure, elle ne rentre pas dans le compte. Ce principe est illustré dans l'exemple ci-dessous.

En prenant une boîte définie avec les valeurs suivantes de `width`, `height`, `margin`, `border` et `padding` :

```css
.box {
  width: 350px;
  height: 150px;
  margin: 10px;
  padding: 25px;
  border: 5px solid black;
}
```

L'espace occupé par notre boîte dans le modèle standard vaut alors 410px (350 + 25 + 25 + 5 + 5), et la hauteur, 210px (150 + 25 + 25 + 5 + 5), en ajoutant bien les valeurs de `padding` et de `border` (deux fois, car ces marges sont présentes aux deux extrêmités de la largeur et de la longeur), aux valeurs de `width` et de `height`.

![Illustration de la taille de la boîte lorsqu'on utilise le modèle de boîte standard.](standard-box-model.png)

> **Note :** La marge n'est pas comptabilisée dans la taille totale de la boîte — car bien qu'elle affecte l'espace que la boîte va prendre en définitive dans la page, il ne s'agit que de l'espace extérieur à la boîte. La zone couverte par la boîte s'arrête donc à la bordure et ne s'étend pas à la marge.

### Le modèle de boîte CSS alternatif

À ce stade, vous pourriez penser qu'il n'est pas très commode d'avoir à ajouter constamment les dimensions de la bordure et du <i lang="en">padding</i> aux dimensions du conteneur pour obtenir les dimensions totales de la boîte, et vous n'auriez pas tort ! Pour cela, le CSS possède un modèle de boîte alternatif introduit peu de temps après le modèle standard. En utilisant ce modèle, les paramètres width et height définissent la largeur et la hauteur **totale** de la boîte en comprenant le contenu, le <i lang="en">padding</i> et la bordure. Ainsi, pour obtenir la taille du contenu, il faut retirer aux dimensions la taille du <i lang="en">padding</i> et de la bordure. En reprenant l'exemple précédent avec ce modèle, on obtiendrait les dimensions suivantes : largeur = 350px, hauteur = 150px.

![Illustration de la taille de la boîte lorsqu'on utilise le modèle de boîte alternatif.](alternate-box-model.png)

Le navigateur utilise le modèle standard par défaut. Pour utiliser le modèle alternatif, il faut définir la propriété `box-sizing: border-box;` sur notre boîte. Cela revient à demander au navigateur de considérer la **boîte de la bordure** comme la zone d'effet de `width` et `height`, et non la boîte du contenu comme dans le modèle standard !

```css
.box {
  box-sizing: border-box;
}
```

Si vous désirez utiliser le modèle alternatif sur tous vos éléments — ce qui est un choix répandu parmi certains cercles de développeurs — vous pouvez le faire simplement à l'aide des quelques instructions ci-dessous, en utilisant `box-sizing` sur l'élément `<html>` et en utilisant l'effet cascade du CSS en paramétrant tous les autres éléments sur la valeur héritée du parent (`inherit`). Si vous tenez à comprendre le raisonnement derrière ce code, regardez du côté de [l'article des Astuces CSS sur box-sizing](https://css-tricks.com/inheriting-box-sizing-probably-slightly-better-best-practice/).

```css
html {
  box-sizing: border-box;
}
*, *::before, *::after {
  box-sizing: inherit;
}
```

> **Note :** Pour l'anecdote, le navigateur Internet Explorer utilisait historiquement le modèle alternatif par defaut — sans pour autant fournir un moyen de passer à l'autre modèle !

## Manipuler les modèles de boîte

Dans l'exemple ci-dessous, se trouvent deux boîtes. Ces deux boîtes possèdent la classe `.box` qui leur confère les mêmes valeurs pour les propriétés `width`, `height`, `margin`, `border` et `padding`. La seule différence est que la seconde boîte utilise le modèle alternatif.

**Pouvez-vous modifier les dimensions de la seconde boîte (en lui ajoutant le CSS dans la classe `.alternate`) pour lui permettre d'avoir la même hauteur et largeur finale que l'autre boîte ?**

{{EmbedGHLiveSample("css-examples/learn/box-model/box-models.html", '100%', 1000)}}

> **Note :** vous pouvez trouver une solution [ici](https://github.com/mdn/css-examples/blob/master/learn/solutions.md#the-box-model).

### Utiliser les outils de développement pour voir le modèle de boîte

Les [outils de développement](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) de votre navigateur peuvent vous permettre d'apréhender les concepts de boîte bien plus facilement. Si vous inspectez un élément dans les DevTools de Firefox (clic droit > Examiner l'élément), vous pouvez avoir accès à toutes les propriétés des différentes couches de la boîte (contenu, <i lang="en">padding</i>, bordure et marge) dans l'interface graphique interactive montrée ci-dessous. Inspecter un élément ainsi, c'est s'assurer qu'il possède bien la taille que l'on désire !

![Inspecter le modèle de boîte d'un élément grâce aux outils de développement de Firefox](box-model-devtools.png)

## Marges, remplissages (paddings), et bordures

Nous avons déjà rencontré ensemble les propriétés [`margin`](/fr/docs/Web/CSS/margin), [`padding`](/fr/docs/Web/CSS/padding) et [`border`](/fr/docs/Web/CSS/border), ainsi que leurs effets dans les exemples précédents. Mais ces propriétés sont des **raccourcis** qui nous permettent de définir ces règles pour les quatre côtés de la boîte d'un seul coup. Ces raccourcis ont donc aussi leurs propriétés équivalentes permettant de régler séparément chaque côté pour plus de personalisation.

Regardons de plus près ces nouvelles propriétés.

### Les marges

La marge est une zone d'espacement invisible qui encadre votre boîte (une marge extérieure). La marge repousse les éléments alentours de la boîte. On peut de plus lui donner une valeur numérique positive ou bien même négative ! Lorsque cette valeur est négative, cela peut cependant engendrer des superpositions entre votre boîte et d'autres éléments. Que vous utilisiez le modèle alternatif ou standard, la marge est toujours décomptée en surplus de la taille totale de la boîte et est ajoutée après que celle-ci a été calculée.

On peut fixer les quatre marges d'une boîte d'un seul coup à l'aide de la propriété [`margin`](/fr/docs/Web/CSS/margin), ou bien régler chaque côté individuellement avec les propriétés équivalentes suivantes :

- [`margin-top`](/fr/docs/Web/CSS/margin-top)
- [`margin-right`](/fr/docs/Web/CSS/margin-right)
- [`margin-bottom`](/fr/docs/Web/CSS/margin-bottom)
- [`margin-left`](/fr/docs/Web/CSS/margin-left)

**Dans l'exemple ci-dessous, tentez donc de modifier les valeurs de `margin` pour voir comment la boîte est repoussée et évolue à cause des espaces créés ou supprimés (si la marge est négative) par vos soins.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin.html", '100%', 700)}}

#### La fusion des marges

Le concept de fusion entre les marges est important à maîtriser pour la mise en page. Si deux éléments de votre page ont des marges qui se touchent, alors ces marges fusionnent pour ne faire plus qu'une seule marge qui aura pour taille la plus grande des deux tailles des marges initiaux.

Dans l'exemple ci-dessous, nous avons deux paragraphes. Le paragraphe du haut a un `margin-bottom` de 50 pixels. Le second paragraphe a un `margin-top` de 30 pixels. Puisque ces deux marges se touchent, elles fusionnent ensemble, et ainsi la marge finale entre les deux paragraphes est de 50 pixels et non 80, la somme des deux marges.

**Vous pouvez tester cette propriété par vous-même en modifiant la propriété `margin-top` du deuxième paragraphe à 0 dans l'exemple ci-dessous. La marge visible entre les deux paragraphes demeure inchangée — elle conserve sa taille de 50 pixels qui provient de la propriété `margin-bottom` du premier paragraphe.**

{{EmbedGHLiveSample("css-examples/learn/box-model/margin-collapse.html", '100%', 700)}}

Il existe quelques règles qui contrôlent la fusion ou non des marges. Pour plus d'informations, référez vous à la page détaillée [Maîtriser la fusion des marges](/fr/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing). Si vous ne devez retenir qu'une chose, c'est que les marges peuvent fusionner, et que si vos marges ne correspondent pas à vos attentes, c'est certainement ce phénomène qui est derrière.

### Les bordures

La bordure se situe entre la marge et le remplissage (<i lang="en">padding</i>) d'une boîte. Si vous utilisez le modèle standard de boîte, la taille de la bordure s'ajoute à la largeur (`width`) et la hauteur (`height`) de la boîte. Si vous utilisez le modèle de boîte alternatif, alors la taille de la bordure rend la taille disponible pour le contenu plus petite puisqu'elle utilise une partie de la largeur et de la hauteur disponible.

Pour agir sur le style d'une bordure, il existe de nombreuses propriétés qui permettent de régler le style, la taille et la couleur pour chacun des quatre côtés de la bordure.

Vous pouvez naturellement fixer la forme taille et couleur des quatre côtés en une seule fois, par le biais de la propriété `border`.

Pour régler ces propriétés individuellement pour chacun des côtés, vous pouvez utiliser :

- [`border-top`](/fr/docs/Web/CSS/border-top)
- [`border-right`](/fr/docs/Web/CSS/border-right)
- [`border-bottom`](/fr/docs/Web/CSS/border-bottom)
- [`border-left`](/fr/docs/Web/CSS/border-left)

Pour modifier la taille, le style ou la couleur de tous les côtés en même temps, utilisez les propriétés suivantes :

- [`border-width`](/fr/docs/Web/CSS/border-width)
- [`border-style`](/fr/docs/Web/CSS/border-style)
- [`border-color`](/fr/docs/Web/CSS/border-color)

Pour modifier la taille, le style ou la couleur d'un seul coté à la fois, vous pouvez faire l'usage de ces propriétés :

- [`border-top-width`](/fr/docs/Web/CSS/border-top-width)
- [`border-top-style`](/fr/docs/Web/CSS/border-top-style)
- [`border-top-color`](/fr/docs/Web/CSS/border-top-color)
- [`border-right-width`](/fr/docs/Web/CSS/border-right-width)
- [`border-right-style`](/fr/docs/Web/CSS/border-right-style)
- [`border-right-color`](/fr/docs/Web/CSS/border-right-color)
- [`border-bottom-width`](/fr/docs/Web/CSS/border-bottom-width)
- [`border-bottom-style`](/fr/docs/Web/CSS/border-bottom-style)
- [`border-bottom-color`](/fr/docs/Web/CSS/border-bottom-color)
- [`border-left-width`](/fr/docs/Web/CSS/border-left-width)
- [`border-left-style`](/fr/docs/Web/CSS/border-left-style)
- [`border-left-color`](/fr/docs/Web/CSS/border-left-color)

**Dans l'exemple ci-dessous, nous avons utilisé différentes propriétés, qu'elles soient des raccourcis ou bien les propriétés précises, pour créer une bordure. Amusez-vous à modifier les valeurs de ces différentes propriétés pour vérifier que vous comprenez bien comment elles s'organisent. Les pages MDN pour les propriétés des bordures (données ci-dessus) documentent les différents styles que vous pouvez appliquer à vos pages. N'hésitez pas à les consulter.**

{{EmbedGHLiveSample("css-examples/learn/box-model/border.html", '100%', 700)}}

### Le padding (remplissage)

Le <i lang="en">padding</i> (ou remplissage) se situe entre la bordure et le contenu. Contrairement aux marges, on ne peut attribuer une valeur numérique négative à un <i lang="en">padding</i>, la valeur ne peut être que 0 ou bien une valeur positive. Si vous avez défini un arrière-plan à votre élément, celui-ci continuera de s'afficher dans la <i lang="en">padding</i>, et c'est pourquoi cette propriété est souvent utilisée pour repousser le contenu de la bordure.

On peut une fois de plus configurer le <i lang="en">padding</i> pour tous les côtés à la fois à l'aide de la propriété [`padding`](/fr/docs/Web/CSS/padding), ou bien chaque côté indépendament des autres en utilisant les variantes plus précises suivantes :

- [`padding-top`](/fr/docs/Web/CSS/padding-top)
- [`padding-right`](/fr/docs/Web/CSS/padding-right)
- [`padding-bottom`](/fr/docs/Web/CSS/padding-bottom)
- [`padding-left`](/fr/docs/Web/CSS/padding-left)

**Si vous modifiez les valeurs du <i lang="en">padding</i> sur la classe `.box` de l'exemple ci-dessous, vous pouvez observer comment l'emplacement du texte est impacté par les marges intérieures.**

**Tentez aussi de modifier la valeur du <i lang="en">padding</i> dans la classe `.container`, cela aura pour effet d'espacer le conteneur et la boîte. Le <i lang="en">padding</i> peut être modifié sur tout élément pour permettre d'espacer le contenu de la bordure.**

{{EmbedGHLiveSample("css-examples/learn/box-model/padding.html", '100%', 600)}}

## Le modèle de boîte et la disposition en ligne

Toutes les règles énoncées plus haut s'appliquent totalement aux boîtes positionnées en bloc. Mais qu'en est-il des boîtes positionnées en ligne, comme l'élément `<span>` par exemple ?

Dans l'exemple ci-après, nous avons un élément `<span>` inclus dans un paragraphe auquel on a défini les propriétés `width`, `height`, `margin`, `border` et `padding`. Vous pouvez alors observer que les paramètres `width` et `height` sont totalement ignorés. Les propriétés de `margin`, `padding` et `border` sont quant à elles appliquées, mais n'ont pas modifié l'espacement avec les autres éléments de la page, se superposant ainsi avec les mots environnants dans le paragraphe.

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-box-model.html", '100%', 600)}}

## le positionnement display: inline-block

Il existe une valeur spéciale pour la propriété `display`, qui constitue un compromis entre la disposition en ligne et la disposition en bloc, une sorte d'entre-deux qui combine ces deux dispositions. Cet état peut-être utile dans les situations où l'on désire utiliser les propriétés `width` et `height`, et éviter les superpositions (voir l'exemple précédent), tout en conservant la disposition dans une même ligne (i.e. sans créer de nouvelle ligne, comme le ferait une disposition en bloc).

C'est la solution apportée par la disposition `display: inline-block;` qui emprunte des règles des deux dispositions pour satisfaire ces motivations :

- La hauteur (`height`) et la largeur (`width`) seront appliqués sur l'élément (et non ignorés).
- Les propriétés `padding`, `margin` et `border` repousseront bien les éléments alentours.

Cette disposition suit alors ces règles, tout en conservant un positionnement sur la même ligne, sans retour à la ligne, ni affichage sur sa propre nouvelle ligne. L'élément peut même devenir plus grand que son conteneur si les propriétés `width` et `height` le définissent ainsi.

**Dans cet exemple, nous avons ajouté la propriété `display: inline-block;` à notre élément `<span>`. Changez donc la valeur en `display: block;` ou bien tentez même de supprimer cette ligne pour observer l'utilité de cette nouvelle disposition.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block.html", '100%', 700)}}

Ceci peut-être très utile dans certains cas comme lorsque l'on veut élargir la zone cliquable d'un lien en aggrandissant le `padding`. l'élément `<a>` est par défaut "en ligne", comme un `<span>`, mais vous pouvez alors utiliser `display: inline-block;` pour permettre au <i lang="en">padding</i> d'être ajouté correctement sur la page, améliorant l'accessibilité du lien pour l'utilisateur.

Vous pouvez rencontrer cette astuce sur bon nombre de menus de navigation dans les sites web. Par exemple, la barre de navigation ci-dessous est affichée en une seule ligne en utilisant la disposition flexbox et nous avons ajouté un <i lang="en">padding</i> aux liens `<a>` pour pouvoir modifier la couleur de fond (`background-color`) au survol du curseur. Le <i lang="en">padding</i> semble se superposer sur la bordure de l'élément `<ul>`. Ceci est dû au fait que `<a>` est un élément en ligne.

**Ajoutez la propriété `display: inline-block;` en utilisant le sélecteur `.links-list a` pour voir le respect du <i lang="en">padding</i> régler ce problème.**

{{EmbedGHLiveSample("css-examples/learn/box-model/inline-block-nav.html", '100%', 600)}}

## Résumé

À présent vous connaissez tout ce dont vous avez besoin pour comprendre le modèle des boîtes en CSS. N'hésitez pas à revenir jetter un coup d'oeil à ce cours si vous rencontrez encore des problèmes de mise en page : beaucoup de solutions se trouvent ici !

Dans la leçon suivante, ce sont les arrières-plans et les bordures qui capteront notre attention, afin de rendre votre mise en page plus attrayante.

{{PreviousMenuNext("Learn/CSS/Building_blocks/Selectors/Combinators", "Learn/CSS/Building_blocks/Backgrounds_and_borders", "Learn/CSS/Building_blocks")}}

## Dans ce module

1.  [Cascade et héritage](/fr/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)
2.  [Sélecteurs CSS](/fr/docs/Learn/CSS/Building_blocks/Selectors)

    - [Sélecteurs de classe, de type et d'identifiant](/fr/docs/Learn/CSS/Building_blocks/Selectors/Type_Class_and_ID_Selectors)
    - [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors)
    - [Pseudo-classes et pseudo-éléments](/fr/docs/Learn/CSS/Building_blocks/Selectors/Pseudo-classes_and_pseudo-elements)
    - [Combinateurs](/fr/docs/Learn/CSS/Building_blocks/Selectors/Combinators)

3.  Le modèle de boîte
4.  [Arrières-plans et bordures](/fr/docs/Learn/CSS/Building_blocks/Backgrounds_and_borders)
5.  [Gérer la directionnalité du texte](/fr/docs/Learn/CSS/Building_blocks/Handling_different_text_directions)
6.  [Le dépassement du contenu](/fr/docs/Learn/CSS/Building_blocks/Overflowing_content)
7.  [Valeurs et unités](/fr/docs/Learn/CSS/Building_blocks/Values_and_units)
8.  [Dimensionnement des objets en CSS](/fr/docs/Learn/CSS/Building_blocks/Sizing_items_in_CSS)
9.  [Images, médias, et formulaires](/fr/docs/Learn/CSS/Building_blocks/Images_media_form_elements)
10. [Mettre en forme les tableaux](/fr/docs/Learn/CSS/Building_blocks/Styling_tables)
11. [Déboguer CSS](/fr/docs/Learn/CSS/Building_blocks/Debugging_CSS)
12. [Organiser son code CSS](/fr/docs/Learn/CSS/Building_blocks/Organizing)
