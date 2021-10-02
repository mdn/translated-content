---
title: RTCPeerConnection
slug: Web/API/RTCPeerConnection
browser-compat: api.RTCPeerConnection
translation_of: Web/API/RTCPeerConnection
---
<div>{{APIRef('WebRTC')}}</div>

<p>L'interface <strong><code>RTCPeerConnection</code></strong> représente une connexion WebRTC entre un ordinateur local et un pair distant. Elle fournit des méthodes pour se connecter à un pair distant, entretenir et surveiller la connexion et fermer la connexion dès qu'elle n'est plus nécessaire.</p>

<p>{{InheritanceDiagram}}</p>

<h2 id="constructor">Constructeur</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/RTCPeerConnection"><code>RTCPeerConnection()</code></a></dt>
  <dd> Renvoie un nouvel objet <code>RTCPeerConnection</code> qui représente la connexion entre l'appareil local et le pair distant.</dd>
</dl>

<h2 id="static_methods">Méthodes statiques</h2>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/generateCertificate"><code>generateCertificate()</code></a></dt>
  <dd>Crée un certificat X.509 et la clé privée correspondante. Cette méthode renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a> dont la valeur de résolution sera le nouvel objet <a href="/fr/docs/Web/API/RTCCertificate"><code>RTCCertificate</code></a> une fois généré.</dd>
</dl>

<h2 id="properties">Propriétés</h2>

<p><em>Cette interface hérite également des propriétés de <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a>.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/canTrickleIceCandidates"><code>canTrickleIceCandidates</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un booléen qui indique si un pair distant peut accepter ou non <a href="https://datatracker.ietf.org/doc/html/draft-ietf-mmusic-trickle-ice">les candidats ICE au goutte-à-goutte (<i lang="en">trickled ICE candidates</i>)</a>.
  </dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/connectionState"><code>connectionState</code></a> {{ReadOnlyInline}}</dt>
  <dd>Indique l'état actuel de la connexion au pair en renvoyant une de ces chaînes de caractères <code>new</code>, <code>connecting</code>, <code>connected</code>, <code>disconnected</code>, <code>failed</code> ou <code>closed</code>.
  </dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/currentLocalDescription"><code>currentLocalDescription</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a> qui décrit la partie locale de la connexion qui a été négociée avec succès le plus récemment depuis la dernière fois où cette connexion <code>RTCPeerConnection</code> a terminé de négocier et s'est connectée à un pair distant. Cet objet inclut également une liste des candidats ICE qui peuvent avoir déjà été générés par l'agent ICE depuis que l'offre ou la réponse représentée par la description a été instanciée en premier lieu.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/currentRemoteDescription"><code>currentRemoteDescription</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a> qui décrit la connexion pour le pair distant pour la connexion qui a été négociée avec succès le plus récemment depuis la dernière fois où cette connexion <code>RTCPeerConnection</code> a terminé de négocier et s'est connectée à un pair distant. Cet objet inclut également une liste des candidats ICE qui peuvent avoir déjà été générés par l'agent ICE depuis que l'offre ou la réponse représentée par la description a été instanciée en premier lieu.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/iceConnectionState"><code>iceConnectionState</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie une chaîne de caractères qui indique l'état de l'agent ICE associée à cette connexion <code>RTCPeerConnection</code>. La chaîne de caractères peut être l'une de celles-ci : <code>new</code>, <code>checking</code>, <code>connected</code>, <code>completed</code>, <code>failed</code>, <code>disconnected</code> ou <code>closed</code>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/iceGatheringState"><code>iceGatheringState</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie une chaîne de caractères qui décrit l'état de collection ICE de la connexion. Cela permet de détecter par exemple lorsque la collecte des candidats ICE a terminé. Les valeurs possibles pour cette chaîne sont <code>new</code>, <code>gathering</code> ou <code>complete</code>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/localDescription"><code>localDescription</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a> qui décrit la session pour la partie locale de la connexion. Si la session n'a pas encore été initialisée, renvoie <code>null</code>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/peerIdentity"><code>peerIdentity</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a> dont la valeur de résolution sera un objet <a href="/fr/docs/Web/API/RTCIdentityAssertion"><code>RTCIdentityAssertion</code></a> contenant une chaîne de caractères identifiant le pair distant. Une fois que la promesse a été résolue avec succès, l'identité obtenue est celle du pair cible et ne changera pas pour la durée de la connexion.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/pendingLocalDescription"><code>pendingLocalDescription</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a> qui décrit un changement de configuration en attente pour la partie locale de la connexion. Cela ne décrit pas la connexion dans son état actuel mais telle qu'elle pourrait être dans un futur proche.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/pendingRemoteDescription"><code>pendingRemoteDescription</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a> qui décrit un changement de configuration en attente pour la partie distante de la connexion. Cela ne décrit pas la connexion dans son état actuel mais telle qu'elle pourrait être dans un futur proche.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/remoteDescription"><code>remoteDescription</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSessionDescription"><code>RTCSessionDescription</code></a> qui décrit la session, y compris la configuration, les informations sur le média pour la partie distante de la connexion. Si la session n'est pas encore initialisée, renvoie <code>null</code>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/sctp"><code>sctp</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCSctpTransport"><code>RTCSctpTransport</code></a> qui décrit la couche de transport <a href="/fr/docs/Glossary/SCTP">SCTP</a> sur laquelle les données SCTP sont envoyées et reçues. Si SCTP n'a pas été négocié, renvoie <code>null</code>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/signalingState"><code>signalingState</code></a> {{ReadOnlyInline}}</dt>
  <dd>Renvoie une chaîne de caractères qui décrit l'état du processus de signal pour la partie locale de la connexion lors de la connexion ou de la reconnexion à un autre pair. Cette chaîne peut avoir l'une des valeurs suivantes : <code>stable</code>, <code>have-local-offer</code>, <code>have-remote-offer</code>, <code>have-local-pranswer</code> ou <code>have-remote-pranswer</code>.</dd>
