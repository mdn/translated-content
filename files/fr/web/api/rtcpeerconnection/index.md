---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
translation_of: Web/API/RTCPeerConnection
browser-compat: api.RTCPeerConnection
---
{{APIRef('WebRTC')}}

L'interface **`RTCPeerConnection`** représente une connexion WebRTC entre un ordinateur local et un pair distant. Elle fournit des méthodes pour se connecter à un pair distant, entretenir et surveiller la connexion et fermer la connexion dès qu'elle n'est plus nécessaire.

{{InheritanceDiagram}}

## Constructeur

- [`RTCPeerConnection()`](/fr/docs/Web/API/RTCPeerConnection/RTCPeerConnection)
  - : Renvoie un nouvel objet `RTCPeerConnection` qui représente la connexion entre l'appareil local et le pair distant.

## Méthodes statiques

- [`generateCertificate()`](/fr/docs/Web/API/RTCPeerConnection/generateCertificate)
  - : Crée un certificat X.509 et la clé privée correspondante. Cette méthode renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution sera le nouvel objet [`RTCCertificate`](/fr/docs/Web/API/RTCCertificate) une fois généré.

## Propriétés

_Cette interface hérite également des propriétés de [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`canTrickleIceCandidates`](/fr/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates) {{ReadOnlyInline}}
  - : Renvoie un booléen qui indique si un pair distant peut accepter ou non [les candidats ICE au goutte-à-goutte (<i lang="en">trickled ICE candidates</i>)](https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice).
- [`connectionState`](/fr/docs/Web/API/RTCPeerConnection/connectionState) {{ReadOnlyInline}}
  - : Indique l'état actuel de la connexion au pair en renvoyant une de ces chaînes de caractères `new`, `connecting`, `connected`, `disconnected`, `failed` ou `closed`.
- [`currentLocalDescription`](/fr/docs/Web/API/RTCPeerConnection/currentLocalDescription) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSessionDescription`](/fr/docs/Web/API/RTCSessionDescription) qui décrit la partie locale de la connexion qui a été négociée avec succès le plus récemment depuis la dernière fois où cette connexion `RTCPeerConnection` a terminé de négocier et s'est connectée à un pair distant. Cet objet inclut également une liste des candidats ICE qui peuvent avoir déjà été générés par l'agent ICE depuis que l'offre ou la réponse représentée par la description a été instanciée en premier lieu.
- [`currentRemoteDescription`](/fr/docs/Web/API/RTCPeerConnection/currentRemoteDescription) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSessionDescription`](/fr/docs/Web/API/RTCSessionDescription) qui décrit la connexion pour le pair distant pour la connexion qui a été négociée avec succès le plus récemment depuis la dernière fois où cette connexion `RTCPeerConnection` a terminé de négocier et s'est connectée à un pair distant. Cet objet inclut également une liste des candidats ICE qui peuvent avoir déjà été générés par l'agent ICE depuis que l'offre ou la réponse représentée par la description a été instanciée en premier lieu.
- [`iceConnectionState`](/fr/docs/Web/API/RTCPeerConnection/iceConnectionState) {{ReadOnlyInline}}
  - : Renvoie une chaîne de caractères qui indique l'état de l'agent ICE associée à cette connexion `RTCPeerConnection`. La chaîne de caractères peut être l'une de celles-ci : `new`, `checking`, `connected`, `completed`, `failed`, `disconnected` ou `closed`.
- [`iceGatheringState`](/fr/docs/Web/API/RTCPeerConnection/iceGatheringState) {{ReadOnlyInline}}
  - : Renvoie une chaîne de caractères qui décrit l'état de collection ICE de la connexion. Cela permet de détecter par exemple lorsque la collecte des candidats ICE a terminé. Les valeurs possibles pour cette chaîne sont `new`, `gathering` ou `complete`.
