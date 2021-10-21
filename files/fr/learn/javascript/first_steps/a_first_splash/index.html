---
title: Notre premier code JavaScript
slug: Learn/JavaScript/First_steps/A_first_splash
tags:
  - Apprendre
  - Article
  - CodingScripting
  - Débutant
  - Fonctions
  - JavaScript
  - Objets
  - Opérateurs
  - Variables
  - structures conditionnelles
translation_of: Learn/JavaScript/First_steps/A_first_splash
---
<div>{{LearnSidebar}}</div>

<div>{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}</div>

<p>Maintenant que vous avez appris quelques éléments théoriques sur le JavaScript, et ce que vous pouvez faire avec, nous allons vous donner un cours intensif sur les fonctionnalités basiques du JavaScript avec un tutoriel entièrement pratique. Vous allez construire un jeu simple, étape par étape. Il s'agit de faire deviner un nombre, notre jeu s'appelle « Guess the number ».</p>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="row">Prérequis :</th>
   <td>Une culture informatique basique, et des notions de HTML et CSS.</td>
  </tr>
  <tr>
   <th scope="row">Objectif :</th>
   <td>Avoir une première expérience d'écriture de JavaScript et comprendre les implications de l'écriture d'un programme en JavaScript.</td>
  </tr>
 </tbody>
</table>

