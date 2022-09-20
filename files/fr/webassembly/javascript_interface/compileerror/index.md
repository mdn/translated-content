---
title: WebAssembly.CompileError()
slug: WebAssembly/JavaScript_interface/CompileError
tags:
  - API
  - CompileError
  - Constructeur
  - Error
  - JavaScript
  - NativeError
  - Reference
  - WebAssembly
translation_of: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError
original_slug: Web/JavaScript/Reference/Global_Objects/WebAssembly/CompileError
---
{{JSRef}}

Le constructeur **`WebAssembly.CompileError()`** permet de créer une nouvelle instance de `CompileError` qui indique qu'une erreur s'est produite lors du décodage du code WebAssembly ou lors de sa validation.

## Syntaxe

```js
new WebAssembly.CompileError(message, nomFichier, numeroLigne)
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description, compréhensible par un humain, de l'erreur qui s'est produite.
- `nomFichier` {{optional_inline}}{{non-standard_inline}}
  - : Le nom du fichier contenant le code à l'origine de l'exception.
- `numeroLigne` {{optional_inline}}{{non-standard_inline}}
  - : Le numéro de la ligne du fichier à l'origine de l'exception.

## Propriétés

_Le constructeur `CompileError` ne possède aucune propriété propre. En revanche, il hérite de certaines propriétés via sa chaîne de prototypes._

- `WebAssembly.CompileError.prototype.constructor`
  - : Définit la fonction qui crée le prototype d'une instance.
- {{jsxref("Error.prototype.message", "WebAssembly.CompileError.prototype.message")}}
  - : Le message qui décrit l'erreur. Bien qu'ECMA-262 indique que l'instance devrait fournir sa propre propriété `message`, pour [SpiderMonkey](/fr/docs/SpiderMonkey), celle-ci est héritée depuis {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.CompileError.prototype.name")}}
  - : Le nom de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.CompileError.prototype.fileName")}}
  - : Le chemin vers le fichier qui a entraîné l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.CompileError.prototype.lineNumber")}}
  - : Le numéro de la ligne dans le fichier qui a entraîné l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.CompileError.prototype.columnNumber")}}
  - : Le numéro de la colonne dans la ligne du fichier qui a entraîné l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.CompileError.prototype.stack")}}
  - : La pile d'appel. Cette propriété est héritée via {{jsxref("Error")}}.

## Méthodes

_Le constructeur `CompileError` ne contient aucune méthode qui lui soit propre. En revanche, il hérite de certaines méthodes grâce à sa chaîne de prototypes._

- {{jsxref("Error.prototype.toSource", "WebAssembly.CompileError.prototype.toSource()")}}
  - : Cette méthode renvoie un code qui pourrait provoquer la même erreur. Elle est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.CompileError.prototype.toString()")}}
  - : Cette méthode renvoie une chaîne de caractères qui représente l'objet de l'erreur. Elle est héritée via {{jsxref("Error")}}.

## Exemples

Le fragment de code qui suit crée une instance de `CompileError` puis imprime ses détails dans la console :

```js
try {
  throw new WebAssembly.CompileError('Coucou', 'unFichier', 10);
} catch (e) {
  console.log(e instanceof CompileError); // true
  console.log(e.message);                 // "Coucou"
  console.log(e.name);                    // "CompileError"
  console.log(e.fileName);                // "unFichier"
  console.log(e.lineNumber);              // 10
  console.log(e.columnNumber);            // 0
  console.log(e.stack);                   // la pile d'appel pour le code
}
```

## Spécifications

| Spécification                                                                                                                                        | État                                 | Commentaires                                          |
| ---------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------------------------------------------------- |
| {{SpecName('WebAssembly JS', '#constructor-properties-of-the-webassembly-object', 'WebAssembly constructors')}} | {{Spec2('WebAssembly JS')}} | Brouillon pour la définition Initiale de WebAssembly. |
| {{SpecName('ESDraft', '#sec-native-error-types-used-in-this-standard', 'NativeError')}}                                 | {{Spec2('ESDraft')}}         | Définition des types standards pour `NativeError`.    |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WebAssembly.CompileError")}}

## Voir aussi

- [Le portail WebAssembly](/fr/docs/WebAssembly)
- [Les concepts relatifs à WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
