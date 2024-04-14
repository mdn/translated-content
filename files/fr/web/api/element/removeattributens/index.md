---
title: element.removeAttributeNS
slug: Web/API/Element/removeAttributeNS
---

{{ APIRef("DOM") }}

`removeAttributeNS` supprime l'attribut spécifié d'un élément.

Dans Firefox 3 et postérieurs, cette méthode réinitialise les valeurs DOM à leur valeur par défaut.

## Syntaxe

```js
element.removeAttributeNS(namespace, attrName);
```

### Paramètres

- `namespace` 
  - : est une chaîne qui contient l'espace de noms de l'attribut.

- `attrName`
  - : est une chaîne qui nomme l'attribut à supprimer du noeud en cours.

### Valeur de retour

[`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined).

## Exemple

```js
// <div id="div1" xmlns:special="http://www.mozilla.org/ns/specialspace"
//      special:specialAlign="utterleft" width="200px" />
d = document.getElementById("div1");
d.removeAttributeNS("http://www.mozilla.org/ns/specialspace", "specialAlign");
// l'élément est devenu&nbsp;: <div id="div1" width="200px" />
```

## Spécifications

{{Specifications}}

- [DOM Level 2 Core: removeAttributeNS (en)](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElRemAtNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElRemAtNS) (non normative)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.hasAttributeNS()`](/fr/docs/Web/API/Element/hasAttributeNS)
- [`Element.getAttributeNS()`](/fr/docs/Web/API/Element/getAttributeNS)
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
