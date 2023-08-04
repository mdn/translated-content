---
title: Méthodes utiles pour les chaînes de caractères
slug: Learn/JavaScript/First_steps/Useful_string_methods
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}

À présent que nous avons vu les bases de la manipulation des chaînes de caractères, allons un cran plus loin et commençons à imaginer les opérations utiles que nous pourrions faire sur les chaînes de caractères avec les méthodes intégrées&nbsp;: trouver la longueur d'une chaîne, assembler ou couper des chaînes, substituer un caractère à un autre dans une chaîne, et plus encore.

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
        Comprendre que les chaînes de caractères sont des objets, et apprendre à
        utiliser certaines méthodes basiques disponibles sur ces objets pour
        manipuler les chaînes.
      </td>
    </tr>
  </tbody>
</table>

## Les chaînes de caractères sont des objets

Nous l'avons déjà dit, et nous le redirons — _tout_ est objet en JavaScript. Lorsque vous créez une chaîne, par exemple en utilisant :

```js
let string = "Ceci est une chaîne";
```

votre variable devient une instance de l'objet `String`, et par conséquent possède un grand nombre de propriétés et de méthodes associées. Allez sur la page de l'objet {{jsxref("String")}} et regardez la liste sur le côté de la page&nbsp;!

**Avant que votre cervelle ne commence à bouillir, pas de panique !** Vous n'avez vraiment pas besoin de connaître la plupart des méthodes de cette liste au début de cet apprentissage. Mais il est probable que vous en utiliserez certaines assez souvent. Nous allons les voir maintenant.

Entrez quelques exemples dans une console vierge. En voici une ci-dessous (vous pouvez aussi [ouvrir cette console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) dans un onglet ou une fenêtre séparés, ou utiliser la [console de développement du navigateur](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) si vous préférez).

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

{{ EmbedLiveSample('Les_chaînes_de_caractères_sont_des_objets', '100%', 300) }}

### Trouver la longueur d'une chaîne

C'est facile — il suffit d'utiliser la propriété {{jsxref("String.prototype.length", "length")}}. Entrez ceci&nbsp;:

```js
let browserType = "mozilla";
browserType.length;
```

Cette commande doit renvoyer le nombre 7, parce que «&nbsp;mozilla&nbsp;» comporte 7 caractères. C'est utile pour de nombreuses raisons ; par exemple, vous pourriez avoir besoin de trouver les longueurs d'une série de noms pour les afficher par taille ou faire savoir à un utilisateur qu'il a entré un nom trop long dans un champ de formulaire à partir du moment où il dépasse une certaine taille.

### Retrouver un caractère donné dans une chaîne

Dans le même ordre d'idées, il est possible de faire renvoyer tout caractère d'une chaîne avec **la notation crochets** — c'est-à-dire en ajoutant des crochets (`[]`) à la fin du nom de la variable. Entre les crochets, mettez le rang du caractère à retrouver&nbsp;; par exemple, pour retrouver le premier caractère, vous devez écrire ceci&nbsp;:

```js
browserType[0];
```

Les ordinateurs décomptent à partir de 0, pas de 1&nbsp;! Pour retrouver le dernier caractère de _n'importe quelle_ chaîne, on peut utiliser la commande qui suit&nbsp;; elle combine cette technique avec la propriété `length` que nous avons vue plus haut&nbsp;:

```js
browserType[browserType.length - 1];
```

La longueur de «&nbsp;mozilla&nbsp;» est de 7 caractères, mais comme le décompte se fait à partir de 0, la position du caractère est 6, d'où la nécessité d'écrire `length-1`. Vous pourrez utiliser cette propriété pour, par exemple, trouver la première lettre d'une série de chaînes et les trier alphabétiquement.

### Trouver une sous-chaîne à l'intérieur d'une chaîne et l'extraire

