---
title: audioprocess
slug: Web/API/ScriptProcessorNode/audioprocess_event
translation_of: Web/API/ScriptProcessorNode/audioprocess_event
original_slug: Web/Events/audioprocess
---
L'événement **audioprocess** est déclenché lorsqu'un tampon d'entrée d'une API Web audio {{domxref("ScriptProcessorNode")}} est prêt à être traité.

## Informations générales

- Spécification
  - : {{SpecName('Web Audio API', '#AudioProcessingEvent-section', 'AudioProcessingEvent')}}
- Interface
  - : {{domxref("AudioProcessingEvent")}}
- Propagation
  - : ?
- Annulable
  - : ?
- Cible
  - : {{domxref("ScriptProcessorNode")}}
- Action par défaut
  - : Aucune

## Propriétés

<table class="standard-table">
  <thead>
    <tr>
      <th scope="col">Propriété</th>
      <th scope="col">Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>target</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("EventTarget")}}</td>
      <td>
        La cible de l'événement (la plus haute cible dans l'arbre du DOM).
      </td>
    </tr>
    <tr>
      <td><code>type</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("DOMString")}}</td>
      <td>Le type de l'événement.</td>
    </tr>
    <tr>
      <td><code>bubbles</code> {{ReadOnlyInline}}</td>
      <td><code>boolean</code></td>
      <td>Est-ce que l'événement se propage?</td>
    </tr>
    <tr>
      <td><code>cancelable</code> {{ReadOnlyInline}}</td>
      <td><code>boolean</code></td>
      <td>Est-il possible d'annuler l'événement?</td>
    </tr>
    <tr>
      <td><code>playbackTime</code> {{ReadOnlyInline}}</td>
      <td><code>double</code></td>
      <td>
        Le moment auquel le son sera joué tel que défini par le temps de
        {{domxref("AudioContext.currentTime")}}.
      </td>
    </tr>
    <tr>
      <td><code>inputBuffer</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("AudioBuffer")}}</td>
      <td>
        <p>
          Le tampon contenant les données audio d'entrée devant être traité. Le
          nombre de canaux est défini par le paramètre
          <code><em>numberOfInputChannels</em> de la méthode </code
          >{{domxref("AudioContext.createScriptProcessor()")}}.
          Noter que le <em><code>AudioBuffer</em></code
          > retourné est seulement valide
          dans la portée de la fonction <em><code>onaudioprocess.</code></em>
        </p>
      </td>
    </tr>
    <tr>
      <td><code>outputBuffer</code> {{ReadOnlyInline}}</td>
      <td>{{domxref("AudioBuffer")}}</td>
      <td>
        <p>
          Le tampon dans lequel doit être écrit les données audio de sortie. Le
          nombre de canaux est défini par le paramètre
          <code><em>numberOfOutputChannels</em> de la méthode </code
          >{{domxref("AudioContext.createScriptProcessor()")}}.
          Noter que <code>le<em> AudioBuffer</em></code
          ><code> retourné </code>est seulement valide dans la portée de la
          fonction <em><code>onaudioprocess.</code></em>
        </p>
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                        | Statut                               | Commentaire |
| -------------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Audio API', '#AudioProcessingEvent-section', 'AudioProcessingEvent')}} | {{Spec2('Web Audio API')}} |             |

## Compatibilités navigateur

{{Compat("api.ScriptProcessorNode.audioprocess_event")}}

## Voir aussi

- [Web Audio API](/fr/docs/Web_Audio_API)
