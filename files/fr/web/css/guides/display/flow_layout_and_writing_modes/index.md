---
title: Disposition du flux et modes d'écriture
slug: Web/CSS/Guides/Display/Flow_layout_and_writing_modes
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

La spécification CSS 2.1, qui décrit le comportement classique du flux normal, prend l'hypothèse d'un mode d'écriture horizontal. [Les propriétés liées à la disposition](/fr/docs/Web/CSS/Guides/Display/Block_and_inline_layout) devraient fonctionner de façon identique pour les modes d'écritures verticaux. Dans ce guide, nous verrons comment le flux normal se comporte selon les différents modes d'écriture.

Ce guide n'est pas un guide exhaustif sur l'utilisation des modes d'écriture en CSS. Son objectif est de documenter les interactions, éventuellement inattendues, entre le flux et les modes d'écriture. Pour plus de ressources à ce sujet, vous pouvez vous référer aux [ressources externes](#ressources_externes) ainsi qu'à la section [Voir aussi](#voir_aussi) en fin de page.

## La spécification des modes d'écriture

Le module de spécification _CSS Writing Modes_ de niveau 3 définit l'impact du mode d'écriture sur le flux. Voici l'introduction [de la spécification <sup>(angl.)</sup>](https://drafts.csswg.org/css-writing-modes-3/#text-flow) quant aux modes d'écriture&nbsp;:

> «&nbsp;En CSS, un mode d'écriture est défini par les propriétés {{CSSxRef("writing-mode")}}, {{CSSxRef("direction")}} et {{CSSxRef("text-orientation")}}. Ce mode est principalement défini selon sa direction en ligne et selon sa direction de bloc.&nbsp;»

La spécification définit la direction en ligne comme la direction selon laquelle le contenu est ordonné sur une ligne. Cela définit le début et la fin de la direction en ligne. Le début correspond à l'emplacement du début d'une phrase sur la ligne et la fin correspond à l'emplacement où la ligne de texte se coupe pour passer sur une nouvelle ligne.

La direction de bloc correspond à la direction selon laquelle les boîtes (par exemple, les paragraphes) s'empilent pour ce mode d'écriture. La propriété `writing-mode` contrôle la direction de bloc. Si on souhaite changer la page ou une partie de la page afin d'utiliser la direction `vertical-lr`, on peut utiliser `writing-mode: vertical-lr` sur un élément. Cela a pour effet de modifier la direction de bloc et, par conséquent, de modifier la direction en ligne.

Les modes d'écritures peuvent être utilisés pour respecter la façon d'écrire de certaines langues. Ils peuvent également être utilisés à des fins stylistiques (pour avoir un titre vertical par exemple).

```html live-sample___creative-use
<div class="boite">
  <h1>Un titre</h1>
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée. Leurs noms étaient Stephen et Joseph Montgolfier, ils
    étaient papetiers de métier, et étaient connus pour posséder des esprits
    réfléchis et un profond intérêt pour toutes les connaissances scientifiques
    et les nouvelles découvertes.
  </p>
</div>
```

```css live-sample___creative-use
body {
  font: 1.2em sans-serif;
}
h1 {
  writing-mode: vertical-lr;
  float: left;
}
```

{{EmbedLiveSample("creative-use", "", 220)}}

## Direction du flux de bloc

La propriété {{CSSxRef("writing-mode")}} accepte les valeurs `horizontal-tb`, `vertical-rl` et `vertical-lr`. Ces valeurs contrôlent la direction dans laquelle les blocs s'écoulent sur la page. La valeur initiale est `horizontal-tb`, qui est une direction de flux de bloc de haut en bas avec une direction en ligne horizontale. Les langues de gauche à droite, comme l'anglais, et les langues de droite à gauche, comme l'arabe, sont toutes `horizontal-tb`.

L'exemple suivant montre des blocs utilisant explicitement la valeur initiale `horizontal-tb`&nbsp;:

```html live-sample___horizontal-tb
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

```css live-sample___horizontal-tb
body {
  font: 1.2em sans-serif;
}
.boite {
  writing-mode: horizontal-tb;
}
```

{{EmbedLiveSample("horizontal-tb", "", 240)}}

Comparez cela avec la valeur `vertical-rl`, qui vous donne une direction de flux de bloc de droite à gauche avec une direction en ligne verticale, comme le montre l'exemple suivant.

```html hidden live-sample___vertical-rl
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

```css live-sample___vertical-rl
body {
  font: 1.2em sans-serif;
}
.boite {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("vertical-rl", "", 300)}}

Le dernier exemple démontre la troisième valeur possible pour `writing-mode: vertical-lr`. Cela vous donne une direction de flux de bloc de gauche à droite et une direction en ligne verticale.

```html hidden live-sample___vertical-lr
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

```css live-sample___vertical-lr
body {
  font: 1.2em sans-serif;
}
.boite {
  writing-mode: vertical-lr;
}
```

{{EmbedLiveSample("vertical-lr", "", 300)}}

## Modes d'écriture imbriqués

Lorsqu'une boîte imbriquée se voit attribuer un mode d'écriture différent de celui de son parent, une boîte de niveau en ligne s'affiche comme si elle avait `display: inline-block`.

```html live-sample___inline-change-mode
<div class="boite">
  <p>
    Une nuit de <span>novembre</span> de l'année 1782, selon l'histoire, deux
    frères étaient assis près de leur feu d'hiver dans la petite ville française
    d'Annonay, regardant les volutes de fumée grise s'élever de l'âtre et se
    courber dans la large cheminée. Leurs noms étaient Stephen et Joseph
    Montgolfier, ils étaient papetiers de métier, et étaient connus pour
    posséder des esprits réfléchis et un profond intérêt pour toutes les
    connaissances scientifiques et les nouvelles découvertes.
  </p>
</div>
```

```css live-sample___inline-change-mode
body {
  font: 1.2em sans-serif;
}
.boite {
  writing-mode: vertical-rl;
}
.boite span {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline-change-mode", "", 240)}}

Une boîte de niveau bloc établit un nouveau [contexte de formatage de bloc (CFB)](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context), ce qui signifie que si son type d'affichage interne est `flow`, il obtient un type d'affichage calculé de `flow-root`. C'est illustré dans l'exemple suivant où la boîte qui s'affiche en `horizontal-tb` contient un flottant qui est contenu en raison de l'établissement d'un nouveau CFB par son parent.

```html live-sample___block-change-mode
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>

  <div>
    <div class="flottant"></div>
    Cette boîte doit établir un nouveau CFB.
  </div>

  <p>
    Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
    métier, et étaient connus pour posséder des esprits réfléchis et un profond
    intérêt pour toutes les connaissances scientifiques et les nouvelles
    découvertes.
  </p>
</div>
```

```css live-sample___block-change-mode
body {
  font: 1.2em sans-serif;
}
.boite {
  writing-mode: vertical-rl;
}
.boite > div {
  writing-mode: horizontal-tb;
  padding: 10px;
  border: 1px solid rebeccapurple;
}
.flottant {
  width: 100px;
  height: 150px;
  background-color: rebeccapurple;
  float: left;
}
```

{{EmbedLiveSample("block-change-mode", "", 500)}}

## Les éléments remplacés

Les éléments remplacés tels que les images ne changent pas d'orientation en fonction de la propriété `writing-mode`. Cependant, les éléments remplacés tels que les contrôles de formulaire qui incluent du texte devraient correspondre au mode d'écriture en cours.

```html live-sample___replaced
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>

  <img
    alt="une montgolfière colorée contre un ciel clair"
    src="https://mdn.github.io/shared-assets/images/examples/balloon.jpg" />

  <p>
    Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
    métier, et étaient connus pour posséder des esprits réfléchis et un profond
    intérêt pour toutes les connaissances scientifiques et les nouvelles
    découvertes.
  </p>
</div>
```

```css live-sample___replaced
body {
  font: 1.2em sans-serif;
}
.boite {
  writing-mode: vertical-rl;
}
```

{{EmbedLiveSample("replaced", "", 340)}}

## Les propriétés et valeurs logiques

Une fois que vous travaillez dans des modes d'écriture autres que `horizontal-tb`, de nombreuses propriétés et valeurs qui sont associées aux dimensions physiques de l'écran semblent étranges. Par exemple, si vous donnez à une boîte une largeur de 100px, dans `horizontal-tb` cela contrôle la taille dans la direction en ligne. Dans `vertical-lr`, cela contrôle la taille dans la direction de bloc, car elle ne tourne pas avec le texte.

```html live-sample___width
<div class="boite">
  <div class="boite1">Boîte 1</div>
  <div class="boite2">Boîte 2</div>
</div>
```

```css live-sample___width
body {
  font: 1.2em sans-serif;
}
.boite1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
.boite2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  width: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("width")}}

