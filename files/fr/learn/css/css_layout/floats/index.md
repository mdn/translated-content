---
title: Les boîtes flottantes
slug: Learn/CSS/CSS_layout/Floats
tags:
  - Article
  - Boîtes flottantes
  - CSS
  - Codage
  - Débutant
  - Dégagement
  - Flotteurs
  - Guide
  - Mise en page
  - colonnes
  - multi‑colonne
translation_of: Learn/CSS/CSS_layout/Floats
original_slug: Apprendre/CSS/CSS_layout/Floats
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

À l'origine conçue pour faire flotter des images à l'intérieur d'un bloc de texte, la propriété [`float`](/fr/docs/Web/CSS/float "The float CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow (in contrast to absolute positioning).") est devenue un des outils les plus communément utilisés pour créer des dispositions sur plusieurs colonnes dans des pages web. Avec la venue de Flexbox et de Grid, il est maintenant revenu à sa destination initiale, comme l'explique l'article.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Les bases du HTML (étudiez
        <a href="/fr/Apprendre/HTML/Introduction_à_HTML">Introduction au HTML</a
        >), et une idée de la manière dont fonctionne CSS (étudiez
        <a href="/fr/Apprendre/CSS/Introduction_à_CSS">Introduction au CSS</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Apprendre comment créer des éntités flottantes dans les pages web, ainsi
        qu'utiliser la propriété <code>clear</code> et autres méthodes de
        dégagement des boîtes flottantes.
      </td>
    </tr>
  </tbody>
</table>

## Contexte de boîtes flottantes

La propriété [`float`](/fr/docs/Web/CSS/float "The float CSS property specifies that an element should be placed along the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the web page, though still remaining a part of the flow (in contrast to absolute positioning).") a été introduite pour permettre aux développeurs web d'implémenter des dispositions simples comme une image flottant dans une colonne de texte, le texte se développant autour de cette image sur la gauche ou sur la droite. Le genre de choses que vous pourriez avoir dans une mise en page de journal.

Mais les développeurs web se sont vite rendus compte que tout élément pouvait flotter, pas seulement les images, et c'est ainsi que l'utilisation de `float` s'est élargie. Notre [exemple de paragraphe élégant](/fr/docs/Learn/CSS/Introduction_to_CSS/Pseudo-classes_and_pseudo-elements#Active_learning_A_fancy_paragraph) vu plus haut dans le cours montre comment vous pouvez utiliser `float` pour créer une lettrine.

Les boîtes flottantes ont été couramment utilisées pour créer des mises en page complètes de sites web avec plusieurs colonnes d'informations flottant les unes à côté des autres (le comportement par défaut est une superposition des contenus, dans le même ordre que dans le code source). De nouvelles techniques de mises en page bien meilleures sont disponibles, nous les avons déjà vues dans ce module, et l'utilisation des boîtes flottantes à cette fin doit être considérée comme une technique du passé.

Dans cet article, nous nous limiterons notre exposé à l'utilisation appropriée des boîtes flottantes.

## Exemple simple de boîte flottante

Découvrons comment utiliser les boîtes flottantes. Nous commencerons par un exemple très simple consistant à faire flotter un élément dans un bloc de texte. Vous pouvez suivre cela en créant un nouveau fichier `index.html` sur votre ordinateur initialisé avec un [simple modèle HTML](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/getting-started/index.html) et en y insérant le code ci-dessous à la bonne place. Au bas de ce paragraphe vous pouvez directement voir un exemple en direct de ce à quoi le code final doit ressembler.

Tout d'abord, commençons  avec un HTML simple — ajoutez le code ci-dessous dans l'élément `body` en supprimant tout ce qu'il y avait avant&nbsp;:

```html
<h1>Exemple simple de boîte flottante</h1>

<img src="butterfly.jpg" alt="Un joli papillon de couleur rouge, blanche et brune sur une grande feuille">

<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

Maintenant, appliquez la CSS suivante au HTML ci-dessus (avec un élément {{htmlelement("style")}} ou un élément {{htmlelement("link")}} pointant sur un fichier `.css` séparé — comme vous voulez):

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

Si vous enregistrez et actualisez maintenant, vous verrez quelque chose qui ressemble un peu à ce à quoi vous vous attendiez — la boîte est au-dessus du texte suivant le cours normal de l'affichage. Pour faire flotter l'image dans le texte ajoutez ces deux propriétés à la règle pour `.box`&nbsp;:

```css
.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 100px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

Enregistrez et actualisez à nouveau et vous verrez quelque chose comme ce qui suit:

### Faire flotter la boîte

Pour faire flotter la boîte, on ajoutera les propriétés {{cssxref("float")}} et {{cssxref("margin-right")}} à la règle ciblant `.box` :

```html hidden
<h1>Exemple simple de boîte flottante</h1>

<div class="box">Boîte flottante</div>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>

<p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  float: left;
  margin-right: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Faire_flotter_la_boîte', '100%', 500) }}

Voyons comment fonctionne la boîte flottante — l'élément possèdant la propriété `float` (l'élément `box` dans notre cas) est retiré du cours normal de  la mise en page du document et collé du côté gauche (`left`) de son conteneur parent ({{htmlelement("body")}}, dans ce cas). Tout contenu disposé après l'élément flottant dans le cours normal de la mise en page (c'est à dire disposé à la suite dans le code source) va maintenant l'envelopper en remplissant l'espace sur sa droite sur toute sa hauteur. Là, ça s'arrête.

Faire flotter le contenu surla droite a exactement le même effet, mais inversé — l'élément flottant se plaque sur la droite du conteneur et le contenu l'enveloppera en se plaçant à gauche. Donnez la valeur `right` à la propriété `float` et remplacez {{cssxref("margin-right")}} par {{cssxref("margin-left")}} dans le dernier jeu de règles, et observez le résultat.

Ajoutez une classe `special` au premier paragraphe du texte suivant immédiatement la boîte flottante, puis dans la CSS ajoutez les règles suivantes. Elles donnent à ce paragraphe une couleur de fond.

```css
.special {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}
```

### Visualiser le flottement

Pour mieux visualiser l'effet, modifiez `margin-right` de la boîte flottante en `margin` de façon à avoir le même espace tout autour de la boîte flottante. Vous verrez l'arrière-plan du paragraphe juste au dessous de la boîte flottante comme dans l'exemple ci-dessous&nbsp;:

```html hidden
<h1>Exemple simple de boîte flottante</h1>

<div class="box">Boîte flottante</div>

<p class="special">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>

<p>Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}

