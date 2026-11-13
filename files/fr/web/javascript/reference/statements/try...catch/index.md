---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
l10n:
  sourceCommit: 203acfabc8a27b2a64757df33586b3c29abb730f
---

L'instruction **`try...catch`** est composée d'une clause `try` et soit d'une clause `catch`, soit d'une clause `finally`, soit des deux. Le code dans la clause `try` est exécuté en premier, et s'il génère une exception, le code dans la clause `catch` est exécuté. Le code dans la clause `finally` est toujours exécuté avant que le flux de contrôle ne quitte l'ensemble de la construction.

{{InteractiveExample("Démonstration JavaScript&nbsp;: instruction try...catch")}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Résultat attendu : ReferenceError: nonExistentFunction is not defined
  // (Note : le résultat exact peut dépendre du navigateur)
}
```

## Syntaxe

```js-nolint
try {
  tryStatements
} catch (exceptionVar) {
  catchStatements
} finally {
  finallyStatements
}
```

- `tryStatements`
  - : L'instruction à exécuter.
- `catchStatements`
  - : L'instruction à exécuter si une exception est levée dans la clause `try`.
- `exceptionVar` {{Optional_Inline}}
  - : Un [identifiant ou un modèle](#lier_la_clause_catch) optionnel pour contenir l'exception capturée pour la clause `catch` associé. Si la clause `catch` n'utilise pas la valeur de l'exception, vous pouvez omettre `exceptionVar` et ses parenthèses environnantes.
- `finallyStatements`
  - : Les instructions qui sont exécutées avant que le flux de contrôle ne quitte la construction `try...catch...finally`. Ces instructions s'exécutent indépendamment du fait qu'une exception ait été levée ou interceptée.

## Description

L'instruction `try` commence toujours par une clause `try`. Ensuite, une clause `catch` ou une clause `finally` doit être présente. Il est également possible d'avoir à la fois une clause `catch` et une clause `finally`. Cela nous donne trois formes pour l'instruction `try`&nbsp;:

- `try...catch`
- `try...finally`
- `try...catch...finally`

Contrairement à d'autres constructions telles que [`if`](/fr/docs/Web/JavaScript/Reference/Statements/if...else) ou [`for`](/fr/docs/Web/JavaScript/Reference/Statements/for), les clauses `try`, `catch` et `finally` doivent être des _blocs_, et non des instructions uniques.

```js-nolint example-bad
try faireQuelqueChose(); // SyntaxError
catch (e) console.log(e);
```

Une clause `catch` contient des instructions qui définissent ce qu'il faut faire si une exception est levée dans la clause `try`. Si une instruction de la clause `try` (ou d'une fonction appelée depuis la clause `try`) lève une exception, le contrôle est immédiatement transféré à la clause `catch`. Si aucune exception n'est levée dans la clause `try`, la clause `catch` est ignorée.

La clause `finally` s'exécute toujours avant que le flux de contrôle ne quitte la construction `try...catch...finally`. Elle s'exécute toujours, que une exception ait été levée ou interceptée.

Vous pouvez imbriquer une ou plusieurs instructions `try`. Si une instruction `try` interne n'a pas de clause `catch`, la clause `catch` de l'instruction `try` englobante est utilisé à la place.

Vous pouvez également utiliser l'instruction `try` pour gérer les exceptions JavaScript. Consultez le [Guide JavaScript](/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#les_instructions_pour_gérer_les_exceptions) pour plus d'informations sur les exceptions JavaScript.

### Lier la clause `catch`

Lorsqu'une exception est levée dans la clause `try`, `exceptionVar` (c'est-à-dire le `e` dans `catch (e)`) contient la valeur de l'exception. Vous pouvez utiliser cette {{Glossary("binding", "liaison")}} pour obtenir des informations sur l'exception qui a été levée. Cette {{Glossary("binding", "liaison")}} n'est disponible que dans la {{Glossary("Scope", "portée")}} de la clause `catch`.

Il n'est pas nécessaire que ce soit un seul identifiant. Vous pouvez utiliser un [modèle de déstructuration](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) pour affecter plusieurs identifiants à la fois.

```js
try {
  throw new TypeError("oups");
} catch ({ name, message }) {
  console.log(name); // "TypeError"
  console.log(message); // "oups"
}
```

Les liaisons créées par la clause `catch` vivent dans la même portée que la clause `catch`, donc toutes les variables déclarées dans la clause `catch` ne peuvent pas avoir le même nom que les liaisons créées par la clause `catch`. (Il y a [une exception à cette règle](/fr/docs/Web/JavaScript/Reference/Deprecated_and_obsolete_features#instructions), mais c'est une syntaxe obsolète.)

```js-nolint example-bad
try {
  throw new TypeError("oups");
} catch ({ name, message }) {
  var name; // SyntaxError: Identifier 'name' has already been declared
  let message; // SyntaxError: Identifier 'message' has already been declared
}
```

La liaison de l'exception est modifiable. Par exemple, vous pouvez vouloir normaliser la valeur de l'exception pour vous assurer qu'il s'agit d'un objet {{JSxRef("Error")}}.

```js
try {
  throw "Oups ; ce n'est pas un objet Error";
} catch (e) {
  if (!(e instanceof Error)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

Si vous n'avez pas besoin de la valeur de l'exception, vous pouvez l'omettre ainsi que les parenthèses englobantes.

```js
function estDuJSONValide(texte) {
  try {
    JSON.parse(texte);
    return true;
  } catch {
    return false;
  }
}
```

### La clause `finally`

La clause `finally` contient des instructions à exécuter après l'exécution des clauses `try` et `catch`, mais avant les instructions suivant la clause `try...catch...finally`. Le flux de contrôle entre toujours dans la clause `finally`, qui peut se dérouler de l'une des manières suivantes&nbsp;:

- Immédiatement après que le flux de contrôle quitte la clause `try` dans une construction `try...finally` (soit après la dernière instruction ou une instruction `throw`, `return`, `break`, ou `continue`)&nbsp;;
- Immédiatement après que le flux de contrôle quitte la clause `catch` dans une construction `try...catch...finally`&nbsp;;
- Immédiatement après que le flux de contrôle quitte la clause `try` dans une construction `try...catch...finally`, sauf s'il quitte avec une instruction `throw` (auquel cas le flux de contrôle entre dans la clause `catch` en premier).

Si la clause `finally` est exécutée après une instruction de contrôle de flux (`return`, `throw`, `break`, `continue`) dans la clause `try` ou `catch`, l'effet de cette instruction est différé jusqu'après la dernière instruction exécutée dans la clause `finally`. Par exemple, si une exception est levée depuis la clause `try`, même lorsqu'il n'y a pas de clause `catch` pour gérer l'exception, la clause `finally` s'exécute toujours, et l'exception est levée immédiatement après l'exécution de la clause `finally`.

Cependant, il existe une exception à cette règle&nbsp;: si la dernière instruction exécutée dans la clause `finally` est elle-même une instruction de contrôle de flux, cette instruction remplace l'effet de la précédente (pas de différé)&nbsp;; voir [retourner depuis une clause `finally`](#retourner_depuis_une_clause_finally) pour des exemples. Il est généralement déconseillé d'utiliser des instructions de contrôle de flux (`return`, `throw`, `break`, `continue`) dans la clause `finally`, car elles peuvent remplacer l'effet des instructions de contrôle de flux exécutées précédemment, ce qui est rarement souhaité. La plupart du temps, la clause `finally` doit être réservée au code de nettoyage qui ne modifie pas la logique principale.

## Exemples

### Clause `catch` inconditionnelle

Lorsqu'une clause `catch` est utilisée, la clause `catch` est exécutée lorsqu'une exception est levée depuis la clause `try`. Par exemple, lorsque l'exception se produit dans le code suivant, le contrôle est transféré à la clause `catch`.

```js
try {
  throw new Error("Mon exception"); // génère une exception
} catch (e) {
  // les instructions pour gérer toutes les exceptions
  journaliserMesErreurs(e); // passe l'objet exception au gestionnaire d'erreurs
}
```

La clause `catch` définit un identifiant (`e` dans l'exemple ci-dessus) qui contient la valeur de l'exception&nbsp;; cette valeur n'est disponible que dans la {{Glossary("Scope", "portée")}} de la clause `catch`.

### Clauses `catch` conditionnelles

Vous pouvez créer des «&nbsp;clauses `catch` conditionnelles&nbsp;» en combinant des clauses `try...catch` avec des structures `if...else if...else`, comme ceci&nbsp;:

```js
try {
  maRoutine(); // peut lever trois types d'exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // les instructions pour gérer les exceptions de type TypeError
  } else if (e instanceof RangeError) {
    // les instructions pour gérer les exceptions de type RangeError
  } else if (e instanceof EvalError) {
    // les instructions pour gérer les exceptions de type EvalError
  } else {
    // les instructions pour gérer toutes les autres exceptions non définies
    journaliserMesErreurs(e); // passe l'objet exception au gestionnaire d'erreurs
  }
}
```

Un cas d'utilisation courant pour cela est de ne capturer (et de faire taire) qu'un petit sous-ensemble d'erreurs attendues, puis de relancer l'erreur dans les autres cas&nbsp;:

```js
try {
  maRoutine();
} catch (e) {
  if (e instanceof RangeError) {
    // les instructions pour gérer cette erreur attendue très courante
  } else {
    throw e; // relance l'erreur inchangée
  }
}
```

Cela peut imiter la syntaxe d'autres langages, comme Java&nbsp;:

```java
try {
  maRoutine();
} catch (RangeError e) {
  // les instructions pour gérer cette erreur attendue très courante
}
// Les autres erreurs sont implicitement relancées
```

### Clauses `try` imbriquées

Tout d'abord, voyons ce qui se passe avec ceci&nbsp;:

```js
try {
  try {
    throw new Error("oups");
  } finally {
    console.log("final");
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Journaux :
// "final"
// "externe" "oups"
```

Maintenant, si nous avons déjà intercepté l'exception dans la clause `try` interne en ajoutant une clause `catch`&nbsp;:

```js
try {
  try {
    throw new Error("oups");
  } catch (ex) {
    console.error("interne", ex.message);
  } finally {
    console.log("final");
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Journaux :
// "interne" "oups"
// "final"
```

Et maintenant, relançons l'erreur.

```js
try {
  try {
    throw new Error("oups");
  } catch (ex) {
    console.error("interne", ex.message);
    throw ex;
  } finally {
    console.log("final");
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Journaux :
// "interne" "oups"
// "final"
// "externe" "oups"
```

Une exception donnée n'est interceptée qu'une seule fois par le bloc `catch` le plus proche, à moins qu'elle ne soit relancée. Bien entendu, toute nouvelle exception levée dans le bloc «&nbsp;interne&nbsp;» (car le code du bloc `catch` peut effectuer une opération qui en lance une) est interceptée par le bloc «&nbsp;externe&nbsp;».

### Libérer des ressources avec `finally`

L'exemple suivant illustre un cas d'utilisation de la clause `finally`. Le code ouvre un fichier, puis exécute des instructions qui utilisent ce fichier&nbsp;; la clause `finally` garantit que le fichier est toujours fermé après son utilisation, même si une exception a été levée.

```js
ouvrirMonFichier();
try {
  // mobilise une ressource
  ecrireMonFichier(laDonnee);
} finally {
  fermerMonFichier(); // toujours fermer la ressource
  // toute exception non interceptée est différée ici
}
```

De la même manière, l'effet de toute instruction `return` dans la clause `try` est différé à la fin de la clause `finally`, bien que l'expression de la valeur de retour soit évaluée avant d'entrer dans la clause `finally`.

```js
function ecritureSecuriseeDeMonFichier() {
  ouvrirMonFichier();
  try {
    return ecrireMonFichier(laDonnee); // l'appel de fonction est évalué
  } finally {
    fermerMonFichier(); // toujours fermer la ressource
    // le retour est différé ici
  }
}
```

### Retourner depuis une clause `finally`

L'exemple suivant illustre le comportement des instructions de contrôle de flux dans la clause `finally`. Lorsque le flux de contrôle sort de la clause `try` par la première instruction `return`, l'expression de la valeur de retour (`order.sort()`) est évaluée avant d'entrer dans la clause `finally`, et la fonction est prévue pour retourner cette valeur après l'exécution de la clause `finally`. Cependant, l'instruction `return` dans la clause `finally` remplace l'effet de l'instruction `return` précédente, y compris sa valeur de retour.

```js
function faitLe() {
  const ordre = ["z"];
  try {
    ordre.push("essai");
    return ordre.sort(); // "z" est maintenant après "essai"
  } finally {
    ordre.push("final");
    return ordre;
  }
}
faitLe();
// retourne ["essai", "z", "final"], pas ["final", "essai", "z"] ou ["essai", "z"]
```

La même logique s'applique aux autres instructions de contrôle de flux. Ici, la fonction est d'abord prévue pour lever la valeur `"attrapé"`, mais retourne à la place la valeur `"final"`.

```js
function faitLe() {
  try {
    throw "essai"; // fait entrer le flux de contrôle dans la clause `catch`
  } catch {
    throw "attrapé"; // fait entrer le flux de contrôle dans la clause `finally`
  } finally {
    return "final"; // retourne "final" au lieu de lever "attrapé"
  }
}
faitLe(); // retourne "final"
```

Encore une fois, les instructions de contrôle de flux sont déconseillées dans la clause `finally`, car cet effet est probablement non souhaité.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Error")}}
- L'instruction {{JSxRef("Statements/throw", "throw")}}
