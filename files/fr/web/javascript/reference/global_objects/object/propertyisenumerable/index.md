---
title: Object.prototype.propertyIsEnumerable()
slug: Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable
---

{{JSRef}}

La méthode **`propertyIsEnumerable()`** renvoie un booléen qui indique si la propriété donnée est énumérable.

{{EmbedInteractiveExample("pages/js/object-prototype-propertyisenumerable.html")}}

## Syntaxe

```js
obj.propertyIsEnumerable(prop);
```

### Paramètres

- `prop`
  - : Le nom de la propriété dont on souhaite savoir si elle est énumérable ou non.

### Valeur de retour

Un booléen qui indique si la propriété passée en argument est énumérable.

## Description

Chaque objet possède une méthode `propertyIsEnumerable`. Cette méthode est utilisée afin de savoir s'il est possible d'énumérer la propriété donnée au moyen d'une boucle {{jsxref("Instructions/for...in", "for...in")}}. Cela concerne uniquement les propriétés propres à l'objet (celles qui ne sont pas héritées via la chaîne de prototypes). Si un objet ne possède pas la propriété, cette méthode renverra `false`.

## Exemples

### Utiliser `propertyIsEnumerable`

Dans l'exemple qui suit, on illustre comment utiliser `propertyIsEnumerable` sur les objets et tableaux :

```js
var o = {};
var a = [];
o.prop = "est énumérable";
a[0] = "est énumérable";

o.propertyIsEnumerable("prop"); // renvoie true
a.propertyIsEnumerable(0); // renvoie true
```

### Objets natifs et objets définis par l'utilisateur

Dans l'exemple ci-dessous, on illustre l'énumérabilité des propriétés des objets natifs et celle des objets tiers, définis dans les scripts :

```js
var a = ["est énumérable"];

a.propertyIsEnumerable(0); // renvoie true
a.propertyIsEnumerable("length"); // renvoie false

Math.propertyIsEnumerable("random"); // renvoie false
this.propertyIsEnumerable("Math"); // renvoie false
```

### Propriétés héritées et propriétés propres

```js
var a = [];
a.propertyIsEnumerable("constructor"); // renvoie false

function premierConstructeur() {
  this.propriete = "non énumérable";
}

premierConstructeur.prototype.premiereMethode = function () {};

function secondConstructeur() {
  this.methode = function methode() {
    return "énumérable";
  };
}

secondConstructeur.prototype = new premierConstructeur();
secondConstructeur.prototype.constructor = secondConstructeur;

var o = new secondConstructeur();
o.propArbitraire = "is enumerable";

o.propertyIsEnumerable("propArbitraire"); // renvoie true
o.propertyIsEnumerable("méthode"); // renvoie true
o.propertyIsEnumerable("propriété"); // renvoie false

o.propriete = "énumérable";

o.propertyIsEnumerable("propriété"); // renvoie true

// Ces instructions renvoient false car propertyIsEnumerable
// ne prend pas en compte la chaîne de prototypes
o.propertyIsEnumerable("prototype"); // renvoie false
o.propertyIsEnumerable("constructor"); // renvoie false
o.propertyIsEnumerable("premièreMéthode"); // renvoie false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Caractère énumérable et rattachement des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
- {{jsxref("Instructions/for...in", "for...in")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.defineProperty()")}}
