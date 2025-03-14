---
title: Document.releaseCapture()
slug: Web/API/Document/releaseCapture
---

{{ ApiRef("DOM") }}

Libère la capture de la souris si elle est actuellement activée (_bouton gauche enfoncé_) sur un élément de ce document. L'activation de la capture de la souris sur un élément se fait en appelant {{domxref("element.setCapture()")}}.

## Syntaxe

```js
document.releaseCapture();
```

Une fois la capture de la souris relâchée, les événements de souris ne seront plus dirigés vers l'élément sur lequel la capture est activée.

## Exemple

Voir l'[exemple](/fr/docs/Web/API/Element/setCapture#example) pour {{domxref("element.setCapture()")}}.

## Spécifications

Basé sur l'implémentation Internet Explorer.

## Voir aussi

- {{domxref("element.setCapture()")}}