- [`localDescription`](/fr/docs/Web/API/RTCPeerConnection/localDescription) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSessionDescription`](/fr/docs/Web/API/RTCSessionDescription) qui décrit la session pour la partie locale de la connexion. Si la session n'a pas encore été initialisée, renvoie `null`.
- [`peerIdentity`](/fr/docs/Web/API/RTCPeerConnection/peerIdentity) {{ReadOnlyInline}}
  - : Renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution sera un objet [`RTCIdentityAssertion`](/fr/docs/Web/API/RTCIdentityAssertion) contenant une chaîne de caractères identifiant le pair distant. Une fois que la promesse a été résolue avec succès, l'identité obtenue est celle du pair cible et ne changera pas pour la durée de la connexion.
- [`pendingLocalDescription`](/fr/docs/Web/API/RTCPeerConnection/pendingLocalDescription) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSessionDescription`](/fr/docs/Web/API/RTCSessionDescription) qui décrit un changement de configuration en attente pour la partie locale de la connexion. Cela ne décrit pas la connexion dans son état actuel mais telle qu'elle pourrait être dans un futur proche.
- [`pendingRemoteDescription`](/fr/docs/Web/API/RTCPeerConnection/pendingRemoteDescription) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSessionDescription`](/fr/docs/Web/API/RTCSessionDescription) qui décrit un changement de configuration en attente pour la partie distante de la connexion. Cela ne décrit pas la connexion dans son état actuel mais telle qu'elle pourrait être dans un futur proche.
- [`remoteDescription`](/fr/docs/Web/API/RTCPeerConnection/remoteDescription) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSessionDescription`](/fr/docs/Web/API/RTCSessionDescription) qui décrit la session, y compris la configuration, les informations sur le média pour la partie distante de la connexion. Si la session n'est pas encore initialisée, renvoie `null`.
- [`sctp`](/fr/docs/Web/API/RTCPeerConnection/sctp) {{ReadOnlyInline}}
  - : Renvoie un objet [`RTCSctpTransport`](/fr/docs/Web/API/RTCSctpTransport) qui décrit la couche de transport [SCTP](/fr/docs/Glossary/SCTP) sur laquelle les données SCTP sont envoyées et reçues. Si SCTP n'a pas été négocié, renvoie `null`.
- [`signalingState`](/fr/docs/Web/API/RTCPeerConnection/signalingState) {{ReadOnlyInline}}
  - : Renvoie une chaîne de caractères qui décrit l'état du processus de signal pour la partie locale de la connexion lors de la connexion ou de la reconnexion à un autre pair. Cette chaîne peut avoir l'une des valeurs suivantes : `stable`, `have-local-offer`, `have-remote-offer`, `have-local-pranswer` ou `have-remote-pranswer`.

### Gestionnaires d'évènements