</dl>

<h3 id="event_handlers">Gestionnaires d'évènements</h3>

<p><em>Cette interface hérite des gestionnaires d'évènements de <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a>.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onconnectionstatechange"><code>onconnectionstatechange</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> appelé pour gérer l'évènement {{DOMxRef("RTCPeerConnection/connectionstatechange_event", "connectionstatechange")}}. Cet évènement se produit lorsque l'état aggrégé de la connexion évolue. L'état aggrégé correspond à la combinaison des états de l'ensemble des transports de réseau individuel utilisés par la connexion</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/ondatachannel"><code>ondatachannel</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/datachannel_event", "datachannel")}}. Cet évènement de type <a href="/fr/docs/Web/API/RTCDataChannelEvent"><code>RTCDataChannelEvent</code></a> est envoyé lorsqu'un canal <a href="/fr/docs/Web/API/RTCDataChannel"><code>RTCDataChannel</code></a> est ajouté à la connexion par le pair distant qui a appelé <a href="/fr/docs/Web/API/RTCPeerConnection/createDataChannel"><code>createDataChannel()</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onicecandidate"><code>onicecandidate</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/icecandidate_event", "icecandidate")}}. Cela se produit lorsque l'agent <a href="/fr/docs/Glossary/ICE">ICE</a> local a besoin de délivrer un message à l'autre pair via le serveur de signal.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onicecandidateerror"><code>onicecandidateerror</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/icecandidateerror_event", "icecandidateerror")}}. Cet évènement est déclenché lorsqu'une erreur se produit lors du processus de collecte des candidats <a href="/fr/docs/Glossary/ICE">ICE</a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange"><code>oniceconnectionstatechange</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/iceconnectionstatechange_event", "iceconnectionstatechange")}}. Cela se produit lorsque l'agent <a href="/fr/docs/Glossary/ICE">ICE</a> local a besoin de délivrer un message à l'autre pair via le serveur de signal.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onicegatheringstatechange"><code>onicegatheringstatechange</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/icegatheringstatechange_event", "icegatheringstatechange")}}. Cela se produit lorsque l'état de collecte <a href="/fr/docs/Glossary/ICE">ICE</a> évolue.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onnegotiationneeded"><code>onnegotiationneeded</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/negotiationneeded_event", "negotiationneeded")}}. Cet évènement est déclenché lorsqu'un changement a eu lieu et qui nécessite une négociation de session. La négociation devrait être menée par le requêtant, car certaines modifications de sessions ne peuvent pas être négociés par le répondant.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onsignalingstatechange"><code>onsignalingstatechange</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/signalingstatechange_event", "signalingstatechange")}}. La fonction reçoit en entrée un évènement qui est celui envoyé lorsque l'état <a href="/fr/docs/Web/API/RTCPeerConnection/signalingState"><code>signalingState</code></a> du pair de la connexion change. Cela peut avoir lieu suite à un appel à <a href="/fr/docs/Web/API/RTCPeerConnection/setLocalDescription"><code>setLocalDescription()</code></a> ou à <a href="/fr/docs/Web/API/RTCPeerConnection/setRemoteDescription"><code>setRemoteDescription()</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/ontrack"><code>ontrack</code></a></dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement {{DOMxRef("RTCPeerConnection/track_event", "track")}}. L'évènement reçu en argument de la fonction est de type <a href="/fr/docs/Web/API/RTCTrackEvent"><code>RTCTrackEvent</code></a>. Cet évènement est envoyé lorsqu'un nouvel objet entrant <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> a été créé et associé avec un objet <a href="/fr/docs/Web/API/RTCRtpReceiver"><code>RTCRtpReceiver</code></a> ajouté à l'ensemble des destinataires de la connexion.</dd>
</dl>

