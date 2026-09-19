---
title: Introduction aux contextes de formatage
slug: Web/CSS/Guides/Display/Formatting_contexts
l10n:
  sourceCommit: 19497692665c3551b4097af5cd9f52f84564cefd
---

Cet article présente le concept des contextes de formatage, dont il existe plusieurs types, notamment les contextes de formatage en bloc, les contextes de formatage en incise et les contextes de formatage flexibles. Il aborde également les principes de base de leur fonctionnement et explique comment tirer parti de ces comportements.

Tout élément d'une page fait partie d'un **contexte de formatage**, c'est-à-dire d'une zone définie pour organiser le contenu d'une manière particulière. Un **contexte de mise en forme de bloc** (BFC) dispose les éléments enfants selon les règles de mise en page des blocs, un **contexte de mise en forme flexible** dispose ses enfants en tant {{Glossary("flex item", "qu'éléments flexibles")}}, etc. Chaque contexte de formatage a des règles spécifiques concernant le comportement de la mise en page lorsqu'elle s'applique à ce contexte.

## Le contexte de formatage de bloc

L'élément le plus extérieur d'un document utilisant les règles de mise en page par blocs établit le premier, ou **le contexte de mise en forme de bloc initial**. Cela signifie que chaque élément situé à l'intérieur du bloc de l'élément `<html>` est disposé selon le flux normal, conformément aux règles de mise en page par blocs et en incise. Les éléments faisant partie d'un contexte de formatage de bloc suivent les règles définies par le modèle de boîte CSS, qui précise comment les marges, les bordures et le remplissage d'un élément interagissent avec les autres blocs du même contexte.

### Créer un nouveau contexte de formatage de bloc

Le élément {{HTMLElement("html")}} n'est pas le seul élément capable de créer un contexte de formatage de bloc. Tout élément de niveau bloc peut être amené à créer un contexte de formatage de bloc par l'application de certaines propriétés CSS.

Un nouveau contexte de formatage de bloc est créé dans les situations suivantes&nbsp;:

