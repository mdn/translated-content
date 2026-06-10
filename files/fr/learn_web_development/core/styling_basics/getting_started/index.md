---
title: Commencer avec le CSS
short-title: Commencer le CSS
slug: Learn_web_development/Core/Styling_basics/Getting_started
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}

Dans cet article, nous allons vous montrer comment prendre un document HTML simple et y appliquer du CSS, en apprenant quelques détails pratiques du langage en cours de route. Nous passerons également en revue certaines fonctionnalités supplémentaires de la syntaxe CSS que vous n'avez pas encore vues.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <a href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Installing_software">Logiciel de base installé</a>, connaissances de base en
        <a href="/fr/docs/Learn_web_development/Getting_started/Environment_setup/Dealing_with_files">gestion des fichiers</a>, et notions de base en HTML (étudier
        <a href="/fr/docs/Learn_web_development/Core/Structuring_content">Introduction à HTML</a>.)
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Appliquer le CSS à un document HTML.</li>
          <li>Expérience pratique de l'écriture de CSS de base.</li>
          <li>Connaissance pratique des types de sélecteurs fondamentaux et des combinateurs.</li>
          <li>Le concept d'état tel qu'il s'applique au CSS.</li>
          <li>Familiarité avec d'autres fonctionnalités de la syntaxe CSS telles que les at-rules, les fonctions, les propriétés abrégées et les espaces blancs.</li>
        <ul>
      </td>
    </tr>
  </tbody>
</table>

## Commencer avec du HTML

Notre point de départ est un document HTML. Vous pouvez copier le code ci-dessous si vous souhaitez travailler sur votre propre ordinateur. Enregistrez le code ci-dessous sous le nom `index.html` dans un dossier sur votre machine.

```html live-sample___unstyled
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />
    <title>Commencer avec le CSS</title>
  </head>

  <body>
    <h1>Je suis un titre de premier niveau</h1>

    <p>
      Ceci est un paragraphe de texte. Dans le texte se trouve un
      <span>élément span</span> et aussi un
      <a href="https://exemple.com">lien</a>.
    </p>

    <p>
      Ceci est le deuxième paragraphe. Il contient un élément
      <em>emphasized</em>.
    </p>

    <ul>
      <li>Élément <span>un</span></li>
      <li>Élément deux</li>
      <li>Élément <em>trois</em></li>
    </ul>
  </body>
</html>
```

Cela s'affiche comme suit&nbsp;:

{{EmbedLiveSample("unstyled", "", 240)}}

> [!NOTE]
> Si vous lisez ceci sur un appareil ou dans un environnement où vous ne pouvez pas facilement créer des fichiers, ne vous inquiétez pas — cliquez sur le bouton «&nbsp;Exécuter&nbsp;» dans l'exemple en direct ci-dessus pour l'ouvrir dans le MDN Playground. Là, vous pouvez éditer le code CSS et HTML comme indiqué plus loin et voir les résultats combinés en direct.

## Ajouter du CSS à notre document

La toute première chose que nous devons faire est d'informer le document HTML que nous avons des règles CSS que nous voulons qu'il utilise. Il existe trois façons différentes d'appliquer du CSS à un document HTML que vous rencontrez couramment — les feuilles de style externes, les feuilles de style internes et les styles en incise. Voyons cela maintenant.

Si vous suivez cet article en utilisant le MDN Playground, vous ne pouvez pas suivre les étapes détaillées dans cette section de la même manière que les personnes écrivant le code sur leurs ordinateurs locaux. C'est dû au fait que MDN Playground gère l'ajout du CSS au HTML de manière implicite en arrière-plan. Vous devez cependant lire la section pour être conscient du contenu.

### Feuille de style externe

Une feuille de style externe contient du CSS dans un fichier séparé avec une extension `.css`. C'est la méthode la plus courante et la plus utile pour ajouter du CSS à un document. Vous pouvez lier un seul fichier CSS à plusieurs pages web, en stylisant toutes avec la même feuille de style CSS.

Créez un fichier dans le même dossier que votre document HTML et enregistrez-le sous le nom `styles.css`.

