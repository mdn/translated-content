---
title: Qu'est-ce qui n'a pas fonctionné ? Déboguer du code JavaScript
slug: Learn/JavaScript/First_steps/What_went_wrong
tags:
  - Apprentissage
  - Article
  - Codage
  - Débutant
  - Erreur
  - JavaScript
  - Tutoriel
  - console.log
  - débogage
  - outils de développement
translation_of: Learn/JavaScript/First_steps/What_went_wrong
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}

Après avoir créé le jeu "Devinez le nombre" de l'article précédent, vous avez peut-être constaté qu'il ne fonctionnait pas. Pas de panique — cet article vise à ce que vous ne vous arrachiez pas les cheveux sur ces problèmes en donnant quelques conseils simples sur la façon de trouver et corriger les erreurs dans les programmes JavaScript.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        <p>
          Vocabulaire courant de l'informatique, bases de HTML et CSS,
          compréhension de ce que fait JavaScript.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Acquérir la capacité et la confiance pour commencer à résoudre des
        problèmes simples dans votre propre code.
      </td>
    </tr>
  </tbody>
</table>

## Types d' erreurs

En règle générale, les erreurs dans un code sont à ranger dans deux catégories :

- **Erreurs de syntaxe :** Ce sont les fautes d'orthographe. Elles empêchent réellement le programme de fonctionner ou l'arrêtent en cours de chemin — elles sont accompagnées de messages d'erreur. Ces erreurs sont généralement simple à corriger, pour autant que vous connaissiez les bons outils et sachiez ce que signifient les messages !
- **Erreurs logiques :** La syntaxe est correcte, mais le code n'est pas ce que vous attendiez : le programme tourne sans planter mais donne des résultats inattendus. Ces erreurs sont souvent plus difficiles à corriger que les erreurs de syntaxe, car il n'y a pas, en général, de message d'erreur pour vous diriger vers la source de l'erreur.

Bon, mais ce n'est pas si simple que cela — il y a d'autres facteurs de différenciation lorsque vous approfondissez. Mais la classification ci-dessus suffiira pour commencer. Nous examinerons ces deux catégories d'erreur un peu plus loin.

## Un exemple erroné

