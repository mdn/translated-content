---
title: "Atomics : méthode statique notify()"
short-title: notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode statique **`notify()`** de l'objet {{JSxRef("Atomics")}} permet de réveiller des agents dormants qui sont dans la file d'attente.

> [!NOTE]
> Cette opération ne fonctionne qu'avec un {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}} qui est une vue sur un {{JSxRef("SharedArrayBuffer")}}.
> Elle renverra `0` pour les objets `ArrayBuffer` non partagés.

## Syntaxe

```js-nolint
Atomics.notify(typedArray, index, count)
```

### Paramètres

- `typedArray`
  - : Un objet {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}} qui est une vue sur un {{JSxRef("SharedArrayBuffer")}}.
- `index`
  - : La position sur le tableau `typedArray` pour laquelle réveiller les agents.
- `count`
  - : Le nombre d'agents dormants à réveiller. Par défaut, la valeur est {{JSxRef("Infinity")}}.

### Valeur de retour

Retourne le nombre d'agents réveillés, ou `0` si `typedArray` est une vue sur un objet {{JSxRef("ArrayBuffer")}} non partagé.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `typedArray` n'est pas un {{JSxRef("Int32Array")}} ou un {{JSxRef("BigInt64Array")}}.
- {{JSxRef("RangeError")}}
  - : Levée si `index` est en dehors des limites de `typedArray`.

## Exemples

### Utilisation de `notify()`

Étant donné un `Int32Array` partagé&nbsp;:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Un processus de lecture est en sommeil et attend sur l'emplacement 0 parce que la `value` fournie correspond à ce qui est stocké à l'`index` fourni.
Le processus de lecture n'avancera pas tant que le processus d'écriture n'aura pas appelé `Atomics.notify()` sur la position 0 du `typedArray` fourni.
Notez que si, après avoir été réveillé, la valeur de l'emplacement 0 n'a pas été modifiée par le processus d'écriture, le processus de lecture ne **retournera pas** en sommeil, mais continuera.

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Un processus d'écriture stocke une nouvelle valeur et notifie le processus en attente une fois qu'il a écrit&nbsp;:

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Atomics")}}
- La méthode {{JSxRef("Atomics.wait()")}}
- La méthode {{JSxRef("Atomics.waitAsync()")}}
