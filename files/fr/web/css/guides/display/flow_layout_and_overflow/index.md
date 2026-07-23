---
title: Disposition du flux et débordement
slug: Web/CSS/Guides/Display/Flow_layout_and_overflow
l10n:
  sourceCommit: 32bdfdb82cf91ce9942b694286dec62be2cc20aa
---

Lorsqu'un élément contient plus de contenu qu'il ne peut en contenir, il se produit un débordement. Il est important de comprendre le comportement du débordement pour gérer tout élément dont la taille est limitée en CSS. Ce guide explique le fonctionnement du débordement dans le cadre d'un flux normal.
Le code HTML est identique dans chaque exemple, il est donc visible dans la première section et masqué dans les autres par souci de concision.

## Qu'est-ce que le dépassement ?

En attribuant à un élément une hauteur et une largeur fixes, puis en ajoutant un contenu volumineux à la boîte, on obtient un exemple simple de débordement&nbsp;:

```html live-sample___overflow
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>
</div>
<p>
  Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
  métier, et étaient connus pour posséder des esprits réfléchis et un profond
  intérêt pour toutes les connaissances scientifiques et les nouvelles
  découvertes.
</p>
<p>
  Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
  centaines de millions de personnes avaient regardé les volutes de fumée
  s'élever de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___overflow
body {
  font: 1.2em / 1.5 sans-serif;
}

.boite {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
}
```

{{EmbedLiveSample("overflow", "", 370)}}

Le contenu «&nbsp;arrive&nbsp;» dans la boîte. Une fois qu'elle est remplie, il continue à déborder de manière visible, affichant du contenu en dehors de la boîte, éventuellement sous le contenu environnant. La propriété qui contrôle le comportement du dépassement est la propriété {{CSSxRef("overflow")}} dont la valeur initiale est `visible`. C'est pourquoi nous pouvons voir le contenu dépasser.

## Contrôler le dépassement

Il existe d'autres valeurs qui contrôlent le comportement du contenu dépassant. Pour masquer le contenu dépassant, utilisez la valeur `hidden`. Cela peut entraîner que certains de vos contenus ne soient pas visibles.

```html hidden live-sample___hidden
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>
</div>
<p>
  Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
  métier, et étaient connus pour posséder des esprits réfléchis et un profond
  intérêt pour toutes les connaissances scientifiques et les nouvelles
  découvertes.
</p>
<p>
  Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
  centaines de millions de personnes avaient regardé les volutes de fumée
  s'élever de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___hidden
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: hidden;
}
```

{{EmbedLiveSample("hidden", "", 370)}}

Utiliser une valeur de `scroll` contient le contenu dans sa boîte et ajoute des barres de défilement pour permettre de le visualiser. Des barres de défilement sont ajoutées même si le contenu tient dans la boîte.

```html hidden live-sample___scroll
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>
</div>
<p>
  Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
  métier, et étaient connus pour posséder des esprits réfléchis et un profond
  intérêt pour toutes les connaissances scientifiques et les nouvelles
  découvertes.
</p>
<p>
  Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
  centaines de millions de personnes avaient regardé les volutes de fumée
  s'élever de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___scroll
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: scroll;
}
```

{{EmbedLiveSample("scroll", "", 370)}}

Utiliser une valeur de `auto` affiche le contenu sans barres de défilement si le contenu tient dans la boîte. Si ce n'est pas le cas, des barres de défilement sont ajoutées. En comparant l'exemple suivant, vous devez voir que l'exemple `overflow: scroll` ci-dessus avec des barres de défilement horizontales et verticales même s'il n'a besoin que d'un défilement vertical. L'exemple `auto` ci-dessous n'ajoute la barre de défilement que dans la direction où nous devons faire défiler.

```html hidden live-sample___auto
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>
</div>
<p>
  Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
  métier, et étaient connus pour posséder des esprits réfléchis et un profond
  intérêt pour toutes les connaissances scientifiques et les nouvelles
  découvertes.
</p>
<p>
  Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
  centaines de millions de personnes avaient regardé les volutes de fumée
  s'élever de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___auto
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow: auto;
}
```

{{EmbedLiveSample("auto", "", 370)}}

Comme nous l'avons déjà appris, l'utilisation de l'une de ces valeurs, autre que la valeur par défaut `visible`, crée un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context).

`overflow: clip` agit comme `overflow: hidden`, mais il ne permet pas le défilement programmatique&nbsp;; la boîte devient non défilable. Il ne crée pas non plus de contexte de formatage de bloc.

La propriété de débordement est en réalité un raccourci pour les propriétés {{CSSxRef("overflow-x")}} et {{CSSxRef("overflow-y")}}. Si vous ne définissez qu'une seule valeur pour overflow, cette valeur est utilisée pour les deux axes. Cependant, vous pouvez définir les deux valeurs, auquel cas la première est utilisée pour `overflow-x` et donc la direction horizontale, et la seconde pour `overflow-y` et la direction verticale. Dans l'exemple ci-dessous, nous n'avons défini que `overflow-y: scroll` afin de ne pas obtenir la barre de défilement horizontale indésirable.

