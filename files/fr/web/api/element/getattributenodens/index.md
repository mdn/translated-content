---
title: element.getAttributeNodeNS
slug: Web/API/Element/getAttributeNodeNS
---

{{ APIRef("DOM") }}

Renvoie le nœud `Attr` pour l'attribut avec l'espace de noms et le nom donnés.

## Syntaxe

```js
attributeNode = element.getAttributeNodeNS(namespace, nodeName);
```

### Paramètres

- `namespace`
  - : Une chaîne spécifiant l'espace de noms de l'attribut.
- `nodeName`
  - : Une chaîne spécifiant le nom de l'attribut.

### Valeur de retour

- `attributeNode`
  - : Le nœud pour l'attribut spécifié.

## Notes

`getAttributeNodeNS` est plus spécifique que [`Element.getAttributeNode()`](/fr/docs/Web/API/Element/getAttributeNode) car il permet de spécifier les attributs faisant partis d'un espace de noms particulier. La méthode de réglage correspondante est [`Element.setAttributeNodeNS()`](/fr/docs/Web/API/Element/setAttributeNodeNS).

## Spécifications

{{Specifications}}

- [DOM Level 2 Core: getAttributeNodeNS (en)](https://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElGetAtNodeNS) (non normative)

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
- [`Document.createAttributeNS()`](/fr/docs/Web/API/Document/createAttributeNS)
- [`Element.setAttributeNodeNS()`](/fr/docs/Web/API/Element/setAttributeNodeNS)
