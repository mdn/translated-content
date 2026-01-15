---
title: Guide pour rédiger des exemples de code JavaScript
short-title: Exemples JavaScript
slug: MDN/Writing_guidelines/Code_style_guide/JavaScript
original_slug: MDN/Writing_guidelines/Writing_style_guide/Code_style_guide/JavaScript
l10n:
  sourceCommit: 359d3c9cea9b2caa691c63ed3b01714ad4416372
---

Les consignes suivantes expliquent comment rédiger des exemples de code JavaScript pour MDN Web Docs. Cet article liste les règles pour écrire des exemples concis et compréhensibles par le plus grand nombre.

## Lignes directrices générales pour les exemples de code JavaScript

Cette section explique les lignes directrices générales à garder à l'esprit lors de la rédaction d'exemples de code JavaScript. Les sections suivantes aborderont des points plus spécifiques.

### Choisir un format

Les opinions sur l'indentation correcte, les espaces et la longueur des lignes ont toujours été controversées. Les discussions sur ces sujets détournent de la création et de la maintenance du contenu.

Sur MDN Web Docs, nous utilisons [Prettier <sup>(angl.)</sup>](https://prettier.io/) comme formateur de code pour garder un style cohérent (et éviter les discussions hors sujet). Vous pouvez consulter notre [fichier de configuration <sup>(angl.)</sup>](https://github.com/mdn/content/blob/main/.prettierrc.json) pour connaître les règles actuelles, et lire la [documentation de Prettier <sup>(angl.)</sup>](https://prettier.io/docs/index.html).

Prettier formate tout le code et maintient un style cohérent. Cependant, il existe quelques règles supplémentaires à suivre.

### Utiliser les fonctionnalités JavaScript modernes lorsque c'est possible

Vous pouvez utiliser de nouvelles fonctionnalités dès lors que tous les principaux navigateurs — Chrome, Edge, Firefox et Safari — les prennent en charge (c'est-à-dire {{Glossary("Baseline")}}).

Cette règle ne s'applique pas à la fonctionnalité JavaScript documentée sur la page (qui est dictée par les [critères d'inclusion](/fr/docs/MDN/Writing_guidelines/Criteria_for_inclusion)). Par exemple, vous pouvez documenter des fonctionnalités [non standard ou expérimentales](/fr/docs/MDN/Writing_guidelines/Experimental_deprecated_obsolete) et écrire des exemples complets montrant leur comportement, mais vous devez éviter d'utiliser ces fonctionnalités dans les démos d'autres fonctionnalités non liées, comme une API Web.

## Tableaux

### Création de tableaux

Pour créer des tableaux, utilisez la notation littérale et non les constructeurs.

Créez des tableaux ainsi&nbsp;:

```js example-good
const villesVisitees = [];
```

N'utilisez pas ceci pour créer des tableaux&nbsp;:

```js example-bad
const villesVisitées = new Array(longueur);
```

### Ajout d'éléments

