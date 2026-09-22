---
title: Maîtriser le passage à la ligne des éléments flexibles
short-title: Passer à la ligne des éléments flexibles
slug: Web/CSS/Guides/Flexible_box_layout/Wrapping_items
l10n:
  sourceCommit: ae836b44d9faa0e9f581631ed1dcccd2a502b618
---

Les boîtes flexibles ont été conçues comme un outil de mise en page unidimensionnel — elles permettent de disposer des éléments en incise ou en colonne — mais pas les deux à la fois. Il est toutefois possible de faire passer les éléments flexibles à la ligne, créant ainsi de nouvelles lignes si {{CSSxRef("flex-direction")}} est défini sur `row`, et de nouvelles colonnes si `flex-direction` est défini sur `column`. Ce guide explique le passage à la ligne dans les boîtes flexibles, à quoi il sert et dans quelles situations il est préférable d'utiliser la [disposition en grille CSS](/fr/docs/Web/CSS/Guides/Grid_layout) plutôt que les boîtes flexibles.

## Créer des passages à la ligne

La valeur initiale de la propriété {{CSSxRef("flex-wrap")}} est `nowrap`. Cela signifie que si un ensemble d'éléments flexibles est trop large pour leur conteneur flexible, ils le dépassent. Pour les faire passer à la ligne une fois qu'ils sont trop larges, ajoutez la propriété `flex-wrap` avec une valeur de `wrap`, ou utilisez le raccourci {{CSSxRef("flex-flow")}} avec des valeurs de `row wrap` ou `column wrap`. Les éléments passent alors à la ligne suivante lorsqu'ils dépassent leur conteneur.

Dans cet exemple, il y a dix éléments flexibles avec une `flex-basis` de `160px` qui peuvent grandir et rétrécir. Une fois qu'il n'y a plus assez d'espace pour placer un autre élément de 160 pixels dans une ligne, une nouvelle ligne flexible est créée. De nouvelles lignes sont créées au besoin jusqu'à ce que tous les éléments soient placés. Comme les éléments peuvent grandir, ils s'étendent pour remplir complètement chaque ligne. S'il n'y a qu'un seul élément sur la dernière ligne, il s'étend pour remplir toute la ligne.

```html live-sample___row-wrap
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

```css live-sample___row-wrap
.boite {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-wrap")}}

La même chose se produit avec les colonnes flexibles. Pour passer à la ligne et créer de nouvelles colonnes, le conteneur doit avoir une hauteur. Dans le cas des colonnes, les éléments s'étendent verticalement pour remplir complètement chaque colonne.

```html live-sample___column-wrap
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

```css live-sample___column-wrap
.boite {
  border: 2px dotted rgb(96 139 168);
  height: 300px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
}
.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 80px;
}
```

{{EmbedLiveSample("column-wrap", "", 320)}}

## Le retour à la ligne et `flex-direction`

Le passage à la ligne fonctionne comme prévu lorsqu'il est combiné avec `flex-direction`. Si `flex-direction` est défini sur `row-reverse`, les éléments commencent au bord final du conteneur et se disposent sur des lignes dans l'ordre inverse.

```html live-sample___row-reverse-wrap
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

```css live-sample___row-reverse-wrap
.boite {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  width: 500px;
}
.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

{{EmbedLiveSample("row-reverse-wrap")}}

Notez que l'inversion se produit uniquement dans la direction en incise, celle des rangées. Nous commençons à droite, puis passons à la deuxième ligne et recommençons à droite. Nous n'inversons pas les deux directions en commençant par le bas pour remonter dans le conteneur&nbsp;!

## Équilibrer le passage à la ligne

Un problème possible du passage à la ligne avec les boîtes flexibles est que, par défaut, les éléments flexibles ne se répartissent pas uniformément entre les lignes. Dans l'exemple précédent, nous avons trois éléments sur les trois premières lignes, mais un seul sur la dernière ligne. Nous pouvons répartir les éléments flexibles plus uniformément sur les quatre lignes flexibles en incluant le mot-clé [`balance`](/fr/docs/Web/CSS/Reference/Properties/flex-wrap#balance) dans la valeur de `flex-wrap`, avec le mot-clé `wrap` ou `wrap-reverse`.

Cet exemple utilise le même HTML que l'exemple précédent et presque le même CSS, sauf que la valeur de `flex-wrap` passe de `wrap` à `wrap balance`.

```html hidden live-sample___balanced-wrap live-sample___line-count
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

