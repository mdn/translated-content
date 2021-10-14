---
title: element.getAttributeNodeNS
slug: Web/API/Element/getAttributeNodeNS
translation_of: Web/API/Element/getAttributeNodeNS
---
{{ ApiRef() }}

### Résumé

Renvoie le nœud `Attr` pour l'attribut avec l'espace de noms et le nom donnés.

### Syntaxe

    attributeNode = element.getAttributeNodeNS(namespace,nodeName)

### Paramètres

- `attributeNode`
  - : Le nœud pour l'attribut spécifié.
- `namespace`
  - : Une chaîne spécifiant l'espace de noms de l'attribut.
- `nodeName`
  - : Une chaîne spécifiant le nom de l'attribut.

\== Example == TBD The example needs to be fixed // html: \<div id="top" /> t = document.getElementById("top"); specialNode = t.getAttributeNodeNS( "<http://www.mozilla.org/ns/specialspace>", "id"); // iNode.value = "full-top"

### Notes

`getAttributeNodeNS` est plus spécifique que {{ domxref("Element.getAttributeNode") }} en ce qu'il permet de spécifier les attributs faisant partis d'un espace de noms particulier. La méthode de réglage correspondante est {{ domxref("Element.setAttributeNodeNS") }}.

{{ DOMAttributeMethods() }}

### Spécification

- [DOM Level 2 Core: getAttributeNodeNS (en)](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-ElGetAtNodeNS) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-ElGetAtNodeNS) (non normative)
