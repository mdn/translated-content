---
title: Intl[@@toStringTag]
slug: conflicting/Web/JavaScript/Reference/Global_Objects/Intl
original_slug: Web/JavaScript/Reference/Global_Objects/Intl/@@toStringTag
browser-compat: javascript.builtins.Intl.@@toStringTag
---

{{JSRef}}

La propriété **`Intl[@@toStringTag]`** vaut initialement "Intl".

{{EmbedInteractiveExample("pages/js/intl-prototype-tostringtag.html","shorter")}}

{{js_property_attributes(0,0,1)}}

## Syntaxe

```js
Intl[Symbol.toStringTag]
```

## Exemples

### Utiliser toStringTag

```js
Object.prototype.toString.call(Intl) // "[object Intl]"
Intl.toString() // "[object Intl]"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Symbol.toStringTag`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag)
