---
title: Notre premier code JavaScript
short-title: Présentation de JavaScript
slug: Learn_web_development/Core/Scripting/A_first_splash
original_slug: Learn/JavaScript/First_steps/A_first_splash
l10n:
  sourceCommit: 693106d7bc9aa28f22a3f234455f5496efd728c4
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}

Maintenant que vous avez appris quelques éléments théoriques sur le JavaScript, et ce que vous pouvez faire avec, nous allons vous donner un cours intensif sur les fonctionnalités basiques du JavaScript avec un tutoriel entièrement pratique. Vous allez construire un jeu simple, étape par étape. Il s'agit de faire deviner un nombre, notre jeu s'appelle «&nbsp;Deviner un nombre&nbsp;».

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Une compréhension de <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a> et des <a href="/fr/docs/Learn_web_development/Core/Styling_basics">fondamentaux de CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Penser comme un·e programmeur·euse.</li>
          <li>Découvrir ce qu'implique l'écriture de JavaScript.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

Ne vous attendez pas à comprendre tout le code en détail immédiatement — nous voulons simplement vous présenter les grands concepts pour le moment, et vous donner une idée de la façon dont JavaScript (et d'autres langages de programmation) fonctionne. Dans les articles suivants, vous reviendrez plus en détails sur toutes ces fonctionnalités&nbsp;!

> [!NOTE]
> De nombreuses fonctionnalités que vous allez voir en JavaScript sont identiques à celles d'autres langages de programmation — fonctions, boucles, etc. La syntaxe du code est différente mais les concepts sont globalement identiques.

## Présentation de notre exemple : « Deviner un nombre »

Dans cet article, nous allons vous montrer comment construire le jeu simple que vous pouvez voir ci-dessous :

```html hidden live-sample___guess-the-number
<h1>Deviner un nombre</h1>

<p>
  Nous avons sélectionné un nombre aléatoire entre 1 et 100. Essayez de le
  deviner en 10 tentatives ou moins. Nous vous indiquerons si votre proposition
  est trop grande ou trop petite.
</p>

<div class="form">
  <label for="guessField">Entrez une proposition&nbsp;: </label>
  <input
    type="number"
    min="1"
    max="100"
    required
    id="guessField"
    class="guessField" />
  <input type="submit" value="Proposer" class="guessSubmit" />
</div>

<div class="resultParas">
  <p class="guesses"></p>
  <p class="lastResult"></p>
  <p class="lowOrHi"></p>
</div>
```

```css hidden live-sample___guess-the-number
html {
  font-family: sans-serif;
}

body {
  width: 50%;
  max-width: 800px;
  min-width: 480px;
  margin: 0 auto;
}

.form input[type="number"] {
  width: 200px;
}

.lastResult {
  color: white;
  padding: 3px;
}
```

```js hidden live-sample___guess-the-number
let randomNumber = Math.floor(Math.random() * 100) + 1;
const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");
const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");
let guessCount = 1;
let resetButton;

function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Propositions précédentes : ";
  }

  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Bravo, vous avez trouvé le nombre !";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! PERDU !!!";
    setGameOver();
  } else {
    lastResult.textContent = "Faux !";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop petit !";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop grand !";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}

guessSubmit.addEventListener("click", checkGuess);

function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Démarrer une nouvelle partie";
  document.body.appendChild(resetButton);
  resetButton.addEventListener("click", resetGame);
}

function resetGame() {
  guessCount = 1;
  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);
  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();
  lastResult.style.backgroundColor = "white";
  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

{{EmbedLiveSample("guess-the-number", "100%", 300)}}

Essayez de jouer — familiarisez-vous avec le jeu avant de continuer.

## Penser comme un·e programmeur·euse

L'une des choses les plus difficiles à apprendre en programmation n'est pas la syntaxe, mais la façon de l'appliquer pour résoudre des problèmes concrets. Il faut commencer à penser comme un·e programmeur·euse — cela consiste généralement à examiner les descriptions de ce que votre programme doit faire, à déterminer quelles fonctionnalités du code sont nécessaires pour y parvenir, et comment les faire fonctionner ensemble.

Cela demande un mélange de travail, d'expérience avec la syntaxe du langage et de pratique — ainsi qu'un peu de créativité. Plus vous codez, plus vous progresserez. Nous ne pouvons pas vous promettre que vous développerez un «&nbsp;cerveau de programmeur·euse&nbsp;» en cinq minutes, mais nous vous donnerons de nombreuses occasions de vous entraîner à penser comme un·e programmeur·euse ici et tout au long du cours.

## Le cahier des charges initial

Imaginons que votre responsable vous ait donné le cahier des charges suivant pour créer ce jeu&nbsp;:

> Je veux que vous créiez un jeu simple de type «&nbsp;deviner un nombre&nbsp;». Il doit choisir un nombre aléatoire entre 1 et 100, puis défier le joueur de deviner ce nombre en 10 essais. Après chaque essai, le joueur doit savoir s'il a trouvé ou non, et si ce n'est pas le cas, si la proposition était trop petite ou trop grande. Le joueur doit aussi pouvoir voir les nombres déjà proposés. Le jeu se termine dès que le joueur trouve le bon nombre ou qu'il n'a plus d'essais. À la fin de la partie, le joueur doit avoir la possibilité de recommencer une nouvelle partie.

En lisant ce cahier des charges, la première chose à faire est de le découper en tâches simples et actionnables, avec un état d'esprit de programmeur·euse&nbsp;:

1. Générer un nombre aléatoire entre 1 et 100.
2. Stocker le nombre de tours déjà joués. Commencer par 1.
3. Fournir au joueur ou à la joueuse le moyen de saisir un nombre.
4. Stocker l'ensemble des propositions de nombres pour que le·a joueur·euse puisse les consulter.
5. Vérifier si le nombre saisi par le·a joueur·euse est correct.
6. S'il·elle a trouvé le bon nombre&nbsp;:
   1. Afficher un message de félicitations.
   2. Empêcher que le·a joueur·euse saisisse de nouveau un nombre.
   3. Afficher un contrôle pour que le·a joueur·euse puisse rejouer.
7. S'il·elle n'a pas trouvé et qu'il·elle a encore des tours à jouer&nbsp;:
   1. Informer le·a joueur·euse que sa proposition de nombre est fausse.
   2. Lui permettre d'entrer une nouvelle proposition de nombre.
   3. Incrémenter le nombre de tours de 1.
8. S'il·elle n'a pas trouvé et qu'il·elle n'a plus de tours à jouer&nbsp;:
   1. Informer le·a joueur·euse qu'il·elle a perdu et que la partie est finie.
   2. Empêcher que le·a joueur·euse saisisse de nouveau un nombre.
   3. Afficher un contrôle pour que le·a joueur·euse puisse rejouer.
9. Une fois le jeu redémarré, s'assurer que la logique du jeu et l'interface utilisateur sont complètement réinitialisées, puis revenir à l'étape&nbsp;1.

Voyons maintenant comment nous pouvons transformer ces étapes en code. Nous allons développer cet exemple et explorer les fonctionnalités JavaScript au fur et à mesure.

### Configuration initiale

Pour commencer ce didacticiel, nous vous invitons à faire une copie locale du code ci-dessous dans un nouveau fichier HTML à l'aide de votre éditeur de code.

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="utf-8" />

    <title>Le jeu de devinette de nombres</title>

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

      .form input[type="number"] {
        width: 200px;
      }

      .lastResult {
        color: white;
        padding: 3px;
      }
    </style>
  </head>

  <body>
    <h1>Deviner un nombre</h1>

    <p>
      Nous avons sélectionné un nombre aléatoire entre 1 et 100. Essayez de le
      deviner en 10 tentatives ou moins. Nous vous indiquerons si votre
      proposition est trop grande ou trop petite.
    </p>

    <div class="form">
      <label for="guessField">Entrez une proposition&nbsp;: </label>
      <input
        type="number"
        min="1"
        max="100"
        required
        id="guessField"
        class="guessField" />
      <input type="submit" value="Proposer" class="guessSubmit" />
    </div>

    <div class="resultParas">
      <p class="guesses"></p>
      <p class="lastResult"></p>
      <p class="lowOrHi"></p>
    </div>

    <script>
      // Votre JavaScript va ici
    </script>
  </body>
</html>
```

### Ajouter des variables pour stocker les données

Commençons. Tout d'abord, ajoutez les lignes suivantes dans l'élément HTML {{htmlelement ("script")}}&nbsp;:

```js
let randomNumber = Math.floor(Math.random() * 100) + 1;

const guesses = document.querySelector(".guesses");
const lastResult = document.querySelector(".lastResult");
const lowOrHi = document.querySelector(".lowOrHi");

const guessSubmit = document.querySelector(".guessSubmit");
const guessField = document.querySelector(".guessField");

let guessCount = 1;
let resetButton;
```

Cette partie du code initialise les variables (et constantes) nécessaires pour stocker les données utilisées par notre programme.

Les variables sont simplement des noms associés à des valeurs (comme des nombres ou des chaînes de caractères d'un texte). On crée une variable avec le mot-clé `let` suivi du nom de la variable.

Les constantes servent aussi à nommer des valeurs, mais contrairement aux variables, leur valeur ne peut pas être modifiée après leur initialisation. Ici, nous utilisons des constantes pour stocker des références à des éléments de l'interface utilisateur. Le texte à l'intérieur de ces éléments peut changer, mais chaque constante fait toujours référence au même élément HTML qu'à l'initialisation. On crée une constante avec le mot-clé `const` suivi du nom de la constante.

On attribue une valeur à une variable ou à une constante avec le signe égal (`=`) suivi de la valeur souhaitée.

Dans notre exemple&nbsp;:

- La première variable — `randomNumber` — reçoit un nombre aléatoire entre 1 et 100, calculé à l'aide d'un algorithme mathématique.
- Les trois premières constantes servent chacune à stocker une référence aux paragraphes de résultats dans notre HTML, et sont utilisées pour insérer des valeurs dans ces paragraphes plus loin dans le code (notez qu'elles sont à l'intérieur d'un élément `<div>`, qui est lui-même utilisé pour sélectionner les trois lors de la réinitialisation, quand on relance le jeu)&nbsp;:

  ```html
  <div class="resultParas">
    <p class="guesses"></p>
    <p class="lastResult"></p>
    <p class="lowOrHi"></p>
  </div>
  ```

- Les deux constantes suivantes stockent des références au champ de saisie du formulaire et au bouton de soumission, et servent à gérer l'envoi de la proposition plus tard dans le code.

  ```html
  <label for="guessField">Entrez une proposition&nbsp;: </label>
  <input type="text" id="guessField" class="guessField" />
  <input type="submit" value="Proposer" class="guessSubmit" />
  ```

- Nos deux dernières variables stockent un nombre de suppositions qui vaut initialement 1 (utilisées pour garder une trace du nombre de suppositions que le joueur a faite) et une référence à un bouton de réinitialisation qui n'existe pas encore.

### Fonctions

Ajoutez maintenant ce qui suit dans votre code JavaScript&nbsp;:

```js
function checkGuess() {
  console.log("Je suis un espace réservé");
}
```

Les fonctions sont des blocs de code réutilisables que vous pouvez écrire une fois et exécuter encore et encore, pour éviter de réécrire le même code tout le temps. C'est vraiment utile. Il y a plusieurs façons de définir les fonctions, mais pour l'instant nous allons nous concentrer sur un type simple. Ici, nous avons défini une fonction en utilisant le mot-clé `function` accompagné de son nom suivi de parenthèses. Ensuite, nous avons mis deux accolades (`{ }`). Dans ces accolades est placé tout le code à exécuter à chaque appel de la fonction.

Quand nous voulons exécuter le code, nous saisissons le nom de la fonction suivi des parenthèses.

Essayez. Enregistrez le code et actualisez la page du navigateur. Puis, allez dans les [outils de développement et la console JavaScript](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) et entrez la ligne suivante&nbsp;:

```js
checkGuess();
```

Après avoir pressé <kbd>Entrée</kbd> ou <kbd>Retour</kbd>, vous devriez voir apparaître«&nbsp;Je suis un espace réservé&nbsp;» de journalisé dans la console&nbsp;; nous avons défini une fonction dans notre code créant un journal à chaque fois que nous l'appelons.

## Chaînes de caractères de texte

Les chaînes de caractères servent à représenter du texte. Nous avons déjà vu une variable de type chaîne&nbsp;: dans le code suivant, `"Je suis un espace réservé"` est une chaîne de caractères&nbsp;:

```js
function checkGuess() {
  console.log("Je suis un espace réservé");
}
```

Vous pouvez déclarer des chaînes en utilisant des guillemets doubles (`"`) ou simples (`'`), mais il faut utiliser le même type de guillemet au début et à la fin d'une même déclaration&nbsp;: vous ne pouvez pas écrire `"Je suis un espace réservé'`.

Vous pouvez aussi déclarer des chaînes à l'aide d'accent grave (backtick&nbsp;: `` ` ``). Les chaînes ainsi déclarées sont appelées _littéraux de gabarit_ et possèdent des propriétés particulières. En particulier, vous pouvez y intégrer d'autres variables ou même des expressions&nbsp;:

```js
const name = "Mahalia";

const greeting = `Bonjour ${name}`;
```

Cela vous permet de concaténer facilement des chaînes de caractères.

### Structures conditionnelles

Les blocs de code **conditionnels** permettent d'exécuter du code de manière sélective, selon qu'une certaine condition est vraie ou non. Ils ressemblent un peu à une fonction, mais ils sont différents. Explorons les structures conditionnelles en les ajoutant à notre exemple.

Je pense qu'il est raisonnable de dire que nous ne voulons pas que notre fonction `checkGuess()` se contente d'afficher un message d'espace réservé. Nous voulons qu'elle vérifie si la proposition du joueur est correcte ou non, et qu'elle réagisse en conséquence.

À ce stade, remplacez votre fonction `checkGuess()` actuelle par cette version&nbsp;:

```js
function checkGuess() {
  const userGuess = Number(guessField.value);
  if (guessCount === 1) {
    guesses.textContent = "Propositions précédentes : ";
  }
  guesses.textContent = `${guesses.textContent} ${userGuess}`;

  if (userGuess === randomNumber) {
    lastResult.textContent = "Bravo, vous avez trouvé le nombre !";
    lastResult.style.backgroundColor = "green";
    lowOrHi.textContent = "";
    setGameOver();
  } else if (guessCount === 10) {
    lastResult.textContent = "!!! PERDU !!!";
    setGameOver();
  } else {
    lastResult.textContent = "Faux !";
    lastResult.style.backgroundColor = "red";
    if (userGuess < randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop petit !";
    } else if (userGuess > randomNumber) {
      lowOrHi.textContent = "Le nombre saisi est trop grand !";
    }
  }

  guessCount++;
  guessField.value = "";
  guessField.focus();
}
```

Pas mal de code — ouf&nbsp;! Passons en revue chaque section et expliquons ce qu'elle fait.

- La première ligne déclare une constante appelée `userGuess` et lui attribue la valeur actuellement saisie dans le champ texte. Nous passons aussi cette valeur par le constructeur natif `Number()` afin de nous assurer qu'il s'agit bien d'un nombre.
- Ensuite, nous rencontrons notre premier bloc de code conditionnel. La forme la plus simple d'un bloc conditionnel commence par le mot-clé `if`, puis des parenthèses, puis des accolades. À l'intérieur des parenthèses, on place un test. Si le test renvoie `true`, le code à l'intérieur des accolades est exécuté. Sinon, il ne l'est pas, et on passe au morceau de code suivant. Dans ce cas, on teste si la variable `guessCount` est égale à `1` (c'est-à-dire s'il s'agit du premier essai du joueur ou non)&nbsp;:

  ```js
  guessCount === 1;
  ```

  Si c'est le cas, nous faisons en sorte que le texte du paragraphe des propositions soit égal à «&nbsp;Propositions précédentes&nbsp;: ». Sinon, nous ne faisons rien.

- Ensuite, nous utilisons un littéral de gabarit pour ajouter la valeur courante de `userGuess` à la fin du paragraphe `guesses`, avec un espace vide entre chaque valeur.
- Le bloc suivant effectue plusieurs vérifications&nbsp;:
  - Le premier `if (){ }` vérifie si la proposition de l'utilisateur·rice est égale au `randomNumber` défini en haut de notre JavaScript. Si c'est le cas, le·la joueur·euse a deviné correctement et la partie est gagnée&nbsp;: on affiche donc un message de félicitations en vert, on efface le contenu de la boîte d'information «&nbsp;plus grand/plus petit&nbsp;» et on exécute une fonction appelée `setGameOver()`, que nous aborderons plus loin.
  - Ensuite, nous chaînons un autre test à la fin du précédent à l'aide d'une structure `else if (){ }`. Celui-ci vérifie s'il s'agit du dernier tour de l'utilisateur·rice. Si c'est le cas, le programme fait la même chose que dans le bloc précédent, mais avec un message de fin de partie au lieu d'un message de félicitations.
  - Le dernier bloc chaîné à la fin de ce code (le `else { }`) contient du code qui n'est exécuté que si aucun des deux autres tests ne renvoie _vrai_ (le·la joueur·euse n'a pas deviné juste, mais il·elle a encore des essais restants). Dans ce cas, on lui indique que sa proposition est incorrecte, puis on effectue un autre test conditionnel pour vérifier si la proposition était supérieure ou inférieure à la bonne réponse, et on affiche un message approprié pour indiquer «&nbsp;plus grand&nbsp;» ou «&nbsp;plus petit&nbsp;».

- Les trois dernières lignes de la fonction préparent l'envoi de la prochaine proposition. On ajoute 1 à la variable `guessCount` pour que le·la joueur·euse utilise un tour (`++` est une opération d'incrémentation — ajout de 1), puis on vide la valeur du champ texte du formulaire et on lui redonne le focus, prêt·e pour la prochaine proposition.

## Événements

À ce stade, nous avons une fonction `checkGuess()` bien implémentée, mais elle ne fait encore rien car nous ne l'avons pas appelée. Idéalement, nous voulons l'appeler lorsque le bouton «&nbsp;Proposer&nbsp;» est pressé, et pour cela nous devons utiliser un **événement**. Les événements sont des actions qui se produisent dans le navigateur — un clic sur un bouton, le chargement d'une page, la lecture d'une vidéo, etc. — auxquelles nous pouvons réagir en exécutant des blocs de code. Les **écouteurs d'événements** surveillent des événements spécifiques et appellent des **fonctions gestionnaires d'événements**, qui s'exécutent en réponse au déclenchement d'un événement.

Ajoutez la ligne suivante sous votre fonction `checkGuess()`&nbsp;:

```js
guessSubmit.addEventListener("click", checkGuess);
```

Ici, nous ajoutons un écouteur d'événement au bouton `guessSubmit`. Il s'agit d'une méthode qui prend deux valeurs d'entrée (appelées _arguments_) — le type d'événement à écouter (dans ce cas, `click`) sous forme de chaîne de caractères, et la fonction à exécuter lorsque l'événement se produit (ici, `checkGuess()`). Notez qu'il n'est pas nécessaire d'ajouter les parenthèses lors de l'écriture dans {{domxref("EventTarget.addEventListener", "addEventListener()")}}.

Enregistrez et actualisez votre code&nbsp;: votre exemple devrait maintenant fonctionner — jusqu'à un certain point. Le seul problème, c'est que si vous trouvez la bonne réponse ou que vous n'avez plus d'essais, le jeu va «&nbsp;casser&nbsp;» car nous n'avons pas encore défini la fonction `setGameOver()` qui doit être exécutée à la fin de la partie. Ajoutons maintenant ce code manquant pour compléter la fonctionnalité de l'exemple.

## Finir les fonctionnalités du jeu

Ajoutons maintenant la fonction `setGameOver()` à la fin de notre code, puis détaillons son fonctionnement. Ajoutez-la sous le reste de votre JavaScript&nbsp;:

```js
function setGameOver() {
  guessField.disabled = true;
  guessSubmit.disabled = true;
  resetButton = document.createElement("button");
  resetButton.textContent = "Démarrer une nouvelle partie";
  document.body.append(resetButton);
  resetButton.addEventListener("click", resetGame);
}
```

- Les deux premières lignes désactivent le champ texte du formulaire et le bouton en définissant leur propriété `disabled` à `true`. C'est nécessaire, car sinon l'utilisateur·rice pourrait soumettre d'autres propositions après la fin du jeu, ce qui fausserait tout.
- Les trois lignes suivantes génèrent un nouvel élément HTML {{htmlelement("button")}}, définissent son libellé sur «&nbsp;Démarrer une nouvelle partie&nbsp;» et l'ajoutent en bas du HTML existant.
- La dernière ligne ajoute un écouteur d'événement sur ce nouveau bouton&nbsp;: lorsqu'il est cliqué, une fonction appelée `resetGame()` est exécutée.

Nous devons maintenant définir `resetGame()` également&nbsp;! Ajoutez le code suivant, toujours à la fin de votre JavaScript&nbsp;:

```js
function resetGame() {
  guessCount = 1;

  const resetParas = document.querySelectorAll(".resultParas p");
  for (const resetPara of resetParas) {
    resetPara.textContent = "";
  }

  resetButton.parentNode.removeChild(resetButton);

  guessField.disabled = false;
  guessSubmit.disabled = false;
  guessField.value = "";
  guessField.focus();

  lastResult.style.backgroundColor = "white";

  randomNumber = Math.floor(Math.random() * 100) + 1;
}
```

Ce bloc de code assez long réinitialise complètement tous les paramètres comme au début du jeu, afin que le·la joueur·euse puisse rejouer.

Plus précisément, il&nbsp;:

- Remet la variable `guessCount` à 1.
- Vide tous les paragraphes d'information. On sélectionne tous les paragraphes à l'intérieur de `<div class="resultParas"></div>`, puis on les parcourt pour mettre leur `textContent` à `""` (une chaîne vide).
- Supprime le bouton de réinitialisation du code.
- Réactive les éléments du formulaire, vide et met le focus sur le champ texte, prêt pour une nouvelle proposition.
- Supprime la couleur d'arrière-plan du paragraphe `lastResult`.
- Génère un nouveau nombre aléatoire pour ne pas deviner le même nombre à nouveau&nbsp;!

**À ce stade, vous devriez avoir un jeu (simple) entièrement fonctionnel — félicitations&nbsp;!**

Pour finir, il nous reste à aborder quelques autres fonctionnalités importantes du code que vous avez déjà rencontrées, sans forcément vous en rendre compte.

## Boucles

Plus haut, nous avons mentionné les **boucles**, un concept très important en programmation, qui permet d'exécuter un morceau de code plusieurs fois de suite, jusqu'à ce qu'une certaine condition soit remplie.

Explorons un exemple basique pour illustrer ce principe. Retournez dans la [console JavaScript des outils de développement de votre navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools), collez le code suivant, puis appuyez sur <kbd>Entrée</kbd>/<kbd>Retour</kbd>&nbsp;:

```js
const fruits = ["pommes", "bananes", "cerises"];
for (const fruit of fruits) {
  console.log(fruit);
}
```

Que s'est-il passé&nbsp;? Les chaînes de caractères `'pommes', 'bananes', 'cerises'` ont été affichées dans votre console.

C'est grâce à la boucle. La ligne `const fruits = ['pommes', 'bananes', 'cerises'];` crée un tableau, c'est-à-dire une collection de valeurs (ici, des chaînes de caractères).

Nous utilisons ensuite une boucle [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of) pour parcourir chaque élément du tableau et exécuter du JavaScript dessus. La ligne `for (const fruit of fruits)` signifie&nbsp;:

1. Prendre la première valeur de `fruits` et la stocker dans une variable appelée `fruit`.
2. Exécuter le code entre les accolades `{ }` (dans ce cas, afficher la valeur de `fruit` dans la console).
3. Stocker la valeur suivante du tableau dans `fruit`, puis répéter l'étape 2, jusqu'à atteindre la fin du tableau `fruits`.

Regardons maintenant la boucle dans notre jeu de devinettes de nombres&nbsp;: le code suivant se trouve dans la fonction `resetGame()`&nbsp;:

```js
const resetParas = document.querySelectorAll(".resultParas p");
for (const resetPara of resetParas) {
  resetPara.textContent = "";
}
```

Ce code crée une variable contenant la liste de tous les paragraphes à l'intérieur de `<div class="resultParas">` en utilisant la méthode {{domxref("Document.querySelectorAll", "querySelectorAll()")}}, puis il parcourt chacun d'eux pour supprimer leur contenu textuel.

Notez que même si `resetPara` est une constante, il est possible d'en modifier les propriétés internes comme `textContent`.

## Conclusion

Voilà, vous avez terminé la construction de l'exemple&nbsp;: bravo&nbsp;! Essayez votre code final ou [testez notre version terminée ici <sup>(angl.)</sup>](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/first-splash/number-guessing-game.html). Si votre version ne fonctionne pas, comparez-la avec le [code source <sup>(angl.)</sup>](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html).

La prochaine leçon pourra aussi vous aider&nbsp;: nous y discuterons de ce qui peut mal se passer lors de l'écriture de code JavaScript, en nous référant au jeu «&nbsp;Deviner un nombre&nbsp;».

{{PreviousMenuNext("Learn_web_development/Core/Scripting/What_is_JavaScript", "Learn_web_development/Core/Scripting/What_went_wrong", "Learn_web_development/Core/Scripting")}}
