---
title: "Element : méthode hasAttributeNS()"
slug: Web/API/Element/hasAttributeNS
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`hasAttributeNS()`**, associée à l'interface [`Element`](/fr/docs/Web/API/Element), renvoie une **valeur booléenne** indiquant si l'élément courant possède l'attribut spécifié ou non pour l'espace de noms indiqué.

Si vous manipulez des documents HTML et n'avez pas besoin de restreindre à un espace de noms donné, vous pouvez utiliser la méthode [`hasAttribute()`](/fr/docs/Web/API/Element/hasAttribute) à la place.

## Syntaxe

```js-nolint
hasAttributeNS(namespace,localName)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères spécifiant l'espace de noms de l'attribut.
- `localName`
  - : Le nom de l'attribut.

### Valeur de retour

Un booléen indiquant la présence de l'attribut.

## Exemple

```js
// Check that the attribute exists before you set a value
const d = document.getElementById("div1");
if (
  d.hasAttributeNS("http://www.mozilla.org/ns/specialspace/", "special-align")
) {
  d.setAttribute("align", "center");
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.hasAttribute()`](/fr/docs/Web/API/Element/hasAttribute)
- [`Element.getAttributeNS()`](/fr/docs/Web/API/Element/getAttributeNS)
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
- [`Element.removeAttributeNS()`](/fr/docs/Web/API/Element/removeAttributeNS)