Pour commencer, revenons à notre jeu de devinettes numériques — sauf que cette fois-ci, nous explorerons une version qui comporte des erreurs délibérées. Allez sur Github et fabriquez vous-même une copie locale de [number-game-errors.html](https://github.com/mdn/learning-area/blob/master/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) ([voyez-la ici](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/troubleshooting/number-game-errors.html) en direct).

1.  Pour commencer, ouvrez la copie locale avec votre éditeur de texte favoris.
2.  Essayez de lancer le jeu — vous remarquerez que quand vous pressez le bouton

    <kbd>Submit guess</kbd>

    , cela ne fonctionne pas!

> **Note :** Votre propre version de l'exemple de jeu ne fonctionne pas, vous pourriez vouloir la corriger ! Il nous semble plus efficace que vous travailliez sur notre version boguée, afin que vous puissiez apprendre les techniques que nous enseignons ici. Ensuite, vous pouvez revenir en arrière et essayer de réparer votre exemple.

À ce stade, consultons la [console du développeur](/fr/docs/Apprendre/Découvrir_outils_développement_navigateurs) pour voir si nous pouvons voir des erreurs de syntaxe, puis essayez de les corriger. Vous apprendrez comment ci-dessous.

## Réparer les erreurs de syntaxe

Antérieurement dans le cours, nous vous avons demandé de taper quelques commandes JavaScript simples dans la [console JavaScript](/fr/docs/Apprendre/Découvrir_outils_développement_navigateurs) [des outils de développement](/fr/docs/Apprendre/Découvrir_outils_développement_navigateurs) (si vous ne pouvez pas vous rappeler comment l'ouvrir dans votre navigateur, suivez le lien précédent pour savoir comment). Ce qui est encore plus utile, c'est que la console vous donne des messages d'erreur chaque fois qu'une erreur de syntaxe existe dans le JavaScript qui est introduit dans le moteur JavaScript du navigateur. Maintenant partons en chasse !

1.  Allez à l'onglet dans lequel est affiché `number-game-errors.html`, et ouvrez la console  JavaScript. Vous devriez voir un message d'erreur dans les lignes qui suivent : ![](not-a-function.png)
2.  C'est une erreur très facile à trouver, et le navigateur vous fournit quelques indices pour vous en sortir (la copie d'écran ci‑dessus provient de Firefox, mais les autres navigateurs donnent des indications semblables). De gauche à droite, nous avons :

    - Une croix rouge indiquant que c'est une erreur.
    - Un message d'erreur précisant ce qui ne va pas : "TypeError: guessSubmit.addeventListener is not a function" ("Type d'erreur : guessSubmit.addeventListener n'est pas une fonction")
    - Un lien "Learn More" ("En savoir plus") pointant sur une page MDN explicitant ce que l'erreur signifie avec pléthore de détails.
    - Le nom du fichier JavaScript, lié à l'onglet Debugger de l'outil de développement. Si vous suivez le lien, vous verrez exactement la ligne dans laquelle l'erreur est mise en évidence.
    - Le numéro de la ligne où se situe l'erreur, et le rang du caractère dans cette ligne où l'erreur a été repérée pour la première fois. Dans notre cas, il s'agit de la ligne 86, caractère 3.

3.  En examinant la ligne 86 dans l'éditeur de code, nous voyons :

    ```js
    guessSubmit.addeventListener('click', checkGuess);
    ```

4.  Le message d'erreur dit "guessSubmit.addeventListener n'est pas une fonction", donc nous avons probablement mal orthographié quelque chose. Si vous n'êtes pas sûr de la bonne orthographe d'un élément syntaxique, il est fréquemment opportun de regarder dans MDN. Actuellement, la meilleure façon d'opérer consiste à faire une recherche pour  "mdn _nom-de-fonctionnalité_" avec votre moteur de recherche préféré. Voici un raccourci pour gagner un peu de temps dans le cas présent : [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener).
5.  Donc, en regardant cette page, il apparaît que nous avions mal orthographié le nom de la fonction ! Souvenez-vous que JavaScript est sensible à la casse, et que la moindre différence dans l'orthographe ou la casse déclenchera une erreur. Remplacer `addeventListener` par `addEventListener` corrigera cela. Faisons‑le maintenant.

> **Note :** Voyez la page relative à [TypeError: "x" is not a function](/fr/docs/Web/JavaScript/Reference/Errors/Not_a_function) pour plus de précisions à propos de cette erreur.

### Erreurs de syntaxe : deuxième tour

1.  Enregistrez la page et actualisez‑la, vous constaterez que l'erreur a disparu.
2.  Maintenant si vous entrez une supposition et pressez le bouton de soumission, vous constaterez ... une autre erreur ! ![](variable-is-null.png)
3.  Cette fois‑ci, l'erreur rapportée est "TypeError: lowOrHi is null", à la ligne 78.

    > **Note :** [`Null`](/fr/docs/Glossary/Null) est une valeur spéciale signifiant "rien" ou "aucune valeur". Or `lowOrHi` a été déclaré et initialisé, mais sans valeur signifiante — il n'a ni type ni valeur.

    > **Note :** Cette erreur n'apparaît pas au moment du chargement de la page car elle survient à l'intérieur d'une fonction (dans `checkGuess() { ... }`). Comme vous l'apprendrez de manière plus précise plus loin dans l'article à propos des fonctions, le code dans les fonctions s'exécute dans une instance séparée du code en dehors des fonctions. Dans notre cas, le code n'avait pas été exécuté et l'erreur ne pouvait pas survenir avant que la fonction `checkGuess()` soit lancée à la ligne 86.

4.  Regardez à la ligne 78, vous verrez ce code :

    ```js
    lowOrHi.textContent = 'Last guess was too high!';
    ```

5.  La commande dans cette ligne essaie de définir la propriété `textContent` de la variable `lowOrHi` à l'aide d'une chaîne textuelle ; mais cela ne fonctionne pas car `lowOrHi` ne contient pas ce qui est attendu. Voyons voir — recherchons d'autres occurrences de `lowOrHi` dans le code. La plus proche que vous trouverez dans le JavaScript se situe à la ligne 48 :

    ```js
    let lowOrHi = document.querySelector('lowOrHi');
    ```

6.  Là, nous essayons de faire en sorte que la variable contienne une référence à un élément dans le HTML du document. Vérifions si sa valeur est `null` après que cette ligne ait été exécutée. Ajoutez le code suivant à la ligne 49 :

    ```js
    console.log(lowOrHi);
    ```

    > **Note :** [`console.log()`](/fr/docs/Web/API/Console/log) est vraiment utile pour déboguer une fonction en affichant sa valeur sur la console. Donc, elle affichera sur cette dernière la valeur de `lowOrHi` que nous avons essayé de définir à la ligne 48.

7.  Enregistrez et actualisez la page, et vous verrez le résultat de `console.log()` sur la console. ![](console-log-output.png) C'est sûr, la valeur de `lowOrHi` est `null` à ce niveau ; il y a bien un problème à la ligne 48.
8.  Quel est ce problème ? Réfléchissons. À la ligne 48, nous avons utilisé la méthode [`document.querySelector()`](/fr/docs/Web/API/Document/querySelector) pour obtenir une référence sur un élément avec un sélecteur CSS. En regardant plus en amont dans notre fichier, nous pouvons trouver le paragraphe en question :

    ```js
    <p class="lowOrHi"></p>
    ```

9.  Donc, il nous faut un sélecteur de classe ici, précédé d'un point (.), alors que le sélecteur passé à la méthode `querySelector()` en ligne 48 n'en a pas. Ce pourrait être le problème ! Changeons `lowOrHi` en `.lowOrHi` à la ligne 48.
10. Enregistrons et actualisons à nouveau, et la directive `console.log()` renvoie bien l'élément  `<p>` attendu. Pfff ! Une autre erreur corrigée ! On peut enlever la ligne `console.log()` maintenant, ou bien la garder pour s'y reporter plus tard — comme vous l'entendez.

> **Note :** Voyez la page relative à [TypeError: "x" is (not) "y"](/fr/docs/Web/JavaScript/Reference/Errors/Unexpected_type) pour plus de précisions à propos de cette erreur.

### Erreurs de syntaxe : troisième tour

1.  Maintenant si vous essayez de jouer, cela ira mieux — tout se déroule correctement, jusqu'à ce que vous arriviez à la fin, soit en devinant le bon chiffre, soit en épuisant le nombre de tentatives permises.
2.  Arrivé là, le jeu échoue à nouveau et vous rencontrez la même erreur qu'au début — "TypeError: resetButton.addeventListener is not a function" ! Mais cette fois‑ci, elle vient de la ligne  94.
3.  En regardant cette ligne, il est facile de voir que nous avons fait ici la même erreur que précédemment. Il nous suffit de changer `addeventListener` en `addEventListener`. Faites‑le.

## Une erreur de logique

À ce stade, le jeu se déroule correctement, mais après avoir fait quelques parties, vous noterez sans doute que le nombre « aléatoire » à deviner est toujours 0 ou 1. Franchement, de quoi vous dégoûter de jouer !

Il y a sûrement un problème dans la logique du jeu quelque part — le jeu ne renvoie pas d'erreur ; il ne fonctionne pas correctement.

1.  Recherchons les lignes où la variable `randomNumber` est définie. L'instance qui stocke en début de jeu le nombre aléatoire à deviner se situe autour de la ligne 44 :

    ```js
    let randomNumber = Math.floor(Math.random()) + 1;
    ```

    Et celle qui génére le nombre aléatoire pour une succession de jeux se situe autour de la ligne 113 :

    ```js
    randomNumber = Math.floor(Math.random()) + 1;
    ```

2.  Pour vérifier si ces lignes sont vraiment à l'origine du problème, faisons appel à nouveau à notre ami `console.log()` — insérons la ligne suivante directement en dessous des deux lignes indiquées plus haut :

    ```js
    console.log(randomNumber);
    ```

3.  Enregistrons, actualisons et jouons quelques parties — on constate que `randomNumber` est égal à 1 quel que soit le point où il est raccordé à la console.

### Travaillons la logique

Pour corriger cela, examinons d'abord le fonctionnement de cette ligne. Premièrement, appelons [`Math.random()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/random), qui génére un nombre décimal aléatoire compris entre 0 et 1, par exemple 0.5675493843.

```js
Math.random()
```

Puis, nous passons le résultat de l'appel de `Math.random()` à [`Math.floor()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/floor), qui arrondit le nombre passé à l'entier inférieur le plus proche. Puis, on ajoute 1 au résultat :

    Math.floor(Math.random()) + 1

Garder la partie entière d'un nombre décimal compris entre 0 et 1 renvoie toujours 0, y ajouter 1 donne toujours  1. Il faut multiplier le nombre aléatoire par 100 avant de l'arrondir par défaut. La ligne suivante nous donne un entier aléatoire entre 0 et  99 :

```js
Math.floor(Math.random()*100);
```

Maintenant ajoutons 1 pour obtenir un nombre aléatoire entre 1 et 100 :

```js
Math.floor(Math.random()*100) + 1;
```

Modifiez ces deux lignes comme indiqué, enregistrez, actualisez — le jeu devrait maintenant fonctionner comme il faut !

## Autres erreurs courantes

D'autres erreurs courantes peuvent être commises en écrivant du code. Ce paragraphe attire votre attention sur la plupart d'entre elles.

### SyntaxError: missing ; before statement

Cette erreur signale généralement l'oubli du point‑virgule à la fin d'une ligne de code ; mais elle peut se révéler parfois plus énigmatique. Par exemple, si, dans la fonction  `checkGuess(),`nous modifions cette ligne :

```js
let userGuess = Number(guessField.value);
```

en

```js
let userGuess === Number(guessField.value);
```

cela déclenchera cette même erreur car le logiciel pense que vous êtes en train de faire quelque chose d'autre. Vous devez vous assurer que vous n'avez pas confondu l'opérateur d'assignation  (`=`) — qui fixe une valeur donnée à une variable — avec l'opérateur (`===`) qui teste la stricte égalité de deux valeurs, et renvoie un résultat  `true`/`false` (vrai/faux).

> **Note :** Voyez la page relative à [SyntaxError: missing ; before statement](/fr/docs/Web/JavaScript/Reference/Errors/Missing_semicolon_before_statement) pour plus de précisions à propos de cette erreur.

### Le programme dit que vous avez gagné quelle que soit votre suggestion.

Voilà un autre symptome de la confusion entre opérateur d'assignation et opérateur de test d'égalité. Ainsi, dans `checkGuess()`, si vous modifiez cette ligne :

```js
if (userGuess === randomNumber) {
```

en

```js
if (userGuess = randomNumber) {
```

le test renverra toujours `true` (vrai) et le programme indiquera que vous avez gagné à tout coup. Soyez attentif !

### SyntaxError: missing ) after argument list

Cette erreur est triviale — elle indique en général que vous avez oublié une parenthèse fermante à la fin de l'appel d'une fonction ou d'une méthode.

> **Note :** Voyez la page relative à [SyntaxError: missing ) after argument list](/fr/docs/Web/JavaScript/Reference/Errors/Missing_parenthesis_after_argument_list) pour plus de précisions à ce propos.

