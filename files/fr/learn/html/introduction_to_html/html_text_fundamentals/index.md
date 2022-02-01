---
title: Fondamentaux du texte HTML
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
tags:
  - Apprendre
  - Débutant
  - Guide
  - HTML
  - Introduction à l'HTML
  - Listes
  - Paragraphes
  - Texte
  - Titres
  - sémantique
translation_of: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
original_slug: Apprendre/HTML/Introduction_à_HTML/HTML_text_fundamentals
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

L'un des principaux buts de HTML est de structurer du texte et lui donner du sens (ce que l'on appelle la {{glossary("sémantique")}}) afin que le navigateur puisse l'afficher correctement. Cet article explique comment {{glossary("HTML")}} peut être utilisé pour structurer une page en ajoutant des titres et des paragraphes, en marquant des emphases, en créant des listes, et bien plus encore.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requis:</th>
      <td>
        <p>
          Connaître les bases du langage HTML, telles que traitées à la page
          <a
            href="/fr/docs/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started"
            >Commencer avec le HTML</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>
        <p>
          Apprendre comment ajouter des balises dans une page de texte simple
          pour la structurer et lui donner du sens — en incluant des
          paragraphes, des titres, des listes, des emphases et des citations.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Les bases : titres et paragraphes

La plupart des textes structurés comprennent des titres et des paragraphes, que ce soit dans les romans, les journaux, les livres scolaires, les magazines, etc.

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg)

Le contenu structuré facilite la lecture et la rend plus agréable.

En HTML, les paragraphes doivent être contenus dans un élément {{htmlelement("p")}}, comme ceci :

```html
<p>Je suis un paragraphe, oh oui je le suis.</p>
```

Chaque titre doit être contenu dans un élément titre :

```html
<h1>Je suis le titre de l'histoire.</h1>
```

Il y a 6 éléments de titre — {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}}, et {{htmlelement("h6")}}. Chaque élément représente un niveau de titre différent ; `<h1>` représente le titre principal, `<h2>` représente un sous-titre, `<h3>` représente un sous-sous-titre, et ainsi de suite jusqu'au niveau de titre le plus bas qui correspond à `<h6>`.

### Implémentation de la hiérarchie structurale

Dans une histoire, la balise `<h1>` représenterait le titre de l'histoire, les balises `<h2>` représenteraient les titres des chapitres, les balises `<h3>` les sous-sections des chapitres, en poursuivant ainsi jusqu'à la balise `<h6>`.

```html
<h1>L'ennui mortel</h1>

<p>par Chris Mills</p>

<h2>Chapitre I : La nuit noire</h2>

<p>Il faisait nuit noire. Quelque part une chouette ululait. La pluie tombait sur ...</p>

<h2>Chapitre II : Le silence éternel</h2>

<p>Notre protagoniste ne pouvait même pas murmurer à l'ombre de la silhouette...</p>

<h3>Le spectre parle</h3>

<p>Plusieurs heures s'étaient écoulées, quand soudain le spectre assis se releva et s'exclama : « S'il vous plaît, ayez pitié de mon âme ! »...</p>
```

C'est vous qui décidez ce que représentent les éléments utilisés tant que la hiérarchie a du sens. Vous devez cependant garder à l'esprit quelques bonnes pratiques lorsque vous créez de telles structures :

- Il est préférable de n'utiliser qu'un seul `<h1>` par page — c'est le niveau principal, et tous les autres devraient être de niveau inférieur.
- Assurez-vous d'utiliser les balise de titre dans l'ordre correct et logique : `<h1>` puis `<h2>`, puis `<h3>` et ainsi de suite.
- Bien qu'il y ait 6 niveaux de titre (de `<h1>` à `<h6>`), Il est déconseillé d'utiliser plus de trois niveaux dans une page. Les documents avec beaucoup de niveaux deviennent complexes et difficiles à parcourir. Dans ce cas, il est préférable de partager le contenu sur plusieurs pages.

