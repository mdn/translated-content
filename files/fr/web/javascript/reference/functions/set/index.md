---
title: L'opérateur set
slug: Web/JavaScript/Reference/Functions/set
tags:
  - ECMAScript 5
  - Functions
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Functions/set
original_slug: Web/JavaScript/Reference/Fonctions/set
---
{{jsSidebar("Functions")}}

La syntaxe **`set`** permet de lier une propriété d'un objet à une fonction qui sera appelée à chaque tentative de modification de cette propriété.

{{EmbedInteractiveExample("pages/js/functions-setter.html")}}

## Syntaxe

    {set prop(val) { . . .}}
    {set [expression](val) { . . .}}

### Paramètres

- `prop`
  - : Le nom de la propriété à lier à la fonction.
- `val`
  - : Un alias pour la variable qui contient la valeur qu'on souhaiterait affecter à `prop.`
- `expression`
  - : Avec ECMAScript 2015, il est également possible d'utiliser des expressions pour utiliser un nom de propriété calculé à lier à la fonction.

## Description

En JavaScript, un mutateur (ou _setter_ en anglais) peut être utiisé afin d'exécuter une fonction à chaque fois qu'on souhaite modifier la valeur d'une propriété donnée. La plupart du temps, les mutateurs sont utilisés avec les accesseurs (_getters_) afin de créer une pseudo-propriété. Il n'est pas possible d'avoir à la fois un mutateur et une valeur donnée pour une même propriété.

On notera que `set` :

- peut avoir un identifiant qui est soit un nombre soit une chaîne de caractères
- doit avoir exactement un paramètre (voir l'article « [Incompatible ES5 change: literal getter and setter functions must now have exactly zero or one arguments](https://whereswalden.com/2010/08/22/incompatible-es5-change-literal-getter-and-setter-functions-must-now-have-exactly-zero-or-one-arguments/) » (en anglais) pour plus d'informations)
- ne doit pas apparaître dans un littéral objet qui possède un autre `set` ou une autre propriété avec la même clé :
  ( `{ set x(v) { }, set x(v) { } }` et `{ x: ..., set x(v) { } }` seront interdits)

On peut retirer un mutateur d'un objet grâce à l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}}.

## Exemples

### Définir un mutateur sur de nouveaux objets avec un littéral objet

Dans l'exemple qui suit, on définit une pseudo-propriété `courant` pour un objet `o` qui, lorsqu'elle recevra une valeur, mettra à jour la propriété `log` avec la valeur reçue :

```js
var o = {
  set courant (str) {
    this.log[this.log.length] = str;
  },
  log: []
}
```

On notera que `courant` n'est pas défini. Toute tentative pour y accéder renverra `undefined`.

### Supprimer un mutateur grâce à l'opérateur `delete`

Si on souhaite retirer un mutateur, on peut simplement utiliser l'opérateur {{jsxref("Opérateurs/L_opérateur_delete","delete")}} :

```js
delete o.courant;
```

### Définir un mutateur sur un objet existant avec `defineProperty`

On peut également ajouter un mutateur sur un objet d'ores et déjà créé. Pour cela, on utilisera la méthode {{jsxref("Object.defineProperty()")}}.

```js
var o = { a:0 };

Object.defineProperty(o, "b", { set: function (x) { this.a = x / 2; } });

o.b = 10; // On utilise le setter, qui affecte 10 / 2 (5) à 'a'
console.log(o.a) // 5
```

### Utiliser un nom de propriété calculé

```js
var expr = "toto";

var obj = {
  bidule: "truc",
  set [expr](v) { this.bidule = v; }
};

console.log(obj.bidule); // "truc"
obj.toto = "bidule";      // le mutateur est utilisé
console.log(obj.bidule); // "bidule"
```

## Spécifications

| Spécification                                                                                    | État                         | Commentaires                          |
| ------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------------------------- |
| {{SpecName('ES5.1', '#sec-11.1.5', 'Object Initializer')}}                     | {{Spec2('ES5.1')}}     | Définition initiale                   |
| {{SpecName('ES6', '#sec-method-definitions', 'Method definitions')}}     | {{Spec2('ES6')}}         | Ajout des noms de propriétés calculés |
| {{SpecName('ESDraft', '#sec-method-definitions', 'Method definitions')}} | {{Spec2('ESDraft')}} |                                       |

## Compatibilité des navigateurs

{{Compat("javascript.functions.set")}}

## Voir aussi

- {{jsxref("Fonctions/get","get")}}
- {{jsxref("Opérateurs/L_opérateur_delete","delete")}}
- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.defineGetter", "__defineGetter__")}}
- {{jsxref("Object.defineSetter", "__defineSetter__")}}
- [Définir des accesseurs et des mutateurs](/fr/docs/Web/JavaScript/Guide/Utiliser_les_objets#D.C3.A9finir_des_getters_et_setters), dans le Guide JavaScript
