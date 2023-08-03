---
title: Object.keys()
slug: Web/JavaScript/Reference/Global_Objects/Object/keys
---

{{JSRef}}

La méthode **`Object.keys()`** renvoie un tableau contenant les noms des propriétés propres à un objet (qui ne sont pas héritées via la chaîne de prototypes) et qui sont énumérables. L'ordre de ce tableau est le même que celui obtenu par une boucle {{jsxref("Instructions/for...in","for...in")}} (à la différence qu'une boucle for-in liste également les propriétés héritées).

{{EmbedInteractiveExample("pages/js/object-keys.html")}}

## Syntaxe

```js
Object.keys(obj);
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite lister les propriétés propres et énumérables.

### Valeur de retour

Un tableau de chaînes de caractères qui sont les noms des propriétés énumérables de l'objet passé en argument.

## Description

`Object.keys()` renvoie un tableau dont les éléments sont les chaînes de caractères des noms des propriétés propres et énumérables d`'obj`. L'ordre des propriétés obtenu est le même que celui obtenu lorsqu'on boucle manuellement sur les propriétés de l'objet.

## Exemples

```js
var arr = ["a", "b", "c"];
console.log(Object.keys(arr));
// affichera ['0', '1', '2']

// un objet semblable à un tableau
var obj = { 0: "a", 1: "b", 2: "c" };
console.log(Object.keys(obj));
// affichera ['0', '1', '2']

// un objet semblable à un tableau avec
// un ordre de clé aléatoire
var an_obj = { 100: "a", 2: "b", 7: "c" };
console.log(Object.keys(an_obj));
// affichera ['2', '7', '100']

// getToto est une propriété non énumérable
var monObjet = Object.create(
  {},
  {
    getToto: {
      value: function () {
        return this.toto;
      },
    },
  },
);
monObjet.toto = 1;

console.log(Object.keys(monObjet));
// affichera ['toto']
```

Si on souhaite lister toutes les propriétés, y compris celles qui ne sont pas énumérables, on pourra utiliser {{jsxref("Object.getOwnPropertyNames()")}}.

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet mais une valeur d'un autre type primitif, cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015 (ES6), un argument qui n'est pas un objet sera d'abord converti en objet.

```js
Object.keys("toto");
// TypeError: "toto" n'est pas un objet (code ES5)

Object.keys("toto");
// ["0", "1", "2", "3"]                   (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Énumérabilité et possession des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.entries()")}}