.special {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}
```

{{ EmbedLiveSample('Visualiser_le_flottement', '100%', 500) }}

Les lignes du paragraphe  suivant la boîte flottante  ont été raccourcies pour que le texte entoure cette boîte, mais comme elle a été sortie du cours normal, la boîte du contenu du paragraphe reste sur toute la largeur du conteneur.

## Dégagement des boîtes flottantes

Nous avons vu que la boîte flottante est retirée du cours normal de l'affichage et que les autres éléments se placent à côté, donc si nous voulons empêcher un élément à la suite de remonter pour se placer à côté, nous devons le dégager. Cette opération se réalise à l'aide de la propriété {{cssxref("clear")}}.

Dans le HTML de l'exemple précédent, donnez la classe `cleared` au second paragraphe sous l'élément destiné à être placé à côté de la boîte flottante. Puis, ajoutez ceci à la CSS&nbsp;:

```css
.cleared {
  clear: left;
}
```

```html
<h1>Exemple simple de boîte flottante</h1>

<div class="box">Boîte flottante</div>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>

<p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>

```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}

.cleared {
  clear: left;
}
```

{{ EmbedLiveSample('Dégagement_des_boîtes_flottantes', '100%', 600) }}

Vous verrez que le paragraphe suivant s'est dégagé de l'élément flottant et ne remonte plus à côté de ce dernier. La propriété  `clear` accepte les valeurs suivantes&nbsp;:

- `left`&nbsp;: dégage les élément à gauche de la boîte flottante.
- `right`&nbsp;: dégage les éléments à droite.
- `both `: dégage de tous élément flottant, à gauche et à droite.

## Dégagement de boîtes autour d'une boîte flottante

Vous savez comment dégager quelque chose suivant un élément flottant, mais regardez ce qui arrive si vous avez une boîte flottante de grande hauteur et un paragraphe de texte court dans une boîte enveloppant les deux. Modifiez votre document de sorte que le premier paragraphe et la boîte flottante soient englobés dans un élément {{htmlelement("div")}} de la classe `wrapper`.

```html
<div class="wrapper">
  <div class="box">Boîte flottante</div>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate.</p>
</div>
```

Dans la CSS, ajoutez la règle suivante pour la classe `.wrapper` et actualisez la page&nbsp;:

```css
.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}
```

### Le problème

Comme dans l'exemple où nous avons mis un arrière‑plan au paragraphe, vous voyez que la couleur d'arrière‑plan s'étale derrière la boîte flottante.

```html hidden
<h1>Exemple simple de boîte flottante</h1>
<div class="wrapper">
  <div class="box">Boîte flottante</div>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
</div>

<p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Le_problème', '100%', 600) }}

Encore une fois, c'est parce que la boîte flottante a été retirée du cours normal de l'affichage. Dégager l'élément suivant ne résout pas ce problème où vous voulez que la boîte d'emballage de l'élément flottant et le contenu textuel , même court, arrive au bas de l'élément flottant. Il y a trois façons possibles de résoudre ce problème, deux fonctionnant avec tous les navigateurs — mais relevant un peu de la débrouille — et une troisième, nouvelle, permettant de faire face à cette situation proprement.

### Débogage avec clear

La façon dont cette situation est traditionnellement traitée consiste à utiliser un procédé connu sous le nom de «&nbsp;clearfix hack&nbsp;» (truc pour déboguer clear). Cela consiste à insérer un contenu après la boîte contenant le flotteur, envelopper le contenu et donner la valeur `both` à la propriété `clear`.

Ajoutez ceci à la CSS de notre exemple&nbsp;:

```css
.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

