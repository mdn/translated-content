---
title: Prendre des décisions dans le code — conditions
slug: Learn/JavaScript/Building_blocks/conditionals
tags:
  - Article
  - CodingScripting
  - Conditionnel
  - Débutant
  - JavaScript
  - Switch
  - conditions
  - else
  - if
  - ternaire
translation_of: Learn/JavaScript/Building_blocks/conditionals
original_slug: Apprendre/JavaScript/Building_blocks/conditionals
---
{{LearnSidebar}}

{{NextMenu("Apprendre/JavaScript/Building_blocks/Looping_code", "Apprendre/JavaScript/Building_blocks")}}

Dans tout langage de programmation, le code doit prendre des décisions et agir en fonction des différents paramètres. Par exemple dans un jeu, si le nombre de vies du joueur atteint 0, alors le jeu est terminé. Dans une application météo, si elle est consultée le matin, l'application montrera une image du lever de soleil ; l'application proposera des étoiles et la lune s'il fait nuit. Dans cet article nous allons découvrir comment ces instructions conditionnelles fonctionnent en JavaScript.

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="row">Prérequis :</th>
      <td>
        Connaissances du vocabulaire informatique, compréhension des bases du
        HTML et des CSS,
        <a href="/fr/docs/Learn/JavaScript/First_steps"
          >Premiers pas en JavaScript</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objectif :</th>
      <td>
        Comprendre comment utiliser les structures conditionnelles en
        JavaScript.
      </td>
    </tr>
  </tbody>
</table>

## Vous l'aurez à une condition !..

Les êtres humains (et d'autres animaux) prennent tout le temps des décisions qui affectent leur vie, de la plus insignifiante (« Est‑ce que je devrais prendre un biscuit ou deux ? ») à la plus importante (« Est‑ce que je dois rester dans mon pays natal et travailler à la ferme de mon père, ou déménager aux États-Unis et étudier l'astrophysique ? »)

Les instructions conditionnelles nous permettent de représenter ce genre de prise de décision en JavaScript, du choix qui doit être fait (par ex. « un biscuit ou deux »), à la conséquence de ces choix (il se peut que la conséquence de « manger un biscuit » soit « avoir encore faim », et celle de « manger deux biscuits » soit « se sentir rassasié, mais se faire gronder par maman pour avoir mangé tous les biscuits ».)

![](cookie-choice-small.png)

## Instruction if ... else

Intéressons nous de plus près à la forme la plus répandue d'instruction conditionnelle que vous utiliserez en JavaScript — la modeste [instruction](/fr/docs/Web/JavaScript/Reference/Instructions/if...else) [`if ... else`](/fr/docs/Web/JavaScript/Reference/Instructions/if...else).

### Syntaxe élémentaire if ... else

La syntaxe élémentaire de `if...else` ressemble à cela en {{glossary("pseudocode")}}:

    if (condition) {
      code à exécuter si la condition est true
    } else {
      sinon exécuter cet autre code à la place
    }

Ici nous avons:

