---
title: "Document : propriété designMode"
short-title: designMode
slug: Web/API/Document/designMode
l10n:
  sourceCommit: a7265fc3effa7c25b9997135104370c057a65293
---

{{APIRef("DOM")}}

La propriété **`designMode`** de l'interface {{DOMxRef("Document")}} contrôle si l'ensemble du document est modifiable. Les valeurs valides sont `"on"` et `"off"`. Selon la spécification, cette propriété doit être par défaut sur `"off"`. Firefox suit cette norme. Les versions antérieures de Chrome et IE ont par défaut la valeur `"inherit"`. À partir de Chrome 43, la valeur par défaut est `"off"` et `"inherit"` n'est plus pris en charge. Dans IE6 à 10, la valeur est en majuscule.

## Valeur

Une chaîne de caractères indiquant si `designMode` est (ou doit être) défini sur `on` ou `off`.
Les valeurs valides sont `on` et `off`.

## Exemples

Rendre un document {{HTMLElement("iframe")}} éditable&nbsp;:

```js
iframeNode.contentDocument.designMode = "on";
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété {{DOMxRef("HTMLElement.contentEditable")}}