Par conséquent, nous avons les propriétés {{CSSxRef("block-size")}} et {{CSSxRef("inline-size")}}. Si nous donnons à notre bloc une `inline-size` de 100px, peu importe que nous soyons dans un mode d'écriture horizontal ou vertical&nbsp;; `inline-size` signifie toujours la taille dans la direction en ligne.

```html live-sample___inline-size
<div class="boite">
  <div class="boite1">Boîte 1</div>
  <div class="boite2">Boîte 2</div>
</div>
```

```css live-sample___inline-size
body {
  font: 1.2em sans-serif;
}
.boite1 {
  writing-mode: horizontal-tb;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
.boite2 {
  writing-mode: vertical-lr;
  border: 5px solid rebeccapurple;
  inline-size: 100px;
  margin: 10px;
}
```

{{EmbedLiveSample("inline-size", "", 200)}}

Le module [des propriétés et valeurs logiques CSS](/fr/docs/Web/CSS/Guides/Logical_properties_and_values) inclut des versions logiques des propriétés qui contrôlent les marges, le padding et les bordures, ainsi que d'autres associations pour des éléments que nous avons typiquement utilisés avec des directions physiques.

## Résumé

Dans la plupart des cas, la disposition de flux fonctionne comme prévu lorsqu'on change le mode d'écriture de l'ensemble du document ou de sections individuelles. Cela peut être utilisé pour composer correctement des langues verticales ou pour des raisons créatives. Avec les propriétés et valeurs logiques CSS, la taille en mode d'écriture vertical peut être basée sur la taille en ligne et en bloc d'un élément. C'est utile pour créer des composants qui fonctionnent dans différents modes d'écriture.

## Voir aussi

- [Les modes d'écriture](/fr/docs/Web/CSS/Guides/Writing_modes)
- [Modes d'écriture et mise en page CSS <sup>(angl.)</sup>](https://www.smashingmagazine.com/2019/08/writing-modes-layout/) sur Smashing Magazine (2019)
- [Modes d'écriture CSS <sup>(angl.)</sup>](https://24ways.org/2016/css-writing-modes/) sur 24ways.org (2016)
