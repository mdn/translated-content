---
title: Constructeur WeakMap()
slug: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap
browser-compat: javascript.builtins.WeakMap.WeakMap
---
{{JSRef}}

Le **constructeur `WeakMap()`** permet de créer un nouvel objet [`WeakMap`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap) éventuellement basé sur un autre objet itérable fourni en argument (par exemple, [un tableau](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)).

## Syntaxe

```js
new WeakMap()
new WeakMap(iterable)
```

### Paramètres

- `iterable`
  - : Un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) ou tout autre objet itérable qui implémente une méthode [`@@iterator`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/@@iterator) renvoyant un objet itérateur qui produit des objets semblables à des tableaux avec deux éléments, le premier qui sera utilisé comme clé de la `WeakMap` et le second comme valeur associée à cette clé. Chaque paire de clé/valeur sera ainsi ajoutée au nouveau `WeakMap`. `null` est traité comme `undefined`.

## Exemples

### Utiliser `WeakMap()`

```js
const wm1 = new WeakMap();
const wm2 = new WeakMap();
const wm3 = new WeakMap();

const o1 = {};
const o2 = function() {};
const o3 = window;

wm1.set(o1, 37);
wm1.set(o2, 'azerty');
wm2.set(o1, o2); // une valeur peut être de n'importe quel type (objet ou fonction)
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // les clés et les valeurs peuvent être des objets, même des WeakMaps

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined, car il n'y a pas de clé pour o2 sur wm2
wm2.get(o3); // undefined, car c'est la valeur associée

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (même si la valeur associée est 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1); // true
wm1.delete(o1);
wm1.has(o1); // false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Une prothèse d'implémentation pour `WeakMap` avec la bibliothèque `core-js`](https://github.com/zloirock/core-js#weakmap)
- [Les objets `WeakMap` dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Keyed_collections#le_type_weakmap)
- [Masquer des détails d'implémentation avec les `WeakMap` ECMAScript 6 (billet de blog en anglais)](https://fitzgeraldnick.com/2014/01/13/hiding-implementation-details-with-e6-weakmaps.html)
- [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
