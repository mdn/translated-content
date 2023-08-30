---
title: Promise.prototype.catch()
slug: Web/JavaScript/Reference/Global_Objects/Promise/catch
---

{{JSRef}}

La méthode **`catch()`** renvoie un objet {{jsxref("Promise")}} et ne traite que des cas où la promesse initiale est rejetée. Elle a le même effet qu'un appel à {{jsxref("Promise.then", "Promise.prototype.then(undefined, siRejetée)")}} (c'est en fait ce qui se passe dans le moteur, `obj.catch(onRejected)` est traduit en `obj.then(undefined, onRejected)`). Cela signifie qu'il est nécessaire de fournir une fonction `onRejected`, même si on souhaite avoir une valeur de secours qui est `undefined` (par exemple avec `obj.catch(() => {})`.

{{EmbedInteractiveExample("pages/js/promise-catch.html")}}

## Syntaxe

```js
p.catch(siRejetée);

p.catch(function (raison) {
  // rejet
});
```

### Paramètres

- `siRejetée`

  - : Une {{jsxref("Function","fonction","",1)}} à appeler si la `Promise` est rejetée (i.e. n'est pas tenue). Cette fonction possède un argument :

    - `raison`
      - : Une chaîne de caractères qui indique pourquoi la promesse n'est pas tenue.

    La promesse renvoyée par la méthode `catch()` est rompue si `siRejetée` lève une erreur ou si elle renvoie une promesse rompue. Dans les autres cas, elle est tenue.

### Valeur de retour

Une promesse ({{jsxref("Promise")}}).

## Description

La méthode `catch()` est utile pour gérer les cas d'erreur en cas de compositions de plusieurs promesses. Elle renvoie elle-même une promesse et peut donc être utilisée lorsqu'on [chaîne des promesses](/fr/docs/Web/JavaScript/Guide/Utiliser_les_promesses#Chaînage_après_un_catch), à l'instar de la méthode sœur qu'est {{jsxref("Promise.prototype.then()")}}.

## Exemples

### Utilisation de la méthode `catch`

```js
var p1 = new Promise(function (resolve, reject) {
  resolve("Succès");
});

p1.then(function (value) {
  console.log(value); // "Succès!"
  throw new Error("zut !");
})
  .catch(function (e) {
    console.error(e.message); // "zut !"
  })
  .then(function (e) {
    console.log("après le catch, la chaîne est restaurée");
  });

// Le code qui suit est équivalent :
p1.then(function (value) {
  console.log(value); // "Succès!"
  return Promise.reject("zut !");
})
  .catch(function (e) {
    console.log(e); // "zut !"
  })
  .then(function (e) {
    console.log("après le catch, la chaîne est restaurée");
  });
```

### Les promesses n'interceptent pas les exceptions levées de façon asynchrone

```js
var p1 = new Promise(function (resolve, reject) {
  throw new Error("Oh oh!");
});

p1.catch(function (e) {
  console.log(e.message); // "Oh oh!"
});

var p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    throw new Error("Exception invisible !");
  }, 1000);
});

p2.catch(function (e) {
  console.log(e.message); // Cela n'est jamais appelé
});
```

### Démonstration de l'appel interne à `then`

```js
// On surcharge Promise.prototype.then/catch
// pour y ajouter des logs
(function (Promise) {
  var originalThen = Promise.prototype.then;
  var originalCatch = Promise.prototype.catch;

  Promise.prototype.then = function () {
    console.log(
      "> > > > > > appel de .then sur %o avec les arguments: %o",
      this,
      arguments,
    );
    return originalThen.apply(this, arguments);
  };
  Promise.prototype.catch = function () {
    console.log(
      "> > > > > > appel de .catch sur %o avec les arguments: %o",
      this,
      arguments,
    );
    return originalCatch.apply(this, arguments);
  };
})(this.Promise);

// On appelle catch sur une promesse déjà résolue
Promise.resolve().catch(function XXX() {});

// Dans la console, on aura :
// > > > > > > appel de .catch sur Promise{} avec les arguments: Arguments{1} [0: function XXX()]
// > > > > > > appel de .then sur Promise{} avec les arguments: Arguments{2} [0: undefined, 1: function XXX()]
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Promise")}}
- {{jsxref("Promise.prototype.then()")}}
