---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
l10n:
  sourceCommit: 50ed08d7b506c19b7d073b05ea1e02a15f276878
---

{{APIRef('WebRTC')}}

La interfaz **`RTCPeerConnection`** representa una conexión WebRTC entre la computadora local y un par remoto. Proporciona métodos para conectarse a un par remoto, mantener y monitorear la conexión y cerrar la conexión una vez que ya no se necesita.

{{InheritanceDiagram}}

## Constructor

- {{DOMxRef("RTCPeerConnection.RTCPeerConnection", "RTCPeerConnection()")}}
  - : Devuelve un `RTCPeerConnection` recién creado, que representa una conexión entre el dispositivo local y un par remoto.

## Propiedades de instancia

_También hereda propiedades de {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCPeerConnection.canTrickleIceCandidates", "canTrickleIceCandidates")}} {{ReadOnlyInline}}
  - : Devuelve un valor booleano que indica si el par remoto puede aceptar o no [candidatos _trickled ICE_](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice).
- {{DOMxRef("RTCPeerConnection.connectionState", "connectionState")}} {{ReadOnlyInline}}
  - : Indica el estado actual de la conexión entre pares devolviendo una de las cadenas `new`, `connecting`, `connected`, `disconnected`, `failed` o `closed`.
- {{DOMxRef("RTCPeerConnection.currentLocalDescription", "currentLocalDescription")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("RTCSessionDescription")}} que describe el extremo local de la conexión tal como se negoció con éxito más recientemente desde la última vez que esta `RTCPeerConnection` terminó de negociar y conectarse a un par remoto.
    También se incluye una lista de los candidatos de ICE que ya puede haber generado el agente de ICE desde que se instanciaron por primera vez la oferta o respuesta representada por la descripción.
- {{DOMxRef("RTCPeerConnection.currentRemoteDescription", "currentRemoteDescription")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("RTCSessionDescription")}} que describe el extremo remoto de la conexión tal como se negoció con éxito más recientemente desde la última vez que `RTCPeerConnection` terminó de negociar y conectarse a un par remoto.
    También se incluye una lista de los candidatos de ICE que ya puede haber generado el agente de ICE desde que se instanciaron por primera vez la oferta o respuesta representada por la descripción.
- {{DOMxRef("RTCPeerConnection.iceConnectionState", "iceConnectionState")}} {{ReadOnlyInline}}
  - : Devuelve una cadena cuyo estado del agente ICE asociado con este RTCPeerConnection.
    Puede ser uno de los siguientes valores: `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` o `closed`.
- {{DOMxRef("RTCPeerConnection.iceGatheringState", "iceGatheringState")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que describe el estado de recopilación de ICE de la conexión. Esto le permite detectar, por ejemplo, cuándo finalizó la recopilación de candidatos de ICE.
    Los valores posibles son: `new`, `gathering` o `complete`.
- {{DOMxRef("RTCPeerConnection.localDescription", "localDescription")}} {{ReadOnlyInline}}
  - : Devuelve un {{DOMxRef("RTCSessionDescription")}} que describe la sesión para el extremo local de la conexión. Si aún no se ha configurado, devuelve `null`.
- {{DOMxRef("RTCPeerConnection.peerIdentity", "peerIdentity")}} {{ReadOnlyInline}}.
  - : Devuelve una {{jsxref("Promise","Promesa")}} que se resuelve en un {{DOMxRef("RTCIdentityAssertion")}} que contiene una cadena que identifica al par remoto. Una vez que esta promesa se resuelve con éxito, la identidad resultante es la identidad del par de destino y no cambiará durante la duración de la conexión.
- {{DOMxRef("RTCPeerConnection.pendingLocalDescription", "pendingLocalDescription")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("RTCSessionDescription")}} que describe un cambio de configuración pendiente para el extremo local de la conexión. Esto no describe la conexión tal como está actualmente, sino como puede existir en un futuro próximo.
- {{DOMxRef("RTCPeerConnection.pendingRemoteDescription", "pendingRemoteDescription")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("RTCSessionDescription")}} que describe un cambio de configuración pendiente para el extremo remoto de la conexión. Esto no describe la conexión tal como está actualmente, sino como puede existir en un futuro próximo.
- {{DOMxRef("RTCPeerConnection.remoteDescription", "remoteDescription")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("RTCSessionDescription")}} que describe la sesión, incluida la configuración y la información multimedia, para el extremo remoto de la conexión. Si aún no se ha establecido, devuelve `null`.
- {{DOMxRef("RTCPeerConnection.sctp", "sctp")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{DOMxRef("RTCSctpTransport")}} que describe la capa de transporte {{Glossary("SCTP")}} sobre la que se envían y reciben los datos SCTP. Si no se ha negociado SCTP, este valor es `null`.
- {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que describe el estado del proceso de señalización en el extremo local de la conexión mientras se conecta o se vuelve a conectar a otro par. Es uno de los siguientes valores: `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer`, `have-remote-pranswer` o `closed`.

## Métodos estáticos

- {{DOMxRef("RTCPeerConnection.generateCertificate", "generateCertificate()")}}
  - : Crea un certificado X.509 y su clave privada correspondiente, devolviendo una {{jsxref("Promise","Promesa")}} que se resuelve con el nuevo {{DOMxRef("RTCCertificate")}} una vez que se genera.

## Métodos de instancia

_También hereda métodos de {{DOMxRef("EventTarget")}}._

- {{DOMxRef("RTCPeerConnection.addIceCandidate", "addIceCandidate()")}}
  - : Agrega un nuevo candidato remoto a la descripción remota de `RTCPeerConnection`, que describe el estado del extremo remoto de la conexión.
- {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}}
  - : Agrega un nuevo {{DOMxRef("MediaStreamTrack")}} al conjunto de pistas que se transmitirán al otro par.
- {{DOMxRef("RTCPeerConnection.addTransceiver", "addTransceiver()")}}
  - : Crea un nuevo {{DOMxRef("RTCRtpTransceiver")}} y lo agrega al conjunto de transceptores asociados con la conexión. Cada transceptor representa un flujo bidireccional, con {{DOMxRef("RTCRtpSender")}} y {{DOMxRef("RTCRtpReceiver")}} asociados con él.
- {{DOMxRef("RTCPeerConnection.close", "close()")}}
  - : Cierra la conexión de pares actual.
- {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}}
  - : Inicia la creación de una respuesta {{Glossary("SDP")}} a una oferta recibida de un par remoto durante la negociación de oferta/respuesta de una conexión WebRTC.
    La respuesta contiene información sobre cualquier medio ya adjunto a la sesión, códecs y opciones compatibles con el navegador, y cualquier candidato {{Glossary("ICE")}} ya recopilado.
- {{DOMxRef("RTCPeerConnection.createDataChannel", "createDataChannel()")}}
  - : Inicia la creación de un nuevo canal vinculado con el par remoto, sobre el cual se puede transmitir cualquier tipo de datos. Esto puede ser útil para contenido de canal secundario, como imágenes, transferencia de archivos, chat de texto, paquetes de actualización de juegos, etc.
- {{DOMxRef("RTCPeerConnection.createOffer", "createOffer()")}}
  - : Inicia la creación de una oferta de {{Glossary("SDP")}} con el fin de iniciar una nueva conexión WebRTC a un interlocutor remoto.
    La oferta de SDP incluye información sobre cualquier objeto {{DOMxRef("MediaStreamTrack")}} ya adjunto a la sesión, el códec y las opciones de WebRTC admitidos por el navegador, así como cualquier candidato ya recopilado por el agente {{Glossary("ICE")}}, con el fin de ser enviado por el canal de señalización a un posible par para solicitar una conexión o actualizar la configuración de una conexión existente.
- {{DOMxRef("RTCPeerConnection.getConfiguration", "getConfiguration()")}}
  - : Devuelve un objeto que indica la configuración actual de la conexión.
- {{DOMxRef("RTCPeerConnection.getIdentityAssertion", "getIdentityAssertion()")}}
  - : Inicia la recopilación de una afirmación de identidad y devuelve una {{jsxref("Promise","Promesa")}} que se resuelve en una afirmación de identidad codificada como una cadena. Esto tiene efecto solo si {{DOMxRef("RTCPeerConnection.signalingState", "signalingState")}} no es `closed`.
- {{DOMxRef("RTCPeerConnection.getReceivers", "getReceivers()")}}
  - : Devuelve un arreglo de objetos {{DOMxRef("RTCRtpReceiver")}}, cada uno de los cuales representa un receptor {{Glossary("RTP")}}.
- {{DOMxRef("RTCPeerConnection.getSenders", "getSenders()")}}
  - : Devuelve un arrreglo de objetos {{DOMxRef("RTCRtpSender")}}, cada uno de los cuales representa el remitente {{Glossary("RTP")}} responsable de transmitir los datos de una pista.
- {{DOMxRef("RTCPeerConnection.getStats", "getStats()")}}
  - : Devuelve una {{jsxref("Promise","Promesa")}} que se resuelve con datos que proporcionan estadísticas sobre la conexión general o sobre el {{DOMxRef("MediaStreamTrack")}} especificado.
- {{DOMxRef("RTCPeerConnection.getTransceivers", "getTransceivers()")}}
  - : Devuelve una lista de todos los objetos {{DOMxRef("RTCRtpTransceiver")}} que se utilizan para enviar y recibir datos en la conexión.
- {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}}
  - : Le dice al extremo local de la conexión que deje de enviar medios desde la pista especificada, sin eliminar realmente el {{DOMxRef("RTCRtpSender")}} correspondiente de la lista de remitentes según lo informado por {{DOMxRef("RTCPeerConnection.getSenders", " getSenders()")}}. Si la pista ya está detenida o no está en la lista de remitentes de la conexión, este método no tiene efecto.
- {{DOMxRef("RTCPeerConnection.restartIce", "restartIce()")}}
  - : Permite solicitar fácilmente que la recopilación de candidatos ICE se rehaga en ambos extremos de la conexión. Esto simplifica el proceso al permitir que la persona que llama o el receptor utilicen el mismo método para activar un reinicio {{Glossary("ICE")}}.
- {{DOMxRef("RTCPeerConnection.setConfiguration", "setConfiguration()")}}
  - : Establece la configuración actual de la conexión en función de los valores incluidos en el objeto especificado. Esto le permite cambiar los servidores {{Glossary("ICE")}} utilizados por la conexión y qué políticas de transporte utilizar.
- {{DOMxRef("RTCPeerConnection.setIdentityProvider", "setIdentityProvider()")}}
  - : Establece el proveedor de identidad (IdP) en el triplete dado en el parámetro: su nombre, el protocolo utilizado para comunicarse con él y un nombre de usuario. El protocolo y el nombre de usuario son opcionales.
- {{DOMxRef("RTCPeerConnection.setLocalDescription", "setLocalDescription()")}}
  - : Cambia la descripción local asociada con la conexión. Esta descripción especifica las propiedades del extremo local de la conexión, incluido el formato de medios.
    Devuelve una {{jsxref("Promise","Promesa")}} que se cumple una vez que se ha cambiado la descripción, de forma asíncrona.
- {{DOMxRef("RTCPeerConnection.setRemoteDescription", "setRemoteDescription()")}}
  - : Establece la descripción de la sesión especificada como la oferta o respuesta actual del interlocutor remoto. La descripción especifica las propiedades del extremo remoto de la conexión, incluido el formato de medios.
    Devuelve una {{jsxref("Promise","Promesa")}} que se cumple una vez que se ha cambiado la descripción, de forma asíncrona.

### Métodos obsoletos

- {{DOMxRef("RTCPeerConnection.addStream", "addStream()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Agrega un {{DOMxRef("MediaStream")}} como fuente local de audio o video. En lugar de usar este método obsoleto, debe usar {{DOMxRef("RTCPeerConnection.addTrack", "addTrack()")}} una vez por cada pista que desee enviar al interlocutor remoto.
- {{DOMxRef("RTCPeerConnection.createDTMFSender", "createDTMFSender()")}} {{Deprecated_Inline}}
  - : Crea un nuevo {{DOMxRef("RTCDTMFSender")}}, asociado a un {{DOMxRef("MediaStreamTrack")}} específico, que podrá enviar señalización telefónica {{Glossary("DTMF")}} a través de la conexión .
- {{DOMxRef("RTCPeerConnection.removeStream", "removeStream()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Elimina un {{DOMxRef("MediaStream")}} como fuente local de audio o video.
    Debido a que este método está obsoleto, en su lugar debe usar {{DOMxRef("RTCPeerConnection.removeTrack", "removeTrack()")}}.

## Eventos

Detecte estos eventos usando {{domxref("EventTarget.addEventListener", "addEventListener()")}} o asignando un detector de eventos a la propiedad `oneventname` de esta interfaz.

- {{domxref("RTCPeerConnection.connectionstatechange_event", "connectionstatechange")}}
  - : Enviado cuando cambia el estado general de conectividad de `RTCPeerConnection`.
- {{domxref("RTCPeerConnection.datachannel_event", "datachannel")}}
  - : Enviado cuando el par remoto agrega un {{domxref("RTCDataChannel")}} a la conexión.
- {{domxref("RTCPeerConnection.icecandidate_event", "icecandidate")}}
  - : Enviado para solicitar que el candidato especificado se transmita al par remoto.
- {{domxref("RTCPeerConnection.icecandidateerror_event", "icecandidateerror")}}
  - : Enviado a la conexión si se produjo un error durante la recopilación de candidatos {{Glossary("ICE")}}. El evento describe el error.
- {{domxref("RTCPeerConnection.iceconnectionstatechange_event", "iceconnectionstatechange")}}
  - : Se envía cuando cambia el estado de la conexión {{Glossary("ICE")}}, como cuando se desconecta.
- {{domxref("RTCPeerConnection.icegatheringstatechange_event", "icegatheringstatechange")}}
  - : Se envía cuando cambia el estado de recopilación de la capa {{Glossary("ICE")}}, reflejado por {{domxref("RTCPeerConnection.iceGatheringState", "iceGatheringState")}}.
    Esto indica si la negociación de ICE aún no ha comenzado (`new`), ha comenzado a reunir candidatos (`gathering`) o ha finalizado (`complete`).
- {{domxref("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}}
  - : Enviado cuando es necesario realizar la negociación o renegociación de la conexión {{Glossary("ICE")}}; esto puede suceder tanto cuando se abre una conexión por primera vez como cuando es necesario adaptarse a las condiciones cambiantes de la red. El receptor debe responder creando una oferta y enviándola al otro par.
- {{domxref("RTCPeerConnection.signalingstatechange_event", "signalingstatechange")}}
  - : Se envía cuando cambia el estado de señalización del {{Glossary("ICE")}} de la conexión.
- {{domxref("RTCPeerConnection.track_event", "track")}}
  - : Enviado después de que se haya agregado una nueva pista a una de las instancias {{domxref("RTCRtpReceiver")}} que componen la conexión.

### Eventos obsoletos

- {{domxref("RTCPeerConnection.addstream_event", "addstream")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Enviado cuando se agrega un nuevo {{domxref("MediaStream")}} a la conexión. En lugar de detectar este evento obsoleto, debe detectar los eventos {{domxref("RTCPeerConnection.track_event", "track")}}; se envía uno por cada {{domxref("MediaStreamTrack")}} agregado a la conexión.
- {{domxref("RTCPeerConnection.removestream_event", "removestream")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Enviado cuando se elimina un {{domxref("MediaStream")}} de la conexión. En lugar de detectar este evento obsoleto, debe detectar los eventos {{domxref("MediaStream.removetrack_event", "removetrack")}} en cada transmisión.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}

## Véase también

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [Comience con WebRTC](https://web.dev/webrtc-basics/)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom): Captura de video HTML Node.js, aplicación de intercambio de archivos y video entre pares ([fuente en GitHub](https://github.com/chrisjohndigital/TutorRoom))