### SyntaxError: missing : after property id

Cette erreur concerne généralement un objet JavaScript mal construit, mais dans ce cas nous l'avons déclenchée en modifiant

```js
function checkGuess() {
```

en

```js
function checkGuess( {
```

Le navigateur pense que vous essayez de passer le contenu d'un fonction comme argument pour l'autre fonction. Soyez attentifs avec les parenthèses !

### SyntaxError: missing } after function body

Facile — elle signifie généralement que vous avez omis une accolade dans une fonction ou dans une structure conditionnelle. Vous l'obtiendrez en effaçant une des accolades voisines de la terminaison de la fonction `checkGuess()`.

### SyntaxError: expected expression, got '_string_' ou SyntaxError: unterminated string literal

Ces erreurs signalent généralement l'oubli de guillemets ouvrants ou fermants dans une chaîne littérale. Dans la première erreur du titre, _string_ doit être remplacé par l'un ou les caractères inattendus que l'explorateur a trouvé à la place du guillemet en début de chaîne. La deuxième erreur indique que la chaîne n'a pas été clôturée avec un guillement fermant.

Pour toutes ces erreurs, revoyez comment nous avons opéré dans les exemples de ce parcours. Quand une erreur survient, regardez le numéro de ligne indiqué, allez à cette ligne et voyez si vous remarquez ce qui ne va pas. N'oubliez pas que l'erreur n'est pas forcément sur la ligne indiquée, et qu'elle ne provient pas forcément d'un des problèmes évoqués plus haut !

