---
title: WebAssembly.Tag.prototype.type()
slug: WebAssembly/JavaScript_interface/Tag/type
---

{{WebAssemblySidebar}}

La méthode **`type()`**, rattachée au prototype d'un objet [`Tag`](/fr/docs/WebAssembly/JavaScript_interface/Tag), permet d'accéder à la séquence des types de données associés à la balise.

L'objet renvoyé par la méthode sera le même que celui initialement passé au [constructeur `Tag()`](/fr/docs/WebAssembly/JavaScript_interface/Tag/Tag).

## Syntaxe

```js
type();
```

### Paramètres

Aucun.

### Valeur de retour

Un objet avec une propriété nommée `parameters` qui fait référence au tableau des types de données associés à cette instance [`Tag`](/fr/docs/WebAssembly/JavaScript_interface/Tag).

Il s'agit du même objet `type` qui a été initialement passé au [constructeur `Tag()`](/fr/docs/WebAssembly/JavaScript_interface/Tag/Tag).

## Exemples

Dans le fragment de code qui suit, on crée une balise avec deux types de données et on les consulte après à l'aide de `type()` pour les afficher dans la console&nbsp;:

```js
const tag = new WebAssembly.Tag({ parameters: ["i32", "i64"] });
console.log(tag.type());

// Affichera dans la console :
// Object { parameters: (2) […] }
//   parameters: Array [ "i32", "i64" ]
//   <prototype>: Object { … }
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Aperçu général de WebAssembly](/fr/docs/WebAssembly)
- [Concepts WebAssembly](/fr/docs/WebAssembly/Concepts)
- [Utiliser l'API JavaScript WebAssembly](/fr/docs/WebAssembly/Using_the_JavaScript_API)
