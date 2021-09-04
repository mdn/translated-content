---
title: Object.setPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
tags:
  - ECMAScript 2015
  - JavaScript
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/setPrototypeOf
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/setPrototypeOf
---
{{JSRef}}

> **Attention :** Étant donnée la façon dont la plupart des moteurs JavaScript optimisent les performances, modifier le `[[Prototype]]` d'un objet est une opération lente pour chaque navigateur et moteur JavaScript. Les impacts liés aux performances sur ce point sont vastes et subtiles : ils concernent pas uniquement le temps passé à effectuer `Object.setPrototypeOf`, mais peuvent concerner n'importe quel code pour n'importe quel objet dont `[[Prototype]]` a été modifié. Si vous souhaitez obtenir des performances optimales, évitez de modifier le `[[Prototype]]` d'un objet. À la place, il est conseillé de créer un objet avec le prototype voulu en utilisant {{jsxref("Object/create","Object.create()")}}

La méthode **`Object.setPrototypeOf()`** définit le prototype (autrement dit la propriété interne `[[Prototype]]`) d'un objet donné avec un autre objet ou {{jsxref("null")}}.

## Syntaxe

    Object.setPrototypeOf(obj, prototype)

### Paramètres

- `obj`
  - : L'objet dont on souhaite définir le prototype.
- `prototype`
  - : Le nouveau prototype de l'objet (un objet ou `null`).

### Valeur de retour

L'objet sur lequel on a défini le prototype.

## Description

Cette méthode renvoie une exception {{jsxref("TypeError")}} si l'objet dont on souhaite modifier le `[[Prototype]]` est non-extensible selon {{jsxref("Object.isExtensible")}}.  Cette méthode ne fait rien si le paramètre prototype n'est ni un objet ni {{jsxref("null")}} (par exemple : un nombre, une chaîne, un booléen ou {{jsxref("undefined")}}).  Dans les autres cas, cette méthode substitue le `[[Prototype]]` de `obj` avec un nouvel objet.

`Object.setPrototypeOf()` fait partie de la spécification ECMAScript 2015. L'utilisation de cette méthode est considérée comme la façon correcte pour modifier le prototype d'un objet (contrairement à la propriété {{jsxref("Object/proto","Object.prototype.__proto__")}} plus controversée).

## Exemples

```js
var dict = Object.setPrototypeOf({}, null);
```

## Prothèse d'émulation (_polyfill_)

En utilisant la propriété {{jsxref("Object.proto", "Object.prototype.__proto__")}}, on peut définir `Object.setPrototypeOf` si elle n'est pas disponible :

```js
// Cette prothèse ne fonctionne pas pour IE
Object.setPrototypeOf = Object.setPrototypeOf || function (obj, proto) {
  obj.__proto__ = proto;
  return obj;
}
```

## Ajouter une chaîne de prototypes à un objet

En combinant `Object.getPrototypeOf()` et {{jsxref("Object.proto", "Object.prototype.__proto__")}} on peut ajouter une chaîne de prototypes au nouveau prototype d'un objet :

```js
/**
*** Object.setPrototypeOf(@object, @prototype)
* Change le prototype d'une instance
*
**/

Object.setPrototypeOf = function (oInstance, oProto) {
  oInstance.__proto__ = oProto;
  return oInstance;
};

/**
*** Object.appendChain(@object, @prototype)
*
* Ajoute le premier prototype non-natif d'une chaîne au nouveau prototype.
* Renvoie @object (si c'est une valeur primitive, elle sera transformée
* en objet).
*
*** Object.appendChain(@object [, "@arg_name_1", "@arg_name_2", "@arg_name_3", "..."], "@function_body")
*** Object.appendChain(@object [, "@arg_name_1, @arg_name_2, @arg_name_3, ..."], "@function_body")
*
* Ajoute le premier prototype non-natif d'une chaîne à l'objet Function.prototype
* puis ajoute new Function(["@arg"(s)], "@function_body") à cette chaîne.
* Renvoie la fonction.
*
**/

Object.appendChain = function (oChain, oProto) {
  if (arguments.length < 2) {
    throw new TypeError("Object.appendChain - Pas suffisamment d'arguments");
  }
  if (typeof oProto !== 'object' && typeof oProto !== 'string') {
   throw new TypeError("le deuxième argument de Object.appendChain doit être un objet ou une chaîne");
  }

  var oNewProto = oProto, oReturn = o2nd = oLast = oChain instanceof this ? oChain : new oChain.constructor(oChain);

  for (var o1st = this.getPrototypeOf(o2nd); o1st !== Object.prototype && o1st !== Function.prototype; o1st = this.getPrototypeOf(o2nd)) {
    o2nd = o1st;
  }

  if (oProto.constructor === String) {
    oNewProto = Function.prototype;
    oReturn = Function.apply(null, Array.prototype.slice.call(arguments, 1));
    this.setPrototypeOf(oReturn, oLast);
  }

  this.setPrototypeOf(o2nd, oNewProto);
  return oReturn;
}
```

### Utilisation

#### Ajouter une chaîne de prototypes à un prototype

```js
function Mammifère () {
  this.isMammifère = "oui";
}

function EspèceMammifère (sEspèceMammifère) {
  this.espèce = sEspèceMammifère;
}

EspèceMammifère.prototype = new Mammifère();
EspèceMammifère.prototype.constructor = EspèceMammifère;

var oChat = new EspèceMammifère("Felis");

console.log(oChat.isMammifère); // "oui"

function Animal () {
  this.respire = "oui";
}

Object.appendChain(oChat, new Animal());

console.log(oChat.respire); // "oui"
```

#### Deuxième exemple : Transformer une valeur primitive en une instance de son constructeur et ajouter sa chaîne à un prototype

```js
function MySymbol () {
  this.isSymbol = "yes";
}

var nPrime = 17;

console.log(typeof nPrime); // "number"

var oPrime = Object.appendChain(nPrime, new MySymbol());

console.log(oPrime); // "17"
console.log(oPrime.isSymbol); // "yes"
console.log(typeof oPrime); // "object"
```

#### Troisième exemple : Ajouter une chaîne de prototypes à l'objet Function.prototype object et ajouter une nouvelle fonction à cette chaîne

```js
function Personne (sNom) {
  this.identité = sNom;
}

var george = Object.appendChain(new Person("George"),
                                "console.log(\"Salut !!\");");

console.log(george.identité); // "George"
george(); // "Salut !!"
```

## Spécifications

| Spécification                                                                                            | État                         | Commentaires        |
| -------------------------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-object.setprototypeof', 'Object.setPrototypeOf')}} | {{Spec2('ES2015')}}     | Initial definition. |
| {{SpecName('ESDraft', '#sec-object.setprototypeof', 'Object.setPrototypeOf')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.setPrototypeOf")}}

## Voir aussi

- {{jsxref("Reflect.setPrototypeOf()")}}
- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.getPrototypeOf()")}}
- {{jsxref("Object/proto","Object.prototype.__proto__")}}