### Pourquoi faut-il structurer un document ?

Pour répondre à cette question, regardons la page [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) — le point de départ de l'exemple que nous allons utiliser dans cet article (une recette). Enregistrez une copie de ce fichier sur votre ordinateur car vous en aurez besoin pour les exercices qui vont suivre. Le corps de ce document contient plusieurs parties sans aucune balise ; elles sont seulement séparées par des retours chariots (obtenus en pressant la touche <kbd>Entrée</kbd> ou <kbd>⏎</kbd>)

Cependant, si l'on ouvre ce document dans un navigateur, il sera affiché sous forme d'un gros bloc de texte !

![Une page Web qui montre un mur de texte non formaté, parce qu'il n'y a pas d'éléments sur la page pour la structurer.](recette.png)

Ceci est dû au fait qu'il n'y a aucun élément indiquant la structure du contenu, et donc le navigateur ne sait pas différencier ce qui est un titre d'un paragraphe. De plus :

- Les visiteurs d'une page web la parcourent pour trouver le contenu pertinent. Par conséquent, ils ne lisentsouvent que les titres (généralement [nous ne passons que très peu de temps sur une page web](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)). S'ils ne trouvent pas le contenu souhaité en quelques secondes, ils seront probablement déçus et chercheront l'information souhaitée ailleurs.
- Les moteurs de recherche, lorsqu'ils indexent votre page, prennent en considération les titres en tant que mots‑clés ce qui influe sur le classement de la page lors d'une recherche. Sans titre, une page aura un faible référencement (voir {{glossary("SEO")}} (Search Engine Optimization).
- Les personnes malvoyantes ne pouvant lire votre page peuvent utiliser des [lecteurs d'écran](https://fr.wikipedia.org/wiki/Lecteur_d%27%C3%A9cran). Ces logiciels permettent d'accéder rapidement à une partie du texte. Pour cela, ils lisent les titres de votre document aux utilisateurs, leur permettant ainsi de trouver rapidement l'information dont ils ont besoin. Si les titres ne sont pas disponibles, les lecteurs d'écran lisent tout le document, le rendant peu accessible aux personnes avec un handicap visuel.
- Pour composer un style de contenu avec le {{glossary("CSS")}} ou réaliser des choses intéressantes avec le {{glossary("JavaScript")}}, vous devez avoir des éléments enveloppant les contenus pertinents, ce qui permet ensuite de les cibler avec CSS/JavaScript.

Il est donc nécessaire d'ajouter des balises de structuration du contenu.

### Apprentissage actif : structurer le contenu

Dans l'exemple ci-dessous, ajoutez des balises dans le texte de la zone Code modifiable afin qu'il fasse apparaître un titre et deux paragraphes dans le champ _Sortie directe_.

Si vous faites une erreur, vous pouvez recommencer en appuyant sur le bouton _Réinitialiser_. Si vous êtes bloqués, appuyez sur le bouton _Voir la solution_ pour afficher la réponse.

```html hidden
<h2>Sortie directe</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la zone de code (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">Ma courte histoire : je suis une policière et mon nom est Trish.

Mes jambes sont en carton et je suis mariée à un poisson.</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Voir la solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Voir la solution') {
    textarea.value = solutionEntry;
    solution.value = 'Cacher la solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Voir la solution';
  }
  updateCode();
});

var htmlSolution = '<h1>Ma courte histoire</h1>\n<p>Je suis une policière et mon nom est Trish.</p>\n<p>Mes jambes sont en carton et je suis mariée à un poisson.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// bloquer le déplacement du focus hors de la zone texte avec la touche Tab
// faire en sorte que la touche Tab mette une tabulation à la position du curseur

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Mettre à jour le code utilisateur enregistré chaque fois que l'utilisateur
// met à jour le texte du code

textarea.onkeyup = function(){
  // nous souhaitons uniquement enregistrer l'état quand le code utilisateur est montré,
  // non la solution, donc elle n'est pas enregistrée sur le code utilisateur
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_structurer_le_contenu', 700, 370) }}

### Pourquoi a-t-on besoin de sémantique ?

La sémantique est utilisée partout autour de nous — on se fie à nos précédentes experiences pour savoir à quoi servent les objets du quotidien; quand on voit quelque chose, on sait à quoi cela sert. Par exemple, on s'attend à ce qu'un feu rouge de signalisation signifie « Stop » et qu'un feu vert signifie « Avancez ». Les choses peuvent vite devenir plus compliquées si de mauvaises sémantiques sont appliquées (existe-t-il un pays dans lequel un feu rouge signifie que l'on peut passer ? Je ne l'espère pas.)

Dans la même optique, il faut s'assurer que l'on utilise les bons élements et que l'on donne la bonne signification, la bonne fonction et la bonne apparence à notre contenu. Dans ce contexte, l'élément {{htmlelement("h1")}} est aussi un élement sémantique. Il donne au texte auquel il s'applique la fonction (ou la signification) de « titre principal de la page ».

```html
<h1>Ceci est un titre principal</h1>
```

Par défaut, le navigateur l'affiche avec une police de caractères de grande taille pour qu'il ait l'apparence d'un titre (même si vous pourriez lui donner l'apparence de n'importe quel élément avec le CSS). Plus important encore, sa valeur sémantique est utilisée de différentes manières, notamment par les moteurs de recherche ou les lecteurs d'écran (comme expliqué plus haut).

D'autre part, vous pouvez faire ressembler n'importe quel élément à un titre principal. Par exemple :

```html
<span style="font-size: 32px; margin: 21px 0;">Est-ce un titre principal?</span>
```

C'est un élément {{htmlelement("span")}}. Il n'a pas de valeur sémantique. Il s'utilise autour d'un contenu auquel vous souhaitez appliquer un style CSS (ou le modifier avec du JavaScript) sans lui donner une signification supplémentaire (vous en apprendrez plus à ce propos plus loin dans ce cours). Nous lui avons appliqué du CSS pour qu'il ressemble à un titre principal, mais comme il n'a pas de valeur sémantique, il ne bénéficie d'aucune des valeurs sémantiques décrites plus haut. Il est conseillé d'utiliser des éléments HTML adaptés à leur rôle.

## Listes

Intéressons-nous maintenant aux listes. Il y a des listes partout dans la vie — de la liste de courses à la liste de directions que vous suivez inconsciemment pour rentrer chez vous tous les jours, sans oublier la liste des instructions que vous suivez dans ce tutoriel ! Les listes sont aussi très répandues sur le Web, nous allons nous intéresser aux trois différents types de liste.

### Listes non-ordonnées

Les listes non-ordonnées sont utilisées pour représenter des listes d'éléments pour lesquelles l'ordre n'a pas d'importance. Prenons par exemple une liste de courses :

    lait
    œufs
    pain
    houmous

Les listes non-ordonnées débutent par un élément {{htmlelement("ul")}} (**u**nordered **l**ist) qui enveloppe tous les éléments de la liste&nbsp;:

```html
<ul>
lait
œufs
pain
houmous
</ul>
```

Chaque item est contenu dans un élément {{htmlelement("li")}} (**l**ist **i**tem)&nbsp;:

```html
<ul>
  <li>lait</li>
  <li>œufs</li>
  <li>pain</li>
  <li>houmous</li>
</ul>
```

#### Apprentissage actif : mettre des balises à une liste non-ordonnée

Modifiez l'exemple ci-dessous pour créer votre propre liste HTML non-ordonnée.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la zone de code (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">lait
œufs
pain
houmous</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Voir la solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Voir la solution') {
    textarea.value = solutionEntry;
    solution.value = 'Cacher la solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Voir la solution';
  }
  updateCode();
});

var htmlSolution = '<ul>\n<li>lait</li>\n<li>œufs</li>\n<li>pain</li>\n<li>houmous</li>\n</ul>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// bloquer le déplacement du focus hors de la zone texte avec la touche Tab
// faire en sorte que la touche Tab mette une tabulation à la position du curseur

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Mettre à jour le code utilisateur enregistré chaque fois que l'utilisateur
// met à jour le texte du code

textarea.onkeyup = function(){
  // nous souhaitons uniquement enregistrer l'état quand le code utilisateur est montré,
  // non la solution, donc elle n'est pas enregistrée sur le code utilisateur
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_mettre_des_balises_à_une_liste_non-ordonnée', 700, 400) }}

### Listes ordonnées

Les listes ordonnées permettent de représenter des listes dans lesquelles l'ordre des éléments a de l'importance — prenons par exemple une série de directions à suivre:

    Roulez jusqu'au bout de la route
    Tournez à droite
    Allez tout droit aux deux premiers ronds-points
    Tournez à gauche au troisième rond-point
    Roulez sur 300 mètres, l'école est sur votre droite

Les balises suivent la même structure que pour les listes ordonnées, à cela près que la liste est contenue dans l'élément {{htmlelement("ol")}} (**o**rdered **l**ist), et non dans `<ul>`:

```html
<ol>
  <li>Roulez jusqu'au bout de la route</li>
  <li>Tournez à droite</li>
  <li>Allez tout droit aux deux premiers ronds-points</li>
  <li>Tournez à gauche au troisième rond-point</li>
  <li>Roulez sur 300 mètres, l'école est sur votre droite</li>
</ol>
```

#### Apprentissage actif : baliser une liste ordonnée

Modifiez l'exemple ci‑dessous pour créer votre propre liste HTML ordonnée.

```html hidden
<h2>Sortie directe</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la zone de code (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">Roulez jusqu'au bout de la route
Tournez à droite
Allez tout droit aux deux premiers rond-points
Tournez à gauche au troisième rond-point
Roulez sur 300 mètres, l'école est sur votre droite</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Voir la solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Voir la solution') {
    textarea.value = solutionEntry;
    solution.value = 'Cacher la solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Voir la solution';
  }
  updateCode();
});

var htmlSolution = '<ol>\n<li>Roulez jusqu\'au bout de la route</li>\n<li>Tournez à droite</li>\n<li>Allez tout droit aux deux premiers rond-points</li>\n<li>Tournez à gauche au troisième rond-point</li>\n<li>Roulez sur 300 mètres, l\'école est sur votre droite</li>\n</ol>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// bloquer le déplacement du focus hors de la zone texte avec la touche Tab
// faire en sorte que la touche Tab mette une tabulation à la position du curseur

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Mettre à jour le code utilisateur enregistré chaque fois que l'utilisateur
// met à jour le texte du code

textarea.onkeyup = function(){
  // nous souhaitons uniquement enregistrer l'état quand le code utilisateur est montré,
  // non la solution, donc elle n'est pas enregistrée sur le code utilisateur
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_baliser_une_liste_ordonnée', 700, 500) }}

### Apprentissage actif : mettre des balises pour une recette de cuisine

Si vous êtes arrivé jusqu'ici dans l'article, vous avez toutes les connaissances nécessaires pour mettre en forme la recette de cuisine donnée en exemple. Vous pouvez soit télécharger le fichier [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) et le modifier de votre côté, soit faire l'exercice dans l'exemple modifiable ci-dessous. Il est conseillé de le modifier localement, sur votre machine, car vous pourrez alors enregistrer votre travail. Si vous utilisez l'exemple modifiable de cette page, le travail sera perdu à l'ouverture suivante de la page. Chaque méthode a ses avantages et ses inconvénients.

```html hidden
<h2>Sortie directe</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la zone de code (Tab insére une tabulation).</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">Recette rapide de l'houmous

 Cette recette permet d'obtenir rapidement un houmous savoureux, sans complications. C'est une adaptation de plusieurs recettes différentes que j'ai essayées au fil des ans.

  L'houmous est une délicieuse pâte épaisse utilisée dans les plats en Grèce et au Moyen-Orient. Il s'accorde très bien avec la salade, les viandes grillées et du pain calabrais.

  Ingrédients

  1 boîte (400 g) de pois chiches (garbanzos)
  175g de crème de sésame
  6 tomates séchées
  un demi poivron rouge
  une pincée de piment de Cayenne
  1 gousse d'ail
  un trait d'huile d'olive

  Ôter la peau de l'ail et le hacher grossièrement.
  Enlever les graines et la tige du poivron, le hacher grossièrement.
  Mettre tous les ingrédients dans un robot et mixer jusqu'à l'obtention d'une pâte.
  Si vous voulez un houmous grenu, ne le mixez pas trop longtemps.
 Si vous voulez un houmous lisse, mixez-le plus longtemps.

  Pour des saveurs différentes, vous pouvez essayer d'y mettre un peu de jus de citron et de coriandre, du tabasco, de la limette et du chipotle, de la harissa et de la menthe ou des épinards et de la feta. Essayez et voyez ce qui vous va.

  Conservation

  Mettez l'houmous fini au réfrigérateur dans un récipient fermé. Vous le garderez ainsi pendant environ une semaine. S'il se met à fermenter, jettez‑le sans hésiter.

  L'houmous peut être congelé ; consommez‑le dans les deux mois qui suivent sa congélation.</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Voir la solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Voir la solution') {
    textarea.value = solutionEntry;
    solution.value = 'Cacher la solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Voir la solution';
  }
  updateCode();
});

var htmlSolution = '<h1>Recette rapide de l\'houmous</h1>\n\n<p>Cette recette permet d\'obtenir rapidement un houmous savoureux, sans complications. C\'est une adaptation de plusieurs recettes différentes que j\'ai essayées au fil des ans.</p>\n\n<p>L\'houmous est une délicieuse pâte épaisse utilisée dans les plats en Grèce et au moyen-orient. Il s\'accorde très bien avec la salade, les viandes grillées et du pain calabrais.</p>\n\n<h2>Ingrédients</h2>\n\n<ul>\n<li>1 boîte (400 g) de pois chiches (garbanzos)</li>\n<li>175g de crème de sésame</li>\n<li>6 tomates séchées</li>\n<li>un demi poivron rouge</li>\n<li>une pincée de piment de Cayenne</li>\n<li>1 gousse d\'ail</li>\n<li>un trait d\'huile d\'olive</li>\n</ul>\n\n<h2>Instructions</h2>\n\n<ol>\n<li>Ôter la peau de l\'ail et le hacher grossièrement.</li>\n<li>Enlever les graines et la tige du poivron, le hacher grossièrement.</li>\n<li>Mettre tous les ingrédients dans un robot mixer jusqu\'à l\'obtention d\'une pâte.</li>\n<li>Si vous voulez un houmous grenu, ne le mixez pas trop longtemps.</li>\n<li>Si vous voulez un houmous lisse, mixez-le plus longtemps.</li>\n</ol>\n\n<p>Pour des saveurs différentes, vous pouvez essayer d\'y mettre un peu de jus de citron et de coriandre, du tabasco, de la limette et du chipotle, de la harissa et de la menthe ou des épinards et de la feta. Essayez et voyez ce qui vous va.</p>\n\n<h2>Conservation</h2>\n\n<p>Mettez l\'houmous fini au réfrigérateur dans un récipient fermé. Vous le garderez ainsi pendant environ une semaine. S\'il se met à fermenter, jettez‑le sans hésiter.</p>\n\n<p>L\'houmous peut être congelé ; consommez‑le dans les deux mois qui suivent sa congélation.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// bloquer le déplacement du focus hors de la zone texte avec la touche Tab
// faire en sorte que la touche Tab mette une tabulation à la position du curseur

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Mettre à jour le code utilisateur enregistré chaque fois que l'utilisateur
// met à jour le texte du code

  textarea.onkeyup = function(){
// nous souhaitons uniquement enregistrer l'état quand le code utilisateur est montré,
// non la solution, donc elle n'est pas enregistrée sur le code utilisateur
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_mettre_des_balises_pour_une_recette_de_cuisine', 700, 500) }}

Si vous êtes bloqué, vous pouvez cliquer sur le bouton _Voir la solution_, ou alors regarder l'exemple [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) sur le dépôt GitHub.

### Imbriquer des listes

Il est parfaitement possible d'imbriquer une liste dans une autre. Il se peut que vous vouliez insérer une liste à puces derrière une même puce de niveau supérieur. Prenons par exemple la deuxième liste de la recette :

```html
<ol>
  <li>Ôter la peau de l'ail et le hacher grossièrement.</li>
  <li>Enlever les graines et la tige du poivron, le hacher grossièrement.</li>
  <li>Mettre tous les ingrédients dans un robot mixer jusqu'à l'obtention d'une pâte.</li>
  <li>Si vous voulez un houmous grenu, ne le mixez pas trop longtemps.</li>
  <li>Si vous voulez un houmous lisse, mixez-le plus longtemps.</li>
</ol>
```

Comme les deux dernières puces de la liste sont très liées à celle qui les précède (elles semblent être des sous-instructions ou des choix correspondant à cette puce), il peut être judicieux de les regrouper dans une même liste non-ordonnée, et placer cette liste dans le quatrième item. Cela ressemblerait alors à ceci :

```html
<ol>
  <li>Ôter la peau de l'ail et le hacher grossièrement.</li>
  <li>Enlever les graines et la tige du poivron, le hacher grossièrement.</li>
  <li>Mettre tous les ingrédients dans un robot mixer jusqu'à l'obtention d'une pâte.
    <ul>
      <li>Si vous voulez un houmous grenu, ne le mixez pas trop longtemps.</li>
      <li>Si vous voulez un houmous lisse, mixez-le plus longtemps.</li>
    </ul>
  </li>
</ol>
```

N'hésitez pas à revenir au dernier apprentissage actif pour modifier vous même la liste correspondante dans la recette.

## Soulignement et importance

Dans le langage, nous mettons souvent l'accent sur certains mots pour modifier le sens d'une phrase et pour marquer certains mots comme étant importants ou différents d'une manière ou d'une autre. HTML fournit divers éléments de sémantique pour nous permettre de marquer un contenu textuel avec de tels effets. Dans cette section, nous examinerons quelques-uns des plus courants.

### Emphase

Dans le langage parlé, pour accentuer, nous insistons sur certains mots, modifiant subtilement le sens de ce que nous disons. De même, dans le langage écrit, nous avons tendance à mettre un certain accent sur des mots en les écrivant en italique. Par exemple, les deux phrases suivantes ont des significations différentes.

« Je suis content que vous n'ayez pas été en retard. »

« Je suis _content_ que vous n'ayez pas été _en retard_. »

La première phrase semble indiquer que le locuteur est vraiment soulagé que la personne n'aie pas été en retard. En revanche, la seconde a une tonalité sarcastique ou passive-agressive, exprimant la gêne que la personne soit arrivée un peu en retard.

En HTML, nous utilisons l'élément {{htmlelement("em")}} (**em**phase) pour marquer ces circonstances. Outre rendre le document plus intéressant à lire, ces marqueurs sont reconnus par les lecteurs d'écran et exprimés sur un ton de voix différent. Les navigateurs utilisent l'italique par défaut, mais il ne faut pas utiliser cette balise pour mettre en italique. Pour cela, utilisez un élément {{htmlelement("span")}} et du CSS, ou plus simplement un élément {{htmlelement("i")}} (voir ci-dessous).

```html
<p>Je suis <em>content</em> que vous n'ayez pas été <em>en retard</em>.</p>
```

### Grande importance

Pour mettre l'accent sur des mots très importants, nous les soulignons d'un ton particulier dans la langue parlée et nous les mettons en caractères gras dans la langue écrite. Par exemple :

Ce liquide est **hautement toxique**.

Je compte sur vous. **Ne soyez pas en retard** !

En HTML, nous utilisons l'élément {{htmlelement("strong")}} (forte importance) comme balise de telles circonstances. En plus de rendre le document plus lisible, ces balises sont reconnues par les lecteurs d'écran et énoncées avec des intonations différentes. Par défaut, les navigateurs mettent le texte marqué en gras, mais il ne faut pas utiliser cette balise pour mettre en gras. Pour cela, utilisez un élément {{htmlelement("span")}}} et du CSS, ou plus simplement un élément {{htmlelement("b")}} (voir ci-dessous).

```html
<p>Ce liquide est <strong>hautement toxique</strong>.</p>

<p>Je compte sur vous. <strong>Ne soyez pas en retard</strong> !</p>
```

Il est possible d'imbriquer `strong` et `em` :

```html
<p>Ce liquide est <strong>hautement toxique</strong> —
si vous en buvez, <strong>vous pourriez en <em>mourir</em></strong>.</p>
```

### Apprentissage actif : soulignez l'important

Dans ce paragraphe d'apprentissage actif, nous avons donné un exemple modifiable. À l'intérieur, nous aimerions que vous essayiez d'ajouter de l'emphase et de l'importance aux mots quand vous pensez qu'ils en ont besoin, juste pour une bonne pratique.

```html hidden
<h2>Live output</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la zone de code (Tab insére une tabulation).</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%"><h1>Avis important</h1>
<p>Le dimanche 9 janvier 2010, une bande de barbares
   a été repérée en train de voler plusieurs nains
   de jardin dans un centre commercial du centre-ville
   de Milwaukee. Ils portaient tous des combinaisons
   vertes et des chapeaux ridicules, et semblaient
   s'amuser comme des fous. Si quelqu'un a une quelconque information
  sur cet incident, veuillez contacter la police immédiatement.</p></textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var output = document.querySelector('.output');
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = 'Voir la solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Voir la solution') {
    textarea.value = solutionEntry;
    solution.value = 'Cacher la solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Voir la solution';
  }
  updateCode();
});