Pour lier `styles.css` à `index.html`, ajoutez la ligne suivante quelque part dans l'élément {{htmlelement("head")}} du document HTML&nbsp;:

```html
<link rel="stylesheet" href="styles.css" />
```

Cet élément {{htmlelement("link")}} indique au navigateur que nous avons une feuille de style, en utilisant l'attribut `rel`, et l'emplacement de cette feuille de style comme valeur de l'attribut `href`. Vous pouvez tester que le CSS fonctionne en ajoutant une règle à `styles.css`. En utilisant votre éditeur de code, ajoutez ce qui suit à votre fichier CSS&nbsp;:

```css
h1 {
  color: red;
}
```

Enregistrez vos fichiers HTML et CSS, puis rechargez la page dans un navigateur web. Le titre de niveau un en haut du document doit maintenant être rouge. Si c'est le cas, félicitations — vous avez réussi à appliquer du CSS à un document HTML. Si ce n'est pas le cas, vérifiez attentivement que vous avez tout tapé correctement.

#### Localiser les feuilles de style à différents endroits

Dans l'exemple ci-dessus, le fichier CSS se trouve dans le même dossier que le document HTML, mais vous pouvez le placer ailleurs et ajuster le chemin (de la même manière que pour les [images HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_images)). Voici trois exemples&nbsp;:

```html
<!-- Dans un sous-dossier appelé styles dans le répertoire actuel -->
<link rel="stylesheet" href="styles/style.css" />

<!-- Dans un sous-dossier appelé general, qui se trouve dans un sous-dossier appelé styles, dans le répertoire actuel -->
<link rel="stylesheet" href="styles/general/style.css" />

<!-- Remonter d'un niveau de répertoire, puis dans un sous-dossier appelé styles -->
<link rel="stylesheet" href="../styles/style.css" />
```

### Feuille de style interne

Les feuilles de style internes sont contenues dans des éléments HTML {{htmlelement("style")}}, qui se trouvent à l'intérieur de l'élément HTML {{htmlelement("head")}}. Créons-en une maintenant.

Dans votre document HTML, ajoutez le fragment suivant quelque part entre les balises `<head>` et `</head>`&nbsp;:

```html
<style>
  p {
    color: purple;
  }
</style>
```

Enregistrez vos fichiers HTML et CSS, puis rechargez la page dans un navigateur web. Tous vos paragraphes devraient maintenant être violets.

Dans certaines circonstances, les feuilles de style internes peuvent être utiles. Par exemple, peut-être que vous travaillez avec un système de gestion de contenu où vous êtes bloqué pour modifier les fichiers CSS externes.

Cependant, pour les sites comportant plus d'une page, les feuilles de style internes sont moins efficaces que les feuilles de style externes. Pour appliquer un style CSS uniforme à plusieurs pages en utilisant des feuilles de style internes, vous devez répéter la feuille de style interne sur chaque page web. La pénalité d'efficacité se répercute également sur la maintenance du site. Avec le CSS dans les feuilles de style internes, il existe un risque que même un simple changement de style nécessite des modifications sur plusieurs pages web.

Avant de continuer, supprimez l'élément `<style>` et son contenu de votre exemple HTML.

### Styles en incise

Les styles en incise sont des déclarations CSS qui n'affectent qu'un seul élément HTML, contenues dans un attribut `style`. Essayons d'en implémenter un maintenant.

Ajoutez un attribut `style` à l'élément HTML {{htmlelement("span")}} dans votre HTML, afin qu'il ressemble à ce qui suit&nbsp;:

```html
<span style="color: purple; font-weight: bold">élément span</span>
```

Enregistrez et actualisez, vous devez voir uniquement le texte à l'intérieur du `<span>` devenir violet et en gras. Essayez d'ajouter d'autres déclarations à l'intérieur de votre attribut `style` (séparées par des points-virgules), ou d'autres attributs `style` à d'autres éléments.

Une fois que vous avez terminé vos expérimentations, supprimez tous vos attributs `style`.

