---
title: WeakSet.prototype.delete()
slug: Web/JavaScript/Reference/Global_Objects/WeakSet/delete
---

{{JSRef}}

La méthode **`delete()`** permet de retirer un élément donné d'un objet `WeakSet`.

{{InteractiveExample("JavaScript Demo: WeakSet.Prototype.delete()")}}

```js interactive-example
const weakset1 = new WeakSet();
const object1 = {};

weakset1.add(object1);

console.log(weakset1.has(object1));
// Expected output: true

weakset1.delete(object1);

console.log(weakset1.has(object1));
// Expected output: false
```

## Syntaxe

```js
ws.delete(valeur);
```

### Paramètre

- `valeur`
  - : Ce paramètre est obligatoire. Il correspond à l'objet qu'on souhaite retirer de l'ensemble `WeakSet`.

### Valeur de retour

`true` si un élément de l'objet `WeakSet` a bien été retiré, `false` sinon (dans le cas où la clé n'a pas été trouvée ou si la clé n'est pas un objet).

## Exemples

```js
var ws = new WeakSet();
var obj = {};

ws.add(window);

ws.delete(obj); // Renvoie false. Aucun objet obj n'a été trouvé ni retiré.
ws.delete(window); // Renvoie true, l'objet window a pu être retiré.

ws.has(window); // Renvoie false, window n'appartient plus au WeakSet.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("WeakSet")}}
- {{jsxref("WeakSet.prototype.clear()")}}
