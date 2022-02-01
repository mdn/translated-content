---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
tags:
  - API
  - Interface
  - MediaStreamAudioSourceNode
  - Reference
  - Web Audio API
translation_of: Web/API/MediaStreamAudioSourceNode
---
{{APIRef("Web Audio API")}}

L'interface `MediaStreamAudioSourceNode` représente une source audio [WebRTC](/fr/docs/Web/API/WebRTC_API) {{domxref("MediaStream")}} (comme une webcam ou un micro). C'est un {{domxref("AudioNode")}} qui agit comme une source audio.

Un `MediaElementSourceNode` n'a pas d'entrée et une seule sortie. On le créé en utilisant la méthode {{domxref("AudioContext.createMediaStreamSource")}}. Le nombre de canaux de sortie est égal au nombre de canaux de {{domxref("AudioMediaStreamTrack")}}. S'il n'y a pas de media stream valide, alors la sortie sera constituée d'un seul canal silencieux.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Nombre d'entrées</th>
      <td><code>0</code></td>
    </tr>
    <tr>
      <th scope="row">Nombre de sorties</th>
      <td><code>1</code></td>
    </tr>
    <tr>
      <th scope="row">Nombre de canaux</th>
      <td>
        Défini par {{domxref("AudioMediaStreamTrack")}} et passé à
        la méthode
        {{domxref("AudioContext.createMediaStreamSource")}} qui
        le créé.
      </td>
    </tr>
  </tbody>
</table>

## Constructeur

- {{domxref("MediaStreamAudioSourceNode.MediaStreamAudioSourceNode()")}}
  - : Créé une nouvelle instance de `MediaStreamAudioSourceNode`.

## Propriétés

_Hérite des propriétés de son parent,_ _{{domxref("AudioNode")}}_.

## Méthodes

_Hérite des méthdoes de son parent,_ _{{domxref("AudioNode")}}_.

## Exemple

{{page("/fr-FR/docs/Web/API/AudioContext.createMediaStreamSource","Example")}}

## Spécifications

| Spécification                                                                                                                                | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#the-mediastreamaudiosourcenode-interface', 'MediaStreamAudioSourceNode')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.MediaStreamAudioSourceNode")}}

## Voir aussi

- [Utilisation de l'API Web Audio](/en-US/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [WebRTC API](/en-US/docs/Web/API/WebRTC_API)
- [API de capture et de diffusion de médias (Media Streams)](/en-US/docs/Web/API/Media_Streams_API)
- {{domxref("MediaStreamTrackAudioSourceNode")}}
