---
title: VideoTrack.id
slug: Web/API/VideoTrack/id
translation_of: Web/API/VideoTrack/id
---
{{APIRef("HTML DOM")}}

La propriété `id` contient une chaîne qui identifie de manière unique une piste représentée par {{domxref("VideoTrack")}}. Cet ID peut être utilisé avec la méthode {{domxref("VideoTrackList.getTrackById()")}} pour localiser une piste spécifique dans le media associé à l'élément media.

Cet ID peut aussi être utilisé comme un fragement d'URL pour charger une piste (si le media supporte les fragments de media).

## Syntaxe

    var trackID = VideoTrack.id;

Valeur

Une {{domxref("DOMString")}} qui identifie la piste, utilisable par la suite pour l'appel de {{domxref("VideoTrackList.getTrackById", "getTrackById()")}} sur une {{domxref("VideoTrackList")}} tel que spécifié par la propriété {{domxref("HTMLMediaElement.videoTracks", "videoTracks")}} d'un élément media.

## Spécifications

| Specification                                                                            | Status                           | Comment |
| ---------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#dom-videotrack-id', 'VideoTrack: id')}} | {{Spec2('HTML WHATWG')}} |         |

## Compatibilité des navigateurs

{{Compat("api.VideoTrack.id")}}
