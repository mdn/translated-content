---
title: Element.remove()
slug: Web/API/Element/remove
translation_of: Web/API/Element/remove
browser-compat: api.Element.remove
---
{{APIRef("DOM")}}

La méthode **`Element.remove()`** retire l'élément courant du DOM.

## Syntaxe

```js
remove()
```

## Exemples

### Utiliser `remove()`

```html
<div id="div-01">Voici div-01</div>
<div id="div-02">Voici div-02</div>
<div id="div-03">Voici div-03</div>
```

```js
const element = document.getElementById('div-02');
element.remove(); // supprime le div avec l'identifiant 'div-02'
```

### `Element.remove()` ne fait pas partie de la portée de `with`

La méthode `remove()` ne fait pas partie de la portée créée par une instruction `with`. Voir [`Symbol.unscopables`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/unscopables) pour plus d'informations.

```js
with(node) {
  remove();
}
// ReferenceError: remove is not defined
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Prothèse d'émulation](https://github.com/chenzhenxi/element-remove)
