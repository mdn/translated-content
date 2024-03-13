---
title: element.removeAttributeNode
slug: Web/API/Element/removeAttributeNode
---

{{ APIRef("DOM") }}

`removeAttributeNode` enlève l'attribut spécifié de l'élément courant.

## Syntaxe

```js
removedAttr = element.removeAttributeNode(attributeNode);
```

- `attributeNode` est le nœud `Attr` à enlever.
- `removedAttr` est le nœud `Attr` qui vient d'être enlevé.

## Exemple

```js
// <div id="top" align="center" />
var d = document.getElementById("top");
var d_align = d.getAttributeNode("align");
d.removeAttributeNode(d_align);
// align est maintenant supprimé : <div id="top" />
```

## Notes

Si l'attribut enlevé a une valeur par défaut, celle-ci remplace immédiatement l'ancienne. Lorsque c'est possible, l'attribut de remplacement conserve la même URI d'espace de noms et le même nom local, ainsi que le préfixe original.

Il n'y a pas de `removeAttributeNodeNS` (contrairement à la paire `setAttributeNode` et `setAttributeNodeNS` pour lesquels il est nécessaire de savoir quel attribut remplacer (le cas échéant), `removeAttributeNode` n'a pas cette exigence. `removeAttributeNode` peut supprimer des attributs, qu'ils soient d'espace de noms ou pas.

{{ DOMAttributeMethods() }}

## Spécification

- [DOM Level 2 Core&nbsp;: removeAttributeNode](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-D589198) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-D589198) (non normative)