Pour ajouter des éléments à un tableau, utilisez [`push()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/push) et non l'affectation directe. Considérez le tableau suivant&nbsp;:

```js
const animaux = [];
```

Ajoutez des éléments au tableau ainsi&nbsp;:

```js example-good
animaux.push("chat");
```

N'ajoutez pas d'éléments au tableau ainsi&nbsp;:

```js example-bad
animaux[animaux.length] = "chat";
```

## Méthodes asynchrones

Écrire du code asynchrone améliore les performances et doit être privilégié lorsque c'est possible. En particulier, vous pouvez utiliser&nbsp;:

- [Promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [`async`](/fr/docs/Web/JavaScript/Reference/Statements/async_function)/[`await`](/fr/docs/Web/JavaScript/Reference/Operators/await)

Lorsque les deux techniques sont possibles, nous préférons utiliser la syntaxe `async`/`await`, plus simple. Malheureusement, vous ne pouvez pas utiliser `await` au niveau supérieur sauf si vous êtes dans un module ECMAScript. Les modules CommonJS utilisés par Node.js ne sont pas des modules ES. Si votre exemple doit pouvoir être utilisé partout, évitez les `await` de haut niveau.

## Commentaires

Les commentaires sont essentiels pour rédiger de bons exemples de code. Ils clarifient l'intention du code et aident les développeur·euse·s à le comprendre. Portez une attention particulière à leur rédaction.

- Si l'objectif ou la logique du code n'est pas évident, ajoutez un commentaire pour expliquer votre intention, comme ci-dessous&nbsp;:

  ```js example-good
  let total = 0;

  // Calcule la somme des quatre premiers éléments de arr
  for (let i = 0; i < 4; i++) {
    total += arr[i];
  }
  ```

  À l'inverse, reformuler le code en prose n'est pas un bon usage des commentaires&nbsp;:

  ```js example-bad
  let total = 0;

  // Boucle for de 1 à 4
  for (let i = 0; i < 4; i++) {
    // Ajoute la valeur au total
    total += arr[i];
  }
  ```

- Les commentaires ne sont pas nécessaires lorsque les fonctions ont des noms explicites qui décrivent ce qu'elles font. Écrivez&nbsp;:

  ```js example-good
  closeConnection();
  ```

  N'écrivez pas&nbsp;:

  ```js example-bad
  closeConnection(); // Ferme la connexion
  ```

### Utiliser les commentaires sur une seule ligne

Les commentaires sur une seule ligne commencent par `//`, contrairement aux commentaires de bloc délimités par `/* … */`.

En règle générale, utilisez les commentaires sur une seule ligne pour commenter le code. Les auteur·ice·s doivent marquer chaque ligne du commentaire avec `//`, afin de repérer plus facilement le code mis en commentaire. De plus, cette convention permet de commenter des sections de code avec `/* … */` lors du débogage.

- Laissez un espace entre les barres obliques et le commentaire. Commencez par une majuscule, comme une phrase, mais ne terminez pas le commentaire par un point.

  ```js example-good
  // Ceci est un commentaire sur une seule ligne bien rédigé
  ```

- Si un commentaire ne commence pas immédiatement après un nouveau niveau d'indentation, ajoutez une ligne vide puis le commentaire. Cela créera un bloc de code, rendant évident ce à quoi le commentaire se rapporte. Placez aussi vos commentaires sur des lignes séparées précédant le code concerné. Exemple&nbsp;:

  ```js example-good
  function checkout(goodsPrice, shipmentPrice, taxes) {
    // Calcule le prix total
    const total = goodsPrice + shipmentPrice + taxes;

    // Crée et ajoute un nouveau paragraphe au document
    const para = document.createElement("p");
    para.textContent = `Le prix total est ${total}`;
    document.body.appendChild(para);
  }
  ```

### Affichage des journaux

- Dans du code destiné à la production, il est rarement nécessaire de commenter l'affichage de données. Dans les exemples, nous utilisons souvent `console.log()`, `console.error()` ou des fonctions similaires pour afficher des valeurs importantes. Pour aider la lectrice ou le lecteur à comprendre ce qui sera affiché sans exécuter le code, vous pouvez ajouter un commentaire _après_ la fonction avec la sortie qui sera produite. Écrivez&nbsp;:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket); // ['banana', 'mango', 'orange']
  }
  ```

  N'écrivez pas&nbsp;:

  ```js example-bad
  function exampleFunc(fruitBasket) {
    // Affiche : ['banana', 'mango', 'orange']
    console.log(fruitBasket);
  }
  ```

- Si la ligne devient trop longue, placez le commentaire _après_ la fonction, comme ceci&nbsp;:

  ```js example-good
  function exampleFunc(fruitBasket) {
    console.log(fruitBasket);
    // ['banana', 'mango', 'orange', 'apple', 'pear', 'durian', 'lemon']
  }
  ```

### Commentaires multi-lignes

Les commentaires courts sont généralement préférables, essayez donc de les garder sur une seule ligne de 60 à 80 caractères. Si ce n'est pas possible, utilisez `//` au début de chaque ligne&nbsp;:

```js example-good
// Ceci est un exemple de commentaire multi-lignes.
// La fonction imaginaire qui suit présente quelques limitations
// particulières que je souhaite signaler.
// Limitation 1
// Limitation 2
```

