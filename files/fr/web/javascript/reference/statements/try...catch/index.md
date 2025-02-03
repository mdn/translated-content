---
title: try...catch
slug: Web/JavaScript/Reference/Statements/try...catch
---

{{jsSidebar("Statements")}}

L'instruction **`try...catch`** regroupe des instructions à exécuter et définit une réponse si l'une de ces instructions provoque une exception.

{{InteractiveExample}}

```js interactive-example
try {
  nonExistentFunction();
} catch (error) {
  console.error(error);
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}

```

## Syntaxe

```js
try {
  instructions_try
}
catch (exception_var_1 if condition_1) { // non-standard
  instructions_catch_1
}
…
catch (exception_var_2) {
  instructions_catch_2
}
finally {
  instructions_finally
}
```

- `instructions_try`
  - : Les instructions qu'on souhaite exécuter.
- `instructions_catch_1`, `instructions_catch_2`
  - : Les instructions à exécuter si une exception est levée dans le bloc `try`.
- `exception_var_1`, `exception_var_2`
  - : Un identifiant qui permet de récupérer la valeur de l'exception associée à la clause `catch`.
- `condition_1`
  - : Une expression conditionnelle.
- `instructions_finally`
  - : Les instructions à exécuter une fois que l'instruction `try` est terminée. Ces instructions s'exécuteront, qu'il y ait eu une exception ou non.

## Description

L'instruction `try` est composée d'un bloc `try` contenant une ou plusieurs instructions, d'au moins une clause `catch` ou d'une clause `finally` ou des deux. On peut donc avoir les trois formes suivantes pour cette instruction :

1. `try…catch`
2. `try…finally`
3. `try…catch…finally`

Une clause `catch` contient les instructions à exécuter si une exception est levée par une instruction du bloc `try`. On souhaite généralement que le bloc `try` se déroule sans problème. Si toutefois une erreur se produit, on veut pouvoir contrôler ce qui se passe et on transmet donc le contrôle au bloc `catch`. Si une instruction contenue dans le bloc `try` (ou une fonction appelée depuis le bloc `try`) renvoie une exception, le contrôle sera immédiatement passé à la clause `catch`. Si aucune exception n'est levée, la clause `catch` ne sera pas utilisée.

La clause `finally` s'exécute après le bloc `try` et après le bloc `catch` (si celui-ci a été déclenché) mais avant les instructions qui suivent. Les instructions de cette clause sont toujours exécutées, qu'il y ait eu ou non une exception de déclenchée et/ou d'interceptée.

Il est possible d'imbriquer plusieurs instructions `try`. Si un `try` imbriqué ne possède pas de clause `catch`, la clause `catch` du `try` du niveau supérieur sera utilisée (et ainsi de suite).

Pour plus d'informations sur les exceptions et les erreurs en JavaScript, voir le chapitre du [Guide JavaScript](/fr/docs/Web/JavaScript/Guide/Control_flow_and_error_handling#les_instructions_utilis.c3.a9es_pour_les_exceptions) correspondant.

### Clause `catch` inconditionnelle

Lorsqu'une seule clause `catch` inconditionnelle est utilisée, le bloc `catch` est utilisée pour n'importe quelle exception qui est levée. Ainsi, dans le fragment de code qui suit, pour toute exception produite, le contrôle de l'exécution passera à la clause `catch`.

```js
try {
  throw "monException"; // génère une exception
} catch (e) {
  // les instructions utilisées pour gérer les
  // exceptions
  logErreurs(e); // on transfère l'objet de l'exception à une méthode
  // gestionnaire
}
```

La clause `catch` définit un identifiant (dans l'exemple précédent, c'est `e`) qui contient la valeur définie par l'instruction `throw`. Ce bloc `catch` est en quelque sorte unique en JavaScript car l'identifiant est créé lors de l'entrée dans le bloc `catch`, la valeur est alors ajoutée à la portée courant et la durée de vie de l'identifiant est limitée au bloc `catch`. Une fois que le bloc `catch` a été exécuté, l'identifiant n'est plus disponible.

### Clauses `catch` conditionnelles

{{non-standard_header}}

Il est aussi possible d'utiliser une ou plusieurs clauses `catch` conditionnelles afin de gérer des exceptions spécifiques. Dans ce cas, selon l'exception produite, la clause `catch` appropriée sera utilisée. Dans l'exemple qui suit, le code contenu dans le bloc `try` peut produire trois exceptions : {{jsxref("TypeError")}}, {{jsxref("RangeError")}}, et {{jsxref("EvalError")}}. Lorsqu'une exception se produit, le contrôle de l'exécution est passé à la clause `catch` correspondante. SI l'exception qui est déclenchée ne correspond à aucune des conditions, le contrôle passera à la clause `catch` non-conditionnelle si elle est trouvée..

Si on utilise une clause `catch` inconditionnelle avec une ou plusieurs clauses `catch` conditionnelles, la clause inconditionnelle doit être spécifiée en dernière. Si ce n'est pas le cas, la clause `catch` inconditionnelle interceptera tous les types d'exceptions avant les autres clauses.