<p>Ne vous attendez pas à comprendre tout le code en détail immédiatement — nous voulons simplement vous présenter les grands concepts pour le moment, et vous donner une idée de la façon dont JavaScript (et d'autres langages de programmation) fonctionne. Dans les articles suivants, vous reviendrez plus en détails sur toutes ces fonctionnalités !</p>

<div class="note">
<p><strong>Note :</strong> De nombreuses fonctionnalités que vous allez voir en JavaScript sont identiques à celles d'autres langages de programmation — fonctions, boucles, etc. La syntaxe du code est différente mais les concepts sont globalement identiques.</p>
</div>

<h2 id="Penser_comme_un_programmeur">Penser comme un programmeur</h2>

<p>Une des choses les plus difficiles à apprendre en programmation n'est pas la syntaxe, mais comment l'appliquer afin de résoudre un problème réel. Vous devez commencer à penser comme un programmeur — ce qui implique généralement d'examiner les tâches que votre programme doit effectuer, de déterminer les fonctionnalités du code nécessaires à leurs réalisations et comment les faire fonctionner ensemble.</p>

<p>Cela requiert un mélange de travail acharné, d'expérience avec la syntaxe de programmation (de manière générale) et surtout de la pratique — ainsi qu'un peu de créativité. Plus vous allez coder, plus vous aller vous améliorer. On ne peut pas garantir que vous aurez un « cerveau de développeur » en 5 minutes, mais nous allons vous donner plein d'occasions pour pratiquer cette façon de penser, tout au long du cours.</p>

<p>Maintenant que vous avez cela en tête, regardons l'exemple que nous allons construire dans cet article et comment le découper en plusieurs tâches qui ont du sens.</p>

<h2 id="Exemple_—_Jeu_Guess_the_number">Exemple — Jeu : Guess the number</h2>

<p>Dans cet article, nous allons vous montrer comment construire le jeu simple que vous pouvez voir ci-dessous :</p>


<pre class="brush: html hidden">&lt;!DOCTYPE html&gt;
&lt;html&gt;

&lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Number guessing game&lt;/title&gt;
    &lt;style&gt;
        html {
            font-family: sans-serif;
        }

        body {
            width: 50%;
            max-width: 800px;
            min-width: 480px;
            margin: 0 auto;
        }

        .lastResult {
            color: white;
            padding: 3px;
        }
    &lt;/style&gt;
&lt;/head&gt;

&lt;body&gt;
    &lt;h1&gt;Deviner un nombre&lt;/h1&gt;
    &lt;p&gt;Nous avons généré un nombre aléatoire entre 1 et 100, tentez de le deviner en 10 tours maximum. Pour chaque tentative, nous vous dirons si votre estimation est trop ou pas assez élevée.&lt;/p&gt;
    &lt;div class="form"&gt; &lt;label for="guessField"&gt;Entrez votre proposition : &lt;/label&gt;&lt;input type="text" id="guessField" class="guessField"&gt; &lt;input type="submit" value="Valider" class="guessSubmit"&gt; &lt;/div&gt;
    &lt;div class="resultParas"&gt;
        &lt;p class="guesses"&gt;&lt;/p&gt;
        &lt;p class="lastResult"&gt;&lt;/p&gt;
        &lt;p class="lowOrHi"&gt;&lt;/p&gt;
    &lt;/div&gt;
&lt;/body&gt;
&lt;script&gt;
    // Le JavaScript se place ici
    let randomNumber = Math.floor(Math.random() * 100) + 1;
    let guesses = document.querySelector('.guesses');
    let lastResult = document.querySelector('.lastResult');
    let lowOrHi = document.querySelector('.lowOrHi');
    let guessSubmit = document.querySelector('.guessSubmit');
    let guessField = document.querySelector('.guessField');
    let guessCount = 1;
    let resetButton;

    function checkGuess() {
      let userGuess = Number(guessField.value);
      if (guessCount === 1) {
        guesses.textContent = 'Propositions précédentes : ';
      }

      guesses.textContent += userGuess + ' ';

      if (userGuess === randomNumber) {
        lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
        lastResult.style.backgroundColor = 'green';
        lowOrHi.textContent = '';
        setGameOver();
      } else if (guessCount === 10) {
        lastResult.textContent = '!!! PERDU !!!';
        lowOrHi.textContent = '';
        setGameOver();
      } else {
        lastResult.textContent = 'Faux!';
        lastResult.style.backgroundColor = 'red';
        if (userGuess &lt; randomNumber) {
          lowOrHi.textContent='Le nombre saisi est trop petit !' ;
        } else if(userGuess &gt; randomNumber) {
          lowOrHi.textContent = 'Le nombre saisi est trop grand!';
        }
      }

      guessCount++;
      guessField.value = '';
    }

    guessSubmit.addEventListener('click', checkGuess);

    function setGameOver() {
      guessField.disabled = true;
      guessSubmit.disabled = true;
      resetButton = document.createElement('button');
      resetButton.textContent = 'Rejouer';
      document.body.appendChild(resetButton);
      resetButton.addEventListener('click', resetGame);
    }

    function resetGame() {
      guessCount = 1;
      let resetParas = document.querySelectorAll('.resultParas p');
      for (let i = 0 ; i &lt; resetParas.length ; i++) {
        resetParas[i].textContent='';
      }

      resetButton.parentNode.removeChild(resetButton);
      guessField.disabled = false;
      guessSubmit.disabled = false;
      guessField.value='';
      guessField.focus();
      lastResult.style.backgroundColor='white';
      randomNumber=Math.floor(Math.random() * 100) + 1;
    }
&lt;/script&gt;

&lt;/html&gt;</pre>

<p>{{ EmbedLiveSample('Exemple_—_Jeu_Guess_the_number', '100%', 320, "", "", "hide-codepen-jsfiddle") }}</p>

<p>Essayez de jouer et familiarisez-vous avec ce jeu avant de continuer.</p>

<p>Imaginons que votre patron vous ait donné le résumé suivant pour créer ce jeu :</p>

<blockquote>
<p>Je vous demande de créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi. À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. Le jeu doit également rappeler au joueur les nombres déjà proposés. Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.</p>
</blockquote>

<p>La première chose à faire en regardant ce résumé, c'est de le décomposer en tâches simples et codables comme le ferait un programmeur :</p>

<ol>
 <li>Générer un nombre aléatoire entre 1 et 100.</li>
 <li>Stocker le nombre de tours déjà joués. Commencer par 1.</li>
 <li>Fournir au joueur le moyen de saisir un nombre.</li>
 <li>Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.</li>
 <li>Vérifier si le nombre saisi par le joueur est correct.</li>
 <li>S'il est correct :
  <ol>
   <li>Afficher un message de félicitations.</li>
   <li>Empêcher que le joueur saisisse de nouveau un nombre.</li>
   <li>Afficher un contrôle pour que le joueur puisse rejouer.</li>
  </ol>
 </li>
 <li>S'il est faux et que le joueur a encore des tours à jouer :
  <ol>
   <li>Informer le joueur que sa proposition de nombre est fausse.</li>
   <li>Lui permettre d'entrer une nouvelle proposition de nombre.</li>
   <li>Incrémenter le nombre de tours de 1.</li>
  </ol>
 </li>
 <li>S'il est faux et que le joueur n'a plus de tours à jouer :
  <ol>
   <li>Informer le joueur qu'il a perdu et que la partie est finie.</li>
   <li>Empêcher que le joueur saisisse de nouveau un nombre.</li>
   <li>Afficher un contrôle pour que le joueur puisse rejouer.</li>
  </ol>
 </li>
 <li>Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.</li>
</ol>

<p>Voyons maintenant comment nous pouvons transformer ces étapes en code. Nous allons développer cet exemple et explorer les fonctionnalités JavaScript au fur et à mesure.</p>

<h3 id="Configuration_initiale">Configuration initiale</h3>

<p>Pour commencer ce didacticiel, faites une copie locale du fichier <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html">number-guessing-game-start.html</a>  (à voir <a href="http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html">directement ici</a>). Ouvrez-le dans votre éditeur de code et votre navigateur web. Pour l'instant, vous ne verrez qu'un titre, un paragraphe d'instructions et un formulaire pour entrer une estimation, mais le formulaire est pour l'instant inactif.</p>

<p>L'endroit où nous allons ajouter tout notre code se trouve dans l'élément {{htmlelement ("script")}} au bas du code HTML :</p>

<pre class="brush: html">&lt;script&gt;

  // Votre code JavaScript se place ici

&lt;/script&gt;
</pre>

<h3 id="Ajouter_des_variables_pour_stocker_les_données">Ajouter des variables pour stocker les données</h3>

<p>Commençons. Tout d'abord, ajoutez les lignes suivantes dans l'élément {{htmlelement ("script")}} :</p>

<pre class="brush: js">let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;</pre>

<p>Cette partie de code définit les variables nécessaires au stockage des données que notre programme utilisera. Les variables sont essentiellement des conteneurs de valeurs (tels que des nombres ou des chaînes de texte). Une variable se crée avec le mot-clé <code>let</code> suivi du nom de la variable. Vous pouvez ensuite attribuer une valeur à la variable avec le signe égal (<code>=</code>) suivi de la valeur que vous voulez lui donner.</p>

<p>Dans notre exemple :</p>

<ul>
 <li>La première variable — <code>randomNumber</code> — reçoit le nombre aléatoire entre 1 et 100, calculé en utilisant un algorithme mathématique.</li>
 <li>Les trois variables suivantes sont chacune faite pour stocker une référence aux paragraphes de résultats dans le HTML ; elles sont utilisées pour insérer des valeurs dans les paragraphes plus tard dans le code :
  <pre class="brush: html">&lt;p class="guesses"&gt;&lt;/p&gt;
&lt;p class="lastResult"&gt;&lt;/p&gt;
&lt;p class="lowOrHi"&gt;&lt;/p&gt;</pre>
 </li>
 <li>Les deux variables suivantes stockent des références au champ de saisie du formulaire et au bouton de soumission ; elles sont utilisées pour écouter l'envoi de la supposition (guess) plus tard.
  <pre class="brush: html">&lt;label for="guessField"&gt;Enter a guess: &lt;/label&gt;&lt;input type="text" id="guessField" class="guessField"&gt;
&lt;input type="submit" value="Submit guess" class="guessSubmit"&gt;</pre>
 </li>
 <li>Nos deux dernières variables stockent un nombre de suppositions qui vaut initialement 1 (utilisées pour garder une trace du nombre de suppositions que le joueur a faite) et une référence à un bouton de réinitialisation qui n'existe pas encore.</li>
</ul>

<div class="note">
<p><strong>Note :</strong> Vous en apprendrez beaucoup plus sur les variables plus tard dans le cours, en commençant par le <a href="/fr/docs/Learn/JavaScript/First_steps/Variables">prochain article</a>.</p>
</div>

<h3 id="Fonctions">Fonctions</h3>

<p>Ajoutez maintenant ce qui suit dans votre code JavaScript :</p>

<pre class="brush: js">function checkGuess() {
  alert('Je suis un espace réservé');
}</pre>

<p>Les fonctions sont des blocs de code réutilisables que vous pouvez écrire une fois et exécuter encore et encore, pour éviter de réécrire le même code tout le temps. C'est vraiment utile. Il y a plusieurs façons de définir les fonctions, mais pour l'instant nous allons nous concentrer sur un type simple. Ici, nous avons défini une fonction en utilisant le mot-clé <code>function</code> accompagné de son nom suivi de parenthèses. Ensuite, nous avons mis deux accolades (<code>{ }</code>). Dans ces accolades est placé tout le code à exécuter à chaque appel de la fonction.</p>

<p>Quand nous voulons exécuter le code, nous saisissons le nom de la fonction suivi des parenthèses.</p>

<p>Essayez. Enregistrez le code et actualisez la page du navigateur. Puis, allez dans les<a href="/fr/Apprendre/D%C3%A9couvrir_outils_d%C3%A9veloppement_navigateurs"> outils de développement et la console JavaScript </a>et entrez la ligne suivante :</p>

<pre class="brush: js">checkGuess();</pre>

<p>Après avoir pressé <kbd>Entrée</kbd> ou <kbd>Retour</kbd>, vous devriez voir apparaître une alerte « Je suis un espace réservé » ; nous avons défini une fonction dans notre code créant une alerte chaque fois que nous l'appelons.</p>

<div class="note">
<p><strong>Note :</strong> Vous allez en apprendre beaucoup plus sur les fonctions plus tard dans ce cours.</p>
</div>

<h3 id="Opérateurs">Opérateurs</h3>

<p>Les opérateurs en JavaScript nous permettent d'effectuer des tests, de faire des calculs, de joindre des chaînes ensemble et d'autres choses de ce genre.</p>

<p>Si vous ne l'avez pas déjà fait, sauvegardez ce code, actualisez la page affichée dans le navigateur et ouvrez les<a href="/fr/Apprendre/D%C3%A9couvrir_outils_d%C3%A9veloppement_navigateurs"> outils de développement et la console Javascript</a>. Ensuite, vous pouvez saisir les exemples ci‑dessous — saisissez chacun dans les colonnes « Exemple » exactement comme indiqué, en appuyant sur la touche <kbd>Entrée</kbd> du clavier après chacun et regardez le résultat renvoyé. Si vous n'avez pas facilement accès aux outils de développement du navigateur, vous pouvez toujours utiliser la console intégrée ci-dessous :</p>

<pre class="brush: html hidden">&lt;!DOCTYPE html&gt;
&lt;html&gt;
  &lt;head&gt;
    &lt;meta charset="utf-8"&gt;
    &lt;title&gt;Console JavaScript&lt;/title&gt;
    &lt;style&gt;
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0C323D;
        color: #809089;
        font-family: monospace;
      }

      body {
        max-width: 700px;
      }

      p {
        margin: 0;
        width: 1%;
        padding: 0 1%;
        font-size: 16px;
        line-height: 1.5;
        float: left;
      }

      .input p {
        margin-right: 1%;
      }

      .output p {
        width: 100%;
      }

      .input input {
        width: 96%;
        float: left;
        border: none;
        font-size: 16px;
        line-height: 1.5;
        font-family: monospace;
        padding: 0;
        background: #0C323D;
        color: #809089;
      }

      div {
        clear: both;
      }

    &lt;/style&gt;
  &lt;/head&gt;
  &lt;body&gt;


  &lt;/body&gt;

  &lt;script&gt;
    let geval = eval;

    function createInput() {
      let inputDiv = document.createElement('div');
      let inputPara = document.createElement('p');
      let inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '&gt;';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);
      inputDiv.focus();

      if (document.querySelectorAll('div').length &gt; 1) {
        inputForm.focus();
      }

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        let result = geval(e.target.value);
      } catch(e) {
        let result = 'error — ' + e.message;
      }

      let outputDiv = document.createElement('div');
      let outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Résultat : ' + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = '0.5';

      createInput()
    }

    createInput();

  &lt;/script&gt;
