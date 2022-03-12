---
title: Mathématiques de base en JavaScript — nombres et opérateurs
slug: Learn/JavaScript/First_steps/Math
tags:
  - Article
  - Beginner
  - CodingScripting
  - Guide
  - JavaScript
  - Learn
  - Math
  - Operators
  - augmented
  - increment
  - l10n:priority
  - maths
  - modulo
translation_of: Learn/JavaScript/First_steps/Math
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

À ce point du didacticiel, nous parlerons de « mathématiques en JavaScript » — comment utiliser les {{Glossary("Operator","operators")}} et autres fonctionnalités pour manier avec succès les nombres pour faire nos bricolages.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Vocabulaire courant de l'informatique, bases de HTML et CSS,
        compréhension de ce que fait JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Se familiariser avec les bases des maths en JavaScript.</td>
    </tr>
  </tbody>
</table>

## Tout le monde aime les maths

Mouais, peut‑être pas. Certains parmi nous aiment les maths, d'autres les détestent depuis qu'il leur a fallu apprendre les tables de multiplication et les longues divisions à l'école, d'autres se situent entre les deux. Mais personne ne peut nier que les mathématiques sont une connaissance fondamentale dont il n'est pas possible de se passer. Cela devient particulièrement vrai lorsque nous apprenons à programmer en JavaScript (ou tout autre langage d'ailleurs) — une grande part de ce que nous faisons reposant en effet sur le traitement de données numériques, le calcul de nouvelles valeurs, etc. ; vous ne serez donc pas étonné d'apprendre que JavaScript dispose d'un ensemble complet de fonctions mathématiques.

Cet article ne traite que des éléments de base nécessaires pour débuter.

### Types de nombres

En programmation, même l'ordinaire système des nombres décimaux que nous connaissons tous si bien est plus compliqué qu'on ne pourrait le croire. Nous utilisons divers termes pour décrire différents types de nombres décimaux, par exemple :

- **Entier :** (_Integer_ en anglais) c'est un nombre sans partie fractionnaire, comme son nom l'indique, par exemple 10, 400 ou -5
- **Nombre à virgule flottante :** (_float_ en anglais) il a un **point** de séparation entre la partie entière et la partie fractionnaire (là où en France nous mettons une virgule), par exemple 12**.**5 et 56**.**7786543
- **Doubles** : (pour double précision) ce sont des nombres à virgule flottante de précision supérieure aux précédents (on les dit plus précis en raison du plus grand nombre de décimales possibles).

