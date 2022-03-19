---
title: Les tableaux
slug: Learn/JavaScript/First_steps/Arrays
tags:
  - Arrays
  - Article
  - Beginner
  - CodingScripting
  - JavaScript
  - Join
  - Learn
  - Pop
  - Push
  - l10n:priority
  - shift
  - split
  - unshift
translation_of: Learn/JavaScript/First_steps/Arrays
original_slug: Learn/JavaScript/First_steps/tableaux
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

Dans le dernier article de ce module, nous examinerons les tableaux — une façon de stocker proprement une liste d'éléments de données sous un seul nom de variable. Ici nous verrons pourquoi c'est utile, puis nous apprendrons comment créer un tableau, y retrouver, y ajouter ou en enlever les éléments dedans, et quelques à‑côtés en bonus.

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
        Comprendre ce que sont les tableaux et savoir comment les manipuler en
        JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Qu'est‑ce qu'un tableau&nbsp;?

Les tableaux sont généralement décrits comme des "objets de type liste" ; un tableau est un objet contenant plusieurs valeurs. Les objets tableau peuvent être stockés dans des variables et traités de la même manière que tout autre type de valeur, la différence étant que nous pouvons accéder à chaque valeur du tableau individuellement, et faire des choses super utiles et efficaces avec la liste des valeurs, comme boucler et faire la même chose pour chaque valeur. Peut-être que nous avons une série d'articles et leurs prix stockés dans un tableau, et nous voulons les parcourir tous et les imprimer sur une facture, tout en totalisant tous les prix ensemble et en imprimant le prix total en bas.

Sans tableaux, nous devrions stocker chaque valeur dans une variable séparée, puis appeler le code qui effectue l'affichage ou l'impression, puis ajouter séparément chaque élément. Ce serait plus long à écrire, moins efficace et cela comporterait plus de risques d'erreurs. Si nous avions 10 articles à ajouter à la facture, ce serait déjà assez mauvais, mais qu'en serait-il de 100 articles ou de 1000&nbsp;? Nous reviendrons sur cet exemple plus loin dans l'article.