1.  Le mot‑clé `if` suivie de parenthèses.
2.  Une condition à évaluer, placée entre les parenthèses (typiquement « cette valeur est‑elle plus grande que cet autre valeur ? » ou « cette valeur existe‑t‑elle ? »). Cette condition se servira des [opérateurs de comparaison](/fr/docs/Learn/JavaScript/First_steps/Math#Comparison_operators) que nous avons étudié dans le précédent module, et renverra `true` ou `false`.
3.  Une paire d'accolades, à l'intérieur de laquelle se trouve du code — cela peut être n'importe quel code voulu ; il sera exécuté seulement si la condition renvoie `true`.
4.  Le mot‑clé `else`.
5.  Une autre paire d'accolades, à l'intérieur de laquelle se trouve du code différent — tout code souhaité et il sera exécuté seulement si la condition ne renvoie pas `true`.

Ce code est facile à lire pour une personne — il dit « **si** la **condition** renvoie `true`, exécuter le code A, **sinon** exécuter le code B ».

Notez qu'il n'est pas nécessaire d'inclure une instruction `else` et le deuxième bloc entre accolades — le code suivant est aussi parfaitement correct :

    if (condition) {
      code à exécuter si la condition est true
    }

    exécuter un autre code

Cependant, vous devez faire attention ici — dans ce cas, le deuxième bloc de code n'est pas controlé par l'instruction conditionnelle, donc il sera **toujours** exécuté, que la condition ait renvoyé `true` ou `false`. Ce n'est pas nécessairement une mauvaise chose, mais il se peut que ce ne soit pas ce que vous vouliez — le plus souvent vous voudrez exécuter un bloc de code *ou* l'autre, et non les deux.

Une dernière remarque, vous verrez quelques fois les instructions `if...else` écrites sans accolades, de manière abrégée, ainsi :

    if (condition) code à exécuter si la condition est true
    else exécute un autre code à la place

Ce code est parfaitement valide, mais il n'est pas recommandé — il est nettement plus facile de lire le code et d'en déduire ce qui se passe si vous utilisez des accolades pour délimiter les blocs de code, des lignes séparées et des indentations.

### Un exemple concret

Pour mieux comprendre cette syntaxe, prenons un exemple concret. Imaginez un enfant à qui le père ou la mère demande de l'aide pour une tâche. Le parent pourrait dire « Mon chéri, si tu m'aides en allant faire les courses, je te donnerai un peu plus d'argent de poche pour que tu puisses t'acheter ce jouet que tu voulais ». En JavaScript, on pourrait le représenter de cette manière :

```js
let coursesFaites = false;

if (coursesFaites === true) {
  let argentDePoche = 10;
} else {
  let argentDePoche = 5;
}
```

Avec un tel code, la variable `coursesFaites` renvoie toujours `false`, imaginez la déception de ce pauvre enfant. Il ne tient qu'à nous de fournir un mécanisme pour que le parent assigne `true` à la variable `coursesFaites` si l'enfant a fait les courses.

> **Note :** Vous pouvez voir une [version plus complète de cet exemple sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/allowance-updater.html) (ainsi qu'en [version live](http://mdn.github.io/learning-area/javascript/building-blocks/allowance-updater.html).)

### else if

Il n'y a qu'une alternative dans l'exemple précédent — mais qu'en est‑il si l'on souhaite plus de choix ?

Il existe un moyen d'enchaîner des choix / résultats supplémentaires à `if...else` — en utilisant `else if` entre. Chaque choix supplémentaire nécessite un bloc additionnel à placer entre `if() { ... }` et `else { ... }` — regardez l'exemple suivant plus élaboré, qui pourrait faire partie d'une simple application de prévisions météo:

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);

function setWeather() {
  const choice = select.value;

  if (choice === 'sunny') {
    para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
  } else if (choice === 'rainy') {
    para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
  } else if (choice === 'snowing') {
    para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
  } else if (choice === 'overcast') {
    para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
  } else {
    para.textContent = '';
  }
}
```

{{ EmbedLiveSample('else_if', '100%', 100) }}

1.  Ici nous avons l'élément HTML {{htmlelement("select")}} nous permettant de sélectionner divers choix de temps et un simple paragraphe.
2.  Dans le JavaScript, nous conservons une référence aussi bien à l'élément {{htmlelement("select")}} qu'à l'élément {{htmlelement("p")}}, et ajoutons un écouteur d'évènement à l'élément `<select>` de sorte que la fonction `setWeather()` soit exécutée quand sa valeur change.
3.  Quand cette fonction est exécutée, nous commençons par assigner à la variable `choice` la valeur actuellement sélectionnée dans l'élément `<select>`. Nous utilisons ensuite une instruction conditionnelle pour montrer différents textes dans le paragraphe en fonction de la valeur de `choice`. Remarquez comment toutes les conditions sont testées avec des blocs `else if() {...}`, mis à part le tout premier testé avec un  `bloc if() {...}`.
4.  Le tout dernier choix, à l'intérieur du bloc `else {...}`, est simplement une option de "secours" — le code qui s'y trouve ne sera exécuté que si aucune des conditions n'est `true`. Dans ce cas, il faut vider le texte du paragraphe si rien n'est sélectionné, par exemple si un utilisateur décide de resélectionner le texte à substituer « --Choisir-- » présenté au début.

> **Note :** Vous trouverez également [cet exemple sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-else-if.html) (ainsi qu'en [version live](http://mdn.github.io/learning-area/javascript/building-blocks/simple-else-if.html) ici.)

### Une note sur les opérateurs de comparaison

Les opérateurs de comparaison sont utilisés pour tester les conditions dans nos instructions conditionnelles. Nous avons d'abord regardé les opérateurs de comparaison dans notre [Mathématiques de base en JavaScript — nombres et opérateurs](/fr/docs/Learn/JavaScript/First_steps/Math#Opérateurs_de_comparaison) article. Nos choix sont :

- `===` et `!==` — teste si une valeur est identique ou non à une autre.
- `<` and `>` —teste si une valeur est inférieure ou non à une autre.
- `<=` and `>=` — teste si une valeur est inférieur ou égal, ou égal à, ou supérieur ou égal à une autre.

> **Note :** Revoyez le contenu du lien précédent si vous voulez vous rafraîchir la mémoire.

Nous souhaitons mentionner à propos des tests des valeurs booléennes (`true`/`false`) un modèle courant que vous rencontrerez souvent. Toute valeur autre que `false`, `undefined`, `null`, `0`, `NaN` ou une chaîne vide  (`''`) renvoie `true` lorsqu'elle est testée dans une structure conditionnelle, vous pouvez donc simplement utiliser un nom de variable pour tester si elle est `true`, ou même si elle existe (c'est-à-dire si elle n'est pas `undefined`).
Par exemple :

```js
const fromage = 'Comté';

if (fromage) {
  console.log('Ouaips ! Du fromage pour mettre sur un toast.');
} else {
  console.log('Pas de fromage sur le toast pour vous aujourd\'hui.');
}
```

Et, revenant à notre exemple précédent sur l'enfant rendant service à ses parents, vous pouvez l'écrire ainsi :

```js
let coursesFaites = false;

if (coursesFaites) { // pas besoin d'écrire explicitement '=== true'
  let argentDePoche = 10;
} else {
  let argentDePoche = 5;
}
```

###  if ... else imbriqué

Il est parfaitement correct d'ajouter une déclaration `if...else` à l'intérieur d'une autre — pour les imbriquer. Par exemple, nous pourrions mettre à jour notre application de prévisions météo pour montrer un autre ensemble de choix en fonction de la température :

```js
if (choice === 'sunny') {
  if (temperature < 86) {
    para.textContent = 'Il fait ' + temperature + ' degrés dehors — beau et ensoleillé. Allez à la plage ou au parc et achetez une crème glacée.';
  } else if (temperature >= 86) {
    para.textContent = 'Il fait ' + temperature + ' degrés dehors — VRAIMENT CHAUD ! si vous voulez sortir, n\'oubliez pas de mettre de la crème solaire.';
  }
}
```

Même si tout le code fonctionne ensemble, chaque déclaration `if...else` fonctionne indépendamment de l'autre.

### Opérateurs logiques AND, OR et NOT

Si vous voulez tester plusieurs conditions sans imbriquer des instructions `if...else` , les [opérateurs logiques](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/Op%C3%A9rateurs_logiques) pourront vous rendre service. Quand ils sont utilisés dans des conditions, les deux premiers sont représentés comme ci dessous :

- `&&` — AND ; vous permet d'enchaîner deux ou plusieurs expressions de sorte que toutes doivent être individuellement égales à `true` pour que l'enemble de l'expression retourne `true`.
- `||` — OR ; vous permet d'enchaîner deux ou plusieurs expressions ensemble de sorte qu'il suffit qu'une au plus soit évaluée comme étant  `true` pour que l'ensemble de l'expression renvoie `true`.

Pour vous donner un exemple de AND, le morceau de code précedent peut être réécrit ainsi :

```js
if (choice === 'sunny' && temperature < 86) {
  para.textContent = 'Il fait ' + temperature + ' degrés dehors — beau temps ensoleillé. Allez à la plage ou au parc et achetez une crème glacée.';
} else if (choice === 'sunny' && temperature >= 86) {
  para.textContent = 'Il fait ' + temperature + ' degrés dehors — VRAIMENT CHAUD ! Si vous voulez sortir, assurez‑vous d'avoir passé une crème solaire.';
}
```

Ainsi, par exemple, le premier bloc de code ne sera exécuté que si `choice === 'sunny'` _ET_ `temperature < 86` renvoient tous deux `true`.

Voyons un petit exemple avec OR :

```js
if (camionDeGlaces || etatDeLaMaison === 'on fire') {
  console.log('Vous devriez sortir de la maison rapidement.');
} else {
  console.log('Vous pouvez probablement rester dedans.');
}
```

Le dernier type d'opérateur logique, NOT, exprimé par l'opérateur `!`,  peut s'utiliser pour nier une expression. Combinons‑le avec OR dans cet exemple :

```js
if (!(camionDeGlaces || etatDeLaMaison === 'on fire')) {
  console.log('Vous pouvez probablement rester dedans.');
} else {
  console.log('Vous devriez sortir de la maison rapidement.');
}
```

Dans cet extrait, si la déclaration avec OR renvoie `true`, l'opérateur NOT va nier l'ensemble : l'expression retournera donc `false`.

Vous pouvez combiner autant d'instructions logiques que vous le souhaitez, quelle que soit la structure. L'exemple suivant n'exécute le code entre accolades que si les deux instructions OR renvoient true, l'instruction AND recouvrante renvoie alors `true` :

```js
if ((x === 5 || y > 3 || z <= 10) && (loggedIn || userName === 'Steve')) {
  // exécuter le code
}
```

Une erreur fréquente avec l'opérateur OR dans des instructions conditionnelles est de n'indiquer la variable dont vous testez la valeur qu'une fois, puis de donner une liste de valeurs sensées renvoyer `true` séparées par des || (OR) opérateurs. Par exemple :

```js example-bad
if (x === 5 || 7 || 10 || 20) {
  // exécuter le code
}
```

Dans ce cas, la condition dans le `if(...)`sera toujours évaluée à vrai puisque 7 (ou toute autre valeur non nulle) est toujours `true`. Cette condition dit en réalité « si x est égal à 5, ou bien 7 est vrai » — ce qui est toujours le cas. Ce n'est pas ce que nous voulons logiquement ! Pour que cela fonctionne, vous devez définir un test complet entre chaque opérateur OR :

```js
if (x === 5 || x === 7 || x === 10 ||x === 20) {
  // exécuter le code
}
```

## Instruction switch

Les Instructions `if...else`  font bien le travail d'aiguiller la programmation selon des conditions, mais elles ne sont pas sans inconvénient. Elles sont principalement adaptées aux cas où vous avez un choix binaire, chacun nécessitant une quantité raisonnable de code à exécuter, et/ou au cas où les conditions sont complexes (par ex. plusieurs opérateurs logiques). Si vous voulez juste fixer la valeur d'une variable à un choix donné ou afficher une déclaration particulière en fonction d'une condition, cette syntaxe peut devenir un peu lourde, surtout si le nombre de choix est important.

Les [instructions switch](/fr/docs/Web/JavaScript/Reference/Instructions/switch) sont vos amies — elles prennent une seule valeur ou expression en entrée, puis examinent une palette de choix jusqu'à trouver celui qui correspond, et exécutent le code qui va avec. Voici un peu de pseudo-code, pour vous donner l'idée :

```js
switch (expression) {
  case choix1:
    exécuter ce code
    break;

  case choix2:
    exécuter ce code à la place
    break;

  // incorporez autant de case que vous le souhaitez

  default:
    sinon, exécutez juste ce code
}
```

Ici nous avons

1.  Le mot‑clé `switch` suivi de parenthèses.
2.  Une expression ou une valeur mise entre les parenthèses.
3.  Le mot‑clé `case` suivi d'une expression ou d'une valeur, et de deux‑points.
4.  Le code exécuté si l'expression/valeur de `case` correspond à celles de `switch`.
5.  Une déclaration `break`, suivie d'un point‑virgule. Si le choix précédent correspond à l'expression/valeur, le navigateur va stopper l'exécution du bloc de code ici et continuer après l'instruction **switch**.
6.  Vous pouvez rajouter autant de **cas** que vous le souhaitez. (points 3–5)
7.  Le mot‑clé `default`,  suivi d'une même structure de code qu'aux points 3-5, sauf que `default` n'a pas de choix après lui et n'a donc pas besoin de l'instruction `break`  puisqu'il n'y a plus rien à exécuter après ce bloc. C'est l'option `default` qui sera exécutée si aucun choix ne correspond.

> **Note :** Vous n'avez pas à inclure la section  `default` — elle peut être omise en toute sécurité s'il n'y a aucune chance que l'expression finisse par égaler une valeur inconnue. À contrario, vous devez l'inclure s'il est possible qu'il y ait des cas inconnus.

### Un exemple de switch

Voyons un exemple concret — nous allons réécrire notre application de prévision météo en utilisant une instruction `switch` à la place :

```html
<label for="weather">Select the weather type today: </label>
<select id="weather">
  <option value="">--Make a choice--</option>
  <option value="sunny">Sunny</option>
  <option value="rainy">Rainy</option>
  <option value="snowing">Snowing</option>
  <option value="overcast">Overcast</option>
</select>

<p></p>
```

```js
const select = document.querySelector('select');
const para = document.querySelector('p');

select.addEventListener('change', setWeather);


function setWeather() {
  let choice = select.value;

  switch (choice) {
    case 'sunny':
      para.textContent = 'It is nice and sunny outside today. Wear shorts! Go to the beach, or the park, and get an ice cream.';
      break;
    case 'rainy':
      para.textContent = 'Rain is falling outside; take a rain coat and a brolly, and don\'t stay out for too long.';
      break;
    case 'snowing':
      para.textContent = 'The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.';
      break;
    case 'overcast':
      para.textContent = 'It isn\'t raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.';
      break;
    default:
      para.textContent = '';
  }
}
```

{{ EmbedLiveSample('Un_exemple_de_switch', '100%', 100) }}

> **Note :** Vous trouverez également cet [exemple sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-switch.html) (voyez‑le en [cours d'exécution](http://mdn.github.io/learning-area/javascript/building-blocks/simple-switch.html) ici aussi.)

## Opérateur ternaire

Voici une dernière syntaxe que nous souhaitons vous présenter avant de nous amuser avec quelques exemples. L'[opérateur ternaire ou conditionnel](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel) est un petit morceau de code qui teste une condition et renvoie une valeur ou expression si elle est `true` et une autre si elle est `false` — elle est utile dans certains cas, et occupe moins de place qu'un bloc `if...else` si votre choix est limité à deux possibilités à choisir via une condition `true`/`false`. Voici le pseudo‑code correspondant :

    ( condition ) ? exécuter ce code : exécuter celui‑ci à la place

Regardons cet exemple simple :

```js
let formuleDePolitesse = ( est_anniversaire ) ? 'Bon anniversaire Mme Smith — nous vous souhaitons une belle journée !' : 'Bonjour Mme Smith.';
```

Ici, nous avons une variable nommée `est_anniversaire` — si elle est `true`, nous adressons à notre hôte un message de « Bon anniversaire » ; si ce n'est pas le cas, c'est-à-dire si `est_anniversaire` renvoie `false`, nous disons simplement « Bonjour ».

### Exemple opérateur ternaire

L'opérateur ternaire ne sert pas qu'à définir des valeurs de variables ; vous pouvez aussi exécuter des fonctions, ou des lignes de code — ce que vous voulez. Voici un exemple concret de choix de thème où le style du site est déterminé grâce à un opérateur ternaire.

```html
<label for="theme">Select theme: </label>
<select id="theme">
  <option value="white">White</option>
  <option value="black">Black</option>
</select>

<h1>This is my website</h1>
```

```js
const select = document.querySelector('select');
const html = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}