**Évitez d'utiliser le CSS de cette manière si possible.** C'est une mauvaise pratique. Tout d'abord, c'est la mise en œuvre la moins efficace du CSS pour la maintenance. Un changement de style peut nécessiter plusieurs modifications au sein d'une seule page web. Deuxièmement, le CSS en incise mélange également le code de présentation (CSS) avec le HTML et le contenu, rendant tout plus difficile à lire et à comprendre. Séparer le code et le contenu facilite la maintenance pour tous ceux qui travaillent sur le site web.

Vous pouvez être amené à utiliser des styles en incise si votre environnement de travail est très restrictif. Par exemple, peut-être que votre CMS ne vous permet de modifier que le corps HTML. Vous pouvez également voir beaucoup de styles en incise dans les emails HTML pour assurer la compatibilité avec le plus grand nombre possible de clients de messagerie. Il est également assez courant de définir des styles en incise lors de l'application dynamique de styles à l'aide de JavaScript.

## Utiliser des sélecteurs courants

Dans cette section, nous allons faire un bref tour d'horizon de certains des types de sélecteurs les plus courants que vous pouvez rencontrer.

### Sélectionner des éléments HTML

En rendant notre titre rouge, nous avons déjà démontré que nous pouvons cibler et mettre en forme un élément HTML. Nous faisons cela en ciblant un **sélecteur d'élément** (également connu sous le nom de **sélecteur de type**) — c'est un sélecteur qui correspond directement à un nom d'élément HTML. Pour cibler tous les paragraphes du document, vous utilisez le sélecteur `p`. Pour rendre tous les paragraphes verts, vous utilisez&nbsp;:

```css
p {
  color: green;
}
```

Vous pouvez cibler plusieurs sélecteurs en même temps en les séparant par une virgule. Si vous voulez que tous les paragraphes et tous les éléments de liste soient verts, votre règle ressemble à ceci&nbsp;:

```css
p,
li {
  color: green;
}
```

Essayez ceci dans l'exemple ci-dessous (cliquez sur «&nbsp;Exécuter&nbsp;») ou dans votre copie locale&nbsp;:

```html hidden live-sample___started-types
<h1>Je suis un titre de premier niveau</h1>

<p>
  Ceci est un paragraphe de texte. Dans le texte se trouve un
  <span>élément span</span> et également un
  <a href="https://exemple.com">lien</a>.
</p>

<p>
  Ceci est le deuxième paragraphe. Il contient un élément <em>en emphase</em>.
</p>

<ul>
  <li>Élément un</li>
  <li>Élément deux</li>
  <li>Élément <em>trois</em></li>
</ul>
```

```css live-sample___started-types
h1 {
  color: red;
}

p,
li {
}
```

{{EmbedLiveSample("started-types", "", 240)}}

La leçon interactive suivante enseigne les concepts de base du CSS et offre quelques exercices pratiques.

<mdn-scrim-inline url="https://scrimba.com/frontend-path-c0j/~015" scrimtitle="Écrire vos premières lignes de CSS !"></mdn-scrim-inline>

### Ajouter une classe

Jusqu'à présent, nous avons mis en forme les éléments en fonction de leurs noms d'éléments HTML. Cela fonctionne tant que vous voulez que tous les éléments de ce type dans votre document aient le même aspect. Pour sélectionner un sous-ensemble des éléments sans modifier les autres, vous pouvez ajouter une `class` à votre élément HTML et cibler cette classe dans votre CSS.

1. Dans votre document HTML, ajoutez un [attribut de classe](/fr/docs/Web/HTML/Reference/Global_attributes/class) au deuxième élément de la liste. Votre liste ressemble maintenant à ceci&nbsp;:

   ```html
   <ul>
     <li>Élément un</li>
     <li class="special">Élément deux</li>
     <li>Élément <em>trois</em></li>
   </ul>
   ```

2. Dans votre CSS, vous pouvez cibler la classe `special` en créant un sélecteur qui commence par un point. Ajoutez ce qui suit à votre fichier CSS&nbsp;:

   ```css
   .special {
     color: orange;
     font-weight: bold;
   }
   ```

3. Enregistrez et actualisez pour voir le résultat.

Vous pouvez maintenant appliquer la classe `special` à d'autres éléments de votre page que vous souhaitez avoir le même aspect que cet élément de liste. Ajoutez une classe `special` au `<span>` à l'intérieur du paragraphe, puis rechargez votre page&nbsp;: il doit également être orange et en gras.