_Cette interface hérite des gestionnaires d'évènements de [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`onconnectionstatechange`](/fr/docs/Web/API/RTCPeerConnection/onconnectionstatechange)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) appelé pour gérer l'évènement {{DOMxRef("RTCPeerConnection/connectionstatechange_event", "connectionstatechange")}}. Cet évènement se produit lorsque l'état aggrégé de la connexion évolue. L'état aggrégé correspond à la combinaison des états de l'ensemble des transports de réseau individuel utilisés par la connexion
- [`ondatachannel`](/fr/docs/Web/API/RTCPeerConnection/ondatachannel)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/datachannel_event", "datachannel")}}. Cet évènement de type [`RTCDataChannelEvent`](/fr/docs/Web/API/RTCDataChannelEvent) est envoyé lorsqu'un canal [`RTCDataChannel`](/fr/docs/Web/API/RTCDataChannel) est ajouté à la connexion par le pair distant qui a appelé [`createDataChannel()`](/fr/docs/Web/API/RTCPeerConnection/createDataChannel).
- [`onicecandidate`](/fr/docs/Web/API/RTCPeerConnection/onicecandidate)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/icecandidate_event", "icecandidate")}}. Cela se produit lorsque l'agent [ICE](/fr/docs/Glossary/ICE) local a besoin de délivrer un message à l'autre pair via le serveur de signal.
- [`onicecandidateerror`](/fr/docs/Web/API/RTCPeerConnection/onicecandidateerror)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/icecandidateerror_event", "icecandidateerror")}}. Cet évènement est déclenché lorsqu'une erreur se produit lors du processus de collecte des candidats [ICE](/fr/docs/Glossary/ICE).
- [`oniceconnectionstatechange`](/fr/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/iceconnectionstatechange_event", "iceconnectionstatechange")}}. Cela se produit lorsque l'agent [ICE](/fr/docs/Glossary/ICE) local a besoin de délivrer un message à l'autre pair via le serveur de signal.
- [`onicegatheringstatechange`](/fr/docs/Web/API/RTCPeerConnection/onicegatheringstatechange)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}. Cela se produit lorsque l'état de collecte [ICE](/fr/docs/Glossary/ICE) évolue.
- [`onnegotiationneeded`](/fr/docs/Web/API/RTCPeerConnection/onnegotiationneeded)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}. Cet évènement est déclenché lorsqu'un changement a eu lieu et qui nécessite une négociation de session. La négociation devrait être menée par le requêtant, car certaines modifications de sessions ne peuvent pas être négociés par le répondant.
- [`onsignalingstatechange`](/fr/docs/Web/API/RTCPeerConnection/onsignalingstatechange)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}}. La fonction reçoit en entrée un évènement qui est celui envoyé lorsque l'état [`signalingState`](/fr/docs/Web/API/RTCPeerConnection/signalingState) du pair de la connexion change. Cela peut avoir lieu suite à un appel à [`setLocalDescription()`](/fr/docs/Web/API/RTCPeerConnection/setLocalDescription) ou à [`setRemoteDescription()`](/fr/docs/Web/API/RTCPeerConnection/setRemoteDescription).
- [`ontrack`](/fr/docs/Web/API/RTCPeerConnection/ontrack)
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/track_event", "track")}}. L'évènement reçu en argument de la fonction est de type [`RTCTrackEvent`](/fr/docs/Web/API/RTCTrackEvent). Cet évènement est envoyé lorsqu'un nouvel objet entrant [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) a été créé et associé avec un objet [`RTCRtpReceiver`](/fr/docs/Web/API/RTCRtpReceiver) ajouté à l'ensemble des destinataires de la connexion.

### Propriétés obsolètes

- [`onaddstream`](/fr/docs/Web/API/RTCPeerConnection/onaddstream) {{deprecated_inline}}
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement obsolète {{DOMxRef("RTCPeerConnection/addstream_event", "addstream")}}.
- [`onremovestream`](/fr/docs/Web/API/RTCPeerConnection/onremovestream) {{deprecated_inline}}
  - : Un [gestionnaire d'évènements](/fr/docs/Web/Events/Event_handlers) qui définit une fonction appelée pour gérer l'évènement obsolète {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}}.

## Méthodes

_Cette interface hérite également des méthodes de [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`addIceCandidate()`](/fr/docs/Web/API/RTCPeerConnection/addIceCandidate)
  - : Ajoute un nouveau candidat distant à la description distante de `RTCPeerConnection` qui décrit l'état à l'extrémité distante de la connexion
- [`addTrack()`](/fr/docs/Web/API/RTCPeerConnection/addTrack)
  - : Ajoute un nouvel objet [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) à l'ensemble des pistes qui seront transmises au pair distant.
- [`addTransceiver()`](/fr/docs/Web/API/RTCPeerConnection/addTransceiver)
  - : Crée un nouvel objet [`RTCRtpTransceiver`](/fr/docs/Web/API/RTCRtpTransceiver) et l'ajoute à l'ensemble des émetteurs-récepteurs associés à la connexion. Chaque émetteur-récepteur représente un flux bidirectionnel associé à un récepteur [`RTCRtpSender`](/fr/docs/Web/API/RTCRtpSender) et à un émetteur [`RTCRtpReceiver`](/fr/docs/Web/API/RTCRtpReceiver).
- [`close()`](/fr/docs/Web/API/RTCPeerConnection/close)
  - : Ferme la connexion courante vers le pair.
- [`createAnswer()`](/fr/docs/Web/API/RTCPeerConnection/createAnswer)
  - : Initie la création d'une réponse [SDP](/fr/docs/Glossary/SDP) à une offre reçue par un pair distant pendant la négociation offre/réponse d'une connexion WebRTC. La réponse contient des informations sur les médias déjà attachés à la session, les codecs et options pris en charge par le navigateur ainsi que sur les éventuels candidats [ICE](/fr/docs/Glossary/ICE) déjà collectés.
