---
title: video
slug: Web/HTML/Element/video
---

El elemento `video` se utiliza para incrustar vídeos en un documento HTML o XHTML.

Para obtener una lista de formatos compatibles, consulta [Formatos multimedia admitidos por los elementos de audio y vídeo](/es/Formatos_multimedia_admitidos_por_los_elementos_de_video_y_audio) .

## Contexto de uso

| Contenido permitido            | [Contenido transparente](/en/HTML/Content_categories#transparent_content) , que contiene un atributo **src** o uno o más elementos {{ HTMLElement ("source") }}, seguidos por [contenido dinámico](/en/HTML/Content_categories#flow_content) o [el contenido estático](/en/HTML/Content_categories#phrasing_content) , sin elementos `<video>` ni {{ HTMLElement ("audio") }}. |
| ------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Omisión de etiquetas           | Ninguna, deben estar presentes tanto las etiquetas de inicio como las de cierre                                                                                                                                                                                                                                                                                                |
| Elementos primarios permitidos | Cualquier elemento que acepte [contenido dinámico](/en/HTML/Content_categories#flow_content) o cualquier otro elemento que acepte [contenido estático](/en/HTML/Content_categories#phrasing_content) .                                                                                                                                                                         |
| Documento normativo            | [HTML 5, sección 4.8.6](http://www.w3.org/TR/html5/video.html#video)                                                                                                                                                                                                                                                                                                           |

## Atributos

- `autoplay`
  - : Un atributo booleano; si se especifica, el video comenzará a reproducirse automáticamente tan pronto como sea posible, sin detenerse para terminar de cargar los datos.
- `autobuffer` {{ Non-standard_inline() }} {{deprecated_inline}}

  - : Un atributo booleano; si se especifica, el video comenzará automáticamente a almacenarse en el búfer, incluso si no está listo para reproducirse de forma automática. Esto se debe utilizar para los casos en los que se considera probable que el video se reproduzca (por ejemplo, si el usuario accedió a esa página específica para reproducir el video, no si hay un video insertado junto con otros contenidos). El video se almacena en el búfer hasta que el caché de medios esté lleno.

    > **Nota:** aunque forma parte de los primeros borradores de la especificación HTML 5, el atributo **autobuffer** se ha eliminado en versiones posteriores. Se ha quitado de Gecko 2.0 y otros navegadores, y en algunos nunca llegó a implementarse. La especificación define un nuevo atributo enumerado, **preload,** para sustituir el atributo **autobuffer,** con una sintaxis diferente. [Error 548523 en Firefox](https://bugzil.la/548523)

- `buffered`
  - : Un atributo que se puede leer para determinar qué intervalos de tiempo del multimedia se han almacenado en búfer. Este atributo contiene un objeto {{ domxref("TimeRanges") }} .
- `controls`
  - : Si está presente este atributo, Gecko ofrecerá controles para permitir que el usuario controle la reproducción de video, incluyendo volumen, búsqueda y pausar/reanudar reproducción.
- `height`
  - : La altura del área de visualización del vídeo en píxeles CSS.
- `loop`
  - : Un atributo booleano; si se especifica, al alcanzar el final del video, buscaremos automáticamente hasta el principio.
- `preload` [Error 548523 en Firefox](https://bugzil.la/548523)

  - : El objetivo de este atributo enumerado es proporcionar una sugerencia al navegador sobre qué cree el autor que llevará a la mejor experiencia para el usuario . Puede tener uno de los siguientes valores:

    - none: sugiere bien que el autor cree que el usuario no tendrá que consultar ese video, bien que el servidor desea minimizar su tráfico; es decir, esta sugerencia indica que no se debe almacenar en caché este video.
    - metadatos: sugiere que aunque el autor piensa que el usuario no tendrá que consultar este video, es razonable capturar los metadatos (p. ej. longitud).
    - auto: sugiere que el usuario necesita tener prioridad; es decir, esta sugerencia indica que, si es necesario, se puede descargar el video completo, incluso aunque el usuario no vaya a usarlo.
    - la _cadena vacía:_ que es un sinónimo del valor auto.

    Si no está configurado, su valor predeterminado está definido por el navegador (es decir, cada navegador puede elegir su propio valor predeterminado), aunque la especificación aconseje que se establezca a metadata.

    > **Nota:**
    >
    > - El atributo **autoplay** tiene prioridad sobre éste si se desea reproducir automáticamente un video, el navegador obviamente tendrá que descargarlo. La especificación permite establecer los atributos **autoplay** y **preload**.
    > - La especificación no fuerza al navegador a seguir el valor de este atributo; es tan sólo una sugerencia.

- `poster`
  - : Una URL que indica un marco de póster para mostrar el resultado hasta que el usuario reproduzca o busque. Si este atributo no se especifica, no se muestra nada hasta que el primer cuadro está disponible, entonces se muestra el primer marco como el marco de póster.
- `src`
  - : La URL del vídeo que se va a insertar. Es opcional; podrás optar, en su lugar, por el elemento {{ HTMLElement("source") }} dentro del bloque de vídeo para especificar el video que se va a incrustar.
- `width`
  - : La anchura del área de visualización del vídeo en píxeles CSS.

Las compensaciones de tiempo se especifican actualmente como valores float que representan el número de segundos que se va a compensar.

> **Nota:** la definición del valor de compensación de tiempo no se ha completado en HTML 5 aún y está sujeta a cambios.

## Ejemplos

```html
<video src="videofile.ogg" autoplay poster="posterimage.jpg">
  Tu navegador no admite el elemento <code>video</code>.
</video>
```

Reproduce un vídeo, comenzando tan pronto como la recepción de video sea suficiente para permitir la reproducción sin pausas para descargar más. Mientras que el video comienza a reproducirse, se mostrará la imagen "posterimage.jpg" en su lugar.

## Compatibilidad con servidores

Vale la pena volver a hacer hincapié, por el momento, en que si los tipos MIME para vídeo Theora no se establecen en el servidor, tal vez el vídeo no se muestre o muestre un cuadro gris con una X (si JavaScript está activado).

Puedes solucionar este problema para el servidor Web Apache añadiendo la extensión utilizada por tus archivos de vídeo Theora (".ogm", ".ogv", o ".ogg" son los más comunes) al tipo MIME "video / ogg" a través del archivo "mime.types" en "/ etc / apache" o por medio de la directiva de configuración "AddType" en httpd.conf.

```
AddType video/ogg .ogm
AddType video/ogg .ogv
AddType video/ogg .ogg
```

Su proveedor de alojamiento web puede proporcionar una interfaz fácil para los cambios de configuración de tipo MIME que presentan las nuevas tecnologías hasta que tenga lugar una actualización global de forma natural.

## Interfaz DOM

- {{domxref("HTMLVideoElement")}}

## Consulta también

- [Formatos multimedia admitidos por los elementos de audio y video](/es/Formatos_multimedia_admitidos_por_los_elementos_de_video_y_audio)
- [`audio`](/es/HTML/Elemento/Audio)
- [Usar audio y vídeo en Firefox](/Es/Usar_audio_y_vídeo_en_Firefox)
- [Manipular vídeo por medio de canvas](/En/Manipulating_video_using_canvas)
- [`nsIDOMHTMLMediaElement`](/En/XPCOM_Interface_Reference/NsIDOMHTMLMediaElement)
- [TinyVid](http://tinyvid.tv/):ejemplos de uso de ogg en HTML 5.
- [El elemento `video`](http://www.whatwg.org/specs/web-apps/current-work/#video) (especificación de HTML 5)
- [Configuración de servidores para medios Ogg](/en/Configuring_servers_for_Ogg_media)