&lt;/html&gt;</pre>

<p>{{ EmbedLiveSample('Opérateurs', '100%', 300,"", "", "hide-codepen-jsfiddle") }}</p>

<p>Regardons d'abord les opérateurs arithmétiques, par exemple :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Operator</th>
   <th scope="col">Name</th>
   <th scope="col">Example</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>+</code></td>
   <td>Addition</td>
   <td><code>6 + 9</code></td>
  </tr>
  <tr>
   <td><code>-</code></td>
   <td>Soustraction</td>
   <td><code>20 - 15</code></td>
  </tr>
  <tr>
   <td><code>*</code></td>
   <td>Multiplication</td>
   <td><code>3 * 7</code></td>
  </tr>
  <tr>
   <td><code>/</code></td>
   <td>Division</td>
   <td><code>10 / 5</code></td>
  </tr>
 </tbody>
</table>

<p>L'opérateur <code>+</code> peut aussi s'utiliser pour unir des chaînes de caractères (en informatique, on dit <em>concaténer</em>). Entrez les lignes suivantes, une par une :</p>

<pre class="brush: js">let name = 'Bingo';
name;
let hello = ' dit bonjour !';
hello;
let greeting = name + hello;
greeting;</pre>

<p>Des raccourcis d'opérateurs sont également disponibles, appelés <a href="/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation">opérateurs d'assignation</a> augmentés. Par exemple, si vous voulez simplement ajouter une nouvelle chaîne de texte à une chaîne existante et renvoyer le résultat, vous pouvez faire :</p>

