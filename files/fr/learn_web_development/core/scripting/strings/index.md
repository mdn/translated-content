---
title: Gérer du texte — les chaînes de caractères en JavaScript
short-title: Les chaînes de caractères
slug: Learn_web_development/Core/Scripting/Strings
original_slug: Learn/JavaScript/First_steps/Strings
l10n:
  sourceCommit: fdfe2889acd02623047231e39c9dee5df1bd646e
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}

Concentrons-nous maintenant sur les chaînes de caractères - c'est le nom donné à un segment de texte en programmation. Dans cet article, nous aborderons les aspects les plus communs des chaînes de caractères que vous devez vraiment connaître quand vous apprenez JavaScript, comme créer une chaîne de caractères, échapper des guillemets dans une chaîne ou encore concaténer des chaînes.

<table>
  <tbody>
    <tr>
      <th scope="row">Prérequis&nbsp;:</th>
      <td>Une compréhension de <a href="/fr/docs/Learn_web_development/Core/Structuring_content">HTML</a> et des <a href="/fr/docs/Learn_web_development/Core/Styling_basics">fondamentaux de CSS</a>.</td>
    </tr>
    <tr>
      <th scope="row">Objectifs d'apprentissage&nbsp;:</th>
      <td>
        <ul>
          <li>Créer des littéraux de chaîne de caractères.</li>
          <li>Comprendre la nécessité d'utiliser des guillemets appariés.</li>
          <li>Concaténer des chaînes de caractères.</li>
          <li>Échapper des caractères dans une chaîne.</li>
          <li>Utiliser les littéraux de gabarit, y compris l'insertion de variables et les chaînes multilignes.</li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## Le pouvoir des mots

Les mots ont beaucoup d'importance pour les humains — ils occupent une large part dans nos façons de communiquer. Comme le Web est un medium essentiellement fondé sur du texte conçu pour permettre aux hommes de communiquer et partager de l'information, il est utile de contrôler les mots qui y sont publiés. {{glossary("HTML")}} donne structure et sens au texte, {{glossary("CSS")}} en gère le style et JavaScript comporte une série de fonctionnalités pour manipuler les chaînes de caractères, créer des messages d'accueil personnalisés, afficher la bonne étiquette quand nécessaire, trier des termes dans l'ordre voulu, et bien d'autres choses encore.

À peu près tous les programmes que nous vous avons montrés jusqu'ici ont impliqué des manipulations de chaînes de caractères.

## Déclarer des chaînes de caractères

À première vue, les chaînes de caractères se manipulent comme les nombres, mais en y regardant de plus près, on remarque des différences notables. Commençons par saisir quelques lignes simples dans la [console JavaScript des outils de développement du navigateur](/fr/docs/Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools) pour nous familiariser.

Pour commencer, entrez les lignes suivantes&nbsp;:

```js
const string = "La révolution ne sera pas télévisée.";
console.log(string);
```

Comme pour les nombres, on déclare une variable, on l'initialise avec une valeur de chaîne de caractères, puis on affiche la valeur. La seule différence ici est que, pour écrire une chaîne de caractères, il faut entourer la valeur de guillemets.

Si vous ne le faites pas, ou si vous oubliez un guillemet, vous obtiendrez une erreur. Essayez d'entrer les lignes suivantes&nbsp;:

```js example-bad
const badString1 = Ceci est un test;
const badString2 = 'Ceci est un test;
const badString3 = Ceci est un test';
```

Ces lignes ne fonctionnent pas car tout texte non entouré de guillemets est interprété comme un nom de variable, un nom de propriété, un mot réservé ou autre. Si le navigateur ne reconnaît pas le texte non entouré de guillemets, une erreur est levée (par exemple «&nbsp;missing; before statement&nbsp;»). Si le navigateur détecte le début d'une chaîne de caractères mais pas sa fin (à cause d'un guillemet manquant), il peut signaler une erreur «&nbsp;unterminated string literal&nbsp;» ou, dans la console, passer à une nouvelle ligne en attendant que vous terminiez la chaîne de caractères. Si votre programme génère de telles erreurs, vérifiez que toutes vos chaînes de caractères sont bien fermées par des guillemets.

Ce qui suit fonctionnera si vous avez déjà défini la variable `string` — essayez maintenant&nbsp;:

```js
const badString = string;
console.log(badString);
```

`badString` a maintenant la même valeur que `string`.

### Guillemets simples, doubles et backticks

