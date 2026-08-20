---
title: "Element : méthode toggleAttribute()"
short-title: toggleAttribute()
slug: Web/API/Element/toggleAttribute
l10n:
  sourceCommit: ff9dd829bb17d272b7d14c41a442f2c2e3680521
---

{{APIRef("DOM")}}

La méthode **`toggleAttribute()`** de l'interface {{DOMxRef("Element")}} bascule un attribut booléen sur l'élément donné, le supprimant s'il est présent et l'ajoutant s'il n'est pas présent.

## Syntaxe

```js-nolint
toggleAttribute(name)
toggleAttribute(name, force)
```

### Paramètres

- `name`
  - : Une chaîne de caractères définissant le nom de l'attribut à basculer.
    Le nom de l'attribut est automatiquement converti en minuscules lorsque `toggleAttribute()` est appelé sur un élément HTML dans un document HTML.
- `force` {{Optional_Inline}}
  - : Une valeur booléenne qui a les effets suivants&nbsp;:
    - si elle n'est pas définie du tout, la méthode `toggleAttribute` «&nbsp;bascule&nbsp;» l'attribut nommé `name` — le supprimant s'il est présent, ou l'ajoutant s'il n'est pas présent
    - si elle vaut true, la méthode `toggleAttribute` ajoute un attribut nommé `name`
    - si elle vaut false, la méthode `toggleAttribute` supprime l'attribut nommé `name`

### Valeur de retour

`true` si l'attribut **`name`** est finalement présent, et `false` sinon.

### Exceptions

- `InvalidCharacterError` {{DOMxRef("DOMException")}}
  - : L'attribut défini `name` contient un ou plusieurs caractères qui ne sont pas valides dans les noms d'attributs.
    Le `name` doit comporter au moins un caractère et ne peut pas contenir d'espaces ASCII, `NULL`, `/`, `=` ou `>` (U+0000, U+002F, U+003D ou U+003E, respectivement).

## Exemples

### Utilisation simple

Dans l'exemple suivant, `toggleAttribute()` est utilisé pour basculer l'attribut `disabled` d'un {{HTMLElement("input")}}.

### HTML

```html
<input value="texte" /> <button>toggleAttribute("disabled")</button>
```

### JavaScript

```js
const button = document.querySelector("button");
const champ = document.querySelector("input");

button.addEventListener("click", () => {
  champ.toggleAttribute("disabled");
});
```

### Résultat

{{EmbedLiveSample("Examples", 300, 50)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttribute()")}}
- La méthode {{DOMxRef("Element.getAttribute()")}}
- La méthode {{DOMxRef("Element.removeAttribute()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