<pre class="brush: js">name += ' dit bonjour !';</pre>

<p>Cela équivaut à :</p>

<pre class="brush: js">name = name + ' dit bonjour !';</pre>

<p>Lorsque nous exécutons des tests vrai/faux (par exemple, dans des conditions — voir {{anch ("Structures conditionnelles", "ci-dessous")}}, nous utilisons des <a href="/fr/docs/Web/JavaScript/Reference/Operators/Comparison_Operators">opérateurs de comparaison</a>, par exemple :</p>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Operator</th>
   <th scope="col">Name</th>
   <th scope="col">Example</th>
  </tr>
  <tr>
   <td><code>===</code></td>
   <td>Égalité stricte (est-ce exactement identique ?)</td>
   <td><code>5 === 2 + 4</code></td>
  </tr>
  <tr>
   <td><code>!==</code></td>
   <td>Non égalité (est-ce différent ?)</td>
   <td><code>'Chris' !== 'Ch' + 'ris'</code></td>
  </tr>
  <tr>
   <td><code>&lt;</code></td>
   <td>Inférieur à</td>
   <td><code>10 &lt; 6</code></td>
  </tr>
  <tr>
   <td><code>&gt;</code></td>
   <td>Supérieur à</td>
   <td><code>10 &gt; 20</code></td>
  </tr>
 </thead>
</table>

<h3 id="Structures_conditionnelles">Structures conditionnelles</h3>

<p>Revenons à la fonction <code>checkGuess()</code>. Nous pouvons assurément dire que nous ne souhaitons pas qu'elle renvoie un message d'emplacement réservé. Nous voulons qu'elle vérifie si la supposition du joueur est correcte ou non et qu'elle renvoie une réponse appropriée.</p>

<p>Donc, remplacez l'actuelle fonction <code>checkGuess()</code> par celle-ci :</p>

<pre class="brush: js">function checkGuess(){
  let userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = 'Propositions précédentes : ';
  }
  guesses.textContent += userGuess + ' ';

  if (userGuess === randomNumber) {
    lastResult.textContent = 'Bravo, vous avez trouvé le nombre !';
    lastResult.style.backgroundColor = 'green';
    lowOrHi.textContent = '';
    setGameOver();
  } else if (guessCount === 10) {
     lastResult.textContent = '!!! PERDU !!!';
     setGameOver();
  } else {
     lastResult.textContent = 'Faux !';
     lastResult.style.backgroundColor = 'red';
     if (userGuess &lt; randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop petit !';
     } else if (userGuess &gt; randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop grand !';
     }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
</pre>

<p>Pas mal de code — ouf ! Passons en revue chaque section et expliquons ce qu'elle fait.</p>

<ul>
 <li>La première ligne de la fonction (ligne 2) déclare une variable nommée <code>userGuess</code> et définit sa valeur par celle qui vient d'être saisie dans le champ de texte. Nous faisons passer aussi cette valeur par la méthode  <code>Number()</code> , juste pour nous assurer que la valeur stockée dans <code>userGuess</code> est bien un nombre.</li>
 <li>Ensuite, nous rencontrons notre premier bloc de code conditionnel (lignes 3-5). Il permet d'exécuter des instructions de manière sélective, selon certaines conditions qui sont vraies ou non. Cela ressemble un peu à une fonction, mais ce n'est pas le cas. La forme la plus simple du bloc conditionnel commence par le mot clé <code>if</code>, puis parenthèses, puis des accolades <code>{ }</code>.<br>
  A l'intérieur de ces parenthèses, nous mettons le test. S'il renvoie <code>true</code> , nous exécutons le code à l'intérieur des accolades. Sinon, nous ne le faisons pas, et passons au morceau de code suivant. Dans ce cas, le test vérifie si la variable <code>guessCount</code> est égale à <code>1</code> (c'est-à-dire s'il s'agit de la première supposition du joueur) :
  <pre class="brush: js">guessCount === 1</pre>
  Si c'est le cas, nous faisons en sorte que le texte affiché soit « Propositions précédentes : ». Sinon, nous ne le faisons pas.</li>
 <li>La ligne 6 ajoute la valeur courante <code>userGuess</code> à la fin du paragraphe <code>guesses</code> , plus un espace vide de sorte qu'il y aura un espace entre chaque supposition faite.</li>
 <li>Le bloc suivant (lignes 8-24) effectue quelques vérifications :
  <ul>
   <li>Le premier <code>if(){ }</code> vérifie si la supposition de l'utilisateur est égale au nombre aléatoire <code>randomNumber</code> situé en haut de notre code JavaScript. Si c'est le cas, le joueur a deviné correctement et a gagné le jeu, nous affichons donc un message de félicitations d'une belle couleur verte au joueur, effaçons le contenu de la boîte d'information sur la position de l'estimation et exécutons une fonction appelée <code>setGameOver()</code>, dont nous reparlerons plus tard.</li>
   <li>Ensuite, nous chaînons un autre test à la fin du précédent avec une structure <code>else if(){ }</code>. Cette structure vérifie si l'utilisateur a épuisé toutes ses tentatives. Si c'est le cas, le programme fait la même chose que dans le bloc précédent, mais avec un message de fin de partie au lieu d'un message de félicitations.</li>
   <li>Le dernier bloc chaîné à la fin de ce code (<code>else { }</code>) contient du code qui n'est exécuté que si aucun des deux autres tests n'a renvoyé <em>vrai</em> (c'est-à-dire que le joueur n'a pas deviné juste, mais qu'il lui reste des possibilité de supposition). Dans ce cas, nous lui disons que sa supposition est mauvaise, puis nous effectuons un autre test conditionnel pour vérifier si elle est supérieure ou inférieure à la valeur exacte et affichons un autre message approprié pour indiquer si sa supposition est trop forte ou trop faible.</li>
  </ul>
 </li>
</ul>

<ul>
 <li>Les trois dernières lignes de la fonction (ligne 26-28) préparent à une nouvelle proposition. Nous ajoutons 1 à la variable <code>guessCount</code> qui décompte les tours (<code>++</code> est une opération d'incrémentation — ajout de 1), puis effaçons le champ texte du formulaire et lui redonnons le focus, pour être prêt pour la saisie suivante.</li>
</ul>

<h3 id="Evénements">Evénements</h3>

<p>À ce stade, nous avons bien implémentée la fonction <code>checkGuess()</code>, mais elle ne s'éxecutera pas parce que nous ne l'avons pas encore appelé.<br>
 Idéalement, nous voulons l'appeler lorsque le bouton <kbd>Soumettre</kbd> est cliqué, et pour ce faire, nous devons utiliser un événement. Les événements sont des actions qui se produisent dans le navigateur, comme le clic sur un bouton, le chargement d'une page ou la lecture d'une vidéo, en réponse à quoi nous pouvons exécuter des blocs de code. Les constructions qui écoutent l'événement en cours s'appellent des <strong>écouteurs d'événements</strong>, et les blocs de code exécutés en réponse à l'événement déclencheur sont appelés des <strong>gestionnaires d'évenements</strong>.<br>
 <br>
 Ajoutez la ligne suivante sous l'accolade de fermeture de votre fonction <code>checkGuess()</code> :</p>

<pre class="brush: js">guessSubmit.addEventListener('click', checkGuess);</pre>

<p>Ici, nous ajoutons un écouteur d'événement au bouton <code>guessSubmit</code> . C'est une méthode qui prend deux valeurs d'entrée (appelées arguments) - le type d'événement que nous écoutons (dans ce cas, <code>click</code>) qui est une chaîne de caractères, et le code que nous voulons exécuter quand l'événement se produit (dans ce cas, la fonction <code>checkGuess()</code>  — notez que nous n'avons pas besoin de spécifier les parenthèses lors de l'écriture dans {{domxref("EventTarget.addEventListener", "addEventListener()")}}).</p>

<p>Essayez d'enregistrer et d'actualiser votre code, votre exemple devrait désormais fonctionner, jusqu'à un certain point. Maintenant, le seul problème est que si vous devinez la bonne réponse ou si vous n'avez plus de tours à jouer, le jeu "va se casser" parce que nous n'avons pas encore implémenté la fonction <code>setGameOver()</code> dont le rôle est de terminer proprement le jeu. Ajoutons maintenant le code manquant pour compléter notre exemple.</p>

<h3 id="Finir_les_fonctionnalités_du_jeu">Finir les fonctionnalités du jeu</h3>

<p>Pour définir la fonction <code>setGameOver()</code> à la fin de notre programme, ajoutez le code ci-dessous tout en bas :</p>

<pre class="brush: js">function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}</pre>

<ul>
 <li>Les deux premières lignes désactivent l'entrée de texte et le bouton en définissant leurs propriétés désactivées à <code>true</code>.  Ceci est nécessaire, car si nous ne le faisons pas, l'utilisateur pourrait soumettre plus de propositions après la fin du jeu, ce qui gâcherait les choses.</li>
 <li>Les trois lignes suivantes génèrent un nouvel {{htmlelement("button")}} élément, avec le libellé "Démarrer une nouvelle partie" et l'ajoute au bas du HTML existant.</li>
 <li>La dernière ligne définit un écouteur d'événement sur ce nouveau bouton : un click sur le bouton déclenchera un appel de la fonction  <code>resetGame()</code>.</li>
</ul>

<p>Reste à définir cette fonction ! Ajoutez le code suivant, tout en bas de votre JavaScript :</p>

<pre class="brush: js">function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i &lt; resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}</pre>

<p>Ce bloc de code assez long réinitialise complètement les paramètres du jeu (le joueur pourra commencer une nouvelle partie). Il permet de  :</p>

<ul>
 <li>Remettre le compteur <code>guessCount</code> à 1.</li>
 <li>Effacer tous les paragraphes d'information.</li>
 <li>Supprimer le bouton de réinitialisation de notre code.</li>
 <li>Activer les éléments de formulaire, vide et met au point le champ de texte, prêt à entrer une nouvelle proposition.</li>
 <li>Supprimer la couleur d'arrière-plan du paragraphe <code>lastResult</code>.</li>
 <li>Génèrer un nouveau nombre aléatoire afin que vous ne deviniez plus le même nombre !</li>
</ul>

<p><strong>À ce stade, vous devriez avoir un jeu (simple) entièrement fonctionnel — félicitations!</strong></p>

<p>Pour finir, c'est le moment de faire une synthèse sur  quelques caractéristiques importantes du code ;  vous les avez déjà vues, sans forcément vous en rendre compte.</p>

<h3 id="Boucles">Boucles</h3>

<p>Dans le code précédent, une partie à examiner de plus près est la boucle <a href="/fr/docs/Web/JavaScript/Reference/Instructions/for">for</a>. Les boucles sont un concept très important dans la programmation, qui vous permet de continuer à exécuter un morceau de code encore et encore, jusqu'à ce qu'une certaine condition soit remplie.</p>

<p>Pour commencer, allez sur votre <a href="/fr/Apprendre/D%C3%A9couvrir_outils_d%C3%A9veloppement_navigateurs">console developpeur Javascript</a> et entrez ce qui suit :</p>

<pre class="brush: js">for (let i = 1 ; i &lt; 21 ; i++) { console.log(i) }</pre>

<p>Que s'est-il passé ? Les nombres de 1 à 20 s'affichent dans la console. C'est à cause de la boucle. Une boucle : <code>for</code>  prend trois valeurs d'entrée (arguments)</p>

<ol>
 <li><strong>Une valeur de départ </strong>: Dans ce cas, nous commençons un compte à 1, mais cela pourrait être n'importe quel nombre. Vous pouvez remplacer <code>i</code> par n'importe quel nom (ou presque...) , mais <code>i</code> est utilisé par convention car il est court et facile à retenir.</li>
 <li><strong>Une condition de fin </strong>: Ici, nous avons spécifié  <code>i &lt; 21</code> la boucle continuera jusqu'à ce que  <code>i</code>  ne soit plus inférieur à 21. Quand <code>i</code> atteindra ou dépassera 21, la boucle s'arrêtera.</li>
 <li><strong>Un incrémenteur </strong>:  Nous avons spécifié <code>i++</code>, ce qui signifie "ajouter 1 à i". La boucle sera exécutée une fois pour chaque valeur de <code>i</code>, jusqu'a ce que <code>i</code> atteigne une valeur de 21 (comme indiqué ci-dessus). Dans ce cas, nous imprimons simplement la valeur de <code>i</code>  sur la console à chaque itération en utilisant {{domxref("Console.log", "console.log()")}}.</li>
</ol>

<p>Maintenant, regardons la boucle dans notre jeu de devinettes de nombres <strong>—</strong> ce qui suit peut être trouvé dans la fonction <code>resetGame()</code> :</p>

<pre class="brush: js">let resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i &lt; resetParas.length ; i++) {
  resetParas[i].textContent = '';
}</pre>