select.onchange = function() {
  ( select.value === 'black' ) ? update('black','white') : update('white','black');
}
```

{{ EmbedLiveSample('Exemple_opérateur_ternaire', '100%', 300, "", "", "hide-codepen-jsfiddle") }}

Nous mettons un élément {{htmlelement('select')}} pour choisir un thème (noir ou blanc), plus un simple élément {{htmlelement('h1')}} pour afficher un titre de site web. Nous avons aussi une fonction `update()`, qui prend deux couleurs en paramètre (entrées). La couleur de fond du site est déterminée par la couleur indiquée dans le premier paramètre fourni, et la couleur du texte par le deuxième.

Nous avons également mis un écouteur d'événement [onchange](/fr/docs/Web/API/GlobalEventHandlers/onchange) qui sert à exécuter une fonction contenant un opérateur ternaire. Il débute par un test de condition — `select.value === 'black'`. Si le test renvoie `true`, nous exécutons la fonction `update()` avec les paramètres blanc et noir : cela signifie que le fond sera noir et le texte blanc. S'il renvoie `false`, nous exécutons `update()` avec les paramètres noir et blanc, les couleurs du site seront inversées.

> **Note :** Vous trouverez également cet [exemple sur GitHub](https://github.com/mdn/learning-area/blob/master/javascript/building-blocks/simple-ternary.html) (voyez‑le en [cours d'exécution](http://mdn.github.io/learning-area/javascript/building-blocks/simple-ternary.html) ici aussi.)

## Apprentissage actif : un calendrier simple

Dans cet exemple nous allons vous aider à finaliser une application de calendrier simple. Dans le code, vous avez :

- Un élément {{htmlelement("select")}} permettant à l'utilisateur de choisir un mois.
- Un pilote d'événement `onchange` pour détecter si la valeur choisie dans le menu `<select>` a été modifiée.
- Une fonction `createCalendar()` qui trace le calendrier et affiche le mois voulu dans l'élément {{htmlelement("h1")}}.

Vous aurez besoin d'écrire une instruction conditionnelle dans la fonction `onchange`, juste au dessous du commentaire `// AJOUTER LA CONDITION ICI`. Elle doit :