### Mettre en forme les éléments en fonction de leur emplacement dans un document

Il y a des moments où vous voulez que quelque chose ait un aspect différent en fonction de son emplacement dans le document. Il existe un certain nombre de sélecteurs qui peuvent vous aider ici, mais pour l'instant, nous allons en examiner seulement quelques-uns. Dans notre document, il y a deux éléments `<em>` — un à l'intérieur d'un paragraphe et l'autre à l'intérieur d'un élément de liste. Pour sélectionner uniquement un `<em>` qui est imbriqué à l'intérieur d'un `<li>`, vous pouvez utiliser un sélecteur appelé **combinateur descendant**, qui prend la forme d'un espace entre deux autres sélecteurs.

Ajoutez la règle suivante à votre feuille de style&nbsp;:

```css
li em {
  color: rebeccapurple;
}
```

Ce sélecteur sélectionne tout élément `<em>` qui est un descendant d'un `<li>`. Ainsi, dans votre document exemple, vous devez constater que le `<em>` dans le troisième élément de la liste est maintenant violet, mais celui à l'intérieur du paragraphe reste inchangé.

Vous pouvez également essayer de mettre en forme un paragraphe lorsqu'il se trouve directement après un titre au même niveau hiérarchique dans le HTML. Pour ce faire, placez un `+` (un **combinateur de voisin suivant**) entre les sélecteurs.

Essayez d'ajouter cette règle à votre feuille de style également&nbsp;:

```css
h1 + p {
  font-size: 200%;
}
```

L'exemple interactif ci-dessous inclut les deux règles ci-dessus. Essayez d'ajouter une règle pour rendre un `<span>` rouge s'il se trouve à l'intérieur d'un paragraphe. Vous savez quand vous avez réussi, car le `<span>` dans le premier paragraphe est rouge, mais celui dans le premier élément de la liste ne change pas de couleur.

```html hidden live-sample___started-combinators
<h1>Je suis un titre de premier niveau</h1>

<p>
  Ceci est un paragraphe de texte. Dans le texte se trouve un
  <span>élément span</span> et aussi un <a href="https://exemple.com">lien</a>.
</p>

<p>
  Ceci est le deuxième paragraphe. Il contient un élément <em>en emphase</em>.
</p>

<ul>
  <li>Élément <span>un</span></li>
  <li>Élément deux</li>
  <li>Élément <em>trois</em></li>
</ul>
```

```css live-sample___started-combinators
li em {
  color: rebeccapurple;
}

h1 + p {
  font-size: 200%;
}
```

{{EmbedLiveSample("started-combinators", "", 340)}}

> [!NOTE]
> Comme vous pouvez le voir, CSS nous offre plusieurs façons de cibler les éléments, et nous n'avons fait qu'effleurer la surface jusqu'à présent&nbsp;! Nous examinerons de manière approfondie tous ces sélecteurs et bien d'autres plus tard dans le cours.

### Mettre en forme les éléments en fonction de leur état

Le dernier type de mise en forme que nous allons examiner dans ce tutoriel est la capacité de mettre en forme les éléments en fonction de leur état. Un exemple simple de c'est la mise en forme des liens. Lorsque nous mettons en forme un lien, nous devons cibler l'élément {{HTMLElement("a")}} (ancre). Cet élément a différents états en fonction de s'il est non visité, visité, survolé, sélectionné par le clavier ou en cours de clic (activé). Vous pouvez utiliser CSS pour cibler ces différents états — le CSS ci-dessous met en forme les liens non visités en rose et les liens visités en vert.

```css
a:link {
  color: pink;
}

a:visited {
  color: green;
}
```

Vous pouvez changer l'apparence du lien lorsque l'utilisateur·ice le survole, par exemple en supprimant le soulignement, ce qui est réalisé par la règle suivante&nbsp;:

```css
a:hover {
  text-decoration: none;
}
```

Dans l'exemple ci-dessous, vous pouvez expérimenter avec différentes valeurs pour les différents états d'un lien. Nous avons ajouté les règles ci-dessus, et maintenant vous vous rendez compte que la couleur rose est assez claire et difficile à lire — pourquoi ne pas la changer pour une meilleure couleur&nbsp;? Pouvez-vous rendre les liens en gras&nbsp;?