1. Parfois, vous aurez besoin de trouver si une chaîne est présente à l'intérieur d'une autre chaîne plus grande (on dit en général _si une sous-chaîne est présente à l'intérieur d'une chaîne_). La méthode {{jsxref("String.prototype.indexOf()", "indexOf()")}} permet de le faire&nbsp;; elle prend un unique ({{glossary("parameter")}}) — la sous-chaîne recherchée. Essayez&nbsp;:

   ```js
   browserType.indexOf("zilla");
   ```

   La commande donne 2 comme résultat, car la sous-chaîne «&nbsp;zilla&nbsp;» commence à la position 2 (0, 1, 2 — donc au troisième caractère) dans «&nbsp;mozilla&nbsp;». Un tel code s'utilise pour filtrer des chaînes. Par exemple, vous pourriez avoir une liste d'adresses web et ne vouloir afficher que celles qui contiennent «&nbsp;mozilla ».

2. On peut faire cela autrement, peut-être plus efficacement encore. Écrivez&nbsp;:

   ```js
   browserType.indexOf("vanilla");
   ```

   Cela doit vous donner `-1` comme résultat — renvoyé quand la sous-chaîne, en l'occurence «&nbsp;vanilla&nbsp;», n'est pas trouvée dans la chaîne principale.

   Vous pouvez utiliser cette propriété pour trouver tous les cas de chaînes **ne** **contenant** **pas** la sous-chaîne «&nbsp;mozilla&nbsp;», ou bien **la contenant**, si vous utilisez l'opérateur négation logique, tel que montré ci-dessous. Vous pourriez faire quelque chose comme :

   ```js
   if (browserType.indexOf("mozilla") !== -1) {
     // faire des tas de choses avec la chaîne
   }
   ```

3. Lorsque vous savez où la sous-chaîne commence à l'intérieur de la chaîne, et savez à quel caractère elle prend fin, vous pouvez utiliser {{jsxref("String.prototype.slice()", "slice()")}} pour l'extraire. Voyez ce code&nbsp;:

   ```js
   browserType.slice(0, 3);
   ```

   Il renvoie «&nbsp;moz&nbsp;» — le premier paramètre est la position du caractère où doit commencer l'extraction, et le second paramètre est la position du caractère se trouvant après le dernier à extraire. Ainsi, l'extraction va de la première position à la dernière, celle-ci non comprise. On peut dire, dans notre cas, que le second paramètre est égal à la longueur de la chaîne retournée.

4. Également, si vous souhaitez extraire tous les caractères après un caractère donné jusqu'à la fin de la chaîne, vous n'avez pas à mettre le second paramètre&nbsp;! Il suffit d'indiquer la position du caractère à partir duquel vous voulez extraire les caractères restants dans la chaîne. Essayez la commande&nbsp;:

   ```js
   browserType.slice(2);
   ```

   Elle renvoie «&nbsp;zilla&nbsp;» — le caractère à la position 2 est «&nbsp;z&nbsp;» et comme nous n'avons pas mis de second paramètre, la sous-chaîne retournée comporte tous les caractères restants de la chaîne.

> **Note :** Le second paramètre de `slice()` est optionnel : s'il n'est pas defini, l'extraction va jusqu'à la fin de la chaîne originale. Il existe aussi d'autres options, allez à la page de {{jsxref("String.prototype.slice()", "slice()")}} pour voir ces autres options.

### Changer la casse

Les méthodes {{jsxref("String.prototype.toLowerCase()", "toLowerCase()")}} et {{jsxref("String.prototype.toUpperCase()", "toUpperCase()")}} s'appliquent à une chaîne et en convertissent tous les caractères, respectivement en minuscules ou en majuscules. C'est utile si, par exemple, vous souhaitez normaliser toutes les données entrées par des utilisateurs avant de les stocker dans une base de données.

Essayons d'entrer les lignes suivantes et voyons ce qui se passe :

```js
let radData = "My NaMe Is MuD";
radData.toLowerCase();
radData.toUpperCase();
```

### Actualiser des parties de chaîne

Vous pouvez remplacer une sous-chaîne à l'intérieur d'une chaîne avec une autre sous-chaîne à l'aide de la méthode {{jsxref("String.prototype.replace()", "replace()")}}. Cela fonctionne très simplement au niveau basique, bien qu'il soit possible de faire des choses plus avancées, mais nous ne y attarderons pas maintenant.

