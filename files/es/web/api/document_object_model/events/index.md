---
title: Eventos del DOM
short-title: Trabajar con eventos
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: de189c9ecabb11ee95043a801729050c624723a7
---

{{DefaultAPISidebar("DOM")}}

Los [eventos](/es/docs/Learn_web_development/Core/Scripting/Events) se disparan para avisar al código de "cambios de interés" que pueden afectar a su ejecución. Estos pueden originarse por interacciones del usuario, como el uso del ratón o cambiar el tamaño de una ventana; por cambios en el estado del entorno subyacente (por ejemplo, batería baja o eventos multimedia del sistema operativo) y por otras causas.

Cada evento se representa mediante un objeto basado en la interfaz {{domxref("Event")}}, que puede incluir campos o funciones personalizados adicionales con información sobre lo ocurrido. La documentación de cada evento incluye una tabla (cerca del principio) con un enlace a la interfaz del evento asociada y otros datos relevantes. Encontrarás la lista completa de los distintos tipos de evento en [Event > Interfaces basadas en Event](/es/docs/Web/API/Event#interfaces_basadas_en_event).

Este tema ofrece un índice de los principales _tipos_ de eventos que pueden interesarte (animación, portapapeles, workers, etc.), junto con las clases principales que implementan esos tipos de eventos.

## Índice de eventos

<table class="standard-table">
  <tbody>
    <tr>
      <th>Tipo de evento</th>
      <th style="width: 50%">Descripción</th>
      <th>Documentación</th>
    </tr>
    <tr>
      <td>Animación</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Web_Animations_API">Web Animation API</a
          >.
        </p>
        <p>
          Se utilizan para responder a cambios en el estado de una animación
          (por ejemplo, cuando empieza o termina).
        </p>
      </td>
      <td>
        Eventos de animación que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_de_animación"
          ><code>Document</code></a
        >,
        <a href="/es/docs/Web/API/Window"
          ><code>Window</code></a
        >
        y
        <a href="/es/docs/Web/API/HTMLElement"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Obtención asíncrona de datos</td>
      <td><p>Eventos relacionados con la obtención de datos.</p></td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/AbortSignal"
          ><code>AbortSignal</code></a
        >,
        <a href="/es/docs/Web/API/XMLHttpRequest#eventos"
          ><code>XMLHttpRequest</code></a
        >
        y
        <a href="/es/docs/Web/API/FileReader#eventos"
          ><code>FileReader</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Portapapeles</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Clipboard_API">API del portapapeles</a>.
        </p>
        <p>
          Sirven para avisar cuando se corta, se copia o se pega contenido.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_del_portapapeles"
          ><code>Document</code></a
        >,
        <a href="/es/docs/Web/API/Element#eventos_del_portapapeles"
          ><code>Element</code></a
        >
        y
        <a href="/es/docs/Web/API/Window"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Composición</td>
      <td>
        <p>
          Eventos relacionados con la composición: la introducción de texto de
          forma "indirecta" (es decir, sin pulsaciones normales de teclado).
        </p>
        <p>
          Por ejemplo, texto introducido a través de un motor de conversión de
          voz a texto, o mediante combinaciones de teclas especiales que
          modifican las pulsaciones del teclado para representar caracteres
          nuevos de otro idioma.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Element#eventos_de_composición"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Transición CSS</td>
      <td>
        <p>
          Eventos relacionados con las
          <a href="/es/docs/Web/CSS/Guides/Transitions">transiciones CSS</a>.
        </p>
        <p>
          Notifican cuando una transición CSS empieza, se detiene, se cancela,
          etc.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_de_transición"
          ><code>Document</code></a
        >,
        <a href="/es/docs/Web/API/HTMLElement"
          ><code>HTMLElement</code></a
        >
        y
        <a href="/es/docs/Web/API/Window"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Base de datos</td>
      <td>
        <p>
          Eventos relacionados con las operaciones de base de datos: apertura,
          cierre, transacciones, errores, etc.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/IDBDatabase#eventos"
          ><code>IDBDatabase</code></a
        >,
        <a href="/es/docs/Web/API/IDBOpenDBRequest"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/es/docs/Web/API/IDBRequest"
          ><code>IDBRequest</code></a
        >
        e
        <a href="/es/docs/Web/API/IDBTransaction"
          ><code>IDBTransaction</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Mutación del DOM</td>
      <td>
        <p>
          Eventos relacionados con las modificaciones de la jerarquía y los
          nodos del Modelo de Objetos del Documento (DOM).
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Advertencia:</strong>
            Los <a href="/es/docs/Web/API/MutationEvent">eventos de mutación</a>
            están obsoletos. En su lugar, debes usar los
            <a href="/es/docs/Web/API/MutationObserver"
              >observadores de mutaciones</a
            >.
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td>Arrastrar y soltar, rueda del ratón</td>
      <td>
        <p>
          Eventos relacionados con el uso de la
          <a href="/es/docs/Web/API/HTML_Drag_and_Drop_API"
            >API de arrastrar y soltar de HTML</a
          >
          y de los <a href="/es/docs/Web/API/WheelEvent">eventos de rueda</a>.
        </p>
        <p>
          Los eventos de arrastre y de rueda derivan de los eventos de ratón.
          Aunque se disparan al usar la rueda del ratón o al arrastrar y soltar,
          también pueden usarse con otro hardware adecuado.
        </p>
      </td>
      <td>
        <p>
          Eventos de arrastre que se disparan en
          <a href="/es/docs/Web/API/Document#eventos_de_arrastrar_y_soltar"
            ><code>Document</code></a
          >
        </p>
        <p>
          Eventos de rueda que se disparan en
          <a href="/es/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Foco</td>
      <td>
        <p>
          Eventos relacionados con los elementos que reciben y pierden el foco.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Element#eventos_de_foco"
          ><code>Element</code></a
        >
        y
        <a href="/es/docs/Web/API/Window#eventos_de_foco"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Formulario</td>
      <td>
        <p>
          Eventos relacionados con la construcción, el restablecimiento y el
          envío de formularios.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/HTMLFormElement#eventos"
          ><code>HTMLFormElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Pantalla completa</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Fullscreen_API">API de pantalla completa</a>.
        </p>
        <p>
          Avisan cuando se pasa del modo de pantalla completa al modo ventana
          (y al revés), y también de los errores que se produzcan durante esa
          transición.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_de_pantalla_completa"
          ><code>Document</code></a
        >
        y
        <a href="/es/docs/Web/API/Element#eventos_de_pantalla_completa"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gamepad</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Gamepad_API">API Gamepad</a>.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Window#eventos_de_gamepad"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestos</td>
      <td>
        <p>
          Se recomienda usar los
          <a href="/es/docs/Web/API/Touch_events">eventos táctiles</a> para
          implementar gestos.
        </p>
      </td>
      <td>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/Document#eventos_táctiles"
            ><code>Document</code></a
          >
          y
          <a href="/es/docs/Web/API/Element#eventos_táctiles"
            ><code>Element</code></a
          >.
        </p>
        <p>Además, existen varios eventos de gestos no estándar:</p>
        <ul>
          <li>
            Eventos no estándar específicos de WebKit en
            <a href="/es/docs/Web/API/Element#eventos_táctiles"
              ><code>Element</code></a
            >:
            <a href="/es/docs/Web/API/Element/gesturestart_event"
              >evento <code>gesturestart</code></a
            >,
            <a href="/es/docs/Web/API/Element/gesturechange_event"
              >evento <code>gesturechange</code></a
            >
            y
            <a href="/es/docs/Web/API/Element/gestureend_event"
              >evento <code>gestureend</code></a
            >.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>Historial</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/History_API">API del historial</a>.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Window#eventos_de_historial"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestión de la visualización del contenido de elementos HTML</td>
      <td>
        <p>
          Eventos relacionados con el cambio de estado de un elemento de
          visualización o de texto.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/HTMLDetailsElement"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/es/docs/Web/API/HTMLDialogElement"
          ><code>HTMLDialogElement</code></a
        >
        y
        <a href="/es/docs/Web/API/HTMLSlotElement"
          ><code>HTMLSlotElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Entradas</td>
      <td>
        <p>
          Eventos relacionados con los elementos de entrada de HTML, por
          ejemplo {{HTMLElement("input")}}, {{HTMLElement("select")}} o
          {{HTMLElement("textarea")}}.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/HTMLElement"
          ><code>HTMLElement</code></a
        >
        y
        <a href="/es/docs/Web/API/HTMLInputElement#eventos"
          ><code>HTMLInputElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Teclado</td>
      <td>
        <p>
          Eventos relacionados con el uso de un
          <a href="/es/docs/Web/API/KeyboardEvent">teclado</a>.
        </p>
        <p>
          Avisan cuando se presiona una tecla, se suelta o simplemente se
          pulsa.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_de_teclado"
          ><code>Document</code></a
        >
        y
        <a href="/es/docs/Web/API/Element#eventos_de_teclado"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Carga y descarga de documentos</td>
      <td>
        <p>Eventos relacionados con la carga y la descarga de documentos.</p>
      </td>
      <td>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/Document#eventos_de_carga_y_descarga"
            ><code>Document</code></a
          >
          y
          <a href="/es/docs/Web/API/Window#eventos_de_carga_y_descarga"
            ><code>Window</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Manifiestos</td>
      <td>
        <p>
          Eventos relacionados con la instalación de
          <a href="/es/docs/Web/Progressive_web_apps/Manifest"
            >manifiestos de aplicaciones web progresivas</a
          >.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Window#eventos_de_manifiesto"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr id="media">
      <td>Multimedia</td>
      <td>
        <p>
          Eventos relacionados con el uso de contenido multimedia (incluidas la
          <a href="/es/docs/Web/API/Media_Capture_and_Streams_API#eventos"
            >API de Media Capture and Streams</a
          >, la
          <a href="/es/docs/Web/API/Web_Audio_API">API Web Audio</a>, la
          <a href="/es/docs/Web/API/Picture-in-Picture_API"
            >API Picture-in-Picture</a
          >, etc.).
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/ScriptProcessorNode"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/es/docs/Web/API/HTMLMediaElement#eventos"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/es/docs/Web/API/AudioTrackList"
          ><code>AudioTrackList</code></a
        >,
        <a href="/es/docs/Web/API/AudioScheduledSourceNode"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/es/docs/Web/API/MediaRecorder"
          ><code>MediaRecorder</code></a
        >,
        <a href="/es/docs/Web/API/MediaStream"
          ><code>MediaStream</code></a
        >,
        <a href="/es/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/es/docs/Web/API/VideoTrackList"
          ><code>VideoTrackList</code></a
        >,
        <a href="/es/docs/Web/API/HTMLTrackElement"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/es/docs/Web/API/OfflineAudioContext"
          ><code>OfflineAudioContext</code></a
        >,
        <a href="/es/docs/Web/API/TextTrack#eventos"><code>TextTrack</code></a
        >,
        <a href="/es/docs/Web/API/TextTrackList"
          ><code>TextTrackList</code></a
        >,
        <a href="/es/docs/Web/HTML/Reference/Elements/audio#eventos">Element/audio</a>
        y
        <a href="/es/docs/Web/HTML/Reference/Elements/video#eventos">Element/video</a>.
      </td>
    </tr>
    <tr>
      <td>Mensajería</td>
      <td>
        <p>
          Eventos relacionados con una ventana que recibe un mensaje de otro
          contexto de navegación.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Window#eventos_de_mensajería"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Ratón</td>
      <td>
        <p>
          Eventos relacionados con el uso de un
          <a href="/es/docs/Web/API/MouseEvent">ratón</a>.
        </p>
        <p>
          Se utilizan para notificar acciones como hacer clic, doble clic,
          presionar y soltar botones, hacer clic con el botón derecho, movimiento
          dentro y fuera de un elemento, selección de texto, etc.
        </p>
        <p>
          Los eventos de puntero ofrecen una alternativa independiente del
          hardware a los eventos de ratón. Los eventos de arrastre y de rueda
          derivan de los eventos de ratón.
        </p>
      </td>
      <td>
        Eventos de ratón que se disparan en
        <a href="/es/docs/Web/API/Element#eventos_de_ratón"
          ><code>Element</code></a
        >
      </td>
    </tr>
    <tr>
      <td>Red y conexión</td>
      <td>
        <p>
          Eventos relacionados con el establecimiento y la pérdida de la
          conexión de red.
        </p>
      </td>
      <td>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/Window#eventos_de_conexión"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/NetworkInformation"
            ><code>NetworkInformation</code></a
          >
          (<a href="/es/docs/Web/API/Network_Information_API"
            >API Network Information</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td>Pagos</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Payment_Request_API"
            >API Payment Request</a
          >.
        </p>
      </td>
      <td>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/PaymentRequest"
            ><code>PaymentRequest</code></a
          >
          y
          <a href="/es/docs/Web/API/PaymentResponse"
            ><code>PaymentResponse</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Rendimiento</td>
      <td>
        <p>
          Eventos relacionados con cualquier especificación de rendimiento
          incluida en las
          <a href="/es/docs/Web/API/Performance_API">API de rendimiento</a>.
        </p>
      </td>
      <td>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/Performance#eventos"
            ><code>Performance</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Puntero</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Pointer_events">API de eventos de puntero</a>.
        </p>
        <p>
          Ofrece notificaciones independientes del hardware procedentes de
          dispositivos señaladores, como el ratón, la pantalla táctil o el
          lápiz óptico.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_de_puntero"
          ><code>Document</code></a
        >
        y
        <a href="/es/docs/Web/API/HTMLElement"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Impresión</td>
      <td><p>Eventos relacionados con la impresión.</p></td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Window#eventos_de_impresión"><code>Window</code></a>.
      </td>
    </tr>
    <tr>
      <td>Rechazo de promesas</td>
      <td>
        <p>
          Eventos que se envían al contexto global del script cuando se rechaza
          cualquier promesa de JavaScript.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Window#eventos_de_rechazo_de_promesas"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/WebSockets_API">API WebSockets</a>.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/WebSocket#eventos"><code>WebSocket</code></a>.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Eventos relacionados con las imágenes SVG.</p></td>
      <td>
        <p>
          Eventos que se disparan en
          <a href="/es/docs/Web/API/SVGElement"
            ><code>SVGElement</code></a
          >,
          <a href="/es/docs/Web/API/SVGAnimationElement"
            ><code>SVGAnimationElement</code></a
          >
          y
          <a href="/es/docs/Web/API/SVGGraphicsElement"
            ><code>SVGGraphicsElement</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Selección de texto</td>
      <td>
        <p>
          Eventos de la
          <a href="/es/docs/Web/API/Selection">API Selection</a> relacionados
          con la selección de texto.
        </p>
      </td>
      <td>
        <p>
          Evento (<code>selectionchange</code>) que se dispara en
          {{domxref("HTMLTextAreaElement/selectionchange_event", "HTMLTextAreaElement")}}
          y
          {{domxref("HTMLInputElement/selectionchange_event", "HTMLInputElement")}}.
        </p>
      </td>
    </tr>
    <tr>
      <td>Táctil</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Touch_events">API de eventos táctiles</a>.
        </p>
        <p>
          Ofrece eventos de notificación al interactuar con una pantalla táctil
          (es decir, con un dedo o un lápiz). No guarda relación con la
          <a href="/es/docs/Web/API/Force_Touch_events"
            >API Force Touch</a
          >.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/Document#eventos_táctiles"
          ><code>Document</code></a
        >
        y
        <a href="/es/docs/Web/API/Element#eventos_táctiles"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Realidad virtual</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/WebXR_Device_API">API WebXR Device</a>.
        </p>
        <div class="notecard warning">
          <p>
            <strong>Advertencia:</strong> La
            <a href="/es/docs/Web/API/WebVR_API">API WebVR</a> y los
            <a href="/es/docs/Web/API/WebVR_API#eventos_de_window"
              >eventos de <code>Window</code></a
            >
            asociados están obsoletos.
          </p>
        </div>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/XRSystem"><code>XRSystem</code></a
        >,
        <a href="/es/docs/Web/API/XRSession"><code>XRSession</code></a
        >
        y
        <a href="/es/docs/Web/API/XRReferenceSpace"
          ><code>XRReferenceSpace</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>RTC (comunicación en tiempo real)</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/WebRTC_API">API WebRTC</a>.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/RTCDataChannel"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/es/docs/Web/API/RTCDTMFSender"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/es/docs/Web/API/RTCIceTransport"
          ><code>RTCIceTransport</code></a
        >
        y
        <a href="/es/docs/Web/API/RTCPeerConnection#eventos"
          ><code>RTCPeerConnection</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Eventos enviados por el servidor</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Server-sent_events"
            >API de eventos enviados por el servidor</a
          >.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/EventSource#eventos"
          ><code>EventSource</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Voz</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Web_Speech_API">API Web Speech</a>.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/SpeechSynthesisUtterance"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Eventos relacionados con la
          <a href="/es/docs/Web/API/Web_Workers_API">API Web Workers</a>, la
          <a href="/es/docs/Web/API/Service_Worker_API">API Service Worker</a>,
          la
          <a href="/es/docs/Web/API/Broadcast_Channel_API"
            >API Broadcast Channel</a
          >
          y la
          <a href="/es/docs/Web/API/Channel_Messaging_API"
            >API Channel Messaging</a
          >.
        </p>
        <p>
          Sirven para responder a mensajes nuevos y a errores en el envío de
          mensajes. Los service workers también pueden recibir otros eventos,
          como notificaciones push, clics de los usuarios en las notificaciones
          mostradas, la invalidación de una suscripción push, la eliminación de
          elementos del índice de contenido, etc.
        </p>
      </td>
      <td>
        Eventos que se disparan en
        <a href="/es/docs/Web/API/ServiceWorkerGlobalScope"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/es/docs/Web/API/DedicatedWorkerGlobalScope"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/es/docs/Web/API/SharedWorkerGlobalScope"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/es/docs/Web/API/WorkerGlobalScope"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/es/docs/Web/API/Worker#eventos"><code>Worker</code></a
        >,
        <a href="/es/docs/Web/API/BroadcastChannel"
          ><code>BroadcastChannel</code></a
        >
        y
        <a href="/es/docs/Web/API/MessagePort"
          ><code>MessagePort</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Crear y despachar eventos

Además de los eventos disparados por las interfaces integradas, puedes crear y despachar eventos del DOM por tu cuenta. Estos eventos se denominan comúnmente _eventos sintéticos_, en contraposición a los eventos disparados por el navegador.

### Crear eventos personalizados

Los eventos se pueden crear con el constructor [`Event`](/es/docs/Web/API/Event) de esta manera:

```js
const event = new Event("build");

// Escucha el evento.
elem.addEventListener("build", (e) => {
  /* … */
});

// Despacha el evento.
elem.dispatchEvent(event);
```

Este ejemplo de código usa el método [EventTarget.dispatchEvent()](/es/docs/Web/API/EventTarget/dispatchEvent).

### Añadir datos personalizados: CustomEvent()

Para añadir más datos al objeto del evento existe la interfaz [CustomEvent](/es/docs/Web/API/CustomEvent), cuya propiedad **detail** permite pasar datos personalizados.
Por ejemplo, el evento podría crearse así:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Así podrás acceder a los datos adicionales desde el detector de eventos:

```js
function eventHandler(e) {
  console.log(`La hora es: ${e.detail}`);
}
```

### Añadir datos personalizados: crear una subclase de Event

La interfaz [`Event`](/es/docs/Web/API/Event) también permite crear subclases. Esto resulta especialmente útil para la reutilización, para manejar datos personalizados más complejos o incluso para añadir métodos al evento.

```js
class BuildEvent extends Event {
  #buildTime;

  constructor(buildTime) {
    super("build");
    this.#buildTime = buildTime;
  }

  get buildTime() {
    return this.#buildTime;
  }
}
```

Este ejemplo de código define una clase `BuildEvent` con una propiedad de solo lectura y un tipo de evento fijo.

Después, el evento se podría crear así:

```js
const event = new BuildEvent(elem.dataset.time);
```

Los datos adicionales se pueden leer entonces en los detectores de eventos mediante las propiedades personalizadas:

```js
function eventHandler(e) {
  console.log(`La hora es: ${e.buildTime}`);
}
```

### Burbujeo de eventos

A menudo conviene disparar un evento desde un elemento hijo y que lo capture un ancestro; opcionalmente, puedes incluir datos con el evento:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Crea un evento nuevo, permite el burbujeo y proporciona los datos que quieras pasar a la propiedad "detail"
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// El elemento form escucha el evento personalizado "awesome" y luego muestra en la consola el resultado del método text() que se le pasó
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// Mientras el usuario escribe, el textarea dentro del formulario despacha (dispara) el evento, usando el propio textarea como punto de partida
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Crear y despachar eventos de forma dinámica

Los elementos pueden escuchar eventos que aún no se han creado:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

form.addEventListener("awesome", (e) => console.log(e.detail.text()));

textarea.addEventListener("input", function () {
  // Crea y despacha (dispara) un evento al vuelo
  // Nota: opcionalmente, también hemos usado una "expresión de función" (en lugar de una "expresión de función flecha") para que "this" represente al elemento
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Disparar eventos integrados

Este ejemplo muestra cómo simular un clic (es decir, generar un evento de clic mediante código) en una casilla de verificación con métodos del DOM. [Mira el ejemplo en acción.](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html)

<!-- cSpell:ignore cancelled -->

```js
function simulateClick() {
  const event = new MouseEvent("click", {
    view: window,
    bubbles: true,
    cancelable: true,
  });
  const cb = document.getElementById("checkbox");
  const cancelled = !cb.dispatchEvent(event);

  if (cancelled) {
    // Un manejador llamó a preventDefault.
    alert("cancelado");
  } else {
    // Ningún manejador llamó a preventDefault.
    alert("no cancelado");
  }
}
```

## Registrar manejadores de eventos

Hay dos formas recomendadas de registrar manejadores. El código de un manejador de eventos puede ejecutarse cuando se dispara un evento, ya sea asignándolo a la propiedad _onevent_ correspondiente del elemento de destino o registrándolo como detector del elemento con el método {{domxref("EventTarget.addEventListener", "addEventListener()")}}. En ambos casos, el manejador recibirá un objeto que implementa la [interfaz `Event`](/es/docs/Web/API/Event) (o una [interfaz derivada](/es/docs/Web/API/Event#interfaces_basadas_en_event)). La diferencia principal es que, con los métodos de los detectores de eventos, se pueden añadir (o quitar) varios manejadores.

> [!WARNING]
> Existe un tercer enfoque para definir manejadores de eventos, el de los atributos HTML onevent, ¡pero no se recomienda! Inflan el marcado, lo hacen menos legible y dificultan la depuración. Para más información, consulta [manejadores de eventos en línea](/es/docs/Learn_web_development/Core/Scripting/Events#manejadores_de_eventos_en_línea_no_utilices_estos).

### Usar las propiedades onevent

Por convención, los objetos de JavaScript que disparan eventos tienen las propiedades "onevent" correspondientes (cuyo nombre se forma anteponiendo "on" al nombre del evento). Estas propiedades se invocan para ejecutar el código del manejador asociado cuando se dispara el evento, y también puede invocarlas directamente tu propio código.

Para definir el código de un manejador de eventos, basta con asignarlo a la propiedad onevent adecuada. Solo se puede asignar un manejador de eventos por cada evento en un elemento. Si hace falta, se puede reemplazar el manejador asignando otra función a la misma propiedad.

El siguiente ejemplo muestra cómo asignar una función `greet()` al evento `click` mediante la propiedad `onclick`.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Ten en cuenta que al manejador de eventos se le pasa como primer argumento un objeto que representa el evento. Este objeto implementa la interfaz {{domxref("Event")}} o deriva de ella.

### EventTarget.addEventListener

La forma más flexible de definir un manejador de eventos en un elemento es usar el método {{domxref("EventTarget.addEventListener")}}. Este enfoque permite asignar varios detectores a un elemento y, si es necesario, _eliminarlos_ con {{domxref("EventTarget.removeEventListener")}}.

> [!NOTE]
> Poder añadir y eliminar manejadores de eventos permite, por ejemplo, que un mismo botón realice acciones distintas según las circunstancias. Además, en programas más complejos, eliminar los manejadores antiguos o que ya no se usan puede mejorar la eficiencia.

El siguiente ejemplo muestra cómo definir una función `greet()` como detector (o manejador de eventos) del evento `click` (si lo prefieres, puedes usar una expresión de función anónima en lugar de una función con nombre). Recuerda de nuevo que el evento se pasa como primer argumento al manejador de eventos.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

El método también acepta argumentos u opciones adicionales para controlar cómo se capturan y se quitan los eventos. Encontrarás más información en la página de referencia de {{domxref("EventTarget.addEventListener")}}.

#### Usar AbortSignal

Una característica destacable de los detectores de eventos es que se puede usar una señal de aborto para limpiar varios manejadores de eventos a la vez.

Para ello, pasa el mismo {{domxref("AbortSignal")}} a la llamada a {{domxref("EventTarget/addEventListener()", "addEventListener()")}} de todos los manejadores de eventos que quieras poder quitar juntos. Después, llama a {{domxref("AbortController/abort()", "abort()")}} en el controlador que posee ese `AbortSignal` y se quitarán todos los manejadores que se añadieron con esa señal. Por ejemplo, así se añade un manejador de eventos que podremos quitar con un `AbortSignal`:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // pasa un AbortSignal a este manejador
```

Después, este manejador de eventos se puede quitar así:

```js
controller.abort(); // quita todos los manejadores de eventos asociados a este controlador
```

### Interacción entre varios manejadores de eventos

La propiedad IDL `onevent` (por ejemplo, `element.onclick = ...`) y el atributo de contenido HTML `onevent` (por ejemplo, `<button onclick="...">`) apuntan al mismo y único espacio para un manejador. El HTML se carga antes de que JavaScript pueda acceder al mismo elemento, así que normalmente JavaScript reemplaza lo que se haya especificado en HTML. Los manejadores añadidos con {{domxref("EventTarget.addEventListener", "addEventListener()")}} son independientes: usar `onevent` no elimina ni reemplaza los detectores añadidos con `addEventListener()`, y viceversa.

Cuando se despacha un evento, los detectores se invocan por fases. Hay dos: _captura_ y _burbujeo_. En la fase de captura, el evento parte del elemento ancestro más alto y desciende por el árbol DOM hasta llegar al objetivo. En la fase de burbujeo, el evento se mueve en sentido contrario. Por defecto, los detectores de eventos escuchan en la fase de burbujeo, pero pueden escuchar en la de captura si se especifica `capture: true` en `addEventListener()`. Dentro de una misma fase, los detectores se ejecutan en el orden en que se registraron. El manejador `onevent` se registra la primera vez que deja de ser nulo; las reasignaciones posteriores solo cambian la función que se ejecuta, no su posición en el orden.

Llamar a {{domxref("Event.stopPropagation()")}} impide que se invoquen los detectores de los demás elementos que queden más adelante en la cadena de propagación. {{domxref("Event.stopImmediatePropagation()")}} impide además que se invoquen los detectores restantes del mismo elemento.

## Especificaciones

{{Specifications}}

## Véase también

- [Introducción a los eventos](/es/docs/Learn_web_development/Core/Scripting/Events)
- [Burbujeo de eventos](/es/docs/Learn_web_development/Core/Scripting/Event_bubbling)