```css hidden live-sample___balanced-wrap
.boite {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap balance;
  flex-direction: row-reverse;
  width: 500px;
}
.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

```css hidden live-sample___balanced-wrap live-sample___line-count
@supports not (flex-wrap: balance) {
  body::before {
    content: "Votre navigateur ne prend pas en charge flex-wrap: balance.";
    background-color: wheat;
    text-align: center;
    padding: 1rem 0;

    z-index: 1;
    position: fixed;
    inset: 40% 0 auto;
  }
}
```

```css
flex-wrap: wrap balance;
```

Cette ligne peut aussi s'écrire simplement `flex-wrap: balance`. Si `balance` est défini comme seul mot-clé de la valeur de `flex-wrap`, l'autre mot-clé prend par défaut la valeur `wrap`. Nous l'écrivons explicitement afin de rendre le fonctionnement plus clair. Notez que l'inclusion du mot-clé `balance` avec la valeur `nowrap` est invalide et que la déclaration est ignorée.

Le rendu mis à jour est le suivant&nbsp;:

{{EmbedLiveSample("balanced-wrap")}}

Notez que les éléments se répartissent maintenant plus uniformément, ou sont «&nbsp;équilibrés&nbsp;», avec deux lignes de trois éléments et deux lignes de deux éléments.

Pour répartir les éléments flexibles équilibrés sur un plus grand nombre de lignes, utilisez la propriété {{CSSxRef("flex-line-count")}}. Cette propriété définit un nombre minimal de lignes. Si nous ajoutons ce qui suit à l'exemple précédent&nbsp;:

```css hidden live-sample___line-count
.boite {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap balance;
  flex-line-count: 5;
  flex-direction: row-reverse;
  width: 500px;
}
.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 160px;
}
```

```css
flex-line-count: 5;
```

Nous obtenons le résultat suivant&nbsp;:

{{EmbedLiveSample("line-count")}}

Nous avons maintenant cinq lignes de deux éléments flexibles.

La propriété `flex-line-count` n'a aucun effet sur les conteneurs flexibles dont les valeurs de la propriété `flex-wrap` n'incluent pas le mot-clé `balance`.

## Expliquer la disposition unidimensionnelle

Comme nous l'avons vu dans les exemples précédents, si nos éléments peuvent grandir et rétrécir, lorsqu'il y a moins d'éléments dans la dernière ligne ou colonne, ces éléments grandissent pour remplir l'espace disponible.

Les boîtes flexibles ne possèdent aucune fonctionnalité permettant d'aligner les éléments d'une ligne sur ceux de la ligne supérieure — chaque ligne flexible se comporte comme un nouveau conteneur flexible. La disposition répartit l'espace sur l'axe principal. S'il n'y a qu'un seul élément et que cet élément peut grandir, il remplit l'axe comme dans un conteneur flexible à élément unique. Pour une disposition en deux dimensions, utilisez probablement la disposition en grille.

Cet exemple montre la différence en utilisant la disposition en grille CSS pour créer une disposition avec autant de colonnes d'au moins `160px` que possible, en répartissant l'espace supplémentaire entre toutes les colonnes. Nous utilisons le même HTML que dans [l'exemple de ligne flexible avec passage à la ligne](#créer_des_passages_à_la_ligne) ci-dessus, mais nous lui attribuons `display: grid`. Au lieu du raccourci {{CSSxRef("flex")}}, qui n'a aucun effet en dehors des boîtes flexibles, nous définissons directement sur le conteneur la largeur minimale de l'élément et sa capacité à grandir avec {{CSSxRef("grid-template-columns")}}. Avec la grille CSS, le dernier élément reste dans sa cellule de grille&nbsp;; les éléments de grille ne s'étirent pas lorsqu'ils sont moins nombreux sur la dernière ligne.

```html live-sample___grid-example
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

