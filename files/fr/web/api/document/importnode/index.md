---
title: "Document : méthode importNode()"
short-title: importNode()
slug: Web/API/Document/importNode
l10n:
  sourceCommit: 730741c750cc299b85798f1adbaf7adbd6e2016d
---

{{APIRef("DOM")}}

La méthode **`importNode()`** de l'interface {{DOMxRef("Document")}} crée une copie d'un nœud ({{DOMxRef("Node")}}) ou d'un {{DOMxRef("DocumentFragment")}} provenant d'un autre document, à insérer ultérieurement dans le document courant.

Le nœud importé n'est pas encore inclus dans l'arbre du document. Pour l'inclure, vous devez appeler une méthode d'insertion telle que {{DOMxRef("Node.appendChild", "appendChild()")}} ou {{DOMxRef("Node.insertBefore", "insertBefore()")}} avec un nœud qui est déjà dans l'arbre du document.

Contrairement à {{DOMxRef("document.adoptNode()")}}, le nœud d'origine n'est pas supprimé de son document d'origine. Le nœud importé est un clone de l'original.

La méthode {{DOMxRef("Node.cloneNode()")}} crée également une copie d'un nœud. La différence est que `importNode()` clone le nœud dans le contexte du document appelant, tandis que `cloneNode()` utilise le document du nœud cloné. Le contexte du document détermine le {{DOMxRef("CustomElementRegistry")}} pour la construction de tout élément personnalisé. Pour cette raison, pour cloner des nœuds à utiliser dans un autre document, utilisez `importNode()` sur le document cible. Le {{DOMxRef("HTMLTemplateElement.content")}} appartient à un document séparé, il doit donc aussi être cloné avec `document.importNode()` afin que les descendants d'éléments personnalisés soient construits à partir des définitions du document courant. Voir les exemples de la page {{DOMxRef("Node.cloneNode()")}} pour plus de détails.

## Syntaxe

```js-nolint
importNode(externalNode)
importNode(externalNode, deep)
```

### Paramètres

- `externalNode`
  - : Le nœud ({{DOMxRef("Node")}}) ou un {{DOMxRef("DocumentFragment")}} externe à importer dans le document courant.
- `deep` {{Optional_Inline}}
  - : Un indicateur booléen, dont la valeur par défaut est `false`, qui contrôle s'il faut inclure toute la sous-arborescence DOM de `externalNode` lors de l'importation.
    - Si `deep` est défini à `true`, alors `externalNode` et tous ses descendants sont copiés.
    - Si `deep` est défini à `false`, alors seul `externalNode` est importé — le nouveau nœud n'a pas d'enfants.

### Valeur de retour

Le `importedNode` copié dans le contexte du document importateur.

> [!NOTE]
> Le nœud parent ({{DOMxRef("Node.parentNode")}}) de `importedNode` est `null`, car il n'a pas encore été inséré dans l'arbre du document&nbsp;!

## Exemples

### Utiliser la méthode `importNode()`

```js
const iframe = document.querySelector("iframe");
const ancienNoeud = iframe.contentWindow.document.getElementById("myNode");
const nouveauNoeud = document.importNode(ancienNoeud, true);
document.getElementById("container").appendChild(nouveauNoeud);
```

## Notes

Avant de pouvoir être insérés dans le document courant, les nœuds provenant de documents externes doivent être&nbsp;:

- clonés à l'aide de `document.importNode()`&nbsp;; ou
- adoptés à l'aide de {{DOMxRef("document.adoptNode()")}}.

> [!NOTE]
> Bien que Firefox n'applique pas actuellement cette règle, il est recommandé de la suivre pour une meilleure compatibilité future.

Pour en savoir plus sur les problèmes liés à {{DOMxRef("Node.ownerDocument")}}, consultez la FAQ DOM du W3C.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("document.adoptNode()")}}, qui se comporte de manière très similaire à cette méthode
- La méthode {{DOMxRef("Node.appendChild()")}}
- La méthode {{DOMxRef("Node.insertBefore()")}}