```html hidden live-sample___overflow-y
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>
</div>
<p>
  Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
  métier, et étaient connus pour posséder des esprits réfléchis et un profond
  intérêt pour toutes les connaissances scientifiques et les nouvelles
  découvertes.
</p>
<p>
  Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
  centaines de millions de personnes avaient regardé les volutes de fumée
  s'élever de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___overflow-y
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  width: 300px;
  height: 100px;
  border: 5px solid rebeccapurple;
  padding: 10px;
  overflow-y: scroll;
}
```

{{EmbedLiveSample("overflow-y", "", 370)}}

## Les propriétés relatives

Dans le guide consacré aux [modes d'écriture et à la disposition de flux](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes), nous avons examiné les propriétés `block-size` et `inline-size`, qui s'avèrent plus pertinentes lorsque l'on travaille avec différents modes d'écriture plutôt que de lier notre mise en page aux dimensions physiques de l'écran. Le [module de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow) inclut également des propriétés relatives au flux pour le débordement - [`overflow-block`](/fr/docs/Web/CSS/Reference/At-rules/@media/overflow-block) et [`overflow-inline`](/fr/docs/Web/CSS/Reference/At-rules/@media/overflow-inline). Celles-ci correspondent à `overflow-x` et `overflow-y`, mais la correspondance dépend du mode d'écriture du document.

## Gérer le dépassement

Dans la spécification de niveau 3 sur le dépassement, certaines propriétés aident à améliorer l'apparence du contenu lors d'un dépassement.

### Dépassement sur l'axe en ligne

La propriété {{CSSxRef("text-overflow")}} gère le dépassement du texte dans la direction en ligne. Elle prend l'une des deux valeurs `clip`, auquel cas le contenu est coupé lorsqu'il dépasse, c'est la valeur initiale et donc le comportement par défaut. Nous avons également `ellipsis` qui rend une ellipse, qui peut être remplacée par un caractère plus approprié pour la langue ou le mode d'écriture utilisé.

```html hidden live-sample___text-overflow
<div class="boite">
  <p>
    Une nuit de novembre de l'année 1782, selon l'histoire, deux frères étaient
    assis près de leur feu d'hiver dans la petite ville française d'Annonay,
    regardant les volutes de fumée grise s'élever de l'âtre et se courber dans
    la large cheminée.
  </p>
</div>
<p>
  Leurs noms étaient Stephen et Joseph Montgolfier, ils étaient papetiers de
  métier, et étaient connus pour posséder des esprits réfléchis et un profond
  intérêt pour toutes les connaissances scientifiques et les nouvelles
  découvertes.
</p>
<p>
  Avant cette nuit—une nuit mémorable, comme elle allait le prouver—des
  centaines de millions de personnes avaient regardé les volutes de fumée
  s'élever de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___text-overflow
body {
  font: 1.2em / 1.5 sans-serif;
}
.boite {
  width: 300px;
  border: 5px solid rebeccapurple;
  padding: 10px;
}

.boite p {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

{{EmbedLiveSample("text-overflow", "", 220)}}

### Dépassement sur l'axe de bloc

La spécification [de débordement CSS Niveau 4 <sup>(angl.)</sup>](https://drafts.csswg.org/css-overflow-4/#propdef-block-ellipsis) ajoute une propriété `block-ellipsis` ([anciennement appelée `block-overflow` <sup>(angl.)</sup>](https://github.com/w3c/csswg-drafts/commit/20b15b4d66b0fdfa8406f1ce28604128f02ee7bb)). Cette propriété permet d'ajouter une ellipse (ou des chaînes de caractères personnalisées) lorsque le texte dépasse dans la dimension de bloc, bien qu'il n'y ait pas de support navigateur pour cela au moment de la rédaction.

Ceci est utile dans le cas où vous avez une liste d'articles, par exemple, et que vous affichez les articles dans des boîtes de hauteur fixe qui ne prennent qu'une quantité limitée de texte. Il peut ne pas être évident pour le·a lecteur·ice que d'avantage de contenu est à cliquer lorsqu'il·elle clique sur la boîte ou le titre. Une ellipse indique clairement qu'il y a plus de contenu. La spécification permet d'insérer une chaîne de caractères de contenu ou une ellipse régulière.

## Résumé

Que vous travailliez avec des médias continus sur le Web ou avec des médias paginés, tels que les supports imprimés ou les fichiers EPUB, il est utile de comprendre comment le contenu déborde, quelle que soit la méthode de mise en page utilisée. Comprendre le fonctionnement du débordement dans le flux normal permet de mieux appréhender les implications du contenu débordant dans des méthodes de mise en page telles que les grilles ou les boîtes flexibles.

## Voir aussi

- Le guide [de débordement du contenu](/fr/docs/Learn_web_development/Core/Styling_basics/Overflow)
- Le module [de débordement CSS](/fr/docs/Web/CSS/Guides/Overflow)
- Le module [de compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
