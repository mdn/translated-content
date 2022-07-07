---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
translation_of: Web/JavaScript/Reference/Global_Objects/Error
original_slug: Web/JavaScript/Reference/Objets_globaux/Error
browser-compat: javascript.builtins.Error
---
{{JSRef}}

Les objets `Error` sont déclenchés lorsque des erreurs d'exécution surviennent. L'objet `Error` peut aussi être utilisé comme objet de base pour des exceptions spécifiques. Voir ci-dessous pour les types d'erreur natifs standards.

## Description

Les erreurs d'exécution ont pour résultat la création et le déclenchement d'objets `Error`.

### Types d'erreur

En plus du constructeur `Error` générique, il existe d'autres constructeurs d'erreur natifs en JavaScript. Pour les exceptions côté client, voir [Contrôle du flux d'instructions et gestion des erreurs](/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling).

- [`EvalError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/EvalError)
  - : Crée une instance représentant une erreur se produisant en relation avec la fonction globale [`eval()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval).
- [`RangeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RangeError)
  - : Crée une instance représentant une erreur se produisant quand une variable numérique ou un paramètre est en dehors de sa plage de validité.
- [`ReferenceError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/ReferenceError)
  - : Crée une instance représentant une erreur se produisant lors du déréférencement d'une référence invalide.
- [`SyntaxError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/SyntaxError)
  - : Crée une instance représentant une erreur de syntaxe.
- [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError)
  - : Crée une instance représentant une erreur se produisant quand une variable ou un paramètre n'est pas d'un type valide.
- [`URIError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/URIError)
  - : Crée une instance représentant une erreur se produisant quand des paramètres invalides sont passés à [`encodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/encodeURI) ou à [`decodeURI()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/decodeURI).
- [`AggregateError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/AggregateError)
  - : Crée une instance représentant différentes erreurs agrégées en une seule lorsque plusieurs erreurs sont rapportées par une opération, par exemple avec [`Promise.any()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise/any).
- [`InternalError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/InternalError) {{non-standard_inline}}
  - : Crée une instance représentant une erreur se produisant quand une erreur interne dans le moteur JavaScript est déclenchée. Par exemple, «&nbsp;<i lang="en">too much recursion</i>&nbsp;».

## Constructeur

- [`Error()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Error)
  - : Crée un nouvel objet `Error`.

## Méthodes statiques methods

- [`Error.captureStackTrace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/captureStackTrace)
  - : Une fonction non-standard implémentée par le moteur V8 qui crée la propriété [`stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack) d'une instance de `Error`.

## Propriétés des instances

- [`Error.prototype.message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message)
  - : Le message de l'erreur.
- [`Error.prototype.name`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/name)
  - : Le nom de l'erreur.
- [`Error.prototype.description`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/description) {{non-standard_inline}}
  - : Une propriété non-standard, implémentée par Microsoft, qui décrit l'erreur. Analogue à [`message`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/message).
- [`Error.prototype.number`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/number) {{non-standard_inline}}
  - : Une propriété non-standard, implémentée par Microsoft, qui fournit un nombre pour chaque erreur.
- [`Error.prototype.fileName`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/fileName) {{non-standard_inline}}
  - : Une propriété non-standard, implémentée par Mozilla, qui indique le chemin du fichier à l'origine de l'erreur.
- [`Error.prototype.lineNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/lineNumber) {{non-standard_inline}}
  - : Une propriété non-standard, implémentée par Mozilla, qui indique le numéro de la ligne du fichier à l'origine de l'erreur.
- [`Error.prototype.columnNumber`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/columnNumber) {{non-standard_inline}}
  - : Une propriété non-standard, implémentée par Mozilla, qui indique le numéro de la colonne de la ligne du fichier à l'origine de l'erreur.
- [`Error.prototype.stack`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Stack) {{non-standard_inline}}
  - : Une propriété non-standard, implémentée par Mozilla, pour fournir une trace de la pile d'appels.

## Méthodes des instances

- [`Error.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/toString)
  - : Renvoie une chaîne de caractères qui représente l'objet courant. Surcharge la méthode [`Object.prototype.toString()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/toString).

## Exemples

### Déclenchement d'une erreur générique

On crée habituellement un objet `Error` dans l'intention de le déclencher en utilisant le mot-clé [`throw`](/fr/docs/Web/JavaScript/Reference/Statements/throw). L'erreur peut ensuite être interceptée et gérée en utilisant la construction [`try…catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch)&nbsp;:

```js
try {
  throw new Error("Oups !");
} catch (e) {
  console.log(e.name + " : " + e.message);
}
```

### Gestion d'une erreur spécifique

Il est possible de ne gérer que certains types d'erreur particuliers en testant le type de l'erreur via la propriété [`constructor`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/constructor) ou grâce au mot-clé [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof)&nbsp;:

```js
try {
  toto.truc()
} catch (e) {
  if (e instanceof EvalError) {
    console.error(e.name + ' : ' + e.message)
  } else if (e instanceof RangeError) {
    console.error(e.name + ' : ' + e.message)
  }
  // ... etc

  else {
    // Si aucun cas ne correspond, on laisse l'erreur
    // non-gérée
    throw e;
  }
}
```

### Distinguer des erreurs semblables

Il arrive parfois que des erreurs semblables (type et message identiques) nécessitent des traitements différents.

Si vous ne maîtrisez pas l'origine des erreurs, vous pouvez les intercepter et renvoyer de nouveaux objets `Error` avec des messages plus spécifiques.

L'erreur d'origine peut être passée au constructeur `Error` avec le paramètre `option` (qui correspond à la propriété `cause`), cela permettra que l'erreur d'origine et la pile d'appels seront disponibles pour les blocs `try/catch` de plus haut niveau.

Dans l'exemple qui suit, on illustre ceci pour deux méthodes qui échoueraient avec des erreurs similaires (`echecUneFacon()` et `echecAutreFacon()`):

```js
function faireTruc() {
  try {
    echecUneFacon();
  } catch (err) {
    throw new Error("Echoue d'une certaine façon", { cause: err });
  }
  try {
    echecAutreFacon();
  } catch (err) {
    throw new Error("Echoue d'une autre façon", { cause: err });
  }
}

try {
  faireTruc();
} catch (err) {
  switch(err.message) {
    case "Echoue d'une certaine façon":
      gererUneFacon(err.cause);
      break;
    case "Echoue d'une autre façon":
      gererUneAutreFacon(err.cause);
      break;
  }
}
```

Il est aussi possible d'utiliser la propriété `cause` des [types d'erreur personnalisés](#types_derreur_personnalisés), si celle-ci est fournie via le paramètre `options` du constructeur de la sous-classe lors de l'appel à `super()`&nbsp;:

```js
class MonErreur extends Error {
  constructor(/* des arguments */) {
    // Il faut passer les paramètres `message` et `options`
    // pour que la propriété "cause" soit initialisée. 
    super(message, options);
  }
}
```

### Types d'erreur personnalisés

Il est possible de définir ses propres types d'erreur dérivés de `Error` et d'utiliser alors `throw new MonErreur()` et `instanceof MonErreur` pour vérifier le type d'erreur lors du traitement. Cela permet d'avoir un code plus concis et cohérent pour le traitement des erreurs.

Voir [cette question (en anglais) sur StackOverflow](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) pour une discussion détaillée.

#### En utilisant les classes ES2015

> **Attention :** Les versions de Babel antérieures à la version 7 peuvent gérer les méthodes de classes des erreurs personnalisées uniquement lorsqu'elles sont déclarées avec [Object.defineProperty()](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty). Dans le cas contraire, la transpilation du code qui suit ne sera pas gérée correctement sans [configuration supplémentaire](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend).

> **Note :** Certains navigateurs incluent le constructeur `CustomError` dans la pile d'appel lorsque les classes ES2015 sont utilisées.

```js
class ErreurSpecifique extends Error {
  constructor(toto = 'truc', ...params) {
    // On passe les arguments restants (y compris ceux
    // de l'éditeur tiers) au constructeur parent
    super(...params);

    // On garde la pile d'appels de l'erreur
    // Uniquement disponible pour V8
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErreurSpecifique);
    }

    this.name = 'ErreurSpecifique';
    // Les informations de débogage spécifiques
    this.toto = toto;
    this.date = new Date();
  }
}