```css live-sample___grid-example
.boite {
  border: 2px dotted rgb(96 139 168);
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  width: 500px;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("grid-example")}}

Voilà la différence entre les dispositions unidimensionnelles et bidimensionnelles. Avec une méthode de disposition unidimensionnelle comme les boîtes flexibles, nous contrôlons uniquement la ligne ou la colonne. Avec une disposition en grille bidimensionnelle, nous contrôlons les deux simultanément. Pour répartir l'espace ligne par ligne, utilisez les boîtes flexibles. Sinon, utilisez la grille CSS.

## Comment fonctionnent les systèmes de grille basés sur les boîtes flexibles?

Les dispositions fondées sur les boîtes flexibles peuvent être forcées à s'aligner comme des systèmes de grille, mais ce n'est pas le but prévu des boîtes flexibles. Si vous attribuez des largeurs en pourcentage aux éléments flexibles — soit en utilisant `flex-basis`, soit en ajoutant une largeur à l'élément lui-même et en laissant la valeur de `flex-basis` à `auto` — vous pouvez donner l'impression d'une disposition bidimensionnelle.

Dans cet exemple, `flex-grow` et `flex-shrink` sont définis sur `0` pour rendre les éléments flexibles inflexibles. La flexibilité est contrôlée au moyen de pourcentages.

```html live-sample___flex-grid
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div>Trois</div>
  <div>Quatre</div>
  <div>Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
</div>
```

```css live-sample___flex-grid
* {
  box-sizing: border-box;
}

.boite {
  width: 500px;
  border: 2px dotted rgb(96 139 168);
  display: flex;
  flex-wrap: wrap;
}

.boite > * {
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 0 0 33.3333%;
}
```

{{EmbedLiveSample("flex-grid")}}

Cette technique vous permet d'aligner les éléments flexibles sur l'axe transversal. Toutefois, si vous ajoutez des largeurs aux éléments flexibles de cette manière ou si vous ajoutez des éléments flexibles vides pour occuper l'espace, cela indique probablement qu'il vaut mieux utiliser la disposition en grille CSS pour ce composant.

## Créer des gouttières entre les éléments

Pour créer des espaces ou des gouttières entre les éléments flexibles, utilisez directement la propriété {{CSSxRef("gap")}} sur le conteneur flexible afin de créer un espace fixe entre les éléments flexibles adjacents. La propriété `gap` est un raccourci pour `row-gap` et `column-gap`. Ces propriétés définissent la taille des gouttières entre les lignes et les colonnes dans les dispositions en grille, flexibles et à plusieurs colonnes.

La propriété `gap` n'est pas le seul moyen d'ajouter de l'espace entre les éléments. Les marges, les remplissages, `justify-content` et `align-content` peuvent aussi augmenter la taille de la gouttière et modifier la taille réelle de l'espace.

Pour voir en quoi la propriété `gap` diffère de `margin` sur les deux axes, modifiez la valeur de `gap` dans la boîte `.boite` et ajoutez une valeur de `margin` à la règle `.boite > *` dans la feuille de style ci-dessous. Cliquez sur le bouton «&nbsp;Réinitialiser&nbsp;» pour rétablir les valeurs précédentes.

```html live-sample___gaps
<div class="enveloppe">
  <div class="boite">
    <div>Un</div>
    <div>Deux</div>
    <div>Trois</div>
    <div>Quatre</div>
    <div>Cinq</div>
    <div>Six</div>
    <div>Sept</div>
    <div>Huit</div>
    <div>Neuf</div>
    <div>Dix</div>
  </div>
