---
title: "AsyncDisposableStack : méthode adopt()"
short-title: adopt()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/adopt
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`adopt()`** des instances de {{JSxRef("AsyncDisposableStack")}} enregistre une valeur qui n'implémente pas le protocole de libération asynchrone dans la pile, en fournissant une fonction de libération personnalisée.

Voir {{JSxRef("DisposableStack.prototype.adopt()")}} pour des informations générales sur la méthode `adopt()`.

## Syntaxe

```js-nolint
adopt(value, onDispose)
```

### Paramètres

- `value`
  - : Toute valeur à enregistrer dans la pile.
- `onDispose`
  - : Une fonction appelée lors de la libération de la pile. Elle reçoit `value` comme unique argument et peut retourner une promesse qui est attendue.

### Valeur de retour

La même valeur `value` que celle passée en argument.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `onDispose` n'est pas une fonction.
- {{JSxRef("ReferenceError")}}
  - : Levée si la pile a déjà été libérée.

## Exemples

### Utiliser la méthode `adopt()`

La fonction suivante crée un descripteur de fichier (comme un [`FileHandle` <sup>(angl.)</sup>](https://nodejs.org/api/fs.html#class-filehandle) de Node.js), qui est fermé à la fin de la fonction. On suppose que le descripteur n'implémente pas le protocole de libération asynchrone (en réalité, il le fait), donc on utilise `adopt()` pour l'enregistrer dans la pile. Comme la méthode `handle.close()` retourne une promesse, il faut utiliser un `AsyncDisposableStack` pour que la libération soit attendue.

```js
async function lireFichier(chemin) {
  await using gestionnaire = new AsyncDisposableStack();
  const descripteur = gestionnaire.adopt(
    await fs.open(chemin),
    async (descripteur) => await descripteur.close(),
  );
  const donnees = await descripteur.read();
  // La méthode descripteur.close() est appelée et attendue ici avant de sortir
  return donnees;
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `AsyncDisposableStack.prototype.adopt` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/explicit-resource-management)
- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet natif {{JSxRef("AsyncDisposableStack")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.defer()")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.use()")}}
