---
title: "HTMLTrackElement : évènement cuechange"
short-title: cuechange
slug: Web/API/HTMLTrackElement/cuechange_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("WebVTT")}}

L'évènement **`cuechange`** de l'interface {{DOMxRef("HTMLTrackElement")}} est déclenché lorsqu'un {{DOMxRef("TextTrack")}} a modifié les repères actuellement affichés. L'évènement est déclenché à la fois sur le `TextTrack` et sur le {{DOMxRef("HTMLTrackElement")}} dans lequel il est présenté, le cas échéant.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("cuechange", (event) => { })

oncuechange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique sans propriété supplémentaire.

## Exemples

Le {{DOMxRef("TextTrack")}} sous-jacent, indiqué par la propriété {{DOMxRef("HTMLTrackElement.track", "track")}}, reçoit un évènement `cuechange` chaque fois que le repère actuellement présenté est modifié. Cela se produit même si la piste n'est pas associée à un élément média.

Si la piste _est_ associée à un élément média, en utilisant l'élément HTML {{HTMLElement("track")}} comme enfant de l'élément HTML {{HTMLElement("audio")}} ou {{HTMLElement("video")}}, l'évènement `cuechange` est également envoyé au {{DOMxRef("HTMLTrackElement")}}.

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.addEventListener("cuechange", (event) => {
  let cues = event.target.track.activeCues;
});
```

Vous pouvez également utiliser le gestionnaire d'évènement `oncuechange`&nbsp;:

```js
let textTrackElem = document.getElementById("text-track");

textTrackElem.oncuechange = (event) => {
  let cues = event.target.track.activeCues;
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'entrée de glossaire {{Glossary("WebVTT")}}
- Le même évènement sur {{DOMxRef("TextTrack")}}&nbsp;: {{DOMxRef("TextTrack.cuechange_event", "cuechange")}}
