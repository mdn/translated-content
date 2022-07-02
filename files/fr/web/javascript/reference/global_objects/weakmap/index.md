---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap
browser-compat: javascript.builtins.WeakMap
---
{{JSRef}}

L'objet **`WeakMap`** représente une collection de paires clé-valeur dont les clés sont des objets et pour lesquelles les références sont « faibles » et les valeurs des valeurs quelconques.

Vous pouvez en savoir plus sur les `WeakMap` en lisant l'article sur [les collections à clé](/fr/docs/Web/JavaScript/Guide/Keyed_collections).

## Description

Les clés des objets `WeakMap` sont nécessairement du type `Object`. {{Glossary("Primitive", "Des types de données primitifs")}} ne sont pas autorisés pour les clés (ex : un [`Symbol`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) ne peut pas être une clé dans un `WeakMap`).

Les clés d'une `WeakMap` sont référencées _faiblement_. Cela signifie que s'il n'existe aucune autre référence «&nbsp;forte&nbsp;» vers la clé, l'élément (la clé et la valeur) sera retiré de la `WeakMap` par le ramasse-miettes.

### Pourquoi *Weak*Map ?

Avec un certain recul, on peut voir que cette API aurait pu être implémentée en JavaScript grâce à deux tableaux (un tableau pour stocker les clés, l'autre pour les valeurs) associées à 4 méthodes.

Une telle implémentation présente deux inconvénients principaux :

1. Le premier est que la recherche serait effectuée en O(n) (avec n le nombre de clés).

2. Le second inconvénient concerne les fuites mémoires. Si la carte (_map_) est construite manuellement, le tableau contenant les clés serait obligé de garder les références vers les objets que sont les clés, ce qui les empêcherait d'être nettoyés par le ramasse-miette.

Grâce aux objets natifs `WeakMap`, les références vers les clés sont faibles (_weak_) ce qui permet au ramasse-miette de nettoyer l'objet au cas où il n'y aurait pas d'autres références vers cet objet.

**Étant donné que les références sont faibles, il est impossible d'énumérer les clés des objets `WeakMap`** (c'est-à-dire qu'on ne dispose pas d'une méthode renvoyant la liste des clés). Si c'était le cas, la liste dépendrait d'un état lié au ramasse-miette et il n'y aurait pas de façon déterministe de connaître le résultat. Si vous souhaitez avoir une liste de clés, vous devriez plutôt utiliser un objet [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map).

## Constructeur

- [`WeakMap()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/WeakMap)
  - : Crée un nouvel objet `WeakMap`.

## Méthodes des instances

- [`WeakMap.prototype.delete(<var>key</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/delete)
  - : Supprime toute valeur associée avec la clé `key`. `WeakMap.prototype.has(key)` renverra `false` après coup.
- [`WeakMap.prototype.get(<var>key</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/get)
  - : Renvoie la valeur associée à la clé `key`, ou `undefined` si cette clé n'est pas présente.
- [`WeakMap.prototype.has(<var>key</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/has)
  - : Renvoie un booléen indiquant s'il existe une valeur pour la clé `key` au sein de l'objet `WeakMap`.
- [`WeakMap.prototype.set(<var>key</var>, <var>value</var>)`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakMap/set)
  - : Définit la valeur pour la clé `key` dans l'objet `WeakMap`. La valeur de retour est l'objet `WeakMap`.

## Exemples

### Utiliser `WeakMap`

```js
var wm1 = new WeakMap(),
    wm2 = new WeakMap(),
    wm3 = new WeakMap();
var o1 = {},
    o2 = function(){},
    o3 = window;

wm1.set(o1, 37);
wm1.set(o2, "azerty");
wm2.set(o1, o2); // une valeur peut être n'importe quoi, y compris un objet ou une fonction
wm2.set(o3, undefined);
wm2.set(wm1, wm2); // Les clés et les valeurs peuvent n'importe quels objets, y compris des WeakMap

wm1.get(o2); // "azerty"
wm2.get(o2); // undefined car il n'y a pas de valeur pour o2 sur wm2
wm2.get(o3); // undefined car c'est la valeur utilisée

wm1.has(o2); // true
wm2.has(o2); // false
wm2.has(o3); // true (même si la valeur est 'undefined')

wm3.set(o1, 37);
wm3.get(o1); // 37

wm1.has(o1);   // true
wm1.delete(o1);
wm1.has(o1);   // false
```

### Implémenter une classe semblable à `WeakMap` avec une méthode .clear()

```js
class ClearableWeakMap {
  constructor(init) {
    this._wm = new WeakMap(init)
  }
  clear() {
    this._wm = new WeakMap()
  }
  delete(k) {
    return this._wm.delete(k)
  }
  get(k) {
    return this._wm.get(k)
  }
  has(k) {
    return this._wm.has(k)
  }
  set(k, v) {
    this._wm.set(k, v)
    return this
  }
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Une prothèse (*polyfill*) de `WeakMap` est disponible dans [`core-js`](https://github.com/zloirock/core-js#weakmap)
- [Le guide sur les collections à clé JavaScript](/fr/docs/Web/JavaScript/Guide/Keyed_collections)
- [Masquer des détails d'implémentation avec les WeakMaps ECMAScript 2015](https://fitzgeraldnick.com/weblog/53/) (en anglais)
- [`Map`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Map)
- [`Set`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Set)
- [`WeakSet`](/fr/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
