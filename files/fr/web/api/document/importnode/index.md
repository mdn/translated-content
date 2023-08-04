---
title: document.importNode
slug: Web/API/Document/importNode
---

{{APIRef("DOM")}}

La méthode {{domxref ("Document")}} `importNode()` crée une nouvelle copie du {{domxref ("Node")}} ou {{domxref ("DocumentFragment")}} spécifié à partir d'un autre document, afin qu'il puisse être inséré dans le document actuel. Il n'est pas encore inclus dans l'arbre des documents; Pour ce faire, vous devez appeler une méthode telle que {{domxref ("Node.appendChild", "appendChild ()")}} ou {{domxref ("Node.insertBefore", "insertBefore ()")}}.

### Syntaxe

```js
var node = document.importNode(externalNode, deep);
```

- `externalNode`
  - : Le nouveau `Node` ou `DocumentFragment` à importer dans le document courant. Après l'importation, le nouveau [`parentNode`](/fr/docs/Web/API/Node/parentNode) du noeud est `null`, car il n'a pas encore été inséré dans l'arborescence du document.
- `deep`
  - : Une valeur booléenne qui indique s'il faut ou non importer la totalité de la sous-arborescence DOM provenant de `externalNode`. Si ce paramètre est `true` (_vrai_), alors `externalNode` et tous ses descendants sont copiés; si `false` _(faux)_, seul le nœud unique, `externalNode`, est importé.

> **Note :** Dans la spécification DOM4, `deep` est répertorié en tant qu'argument facultatif. S'il est omis, la méthode agit comme si la valeur de `deep` était `true`, par défaut, elle utilisait le clonage profond comme comportement par défaut. Pour créer un clone superficiel, la profondeur doit être définie sur `false`.
>
> Ce comportement a été modifié dans la dernière spécification, et s'il est omis, la méthode agira comme si la valeur de `deep` était `false`. Bien que ce soit toujours facultatif, vous devriez toujours fournir l'argument `deep` à la fois pour la compatibilité en amont et en aval. Avec Gecko 28.0, la console a averti les développeurs de ne pas omettre l'argument. À partir de Gecko 29.0, un clone superficiel est défini par défaut au lieu d'un clone profond.

## Exemple

```js
var iframe = document.getElementsByTagName("iframe")[0];
var oldNode = iframe.contentWindow.document.getElementById("myNode");
var newNode = document.importNode(oldNode, true);
document.getElementById("container").appendChild(newNode);
```

## Notes

Le noeud d'origine n'est pas supprimé du document d'origine. Le noeud importé est un clone de l'original.

Les nœuds provenant de documents externes doivent être clonés à l'aide de [`document.importNode()`](/fr/docs/Web/API/Document/importNode) (ou adoptés avec [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument), consultez la [FAQ DOM du W3C](http://www.w3.org/DOM/faq.html#ownerdoc) (en anglais).

Gecko n'obligeait pas à utiliser [`document.importNode()`](/fr/docs/Web/API/Document/importNode) et [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode) avant sa version 1.9. Depuis les versions 1.9 alphas, si un nœud n'est pas adopté ou importé avant d'être utilisé dans un autre document, l'exception `WRONG_DOCUMENT_ERR` est déclenchée (`NS_ERROR_DOM_WRONG_DOCUMENT_ERR`). implémentation dans le [bug 47903](https://bugzilla.mozilla.org/show_bug.cgi?id=47903).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("document.adoptNode()")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Node.insertBefore()")}}