</div>
```

```css live-sample___gaps
.enveloppe {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
}
.boite {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
.boite > * {
  flex: 1 1 160px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
```

{{EmbedLiveSample("gaps", "", 220)}}

## Réduire les éléments

La spécification des boîtes flexibles détaille ce qui se produit lorsqu'un élément flexible est réduit en définissant `visibility: collapse` sur un élément. Consultez la documentation MDN de la propriété {{CSSxRef("visibility")}}. La spécification décrit le comportement comme suit&nbsp;:

> «&nbsp;Définir `visibility: collapse` sur un élément flexible le transforme en _élément flexible réduit_ et produit un effet similaire à `visibility: collapse` sur une ligne ou une colonne de tableau&nbsp;: l'élément flexible réduit est entièrement retiré du rendu, mais laisse une «&nbsp;entretoise&nbsp;» qui maintient la taille de l'axe transversal de la ligne flexible. Ainsi, si un conteneur flexible ne comporte qu'une seule ligne flexible, réduire ou développer dynamiquement des éléments peut modifier la taille de l'axe principal du conteneur flexible, mais ne modifie pas sa taille sur l'axe transversal et ne provoque pas de «&nbsp;vacillement&nbsp;» dans la disposition du reste de la page. Le passage des lignes flexibles à la ligne _est_ toutefois recalculé après la réduction, donc la taille de l'axe transversal d'un conteneur flexible à plusieurs lignes peut changer ou non.&nbsp;» - [Éléments réduits <sup>(angl.)</sup>](https://drafts.csswg.org/css-flexbox-1/#visibility-collapse)

Ce comportement est utile si vous ciblez des éléments flexibles avec JavaScript pour afficher et masquer du contenu, par exemple. L'exemple de la spécification montre un tel modèle.

Dans l'exemple interactif suivant, le conteneur flexible sans passage à la ligne contient une rangée de trois éléments flexibles configurés pour avoir des tailles égales. Le troisième élément comporte plusieurs lignes de contenu, ce qui agrandit le conteneur. La valeur par défaut de `align-items` est `normal`&nbsp;; pour les éléments flexibles, `normal` se comporte comme `stretch`, donc tous les éléments s'étirent par défaut et remplissent la hauteur de l'axe transversal du conteneur.

L'élément qui crée la taille de l'axe transversal reçoit `visibility: collapse`, ce qui réduit ou masque l'élément flexible selon le navigateur. Dans les deux cas, le conteneur flexible conserve une _entretoise_ de la taille de l'axe transversal, même si elle n'est pas visible. Ainsi, si l'élément devient visible, la taille de l'axe transversal du conteneur flexible à une seule ligne ne change pas. Si vous supprimez `visibility: collapse` du CSS ou remplacez la valeur par `visible`, l'élément apparaît et l'espace de l'axe principal se redistribue entre les éléments non réduits, tandis que la taille de l'axe transversal reste inchangée.

> [!NOTE]
> Utilisez Firefox pour l'exemple ci-dessous, car les autres navigateurs courants traitent `collapse` comme `hidden`.

```html hidden live-sample___visibility-collapse
<p>
  <label
    ><input type="checkbox" /> Modifier la valeur de
    <code>visibility</code></label
  >
</p>
```

```html live-sample___visibility-collapse
<div class="boite">
  <div>Un</div>
  <div>Deux</div>
  <div class="masque">Trois <br />a <br />du texte <br />supplémentaire</div>
</div>
```

```css live-sample___visibility-collapse
.boite {
  border: 2px dotted rgb(96 139 168);
  display: flex;
  width: 600px;
}
.boite > * {
  flex: 1 1 200px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
}
.masque {
  visibility: collapse;
}
```

```css hidden live-sample___visibility-collapse
p:has(:checked) + div .masque {
  visibility: visible;
}
```

{{EmbedLiveSample("visibility-collapse")}}

Nous avons vu ci-dessus un conteneur flexible à une seule ligne, sans retour à la ligne, dont la taille est fixée à `600px` donc, que l'élément soit visible ou réduit, la largeur est la même. Il est important de comprendre que, bien que le conteneur conserve une entretoise de la taille de l'axe transversal de l'élément réduit, la taille principale n'est pas conservée. Les conteneurs flexibles à plusieurs lignes redisposent leurs éléments après le retrait des éléments réduits du rendu. Le nouvel espace qu'un élément réduit laisse dans la direction principale peut placer les éléments non réduits sur une ligne différente de celle où ils se trouvent si l'élément n'est pas réduit. Comme chaque ligne est disposée comme un conteneur flexible indépendant à une seule ligne et que sa composition peut changer après la réduction, sa taille sur l'axe transversal peut aussi changer.

L'exemple suivant montre ce comportement. Le troisième élément flexible est réduit et occupe donc un espace nul sur l'axe principal, car sa taille en incise vaut `0`. Lorsqu'il est réduit, son entretoise se trouve sur la première rangée après le quatrième élément, et la première rangée est assez haute pour contenir les trois lignes de texte que le troisième élément a eues. Ensuite, si vous développez l'élément, par exemple en supprimant la classe `masque`, l'espace horizontal ne suffit plus pour le cinquième élément sur la première rangée et celui-ci passe sur la deuxième. La deuxième rangée grandit alors pour contenir les deux lignes de texte de son nouveau membre, et le dernier élément flexible passe sur une nouvelle rangée. Avec une deuxième rangée plus haute et une nouvelle troisième rangée, le conteneur flexible est beaucoup plus haut qu'auparavant.

> [!NOTE]
> Utilisez Firefox pour l'exemple ci-dessous, car les autres navigateurs courants traitent `collapse` comme `hidden`.

```html hidden live-sample___wrapped-visibility-collapse
<p>
  <label
    ><input type="checkbox" /> Modifier la valeur de
    <code>visibility</code></label
  >
</p>
```

```html live-sample___wrapped-visibility-collapse
<div class="boite">
  <div>Un</div>
  <div>Deux a la largeur de cette phrase.</div>
  <div class="masque">
    Trois <br />a <br />cinq <br />lignes <br />de hauteur.
  </div>
  <div>Quatre</div>
  <div>Cinq<br />Cinq</div>
  <div>Six</div>
  <div>Sept</div>
  <div>Huit</div>
  <div>Neuf</div>
  <div>Dix</div>
  <div>Onze est plus long</div>
</div>
```

```css live-sample___wrapped-visibility-collapse
.boite {
  border: 2px dotted rgb(96 139 168);
  width: 500px;
  display: flex;
  flex-wrap: wrap;
}
.boite > * {
  padding: 10px;
  border: 2px solid rgb(96 139 168);
  border-radius: 5px;
  background-color: rgb(96 139 168 / 0.2);
  flex: 1 1 auto;
  min-width: 50px;
}
.masque {
  visibility: collapse;
}
```

```css hidden live-sample___wrapped-visibility-collapse
p:has(:checked) + div .masque {
  visibility: visible;
}
```

{{EmbedLiveSample("wrapped-visibility-collapse", "", 300)}}

Si cela pose un problème pour votre disposition, vous devez peut-être repenser la structure, par exemple en plaçant chaque rangée dans un conteneur flexible distinct afin qu'elles ne puissent pas changer de rangée.

### Utiliser `visibility: hidden` et `display: none`

Dans les exemples interactifs précédents, essayez d'utiliser `visibility: hidden` ou `display: none` au lieu de `visibility: collapse`. Avec `visibility: hidden`, l'élément devient invisible, mais la boîte reste dans la structure de mise en forme et se comporte donc toujours comme si elle fait partie de la disposition.
Avec `display: none`, l'élément est complètement retiré de la structure de mise en forme. Il devient non seulement invisible, mais sa structure est aussi supprimée. Les compteurs l'ignorent donc et les transitions, par exemple, ne s'exécutent pas.
