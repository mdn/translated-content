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
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}

Maintenant que vous avez appris quelques éléments théoriques sur le JavaScript, et ce que vous pouvez faire avec, nous allons vous donner un cours intensif sur les fonctionnalités basiques du JavaScript avec un tutoriel entièrement pratique. Vous allez construire un jeu simple, étape par étape. Il s'agit de faire deviner un nombre, notre jeu s'appelle « Guess the number ».

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>Une culture informatique basique, et des notions de HTML et CSS.</td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Avoir une première expérience d'écriture de JavaScript et comprendre les
        implications de l'écriture d'un programme en JavaScript.
      </td>
    </tr>
  </tbody>
</table>

Ne vous attendez pas à comprendre tout le code en détail immédiatement — nous voulons simplement vous présenter les grands concepts pour le moment, et vous donner une idée de la façon dont JavaScript (et d'autres langages de programmation) fonctionne. Dans les articles suivants, vous reviendrez plus en détails sur toutes ces fonctionnalités !

> **Note :** De nombreuses fonctionnalités que vous allez voir en JavaScript sont identiques à celles d'autres langages de programmation — fonctions, boucles, etc. La syntaxe du code est différente mais les concepts sont globalement identiques.

## Penser comme un programmeur

Une des choses les plus difficiles à apprendre en programmation n'est pas la syntaxe, mais comment l'appliquer afin de résoudre un problème réel. Vous devez commencer à penser comme un programmeur — ce qui implique généralement d'examiner les tâches que votre programme doit effectuer, de déterminer les fonctionnalités du code nécessaires à leurs réalisations et comment les faire fonctionner ensemble.

Cela requiert un mélange de travail acharné, d'expérience avec la syntaxe de programmation (de manière générale) et surtout de la pratique — ainsi qu'un peu de créativité. Plus vous allez coder, plus vous aller vous améliorer. On ne peut pas garantir que vous aurez un « cerveau de développeur » en 5 minutes, mais nous allons vous donner plein d'occasions pour pratiquer cette façon de penser, tout au long du cours.

Maintenant que vous avez cela en tête, regardons l'exemple que nous allons construire dans cet article et comment le découper en plusieurs tâches qui ont du sens.

## Exemple — Jeu : Guess the number

Dans cet article, nous allons vous montrer comment construire le jeu simple que vous pouvez voir ci-dessous :

```html hidden
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <title>Number guessing game</title>
    <style>
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
    </style>
</head>

<body>
    <h1>Deviner un nombre</h1>
    <p>Nous avons généré un nombre aléatoire entre 1 et 100, tentez de le deviner en 10 tours maximum. Pour chaque tentative, nous vous dirons si votre estimation est trop ou pas assez élevée.</p>
    <div class="form"> <label for="guessField">Entrez votre proposition : </label><input type="text" id="guessField" class="guessField"> <input type="submit" value="Valider" class="guessSubmit"> </div>
    <div class="resultParas">
        <p class="guesses"></p>
        <p class="lastResult"></p>
        <p class="lowOrHi"></p>
    </div>
</body>
<script>
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
        if (userGuess < randomNumber) {
          lowOrHi.textContent='Le nombre saisi est trop petit !' ;
        } else if(userGuess > randomNumber) {
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
      for (let i = 0 ; i < resetParas.length ; i++) {
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
</script>

</html>
```

{{ EmbedLiveSample('Exemple_—_Jeu_Guess_the_number', '100%', 320, "", "", "hide-codepen-jsfiddle") }}

Essayez de jouer et familiarisez-vous avec ce jeu avant de continuer.

Imaginons que votre patron vous ait donné le résumé suivant pour créer ce jeu :

> Je vous demande de créer un jeu simple de devinette de nombre. Le jeu choisit aléatoirement un nombre entre 1 et 100, puis il met le joueur au défi de le deviner en 10 tentatives maxi. À chaque tour, le joueur doit être informé s'il a deviné ou non le bon nombre — si ce n'est pas le cas, le jeu lui indique si son estimation est trop basse ou trop élevée. Le jeu doit également rappeler au joueur les nombres déjà proposés. Le jeu se termine quand le joueur a deviné le nombre mystère, ou s'il a épuisé ses 10 chances. À la fin du jeu, le joueur a la possibilité de débuter une nouvelle partie.

La première chose à faire en regardant ce résumé, c'est de le décomposer en tâches simples et codables comme le ferait un programmeur :

1.  Générer un nombre aléatoire entre 1 et 100.
2.  Stocker le nombre de tours déjà joués. Commencer par 1.
3.  Fournir au joueur le moyen de saisir un nombre.
4.  Stocker l'ensemble des propositions de nombres pour que le joueur puisse les consulter.
5.  Vérifier si le nombre saisi par le joueur est correct.
6.  S'il est correct :

    1.  Afficher un message de félicitations.
    2.  Empêcher que le joueur saisisse de nouveau un nombre.
    3.  Afficher un contrôle pour que le joueur puisse rejouer.

7.  S'il est faux et que le joueur a encore des tours à jouer :

    1.  Informer le joueur que sa proposition de nombre est fausse.
    2.  Lui permettre d'entrer une nouvelle proposition de nombre.
    3.  Incrémenter le nombre de tours de 1.

8.  S'il est faux et que le joueur n'a plus de tours à jouer :

    1.  Informer le joueur qu'il a perdu et que la partie est finie.
    2.  Empêcher que le joueur saisisse de nouveau un nombre.
    3.  Afficher un contrôle pour que le joueur puisse rejouer.

9.  Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape 1.

Voyons maintenant comment nous pouvons transformer ces étapes en code. Nous allons développer cet exemple et explorer les fonctionnalités JavaScript au fur et à mesure.

### Configuration initiale

Pour commencer ce didacticiel, faites une copie locale du fichier [number-guessing-game-start.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)  (à voir [directement ici](http://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game-start.html)). Ouvrez-le dans votre éditeur de code et votre navigateur web. Pour l'instant, vous ne verrez qu'un titre, un paragraphe d'instructions et un formulaire pour entrer une estimation, mais le formulaire est pour l'instant inactif.

L'endroit où nous allons ajouter tout notre code se trouve dans l'élément {{htmlelement ("script")}} au bas du code HTML :

```html
<script>

  // Votre code JavaScript se place ici

</script>
```

### Ajouter des variables pour stocker les données

Commençons. Tout d'abord, ajoutez les lignes suivantes dans l'élément {{htmlelement ("script")}} :

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

let guesses = document.querySelector('.guesses');
let lastResult = document.querySelector('.lastResult');
let lowOrHi = document.querySelector('.lowOrHi');

let guessSubmit = document.querySelector('.guessSubmit');
let guessField = document.querySelector('.guessField');

let guessCount = 1;
let resetButton;
```

Cette partie de code définit les variables nécessaires au stockage des données que notre programme utilisera. Les variables sont essentiellement des conteneurs de valeurs (tels que des nombres ou des chaînes de texte). Une variable se crée avec le mot-clé `let` suivi du nom de la variable. Vous pouvez ensuite attribuer une valeur à la variable avec le signe égal (`=`) suivi de la valeur que vous voulez lui donner.

Dans notre exemple :

- La première variable — `randomNumber` — reçoit le nombre aléatoire entre 1 et 100, calculé en utilisant un algorithme mathématique.
- Les trois variables suivantes sont chacune faite pour stocker une référence aux paragraphes de résultats dans le HTML ; elles sont utilisées pour insérer des valeurs dans les paragraphes plus tard dans le code :

  ```html
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
  ```

- Les deux variables suivantes stockent des références au champ de saisie du formulaire et au bouton de soumission ; elles sont utilisées pour écouter l'envoi de la supposition (guess) plus tard.

  ```html
  <label for="guessField">Enter a guess: </label><input type="text" id="guessField" class="guessField">
  <input type="submit" value="Submit guess" class="guessSubmit">
  ```

- Nos deux dernières variables stockent un nombre de suppositions qui vaut initialement 1 (utilisées pour garder une trace du nombre de suppositions que le joueur a faite) et une référence à un bouton de réinitialisation qui n'existe pas encore.

> **Note :** Vous en apprendrez beaucoup plus sur les variables plus tard dans le cours, en commençant par le [prochain article](/fr/docs/Learn/JavaScript/First_steps/Variables).

### Fonctions

Ajoutez maintenant ce qui suit dans votre code JavaScript :

```js
function checkGuess() {
  alert('Je suis un espace réservé');
}
```

Les fonctions sont des blocs de code réutilisables que vous pouvez écrire une fois et exécuter encore et encore, pour éviter de réécrire le même code tout le temps. C'est vraiment utile. Il y a plusieurs façons de définir les fonctions, mais pour l'instant nous allons nous concentrer sur un type simple. Ici, nous avons défini une fonction en utilisant le mot-clé `function` accompagné de son nom suivi de parenthèses. Ensuite, nous avons mis deux accolades (`{ }`). Dans ces accolades est placé tout le code à exécuter à chaque appel de la fonction.

Quand nous voulons exécuter le code, nous saisissons le nom de la fonction suivi des parenthèses.

Essayez. Enregistrez le code et actualisez la page du navigateur. Puis, allez dans les [outils de développement et la console JavaScript](/fr/Apprendre/D%C3%A9couvrir_outils_d%C3%A9veloppement_navigateurs) et entrez la ligne suivante :

```js
checkGuess();
```

Après avoir pressé <kbd>Entrée</kbd> ou <kbd>Retour</kbd>, vous devriez voir apparaître une alerte « Je suis un espace réservé » ; nous avons défini une fonction dans notre code créant une alerte chaque fois que nous l'appelons.

> **Note :** Vous allez en apprendre beaucoup plus sur les fonctions plus tard dans ce cours.

### Opérateurs

Les opérateurs en JavaScript nous permettent d'effectuer des tests, de faire des calculs, de joindre des chaînes ensemble et d'autres choses de ce genre.

Si vous ne l'avez pas déjà fait, sauvegardez ce code, actualisez la page affichée dans le navigateur et ouvrez les [outils de développement et la console Javascript](/fr/Apprendre/D%C3%A9couvrir_outils_d%C3%A9veloppement_navigateurs). Ensuite, vous pouvez saisir les exemples ci‑dessous — saisissez chacun dans les colonnes « Exemple » exactement comme indiqué, en appuyant sur la touche <kbd>Entrée</kbd> du clavier après chacun et regardez le résultat renvoyé. Si vous n'avez pas facilement accès aux outils de développement du navigateur, vous pouvez toujours utiliser la console intégrée ci-dessous :

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Console JavaScript</title>
    <style>
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

    </style>
  </head>
  <body>


  </body>

  <script>
    let geval = eval;

    function createInput() {
      let inputDiv = document.createElement('div');
      let inputPara = document.createElement('p');
      let inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '>';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);
      inputDiv.focus();

      if (document.querySelectorAll('div').length > 1) {
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

  </script>
</html>
```

{{ EmbedLiveSample('Opérateurs', '100%', 300,"", "", "hide-codepen-jsfiddle") }}

Regardons d'abord les opérateurs arithmétiques, par exemple :

| Operator | Name           | Example   |
| -------- | -------------- | --------- |
| `+`      | Addition       | `6 + 9`   |
| `-`      | Soustraction   | `20 - 15` |
| `*`      | Multiplication | `3 * 7`   |
| `/`      | Division       | `10 / 5`  |

L'opérateur `+` peut aussi s'utiliser pour unir des chaînes de caractères (en informatique, on dit *concaténer*). Entrez les lignes suivantes, une par une :

```js
let name = 'Bingo';
name;
let hello = ' dit bonjour !';
hello;
let greeting = name + hello;
greeting;
```

Des raccourcis d'opérateurs sont également disponibles, appelés [opérateurs d'assignation](/fr/docs/Web/JavaScript/Reference/Opérateurs/Opérateurs_d_affectation) augmentés. Par exemple, si vous voulez simplement ajouter une nouvelle chaîne de texte à une chaîne existante et renvoyer le résultat, vous pouvez faire :

```js
name += ' dit bonjour !';
```

Cela équivaut à :

```js
name = name + ' dit bonjour !';
```

Lorsque nous exécutons des tests vrai/faux (par exemple, dans des conditions — voir {{anch ("Structures conditionnelles", "ci-dessous")}}, nous utilisons des [opérateurs de comparaison](/fr/docs/Web/JavaScript/Reference/Operators/Comparison_Operators), par exemple :

| Operator | Name                                            | Example                    |
| -------- | ----------------------------------------------- | -------------------------- |
| `===`    | Égalité stricte (est-ce exactement identique ?) | `5 === 2 + 4`              |
| `!==`    | Non égalité (est-ce différent ?)                | `'Chris' !== 'Ch' + 'ris'` |
| `<`      | Inférieur à                                     | `10 < 6`                   |
| `>`      | Supérieur à                                     | `10 > 20`                  |

### Structures conditionnelles

Revenons à la fonction `checkGuess()`. Nous pouvons assurément dire que nous ne souhaitons pas qu'elle renvoie un message d'emplacement réservé. Nous voulons qu'elle vérifie si la supposition du joueur est correcte ou non et qu'elle renvoie une réponse appropriée.

Donc, remplacez l'actuelle fonction `checkGuess()` par celle-ci :

```js
function checkGuess(){
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
     if (userGuess < randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop petit !';
     } else if (userGuess > randomNumber) {
      lowOrHi.textContent = 'Le nombre saisi est trop grand !';
     }
  }

  guessCount++;
  guessField.value = '';
  guessField.focus();
}
```

Pas mal de code — ouf ! Passons en revue chaque section et expliquons ce qu'elle fait.

- La première ligne de la fonction (ligne 2) déclare une variable nommée `userGuess` et définit sa valeur par celle qui vient d'être saisie dans le champ de texte. Nous faisons passer aussi cette valeur par la méthode  `Number()` , juste pour nous assurer que la valeur stockée dans `userGuess` est bien un nombre.
- Ensuite, nous rencontrons notre premier bloc de code conditionnel (lignes 3-5). Il permet d'exécuter des instructions de manière sélective, selon certaines conditions qui sont vraies ou non. Cela ressemble un peu à une fonction, mais ce n'est pas le cas. La forme la plus simple du bloc conditionnel commence par le mot clé `if`, puis parenthèses, puis des accolades `{ }`.
  A l'intérieur de ces parenthèses, nous mettons le test. S'il renvoie `true` , nous exécutons le code à l'intérieur des accolades. Sinon, nous ne le faisons pas, et passons au morceau de code suivant. Dans ce cas, le test vérifie si la variable `guessCount` est égale à `1` (c'est-à-dire s'il s'agit de la première supposition du joueur) :

  ```js
  guessCount === 1
  ```

  Si c'est le cas, nous faisons en sorte que le texte affiché soit « Propositions précédentes : ». Sinon, nous ne le faisons pas.

- La ligne 6 ajoute la valeur courante `userGuess` à la fin du paragraphe `guesses` , plus un espace vide de sorte qu'il y aura un espace entre chaque supposition faite.
- Le bloc suivant (lignes 8-24) effectue quelques vérifications :

  - Le premier `if(){ }` vérifie si la supposition de l'utilisateur est égale au nombre aléatoire `randomNumber` situé en haut de notre code JavaScript. Si c'est le cas, le joueur a deviné correctement et a gagné le jeu, nous affichons donc un message de félicitations d'une belle couleur verte au joueur, effaçons le contenu de la boîte d'information sur la position de l'estimation et exécutons une fonction appelée `setGameOver()`, dont nous reparlerons plus tard.
  - Ensuite, nous chaînons un autre test à la fin du précédent avec une structure `else if(){ }`. Cette structure vérifie si l'utilisateur a épuisé toutes ses tentatives. Si c'est le cas, le programme fait la même chose que dans le bloc précédent, mais avec un message de fin de partie au lieu d'un message de félicitations.
  - Le dernier bloc chaîné à la fin de ce code (`else { }`) contient du code qui n'est exécuté que si aucun des deux autres tests n'a renvoyé _vrai_ (c'est-à-dire que le joueur n'a pas deviné juste, mais qu'il lui reste des possibilité de supposition). Dans ce cas, nous lui disons que sa supposition est mauvaise, puis nous effectuons un autre test conditionnel pour vérifier si elle est supérieure ou inférieure à la valeur exacte et affichons un autre message approprié pour indiquer si sa supposition est trop forte ou trop faible.

<!---->

- Les trois dernières lignes de la fonction (ligne 26-28) préparent à une nouvelle proposition. Nous ajoutons 1 à la variable `guessCount` qui décompte les tours (`++` est une opération d'incrémentation — ajout de 1), puis effaçons le champ texte du formulaire et lui redonnons le focus, pour être prêt pour la saisie suivante.

### Evénements

À ce stade, nous avons bien implémentée la fonction `checkGuess()`, mais elle ne s'éxecutera pas parce que nous ne l'avons pas encore appelé.
Idéalement, nous voulons l'appeler lorsque le bouton <kbd>Soumettre</kbd> est cliqué, et pour ce faire, nous devons utiliser un événement. Les événements sont des actions qui se produisent dans le navigateur, comme le clic sur un bouton, le chargement d'une page ou la lecture d'une vidéo, en réponse à quoi nous pouvons exécuter des blocs de code. Les constructions qui écoutent l'événement en cours s'appellent des **écouteurs d'événements**, et les blocs de code exécutés en réponse à l'événement déclencheur sont appelés des **gestionnaires d'évenements**.

Ajoutez la ligne suivante sous l'accolade de fermeture de votre fonction `checkGuess()` :

```js
guessSubmit.addEventListener('click', checkGuess);
```

Ici, nous ajoutons un écouteur d'événement au bouton `guessSubmit` . C'est une méthode qui prend deux valeurs d'entrée (appelées arguments) - le type d'événement que nous écoutons (dans ce cas, `click`) qui est une chaîne de caractères, et le code que nous voulons exécuter quand l'événement se produit (dans ce cas, la fonction `checkGuess()`  — notez que nous n'avons pas besoin de spécifier les parenthèses lors de l'écriture dans {{domxref("EventTarget.addEventListener", "addEventListener()")}}).

Essayez d'enregistrer et d'actualiser votre code, votre exemple devrait désormais fonctionner, jusqu'à un certain point. Maintenant, le seul problème est que si vous devinez la bonne réponse ou si vous n'avez plus de tours à jouer, le jeu "va se casser" parce que nous n'avons pas encore implémenté la fonction `setGameOver()` dont le rôle est de terminer proprement le jeu. Ajoutons maintenant le code manquant pour compléter notre exemple.

### Finir les fonctionnalités du jeu

Pour définir la fonction `setGameOver()` à la fin de notre programme, ajoutez le code ci-dessous tout en bas :

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement('button');
  resetButton.textContent = 'Start new game';
  document.body.appendChild(resetButton);
  resetButton.addEventListener('click', resetGame);
}
```

- Les deux premières lignes désactivent l'entrée de texte et le bouton en définissant leurs propriétés désactivées à `true`.  Ceci est nécessaire, car si nous ne le faisons pas, l'utilisateur pourrait soumettre plus de propositions après la fin du jeu, ce qui gâcherait les choses.
- Les trois lignes suivantes génèrent un nouvel {{htmlelement("button")}} élément, avec le libellé "Démarrer une nouvelle partie" et l'ajoute au bas du HTML existant.
- La dernière ligne définit un écouteur d'événement sur ce nouveau bouton : un click sur le bouton déclenchera un appel de la fonction  `resetGame()`.

Reste à définir cette fonction ! Ajoutez le code suivant, tout en bas de votre JavaScript :

```js
function resetGame() {
  guessCount = 1;

  let resetParas = document.querySelectorAll('.resultParas p');
  for (let i = 0 ; i < resetParas.length ; i++) {
    resetParas[i].textContent = '';
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = '';
  guessField.focus();

  lastResult.style.backgroundColor = 'white';

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

Ce bloc de code assez long réinitialise complètement les paramètres du jeu (le joueur pourra commencer une nouvelle partie). Il permet de  :

- Remettre le compteur `guessCount` à 1.
- Effacer tous les paragraphes d'information.
- Supprimer le bouton de réinitialisation de notre code.
- Activer les éléments de formulaire, vide et met au point le champ de texte, prêt à entrer une nouvelle proposition.
- Supprimer la couleur d'arrière-plan du paragraphe `lastResult`.
- Génèrer un nouveau nombre aléatoire afin que vous ne deviniez plus le même nombre !

**À ce stade, vous devriez avoir un jeu (simple) entièrement fonctionnel — félicitations!**

Pour finir, c'est le moment de faire une synthèse sur  quelques caractéristiques importantes du code ;  vous les avez déjà vues, sans forcément vous en rendre compte.

### Boucles

Dans le code précédent, une partie à examiner de plus près est la boucle [for](/fr/docs/Web/JavaScript/Reference/Instructions/for). Les boucles sont un concept très important dans la programmation, qui vous permet de continuer à exécuter un morceau de code encore et encore, jusqu'à ce qu'une certaine condition soit remplie.

Pour commencer, allez sur votre [console developpeur Javascript](/fr/Apprendre/D%C3%A9couvrir_outils_d%C3%A9veloppement_navigateurs) et entrez ce qui suit :

```js
for (let i = 1 ; i < 21 ; i++) { console.log(i) }
```

Que s'est-il passé ? Les nombres de 1 à 20 s'affichent dans la console. C'est à cause de la boucle. Une boucle : `for`  prend trois valeurs d'entrée (arguments)

1.  **Une valeur de départ** : Dans ce cas, nous commençons un compte à 1, mais cela pourrait être n'importe quel nombre. Vous pouvez remplacer `i` par n'importe quel nom (ou presque...) , mais `i` est utilisé par convention car il est court et facile à retenir.
2.  **Une condition de fin** : Ici, nous avons spécifié  `i < 21` la boucle continuera jusqu'à ce que  `i`  ne soit plus inférieur à 21. Quand `i` atteindra ou dépassera 21, la boucle s'arrêtera.
3.  **Un incrémenteur** :  Nous avons spécifié `i++`, ce qui signifie "ajouter 1 à i". La boucle sera exécutée une fois pour chaque valeur de `i`, jusqu'a ce que `i` atteigne une valeur de 21 (comme indiqué ci-dessus). Dans ce cas, nous imprimons simplement la valeur de `i`  sur la console à chaque itération en utilisant {{domxref("Console.log", "console.log()")}}.

Maintenant, regardons la boucle dans notre jeu de devinettes de nombres **—** ce qui suit peut être trouvé dans la fonction `resetGame()` :

```js
let resetParas = document.querySelectorAll('.resultParas p');
for (let i = 0 ; i < resetParas.length ; i++) {
  resetParas[i].textContent = '';
}
```

Ce code crée une variable contenant une liste de tous les paragraphes à l'intérieur de `<div class="resultParas">`  en utilisant la méthode {{domxref ("Document.querySelectorAll", "querySelectorAll ()")}}, puis il passe dans la boucle et pour chacun d'entre eux supprime le contenu du texte.

### Une petite discussion sur les objets

Voyons une dernière amélioration avant d'aborder cette discussion. Ajoutez la ligne suivante juste en dessous de `let resetButton;` ligne près du haut de votre JavaScript, puis enregistrez votre fichier :

```js
guessField.focus();
```

Cette ligne utilise la méthode{{domxref("HTMLElement.focus", "focus()")}} pour placer automatiquement le curseur dans le champ texte {{htmlelement ("input")}} dès le chargement de la page, permettant à l'utilisateur de commencer à taper sa première proposition de suite sans avoir à cliquer préalablement dans le champ. Ce n'est qu'un petit ajout, mais cela améliore la convivialité  en donnant à l'utilisateur une bonne idée visuelle de ce qu'il doit faire pour jouer.

Analysons ce qui se passe ici un peu plus en détail. En JavaScript, tout est objet. Un objet JavaScript possède des propriétés, chacune définissant une caractéristique. Vous pouvez créer vos propres objets, mais cela est une notion assez avancée, nous ne la couvrirons que beaucoup plus tard dans le cours. Pour l'instant, nous allons discuter brièvement des objets intégrés que contient votre navigateur, ce qui vous permet de faire beaucoup de choses utiles.

Dans ce cas particulier, nous avons d'abord créé une variable `guessField` qui stocke une référence au champ de formulaire de saisie de texte dans notre HTML **—** la ligne suivante se trouve parmi nos déclarations de variables en haut du code :

```js
let guessField = document.querySelector('.guessField');
```

Pour obtenir cette référence, nous avons utilisé la méthode {{domxref("document.querySelector", "querySelector()")}} de l'objet {{domxref ("document")}}. `querySelector()` prend une information - un [sélecteur CSS](/fr/docs/Apprendre/CSS/Introduction_à_CSS/Les_sélecteurs) qui sélectionne l'élément auquel vous voulez faire référence.

Parce que `guessField` contient maintenant une référence à un élément {{htmlelement ("input")}}, il aura maintenant accès à un certain nombre de propriétés (essentiellement des variables stockées dans des objets, dont certaines ne peuvent pas être modifiées) et des méthodes (essentiellement des fonctions stockées dans des objets). Une méthode disponible pour entrer des éléments est `focus()`, donc nous pouvons maintenant utiliser cette ligne pour focaliser l'entrée de texte :

```js
guessField.focus();
```

Les variables qui ne contiennent pas de références aux éléments de formulaire n'auront pas de `focus()` à leur disposition. Par exemple, la variable `guesses` contient une référence à un élément {{htmlelement ("p")}} et `guessCount` contient un nombre.

### Jouer avec les objets du navigateur

Jouons un peu avec certains objets du navigateur.

1.  Tout d'abord, ouvrez votre programme dans un navigateur.
2.  Ensuite, ouvrez les [outils de développement](/fr/docs/Apprendre/Découvrir_outils_développement_navigateurs) de votre navigateur et assurez-vous que l'onglet de la console JavaScript est ouvert.
3.  Tapez `guessField` et la console vous montrera que la variable contient un élément {{htmlelement ("input")}}. Vous remarquerez également que la console complète automatiquement les noms d'objets existant dans l'environnement d'exécution, y compris vos variables!
4.  Maintenant, tapez ce qui suit :

    ```js
    guessField.value = 'Hello';
    ```

    La propriété `value` représente la valeur courante entrée dans un champs de texte. Vous verrez qu'en entrant cette commande nous avons changé ce que c'est.

5.  Tapez maintenant `guesses` and appuyez sur entrée. La console vous montrera que la variable contient un élément {{htmlelement ("p")}}.
6.  Maintenant, essayez d'entrer la ligne suivante :

    ```js
    guesses.value
    ```

    Le navigateur va retourner `undefined`, parce que `value` n'existe pas dans le paragraphe.

7.  Pour changer le texte dans le paragraphe vous aurez besoin de  la propriété {{domxref("Node.textContent", "textContent")}} à la place.
    Essayez ceci :

    ```js
    guesses.textContent = 'Where is my paragraph?';
    ```

8.  Maintenant, pour des trucs amusants. Essayez d'entrer les lignes ci-dessous, une par une :

```js
guesses.style.backgroundColor = 'yellow';
guesses.style.fontSize = '200%';
guesses.style.padding = '10px';
guesses.style.boxShadow = '3px 3px 6px black';
```

Chaque élément d'une page possède une propriété de `style` , qui contient elle-même un objet dont les propriétés contiennent tous les styles CSS en ligne appliqués à cet élément. Cela nous permet de définir dynamiquement de nouveaux styles CSS sur des éléments en utilisant JavaScript.

## C'est fini pour le moment...

Vous voilà parvenu au bout de cet exemple, bravo ! Essayez votre code enfin complété ou [jouez avec notre version finale ici](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Si vous ne parvenez pas à faire fonctionner l'exemple, vérifiez-le par rapport [au code source.](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/first-splash/number-guessing-game.html)

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_is_JavaScript", "Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps")}}