- [`createDataChannel()`](/fr/docs/Web/API/RTCPeerConnection/createDataChannel)
  - : Initie la création d'un nouveau canal relié au pair distant qui permettra de transmettre tout type de données. Cela peut être utile pour le transfert de contenu en arrière-plan comme des images, fichiers, discussions, paquets pour l'état d'un jeu multijoueur, etc.
- [`createOffer()`](/fr/docs/Web/API/RTCPeerConnection/createOffer)
  - : Initie la création d'une offre [SDP](/fr/docs/Glossary/SDP) afin de démarrer une nouvelle connexion WebRTC avec un pair distant. L'offre SDP inclut des informations à propos des éventuels objets [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) déjà attachés à la session WebRTC, des codecs, des options prises en charge par le navigateur ainsi que sur les éventuels candidats déjà collectés par l'agent [ICE](/fr/docs/Glossary/ICE) afin de pouvoir envoyer ces informations via le canal de signalement à un pair potentiel pour demander une connexion ou mettre à jour la configuration d'une connexion existante.
- [`getConfiguration()`](/fr/docs/Web/API/RTCPeerConnection/getConfiguration)
  - : Renvoie un objet [`RTCConfiguration`](/fr/docs/Web/API/RTCConfiguration) qui indique la configuration courante de la connexion.
- [`getIdentityAssertion()`](/fr/docs/Web/API/RTCPeerConnection/getIdentityAssertion)
  - : Initie la collecte d'une assertion d'identité et renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolue en l'assertion d'identité encodée dans une chaîne de caractères. Cette méthode aura un effet uniquement si [`signalingState`](/fr/docs/Web/API/RTCPeerConnection/signalingState) ne vaut pas `closed`.
- [`getReceivers()`](/fr/docs/Web/API/RTCPeerConnection/getReceivers)
  - : Renvoie un tableu d'objets [`RTCRtpReceiver`](/fr/docs/Web/API/RTCRtpReceiver) dont chacun représente un récepteur [RTP](/fr/docs/Glossary/RTP).
- [`getSenders()`](/fr/docs/Web/API/RTCPeerConnection/getSenders)
  - : Renvoie un tableau d'objets [`RTCRtpSender`](/fr/docs/Web/API/RTCRtpSender) dont chacun représente un émetteur [RTP](/fr/docs/Glossary/RTP) dont le rôle est de transmettre les données d'une piste.
- [`getStats()`](/fr/docs/Web/API/RTCPeerConnection/getStats)
  - : Renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) dont la valeur de résolution sont des statistiques quant à la connexion globale ou à la piste [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) indiquée.
- [`getTransceivers()`](/fr/docs/Web/API/RTCPeerConnection/getTransceivers)
  - : Renvoie une liste de l'ensemble des objets [`RTCRtpTransceiver`](/fr/docs/Web/API/RTCRtpTransceiver) utilisés afin d'envoyer et de recevoir des données sur la connexion.
- [`removeTrack()`](/fr/docs/Web/API/RTCPeerConnection/removeTrack)
  - : Indique à la partie locale de la connexion d'arrêter d'envoyer des médias sur la piste indiquée sans pour autant retirer l'objet [`RTCRtpSender`](/fr/docs/Web/API/RTCRtpSender) correspondant de la liste des récepteurs telle que fournie par [`getSenders()`](/fr/docs/Web/API/RTCPeerConnection/getSenders). Si la piste est déjà arrêtée ou si elle n'est pas dans la liste des émetteurs de la connexion, cette méthode n'a pas d'effet.
- [`restartIce()`](/fr/docs/Web/API/RTCPeerConnection/restartIce)
  - : Permet de demander facilement une nouvelle collecte de candidats ICE à chaque extrémité de la connexion. Cela simplifie le processus en permettant à l'appelant ou au recevant d'utiliser la même méthode pour déclencher un redémarrage [ICE](/fr/docs/Glossary/ICE).
- [`setConfiguration()`](/fr/docs/Web/API/RTCPeerConnection/setConfiguration)
  - : Définit la configuration courante de la connexion en fonction des valeurs incluses dans l'objet [`RTCConfiguration`](/fr/docs/Web/API/RTCConfiguration) passé en argument. Cela permet de modifier les serveurs [ICE](/fr/docs/Glossary/ICE) utilisés par la connexion ainsi que les règles de transport utilisées.