N'utilisez pas `/* … */`&nbsp;:

```js example-bad
/* Ceci est un exemple de commentaire multi-lignes.
  La fonction imaginaire qui suit présente quelques limitations
  particulières que je souhaite signaler.
  Limitation 1
  Limitation 2 */
```

### Utiliser les commentaires pour marquer les ellipses

Sauter du code redondant à l'aide d'ellipses (…) est nécessaire pour garder les exemples courts. Cependant, il faut le faire avec discernement, car les développeur·euse·s copient souvent les exemples dans leur code, et tous nos exemples doivent être du JavaScript valide.

En JavaScript, placez les ellipses (`…`) dans un commentaire. Lorsque c'est possible, indiquez l'action attendue pour la personne qui réutilise l'extrait.

Utiliser un commentaire pour les ellipses (…) est plus explicite et évite les erreurs lors du copier-coller. Écrivez&nbsp;:

```js example-good
function exampleFunc() {
  // Ajoutez votre code ici
  // …
}
```

N'utilisez pas les ellipses (…) ainsi&nbsp;:

```js example-bad
function exampleFunc() {
  …
}
```

### Commenter les paramètres

Lorsque vous écrivez du code, vous omettez généralement les paramètres inutiles. Mais dans certains exemples, vous souhaitez montrer que vous n'avez pas utilisé certains paramètres possibles.

Pour cela, utilisez `/* … */` dans la liste des paramètres. C'est une exception à la règle d'utiliser uniquement les commentaires sur une seule ligne (`//`).

```js
array.forEach((value /* , index, array */) => {
  // …
});
```

## Fonctions

### Noms de fonctions

Pour les noms de fonctions, utilisez {{Glossary("camel_case", "camel case")}}, en commençant par une minuscule. Utilisez des noms concis, lisibles et sémantiques lorsque c'est approprié.

Voici un exemple correct de nom de fonction&nbsp;:

```js example-good
function direBonjour() {
  console.log("Bonjour !");
}
```

N'utilisez pas des noms de fonctions comme ceux-ci&nbsp;:

```js example-bad
function DireBonjour() {
  console.log("Bonjour !");
}

function faire() {
  console.log("Bonjour !");
}
```

### Déclarations de fonctions

- Lorsque c'est possible, préférez la déclaration de fonction à l'expression de fonction pour définir des fonctions.

  Voici la manière recommandée de déclarer une fonction&nbsp;:

  ```js example-good
  function somme(a, b) {
    return a + b;
  }
  ```

  Ce n'est pas une bonne façon de définir une fonction&nbsp;:

  ```js example-bad
  let somme = function (a, b) {
    return a + b;
  };
  ```

- Lorsque vous utilisez des fonctions anonymes comme callback (fonction passée à une autre invocation de méthode), si vous n'avez pas besoin d'accéder à `this`, utilisez une fonction fléchée pour rendre le code plus court et plus lisible.

  Voici la manière recommandée&nbsp;:

  ```js example-good
  const tableau = [1, 2, 3, 4];
  const somme = tableau.reduce((a, b) => a + b);
  ```

  Au lieu de ceci&nbsp;:

  ```js example-bad
  const tableau = [1, 2, 3, 4];
  const somme = tableau.reduce(function (a, b) {
    return a + b;
  });
  ```

- Évitez d'utiliser une fonction fléchée pour assigner une fonction à un identifiant. En particulier, n'utilisez pas de fonctions fléchées pour les méthodes. Utilisez des déclarations de fonction avec le mot-clé `function`&nbsp;:

  ```js example-good
  function x() {
    // …
  }
  ```

  À ne pas faire&nbsp;:

  ```js example-bad
  const x = () => {
    // …
  };
  ```