Maintenant actualisez la page et la boîte est dégagée. C'est pratiquement la même chose que si vous aviez ajouté un élément HTML tel que `<div>` en dessous avec la règle `clear: both`.

```html hidden
<h1>Exemple simple de boîte flottante</h1>
<div class="wrapper">
  <div class="box">Boîte flottante</div>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
</div>
<p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}

.wrapper::after {
  content: "";
  clear: both;
  display: block;
}
```

{{ EmbedLiveSample('Débogage_avec_clear', '100%', 600) }}

### Utilisation du débordement

Une autre méthode consiste à fixer la valeur de la propriété {{cssxref("overflow")}} de `wrapper` à autre chose que `visible`.

Supprimez les éléments `clearfix` de la CSS su paragraphe précédent et, à la place, ajoutez `overflow: auto` aux règles pour `wrapper`. À nouveau, la boîte doit être dégagée.

```css
.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}
```

```html hidden
<h1>Exemple simple de boîte flottante</h1>
<div class="wrapper">
  <div class="box">Boîte flottante</div>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
</div>
<p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  overflow: auto;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

{{ EmbedLiveSample('Utilisation_du_débordement', '100%', 600) }}

Cet exemple fonctionne en créant ce que l'on appelle un **block formatting context** (BFC) (contexte de formatage de bloc). C'est comme une mini composition à l'intérieur de la page, composition dans laquelle tout est contenu&nbsp;; l'élément flottant est contenu à l'intérieur de la BFC et l'arrière-plan est derrière les deux éléments. Cela fonctionne en règle générale, mais dans certains cas, vous pourriez avoir des barres de défilement indésirables ou des ombres découpées en raison des conséquences involontaires de l'utilisation du débordement.

### «&nbsp;display: flow-root&nbsp;»

La solution moderne de ce problème consiste à utiliser la valeur `flow-root` pour le propriété `display`. Elle n'existe que pour créer des BFC sans recourir à des astuces — il n'y pas de conséquences imprévisibles à son utilisation. Supprimez `overflow: auto` de la règle `.wrapper` et ajoutez `display: flow-root`. En supposant que votre navigateur le prenne en charge, la boîte sera dégagée.

```css
.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}
```

```html hidden
<h1>Exemple simple de boîte flottante</h1>
<div class="wrapper">
  <div class="box">Boîte flottante</div>

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla luctus aliquam dolor, eu lacinia lorem placerat vulputate. </p>
</div>
<p class="cleared">Duis felis orci, pulvinar id metus ut, rutrum luctus orci. Cras porttitor imperdiet nunc, at ultricies tellus laoreet sit amet. Sed auctor cursus massa at porta. Integer ligula ipsum, tristique sit amet orci vel, viverra egestas ligula. Curabitur vehicula tellus neque, ac ornare ex malesuada et. In vitae convallis lacus. Aliquam erat volutpat. Suspendisse ac imperdiet turpis. Aenean finibus sollicitudin eros pharetra congue. Duis ornare egestas augue ut luctus. Proin blandit quam nec lacus varius commodo et a urna. Ut id ornare felis, eget fermentum sapien.</p>

<p>Nam vulputate diam nec tempor bibendum. Donec luctus augue eget malesuada ultrices. Phasellus turpis est, posuere sit amet dapibus ut, facilisis sed est. Nam id risus quis ante semper consectetur eget aliquam lorem. Vivamus tristique elit dolor, sed pretium metus suscipit vel. Mauris ultricies lectus sed lobortis finibus. Vivamus eu urna eget velit cursus viverra quis vestibulum sem. Aliquam tincidunt eget purus in interdum. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
```

```css
body {
  width: 90%;
  max-width: 900px;
  margin: 0 auto;
  font: .9em/1.2 Arial, Helvetica, sans-serif
}

.wrapper {
  background-color: rgb(79,185,227);
  padding: 10px;
  color: #fff;
  display: flow-root;
}

.box {
  float: left;
  margin: 15px;
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: rgb(207,232,220);
  padding: 1em;
}
```

{{ EmbedLiveSample('«_display_flow-root_»', '100%', 600) }}

## Résumé

Vous savez maintenant tout ce qu'il y a à savoir à propos des boîtes flottantes dans le développement moderne du web. Voyez l'article sur les [Méthodes anciennes de mise en page](/fr/docs/Learn/CSS/CSS_layout/Legacy_Layout_Methods) pour toute information sur la façon dont elles étaient utilisées autrefois, ce qui pourrait se révéler utile si vous travaillez sur des projets anciens.

{{PreviousMenuNext("Learn/CSS/CSS_layout/Grids", "Learn/CSS/CSS_layout/Positioning", "Learn/CSS/CSS_layout")}}

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
