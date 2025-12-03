---
title: "AsyncDisposableStack : méthode use()"
short-title: use()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/use
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`use()`** des instances de {{JSxRef("AsyncDisposableStack")}} enregistre dans la pile une valeur qui implémente le [protocole de libération asynchrone](/fr/docs/Web/JavaScript/Guide/Resource_management).

Voir {{JSxRef("DisposableStack.prototype.use()")}} pour des informations générales sur la méthode `use()`.

## Syntaxe

```js-nolint
use(value)
```

### Paramètres

- `value`
  - : Une valeur à enregistrer dans la pile. Doit contenir une méthode `[Symbol.asyncDispose]()` ou `[Symbol.dispose]()`, ou bien être `null` ou `undefined`.

### Valeur de retour

La même valeur `value` que celle passée en argument.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `value` n'est ni `null` ni `undefined`, et ne contient pas de méthode `[Symbol.asyncDispose]()` ou `[Symbol.dispose]()`.
- {{JSxRef("ReferenceError")}}
  - : Levée si la pile a déjà été libérée.

## Exemples

### Utilisation de `use()`

La fonction suivante lit un fichier (comme un [`FileHandle` <sup>(angl.)</sup>](https://nodejs.org/api/fs.html#class-filehandle) de Node.js) et retourne son contenu. Le descripteur de fichier est automatiquement fermé à la fin de la fonction, car la classe `FileHandle` implémente une méthode `[Symbol.asyncDispose]()` qui ferme le fichier de façon asynchrone.

```js
async function lireContenuFichier(chemin) {
  await using gestionnaire = new AsyncDisposableStack();
  const descripteur = gestionnaire.use(fs.open(chemin));
  const donnees = await descripteur.read();
  return donnees;
  // Le gestionnaire est libéré ici, ce qui entraîne aussi la fermeture du descripteur
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet global {{JSxRef("AsyncDisposableStack")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.adopt()")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.defer()")}}
