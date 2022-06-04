---
title: element.nodeType
slug: Web/API/Node/nodeType
tags:
  - API
  - DOM
  - Noeuds
  - Propriétés
  - Types
translation_of: Web/API/Node/nodeType
---
{{APIRef("DOM")}}La propriété en lecture seule **`Node.nodeType`** représente le type du noeud.

## Description

La propriété **`nodeType`** peut être utilisée pour distinguer les uns des autres les différents genres de noeuds tels que {{domxref("Element")}}, {{domxref("Text")}} et {{domxref("Comment")}} .

## Syntaxe

    Type = node .nodeType

Renvoie un entier (_integer_) qui spécifie le type du noeud ; les valeurs possibles sont listées dans [Constantes](#constantes).

## Constantes

### Constantes de type nœud

| Constante                          | Valeur | Description                                                                                                              |
| ---------------------------------- | ------ | ------------------------------------------------------------------------------------------------------------------------ |
| `Node.ELEMENT_NODE`                | `1`    | Un noeud {{domxref("Element")}}  tel que {{HTMLElement("p")}} ou {{HTMLElement("div")}}`.`           |
| `Node.TEXT_NODE`                   | `3`    | Le {{domxref("Text")}} actuel de l'{{domxref("Element")}} ou {{domxref("Attr")}}.                        |
| `Node.PROCESSING_INSTRUCTION_NODE` | `7`    | Une {{domxref("ProcessingInstruction")}} d'un document XML tel que la déclaration `<?xml-stylesheet ... ?>`. |
| `Node.COMMENT_NODE`                | `8`    | Un noeud {{domxref("Comment")}}.                                                                                   |
| `Node.DOCUMENT_NODE`               | `9`    | Un noeud {{domxref("Document")}}.                                                                               |
| `Node.DOCUMENT_TYPE_NODE`          | `10`   | Un noeud {{domxref("DocumentType")}} c'est-à-dire `<!DOCTYPE html>` pour des documents HTML5.                   |
| `Node.DOCUMENT_FRAGMENT_NODE`      | `11`   | Un noeud {{domxref("DocumentFragment")}}.                                                                       |

### Constantes de type noeud dépréciées {{deprecated_inline()}}

Les constantes suivantes ont été dépréciées et ne doivent plus être utilisées.

<table class="standard-table">
  <tbody>
    <tr>
      <td>Constante</td>
      <td>Valeur</td>
      <td>Description</td>
    </tr>
    <tr>
      <td><code>Node.ATTRIBUTE_NODE</code></td>
      <td>2</td>
      <td>
        Un {{domxref("Attr", "Attribut")}} d'un
        {{domxref("Element")}}. Les attributs d'élément n'implémentent
        plus l'interface {{domxref("Node")}} dans la spécification
        {{SpecName("DOM4")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.CDATA_SECTION_NODE</code></td>
      <td><code>4</code></td>
      <td>
        Une {{domxref("CDATASection")}}. Supprimée dans la
        spécification {{SpecName("DOM4")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.ENTITY_REFERENCE_NODE</code></td>
      <td>5</td>
      <td>
        Un noeud référence d'entité XML. Supprimé dans la spécification
        {{SpecName("DOM4")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.ENTITY_NODE</code></td>
      <td>6</td>
      <td>
        Un noeud <code>&#x3C;!ENTITY ...></code> XML. Supprimé dans la
        spécificatioin {{SpecName("DOM4")}}.
      </td>
    </tr>
    <tr>
      <td><code>Node.NOTATION_NODE</code></td>
      <td>12</td>
      <td>
        Un noeud <code>&#x3C;!NOTATION ...></code> XML. Supprimé dans la
        spécification {{SpecName("DOM4")}}.
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Différents types de noeuds

```js
document.nodeType === Node.DOCUMENT_NODE; // true (vrai)
document.doctype.nodeType === Node.DOCUMENT_TYPE_NODE; // true  (vrai)

var fragment = document.createDocumentFragment();
fragment.nodeType === Node.DOCUMENT_FRAGMENT_NODE; // true  (vrai)

var p = document.createElement("p");
p.textContent = "Once upon a time...";

p.nodeType === Node.ELEMENT_NODE; // true  (vrai)
p.firstChild.nodeType === Node.TEXT_NODE; // true  (vrai)
```

### Commentaires

Cet exemple vérifie si le premier noeud dans l'élément du document est un noeud commentaire et si ce n'est pas le cas, affiche un message.

```js
var node = document.documentElement.firstChild;
if (node.nodeType != Node.COMMENT_NODE)
  console.log("You should comment your code well!");
```

## Spécifications

| Spécification                                                                                    | Statut                           | Commentaire                                                                                            |
| ------------------------------------------------------------------------------------------------ | -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| {{SpecName('DOM WHATWG', '#dom-node-nodetype', 'Node.nodeType')}}         | {{Spec2('DOM WHATWG')}} | Sont dépréciés les types `ATTRIBUTE_NODE, CDATA_SECTION_NODE, ENTITY_REFERENCE_NODE et NOTATION_NODE`. |
| {{SpecName('DOM3 Core', 'core.html#ID-1950641247', 'Node.nodeType')}}     | {{Spec2('DOM3 Core')}}     | Pas de changement.                                                                                     |
| {{SpecName('DOM2 Core', 'core.html#ID-111237558', 'Node.nodeType')}}     | {{Spec2('DOM2 Core')}}     | Pas de changement.                                                                                     |
| {{SpecName('DOM1', 'level-one-core.html#ID-111237558', 'Node.nodeType')}} | {{Spec2('DOM1')}}         | Définition initiale.                                                                                   |

## Compatibilité des navigateurs

{{Compat("api.Node.nodeType")}}
