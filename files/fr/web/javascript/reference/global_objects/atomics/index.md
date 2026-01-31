---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

L'objet de l'espace de noms **`Atomics`** contient des méthodes statiques permettant d'effectuer des opérations atomiques. Elles sont utilisées avec les objets {{JSxRef("SharedArrayBuffer")}} et {{JSxRef("ArrayBuffer")}}.

## Description

Contrairement à la plupart des objets globaux, `Atomics` n'est pas un constructeur. Vous ne pouvez pas l'utiliser avec l'[opérateur `new`](/fr/docs/Web/JavaScript/Reference/Operators/new) ni invoquer l'objet `Atomics` comme une fonction. Toutes les propriétés et méthodes de `Atomics` sont statiques (tout comme l'objet {{JSxRef("Math")}}).

### Opérations atomiques

Lorsque la mémoire est partagée, plusieurs processus peuvent lire et écrire les mêmes données en mémoire. Les opérations atomiques garantissent que des valeurs prévisibles sont écrites et lues, que les opérations sont terminées avant que l'opération suivante ne commence et que les opérations ne sont pas interrompues.

### Attente et notification

Les méthodes `wait()` et `notify()` sont modélisées sur les futex Linux «&nbsp;<i lang="en">fast user-space mutex</i>&nbsp;» et fournissent des moyens d'attendre jusqu'à ce qu'une certaine condition devienne vraie et sont généralement utilisées comme constructions bloquantes.

## Propriétés statiques

- `Atomics[Symbol.toStringTag]`
  - : La valeur initiale de la propriété [`[Symbol.toStringTag]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) est la chaîne «&nbsp;Atomics&nbsp;». Cette propriété est utilisée dans {{JSxRef("Object.prototype.toString()")}}.

## Méthodes statiques

- {{JSxRef("Atomics.add()")}}
  - : Ajoute la valeur fournie à la valeur existante à l'index défini du tableau. Retourne l'ancienne valeur à cet index.
- {{JSxRef("Atomics.and()")}}
  - : Calcule un «&nbsp;ET&nbsp;» binaire entre la valeur à l'index défini du tableau et la valeur fournie. Retourne l'ancienne valeur à cet index.
- {{JSxRef("Atomics.compareExchange()")}}
  - : Stocke la valeur fournie à l'index défini du tableau si elle est égale à une valeur donnée. Retourne l'ancienne valeur.
- {{JSxRef("Atomics.exchange()")}}
  - : Stocke la valeur fournie à l'index défini du tableau. Retourne l'ancienne valeur.
- {{JSxRef("Atomics.isLockFree()")}}
  - : Primitive d'optimisation permettant de déterminer s'il faut utiliser des verrous ou des opérations atomiques. Retourne `true` si une opération atomique sur des tableaux de la taille d'élément donnée sera implémentée par une opération atomique matérielle (plutôt que par un verrou). Réservé aux expert·e·s.
- {{JSxRef("Atomics.load()")}}
  - : Retourne la valeur à l'index défini du tableau.
- {{JSxRef("Atomics.notify()")}}
  - : Notifie les agents qui attendent sur l'index défini du tableau. Retourne le nombre d'agents notifiés.
- {{JSxRef("Atomics.or()")}}
  - : Calcule un «&nbsp;OU&nbsp;» binaire entre la valeur à l'index défini du tableau et la valeur fournie. Retourne l'ancienne valeur à cet index.
- {{JSxRef("Atomics.pause()")}}
  - : Fournit une primitive de micro-attente qui indique au processeur que l'appelant effectue une boucle d'attente en attendant l'accès à une ressource partagée. Cela permet au système de réduire les ressources allouées au cœur (par exemple la consommation) ou au processus, sans céder l'exécution du processus courant.
- {{JSxRef("Atomics.store()")}}
  - : Stocke une valeur à l'index défini du tableau. Retourne la valeur.
- {{JSxRef("Atomics.sub()")}}
  - : Soustrait une valeur à l'index défini du tableau. Retourne l'ancienne valeur à cet index.
- {{JSxRef("Atomics.wait()")}}
  - : Vérifie que l'index défini du tableau contient toujours une valeur puis dort en attendant ou expire. Retourne soit `"ok"`, `"not-equal"` ou `"timed-out"`. Si l'attente n'est pas autorisée dans l'agent appelant, cela lève une exception. (La plupart des navigateurs n'autoriseront pas `wait()` sur le processus principal du navigateur.)
- {{JSxRef("Atomics.waitAsync()")}}
  - : Attend de manière asynchrone (c'est‑à‑dire sans bloquer, contrairement à `Atomics.wait`) sur une zone de mémoire partagée et retourne un objet représentant le résultat de l'opération.
- {{JSxRef("Atomics.xor()")}}
  - : Calcule un «&nbsp;OU&nbsp;» exclusif binaire entre la valeur à l'index défini du tableau et la valeur fournie. Retourne l'ancienne valeur à cet index.

## Exemples

### Utilisation de `Atomics`

```js
const sab = new SharedArrayBuffer(1024);
const ta = new Uint8Array(sab);

ta[0]; // 0
ta[0] = 5; // 5

Atomics.add(ta, 0, 12); // 5
Atomics.load(ta, 0); // 17

Atomics.and(ta, 0, 1); // 17
Atomics.load(ta, 0); // 1

Atomics.compareExchange(ta, 0, 5, 12); // 1
Atomics.load(ta, 0); // 1

Atomics.exchange(ta, 0, 12); // 1
Atomics.load(ta, 0); // 12

Atomics.isLockFree(1); // true
Atomics.isLockFree(2); // true
Atomics.isLockFree(3); // false
Atomics.isLockFree(4); // true

Atomics.or(ta, 0, 1); // 12
Atomics.load(ta, 0); // 13

Atomics.store(ta, 0, 12); // 12

Atomics.sub(ta, 0, 2); // 12
Atomics.load(ta, 0); // 10

Atomics.xor(ta, 0, 1); // 10
Atomics.load(ta, 0); // 11
```

### Attente et notification

Étant donné un `Int32Array` partagé&nbsp;:

```js
const sab = new SharedArrayBuffer(1024);
const int32 = new Int32Array(sab);
```

Un processus de lecture est en sommeil et attend sur l'index 0 parce que la valeur fournie correspond à celle stockée à l'index fourni.
Le processus de lecture ne poursuivra pas son exécution tant que le processus d'écriture n'aura pas appelé `Atomics.notify()` à la position 0 du tableau typé fourni.
Notez que si, après avoir été réveillé, la valeur de l'index 0 n'a pas été modifiée par le processus d'écriture, le processus de lecture ne se remettra **pas** à dormir, mais continuera son exécution.

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

- L'objet {{JSxRef("ArrayBuffer")}}
- Guide [des tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Guide/Typed_arrays)
- [Web Workers](/fr/docs/Web/API/Web_Workers_API)
- [La mémoire partagée — un rapide tutoriel <sup>(angl.)</sup>](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md) dans la proposition TC39 ecmascript-sharedmem
- [Aperçu des nouvelles primitives parallèles de JavaScript <sup>(angl.)</sup>](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/) sur hacks.mozilla.org (2016)
