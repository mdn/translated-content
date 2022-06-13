---
title: Mathématiques de base en JavaScript — nombres et opérateurs
slug: Learn/JavaScript/First_steps/Math
translation_of: Learn/JavaScript/First_steps/Math
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

À ce point du didacticiel, nous parlerons des mathématiques en JavaScript, de comment utiliser les [opérateurs](/fr/docs/Glossary/Operator) et d'autres fonctionnalités pour manipuler les nombres à notre guise.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>
        Vocabulaire courant de l'informatique, bases de HTML et CSS,
        compréhension de ce qu'est JavaScript.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif&nbsp;:</th>
      <td>Se familiariser avec les bases des maths en JavaScript.</td>
    </tr>
  </tbody>
</table>

## Tout le monde aime les maths

Mouais, peut‑être pas. Certaines ou certains parmi nous aiment les maths, d'autres les détestent depuis qu'il leur a fallu apprendre les tables de multiplication et les longues divisions à l'école, d'autres se situent entre les deux. Mais personne ne peut nier que les mathématiques sont une connaissance fondamentale dont il n'est pas possible de se passer. Cela devient particulièrement vrai lorsque nous apprenons à programmer en JavaScript (ou tout autre langage d'ailleurs) — une grande part de ce que nous faisons reposant en effet sur le traitement de données numériques, le calcul de nouvelles valeurs, etc. Vous ne serez donc pas étonné⋅e d'apprendre que JavaScript dispose d'un ensemble complet de fonctions mathématiques.

Cet article ne traite que des éléments de base nécessaires pour débuter.

### Types de nombres

En programmation, même le système ordinaire des nombres décimaux que nous connaissons si bien est plus compliqué qu'on ne pourrait le croire. Nous utilisons différents termes pour décrire différents types de nombres décimaux, par exemple&nbsp;:

- Les entiers (<i lang="en">integer</i> en anglais)
  - : Ils représentent des nombres sans partie fractionnaire. Ils peuvent être positifs ou négatifs. Voici quelques exemples de nombres entiers&nbsp;: 10, 400 ou -5.
- Les nombres flottants (<i lang="en">floats</i> en anglais)
  - : Ces nombres ont une partie fractionnaire et un point sépare la partie entière de la partie fractionnaire (là où en France nous mettons une virgule). Voici quelques exemples de nombres flottants&nbsp;: 12.5 et 56.7786543.
- Les doubles (pour double précision)
  - : Ce sont des nombres à virgule flottante de précision supérieure aux précédents (on les dit plus précis en raison du plus grand nombre de décimales possibles).