- Lorsque vous utilisez des fonctions fléchées, utilisez le [retour implicite](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions#function_body) (aussi appelé _expression body_) lorsque c'est possible&nbsp;:

  ```js example-good
  arr.map((e) => e.id);
  ```

  Et non&nbsp;:

  ```js example-bad
  arr.map((e) => {
    return e.id;
  });
  ```

## Boucles et instructions conditionnelles

### Initialisation des boucles

Lorsque des [boucles](/fr/docs/Learn_web_development/Core/Scripting/Loops) sont nécessaires, choisissez la plus adaptée parmi [`for(;;)`](/fr/docs/Web/JavaScript/Reference/Statements/for), [`for...of`](/fr/docs/Web/JavaScript/Reference/Statements/for...of), [`while`](/fr/docs/Web/JavaScript/Reference/Statements/while), etc.

- Lorsque vous parcourez tous les éléments d'une collection, évitez la boucle classique `for (;;)`&nbsp;: préférez `for...of` ou `forEach()`. Notez que si vous utilisez une collection qui n'est pas un `Array`, il faut vérifier que `for...of` est bien supporté (cela nécessite que la variable soit itérable), ou que la méthode `forEach()` existe.

  Utilisez `for...of`&nbsp;:

  ```js example-good
  const chiens = ["Rex", "Lassie"];
  for (const chien of chiens) {
    console.log(chien);
  }
  ```

  Ou `forEach()`&nbsp;:

  ```js example-good
  const chiens = ["Rex", "Lassie"];
  chiens.forEach((chien) => {
    console.log(chien);
  });
  ```

  N'utilisez pas `for (;;)`&nbsp;: non seulement il faut ajouter un index supplémentaire, `i`, mais il faut aussi suivre la longueur du tableau. Cela peut être source d'erreurs pour les débutant·e·s.

  ```js example-bad
  const chiens = ["Rex", "Lassie"];
  for (let i = 0; i < chiens.length; i++) {
    console.log(chiens[i]);
  }
  ```

- Veillez à bien définir l'initialiseur en utilisant le mot-clé `const` pour `for...of` ou `let` pour les autres boucles. Ne l'omettez pas. Voici des exemples corrects&nbsp;:

  ```js example-good
  const chats = ["Athena", "Luna"];
  for (const chat of chats) {
    console.log(chat);
  }

  for (let i = 0; i < 4; i++) {
    result += arr[i];
  }
  ```

  L'exemple ci-dessous ne suit pas les recommandations pour l'initialisation (il crée implicitement une variable globale et échouera en mode strict)&nbsp;:

  ```js example-bad
  const chats = ["Athena", "Luna"];
  for (i of chats) {
    console.log(i);
  }
  ```

- Lorsque vous avez besoin d'accéder à la fois à la valeur et à l'index, vous pouvez utiliser `.forEach()` au lieu de `for (;;)`. Écrivez&nbsp;:

  ```js example-good
  const gerbilles = ["Zoé", "Chloé"];
  gerbilles.forEach((gerbille, i) => {
    console.log(`Gerbille #${i} : ${gerbille}`);
  });
  ```

  N'écrivez pas&nbsp;:

  ```js example-bad
  const gerbilles = ["Zoé", "Chloé"];
  for (let i = 0; i < gerbilles.length; i++) {
    console.log(`Gerbille #${i} : ${gerbilles[i]}`);
  }
  ```

> [!WARNING]
> N'utilisez jamais `for...in` avec les tableaux et les chaînes de caractères.

> [!NOTE]
> Envisagez de ne pas utiliser de boucle `for` du tout. Si vous utilisez un [`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array) (ou une [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) pour certaines opérations), privilégiez des méthodes d'itération plus sémantiques comme [`map()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/map), [`every()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/every), [`findIndex()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex), [`find()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/find), [`includes()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/includes) et bien d'autres.

### Instructions conditionnelles

Il y a un cas notable à garder à l'esprit pour les instructions `if...else`. Si l'instruction `if` se termine par un `return`, n'ajoutez pas d'instruction `else`.

Continuez directement après l'instruction `if`. Écrivez&nbsp;:

```js example-good
if (test) {
  // Exécute une action si test est vrai
  // …
  return;
}

// Exécute une action si test est faux
// …
```

N'écrivez pas&nbsp;:

```js example-bad
if (test) {
  // Exécute une action si test est vrai
  // …
  return;
} else {
  // Exécute une action si test est faux
  // …
}
```

### Toujours utiliser les accolades avec les instructions de contrôle et les boucles

