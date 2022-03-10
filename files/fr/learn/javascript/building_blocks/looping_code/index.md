---
title: Les boucles dans le code
slug: Learn/JavaScript/Building_blocks/Looping_code
tags:
  - Article
  - CodingScripting
  - DO
  - Débutant
  - Guide
  - JavaScript
  - Learn
  - Loop
  - break
  - continue
  - for
  - l10n:priority
  - while
translation_of: Learn/JavaScript/Building_blocks/Looping_code
original_slug: Apprendre/JavaScript/Building_blocks/Looping_code
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}

Les langages de programmation sont très utiles pour effectuer des tâches répétitives, allant de calculs basiques à à peu près n'importe quelle autre situation où vous avez un certain nombre d'actions similaires à répéter. Ici, nous allons étudier les structures de boucle disponible dans JavaScript qui répondent à un tel besoin.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Culture informatique basique, compréhension basique du HTML et du CSS,
        <a href="/fr/docs/Learn/JavaScript/First_steps"
          >Premiers pas en JavaScript...</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>Comprendre comment utiliser les boucles dans JavaScript.</td>
    </tr>
  </tbody>
</table>

## Laissez-moi dans la boucle

Boucles, boucles, boucles. Alors qu'elles sont associées aux [cheveux d'une célèbre héroïne de fiction](https://fr.wikipedia.org/wiki/Boucles_d%27or_et_les_Trois_Ours), elles sont également un concept extrêmement important en programmation. Les boucles de programmation ne font que faire la même action encore et toujours – ce qui se traduit par **itérer** en langage de programmeur.

Commençons par examiner le cas d'un fermier qui doit s'assurer d'avoir assez de nourriture pour nourrir sa famille pour la semaine. Il pourrait ainsi utiliser la boucle suivante :

![](loop_js-02-farm.png)

Une boucle a normalement un ou plusieurs des composants suivants :

- Un **compteur**, qui est initialisé à une certaine valeur - c'est le point de départ de la boucle ("Départ : Je n'ai pas de nourriture / I have no food", ci-dessus).
- Une **condition de sortie**, qui est le critère grâce auquel la boucle s'arrête - la plupart du temps, il s'agira d'une certaine valeur que le compteur doit atteindre. Elle est illustrée ci-dessus par "Ai-je assez de nourriture ? / Have I got enough food?". Disons qu'il aura besoin de 10 portions de nourriture pour nourir sa famille.
- Un **itérateur**, qui incrémente généralement le compteur petit-à-petit à chaque boucle successive, jusqu'à ce que ceui-ci remplisse la condition de sortie. Nous n'avons pas explicitement illustré cela ci-dessus, mais nous pouvons penser que le fermier peut récolter 2 portions de nourriture par heure. On peut donc dire que, toutes les heures, la quantité de nourriture collectée est incrémentée de 2, et il regarde s'il a assez de nourriture. S'il a atteint 10 portions (la condition de sortie), il peut arrêter sa récolte et rentrer chez lui, satisfait de sa journée.

En {{glossary("pseudocode")}}, cela ressemblerait à ce qui suit :

    loop(nourriture = 0; besoinNourriture = 10) {
      if (nourriture = besoinNourriture) {
        exit loop;
        // Nous avons assez de nourriture, on rentre
      } else {
        nourriture += 2; // On doit rester 1 heure de plus
        // La boucle se répète ensuite
      }
    }

La quantité de nourriture dont le fermier a besoin est donc initialisée à 10, et la quantité dont il dispose est initialisée à 0. A chaque itération de la boucle, on vérifie si la quantité de nourriture dont le fermier dispose est égale à la quantité requise. Si c'est le cas, on peut sortir de la boucle. Sinon, le fermier passe une heure de plus à récolter de la nourriture, et la boucle itère à nouveau.

### À quoi ça sert ?

Arrivé à ce stade, vous avez sans doute compris le concept global des boucles, mais vous vous dites probablement : "Ok, bien, mais comment cela va-t-il m'aider à améliorer mes codes en JavaScript ?". Comme nous l'avons dit plus tôt, **les boucles ne font rien d'autre que répéter la même action encore et encore**, ce qui peut s'avérer utile pour **effectuer rapidement des tâches répétitives**.

Souvent, le code sera légèrement différent à chaque itération successive, ce qui signifie que vous pouvez effectuer une certaine quantité de tâches similaires, mais néanmoins quelque peu différentes - si vous avez beaucoup de calculs différents à effectuer, vous n'allez pas effectuer le même calcul encore et encore !

Regardons maintenant un exemple qui illustre parfaitement en quoi les boucles sont si intéressantes. Disons que nous voulons dessiner 100 cercles aléatoirement sur un [`<canvas>`](http://mdn.github.io/learning-area/javascript/building-blocks/loops/random-canvas-circles.html "L'élément <canvas> permet de modifier une zone graphique via un script (habituellement en JavaScript ou grâce à WebGL). Il peut par exemple être utilisé afin de dessiner des graphiques, manipuler des images ou jouer des animations.") (appuyez sur le bouton _Update_ pour lancer le programme à nouveau et voir différentes dispositions aléatoires).

#### Exemple

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Random canvas circles</title>
    <style>
      html {
        width: 100%;
        height: inherit;
        background: #ddd;
      }

      canvas {
        display: block;
      }

      body {
        margin: 0;
      }

      button {
        position: absolute;
        top: 5px;
        left: 5px;
      }
    </style>
  </head>
  <body>

  <button>Update</button>

  <canvas></canvas>

    <script>
    const bouton = document.querySelector('button');
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    let WIDTH = document.documentElement.clientWidth;
    let HEIGHT = document.documentElement.clientHeight;

    canvas.width = WIDTH;
    canvas.height = HEIGHT;

    function random(number) {
      return Math.floor(Math.random() * number);
    }

    function draw() {
      ctx.clearRect(0, 0, WIDTH, HEIGHT);
      for (let i = 0; i < 100; i++) {
        ctx.beginPath();
        ctx.fillStyle = 'rgba(255,0,0,0.5)';
        ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
        ctx.fill();
      }
    }

    bouton.addEventListener('click',draw);

    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Exemple', '100%', 400) }}

#### Principe de boucle

Vous n'avez pas besoin de comprendre entièrement le code pour l'instant, mais regardons plus en détail la partie du code qui trace les 100 cercles :

```js
for (let i = 0; i < 100; i++) {
  ctx.beginPath();
  ctx.fillStyle = 'rgba(255,0,0,0.5)';
  ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
  ctx.fill();
}
```

Vous devriez comprendre l'idée basique - nous utilisons une boucle pour effectuer 100 itérations de ce code, chacune dessinant un cercle à une position quelconque sur la page. La quantité de lignes de code nécessaire serait identique si l'on voulait tracer 100 cercles, 1000 ou même 100000. Seul le nombre d'itérations devrait changer.

Si nous n'utilisions pas de boucle ici, nous aurions du répéter le code suivant pour chaque cercle que nous aurions voulu dessiner :

```js
ctx.beginPath();
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.arc(random(WIDTH), random(HEIGHT), random(50), 0, 2 * Math.PI);
ctx.fill();
```

Mais cela prend du temps inutilement, et rend le code difficilement maintenable. Les boucles sont vraiment les meilleures.

## La boucle standard

Commençons maintenant à voir quelques formes de boucles spécifiques. La première, celle que vous utiliserez le plus souvent, est la boucle [for](/fr/docs/Web/JavaScript/Reference/Instructions/for). Elle a la syntaxe suivante :

    for (initialisation; condition de sortie; expression finale) {
      // code à exécuter
    }

Nous avons ici :

1.  Le mot-clé `for`, suivi par des parenthèses.
2.  A l'intérieur des parenthèses, on a trois objets :

    1.  Une **initialisation** — il s'agit souvent d'une variable initialisée à une certaine valeur, qui est incrémentée afin de compter le nombre de fois où la boucle s'est exécutée. On peut également la nommer **compteur**.
    2.  Une **condition de sortie** — comme mentionné précédemment, cela définit le moment où la boucle doit arrêter de s'exécuter. C'est généralement une expression contenant un opérateur de comparaison, un test pour voir si la condition de sortie est atteinte.
    3.  Une **expression finale** — Elle est toujours évaluée (ou exécutée) chaque fois que la boucle a effectué une itération complète. Cela sert souvent à incrémenter (ou dans certains cas décrémenter) le compteur, pour le rapprocher de la valeur de la condition de sortie.

3.  Des accolades contenant un bloc de code — ce code sera exécuté chaque fois que la boucle itère.

Regardons maintenant un vrai exemple, afin de visualiser leurs actions plus clairement.

```js
const chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = "Mes chat s'appellent ";
const paragraphe = document.querySelector('p');

for (let i = 0; i < chats.length; i++) {
  info += chats[i] + ', ';
}

paragraphe.textContent = info;
```

### Sortie

Cela nous donne la sortie suivante :

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Exemple de boucles</title>
  </head>
  <body>

  <p></p>

    <script>
    const chats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
    let info = "Mes chats s'appellent ";
    const paragraphe = document.querySelector('p');

    for (let i = 0; i < chats.length; i++) {
      info += chats[i] + ', ';
    }

    paragraphe.textContent = info;

    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Sortie', '100%', 60) }}

> **Note :** Vous pouvez trouver aussi cet [exemple de code sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for.html) (et [le voir tourner en live](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for.html)).

Cela montre une boucle utilisée pour itérer sur les éléments d'un tableau et faire quelque chose avec chacun d'eux — un schéma très commun en JavaScript. Ici :

1.  L'itérateur, `i`, commence à `0` (`let i = 0`).
2.  On lui a demandé de s'exécuter jusqu'à ce que sa valeur ne soit plus inférieure à la longueur du tableau chats. C'est important  — la condition de sortie montre la condition à laquelle la boucle continue de s'exécuter. C'est à dire dans ce cas, tant que `i < chats.length` est vrai, la boucle continuera à s'exécuter.
3.  Au sein de la boucle, on concatène les élèments présents dans cette boucle (`cats[i]` est `cats[quelque soit la valeur de i lors de l'iteration]`) avec une virgule et un espace, à la fin de la variable `info`. Donc :

    1.  Pendant le premier lancement, `i = 0`, donc `cats[0] + ', '` sera concaténé à ("Bill, ")
    2.  Au second lancement, `i = 1`, donc `cats[1] + ', '` et sera concaténé à  ("Jeff, ")
    3.  Et ainsi de suite. Aprés chaque tour de boucle, 1 est ajouté à `i` (`i++`), et alors le processus recommence encore.

4.  Quand `i` devient égal à `cats.length`, la boucle s'arrête, et le navigateur va bouger au prochain bout de code aprés la boucle.

> **Note :** Nous avons fait sortir la condition `i < cats.length`, et pas `i <= cats.length`, parce que les ordinateurs comptent à partir de 0, pas 1 — nous avons démarré `i` à `0`, et allons allers jusqu'à `i = 4` (l'index du dernier item de la table/tableau). `cats.length` retourne 5, comme il y a 5 items dans la table, nous n'allont pas aller à `i = 5`, cela retournerai `undefined` pour le dernier item (il n'y a pas de item de table avec un index de 5). Par conséquent, nous voulons aller de 1 à moins que `cats.length` (`i <`), ce n'est pas la même chose que `cats.length` (`i <=`).

