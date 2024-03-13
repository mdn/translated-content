---
title: Tecnologías multimedia de la web
slug: Web/Media
l10n:
  sourceCommit: e74627e6fd9ba19696b918c2bdddfff8aa160787
---

{{QuickLinksWithSubpages("/es/docs/Web/Media")}}

A lo largo de los años, la capacidad de la Web para presentar, crear y administrar audio, video y otros medios ha crecido a un ritmo cada vez mayor. Hoy en día, hay una gran cantidad de API disponibles, así como elementos HTML, interfaces DOM y otras características que hacen posible no solo realizar estas tareas, sino también usar medios en conjunto con otras tecnologías para hacer cosas realmente notables. Este artículo enumera las diversas API con enlaces a la documentación que puede resultarle útil para dominarlas.

## Referencias

### HTML

Estos artículos cubren las características de HTML para los desarrolladores multimedia.

- {{HTMLElement("audio")}}
  - : El elemento `<audio>` se utiliza para reproducir audio en un contexto web. Estos se pueden usar de forma invisible como destino para medios más complejos, o con controles visibles para la reproducción de archivos de audio controlada por el usuario. Accesible desde JavaScript como objetos {{domxref("HTMLAudioElement")}}.
- {{HTMLElement("video")}}
  - : El elemento `<video>` es un punto final para contenido de video en un contexto web. Se puede usar para presentar archivos de video o como destino para contenido de video transmitido. `<video>` también se puede usar como una forma de vincular las API de medios con otras tecnologías HTML y DOM, incluido {{HTMLElement("canvas")}} (para captura y manipulación de fotogramas), por ejemplo. Accesible desde JavaScript como objetos {{domxref("HTMLVideoElement")}}.
- {{HTMLElement("track")}}
  - : El elemento HTML `<track>` se puede colocar dentro de un elemento {{HTMLElement("audio")}} o {{HTMLElement("video")}} para proporcionar una referencia a un formato de subtítulos o pista de subtítulos [WebVTT](/es/docs/Web/API/WebVTT_API) que se utilizará al reproducir los medios. Accesible desde JavaScript como objetos {{domxref("HTMLTrackElement")}}.
- {{HTMLElement("source")}}
  - : El elemento HTML `<source>` se usa dentro de un elemento {{HTMLElement("audio")}} o {{HTMLElement("video")}} para especificar los medios de origen para presentar. Se pueden usar múltiples fuentes para proporcionar los medios en diferentes formatos, tamaños o resoluciones. Accesible desde JavaScript como objetos {{domxref("HTMLSourceElement")}}.

### API

- [API de capacidades multimedia](/es/docs/Web/API/Media_Capabilities_API)
  - : La API de capacidades multimedia le permite determinar las capacidades de codificación y decodificación del dispositivo en el que se ejecuta su aplicación o sitio. Esto le permite tomar decisiones en tiempo real sobre qué formatos usar y cuándo.
- [API de transmisión y captura de medios](/es/docs/Web/API/Media_Capture_and_Streams_API)
  - : Una referencia para la API que hace posible transmitir, grabar y manipular medios tanto localmente como a través de una red. Esto incluye el uso de cámaras y micrófonos locales para capturar video, audio e imágenes fijas.
- [API de sesión multimedia](/es/docs/Web/API/Media_Session_API)
  - : La API de sesión multimedia proporciona una forma de personalizar las notificaciones de medios. Para ello, proporciona metadatos para que los muestre el agente de usuario para los medios que reproduce su aplicación web. También proporciona controladores de acciones que el navegador puede usar para acceder a las teclas multimedia de la plataforma, como las teclas de hardware que se encuentran en los teclados, los auriculares, los controles remotos y las teclas de software que se encuentran en las áreas de notificación y en las pantallas de bloqueo de los dispositivos móviles.
- [API de grabación de MediaStream](/es/docs/Web/API/MediaStream_Recording_API)
  - : La API de grabación de MediaStream le permite capturar secuencias de medios para procesar o filtrar los datos o grabarlos en el disco.
- [API de audio web](/es/docs/Web/API/Web_Audio_API)
  - : La API de audio web le permite generar, filtrar y manipular datos de sonido tanto en tiempo real como en material pregrabado, y luego enviar ese audio a un destino como un elemento `<audio>`, un flujo de medios o un disco. .
