---
title: "Error : méthode toString()"
short-title: toString()
slug: Web/JavaScript/Reference/Global_Objects/Error/toString
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`toString()`** des instances de {{JSxRef("Error")}} retourne une chaîne de caractères représentant cette erreur.

## Syntaxe

```js-nolint
toString()
```

### Paramètres

Aucun.

### Valeur de retour

Une chaîne de caractères représentant l'objet {{JSxRef("Error")}}.

## Description

L'objet {{JSxRef("Error")}} surcharge la méthode {{JSxRef("Object.prototype.toString()")}} héritée par tous les objets. Sa sémantique est la suivante&nbsp;:

```js
Error.prototype.toString = function () {
  if (
    this === null ||
    (typeof this !== "object" && typeof this !== "function")
  ) {
    throw new TypeError();
  }
  let name = this.name;
  name = name === undefined ? "Erreur" : `${name}`;
  let msg = this.message;
  msg = msg === undefined ? "" : `${msg}`;
  if (name === "") {
    return msg;
  }
  if (msg === "") {
    return name;
  }
  return `${name} : ${msg}`;
};
```

## Exemples

### Utiliser la méthode `toString()`

```js
const e1 = new Error("erreur fatale");
console.log(e1.toString()); // "Error: erreur fatale"

const e2 = new Error("erreur fatale");
e2.name = undefined;
console.log(e2.toString()); // "Error: erreur fatale"

const e3 = new Error("erreur fatale");
e3.name = "";
console.log(e3.toString()); // "erreur fatale"

const e4 = new Error("erreur fatale");
e4.name = "";
e4.message = undefined;
console.log(e4.toString()); // ""

const e5 = new Error("erreur fatale");
e5.name = "bonjour";
e5.message = undefined;
console.log(e5.toString()); // "bonjour"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Error.prototype.toString` avec de nombreuses corrections de bugs dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-error)
