---
title: "Object : méthode statique getOwnPropertyNames()"
short-title: getOwnPropertyNames()
slug: Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode statique **`Object.getOwnPropertyNames()`** retourne un tableau contenant toutes les propriétés (y compris les propriétés non-énumérables, sauf celles utilisant `Symbol`) trouvées directement dans un objet donné.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.getOwnPropertyNames()")}}

```js interactive-example
const object = {
  a: 1,
  b: 2,
  c: 3,
};

console.log(Object.getOwnPropertyNames(object));
// Résultat attendu : Array ["a", "b", "c"]
```

## Syntaxe

```js-nolint
Object.getOwnPropertyNames(obj)
```

### Paramètres

- `obj`
  - : L'objet dont sont listées les propriétés propres énumérables _et non-énumérables_.

### Valeur de retour

Un tableau de chaînes de caractères qui sont les noms des propriétés propres (celles directement rattachées à l'objet) de l'objet passé en argument.

## Description

`Object.getOwnPropertyNames` retourne un tableau dont les éléments sont des chaînes de caractères correspondant aux noms des propriétés énumérables _et non-énumérables_ appartenant directement à l'objet `obj`. L'ordre des propriétés énumérables est cohérent avec l'ordre utilisé dans une boucle {{JSxRef("Statements/for...in","for...in")}} (ou avec {{JSxRef("Object.keys")}}) parmi les propriétés de l'objet. Les clés entières non négatives de l'objet (à la fois énumérables et non-énumérables) sont ajoutées en premier dans le tableau par ordre croissant, suivies des clés de type chaîne de caractères dans l'ordre d'insertion.

Dans ES5, si l'argument passé à cette méthode n'est pas un objet (un primitif), cela provoque une {{JSxRef("TypeError")}}. Dans ES2015, un argument non-objet est converti en objet.

```js
Object.getOwnPropertyNames("toto");
// TypeError: "toto" n'est pas un objet (code ES5)

Object.getOwnPropertyNames("foo");
// ["0", "1", "2", "length"]  (code ES2015)
```

## Exemples

### Utiliser `Object.getOwnPropertyNames()`

```js
const arr = ["a", "b", "c"];
console.log(Object.getOwnPropertyNames(arr).sort());
// ["0", "1", "2", "length"]

// Objet semblable à un tableau
const obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.getOwnPropertyNames(obj).sort());
// ["0", "1", "2"]

Object.getOwnPropertyNames(obj).forEach((val, idx, array) => {
  console.log(`${val} -> ${obj[val]}`);
});
// 0 -> a
// 1 -> b
// 2 -> c

// propriété non-énumérable
const monObj = Object.create(
  {},
  {
    getToto: {
      value() {
        return this.toto;
      },
      enumerable: false,
    },
  },
);
monObj.toto = 1;

console.log(Object.getOwnPropertyNames(monObj).sort()); // ["toto", "getToto"]
```

Si vous souhaitez n'obtenir que les propriétés énumérables, consultez {{JSxRef("Object.keys()")}} ou utilisez une boucle {{JSxRef("Statements/for...in", "for...in")}} (notez que ça retourne également les propriétés énumérables trouvées le long de la chaîne de prototypes pour l'objet à moins que cette dernière ne soit filtrée avec {{JSxRef("Object.hasOwn()")}}).

Les éléments de la chaîne de prototypes ne sont pas listés&nbsp;:

```js
function ClasseParente() {}
ClasseParente.prototype.inheritedMethod = function () {};

function ClasseEnfant() {
  this.prop = 5;
  this.method = function () {};
}
ClasseEnfant.prototype = new ClasseParente();
ClasseEnfant.prototype.prototypeMethod = function () {};

console.log(Object.getOwnPropertyNames(new ClasseEnfant()));
// ["prop", "method"]
```

### Obtenir uniquement les propriétés non-énumérables

On utilise ici la fonction {{JSxRef("Array.prototype.filter()")}} pour retirer les clés énumérables (obtenus avec {{JSxRef("Object.keys()")}}) de la liste de toutes les clés (obtenues avec `Object.getOwnPropertyNames()`) afin de n'avoir que les propriétés propres non-énumérables.

```js
const cible = myObject;
const enumEtNonEnum = Object.getOwnPropertyNames(cible);
const enumSeulement = new Set(Object.keys(cible));
const nonEnumSeulement = enumEtNonEnum.filter((key) => !enumSeulement.has(key));

console.log(nonEnumSeulement);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `Object.getOwnPropertyNames` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-object)
- [Énumérabilité et possession des propriétés](/fr/docs/Web/JavaScript/Guide/Enumerability_and_ownership_of_properties)
- La méthode statique {{JSxRef("Object.hasOwn()")}}
- La méthode {{JSxRef("Object.prototype.propertyIsEnumerable()")}}
- La méthode statique {{JSxRef("Object.create()")}}
- La méthode statique {{JSxRef("Object.keys()")}}
- La méthode {{JSxRef("Array.prototype.forEach()")}}