Nous disposons même de plusieurs systèmes de numération ! Le décimal a pour base 10 (ce qui signifie qu'il se sert de chiffres entre 0 et 9 dans chaque rang), mais il en existe d'autres :

- **Binaire** — utilisé par le plus bas niveau de langage des ordinateurs, il est composé de 0 et de 1.
- **Octal** — de base 8, utilise les chiffres entre 0 et 7 dans chaque rang.
- **Hexadécimal** — de base 16, utilise les chiffres entre 0 et 9 puis les lettres de a à f dans chaque rang. Vous avez peut-être déjà rencontré ces nombres en définissant des couleurs dans les [CSS](/fr/docs/Learn/CSS/Introduction_to_CSS/Values_and_units#hexadecimal_values).

**Avant que votre cervelle ne se mette à bouillir, stop !** Pour commencer, nous ne nous intéresserons qu'aux nombres décimaux dans ce cours ; vous aurez rarement besoin de vous servir des autres types, peut-être même jamais.

L'autre bonne nouvelle, c'est que contrairement à d'autres langages de programmation, JavaScript n'a qu'un seul type de donnée pour les nombres, vous l'avez deviné : {{jsxref("Number")}}. Cela signifie que, en JavaScript, quels que soient les types de nombre avec lesquels vous travaillerez, vous les manipulerez tous exactement de la même façon.

### Ce ne sont que des nombres pour moi

Amusons‑nous avec quelques chiffres pour nous familiariser avec la syntaxe de base dont nous aurons besoin. Entrez les commandes listées ci-dessous dans la [console JavaScript des outils de développement](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools), ou utilisez la simple console intégrée que vous voyez ci-dessous si vous préférez.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/variables/index.html", '100%', 300)}}

**[Ouvrir la console dans une nouvelle fenêtre](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/variables/)**

1.  Premièrement, déclarons une paire de variables et initialisons‑les respectivement avec un entier et un nombre avec des décimales, puis saisissons les noms des variables à nouveau pour vérifier que tout est correct :

    ```js
    var myInt = 5;
    var myFloat = 6.667;
    myInt;
    myFloat;
    ```

2.  Les nombres sont saisis sans guillemets — essayez de déclarer et initialiser deux ou trois variables de plus contenant des nombres avant de continuer.
3.  Maintenant vérifions que les deux variables d'origine sont du même type de donnée. En JavaScript, l'opérateur nommé {{jsxref("Operators/typeof", "typeof")}} est prévu pour cela. Entrez les deux lignes ci‑dessous comme indiqué :
4.  ```js
    typeof myInt;
    typeof myFloat;
    ```
5.  `"number"` est renvoyé dans les deux cas — cela nous facilite les choses quand nous avons des nombres différents de types variés et que nous avons à les traiter de diverses façons. Ouf !

### Méthodes de nombres utiles

L'objet [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number) , une instance qui représente tous les nombres standards que vous utiliserez dans votre JavaScript, a de nombreuses méthodes disponibles pour vous permettre de manipuler les nombres. Nous ne les étudierons pas tous en détail dans cet article car nous voulons qu'il reste une simple introduction et nous verrons seulement les bases essentielles pour le moment; cependant, une fois que vous aurez lu ce module plusieurs fois, il pourra être utile de visiter les pages de référence d'objet et d'en apprendre plus sur ce qui est disponible.

Par exemple, pour arrondir votre nombre avec un nombre fixe de décimales, utilisez la méthode [`toFixed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Tapez les lignes suivantes dans la [console de votre navigateur](/fr/docs/Tools/Web_Console):

```js
let lotsOfDecimal = 1.766584958675746364;
lotsOfDecimal;
let twoDecimalPlaces = lotsOfDecimal.toFixed(2);
twoDecimalPlaces;
```

### Convertir en type de données numérique

Parfois vous pourriez finir avec un nombre stocké de type "string", ce qui rendra difficile le fait d'effectuer un calcul avec. Ca arrive le plus souvent lorsqu'une donnée est entrée dans une entrée de [formulaire](/fr/docs/Learn/Forms), et le [type de donnée entré est du texte](/fr/docs/Web/HTML/Element/Input/text). Il éxiste une façon de résoudre ce problème — passer la valeur de "string" dans le constructeur [`Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) pour retourner une version numérique de la même valeur.

Par exemple, essayez de taper ces lignes dans votre console:

```js
let myNumber = '74';
myNumber + 3;
```

Vous obtenez le résultat 743, et non pas 77, car `myNumber` est en fait défini en tant que "string". Vous pouvez tester en tapant la ligne suivante:

```js
typeof myNumber;
```

Pour réparer le calcul, vous pouvez faire ceci:

```js
Number(myNumber) + 3;
```

## Opérateurs arithmétiques

Ce sont les opérateurs de base pour effectuer diverses opérations :

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Operateur</th>
      <th scope="col">Nom</th>
      <th scope="col">But</th>
      <th scope="col">Exemple</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>+</code></td>
      <td>Addition</td>
      <td>Ajoute deux nombres.</td>
      <td><code>6 + 9</code></td>
    </tr>
    <tr>
      <td><code>-</code></td>
      <td>Soustraction</td>
      <td>Soustrait le nombre de droite de celui de gauche.</td>
      <td><code>20 - 15</code></td>
    </tr>
    <tr>
      <td><code>*</code></td>
      <td>Multiplication</td>
      <td>Multiplie les deux nombrer.</td>
      <td><code>3 * 7</code></td>
    </tr>
    <tr>
      <td><code>/</code></td>
      <td>Division</td>
      <td>Divise le nombre de gauche par celui de droite.</td>
      <td><code>10 / 5</code></td>
    </tr>
    <tr>
      <td><code>%</code></td>
      <td><p>Reste (quelquefois nommé modulo)</p></td>
      <td>
        <p>
          Renvoie le reste de la division du nombre de gauche par celui de
          droite.
        </p>
      </td>
      <td>
        <code>8 % 3</code> (renvoie 2, car 3 est contenu 2 fois dans 8, et il
        reste 2.)
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Quelquefois les nombres impliqués dans des opérations sont nommés {{Glossary("Operand", "operands")}}.

Nous n'avons certainement pas besoin de vous apprendre les quatre opérations, mais ce serait bien de tester si vous avez bien compris la syntaxe. Entrez les exemples ci‑dessous dans la [console des outils de développement JavaScript](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools) ou servez vous de la console intégrée plus haut, comme vous préférez, pour vous familiariser avec la syntaxe.

1.  Essayez de saisir quelques exemples simples de votre cru, comme :

    ```js
    10 + 7
    9 * 8
    60 % 3
    ```

2.  Déclarez et initialisez quelques variables, puis utilisez‑les dans des opérations — les variables se comporteront exactement comme les valeurs qu'elles contiennent pour les besoins de l'opération. Par exemple :

    ```js
    var num1 = 10;
    var num2 = 50;
    9 * num1;
    num2 / num1;
    ```

3.  Pour terminer cette partie, entrez quelques expressions plus compliquées, comme :

    ```js
    5 + 10 * 3;
    num2 % 9 * num1;
    num2 + num1 / 8 + 2;
    ```

Certaines opérations de cet ensemble ne vous renvoient peut-être pas le résultat attendu ; le paragraphe qui suit vous explique pourquoi.

### Priorité des opérateurs

Revenons sur le dernier exemple ci‑dessus, en supposant que `num2` contient la valeur 50 et `num1` contient 10 (comme défini plus haut) :

```js
num2 + num1 / 8 + 2;
```

En tant qu'humain, vous pouvez lire « *50 plus 10 égale 60 »*, puis « *8 plus 2 égale 10 »* et finalement « *60 divisé par 10 égale 6 »*.

Mais le navigateur _calcule « 10 sur 8 égale 1.25 »_, puis « *50 plus 1.25 plus 2 égale 53.25 »*.

Cela est dû aux **priorités entre opérateurs** — certains sont appliqués avant d'autres dans une opération (on parle d'une expression en programmation). En JavaScript, la priorité des opérateurs est identique à celle enseignée à l'école — Multiplication et Division sont toujours effectuées en premier, suivies d'Addition et Soustraction (le calcul est toujours exécuté de la gauche vers la droite).

Si vous voulez contourner les règles de priorité des opérateurs, vous pouvez mettre entre parenthèses les parties que vous souhaitez voir calculées en premier. Pour obtenir un résultat égal à 6, nous devons donc écrire :

```js
(num2 + num1) / (8 + 2);
```

Essayez-le et voyez.

> **Note :** La liste complète de tous les opérateurs JavaScript et leur priorité peut être trouvée dans [Expressions and operators](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#operator_precedence).

## Opérateurs d'incrémentation et de décrémentation

Quelquefois vous aurez besoin d'ajouter ou retrancher 1 à une valeur de variable de manière répétitive. On effectue commodément cette opération à l'aide des opérateurs d'incrémentation (`++`) ou de décrementation (`--`). Nous nous sommes servis de `++` dans le jeu « Devinez le nombre » dans notre article [Première plongée dans le JavaScript](/fr/docs/Learn/JavaScript/Introduction_to_JavaScript_1/A_first_splash) pour ajouter 1 à la variable `guessCount` pour décompter le nombre de suppositions restantes après chaque tour.

```js
guessCount++;
```

> **Note :** Ces opérateurs sont couramment utilisés dans des [boucles ;](/fr/docs/Web/JavaScript/Guide/Loops_and_iteration) nous les verrons plus loin dans ce cours. Par exemple, disons que vous voulez parcourir une liste de prix et ajouter les taxes à chacun. Vous utiliserez une boucle pour obtenir chaque valeur une à une et exécuterez le calcul voulu pour ajouter les taxes à chacune. L'incrément s'utilise pour aller à la valeur suivante. Nous avons mis un exemple concret montrant comment faire — voyez‑le tout de suite, examinez le code source et notez les opérateurs d'incrémentation ! Nous reverrons les boucles en détail plus loin dans ce cours.

Jouons avec ces opérateurs dans la console. Notez d'abord qu'il n'est pas possible de les appliquer directement à un nombre, ce qui peut paraître étrange, mais cet opérateur assigne à une variable une nouvelle valeur mise à jour, il n'agit pas sur la valeur elle‑même. Ce qui suit renvoie une erreur :

```js
3++;
```

Vous ne pouvez donc incrémenter qu'une variable déjà existante. Essayez ceci :

```js
var num1 = 4;
num1++;
```

Ok, curieuse la ligne 2 ! En écrivant cela, elle renvoie la valeur 4 — c'est dû au fait que l'explorateur renvoie la valeur courante, _puis_ incrémente la variable. Vous constaterez qu'elle a bien été incrémentée si vous demandez de la revoir :

```js
num1;
```

C'est pareil avec `--` : essayez ce qui suit

```js
var num2 = 6;
num2--;
num2;
```

> **Note :** En mettant l'opérateur avant la variable au lieu d'après, le navigateur agira dans l'ordre inverse — incrément/décrément de la variable _puis_ renvoi de la valeur — . Essayez les exemples plus haut, mais cette fois avec `++num1` et `--num2`.

## Opérateurs d'assignation

Les opérateurs d'assignation sont ceux qui fixent la valeur d'une variable. Nous avons déjà utilisé plusieurs fois le plus élémentaire, `=` — il donne à la variable de gauche la valeur indiquée à droite :

```js
var x = 3; // x contient la valeur 3
var y = 4; // y contient la valeur 4
x = y; // x contient maintenant la même valeur que y, 4
```

Mais il existe des types plus complexes, qui procurent des raccourcis utiles pour un code plus propre et plus efficace. Les plus courants sont listés ici :

| Opérateur | Nom                           | But                                                                                                                  | Exemple           | Raccourci pour       |
| --------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`      | Addition et assignation       | Ajoute la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable      | `x = 3; x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`      | Soustraction et assignation   | Soustrait la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable   | `x = 6; x -= 3;`  | `x = 6; x = x - 3;`  |
| `*=`      | Multiplication et assignation | Multiplie la valeur de droite par la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`      | Division et assignation       | Divise la valeur de la variable de gauche par la valeur de droite, puis renvoie la nouvelle valeur de la variable    | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

Saisissez quelques uns de ces exemples dans la console pour avoir une idée de leur fonctionnement. Dans chaque cas, voyez si vous avez deviné la valeur avant de saisir la deuxième ligne.

Notez que vous pouvez opportunément utiliser une autre variable comme opérateur sur la droite de chaque expression, par exemple :

```js
var x = 3; // x contient la valeur 3
var y = 4; // y contient la valeur 4
x *= y; // x contient maintenant la valeur 12
```

> **Note :** Il y a des tas d'[autres opérateurs d'assignation disponibles](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators), mais ceux‑ci sont les plus courants que vous devez les connaître dès maintenant.

## Apprentissage actif : dimensionner une boîte à canevas

Dans cet exercice, vous allez manier quelques nombres et opérateurs pour changer la taille d'une boîte. La boîte est tracée à l'aide de l'API de navigateur nommée {{domxref("Canvas API", "", "", "true")}}. Pas besoin de savoir comment elle fonctionne — concentrez-vous simplement sur les mathématiques pour l'instant. Les largeur et hauteur de la boîte (en pixels) sont définies par les variables `x` et `y`, qui sont toutes deux initialisées avec la valeur 50.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 520)}}

