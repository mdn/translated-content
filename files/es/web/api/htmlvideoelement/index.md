---
title: Elementos HTML para Video
slug: Web/API/HTMLVideoElement
---

{{APIRef("HTML DOM")}}

El interfaz de **`HTMLVideoElement`** provee propiedades especiales y metodos para manipular objectos de videos. Tambien, este interfaz hereda propiedades y métodos de {{domxref("HTMLMediaElement")}} y {{domxref("HTMLElement")}}.

La lista de [supported media formats](/es/docs/HTML/Supported_media_formats) (formatos de medios compatibles) varía de un navegador a otro. Debe proveer su video en un formato sencillo que sea compatible con todos los navegadores o proveer varias fuentes de videos in varios formatos, para que así todo navegador que necesite este cubierto.

{{InheritanceDiagram(600, 140)}}

## Propiedades

_Hereda las propiedades de los interfaces anteriores, {{domxref("HTMLMediaElement")}}, y_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.height")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`height`](/es/docs/Web/HTML/Element/video#height), el cual especifica la altura del area mostrada, en pixeles CSS.
- {{domxref("HTMLVideoElement.poster")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`poster`](/es/docs/Web/HTML/Element/video#poster), el cual especifica que imagen sera mostrada en la ausencia de data de video.
- {{domxref("HTMLVideoElement.videoHeight")}} {{readonlyInline}}
  - : Devuelve un `unsigned long` que contiene la altura intrinsica del recurso en pixeles CSS, tomando en consideracion las dimensiones, aspecto proporcional, apertura limpia, resolucion, etc., ya definidas por el formato usado por el recurso. Si el estado disponible del elemento es `HAVE_NOTHING`, su valor es `0`.
- {{domxref("HTMLVideoElement.videoWidth")}} {{readonlyInline}}
  - : Devuelve un `unsigned long` que contiene la anchura intrinsica del recurso en pixeles CSS, tomando en consideracion las dimensiones, aspecto proporcional, apertura limpia, resolucion, etc., ya definidas por el formato usado por el recurso. Si el estado disponible del elemento es `HAVE_NOTHING`, su valor es `0`.
- {{domxref("HTMLVideoElement.width")}}
  - : Es un {{domxref("DOMString")}} que refleja el atributo HTML [`width`](/es/docs/Web/HTML/Element/video#width), el cual especifica la anchura del area mostrada, en pixeles CSS.

### Propiedades especificas para Gecko

- {{domxref("HTMLVideoElement.mozParsedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : `Devuelve un unsigned long` con el conteo de marcos de video que han sido analizados del recurso de multimedia.
- {{domxref("HTMLVideoElement.mozDecodedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Devuelve un `unsigned long` con el conteo de marcos de video que han sido decifrados como imágines.
- {{domxref("HTMLVideoElement.mozPresentedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Devuelve un `unsigned long` con el conteo de marcos decodificados que han sido presentados a la canalización de render para pintar.
- {{domxref("HTMLVideoElement.mozPaintedFrames")}} {{readonlyInline}}{{non-standard_inline}}
  - : Devuelve un `unsigned long` con el conteo de marcos presentados que han sido pintados en la pantalla.
- {{domxref("HTMLVideoElement.mozFrameDelay")}} {{readonlyInline}}{{non-standard_inline}}
  - : Devuelve un `double` con el tiempo, en segundos, que el último marco de video fue pintado por retrazo.
- {{domxref("HTMLVideoElement.mozHasAudio")}} {{readonlyInline}}{{non-standard_inline}}
  - : Devuelve un {{domxref("Boolean")}} indicando si existe algún audio asociado con el video.

## Métodos

_Hereda los métodos anteriores de_ _{{domxref("HTMLMediaElement")}} y_ _{{domxref("HTMLElement")}}._

- {{domxref("HTMLVideoElement.getVideoPlaybackQuality()")}} {{experimental_inline}}
  - : Devuelve un {{domxref("VideoPlaybackQuality")}} para objetos que contienen las medidas de reproducciones actuales.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Lea Tambien

- Elemento HTML implementando este interfaz: {{HTMLElement("video")}}.
- [Demonstracion de estadisticas de pintura de video](http://people.mozilla.org/~cpearce/paint-stats-demo.html)
- [Formatos de medios compatibles](/es/docs/HTML/Supported_media_formats)
