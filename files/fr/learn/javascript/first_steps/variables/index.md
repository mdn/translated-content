---
title: Stocker les informations nécessaires — les variables
slug: Learn/JavaScript/First_steps/Variables
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}

Après lecture des deux articles précédents, vous savez maintenant ce qu'est JavaScript, ce qu'il peut vous apporter, comment l'utiliser aux côtés d'autres technologies web et l'aspect de ses principales fonctionnalités vues de haut. Dans cet article, nous revenons aux fondements réels en examinant comment travailler avec le bloc de construction le plus basique du JavaScript — les variables.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vocabulaire courant de l'informatique, bases de HTML et CSS,
        compréhension de ce que fait JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>
        Se familiariser avec l'usage élémentaire des variables en JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Outils nécessaires

Tout au long de cet article, on vous demandera de saisir des lignes de code pour tester votre compréhension. Si vous vous servez du navigateur avec un ordinateur de bureau, l'endroit le plus approprié pour saisir les exemples de code est la console JavaScript du navigateur (voyez [Les outils de développement du navigateur](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) pour plus d'informations sur la manière d'accéder à ces outils).

Toutefois, nous avons aussi incorporé une console JavaScript dans cette page pour vous permettre d'y écrire le code au cas où vous n'utiliseriez pas un navigateur avec une console JavaScript facilement accessible, ou si vous estimez qu'une console incorporée est plus confortable.

## Qu'est ce qu'une variable&nbsp;?

Une variable est un conteneur pour une valeur, tel un nombre à utiliser pour une addition, ou une chaîne devant faire partie d'une phrase. Mais un aspect spécial des variables est que les valeurs contenues peuvent changer. Voyons un exemple simple&nbsp;:

```html
<button>Pressez moi</button>
```

```js
const button = document.querySelector("button");

button.onclick = function () {
  let name = prompt("Quel est votre nom&nbsp;?");
  alert("Salut " + name + ", sympa de vous voir&nbsp;!");
};
```

{{ EmbedLiveSample('Qu\'est_ce_qu\'une_variable_?', '100%', 50) }}

Dans cet exemple, presser le bouton déclenche l'exécution de quelques lignes de code. La première ligne affiche à l'écran une boîte priant l'utilisateur de saisir son nom et stocke la valeur entrée dans une variable. La deuxième affiche un message de bienvenue avec la valeur de la variable.

Pour comprendre le pratique de la chose, imaginons comment nous aurions du coder cet exemple sans utiliser de variable. Serait-ce comme cela&nbsp;?

```plain example-bad
let name = prompt('Quel est votre nom&nbsp;?');

if (name === 'Adam') {
  alert('Salut Adam, sympa de vous voir&nbsp;!');
} else if (name === 'Alan') {
  alert('Salut Alan, sympa de vous voir&nbsp;!');
} else if (name === 'Bella') {
  alert('Salut Bella, sympa de vous voir&nbsp;!');
} else if (name === 'Bianca') {
  alert('Salut Bianca, sympa de vous voir&nbsp;!');
} else if (name === 'Chris') {
  alert('Salut Chris, sympa de vous voir&nbsp;!');
}

// ... etc.
```

Peut-être ne comprenez‑vous pas (encore&nbsp;!) la syntaxe utilisée, mais vous l'imaginerez sans peine — si nous n'avions pas de variables à disposition, nous devrions implémenter un bloc de code géant qui vérifierait quel était le nom saisi, puis afficherait un message approprié à ce nom. Cela est évidemment inefficace (le code est déjà plus volumineux avec seulement quatre possibilités) et il ne fonctionnerait certainement pas — il n'est pas possible de stocker tous les choix possibles.

Les variables sont essentielles et à mesure que vous en apprendrez plus sur JavaScript, elles deviendront une seconde nature pour vous.

Une autre particularité des variables&nbsp;: elle peuvent contenir pratiquement de tout — pas uniquement des chaînes ou des nombres. Elles peuvent aussi contenir des données complexes et même des fonctions, ce qui permet de réaliser des choses étonnantes. Vous en apprendrez plus à ce propos au long de ce parcours.

> **Note :** Nous disons que les variables contiennent des valeurs. C'est un distingo important. Les variables ne sont pas les valeurs elles‑mêmes : ce sont des conteneurs pour ces valeurs. Vous pouvez vous les représenter comme une boîte en carton dans laquelle il est possible de ranger des choses.

![](boxes.png)

## Déclarer une variable

Avant de se servir d'une variable, il faut d'abord la créer — plus précisément, nous disons _déclarer la variable_. Pour ce faire, nous saisissons le mot‑clé `var` ou `let` suivi du nom que vous voulez donner à la variable&nbsp;:

```js
let myName;
let myAge;
```

