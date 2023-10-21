---
title: Valeurs de retour des fonctions
slug: Learn/JavaScript/Building_blocks/Return_values
l10n:
  sourceCommit: bb026bcb88b7f45374d602301b7b0db5a49ff303
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}

Il y a un dernier concept essentiel sur les fonctions dont nous devons discuter — les valeurs de retour. Certaines fonctions ne renvoient pas de valeur significative, mais d'autres le font. Il est important de comprendre quelles sont leurs valeurs, comment les utiliser dans votre code et comment faire en sorte que les fonctions renvoient des valeurs utiles. Nous couvrirons tout cela ci-dessous.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        <p>
          Base en langage informatique, une compréhension basic de HTML et CSS,
          <a href="/fr/docs/Learn/JavaScript/First_steps"
            >Premiers pas en JavaScript</a
          >,
          <a href="/fr/docs/Learn/JavaScript/Building_blocks/Functions"
            >Fonctions — blocs de code réutilisable</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Comprendre les valeurs de retour, et comment les utiliser.</td>
    </tr>
  </tbody>
</table>

## Qu'est-ce que les valeurs de retour?

Les **valeurs de retour** sont, comme leur nom l'indique, les valeurs retournées par une fonction après son exécution. Vous en avez déjà rencontré plusieurs fois sans y avoir pensé explicitement. Revenons à notre code&nbsp;:

```js
let monTexte = "La météo est froide";
let nouveauTexte = monTexte.replace("froide", "chaude");
console.log(nouveauTexte); // Devrait afficher "La météo est chaude"
// la fonction pour les chaînes de caractères replace() remplace
// une sous-chaîne par une autre et retourne une nouvelle chaîne
// avec le remplacement effectué
```

