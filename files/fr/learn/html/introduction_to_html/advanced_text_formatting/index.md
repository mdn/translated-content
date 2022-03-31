---
title: Formatage avancé du texte
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
tags:
  - Apprendre
  - Citation
  - Codage
  - Débutant
  - Guide
  - HTML
  - Texte
  - abréviation
  - listes descriptives
  - sémantique
translation_of: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
original_slug: Apprendre/HTML/Introduction_à_HTML/Advanced_text_formatting
---
{{LearnSidebar}}{{PreviousMenuNext("Apprendre/HTML/Introduction_à_HTML/Creating_hyperlinks", "Apprendre/HTML/Introduction_à_HTML/Document_and_website_structure", "Apprendre/HTML/Introduction_à_HTML")}}

Il y a de nombreux autres éléments HTML pour mettre en forme un texte qui n'ont pas été mentionnés dans l'article [Les concepts fondamentaux du HTML liés au texte](/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals). Les éléments abordés ici sont moins connus mais tout aussi utiles (et ce n'est aucunement une liste complète). Nous voyons ici comment marquer des citations, des listes de description, du code informatique et autres choses relatives au texte : indices et exposants, informations de contact, etc.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Être familiarisé avec les bases du HTML, traitées à la page
        <a
          href="/fr/docs/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started"
          >Commencer avec le HTML</a
        >
        et du formatage de texte HTML, décrit dans les
        <a
          href="/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals"
          >Fondamentaux du texte HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectifs :</th>
      <td>
        Apprendre comment utiliser des éléments HTML moins connus pour baliser
        des fonctions sémantiques avancées.
      </td>
    </tr>
  </tbody>
</table>

## Listes descriptives

Dans les bases du texte en HTML, nous avons exposé comment on pouvait baliser [des listes simples en HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals#lists), mais sans mentionner le troisième type de liste que vous rencontrerez à l'occasion — **les listes descriptives**. L'objectif de ces listes est de marquer une série d'éléments et leurs descriptions associées, comme termes et définition, ou bien questions et réponse. Voici l'exemple d'un ensemble de termes et leur définitions :

    soliloque
    Dans une pièce de théâtre, action d'un acteur adressant à lui-même ses pensées ou sentiments intimes et, de la sorte, les faisant partager à son auditoire (mais pas aux autres personnages de la pièce).
    monologue
    Dans une pièce de théâtre, action d'un acteur partageant ses pensées à haute voix avec le public et tous les personnages présents.
    aparté
    Dans une pièce de théâtre, action d'un acteur partageant une tirade uniquement avec le public en vue de produire un effet dramatique ou humoristique. Il s'agit le plus souvent d'un sentiment, d'une pensée secrète ou d'une information sur le contexte.

Les listes descriptives utilisent une enveloppe de balisage différente de celle des autres types de listes — {{htmlelement("dl")}}&nbsp;; chaque terme est en plus entouré d'un élément {{htmlelement("dt")}} (**d**escription **t**erm) et chaque description d'un élément {{htmlelement("dd")}} (**d**escription **d**efinition). Terminons en balisant l'exemple ci‑dessus :

```html
<dl>
  <dt>soliloque</dt>
  <dd>Dans une pièce de théâtre, action d'un acteur adressant à lui-même ses pensées ou sentiments intimes et, de la sorte, les faisant partager à son auditoire (mais pas aux autres personnages de la pièce).</dd>
  <dt>monologue</dt>
  <dd>Dans une pièce de théâtre, action d'un acteur partageant ses pensées à haute voix avec le public et tous les personnages présents.</dd>
  <dt>aparté</dt>
  <dd>Dans une pièce de théâtre, action d'un acteur partageant une tirade uniquement avec le public en vue de produire un effet dramatique ou humoristique. Il s'agit le plus souvent d'un sentiment, d'une pensée secrète ou d'une information sur le contexte.</dd>
</dl>
```

Les styles par défaut du navigateur vont afficher les listes de définition avec des descriptions indentées par rapport aux termes. les styles de MDN suivent de très près cette convention, mais soulignent davantage les définitions en les mettant en gras.

- soliloque
  - : Dans une pièce de théâtre, action d'un acteur adressant à lui-même ses pensées ou sentiments intimes et, de la sorte, les faisant partager à son auditoire (mais pas aux autres personnages de la pièce).
- monologue
  - : Dans une pièce de théâtre, action d'un acteur partageant ses pensées à haute voix avec le public et tous les personnages présents.
- aparté
  - : Dans une pièce de théâtre, action d'un acteur partageant une tirade uniquement avec le public en vue de produire un effet dramatique ou humoristique. Il s'agit le plus souvent d'un sentiment, d'une pensée secrète ou d'une information sur le contexte.

Notez qu'il est autorisé d'avoir un terme seul avec de multiples descriptions, par exemple :

```html
<dl>
 <dt>aparté</dt>
 <dd>Dans une pièce de théâtre, action d'un acteur partageant une tirade uniquement avec le public en vue de produire un effet dramatique ou humoristique. Il s'agit le plus souvent d'un sentiment, d'une pensée secrète ou d'une information sur le contexte.</dd>
 <dd>En écriture, une partie de contenu relative au sujet en cours, mais qui, ne s'inscrivant pas dans le flux principal du contenu, est donc présentée à part (souvent dans un encadré sur le côté).</dd>
</dl>
```

### Apprentissage interactif : balisez une série de définitions

Il est temps de se faire la main sur les listes de définitions ; ajoutez les élements au texte brut dans le champ _Code modifiable_ pour que faire apparaître une liste de définitions dans la _Zone de rendu_. Vous pouvez essayer en utilisant vos propes termes et définitions si vous le souhaitez.

Si vous faites une erreur, vous pouvez toujours réinitialiser grace au bouton _Réinitialiser_. Si vous êtes vraiment bloqué, cliquez sur _Voir la solution_.

```html hidden
<h2>Zone de rendu</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la Zone de saisie (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Bacon
Le ciment qui unit le monde.
Œufs
Le liant des gâteaux.
Café
La boisson qui fait courir le monde le matin.
Une couleur brun léger.</textarea>

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

var htmlSolution = '<dl>\n <dt>Bacon</dt>\n <dd>Le ciment qui unit le monde.</dd>\n <dt>Œufs</dt>\n <dd>Le liant des gâteaux.</dd>\n <dt>Café</dt>\n <dd>La boisson qui fait courir le monde le matin.</dd>\n <dd>Une couleur brun léger.</dd>\n</dl>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

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

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_interactif_balisez_une_série_de_définitions', 700, 350, "", "", "hide-codepen-jsfiddle") }}

## Citations

Le HTML possède également des fonctionnalités pour marquer les citations. Le choix de l'élément à utiliser dépend du type de citation : en ligne ou par bloc.

### Blocs de citation

Si une section ou un contenu de niveau bloc (que ce soit un paragraphe, de multiples paragraphes, une liste, etc.) est cité depuis une autre origine, vous pouvez le signaler en le mettant dans un élément {{htmlelement("blockquote")}} et en incluant une URL qui pointe vers la source de la citation dans un attribut {{htmlattrxref("cite","blockquote")}}. Par exemple, le balisage suivant provient de la page MDN pour l'élément `<blockquote>`&nbsp;:

```html
<p>L'<strong>Élément HTML <code>&lt;blockquote&gt;</code></strong> (ou <em>Élément HTML bloc
de citation</em>) indique que le bloc de texte inclus est une citation étendue.</p>
```

#### Exemple de bloc de citation

Pour le changer en bloc de citation, on ferait simplement ceci :

```html
<blockquote cite="/fr/docs/Web/HTML/Element/blockquote">
  <p>L'<strong>Élément HTML <code>&lt;blockquote&gt;</code></strong> (ou <em>Élément HTML bloc de citation</em>)
     indique que le bloc de texte inclus est une citation étendue.</p>
</blockquote>
```

Le navigateur l'affichera par défaut sous forme d'un paragraphe indenté, avec l'indication qu'il s'agit d'une citation&nbsp;; MDN agit de même et y ajoute un style personnalisé&nbsp;:

{{EmbedLiveSample("Blocs_de_citation")}}

### Citations en ligne

Les citations en ligne fonctionnent exactement de la même manière, sauf que l'on utilise l'élément {{htmlelement("q")}}. Par exemple, le balisage suivant contient une citation de la page MDN `<q>` :

#### Exemple de citation en ligne

```html
<p>L'élément citation — <code>&lt;q&gt;</code> — est <q cite="/fr/docs/Web/HTML/Element/q">prévu
pour de courtes citations ne nécessitant pas un nouvel alinéa</q>.</p>
```

Le navigateur l'affichera par défaut comme du texte normal entre guillemets pour indiquer une citation, comme ceci&nbsp;:

{{EmbedLiveSample("Exemple_de_citation_en_ligne")}}

### Citations

Le contenu de l'attribut {{htmlattrxref("cite","blockquote")}} semble utile, malheureusement les navigateurs, lecteurs d'écran, etc. n'en font pas grand chose. Il n'y a pas possibilité de faire afficher différemment au navigateur le contenu d'un `cite` sans utiliser votre propre JavaScript ou style CSS. Si vous souhaitez rendre disponible la source de la citation sur votre page, la meilleure façon de le faire est d'inclure l'élément {{htmlelement("cite")}} à coté de l'élément citation. Cet élément est vraiment destiné à contenir le nom de la source de la citation — c'est-à-dire le nom du livre ou de la personne auteur de la citation — mais il n'y a aucune raison pour laquelle vous n'avez pas pu lier le texte à l'intérieur de `<cite>` à la source de la citation d'une manière ou d'une autre :

```html
<p>Selon la <a href="/fr/docs/Web/HTML/Element/blockquote">
<cite>page blockquote du MDN</cite></a>:
</p>

<p>L'<strong>Élément HTML <code>&lt;blockquote&gt;</code></strong> (ou <em>Élément HTML bloc de citation</em>)
   indique que le bloc de texte inclus est une citation étendue.</p>

<p>L'élément citation — <code>&lt;q&gt;</code> — est <q cite="/fr/docs/Web/HTML/Element/q">prévu
   pour de courtes citations ne nécessitant pas un nouvel alinéa</q>.</p>
 — <a href="/fr/docs/Web/HTML/Element/q">
<cite>page q du MDN</cite></a>.</p>
```

Les citations sont affichées avec un police italique par défaut. Vous pouvez voir l'affichage de ce code dans l'exemple [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html).

### Apprentissage actif&nbsp;: Qui a dit quoi&nbsp;?

Il est temps de faire un autre apprentissage actif&nbsp;! Dans cet exemple, nous souhaiterions que&nbsp;:

1.  vous marquiez le paragraphe central comme étant une citation comprenant un attribut `cite`.
2.  une partie du troisième paragraphe soit balisée en tant que citation en ligne, comprenant aussi un attribut `cite`.
3.  vous incorporiez un élément `<cite>` pour chaque citation

L'origine des citations dont vous aurez besoin se trouvent aux pages&nbsp;:

- http\://www\.brainyquote.com/quotes/authors/c/confucius.html pour la citation de Confucius,
- http\://www\.affirmationsforpositivethinking.com/index.html pour «&nbsp;The Need To Eliminate Negative Self Talk&nbsp;» (_De la nécessité d'éliminer un discours négatif sur soi‑même_).

Si vous faites une erreur, vous pourrez toujours tout réinitialiser en pressant le bouton de même nom. Si vous êtes vraiment bloqué, pressez le bouton _Voir la solution_ pour obtenir la réponse.

```html hidden
<h2>Zone de rendu</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la Zone de saisie (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="min-height: 150px; width: 95%">
<p>Salut et bienvenue sur ma page de motivation. Comme Confucius a dit en son temps&nbsp;:</p>
<p>La lenteur avec laquelle vous allez n'a pas d'importance tant que vous ne vous arrêtez pas.</p>
<p>J'aime aussi ce concept de pensée positive «&nbsp;Il est nécessaire d'éliminer le discours négatif sur soi-même&nbsp;» (comme dit dans «&nbsp;Affirmations for Positive Thinking&nbsp;».)</p>
</textarea>

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
  solution.value = 'Show solution';
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

var htmlSolution = '<p>Salut et bienvenue sur ma page de motivation. Comme <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> a dit en son temps&nbsp;:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n <p>La lenteur avec laquelle vous allez n\'a pas d\'importance tant que vous ne vous arrêtez pas.</p>\n</blockquote>\n\n<p>J\'aime aussi le concept de pensée positive <q cite="http://www.affirmationsforpositivethinking.com/index.htm"> Il est nécessaire d\'éliminer le discours négatif sur soi-même </q> (comme dit dans <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

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

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_Qui_a_dit_quoi_', 700, 450, "", "", "hide-codepen-jsfiddle") }}

## Abréviations

Un autre élément assez commun rencontré en se promenant dans le Web est l'élément {{htmlelement("abbr")}}}}. Il s'utilise pour entourer une abréviation ou un acronyme et donner le développement complet du terme (inclus dans un attribut {{htmlattrxref("title")}}}. Voyons quelques exemples :

    <p>Nous utilisons l'<abbr title="Hypertext Markup Language">HTML</abbr> pour structurer nos documents web.</p>

    <p>Je pense que le <abbr title="Révérend">R.</abbr> Green l'a fait dans la cuisine avec une tronçonneuse.</p>

Leur affichage correspond aux deux phrases suivantes (le développement de l'abréviation apparaît dans une infobulle quand le pointeur de souris passe sur le terme) :

Nous utilisons l'HTML pour structurer nos documents web.

Je pense que le R. Green l'a fait dans la cuisine avec une tronçonneuse.

> **Note :** Il existe un autre élément, {{htmlelement("acronym")}}, faisant fondamentalement la même chose que `<abbr>`, destiné spécifiquement aux acronymes plutôt qu'aux abréviations. Il est cependant tombé en désuétude — il n'était pas aussi bien pris en charge dans les navigateurs que \<abbr> et sa fonction était si ressemblante qu'on a considéré inutile d'avoir les deux. Il suffit d'utiliser \<abbr> à la place.

### Apprentissage actif&nbsp;: marquer une abréviation

Pour cet apprentissage actif, nous aimerions que vous balisiez simplement une abréviation. Vous pouvez utiliser notre élément ci-après ou le remplacer par un de votre cru.

```html hidden
<h2>Zone de rendu</h2>

<div class="output" style="min-height: 50px;">
</div>

<h2>Code modifiable</h2>
<p class="a11y-label">Pressez Esc pour sortir le focus de la Zone de saisie (Tab insère une tabulation).</p>

<textarea id="code" class="input" style="min-height: 50px; width: 95%">
<p>La NASA fait assurément des tâches passionnantes.</p>
</textarea>

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

var htmlSolution = '<p>La <abbr title="National Aeronautics and Space Administration">NASA</abbr> fait assurément des tâches passionnantes.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

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

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Voir la solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_marquer_une_abréviation', 700, 300, "", "", "hide-codepen-jsfiddle") }}

## Balisage des détails de contact

HTML possède l'élément {{htmlelement("address")}} pour baliser des détails de contact. Enveloppez simplement vos coordonnées, par exemple :

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

Une chose à retenir cependant&nbsp;: l'élément {{htmlelement("address")}} est destiné à marquer les coordonnées de la personne ayant écrit le document HTML et non pas _n'importe quelle_ adresse. Donc, ce qui précède ne serait acceptable que si Chris avait écrit le document sur lequel ce balisage apparaît. Notez que serait également acceptable ce qui suit&nbsp;:

```html
<address>
  <p>Page écrite par <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## Exposants et indices

Vous devrez parfois utiliser exposants et indices pour marquer des éléments comme dates, formules chimiques et équations mathématiques de façon à ce qu'ils aient une bonne signification. On effectue ce travail à l'aide des éléments {{htmlelement("sup")}} et {{htmlelement("sub")}}. Par exemple :

```html
<p>Ma date de naissance est le 1<sup>er</sup> mai 2001.</p>
<p>La formule chimique de la caféine est C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.</p>
<p>Si x<sup>2</sup> égale 9, x doit valoir 3 ou -3.</p>
```

Les sorties produites par ces lignes de code se présentent comme suit&nbsp;:

Ma date de naissance est le 1<sup>er</sup> mai 2001.

La formule chimique de la caféine est C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.

Si x^2 égale 9, x doit valoir 3 ou -3.

## Représentation du code informatique

HTML met à votre dispositon un certain nombre d'éléments pour marquer du code informatique&nbsp;:

- {{htmlelement("code")}}&nbsp;: pour marquer des parties génériques de code.
- {{htmlelement("pre")}}&nbsp;: pour conserver les blancs (généralement dans les blocs de code) — si vous indentez ou mettez des blancs en excès dans votre texte, les navigateurs les ignoreront et vous ne les verrez plus dans le rendu de la page. Par contre si vous enveloppez le texte dans des balises \<pre>\</pre>, les blancs seront rendus tels qu'il se présentent dans votre éditeur de texte.
- {{htmlelement("var")}}&nbsp;: pour marquer spécifiquement les noms de variables.
- {{htmlelement("kbd")}}&nbsp;: pour marquer les touches de clavier (et autres types d'entrées) à presser sur l'ordinateur.
- {{htmlelement("samp")}}&nbsp;: pour marquer une sortie de programme.

Voyons quelques exemples. Essayez de jouer avec cela (faites une copie de notre fichier exemple [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html))&nbsp;:

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, arrête de me toucher !');
}</code></pre>

<p>N'utilisez pas d'éléments de présentation comme <code>&lt;font&gt;</code> et <code>&lt;center&gt;</code>.</p>

<p>Dans l'exemple JavaScript ci‑dessus, <var>para</var> représente un élément paragraphe.</p>


<p>Sélectionnez la totalité du texte avec <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.208.195) 56(84) bytes of data.
64 bytes from mozilla.org (63.245.208.195): icmp_seq=1 ttl=46 time=191 ms</samp></pre>
```

Ce code se présente ainsi&nbsp;:

{{ EmbedLiveSample('Représentation_du_code_informatique','100%',300) }}

## Balisage des heures et dates

HTML fournit également l'élément {{htmlelement("time")}}} pour marquer les heures et les dates dans un format lisible par machine. Par exemple :

```html
<time datetime="2016-01-20">20 janvier 2016</time>
```

En quoi est-ce utile ? Eh bien, il y a beaucoup de façons différentes dont les humains écrivent les dates. La date ci-dessus pourrait s'écrire comme suit :

- 20 Janvier 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- Le 20 du mois prochain
- 20e Janvier 2016
- 2016 年 1 月 20 日
- etc.

Mais ces différents formes ne sont pas facilement reconnaissables par les ordinateurs — que se passerait‑il si vous vouliez saisir automatiquement les dates de tous les événements dans une page et les insérer dans un calendrier ? L'élément {{htmlelement("time")}}} vous permettra d'attacher un horodatage non ambigu lisible par machine à cette fin.

L'exemple de base ci-dessus ne fournit qu'une simple date lisible par machine, mais il y a beaucoup d'autres options possibles, par exemple :

```html
<!-- Simple date standard -->
<time datetime="2016-01-20">20 janvier 2016</time>
<!-- Juste l'année et le mois -->
<time datetime="2016-01">janvier 2016</time>
<!-- Juste le mois et les jour -->
<time datetime="01-20">20 janvier</time>
<!-- Juste l'heure, heure et minutes -->
<time datetime="19:30">19h30</time>
<!-- Vous pouvez aussi mettre les secondes et les millisecondes&nbsp;! -->
<time datetime="19:30:01.856">19h30m1,856s</time>
<!-- Date et heure -->
<time datetime="2016-01-20T19:30">19h30, le 20 janvier 2016</time>
<!-- Date et heure avec décalage de fuseau horaire -->
<time datetime="2016-01-20T19:30+01:00">19h30, le 20 janvier 2016 corespond à 20h30 en France</time>
<!-- Appel d'un numéro de semains donné -->
<time datetime="2016-W04">La 4e semaine de 2016</time>
```

## Résumé

Nous voici arrivés à la fin de notre étude de la sémantique des textes en HTML. N'oubliez pas que ce qui précède ne constitue pas la liste exhaustive des éléments texte en HTML — nous avons essayé de couvrir essentiellement les plus courants dans la nature ou du moins ceux que nous avons pensé intéressants. Pour en voir plus, jetez un coup d'oeil à notre [Référence des éléments HTML](/fr/docs/Web/HTML/Element) (la section [sémantique de texte en ligne](/fr/docs/Web/HTML/Element#inline_text_semantics) serait un bon point de départ.) Dans l'article suivant, nous examinerons les éléments HTML à utiliser pour structurer les diverses parties d'un document HTML.

{{PreviousMenuNext("Apprendre/HTML/Introduction_à_HTML/Creating_hyperlinks", "Apprendre/HTML/Introduction_à_HTML/Document_and_website_structure", "Apprendre/HTML/Introduction_à_HTML")}}

## Dans ce module

- [Commencer avec le HTML](/fr/docs/Apprendre/HTML/Introduction_%C3%A0_HTML/Getting_started)
- [Qu'y-a-t-il dans l'en-tête ? Métadonnées en HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML)
- [Fondamentaux du texte HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals)
- [Création d'hyperliens](/fr/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks)
- Formatage avancé du texte
- [Structure de Site Web et de document](/fr/docs/Learn/HTML/Introduction_to_HTML/Document_and_website_structure)
- [Déboguer de l'HTML](/fr/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [Faire une lettre](/fr/docs/Learn/HTML/Introduction_to_HTML/Marking_up_a_letter)
- [Structurer une page de contenu](/fr/docs/Learn/HTML/Introduction_to_HTML/Structuring_a_page_of_content)
