---
title: Object.defineProperties()
slug: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
tags:
  - ECMAScript 5
  - JavaScript
  - Méthode
  - Object
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Object/defineProperties
original_slug: Web/JavaScript/Reference/Objets_globaux/Object/defineProperties
---
{{JSRef}}

La méthode **`Object.defineProperties()`** permet de définir ou de modifier les propriétés d'un objet directement sur celui-ci. La valeur renvoyée est l'objet modifié.

{{EmbedInteractiveExample("pages/js/object-defineproperties.html")}}

## Syntaxe

```js
Object.defineProperties(obj, props)
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite modifier ou définir certaines propriétés.
- `props`

  - : Un objet dont les propriétés propres et énumérables sont des descripteurs de propriétés pour les propriétés à définir ou à modifier. Les descripteurs de propriétés peuvent avoir deux formes (voir {{jsxref("Object.defineProperty()")}} pour plus d'informations) : un descripteur de donnée ou un descripteur d'accesseur. Les descripteurs de donnée et d'accesseur peuvent avoir les clés suivantes :

    - `configurable`
      - : `true` si et seulement si le type de ce descripteur peut être modifié et si la propriété peut être supprimée de l'objet.
        **Par défaut : `false`.**
    - `enumerable`
      - : `true` si et seulement si la propriété doit être listée lors des énumérations de propriétés de l'objet (quand on liste les propriétés pour une boucle par exemple).
        **Par défaut : `false`.**

    Un descripteur de donnée pourra avoir les clés suivantes :

    - `value`
      - : La valeur associée à la propriété. Cela peut être n'importe quelle valeur valide en JavaScript (un nombre, un objet, etc.).
        **Par défaut : {{jsxref("undefined")}}.**
    - `writable`
      - : `true` si et seulement si la valeur associée à la propriété peut être modifiée par un {{jsxref("Opérateurs/Opérateurs_d_affectation", "opérateur d'affectation", "", 1)}}.
        **Par défaut : `false`.**

    Un descripteur d'accesseur pourra avoir les clés suivantes :

    - `get`
      - : Une fonction utilisée comme accesseur pour la propriété ou {{jsxref("undefined")}} s'il n'y a pas d'accesseur. La fonction renvoyée sera utilisée comme valeur pour la propriété.
        **Par défaut : {{jsxref("undefined")}}.**
    - `set`
      - : Une fonction utilisée comme mutateur pour la propriété ou {{jsxref("undefined")}} s'il n'y a pas de mutateur. La fonction qui sera utilisée ensuite recevra la nouvelle valeur à affecter à la propriété comme argument.
        **Par défaut : {{jsxref("undefined")}}.**

    Si un descripteur ne possède aucune clé parmi `value`, `writable`, `get` et `set`, il sera considéré comme un descripteur de donnée. Si un descripteur possède à la fois les clés `value`/`writable` et `get`/`set`, une exception sera levée.

### Valeur de retour

L'objet passé à la fonction, éventuellement modifié.

## Description

`Object.defineProperties` permet principalement de définir toutes les propriétés de l'objet `obj` correspondant aux propriétés énumérable de `props`.

## Exemples

```js
var obj = {};
Object.defineProperties(obj, {
  "propriété1": {
    value: true,
    writable: true
  },
  "propriété2": {
    value: "Coucou",
    writable: false
  }
  // etc.
});
```

## Prothèse d'émulation (_polyfill_)

Si on considère un environnement _pur_ où tous les noms et toutes les propriétés font référence à leurs valeurs initiales, `Object.defineProperties` est quasiment équivalent à l'implémentation suivante en JavaScript (voir la note liée à `isCallable`) :

```js
function defineProperties(obj, properties) {
  function convertToDescriptor(desc) {
    function hasProperty(obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    }

    function isCallable(v) {
      // NB : à modifier s'il y a plus de types
      // que les fonctions qui sont
      // appelables (callables)
      return typeof v === "function";
    }

    if (typeof desc !== "object" || desc === null)
      throw new TypeError("bad desc");

    var d = {};

    if (hasProperty(desc, "enumerable"))
      d.enumerable = !!desc.enumerable;
    if (hasProperty(desc, "configurable"))
      d.configurable = !!desc.configurable;
    if (hasProperty(desc, "value"))
      d.value = desc.value;
    if (hasProperty(desc, "writable"))
      d.writable = !!desc.writable;
    if ( hasProperty(desc, "get") ) {
      var g = desc.get;

      if (!isCallable(g) && typeof g !== "undefined")
        throw new TypeError("bad get");
      d.get = g;
    }
    if ( hasProperty(desc, "set") ) {
      var s = desc.set;
      if (!isCallable(s) && typeof s !== "undefined")
        throw new TypeError("bad set");
      d.set = s;
    }

    if (("get" in d || "set" in d) && ("value" in d || "writable" in d))
      throw new TypeError("identity-confused descriptor");

    return d;
  }

  if (typeof obj !== "object" || obj === null)
    throw new TypeError("bad obj");

  properties = Object(properties);

  var keys = Object.keys(properties);
  var descs = [];

  for (var i = 0; i < keys.length; i++)
    descs.push([keys[i], convertToDescriptor(properties[keys[i]])]);

  for (var i = 0; i < descs.length; i++)
    Object.defineProperty(obj, descs[i][0], descs[i][1]);

  return obj;
}
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES5.1', '#sec-15.2.3.7', 'Object.defineProperties')}}                     | {{Spec2('ES5.1')}}     | Définition initiale. Implémentée par JavaScript 1.8.5 |
| {{SpecName('ES6', '#sec-object.defineproperties', 'Object.defineProperties')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-object.defineproperties', 'Object.defineProperties')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Object.defineProperties")}}

## Voir aussi

- {{jsxref("Object.defineProperty()")}}
- {{jsxref("Object.keys()")}}
- [Détention et énumération des propriétés](/fr/docs/Web/JavaScript/Caractère_énumérable_des_propriétés_et_rattachement)
