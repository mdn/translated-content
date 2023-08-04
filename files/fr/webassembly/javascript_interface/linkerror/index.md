---
title: WebAssembly.LinkError()
slug: WebAssembly/JavaScript_interface/LinkError
---

{{WebAssemblySidebar}}

Le constructeur **`WebAssembly.LinkError()`** permet de créer un nouvel objet WebAssembly `LinkError` qui indique qu'une erreur s'est produite lors de l'instanciation du module (en plus [des trappes](http://webassembly.org/docs/semantics/#traps) provenant de la fonction initiale).

## Syntaxe

```js
new WebAssembly.LinkError(message, nomFichier, numeroLigne);
```

### Paramètres

- `message` {{optional_inline}}
  - : Une description, compréhensible par un humain, de l'erreur qui s'est produite.
- `nomFichier` {{optional_inline}}{{non-standard_inline}}
  - : Le nom du fichier qui contient le code à l'origine de l'exception.
- `numeroLigne` {{optional_inline}}{{non-standard_inline}}
  - : Le numéro de ligne dans le fichier contenant le code à l'origine de l'exception.

## Propriétés

_Le constructeur `LinkError` ne contient pas de propriétés qui lui soient propres. Il hérite cependant de certaines propriétés via sa chaîne de prototypes._

- `WebAssembly.LinkError.prototype.constructor`
  - : Cette propriété est la fonction qui permet de créer le prototype de l'instance.
- {{jsxref("Error.prototype.message", "WebAssembly.LinkError.prototype.message")}}
  - : Le message d'erreur. Bien qu'ECMA-262 indique que l'objet doive fournir sa propre propriété `message`, dans [SpiderMonkey](/fr/docs/Mozilla/Projects/SpiderMonkey), celle-ci est héritée depuis {{jsxref("Error.prototype.message")}}.
- {{jsxref("Error.prototype.name", "WebAssembly.LinkError.prototype.name")}}
  - : Le nom de l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.fileName", "WebAssembly.LinkError.prototype.fileName")}}
  - : Le chemin du fichier qui a entraîné l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.lineNumber", "WebAssembly.LinkError.prototype.lineNumber")}}
  - : Le numéro de ligne dans le fichier qui a entraîné l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.columnNumber", "WebAssembly.LinkError.prototype.columnNumber")}}
  - : Le numéro de la colonne dans la ligne du fichier qui a entraîné l'erreur. Cette propriété est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.stack", "WebAssembly.LinkError.prototype.stack")}}
  - : La pile d'appels à l'origine de l'erreur. Cette propriété est héritée depuis {{jsxref("Error")}}.

## Méthodes

_Le constructeur `LinkError` ne contient pas de méthodes qui lui soient propres. Il hérite toutefois de méthodes grâce à sa chaîne de prototypes._

- {{jsxref("Error.prototype.toSource", "WebAssembly.LinkError.prototype.toSource()")}}
  - : Cette méthode renvoie un code qui pourrait être évalué et causere la même erreur. Elle est héritée via {{jsxref("Error")}}.
- {{jsxref("Error.prototype.toString", "WebAssembly.LinkError.prototype.toString()")}}
  - : Cette méthode renvoie une chaîne de caractères qui représente l'objet de l'erreur. Elle est héritée via {{jsxref("Error")}}.

## Exemples

Dans le fragment de code qui suit, on crée un nouvelle instance de `LinkError` puis on imprime les détails dans la console :

```js
try {
  throw new WebAssembly.LinkError("Coucou", "unFichier", 10);
} catch (e) {
  console.log(e instanceof LinkError); // true
  console.log(e.message); // "Coucou"
  console.log(e.name); // "LinkError"
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
