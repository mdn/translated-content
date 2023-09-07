---
title: L'API Web Speech
slug: Web/API/Web_Speech_API
---

{{DefaultAPISidebar("Web Speech API")}}{{seecompattable}}

L'API <i lang="en">Web Speech</i> permet d'intégrer des données liées à la voix dans des applications web. L'API <i lang="en">Web Speech</i> se compose de deux parties : <i lang="en">SpeechSynthesis</i> (synthèse vocale) et <i lang="en">SpeechRecognition</i> (reconnaissance vocale asynchrone).

## Concepts et usages de l'API Web Speech

L'API <i lang="en">Web Speech</i> rend les applications web capables de manipuler des données liées à la voix. Cette API se compose de deux parties :

- La reconnaissance vocale (

  <i lang="en">Speech recognition</i>

  ) est accessible via l'interface {{domxref("SpeechRecognition")}} qui fournit la capacité de reconnaitre la voix dans une source audio (normalement grâce à l'outil par défaut de reconnaissance vocale de l'appareil) et de réagir de façon pertinente. En général, on utilisera le constructeur de l'interface pour créer un nouvel objet {{domxref("SpeechRecognition")}} qui a un nombre de gestionnaires d'événements disponibles pour détecter lorsque de la parole arrive dans le micro de l'appareil. L'interface {{domxref("SpeechGrammar")}} représente un conteneur pour une série de règles de grammaire que votre application devrait reconnaître. La grammaire est définie en utilisant [JSpeech Grammar Format](http://www.w3.org/TR/jsgf/) (**JSGF**).

- La synthèse vocale (

  <i lang="en">Speech synthesis</i>

  ) est disponible via l'interface {{domxref("SpeechSynthesis")}}, un composant qui permet aux programmes de vocaliser leur contenu textuel (normalement grâce au synthétiseur vocal par défaut de l'appareil). Differents types de voix sont disponibles dans les objets {{domxref("SpeechSynthesisVoice")}}, et les différentes parties de texte à vocaliser sont interprétés par les objets {{domxref("SpeechSynthesisUtterance")}}. On peut les faire vocaliser en les passant à la méthode {{domxref("SpeechSynthesis.speak()")}}.

Pour plus de détails concernant ces fonctionnalités, voir [Using the Web Speech API.](/fr/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)

## Les interfaces de l'API Web Speech

### Le reconnaissance vocale

- {{domxref("SpeechRecognition")}}
  - : L'interface de contrôle de l'outil de reconnaissance; elle traite aussi le {{domxref("SpeechRecognitionEvent")}} reçu de l'outil de reconnaissance.
- {{domxref("SpeechRecognitionAlternative")}}
  - : Représente un mot unique qui a été reconnu par l'outil de reconnaissane vocale.
- {{domxref("SpeechRecognitionError")}}
  - : Répresente les messages d'erreur de l'outil de reconnaissance vocale.
- {{domxref("SpeechRecognitionEvent")}}
  - : L'objet événement pour les événements [`result`](/fr/docs/Web/API/SpeechRecognition/result_event) et [`nomatch`](/fr/docs/Web/API/SpeechRecognition/nomatch_event), et contient toutes les données associées avec un résultat de reconnaissance vocale intermédiaire ou définitif.
- {{domxref("SpeechGrammar")}}
  - : Les mots ou schémas de mots que l'on demande à l'outil de reconnaissance vocale de reconnaître.
- {{domxref("SpeechGrammarList")}}
  - : Répresente une liste des objets {{domxref("SpeechGrammar")}}.
- {{domxref("SpeechRecognitionResult")}}
  - : Répresente une unique reconnaissance réussie, qui peut contenir plusieurs objets {{domxref("SpeechRecognitionAlternative")}}.
- {{domxref("SpeechRecognitionResultList")}}
  - : Répresente une liste d'objets {{domxref("SpeechRecognitionResult")}}, ou bien un seul si les résultats sont récupérés en mode {{domxref("SpeechRecognition.continuous","continuous")}}.

### La synthèse vocale

- {{domxref("SpeechSynthesis")}}
  - : L'interface de contrôle de l'outil de vocalisation; elle peut être utiliser pour rechercher des informations concernant les voix de synthèse disponible dans l'appareil, le démarrage et l'interruption de la vocalisation, et les commandes complémentaires.
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : Contient les informations concernant toutes les erreurs qui se produisent pendant le traitement des objets {{domxref("SpeechSynthesisUtterance")}} dans l'outil de synthèse vocale.
- {{domxref("SpeechSynthesisEvent")}}
  - : Contient les informations concernant l'état actuel des objets {{domxref("SpeechSynthesisUtterance")}} qui ont été traités par l'outil de synthèse vocale.
- {{domxref("SpeechSynthesisUtterance")}}
  - : Répresente une requête de synthèse vocale. Il contient le contenu que l'outil de synthèse vocale devrait vocaliser et les informations sur comment le vocaliser (e.g. langue, ton et volume).

<!---->

- {{domxref("SpeechSynthesisVoice")}}
  - : Représente une voix qui est supportée par le système. Chaque `SpeechSynthesisVoice` a son propre outil de synthèse vocale incluant les informations concernant la langue, le nom et l'URI.
- {{domxref("Window.speechSynthesis")}}
  - : Spécifiée comme une partie de l'interface `[NoInterfaceObject]` intitulée `SpeechSynthesisGetter`, et implémentée par l'objet `Window`, la propriété `speechSynthesis` fournit l'accès au controleur {{domxref("SpeechSynthesis")}}, et de ce fait un point d'entrée à la fonctionnalité de synthèse vocale.

## Exemples

Le [Web Speech API repo](https://github.com/mdn/dom-examples/tree/main/web-speech-api) sur GitHub contient des démos qui illustrent la reconnaissance vocale et la synthèse vocale.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Using the Web Speech API](/fr/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [Article sur le site SitePoint](http://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [Article HTML5Rocks](http://updates.html5rocks.com/2014/01/Web-apps-that-talk---Introduction-to-the-Speech-Synthesis-API)
- [Demo](http://aurelio.audero.it/demo/speech-synthesis-api-demo.html) \[aurelio.audero.it]
