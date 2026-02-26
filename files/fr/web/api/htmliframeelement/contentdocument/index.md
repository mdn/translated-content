---
title: "HTMLIFrameElement : propriété contentDocument"
short-title: contentDocument
slug: Web/API/HTMLIFrameElement/contentDocument
l10n:
  sourceCommit: ca26363fcc6fc861103d40ac0205e5c5b79eb2fa
---

{{APIRef("HTML DOM")}}

Si le cadre intégré (<i lang="en">iframe</i> en anglais) et le document parent du cadre intégré sont de la [même origine](/fr/docs/Web/Security/Defenses/Same-origin_policy), retourne un {{DOMxRef("Document")}} (c'est-à-dire le document actif dans le contexte de navigation imbriqué du cadre intégré), sinon retourne `null`.

## Exemples

```js
const iframeDocument = document.querySelector("iframe").contentDocument;

iframeDocument.body.style.backgroundColor = "blue";
// Cela passe la couleur d'arrière-plan de l'iframe en bleu.
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