La méthode prend deux paramètres — la chaîne que vous voulez remplacer et la chaîne avec laquelle vous voulez la remplacer. Essayez avec cet exemple :

```js
browserType.replace("moz", "van");
```

À noter&nbsp;: pour que, dans un programme réel, la variable `browserType` reflète effectivement la valeur actualisée, il faut assigner à la valeur de la variable le résultat de l'opération ; cette dernière ne met pas à jour automatiquement la valeur de la sous-chaîne. Pour ce faire, il faut écrire&nbsp;: `browserType = browserType.replace('moz','van');`.

## Apprendre en pratiquant

Dans cette section, vous allez pouvoir vous entraîner à écrire du code de manipulation de chaîne. Dans chacun des exercices ci-dessous, nous avons un tableau de chaînes, une boucle qui traîte chaque valeur dans le tableau et l'affiche dans une liste à puces. Vous n'avez pas besoin de comprendre comment fonctionnent les tableaux ou les boucles dès maintenant — cela vous sera expliqué dans de prochains articles. Tout ce dont vous avez besoin dans chaque cas est d'écrire le code qui va renvoyer les chaînes dans le format souhaité.

Chaque exemple est accompagné d'un bouton «&nbsp;Réinitialiser&nbsp;», que vous pouvez utiliser pour réinitialiser le code si vous faites une erreur et que vous ne parvenez pas à la corriger, et un bouton «&nbsp;Montrer la solution&nbsp;» sur lequel vous pouvez cliquer pour afficher une réponse possible si jamais vous êtes vraiment bloqué.

### Filtrer des messages de vœux

Dans ce premier exercice, nous commencerons simplement — nous avons un tableau de carte de voeux, mais nous voulons les trier pour ne lister que les messages concernant Noël. Nous attendons de vous que vous utilisiez un test conditionnel à l'intérieur d'une structure `if( ... )`, pour tester chaque chaîne et ne l'afficher dans la liste que si elle contient un message concernant Noël.

1. Réfléchissez d'abord à comment vérifier que le message concerne Noël. Quelle chaîne est présente dans tous ces messages, et quelle méthode pourriez-vous utiliser pour en tester la présence ?
2. Il vous faudra alors écrire un test conditionnel sous la forme _opérande1 opérateur opérande2_. La chose à gauche est-elle égale à la chose à droite ? Ou dans notre cas, l'appel de méthode de gauche renvoie-t-il le résultat de droite ?
3. Conseil : dans notre cas, il est probablement plus utile de tester si le résultat de l'appel de notre méthode _n'est pas égal_ à un certain résultat.

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 290px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (var i = 0; i < greetings.length; i++) {
  var input = greetings[i];
  // Your conditional test needs to go inside the parentheses
  // in the line below, replacing what's currently there
  if (greetings[i]) {
    var result = input;
    var listItem = document.createElement('li');
    listItem.textContent = result;
    list.appendChild(listItem);
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar greetings = ['Happy Birthday!',\n                 'Merry Christmas my love',\n                 'A happy Christmas to all the family',\n                 'You\\'re all I want for Christmas',\n                 'Get well soon'];\n\nfor(var i = 0; i < greetings.length; i++) {\n var input = greetings[i];\n if(greetings[i].indexOf('Christmas') !== -1) {\n    var result = input;\n    var listItem = document.createElement('li');\n    listItem.textContent = result;\n    list.appendChild(listItem);\n  }\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Filtrer_des_messages_de_vœux', '100%', 490) }}

### Remettre les majuscules

Dans cet exercice, nous avons des noms des villes du Royaume-Uni, mais les majuscules ne sont pas au bon endroit. Nous souhaitons modifier les noms pour qu'ils soient en minuscules à l'exception de la première lettre qui doit être une majuscule. Une bonne manière de faire ceci :

1. Convertissez la totalité de la chaîne contenue dans la variable `input` en minuscules et stockez-la dans une nouvelle variable.
2. Récupérez la première lettre de la chaîne dans cette nouvelle variable et stockez-la dans une autre variable.
3. En utilisant la dernière variable comme une sous-chaîne, remplacez la première lettre de la chaîne en minuscules par la première lettre de la chaîne en minuscules transformé en majuscules. Stockez le résultat de cette procédure de remplacement dans une autre nouvelle variable.
4. Changez la valeur de la variable `result` afin qu'elle soit égale au résultat final plutôt qu'à `input`.

