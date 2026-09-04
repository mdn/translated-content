---
title: "Element : méthode hasAttributeNS()"
short-title: hasAttributeNS()
slug: Web/API/Element/hasAttributeNS
l10n:
  sourceCommit: 20c51db7895b1b6f41d4fa90e71830f4b6678eea
---

{{APIRef("DOM")}}

La méthode **`hasAttributeNS()`** de l'interface {{DOMxRef("Element")}} retourne une valeur booléenne indiquant si l'élément courant possède l'attribut défini avec l'espace de noms défini.

Si vous travaillez avec des documents HTML et que vous n'avez pas besoin de définir l'attribut demandé comme faisant partie d'un espace de noms spécifique, utilisez plutôt la méthode {{DOMxRef("Element.hasAttribute()", "hasAttribute()")}}.

## Syntaxe

```js-nolint
hasAttributeNS(namespace,localName)
```

### Paramètres

- `namespace`
  - : Une chaîne de caractères définissant l'espace de noms de l'attribut.
- `localName`
  - : Le nom de l'attribut.

### Valeur de retour

Un booléen.

## Exemples

```js
// Vérifie que l'attribut existe avant de lui assigner une valeur
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

- La méthode {{DOMxRef("Element.getAttributeNS()")}}
- La méthode {{DOMxRef("Element.setAttributeNS()")}}
- La méthode {{DOMxRef("Element.removeAttributeNS()")}}