En JavaScript, vous pouvez choisir d'entourer vos chaînes de caractères avec des guillemets simples (`'`), des guillemets doubles (`"`) ou des backticks (accent grave&nbsp;: `` ` ``). Toutes les écritures suivantes sont valides&nbsp;:

```js-nolint
const simple = 'Guillemets simples';
const double = "Guillemets doubles";
const backtick = `Backtick`;

console.log(simple);
console.log(double);
console.log(backtick);
```

Vous devez utiliser le même caractère pour ouvrir et fermer une chaîne de caractères, sinon vous obtiendrez une erreur&nbsp;:

```js-nolint example-bad
const badQuotes = 'Ceci n'est pas autorisé!";
```

Les chaînes de caractères entourées de guillemets simples ou doubles sont équivalentes, le choix relève de la préférence personnelle — il est cependant conseillé de choisir un style et de s'y tenir pour garder un code cohérent.

Les chaînes de caractères entourées de backticks sont un type particulier appelé _littéraux de gabarit_ (<i lang="en">template literals</i>). Les littéraux de gabarit se comportent globalement comme les chaînes de caractères classiques, mais possèdent des propriétés particulières&nbsp;:

- Vous pouvez [intégrer du JavaScript](#intégrer_du_javascript) à l'intérieur.
- Vous pouvez écrire des chaînes de caractères multilignes [facilement](#chaînes_de_caractères_multilignes).

## Intégrer du JavaScript

Dans un littéral de gabarit, vous pouvez insérer des variables ou des expressions JavaScript à l'intérieur de `${ }`&nbsp;: le résultat sera inclus dans la chaîne de caractères&nbsp;:

```js
const name = "Chris";
const greeting = `Bonjour, ${name}`;
console.log(greeting); // "Bonjour, Chris"
```

Vous pouvez utiliser la même technique pour assembler deux variables&nbsp;:

```js
const one = "Bonjour, ";
const two = "comment ça va ?";
const joined = `${one}${two}`;
console.log(joined); // "Bonjour, comment ça va ?"
```

Assembler des chaînes de caractères de cette façon s'appelle la _concaténation_.

### Concaténation en contexte

Voyons la concaténation en action&nbsp;:

```html live-sample___string-concat
<button>Pressez-moi</button>
<div id="greeting"></div>
```

```js live-sample___string-concat
const button = document.querySelector("button");

function greet() {
  const name = prompt("Quel est votre nom ?");
  const greeting = document.querySelector("#greeting");
  greeting.textContent = `Bonjour ${name}, ravi·e de vous voir !`;
}

button.addEventListener("click", greet);
```

{{EmbedLiveSample('string-concat', , '50', , , , , 'allow-modals')}}

Ici, nous utilisons la fonction {{domxref("window.prompt()", "window.prompt()")}}, qui invite l'utilisateur·ice à répondre à une question via une boîte de dialogue, puis stocke le texte saisi dans une variable — ici `name`. Nous affichons ensuite une chaîne de caractères qui insère ce nom dans un message d'accueil générique.

### Concaténation avec `+`

Vous ne pouvez utiliser `${}` qu'avec les littéraux de gabarit, pas avec les chaînes de caractères classiques. Pour concaténer des chaînes de caractères classiques, on utilise l'opérateur `+`&nbsp;:

```js
const greeting2 = "Bonjour";
const name2 = "Bob";
console.log(greeting2 + ", " + name2); // "Bonjour, Bob"
```

Les littéraux de gabarit rendent généralement le code plus lisible&nbsp;:

```js
const greeting3 = "Salut";
const name3 = "Ramesh";
console.log(`${greeting3}, ${name3}`); // "Salut, Ramesh"
```

### Insérer des expressions dans une chaîne de caractères

Vous pouvez insérer des expressions JavaScript dans un littéral de gabarit, pas seulement des variables&nbsp;: le résultat sera inclus dans la chaîne de caractères&nbsp;:

```js
const song = "Fight the Youth";
const score = 9;
const highestScore = 10;
const output = `J'aime la chanson ${song}. Je lui ai donné une note de ${
  (score / highestScore) * 100
}%`;
console.log(output); // "J'aime la chanson Fight the Youth. Je lui ai donné une note de 90%."
```

## Chaînes de caractères multilignes

Les littéraux de gabarit respectent les retours à la ligne dans le code source, vous pouvez donc écrire des chaînes de caractères sur plusieurs lignes comme ceci&nbsp;:

```js
const newline = `Un jour, tu as enfin su
ce que tu devais faire, et tu as commencé,`;
console.log(newline);

/*
Un jour, tu as enfin su
ce que tu devais faire, et tu as commencé,
*/
```

Pour obtenir le même résultat avec une chaîne de caractères classique, il faut insérer des caractères de saut de ligne (`\n`) dans la chaîne&nbsp;:

```js
const newline2 =
  "Un jour, tu as enfin su\nce que tu devais faire, et tu as commencé,";
console.log(newline2);

/*
Un jour, tu as enfin su
ce que tu devais faire, et tu as commencé,
*/
```

Consultez notre page de référence sur les [littéraux de gabarit](/fr/docs/Web/JavaScript/Reference/Template_literals) pour plus d'exemples et de détails sur les fonctionnalités avancées.

## Inclure des guillemets dans une chaîne de caractères

Puisqu'on utilise des guillemets pour délimiter les chaînes de caractères, comment inclure de vrais guillemets dans une chaîne de caractères&nbsp;? Ceci ne fonctionnera pas&nbsp;:

```js-nolint example-bad
const badQuotes = "Elle a dit "Je pense que oui!"";
```

Une solution courante est d'utiliser un autre type de guillemet pour délimiter la chaîne de caractères&nbsp;:

```js-nolint
const goodQuotes1 = 'Elle a dit "Je pense que oui!"';
const goodQuotes2 = `Elle a dit "Je n'irai pas là-dedans!"`;
```

Une autre solution consiste à _échapper_ le guillemet problématique. Échapper un caractère signifie qu'on le marque pour qu'il soit reconnu comme du texte et non comme du code. En JavaScript, on place une barre oblique inverse juste avant le caractère. Essayez&nbsp;:

```js-nolint
const bigmouth = 'Je n\'ai pas le droit de prendre ma place…';
console.log(bigmouth);
```

Vous pouvez utiliser la même technique pour insérer d'autres caractères spéciaux. Consultez [les séquences d'échappement](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#séquences_déchappement) pour plus de détails.

## Nombres et chaînes de caractères

Que se passe-t-il si on essaie de concaténer une chaîne de caractères et un nombre&nbsp;? Essayons dans la console&nbsp;:

```js
const coolBandName = "Front ";
const number = 242;
console.log(coolBandName + number); // "Front 242"
```

On pourrait s'attendre à une erreur, mais cela fonctionne très bien. La façon dont les nombres doivent être affichés en tant que chaînes de caractères est bien définie, donc le navigateur convertit automatiquement le nombre en chaîne de caractères et concatène les deux.

Si vous avez une variable numérique à convertir en chaîne de caractères, ou une chaîne de caractères à convertir en nombre, vous pouvez utiliser les deux constructions suivantes&nbsp;:

- La fonction {{jsxref("Number/Number", "Number()")}} convertit ce qu'on lui passe en nombre si possible. Essayez&nbsp;:

  ```js
  const myString = "123";
  const myNum = Number(myString);
  console.log(typeof myNum);
  // number
  ```

- Inversement, la fonction {{jsxref("String/String", "String()")}} convertit son argument en chaîne de caractères. Essayez&nbsp;:

  ```js
  const myNum2 = 123;
  const myString2 = String(myNum2);
  console.log(typeof myString2);
  // string
  ```

Ces constructions sont très utiles dans certaines situations. Par exemple, si un·e utilisateur·ice saisit un nombre dans un champ texte d'un formulaire, c'est une chaîne de caractères. Mais si vous voulez additionner ce nombre à autre chose, il doit être de type `number`, donc vous pouvez le passer par `Number()` pour le convertir. C'est exactement ce que nous avons fait dans notre [jeu Deviner un nombre](https://github.com/mdn/learning-area/blob/main/javascript/introduction-to-js-1/first-splash/number-guessing-game.html), dans la fonction `checkGuess`.

## Conclusion

Voilà, vous connaissez maintenant les bases des chaînes de caractères en JavaScript. Dans l'article suivant, nous irons plus loin en découvrant quelques méthodes intégrées aux chaînes et comment les utiliser pour manipuler le texte selon vos besoins.

{{PreviousMenuNext("Learn_web_development/Core/Scripting/Test_your_skills/Math", "Learn_web_development/Core/Scripting/Useful_string_methods", "Learn_web_development/Core/Scripting")}}
