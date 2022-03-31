---
title: element.nodeValue
slug: Web/API/Node/nodeValue
tags:
  - API
  - DOM
  - Noeuds
  - Propriétés
translation_of: Web/API/Node/nodeValue
---
{{APIRef("DOM")}}

La propriété **`Node.nodeValue`** renvoie ou définit la valeur du nœud courant.

## Syntaxe

    value = node.nodeValue;

`value` (_valeur_) est une chaîne contenant la valeur du nœud courant, s'il y en a une.

## Notes

Pour le document lui-même, `nodeValue` renvoie `null`. Pour des nœuds texte, de commentaires et CDATA, `nodeValue` renvoie le contenu du nœud. Pour les nœuds d'attributs, il s'agira de la valeur de l'attribut.

Le tableau suivant montre les valeurs de retour pour différents types de nœuds&nbsp;:

<table>
  <tbody>
    <tr>
      <td>Attr</td>
      <td>valeur de l'attribut</td>
    </tr>
    <tr>
      <td>CDATASection</td>
      <td>contenu de la section CDATA</td>
    </tr>
    <tr>
      <td>Comment</td>
      <td>contenu du commentaire</td>
    </tr>
    <tr>
      <td>Document</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>DocumentFragment</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>DocumentType</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>Element</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>NamedNodeMap</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>EntityReference</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>Notation</td>
      <td><code>null</code></td>
    </tr>
    <tr>
      <td>ProcessingInstruction</td>
      <td>tout le contenu à l'exception de la cible</td>
    </tr>
    <tr>
      <td>Text</td>
      <td>contenu du nœud texte</td>
    </tr>
  </tbody>
</table>

Lorsque `nodeValue` est défini comme étant `null`, l'assignation n'a aucun effet.

## Spécification

- [DOM Level 2 Core: Node.nodeValue](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68D080) — [traduction](http://www.yoyodesign.org/doc/w3c/dom2-core/core.html#ID-F68D080) (non normative)

## Compatibilité des navigateurs

{{Compat("api.Node.nodeValue")}}