try {
  throw new ErreurSpecifique('truc', 'trucMessage');
} catch(e) {
  console.error(e.name);    // ErreurSpecifique
  console.error(e.toto);    // truc
  console.error(e.message); // trucMessage
  console.error(e.stack);   // stacktrace
}
```

#### En utilisant des objets ES5

> **Attention :** Tous les navigateurs incluent le constructeur du type spécifique dans la pile d'appel lorsque la déclaration prototypale est utilisée.

```js
function ErreurSpecifique(toto, message, fileName, lineNumber) {
  var instance = new Error(message, fileName, lineNumber);
  instance.name = 'ErreurSpecifique';
  instance.toto = toto;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if (Error.captureStackTrace) {
    Error.captureStackTrace(instance, ErreurSpecifique);
  }
  return instance;
}

ErreurSpecifique.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(ErreurSpecifique, Error);
} else {
  ErreurSpecifique.__proto__ = Error;
}

try {
  throw new ErreurSpecifique('truc', 'trucMessage');
} catch(e){
  console.error(e.name); // ErreurSpecifique
  console.error(e.toto); // truc
  console.error(e.message); // trucMessage
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'émulation pour `Error`](https://github.com/zloirock/core-js#ecmascript-error) qui inclut la prise en charge de `cause`, disponible avec [`core-js`](https://github.com/zloirock/core-js)
- [`throw`](/fr/docs/Web/JavaScript/Reference/Statements/throw)
- [`try…catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch)
