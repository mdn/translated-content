---
title: WebAssembly.RuntimeError()
slug: WebAssembly/JavaScript_interface/RuntimeError
---

{{WebAssemblySidebar}}

Le constructeur **`WebAssembly.RuntimeError()`** permet de créer un nouvel objet WebAssembly `RuntimeError`. C'est ce type d'exception qui est déclenchée lorsque WebAssembly définit [une trappe](http://webassembly.org/docs/semantics/#traps).

## Syntaxe

```js
new WebAssembly.RuntimeError(message, nomFichier, numeroLigne);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description, compréhensible par un humain, de l'erreur qui s'est produite.
- `fileName` {{optional_inline}}{{non-standard_inline}}
  - : Le nom du fichier qui contient le code à l'origine de l'exception.
- `lineNumber` {{optional_inline}}{{non-standard_inline}}
  - : Le numéro de la ligne de code à l'origine de l'exception.

## Propriétés

_Le constructeur `RuntimeError` ne contient aucune propriété qui lui soit propre. En revanche, il hérite de certaines propriétés grâce à sa chaîne de prototypes._

- `WebAssembly.RuntimeError.prototype.constructor`
  - : La fonction qui a créé le prototype de l'instance.
- {{jsxref("Error.prototype.message", "WebAssembly.RuntimeError.prototype.message")}}
  - : Le message qui décrit l'erreur. Bien qu'ECMA-262 indique que chaque instance doit fournir sa propre propriété `message`, dans [SpiderMonkey](/fr/docs/Mozilla/Projects/SpiderMonkey), elle est héritée depuis {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.RuntimeError.prototype.name")}}
  - : Le nom de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.RuntimeError.prototype.fileName")}}
  - : Le chemin du fichier à l'origine de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.RuntimeError.prototype.lineNumber")}}
  - : Le numéro de la ligne à l'origine de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.RuntimeError.prototype.columnNumber")}}
  - : Le numéro de la colonne dans la ligne qui est à l'origine de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.RuntimeError.prototype.stack")}}
  - : La pile d'appels à l'origine de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.

## Méthodes

_Le constructeur `RuntimeError` ne contient aucune méthode qui lui soit propre. En revanche, il hérite de certaines méthodes grâce à sa chaîne de prototypes._

- {{jsxref("Error.prototype.toSource", "WebAssembly.RuntimeError.prototype.toSource()")}}
  - : Cette méthode renvoie un code qui, évalué, entraînerait la même erreur. Elle est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.RuntimeError.prototype.toString()")}}
  - : Cette méthode renvoie une chaîne de caractères qui représente l'objet `Error`. Elle est héritée via {{jsxref("Error")}}.

## Exemples

Dans le fragment de code qui suit, on crée une instance de `RuntimeError` et on imprime les détails de cette erreur dans la console :

```js
try {
  throw new WebAssembly.RuntimeError("Coucou", "unFichier", 10);
} catch (e) {
  console.log(e instanceof RuntimeError); // true
  console.log(e.message); // "Coucou"
  console.log(e.name); // "RuntimeError"
  console.log(e.fileName); // "unFichier"
  console.log(e.lineNumber); // 10
  console.log(e.columnNumber); // 0
  console.log(e.stack); // renvoie la pile d'appels
  // à l'origine de l'erreur
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
