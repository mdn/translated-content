---
title: API Web de Voz
slug: Web/API/Web_Speech_API
l10n:
  sourceCommit: 4f0f7386262363103a3e9cf482bb348d8570b331
---

{{DefaultAPISidebar("Web Speech API")}}

La **API Web de Voz** (Web Speech API) te permite incorporar datos de voz en aplicaciones web.
La API Web de Voz tiene dos partes: `SpeechSynthesis` (Texto a voz) y `SpeechRecognition` (Reconocimiento de voz asíncrono).

## Conceptos y uso de la API Web de Voz

La API Web de Voz permite que las aplicaciones web manejen datos de voz.
Hay dos componentes en esta API:

- Se accede al reconocimiento de voz a través de la interfaz {{domxref("SpeechRecognition")}}, que brinda la capacidad de reconocer el contexto de voz desde una entrada de audio (normalmente a través del servicio de reconocimiento de voz predeterminado del dispositivo) y responder adecuadamente.
  Por lo general, usará el constructor de la interfaz para crear un nuevo objeto {{domxref("SpeechRecognition")}}, que tiene varios controladores de eventos disponibles para detectar cuándo se ingresa voz a través del micrófono del dispositivo. La interfaz {{domxref("SpeechGrammar")}} representa un contenedor para un conjunto particular de gramática que tu aplicación debería reconocer.
  La gramática se define mediante [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/) (**JSGF**).
- Se accede a la síntesis de voz a través de la interfaz {{domxref("SpeechSynthesis")}}, un componente de texto a voz que permite que los programas lean su contenido de texto (normalmente a través del sintetizador de voz predeterminado del dispositivo). Los diferentes tipos de voz se representan mediante Los objetos {{domxref("SpeechSynthesisVoice")}} y las diferentes partes del texto que desea que se hablen se representan mediante objetos {{domxref("SpeechSynthesisUtterance")}}.
  Puedes hacer que se hablen pasándolos al método {{domxref("SpeechSynthesis.speak()")}}.

Para obtener más detalles sobre el uso de estas funciones, consulte [Uso de la API Web de Voz](/es/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API).

## Interfaces de la API Web de Voz

### Reconocimiento de voz

- {{domxref("SpeechRecognition")}}
  - : La interfaz del controlador para el servicio de reconocimiento; esto también maneja el {{domxref("SpeechRecognitionEvent")}} enviado desde el servicio de reconocimiento.
- {{domxref("SpeechRecognitionAlternative")}}
  - : Representa una sola palabra que ha sido reconocida por el servicio de reconocimiento de voz.
- {{domxref("SpeechRecognitionErrorEvent")}}
  - : Representa mensajes de error del servicio de reconocimiento.
- {{domxref("SpeechRecognitionEvent")}}
  - : El objeto de evento para los eventos {{domxref("SpeechRecognition.result_event", "result")}} y {{domxref("SpeechRecognition.nomatch_event", "nomatch")}} y contiene todos los datos asociados con un evento intermedio o resultado final del reconocimiento de voz.
- {{domxref("SpeechGrammar")}}
  - : Las palabras o patrones de palabras que queremos que reconozca el servicio de reconocimiento.
- {{domxref("SpeechGrammarList")}}
  - : Representa una lista de objetos {{domxref("SpeechGrammar")}}.
- {{domxref("SpeechRecognitionResult")}}
  - : Representa una única coincidencia de reconocimiento, que puede contener varios objetos {{domxref("SpeechRecognitionAlternative")}}.
- {{domxref("SpeechRecognitionResultList")}}
  - : Representa una lista de objetos {{domxref("SpeechRecognitionResult")}}, o uno solo si los resultados se capturan en el modo {{domxref("SpeechRecognition.continuous","continuous")}}.

### Síntesis de voz

- {{domxref("SpeechSynthesis")}}
  - : La interfaz del controlador para el servicio de voz; esto se puede usar para recuperar información sobre las voces de síntesis disponibles en el dispositivo, iniciar y pausar el habla y otros comandos además.
- {{domxref("SpeechSynthesisErrorEvent")}}
  - : Contiene información sobre los errores que se producen al procesar objetos {{domxref("SpeechSynthesisUtterance")}} en el servicio de voz.
- {{domxref("SpeechSynthesisEvent")}}
  - : Contiene información sobre el estado actual de los objetos {{domxref("SpeechSynthesisUtterance")}} que se han procesado en el servicio de voz.
- {{domxref("SpeechSynthesisUtterance")}}
  - : Representa una solicitud de voz.
    Contiene el contenido que debe leer el servicio de voz e información sobre cómo leerlo (por ejemplo, idioma, tono y volumen).
- {{domxref("SpeechSynthesisVoice")}}
  - : Representa una voz que admite el sistema.
    Cada `SpeechSynthesisVoice` tiene su propio servicio de voz relativo que incluye información sobre el idioma, el nombre y la URI.
- {{domxref("Window.speechSynthesis")}}
  - : Especificada como parte de una interfaz `[NoInterfaceObject]` llamada `SpeechSynthesisGetter` e implementada por el objeto `Window`, la propiedad `speechSynthesis` brinda acceso al controlador {{domxref("SpeechSynthesis")}} y, por lo tanto, al punto de entrada a la funcionalidad de síntesis de voz.

## Errores

Para obtener información sobre los errores arrojados por la API Web de Voz (por ejemplo, `"language-not-supported"` y `"language-unavailable"`), consulte la siguiente documentación:

- [Propiedad `error` del objeto `SpeechRecognitionErrorEvent`](/es/docs/Web/API/SpeechRecognitionErrorEvent/error)
- [Propiedad `error` del objeto `SpeechSynthesisErrorEvent`](/es/docs/Web/API/SpeechSynthesisErrorEvent/error)

## Ejemplos

Los [ejemplos de la API Web de Voz](https://github.com/mdn/dom-examples/tree/main/web-speech-api) en GitHub contienen demostraciones para ilustrar el reconocimiento y la síntesis de voz.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [Uso de la API Web de Voz](https://www.sitepoint.com/talking-web-pages-and-the-speech-synthesis-api/)
- [Artículo HTML5Rocks](https://developer.chrome.com/blog/web-apps-that-talk-introduction-to-the-speech-synthesis-api/)
