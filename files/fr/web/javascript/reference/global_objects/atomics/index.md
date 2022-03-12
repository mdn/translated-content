---
title: Atomics
slug: Web/JavaScript/Reference/Global_Objects/Atomics
tags:
  - JavaScript
  - Mémoire partagée
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics
---
{{JSRef}}

L'objet **`Atomics`** fournit des opérations atomiques sous la forme de méthodes statiques. Celles-ci sont utilisées avec les objets {{jsxref("SharedArrayBuffer")}}.

Les opérations atomiques sont installées sur un module `Atomics`. À la différence des autres objets globaux, `Atomics` n'est pas un constructeur. Pour cette raison, il ne peut être utilisé avec l'opérateur {{jsxref("Opérateurs/L_opérateur_new")}} et il ne peut pas être appelé comme une fonction. Les propriétés et les méthodes d'`Atomics` sont statiques (`Atomics` fonctionne ainsi comme l'objet {{jsxref("Math")}}).

## Propriétés

- `Atomics[Symbol.toStringTag]`
  - : La valeur de cette propriété vaut `"Atomics"`.

## Méthodes

### Opérations atomiques

Lorsque la mémoire est partagée, plusieurs _threads_ peuvent lire et écrire sur les mêmes données en mémoire. Les opérations atomiques permettent de s'assurer que des valeurs prévisibles sont écrites et lues, que les opérations sont finies avant que la prochaine débute et que les opérations ne sont pas interrompues.

- {{jsxref("Atomics.add()")}}
  - : Cette méthode ajoute la valeur fournie à la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.
- {{jsxref("Atomics.and()")}}
  - : Cette méthode calcule un ET binaire sur la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.
- {{jsxref("Atomics.compareExchange()")}}
  - : Cette méthode stocke la valeur fournie à la position indiquée dans le tableau si elle est égale à une valeur donnée. Elle renvoie l'ancienne valeur.
- {{jsxref("Atomics.exchange()")}}
  - : Cette méthode stocke la valeur fournie à la position indiquée dans le tableau. Elle renvoie l'ancienne valeur.
- {{jsxref("Atomics.load()")}}
  - : Cette méthode renvoie la valeur à la position indiquée dans le tableau.
- {{jsxref("Atomics.or()")}}
  - : Cette méthode calcule un OU binaire entre la valeur fournie et la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.
- {{jsxref("Atomics.store()")}}
  - : Cette méthode stocke une valeur à une position indiquée dans le tableau. Elle renvoie la valeur.
- {{jsxref("Atomics.sub()")}}
  - : Cette méthode soustrait la valeur fournie à la position indiquée dans le tableau. Elle renvoie l'ancienne valeur qui était contenue à cette position.
- {{jsxref("Atomics.xor()")}}
  - : Cette méthode calcule un OU exclusif binaire sur une position donnée dans le tableau. Elle renvoie l'ancienne valeur qui était à cette position.

### Attente et notification (`wait` et `notify`)

Le méthodes `wait`() et `notify()` sont basées sur les _futex_ Linux (selon le vocabulaire employé sur Linux où ça signifie « _fast user-space mutex_ » ou encore « mutex rapide pour l'espace utilisateur ») fournissent des outils pour attendre jusqu'à ce qu'une condition donnée soit vérifiée. Généralement ces méthodes sont utilisées pour bloquer des opérations.

- {{jsxref("Atomics.wait()")}}
  - : Cette méthode vérifie qu'une position donnée du tableau contient bien une valeur donnée puis dort ou expire. Elle renvoie une des chaînes suivantes `"ok"`, `"not-equal"`, `"timed-out"`. Si l'agent appelant ne permet pas d'attente, cela lèvera une exception `Error` (la plupart des navigateurs ne permettront pas que `futexWait()` soit utilisé sur le _thread_ principal du navigateur).
- {{jsxref("Atomics.notify()")}}
  - : Cette méthode notifient les agents qui attendent dans la file d'attente à une position donnée. Elle renvoie le nombre d'agents notifiés.
- {{jsxref("Atomics.isLockFree()")}}
  - : Une primitive d'optimisation qui peut être utilisée afin de déterminer s'il faut utiliser des verrous (_locks_) ou des opérations atomiques. Elle renvoie `true` si la taille donnée est l'une des propriétés `BYTES_PER_ELEMENT` des types `TypedArray` et qu'on peut donc implémenter l'opération de façon atomique plutôt que d'utiliser un verrou.

## Spécifications

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-atomics-object', 'Atomics')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES8', '#sec-atomics-object', 'Atomics')}}     | {{Spec2('ES8')}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics")}}

### Notes de compatibilité

Avant Firefox 48 {{geckoRelease(48)}}, les noms les plus récents et la sémantique la plus récente n'étaient pas encore implémentés. Les changements qui ont eu lieu entre la version 46 et la version 48 de Firefox sont :

- Les méthodes `Atomics.futexWakeOrRequeue()` et `Atomics.fence()` sont désormais complètement retirées (cf. {{bug(1259544)}} et {{bug(1225028)}}).
- Les méthodes {{jsxref("Atomics.wait()")}} et  {{jsxref("Atomics.wake()")}} qui étaient nommées `Atomics.futexWait()` ete `Atomics.futexWake()` (cf. {{bug(1260910)}}). Les anciens noms seront  définitivement supprimés à partir de la version 49 ({{bug(1262062)}}). `Atomics.wake()` a été renommé en `Atomics.notify()` à partir de la version 63.
- Les propriétés `Atomics.OK`, `Atomics.TIMEDOUT`, `Atomics.NOTEQUAL` ont été retirées. La méthode {{jsxref("Atomics.wait()")}} renvoie désormais les chaînes de caractères `"ok"`, `"timed-out"` ou `"not-equal"` (cf. {{bug(1260835)}}).
- Le paramètre `count` de la méthode {{jsxref("Atomics.wake()")}} a été modifié, sa valeur par défaut est désormais `+Infinity` et non `0` ({{bug(1253350)}}).

## Voir aussi

- {{jsxref("ArrayBuffer")}}
- [Les tableaux typés en JavaScript](/fr/docs/Web/JavaScript/Tableaux_typés)
- [Web Workers](/fr/docs/Web/API/Web_Workers_API)
- [parlib-simple](https://github.com/lars-t-hansen/parlib-simple) – un bibliothèque simple qui fournit des abstractions pour synchronisers et distribuer des tâches.
- [La mémoire partagée – un rapide tutoriel](https://github.com/tc39/ecmascript_sharedmem/blob/master/TUTORIAL.md)
- [A Taste of JavaScript’s New Parallel Primitives – Mozilla Hacks (en anglais)](https://hacks.mozilla.org/2016/05/a-taste-of-javascripts-new-parallel-primitives/)
