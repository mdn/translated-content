---
title: SpeechRecognition
slug: Web/API/SpeechRecognition
---

{{APIRef("Web Speech API")}}{{SeeCompatTable}}

**`SpeechRecognition`** est l'interface contrôleur du service de reconnaissance de la [Web Speech API](/fr/docs/Web/API/Web_Speech_API); elle gère également les {{domxref("SpeechRecognitionEvent")}} envoyés par le service de reconnaissance.

## Constructeur

- {{domxref("SpeechRecognition.SpeechRecognition()")}}
  - : Crée un nouvel objet `SpeechRecognition`

## Propriétés

_`SpeechRecognition` hérite également des propriétés de son interface parente, [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- {{domxref("SpeechRecognition.grammars")}}
  - : Retourne et définit une collection d'objets {{domxref("SpeechGrammar")}} représentant les grammaires qui seront comprises par `SpeechRecognition`.
- {{domxref("SpeechRecognition.lang")}}
  - : Retourne et définit la langue de `SpeechRecognition`. Si elle n'est pas spécifiée, prend la valeur par défaut du HTML [`lang`](/fr/docs/Web/HTML/Element/html#lang) ou le paramètre de langue du user agent si celle-ci n'est pas défini non plus.
- {{domxref("SpeechRecognition.continuous")}}
  - : Contrôle si la reconnaissance est continue, ou retourne seulement un seul résultat. Par défaut retourne un seul résultat (`false`.)
- {{domxref("SpeechRecognition.interimResults")}}
  - : Contrôle si les résultats intermédiaires doivent être retournés (`true`) ou pas (`false`.) Les résultats intermédiaires sont des résultats qui ne sont pas encore définitifs. (e.x. ou la propriété {{domxref("SpeechRecognitionResult.isFinal")}} est `false`.)
- {{domxref("SpeechRecognition.maxAlternatives")}}
  - : Règle le nombre maximum de {{domxref("SpeechRecognitionAlternative")}} (d'alternatives) fourni par résultat. La valeur par défaut est 1.
- {{domxref("SpeechRecognition.serviceURI")}}
  - : Spécifie l'emplacement du service de reconnaissance vocale utilisé par `SpeechRecognition` pour traiter la reconnaissance proprement dite. La valeur par défaut le chemin par défaut du user agent.

### Event handlers

- {{domxref("SpeechRecognition.onaudiostart")}}
  - : Déclenché lorsque l'agent utilisateur commence à capturer le son.
- {{domxref("SpeechRecognition.onaudioend")}}
  - : Déclenché lorsque l'agent utilisateur a terminé la capture audio.
- {{domxref("SpeechRecognition.onend")}}
  - : Déclenché lorsque le service de reconnaissance vocale est déconnecté.
- {{domxref("SpeechRecognition.onerror")}}
  - : Déclenché en cas d'erreur de reconnaissance vocale.
- {{domxref("SpeechRecognition.onnomatch")}}
  - : Déclenché lorsque le service de reconnaissance vocale retourne un résultat final sans concordance significative. Il peut s'agir d'un certain degré de reconnaissance, qui ne correspond pas ou ne dépasse le seuil de {{domxref("SpeechRecognitionAlternative.confidence","confidence")}}.
- {{domxref("SpeechRecognition.onresult")}}
  - : Déclenché lorsque le service de reconnaissance vocale retourne un résultat - un mot ou une expression a donc été reconnu(e) positivement et cela a été communiqué à l'application.
- {{domxref("SpeechRecognition.onsoundstart")}}
  - : Déclenché lorsqu'un son - parole reconnaissable ou non - a été détecté.
- {{domxref("SpeechRecognition.onsoundend")}}
  - : Déclenché lorsque le son - parole reconnaissable ou non - n'est plus détecté.
- {{domxref("SpeechRecognition.onspeechstart")}}
  - : Déclenché lorsque du son à été reconnu par le service de reconnaissance vocale comme de la parole.
- {{domxref("SpeechRecognition.onspeechend")}}
  - : Déclenché lorsque la parole reconnue par le service de reconnaissance vocale a cesse d'être détectée.
- {{domxref("SpeechRecognition.onstart")}}
  - : Déclenché lorsque le service de reconnaissance vocale commence à écouter l'audio entrant, dans le but de reconnaître les grammaires associées à la (reconnaissance vocale) `SpeechRecognition` actuelle.

## Methods

_`SpeechRecognition` also inherits methods from its parent interface, {{domxref("EventTarget")}}._

- {{domxref("SpeechRecognition.abort()")}}
  - : Stops the speech recognition service from listening to incoming audio, and doesn't attempt to return a {{domxref("SpeechRecognitionResult")}}.
- {{domxref("SpeechRecognition.start()")}}
  - : Starts the speech recognition service listening to incoming audio with intent to recognize grammars associated with the current `SpeechRecognition`.
- {{domxref("SpeechRecognition.stop()")}}
  - : Stops the speech recognition service from listening to incoming audio, and attempts to return a {{domxref("SpeechRecognitionResult")}} using the audio captured so far.

## Examples

In our simple [Speech color changer](https://github.com/mdn/dom-examples/tree/main/web-speech-api/speech-color-changer) example, we create a new `SpeechRecognition` object instance using the {{domxref("SpeechRecognition.SpeechRecognition", "SpeechRecognition()")}} constructor, create a new {{domxref("SpeechGrammarList")}}, and set it to be the grammar that will be recognised by the `SpeechRecognition` instance using the {{domxref("SpeechRecognition.grammars")}} property.

After some other values have been defined, we then set it so that the recognition service starts when a click event occurs (see {{domxref("SpeechRecognition.start()")}}.) When a result has been successfully recognised, the {{domxref("SpeechRecognition.onresult")}} handler fires, we extract the color that was spoken from the event object, and then set the background color of the {{htmlelement("html")}} element to that colour.

```js
var grammar =
  "#JSGF V1.0; grammar colors; public <color> = aqua | azure | beige | bisque | black | blue | brown | chocolate | coral | crimson | cyan | fuchsia | ghostwhite | gold | goldenrod | gray | green | indigo | ivory | khaki | lavender | lime | linen | magenta | maroon | moccasin | navy | olive | orange | orchid | peru | pink | plum | purple | red | salmon | sienna | silver | snow | tan | teal | thistle | tomato | turquoise | violet | white | yellow ;";
var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
//recognition.continuous = false;
recognition.lang = "en-US";
recognition.interimResults = false;
recognition.maxAlternatives = 1;

var diagnostic = document.querySelector(".output");
var bg = document.querySelector("html");

document.body.onclick = function () {
  recognition.start();
  console.log("Ready to receive a color command.");
};

recognition.onresult = function (event) {
  var color = event.results[0][0].transcript;
  diagnostic.textContent = "Result received: " + color;
  bg.style.backgroundColor = color;
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Web Speech API](/fr/docs/Web/API/Web_Speech_API)