Dans ces lignes, nous venons de créer deux variables nommées respectivement `myName` et `myAge`. Saisissez les maintenant dans la console de votre navigateur, ou dans la console au bas de la page (Vous [ouvrez cette console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) soit dans un onglet séparé, soit dans une fenêtre selon votre préférence). Après cela, essayez de créer une variable (ou deux) en choisissant vous même le nom.

```html hidden
<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>JavaScript console</title>
    <style>
      * {
        box-sizing: border-box;
      }

      html {
        background-color: #0c323d;
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
        background: #0c323d;
        color: #809089;
      }

      div {
        clear: both;
      }
    </style>
  </head>
  <body></body>

  <script>
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement("div");
      var inputPara = document.createElement("p");
      var inputForm = document.createElement("input");

      inputDiv.setAttribute("class", "input");
      inputPara.textContent = ">";
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      if (document.querySelectorAll("div").length > 1) {
        inputForm.focus();
      }

      inputForm.addEventListener("change", executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch (e) {
        var result = "error — " + e.message;
      }

      var outputDiv = document.createElement("div");
      var outputPara = document.createElement("p");

      outputDiv.setAttribute("class", "output");
      outputPara.textContent = "Result: " + result;
      outputDiv.appendChild(outputPara);
      document.body.appendChild(outputDiv);

      e.target.disabled = true;
      e.target.parentNode.style.opacity = "0.5";

      createInput();
    }

    createInput();
  </script>
</html>
```

{{ EmbedLiveSample('Déclarer_une_variable', '100%', 300) }}

> **Note :** En JavaScript, le code de toute instruction doit se terminer par un point‑virgule (`;`) — il peut fonctionner correctement sans ce point‑virgule pour des lignes isolées, mais ce ne sera probablement pas le cas si vous écrivez plusieurs lignes de code ensemble. Prenez l'habitude de mettre ce point‑virgule.

Vous pouvez maintenant tester si ces valeurs existent dans l'environnement d'exécution en saisissant simplement le nom de ces variables, par exemple

```js
myName;
myAge;
```

Actuellement elles ne contiennent aucune valeur&nbsp;; ce sont des conteneurs vides. Quand vous entrez les noms des variables, vous obtiendrez la valeur `undefined` en retour. Si elles n'existent pas, vous aurez un message d'erreur — essayez en saisissant

```js
scoobyDoo;
```

> **Note :** Ne confondez pas une variable qui existe mais sans valeur définie avec une variable qui n'existe pas du tout — ce sont deux choses tout à fait différentes. Dans l'analogie des boîtes, _ne pas exister_ correspond à l'absence de boîte ; _valeur indéfinie_ correspond à une boîte vide.

## Initialisation d'une variable

Une fois la variable déclarée, vous pouvez l'initialiser avec une valeur. On réalise cela en saisissant le nom de la variable, suivi d'un signe égale (`=`), lui-même suivi de la valeur souhaitée pour la variable. Par exemple&nbsp;:

```js
myName = "Chris";
myAge = 37;
```

Revenez à la console maintenant et saisissez‑y ces deux lignes. Constatez que la console renvoie en confirmation la valeur assignée à la variable dans chaque cas. Vous pouvez, à nouveau, faire renvoyer par la console les valeurs de variable en saisissant simplement son nom dans la console — essayez encore&nbsp;:

```js
myName;
myAge;
```

Il est possible de déclarer et initialiser une variable en même temps, comme ceci&nbsp;:

```js
let myDog = "Rover";
```

C'est probablement ce que vous ferez la plupart du temps, c'est plus rapide que d'effectuer ces deux actions sur deux lignes distinctes.

## La différence entre `var` et `let`

A ce moment de votre apprentissage, vous vous demandez sans doute : mais quel besoin de deux mot-clé pour définir une variable ? Pourquoi `var` et `let` ?

Les raisons sont d'ordre historique. A l'origine, quand Javascript fut créé, il n'y avait que `var`. Cela fonctionnait plutôt bien dans la plupart des cas, avec parfois quelques surprises — l'implémentation étonnante du `var` peut amener à une mauvaise interprétation, voire à des soucis. Ainsi, `let` a été ajouté dans les versions plus récentes de Javascript, un nouveau mot-clé pour créer des variables, avec un fonctionnement différent de celui du `var`, réglant ainsi les difficultés évoquées ci-dessus.

Nous évoquons ci-dessous quelques unes de ces différences, sans pouvoir faire ici le tour complet de la question. Vous comprendrez mieux la différence entre ces deux constructions au fur et à mesure de votre progression en JavaScript (si vous ne pouvez pas attendre, consultez la page de référence du `let`).

Pour commencer, si vous écrivez un programme JavaScript multi-lignes qui déclare et initialise une variable, vous pouvez déclarez une variable avec le mot-clé `var` après l'avoir initialisée. Cela fonctionnera. Par exemple :

