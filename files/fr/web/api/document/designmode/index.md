---
title: Document.designMode
slug: Web/API/Document/designMode
---

{{ ApiRef() }}

document.designMode contrôle si l'ensemble du document est modifiable. Les valeurs valides sont "on" et "off". Conformément à la spécification, cette propriété est par défaut sur "off". Firefox suit cette norme. Les versions antérieures de Chrome et IE ont par défaut la valeur "`inherit`". Pour les versions entre IE6-10, la valeur est en majuscule.

## Syntaxe

```js
var mode = document.designMode;
document.designMode = "on";
document.designMode = "off";
```

## Exemple

Rendre un document {{HTMLElement("iframe")}} éditable

```js
iframe_node.contentDocument.designMode = "on";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Rich-Text Editing in Mozilla](/fr/docs/Web/Guide/HTML/Editable_content/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