- [`setIdentityProvider()`](/fr/docs/Web/API/RTCPeerConnection/setIdentityProvider)

  - : Définit le fournisseur d'identité (

    <i lang="en">Identity Provider</i>

    ou IdP) par le triplet fourni en paramètres : le nom, le protocole de communication et le nom d'utilisateur. Le protocole et le nom d'utilisateur sont optionnels.

- [`setLocalDescription()`](/fr/docs/Web/API/RTCPeerConnection/setLocalDescription)
  - : Modifie la description locale associée à la connexion. Cette description définit les propriétés de l'extrémité locale de la connexion, y compris le format de média. Cette méthode renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolue de façon asynchrone lorsque la description a été modifiée.
- [`setRemoteDescription()`](/fr/docs/Web/API/RTCPeerConnection/setRemoteDescription)
  - : Définit la description de la connexion pour l'extrémité distante pour l'offre ou la réponse courante. Cette description définit les propriétés de l'extrémité distante de la connexion, y compris le format de média. Cette méthode renvoie une [promesse](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolue de façon asynchrone lorsque la description a été modifiée.

### Méthodes obsolètes

- [`addStream()`](/fr/docs/Web/API/RTCPeerConnection/addStream) {{deprecated_inline}}
  - : Ajoute un objet [`MediaStream`](/fr/docs/Web/API/MediaStream) comme source audio ou vidéo locale. La méthode [`addTrack()`](/fr/docs/Web/API/RTCPeerConnection/addTrack) devrait être utilisée à la place pour chaque piste qu'on souhaite envoyer au pair distant.
- [`createDTMFSender()`](/fr/docs/Web/API/RTCPeerConnection/createDTMFSender) {{deprecated_inline}}
  - : Crée un nouvel émetteur [`RTCDTMFSender`](/fr/docs/Web/API/RTCDTMFSender) associé à une piste [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) spécifique et qui est capable d'envoyer des signaux téléphoniques [DTMF](/fr/docs/Glossary/DTMF) via la connexion.
- [`getStreamById()`](/fr/docs/Web/API/RTCPeerConnection/getStreamById) {{deprecated_inline}}
  - : Renvoie l'objet [`MediaStream`](/fr/docs/Web/API/MediaStream) ayant l'identifiant indiqué qui est associé à l'extrémité locale ou distante de la connexion. Cette propriété a été remplacée par les méthodes [`getSenders()`](/fr/docs/Web/API/RTCPeerConnection/getSenders) et [`getReceivers()`](/fr/docs/Web/API/RTCPeerConnection/getReceivers).
- [`removeStream()`](/fr/docs/Web/API/RTCPeerConnection/removeStream) {{deprecated_inline}}
  - : Supprime un flux [`MediaStream`](/fr/docs/Web/API/MediaStream) qui est une source audio ou vidéo locale. Cette méthode est obsolète, on doit privilégier [`removeTrack()`](/fr/docs/Web/API/RTCPeerConnection/removeTrack) à la place.

## Évènements

On pourra intercepter ces évènements grâce à [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) ou en affectant un gestionnaire d'évènement sur la propriété `onnomEvenement` de cette interface.