Nous disposons même de plusieurs systèmes de numération&nbsp;! Le décimal a pour base 10 (ce qui signifie qu'il se sert de chiffres entre 0 et 9 dans chaque rang), mais il en existe d'autres&nbsp;:

- Binaire
  - : Utilisé par le plus bas niveau de langage des ordinateurs, il est composé de 0 et de 1.
- Octal
  - : Utilisant une base 8, les chiffres entre 0 et 7 sont utilisés dans chaque rang.
- Hexadécimal
  - : Utilisant une base 16, les chiffres entre 0 et 9 puis les lettres de a à f sont utilisés dans chaque rang. Vous avez peut-être déjà rencontré ces nombres en définissant [des couleurs en CSS](/fr/docs/Learn/CSS/Building_blocks/Values_and_units#valeurs_rgb_hexadécimales).

**Avant d'avoir la cervelle en compote, arrêtez-vous un instant ici&nbsp;!** Pour commencer, nous ne nous intéresserons qu'aux nombres décimaux dans ce cours&nbsp;; vous aurez rarement besoin de vous servir des autres types, peut-être même jamais.

L'autre bonne nouvelle, c'est que contrairement à d'autres langages de programmation, JavaScript n'a qu'un seul type de donnée pour les nombres, vous l'avez deviné&nbsp;: [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number). Cela signifie que, en JavaScript, quels que soient les types de nombre avec lesquels vous travaillerez, vous les manipulerez tous exactement de la même façon.

> **Note :** Pour être tout à fait précis, JavaScript dispose d'un deuxième type numérique&nbsp;: [`BigInt`](/fr/docs/Glossary/BigInt), utilisé pour les très grands nombres entiers. Toutefois, dans ce cours, nous aurons uniquement besoin d'étudier les valeurs utilisant le type `Number`.

### Ce ne sont que des nombres pour moi

Amusons‑nous avec quelques nombres pour nous familiariser avec la syntaxe de base dont nous aurons besoin. Entrez les commandes listées ci-dessous dans la [console JavaScript des outils de développement](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools), ou utilisez la simple console intégrée que vous voyez ci-dessous si vous préférez.

1.  Premièrement, déclarons une paire de variables et initialisons‑les respectivement avec un entier et un nombre avec des décimales, puis saisissons les noms des variables à nouveau pour vérifier que tout est correct&nbsp;:

    ```js
    const monEntier = 5;
    const monFlottant = 6.667;
    monEntier;
    monFlottant;
    ```

2.  Les nombres sont saisis sans guillemets. Essayez de déclarer et initialiser deux ou trois variables de plus contenant des nombres avant de continuer.
3.  Maintenant vérifions que les deux variables d'origine sont du même type de donnée. En JavaScript, l'opérateur nommé [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof) est prévu pour cela. Entrez les deux lignes ci‑dessous comme indiqué&nbsp;:

    ```js
    typeof monEntier;
    typeof monFlottant;
    ```

    `"number"` est renvoyé dans les deux cas — cela nous facilite les choses quand nous avons des nombres différents de types variés et que nous avons à les traiter de diverses façons. Ouf&nbsp;!

### Méthodes utiles de `Number`

L'objet [`Number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number), une instance qui représente tous les nombres standards que vous utiliserez dans votre JavaScript, possède de nombreuses méthodes permettant de manipuler les nombres. Nous ne les étudierons pas toutes en détails dans cet article, car nous voulons qu'il reste une simple introduction et nous verrons ici uniquement les bases essentielles. Cependant, une fois que vous aurez lu ce module plusieurs fois, il pourra être utile de visiter les pages de référence pour cet objet afin d'en apprendre plus sur ce qui est disponible.

Par exemple, pour arrondir votre nombre avec un nombre fixe de décimales, utilisez la méthode [`toFixed()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed). Tapez les lignes suivantes dans la console de votre navigateur&nbsp;:

```js
const grandePartieDecimale = 1.766584958675746364;
grandePartieDecimale;
const partieDecimaleAdeuxChiffres = grandePartieDecimale.toFixed(2);
partieDecimaleAdeuxChiffres;
```

### Convertir des valeurs en type numérique

Parfois vous pourrez rencontrer un nombre enregistré sous la forme d'une chaîne de caractères, et il sera alors plus difficile d'effectuer des calculs avec. Cela arrive le plus souvent lorsqu'une donnée est entrée dans une entrée de [formulaire](/fr/docs/Learn/Forms), et que le [type de donnée entré est du texte](/fr/docs/Web/HTML/Element/Input/text). Il existe une façon de résoudre ce problème&nbsp;: passer la valeur qu'est la chaîne de caractères au constructeur [`Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) pour retourner une version numérique de la même valeur.

Par exemple, essayez de taper ces lignes dans votre console&nbsp;:

```js
let monNombre = '74';
monNombre + 3;
```

Vous obtenez le résultat 743, et non pas 77, car `monNombre` est en fait défini en tant que chaîne de caractères. Vous pouvez tester en tapant la ligne suivante&nbsp;:

```js
typeof monNombre;
```

Pour réparer le calcul, vous pouvez faire ceci:

```js
let monNombre = '74';
Number(monNombre) + 3;
```

Le résultat est alors 77, comme initialement attendu.

## Opérateurs arithmétiques

Les opérateurs arithmétiques sont les opérateurs de base pour effectuer diverses opérations&nbsp;:

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Opérateur</th>
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
      <td>Multiplie deux nombres.</td>
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
      <td>Renvoie le reste de la division du nombre de gauche par celui de droite.</td>
      <td>
        <code>8 % 3</code> (renvoie 2, car 3 est contenu 2 fois dans 8, et il reste 2)
      </td>
    </tr>
    <tr>
      <td><code>**</code></td>
      <td>Puissance (exponentiation)</td>
      <td>Élève un nombre à la puissance fournie par le deuxième nombre. Autrement dit, le nombre à gauche est multiplié par lui-même autant de fois que le nombre de droit. Cet opérateur est apparu avec ECMAScript 2016.</td>
      <td>
        <code>5 ** 2</code> (renvoie <code>25</code>, qui correspond à <code>5 * 5</code>).
      </td>
    </tr>
  </tbody>
</table>

> **Note :** Quelquefois les nombres impliqués dans des opérations sont nommés [opérandes](/fr/docs/Glossary/Operand).

> **Note :** Vous pourrez parfois voir les puissances calculées à l'aide de la méthode [`Math.pow()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/pow) qui existait avant `**` et qui fonctionne de façon semblable. Ainsi, `Math.pow(7, 3)` exprime `7` à la puissance `3`, ce qui est équivalent à `7**3`, et qui donne `343`.

Nous n'avons certainement pas besoin de vous apprendre les quatre opérations, mais ce serait bien de tester si vous avez bien compris la syntaxe. Entrez les exemples ci‑dessous dans la [console des outils de développement JavaScript](/fr/docs/Learn/Common_questions/What_are_browser_developer_tools).

1.  Essayez de saisir quelques exemples simples de votre cru, comme&nbsp;:

    ```js
    10 + 7
    9 * 8
    60 % 3
    ```

2.  Déclarez et initialisez quelques variables, puis utilisez‑les dans des opérations. Les variables se comporteront exactement comme les valeurs qu'elles contiennent pour les besoins de l'opération. Par exemple&nbsp;:

    ```js
    const num1 = 10;
    const num2 = 50;
    9 * num1;
    num1 ** 3;
    num2 / num1;
    ```

3.  Pour terminer cette partie, entrez quelques expressions plus compliquées, comme&nbsp;:

    ```js
    5 + 10 * 3;
    num2 % 9 * num1;
    num2 + num1 / 8 + 2;
    ```

Certaines opérations de cet ensemble ne vous renvoient peut-être pas le résultat attendu&nbsp;; le paragraphe qui suit vous explique pourquoi.

### Priorité des opérateurs (précédence)

Revenons sur le dernier exemple ci‑dessus, en supposant que `num2` contient la valeur 50 et `num1` contient 10 (comme défini plus haut)&nbsp;:

```js
num2 + num1 / 8 + 2;
```

En tant qu'humain, vous pouvez lire «&nbsp;50 plus 10 égale 60&nbsp;»*, puis «&nbsp;8 plus 2 égale 10&nbsp;» et finalement «&nbsp;60 divisé par 10 égale 6&nbsp;».

Mais le navigateur calcule «&nbsp;10 sur 8 égale 1.25&nbsp;», puis «&nbsp;50 plus 1.25 plus 2 égale 53.25&nbsp;».

Cela est dû à **la précédence des opérateurs**. Certains sont appliqués avant d'autres dans une opération (on parle d'une expression en programmation). En JavaScript, la précédence des opérateurs est identique à celle enseignée à l'école&nbsp;: multiplication et division sont toujours effectuées en premier, suivies de l'addition et de la soustraction (le calcul est toujours exécuté de la gauche vers la droite).

Si vous voulez contourner les règles de précédence des opérateurs, vous pouvez mettre entre parenthèses les parties que vous souhaitez voir calculées en premier. Pour obtenir un résultat égal à 6, nous devons donc écrire&nbsp;:

```js
(num2 + num1) / (8 + 2);
```

Essayez-le et voyez le résultat obtenu.

> **Note :** La liste complète de tous les opérateurs JavaScript et de leur précédence peut être trouvée dans [la page de référence sur les expressions et les opérateurs](fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#précédence_des_opérateurs).

## Opérateurs d'incrémentation et de décrémentation

Quelquefois vous aurez besoin d'ajouter ou retrancher 1 à une valeur de variable de manière répétitive. On effectue commodément cette opération à l'aide des opérateurs d'incrémentation (`++`) ou de décrémentation (`--`). Nous nous sommes servis de `++` dans le jeu «&nbsp;Devinez le nombre&nbsp;» dans notre article [Première plongée dans le JavaScript](/fr/docs/Learn/JavaScript/Introduction_to_JavaScript_1/A_first_splash) pour ajouter 1 à la variable `guessCount` afin de décompter le nombre de suppositions restantes après chaque tour.

```js
guessCount++;
```

Jouons avec ces opérateurs dans la console. Notez d'abord qu'il n'est pas possible de les appliquer directement à un nombre, ce qui peut paraître étrange, mais cet opérateur assigne à une variable une nouvelle valeur mise à jour, il n'agit pas sur la valeur elle‑même. Ce qui suit renvoie une erreur&nbsp;:

```js
3++;
```

Vous ne pouvez donc incrémenter qu'une variable déjà existante. Essayez ceci&nbsp;:

```js
let num1 = 4;
num1++;
```

La ligne 2 est quelque peu étrange&nbsp;! En écrivant cela, elle renvoie la valeur 4&nbsp;: c'est dû au fait que l'explorateur renvoie la valeur courante, _puis_ incrémente la variable. Vous constaterez qu'elle a bien été incrémentée si vous demandez à la revoir&nbsp;:

```js
num1;
```

C'est pareil avec `--`&nbsp;: essayez ce qui suit&nbsp;:

```js
let num2 = 6;
num2--;
num2;
```

> **Note :** En mettant l'opérateur avant la variable plutôt qu'après, le navigateur agira dans l'ordre inverse (incrément/décrément de la variable _puis_ renvoi de la valeur). Essayez les exemples plus haut, mais cette fois avec `++num1` et `--num2`.

## Opérateurs d'affectation

Les opérateurs d'affectation sont ceux qui fixent la valeur d'une variable. Nous avons déjà utilisé plusieurs fois l'opérateur le plus élémentaire de cette catégorie, `=` — il donne à la variable de gauche la valeur indiquée à droite&nbsp;:

```js
let x = 3; // x contient la valeur 3
let y = 4; // y contient la valeur 4
x = y; // x contient maintenant la même valeur que y, 4
```

Mais il existe des types d'opérateur plus complexes, qui procurent des raccourcis utiles pour un code plus propre et plus efficace. Les plus courants sont listés ici&nbsp;:

| Opérateur | Nom                           | But                                                                                                                  | Exemple           | Raccourci pour       |
| --------- | ----------------------------- | -------------------------------------------------------------------------------------------------------------------- | ----------------- | -------------------- |
| `+=`      | Addition et affectation       | Ajoute la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable      | `x = 3; x += 4;`  | `x = 3; x = x + 4;`  |
| `-=`      | Soustraction et affectation   | Soustrait la valeur de droite à la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable   | `x = 6; x -= 3;`  | `x = 6; x = x - 3;`  |
| `*=`      | Multiplication et affectation | Multiplie la valeur de droite par la valeur de la variable de gauche, puis renvoie la nouvelle valeur de la variable | `x = 2; x *= 3;`  | `x = 2; x = x * 3;`  |
| `/=`      | Division et affectation       | Divise la valeur de la variable de gauche par la valeur de droite, puis renvoie la nouvelle valeur de la variable    | `x = 10; x /= 5;` | `x = 10; x = x / 5;` |

Saisissez quelques-uns de ces exemples dans la console pour avoir une idée de leur fonctionnement. Dans chaque cas, voyez si vous avez deviné la valeur avant de saisir la deuxième ligne.

Notez que vous pouvez opportunément utiliser une autre variable comme opérateur sur la droite de chaque expression, par exemple&nbsp;:

```js
let x = 3; // x contient la valeur 3
let y = 4; // y contient la valeur 4
x *= y; // x contient maintenant la valeur 12
```

> **Note :** Il y a des tas d'[autres opérateurs d'affectation disponibles](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators#opérateurs_d'affectation), mais ceux‑ci sont les plus courants, à apprendre dès maintenant.

## Apprentissage actif&nbsp;: dimensionner la boîte d'un canevas

Dans cet exercice, vous allez manier quelques nombres et opérateurs pour changer la taille d'une boîte. La boîte est tracée à l'aide de [l'API Canvas](/fr/docs/Web/API/Canvas_API). Il n'est pas nécessaire de savoir comment elle fonctionne, concentrez-vous simplement sur les mathématiques pour l'instant. Les largeur et hauteur de la boîte (en pixels) sont définies par les variables `x` et `y`, qui sont toutes deux initialisées avec la valeur 50.

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html", '100%', 620)}}

**[Ouvrir dans une nouvelle fenêtre](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/editable_canvas.html)**

Le code dans la boîte ci-dessus peut être modifié. Un commentaire signale les deux lignes que vous devez mettre à jour pour faire en sorte que la boîte grossisse ou rétrécisse aux tailles données, en utilisant certains opérateurs et/ou valeurs dans chaque cas. Essayez ce qui suit&nbsp;:

- Modifiez la ligne qui calcule `x` pour que la boîte conserve sa largeur de 50 pixels, mais que 50 soit calculé avec les nombres 43 et 7 ainsi qu'un opérateur arithmétique.
- Modifiez la ligne qui calcule `y` pour que la boîte prenne une hauteur de 75 pixels, mais que 75 ait été calculé avec les nombres 25 et 3 ainsi qu'un opérateur arithmétique.
- Modifiez la ligne qui calcule `x` pour que la boîte prenne une largeur de 250pixels, mais que 250 ait été calculé avec deux nombres ainsi que l'opérateur de reste (modulo).
- Modifiez la ligne qui calcule `y` pour que la boîte prenne une hauteur de 150pixels, mais que 150 ait été calculé en utilisant 3 nombres et les opérateurs de soustraction et de division.
- Modifiez la ligne qui calcule `x` pour que la boîte prenne une largeur de 200pixels, mais que 200 ait été calculé en se servant du nombre 4 et d'un opérateur d'affectation.
- Modifiez la ligne qui calcule `y` pour que la boîte prenne une hauteur de 200 pixels, mais que 200 ait été calculé en utilisant les nombres 50 et 3 ainsi que les opérateurs de multiplication, d'addition et d'affectation.

Pas d'inquiétude si vous vous trompez. Vous pouvez toujours presser le bouton «&nbsp;<i lang="en">Reset</i>&nbsp;» et les choses fonctionneront à nouveau. Après avoir répondu correctement aux questions posées, amusez‑vous avec ce code ou créez vos propres défis.

## Opérateurs de comparaison

Parfois nous avons besoin d'exécuter des tests vrai/faux, puis d'agir en fonction du résultat — pour ce faire, nous utilisons des **opérateurs de comparaison**.

| Opérateur | Nom                 | But                                                                      | Exemple       |
| --------- | ------------------- | ------------------------------------------------------------------------ | ------------- |
| `===`     | Égalité stricte     | Teste si les valeurs de droite et de gauche sont identiques              | `5 === 2 + 4` |
| `!==`     | Non-égalité stricte | Teste si les valeurs de droite et de gauche ne sont pas identiques       | `5 !== 2 + 3` |
| `<`       | Inférieur à         | Teste si la valeur de gauche est plus petite que celle de droite.        | `10 < 6`      |
| `>`       | Supérieur à         | Teste si la valeur de gauche est plus grande que celle de droite.        | `10 > 20`     |
| <=        | Inférieur ou égal à | Teste si la valeur de gauche est plus petite ou égale à celle de droite. | `3 <= 2`      |
| >=        | Supérieur ou égal à | Teste si la valeur de gauche est supérieure ou égale à celle de droite.  | `5 >= 4`      |

> **Note :** Vous verrez peut‑être certaines personnes utiliser `==` et `!=` pour leurs tests d'égalité ou non-égalité. Ces opérateurs sont valides en JavaScript, mais différents de `===`/`!==`. Les versions avec deux caractères testent si les valeurs sont les mêmes, mais pas si les types de données sont les mêmes. Les versions strictes à trois caractères testent à la fois l'égalité des valeurs _et_ des types de données. Il y a moins d'erreurs avec les versions strictes, donc nous vous engageons à les utiliser dans tous les cas.

Si vous entrez certaines de ces valeurs dans une console, vous constaterez que toutes renvoient une valeur `true`/`false` — les booléens mentionnés dans l'article précédent. Ces opérateurs sont très utiles, car ils nous permettent de prendre des décisions dans le code, et ils sont utilisés chaque fois que nous avons besoin de faire un choix. Par exemple, les booléens s'utilisent pour&nbsp;:

- Afficher l'étiquette textuelle ad hoc sur un bouton selon qu'une fonctionnalité est active ou pas
- Afficher un message de fin de jeu si un jeu est terminé ou un message de victoire si le jeu a été remporté
- Afficher des remerciements saisonniers corrects selon la saison de vacances
- Faire un zoom avant ou arrière sur une carte selon le niveau de zoom choisi

Nous verrons comment coder cette logique quand nous étudierons les directives conditionnelles dans un article ultérieur. Pour le moment, regardons un exemple rapide&nbsp;:

```html
<button>Démarrer la machine</button>
<p>La machine est arrêtée.</p>
```

```js
const btn = document.querySelector('button');
const txt = document.querySelector('p');

btn.addEventListener('click', updateBtn);

function updateBtn() {
  if (btn.textContent === 'Démarrer la machine') {
    btn.textContent = 'Arrêter la machine';
    txt.textContent = 'La machine est en marche&nbsp;!';
  } else {
    btn.textContent = 'Démarrer la machine';
    txt.textContent = 'La machine est arrêtée.';
  }
}
```

{{EmbedGHLiveSample("learning-area/javascript/introduction-to-js-1/maths/conditional.html", '100%', 100)}}

**[Ouvrir dans une nouvelle fenêtre](https://mdn.github.io/learning-area/javascript/introduction-to-js-1/maths/conditional.html)**

Vous pouvez voir l'utilisation de l'opérateur d'égalité stricte dans la fonction `updateBtn()`. Dans ce cas, nous ne testons pas si deux expressions mathématiques ont la même valeur&nbsp;: nous testons si le contenu textuel d'un bouton contient une certaine chaîne, mais c'est toujours le même principe. Si le bouton affiche «&nbsp;Démarrer la machine&nbsp;» quand on le presse, nous changeons son libellé en «&nbsp;Arrêter la machine&nbsp;» et mettons à jour le libellé comme il convient. Si le bouton indique «&nbsp;Arrêter la machine&nbsp;» au moment de le presser, nous basculons le libellé à nouveau.

> **Note :** Un contrôle qui alterne entre deux états porte généralement le nom d'interrupteur (à bascule) ou <i lang="en">toggle</i> en anglais. Il bascule d'un état à l'autre&nbsp;: allumé, éteint, etc.

## Testez vos compétences&nbsp;!

Vous voilà parvenu⋅e à la fin de cet article. Mais saurez-vous vous rappeler des informations les plus importantes&nbsp;? Vous pouvez passer quelques tests afin de vérifier que vous avez retenu les concepts importants avant de continuer. Voir [Testez vos compétences&nbsp;: les mathématiques](/fr/docs/Learn/JavaScript/First_steps/Test_your_skills:_Math).

## Résumé

Dans cet article, nous avons abordé les informations fondamentales concernant les nombres en JavaScript, à connaître absolument pour débuter convenablement. Vous verrez encore et encore des utilisations de nombres tout au long de cette introduction à JavaScript, mieux valait donc les croiser dès maintenant. Si vous êtes de celles ou de ceux qui n'aiment pas les maths, vous noterez avec satisfaction que ce chapitre était vraiment très court.

Dans l'article suivant, nous étudierons le texte et les façons dont JavaScript nous permet de le manipuler.

> **Note :** Si les maths vous plaisent et que vous souhaitez en savoir plus sur la manière dont elles sont implémentées en JavaScript, vous trouverez plus de précisions dans la section principale JavaScript de MDN. Pour commencer, nous vous conseillons [Nombres et dates](/fr/docs/Web/JavaScript/Guide/Numbers_and_dates) et [Expressions et opérateurs](/fr/docs/Web/JavaScript/Guide/Expressions_and_Operators).

{{PreviousMenuNext("Learn/JavaScript/First_steps/Variables", "Learn/JavaScript/First_steps/Strings", "Learn/JavaScript/First_steps")}}

## Dans ce module

- [Qu'est-ce que JavaScript&nbsp;?](/fr/docs/Learn/JavaScript/First_steps/What_is_JavaScript)
- [Un premier plongeon dans JavaScript](/fr/docs/Learn/JavaScript/First_steps/A_first_splash)
- [Qu'est-ce qui s'est passé&nbsp;? Déboguer du JavaScript](/fr/docs/Learn/JavaScript/First_steps/What_went_wrong)
- [Enregistrer les informations nécessaires&nbsp;: les variables](/fr/docs/Learn/JavaScript/First_steps/Variables)
- **Mathématiques de base en JavaScript — nombres et opérateurs**
- [Manipuler du texte&nbsp;: les chaînes de caractères en JavaScript](/fr/docs/Learn/JavaScript/First_steps/Strings)
- [Les méthodes utiles pour les chaînes de caractères](/fr/docs/Learn/JavaScript/First_steps/Useful_string_methods)
- [Les tableaux](/fr/docs/Learn/JavaScript/First_steps/Arrays)
- [Évaluation&nbsp;: un générateur d'histoire loufoque](/fr/docs/Learn/JavaScript/First_steps/Silly_story_generator)