> **Note :** Voyez les pages relatives à  [SyntaxError: Unexpected token](/fr/docs/Web/JavaScript/Reference/Errors/Unexpected_token) et [SyntaxError: unterminated string literal](/fr/docs/Web/JavaScript/Reference/Errors/Unterminated_string_literal) pour plus de précisions à ce propos.

## Résumé

Voilà ce que nous pouvons dire à propos des erreurs basiques pour de simples programmes JavaScript. Il n'est pas toujours aussi simple de détecter ce qui ne va pas dans du code, mais au moins vous économiserez ainsi quelques heures de veille et vous progresserez plus rapidement si les choses ne déraillent pas dès le début de votre parcours d'apprentissage.

## Voir aussi

- Il y a nombre d'autres erreurs qui n'ont pas été listées ici ; nous les avons récolées dans un référencement qui les explique en détail — voyez [JavaScript error reference](/fr/docs/Web/JavaScript/Reference/Errors).
- Si dans votre code vous rencontrez une erreur, et même après avoir lu cet article, vous ne parvenez pas à la corriger, vous pouvez obtenir de l'aide ! Demandez‑la sur le fil de discussion [Learning Area Discourse thread](https://discourse.mozilla-community.org/t/learning-web-development-marking-guides-and-questions/16294) ou par le canal IRC de [#mdn](irc://irc.mozilla.org/mdn) sur  [Mozilla IRC](https://wiki.mozilla.org/IRC). Dites‑nous quelle est cette erreur, et nous essayerons de vous aider. Un listing de votre code sera aussi utile.

{{PreviousMenuNext("Learn/JavaScript/First_steps/A_first_splash", "Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps")}}
