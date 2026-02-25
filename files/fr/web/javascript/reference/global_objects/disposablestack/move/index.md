---
title: "DisposableStack : méthode move()"
short-title: move()
slug: Web/JavaScript/Reference/Global_Objects/DisposableStack/move
l10n:
  sourceCommit: 5d6f5187d1c657edec7e735d3cc5ad36907e2030
---

La méthode **`move()`** des instances de {{JSxRef("DisposableStack")}} crée une nouvelle instance `DisposableStack` qui contient les mêmes gestionnaires de libération que cette pile, puis marque cette pile comme libérée, sans appeler aucun gestionnaire.

## Syntaxe

```js-nolint
move()
```

### Paramètres

Aucun.

### Valeur de retour

Une nouvelle instance de {{JSxRef("DisposableStack")}}.

### Exceptions

- {{JSxRef("ReferenceError")}}
  - : Levée si la pile est déjà libérée.

## Description

L'objectif principal de `move()` est de permettre de transférer la responsabilité de la libération hors de la portée actuelle. Par exemple, votre fonction peut prendre possession de certaines ressources et les libérer en cas d'erreur&nbsp;; si tout se termine avec succès, vous retournez ces ressources et transférez la possession à l'appelant.

Lorsque vous utilisez `move()` pour transférer la possession, l'appel à `move()` doit être la toute dernière étape de votre flux de contrôle, car il n'y aura aucun propriétaire entre le moment où votre code abandonne la possession via `move()` et celui où l'appelant récupère la possession depuis la valeur de retour.

```js example-good
let resource1;

function init() {
  using disposer = new DisposableStack();
  resource1 = disposer.use(getResource1());
  // ...
  // Abandonner la possession juste avant de retourner
  return disposer.move();
}

// Récupérer la possession juste après le retour
using disposer = init();
```

```js example-bad
let resource1;

function init() {
  using disposer = new DisposableStack();
  resource1 = disposer.use(getResource1());
  // ...
  const newDisposer = disposer.move();
  // Si quelqu'un ajoute du code entre ces lignes et qu'une erreur
  // survient, il n'y aurait aucun propriétaire pour libérer resource1
  return newDisposer;
}

using disposer = init();
```

Soyez également prudent avec le modèle suivant, même si utiliser le «&nbsp;bon&nbsp;» modèle peut être très contraignant dans de nombreux cas&nbsp;:

```js
function init() {
  using disposer = new DisposableStack();
  const resource1 = disposer.use(getResource1());
  // ...
  return { disposer: disposer.move(), resource1 };
}

const { resource1, ...rest } = init();
// Si quelqu'un ajoute du code entre ces lignes et qu'une erreur
// survient, il n'y aurait aucun propriétaire pour libérer resource1
using disposer = rest.disposer;
```

`move()` peut aussi être utilisé pour une libération conditionnelle dans les cas où vous ne souhaitez parfois pas libérer les ressources du tout. Par exemple&nbsp;:

```js
using disposer = new DisposableStack();
const server = disposer.use(makeServer());
await server.init();
if (server.ready) {
  // Serveur initialisé avec succès ; il doit maintenant vivre pendant le
  // reste du programme. Abandonner son gestionnaire et ne pas le
  // récupérer. Il ne sera plus jamais libéré.
  disposer.move();
}
// Si on atteint la fin de la portée sans exécuter disposer.move(), alors
// le serveur n'est pas prêt pour une raison quelconque, et on libère ses
// ressources en libérant le gestionnaire.
```

## Exemples

### Prendre possession d'une pile

```js
function consumeStack(stack) {
  using newStack = stack.move(); // newStack possède maintenant les gestionnaires
  console.log(stack.disposed); // true
  console.log(newStack.disposed); // false
  // newStack est libéré ici juste avant la sortie de la fonction
}

const stack = new DisposableStack();
console.log(stack.disposed); // false
consumeStack(stack);
console.log(stack.disposed); // true
```

### Permettre la libération des ressources dans deux chemins de code

Le principal cas d'utilisation de `move()` est lorsque vous avez une ou plusieurs ressources qui peuvent soit être libérées immédiatement, soit être conservées pour une utilisation ultérieure. Dans ce cas, vous pouvez placer les ressources dans un `DisposableStack` puis appeler `move()` lorsque vous souhaitez les conserver pour une utilisation future.

```js
class PluginHost {
  #disposed = false;
  #disposables;
  #channel;
  #socket;

  constructor() {
    // Créer un DisposableStack qui est libéré en sortie du constructeur.
    // Si la construction réussit, on déplace tout hors de `disposer` et
    // dans `#disposables` pour une libération ultérieure.
    using disposer = new DisposableStack();

    // Créer un adaptateur IPC autour de process.send/process.on("message").
    // Lors de la libération, il se désabonne de process.on("message").
    this.#channel = disposer.use(new NodeProcessIpcChannelAdapter(process));

    // Créer un pseudo-websocket qui envoie et reçoit des messages par
    // un canal IPC NodeJS.
    this.#socket = disposer.use(new NodePluginHostIpcSocket(this.#channel));

    // Si on arrive ici, il n'y a eu aucune erreur pendant la
    // construction et on peut déplacer les objets libérables hors de
    // `disposer` et dans `#disposables`.
    this.#disposables = disposer.move();

    // Si la construction échoue, alors `disposer` sera libéré avant
    // d'atteindre la ligne ci-dessus. Les gestionnaires d'évènements
    // seront supprimés, permettant à `#channel` et `#socket` d'être
    // collectés par le collecteur de déchets (garbage collector).
  }

  [Symbol.dispose]() {
    if (this.#disposed) {
      return;
    }
    this.#disposed = true;
    // Placer `this.#disposables` dans une variable `using`, pour qu'elle
    // soit automatiquement libérée à la sortie de la fonction.
    using disposables = this.#disposables;

    // REMARQUE : on peut libérer `#socket` et `#channel` ici puisqu'ils
    // seront libérés par l'appel à `disposables[Symbol.dispose]()`,
    // ci-dessous.
    // Ce n'est pas strictement obligatoire pour chaque objet libérable,
    // mais c'est une bonne pratique puisque ces objets ne seront plus
    // utilisables.
    this.#socket = undefined;
    this.#channel = undefined;
    this.#disposables = undefined;
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des ressources JavaScript](/fr/docs/Web/JavaScript/Guide/Resource_management)
- L'objet {{JSxRef("DisposableStack")}}
- La méthode {{JSxRef("DisposableStack.prototype.dispose()")}}
