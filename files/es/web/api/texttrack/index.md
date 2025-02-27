---
title: TextTrack
slug: Web/API/TextTrack
l10n:
  sourceCommit: fe0ae190fa37469b28ebe39cb33013d89c3a69e6
---

{{APIRef("WebVTT")}}

La interfaz `TextTrack`, parte de la API para manejar WebVTT (pistas de texto en presentaciones multimedia), describe y controla la pista de texto asociada con un elemento {{HTMLElement("track")}} en particular.

{{InheritanceDiagram}}

## Propiedades de instancia

_Esta interfaz también hereda propiedades de {{domxref("EventTarget")}}._

- {{domxref("TextTrack.activeCues")}} {{ReadOnlyInline}}
  - : Un objeto {{domxref("TextTrackCueList")}} que enumera el conjunto de pistas de texto activas actualmente. Las señales de pista están activas si la posición de reproducción actual de los medios se encuentra entre las horas de inicio y finalización de las señales. Por lo tanto, para las señales mostradas, como leyendas o subtítulos, las señales activas se muestran actualmente.
- {{domxref("TextTrack.cues")}} {{ReadOnlyInline}}
  - : Un {{domxref("TextTrackCueList")}} que contiene todas las señales de la pista.
- {{domxref("TextTrack.id")}} {{ReadOnlyInline}}
  - : Una cadena que identifica la pista, si la tiene. Si no tiene un ID, entonces este valor es una cadena vacía (`""`). Si `TextTrack` está asociado con un elemento {{HTMLElement("track")}}, entonces el ID de la pista coincide con el ID del elemento.
- {{domxref("TextTrack.inBandMetadataTrackDispatchType")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que indica el tipo de envío de la pista de metadatos en banda de la pista.
- {{domxref("TextTrack.kind")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que indica qué tipo de pista de texto describe `TextTrack`. Debe ser uno de los valores permitidos.
- {{domxref("TextTrack.label")}} {{ReadOnlyInline}}
  - : Una cadena legible por humanos que contiene la etiqueta de la pista de texto, si está presente; de lo contrario, se trata de una cadena vacía (`""`), en cuyo caso es posible que su código deba generar una etiqueta personalizada utilizando otros atributos de la pista, si la etiqueta de la pista debe exponerse al usuario.
- {{domxref("TextTrack.language")}} {{ReadOnlyInline}}
  - : Una cadena que especifica el idioma del texto en el que se escribe el contenido de la pista de texto. El valor debe cumplir con el formato especificado en {{RFC(5646, "Etiquetas para identificar idiomas (también conocido como BCP 47)")}}, al igual que el atributo HTML [`lang`](/es/docs/Web/HTML/Global_attributes#lang). Por ejemplo, puede ser `"en-US"` para inglés de Estados Unidos o `"pt-BR"` para portugués de Brasil.
- {{domxref("TextTrack.mode")}}
  - : Una cadena que especifica el modo actual de la pista, que debe ser uno de los valores permitidos. Cambiar el valor de esta propiedad cambia el modo actual de la pista para que coincida. El valor predeterminado es `disabled`, a menos que el atributo booleano [`default`](/es/docs/Web/HTML/Element/track#default) del elemento {{HTMLElement("track")}} esté establecido en `true`, en cuyo caso el modo predeterminado es `showing`.

## Métodos de instancia

_Esta interfaz también hereda métodos de {{domxref("EventTarget")}}._

> [!NOTE]
> La interfaz {{domxref("TextTrackCue")}} es una clase abstracta que se utiliza como padre para otras interfaces de señales como {{domxref("VTTCue")}}. Por lo tanto, al agregar o eliminar una señal, estará pasando uno de los tipos de señales que heredan de `TextTrackCue`.

- {{domxref("TextTrack.addCue()")}}
  - : Agrega una señal (especificada como un objeto {{domxref("TextTrackCue")}}) a la lista de señales de la pista.
- {{domxref("TextTrack.removeCue()")}}
  - : Elimina una señal (especificada como un objeto {{domxref("TextTrackCue")}}) de la lista de señales de la pista.

## Eventos

- [`cuechange`](/es/docs/Web/API/TextTrack/cuechange_event)
  - : Se activa cuando se ingresan y se salen de las señales. Una señal de texto dada aparece cuando se ingresa la señal y desaparece cuando se sale de la señal.
    También disponible a través de la propiedad `oncuechange`.

## Ejemplo

El siguiente ejemplo agrega un nuevo `TextTrack` a un video, luego lo configura para que se muestre usando {{domxref("TextTrack.mode")}}.

```js
let video = document.querySelector("video");
let track = video.addTextTrack("captions", "Captions", "en");
track.mode = "showing";
```

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- [WebVTT](/es/docs/Web/API/WebVTT_API)
- {{domxref("TextTrackCueList")}}
- {{domxref("VTTCue")}}
- {{HTMLElement("track")}}
- {{domxref("HTMLTrackElement")}}
