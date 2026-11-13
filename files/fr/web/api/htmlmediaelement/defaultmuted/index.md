---
title: "HTMLMediaElement : propriété defaultMuted"
short-title: defaultMuted
slug: Web/API/HTMLMediaElement/defaultMuted
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

La propriété **`defaultMuted`** de l'interface {{DOMxRef("HTMLMediaElement")}} reflète l'attribut HTML [`muted`](/fr/docs/Web/HTML/Reference/Elements/video#muted), qui indique si la sortie audio de l'élément média doit être muette par défaut. Cette propriété n'a aucun effet dynamique. Pour activer ou désactiver le son, utilisez la propriété {{DOMxRef("HTMLMediaElement.muted", "muted")}}.

## Valeur

Une valeur booléenne. Une valeur de `true` signifie que la sortie audio sera muette par défaut.

## Exemples

```js
const videoEle = document.createElement("video");
videoEle.defaultMuted = true;
console.log(videoEle.outerHTML); // <video muted=""></video>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLMediaElement")}}&nbsp;: utilisée pour définir la propriété `HTMLMediaElement.defaultMuted`
- La propriété {{DOMxRef("HTMLMediaElement.muted")}}
- La propriété {{DOMxRef("HTMLMediaElement.volume")}}
