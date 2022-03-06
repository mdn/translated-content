---
title: Valeurs de retour des fonctions
slug: Learn/JavaScript/Building_blocks/Return_values
tags:
  - Apprendre
  - Article
  - Débutant
  - Fonctions
  - Guide
  - JavaScript
  - Return
  - Valeurs de retour
  - Écriture de code
translation_of: Learn/JavaScript/Building_blocks/Return_values
original_slug: Apprendre/JavaScript/Building_blocks/Return_values
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Il y a un concept essentiel que nous devons aborder dans ce cours, pour être complet sur les fonctions: les valeurs de retour. Certaines fonctions ne retournent pas de valeur significative après avoir été exécutées, mais d'autres oui, il est important de comprendre ces valeurs, comment les utiliser dans votre code et comment faire pour que vos propres fonctions retournent des valeurs utiles. Nous aborderons tout cela dans cet article.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis:</th>
      <td>
        <p>
          Base en langage informatique, une compréhension basic de HTML et CSS,
          <a href="/fr/docs/Learn/JavaScript/First_steps"
            >Premiers pas en JavaScript</a
          >,
          <a href="/fr/docs/Learn/JavaScript/Building_blocks/Functions"
            >Fonctions — blocks de code réutilisable</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif:</th>
      <td>Comprendre les valeurs de retour, et comment les utiliser.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que les valeurs de retour?

**Les valeurs de retour** sont, comme leur nom l'indique, les valeurs retournées par une fonction après son exécution. Vous en avez déjà rencontré plusieurs fois sans y avoir pensé explicitement. Revenons à notre code:

```js
var myText = 'I am a string';
var newString = myText.replace('string', 'sausage');
console.log(newString);
// the replace() string function takes a string,
// replaces one substring with another, and returns
// a new string with the replacement made
```

Nous avons vu ce bloc de code dans notre premier article sur les fonctions. Nous appelons la fonction [replace()](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace) sur la chaîne de caractères `myText` , et lui passons deux paramètres: la chaîne à trouver ('string'), et la chaîne de remplacement ('sausage'). Lorsque cette fonction a fini de s'exécuter, elle retourne une valeur qui est une chaîne avec le remplacement effectué. Dans le code ci-dessus, nous sauvegardons cette valeur avec la variable newString.

Si vous regardez la page de référence MDN sur le remplacement de fonction, vous verrez une section intitulée [Valeur retournée](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Return_value). Il est utile de savoir et de comprendre quelles sont les valeurs retournées par les fonctions, nous avons donc essayé d'inclure cette information partout où cela était possible.

Certaines fonctions ne retournent pas de valeur comme telle (dans nos pages de référence, la valeur de retour est définie comme `void` ou `undefined` dans de tels cas). Par exemple, dans la fonction [`displayMessage()`](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50) construite dans l'article précédent, aucune valeur spécifique n'est retournée comme résultat de la fonction appelée. Il y a seulement une boîte qui apparaît, c'est tout !

Généralement, une valeur de retour est utilisée lorsque la fonction est une étape intermédiaire dans un programme. Ces valeurs intermédiaires doivent être d'abord évaluées par une fonction, le résultat renvoyé pourra être ensuite utilisé dans l'étape suivante du programme.

### Utiliser des valeurs de retour dans vos fonctions

Pour retourner une valeur d'une fonction que vous avez créée, vous devez utiliser... suspense... le mot-clef [return](/fr/docs/Web/JavaScript/Reference/Statements/return) . Nous avons vu son utilisation dans l'exemple [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html). Notre fonction `draw()` dessine 100 cercles aléatoires en HTML. {{htmlelement("canvas")}}:

