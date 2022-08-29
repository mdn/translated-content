---
title: Atomics.wait()
slug: Web/JavaScript/Reference/Global_Objects/Atomics/wait
tags:
  - Atomics
  - JavaScript
  - Mémoire partagée
  - Méthode
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Atomics/wait
original_slug: Web/JavaScript/Reference/Objets_globaux/Atomics/wait
---
{{JSRef}}

La méthode statique **`Atomics.wait()`** permet de vérifier qu'un emplacement d'un tableau {{jsxref("Int32Array")}} contient toujours une valeur donnée et, si c'est le cas, l'agent dort en attendant un réveil ou un délai d'expiration. La méthode renvoie une chaîne qui vaut `"ok"`, `"not-equal"` ou `"timed-out"`.

> **Note :** Cette opération ne fonctionne qu'avec un tableau typé partagé {{jsxref("Int32Array")}} et peut ne pas être autorisée sur le _thread_ principal.

## Syntaxe

```js
Atomics.wait(typedArray, index, valeur[, timeout])
```

### Paramètres

- `typedArray`
  - : Un tableau typé partagé de type {{jsxref("Int32Array")}}.
- `index`
  - : La position du tableau typé `typedArray` sur laquelle on attend un changement.
- `valeur`
  - : La valeur attendue qu'on souhaite tester.
- `timeout` {{optional_inline}}
  - : Le temps à attendre pour le changement de valeur, exprimé en millisecondes. La valeur par défaut est {{jsxref("Infinity")}}.

### Valeur de retour

Une chaîne de caractères ({{jsxref("String")}} qui vaut `"ok"`, `"not-equal"` ou `"timed-out"` selon le cas.

### Exceptions levées

- Cette méthode lève {{jsxref("TypeError")}} si `typedArray` n'est pas un tableau typé partagé de type {{jsxref("Int32Array")}}.
- Cette méthode lève {{jsxref("RangeError")}} si `index` est en dehors des limites de `typedArray`.

## Exemples

Soit un tableau typé partagé `Int32Array`:

```js
var sab = new SharedArrayBuffer(1024);
var int32 = new Int32Array(sab);
```

Un _thread_ de lecture est en sommeille et surveille l'emplacement 0 et s'attend à ce que la valeur soit 0. Tant que cette condition est vérifiée, l'exécution n'ira pas plus loin. Lorsque le _thread_ d'écriture a enregistré une nouvelle valeur, le _thread_ de lecture sera notifié par le _thread_ d'écriture et renverra la nouvelle valeur (123).

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

| Spécification                                                                    | État                         | Commentaires                     |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------------------- |
| {{SpecName('ESDraft', '#sec-atomics.wait', 'Atomics.wait')}} | {{Spec2('ESDraft')}} | Définition initiale avec ES2017. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Atomics.wait")}}

## Voir aussi

- {{jsxref("Atomics")}}
- {{jsxref("Atomics.notify()")}}