<p>Ce code crée une variable contenant une liste de tous les paragraphes à l'intérieur de <code>&lt;div class="resultParas"&gt;</code>  en utilisant la méthode {{domxref ("Document.querySelectorAll", "querySelectorAll ()")}}, puis il passe dans la boucle et pour chacun d'entre eux supprime le contenu du texte.</p>

<h3 id="Une_petite_discussion_sur_les_objets">Une petite discussion sur les objets</h3>

<p>Voyons une dernière amélioration avant d'aborder cette discussion. Ajoutez la ligne suivante juste en dessous de <code>let resetButton;</code> ligne près du haut de votre JavaScript, puis enregistrez votre fichier :</p>

<pre class="brush: js">guessField.focus();</pre>

<p>Cette ligne utilise la méthode{{domxref("HTMLElement.focus", "focus()")}} pour placer automatiquement le curseur dans le champ texte {{htmlelement ("input")}} dès le chargement de la page, permettant à l'utilisateur de commencer à taper sa première proposition de suite sans avoir à cliquer préalablement dans le champ. Ce n'est qu'un petit ajout, mais cela améliore la convivialité  en donnant à l'utilisateur une bonne idée visuelle de ce qu'il doit faire pour jouer.</p>

<p>Analysons ce qui se passe ici un peu plus en détail. En JavaScript, tout est objet. Un objet JavaScript possède des propriétés, chacune définissant une caractéristique. Vous pouvez créer vos propres objets, mais cela est une notion assez avancée, nous ne la couvrirons que beaucoup plus tard dans le cours. Pour l'instant, nous allons discuter brièvement des objets intégrés que contient votre navigateur, ce qui vous permet de faire beaucoup de choses utiles.</p>

