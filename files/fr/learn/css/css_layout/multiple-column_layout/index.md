---
title: Disposition sur plusieurs colonnes
slug: Learn/CSS/CSS_layout/Multiple-column_Layout
tags:
  - Apprendre
  - Apprentissage
  - CSS
  - Colonnes multiples
  - Disposition
  - Débutant
  - Guide
  - Multi-col
translation_of: Learn/CSS/CSS_layout/Multiple-column_Layout
original_slug: Apprendre/CSS/CSS_layout/Multiple-column_Layout
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

Une mise en page à colonnes multiples est une méthode de disposition du contenu sur plusieurs colonnes juxtaposées, telle dans un journal. Cet article explique comment utiliser cette fonction.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        Les fondamentaux du HTML (étudiez
        <a href="/fr/Apprendre/HTML/Introduction_à_HTML">Introduction au HTML</a
        >), et une idée du fonctionnement de CSS (étudiez
        <a href="/fr/Apprendre/CSS/Introduction_à_CSS">Introduction à CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        Apprendre comment créer une disposition de contenu sur plusieurs
        colonnes dans une page web, comme dans un journal.
      </td>
    </tr>
  </tbody>
</table>

## Un exemple élémentaire

Nous allons maintenant explorer la disposition du contenu sur plusieurs colonnes, souvent nommée  « *multicol* ». Vous pourrez effectuer le suivi de cet article en  [téléchargeant le fichier de depart multicol](https://github.com/mdn/learning-area/blob/master/css/css-layout/multicol/0-starting-point.html) et en ajoutant la CSS aux emplacements appropriés. En fin de section, vous verrez un exemple en direct de ce à quoi le code final peut ressembler.

Notre point de départ contient un HTML très simple ; une enveloppe de la classe `container` dans laquelle nous avons placé un en‑tête et quelques paragraphes.

L'élément {{htmlelement("div")}} de la classe `container` sera notre conteneur multi‑colonnes. Nous basculons dans une disposition _multicol_ en utilisant l'une des deux propriétés {{cssxref("column-count")}} ou {{cssxref("column-width")}}. La propriété `column-count` crée autant de colonnes que la valeur indiquée, donc si vous ajoutez la CSS suivante et actalisez la page, vous obtiendrez une disposition sur trois colonnes :

```css
.container {
  column-count: 3;
}
```

Les colonnes créées sont de largeur variable — le navigateur calcule automatiquement l'espace à donner à chacune d'entre elles.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}

```

```html
<div class="container">
  <h1>Simple exemple <i>multicol</i></h1>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

{{ EmbedLiveSample('Un_exemple_élémentaire', '100%', 400) }}

### Définir column-width

Modifiez la CSS pour utiliser `column-width` ainsi :

```css
.container {
  column-width: 200px;
}
```

Le navigateur dispose maintenant le maximum de colonnes possible de la taille fixée ; le reste de l'espace est partagé entre les colonnes existantes. Cela signifie que vous n'obtiendrez pas exactement la largeur définie, à moins que le conteneur soit exactement divisible par cette largeur.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
```

```html hidden
<div class="container">
  <h1>Simple exemple <i>multicol</i></h1>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

{{ EmbedLiveSample('Définir_column-width', '100%', 400) }}

## Style des colonnes

Les colonnes créées avec _multicol_ ne peuvent pas être stylisées individuellement. Il n'y a aucun moyen de faire en sorte qu'une colonne soit plus large qu'une autre, ou de modifier l'arrière‑plan ou la couleur du texte d'une seule colonne. Il y a deux moyens de modifier l'affichage des colonnes :

- modifier la taille de l'espacement entre colonnes avec {{cssxref("column-gap")}}.
- ajouter une règle entre colonnes avec {{cssxref("column-rule")}}.

En utilisant l'exemple ci‑dessus, changeons la taille de l'espacement entre colonnes avec la propriété `column-gap` :

```css
.container {
  column-width: 200px;
  column-gap: 20px;
}
```

Vous pouvez tester diverses valeurs — la propriété accepte n'importe quelle unité de longueur. Ajoutons maintenant une règle entre colonnes avec `column-rule`. De la même manière qu'avec la propriété {{cssxref("border")}} rencontrée dans les articles précédents, `column-rule`, forme abrégée de {{cssxref("column-rule-color")}}, {{cssxref("column-rule-style")}} et  {{cssxref("column-rule-width")}}, accepte les mêmes valeurs.

```css
.container {
  column-count: 3;
  column-gap: 20px;
  column-rule: 4px dotted rgb(79, 185, 227);
}
```

Ajoutons des règles pour les divers styles et couleurs.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
.container {
 column-count: 3;
 column-gap: 20px;
 column-rule: 4px dotted rgb(79, 185, 227);
}
```

```html hidden
<div class="container">
  <h1>Simple exemple <i>multicol</i></h1>

  <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.
  Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula.
  Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse
  ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit
  quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

  <p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique
  elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit
  cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis
  dis parturient montes, nascetur ridiculus mus.</p>
</div>
```

{{ EmbedLiveSample('Style_des_colonnes', '100%', 400) }}

Notez que  la règle ne prend pas de largeur en soi. Elle se place dans l'espace créé avec  `column-gap`. Pour faire un peu plus d'espace d'un côté ou de l'autre de la règle, vous devez augmenter la taille de l'espace entre les colonnes.

## Colonnes et coupures

Le contenu d'une disposition en plusieurs colonnes est coupé. Il se comporte essentiellement de la même manière qu'un contenu en plusieurs pages — comme quand vous imprimez une page web. Quand vous mettez un contenu dans un conteneur _multicol_, il est découpé en colonnes de texte pour permettre cette disposition.

Quelquefois, ces coupures se font dans des endroits amenant des difficultés de lecture. Dans l'exemple en direct ci‑dessous, j'ai utilisé _multicol_ pour disposer une série de boîtes dont chacune a un titre et un peu de texte. Le titre est séparé du texte si la coupure de colonne se produit entre les deux.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
```

```html hidden
<div class="container">
  <div class="card">
    <h2>Je suis un titre</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>
    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('Colonnes_et_coupures', '100%', 600) }}

### Utiliser break-inside

Pour contrôler ce comportement, utilisons les propriétés stipulées dans [CSS Fragmentation](/fr/docs/Web/CSS/CSS_Fragmentation) (coupures dans la CSS). Cette fonctionnalité nous offre des propriétés pour contrôler les coupures de contenu dans le _multicol_ et les médias paginés. Par exemple, ajoutons la propriété {{cssxref("break-inside")}} avec la valeur `avoid` aux règles pour `.card`, qui est le conteneur du titre et du texte. Nous indiquons que nous ne souhaitons pas que cette boîte soit coupée.

Il est également préférable d'ajouter l'ancienne propriété `page-break-inside: avoid` pour une meilleure prise en charge par les divers navigateurs.

```css
.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207,232,220);
  border: 2px solid rgb(79,185,227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

Actualisez la page et les boîtes devraient rester entières.

```css hidden
body {
  width: 90%;
  max-width: 900px;
  margin: 2em auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif;
}
```

```html hidden
<div class="container">
  <div class="card">
    <h2>Je suis un titre</h2>
    <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>
    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

    <div class="card">
      <h2>Je suis un titre</h2>
      <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat
                vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies
                tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci
                vel, viverra egestas ligula.</p>
    </div>

</div>
```

```css
.container {
  column-width: 250px;
  column-gap: 20px;
}

.card {
  break-inside: avoid;
  page-break-inside: avoid;
  background-color: rgb(207, 232, 220);
  border: 2px solid rgb(79, 185, 227);
  padding: 10px;
  margin: 0 0 1em 0;
}
```

{{ EmbedLiveSample('Utiliser_break-inside', '100%', 600) }}

## Résumé

Vous savez maintenant comment utiliser les fonctionnalités élémentaires de la mise en page sur plusieurs colonnes, autre outil à votre disposition pour choisir une méthode de présentation pour le désign de vos applications.

## Voir aussi

- [Coupures avec la CSS](/fr/docs/Web/CSS/CSS_Fragmentation)
- [Utilisation des mises en page sur plusieurs colonnes](/fr/docs/Web/CSS/CSS_Columns/Using_multi-column_layouts)

{{PreviousMenuNext("Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout/Legacy_Layout_Methods", "Learn/CSS/CSS_layout")}}

## Dans ce module

- [Introduction to CSS layout](/fr/docs/Learn/CSS/CSS_layout/Introduction)
- [Normal Flow](/fr/docs/Learn/CSS/CSS_layout/Normal_Flow)
- [Flexbox](/fr/docs/Learn/CSS/CSS_layout/Flexbox)
- [Grid](/fr/docs/Learn/CSS/CSS_layout/Grids)
- [Floats](/fr/docs/Learn/CSS/CSS_layout/Floats)
- [Positioning](/fr/docs/Learn/CSS/CSS_layout/Positioning)
- [Multiple-column Layout](/fr/docs/Learn/CSS/CSS_layout/Multiple-column_Layout)
- [Legacy Layout Methods](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods)
- [Supporting older browsers](/fr/docs/Learn/CSS/CSS_layout/Supporting_Older_Browsers)
- [Fundamental Layout Comprehension Assessment](/fr/docs/Learn/CSS/CSS_layout/Fundamental_Layout_Comprehension)
