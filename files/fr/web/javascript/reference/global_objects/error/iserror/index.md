---
title: "Error : méthode statique isError()"
short-title: isError()
slug: Web/JavaScript/Reference/Global_Objects/Error/isError
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`isError()`** détermine si la valeur passée est une erreur {{JSxRef("Error")}}.

## Syntaxe

```js-nolint
Error.isError(value)
```

### Paramètres

- `value`
  - : La valeur à vérifier.

### Valeur de retour

`true` si `value` est une {{JSxRef("Error")}}&nbsp;; sinon, `false`.

## Description

`Error.isError()` vérifie si la valeur passée est une {{JSxRef("Error")}}. Elle le fait en effectuant une _vérification brandée_ pour un champ privé initialisé par le constructeur {{JSxRef("Error/Error", "Error()")}}.
C'est le même mécanisme utilisé par {{JSxRef("Array.isArray()")}}, qui est lui‑même similaire au mécanisme utilisé par l'opérateur {{JSxRef("Operators/in", "in")}}.

C'est une alternative plus robuste à [`instanceof Error`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof) car elle évite les faux positifs et les faux négatifs&nbsp;:

- `Error.isError()` rejette les valeurs qui ne sont pas de véritables instances de `Error`, même si elles ont `Error.prototype` dans leur chaîne de prototypes — `instanceof Error` les accepterait car il vérifie la chaîne de prototypes.
- `Error.isError()` accepte les objets `Error` créés dans un autre contexte d'exécution — `instanceof Error` renvoie `false` pour ces objets car l'identité du constructeur `Error` diffère entre les contextes d'exécution.

`Error.isError()` retourne `true` pour les instances de {{DOMxRef("DOMException")}}. Cela s'explique par le fait que, bien que `DOMException` ne soit pas défini comme une véritable sous‑classe d'`Error` (le constructeur `Error` n'est pas le prototype du constructeur `DOMException`), `DOMException` se comporte néanmoins comme `Error` pour tous les besoins de la vérification brandée.

## Exemples

### Utiliser la méthode `isError()`

```js
// tous les appels suivants retournent true
Error.isError(new Error());
Error.isError(new TypeError());
Error.isError(new DOMException());
try {
  1 + 1n;
} catch (e) {
  console.log(Error.isError(e)); // L'opération a levé un TypeError, donc ceci retourne true
}

// tous les appels suivants retournent false
Error.isError();
Error.isError({});
Error.isError(null);
Error.isError(undefined);
Error.isError(17);
Error.isError("Error");
Error.isError(true);
Error.isError(false);
// Ceci n'est pas une erreur, car l'objet n'a pas le champ privé
// initialisé par le constructeur Error
Error.isError({ __proto__: Error.prototype });
```

### instanceof vs. Error.isError()

Lors de la vérification d'une instance d'`Error`, `Error.isError()` est préféré à `instanceof` car il fonctionne entre contextes d'exécution.

```js
const iframe = document.createElement("iframe");
document.body.appendChild(iframe);
const xError = window.frames[window.frames.length - 1].Error;
const error = new xError();

// Vérification correcte d'Error
Error.isError(error); // true
// Le prototype de error est xError.prototype, qui est un
// objet différent de Error.prototype
error instanceof Error; // false
```

### Normaliser les erreurs interceptées

Vous pouvez utiliser `Error.isError()` pour détecter si la valeur interceptée est une erreur et la normaliser en un objet Error.

```js
try {
  throw "Oups : ceci n'est pas un objet Error";
} catch (e) {
  if (!Error.isError(e)) {
    e = new Error(e);
  }
  console.error(e.message);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation de `Error.isError` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#erroriserror)
- [Prothèse d'émulation es-shims de `Error.isError` <sup>(angl.)</sup>](https://www.npmjs.com/package/error.iserror)
- L'objet {{JSxRef("Error")}}
