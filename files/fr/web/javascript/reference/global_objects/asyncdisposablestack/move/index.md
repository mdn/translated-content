---
title: "AsyncDisposableStack : méthode move()"
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/AsyncDisposableStack/move
l10n:
  sourceCommit: a4fcf79b60471db6f148fa4ba36f2cdeafbbeb70
---

La méthode **`move()`** des instances de {{JSxRef("AsyncDisposableStack")}} crée une nouvelle instance d'`AsyncDisposableStack` contenant les mêmes libérateurs que cette pile, puis marque cette pile comme libérée sans appeler les libérateurs.

## Syntaxe

```js-nolint
move()
```

### Paramètres

Aucun.

### Valeur de retour

Une nouvelle instance de {{JSxRef("AsyncDisposableStack")}}.

### Exceptions

- {{JSxRef("ReferenceError")}}
  - : Levée si la pile a déjà été libérée.

## Exemples

### Prendre possession d'une pile

```js
async function consommerPile(pile) {
  await using nouvellePile = pile.move(); // nouvellePile possède maintenant les libérateurs
  console.log(pile.disposed); // true
  console.log(nouvellePile.disposed); // false
  // nouvellePile est libérée ici juste avant la sortie de la fonction
}

const pile = new AsyncDisposableStack();
console.log(pile.disposed); // false
await consommerPile(pile);
console.log(pile.disposed); // true
```

### Permettre la libération des ressources selon deux chemins de code

Le principal cas d'usage de `move()` est lorsque vous avez une ou plusieurs ressources qui peuvent soit être libérées immédiatement, soit être conservées pour une utilisation ultérieure. Dans ce cas, vous pouvez placer les ressources dans un `AsyncDisposableStack` puis appeler `move()` lorsque vous souhaitez les conserver pour plus tard.

```js
class HébergeurDePlugin {
  #libéré = false;
  #libérables;
  #canal;
  #socket;

  static async init() {
    // Crée une AsyncDisposableStack qui sera libérée à la sortie de init.
    // Si la construction réussit, on déplace tout hors de `pile` vers
    // `#libérables` pour être libéré plus tard.
    await using pile = new AsyncDisposableStack();

    const canal = pile.use(await obtenirCanal());

    const socket = pile.use(await obtenirSocket());

    // Si on arrive ici, il n'y a pas eu d'erreur pendant la construction et
    // on peut déplacer les libérables hors de `pile`.
    return new HébergeurDePlugin(canal, socket, pile.move());

    // Si la construction échoue, alors `pile` sera libérée avant d'atteindre
    // la ligne ci-dessus, ce qui libérera `canal` et `socket` à leur tour.
  }

  constructor(canal, socket, libérables) {
    this.#canal = canal;
    this.#socket = socket;
    this.#libérables = libérables;
  }

  async [Symbol.asyncDispose]() {
    if (this.#libéré) {
      return;
    }
    this.#libéré = true;
    // Met `this.#libérables` dans une variable `using`, pour qu'elle soit
    // automatiquement libérée à la sortie de la fonction.
    await using libérables = this.#libérables;

    // NOTE : on peut libérer `#socket` et `#canal` ici car ils seront
    // libérés par l'appel à `libérables[Symbol.asyncDispose]()`, ci-dessous.
    // Ce n'est pas strictement obligatoire pour chaque libérable, mais c'est
    // une bonne pratique car ces objets ne seront plus utilisables.
    this.#socket = undefined;
    this.#canal = undefined;
    this.#libérables = undefined;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources en JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet global {{JSxRef("AsyncDisposableStack")}}
- La méthode {{JSxRef("AsyncDisposableStack.prototype.disposeAsync()")}}