> **Note :** Un conseil — les paramètres des méthodes de chaîne n'ont pas besoin d'être des chaînes, elle peuvent aussi être des variables, ou même des variables avec une méthode invoquée sur elles.

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 250px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];
for(var i = 0; i < cities.length; i++) {
  var input = cities[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];\n\nfor(var i = 0; i < cities.length; i++) {\n var input = cities[i];\n var lower = input.toLowerCase();\n var firstLetter = lower.slice(0,1);\n var capitalized = lower.replace(firstLetter,firstLetter.toUpperCase());\n var result = capitalized;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Remettre_les_majuscules', '100%', 450) }}

### Créer de nouvelles chaînes à partir de morceaux

Dans ce dernier exercice, le tableau contient un lot de chaînes contenant des informations à propos d'arrêts de train dans le nord de l'Angleterre. Les chaînes sont des éléments de données contenant le code en trois lettres de l'arrêt, suivi par des données lisibles par machine, suivi par un point-virgule, et enfin le nom de la station lisible par un humain. Par exemple :

```
MAN675847583748sjt567654;Manchester Piccadilly
```

Nous voulons extraire le code de la station et son nom, et les associer dans une chaîne avec la structure suivante :

```
MAN: Manchester Piccadilly
```

Nous vous recommandons de procéder de la manière suivante :

1. Extraire le code de trois lettres de la station et le stocker dans une nouvelle variable.
2. Trouver la position du caractère point-virgule.
3. Extraire le nom de la station lisible par un humain en utilisant la position du caractère point virgule comme référence, et le stocker dans une nouvelle variable.
4. Concaténer les deux nouvelles variables et une chaîne pour fabriquer la chaîne finale.
5. Changer la valeur de la variable `result` pour qu'elle soit égale à la chaîne finale, plutôt qu'à `input`.

```html hidden
<div class="output" style="min-height: 125px;">
  <ul></ul>
</div>

<textarea id="code" class="playable-code" style="height: 285px;">
var list = document.querySelector('.output ul');
list.innerHTML = '';
var stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (var i = 0; i < stations.length; i++) {
  var input = stations[i];
  // write your code just below here

  var result = input;
  var listItem = document.createElement('li');
  listItem.textContent = result;
  list.appendChild(listItem);
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener("click", function () {
  textarea.value = code;
  updateCode();
});

solution.addEventListener("click", function () {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution =
  "var list = document.querySelector('.output ul');\nlist.innerHTML = '';\nvar stations = ['MAN675847583748sjt567654;Manchester Piccadilly',\n                'GNF576746573fhdg4737dh4;Greenfield',\n                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',\n                'SYB4f65hf75f736463;Stalybridge',\n                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];\n\nfor(var i = 0; i < stations.length; i++) {\n var input = stations[i];\n var code = input.slice(0,3);\n var semiC = input.indexOf(';');\n var name = input.slice(semiC + 1);\n var result = code + ': ' + name;\n var listItem = document.createElement('li');\n listItem.textContent = result;\n list.appendChild(listItem);\n}";

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);
```

{{ EmbedLiveSample('Créer_de_nouvelles_chaînes_à_partir_de_morceaux', '100%', 485) }}

## Conclusion

Il n'est pas possible d'éluder le fait qu'il est très important de savoir manipuler des mots et des phrases lorsqu'on programme — tout particulièrement en JavaScript, dans la mesure où les sites web servent à la communication entre les personnes. Cet article vous a indiqué, pour l'instant, les bases à connaître pour manipuler les chaînes. Ce sera utile lorsque vous aborderez des sujets plus complexes à l'avenir. Pour suivre, nous allons nous intéresser au dernier grand type de données sur lequel nous devons nous concentrer à court terme — les tableaux.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps/Arrays", "Learn/JavaScript/First_steps")}}