<p>Dans ce cas particulier, nous avons d'abord créé une variable <code>guessField</code> qui stocke une référence au champ de formulaire de saisie de texte dans notre HTML <strong>—</strong> la ligne suivante se trouve parmi nos déclarations de variables en haut du code :</p>

<pre class="brush: js">let guessField = document.querySelector('.guessField');</pre>

<p>Pour obtenir cette référence, nous avons utilisé la méthode {{domxref("document.querySelector", "querySelector()")}} de l'objet {{domxref ("document")}}. <code>querySelector()</code> prend une information - un <a href="/fr/docs/Apprendre/CSS/Introduction_à_CSS/Les_sélecteurs">sélecteur CSS </a>qui sélectionne l'élément auquel vous voulez faire référence.</p>

<p>Parce que <code>guessField</code> contient maintenant une référence à un élément {{htmlelement ("input")}}, il aura maintenant accès à un certain nombre de propriétés (essentiellement des variables stockées dans des objets, dont certaines ne peuvent pas être modifiées) et des méthodes (essentiellement des fonctions stockées dans des objets). Une méthode disponible pour entrer des éléments est <code>focus()</code>, donc nous pouvons maintenant utiliser cette ligne pour focaliser l'entrée de texte :</p>

<pre class="brush: js">guessField.focus();</pre>