```js
try {
    maRoutine(); // peut déclencher trois types d'exceptions
} catch (e if e instanceof TypeError) {
    // les instructions pour gérer TypeError
} catch (e if e instanceof RangeError) {
    // les instructions pour gérer RangeError
} catch (e if e instanceof EvalError) {
    // les instructions pour gérer EvalError
} catch (e) {
    // les instructions pour gérer les autres exceptions
}
```

Dans le fragment de code qui suit, on aura le même fonctionnement mais en utilisant uniquement des fonctionnalités standard (selon ECMAScript). Ce code est plus long mais fonctionne pour tous les environnements conformes à ECMAScript :

```js
try {
  maRoutine(); // may throw three types of exceptions
} catch (e) {
  if (e instanceof TypeError) {
    // les instructions pour gérer TypeError
  } else if (e instanceof RangeError) {
    // les instructions pour gérer RangeError
  } else if (e instanceof EvalError) {
    // les instructions pour gérer EvalError
  } else {
    // les instructions pour gérer les autres exceptions
  }
}
```

### L'identifiant de l'exception

Lorsqu'une exception est levée dans le bloc `try`, `exception_var` (par exemple le `e` dans « `catch (e)` ») contient la valeur définie par l'instruction {{jsxref("Instructions/throw","throw")}}. Cet identifiant peut être utilisé pour accéder aux propriétés de l'objet et ainsi obtenir des informations sur l'exception qui a eu lieu. Cet identifiant est local à la clause `catch`, il est créé lorsqu'on rentre dans la clause `catch` et n'est plus disponible une fois que la clause a fini son exécution.

```js
function isValidJSON(txt) {
  try {
    JSON.parse(txt);
    return true;
  } catch {
    return false;
  }
}
```

### La clause `finally`

La clause `finally` contient les instructions à exécuter après que les instructions du bloc `try` et éventuellement celles de la clause `catch` aient été exécutées mais avant que les instructions suivant l'instruction `try` soient exécutées. La clause `finally` est exécutée dans tous les cas (si on a eu une exception ou non). Si une exception est levée et qu'il n'y a pas de clause `catch`, les instructions de la clause `finally` sont tout de même exécutées.

Cela peut paraître étrange qu'un bloc de code qui s'exécute même lorsqu'il y a une exception… Il faut comprendre que le code qui suit le bloc try...catch ne sera **pas** exécuté. Aussi, le bloc `finally` permet de contenir toutes les instructions de clôture/nettoyage nécessaire. On évite donc de dupliquer ce code qui doit toujours être utilisé.

La clause `finally` peut être utilisée afin d'exécuter les actions nécessaires pour que le script « échoue correctement » en cas d'erreur. On peut par exemple tirer parti de `finally` pour fermer un flux, libérer une ressource, etc. Dans l'exemple suivant, exécuté côté serveur, le script accède à un fichier. Si une exception se produit lorsque le fichier est ouvert, la clause `finally` permet de fermer le fichier avant que le script échoue. Le code contenu dans le bloc `finally` sera exécuté même si on a une instruction `return` dans la section `try` ou dans la section `catch`.

```js
ouvrirMonFichier();
try {
  // on utilise une ressource
  écrireDansMonFichier(mesDonnées);
} finally {
  fermerMonFichier(); // on ferme toujours la ressource
}
```

## Exemples

### Blocs `try` imbriqués

Tout d'abord, on utilise ce fragment de code, qui produit le résultat suivant :

```js
try {
  try {
    throw new Error("oups");
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console :
// "finally"
// "externe" "oups"
```

Et maintenant, si on a déjà intercepté l'exception avec une clause `catch` dans le bloc imbriqué :

```js
try {
  try {
    throw new Error("oups");
  } catch (ex) {
    console.error("interne", ex.message);
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console:
// "interne" "oups"
// "finally"
```

Ensuite, si on propage l'erreur à nouveau :

```js
try {
  try {
    throw new Error("oups");
  } catch (ex) {
    console.error("interne", ex.message);
    throw ex;
  } finally {
    console.log("finally");
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console :
// "interne" "oups"
// "finally"
// "externe" "oups"
```

Toute exception ne sera interceptée qu'une seule fois par le bloc `catch` le plus « proche » à moins qu'elle ne soit retransmise à nouveau. Bien entendu, toute exception qui aura été levée par le bloc interne (il se peut que les instructions d'une clause catch provoquent une erreur) sera interceptée par le bloc externe.

### Valeur de retour et bloc `finally`

Lorsque le bloc `finally` renvoie une valeur, c'est cette valeur qui devient la valeur de retour pour l'ensemble du bloc `try-catch-finally` et ce, peu importe, s'il y a des instructions {{jsxref("Instructions/return","return")}} dans les blocs `try` et `catch`. Cela inclue également les exceptions levées dans le bloc `catch` :

```js
try {
  try {
    throw new Error("oups");
  } catch (ex) {
    console.error("interne", ex.message);
    throw ex;
  } finally {
    console.log("finally");
    return;
  }
} catch (ex) {
  console.error("externe", ex.message);
}

// Produira dans la console :
// "interne" "oups"
// "finally"
```

Le "oups" externe n'est pas renvoyé car l'instruction `return` est utilisée dans la clause `finally` du bloc interne. Cela aurait également été le cas avec n'importe quelle valeur renvoyée par le bloc `catch`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Error")}}
- {{jsxref("Instructions/throw", "throw")}}
