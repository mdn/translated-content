---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
tags:
  - Error
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Error
original_slug: Web/JavaScript/Reference/Objets_globaux/Error
---
{{JSRef}}

Le constructeur **`Error`** crée un objet d'erreur. Des instances d'objets `Error` sont déclenchées lorsque des erreurs d'exécution surviennent. L'objet `Error` peut aussi être utilisé comme objet de base pour des exceptions définies par l'utilisateur. Voir ci-dessous pour les types d'erreur natifs standard.

## Syntaxe

    new Error([message[, fileName[, lineNumber]]])

### Paramètres

- `message` {{optional_inline}}
  - : Description de l'erreur sous une forme lisible par un humain.
- `fileName` {{optional_inline}}{{Non-standard_inline}}
  - : Argument qui sera utilisé pour la valeur de la propriété `fileName` dans l'objet `Error` créé. Par défaut, ce sera le nom du fichier contenant le code qui a appelé le constructeur `Error()`.
- `lineNumber` {{optional_inline}}{{Non-standard_inline}}
  - : Argument qui sera utilisé pour la valeur de la propriété `lineNumber` dans l'objet `Error` créé. Par défaut, ce sera le numéro de la ligne contenant l'invocation du constructeur `Error()`.

## Description

Les erreurs d'exécution ont pour résultat la création et le déclenchement d'objets `Error`.

Cette page documente l'utilisation de l'objet `Error` lui-même et son utilisation comme fonction constructeur. Pour une liste des propriétés et des méthodes héritées par les instances d'`Error`,  voir {{jsxref("Error.prototype")}}.

### Utilisation de `Error` comme fonction

Lorsqu'`Error` est utilisée comme fonction sans utiliser l'opérateur {{jsxref("Opérateurs/L_opérateur_new", "new")}}, cet appel renverra un objet `Error`. Aussi, un simple appel à `Error` produira le même résultat qu'une invocation avec `new`.

```js
// Cette instruction :
const x = Error("J'ai été créée sans new");

// Aura le même effet que
const y = new Error("J'ai été créée avec new");
```

### Types d'erreur

En plus du constructeur `Error` générique, il existe sept autres constructeurs d'erreur de base en JavaScript. Pour les exceptions côté client, voir [Contrôle du flux d'instructions et gestion des erreurs](/fr/docs/Web/JavaScript/Guide/Contr%C3%B4le_du_flux_Gestion_des_erreurs).

- {{jsxref("EvalError")}}
  - : Crée une instance représentant une erreur se produisant en relation avec la fonction globale {{jsxref("eval","eval()")}}.
- {{jsxref("RangeError")}}
  - : Crée une instance représentant une erreur se produisant quand une variable numérique ou un paramètre est en dehors de sa plage de validité.
- {{jsxref("ReferenceError")}}
  - : Crée une instance représentant une erreur se produisant lors du déréférencement d'une référence invalide.
- {{jsxref("SyntaxError")}}
  - : Crée une instance représentant une erreur de syntaxe se produisant lors d'une analyse de code dans {{jsxref("eval", "eval()")}}.
- {{jsxref("TypeError")}}
  - : Crée une instance représentant une erreur se produisant quand une variable ou un paramètre n'est pas d'un type valide.
- {{jsxref("URIError")}}
  - : Crée une instance représentant une erreur se produisant quand des paramètres invalides sont passés à {{jsxref("encodeURI", "encodeURI()")}} ou à {{jsxref("decodeURI", "decodeURI()")}}.
- {{JSxRef("AggregateError")}}
  - : Crée une instance représentant différentes erreurs agrégées en une seule lorsque plusieurs erreurs sont rapportées par une opération, par exemple avec {{JSxRef("Promise.any()")}}.
- {{jsxref("InternalError")}} {{non-standard_inline}}
  - : Crée une instance représentant une erreur se produisant quand une erreur interne dans le moteur JavaScript est déclenchée. Par ex., "too much recursion".

## Propriétés

- {{jsxref("Error.prototype")}}
  - : Permet l'ajout de propriétés aux instances `Error`.

## Méthodes

L'objet global `Error` ne contient pas de méthodes en propre, toutefois, il hérite de certaines méthodes via la chaine de prototype.

## Instances d'`Error`

{{page('fr/docs/JavaScript/Reference/Objets_globaux/Error/prototype', 'Description')}}

### Propriétés

{{page('fr/docs/JavaScript/Reference/Objets_globaux/Error/prototype', 'Propriétés')}}

### Méthodes

{{page('fr/docs/JavaScript/Reference/Objets_globaux/Error/prototype', 'Méthodes')}}

## Exemples

### Déclenchement d'une erreur générique