**[Ouvrir dans une nouvelle fenêtre](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Le code dans la boîte ci-desssus peut être modifié. Un commentaire signale les deux lignes suivantes, que vous devez mettre à jour pour faire en sorte que la boîte grossisse ou rétrécisse aux tailles données, en utilisant certains opérateurs et/ou valeurs dans chaque cas. Essayez ce qui suit en réinitialisant à chaque étape :

- Modifier la ligne qui calcule x pour que la boîte conserve sa largeur de 50 pixels, mais que 50 soit calculé avec les nombres 43 et 7 ainsi qu'un opérateur arithmétique.
- Modifier la ligne qui calcule y pour que la boîte prenne une hauteur de 75 pixels, mais que 75 ait été calculé avec les nombres 25 et 3 ainsi qu'un opérateur arithmétique.
- Modifier la ligne qui calcule x pour que la boîte prenne une largeur de 250pixels, mais que 250 ait été calculé avec deux nombres ainsi que l'opérateur **reste** (modulo).
- Modifier la ligne qui calcule y pour que la boîte prenne une hauteur de 150pixels, mais que 150 ait été calculé en utilisant 3 nombres et les opérateurs **soustraction** et **division**.
- Modifier la ligne qui calcule x pour que la boîte prenne une largeur de 200pixels, mais que 200 ait été calculé en se servant du nombre 4 et d'un opérateur d'**assignation**.
- Modifier la ligne qui calcule y pour que la boîte prenne une hauteur de 200 pixels, mais que 200 ait été calculé en utilisant les nombres 50 et 3 ainsi que les opérateurs **multiplication**, **addition** et **assignation**.

Pas d'inquiétude si vous vous trompez. Vous pouvez toujours presser le bouton Reset et les choses fonctionneront à nouveau. Après avoir répondu correctement aux questions posées, amusez‑vous avec ce code ou définissez vous‑même les défis.

## Opérateurs de comparaison

Parfois nous avons besoin d'exécuter des tests vrai/faux (true/false), puis d'agir en fonction du résultat — pour ce faire, nous utilisons des **opérateurs de comparaison**.

| Operateur | Nom                 | But                                                                      | Exemple       |
| --------- | ------------------- | ------------------------------------------------------------------------ | ------------- |
| `===`     | Égalité stricte     | Teste si les valeurs de droite et de gauche sont identiques              | `5 === 2 + 4` |
| `!==`     | Non-égalité stricte | Teste si les valeurs de doite et de gauche ne sont pas identiques        | `5 !== 2 + 3` |
| `<`       | Inférieur à         | Teste si la valeur de gauche est plus petite que celle de droite.        | `10 < 6`      |
| `>`       | Supérieur à         | Teste si la valeur de gauche est plus grande que celle de droite.        | `10 > 20`     |
| <=        | Inférieur ou égal à | Teste si la valeur de gauche est plus petite ou égale à celle de droite. | `3 <= 2`      |
| >=        | Supérieur ou égal à | Teste si la valeur de gauche est supérieure ou égale à celle de droite.  | `5 >= 4`      |

> **Note :** Vous verrez peut‑être certaines personnes utiliser `==` et `!=` pour leurs test d'égalité ou non-égalité. Ces opérateurs sont valides en JavaScript, mais différents de `===`/`!==`. Les versions avec deux caractères testent si les valeurs sont les mêmes, mais pas si les types de données sont les mêmes. Les versions strictes à trois caractères testent à la fois l'égalité des valeurs _et_ des types de données. Il y a moins d'erreurs avec les versions strictes, donc nous vous engageons à les utiliser dans tous les cas.

Si vous entrez certaines de ces valeurs dans une console, vous constaterez que toutes renvoient une valeur `true`/`false` — les booléens mentionnés dans l'article précédent. Ces opérateurs sont très utiles car il nous permettent de prendre des décisions dans le code, et ils sont utilisés chaque fois que nous avons besoin de faire un choix. Par exemple, les booléens s'utilisent pour :

- Afficher l'étiquette textuelle ad-hoc sur un bouton selon qu'une fonctionnalité est active ou pas
- Afficher un message de fin de jeu si un jeu est terminé ou un message de victoire si le jeu a été remporté
- Afficher des remerciements saisonniers corrects selon la saison de vacances
- Faire un zoom avant ou arrière sur une carte selon le niveau de zoom choisi

Nous verrons comment coder cette logique quand nous étudierons les directives conditionnelles dans un article ultérieur. Pour le moment, regardons un exemple rapide :

```html
<button>Démarrer la machine</button>
<p>La machine est arrêtée.</p>
```

```js
var btn = document.querySelector('button');
var txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Démarrer la machine') {
    btn.textContent = 'Arrêter la machine';
    txt.textContent = 'La machine est en marche !';
  } else {
    btn.textContent = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[Ouvrir dans une nouvelle fenêtre](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Vous pouvez voir l'utilisation de l'opérateur d'égalité stricte dans la fonction `updateBtn()`. Dans ce cas, nous ne testons pas si deux expressions mathématiques ont la même valeur — nous testons si le contenu textuel d'un bouton contient une certaine chaîne — mais c'est toujours le même principe. Si le bouton affiche « Démarrer la machine » quand on le presse, nous changeons son étiquette en « Arrêter la machine » et mettons à jour l'étiquette comme il convient. Si le bouton indique « Arrêter la machine » au moment de le presser, nous basculons l'étiquette à nouveau.

> **Note :** Un contrôle qui alterne entre deux états porte généralement le nom de **toggle** (bascule). Il bascule d'un état à l'autre — allumé, éteint, etc.

## Résumé

Dans cet article, nous avons exposé les informations fondamentales concernant les nombres en JavaScript, à connaître absolument pour débuter convenablement. Vous verrez encore et encore des utilisations de nombres tout au long de cet introduction au JavaScript, prenons donc une pause pour le moment. Si vous êtes de ceux qui n'aiment pas les maths, vous noterez avec satisfaction que ce chapitre était vraiment très court.

Dans l'article suivant, nous étudierons le texte et les façons dont JavaScript nous permet de le manipuler.

> **Note :** Si les Maths vous plaisent et que vous souhaitez en savoir plus sur la manière dont elles sont implémentées en JavaScript, vous trouverez plus de précisions dans la section principale JavaScript du MDN. Une grande place est réservée dans ces articles aux [Nombres et dates](/fr/docs/Web/JavaScript/Guide/Numbers_and_dates) et aux [Expressions et opérateurs](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}
