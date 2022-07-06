---
title: SpeechSynthesisUtterance
slug: Web/API/SpeechSynthesisUtterance
translation_of: Web/API/SpeechSynthesisUtterance
---
{{APIRef("Web Speech API")}}{{SeeCompatTable}}

L'interface **`SpeechSynthesisUtterance`** de l'[API Web Speech](/en-US/docs/Web/API/Web_Speech_API) représente une requète de synthèse vocale. Elle contient le contenu du service permettant de définir la façon dont elle sera lu (langue, hauteur et volume).

## Constructor

- {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()")}}
  - : Retourne une nouvelle instance de l'objet `SpeechSynthesisUtterance`.

## Properties

_`SpeechSynthesisUtterance` hérite également des propriétés de son interface parente, {{domxref("EventTarget")}}._

- {{domxref("SpeechSynthesisUtterance.lang")}}
  - : Gets and sets the language of the utterance.
- {{domxref("SpeechSynthesisUtterance.pitch")}}
  - : Gets and sets the pitch at which the utterance will be spoken at.
- {{domxref("SpeechSynthesisUtterance.rate")}}
  - : Gets and sets the speed at which the utterance will be spoken at.
- {{domxref("SpeechSynthesisUtterance.text")}}
  - : Gets and sets the text that will be synthesised when the utterance is spoken.
- {{domxref("SpeechSynthesisUtterance.voice")}}
  - : Gets and sets the voice that will be used to speak the utterance.
- {{domxref("SpeechSynthesisUtterance.volume")}}
  - : Gets and sets the volume that the utterance will be spoken at.

### Event handlers

- {{domxref("SpeechSynthesisUtterance.onboundary")}}
  - : Fired when the spoken utterance reaches a word or sentence boundary.
- {{domxref("SpeechSynthesisUtterance.onend")}}
  - : Fired when the utterance has finished being spoken.
- {{domxref("SpeechSynthesisUtterance.onerror")}}
  - : Fired when an error occurs that prevents the utterance from being succesfully spoken.
- {{domxref("SpeechSynthesisUtterance.onmark")}}
  - : Fired when the spoken utterance reaches a named SSML "mark" tag.
- {{domxref("SpeechSynthesisUtterance.onpause")}}
  - : Fired when the utterance is paused part way through.
- {{domxref("SpeechSynthesisUtterance.onresume")}}
  - : Fired when a paused utterance is resumed.
- {{domxref("SpeechSynthesisUtterance.onstart")}}
  - : Fired when the utterance has begun to be spoken.

## Examples

Dans notre exemple basique de [démonstration de synthèse vocale](https://github.com/mdn/web-speech-api/tree/master/speak-easy-synthesis), nous commençons par récupérer une référence du controller SpeechSynthesis en utilisant `window.speechSynthesis`.
Après avoir définit les variables nécessaires, nous récupérons une liste des voix disponibles en utilisant {{domxref("SpeechSynthesis.getVoices()")}} puis nous alimentons un menu avec celle-ci.
L'utilisateur pourra ensuite choisir la voix qu'il souhaite.

À l'intérieur du handler `inputForm.onsubmit`&nbsp;:

- Nous stoppons la soumission du formulaire avec [preventDefault()](/en-US/docs/Web/API/Event/preventDefault);
- Nous utilisons le constructeur {{domxref("SpeechSynthesisUtterance.SpeechSynthesisUtterance()", "constructor")}} pour créer une nouvelle instance contenant le texte de l'{{htmlelement("input")}};
- Nous positionnons {{domxref("SpeechSynthesisUtterance.voice","voice")}} sur la voix sélectionnée dans le {{htmlelement("select")}};
- Nous démarrons la synthèse vocale via la méthode {{domxref("SpeechSynthesis.speak()")}}

```js
var synth = window.speechSynthesis;

var inputForm = document.querySelector('form');
var inputTxt = document.querySelector('input');
var voiceSelect = document.querySelector('select');

var voices = synth.getVoices();

for(i = 0; i < voices.length ; i++) {
  var option = document.createElement('option');
  option.textContent = voices[i].name + ' (' + voices[i].lang + ')';
  option.setAttribute('data-lang', voices[i].lang);
  option.setAttribute('data-name', voices[i].name);
  voiceSelect.appendChild(option);
}

inputForm.onsubmit = function(event) {
  event.preventDefault();

  var utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  var selectedOption = voiceSelect.selectedOptions[0].getAttribute('data-name');
  for(i = 0; i < voices.length ; i++) {
    if(voices[i].name === selectedOption) {
      utterThis.voice = voices[i];
    }
  }
  synth.speak(utterThis);
  inputTxt.blur();
}
```

## Spécifications

| Spécification                                                                                                    | Statut                               | Commentaire |
| ---------------------------------------------------------------------------------------------------------------- | ------------------------------------ | ----------- |
| {{SpecName('Web Speech API', '#utterance-attributes', 'SpeechSynthesisUtterance')}} | {{Spec2('Web Speech API')}} |             |

## Compatibilité des navigateurs

{{Compat("api.SpeechSynthesisUtterance")}}

## Voir aussi

- [Web Speech API](/fr/docs/Web/API/Web_Speech_API)