> **Note :** Une erreur commune avec les conditions de sortie est de les faire utiliser "égal à" plutôt que de dire "inférieur ou égal à". Si nous voulions faire tourner notre boucle jusqu'à i = 5, la condition de sortie aurait besoin d'être i <= cats.length / Si nous la mettons à i = cats.length, la boucle ne fonctionnerait pas du tout parce que i n'est pas égal à 5 sur la première itération de la boucle, de sorte que cela s'arrête immédiatement.

Un petit problème est que nous avons laissé la phrase de sortie mal formée :

> Mes chats s'appellent Bill, Jeff, Pete, Biggles, Jasmin,

Idéalement, nous voulons changer la concaténation sur l'itération de la boucle finale de sorte que nous n'ayons pas de virgule à la fin de la phrase. Bien, pas de problème – nous pouvons heureusement insérer une structure conditionnelle dans notre boucle for pour gérer ce cas particulier :

```js
for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }
}
```

> **Note :** Vous pouvez trouver cet exemple de code sur [GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/basic-for-improved.html) (et aussi le [voir en ligne](http://mdn.github.io/learning-area/javascript/building-blocks/loops/basic-for-improved.html)).

> **Attention :** Avec for — comme avec toutes les boucles  — vous devez vous assurer que l'initialiseur est itéré de sorte qu'il finisse par atteindre la condition de sortie. Si ce n'est pas le cas, la boucle continuera indéfiniment, et soit le navigateur l'arrêtera, soit il se bloquera. C'est ce qu'on appelle une **boucle infinie.**

## Quitter une boucle avec break

Si vous voulez quitter une boucle avant que toutes les itérations aient été terminées, vous pouvez utiliser l'instruction [break](/fr/docs/Web/JavaScript/Reference/Instructions/break). Nous l'avons déjà rencontré dans l'article précédent lorsque nous examinions les [instructions switch](/fr/Apprendre/JavaScript/Building_blocks/conditionals#Instruction_switch)&nbsp;: lorsqu'un argument est rencontré dans une instruction switch qui correspond à l'expression d'entrée, l'instruction break quitte immédiatement l'instruction switch et passe au code après elle.

C'est la même chose avec les boucles – un `break` quittera immédiatement la boucle et fera passer le navigateur sur n'importe quel code qui le suit.

Supposons que nous voulions effectuer une recherche parmi une liste de contacts et de numéros de téléphone et que nous ne renvoyions que le nombre que nous voulions trouver. Tout d'abord, du HTML simple - un texte {{htmlelement ("input")}} nous permettant d'entrer un nom à rechercher, un élément {{htmlelement ("button")}} pour soumettre une recherche, et un {{htmlelement ("p")}} élément pour afficher les résultats dans :

```html
<label for="search">Search by contact name: </label>
<input id="search" type="text">
<button>Search</button>

<p></p>
```

Maintenant sur le JavaScript :

```js
const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const paragraphe = document.querySelector('p');
const input = document.querySelector('input');
const bouton = document.querySelector('button');

bouton.addEventListener('click', function() {
  let searchName = input.value;
  input.value = '';
  input.focus();
  for (let i = 0; i < contacts.length; i++) {
    let splitContact = contacts[i].split(':');
    if (splitContact[0] === searchName) {
      paragraphe.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
      break;
    } else {
      paragraphe.textContent = 'Contact not found.';
    }
  }
});
```

### Résultat

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Simple contact search example</title>
  </head>
  <body>

  <label for="search">Search by contact name: </label>
  <input id="search" type="text">
  <button>Search</button>

  <p></p>

    <script>
    const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
    const paragraphe = document.querySelector('p');
    const input = document.querySelector('input');
    const bouton = document.querySelector('button');

    bouton.addEventListener('click', function() {
      let searchName = input.value;
      input.value = '';
      input.focus();
      for (let i = 0; i < contacts.length; i++) {
        let splitContact = contacts[i].split(':');
        if (splitContact[0] === searchName) {
          paragraphe.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
          break;
        } else {
          paragraphe.textContent = 'Contact not found.';
        }
      }
    });
    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Résultat', '100%', 100) }}

1.  Tout d'abord, nous avons quelques définitions de variables — nous avons un tableau d'informations de contact, avec chaque élément étant une chaîne contenant un nom et un numéro de téléphone séparés par deux points.
2.  Ensuite, nous attachons un écouteur d'événement au bouton (`bouton`), de sorte que quand il est pressé, du code est exécuté pour effectuer la recherche et renvoyer les résultats.
3.  Nous stockons la valeur saisie dans l'input dans une variable appelée `searchName`, , avant de vider l'input et le recentrer, prêt pour la recherche suivante.
4.  Maintenant sur la partie intéressante, la boucle for :

    1.  Nous commençons le compteur à `0`, exécutons la boucle jusqu'à ce que le compteur ne soit plus inférieur à `contacts.length`, et incrémentons `i` par 1 après chaque itération de la boucle.
    2.  À l'intérieur de la boucle, nous divisons d'abord le contact actuel (`contacts[i]`) au caractère deux-points et stockons les deux valeurs résultantes dans un tableau appelé `splitContact`.
    3.  Nous utilisons ensuite une instruction conditionnelle pour tester si `splitContact[0]` (le nom du contact) est égal au `searchName` entré. Si c'est le cas, nous introduisons une `string / chaîne de caractère` dans le paragraphe pour indiquer quel est le numéro du contact et utiliser `break` pour terminer la boucle.

5.  Si le nom du contact ne correspond pas à la recherche entrée, le texte du paragraphe est défini sur "Contact not found." et la boucle continue son itération.

> **Note :** Vous pouvez trouver cet exemple de code sur [GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/contact-search.html) (aussi [voir en ligne](http://mdn.github.io/learning-area/javascript/building-blocks/loops/contact-search.html)).

## Passer des itérations avec continue

L'instruction [continue](/fr/docs/Web/JavaScript/Reference/Instructions/continue) fonctionne d'une manière similaire à `break`, mais au lieu de sortir complètement de la boucle, elle passe à l'itération suivante de la boucle. Regardons un autre exemple qui prend un nombre comme une entrée, et retourne seulement les nombres qui sont des carrés d'entiers (nombres entiers).

Le HTML est fondamentalement le même que le dernier exemple — une entrée de texte simple, et un paragraphe pour la sortie. Le JavaScript est la plupart du temps identique, même si la boucle elle-même est un peu différente :

```js
let num = input.value;

for (let i = 1; i <= num; i++) {
  let sqRoot = Math.sqrt(i);
  if (Math.floor(sqRoot) !== sqRoot) {
    continue;
  }

  paragraphe.textContent += i + ' ';
}
```

Ici la sortie :

```html hidden
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Integer squares generator</title>
  </head>
  <body>

  <label for="number">Enter number: </label>
  <input id="number" type="text">
  <button>Generate integer squares</button>

  <p>Output: </p>

    <script>
    const paragraphe = document.querySelector('p');
    const input = document.querySelector('input');
    const bouton = document.querySelector('button');

    bouton.addEventListener('click', function() {
      paragraphe.textContent = 'Output: ';
      let num = input.value;
      input.value = '';
      input.focus();
      for (let i = 1; i <= num; i++) {
        let sqRoot = Math.sqrt(i);
        if (Math.floor(sqRoot) !== sqRoot) {
          continue;
        }

        paragraphe.textContent += i + ' ';
      }
    });
    </script>

  </body>
</html>
```

{{ EmbedLiveSample('Passer_des_itérations_avec_continue', '100%', 100) }}

1.  Dans ce cas, l'entrée doit être un nombre (`num`). La boucle `for` est dotée d'un compteur commençant à 1 (car nous ne sommes pas intéressés par 0 dans ce cas), une condition de sortie indiquant que la boucle s'arrêtera lorsque le compteur deviendra plus grand que l'entrée `num`, et un itérateur ajoutera 1 au compteur à chaque fois.
2.  À l'intérieur de la boucle, nous trouvons la racine carrée de chaque nombre en utilisant [Math.sqrt(i)](/fr/docs/Web/JavaScript/Reference/Global_Objects/Math/sqrt0, puis vérifions si la racine carrée est un entier en vérifiant si elle est identique à elle-même lorsqu'elle a été arrondie à l'entier le plus proche (ceci est ce que [Math.floor()](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Math/floor) fait au nombre auquel il est passé).
3.  Si la racine carrée et la racine carrée arrondie ne sont pas égales les unes aux autres (`! ==`), cela signifie que la racine carrée n'est pas un entier, donc cela ne nous intéresse pas. Dans un tel cas, nous utilisons l'instruction `continue` pour passer à l'itération de la boucle suivante sans enregistrer le numéro n'importe où.
4.  Si la racine carrée est un entier, nous passons complètement le bloc if pour que l'instruction `continue` ne soit pas exécutée; à la place, nous concaténons la valeur `i` actuelle plus un espace sur la fin du contenu du paragraphe.

> **Note :** Vous pouvez trouver cet exemple de code sur [GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/integer-squares.html) (aussi [voir en ligne](http://mdn.github.io/learning-area/javascript/building-blocks/loops/integer-squares.html)).

## while et do ... while

`for` n'est pas le seul type de boucle disponible en JavaScript. Il y en a beaucoup d'autres et, même si vous n'avez pas besoin de comprendre tout cela maintenant, il vaut mieux jeter un coup d'œil à la structure de quelques autres pour pouvoir reconnaître les mêmes caractéristiques au travail d'une manière légèrement différente.

D'abord, regardons la boucle [while](/fr/docs/Web/JavaScript/Reference/Instructions/while). La syntaxe de cette boucle ressemble à ceci:

    initializer
    while (exit-condition) {
      // code to run

      final-expression
    }

Cela fonctionne de manière très similaire à la boucle for, sauf que la variable de départ est définie avant la boucle, et l'expression finale est incluse dans la boucle après le code à exécuter — plutôt que ces deux éléments soient inclus dans les parenthèses. La condition de sortie est incluse dans les parenthèses, précédées du mot-clé `while` au lieu de `for`.

Les mêmes trois éléments sont toujours présents, et ils sont toujours définis dans le même ordre que dans la boucle for - cela est logique, car vous devez toujours définir un initialiseur avant de pouvoir vérifier s'il a atteint la condition de sortie ; la condition finale est ensuite exécutée après l'exécution du code à l'intérieur de la boucle (une itération a été effectuée), ce qui ne se produira que si la condition de sortie n'a pas encore été atteinte.

Jetons un coup d'oeil à notre exemple de liste de chats, mais réécrit pour utiliser une boucle while:

```js
let i = 0;

while (i < cats.length) {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
}
```

> **Note :** Cela fonctionne toujours comme prévu regardez le ici [GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/while.html) ([Voir en ligne](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/while.html) le code complet).

La boucle [do...while](/fr/docs/Web/JavaScript/Reference/Instructions/do...while) est très similaire, mais dénote une variation par rapport à la structure de la boucle while :

    initializer
    do {
      // code to run

      final-expression
    } while (exit-condition)

Dans ce cas, l'initialiseur vient en premier, avant que la boucle ne commence. Le mot-clé `do` précède directement les accolades contenant le code à exécuter et l'expression finale.

Le différentiateur ici est que la condition de sortie vient après tout, enveloppée entre parenthèses et précédée d'un mot-clé `while`. Dans une boucle `do ... while`, le code à l'intérieur des accolades est toujours exécuté une fois avant que la vérification ne soit effectuée pour voir si elle doit être exécutée à nouveau (dans while et for, la vérification arrive en premier, donc le code pourrait ne jamais être exécuté ).

Réécrivons notre exemple de listing de chat pour utiliser une boucle `do ... while`&nbsp;:

```js
let i = 0;

do {
  if (i === cats.length - 1) {
    info += 'and ' + cats[i] + '.';
  } else {
    info += cats[i] + ', ';
  }

  i++;
} while (i < cats.length);
```

> **Note :** Encore, cela fonctionne toujours comme prévu — regardez le ici [GitHub](http://mdn.github.io/learning-area/javascript/building-blocks/loops/do-while.html) ([Voir en ligne](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/loops/do-while.html) le code complet).

> **Attention :** Avec while et do ... while – comme avec toutes les boucles – vous devez vous assurer que l'initialiseur est itéré pour qu'il atteigne finalement la condition de sortie. Si ce n'est pas le cas, la boucle continuera indéfiniment, et soit le navigateur l'arrêtera, soit il se bloquera. C'est ce qu'on appelle une **boucle infinie.**

## Apprentissage actif : Lancer le compte à rebours

Dans cet exercice, nous vous proposons d'écrire un compte à rebours de lancement dans la boîte de sortie, de 10 jusqu'à "Blast Off." Plus précisément, il s'agit de :

- Créer une boucle de 10 jusqu'à 0. Nous vous avons fourni un initialiseur — `let i = 10;`
- Pour chaque itération, créer un nouveau paragraphe à ajouter dans la balise de sortie `<div>` que nous avons selectionnée en utilisant : `const output = document.querySelector('.output');` En commentaire, nous vous avons fourni trois lignes de code qui doivent être utilisées quelque part à l'intérieur de la boucle :

  - `const paragraphe = document.createElement('p');` — crée un nouveau paragraphe.
  - `output.appendChild(para);` — ajoute le paragraphe à la sortie `<div>`.
  - `paragraphe.textContent =` — Rend le texte à l'intérieur du paragraphe identique à ce que vous avez entré du côté droit du signe égal.

- Chaque nombre de l'itération nécessite un texte différent dans le paragraphe de cette itération (vous aurez besoin d'une expression conditionnelle et plusieurs lignes du type : `paragraphe.textContent = )`

  - Si le nombre est 10, écrire "Countdown 10" dans le paragraphe.
  - Si le nombre est 0, écrire "Blast off!" dans le paragraphe.
  - Pour tout autre nombre, écrire simplement le nombre dans le paragraphe.

- Noubliez pas d'inclure un itérateur ! Quoi qu'il en soit, dans cet exemple nous comptons à rebours après chaque itération, pas de manière croissante, alors vous ne voudrez pas `i++` — Comment allez vous créer l'itération décroissante ?

Si vous faites une erreur, vous pourrez toujours réinitialiser l'exemple avec le bouton "Reset". Si vous êtes vraiment bloqué, appuyez sur le bouton "Show solution" pour voir une solution.

```html hidden
<h2>Sortie en direct</h2>
<div class="output" style="height: 410px;overflow: auto;">

</div>
<h2>Code modifiable</h2>
<p class="a11y-label">Appuyer sur Échap pour décibler le code</p>
<textarea id="code" class="playable-code" style="height: 300px;">
const output = document.querySelector('.output');
output.innerHTML = '';

// let i = 10;

// const paragraphe = document.createElement('p');
// paragraphe.textContent = ;
// output.appendChild(para);
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
const code = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

let jsSolution = 'let output = document.querySelector(\'.output\');\noutput.innerHTML = \'\';\n\nlet i = 10;\n\nwhile(i >= 0) {\n let para = document.createElement(\'p\');\n if(i === 10) {\n para.textContent = \'Countdown \' + i;\n } else if(i === 0) {\n  para.textContent = \'Blast off!\';\n } else {\n para.textContent = i;\n }\n\n output.appendChild(para);\n\n i--;\n}';
let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// empêcher la pression de la touche de tabulation de cibler
// un autre élément et insère une tabulation dans le textarea

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  let scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  let front = (textarea.value).substring(0, caretPos);
  let back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Apprentissage_actif_Lancer_le_compte_à_rebours', '100%', 780) }}

## Apprentissage actif : remplir une liste d'invités.

Dans cet exercice, nous vous proposons de prendre une liste d'invités stockée dans un tableau et de la mettre sur une liste d'invités. Mais cela n'est pas si simple — nous ne voulons pas laisser entrer Phil et Lola parce que ce sont des goinfres et qu'ils sont mal élevés, et ils mangent toujours toute la nourriture ! Nous avons deux listes, une pour les invités admis, une pour ceux que l'on refuse.

Plus précisément, nous attendons de vous :

- Que vous écriviez une boucle qui créé une itération de 0 jusqu'à la fin du tableau `people`. Vous aurez besoin de commencer avec un initialiseur type `let i = 0;` , mais quelle sera la condition de sortie
- Au cours de chaque itération, vérifiez si l'élément actuel du tableau est "Phil" ou "Lola" en utilisant une déclaration conditionnelle.

  - Si tel est le cas, concaténez l'élément à la fin du paragraphe `refused` du `textContent`, suivi d'une virgule et d'un espace.
  - Dans le cas contraire, concaténez l'élément à la fin du paragraphe `admitted`  du `textContent` suivi d'une virgule et d'un espace.

Nous vous avons déjà fourni les éléments suivants :

- `let i = 0;` — Votre initialiseur.
- `refused.textContent +=` — le début de la ligne qui va concaténer un élément à la fin du `refused.textContent`.
- `admitted.textContent +=` — le début de la ligne qui va concaténer un élément à la fin du `admitted.textContent`.

Question bonus — après avoir accompli les tâches ci-dessus, il vous restera deux listes de noms séparées par des virgules, mais elles seront mal présentées— il y aura des virgules à la fin de chacune d'elles. Pouvez-vous faire en sorte d'écrire des lignes de code qui coupent les dernières virgules dans chacune d'elles, et ajoute un arrêt total à la fin ? Jetez un oeil à l'article [Méthodes utiles pour les chaînes de caractères](/fr/docs/Learn/JavaScript/First_steps/methode_chaine_utile) pour obtenir de l'aide.

Si vous faites une erreur, vous pourrez toujours ré-initialiser l'exemple avec le bouton "Reset". Si vous êtes vraiment bloqué, appuyez sur le bouton "Show solution" pour voir une solution.

```html hidden
<h2>Live output</h2>
<div class="output" style="height: 100px;overflow: auto;">
  <p class="admitted">Admettre : </p>
  <p class="refused">Refuser : </p>
</div>

<h2>Editable code</h2>
<p class="a11y-label">Appuyer sur Échap pour décibler le code</p>
<textarea id="code" class="playable-code" style="height: 400px;width: 95%">
const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: '

// let i = 0;

// refused.textContent += ;
// admitted.textContent += ;

</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Reset">
  <input id="solution" type="button" value="Show solution">
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;
let userEntry = textarea.value;

function updateCode() {
  eval(textarea.value);
}

reset.addEventListener('click', function() {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = jsSolution;
  solution.value = 'Show solution';
  updateCode();
});

solution.addEventListener('click', function() {
  if(solution.value === 'Show solution') {
    textarea.value = solutionEntry;
    solution.value = 'Hide solution';
  } else {
    textarea.value = userEntry;
    solution.value = 'Show solution';
  }
  updateCode();
});

let jsSolution = 'const people = [\'Chris\', \'Anne\', \'Colin\', \'Terri\', \'Phil\', \'Lola\', \'Sam\', \'Kay\', \'Bruce\'];\n\nconst admitted = document.querySelector(\'.admitted\');\nconst refused = document.querySelector(\'.refused\');\n\nadmitted.textContent = \'Admit: \';\nrefused.textContent = \'Refuse: \'\nlet i = 0;\n\ndo {\n if(people[i] === \'Phil\' || people[i] === \'Lola\') {\n refused.textContent += people[i] + \', \';\n } else {\n admitted.textContent += people[i] + \', \';\n }\n i++;\n} while(i < people.length);\n\nrefused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + \'.\';\nadmitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + \'.\';';
let solutionEntry = jsSolution;

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function(e){
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret('\t');
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  let scrollPos = textarea.scrollTop;
  let caretPos = textarea.selectionStart;

  let front = (textarea.value).substring(0, caretPos);
  let back = (textarea.value).substring(textarea.selectionEnd, textarea.value.length);
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function(){
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if(solution.value === 'Show solution') {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample("Apprentissage_actif_remplir_une_liste_d'invités.", '100%', 580) }}

## Quel type de boucle utiliser ?

Pour des usages basiques les boucles `for`, `while`, et `do...while` sont largement interchangeables. Elles résolvent toutes le même problème et celle que vous utiliserez dépendra de vos préférences personnelles — celle que vous trouverez le plus facile à mémoriser ou la plus intuitive. Jetons-y un coup d'oeil à nouveau.

Premièrement `for`:

    for (initialisation; condition de sortie; expression finale) {
      // code à exécuter
    }

`while`:

    initialisation
    while (condition de sortie) {
      // code à exécuter

      expression finale
    }

et enfin `do...while`:

    initialisation
    do {
      // code à exécuter

      expression finale
    } while (condition de sortie)

Nous recommandons `for`, au moins pour commencer, car elle est probablement la plus facile pour tout se remémorer — l'initialisation, la condition de sortie, l'expression finale, le tout soigneusement placé entre des parenthèses. De cette façon, il est facile de voir où elles se trouvent et de vérifier qu'on ne les a pas oubliées.

> **Note :** Il y a d'autres types de boucles et de particularités, qui sont très utiles pour des situations spéciales et qui ne sont pas décrites dans cet article. Si vous voulez aller plus loin dans l'apprentissage des boucles, lisez le guide [Boucles et itérations](/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration).

## Conclusion

Cet article vous a révélé les concepts basiques et les différentes options disponibles pour créer des boucles en JavaScript. Vous devriez à présent être en mesure de comprendre en quoi les boucles constituent un bon mécanisme lorsqu'il s'agit de répéter une action dans le code, et vous devez être impatient de les utiliser dans vos propres exemples !

S'il y a quelque chose que vous n'avez pas compris, n'hésitez pas à relire l'article ou à [nous contacter](/fr/Apprendre#Nous_contacter) pour demander de l'aide.

## Voir aussi

- [Boucles et itération](/fr/docs/Web/JavaScript/Guide/Boucles_et_it%C3%A9ration)
- [L'instruction for](/fr/docs/Web/JavaScript/Reference/Instructions/for)
- [while](/fr/docs/Web/JavaScript/Reference/Instructions/while) et [do...while](/fr/docs/Web/JavaScript/Reference/Instructions/do...while)
- [break](/fr/docs/Web/JavaScript/Reference/Instructions/break) et [continue](/fr/docs/Web/JavaScript/Reference/Instructions/continue)
- [What’s the Best Way to Write a JavaScript For Loop?](https://www.impressivewebs.com/javascript-for-loop/) — quelques bonnes pratiques en matière de boucles

{{PreviousMenuNext("Learn/JavaScript/Building_blocks/conditionals","Learn/JavaScript/Building_blocks/Functions", "Learn/JavaScript/Building_blocks")}}