<h3 id="obsolete_properties">Propriétés obsolètes</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onaddstream"><code>onaddstream</code></a> {{Obsolete_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement obsolète {{DOMxRef("RTCPeerConnection/addstream_event", "addstream")}}.</dd>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/onremovestream"><code>onremovestream</code></a> {{Obsolete_Inline}}</dt>
  <dd>Un <a href="/fr/docs/Web/Events/Event_handlers">gestionnaire d'évènements</a> qui définit une fonction appelée pour gérer l'évènement obsolète {{DOMxRef("RTCPeerConnection/removestream_event", "removestream")}}.</dd>
</dl>

<h2 id="methods">Méthodes</h2>

<p><em>Cette interface hérite également des méthodes de <a href="/fr/docs/Web/API/EventTarget"><code>EventTarget</code></a>.</em></p>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/addIceCandidate"><code>addIceCandidate()</code></a></dt>
  <dd>Ajoute un nouveau candidat distant à la description distante de <code>RTCPeerConnection</code> qui décrit l'état à l'extrémité distante de la connexion</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/addTrack"><code>addTrack()</code></a></dt>
  <dd>Ajoute un nouvel objet <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> à l'ensemble des pistes qui seront transmises au pair distant.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/addTransceiver"><code>addTransceiver()</code></a></dt>
  <dd>Crée un nouvel objet <a href="/fr/docs/Web/API/RTCRtpTransceiver"><code>RTCRtpTransceiver</code></a> et l'ajoute à l'ensemble des émetteurs-récepteurs associés à la connexion. Chaque émetteur-récepteur représente un flux bidirectionnel associé à un récepteur <a href="/fr/docs/Web/API/RTCRtpSender"><code>RTCRtpSender</code></a> et à un émetteur <a href="/fr/docs/Web/API/RTCRtpReceiver"><code>RTCRtpReceiver</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/close"><code>close()</code></a></dt>
  <dd>Ferme la connexion courante vers le pair.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/createAnswer"><code>createAnswer()</code></a></dt>
  <dd>Initie la création d'une réponse <a href="/fr/docs/Glossary/SDP">SDP</a> à une offre reçue par un pair distant pendant la négociation offre/réponse d'une connexion WebRTC. La réponse contient des informations sur les médias déjà attachés à la session, les codecs et options pris en charge par le navigateur ainsi que sur les éventuels candidats <a href="/fr/docs/Glossary/ICE">ICE</a> déjà collectés.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/createDataChannel"><code>createDataChannel()</code></a></dt>
  <dd>Initie la création d'un nouveau canal relié au pair distant qui permettra de transmettre tout type de données. Cela peut être utile pour le transfert de contenu en arrière-plan comme des images, fichiers, discussions, paquets pour l'état d'un jeu multijoueur, etc.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/createOffer"><code>createOffer()</code></a></dt>
  <dd>Initie la création d'une offre <a href="/fr/docs/Glossary/SDP">SDP</a> afin de démarrer une nouvelle connexion WebRTC avec un pair distant. L'offre SDP inclut des informations à propos des éventuels objets <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> déjà attachés à la session WebRTC, des codecs, des options prises en charge par le navigateur ainsi que sur les éventuels candidats déjà collectés par l'agent <a href="/fr/docs/Glossary/ICE">ICE</a> afin de pouvoir envoyer ces informations via le canal de signalement à un pair potentiel pour demander une connexion ou mettre à jour la configuration d'une connexion existante.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getConfiguration"><code>getConfiguration()</code></a></dt>
  <dd>Renvoie un objet <a href="/fr/docs/Web/API/RTCConfiguration"><code>RTCConfiguration</code></a> qui indique la configuration courante de la connexion.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getIdentityAssertion"><code>getIdentityAssertion()</code></a></dt>
  <dd>Initie la collecte d'une assertion d'identité et renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a> qui est résolue en l'assertion d'identité encodée dans une chaîne de caractères. Cette méthode aura un effet uniquement si <a href="/fr/docs/Web/API/RTCPeerConnection/signalingState"><code>signalingState</code></a> ne vaut pas <code>closed</code>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getReceivers"><code>getReceivers()</code></a></dt>
  <dd>Renvoie un tableu d'objets <a href="/fr/docs/Web/API/RTCRtpReceiver"><code>RTCRtpReceiver</code></a> dont chacun représente un récepteur <a href="/fr/docs/Glossary/RTP">RTP</a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getSenders"><code>getSenders()</code></a></dt>
  <dd>Renvoie un tableau d'objets <a href="/fr/docs/Web/API/RTCRtpSender"><code>RTCRtpSender</code></a> dont chacun représente un émetteur <a href="/fr/docs/Glossary/RTP">RTP</a> dont le rôle est de transmettre les données d'une piste.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getStats"><code>getStats()</code></a></dt>
  <dd>Renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a> dont la valeur de résolution sont des statistiques quant à la connexion globale ou à la piste <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> indiquée.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getTransceivers"><code>getTransceivers()</code></a></dt>
  <dd>Renvoie une liste de l'ensemble des objets <a href="/fr/docs/Web/API/RTCRtpTransceiver"><code>RTCRtpTransceiver</code></a> utilisés afin d'envoyer et de recevoir des données sur la connexion.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/removeTrack"><code>removeTrack()</code></a></dt>
  <dd>Indique à la partie locale de la connexion d'arrêter d'envoyer des médias sur la piste indiquée sans pour autant retirer l'objet <a href="/fr/docs/Web/API/RTCRtpSender"><code>RTCRtpSender</code></a> correspondant de la liste des récepteurs telle que fournie par <a href="/fr/docs/Web/API/RTCPeerConnection/getSenders"><code>getSenders()</code></a>. Si la piste est déjà arrêtée ou si elle n'est pas dans la liste des émetteurs de la connexion, cette méthode n'a pas d'effet.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/restartIce"><code>restartIce()</code></a></dt>
  <dd>Permet de demander facilement une nouvelle collecte de candidats ICE à chaque extrémité de la connexion. Cela simplifie le processus en permettant à l'appelant ou au recevant d'utiliser la même méthode pour déclencher un redémarrage <a href="/fr/docs/Glossary/ICE">ICE</a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/setConfiguration"><code>setConfiguration()</code></a></dt>
  <dd>Définit la configuration courante de la connexion en fonction des valeurs incluses dans l'objet <a href="/fr/docs/Web/API/RTCConfiguration"><code>RTCConfiguration</code></a> passé en argument. Cela permet de modifier les serveurs <a href="/fr/docs/Glossary/ICE">ICE</a> utilisés par la connexion ainsi que les règles de transport utilisées.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/setIdentityProvider"><code>setIdentityProvider()</code></a></dt>
  <dd>Définit le fournisseur d'identité (<i lang="en">Identity Provider</i> ou IdP) par le triplet fourni en paramètres : le nom, le protocole de communication et le nom d'utilisateur. Le protocole et le nom d'utilisateur sont optionnels.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/setLocalDescription"><code>setLocalDescription()</code></a></dt>
  <dd>Modifie la description locale associée à la connexion. Cette description définit les propriétés de l'extrémité locale de la connexion, y compris le format de média. Cette méthode renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a> qui est résolue de façon asynchrone lorsque la description a été modifiée.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/setRemoteDescription"><code>setRemoteDescription()</code></a></dt>
  <dd>Définit la description de la connexion pour l'extrémité distante pour l'offre ou la réponse courante. Cette description définit les propriétés de l'extrémité distante de la connexion, y compris le format de média. Cette méthode renvoie une <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise">promesse</a> qui est résolue de façon asynchrone lorsque la description a été modifiée.</dd>