Vous créez habituellement un objet `Error` dans l'intention de le déclencher en utilisant le mot-clé {{jsxref("Instructions/throw", "throw")}}. Vous pouvez gérer l'erreur en utilisant la construction {{jsxref("Instructions/try...catch", "try...catch")}} :

```js
try {
    throw new Error("Ouups !");
} catch (e) {
    console.log(e.name + ": " + e.message);
}
```

### Gestion d'une erreur spécifique

Vous pouvez choisir de ne gérer que des types d'erreur particuliers en testant le type de l'erreur via la propriété {{jsxref("Object.prototype.constructor", "constructor")}} de l'erreur ou, si vous écrivez pour des interpréteurs JavaScript modernes, le mot-clé {{jsxref("Opérateurs/instanceof", "instanceof")}} :

```js
try {
    machin.truc();
} catch (e) {
    if (e instanceof EvalError) {
        console.log(e.name + ": " + e.message);
    } else if (e instanceof RangeError) {
        console.log(e.name + ": " + e.message);
    }
    // ... etc
}
```

### Types d'erreur personnalisés

Vous pouvez vouloir définir vos propres types d'erreur dérivants d'`Error` pour pouvoir écrire `throw new MonErreur()` et utiliser `instanceof MonErreur` afin de vérifier le type d'erreur dans le gestionnaire d'exceptions. Cela a pour résultat un code de gestion d'erreur plus propre et plus cohérent. Voir [_What's a good way to extend Error in JavaScript?_](http://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) sur StackOverflow pour une discussion en profondeur.

#### Classes d'erreur personnalisées avec ECMAScript 2015 / ES6

> **Attention :** Babel, dans les versions antérieures à Babel 7, ainsi que d'autres transpileurs ne géreront pas correctement le code suivant sans [configuration supplémentaire](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend). Les versions de Babel antérieures à la version 7 peuvent uniquement gérer les classes d'erreur personnalisées lorsque celles-ci sont créées avec [`Object.defineProperty()`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/Object/defineProperty).

> **Note :** Certains navigateurs incluent le constructeur `CustomError` (Erreur Personnalisée) dans la pile d'appels lors de l'utilisation de classes ES6.

```js
class CustomError extends Error {
  constructor(machin = 'truc', ...params) {
    // Passer les arguments restants (incluant ceux spécifiques au vendeur) au constructeur parent
    super(...params);

    // Maintenir dans la pile une trace adéquate de l'endroit où l'erreur a été déclenchée (disponible seulement en V8)
    if(Error.captureStackTrace) {
      Error.captureStackTrace(this, CustomError);
    }
    this.name = 'CustomError';
    // Informations de déboguage personnalisées
    this.machin = machin;
    this.date = new Date();
  }
}

try {
  throw new CustomError('bidule', 'messageBidule');
} catch(e){
  console.log(e.name);    // CustomError
  console.log(e.machin);  // bidule
  console.log(e.message); // messageBidule
  console.log(e.stack);   // stacktrace
}
```

#### Objet d'erreur personnalisé ES5

> **Attention :** Tous les navigateurs incluent le constructeur `CustomError` dans la pile  d'appel lorsqu'une déclaration prototypale est utilisée.

```js
function CustomError(machin, message, nomFichier, numeroLigne) {
  var instance = new Error(message, nomFichier, numeroLigne);
  instance.name = 'CustomError';
  instance.machin = machin;
  Object.setPrototypeOf(instance, Object.getPrototypeOf(this));
  if(Error.captureStackTrace) {
    Error.captureStackTrace(instance, CustomError);
  }
  return instance;
}

CustomError.prototype = Object.create(Error.prototype, {
  constructor: {
    value: Error,
    enumerable: false,
    writable: true,
    configurable: true
  }
});

if (Object.setPrototypeOf){
  Object.setPrototypeOf(CustomError, Error);
} else {
  CustomError.__proto__ = Error;
}


try {
  throw new CustomError('bidule', 'messageBidule');
} catch(e){
  console.log(e.name);       // CustomError
  console.log(e.toto);       // bidule
  console.log(e.message);    // messageBidule
  console.log(e.lineNumber); // 29
}
```

## Spécifications

| Spécification                                                            | État                         | Commentaires                                          |
| ------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ESDraft', '#sec-error-objects', 'Error')}} | {{Spec2('ESDraft')}} |                                                       |
| {{SpecName('ES2015', '#sec-error-objects', 'Error')}} | {{Spec2('ES2015')}}     |                                                       |
| {{SpecName('ES5.1', '#sec-15.11', 'Error')}}             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES1')}}                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.1. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Error")}}

## Voir aussi

- {{jsxref("Error.prototype")}}
- {{jsxref("Instructions/throw", "throw")}}
- {{jsxref("Instructions/try...catch", "try...catch")}}
