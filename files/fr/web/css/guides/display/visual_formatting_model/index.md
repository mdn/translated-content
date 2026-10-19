---
title: Modèle de mise en forme visuelle
slug: Web/CSS/Guides/Display/Visual_formatting_model
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

En CSS, le **modèle de mise en forme visuelle** décrit la manière dont les agents utilisateurs traitent l'arborescence du document, la transforment et l'affichent pour les supports visuels. Cela inclut les {{Glossary("continuous media", "supports continus")}}, tels qu'un écran d'ordinateur, et les [supports paginés](/fr/docs/Web/CSS/Guides/Paged_media), tels qu'un livre ou un document imprimé à l'aide des fonctions d'impression du navigateur. La plupart de ces informations s'appliquent aussi bien aux supports continus qu'aux supports paginés.

Dans le modèle de mise en forme visuelle, chaque élément de l'arborescence du document génère zéro ou plusieurs boîtes, conformément au modèle de boîte. La disposition de ces boîtes est régie par&nbsp;:

- Les dimensions et le type des boîtes.
- Le schéma de positionnement (positionnement normal, flottant et absolu).
- Les relations entre les éléments dans l'arborescence du document.
- Les informations externes (par exemple, la taille de la zone d'affichage, les dimensions intrinsèques des images, etc.).

Une grande partie des informations relatives au modèle de formatage visuel est définie dans CSS2, cependant, divers modules de disposition CSS ont développé ces informations. En lisant les spécifications, vous trouvez souvent des références au modèle tel qu'il est défini dans CSS2, il est donc utile de bien comprendre ce modèle et les termes utilisés pour le décrire dans CSS2 lorsque vous consultez d'autres spécifications de disposition.

Dans ce document, nous définissons le modèle et présentons certains des termes et concepts associés, en référençant des pages plus spécifiques pour plus de détails.

## Le rôle de la zone d'affichage

Dans les supports continus, la {{Glossary("viewport", "zone d'affichage")}} correspond à la zone visible de la fenêtre du navigateur. Les agents utilisateurs peuvent modifier la mise en page lorsque la taille de la zone d'affichage change — par exemple, si vous redimensionnez votre fenêtre ou si vous modifiez l'orientation d'un appareil mobile.

Si la zone d'affichage est plus petite que la taille du document, l'agent utilisateur doit alors proposer un moyen de faire défiler les parties du document qui ne sont pas affichées. Le plus souvent, cela se traduit par un défilement dans la **dimension de bloc** — verticalement dans une langue écrite de gauche à droite. Cependant, vous pouvez également concevoir un élément nécessitant un défilement dans la **dimension en incise**.

## Génération de la boîte

La **génération de boîtes** est la partie du modèle de formatage visuel CSS qui crée des boîtes à partir des éléments du document. Les boîtes générées sont de différents types, ce qui affecte leur formatage visuel. Le type de boîte générée dépend de la valeur de la propriété CSS {{CSSxRef("display")}}.

Initialement définie dans CSS2, la propriété `display` a été étendue dans les modules [d'affichage CSS](/fr/docs/Web/CSS/Guides/Display), [modèle de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout), [modèle de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) et [modèle ruby CSS](/fr/docs/Web/CSS/Guides/Ruby_layout). De plus, certaines des terminologies autour de la propriété `display` ont été mises à jour et clarifiées au fil des années depuis CSS2.

CSS prend votre document source et le rend sur une toile. Pour ce faire, il génère une structure intermédiaire, **l'arbre de boîtes**, qui représente la structure de formatage du document rendu. Chaque boîte dans l'arbre de boîtes représente son élément correspondant (ou pseudo-élément) dans l'espace et/ou le temps sur la toile, tandis que chaque portion de texte dans l'arbre de boîtes représente de même le contenu de ses nœuds de texte correspondants.

Ensuite, pour chaque élément, CSS génère zéro ou plusieurs boîtes comme défini par la valeur de la propriété `display` de cet élément.

> [!NOTE]
> Les boîtes sont souvent désignées par leur type d'affichage — par exemple, une boîte générée par un élément avec `display: block` est appelée une «&nbsp;boîte de bloc&nbsp;» ou simplement un «&nbsp;bloc&nbsp;». Notez cependant que les boîtes de bloc, les boîtes de niveau bloc et les conteneurs de bloc sont tous subtilement différents&nbsp;; voir la section [boîtes de bloc](#les_boîtes_en_bloc) ci-dessous pour plus de détails.

### La boîte principale

Lorsqu'un élément génère une ou plusieurs boîtes, l'une d'entre elles est la **boîte principale**, qui contient ses boîtes descendantes et le contenu généré dans l'arbre de boîtes, et est également la boîte impliquée dans tout schéma de positionnement.

Certains éléments peuvent générer des boîtes supplémentaires en plus de la boîte principale, par exemple `display: list-item` génère plus d'une boîte (par exemple, une **boîte de bloc principale** et une **boîte de marqueur enfant**). Et certaines valeurs (comme `none` ou `contents`) font que l'élément et/ou ses descendants ne génèrent aucune boîte.

### Les boîtes anonymes

Une **boîte anonyme** est créée lorsqu'il n'y a pas d'élément HTML à utiliser pour la boîte. Cette situation se produit, par exemple, lorsque vous déclarez `display: flex` sur un élément parent, et qu'à l'intérieur se trouve directement un texte non contenu dans un autre élément. Afin de corriger l'arbre de boîtes, une boîte anonyme est créée autour de ce texte. Elle se comporte alors comme un élément flexible, cependant, elle ne peut pas être ciblée et mise en forme comme une boîte normale, car il n'y a pas d'élément à cibler.

```html live-sample___anonymous-flex
<div class="flex">
  Je suis enveloppé dans une boîte anonyme
  <p>Je suis dans le paragraphe</p>
  Je suis enveloppé dans une boîte anonyme.
</div>
```

```css live-sample___anonymous-flex
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.flex {
  display: flex;
}

.flex > * {
  background-color: rebeccapurple;
  color: white;
}
```

{{EmbedLiveSample("anonymous-flex")}}

Le même phénomène se produit lorsque vous avez des séquences de texte entrecoupées d'éléments de bloc. Dans l'exemple suivant, j'ai une chaîne de caractères à l'intérieur d'un `<div>`&nbsp;; au milieu de ma chaîne de caractères se trouve un élément `<p>` contenant une partie du texte.

```html live-sample___anonymous-block
<div class="exemple">
  Je suis enveloppé dans une boîte anonyme
  <p>Je suis dans le paragraphe</p>
  Je suis enveloppé dans une boîte anonyme.
</div>
```

```css live-sample___anonymous-block
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.exemple > * {
  background-color: rebeccapurple;
  color: white;
}
```

{{EmbedLiveSample("anonymous-block")}}

La chaîne de caractères est divisée en trois boîtes dans l'arbre des boîtes. La partie de la chaîne de caractères avant l'élément de paragraphe est enveloppée dans une boîte anonyme, puis nous avons le `<p>`, qui génère une boîte, et enfin une autre boîte anonyme.

Une chose à garder à l'esprit concernant ces boîtes anonymes est qu'elles héritent des styles de leur parent direct, mais qu'il n'est pas possible de modifier leur apparence en les ciblant directement. Dans mes exemples, j'utilise un sélecteur d'enfants directs pour cibler les enfants du conteneur. Cela ne modifie pas les boîtes anonymes, car elles ne sont pas des «&nbsp;éléments&nbsp;» à proprement parler.

Les **boîtes anonymes en incise** sont créées lorsqu'une chaîne de caractères est divisée par un élément en incise, par exemple, une phrase qui inclut une section enveloppée avec `<em></em>`. Cela divise la phrase en trois boîtes en incise — une boîte anonyme en incise avant la section mise en emphase, la section enveloppée dans l'élément `<em>`, puis une dernière boîte anonyme en incise. Comme pour les boîtes anonymes en bloc, ces boîtes anonymes en incise ne peuvent pas être mises en forme indépendamment de la manière dont le `<em>` peut l'être&nbsp;; elles héritent simplement des styles de leur conteneur.

D'autres contextes de formatage créent également des boîtes anonymes. Les [dispositions en grille](/fr/docs/Web/CSS/Guides/Grid_layout) se comporte de la même manière que l'exemple des [boîtes flexibles](/fr/docs/Web/CSS/Guides/Flexible_box_layout) ci-dessus, en transformant les chaînes de caractères de texte en un élément de grille doté d'une boîte anonyme. La mise en page [multi-colonnes](/fr/docs/Web/CSS/Guides/Multicol_layout) crée des boîtes de colonne anonymes autour des colonnes&nbsp;; celles-ci ne peuvent pas non plus être mises en forme ni ciblées d'une quelconque manière. La [disposition en tableau](/fr/docs/Web/CSS/Guides/Table) ajoute des boîtes anonymes pour créer une structure de tableau correcte — par exemple en ajoutant une ligne de tableau anonyme — s'il n'y a pas de boîte avec `display: table-row`.

### Les boîtes en incise

Les **boîtes en incise** sont les boîtes qui enveloppent chaque ligne de texte. Vous pouvez voir la différence entre les boîtes de ligne et leur bloc englobant si vous faites flotter un élément, puis le faites suivre par un bloc doté d'une couleur d'arrière-plan.

Dans l'exemple suivant, les boîtes de ligne qui suivent le `<div>` flottant sont raccourcies pour envelopper l'élément flottant. L'arrière-plan de la boîte passe derrière l'élément flottant, car l'élément flottant a été retiré du flux.

```html live-sample___line-boxes
<div class="float"></div>
<p class="suiveur">
  Ce texte suit l'élément flottant, les boîtes de ligne sont raccourcies pour
  lui faire de la place, mais la boîte de l'élément occupe toujours une position
  dans le flux normal.
</p>
```

```css live-sample___line-boxes
body {
  font: 1.2em sans-serif;
  margin: 20px;
}

.float {
  float: left;
  width: 150px;
  height: 150px;
  background-color: rebeccapurple;
  margin: 20px;
}

.suiveur {
  background-color: #cccccc;
}
```

{{EmbedLiveSample("line-boxes", "", 250)}}

## Schémas de positionnement et éléments dans le flux et hors du flux

En CSS, une boîte peut être disposée selon trois schémas de positionnement — le **flux normal**, les **éléments flottants** ou le **positionnement absolu**.

### Flux normal

En CSS, le flux normal inclut la mise en forme de niveau bloc des boîtes de bloc, la mise en forme de niveau en incise des boîtes en incise, ainsi que le positionnement relatif et collant des boîtes de niveau bloc et de niveau en incise.

Lisez-en davantage sur la [disposition dans le flux](/fr/docs/Web/CSS/Guides/Display/Flow_layout) en CSS.

### Éléments flottants

Dans le modèle des éléments flottants, une boîte est d'abord disposée selon le flux normal, puis retirée du flux et positionnée, généralement à gauche ou à droite. Le contenu peut s'écouler le long d'un élément flottant.

Apprenez-en davantage sur les [éléments flottants](/fr/docs/Learn_web_development/Core/CSS_layout/Floats).

### Positionnement absolu

Dans le modèle de positionnement absolu (qui inclut également le positionnement `fixed`), une boîte est entièrement retirée du flux normal et se voit attribuer une position relative à un bloc englobant (qui est la zone d'affichage dans le cas du positionnement fixe) ou à un ou plusieurs éléments d'ancrage dans le [positionnement par des ancres CSS](/fr/docs/Web/CSS/Guides/Anchor_positioning).

Un élément est dit **hors du flux** s'il est flottant, positionné de manière absolue ou s'il s'agit de l'élément racine. Un élément est dit **dans le flux** s'il n'est pas hors du flux.

Lisez la page sur la [disposition positionnée en CSS](/fr/docs/Web/CSS/Guides/Positioned_layout).

## Contextes de formatage et propriété `display`

Les boîtes peuvent être décrites comme ayant un **type d'affichage externe**, qui est `block` ou `inline`. Ce type d'affichage externe décrit le comportement de la boîte avec les autres éléments de la page.

Les boîtes ont également un type d'affichage interne, qui détermine le comportement de leurs éléments enfants. Pour la disposition normale en bloc et en incise, ou le flux normal, ce type d'affichage est `flow`. Cela signifie que les éléments enfants sont également soit `block`, soit `inline`.

Cependant, le type d'affichage interne peut être `grid` ou `flex`, auquel cas les enfants directs s'affichent comme une grille ou comme des éléments flexibles. Dans ce cas, l'élément est décrit comme créant un [contexte de formatage](/fr/docs/Web/CSS/Guides/Display/Formatting_contexts) de grille ou flexible. À bien des égards, cela ressemble à un contexte de formatage de bloc, mais les enfants se comportent comme des éléments flexibles ou de grille plutôt que comme des éléments du flux normal.

Les interactions entre les boîtes de niveau bloc et de niveau en incise sont décrites dans la référence de la propriété {{CSSxRef("display")}}.

De plus, les références des valeurs précises de l'affichage expliquent le fonctionnement de ces contextes de formatage en matière de disposition des boîtes.

- Le module de [disposition de grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout)
- Le module de [disposition de boîte flexible CSS](/fr/docs/Web/CSS/Guides/Flexible_box_layout)
- Le module de [disposition multi-colonne CSS](/fr/docs/Web/CSS/Guides/Multicol_layout)
- Le module de [disposition de tableau CSS](/fr/docs/Web/CSS/Guides/Table)
- Le module de [listes et compteurs CSS](/fr/docs/Web/CSS/Guides/Lists)

### Contextes de formatage indépendants

Les éléments participent soit au contexte de formatage de leur bloc englobant, soit établissent un contexte de formatage indépendant. Un conteneur de grille, par exemple, établit un nouveau **contexte de formatage de grille** pour ses enfants.

Les **contextes de formatage indépendants** contiennent les éléments flottants, et les marges ne s'effondrent pas au-delà des limites du contexte de formatage. Par conséquent, créer un nouveau contexte de formatage de bloc peut garantir que les éléments flottants et les marges restent à l'intérieur d'une boîte. Pour ce faire, ajoutez `display: flow-root` à la boîte sur laquelle vous souhaitez créer un nouveau [contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context).

L'exemple suivant montre l'effet de `display: flow-root`. La boîte avec l'arrière-plan noir semble envelopper l'élément flottant et le texte. Si vous supprimez `display: flow-root`, l'élément flottant dépasse du bas de la boîte, car il n'est plus contenu.

```html live-sample___block-flow-root
<div class="conteneur">
  <div class="element">Élément flottant</div>
  <p>Texte suivant l'élément flottant.</p>
</div>
```

```css hidden live-sample___block-flow-root
body {
  font: 1.2em sans-serif;
  margin: 20px;
}
.conteneur {
  background-color: #333333;
  color: white;
}

.element {
  background-color: white;
  border: 1px solid #999999;
  color: #333333;
  width: 100px;
  height: 100px;
  padding: 10px;
}
```

```css live-sample___block-flow-root
.conteneur {
  display: flow-root;
}

.element {
  margin: 10px;
  float: left;
}
```

{{EmbedLiveSample("block-flow-root", "", 250)}}

### Les boîtes de bloc

Dans les spécifications, les boîtes de bloc, les boîtes de niveau bloc et les conteneurs de bloc sont tous désignés comme des **boîtes de bloc** à certains endroits. Ces notions sont quelque peu différentes et le terme boîte de bloc ne doit être utilisé qu'en l'absence d'ambiguïté.

#### Conteneurs de bloc

Un **conteneur de bloc** contient soit uniquement des boîtes de niveau en incise participant à un contexte de formatage en incise, soit uniquement des boîtes de niveau bloc participant à un contexte de formatage de bloc. C'est pourquoi nous observons le comportement expliqué ci-dessus, dans lequel des boîtes anonymes sont introduites afin de garantir que tous les éléments peuvent participer à un contexte de formatage de bloc ou en incise. Un élément est un conteneur de bloc uniquement s'il contient des boîtes de niveau bloc ou de niveau en incise.

#### Boîtes de niveau en incise et de niveau bloc

Il s'agit des boîtes contenues dans le conteneur de bloc qui participent respectivement à une disposition en incise ou en bloc.

#### Boîtes de bloc

Une boîte de bloc est une boîte de niveau bloc qui est également un conteneur de bloc. Comme décrit dans la propriété CSS `display`, une boîte peut être une boîte de niveau bloc sans être aussi un conteneur de bloc (il peut s'agir, par exemple, d'un conteneur flexible ou de grille).

## Voir aussi

- Le guide de [syntaxe CSS](/fr/docs/Web/CSS/Guides/Syntax/Introduction)
- [Commentaires](/fr/docs/Web/CSS/Guides/Syntax/Comments)
- [Spécificité](/fr/docs/Web/CSS/Guides/Cascade/Specificity)
- [Héritage](/fr/docs/Web/CSS/Guides/Cascade/Inheritance)
- [Contexte d'empilement](/fr/docs/Web/CSS/Guides/Positioned_layout/Stacking_context)
- [Contexte de formatage de bloc](/fr/docs/Web/CSS/Guides/Display/Block_formatting_context)
- [Modèle de boîte](/fr/docs/Web/CSS/Guides/Box_model/Introduction)
- [Modes de disposition](/fr/docs/Glossary/Layout_mode)
- [Effondrement des marges](/fr/docs/Web/CSS/Guides/Box_model/Margin_collapsing)
- L'entrée de glossaire {{Glossary("Replaced elements", "Éléments remplacés")}}
- L'interface {{DOMxRef("VisualViewport")}}
- L'entrée de glossaire {{Glossary("Scroll container", "Conteneur de défilement")}}
