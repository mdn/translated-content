---
title: 'TypeError: cyclic object value'
slug: Web/JavaScript/Reference/Errors/Cyclic_object_value
tags:
  - Erreurs
  - JavaScript
  - TypeError
translation_of: Web/JavaScript/Reference/Errors/Cyclic_object_value
original_slug: Web/JavaScript/Reference/Erreurs/Cyclic_object_value
---
{{jsSidebar("Errors")}}

## Message

    TypeError: cyclic object value (Firefox)
    TypeError: Converting circular structure to JSON (Chrome and Opera)
    TypeError: Circular reference in value argument not supported (Edge)

## Type d'erreur

{{jsxref("TypeError")}}

## Quel est le problème ?

Lorsqu'on appelle la méthode {{jsxref("JSON.stringify()")}}, les structures de références cycliques ne peuvent pas être converties en chaîne de caractères car [le format JSON](https://www.json.org/) ne prend pas en charge les références (bien qu'[un brouillon IETF existe](http://tools.ietf.org/html/draft-pbryan-zyp-json-ref-03)).

## Exemples

Avec une structure circulaire comme la suivante :

```js
var a = {};
var b = {};
a.child = b;
b.child = a;
```

{{jsxref("JSON.stringify()")}} échouera :

```js example-bad
JSON.stringify(a);
// TypeError: cyclic object value
```

Il est nécessaire de contrôler l'existence de cycles avant la conversion en chaîne de caractères. On peut par exemple fournir une fonction de remplacement comme deuxième argument de la fonction {{jsxref("JSON.stringify()")}}.

```js
const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

JSON.stringify(circularReference, getCircularReplacer());
// {"otherData":123}
```

On peut également utiliser une bibliothèque ou une fonction utilitaire pour ce scénario. comme [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js).

## Voir aussi

- {{jsxref("JSON.stringify")}}
- [cycle.js](https://github.com/douglascrockford/JSON-js/blob/master/cycle.js) qui introduit deux fonctions : `JSON.decycle` `et JSON.retrocycle` qui permettent d'encoder et de décoder des structures cycliques en JSON.