- [WebRTC](/es/docs/Web/API/WebRTC_API)
  - : WebRTC (Web Real-Time Communication) hace posible la transmisión de audio y video en vivo, así como la transferencia de datos arbitrarios, entre dos pares a través de Internet, sin necesidad de un intermediario.

## Guías

- [Uso de audio y video en HTML](/es/docs/Web/Media/HTML_media)
  - : Una guía para usar los elementos HTML `<audio>` y `<video>`.
- [Multimedia accesible](/es/docs/Learn/Accessibility/Multimedia)
  - : En esta guía, cubrimos las formas en que los diseñadores y desarrolladores web pueden crear contenido que sea accesible para personas con diferentes capacidades. Esto va desde el uso del atributo [`alt`](/es/docs/Web/HTML/Element/img#alt) en elementos {{HTMLElement("img")}} hasta subtítulos y etiquetado de medios para lectores de pantalla.
- [Guía de tipos y formatos de medios en la web](/es/docs/Web/Media/Formats)
  - : Una guía de los tipos de archivos y códecs disponibles para imágenes, audio y video en la web. Esto incluye recomendaciones sobre qué formatos usar para qué tipo de contenido, las mejores prácticas que incluyen cómo proporcionar respaldos y cómo priorizar los tipos de medios, y también incluye información general de soporte del navegador para cada contenedor de medios y códec.
- [Transmisión de audio y video](/es/docs/Web/Media/Streaming)
  - : Una guía que cubre cómo transmitir audio y video, así como técnicas y tecnologías que puede aprovechar para garantizar la mejor calidad o rendimiento posible de sus transmisiones.
- [Guía de reproducción automática para API de audio web y multimedia](/es/docs/Web/Media/Autoplay_guide)
  - : La reproducción automática inesperada de medios o audio puede ser una sorpresa desagradable para los usuarios. Si bien la reproducción automática tiene un propósito, debe usarse con cuidado. Para dar a los usuarios control sobre esto, muchos navegadores ahora ofrecen formas de bloqueo de reproducción automática. Este artículo es una guía para la reproducción automática, con consejos sobre cuándo y cómo usarla y cómo trabajar con los navegadores para manejar correctamente el bloqueo de la reproducción automática.
- [Conceptos básicos de espacialización de audio web](/es/docs/Web/API/Web_Audio_API/Web_audio_spatialization_basics)
  - : En entornos 3D, que pueden ser escenas 3D representadas en la pantalla o una experiencia de realidad mixta experimentada con auriculares, es importante que el audio se realice de manera que suene como si viniera de la dirección de su fuente. Esta guía cubre cómo lograr esto.

## Otros temas

Temas relacionados que pueden ser de interés, ya que se pueden usar junto con las API de medios de maneras interesantes.

- [La API de Canvas (lienzo)](/es/docs/Web/API/Canvas_API)
  - : La API de Canvas le permite dibujar en un {{HTMLElement("canvas")}}, manipular y cambiar el contenido de una imagen. Esto se puede usar con medios de muchas maneras, incluso configurando un elemento `<canvas>` como el destino para la reproducción de video o la captura de cámara para que pueda capturar y manipular cuadros de video.
- [WebGL](/es/docs/Web/API/WebGL_API)
  - : WebGL proporciona una API compatible con OpenGL ES además de la API Canvas existente, lo que hace posible crear potentes gráficos 3D en la Web. A través de un lienzo, esto se puede usar para agregar imágenes en 3D al contenido multimedia.
- [WebXR](/es/docs/Web/API/WebXR_Device_API)
  - : WebXR, que reemplazó a la ahora obsoleta API de WebVR, es una tecnología que brinda soporte para crear contenido de realidad virtual (VR) y realidad aumentada (AR). El contenido de realidad mixta se puede mostrar en la pantalla del dispositivo o usando gafas o auriculares.
- [WebVR](/es/docs/Web/API/WebVR_API) {{deprecated_inline}}
  - : La API Web de Realidad Virtual admite dispositivos de realidad virtual (VR) como Oculus Rift o HTC Vive, lo que permite a los desarrolladores traducir la posición y el movimiento del usuario en movimiento dentro de una escena 3D que luego se presenta en el dispositivo. WebVR ha sido reemplazado por WebXR y pronto se eliminará de los navegadores.
