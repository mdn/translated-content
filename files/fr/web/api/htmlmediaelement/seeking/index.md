---
title: "HTMLMediaElement : propriété seeking"
short-title: seeking
slug: Web/API/HTMLMediaElement/seeking
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`seeking`** de l'interface {{DOMxRef("HTMLMediaElement")}} est un booléen indiquant si la ressource, le {{HTMLElement("audio")}} ou le {{HTMLElement("video")}}, est en train de chercher une nouvelle position.

## Valeur

Une valeur booléenne.

## Exemples

```js
const el = document.querySelector("video");
console.log(el.seeking); // true ou false
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("HTMLMediaElement.seeking_event", "seeking")}}
- L'évènement {{DOMxRef("HTMLMediaElement.seeked_event", "seeked")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'interface {{DOMxRef("HTMLAudioElement")}}