Comme précédemment, initions‑nous aux bases pratiques des tableaux en entrant quelques exemples dans une console JavaScript. En voici une plus bas (vous pouvez aussi [ouvrir cette console](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/index.html) dans un onglet ou une fenêtre séparés ou utiliser la [console développeur de l'explorateur](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) si vous préférez).

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>JavaScript console</title>
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
    var geval = eval;
    function createInput() {
      var inputDiv = document.createElement('div');
      var inputPara = document.createElement('p');
      var inputForm = document.createElement('input');

      inputDiv.setAttribute('class','input');
      inputPara.textContent = '>';
      inputDiv.appendChild(inputPara);
      inputDiv.appendChild(inputForm);
      document.body.appendChild(inputDiv);

      if(document.querySelectorAll('div').length > 1) {
        inputForm.focus();
      }

      inputForm.addEventListener('change', executeCode);
    }

    function executeCode(e) {
      try {
        var result = geval(e.target.value);
      } catch(e) {
        var result = 'error — ' + e.message;
      }

      var outputDiv = document.createElement('div');
      var outputPara = document.createElement('p');

      outputDiv.setAttribute('class','output');
      outputPara.textContent = 'Result: ' + result;
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

{{ EmbedLiveSample('Qu\'est‑ce_qu\'un_tableau_?', '100%', 300) }}

### Créer un tableau

On définit les valeurs d'un tableau par une liste d'éléments entre crochets droits, séparés par des virgules.

1.  Disons que nous voulons mettre une liste d'achats dans un tableau — nous devons opérer comme suit. Entrez les lignes ci‑après dans la console&nbsp;:

    ```js
    let shopping = ['pain', 'lait', 'fromage', 'houmous', 'nouilles'];
    shopping;
    ```

2.  Dans ce cas, chaque élément du tableau est une chaîne, mais gardez en tête que vous pouvez stocker n'importe quel élément dans un tableau — chaîne, nombre, objet, autre variable et même d'autres tableaux. Vous pouvez également mélanger et assortir les types d'articles — il n'est pas obligatoire que ce soient tous des nombres, des chaînes, etc. Essayez ceci&nbsp;:
3.  ```js
    let sequence = [1, 1, 2, 3, 5, 8, 13];
    let random = ['arbre', 795, [0, 1, 2]];
    ```
4.  Créez donc quelques tableaux de votre cru avant de continuer.

### Accès aux éléments de tableau et modification de ceux‑ci

Vous pouvez avoir accès isolément aux éléments dans un tableau en utilisant la notation crochet, de la même façon que nous avons eu [accès aux lettres dans une chaîne](/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods#retrieving_a_specific_string_character).

1.  Entrez ceci dans la console&nbsp;:

    ```js
    shopping[0];
    // renvoie "pain"
    ```

2.  Vous pouvez aussi modifier un élément dans un tableau en donnant simplement une nouvelle valeur à l'élément. Essayez ceci&nbsp;:

    ```js
    shopping[0] = 'crème de sésame';
    shopping;
    // shopping renvoie maintenant [ "crème de sésame", "lait", "fromage", "houmous", "nouilles" ]
    ```

    > **Note :** Nous l'avons déjà dit, mais enseigner c'est répéter — les ordinateurs commencent les décomptes à partir de 0&nbsp;!

3.  Notez qu'un tableau à l'intérieur d'un tableau est appelé un tableau multidimensionnel. Vous accédez à un des éléments de ce tableau interne en chaînant deux paires de crochets. Par exemple, pour avoir accès à l'un des éléments (le troisième) du tableau élément du tableau `random` (voir la section précédente), vous pouvez écrire quelque chose comme&nbsp;:
4.  ```js
    random[2][2];
    ```
5.  Poursuivez et faites quelques autres modifications dans les exemples de tableaux avant de poursuivre.

### Trouver la taille d'un tableau

Vous pouvez trouver la taille d'un tableau (le nombre d'éléments qu'il comporte) de la même façon que vous obtenez la taille (en caractères) d'un chaîne — avec la propriété {{jsxref("Array.prototype.length","length")}}. Essayez&nbsp;:

```js
sequence.length;
// renvoie 7
```

Il y a d'autres usages, mais le plus courant permet de dire à une boucle de poursuivre jusqu'à ce que tous les éléments du tableau aient été passés en revue. Ainsi, par exemple&nbsp;:

```js
let sequence = [1, 1, 2, 3, 5, 8, 13];
for (var i = 0; i < sequence.length; i++) {
  console.log(sequence[i]);
}
```

Vous en apprendrez plus sur les boucles dans un prochain article, mais, en résumé, ce code dit&nbsp;:

1.  Commencer la boucle à l'élément 0 du tableau.
2.  Arrêter de tourner quand le dernier élément du tableau sera atteint. Cela fonctionne pour n'importe quelle dimension de tableau&nbsp;; dans notre cas, on sortira de la boucle à l'élément 7 (c'est bon, car le dernier élément — que nous souhaitons que la boucle traite — est le 6).
3.  Afficher chaque élément sur la console de l'explorateur avec `console.log()`.

## Quelques méthodes utiles pour les tableaux

Dans ce paragraphe nous examinerons quelques méthodes de tableaux à connaître. Elles permettent de scinder des chaînes en éléments de tableau et inversement, et d'ajouter de nouveaux éléments dans des tableaux.

### Conversions entre chaînes et tableaux

Souvent, vous serez confronté à des données brutes contenues dans une longue chaîne de caractères, et vous voudrez peut-être en extraire les éléments utiles sous une forme plus pratique pour en faire quelque chose, comme les afficher dans un tableau de données. Pour ce faire, nous pouvons utiliser la méthode {{jsxref ("String. prototype. prototype. split ()","split ()")}}. Dans sa formulation la plus simple, elle prend un seul paramètre, le caractère servant de séparateur ; elle renverra les sous-chaînes entre séparateurs en tant qu'éléments d'un tableau.

> **Note :** D'accord, techniquement parlant c'est une méthode de chaîne, et non une méthode de tableau, mais nous la mettons dans le chapitre des tableaux car elle est bien à sa place ici.

1.  Servons‑nous en et voyons comment elle fonctionne. D'abord créons une chaîne dans la console&nbsp;:

    ```js
    let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
    ```

2.  Scindons‑la à chaque virgule&nbsp;:

    ```js
    let myArray = myData.split(',');
    myArray;
    ```

3.  Pour terminer, trouvons la taille du nouveau tableau et retrouvons quelques‑uns de ses éléments&nbsp;:

    ```js
    myArray.length;
    myArray[0]; // le premier élément du tableau
    myArray[1]; // le deuxième élément du tableau
    myArray[myArray.length-1]; // le dernier élément du tableau
    ```

4.  Vous pouvez également faire le contraire avec la méthode {{jsxref("Array.prototype.join()","join()")}}. Essayons&nbsp;:

    ```js
    let myNewString = myArray.join(',');
    myNewString;
    ```

5.  Une autre façon de convertir un tableau en chaîne consiste à se servir de la méthode {{jsxref("Array.prototype.toString()","toString()")}}. `toString()` est plus simple au plan des arguments que `join()`, car elle ne prend pas de paramètre, mais elle est plus limitée. Avec `join()` vous pouvez diversifier les séparateurs (essayez de lancer la commande du point 4 avec un caractère autre que la virgule).

    ```js
    let dogNames = ["Rocket","Flash","Bella","Slugger"];
    dogNames.toString(); //Rocket,Flash,Bella,Slugger
    ```

### Ajout et suppression d'éléments de tableau

Nous n'avons pas encore parlé d'ajout et de suppression d'éléments de tableau — allons‑y. Nous utiliserons le tableau `myArray` dont nous nous sommes servis à la fin de la dernière section. Si vous n'avez pas entré les commandes de cette section dans la console, il est nécessaire de créer d'abord le tableau&nbsp;:

```js
let myArray = ['Manchester', 'London', 'Liverpool', 'Birmingham', 'Leeds', 'Carlisle'];
```

Premièrement, pour ajouter ou supprimer un élément à la fin du tableau, vous pouvez respectivement utiliser {{jsxref("Array.prototype.push()","push()")}} et {{jsxref("Array.prototype.pop()","pop()")}}.

1.  Voyons `push()` d'abord — notez que vous devez mettre en paramètre les éléments que vous souhaitez ajouter à la fin du tableau. Essayez ceci&nbsp;:

    ```js
    myArray.push('Cardiff');
    myArray;
    myArray.push('Bradford', 'Brighton');
    myArray;
    ```

2.  La taille du tableau modifié est renvoyée quand l'appel de la méthode est terminé. Si vous voulez enregistrer la taille du nouveau tableau dans une variable, vous pouvez écrire quelque chose comme ceci&nbsp;:

    ```js
    let newLength = myArray.push('Bristol');
    myArray;
    newLength;
    ```

3.  Supprimer le dernier élément de la liste est très simple&nbsp;: il suffit de lancer `pop()` sur celle‑ci. Essayez&nbsp;:

    ```js
    myArray.pop();
    ```

4.  L'élément supprimé est renvoyé à la fin de l'appel de la méthode. Également :

    ```js
    let removedItem = myArray.pop();
    myArray;
    removedItem;
    ```

{{jsxref("Array.prototype.unshift()","unshift()")}} et {{jsxref("Array.prototype.shift()","shift()")}} fonctionnent exactement de la même manière, excepté qu'il travaillent sur la tête du tableau au lieu de la queue.

1.  D'abord `unshift()` — essayez&nbsp;:

    ```js
    myArray.unshift('Edinburgh');
    myArray;
    ```

2.  Maintenant `shift()` — essayez&nbsp;!

    ```js
    let removedItem = myArray.shift();
    myArray;
    removedItem;
    ```

## Activité&nbsp;: affichons les produits

Revenons à l'exemple que nous avons décrit plus haut — afficher les noms des produits et leurs prix pour un envoi, puis faire le total des prix et l'afficher à la fin de la liste. Dans l'exemple modifiable ci‑dessous, il y a des commentaires numérotés — chacun d'entre eux marque l'emplacement où vous devez ajouter quelque chose au code. Voici&nbsp;:

1.  Sous le commentaire `// number 1` il y a un certain nombre de chaînes de caractères, chacune précise le nom d'un produit et son prix séparé par deux‑points. Placez‑les dans un tableau ; enregistrez‑le sous le nom `products`.
2.  Sur la même ligne que le commentaire `// number 2` se trouve le début d'une boucle. Dans cette ligne nous avons actuellement `i <= 0`, test conditionnel qui fait que la [boucle](/fr/docs/Learn/JavaScript/First_steps/A_first_splash#loops) stoppe immédiatement, car ce test dit «&nbsp;stopper dès que `i` est inférieur ou égal à 0&nbsp;» et `i` part de 0. Remplacez ce test par un qui n'arrêtera pas la boucle tant que `i` sera inférieur à la taille du tableau `products`.
3. Au dessous du commentaire `// number 3` nous voudrions que vous écriviez une ligne de code qui scinde l'élément courant du tableau (`nom:prix`) en deux éléments distincts, un contenant uniquement le nom, l'autre uniquement le prix. Si vous nous ne savez pas trop comment faire, revoyez l'article relatif aux [Méthodes utiles pour les chaînes de caractères](/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods) pour vous aider, ou même mieux, regardez la section [Conversions entre chaînes et tableaux](#conversions_entre_chaînes_et_tableaux) de cet article.

4.  En plus des lignes de code ci‑dessus, vous aurez aussi à convertir les prix de chaîne de caractères en chiffres. Si vous ne vous souvenez pas comment faire, revoyez le [premier article à propos des chaînes](/fr/docs/Learn/JavaScript/First_steps/Strings#numbers_versus_strings).
5.  Il y a une variable nommée `total` créée et initialisée à la valeur de 0 en tête du code. Dans la boucle (sous `// number 4`) ajoutez une ligne qui ajoute à ce total le prix de l'article courant à chaque itération de la boucle, de sorte que à la fin du code le prix total soit correctement inscrit sur l'envoi. Vous pourriez avoir besoin d'un [opérateur d'assignation](/fr/docs/Learn/JavaScript/First_steps/Math#assignment_operators) pour faire cela ;-).
6.  Nous souhaitons que vous modifiez la ligne au‑dessous de  `// number 5` de sorte que la variable `itemText` soit égale à «&nbsp;nom actuel de l'élément — $prix actuel de l'élément&nbsp;», par exemple «&nbsp;Shoes — $23.99&nbsp;» dans chaque cas, de façon à ce qu'une information correcte soit affichée sur l'envoi. Il s'agit d'une simple concaténation de chaînes de caractères, chose qui doit vous être familière.

```html hidden
<div class="output" style="min-height: 150px;">

<ul>

</ul>

<p></p>

</div>

<textarea id="code" class="playable-code" style="height: 370px;">
var list = document.querySelector('.output ul');
var totalBox = document.querySelector('.output p');
var total = 0;
list.innerHTML = '';
totalBox.textContent = '';
// number 1
                'Caleçons:6.99'
                'Chaussettes:5.99'
                'T-shirt:14.99'
                'Pantalons:31.99'
                'Chaussures:23.99';

for (var i = 0; i <= 0; i++) { // number 2
  // number 3

  // number 4

  // number 5
  itemText = 0;

  var listItem = document.createElement('li');
  listItem.textContent = itemText;
  list.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nvar totalBox = document.querySelector(\'.output p\');\nvar total = 0;\nlist.innerHTML = \'\';\ntotalBox.textContent = \'\';\n\nvar products = [\'Underpants:6.99\',\n                \'Socks:5.99\',\n                \'T-shirt:14.99\',\n                \'Trousers:31.99\',\n                \'Shoes:23.99\'];\n\nfor(var i = 0; i < products.length; i++) {\n var subArray = products[i].split(\':\');\n var name = subArray[0];\n var price = Number(subArray[1]);\n total += price;\n itemText = name + \' — $\' + price;\n\n var listItem = document.createElement(\'li\');\n listItem.textContent = itemText;\n list.appendChild(listItem);\n}\n\ntotalBox.textContent = \'Total: $\' + total.toFixed(2);';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
```

{{ EmbedLiveSample('Activité_affichons_les_produits', '100%', 600) }}

## Activité&nbsp;: Top 5 des recherches

Une bonne utilisation des méthodes de tableaux comme {{jsxref("Array.prototype.push()","push()")}} et {{jsxref("Array.prototype.pop()","pop()")}} permet de conserver un enregistrement des éléments actuellement actifs dans une application web. Dans une scène animée, par exemple, vous pouvez avoir un tableau d'objets représentant les graphiques d'arrière-plan actuellement affichés, et vous pouvez n'en vouloir que 50 à la fois, pour des raisons de performance ou d'encombrement. Chaque fois que de nouveaux objets sont créés et ajoutés au tableau, les plus anciens peuvent être supprimés du tableau pour n'en conserver que le nombre voulu.

Dans cet exemple nous allons montrer une utilisation beaucoup plus simple — ici, nous allons vous fournir un site de recherche fictif, avec une boîte de recherche. Voici l'idée&nbsp;: quand un terme est entré dans la boîte de recherche, les 5 précédents termes entrés sont affichés dans la liste. Quand le nombre de termes dépasse 5, le dernier terme est supprimé chaque fois qu'un nouveau terme est ajouté&nbsp;; ainsi, le 5 termes précédents sont toujours affichés.

> **Note :** Dans une application réelle avec boîte de recherche, vous pourriez vraisemblablement cliquer sur un des termes de la liste pour revenir à la recherche précédente, et l'application afficherait les vrais résultats&nbsp;! Mais pour le moment nous en resterons à quelque chose de simple.

Pour terminer l'application, il vous faut&nbsp;:

1.  Ajouter une ligne sous le commentaire `// number 1` pour ajouter la valeur qui vient d'être saisie dans la boîte au début du tableau. Cette valeur est récupérée avec `searchInput.value`.
2.  Ajouter une ligne sous le commentaire `// number 2`  pour supprimer la valeur en fin de liste du tableau.

```html hidden
<div class="output" style="min-height: 150px;">

<input type="text"><button>Search</button>

<ul>

</ul>

</div>

<textarea id="code" class="playable-code" style="height: 370px;">
var list = document.querySelector('.output ul');
var searchInput = document.querySelector('.output input');
var searchBtn = document.querySelector('.output button');

list.innerHTML = '';

var myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1

    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    list.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (var i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      var listItem = document.createElement('li');
      listItem.textContent = itemText;
      list.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2

    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```js hidden
var textarea = document.getElementById('code');
var reset = document.getElementById('reset');
var solution = document.getElementById('solution');
var code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  updateCode();
});

solution.addEventListener('click', function() {
  textarea.value = jsSolution;
  updateCode();
});

var jsSolution = 'var list = document.querySelector(\'.output ul\');\nvar searchInput = document.querySelector(\'.output input\');\nvar searchBtn = document.querySelector(\'.output button\');\n\nlist.innerHTML = \'\';\n\nvar myHistory= [];\n\nsearchBtn.onclick = function() {\n if(searchInput.value !== \'\') {\n    myHistory.unshift(searchInput.value);\n\n    list.innerHTML = \'\';\n\n    for(var i = 0; i < myHistory.length; i++) {\n      itemText = myHistory[i];\n      var listItem = document.createElement(\'li\');\n      listItem.textContent = itemText;\n      list.appendChild(listItem);\n    }\n\n    if(myHistory.length >= 5) {\n      myHistory.pop();\n    }\n\n    searchInput.value = \'\';\n    searchInput.focus();\n  }\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
```

{{ EmbedLiveSample('Activité_Top_5_des_recherches', '100%', 600) }}

## Testez vos compétences !

Vous avez atteint la fin de cet article, mais vous souvenez-vous des informations les plus importantes ? Vous pouvez trouver d'autres tests pour vérifier que vous avez bien fixé ces connaissances avant de continuer — voir [Test de compétences&nbsp;: les tableaux](/fr/docs/Learn/JavaScript/First_steps/Test_your_skills:_Arrays).

## Conclusion

Après la lecture de cet article, vous conviendrez que les tableaux semblent fichtrement utiles ; vous les verrez un peu partout en JavaScript, souvent associés à des boucles pour appliquer la même action à chaque élément du tableau. Nous vous indiquerons toutes les bases utiles à savoir à propos des boucles dans le prochain module, mais pour l'instant, félicitations&nbsp;: prenez une pause bien méritée ; vous avez étudié tous les articles du module !

La seule chose restant à faire est de procéder à l'évaluation de ce module pour tester votre compréhension de son contenu.

## Voir aussi

- [Collections indexées](/fr/docs/Web/JavaScript/Guide/Indexed_collections) — un guide de niveau avancé à propos des tableaux et de leurs cousins, les tableaux typés.
- {{jsxref("Array")}} — la page de référence de l'objet `Array` — pour un guide de référence détaillé à propos des fonctionnalités discutées dans cette page, et plus encore.

{{PreviousMenuNext("Learn/JavaScript/First_steps/Useful_string_methods", "Learn/JavaScript/First_steps/Silly_story_generator", "Learn/JavaScript/First_steps")}}

## Dans ce module

- [What is JavaScript?](/fr/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [A first splash into JavaScript](/fr/docs/Learn/JavaScript/First_steps/A_first_splash)
- [What went wrong? Troubleshooting JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Storing the information you need — Variables](/fr/docs/Learn/JavaScript/First_steps/Variables)
- [Basic math in JavaScript — numbers and operators](/fr/docs/Learn/JavaScript/First_steps/Math)
- [Handling text — strings in JavaScript](/fr/docs/Learn/JavaScript/First_steps/Strings)
- [Useful string methods](/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Arrays](/fr/docs/Learn/JavaScript/First_steps/Arrays)
- [Assessment: Silly story generator](/fr/docs/Learn/JavaScript/First_steps/Silly_story_generator)
