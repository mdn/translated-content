---
title: Symbol.for()
slug: Web/JavaScript/Reference/Global_Objects/Symbol/for
---

{{JSRef}}

La méthode **`Symbol.for(clé)`** permet de chercher parmi les symboles existants enregistrés dans le registre global de l'environnement d'exécution. Si un symbole associé à la clé donnée existe, il est renvoyé par la fonction, sinon un nouveau symbole associé à cette clé est créé dans le registre.

{{InteractiveExample("JavaScript Demo: Symbol.for()")}}

```js interactive-example
console.log(Symbol.for("bar") === Symbol.for("bar"));
// Expected output: true

console.log(Symbol("bar") === Symbol("bar"));
// Expected output: false

const symbol1 = Symbol.for("foo");

console.log(symbol1.toString());
// Expected output: "Symbol(foo)"
```

## Syntaxe

```js
Symbol.for(clé);
```

### Paramètres

- clé
  - : Une chaîne de caractères, obligatoire. La clé correspondant au symbole (également utilisée pour la description du symbole).

### Valeur de retour

Un symbole existant s'il en a été trouvé un avec la clé fournie. Sinon, un nouveau symbole est créé puis renvoyé par la méthode.

## Description

À la différence de `Symbol()`, la méthode `Symbol.for()` crée un symbole enregistré dans le registre global. `Symbol.for()` ne crée pas nécessairement un nouveau symbole pour chaque appel, elle vérifie d'abord si un symbole avec la `clé` donnée est d'ores et déjà présent dans le registre. Si c'est le cas, le symbole correspondant est renvoyé, sinon `Symbol.for()` crée un nouveau symbol global.

### Registre global pour les symboles

Le registre global des symboles est une liste, initialement vide, dont les éléments ont la structure suivante :

| Nom du champ | Valeur                                                                                  |
| ------------ | --------------------------------------------------------------------------------------- |
| [[key]]      | Une chaîne de caractères représentant la clé pour identifier un symbole en particulier. |
| [[symbol]]   | Un symbole enregistré de façon globale.                                                 |

## Exemples

```js
Symbol.for("toto"); // crée un nouveau symbole global
Symbol.for("toto"); // renvoie le symbole déjà existant

// Globalement on a un symbole par clé, localement non
Symbol.for("machin") === Symbol.for("machin"); // true
Symbol("machin") === Symbol("machin"); // false

// La clé sert également de description
var sym = Symbol.for("mario");
sym.toString(); // "Symbol(mario)"
```

Afin d'éviter des conflits entre les clés des symboles globaux liés à votre application et les autres symboles potentiels (bibliothèques externes, etc...), il peut être judicieux de les préfixer :

```js
Symbol.for("mdn.toto");
Symbol.for("mdn.machin");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Symbol.keyFor()")}}