Bien que les instructions de contrôle comme `if`, `for` et `while` n'exigent pas l'utilisation d'accolades lorsqu'elles ne contiennent qu'une seule instruction, il faut toujours les utiliser. Écrivez&nbsp;:

```js example-good
for (const voiture of voituresStockees) {
  voiture.peindre("rouge");
}
```

N'écrivez pas&nbsp;:

```js example-bad
for (const voiture of voituresStockees) voiture.peindre("rouge");
```

Cela évite d'oublier d'ajouter les accolades lors de l'ajout d'autres instructions.

### Instructions switch

Les instructions switch peuvent être un peu piégeuses.

- N'ajoutez pas d'instruction `break` après un `return` dans un cas précis. Écrivez plutôt les `return` ainsi&nbsp;:

  ```js example-good
  switch (espece) {
    case "poule":
      return ferme.grange;
    case "cheval":
      return enclos.entree;
    default:
      return "";
  }
  ```

  Si vous ajoutez un `break`, il sera inatteignable. N'écrivez pas&nbsp;:

  ```js example-bad
  switch (espece) {
    case "poule":
      return ferme.grange;
      break;
    case "cheval":
      return enclos.entree;
      break;
    default:
      return "";
  }
  ```

- Utilisez `default` comme dernier cas, et ne terminez pas par un `break`. Si vous devez faire autrement, ajoutez un commentaire pour expliquer pourquoi.

- Rappelez-vous que lorsque vous déclarez une variable locale dans un cas, il faut utiliser des accolades pour définir une portée&nbsp;:

  ```js
  switch (fruits) {
    case "Orange": {
      const tranche = fruit.couper();
      manger(tranche);
      break;
    }
    case "Pomme": {
      const trognon = fruit.extraireTrognon();
      recycler(trognon);
      break;
    }
  }
  ```

### Gestion des erreurs

- Si certains états de votre programme génèrent des erreurs non interceptées, cela arrêtera l'exécution et peut réduire l'utilité de l'exemple. Il faut donc intercepter les erreurs avec un bloc [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch), comme ci-dessous&nbsp;:

  ```js example-good
  try {
    console.log(obtenirResultat());
  } catch (e) {
    console.error(e);
  }
  ```

- Lorsque vous n'avez pas besoin du paramètre du bloc `catch`, omettez-le&nbsp;:

  ```js example-good
  try {
    console.log(obtenirResultat());
  } catch {
    console.error("Une erreur s'est produite !");
  }
  ```

> [!NOTE]
> Gardez à l'esprit que seules les erreurs _récupérables_ doivent être interceptées et traitées. Toutes les erreurs non récupérables doivent être laissées passer et remonter la pile d'appels.

## Objets

### Noms d'objets

- Lors de la définition d'une classe, utilisez le _PascalCase_ (en commençant par une majuscule) pour le nom de la classe et le _camelCase_ (en commençant par une minuscule) pour les propriétés et méthodes de l'objet.

- Lors de la définition d'une instance d'objet, que ce soit par un littéral ou via un constructeur, utilisez le _camelCase_, en commençant par une minuscule, pour le nom de l'instance. Par exemple&nbsp;:

  ```js example-good
  const hanSolo = new Person("Han Solo", 25, "il/lui");

  const luke = {
    name: "Luke Skywalker",
    age: 25,
    pronouns: "il/lui",
  };
  ```

### Création d'objets