```html hidden live-sample___started-states
<h1>Je suis un titre de premier niveau</h1>

<p>
  Ceci est un paragraphe de texte. Dans le texte se trouve un
  <span>élément span</span> et aussi un <a href="https://exemple.com">lien</a>.
</p>

<p>
  Ceci est le deuxième paragraphe. Il contient un élément <em>en emphase</em>.
</p>

<ul>
  <li>Élément un</li>
  <li>Élément deux</li>
  <li>Élément <em>trois</em></li>
</ul>
```

```css live-sample___started-states
a:link {
  color: pink;
}

a:visited {
  color: green;
}

a:hover {
  text-decoration: none;
}
```

{{EmbedLiveSample("started-states", "", 240)}}

Nous avons supprimé le soulignement de notre lien au survol. Vous pouvez supprimer le soulignement de tous les états d'un lien. Il est cependant important de se rappeler que sur un site réel, vous voulez vous assurer que les visiteur·euse·s savent qu'un lien est un lien. Laisser le soulignement en place peut être un indice important pour que les gens réalisent qu'un texte à l'intérieur d'un paragraphe peut être cliqué — c'est le comportement auquel ils sont habitués. Comme pour tout en CSS, il y a un potentiel de rendre le document moins accessible avec vos modifications — nous visons à mettre en évidence les pièges potentiels aux endroits appropriés.