- [`connectionstatechange`](/fr/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - : Envoyé lorsque l'état de connectivité global de la connexion `RTCPeerConnection` évolue. Également disponible via la propriété de gestion d'évènement [`onconnectionstatechange`](/fr/docs/Web/API/RTCPeerConnection/onconnectionstatechange).
- [`datachannel`](/fr/docs/Web/API/RTCPeerConnection/datachannel_event)
  - : Envoyé lorsque le pair distant ajoute un canal [`RTCDataChannel`](/fr/docs/Web/API/RTCDataChannel) à la connexion. Également disponible via la propriété de gestion d'évènement [`ondatachannel`](/fr/docs/Web/API/RTCPeerConnection/ondatachannel).
- [`icecandidate`](/fr/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - : Envoyé afin de demander à ce que le candidat indiqué soit transmis au pair distant. Également disponible via la propriété de gestion d'évènement [`onicecandidate`](/fr/docs/Web/API/RTCPeerConnection/onicecandidate).
- [`icecandidateerror`](/fr/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - : Envoyé à la connexion si une erreur se produit lors de la collecte des candidats [ICE](/fr/docs/Glossary/ICE). L'évènement décrit l'erreur. Également disponible via la propriété de gestion d'évènement [`onicecandidateerror`](/fr/docs/Web/API/RTCPeerConnection/onicecandidateerror).
- [`iceconnectionstatechange`](/fr/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - : Envoyé lorsque l'état de la connexion [ICE](/fr/docs/Glossary/ICE) change (par exemple lorsqu'elle se déconnecte). Également disponible via la propriété de gestion d'évènement [`oniceconnectionstatechange`](/fr/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange).
- [`icegatheringstatechange`](/fr/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - : Envoyé lorsque l'état de collecte des couches [ICE](/fr/docs/Glossary/ICE), tel que reflété par [`iceGatheringState`](/fr/docs/Web/API/RTCPeerConnection/iceGatheringState), évolue. Cela indique si la négociation ICE n'a pas encore commencé (`new`), a commencé la collecte des candidats (`gathering`) ou si elle est terminée (`complete`). Également disponible via la propriété de gestion d'évènement [`onicegatheringstatechange`](/fr/docs/Web/API/RTCPeerConnection/onicegatheringstatechange).
- [`negotiationneeded`](/fr/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - : Envoyé lorsqu'une négociation ou de la renégociation de la connexion [ICE](/fr/docs/Glossary/ICE) doit être réalisée. Cela peut se produire à l'ouverture d'une connexion mais aussi lorsqu'il est nécessaire de s'adapter à des conditions réseau changeantes. Le récepteur devrait répondre en créant une offre et en l'envoyant à l'autre pair. Également disponible via la propriété de gestion d'évènement [`onnegotiationneeded`](/fr/docs/Web/API/RTCPeerConnection/onnegotiationneeded).
- [`signalingstatechange`](/fr/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - : Envoyé lorsque l'état de signal [ICE](/fr/docs/Glossary/ICE) de la connexion change. Également disponible via la propriété de gestion d'évènement [`onsignalingstatechange`](/fr/docs/Web/API/RTCPeerConnection/onsignalingstatechange).
- [`track`](/fr/docs/Web/API/RTCPeerConnection/track_event)
  - : Envoyé après qu'une nouvelle piste ait été ajoutée à une des instances [`RTCRtpReceiver`](/fr/docs/Web/API/RTCRtpReceiver) faisant partie de la connexion. Également disponible via la propriété de gestion d'évènement [`ontrack`](/fr/docs/Web/API/RTCPeerConnection/ontrack).

### Évènements obsolètes

- [`addstream`](/fr/docs/Web/API/RTCPeerConnection/addstream_event) {{deprecated_inline}}
  - : Envoyé lorsqu'un nouveau flux [`MediaStream`](/fr/docs/Web/API/MediaStream) a été ajouté à la connexion. Plutôt que d'écouter cet évènement obsolète, on privilégiera les évènements [`track`](/fr/docs/Web/API/RTCPeerConnection/track_event). Un tel évènement est envoyé pour chaque piste [`MediaStreamTrack`](/fr/docs/Web/API/MediaStreamTrack) ajoutée à la connexion. Également disponible via la propriété [`onaddstream`](/fr/docs/Web/API/RTCPeerConnection/onaddstream).
- [`removestream`](/fr/docs/Web/API/RTCPeerConnection/removestream_event) {{deprecated_inline}}
  - : Envoyé lorsqu'un flux [`MediaStream`](/fr/docs/Web/API/MediaStream) est retiré de la connexion. Plutôt que d'écouter cet évènement obsolète, on privilégiera les évènements [`removetrack`](/fr/docs/Web/API/MediaStream/removetrack_event) pour chaque flux. Également disponible via la propriété [`onremovestream`](/fr/docs/Web/API/RTCPeerConnection/onremovestream).

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- <https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js>
- [http://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple](https://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple)
- [TutorRoom](https://github.com/chrisjohndigital/TutorRoom) : Une application de capture vidéo, de vidéo en pair à pair et de partage de fichiers en Node.js HTML5 ([code source sur GitHub](https://github.com/chrisjohndigital/TutorRoom))
