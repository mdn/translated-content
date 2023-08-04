---
title: Object.getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
---

{{JSRef}}

La méthode **`Object.getPrototypeOf()`** renvoie le prototype d'un objet donné (i.e. la valeur de la propriété `[[Prototype]]` interne).

{{EmbedInteractiveExample("pages/js/object-getprototypeof.html")}}

## Syntaxe

```js
Object.getPrototypeOf(obj);
```

### Paramètres

- `obj`
  - : L'objet dont on souhaite obtenir le prototype.

### Valeur de retour

Le prototype de l'objet passé en argument. Si aucune propriété n'est héritée, c'est la valeur {{jsxref("null")}} qui est renvoyée.

## Exemples

```js
var proto = {};
var obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

## Notes

Pour ES5, la méthode renvoie une exception {{jsxref("TypeError")}} si le paramètre `obj` n'est pas un objet. Pour ES2015, le paramètre sera converti en un objet avant l'application de la méthode.

```js
Object.getPrototypeOf("toto");
// TypeError: "toto" n'est pas un objet (code ES5)
Object.getPrototypeOf("toto");
// String.prototype                     (code ES2015)
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Object.prototype.isPrototypeOf()")}}
- {{jsxref("Object.setPrototypeOf()")}}
- [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- Le billet de John Resig sur [getPrototypeOf](http://ejohn.org/blog/objectgetprototypeof/) (en anglais)
- {{jsxref("Reflect.getPrototypeOf()")}}
