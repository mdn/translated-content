---
title: Object.getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
---

{{JSRef}}

La méthode **`Object.getOwnPropertyNames()`** renvoie un tableau de toutes les propriétés (qu'elles soient énumérables ou non, tant qu'elles ne sont pas désignées par un [symbole](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol)) propres à un objet (c'est-à-dire n'étant pas héritées via la chaîne de prototypes).

{{EmbedInteractiveExample("pages/js/object-getownpropertynames.html")}}

## Syntaxe

```js
Object.getOwnPropertyNames(obj);
```

### Paramètres

- `obj`
  - : L'objet dont seront listées les propriétés propres énumérables _et non-énumérables_.

### Valeur de retour

Un tableau de chaînes de caractères qui sont les noms des propriétés propres (celles directement rattachées à l'objet) de l'objet passé en argument.

## Description

`Object.getOwnPropertyNames` renvoie un tableau dont les éléments sont des chaînes de caractères correspondant aux noms des propriétés énumerables _et non-énumerables_ appartenant directement à l'objet `obj`. L'ordre des propriétés énumérables est cohérent avec l'ordre utilisé dans une boucle {{jsxref("Instructions/for...in","for...in")}} (ou avec {{jsxref("Object.keys")}}) parmi les propriétés de l'objet. L'ordre des propriétés non-énumérables dans le tableau et parmi les propriétés énumérables n'est pas défini.

## Exemples

### Utiliser `Object.getOwnPropertyNames()`

```js
var arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Objet semblable à un tableau (array-like)
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

// On affiche les noms et les valeurs
// des propriétés avec Array.forEach
Object.getOwnPropertyNames(obj).forEach(function (val, idx, array) {
  console.log(val + " -> " + obj[val]);
});
// affiche
// 0 -> a
// 1 -> b
// 2 -> c

// propriété non-énumérable
var mon_obj = Object.create(
  {},
  {
    getToto: {
      value: function () {
        return this.toto;
      },
      enumerable: false,
    },
  },
);
mon_obj.toto = 1;

console.log(Object.getOwnPropertyNames(mon_obj).sort());
// ["toto", "getToto"]
```

Si on souhaite n'avoir que les propriétés énumérables, on peut utiliser {{jsxref("Object.keys")}} ou bien une boucle {{jsxref("Instructions/for...in","for...in")}} (cette méthode renverra également les propriétés héritées via la chaîne de prototypes si on ne filtre pas avec la méthode {{jsxref("Object.prototype.hasOwnProperty()", "hasOwnProperty()")}}).

Les propriétés héritées via la chaîne de prototype ne sont pas listées :

```js
function ClasseParente() {}
ClasseParente.prototype.inheritedMethod = function () {};

function ClasseFille() {
  this.prop = 5;
  this.method = function () {};
}
ClasseFille.prototype = new ClasseParente();
ClasseFille.prototype.prototypeMethod = function () {};

console.log(
  Object.getOwnPropertyNames(
    new ClasseFille(), // ["prop", "method"]
  ),
);
```

### Obtenir uniquement les propriétés non-énumérables

On utilise ici la fonction {{jsxref("Array.prototype.filter()")}} pour retirer les clés énumérables (obtenus avec {{jsxref("Object.keys()")}}) de la liste de toutes les clés (obtenues avec `Object.getOwnPropertynames`) afin de n'avoir que les propriétés propres non-énumérables.

```js
var target = myObject;
var enum_et_nonenum = Object.getOwnPropertyNames(target);
var enum_uniquement = Object.keys(target);
var nonenum_uniquement = enum_et_nonenum.filter(function (key) {
  var indexInEnum = enum_uniquement.indexOf(key);
  if (indexInEnum == -1) {
    // non trouvée dans enum_uniquement indique
    // que la clé est non-énumérable, on la
    // garde donc dans le filtre avec true
    return true;
  } else {
    return false;
  }
});

console.log(nonenum_uniquement);
```

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet (mais une valeur d'un autre type primitif), une exception {{jsxref("TypeError")}} sera levée. Pour ES2015, un argument qui n'est pas un objet sera d'abord transformé en objet avant que la méthode soit appliquée.

```js
Object.getOwnPropertyNames('toto')
TypeError: "toto" n'est pas un objet // code ES5

Object.getOwnPropertyNames('toto')
['length', '0', '1', '2']         // code ES2015
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Énumérabilité et possession des propriétés](/fr/docs/Web/JavaScript/Enumerability_and_ownership_of_properties)
- {{jsxref("Object.prototype.hasOwnProperty()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Array.forEach()")}}