1.  Noter le mois choisi (enregistré dans la variable `choice`. Ce doit être la valeur de l'élément `<select>` après un changement, "Janvier" par exemple).
2.  Faire en sorte que la variable nommée `days` soit égale au nombre de jours du mois sélectionné. Pour ce faire, examinez le nombre de jours dans chaque mois de l'année. Vous pouvez ignorer les années bissextiles pour les besoins de cet exemple.

Conseils :

- Utilisez un OR logique pour grouper plusieurs mois ensemble dans une même condition, beaucoup d'entre eux ont le même nombre de jours.
- Voyez quel est le nombre de jours le plus courant et utilisez le comme valeur par défaut.

Si vous faites une erreur, vous pouvez toujours réinitialiser l'exemple avec le bouton "Réinitialiser". Si vous êtes vraiment bloqué, pressez "Voir la solution".

```html hidden
<div class="output" style="height: 500px;overflow: auto;">
  <label for="month">Choisissez un mois : </label>
  <select id="month">
    <option value="Janvier">Janvier</option>
    <option value="Février">Février</option>
    <option value="Mars">Mars</option>
    <option value="Avril">Avril</option>
    <option value="Mai">Mai</option>
    <option value="Juin">Juin</option>
    <option value="Juillet">Juillet</option>
    <option value="Août">Août</option>
    <option value="Septembre">Septembre</option>
    <option value="Octobre">Octobre</option>
    <option value="Novembre">Novembre</option>
    <option value="Decembre">Décembre</option>
  </select>

  <h1></h1>

  <ul></ul>
</div>

<hr>

<textarea id="code" class="playable-code" style="height: 500px;">
var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  // AJOUTER LA CONDITION ICI

  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    const listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

createCalendar(31,'Janvier');
</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```css hidden
.output * {
  box-sizing: border-box;
}

.output ul {
  padding-left: 0;
}

.output li {
  display: block;
  float: left;
  width: 25%;
  border: 2px solid white;
  padding: 5px;
  height: 40px;
  background-color: #4A2DB6;
  color: white;
}
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;

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

var jsSolution = 'var select = document.querySelector(\'select\');\nvar list = document.querySelector(\'ul\');\nvar h1 = document.querySelector(\'h1\');\n\nselect.onchange = function() {\n  var choice = select.value;\n  var days = 31;\n  if(choice === \'February\') {\n    days = 28;\n  } else if(choice === \'April\' || choice === \'June\' || choice === \'September\'|| choice === \'November\') {\n    days = 30;\n  }\n\n  createCalendar(days, choice);\n}\n\nfunction createCalendar(days, choice) {\n  list.innerHTML = \'\';\n  h1.textContent = choice;\n for(var i = 1; i <= days; i++) {\n    var listItem = document.createElement(\'li\');\n    listItem.textContent = i;\n    list.appendChild(listItem);\n  }\n }\n\ncreateCalendar(31,\'January\');';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
```

{{ EmbedLiveSample('Apprentissage_actif_un_calendrier_simple', '100%', 1110, "", "", "hide-codepen-jsfiddle") }}

## Activité : plus de choix de couleurs

Nous allons reprendre l'exemple de l'opérateur ternaire vu plus haut et transformer cet opérateur ternaire en une directive `switch`  qui nous permettra une plus grande variété de choix pour le site web tout simple. Voyez l'élément {{htmlelement("select")}} — cette fois, il n'y a pas deux options de thème, mais cinq. Il vous faut ajouter une directive `switch` au dessous du commentaire  `// AJOUT D'UNE DIRECTIVE SWITCH` :

- Elle doit accepter la variable `choice` comme expression d'entrée.
- Pour chaque cas, le choix doit être égal à une des valeurs possibles pouvant être choisies, c'est-à-dire blanc, noir, mauve, jaune ou psychédélique.
- Chaque cas exécutera la fonction `update()` à laquelle deux valeurs de couleurs seront passées, la première pour le fond, la seconde pour le texte. Souvenez vous que les valeurs de couleurs sont des chaînes ; elle doivent donc être mises entre guillemets.

Si vous faites une erreur, vous pouvez toujours réinitialiser l'exemple avec le bouton « Réinitialiser ». Si vous êtes vraiment bloqué, pressez « Voir la solution ».

```html hidden
<div class="output" style="height: 300px;">
  <label for="theme">Choisissez un thème : </label>
  <select id="theme">
    <option value="white">Blanc</option>
    <option value="black">Noir</option>
    <option value="purple">Mauve</option>
    <option value="yellow">Jaune</option>
    <option value="psychedelic">Psychédélique</option>
  </select>

  <h1>Voici mon site Web</h1>
</div>

<hr>

<textarea id="code" class="playable-code" style="height: 450px;">
const select = document.querySelector('select');
const html = document.querySelector('.output');

select.onchange = function() {
  let choice = select.value;

  // AJOUT D'UNE DIRECTIVE SWITCH
}

function update(bgColor, textColor) {
  html.style.backgroundColor = bgColor;
  html.style.color = textColor;
}</textarea>

<div class="playable-buttons">
  <input id="reset" type="button" value="Réinitialiser">
  <input id="solution" type="button" value="Voir la solution">
</div>
```

```js hidden
const textarea = document.getElementById('code');
const reset = document.getElementById('reset');
const solution = document.getElementById('solution');
let code = textarea.value;

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

const jsSolution = 'const select = document.querySelector(\'select\');\nlet html = document.querySelector(\'.output\');\n\nselect.onchange = function() {\n  let choice = select.value;\n\n  switch(choice) {\n    case \'black\':\n      update(\'black\',\'white\');\n      break;\n    case \'white\':\n      update(\'white\',\'black\');\n      break;\n    case \'purple\':\n      update(\'purple\',\'white\');\n      break;\n    case \'yellow\':\n      update(\'yellow\',\'darkgray\');\n      break;\n    case \'psychedelic\':\n      update(\'lime\',\'purple\');\n      break;\n  }\n}\n\nfunction update(bgColor, textColor) {\n  html.style.backgroundColor = bgColor;\n  html.style.color = textColor;\n}';

textarea.addEventListener('input', updateCode);
window.addEventListener('load', updateCode);
```

{{ EmbedLiveSample('Activité_plus_de_choix_de_couleurs', '100%', 850) }}

## Conclusion

C'est tout ce qu'il est nécessaire de connaître à propos des structures conditionnelles en JavaScript pour le moment ! Je pense que vous avez assurément compris ces concepts et travaillé les exemples aisément ; s'il y a quelque chose que vous n'avez pas compris, relisez cet article à nouveau, ou bien [contactez‑nous](/fr/Apprendre#Nous_contacter) pour une aide.

## Voir aussi

- [Opérateurs de comparaison](/fr/docs/Learn/JavaScript/First_steps/Math#Opérateurs_de_comparaison)
- [Les instructions conditionnelles](/fr/docs/Web/JavaScript/Guide/Contrôle_du_flux_Gestion_des_erreurs#Les_instructions_conditionnelles)
- [Référence if...else](/fr/docs/Web/JavaScript/Reference/Instructions/if...else)
- [Référence opérateur conditionnel (ternaire)](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_conditionnel)

{{NextMenu("Apprendre/JavaScript/Building_blocks/Looping_code", "Apprendre/JavaScript/Building_blocks")}}

## Dans ce module

- [Prendre des décisions dans du code — conditions](/fr/Apprendre/JavaScript/Building_blocks/conditionals)
- [Les boucles dans le code](/fr/Apprendre/JavaScript/Building_blocks/Looping_code)
- [Fonctions — blocs de code réutilisables](/fr/Apprendre/JavaScript/Building_blocks/Fonctions)
- [Construire vos propres fonctions](/fr/Apprendre/JavaScript/Building_blocks/Build_your_own_function)
- [Valeurs de retour des fonctions](/fr/Apprendre/JavaScript/Building_blocks/Return_values)
- [Introduction aux événements](/fr/Apprendre/JavaScript/Building_blocks/Ev%C3%A8nements)
- [Gallerie d'images](/fr/Apprendre/JavaScript/Building_blocks/Image_gallery)