```js
function draw() {
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (var i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

À chaque itération de la boucle, on fait trois fois appel à la fonction `random()` pour générer respectivement une valeur aléatoire pour les coordonnées x et y du cercle, ainsi que pour son rayon. La fonction `random()` prend un seul paramètre — un nombre entier — et elle retourne un nombre entier aléatoire compris entre 0 et ce nombre. Voici à quoi cela ressemble:

```js
function random(number) {
  return Math.floor(Math.random()*number);
}
```

Cela peut aussi s'écrire ainsi:

```js
function random(number) {
  var result = Math.floor(Math.random()*number);
  return result;
}
```

Mais la première version est plus rapide à écrire, et plus compacte.

La fonction retourne le résultat de `Math.floor(Math.random()*number)` chaque fois qu'elle est appelée. Cette valeur de retour apparaît à l'endroit où la fonction a été appelée, puis le code continue. Si, par exemple, nous exécutons la ligne suivante:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

et que les trois appels `random()` retournent respectivement les valeurs 500, 200 et 35, la ligne pourrait être écrite de cette façon:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Les fonctions de la ligne sont évaluées en premières, et leurs valeurs de retour viennent remplacer les appels de fonctions avant que la ligne elle-même ne soit exécutée.

## Apprentissage actif: notre propre fonction avec valeur de retour

Allons-y, écrivons nos propres fonctions avec des valeurs de retour.

1.  Pour commencer, faites une copie locale du fichier [function-library.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html) à partir de GitHub. Il s'agit d'une simple page HTML contenant un champ texte  {{htmlelement("input")}} et un paragraphe. Il y a également un élément {{htmlelement("script")}} qui référence ces éléments HTML dans deux variables. Cette page vous permettra d'entrer un nombre dans le champ texte, et affichera, dans le paragraphe au-dessous, différents nombres en lien avec celui entré.
2.  Ajoutons quelques fonctions dans `<script>` . Sous les deux lignes existantes de JavaScript, ajoutez les définitions des fonctions suivantes:

    ```js
    function squared(num) {
      return num * num;
    }

    function cubed(num) {
      return num * num * num;
    }

    function factorial(num) {
      var x = num;
      while (x > 1) {
        num *= x-1;
        x--;
      }
      return num;
    }
    ```

    Les fonctions `squared()` et `cubed()` sont plutôt évidentes, elle retournent le carré et le cube du nombre donné en paramètre. La fonction `factorial()` retourne la [factorielle](https://en.wikipedia.org/wiki/Factorial) du nombre donné.

3.  Ensuite, nous allons ajouter un moyen d'afficher des informations sur le nombre entré dans le champ texte. Ajoutez le gestionnaire d'événement suivant à la suite des fonctions:

    ```js
    input.onchange = function() {
      var num = input.value;
      if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
      } else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
                           num + ' cubed is ' + cubed(num) + '. ' +
                           num + ' factorial is ' + factorial(num) + '.';
      }
    }
    ```

    Ici nous créons un gestionnaire d'événement `onchange` qui s'exécute chaque fois que l'événement `change` se déclenche sur le champ de saisie de texte, c'est-à-dire lorsqu'une nouvelle valeur est entrée dans le champ de saisie de texte, puis qu'elle est soumise (par exemple lorsqu'on entre une valeur puis qu'on appuie sur Tab). Quand cette fonction anonyme s'exécute, la valeur entrée dans le champ de saisie est stockée dans la variable `num`.

    Ensuite, nous faisons un test: Si la valeur entrée n'est pas un nombre, un message d'erreur s'affiche dans le paragraphe. Le test vérifie si l'expression `isNaN(num)` retourne `true`. Nous utilisons la fonction [isNaN()](/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN) pour vérifier si la valeur `num` est un nombre — si c'est le cas, elle retourne `false`, sinon `true`.

    Si le test retourne `false`, la valeur `num` est un nombre, alors une phrase s'affiche dans le paragraphe indiquant le carré, le cube et la factorielle du nombre. La phrase appelle les fonctions `squared()`, `cubed()` et `factorial()` pour obtenir les valeurs désirées.

4.  Sauvegardez votre code, chargez-le dans votre navigateur et testez-le.

> **Note :** Si vous rencontrez des difficultés pour faire fonctionner cet exemple, vous pouvez vérifier le code en le comparant à la [Version final sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html) (également [Démonstration en direct](http://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), ou demandez-nous de l'aide.

À ce stade, nous aimerions que vous essayiez d'écrire quelque fonctions de votre choix et que vous les ajoutiez à la bibliothèque. Que diriez-vous des racines carré et cubique du nombre, ou de la circonférence d'un cercle de rayon `num`?

Cet exercice a soulevé quelques points importants en plus de nous avoir permis d'étudier l'utilisation de la déclaration `return`. De plus, nous avons:

- Examiné un autre exemple d'écriture de gestion d'erreurs dans nos fonctions. C'est une bonne idée de vérifier que tous les paramètres nécessaires ont été fournis, avec les bons types de données, et, s'ils sont facultatifs, qu'une valeur par défaut est fournie. De cette façon, votre programme sera moins susceptible de lever des erreurs.
- Pensé à créer une bibliothèque de fonctions. À mesure que vous avancerez dans votre carrière de développeur, vous recommencerez les mêmes choses encore et encore. C'est une bonne idée de commencer à créer votre propre bibliothèque de fonctions utilitaires que vous utilisez très souvent — vous pouvez ensuite copier ces fonctions dans votre nouveau code, ou même utiliser la bibliothèque dans les pages HTML où vous en avez besoin.

## Conclusion

Nous l'avons vu, les fonctions sont amusantes, très utiles et, bien qu'il y ait beaucoup à dire en termes de syntaxe et de fonctionnalités, elles sont assez compréhensibles si elles sont étudiés correctement.

Si vous n'avez pas compris quelque chose, n'hésitez pas à relire l'article, ou [contactez-nous](/fr/Learn#Contact_us) pour obtenir de l'aide.

## Voir aussi

- [Fonctions  en profondeur](/fr/docs/Web/JavaScript/Reference/Functions) — Un guide détaillé couvrant des information plus avancées sur les fonctions.
- [Fonction Callback en JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — Une façon courante en JavaScript consiste à passer une fonction à une autre en tant qu'argument, qui est alors appelée à l'intérieur de la première fonction.  Cela va au delà de la portée de ce cours, mais mériterait d'être étudier rapidement.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}



## Dans ce module

- [Prendre des décisions dans le code — conditions](/fr/docs/Apprendre/JavaScript/Building_blocks/conditionals)
- [Les boucles dans le code](/fr/docs/Apprendre/JavaScript/Building_blocks/Looping_code)
- [Fonctions — Des blocs de code réutilisables](/fr/docs/Apprendre/JavaScript/Building_blocks/Fonctions)
- [Construire vos propres fonctions](/fr/docs/Apprendre/JavaScript/Building_blocks/Build_your_own_function)
- [Valeurs de retour des fonctions](/fr/docs/Apprendre/JavaScript/Building_blocks/Return_values)
- [Introduction aux événements](/fr/docs/Apprendre/JavaScript/Building_blocks/Ev%C3%A8nements)
- [Galerie d'images](/fr/docs/Apprendre/JavaScript/Building_blocks/Image_gallery)
