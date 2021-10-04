---
title: element.hasAttributeNS
slug: Web/API/Element/hasAttributeNS
tags:
  - API
  - Attributs
  - DOM
  - Element
  - Méthodes
translation_of: Web/API/Element/hasAttributeNS
---
{{ APIRef("DOM") }}

## Résumé

`hasAttributeNS` renvoie une valeur booléenne indiquant si l'élément courant possède ou non l'attribut spécifié.

## Syntaxe

```js
result =
element.hasAttributeNS(
namespace,
localName)
```

- `result`
  - : Une valeur booléenne `true` ou `false`.
- `namespace`
  - : Une chaîne spécifiant l'espace de noms de l'attribut.
- `localName`
  - : Le nom de l'attribut.

## Exemple

    // Vérifie que l'attribut existe
    // avant de définir une valeur
    var d = document.getElementById("div1");
    if (d.hasAttributeNS(
            "http://www.mozilla.org/ns/specialspace/",
            "special-align")) {
       d.setAttribute("align", "center");
    }

## Notes

{{ DOMAttributeMethods() }}

## Spécification

- [DOM Level 2 Core: hasAttributeNS (en)](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElHasAttrNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElHasAttrNS) (non normative)
