---
title: WeakMap
slug: Web/JavaScript/Reference/Global_Objects/WeakMap
tags:
  - ECMAScript 2015
  - JavaScript
  - Reference
  - WeakMap
translation_of: Web/JavaScript/Reference/Global_Objects/WeakMap
original_slug: Web/JavaScript/Reference/Objets_globaux/WeakMap
---
{{JSRef}}

L'objet **`WeakMap`** représente une collection de paires clé-valeur dont les clés sont des objets et pour lesquelles les références sont « faibles » et les valeurs des valeurs quelconques.

> **Note :** vous pouvez en savoir plus sur les `WeakMap` en lisant l'article sur [les collections à clé](/fr/docs/Web/JavaScript/Guide/Collections_avec_clés#Le_type_WeakMap).

## Syntaxe

    new WeakMap([itérable])

### Paramètres

- `itérable`
  - : Paramètre optionnel. Un tableau (objet `Array`) ou tout autre objet itérable dont les éléments sont des paires composées d'une clé et d'une valeur (des tableaux de 2 éléments). Chaque paire sera ajoutée à la carte (_map_ en anglais). {{jsxref("null")}} sera traité comme {{jsxref("undefined")}}.

## Description

Les clés des objets `WeakMap` sont nécessairement du type `Object`. {{Glossary("Primitive", "Des types de données primitifs")}} ne sont pas autorisés pour les clés (ex : un {{jsxref("Symbol")}} ne peut pas être une clé dans un `WeakMap`).

Les clés d'une `WeakMap` sont référencées _faiblement_. Cela signifie que s'il n'existe aucune autre référence « forte » vers la clé, l'élément (la clé et la valeur) sera retiré de la `WeakMap` par le ramasse-miettes.

### Pourquoi *Weak*Map ?

Avec un certain recul, on peut voir que cette API aurait pu être implémentée en JavaScript grâce à deux tableaux (un tableau pour stocker les clés, l'autre pour les valeurs) associées à 4 méthodes.

Une telle implémentation présente deux inconvénients principaux. Le premier est que la recherche serait effectué en O(n) (avec n le nombre de clés). Le second inconvénient concerne les fuites mémoires. Si la carte (_map_) est construite manuellement, le tableau contenant les clés serait obligé de garder les références vers les objets que sont les clés, ce qui les empêcheraient d'être nettoyés par le ramasse-miette. Grâce aux objets natifs `WeakMap`, les références vers les clés sont faibles (_weak_) ce qui permet au ramasse miette de nettoyer l'objet au cas où il n'y aurait pas d'autres références vers cet objet.

Étant donné que les références sont faibles, il est impossible d'énumérer les clés des objets `WeakMap` (c'est-à-dire qu'on ne dispose pas d'une méthode renvoyant la liste des clés). Si c'était le cas, la liste dépendrait d'un état lié au ramasse-miette et il n'y aurait pas de façon déterministe de connaître le résultat. Si vous souhaitez avoir une liste de clés, vous devriez plutôt utiliser un objet {{jsxref("Map")}}.

## Propriétés

- `WeakMap.length`
  - : La valeur de la propriété `length` vaut 0.
- {{jsxref("WeakMap.prototype")}}
  - : Cette propriété représente le prototype du constructeur `WeakMap`. Il permet d'ajouter des propriétés pour toutes les instances de `WeakMap`.

## Instances de `WeakMap`

Toutes les instances de `WeakMap` héritent de {{jsxref("WeakMap.prototype")}}.

### Propriétés

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakMap/prototype','Properties')}}

### Méthodes

{{page('fr/docs/Web/JavaScript/Reference/Objets_globaux/WeakMap/prototype','Methods')}}

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

| Spécification                                                                | État                         | Commentaires         |
| ---------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-weakmap-objects', 'WeakMap')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES2015', '#sec-weakmap-objects', 'WeakMap')}} | {{Spec2('ES2015')}}     | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.WeakMap")}}

## Voir aussi

- [Le guide sur les collections à clé JavaScript](/fr/docs/Web/JavaScript/Guide/Collections_avec_clés#Le_type_WeakMap)
- [Masquer des détails d'implémentation avec les WeakMaps ECMAScript 2015](https://fitzgeraldnick.com/weblog/53/) (en anglais)
- {{jsxref("Map")}}
- {{jsxref("Set")}}
- {{jsxref("WeakSet")}}
