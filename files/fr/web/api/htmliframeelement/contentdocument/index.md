---
title: HTMLIFrameElement.contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
---

Si l'<i lang="en">iframe</i> et le document parent de l'<i lang="en">iframe</i> sont de la [même origine](/fr/docs/Web/Security/Same-origin_policy), `HTMLIFrameElement.contentDocument` retourne un [`Document`](/fr/docs/Web/API/Document) (c'est à dire le document actif dans le contexte de navigation imbriqué du cadre). Sinon, il retourne `null`.

## Exemples

```js
var iframeDocument = document.getElementsByTagName("iframe")[0].contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// Cela passe la couleur d'arrière-plan de l'iframe en bleu.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