<p>Les variables qui ne contiennent pas de références aux éléments de formulaire n'auront pas de <code>focus()</code> à leur disposition. Par exemple, la variable <code>guesses</code> contient une référence à un élément {{htmlelement ("p")}} et <code>guessCount</code> contient un nombre.</p>

<h3 id="Jouer_avec_les_objets_du_navigateur">Jouer avec les objets du navigateur</h3>

<p>Jouons un peu avec certains objets du navigateur.</p>

<ol>
 <li> Tout d'abord, ouvrez votre programme dans un navigateur.</li>
 <li> Ensuite, ouvrez les <a href="/fr/docs/Apprendre/Découvrir_outils_développement_navigateurs">outils de développement</a> de votre navigateur et assurez-vous que l'onglet de la console JavaScript est ouvert.</li>
 <li> Tapez <code>guessField</code> et la console vous montrera que la variable contient un élément {{htmlelement ("input")}}. Vous remarquerez également que la console complète automatiquement les noms d'objets existant dans l'environnement d'exécution, y compris vos variables!</li>
 <li>
  <p> Maintenant, tapez ce qui suit :</p>

  <pre class="brush: js">guessField.value = 'Hello';
</pre>

  <p class="brush: js">La propriété <code>value</code> représente la valeur courante entrée dans un champs de texte. Vous verrez qu'en entrant cette commande nous avons changé ce que c'est.</p>
 </li>
 <li>Tapez maintenant <code>guesses</code> and appuyez sur entrée. La console vous montrera que la variable contient un élément {{htmlelement ("p")}}.</li>
 <li>
  <p>Maintenant, essayez d'entrer la ligne suivante :</p>

  <pre class="brush: js">guesses.value