- les éléments flottants grâce à la propriété {{CSSxRef("float")}}
- les éléments [positionnés absolument](/fr/docs/Web/CSS/Reference/Properties/position#types_of_positioning)
- les éléments avec {{CSSxRef("display#inline-block", "display: inline-block")}}
- les cellules de tableau ou les éléments avec `display: table-cell`, y compris les cellules de tableau anonymes créées lors de l'utilisation des propriétés `display: table-*`
- les légendes de tableau ou les éléments avec `display: table-caption`
- les éléments de bloc dont la propriété `overflow` a une valeur autre que `visible`
- les éléments avec `display: flow-root` ou `display: flow-root list-item`
- les éléments avec {{CSSxRef("contain#layout", "contain: layout")}}, `content`, ou `strict`
- les conteneurs de requêtes (éléments dont {{CSSxRef("container-type")}} n'est pas `normal`)
- les {{Glossary("flex item", "éléments flexibles")}}
- les éléments de grille
- les [conteneurs multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout/Basic_concepts)
- les éléments avec {{CSSxRef("column-span")}} défini sur `all`

C'est utile, car un nouveau contexte de formatage de bloc se comporte un peu comme le document le plus externe en ce sens qu'il devient une mini-disposition à l'intérieur de la disposition principale. Un contexte de formatage de bloc contient tout ce qui se trouve à l'intérieur, {{CSSxRef("float")}} et {{CSSxRef("clear")}} ne s'appliquent qu'aux éléments à l'intérieur du même contexte de formatage, et les marges ne s'effondrent qu'entre les éléments du même contexte de formatage.

### Exemples de création de contexte de formatage de bloc

Regardons quelques-uns de ces exemples afin de voir l'effet de la création d'un nouveau contexte de formatage de bloc.

Dans l'exemple ci-dessous, nous avons un élément flottant à l'intérieur d'un `<div>` avec une bordure appliquée. Le contenu de ce `<div>` flotte à côté de l'élément flottant. Comme le contenu du flottant est plus grand que le contenu à côté, la bordure du `<div>` traverse maintenant le flottant. Comme expliqué dans le [guide sur les éléments en flux et hors flux](/fr/docs/Web/CSS/Guides/Display/In_flow_and_out_of_flow), le flottant a été retiré du flux, donc l'arrière-plan et la bordure du div ne contiennent que le contenu et non le flottant.

```html live-sample___float
<div class="boite">
  <div class="float">Je suis une boîte flottante&nbsp;!</div>
  <p>Je suis le contenu à l'intérieur du conteneur.</p>
</div>
```

```css live-sample___float
body {
  font: 1.2em sans-serif;
}

.boite {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
}

.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("float")}}

En créant un nouveau contexte de formatage de bloc, l'élément flottant est contenu dans ce contexte. Par le passé, une méthode classique consiste à appliquer `overflow: auto` ou à utiliser d'autres valeurs que `overflow: visible`.

```html hidden live-sample___bfc-overflow
<div class="boite">
  <div class="float">Je suis une boîte flottante&nbsp;!</div>
  <p>Je suis le contenu à l'intérieur du conteneur.</p>
</div>
```

```css live-sample___bfc-overflow
body {
  font: 1.2em sans-serif;
}
.boite {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  overflow: auto;
}

.float {
  float: left;
  width: 200px;
  height: 150px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-overflow", "", 220)}}

En utilisant `overflow: auto`, on crée un nouveau contexte de formatage de bloc qui contient l'élément flottant. Notre élément `div` devient en quelque sorte responsable de sa disposition interne et chaque élément enfant est intégré dans cette disposition.

Toutefois, utiliser `overflow` pour créer un nouveau contexte de formatage de bloc peut poser problème, car la propriété `overflow` est avant tout conçue pour indiquer au navigateur comment on souhaite gérer le contenu qui dépasse. On peut obtenir des situations où on obtient des barres de défilement indésirables ou des ombres rognées lorsqu'on utilise principalement cette propriété pour créer un nouveau contexte de formatage de bloc. De plus, cette méthode peut ne pas être évidente et lisible pour un·e autre développeur·euse, car il peut ne pas être évident pourquoi vous avez utilisé `overflow` à cette fin. Si vous faites cela, il est judicieux de commenter le code pour l'expliquer.

### Créer un contexte de formatage de bloc explicite avec `display: flow-root`

Utiliser `display: flow-root` (ou `display: flow-root list-item`) sur le bloc englobant créé un nouveau contexte de formatage de bloc sans aucun autre effet secondaire potentiellement problématique.

```html hidden live-sample___bfc-flow-root
<div class="boite">
  <div class="float">Je suis une boîte flottante&nbsp;!</div>
  <p>Je suis le contenu à l'intérieur du conteneur.</p>
</div>
```

```css live-sample___bfc-flow-root
body {
  font: 1.2em sans-serif;
}
.boite {
  background-color: rgb(224 206 247);
  border: 5px solid rebeccapurple;
  display: flow-root;
}
```

```css hidden live-sample___bfc-flow-root
.float {
  float: left;
  width: 200px;
  height: 100px;
  background-color: white;
  border: 1px solid black;
  padding: 10px;
}
```

{{EmbedLiveSample("bfc-flow-root")}}

Avec `display: flow-root` sur le {{HTMLElement("div")}}, tout le contenu à l'intérieur de ce conteneur participe au contexte de formatage de bloc de ce conteneur, et les éléments flottants ne sont pas éjectés en bas de l'élément.

Le nom de cette valeur, `flow-root`, prend son sens lorsqu'on voit que l'élément agit comme une racine (`root`) pour le nouveau contexte qui est créé, de la même manière que le fait {{HTMLElement("html")}}, étant donné la façon dont le nouveau contexte est créé et comment son modèle de flux fonctionne.

## Un contexte de formatage en incise

Les contextes de formatage en incise existent au sein d'autres contextes de formatage et peuvent être considérés comme le contexte d'un paragraphe. Le paragraphe crée un contexte de formatage en incise au sein duquel des éléments tels que {{HTMLElement("strong")}}, {{HTMLElement("a")}} ou {{HTMLElement("span")}} sont utilisés sur le texte.

Le modèle de boîte ne s'applique pas entièrement aux éléments participant à un contexte de formatage en incise. Dans une mode d'écriture horizontale, le remplissage horizontal, les bordures et les marges sont appliqués à l'élément et repoussent le texte vers la gauche et vers la droite. En revanche, les marges situées au-dessus et en dessous de l'élément ne sont pas prises en compte. Le remplissage vertical et les bordures sont prises en compte, mais peuvent chevaucher le contenu situé au-dessus et en dessous, car, dans le contexte de formatage en incise, les boîtes de incise ne sont pas écartées par le remplissage et les bordures.

```html live-sample___inline
<p>
  Avant cette nuit — <strong>une nuit mémorable</strong>, comme cela doit le
  prouver — des centaines de millions de personnes ont observé les volutes de
  fumée s'élevant de leurs feux sans en tirer une inspiration particulière.
</p>
```

```css live-sample___inline
body {
  font: 1.2em sans-serif;
}
p {
  margin-top: 2em;
}
strong {
  margin: 20px;
  padding: 20px;
  border: 5px solid rebeccapurple;
}
```

{{EmbedLiveSample("inline")}}

## Les autres contextes de formatage

Ce guide porte sur la disposition de flux et n'aborde pas tous les contextes de formatage possibles en dehors de ce type de disposition. Il est important de comprendre que n'importe quel contexte de formatage modifie la façon dont ses éléments et son contenu sont organisés. Le comportement des autres contextes de formatage est décrit dans les modules de spécification respectifs et sur MDN.

## Résumé

Dans ce guide, nous avons approfondi les notions relatives aux contextes de formatage en incise et de bloc. Dans le prochain guide, nous voyons [les interactions entre le flux normal et les différents modes d'écriture](/fr/docs/Web/CSS/Guides/Display/Flow_layout_and_writing_modes).

## Voir aussi

- [Le contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Modèle de formatage visuel](/fr/docs/Web/CSS/Guides/Display/Visual_formatting_model)
- [Modèle de boîte CSS](/fr/docs/Web/CSS/Guides/Box_model)
