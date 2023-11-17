---
title: MediaStreamAudioSourceNode
slug: Web/API/MediaStreamAudioSourceNode
---

{{APIRef("Web Audio API")}}

L'interface **`MediaStreamAudioSourceNode`** est un type d'[`AudioNode`](/fr/docs/Web/API/AudioNode) qui traite une source audio dont le média a été récupéré depuis un objet [`MediaStream`](/fr/docs/Web/API/MediaStream), obtenu en utilisant l'API WebRTC ou les API <i lang="en">Media Capture</i> et <i lang="en">Streams</i>.

Le média peut être obtenu depuis un microphone (avec [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia)) ou depuis un pair distant pendant un appel WebRTC (avec les pistes audio de [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection)).

Un nœud `MediaStreamAudioSourceNode` ne possède pas d'entrée et possède une seule sortie. Il est créé avec la méthode [`AudioContext.createMediaStreamSource()`](/fr/docs/Web/API/AudioContext/createMediaStreamSource).

`MediaStreamAudioSourceNode` utilise l'audio de la _première_ piste [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) dont l'attribut [`kind`](/fr/docs/Web/API/MediaStreamTrack/kind) vaut `audio`. Voir ci-après [l'ordre des pistes](#ordre_des_pistes) pour plus d'informations.

Le nombre de canaux de sortie correspond au nombre de pistes trouvées sur la piste audio sélectionnée.

{{InheritanceDiagram}}

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
        Défini par la première piste audio <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> passée à <a href="/fr/docs/Web/API/AudioContext/createMediaStreamSource"><code>AudioContext.createMediaStreamSource()</code></a> qui a créé le nœud.
      </td>
    </tr>
  </tbody>
</table>

## Constructeur

- [`new MediaStreamAudioSourceNode()`](/fr/docs/Web/API/MediaStreamAudioSourceNode/MediaStreamAudioSourceNode)
  - : Crée un nouvel objet `MediaStreamAudioSourceNode` avec les options indiquées.

## Propriétés

_En complément des propriétés suivantes, `MediaStreamAudioSourceNode` hérite des propriétés de l'interface parente, [`AudioNode`](/fr/docs/Web/API/AudioNode)._

- [`mediaStream`](/fr/docs/Web/API/MediaStreamAudioSourceNode/mediaStream) {{ReadOnlyInline}}
  - : L'objet [`MediaStream`](/fr/docs/Web/API/MediaStream) utilisé pour la construction de ce `MediaStreamAudioSourceNode`.

## Méthodes

_Cette interface hérite des méthodes de son parent, [`AudioNode`](/fr/docs/Web/API/AudioNode)._

## Exceptions

- `InvalidStateError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Cette exception est levée si le flux indiqué par le paramètre `mediaStream` ne contient pas de piste audio.

## Notes d'utilisation

### Ordre des pistes

Pour l'interface `MediaStreamTrackAudioSourceNode`, l'ordre des pistes audio du flux est déterminé en prenant les pistes pour lesquelles l'attribut [`kind`](/fr/docs/Web/API/MediaStreamTrack/kind) vaut `audio`, en triant ces pistes selon les valeurs de leur propriété [`id`](/fr/docs/Web/API/MediaStreamTrack/id) selon l'ordre des points de code Unicode (ce qui correspond généralement à l'ordre alphabétique ou lexicographique lorsque les identifiants sont des chaînes de caractères alphanumériques simples).

La **première** piste est donc la piste dont l'identifiant `id` est le premier parmi ceux de toutes les pistes audio selon l'ordre des points de code Unicode.

Il est toutefois important de noter que cette règle pour l'ordre a été ajoutée après que cette interface a été introduite dans l'API [<i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API). Aussi, mieux vaut ne pas s'appuyer trop sur l'hypothèse que l'ordre sera le même d'un navigateur à l'autre, ou même d'une version à une autre d'un même navigateur.

L'interface [`MediaStreamTrackAudioSourceNode`](/fr/docs/Web/API/MediaStreamTrackAudioSourceNode) est semblable à `MediaStreamAudioSourceNode`, mais évite ce problème en permettant d'indiquer la piste qu'on souhaite utiliser.

## Exemple

Voir [`AudioContext.createMediaStreamSource()`](/fr/docs/Web/API/AudioContext/createMediaStreamSource#exemple) pour un exemple de code qui utilise cet objet.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Utiliser l'API <i lang="en">Web Audio</i>](/fr/docs/Web/API/Web_Audio_API/Using_Web_Audio_API)
- [L'API WebRTC](/fr/docs/Web/API/WebRTC_API)
- [Les API <i lang="en">Media Capture</i> et <i lang="en">Streams</i>](/fr/docs/Web/API/Media_Streams_API)
- [`MediaStreamTrackAudioSourceNode`](/fr/docs/Web/API/MediaStreamTrackAudioSourceNode)
