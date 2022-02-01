---
title: MediaStream
slug: Web/API/MediaStream
translation_of: Web/API/MediaStream
---
{{APIRef("Media Capture and Streams")}} {{SeeCompatTable}}

L'interface `MediaStream` représente le contenu d'un flux de média. Un flux est composé de plusieurs *pistes*, tel que des pistes vidéos ou audio.

## Attributs

- {{domxref("MediaStream.id")}} {{readonlyInline}}
  - : {{domxref("DOMString")}} contenant 36 carractères correspondant à l'identifiant unique (GUID) de l'objet.
- {{domxref("MediaStream.ended")}} {{readonlyInline}}
  - : Booléen dont la valeur est `true` si l'évènement {{event("ended (MediaStream)", "ended")}} à été déclenché sur l'objet, signifiant que le flux à été complètement lu, ou `false` si la fin du flux n'à pas été atteinte.

### Gestionnaire d'évènements

- {{domxref("MediaStream.onaddtrack")}}
  - : Est un {{event("Event_handlers", "event handler")}} contenant l'action à exécuter lorsqu'un évènement {{event("addtrack")}} est déclenché sur l'objet, ce qui arrive lorsqu'un nouvel objet {{domxref("MediaStreamTrack")}} est ajouté.
- {{domxref("MediaStream.onended")}}
  - : Est un  {{event("Event_handlers", "event handler")}} contenant l'action à exécuter lorsqu'un évènement {{event("ended (MediaStream)","ended")}} est déclenché sur l'objet, ce qui arrive lorsque la diffusion est terminée.
- {{domxref("MediaStream.onremovetrack")}}
  - : Est un {{event("Event_handlers", "event handler")}} contenant l'action à exécuter lorsqu'un évènement {{event("removetrack")}} est délenché sur l'objet, ce qui arrive quand un objet  {{domxref("MediaStreamTrack")}} est retiré.

## Méthodes

- {{domxref("MediaStream.getTrackById()")}}
  - : Retourne la piste dont l'ID correspond à celui passé en paramètre, `trackid`. Si aucun paramètre n'est fourni, ou si aucune piste avec cet id existe, la fonction retourne `null`. Si plusieurs pistes ont le même id, elle retourne la première piste.

<!---->

- {{domxref("MediaStream.addTrack()")}}
  - : Stocke une copie de {{domxref("MediaStreamTrack")}} fourni en paramètre. Si la piste à déjà été ajouté à l'objet `MediaStream`, rien ne se passe; si la piste est au statut `finished`, c'est à dire qu'elle est terminée, l'exception `INVALID_STATE_RAISE` est levée.
- {{domxref("MediaStream.removeTrack()")}}
  - : Retire le the {{domxref("MediaStreamTrack")}} fourni comme argument. Si la piste ne fait pas parti du `MediaStream`, rien ne se passe; Si la piste est au statut `finished`, ce qui arrive lorsqu'elle est terminée, l'exception `INVALID_STATE_RAISE` est levée.
- {{domxref("MediaStream.getAudioTracks()")}}
  - : Retourne la liste des {{domxref("MediaStreamTrack")}} stockés dans l'objet `MediaStream` qui ont leur attribut `kind` défini à `"audio"`. L'ordre n'est pas défini, et peut varier d'un navigateur à l'autre, mais aussi d'un appel de la méthode à l'autre.
- {{domxref("MediaStream.getVideoTracks()")}}
  - : Retourne une liste des {{domxref("MediaStreamTrack")}} stockés dans l'objet `MediaStream` qui ont leur attribut `kind` défini à `"video"`. L'ordre n'est pas défini, et peut varier d'un navigateur à l'autre, mais aussi d'un appel de la méthode à l'autre.

## Spécifications

| Spécification                                                                    | Statut                               | Commentaire |
| -------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Media Capture', '#mediastream', 'MediaStream')}} | {{Spec2('Media Capture')}} |             |

## Compatibilité des navigateurs

{{Compat("api.MediaStream")}}

## Voir aussi

- Utilisation de l'API MediaStream
- [WebRTC API](/fr/docs/Web/API/WebRTC_API)
- [Web Audio API](/fr/docs/Web/API/Web_Audio_API)
- {{domxref("MediaStreamTrack")}}
