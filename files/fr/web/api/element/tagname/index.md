---
title: element.tagName
slug: Web/API/Element/tagName
---

{{ApiRef("DOM")}}

Renvoie le nom de l'étiquette de l'élément sur lequel elle est appelée. Si l'élément est une {{HTMLElement("img")}}, sa propriété `tagName` est `"IMG"` (pour les documents HTML, elle peut être différente pour les documents XML et XHTML).

## Syntaxe

```js
elementName = element.tagName;
```

### Valeur

Une chaîne indiquant le nom de l'étiquette de l'élément. Cette chaîne comporte des majuscules selon le type de document :

- Pour l'arbre DOM qui représente un document HTML, le nom renvoyé est toujours en forme majuscule canonique. Par exemple, `tagName` appelé sur un élément {{HTMLElement("div")}} renvoie `"DIV"`.
- Les noms des éléments dans un arbre DOM XML, sont retournés dans la même casse que celle utilisée dans le fichier XML d'origine. Si un document XML inclut une étiquette `"<SomeTag>"`, alors la valeur de la propriété `tagName` est `"SomeTag"`.
- Pour les objets {{domxref("Element")}} , la valeur de l'étiquette de nom est la même que la valeur de la propriété {{domxref("Node.nodeName", "nodeName")}} héritée de {{domxref("Node")}}.

## Exemple

### Contenu HTML

```html
<span id="naissance">Lorsque je suis né…</span>
```

### Contenu JavaScript

```js
var span = document.getElementById("naissance");
console.log(span.tagName);
```

En XHTML (ou tout autre format XML), la casse d'origine sera conservée, de sorte que `"span"` sera affiché dans le cas où le nom de l'étiquette d'origine a été créé en minuscules. En HTML, `"SPAN"` serait affiché à la place quelle que soit la casse utilisée lors de la création du document original.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