La fonction [`replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace) est invoquée sur la chaîne de caractères `monTexte`, et nous lui passons deux paramètres&nbsp;:

- la chaîne à trouver («&nbsp;froide&nbsp;»)
- la chaîne de remplacement («&nbsp;chaude&nbsp;»)

Lorsque cette fonction a fini de s'exécuter, elle retourne une valeur qui est une nouvelle chaîne avec le remplacement effectué. Dans le code ci-dessus, nous sauvegardons cette valeur avec la variable `nouveauTexte`.

Si vous regardez la page de référence MDN sur la fonction [`replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace), vous verrez une section intitulée [Valeur retournée](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace#valeur_retournée). Il est utile de savoir et de comprendre quelles sont les valeurs retournées par les fonctions, nous avons donc essayé d'inclure cette information partout où cela était possible.

Certaines fonctions ne retournent pas de valeur comme telle (dans nos pages de référence, la valeur de retour est définie comme [`void`](/fr/docs/Web/JavaScript/Reference/Operators/void) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) dans de tels cas). Par exemple, dans la fonction [`displayMessage()`](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-stage-4.html#L50) construite dans l'article précédent, aucune valeur spécifique n'est retournée comme résultat de la fonction appelée. Il y a seulement une boîte qui apparaît — c'est tout&nbsp;!

Généralement, une valeur de retour est utilisée lorsque la fonction est une étape dans un programme. Ces valeurs intermédiaires doivent être d'abord évaluées par une fonction, le résultat renvoyé pourra être ensuite utilisé dans l'étape suivante du programme.

### Utiliser des valeurs de retour dans vos fonctions

Pour retourner une valeur d'une fonction que vous avez créée, vous devez utiliser le mot-clef [return](/fr/docs/Web/JavaScript/Reference/Statements/return). Nous avons vu son utilisation dans l'exemple [random-canvas-circles.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/random-canvas-circles.html). Notre fonction `draw()` dessine 100 cercles aléatoires en HTML [`<canvas>`](/fr/docs/Web/HTML/Element/canvas)&nbsp;:

```js
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);
  for (let i = 0; i < 100; i++) {
    ctx.beginPath();
    ctx.fillStyle = "rgba(255,0,0,0.5)";
    ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
    ctx.fill();
  }
}
```

À chaque itération de la boucle, on fait trois fois appel à la fonction `random()` pour générer respectivement une valeur aléatoire pour les _coordonnées x et y_ du cercle, ainsi que pour son _rayon_. La fonction `random()` prend un seul paramètre — un nombre entier — et elle retourne un nombre entier aléatoire compris entre 0 et ce nombre. Voici à quoi cela ressemble&nbsp;:

```js
function random(number) {
  return Math.floor(Math.random() * number);
}
```

Cela peut aussi s'écrire ainsi&nbsp;:

```js
function random(number) {
  const result = Math.floor(Math.random() * number);
  return result;
}
```

Mais la première version est plus rapide à écrire, et plus compacte.

La fonction retourne le résultat de `Math.floor(Math.random() * number)` chaque fois qu'elle est appelée. Cette valeur de retour apparaît à l'endroit où la fonction a été appelée, puis le code continue. Si, par exemple, nous exécutons la ligne suivante&nbsp;:

```js
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
```

et que les trois appels `random()` retournent respectivement les valeurs 500, 200 et 35, la ligne pourrait être écrite de cette façon&nbsp;:

```js
ctx.arc(500, 200, 35, 0, 2 * Math.PI);
```

Les appels de fonction de la ligne sont exécutés en premier, et leurs valeurs de retour remplacent les appels de fonction, avant que la ligne elle-même ne soit exécutée.

## Apprentissage actif : notre propre fonction avec valeur de retour

Allons-y, écrivons nos propres fonctions avec des valeurs de retour.

1. Pour commencer, faites une copie locale du fichier [function-library.html](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library.html) à partir de GitHub. Il s'agit d'une simple page HTML contenant un champ texte [`<input>`](/fr/docs/Web/HTML/Element/input) et un paragraphe. Il y a également un élément [`<script>`](/fr/docs/Web/HTML/Element/script) qui référence ces éléments HTML dans deux variables. Cette page vous permettra d'entrer un nombre dans le champ texte, et affichera, dans le paragraphe au-dessous, différents nombres en lien avec celui entré.

2. Ajoutons quelques fonctions dans `<script>`. Sous les deux lignes existantes de JavaScript, ajoutez les définitions des fonctions suivantes&nbsp;:

   ```js
   function squared(num) {
     return num * num;
   }

   function cubed(num) {
     return num * num * num;
   }

   function factorial(num) {
     if (num < 0) return undefined;
     if (num === 0) return 1;
     let x = num - 1;
     while (x > 1) {
       num *= x;
       x--;
     }
     return num;
   }
   ```

   Les fonctions `squared()` et `cubed()` sont plutôt évidentes, elles retournent le carré et le cube du nombre donné en paramètre. La fonction `factorial()` retourne la [factorielle](https://fr.wikipedia.org/wiki/Factorielle) du nombre donné.

3. Ensuite, nous allons ajouter un moyen d'afficher des informations sur le nombre entré dans le champ texte. Ajoutez le gestionnaire d'événement suivant à la suite des fonctions&nbsp;:

   ```js
   input.addEventListener("change", () => {
     const num = parseFloat(input.value);
     if (isNaN(num)) {
       para.textContent = "You need to enter a number!";
     } else {
       para.textContent = `${num} squared is ${squared(num)}. `;
       para.textContent += `${num} cubed is ${cubed(num)}. `;
       para.textContent += `${num} factorial is ${factorial(num)}. `;
     }
   });
   ```

4. Sauvegardez votre code, chargez-le dans votre navigateur et testez-le.

Voici quelques explications sur la fonction `addEventListener` à l'étape 3 ci-dessus&nbsp;:

- En ajoutant un écouteur à l'événement `change`, cette fonction s'exécute chaque fois que l'événement `change` se déclenche sur le champ de saisie — c'est-à-dire lorsqu'une nouvelle valeur est saisie dans `input` et soumise (par exemple, entrez une valeur, puis désélectionnez le champ en appuyant sur <kbd>Tab</kbd> ou <kbd>Entrer</kbd>). Lorsque cette fonction anonyme s'exécute, la valeur de `input` est stockée dans la constante `num`.
- L'instruction `if` imprime un message d'erreur si la valeur saisie n'est pas un nombre. La condition vérifie si l'expression `isNaN(num)` retourne `true`. La fonction [`isNaN()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/isNaN) teste si la valeur `num` n'est pas un nombre — si c'est le cas, elle retourne `true`, et sinon, elle retourne `false`.
- Si la condition retourne `false`, la valeur `num` est un nombre et la fonction imprime une phrase à l'intérieur de l'élément paragraphe qui indique les valeurs carrées, cubiques et factorielles du nombre. La phrase appelle les fonctions `squared()`, `cubed()`, et `factorial()` pour calculer les valeurs requises.

> **Note :** Si vous rencontrez des difficultés pour faire fonctionner cet exemple, vous pouvez vérifier le code en le comparant à la [version finale sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/functions/function-library-finished.html) (également [la démonstration en direct](https://mdn.github.io/learning-area/javascript/building-blocks/functions/function-library-finished.html)), ou demandez-nous de l'aide.

## Maintenant c'est à votre tour !

À ce stade, nous aimerions que vous essayiez d'écrire vos propres fonctions et de les ajouter à la bibliothèque. Qu'en est-il de la racine carrée ou le cube du nombre ? Ou la circonférence d'un cercle d'un rayon donné ?

Quelques conseils supplémentaires liés aux fonctions&nbsp;:

- Regardez un autre exemple d'écriture de la _gestion des erreurs_ dans des fonctions. C'est généralement une bonne idée de vérifier que tous les paramètres nécessaires sont validés et que tous les paramètres facultatifs ont une sorte de valeur par défaut fournie. De cette façon, votre programme sera moins susceptible de générer des erreurs.
- Pensez à l'idée de créer une _bibliothèque de fonctions_. Au fur et à mesure que vous avancerez dans votre carrière de programmeur, vous commencerez à faire le même genre de choses encore et encore. C'est une bonne idée de créer votre propre bibliothèque de fonctions utilitaires pour faire ce genre de choses. Vous pouvez les copier dans un nouveau code, ou même simplement les appliquer aux pages HTML là où vous en avez besoin.

## Conclusion

Nous l'avons vu — les fonctions sont amusantes, très utiles et bien qu'il y ait beaucoup à dire en termes de syntaxe et de fonctionnalités, elles sont assez compréhensibles.

Si vous n'avez pas compris quelque chose, n'hésitez pas à relire l'article, ou [contactez-nous](/fr/docs/Learn#nous_contacter) pour obtenir de l'aide.

## Voir aussi

- [Fonctions en profondeur](/fr/docs/Web/JavaScript/Reference/Functions) — Un guide détaillé couvrant des informations plus avancées sur les fonctions.
- [Fonction Callback en JavaScript](https://www.impressivewebs.com/callback-functions-javascript/) — Une façon courante en JavaScript consiste à passer une fonction à une autre en tant qu'argument, qui est alors appelée à l'intérieur de la première fonction. Cela va au-delà de la portée de ce cours, mais mériterait d'être étudié rapidement.

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/Build_your_own_function","Learn/JavaScript/Building_blocks/Events", "Learn/JavaScript/Building_blocks")}}
