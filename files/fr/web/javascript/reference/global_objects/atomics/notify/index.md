---
title: Atomics.notify()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/notify
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/notify
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/notify
---
{{JSRef}}

La méthode statique **`Atomics.notify()`** permet de réveiller des agents dormants qui sont dans la file d'attente.

> **Note :** Cette opération ne fonctionne que sur un tableau typé partagé de type {{jsxref("Int32Array")}}.

## Syntaxe

    Atomics.notify(typedArray, index, count)

### Paramètres

- `typedArray`
  - : Un table typé partagé de type {{jsxref("Int32Array")}}.
- `index`
  - : La position sur le tableau `typedArray` pour laquelle réveiller les agents.
- `count`
  - : Le nombre d'agents dormants à réveiller.

### Valeur de retour

Le nombre d'agents réveillés.

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas un tableau typé partagé de type{{jsxref("Int32Array")}}.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

Soit un tableau typé partagé `Int32Array`:

```js
var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
```

Un _thread_ de lecture est en sommeil et surveille l'emplacement 0 et s'attend à ce que la valeur soit 0. Tant que cette condition est vérifiée, l'exécution n'ira pas plus loin. Lorsque le _thread_ d'écriture a enregistré une nouvelle valeur, le _thread_ de lecture sera réveillé par le _thread_ d'écriture et renverra la nouvelle valeur (123).

```js
Atomics.wait(int32, 0, 0);
console.log(int32[0]); // 123
```

Un _thread_ d'écriture stocke une nouvelle valeur et notifie le _thread_ de lecture une fois que la valeur a bien été écrite :

```js
console.log(int32[0]); // 0;
Atomics.store(int32, 0, 123);
Atomics.notify(int32, 0, 1);
```

## Spécifications

| Spécification                                                                        | Statut                       | Commentaires                     |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.notify', 'Atomics.notify')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics.notify")}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.wait()")}}
