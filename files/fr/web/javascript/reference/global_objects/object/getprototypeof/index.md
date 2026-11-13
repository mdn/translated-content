---
title: "Object : méthode statique getPrototypeOf()"
short-title: getPrototypeOf()
slug: Web/JavaScript/Reference/Global_Objects/Object/getPrototypeOf
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode statique **`Object.getPrototypeOf()`** retourne le prototype (c'est-à-dire la valeur de la propriété interne `[[Prototype]]`) de l'objet défini.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Object.getPrototypeOf()", "shorter")}}

```js interactive-example
const prototype = {};
const object = Object.create(prototype);

console.log(Object.getPrototypeOf(object) === prototype);
// Résultat attendu : true
```

## Syntaxe

```js-nolint
Object.getPrototypeOf(obj)
```

### Paramètres

- `obj`
  - : L'objet dont le prototype doit être retourné.

### Valeur de retour

Le prototype de l'objet donné, qui peut être {{JSxRef("null")}}.

## Exemples

### Utiliser la méthode `Object.getPrototypeOf()`

```js
const proto = {};
const obj = Object.create(proto);
Object.getPrototypeOf(obj) === proto; // true
```

### Convertir les valeurs qui ne sont pas des objets

En ES5, une exception {{JSxRef("TypeError")}} est levée si le paramètre `obj` n'est pas un objet. En ES2015, le paramètre est converti en un {{JSxRef("Object")}}.

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

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `Object.getPrototypeOf` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/object)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `Object.getPrototypeOf` <sup>(angl.)</sup>](https://www.npmjs.com/package/object.getprototypeof)
- La méthode statique {{JSxRef("Object.prototype.isPrototypeOf()")}}
- La méthode statique {{JSxRef("Object.setPrototypeOf()")}}
- La propriété [`Object.prototype.__proto__`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/proto)
- La méthode statique {{JSxRef("Reflect.getPrototypeOf()")}}
- [Le billet de blog sur `Object.getPrototypeOf` <sup>(angl.)</sup>](https://johnresig.com/blog/objectgetprototypeof/) par John Resig (2008)
