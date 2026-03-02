---
title: Error
slug: Web/JavaScript/Reference/Global_Objects/Error
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Les objets **`Error`** sont levés lorsque des erreurs d'exécution se produisent. L'objet `Error` peut aussi être utilisé comme objet de base pour des exceptions définies par l'utilisateur·ice. Voir ci-dessous pour les types d'erreurs intégrés standards.

## Description

Les erreurs d'exécution entraînent la création et la levée de nouveaux objets `Error`.

`Error` est un {{Glossary("serializable object", "objet sérialisable")}}, il peut donc être cloné avec {{DOMxRef("Window.structuredClone", "structuredClone()")}} ou copié entre [Workers](/fr/docs/Web/API/Worker) en utilisant {{DOMxRef("Worker/postMessage()", "postMessage()")}}.

### Types d'erreur

Outre le constructeur générique `Error`, il existe d'autres constructeurs d'erreur principaux en JavaScript. Pour les exceptions côté client, voir [Contrôle du flux d'instructions et gestion des erreurs](/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#déclarations_de_gestion_des_exceptions).

- {{JSxRef("EvalError")}}
  - : Crée une instance représentant une erreur qui se produit concernant la fonction globale {{JSxRef("Global_Objects/eval", "eval()")}}.
- {{JSxRef("RangeError")}}
  - : Crée une instance représentant une erreur qui se produit lorsqu'une variable ou un paramètre numérique est en dehors de sa plage de validité.
- {{JSxRef("ReferenceError")}}
  - : Crée une instance représentant une erreur qui se produit lors du déréférencement d'une référence invalide.
- {{JSxRef("SyntaxError")}}
  - : Crée une instance représentant une erreur de syntaxe.
- {{JSxRef("TypeError")}}
  - : Crée une instance représentant une erreur qui se produit lorsqu'une variable ou un paramètre n'est pas d'un type valide.
- {{JSxRef("URIError")}}
  - : Crée une instance représentant une erreur qui se produit lorsque {{JSxRef("encodeURI()")}} ou {{JSxRef("decodeURI()")}} reçoivent des paramètres invalides.
- {{JSxRef("AggregateError")}}
  - : Crée une instance représentant plusieurs erreurs regroupées dans une seule erreur lorsque plusieurs erreurs doivent être signalées par une opération, par exemple par {{JSxRef("Promise.any()")}}.
- {{JSxRef("InternalError")}} {{Non-standard_Inline}}
  - : Crée une instance représentant une erreur qui se produit lorsqu'une erreur interne du moteur JavaScript est levée. Par exemple «&nbsp;too much recursion&nbsp;».

## Constructeur

- {{JSxRef("Error/Error", "Error()")}}
  - : Crée un nouvel objet `Error`.

## Propriétés statiques

- {{JSxRef("Error.stackTraceLimit")}} {{Non-standard_Inline}}
  - : Une propriété numérique non standard qui limite le nombre de trames de pile à inclure dans une trace de pile d'erreur.

## Méthodes statiques

- {{JSxRef("Error.captureStackTrace()")}}
  - : Une fonction non standard qui crée la propriété {{JSxRef("Error/stack", "stack")}} sur l'objet fourni.
- {{JSxRef("Error.isError()")}}
  - : Retourne `true` si l'argument est une erreur, ou `false` sinon.
- `Error.prepareStackTrace()` {{Non-standard_Inline}} {{Optional_Inline}}
  - : Une fonction non standard qui, si elle est fournie par le code de l'utilisateur·ice, est appelée par le moteur JavaScript pour les exceptions levées, permettant à l'utilisateur·ice de fournir un formatage personnalisé pour les traces de pile. Voir la documentation de [l'API V8 Stack Trace <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api#customizing-stack-traces).

## Propriétés d'instance

Ces propriétés sont définies sur `Error.prototype` et partagées par toutes les instances de `Error`.

- {{JSxRef("Object/constructor", "Error.prototype.constructor")}}
  - : La fonction constructeur qui a créé l'objet d'instance. Pour les instances de `Error`, la valeur initiale est le constructeur {{JSxRef("Error/Error", "Error")}}.
- {{JSxRef("Error.prototype.name")}}
  - : Représente le nom du type d'erreur. Pour `Error.prototype.name`, la valeur initiale est `"Error"`. Les sous-classes comme {{JSxRef("TypeError")}} et {{JSxRef("SyntaxError")}} fournissent leur propre propriété `name`.
- {{JSxRef("Error.prototype.stack")}} {{Non-standard_Inline}}
  - : Une propriété non standard pour une trace de pile.

Ces propriétés sont des propriétés propres à chaque instance de `Error`.

- {{JSxRef("Error/cause", "cause")}}
  - : Cause de l'erreur indiquant la raison pour laquelle l'erreur courante est levée — généralement une autre erreur interceptée. Pour les objets `Error` créés par l'utilisateur·ice, il s'agit de la valeur fournie comme propriété `cause` du second argument du constructeur.
- {{JSxRef("Error/columnNumber", "columnNumber")}} {{Non-standard_Inline}}
  - : Propriété non standard de Mozilla pour le numéro de colonne dans la ligne qui a généré cette erreur.
- {{JSxRef("Error/fileName", "fileName")}} {{Non-standard_Inline}}
  - : Propriété non standard de Mozilla pour le chemin du fichier qui a généré cette erreur.
- {{JSxRef("Error/lineNumber", "lineNumber")}} {{Non-standard_Inline}}
  - : Propriété non standard de Mozilla pour le numéro de ligne dans le fichier qui a généré cette erreur.
- {{JSxRef("Error/message", "message")}}
  - : Message d'erreur. Pour les objets `Error` créés par l'utilisateur·ice, il s'agit de la chaîne de caractères fournie comme premier argument du constructeur.

## Méthodes d'instance

- {{JSxRef("Error.prototype.toString()")}}
  - : Retourne une chaîne de caractères représentant l'objet défini. Redéfinit la méthode {{JSxRef("Object.prototype.toString()")}}.

## Exemples

### Déclenchement d'une erreur générique

On crée habituellement un objet `Error` dans l'intention de le déclencher en utilisant le mot-clé {{JSxRef("Statements/throw", "throw")}}. L'erreur peut ensuite être interceptée et gérée en utilisant la construction {{JSxRef("Statements/try...catch", "try...catch")}}&nbsp;:

```js
try {
  throw new Error("Oups !");
} catch (e) {
  console.error(`${e.name} : ${e.message}`);
}
```

### Gestion d'une erreur spécifique

Vous pouvez choisir de gérer uniquement certains types d'erreur en testant le type de l'erreur avec le mot-clé {{JSxRef("Operators/instanceof", "instanceof")}}&nbsp;:

```js
try {
  toto.truc();
} catch (e) {
  if (e instanceof EvalError) {
    console.error(`${e.name} : ${e.message}`);
  } else if (e instanceof RangeError) {
    console.error(`${e.name} : ${e.message}`);
  }
  // etc.
  else {
    // Si aucun cas ne correspond, on laisse l'erreur non gérée
    throw e;
  }
}
```

### Distinguer des erreurs semblables

Il arrive parfois que des erreurs semblables (type et message identiques) nécessitent des traitements différents.

Si vous ne maîtrisez pas l'origine des erreurs, vous pouvez les intercepter et renvoyer de nouveaux objets `Error` avec des messages plus spécifiques.
L'erreur d'origine doit être passée au nouveau `Error` dans le paramètre [`options`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/Error#options) du constructeur comme propriété `cause`. Cela garantit que l'erreur d'origine et la pile d'appels sont disponibles pour les blocs try/catch de plus haut niveau.

Dans l'exemple qui suit, on illustre ceci pour deux méthodes qui échoueraient avec des erreurs similaires (`echecUneFacon()` et `echecAutreFacon()`)&nbsp;:

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
  switch (err.message) {
    case "Echoue d'une certaine façon":
      gererUneFacon(err.cause);
      break;
    case "Echoue d'une autre façon":
      gererUneAutreFacon(err.cause);
      break;
  }
}
```

> [!NOTE]
> Si vous créez une bibliothèque, il est préférable d'utiliser la cause de l'erreur pour différencier les différentes erreurs émises — plutôt que de demander à vos utilisateur·ice·s d'analyser le message d'erreur. Voir la [page sur la cause d'erreur](/fr/docs/Web/JavaScript/Reference/Global_Objects/Error/cause#fournir_des_données_structurées_comme_cause_derreur) pour un exemple.

[Les types d'erreur personnalisés](#types_derreur_personnalisés) peuvent également utiliser la propriété `cause`, à condition que le constructeur des sous-classes transmette le paramètre `options` lors de l'appel à `super()`. Le constructeur de la classe de base `Error()` lira `options.cause` et définira la propriété `cause` sur la nouvelle instance d'erreur.

```js
class MonErreur extends Error {
  constructor(message, options) {
    // Il faut passer l'argument `options` en second paramètre
    // pour que la propriété "cause" soit initialisée.
    super(message, options);
  }
}

console.log(new MonErreur("test", { cause: new Error("cause") }).cause);
// Error: cause
```

### Types d'erreur personnalisés

Il est possible de définir ses propres types d'erreur dérivés de `Error` et d'utiliser alors `throw new MonErreur()` et `instanceof MonErreur` pour vérifier le type d'erreur lors du traitement. Cela permet d'avoir un code plus concis et cohérent pour le traitement des erreurs.

Voir [«&nbsp;Quelle est une bonne façon d'étendre Error en JavaScript&nbsp;?&nbsp;» <sup>(angl.)</sup>](https://stackoverflow.com/questions/1382107/whats-a-good-way-to-extend-error-in-javascript) sur StackOverflow pour une discussion détaillée.

> [!WARNING]
> Le sous-classage natif ne peut pas être transpilé de manière fiable vers du code pré-ES6, car il n'existe aucun moyen de construire la super-classe avec un `new.target` particulier sans {{JSxRef("Reflect.construct()")}}. Vous avez besoin d'une [configuration supplémentaire <sup>(angl.)</sup>](https://github.com/loganfsmyth/babel-plugin-transform-builtin-extend) ou d'appeler manuellement {{JSxRef("Object/setPrototypeOf", "Object.setPrototypeOf(this, CustomError.prototype)")}} à la fin du constructeur&nbsp;; sinon, l'instance construite ne sera pas une instance de `CustomError`. Voir [la FAQ TypeScript <sup>(angl.)</sup>](https://github.com/microsoft/TypeScript/wiki/FAQ#why-doesnt-extending-built-ins-like-error-array-and-map-work) pour plus d'informations.

> [!NOTE]
> Certains navigateurs incluent le constructeur `CustomError` dans la pile d'appel lorsque les classes ES2015 sont utilisées.

```js
class ErreurSpecifique extends Error {
  constructor(toto = "truc", ...params) {
    // On passe les arguments restants (y compris ceux
    // de l'éditeur tiers) au constructeur parent
    super(...params);

    // On garde la pile d'appels de l'erreur
    // Uniquement disponible pour V8
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, ErreurSpecifique);
    }

    this.name = "ErreurSpecifique";
    // Les informations de débogage spécifiques
    this.toto = toto;
    this.date = new Date();
  }
}

try {
  throw new ErreurSpecifique("truc", "trucMessage");
} catch (e) {
  console.error(e.name); // ErreurSpecifique
  console.error(e.toto); // truc
  console.error(e.message); // trucMessage
  console.error(e.stack); // stacktrace
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation pour `Error` avec la prise en charge de `cause` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-error)
- [Prothèse d'émulation es-shims de Error `cause` <sup>(angl.)</sup>](https://www.npmjs.com/package/error-cause)
- L'instruction {{JSxRef("Statements/throw", "throw")}}
- L'instruction {{JSxRef("Statements/try...catch", "try...catch")}}
- [L'API de trace de pile <sup>(angl.)</sup>](https://v8.dev/docs/stack-trace-api) dans la documentation V8