Pour créer des objets généraux (c'est-à-dire sans impliquer de classes), utilisez la notation littérale et non les constructeurs.

Par exemple, faites ainsi&nbsp;:

```js example-good
const objet = {};
```

Ne créez pas un objet général comme ceci&nbsp;:

```js example-bad
const objet = new Object();
```

### Objets basés sur des classes

- Utilisez la syntaxe de classe ES pour les objets, pas les anciens constructeurs.

  Par exemple, voici la manière recommandée&nbsp;:

  ```js example-good
  class Personne {
    constructor(nom, age, pronoms) {
      this.nom = nom;
      this.age = age;
      this.pronoms = pronoms;
    }

    salutation() {
      console.log(`Salut ! Je suis ${this.nom}`);
    }
  }
  ```

- Utilisez `extends` pour l'héritage&nbsp;:

  ```js example-good
  class Enseignant extends Personne {
    // …
  }
  ```

### Méthodes

Pour définir des méthodes, utilisez la syntaxe de définition de méthode&nbsp;:

```js example-good
const obj = {
  foo() {
    // …
  },
  bar() {
    // …
  },
};
```

Au lieu de&nbsp;:

```js example-bad
const obj = {
  foo: function () {
    // …
  },
  bar: function () {
    // …
  },
};
```

### Propriétés d'objet

- La méthode [`Object.prototype.hasOwnProperty()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty) est obsolète au profit de [`Object.hasOwn()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn).
- Lorsque c'est possible, utilisez la forme abrégée pour éviter la duplication de l'identifiant de propriété. Écrivez&nbsp;:

  ```js example-good
  function creerObjet(nom, age) {
    return { nom, age };
  }
  ```

  N'écrivez pas&nbsp;:

  ```js example-bad
  function creerObjet(nom, age) {
    return { nom: nom, age: age };
  }
  ```

## Opérateurs

Cette section liste nos recommandations sur les opérateurs à utiliser et dans quels cas.

### Opérateurs conditionnels

Lorsque vous souhaitez affecter à une variable une valeur littérale selon une condition, utilisez l'[opérateur conditionnel (ternaire)](/fr/docs/Web/JavaScript/Reference/Operators/Conditional_operator) plutôt qu'une instruction `if...else`. Cette règle s'applique aussi lors du retour d'une valeur. Écrivez&nbsp;:

```js example-good
const x = condition ? 1 : 2;
```

N'écrivez pas&nbsp;:

```js example-bad
let x;
if (condition) {
  x = 1;
} else {
  x = 2;
}
```

L'opérateur conditionnel est utile lors de la création de chaînes de caractères pour consigner des informations. Dans ces cas, utiliser une instruction `if...else` classique conduit à de longs blocs de code pour une opération annexe comme la journalisation, ce qui masque le point central de l'exemple.

### Opérateur d'égalité stricte

Préférez les opérateurs d'[égalité stricte](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality) (triple égal) et d'inégalité stricte aux opérateurs d'égalité (double égal) et d'inégalité non stricts.

Utilisez les opérateurs d'égalité stricte et d'inégalité stricte ainsi&nbsp;:

```js example-good
name === "Shilpa";
age !== 25;
```

N'utilisez pas les opérateurs d'égalité et d'inégalité non stricts, comme ci-dessous&nbsp;:

```js example-bad
name == "Shilpa";
age != 25;
```

Si vous devez utiliser `==` ou `!=`, rappelez-vous que `== null` est le seul cas acceptable. TypeScript échouera dans tous les autres cas, nous ne voulons donc pas les avoir dans nos exemples de code. Pensez à ajouter un commentaire pour expliquer pourquoi vous en avez besoin.

### Raccourcis pour les tests booléens

Préférez les raccourcis pour les tests booléens. Par exemple, utilisez `if (x)` et `if (!x)`, et non `if (x === true)` ou `if (x === false)`, sauf si différents types de valeurs «&nbsp;truthy&nbsp;» ou «&nbsp;falsy&nbsp;» sont traités différemment.

## Chaînes de caractères

Les littéraux de chaînes de caractères peuvent être entourés de guillemets simples, comme `'Une chaîne de caractères'`, ou de guillemets doubles, comme `"Une chaîne de caractères"`. Ne vous souciez pas du choix&nbsp;: Prettier uniformise automatiquement.

### Gabarits de chaînes de caractères

Pour insérer des valeurs dans des chaînes de caractères, utilisez les [gabarits de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Template_literals).

- Voici un exemple de la manière recommandée d'utiliser les gabarits de chaînes de caractères. Leur utilisation évite de nombreuses erreurs d'espacement.

  ```js example-good
  const name = "Shilpa";
  console.log(`Salut ! Je suis ${name} !`);
  ```

  N'effectuez pas de concaténation de chaînes ainsi&nbsp;:

  ```js example-bad
  const name = "Shilpa";
  console.log("Salut ! Je suis" + name + "!"); // Salut ! Je suisShilpa!
  ```

- N'abusez pas des gabarits de chaînes de caractères. S'il n'y a pas de substitution, utilisez un littéral de chaîne de caractères classique.

## Variables

### Noms de variables

De bons noms de variables sont essentiels pour comprendre le code.

- Utilisez des identifiants courts et évitez les abréviations peu courantes. Les bons noms de variables font généralement entre 3 et 10 caractères, mais ce n'est qu'une indication. Par exemple, `accelerometer` est plus explicite que l'abréviation `acclmtr` juste pour gagner des caractères.
- Essayez d'utiliser des exemples issus du monde réel où chaque variable a une sémantique claire. N'utilisez des noms génériques comme `foo` et `bar` que pour des exemples très simples et artificiels.
- N'utilisez pas la [notation hongroise](https://fr.wikipedia.org/wiki/Notation_hongroise). Ne préfixez pas le nom de la variable par son type. Par exemple, écrivez `bought = car.buyer !== null` plutôt que `bBought = oCar.sBuyer != null` ou `name = "Maria Sanchez"` au lieu de `sName = "Maria Sanchez"`.
- Pour les collections, évitez d'ajouter le type comme list, array, queue dans le nom. Utilisez le nom du contenu au pluriel. Par exemple, pour un tableau de voitures, utilisez `cars` et non `carArray` ou `carList`. Il peut y avoir des exceptions, par exemple pour montrer la forme abstraite d'une fonctionnalité sans le contexte d'une application particulière.
- Pour les valeurs primitives, utilisez le _camelCase_, en commençant par une minuscule. N'utilisez pas `_`. Utilisez des noms concis, lisibles et sémantiques lorsque c'est approprié. Par exemple, utilisez `currencyName` plutôt que `currency_name`.
- Évitez d'utiliser des articles et des possessifs. Par exemple, utilisez `car` au lieu de `myCar` ou `aCar`. Il peut y avoir des exceptions, par exemple pour décrire une fonctionnalité de façon générale sans contexte pratique.
- Utilisez des noms de variables comme ci-dessous&nbsp;:

  ```js example-good
  const playerScore = 0;
  const speed = distance / time;
  ```

  N'utilisez pas des noms de variables comme ceci&nbsp;:

  ```js example-bad
  const thisIsaveryLONGVariableThatRecordsPlayerscore345654 = 0;
  const s = d / t;
  ```

> [!NOTE]
> Le seul cas où il est permis de ne pas utiliser de noms lisibles et sémantiques est lorsqu'une convention très largement reconnue existe, comme l'utilisation de `i` et `j` pour les itérateurs de boucle.

### Déclaration de variables

Lors de la déclaration de variables et de constantes, utilisez les mots-clés [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/fr/docs/Web/JavaScript/Reference/Statements/const), pas [`var`](/fr/docs/Web/JavaScript/Reference/Statements/var). Les exemples suivants montrent ce qui est recommandé et ce qui ne l'est pas sur MDN Web Docs&nbsp;:

- Si une variable ne sera pas réaffectée, préférez `const`, comme ceci&nbsp;:

  ```js example-good
  const name = "Shilpa";
  console.log(name);
  ```

- Si vous allez changer la valeur d'une variable, utilisez `let` comme ci-dessous&nbsp;:

  ```js example-good
  let age = 40;
  age++;
  console.log("Joyeux anniversaire !");
  ```

- L'exemple ci-dessous utilise `let` là où il faudrait `const`. Le code fonctionnera, mais nous voulons éviter cette utilisation dans les exemples de code MDN Web Docs.

  ```js example-bad
  let name = "Shilpa";
  console.log(name);
  ```

- L'exemple ci-dessous utilise `const` pour une variable qui est réaffectée. La réaffectation provoquera une erreur.

  ```js example-bad
  const age = 40;
  age++;
  console.log("Joyeux anniversaire !");
  ```

- L'exemple ci-dessous utilise `var`, ce qui pollue l'espace global&nbsp;:

  ```js example-bad
  var age = 40;
  var name = "Shilpa";
  ```

- Déclarez une variable par ligne, comme ceci&nbsp;:

  ```js example-good
  let var1;
  let var2;
  let var3 = "Apapou";
  let var4 = var3;
  ```

  N'utilisez pas de déclaration multiple sur une ligne, ni de déclaration chaînée. Évitez de déclarer des variables comme ceci&nbsp;:

  ```js-nolint example-bad
  let var1, var2;
  let var3 = var4 = "Apapou"; // var4 est implicitement créée comme variable globale ; échoue en mode strict
  ```

### Conversion de type

Évitez les conversions de type implicites. En particulier, évitez `+val` pour forcer une valeur à devenir un nombre et `"" + val` pour forcer une valeur à devenir une chaîne de caractères. Utilisez `Number()` et `String()`, sans `new`. Écrivez&nbsp;:

```js example-good
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = String(name);
    this.#birthYear = Number(year);
  }
}
```

N'écrivez pas&nbsp;:

```js example-bad
class Person {
  #name;
  #birthYear;

  constructor(name, year) {
    this.#name = "" + name;
    this.#birthYear = +year;
  }
}
```

## APIs Web à éviter

En plus de ces fonctionnalités du langage JavaScript, nous recommandons quelques règles concernant les APIs Web à garder à l'esprit.

### Éviter les préfixes navigateurs

Si tous les principaux navigateurs (Chrome, Edge, Firefox et Safari) prennent en charge une fonctionnalité, n'ajoutez pas de préfixe. Écrivez&nbsp;:

```js example-good
const context = new AudioContext();
```

Évitez la complexité supplémentaire des préfixes. N'écrivez pas&nbsp;:

```js example-bad
const AudioContext = window.AudioContext || window.webkitAudioContext;
const context = new AudioContext();
```

La même règle s'applique aux préfixes CSS.

### Éviter les APIs obsolètes

Lorsqu'une méthode, une propriété ou une interface entière est obsolète, ne l'utilisez pas (sauf dans sa propre documentation). Utilisez plutôt l'API moderne.

Voici une liste non exhaustive d'APIs Web à éviter et par quoi les remplacer&nbsp;:

- Utilisez `fetch()` à la place de XHR (`XMLHttpRequest`).
- Utilisez `AudioWorklet` à la place de `ScriptProcessorNode`, dans l'API Web Audio.

### Utiliser des APIs sûres et fiables

- N'utilisez pas {{DOMxRef("Element.innerHTML")}} pour insérer du contenu purement textuel dans un élément&nbsp;: utilisez {{DOMxRef("Node.textContent")}} à la place. La propriété `innerHTML` pose des problèmes de sécurité si la personne développant ne contrôle pas le paramètre. Plus nous évitons de l'utiliser dans nos exemples, moins il y aura de failles de sécurité lorsque le code sera copié-collé.

  L'exemple ci-dessous montre l'utilisation de `textContent`.

  ```js example-good
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.textContent = text;
  ```

  N'utilisez pas `innerHTML` pour insérer _du texte pur_ dans des nœuds du DOM.

  ```js example-bad
  const text = "Hello to all you good people";
  const para = document.createElement("p");
  para.innerHTML = text;
  ```

- La fonction `alert()` est peu fiable. Elle ne fonctionne pas dans les exemples interactifs de MDN Web Docs qui sont dans un {{HTMLElement("iframe")}}. De plus, elle est modale pour toute la fenêtre, ce qui est gênant. Dans les exemples statiques, utilisez `console.log()` ou `console.error()`. Dans les [exemples interactifs](/fr/docs/MDN/Writing_guidelines/Page_structures/Live_samples), évitez `console.log()` et `console.error()` car ils ne sont pas affichés. Utilisez un élément d'interface dédié.

### Utiliser la bonne méthode de journalisation

- Pour consigner un message, utilisez `console.log()`.
- Pour consigner une erreur, utilisez `console.error()`.

## Voir aussi

[Référence du langage JavaScript](/fr/docs/Web/JavaScript/Reference) — parcourez nos pages de référence JavaScript pour découvrir de bons extraits JavaScript concis et pertinents.
