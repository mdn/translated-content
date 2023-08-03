---
title: Function.name
slug: Web/JavaScript/Reference/Global_Objects/Function/name
---

{{JSRef}}

La propriété **`function.name`** est une propriété en lecture seule qui renvoie le nom de la fonction courante ou `"anonymous"` si celle-ci a été créée de façon anonyme.

{{EmbedInteractiveExample("pages/js/function-name.html")}}{{js_property_attributes(0,0,1)}}

> **Note :** Dans les implémentations non-standards antérieures à ES2015, l'attribut `configurable` valait `false`.

## Exemples

### Instruction de fonction

La propriété `name` renvoie le nom de la fonction lorsque celle-ci est utilisée dans une instruction de fonction.

```js
function faireUnTruc() {}
faireUnTruc.name; // "faireUnTruc"
```

### Fonctions créées avec un constructeur

Lorsqu'on crée une fonction avec `new Function(...)` ou simplement `Function(...)`, on crée uniquement des objets dont le nom est "anonymous".

```js
new Function().name; // "anonymous"
```

### Inférence des noms de fonction

Les variables et les méthodes permettent d'inférer (c'est-à-dire de « deviner ») le nom des fonctions anonymes en fonction de leur position syntaxique (cette fonctionnalité est apparue avec ECMAScript 2015).

```js
var f = function () {};
var objet = {
  uneMéthode: function () {},
};

console.log(f.name); // "f"
console.log(objet.uneMéthode.name); // "uneMéthode"
```

On peut définir une fonction avec un nom grâce à une {{jsxref("Opérateurs/L_opérateur_function", "expression de fonction", "", 1)}}:

```js
var objet = {
  uneMéthode: function objet_maMéthode() {},
};
console.log(objet.uneMéthode.name); // logs "objet_maMéthode"

try {
  objet_maMéthode;
} catch (e) {
  console.log(e);
}
// ReferenceError: objet_maMéthode is not defined
```

On ne peut pas changer le nom d'une fonction, cette propriété est uniquement en lecture :

```js
var objet = {
  // anonyme
  uneMéthode: function () {},
};

objet.uneMéthode.name = "uneMéthode";
console.log(object.uneMéthode.name); // une chaîne vide, uneMéthode est anonyme
```

Pour modifier le nom, on pourrait cependant utiliser la méthode {{jsxref("Object.defineProperty()")}}.

### Notation raccourcie pour les méthodes

```js
var o = {
  toto() {},
};
o.toto.name; // "toto";
```

### Noms des fonctions liées

{{jsxref("Function.bind()")}} produit une fonction dont le nom sera la chaîne "bound " suivi du nom de la fonction.

```js
function toto() {}
toto.bind({}).name; // "bound toto"
```

### Noms de fonction pour les accesseurs et les mutateurs

Lorsqu'on utilise les propriétés d'accesseur [`get`](/fr/docs/Web/JavaScript/Reference/Fonctions/get) / [`set`](/fr/docs/Web/JavaScript/Reference/Fonctions/set), "get" ou "set" apparaîtra avant le nom de la fonction.

```js
var o = {
  get toto() {},
  set toto(x) {},
};

var descripteur = Object.getOwnPropertyDescriptor(o, "toto");
descripteur.get.name; // "get toto"
descripteur.set.name; // "set toto";
```

### Noms des fonctions utilisées dans les classes

On peut utiliser la notation `obj.constructor.name` pour vérifier la « classe » d'un objet (attention aux avertissements ci-après) :

```js
function Toto() {} // Syntaxe ES2015 : class Toto {}

var instanceDeToto = new Toto();
console.log(instanceDeToto.constructor.name); // affiche "Toto" dans la console
```

**Attention :** l'interpréteur utilisera la propriété native `Function.name` uniquement si la fonction ne possède pas une propriété en propre intitulée _name_ (cf section [9.2.11 de la spécification ECMAScript2015](https://www.ecma-international.org/ecma-262/6.0/#sec-setfunctionname)). Cependant, ES2015 indique que les propriétés définies avec mot-clé _static_ seront des propriétés propres de la fonction constructrice (cf. ECMAScript2015, [14.5.14.21.b](https://www.ecma-international.org/ecma-262/6.0/#sec-runtime-semantics-classdefinitionevaluation) + [12.2.6.9](https://www.ecma-international.org/ecma-262/6.0/#sec-object-initializer-runtime-semantics-propertydefinitionevaluation)). Ainsi, il n'est plus possible d'obtenir le nom de la classe si celle-ci possède une méthode statique intitulée `name()` :

```js
class Toto {
  constructor() {}
  static name() {}
}
```

Avec `static name()`, `Toto.name` ne contient plus le nom de la classe mais une référence à l'objet `name()`. La définition utilisée ci-avant se comporte de façon semblable à ce fragment de code ES5 :

```js
function Toto() {}
Object.defineProperty(Toto, "name", { writable: true });
Toto.name = function () {};
```

Il est donc parfois erroné de penser que `Function.name` pointe toujours vers le nom de la classe.

### Noms de fonction sous la forme de symboles

Si un symbole ({{jsxref("Symbol")}}) est utilisé comme nom d'une fonction et que celui-ci dispose d'une description, c'est cette dernière qui sera utilisée comme nom de la méthode, entre crochets :

```js
var sym1 = Symbol("Toto");
var sym2 = Symbol();
var o = {
  [sym1]: function () {},
  [sym2]: function () {},
};

o[sym1].name; // "[Toto]"
o[sym2].name; // ""
```

## Compresseurs et outils de minification JavaScript

Attention à l'utilisation de `Function.name` lorsque le code source est transformé par certains outils. En effet, ceux-ci réduisent généralement la taille d'un programme en compressant les espaces et en modifiant parfois les noms de variables. Ainsi, un fragment de code comme :

```js
function Toto() {}
var toto = new Toto();

if (Toto.constructor.name === "Toto") {
  console.log("'toto' est une instance de 'Toto'");
} else {
  console.log("Oups !");
}
```

pourrait être compressé en :

```js
function a() {}
var b = new a();
if (b.constructor.name === "Toto") {
  console.log("'toto' est une instance de 'Toto'");
} else {
  console.log("Oups !");
}
```

Dans la version non-compressée, la condition du test est remplie et on affiche _'toto' est une instance de 'Toto'_ dans la console. Mais dans la version compressée, la condition n'est pas vérifiée. Lorsqu'on utilise `name`, il faut s'assurer que les outils utilisés ne modifient pas le nom des fonctions.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