```js
myName = "Chris";

function logName() {
  console.log(myName);
}

logName();

var myName;
```

> **Note :** l'exemple ci-dessus ne fonctionnera pas si on tape des lignes une à une dans la console, mais seulement quand on exécute un script JavaScript multi-lignes dans un document web.

Ce processus se nomme **«** **hoisting&nbsp;»** (en français, "hissage") — lisez [var hoisting](/fr/docs/Web/JavaScript/Reference/Statements/var#var_hoisting) pour plus de précisions sur ce sujet.

Le hissage ne fonctionne plus avec `let`. Si on remplaçait var par let dans l'exemple ci-dessus, l'exécution du script planterait sur une erreur. C'est une bonne chose — déclarer une variable après l'avoir initialisé produit un code obscur, difficile à lire.

Deuxièmement, quand vous utilisez `var`, vous pouvez déclarer la même variable autant de fois que vous le désirez, avec `let` c'est impossible. Le code suivant s'exécute sans erreur :

```js
var myName = "Chris";
var myName = "Bob";
```

Celui là produit une erreur sur la seconde ligne&nbsp;:

```js
let myName = "Chris";
let myName = "Bob";
```

Le code correct serait :

```js
let myName = "Chris";

myName = "Bob";
```

Encore une fois, c'est une décision sensée des concepteurs du langage. Il n'y a aucune bonne raison de redéclarer une variable — cela rend les choses obscures.

Pour ces raisons, et d'autres, nous recommandons d'utiliser `let` plutôt que `var`. Il n'y a pas de bonne raison d'utiliser `var`, sauf à rechercher la compatibilité avec de vieilles versions d'Internet Explorer (pas de support du `let` avant la version 11 ; le support de `let` par le navigateur Edge ne pose pas de problème).

## Mise à jour d'une variable

Une fois la variable initialisée avec une valeur, vous pouvez simplement modifier (ou mettre à jour) cette valeur en lui assignant une nouvelle valeur. Entrez ces deux lignes dans la console&nbsp;:

```js
myName = "Bob";
myAge = 40;
```

### Aparté concernant les règles de nommage des variables

Vous pouvez nommer une variable comme vous l'entendez, mais il y a des restrictions. Généralement, il convient de se limiter à l'emploi des caractères latins (0-9, a-z, A-Z) et du underscore ( \_ ).

- N'utilisez pas d'autres caractères&nbsp;; ils pourraient entraîner des erreurs ou être difficiles à comprendre pour un auditoire international.
- N'utilisez pas le underscore comme premier caractère d'un nom de variable — cette façon d'opérer est utilisée dans certaines constructions JavaScript pour signer certaines spécificités&nbsp;; il pourrait y avoir confusion.
- Ne mettez pas un chiffre en début de nom de variable. Ce n'est pas permis et provoque une erreur.
- Une convention sûre, nommée ["lower camel case"](https://en.wikipedia.org/wiki/CamelCase#Variations_and_synonyms) (dos de chameau), consiste à accoler plusieurs mots en mettant le premier en minuscules les suivants commençant par une majuscule. Dans cet article, nous avons adopté cette convention pour les noms de variables.
- Prenez des noms de variable intuitifs, décrivant les données que la variable contient. Évitez les noms se limitant à un caractère ou à l'inverse des noms trop longs, trop verbeux.
- Les variables sont sensibles à la casse — donc `myage` et `myAge` correspondent à deux variables différentes.
- Enfin les _mots réservés_ du langage JavaScript ne peuvent pas être choisis comme nom pour une variable — les mots réservés sont les mots qui font effectivement partie de la syntaxe du JavaScript. Donc, vous ne pouvez pas utiliser des mots comme `var`, `function`, `let` ou `for` comme noms de variable. Les navigateurs les reconnaîtront en tant qu'éléments de code, et cela déclenchera des erreurs.

> **Note :** Une liste exhaustive des mots réservés est proposée dans la page [Lexical grammar — keywords](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#keywords).

Exemples de noms corrects&nbsp;:

```plain example-good
age
myAge
init
initialColor
finalOutputValue
audio1
audio2
```

Exemples de noms incorrects (soit illégal, soit non conforme aux recommandations) :

```plain example-bad
1
a
_12
myage
MYAGE
var
document
skjfndskjfnbdskjfb
thisisareallylongstupidvariablenameman
```

Parmi ces noms, les suivants déclenchent une `SyntaxError` &nbsp;:

```js example-bad
1; //la variable commence par un chiffre
var; //mot réservé
document; //mot réservé
```

Essayez maintenant de créer quelques variables supplémentaires en tenant compte de ce qui précède.

## Types de variables

Plusieurs types de données peuvent être stockés dans des variables. Dans cette section, nous allons les décrire brièvement, puis dans les prochains articles, nous vous en dirons plus.

Jusqu'à présent, nous avons vu les deux types suivants, mais il y en a d'autres.

### Nombres

Vous pouvez stocker des nombres dans des variables, soit des nombres entiers comme 30 ou des nombres décimaux comme 2.456 (appelés aussi nombres à virgule flottante). Il n'est pas nécessaire de déclarer le type de la variable dans JavaScript, contrairement à d'autres langages de programmation. Lorsque vous donnez une valeur numérique à une variable, ne la mettez pas entre guillemets.

```js
var myAge = 17;
```

### Chaînes

Les chaînes sont des mots ou des suites de mots. Quand vous stockez dans une variable une valeur chaîne, vous devez la mettre entre guillemets simples ou doubles, sinon JavaScript va tenter de l'interpréter en tant qu'un autre nom de variable.

```js
var dolphinGoodbye = "So long and thanks for all the fish";
```

### Booléens

Les booléens sont des valeurs true/false (vrai/faux) — elles ne peuvent prendre que deux valeurs: `true` ou `false`. Elles sont généralement utilisées pour tester une condition, à la suite de laquelle le code est exécuté de manière appropriée. Ainsi, par exemple, un cas simple pourrait être&nbsp;:

```js
var iAmAlive = true;
```

Toutefois, en réalité, un booléen sera plutôt utilisé ainsi&nbsp;:

```js
var test = 6 < 3;
```

Cette expression utilise l'opérateur «&nbsp;inférieur à&nbsp;» (`<`) pour tester si 6 est plus petit que 3. Comme vous pouvez vous y attendre, cette expression renverra `false`, car 6 n'est pas plus petit que 3&nbsp;! Vous en apprendrez bien plus à propos de ces opérateurs plus loin dans ce cours.

### Tableaux

Un tableau est un objet unique contenant plusieurs valeurs entre crochets séparées par des virgules. Saisissez les lignes suivantes dans la console&nbsp;:

```js
var myNameArray = ["Chris", "Bob", "Jim"];
var myNumberArray = [10, 15, 40];
```

Un fois ces tableaux définis, vous pouvez avoir accès à chaque valeur en fonction de leur emplacement dans le tableau. Voyez ces lignes&nbsp;:

```js
myNameArray[0]; // renverra 'Chris'
myNumberArray[2]; // renverra 40
```

La valeur entre crochets précise l'index correspondant à la position de la valeur que vous souhaitez voir renvoyée. Vous remarquerez que les tableaux en JavaScript sont indexés à partir de zéro&nbsp;: le premier élément a l'index 0.

Vous en apprendrez beaucoup plus au sujet des tableaux dans un article suivant.

### Objets

En programmation, un objet est une structure de code qui modélise un objet du réel. Vous pouvez avoir un objet simple représentant une place de parking avec sa largeur et sa profondeur ou bien un objet représentant une personne avec comme données son nom, sa taille, son poids, son vernaculaire, comment le contacter, et plus encore.

Entrez la ligne suivant dans la console de votre explorateur&nbsp;:

```js
var dog = { name: "Spot", breed: "Dalmatian" };
```

Pour récupérer une information stockée dans un objet, vous pouvez utiliser la syntaxe suivante&nbsp;:

```js
dog.name;
```

Nous en resterons là avec les objets pour le moment — vous en saurez plus à leur propos dans un module ultérieur.

## Typage faible

JavaScript est un «&nbsp;langage faiblement typé&nbsp;», ce qui veut dire que, contrairement à d'autres langages, vous n'êtes pas obligé de préciser quel est le type de donnée que doit contenir une variable (par ex. nombres, chaînes, tableaux, etc).

Par exemple, si vous déclarez une variable et si vous y placez une valeur entre guillemets, le navigateur la traitera comme étant une chaîne&nbsp;:

```js
var myString = "Hello";
```

Ce sera toujours une chaîne, même si ce sont des nombres, donc soyez prudents&nbsp;:

```js
var myNumber = "500"; // oops, c'est toujours une chaîne
typeof myNumber;
myNumber = 500; // mieux — maintenant c'est un nombre
typeof myNumber;
```

Entrez ces quatre lignes dans la console les unes à la suite des autres, et voyez les résultats. Notez l'emploi de la fonction spéciale `typeof()` — elle renvoie le type de donnée placé dans la variable. À son premier appel, elle renverra `string`, car à ce stade la variable `myNumber` contient la chaîne `'500'`. Observez bien et voyez ce que la fonction renvoie au second appel.

## Résumé

Maintenant, nous en savons un peu plus à propos des variables JavaScript, en particulier comment les créer. Dans le prochain article, nous verrons en détail les nombres et comment effectuer les opérations mathématiques élémentaires.

{{PreviousMenuNext("Learn/JavaScript/First_steps/What_went_wrong", "Learn/JavaScript/First_steps/Math", "Learn/JavaScript/First_steps")}}