> [!NOTE]
> Vous verrez souvent mention de [l'accessibilité](/fr/docs/Learn_web_development/Core/Accessibility) dans ces leçons et sur MDN. Lorsque nous parlons d'accessibilité, nous faisons référence à l'exigence que nos pages web soient compréhensibles et utilisables par tous, que ce soit en utilisant un ordinateur avec une souris ou un pavé tactile, un téléphone avec un écran tactile, en naviguant uniquement au clavier, ou avec un lecteur d'écran, qui lit le contenu du document.

### Combiner les sélecteurs et les combinateurs

Il est important de noter que vous pouvez combiner plusieurs sélecteurs et combinateurs ensemble. Par exemple&nbsp;:

```css
/* sélectionne tout <span> qui est à l'intérieur d'un <p>, qui est à l'intérieur d'un <article> */
article p span {
}

/* sélectionne tout <p> qui vient directement après un <ul>, qui vient directement après un <h1> */
h1 + ul + p {
}
```

Vous pouvez également combiner plusieurs types ensemble. Essayez d'ajouter ce qui suit dans votre code&nbsp;:

```css
h1 + p .special {
  color: yellow;
  background-color: black;
  padding: 5px;
}
```

Cela met en forme tout élément avec une classe `special`, qui se trouve à l'intérieur d'un `<p>`, qui vient juste après un `<h1>`. Ouf&nbsp;! Cela doit cibler l'élément `<span class="special">élément span</span>` dans votre code.

Ne vous inquiétez pas si cela semble compliqué pour le moment — vous commencerez bientôt à comprendre au fur et à mesure que vous écrirez plus de CSS.

## Autres fonctionnalités de la syntaxe CSS

Maintenant que nous avons exploré quelques fonctionnalités CSS, nous allons vous donner un aperçu général de certaines des autres fonctionnalités de la syntaxe CSS que vous pouvez rencontrer au cours de ce module. Si vous souhaitez rechercher plus de détails sur l'une de ces fonctionnalités, vous pouvez essayer de taper le nom de la fonctionnalité dans le champ de recherche en haut de cette page, ou parcourir la [référence CSS](/fr/docs/Web/CSS/Reference) de MDN.

Pour expérimenter avec les extraits de code dans chaque cas, vous pouvez ajouter le HTML et le CSS fournis à l'exemple local ou à l'instance MDN Playground sur laquelle vous avez travaillé ci-dessus.

### Fonctions

Bien que la plupart des valeurs soient des mots-clés relativement simples ou des valeurs numériques, il existe certaines valeurs qui prennent la forme d'une fonction.

#### La fonction `calc()`

Un exemple est la fonction `calc()`, qui peut effectuer des calculs simples dans CSS&nbsp;:

```html
<div class="outer">
  <div class="box">La boîte interne vaut 90% - 30px.</div>
</div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

La page doit s'afficher comme ceci&nbsp;:

{{EmbedLiveSample("La fonction `calc()`", "100%", 200)}}

Une fonction est composée du nom de la fonction suivi d'une paire de parenthèses entre lesquelles sont placées les valeurs autorisées pour cette fonction. Dans le cas de l'exemple `calc()` ci-dessus, les valeurs définissent la largeur de cette boîte pour qu'elle soit égale à 90% de la largeur du bloc contenant, moins 30 pixels.

#### Les fonctions de `transform`

Un autre exemple est sur les différentes valeurs de la propriété {{CSSxRef("transform")}}, telles que `rotate()`.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn);
}
```

La page doit s'afficher comme ceci&nbsp;:

{{EmbedLiveSample("Les fonctions de `transform`", "100%", 200)}}

Recherchez différentes valeurs des propriétés listées ci-dessous. Essayez d'écrire des règles CSS qui appliquent des styles à différents éléments HTML en utilisant les fonctions suivantes&nbsp;:

- {{CSSxRef("transform")}}
- {{CSSxRef("background-image")}}, en particulier les valeurs de dégradé
- {{CSSxRef("color")}}, en particulier les valeurs rgb et hsl

### Les règles @

[Les règles @](/fr/docs/Web/CSS/Guides/Syntax/At-rules) CSS (prononcées «&nbsp;<i lang="en">at-rules</i>&nbsp;» en anglais) fournissent des instructions sur le comportement du CSS. Une règle @ courante que vous êtes susceptible de rencontrer est `@media`, qui est utilisée pour créer des [requêtes de médias](/fr/docs/Web/CSS/Guides/Media_queries). Les requêtes de médias utilisent une logique conditionnelle pour appliquer le style CSS.

Dans l'exemple ci-dessous, la feuille de style définit un fond rose par défaut pour l'élément `<body>`. Cependant, une requête de médias suit et définit un fond bleu pour l'élément `<body>` si la fenêtre du navigateur est plus large que `30em`.

```css
body {
  background-color: pink;
}

@media (width >= 30em) {
  body {
    background-color: blue;
  }
}
```

### Les propriétés raccourcies

Certaines propriétés comme {{CSSxRef("font")}}, {{CSSxRef("background")}}, {{CSSxRef("padding")}}, {{CSSxRef("border")}} et {{CSSxRef("margin")}} sont appelées **propriétés raccourcies**. Cela s'explique par le fait que les propriétés raccourci permettent de définir plusieurs valeurs en une seule ligne.

Par exemple, cette ligne de code&nbsp;:

```css
/* Dans les raccourcis à 4 valeurs comme padding ou margin, les valeurs
   sont données dans l'ordre top, right, bottom, left (sens des aiguilles
   d'une montre depuis top).
   Il y a d'autres raccourcis, à 2 valeurs par exemple, qui définissent
   padding ou margin pour top/bottom, puis left/right */
padding: 10px 15px 15px 5px;
```

produit le même effet que les quatre lignes suivantes réunies&nbsp;:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Cette ligne seule&nbsp;:

```css
background: red url("bg-graphic.png") 10px 10px repeat-x fixed;
```

produit la même chose que ces cinq lignes&nbsp;:

```css
background-color: red;
background-image: url("bg-graphic.png");
background-position: 10px 10px;
background-repeat: repeat-x;
background-attachment: fixed;
```

Plus tard dans le cours, vous rencontrerez de nombreux autres exemples de propriétés raccourcies. Pour l'instant, essayez d'utiliser les déclarations ci-dessus (ou d'autres que vous connaissez peut-être) dans votre propre code pour vous familiariser avec leur fonctionnement.

### Commentaires CSS

Comme pour tout travail de programmation, il est recommandé d'ajouter des commentaires dans votre code CSS. Cela vous aide à vous rappeler le fonctionnement du code lorsque vous y revenez plus tard pour apporter des corrections ou des améliorations. Cela aide également les autres à comprendre le code.

Les commentaires CSS commencent par `/*` et se terminent par `*/`. Dans l'exemple ci-dessous, les commentaires marquent le début de sections distinctes du code. Cela facilite la navigation dans le code à mesure qu'il s'étoffe. Grâce à ce type de commentaires, la recherche de commentaires dans votre éditeur de code devient un moyen efficace de trouver une section de code.

```css
/* mise en forme des éléments de base */
/* ---------------------------------- */
body {
  font:
    1em/150% "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* On donne un traitement conditionnel de la taille de police globale.
     sur de grands écrans, on augmente la valeur de font-size pour une
     meilleure lisibilité */
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

/* mise en forme des éléments imbriqués dans le DOM */
/* ------------------------------------------------ */
div p,
#id::first-line {
  background-color: red;
  border-radius: 3px;
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

La «&nbsp;mise en commentaire&nbsp;» du code est également utile pour désactiver temporairement certaines sections de code à des fins de test. Dans l'exemple ci-dessous, les règles pour `.special` sont désactivées en «&nbsp;mettant en commentaire&nbsp;» le code.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

Essayez d'ajouter des commentaires à votre CSS.

### Les espaces blancs dans le CSS

Les espaces blancs désignent les espaces, les tabulations et les sauts de ligne. Tout comme les navigateurs ignorent les espaces blancs superflus dans le code HTML, ils ignorent également ceux présents dans le code CSS. L'intérêt des espaces blancs est qu'ils facilitent la lecture du code.

Dans l'exemple ci-dessous, chaque déclaration (ainsi que le début et la fin de chaque règle) occupe sa propre ligne. C'est sans doute une bonne façon d'écrire du CSS. Cela facilite la maintenance et la compréhension du code CSS.

```css
body {
  font:
    1em/150% "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (width >= 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}
```

L'exemple suivant présente le même code CSS sous une forme plus condensée, tous les espaces superflus ayant été supprimés. Bien que les deux exemples fonctionnent de la même manière, celui ci-dessous est plus difficile à lire.

```css-nolint
body{font:1em/150% "Helvetica","Arial",sans-serif;padding:1em;margin:0 auto;max-width:33em;}
@media(width>=70em){body{font-size:130%;}}
h1{font-size:1.5em;}
```

Gardez à l'esprit que certaines modifications des espaces peuvent entraîner des erreurs. Les noms de propriétés ne contiennent jamais d'espaces, tandis que les valeurs de propriétés qui nécessitent un espace entre plusieurs valeurs ne sont plus valides si cet espace est supprimé. Par exemple, ces déclarations sont valides en CSS&nbsp;:

```css
margin: 0 auto;
padding-left: 10px;
```

Mais les déclarations suivantes sont invalides&nbsp;:

```css example-bad
margin: 0auto;
padding- left: 10px;
```

Voyez-vous les erreurs d'espacement&nbsp;? Tout d'abord, `0auto` n'est pas reconnu comme une valeur valide pour la propriété `margin`. L'entrée `0auto` est censée être deux valeurs distinctes&nbsp;: `0` et `auto`. Ensuite, le navigateur ne reconnaît pas `padding-` comme une propriété valide. Le nom correct de la propriété (`padding-left`) ne contient pas d'espace.

Vous devez toujours vous assurer de séparer les valeurs distinctes les unes des autres par au moins un espace. Gardez les noms de propriétés et les valeurs de propriétés ensemble en tant que chaînes de caractères continues.

Pour découvrir comment les espaces peuvent casser le CSS, essayez de jouer avec les espaces dans votre CSS de test.

## Résumé

Dans cet article, nous avons examiné plusieurs façons de styliser un document en utilisant le CSS. Nous continuerons à développer ces connaissances au fur et à mesure des leçons. Cependant, vous savez déjà suffisamment pour styliser du texte et appliquer du CSS en fonction de différentes façons de cibler les éléments dans le document.

Ensuite, nous vous proposerons un défi pour tester vos nouvelles connaissances.

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/What_is_CSS", "Learn_web_development/Core/Styling_basics/Styling_a_bio_page", "Learn_web_development/Core/Styling_basics")}}
