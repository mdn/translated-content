---
title: "Document : méthode releaseCapture()"
short-title: releaseCapture()
slug: Web/API/Document/releaseCapture
l10n:
  sourceCommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{APIRef("DOM")}}{{Non-standard_Header}}

La méthode **`releaseCapture()`** de l'interface {{DOMxRef("Document")}} libère la capture de la souris si elle est actuellement activée sur un élément de ce document. Une fois la capture de la souris libérée, les évènements de souris ne seront plus tous dirigés vers l'élément sur lequel la capture est activée.

L'activation de la capture de la souris sur un élément se fait en appelant {{DOMxRef("element.setCapture()")}}.

## Syntaxe

```js-nolint
releaseCapture()
```

### Paramètres

Aucun.

### Valeur de retour

Aucune ({{JSxRef("undefined")}}).

## Exemples

Voir [l'exemple](/fr/docs/Web/API/Element/setCapture#exemples) pour {{DOMxRef("element.setCapture()")}}.

## Spécifications

Ne fait partie d'aucune spécification.

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("element.setCapture()")}}
