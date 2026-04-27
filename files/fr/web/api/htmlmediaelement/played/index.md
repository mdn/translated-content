---
title: "HTMLMediaElement : propriété played"
short-title: played
slug: Web/API/HTMLMediaElement/played
l10n:
  sourceCommit: 2e84c228bf55def31fcd3ac3a0227b5faed99657
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`played`** de l'interface {{DOMxRef("HTMLMediaElement")}} indique les plages temporelles que la ressource, un fichier média {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, a lues. Elle retourne un nouvel objet {{DOMxRef("TimeRanges")}} contenant les plages de la source média que le navigateur a lues, le cas échéant, au moment où l'attribut est évalué.

## Valeur

Un objet {{DOMxRef("TimeRanges")}} représentant les plages temporelles qui ont été lues.

## Exemples

```js
const media = document.querySelector("audio");
const plageTempsJouee = media.played;
let tempsJoue = 0;
// calculer le temps total pendant lequel le média a été lu
for (let i = 0; i < plageTempsJouee.length; i++) {
  tempsJoue += plageTempsJouee.end(i) - plageTempsJouee.start(i);
}
console.log(`Le média a été lu pendant un total de ${tempsJoue} secondes.`);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("HTMLMediaElement.seeked_event", "seeked")}}
- L'évènement {{DOMxRef("HTMLMediaElement.progress_event", "progress")}}
- La propriété {{DOMxRef("HTMLMediaElement.seekable")}}
- La propriété {{DOMxRef("HTMLMediaElement.buffered")}}
- L'interface {{DOMxRef("HTMLVideoElement")}}
- L'interface {{DOMxRef("HTMLAudioElement")}}