var htmlSolution = "<h1>Avis important</h1>\n<p>Le <strong>dimanche 9 janvier 2010</strong>, une bande de <em>barbares</em> a été repérée en train de voler <strong><em>plusieurs</em> nains de jardin</strong> dans un centre commercial du centre-ville de <strong>Milwaukee</strong>. Ils portaient tous <em>des combinaisons vertes</em> et des <em>chapeaux ridicules</em> et semblaient s'amuser comme des fous. Si quelqu'un a une <strong>quelconque</strong> information sur cet incident, veuillez contacter la police <strong>immédiatement</strong>.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// bloquer le déplacement du focus hors de la zone texte avec la touche Tab
// faire en sorte que la touche Tab mette une tabulation à la position du curseur
textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = (textarea.value).substring(0, caretPos);
  var back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

  // Mettre à jour le code utilisateur enregistré chaque fois que l'utilisateur
  // met à jour le texte du code
textarea.onkeyup = function(){
  // nous souhaitons uniquement enregistrer l'état quand le code utilisateur est montré,
  // non la solution, donc elle n'est pas enregistrée sur le code utilisateur

  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample("Apprentissage_actif_soulignez_l'important", 700, 500) }}

### Italique, gras, soulignement…

Les éléments dont nous avons discuté jusqu'à présent ont une sémantique bien définie. La situation avec {{htmlelement("b")}}, {{htmlelement("i")}} et {{htmlelement("u")}} est un peu plus complexe. Ils sont apparus pour que les personnes puissent écrire du texte en gras, en italique ou souligné à une époque où le CSS était encore mal ou pas du tout pris en charge. De tels éléments, qui n'affectent que la présentation et non la sémantique, sont appelés **éléments de présentation** et ne devraient plus être utilisés, car comme nous l'avons vu précédemment, la sémantique a la plus grande importance pour l'accessibilité, le référencement, etc.

