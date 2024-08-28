---
title: "RTCPeerConnection : constructeur RTCPeerConnection()"
slug: Web/API/RTCPeerConnection/RTCPeerConnection
l10n:
  sourceCommit: 7723224a33ae51ac03a6cadd7354b6d7f4d8aa7b
---

{{APIRef("WebRTC")}}

Le constructeur **`RTCPeerConnection()`** renvoie un nouvel objet [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection) qui représente une connexion entre l'appareil local et un pair distant.

## Syntaxe

```js-nolint
new RTCPeerConnection()
new RTCPeerConnection(configuration)
```

### Paramètres

- `configuration` {{optional_inline}}

  - : Un objet fournissant des options de configuration pour la nouvelle connexion&nbsp;:

    - `bundlePolicy` {{optional_inline}}

      - : Définit comment la négociation des candidats est gérée lorsque le pair distant n'est pas compatible avec [le standard SDP BUNDLE](https://webrtcstandards.info/sdp-bundle/). Si le point d'accès distant est compatible avec BUNDLE, toutes les pistes de médias et les canaux de données sont regroupés dans un seul transport à la fin de la négociation, quelle que soit la politique utilisée. Les transports désormais inutiles qui auraient été créés initialement sont désormais fermés.

        Autrement dit, sur le plan technique, un tel empaquetage (<i lang="en">bundle</i>) permet à ce que l'ensemble des médias entre deux pairs transite d'une seule adresse IP et d'un port unique depuis le premier pair vers une seule adresse IP et un seul port vers l'autre pair, en utilisant le même protocole de transport.

        Cette option doit prendre l'une des valeurs suivantes (si ça ne correspond pas, c'est `balanced` qui sera prise par défaut)&nbsp;:

        - `"balanced"`
          - : L'agent ICE crée initialement un transport ([`RTCDtlsTransport`](/fr/docs/Web/API/RTCDtlsTransport)) pour chaque type de contenu ajouté&nbsp;: audio, vidéo, et canaux de données. Si le point d'accès distant n'est pas compatible avec BUNDLE, chacun de ces transports DTLS gère la communication pour un seul type de données.
        - `"max-compat"`
          - : L'agent ICE crée initialement un transport ([`RTCDtlsTransport`](/fr/docs/Web/API/RTCDtlsTransport)) par piste de média et un transport séparé pour les canaux de données. Si le point d'accès distant n'est pas compatible avec BUNDLE, tout est négocié sur ces transports DTLS séparés.
        - `"max-bundle"`
          - : L'agent ICE crée initialement un seul transport ([`RTCDtlsTransport`](/fr/docs/Web/API/RTCDtlsTransport)) pour l'ensemble des données de la connexion [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection). Si le point d'accès distant n'est pas compatible avec BUNDLE, seule une piste sera négociée, et le reste sera ignoré.

    - `certificates` {{optional_inline}}

      - : Un tableau ([`Array`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)) contenant des objets [`RTCCertificate`](/fr/docs/Web/API/RTCCertificate) utilisés par la connexion pour l'authentification. Si cette propriété n'est pas fournie, un ensemble de certificats est généré automatiquement pour chaque connexion [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection). Bien qu'un seul certificat est utilisé pour une connexion donnée, fournir des certificats basés sur des algorithmes différents pourra augmenter les chances de réussir la connexion dans certaines conditions circonstances. Voir ci-après, [la section sur l'utilisation des certificats](#utiliser_des_certificats) pour plus d'informations.

        > [!NOTE]
        > Cette option de configuration ne peut pas être modifiée après qu'elle a été fournie initialement. Une fois que les certificats ont été paramétrés, cette propriété sera ignorée par les appels ultérieurs à [`RTCPeerConnection.setConfiguration()`](/fr/docs/Web/API/RTCPeerConnection/setConfiguration).

    - `iceCandidatePoolSize` {{optional_inline}}

      - : Un entier non-signé sur 16 bits qui indique la taille du volume de candidats ICE qui seront collectés au préalable (<i lang="en">prefetched</i>). La valeur par défaut est 0 (indiquant qu'aucune collecte préalable des candidats n'a lieu). Dans certains cas, l'établissement de la connexion pourra être plus rapide en permettant à l'agent ICE de récupérer les candidats ICE avant la tentative de connexion, afin qu'ils soient disponibles pour une inspection lors de l'appel à [`RTCPeerConnection.setLocalDescription()`](/fr/docs/Web/API/RTCPeerConnection/setLocalDescription).

        > [!NOTE]
        > Modifier la taille du volume de candidats ICE pourra déclencher le début de la collecte ICE.

    - `iceServers` {{optional_inline}}

      - : Un tableau d'objets qui décrivent chacun un serveur qui pourra être utilisé par l'agent ICE. Il s'agit généralement de serveur STUN ou TURN. Si cette propriété n'est pas fournie, la connexion sera tentée sans serveur STUN ou TURN, ce qui limitera la connexion aux pairs locaux. Les propriétés possibles pour ces objets représentant des serveurs ICE sont&nbsp;:

        - `credential` {{optional_inline}}
          - : Les informations d'authentification à utiliser pour se connecter au serveur. Cette propriété est uniquement utilisée si l'objet représente un serveur TURN.
        - `credentialType` {{optional_inline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
          - : Si l'objet représente un serveur TURN, cet attribut définit le type d'information d'authentification (voir `credential`) utilisée. La valeur par défaut est `"password"`.
        - `urls`
          - : Cette propriété nécessaire est une chaîne de caractères ou un tableau de chaînes de caractères qui sont des URL pouvant être utilisées pour se connecter au serveur.
        - `username` {{optional_inline}}
          - : Si le serveur est un serveur TURN, il s'agit du nom d'utilisateur à utiliser lors de l'authentification.

    - `iceTransportPolicy` {{optional_inline}}

      - : Une chaîne de caractères représentant la politique de transport ICE courante. Les valeurs possibles sont&nbsp;:

        - `"all"`
          - : L'ensemble des candidats ICE est pris en compte. Il s'agit de la valeur par défaut.
        - `"public"` {{deprecated_inline}}
          - : Seuls les candidats ICE dotés d'une adresse IP publique seront pris en compte.
        - `"relay"`
          - : Seuls les candidats ICE dont les adresses IP sont relayées seront pris en compte (par exemple ceux qui passent par un serveur TURN).

    - `peerIdentity` {{optional_inline}}
      - : Une chaîne de caractères qui définit l'identité cible pour le pair distant, pour la connexion [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection). Si cette valeur est définie, la connexion ne s'établira pas avec le pair distant à moins de s'authentifier correctement avec le nom fourni. La valeur par défaut est `null`.
    - `rtcpMuxPolicy` {{optional_inline}}

      - : Une chaîne de caractères représentant la politique de multiplexage RTCP à utiliser lors de la collecte des candidats ICE afin de prendre en charge le RTCP non-multiplexé. Les valeurs possibles sont&nbsp;:

        - `"negotiate"`
          - : Indique à l'agent ICE de collecter les candidats [RTP](/fr/docs/Glossary/RTP) et [RTCP](/fr/docs/Glossary/RTCP). Si le pair distant prend en charge le RTCP multiplexé, les candidats RTCP sur multiplexés par-dessus les candidats RTP correspondants. Sinon, les candidats RTP et RTCP sont renvoyés séparément.
        - `"require"`
          - : Indique à l'agent ICE de collecter les candidats uniquement pour RTP et de multiplexer RTCP par-dessus. Si le pair distant ne prend pas en charge le multiplexage RTCP, la négociation de la session échoue. Il s'agit de la valeur par défaut.

### Valeur de retour

Un nouvel objet [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection), configuré avec les options données par l'argument `configuration`, s'il a été fourni, sinon la connexion est configurée avec des paramètres par défaut simples et appropriés.

## Utiliser des certificats

Lorsque vous souhaitez fournir vos propres certificats à utiliser dans une connexion [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection) (plutôt que la création de `RTCPeerConnection` les génère automatiquement), il vous faut appeler la fonction statique [`RTCPeerConnection.generateCertificate()`](/fr/docs/Web/API/RTCPeerConnection/generateCertificate_static).

La propriété de la valeur `certificates` ne peut pas être changée une fois qu'elle a été spécifiée. Si cette propriété est incluse plus tard dans la configuration passée dans un appel à [`setConfiguration()`](/fr/docs/Web/API/RTCPeerConnection/setConfiguration), elle sera alors ignorée.

Cet attribut prend en charge la fourniture de plusieurs certificats, même si une connexion DTLS donnée n'utilisera qu'un seul certificat. Fournir plusieurs certificats permet de prendre en charge plusieurs algorithmes de chiffrement. C'est l'implémentation de `RTCPeerConnection` qui choisira le certificat à utiliser, en fonction des algorithmes que l'agent et le pair distant prennent en charge, ce qui est déterminé lors de la poignée de main DTLS.

Si vous ne fournissez pas de certificats, de nouveaux sont générés automatiquement. Fournir ses propres certificats aura comme avantage de permettre une continuité de l'identité, telle que perçue par le pair distant (qui pourra comprendre qu'il s'agit toujours du même appelant). Par ailleurs, cela évite le coût de génération de nouvelles clés à chaque connexion.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Émission de signaux (<i lang="en">signaling</i>) et appel vidéo](/fr/docs/Web/API/WebRTC_API/Signaling_and_video_calling)
- [Présentation générale de l'architecture WebRTC](/fr/docs/Web/API/WebRTC_API/Protocols)
- [Durée de vie d'une session WebRTC](/fr/docs/Web/API/WebRTC_API/Session_lifetime)
- [`RTCPeerConnection`](/fr/docs/Web/API/RTCPeerConnection)