</dl>

<h3 id="obsolete_methods">Méthodes obsolètes</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/addStream"><code>addStream()</code></a> {{Obsolete_Inline}}</dt>
  <dd>Ajoute un objet <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> comme source audio ou vidéo locale. La méthode <a href="/fr/docs/Web/API/RTCPeerConnection/addTrack"><code>addTrack()</code></a> devrait être utilisée à la place pour chaque piste qu'on souhaite envoyer au pair distant.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/createDTMFSender"><code>createDTMFSender()</code></a> {{Obsolete_Inline}}</dt>
  <dd>Crée un nouvel émetteur <a href="/fr/docs/Web/API/RTCDTMFSender"><code>RTCDTMFSender</code></a> associé à une piste <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> spécifique et qui est capable d'envoyer des signaux téléphoniques <a href="/fr/docs/Glossary/DTMF">DTMF</a> via la connexion.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/getStreamById"><code>getStreamById()</code></a> {{Obsolete_Inline}}</dt>
  <dd>Renvoie l'objet <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> ayant l'identifiant indiqué qui est associé à l'extrémité locale ou distante de la connexion. Cette propriété a été remplacée par les méthodes <a href="/fr/docs/Web/API/RTCPeerConnection/getSenders"><code>getSenders()</code></a> et <a href="/fr/docs/Web/API/RTCPeerConnection/getReceivers"><code>getReceivers()</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/removeStream"><code>removeStream()</code></a> {{Obsolete_Inline}}</dt>
  <dd>Supprime un flux <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> qui est une source audio ou vidéo locale. Cette méthode est obsolète, on doit privilégier <a href="/fr/docs/Web/API/RTCPeerConnection/removeTrack"><code>removeTrack()</code></a> à la place.</dd>
