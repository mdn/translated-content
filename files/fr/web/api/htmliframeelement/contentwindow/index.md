---
title: HTMLIFrameElement.contentWindow
slug: Web/API/HTMLIFrameElement/contentWindow
---

{{APIRef("HTML DOM")}}

La propriété **`contentWindow`** renvoie l'objet [`Window`](/fr/docs/Web/API/Window) d'un élément {{HTMLElement("iframe")}}. Cet objet `Window` peut être utilisé pour accéder au document de l'_iframe_ et à son DOM. Cet attribut est en lecture seule mais ses propriétés peuvent être manipulées comme pour l'objet global `Window`.

## Exemples

```js
var x = document.getElementsByTagName("iframe")[0].contentWindow;
//x = window.frames[0];

x.document.getElementsByTagName("body")[0].style.backgroundColor = "blue";
// ceci devrait changer le 1er iframe dans le document bleu.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
