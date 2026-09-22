---
title: "Element : propriété tagName"
short-title: tagName
slug: Web/API/Element/tagName
l10n:
  sourceCommit: bc7e82aa6db60568d7146ee285918550bbe4b8ce
---

{{APIRef("DOM")}}

La propriété en lecture seule **`tagName`** de l'interface {{DOMxRef("Element")}} retourne le nom de la balise de l'élément sur lequel elle est appelée.

Par exemple, si l'élément est une image ({{HTMLElement("img")}}), sa propriété `tagName` est `IMG` (pour les documents HTML&nbsp;; elle peut être différente pour les documents XML/XHTML). Note&nbsp;: vous pouvez utiliser la propriété {{DOMxRef("Element.localName", "localName")}} pour accéder au nom local de l'élément — qui dans le cas de l'exemple est `img` (en minuscules).

## Valeur

Une chaîne de caractères indiquant le nom de la balise de l'élément. La capitalisation de cette chaîne de caractères dépend du type de document&nbsp;:

- Pour les arbres DOM représentant des documents HTML, le nom de la balise retourné est toujours sous sa forme canonique en majuscules. Par exemple, `tagName` appelé sur un élément HTML {{HTMLElement("div")}} retourne `"DIV"`.
- Les noms de balises des éléments dans un arbre DOM XML sont retournés dans la même casse que celle utilisée dans le fichier XML d'origine. Si un document XML inclut une balise `"<UneBalise>"`, alors la valeur de la propriété `tagName` est `"UneBalise"`.

Pour les objets {{DOMxRef("Element")}}, la valeur de `tagName` est la même que celle de la propriété {{DOMxRef("Node.nodeName", "nodeName")}} que l'objet élément hérite de {{DOMxRef("Node")}}.

## Exemples

### HTML

```html
<span id="naissance">Lorsque je suis né…</span>
```

### JavaScript

```js
const span = document.getElementById("naissance");
console.log(span.tagName);
```

En XHTML (ou tout autre format XML), la casse d'origine est conservée, de sorte que `"span"` est affiché dans le cas où le nom de la balise d'origine a été créé en minuscules. En HTML, `"SPAN"` est affiché à la place quelle que soit la casse utilisée lors de la création du document original.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("Element.localName")}}