</dl>

<h2 id="events">Évènements</h2>

<p>On pourra intercepter ces évènements grâce à <a href="/fr/docs/Web/API/EventTarget/addEventListener"><code>addEventListener()</code></a> ou en affectant un gestionnaire d'évènement sur la propriété <code>on<em>nomEvenement</em></code> de cette interface.</p>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/connectionstatechange_event"><code>connectionstatechange</code></a></dt>
  <dd>Envoyé lorsque l'état de connectivité global de la connexion <code>RTCPeerConnection</code> évolue. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/onconnectionstatechange"><code>onconnectionstatechange</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/datachannel_event"><code>datachannel</code></a></dt>
  <dd>Envoyé lorsque le pair distant ajoute un canal <a href="/fr/docs/Web/API/RTCDataChannel"><code>RTCDataChannel</code></a> à la connexion. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/ondatachannel"><code>ondatachannel</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/icecandidate_event"><code>icecandidate</code></a></dt>
  <dd>Envoyé afin de demander à ce que le candidat indiqué soit transmis au pair distant. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/onicecandidate"><code>onicecandidate</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/icecandidateerror_event"><code>icecandidateerror</code></a></dt>
  <dd>Envoyé à la connexion si une erreur se produit lors de la collecte des candidats <a href="/fr/docs/Glossary/ICE">ICE</a>. L'évènement décrit l'erreur. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/onicecandidateerror"><code>onicecandidateerror</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event"><code>iceconnectionstatechange</code></a></dt>
  <dd>Envoyé lorsque l'état de la connexion <a href="/fr/docs/Glossary/ICE">ICE</a> change (par exemple lorsqu'elle se déconnecte). Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/oniceconnectionstatechange"><code>oniceconnectionstatechange</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event"><code>icegatheringstatechange</code></a></dt>
  <dd>Envoyé lorsque l'état de collecte des couches <a href="/fr/docs/Glossary/ICE">ICE</a>, tel que reflété par <a href="/fr/docs/Web/API/RTCPeerConnection/iceGatheringState"><code>iceGatheringState</code></a>, évolue. Cela indique si la négociation ICE n'a pas encore commencé (<code>new</code>), a commencé la collecte des candidats (<code>gathering</code>) ou si elle est terminée (<code>complete</code>). Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/onicegatheringstatechange"><code>onicegatheringstatechange</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/negotiationneeded_event"><code>negotiationneeded</code></a></dt>
  <dd>Envoyé lorsqu'une négociation ou de la renégociation de la connexion <a href="/fr/docs/Glossary/ICE">ICE</a> doit être réalisée. Cela peut se produire à l'ouverture d'une connexion mais aussi lorsqu'il est nécessaire de s'adapter à des conditions réseau changeantes. Le récepteur devrait répondre en créant une offre et en l'envoyant à l'autre pair. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/onnegotiationneeded"><code>onnegotiationneeded</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/signalingstatechange_event"><code>signalingstatechange</code></a></dt>
  <dd>Envoyé lorsque l'état de signal <a href="/fr/docs/Glossary/ICE">ICE</a> de la connexion change. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/onsignalingstatechange"><code>onsignalingstatechange</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/track_event"><code>track</code></a></dt>
  <dd>Envoyé après qu'une nouvelle piste ait été ajoutée à une des instances <a href="/fr/docs/Web/API/RTCRtpReceiver"><code>RTCRtpReceiver</code></a> faisant partie de la connexion. Également disponible via la propriété de gestion d'évènement <a href="/fr/docs/Web/API/RTCPeerConnection/ontrack"><code>ontrack</code></a>.</dd>
