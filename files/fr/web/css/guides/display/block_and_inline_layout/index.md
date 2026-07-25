---
title: Disposition en bloc et en ligne dans le flux normal
short-title: Disposition en bloc et en ligne
slug: Web/CSS/Guides/Display/Block_and_inline_layout
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Dans ce guide, nous verrons le comportement des éléments de bloc et des éléments en ligne lorsqu'ils sont placés dans le flux normal.

Le flux normal est défini dans la [spécification CSS 2.1 <sup>(angl.)</sup>](https://www.w3.org/TR/CSS2/visuren.html#normal-flow) qui explique que toutes les boîtes situées dans le flux normal font partie d'un _contexte de formatage_. Elles peuvent être soit de niveau en bloc, soit de niveau en ligne, mais pas les deux à la fois. Nous décrivons les boîtes de niveau en bloc comme participant à un _contexte de mise en forme de bloc_, et les boîtes de niveau en ligne comme participant à un _contexte de mise en forme en ligne_.

Le comportement des éléments qui ont un contexte de formatage de bloc ou en ligne est également défini dans cette spécification. Pour les éléments avec un contexte de formatage de bloc, voici ce qui est indiqué dans la spécification&nbsp;:

> «&nbsp;Dans un contexte de formatage de bloc, les boîtes sont disposées l'une après l'autre, verticalement, en démarrant en haut du bloc englobant. La distance verticale entre deux boîtes voisines est déterminée par les propriétés relatives aux marges. Les marges verticales fusionnent pour deux boîtes de bloc voisines au sein d'un contexte de formatage de bloc.\
> Dans un contexte de formatage de bloc, chaque bord gauche de chaque boîte touche le bord gauche du bloc englobant (pour les documents écrits de droite à gauche, ce sont les bords droits qui coïncident).&nbsp;» - 9.4.1

Quant aux éléments du contexte de formatage en ligne&nbsp;:

> «&nbsp;Dans un contexte de formatage en ligne, les boîtes sont disposées horizontalement, les unes à la suite des autres, en partant du haut d'un bloc conteneur. Les marges horizontales, les bordures et le remplissage sont respectés entre ces boîtes. Les boîtes peuvent être alignées verticalement de différentes manières&nbsp;: leurs bords inférieurs ou supérieurs peuvent être alignés, ou encore les lignes de base du texte qu'elles contiennent peuvent être alignées. La zone rectangulaire qui contient les boîtes formant une ligne est appelée une boîte de ligne.&nbsp;» - 9.4.2

Notez que la spécification CSS 2.1 décrit les documents comme étant en mode d'écriture horizontal, de haut en bas. Par exemple, en décrivant la distance verticale entre les boîtes de bloc. Le comportement des éléments en bloc et en ligne est identique en mode d'écriture vertical&nbsp;; nous abordons ce sujet dans notre guide [Disposition en flux et modes d'écriture](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes).

## Les éléments qui participent à un contexte de formatage de bloc

Les éléments de bloc organisés avec un mode d'écriture horizontal (un document en français par exemple) sont disposés verticalement les uns au dessus des autres.

![Direction en ligne est horizontale. Direction en bloc est verticale.](mdn-horizontal.png)

Avec un mode d'écriture vertical, les boîtes seraient organisées horizontalement.

![Direction en ligne est verticale. Direction en bloc est horizontale.](mdn-vertical.png)

Dans ce guide, nous allons travailler en français et donc un mode d'écriture horizontal. Cependant, tout ce qui est décrit ici doit fonctionner de la même manière si votre document est en mode d'écriture vertical.

Comme le définit la spécification, ce sont les marges entre deux blocs qui créent la séparation entre les éléments. On peut le constater avec la mise en page de deux paragraphes, auxquels j'ai ajouté une bordure. La feuille de style par défaut du navigateur ajoute un espacement entre les paragraphes en ajoutant une marge en haut et en bas.

```html live-sample___normal-flow
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée. Leurs noms étaient Stephen et Joseph Montgolfier, ils
    étaient papetiers de métier, et étaient connus pour posséder des esprits
    réfléchis et un profond intérêt pour toutes les connaissances scientifiques
    et les nouvelles découvertes.
  </p>
  <p>
    Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
    centaines de millions de personnes avaient regardé les volutes de fumée
    s'élever de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___normal-flow
p {
  border: 2px solid green;
}
```

{{EmbedLiveSample("normal-flow", "", 200)}}

Si on définit les marges de l'élément de paragraphe sur `0` alors les bordures se touchent.

```html live-sample___normal-flow-margin-zero
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée. Leurs noms étaient Stephen et Joseph Montgolfier, ils
    étaient papetiers de métier, et étaient connus pour posséder des esprits
    réfléchis et un profond intérêt pour toutes les connaissances scientifiques
    et les nouvelles découvertes.
  </p>
  <p>
    Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
    centaines de millions de personnes avaient regardé les volutes de fumée
    s'élever de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___normal-flow-margin-zero
p {
  border: 2px solid green;
  margin: 0;
}
```

{{EmbedLiveSample("normal-flow-margin-zero")}}

Les éléments de bloc occupent par défaut tout l'espace disponible dans le sens de l'alignement, ce qui fait que nos paragraphes s'étendent et prennent toute la place possible à l'intérieur de leur bloc conteneur. Si nous leur attribuons une largeur, ils continuent à s'afficher les uns en dessous des autres, même s'il y a suffisamment d'espace pour qu'ils soient côte à côte. Chacun d'entre eux commence au bord de départ du bloc conteneur, c'est-à-dire à l'endroit où les phrases commencent dans ce mode d'écriture.

```html live-sample___normal-flow-width
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée. Leurs noms étaient Stephen et Joseph Montgolfier, ils
    étaient papetiers de métier, et étaient connus pour posséder des esprits
    réfléchis et un profond intérêt pour toutes les connaissances scientifiques
    et les nouvelles découvertes.
  </p>
  <p>
    Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
    centaines de millions de personnes avaient regardé les volutes de fumée
    s'élever de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___normal-flow-width
p {
  border: 2px solid green;
  width: 40%;
}
```

{{EmbedLiveSample("normal-flow-width", "", 370)}}

### La fusion des marges

La spécification indique que les marges verticales entre chaque éléments de bloc _fusionnent_. Cela signifie que si un élément avec une marge en haut suit directement un élément avec une marge en bas, plutôt que la marge résultante soit la somme des deux marges, on a une fusion des marges et c'est uniquement la plus grande des marges qui est appliquée.

Dans l'exemple suivant, les paragraphes ont une marge en haut qui mesure `20px` et une marge en bas qui mesure `40px`. La taille de la marge entre les deux paragraphes est donc de `40px`, car la plus petite est fusionnée avec la plus grande.

```html live-sample___normal-flow-collapsing
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée. Leurs noms étaient Stephen et Joseph Montgolfier, ils
    étaient papetiers de métier, et étaient connus pour posséder des esprits
    réfléchis et un profond intérêt pour toutes les connaissances scientifiques
    et les nouvelles découvertes.
  </p>
  <p>
    Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
    centaines de millions de personnes avaient regardé les volutes de fumée
    s'élever de leurs feux sans en tirer une inspiration particulière.
  </p>
</div>
```

```css live-sample___normal-flow-collapsing
p {
  border: 2px solid green;
  margin: 20px 0 40px 0;
}
```

{{EmbedLiveSample("normal-flow-collapsing", "", 230)}}

Pour en savoir plus à propos de la fusion des marges, vous pouvez lire [l'article dédié à la fusion des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing).

> [!NOTE]
> Si vous n'êtes pas certain·e que les marges fusionnent, vérifiez les valeurs du modèle de boîte dans les outils de développement de votre navigateur. Cela vous permet de connaître la taille réelle de la marge, ce qui peut vous aider à comprendre ce qui se passe.
>
> ![Capture d'écran du panneau du modèle de boîte dans les outils de développement du navigateur, qui montre les quatre valeurs pour la marge, la bordure et le remplissage ainsi que la hauteur et la largeur dans un graphique en haut et liste box-sizing, display, float, line-height, position et z-index en dessous du graphique.](box-model.png)

## Les éléments qui participent à un contexte de formatage en ligne

Les éléments en ligne s'affichent les uns à la suite des autres, dans le sens de lecture des phrases selon le mode d'écriture utilisé. Même si l'on a tendance à ne pas considérer les éléments en ligne comme possédant une boîte, comme tout ce qui relève du CSS, c'est pourtant le cas. Ces boîtes en ligne sont disposées les unes à la suite des autres. S'il n'y a pas suffisamment d'espace dans le bloc conteneur pour accueillir toutes les boîtes, une boîte peut s'étendre sur une nouvelle ligne. Les lignes ainsi créées sont appelées boîtes de ligne.

Dans l'exemple suivant on a trois boîtes en ligne créées par un paragraphe avec un élément {{HTMLElement("strong")}} à l'intérieur.

```html live-sample___inline
<p>
  Avant cette nuit-là — <strong>une nuit mémorable</strong>, comme on venait de
  le constater — des centaines de millions de personnes avaient observé les
  volutes de fumée s'élevant de leurs feux sans que cela ne leur inspire quoi
  que ce soit de particulier.
</p>
```

{{EmbedLiveSample("inline")}}

Les boîtes entourant les mots situés avant l'élément `<strong>` et après l'élément `</strong>` sont appelées des boîtes anonymes, des boîtes introduites pour garantir que tout soit contenu dans une boîte, mais que l'on ne peut pas cibler directement.

La taille de la boîte de ligne dans le sens du bloc (c'est-à-dire la hauteur lorsque l'on travaille en français) est définie par la boîte la plus haute qu'elle contient. Dans l'exemple suivant, l'élément `<strong>` mesure 300%&nbsp;; comme ce contenu s'étend sur deux lignes, il définit désormais la hauteur des boîtes de ligne de ces deux lignes.

```html live-sample___line-box
<p>
  Avant cette nuit-là — <strong>une nuit mémorable</strong>, comme on venait de
  le constater — des centaines de millions de personnes avaient observé les
  volutes de fumée s'élevant de leurs feux sans que cela ne leur inspire quoi
  que ce soit de particulier.
</p>
```

```css live-sample___line-box
strong {
  font-size: 300%;
}
```

{{EmbedLiveSample("line-box")}}

Pour en savoir plus sur le comportement des boîtes en ligne et des boîtes de bloc, vous pouvez consulter [le guide sur le modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model).

## La propriété `display` et la disposition de flux

En plus des règles existantes dans CSS2.1, de nouveaux niveaux de CSS décrivent davantage le comportement des boîtes de bloc et en ligne. La propriété {{CSSxRef("display")}} définit comment une boîte et toutes les boîtes qu'elle contient se comportent. Dans le CSS Display Model Level 3, nous pouvons en apprendre davantage sur la façon dont la propriété `display` modifie le comportement des boîtes et des boîtes qu'elles génèrent.

Le type d'affichage d'un élément définit le type d'affichage externe&nbsp;; cela dicte comment la boîte s'affiche aux côtés des autres éléments dans le même contexte de formatage. Il définit également le type d'affichage interne, qui dicte comment les boîtes à l'intérieur de cet élément se comportent. Nous pouvons voir cela très clairement en considérant une disposition flexible. Dans l'exemple ci-dessous, on a un {{HTMLElement("div")}}, auquel on a donné `display: flex`. Le conteneur flexible se comporte comme un élément de bloc&nbsp;: il s'affiche sur une nouvelle ligne et prend tout l'espace disponible dans la direction en ligne. C'est le type d'affichage externe de `block`.

Les éléments flexibles, en revanche, participent à un contexte de formatage flexible, car leur parent est l'élément avec `display: flex`, qui a un type d'affichage interne de `flex`, établissant le contexte de formatage flexible pour les enfants directs.

```html live-sample___flex
<div class="conteneur">
  <div>Élément flexible</div>
  <div>Élément flexible</div>
  <div>
    <div>Les enfants</div>
    <div>sont dans</div>
    <div>le flux normal</div>
  </div>
</div>
```

```css live-sample___flex
.conteneur {
  display: flex;
}

.conteneur > * {
  border: 1px solid green;
}
```

{{EmbedLiveSample("flex")}}

Vous pouvez donc considérer que chaque boîte en CSS fonctionne de cette manière. La boîte elle-même possède un type d'affichage externe, ce qui lui permet de savoir comment se comporter par rapport aux autres boîtes. Elle possède ensuite un type d'affichage interne qui modifie le comportement de ses enfants. Ces enfants possèdent eux aussi un type d'affichage externe et interne. Les éléments flexible de l'exemple précédent deviennent des boîtes de niveau flexible, leur type d'affichage externe est donc déterminé par leur appartenance au contexte de formatage flexible. Ils possèdent toutefois un type d'affichage interne de type _flux_, ce qui signifie que leurs enfants participent au flux normal. Les éléments imbriqués à l'intérieur de notre élément flexible s'affichent comme des éléments en bloc et en ligne, à moins qu'un élément ne modifie leur type d'affichage.

Ce concept de type d'affichage externe et interne est important, car il nous indique qu'un conteneur utilisant une méthode de mise en page telle que les boîtes flexibles (`display: flex`) ou les grilles (`display: grid`) participe toujours à la mise en page en bloc et en ligne, en raison du type d'affichage externe de ces méthodes étant `block`.

### Modifier le contexte de formatage auquel un élément participe

Les navigateurs affichent les éléments en bloc ou en ligne en fonction de ce qui est normalement logique pour cet élément. Par exemple, un élément {{HTMLElement("strong")}} est utilisé pour mettre fortement en évidence un segment de contenu et est affiché en gras par défaut dans les navigateurs. Il n'est, généralement, pas logique que cet élément `<strong>` soit affiché comme un élément de niveau bloc, passant à une nouvelle ligne. Si vous souhaitez que tous les éléments `<strong>` soient affichés comme des boîtes de niveau bloc, vous pouvez le faire en définissant `strong { display: block; }`. La possibilité de mettre en forme le contenu avec CSS signifie que vous pouvez toujours utiliser les éléments HTML les plus sémantiques pour marquer votre contenu, puis modifier leur affichage avec CSS.

```html live-sample___change-formatting
<p>
  Avant cette nuit-là — <strong>une nuit mémorable</strong>, comme on venait de
  le constater — des centaines de millions de personnes avaient observé les
  volutes de fumée s'élevant de leurs feux sans que cela ne leur inspire quoi
  que ce soit de particulier.
</p>
```

```css live-sample___change-formatting
strong {
  display: block;
}
```

{{EmbedLiveSample("change-formatting")}}

## Résumé

Dans ce guide, nous avons vu comment les éléments étaient affichés dans le flux normal, comme éléments de bloc ou comme éléments en ligne. Les éléments HTML s'affichent par défaut de façon lisible sans CSS. En comprenant comment fonctionne le flux normal, vous comprenez comment apporter les modifications nécessaires pour parvenir à la disposition désirée.

## Voir aussi

- [Le modèle de boîte CSS de base](/fr/docs/Web/CSS/Guides/Box_model)
- [Apprendre&nbsp;: le flux normal](/fr/docs/Learn_web_development/Core/CSS_layout/Introduction#cours_normal)
- [Les éléments HTML en ligne](/fr/docs/Glossary/Inline-level_content)
- [Les éléments HTML de bloc](/fr/docs/Glossary/Block-level_content)