</pre>

  <p class="brush: js">Le navigateur va retourner <code>undefined</code>, parce que <code>value</code> n'existe pas dans le paragraphe.</p>
 </li>
 <li>
  <p>Pour changer le texte dans le paragraphe vous aurez besoin de  la propriété {{domxref("Node.textContent", "textContent")}} à la place.<br>
   Essayez ceci :</p>

  <pre class="brush: js">guesses.textContent = 'Where is my paragraph?';
</pre>
 </li>
 <li>Maintenant, pour des trucs amusants. Essayez d'entrer les lignes ci-dessous, une par une :</li>
</ol>

<pre class="brush: js">guesses.style.backgroundColor = 'yellow';
guesses.style.fontSize = '200%';
guesses.style.padding = '10px';
guesses.style.boxShadow = '3px 3px 6px black';</pre>

<p>Chaque élément d'une page possède une propriété de <code>style</code> , qui contient elle-même un objet dont les propriétés contiennent tous les styles CSS en ligne appliqués à cet élément. Cela nous permet de définir dynamiquement de nouveaux styles CSS sur des éléments en utilisant JavaScript.</p>

<h2 id="Cest_fini_pour_le_moment...">C'est fini pour le moment...</h2>

<p>Vous voilà parvenu au bout de cet exemple, bravo ! Essayez votre code enfin complété ou<a href="https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html"> jouez avec notre version finale ici</a>. Si vous ne parvenez pas à faire fonctionner l'exemple, vérifiez-le par rapport <a href="https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html">au code source.</a></p>

<p>{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}</p>
