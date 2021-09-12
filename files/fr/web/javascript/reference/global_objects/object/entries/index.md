---
title: Object.entries()
slug: Web/JavaScript/Reference/Global_Objects/Object/entries
tags:
  - ECMAScript2016
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/entries
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/entries
---
{{JSRef}}

La méthode **`Object.entries()`** renvoie un tableau des propriétés propres énumérables d'un objet dont la clé est une chaîne de caractères, sous la forme de paires `[clé, valeur]`, dans le même ordre qu'une boucle {{jsxref("Instructions/for...in", "for...in")}} (la boucle `for-in` est différente car elle parcourt la chaîne des prototypes).

L'ordre du tableau renvoyé par cette méthode ne dépend pas de la façon dont l'objet est défini. S'il faut garantir un certain ordre, on pourra utiliser la méthode {{jsxref("Array.sort()")}}.

{{EmbedInteractiveExample("pages/js/object-entries.html")}}

## Syntaxe

    Object.entries(obj)

### Paramètres

- `obj`
  - : L'objet dont on souhaite connaître les propriétés propres énumérables dont la clé est une chaîne de caractères, sous la forme de paires `[clé, valeur]`.

### Valeur de retour

Un tableau qui contient les propriétés énumérables propres de l'objet sous la forme de paires `[clé, valeur]`.

## Description

`Object.entries()` renvoie un tableau dont les éléments sont des paires (des tableaux à deux éléments)  `[clé, valeur]` qui correspondent aux propriétés énumérables qui sont directement présentes sur l'objet passé en argument. L'ordre du tableau est le même que celui utilisé lorsqu'on parcourt les valeurs manuellement.

## Exemples

```js
var obj = { toto: "truc", machin: 42 };
console.log(Object.entries(obj)); // [ ['toto', 'truc'], ['machin', 42] ]

// Un objet semblable à un tableau
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// Un objet semblable à un tableau
// dont les clés sont aléatoirement ordonnées
var un_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(un_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getToto est une propriété non énumérable
var mon_obj = Object.create({}, { getToto: { value: function() { return this.toto; } } });
mon_obj.toto = "truc";
console.log(Object.entries(mon_obj)); // [ ['toto', 'truc'] ]

// un argument de type primitif sera
// converti en un objet
console.log(Object.entries("toto")); // [ ['0', 't'], ['1', 'o'], ['2', 't'],  ['3', 'o'] ]

// Un tableau vide pour les types primitifs qui n'ont pas de propriétés
console.log(Object.entries(100)); // [ ]

// parcourir les clés-valeurs
var autreObjet = {a:5, b:7, c:9};

for (var [cle, valeur] of Object.entries(autreObjet)){
  console.log(cle + ' ' + valeur);
}

// Ou encore, en utilisant les méthodes génériques
Object.entries(autreObjet).forEach(([clé, valeur]) => {
  console.log(clé + ' ' + valeur);
});
```

### Convertir un objet en `Map`

Le constructeur {{jsxref("Map", "new Map()")}} accepte un argument itérable pour décrire les entrées du tableau associatif. Grâce à `Object.entries`, il est possible de convertir simplement un objet {{jsxref("Object")}} en un objet {{jsxref("Map")}} :

```js
var obj = { toto: "truc", machin: 42 };
var map = new Map(Object.entries(obj));
console.log(map); // Map { toto: "truc", machin: 42 }
```

### Parcourir un objet

En utilisant [la décomposition des tableaux](/fr/docs/Web/JavaScript/Reference/Opérateurs/Affecter_par_décomposition#Décomposition_d'un_tableau), on peut simplement parcourir les différentes propriétés d'un objet :

```js
const obj = { toto: "truc", bidule: 42 };
Object.entries(obj).forEach(
  ([clé, valeur]) => console.log(`${clé}: ${valeur}`)
);
// "toto: truc"
// "bidule: 42"
```

## Prothèse d'émulation (_polyfill_)

Afin d'ajouter le support pour `Object.entries` dans des environnements plus anciens qui ne supportent pas la méthode nativement, vous pouvez utiliser une prothèse comme celle proposée sur le dépôt [tc39/proposal-object-values-entries](https://github.com/tc39/proposal-object-values-entries) ou sur le dépôt [es-shims/Object.entries](https://github.com/es-shims/Object.entries).

Vous pouvez également utiliser la prothèse suivante (qui nécessitera la prothèse pour `Object.prototype.keys()` si on souhaite être compatible avec IE 8 et les versions antérieures) :

```js
if (!Object.entries) {
  Object.entries = function( obj ){
    var ownProps = Object.keys( obj ),
        i = ownProps.length,
        resArray = new Array(i);
    while (i--)
      resArray[i] = [ownProps[i], obj[ownProps[i]]];

    return resArray;
  };
}
```

## Spécifications

| Spécification                                                                        | État                         | Commentaires         |
| ------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ESDraft', '#sec-object.entries', 'Object.entries')}} | {{Spec2('ESDraft')}} |                      |
| {{SpecName('ES8', '#sec-object.entries', 'Object.entries')}}     | {{Spec2('ES8')}}         | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.entries")}}

## Voir aussi

- [Énumérabilité et rattachement des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.values()")}}
- {{jsxref("Object.prototype.propertyIsEnumerable()")}}
- {{jsxref("Object.create()")}}
- {{jsxref("Object.fromEntries()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Map.prototype.entries()")}}
- {{jsxref("Map.prototype.keys()")}}
- {{jsxref("Map.prototype.values()")}}