HTML5 a redéfini `<b>`, `<i>` et `<u>` avec de nouveaux rôles sémantiques quelques peu déroutants.

Voici la meilleure règle d'or : il est probablement approprié d'utiliser `<b>`, `<i>`, ou `<u>` pour communiquer le sens traditionnellement associé aux caractères gras, italiques ou soulignés, à condition qu'il n'y ait pas d'élément plus approprié. Toutefois, il demeure toujours essentiel de garder présent à l'esprit le concept d'accessibilité. L'écriture en italique n'est pas très utile aux personnes utilisant des lecteurs d'écran ou un système d'écriture autre que l'alphabet latin.

- {{HTMLElement('i')}} s'utilise pour transmettre un sens traditionnellement véhiculé avec l'italique : des mots étrangers, une désignation taxonomique, des termes techniques, une pensée…
- {{HTMLElement('b')}} s'utilise pour transmettre un sens traditionnellement véhiculé avec les caractères en gras : des mots‑clés, des noms de produits, une phrase liminaire…
- {{HTMLElement('u')}} s'utilise pour transmettre un sens traditionnellement véhiculé avec le soulignement : noms propres, mauvaise orthographe...

> **Note :** Un petit avertissement à propos du soulignement : **les gens associent fortement soulignement et hyperliens**. Par conséquent, sur le Web, il est préférable de ne souligner que les liens. N'utilisez l'élément `<u>` que s'il est sémantiquement approprié, mais envisagez d'utiliser les CSS pour remplacer le soulignement par défaut par quelque chose de plus approprié sur le Web. L'exemple ci-dessous illustre comment cela peut être fait.