</dl>

<h3 id="obsolete_events">Évènements obsolètes</h3>

<dl>
  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/addstream_event"><code>addstream</code></a> {{Obsolete_Inline}}</dt>
  <dd>Envoyé lorsqu'un nouveau flux <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> a été ajouté à la connexion. Plutôt que d'écouter cet évènement obsolète, on privilégiera les évènements <a href="/fr/docs/Web/API/RTCPeerConnection/track_event"><code>track</code></a>. Un tel évènement est envoyé pour chaque piste <a href="/fr/docs/Web/API/MediaStreamTrack"><code>MediaStreamTrack</code></a> ajoutée à la connexion. Également disponible via la propriété <a href="/fr/docs/Web/API/RTCPeerConnection/onaddstream"><code>onaddstream</code></a>.</dd>

  <dt><a href="/fr/docs/Web/API/RTCPeerConnection/removestream_event"><code>removestream</code></a> {{Obsolete_Inline}}</dt>
  <dd>Envoyé lorsqu'un flux <a href="/fr/docs/Web/API/MediaStream"><code>MediaStream</code></a> est retiré de la connexion. Plutôt que d'écouter cet évènement obsolète, on privilégiera les évènements <a href="/fr/docs/Web/API/MediaStream/removetrack_event"><code>removetrack</code></a> pour chaque flux. Également disponible via la propriété <a href="/fr/docs/Web/API/RTCPeerConnection/onremovestream"><code>onremovestream</code></a>.</dd>
</dl>

<h2 id="specifications">Spécifications</h2>

<p>{{Specifications}}</p>

<h2 id="browser_compatibility">Compatibilité des navigateurs</h2>

<p>{{Compat}}</p>

<h2 id="see_also">Voir aussi</h2>

<ul>
  <li><a href="https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js">https://github.com/jesup/nightly-gupshup/blob/master/static/js/chat.js</a></li>
  <li><a href="https://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple">http://www.html5rocks.com/en/tutorials/webrtc/basics/#toc-simple</a></li>
  <li><a href="https://github.com/chrisjohndigital/TutorRoom">TutorRoom</a> : Une application de capture vidéo, de vidéo en pair à pair et de partage de fichiers en Node.js HTML5 (<a href="https://github.com/chrisjohndigital/TutorRoom">code source sur GitHub</a>)</li>
</ul>
