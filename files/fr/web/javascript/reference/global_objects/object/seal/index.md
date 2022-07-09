---
title: Object.seal()
slug: Web/JavaScript/Reference/Global_Objects/Object/seal
tags:
  - ECMAScript 5
  - JavaScript
  - JavaScript 1.8.5
  - Méthode
  - Object
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/Object/seal
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/seal
---
{{JSRef}}

La méthode **`Object.seal()`** scelle un objet afin d'empêcher l'ajout de nouvelles propriétés, en marquant les propriétés existantes comme non-configurables. Les valeurs des propriétés courantes peuvent toujours être modifiées si elles sont accessibles en écriture.

{{EmbedInteractiveExample("pages/js/object-seal.html")}}

## Syntaxe

```js
Object.seal(obj)
```

### Paramètres

- obj
  - : L'objet à sceller. Ce peut être n'importe quelle valeur qui n'ait pas [un type primitif](/fr/docs/Web/JavaScript/Guide/Types_et_grammaire#Types_de_données).

### Valeur de retour

L'objet qui est scellé.

## Description

Par défaut, les objets sont {{jsxref("Object.isExtensible()", "extensibles", "", 1)}} (ce qui signifie que de nouvelles propriétés peuvent leur être ajoutées). Sceller un objet empêche l'ajout de nouvelles propriétés et marque les propriétés existantes comme non-configurables. Ainsi, l'ensemble de propriétés de l'objet devient fixé et immuable. Le fait de rendre les propriétés non-configurables empêche également de transformer des propriétés de données en accesseurs et vice versa. Cela n'empêche pas de modifier la valeur des propriétés. Toute tentative de suppression ou d'ajout de propriétés à un objet qui est scellé, de conversion d'une propriété de données en accesseurs ou vice versa échouera, soit de manière silencieuse soit en lançant une exception {{jsxref("TypeError")}} (la plupart du temps en {{jsxref("Fonctions_et_portee_des_fonctions/Strict_mode","mode strict","",1)}}.

La chaîne de prototypes reste la même. Cependant, la propriété {{jsxref("Object.proto", "__proto__")}} ( {{deprecated_inline}} ) est scellée également.

## Exemples

```js
var obj = {
    prop: function () {},
    toto: "truc"
  };

// On peut ajouter de nouvelles propriétés
// Les propriétés existantes peuvent être
// changées ou retirées
obj.toto = "machin";
obj.blop = "blip";
delete obj.prop;

var o = Object.seal(obj);

o === obj; // true
Object.isSealed(obj); // true

// On peut toujours changer la valeur
// d'une propriété d'un objet scellé
obj.toto = "moh";

// Mais on ne peut pas convertir les données
// en accesseurs (ou vice versa)
Object.defineProperty(obj, "toto", { get: function() { return "g"; } });
// lancera une TypeError

// Tout autre changement que celui d'une valeur
// ne fonctionnera pas

obj.coincoin = "mon canard";
// la propriété n'est pas ajoutée

delete obj.toto;
// la propriété n'est pas supprimée

// ...en mode strict, cela lancera des TypeErrors
function échec() {
  "use strict";
  delete obj.toto; // lance une TypeError
  obj.tutu = "arf"; // lance une TypeError
}
échec();

// L'utilisation de la méthode Object.defineProperty ne fonctionnera pas

Object.defineProperty(obj, "ohai", { value: 17 });
// lance une TypeError

Object.defineProperty(obj, "toto", { value: "eit" });
// modifie une propriété existante
```

## Notes

Pour ES5, si l'argument passé à la méthode n'est pas un objet (mais une valeur d'un autre type primitif), cela entraînera une exception {{jsxref("TypeError")}}. Pour ES2015, un argument qui n'est pas un objet sera traité comme un objet ordinaire scellé et la méthode renverra cet objet.

```js
Object.seal(1);
// TypeError : 1 n'est pas un objet (code ES5)

Object.seal(1);
// 1 (code ES2015)
```

### Comparaison avec `Object.freeze()`

Lorsqu'on utilise la méthode {{jsxref("Object.freeze()")}}, les propriétés existantes d'un objet gelé deviennent immuables. En revanche, avec `Object.seal()`, il est toujours possible de modifier la valeur des propriétés existantes d'un objet scellé.

## Spécifications

| Spécification                                                                | État                         | Commentaire                                           |
| ---------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.8', 'Object.seal')}}     | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée par JavaScript 1.8.5 |
| {{SpecName('ES6', '#sec-object.seal', 'Object.seal')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-object.seal', 'Object.seal')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.seal")}}

## Voir aussi

- {{jsxref("Object.isSealed()")}}
- {{jsxref("Object.preventExtensions()")}}
- {{jsxref("Object.isExtensible()")}}
- {{jsxref("Object.freeze()")}}
- {{jsxref("Object.isFrozen()")}}