```html
<!-- noms scientifiques -->
<p>
  Le colibri à gorge rouge (<i>Archilochus colubris</i>)
  est le colibri le plus courant dans l'ouest de l'Amérique du Nord.
</p>

<!-- mots dans une langue étrangère -->
<p>
  Le menu était un océan de mots exotiques comme <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> et <i lang="en">porridge</i>.
</p>

<!-- une faute d'orthographe connue -->
<p>
  Un jour, j'apprendrai comment mieux <u style="text-decoration-line: underline; text-decoration-style: wavy;">épeler</u>.
</p>

<!-- Mettre en évidence les mots‑clés dans un ensemble d'instructions -->
<ol>
  <li>
    <b>Trancher</b> deux morceaux de pain dans la miche.
  </li>
  <li>
    <b>Mettre</b> une rondelle de tomate et une feuille de laitue
    entre les deux tranches de pain.
  </li>
</ol>
```

## Résumé

C'est tout pour l'instant ! Cet article doit vous avoir donné une bonne idée de la façon de commencer à baliser le texte en HTML et présenté les éléments les plus importants dans ce domaine. Il existe énormément d'autres éléments sémantiques à connaître dans ce domaine ; nous en verrons beaucoup plus dans notre article « More Semantic Elements », plus loin dans ce cours. Dans le prochain article, nous examinerons en détail comment [créer des hyperliens](/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks), qui est peut-être l'élément le plus important sur le Web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

## Dans ce module

- [Commencer avec le HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [Qu'y-a-t-il dans l'en-tête ? Métadonnées en HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- Fondamentaux du texte HTML
- [Creation d'hyperliens](/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- [Formatage avancé du texte](/fr/docs/Learn/HTML/Introduction_to_HTML/Advanced_text_formatting)
- [Structure de Site Web et de document](/fr/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Déboguer de l'HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Faire une Lettre](/fr/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structurer une page de contenu](/fr/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
