---
title: Référence des événements
slug: Web/Events
tags:
  - Event
  - Overview
  - Reference
translation_of: Web/Events
---
Les [événements DOM](/fr/docs/Web/API/Document_Object_Model/Events) sont déclenchés pour notifier au code des « changements intéressants » qui peuvent affecter l'exécution du code. Ces changements peuvent résulter d'interactions avec l'utilisateur, comme l'utilisation de la souris ou le redimensionnement d'une fenêtre, de changements dans l'état de l'environnement sous-jacent (par exemple, une batterie faible ou des événements médiatiques provenant du système d'exploitation), et d'autres causes.

Chaque événement est représenté par un objet implémentant l'interface [`Event`](/fr/docs/Web/API/Event), et peut avoir d'autres propriétés et/ou champs, permettant d'obtenir des informations supplémentaires au sujet de ce qui s'est produit. La documentation de chaque événement comporte un tableau (en haut de la page) qui comprend un lien vers l'interface de l'événement associé et d'autres informations pertinentes. Une liste complète des différents types d'événements est donnée dans [Event >Événement `Interfaces basées sur`](/fr/docs/Web/API/Event#introduction).

Cette rubrique fournit un index des principales _sortes_ d'événements qui peuvent vous intéresser (animation, presse-papiers, workers, etc.) ainsi que les principales classes qui implémentent ces sortes d'événements. À la fin se trouve une liste exhaustive de tous les événements documentés.

> **Note :** Cette page répertorie les événements les plus courants que vous rencontrerez sur le Web. Si vous recherchez un événement qui n'est pas répertorié ici, essayez de rechercher son nom, son domaine ou les spécifications associées sur le reste du MDN.

## Index des événements

<table class="standard-table">
  <tbody>
    <tr>
      <th>Type d'événement</th>
      <th>Description</th>
      <th>Documentation</th>
    </tr>
    <tr>
      <td>Animation</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/Web_Animations_API">Web Animation API</a>.
        </p>
        <p>
          Utilisé pour répondre aux changements d'état de l'animation (par
          exemple, lorsqu'une animation commence ou se termine).
        </p>
      </td>
      <td>
        Événements d'animation déclenchés sur
        <a href="/fr/docs/Web/API/Document#animation_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Window#animation_events"
          ><code>Window</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLElement#animation_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Récupération asynchrone des données</td>
      <td><p>Événements liés à l'extraction des données.</p></td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/AbortSignal#events"
          ><code>AbortSignal</code></a
        >,
        <a href="/fr/docs/Web/API/XMLHttpRequest#events"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/fr/docs/Web/API/FileReader#events"><code>FileReader</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Presse-papiers</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>
          Utilisé pour notifier lorsque le contenu est coupé, copié ou collé.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Document#clipboard_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#clipboard_events"
          ><code>Element</code></a
        >,
        <a href="/fr/docs/Web/API/Window#clipboard_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Composition</td>
      <td>
        <p>
          Événements liés à la composition ; saisie "indirecte" du texte (au
          lieu d'utiliser les touches normales du clavier).
        </p>
        <p>
          Par exemple, un texte saisi via un moteur de conversion de la parole
          en texte, ou l'utilisation de combinaisons de touches spéciales qui
          modifient les pressions sur le clavier pour représenter de nouveaux
          caractères dans une autre langue.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Element#composition_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Transition CSS</td>
      <td>
        <p>
          Événements liés aux
          <a href="/fr/docs/Web/CSS/CSS_Transitions">Transitions CSS</a>.
        </p>
        <p>
          Fournit des événements de notification lorsque les transitions CSS
          commencent, s'arrêtent, sont annulées, etc.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Document#transition_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLElement#transition_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/fr/docs/Web/API/Window#transition_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Base de données</td>
      <td>
        <p>
          Événements liés aux opérations de la base de données : ouverture,
          fermeture, transactions, erreurs, etc.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/IDBDatabase#events"
          ><code>IDBDatabase</code></a
        >,
        <a href="/fr/docs/Web/API/IDBOpenDBRequest#events"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/fr/docs/Web/API/IDBRequest#events"><code>IDBRequest</code></a
        >,
        <a href="/fr/docs/Web/API/IDBTransaction#events"
          ><code>IDBTransaction</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Glisser/Déposer, Roue</td>
      <td>
        <p>
          Les événements liés à l'utilisation de l'API
          <a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API">Glisser/Déposer</a>
          et <a href="/fr/docs/Web/API/WheelEvent">WheelEvent</a>.
        </p>
        <p>
          Les événements Glisser/Déposer et Roue sont dérivés des événements de
          la souris. Bien qu'ils soient déclenchés lors de l'utilisation de la
          molette de la souris ou du glisser/déposer, ils peuvent également être
          utilisés avec d'autres matériels appropriés.
        </p>
      </td>
      <td>
        <p>
          Les événements de Glisser/Déposer déclenchés sur
          <a href="/fr/docs/Web/API/Document#drag_drop_events"
            ><code>Document</code></a
          >
        </p>
        <p>
          Les événements de la Roue déclenchés sur
          <a href="/fr/docs/Web/API/Document/wheel_event"
            ><code>Document</code></a
          >
          et
          <a href="/fr/docs/Web/API/Element/wheel_event"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Focus</td>
      <td>
        <p>Les événements liés aux éléments qui gagnent et perdent le focus.</p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Element#focus_events"><code>Element</code></a
        >, <a href="/fr/docs/Web/API/Window#focus_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Formulaire</td>
      <td>
        <p>
          Événements liés à la construction, la réinitialisation et la
          soumission de formulaires.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/HTMLFormElement#events"
          ><code>HTMLFormElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Plein écran</td>
      <td>
        <p>
          Evénements relatifs à l'API
          <a href="/fr/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
        </p>
        <p>
          Utilisé pour notifier la transition entre le mode plein écran et le
          mode fenêtré, ainsi que les erreurs survenant pendant cette
          transition.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Document#fullscreen_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#fullscreen_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Manette de jeu</td>
      <td>
        <p>
          Evénements relatifs à l'API
          <a href="/fr/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Window#gamepad_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Historique</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/History_API"
            >de Manipulation de l'historique du navigateur</a
          >.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Window#history_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestion de l'affichage du contenu des éléments HTML</td>
      <td>
        <p>
          Événements liés à la modification de l'état d'un élément d'affichage
          ou textuel.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/HTMLDetailsElement#events"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLDialogElement#events"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLSlotElement#events"
          ><code>HTMLSlotElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Entrées</td>
      <td>
        <p>
          Événements liés aux éléments d'entrée HTML, par ex.
          <a href="/fr/docs/Web/HTML/Element/input"><code>&#x3C;input></code></a
          >,
          <a href="/fr/docs/Web/HTML/Element/select"
            ><code>&#x3C;select></code></a
          >, ou
          <a href="/fr/docs/Web/HTML/Element/textarea"
            ><code>&#x3C;textarea></code></a
          >.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/HTMLElement#input_events"
          ><code>HTMLElement</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLInputElement#events"
          ><code>HTMLInputElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Clavier</td>
      <td>
        <p>
          Événements liés à l'utilisation d'un
          <a href="/fr/docs/Web/API/KeyboardEvent">clavier</a>.
        </p>
        <p>
          Utilisé pour notifier lorsque les touches sont déplacées vers le haut,
          vers le bas, ou simplement pressées.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Document#keyboard_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#keyboard_events"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Chargement/déchargement des documents</td>
      <td>
        <p>Événements liés au chargement et au déchargement des documents.</p>
      </td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/Document#load_unload_events"
            ><code>Document</code></a
          >
          et
          <a href="/fr/docs/Web/API/Window#load_unload_events"
            ><code>Window</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Manifeste</td>
      <td>
        <p>
          Événements liés à l'installation de
          <a href="/fr/docs/Web/Manifest">Manifeste des applications web</a>.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Window#manifest_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Médias</td>
      <td>
        <p>
          Événements liés à l'utilisation des médias (y compris l'<a
            href="/fr/docs/Web/API/Media_Streams_API#events"
            >API de capture et de diffusion de médias</a
          >, <a href="/fr/docs/Web/API/Web_Audio_API#events">Web Audio API</a>,
          <a href="/fr/docs/Web/API/Picture-in-Picture_API#events"
            >Picture-in-Picture API</a
          >, etc.).
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/ScriptProcessorNode#events"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLMediaElement#events"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/fr/docs/Web/API/AudioTrackList#events"
          ><code>AudioTrackList</code></a
        >,
        <a href="/fr/docs/Web/API/AudioScheduledSourceNode#events"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/fr/docs/Web/API/MediaRecorder#events"
          ><code>MediaRecorder</code></a
        >,
        <a href="/fr/docs/Web/API/MediaStream#events"
          ><code>MediaStream</code></a
        >,
        <a href="/fr/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/fr/docs/Web/API/VideoTrackList#events"
          ><code>VideoTrackList</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLTrackElement#events"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/fr/docs/Web/API/OfflineAudioContext#events"
          ><code>OfflineAudioContext</code></a
        >, <a href="/fr/docs/Web/API/TextTrack#events"><code>TextTrack</code></a
        >,
        <a href="/fr/docs/Web/API/TextTrackList#events"
          ><code>TextTrackList</code></a
        >, <a href="/fr/docs/Web/HTML/Element/audio#events">Element/audio</a>,
        <a href="/fr/docs/Web/HTML/Element/video#events">Element/video</a>.
      </td>
    </tr>
    <tr>
      <td>Messagerie</td>
      <td>
        <p>
          Événements liés à la réception par une fenêtre d'un message provenant
          d'un autre contexte de navigation.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Window#messaging_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Souris</td>
      <td>
        <p>
          Événements liés à l'utilisation d'une
          <a href="/fr/docs/Web/API/MouseEvent">souris d'ordinateur</a>.
        </p>
        <p>
          Utilisé pour notifier le clic de la souris, le double-clic, les
          événements haut et bas, le clic droit, le déplacement dans et hors
          d'un élément, la sélection de texte, etc.
        </p>
        <p>
          Les événements de type pointeur constituent une alternative aux
          événements de type souris, indépendamment du matériel utilisé. Les
          événements de type "glisser" et "roue" sont dérivés des événements de
          type "souris".
        </p>
      </td>
      <td>
        Les événements de souris déclenchés sur
        <a href="/fr/docs/Web/API/Element#mouse_events"><code>Element</code></a>
      </td>
    </tr>
    <tr>
      <td>Réseau/Connexion</td>
      <td>
        <p>
          Événements liés à l'obtention et à la perte d'une connexion réseau.
        </p>
      </td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/Window#connection_events"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/NetworkInformation#event_handler"
            ><code>NetworkInformation</code></a
          >
          (<a href="/fr/docs/Web/API/Network_Information_API"
            >Network Information API</a
          >).
        </p>
      </td>
    </tr>
    <tr>
      <td>Paiements</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/Payment_Request_API">Payment Request API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/PaymentRequest#events"
            ><code>PaymentRequest</code></a
          >,
          <a href="/fr/docs/Web/API/PaymentResponse#events"
            ><code>PaymentResponse</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>
        <p>
          Événements liés aux APIs
          <a href="/fr/docs/Web/API/Performance_API">Performance API</a>,
          <a href="/fr/docs/Web/API/Performance_Timeline"
            >Performance Timeline API</a
          >,
          <a href="/fr/docs/Web/API/Navigation_timing_API"
            >Navigation Timing API</a
          >, <a href="/fr/docs/Web/API/User_Timing_API">User Timing API</a>, et
          <a href="/fr/docs/Web/API/Resource_Timing_API">Resource Timing API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/Performance#events"
            ><code>Performance</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Pointeur</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Fournit une notification agnostique du matériel à partir des
          dispositifs de pointage, y compris la souris, la souris tactile, le
          stylo/stylet.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Document#pointer_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLElement#pointer_events"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Impression</td>
      <td><p>Événements liés à l'impression.</p></td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Window#print_events"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Rejet de promesse</td>
      <td>
        <p>
          Événements envoyés au contexte global du script lorsqu'une promesse
          JavaScript est rejetée.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Window#promise_rejection_events"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/WebSockets_API">WebSockets API</a>.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/WebSocket#events"><code>Websocket</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Événements liés aux images SVG.</p></td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/SVGElement#events"
            ><code>SVGElement</code></a
          >,
          <a href="/fr/docs/Web/API/SVGAnimationElement#events"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/fr/docs/Web/API/SVGGraphicsElement#events"
            ><code>SVGGraphicsElement</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Sélection de texte</td>
      <td>
        <p>
          Événements liés à la
          <a href="/fr/docs/Web/API/Selection">sélection du texte</a>.
        </p>
      </td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/Document#selection_events"
            ><code>Document</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Tactile</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/Touch_events">Événements tactiles</a>.
        </p>
        <p>
          Fournit des événements de notification provenant de l'interaction avec
          un écran tactile (c'est-à-dire l'utilisation d'un doigt ou d'un
          stylet). Non lié à l'API
          <a href="/fr/docs/Web/API/Force_Touch_events#events"
            >Force Touch API</a
          >.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/Document#touch_events"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#touch_events"><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Réalité virtuelle</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
        </p>
        <div class="note">
          <p>
            <strong>Note :</strong> L'API
            <a href="/fr/docs/Web/API/WebVR_API">WebVR API</a> (et les
            événements associés à
            <a href="/fr/docs/Web/API/Window#webvr_events"
              ><code>Window</code></a
            >) sont dépréciés.
          </p>
        </div>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/XRSystem#events"><code>XRSystem</code></a
        >, <a href="/fr/docs/Web/API/XRSession#events"><code>XRSession</code></a
        >,
        <a href="/fr/docs/Web/API/XRReferenceSpace#events"
          ><code>XRReferenceSpace</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>RTC (communication en temps réel)</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/RTCDataChannel#events"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/fr/docs/Web/API/RTCDTMFSender#events"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/fr/docs/Web/API/RTCIceTransport#events"
          ><code>RTCIceTransport</code></a
        >,
        <a href="/fr/docs/Web/API/RTCPeerConnection#events"
          ><code>RTCPeerConnection</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Événements envoyés par le serveur</td>
      <td>
        <p>
          Les événements liés à l'<a href="/fr/docs/Web/API/Server-sent_events"
            >API des événements envoyés par le serveur</a
          >.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/EventSource#events"
          ><code>EventSource</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Synthèse vocale</td>
      <td>
        <p>
          Les événements liés à l'API
          <a href="/fr/docs/Web/API/Web_Speech_API">Web Speech API</a>.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/SpeechSynthesisUtterance#events"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Les événements liés aux APIs
          <a href="/fr/docs/Web/API/Web_Workers_API">Web Workers API</a>,
          <a href="/fr/docs/Web/API/Service_Worker_API">Service Worker API</a>,
          <a href="/fr/docs/Web/API/Broadcast_Channel_API"
            >Broadcast Channel API</a
          >, et
          <a href="/fr/docs/Web/API/Channel_Messaging_API"
            >Channel Messaging API</a
          >.
        </p>
        <p>
          Utilisé pour répondre aux nouveaux messages et aux erreurs d'envoi de
          messages. Les travailleurs de service peuvent également être notifiés
          d'autres événements, notamment les notifications push, les
          utilisateurs qui cliquent sur les notifications affichées, le fait que
          l'abonnement push a été invalidé, la suppression d'éléments de l'index
          de contenu, etc.
        </p>
      </td>
      <td>
        Événements déclenchés sur
        <a href="/fr/docs/Web/API/ServiceWorkerGlobalScope#events"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/DedicatedWorkerGlobalScope#events"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/SharedWorkerGlobalScope#events"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >, <a href="/fr/docs/Web/API/Worker#events"><code>Worker</code></a
        >,
        <a href="/fr/docs/Web/API/WorkerGlobalScope#events"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/BroadcastChannel#events"
          ><code>BroadcastChannel</code></a
        >,
        <a href="/fr/docs/Web/API/MessagePort#events"
          ><code>MessagePort</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Listing des événements

Cette section répertorie les événements qui ont _leurs propres_ pages de référence sur MDN. Si vous êtes intéressé par un événement qui n'est pas listé ici, essayez de rechercher son nom, son domaine ou les spécifications associées sur le reste de MDN.

- {{DOMxRef("AbortSignal")}}

  - [abort](/fr/docs/Web/API/AbortSignal/abort_event)

- {{DOMxRef("AudioScheduledSourceNode")}}

  - [ended](/fr/docs/Web/API/AudioScheduledSourceNode/ended_event)

- {{DOMxRef("AudioTrackList")}}

  - [addtrack](/fr/docs/Web/API/AudioTrackList/addtrack_event)
  - [change](/fr/docs/Web/API/AudioTrackList/change_event)
  - [removetrack](/fr/docs/Web/API/AudioTrackList/removetrack_event)

- {{DOMxRef("BroadcastChannel")}}

  - [messageerror](/fr/docs/Web/API/BroadcastChannel/messageerror_event)
  - [message](/fr/docs/Web/API/BroadcastChannel/message_event)

- {{DOMxRef("DedicatedWorkerGlobalScope")}}

  - [messageerror](/fr/docs/Web/API/DedicatedWorkerGlobalScope/messageerror_event)
  - [message](/fr/docs/Web/API/DedicatedWorkerGlobalScope/message_event)

- {{DOMxRef("Document")}}

  - [animationcancel](/fr/docs/Web/API/Document/animationcancel_event)
  - [animationend](/fr/docs/Web/API/Document/animationend_event)
  - [animationiteration](/fr/docs/Web/API/Document/animationiteration_event)
  - [animationstart](/fr/docs/Web/API/Document/animationstart_event)
  - [copy](/fr/docs/Web/API/Document/copy_event)
  - [cut](/fr/docs/Web/API/Document/cut_event)
  - [DOMContentLoaded](/fr/docs/Web/API/Document/DOMContentLoaded_event)
  - [dragend](/fr/docs/Web/API/Document/dragend_event)
  - [dragenter](/fr/docs/Web/API/Document/dragenter_event)
  - [dragleave](/fr/docs/Web/API/Document/dragleave_event)
  - [dragover](/fr/docs/Web/API/Document/dragover_event)
  - [dragstart](/fr/docs/Web/API/Document/dragstart_event)
  - [drag](/fr/docs/Web/API/Document/drag_event)
  - [drop](/fr/docs/Web/API/Document/drop_event)
  - [fullscreenchange](/fr/docs/Web/API/Document/fullscreenchange_event)
  - [fullscreenerror](/fr/docs/Web/API/Document/fullscreenerror_event)
  - [gotpointercapture](/fr/docs/Web/API/Document/gotpointercapture_event)
  - [keydown](/fr/docs/Web/API/Document/keydown_event)
  - [keypress](/fr/docs/Web/API/Document/keypress_event)
  - [keyup](/fr/docs/Web/API/Document/keyup_event)
  - [lostpointercapture](/fr/docs/Web/API/Document/lostpointercapture_event)
  - [paste](/fr/docs/Web/API/Document/paste_event)
  - [pointercancel](/fr/docs/Web/API/Document/pointercancel_event)
  - [pointerdown](/fr/docs/Web/API/Document/pointerdown_event)
  - [pointerenter](/fr/docs/Web/API/Document/pointerenter_event)
  - [pointerleave](/fr/docs/Web/API/Document/pointerleave_event)
  - [pointerlockchange](/fr/docs/Web/API/Document/pointerlockchange_event)
  - [pointerlockerror](/fr/docs/Web/API/Document/pointerlockerror_event)
  - [pointermove](/fr/docs/Web/API/Document/pointermove_event)
  - [pointerout](/fr/docs/Web/API/Document/pointerout_event)
  - [pointerover](/fr/docs/Web/API/Document/pointerover_event)
  - [pointerup](/fr/docs/Web/API/Document/pointerup_event)
  - [readystatechange](/fr/docs/Web/API/Document/readystatechange_event)
  - [scroll](/fr/docs/Web/API/Document/scroll_event)
  - [selectionchange](/fr/docs/Web/API/Document/selectionchange_event)
  - [selectstart](/fr/docs/Web/API/Document/selectstart_event)
  - [touchcancel](/fr/docs/Web/API/Document/touchcancel_event)
  - [touchend](/fr/docs/Web/API/Document/touchend_event)
  - [touchmove](/fr/docs/Web/API/Document/touchmove_event)
  - [touchstart](/fr/docs/Web/API/Document/touchstart_event)
  - [transitioncancel](/fr/docs/Web/API/Document/transitioncancel_event)
  - [transitionend](/fr/docs/Web/API/Document/transitionend_event)
  - [transitionrun](/fr/docs/Web/API/Document/transitionrun_event)
  - [transitionstart](/fr/docs/Web/API/Document/transitionstart_event)
  - [visibilitychange](/fr/docs/Web/API/Document/visibilitychange_event)
  - [wheel](/fr/docs/Web/API/Document/wheel_event)

- {{DOMxRef("Element")}}

  - [afterscriptexecute](/fr/docs/Web/API/Element/afterscriptexecute_event)
  - [auxclick](/fr/docs/Web/API/Element/auxclick_event)
  - [beforescriptexecute](/fr/docs/Web/API/Element/beforescriptexecute_event)
  - [blur](/fr/docs/Web/API/Element/blur_event)
  - [click](/fr/docs/Web/API/Element/click_event)
  - [compositionend](/fr/docs/Web/API/Element/compositionend_event)
  - [compositionstart](/fr/docs/Web/API/Element/compositionstart_event)
  - [compositionupdate](/fr/docs/Web/API/Element/compositionupdate_event)
  - [contextmenu](/fr/docs/Web/API/Element/contextmenu_event)
  - [copy](/fr/docs/Web/API/Element/copy_event)
  - [cut](/fr/docs/Web/API/Element/cut_event)
  - [dblclick](/fr/docs/Web/API/Element/dblclick_event)
  - [DOMActivate](/fr/docs/Web/API/Element/DOMActivate_event)
  - [DOMMouseScroll](/fr/docs/Web/API/Element/DOMMouseScroll_event)
  - [error](/fr/docs/Web/API/Element/error_event)
  - [focusin](/fr/docs/Web/API/Element/focusin_event)
  - [focusout](/fr/docs/Web/API/Element/focusout_event)
  - [focus](/fr/docs/Web/API/Element/focus_event)
  - [fullscreenchange](/fr/docs/Web/API/Element/fullscreenchange_event)
  - [fullscreenerror](/fr/docs/Web/API/Element/fullscreenerror_event)
  - [gesturechange](/fr/docs/Web/API/Element/gesturechange_event)
  - [gestureend](/fr/docs/Web/API/Element/gestureend_event)
  - [gesturestart](/fr/docs/Web/API/Element/gesturestart_event)
  - [keydown](/fr/docs/Web/API/Element/keydown_event)
  - [keypress](/fr/docs/Web/API/Element/keypress_event)
  - [keyup](/fr/docs/Web/API/Element/keyup_event)
  - [mousedown](/fr/docs/Web/API/Element/mousedown_event)
  - [mouseenter](/fr/docs/Web/API/Element/mouseenter_event)
  - [mouseleave](/fr/docs/Web/API/Element/mouseleave_event)
  - [mousemove](/fr/docs/Web/API/Element/mousemove_event)
  - [mouseout](/fr/docs/Web/API/Element/mouseout_event)
  - [mouseover](/fr/docs/Web/API/Element/mouseover_event)
  - [mouseup](/fr/docs/Web/API/Element/mouseup_event)
  - [mousewheel](/fr/docs/Web/API/Element/mousewheel_event)
  - [msContentZoom](/fr/docs/Web/API/Element/msContentZoom_event)
  - [MSGestureChange](/fr/docs/Web/API/Element/MSGestureChange_event)
  - [MSGestureEnd](/fr/docs/Web/API/Element/MSGestureEnd_event)
  - [MSGestureHold](/fr/docs/Web/API/Element/MSGestureHold_event)
  - [MSGestureStart](/fr/docs/Web/API/Element/MSGestureStart_event)
  - [MSGestureTap](/fr/docs/Web/API/Element/MSGestureTap_event)
  - [MSInertiaStart](/fr/docs/Web/API/Element/MSInertiaStart_event)
  - [MSManipulationStateChanged](/fr/docs/Web/API/Element/MSManipulationStateChanged_event)
  - [overflow](/fr/docs/Web/API/Element/overflow_event)
  - [paste](/fr/docs/Web/API/Element/paste_event)
  - [scroll](/fr/docs/Web/API/Element/scroll_event)
  - [select](/fr/docs/Web/API/Element/select_event)
  - [show](/fr/docs/Web/API/Element/show_event)
  - [touchcancel](/fr/docs/Web/API/Element/touchcancel_event)
  - [touchend](/fr/docs/Web/API/Element/touchend_event)
  - [touchmove](/fr/docs/Web/API/Element/touchmove_event)
  - [touchstart](/fr/docs/Web/API/Element/touchstart_event)
  - [underflow](/fr/docs/Web/API/Element/underflow_event)
  - [webkitmouseforcechanged](/fr/docs/Web/API/Element/webkitmouseforcechanged_event)
  - [webkitmouseforcedown](/fr/docs/Web/API/Element/webkitmouseforcedown_event)
  - [webkitmouseforceup](/fr/docs/Web/API/Element/webkitmouseforceup_event)
  - [webkitmouseforcewillbegin](/fr/docs/Web/API/Element/webkitmouseforcewillbegin_event)
  - [wheel](/fr/docs/Web/API/Element/wheel_event)

- {{DOMxRef("EventSource")}}

  - [error](/fr/docs/Web/API/EventSource/error_event)
  - [message](/fr/docs/Web/API/EventSource/message_event)
  - [open](/fr/docs/Web/API/EventSource/open_event)

- {{DOMxRef("FileReader")}}

  - [abort](/fr/docs/Web/API/FileReader/abort_event)
  - [error](/fr/docs/Web/API/FileReader/error_event)
  - [loadend](/fr/docs/Web/API/FileReader/loadend_event)
  - [loadstart](/fr/docs/Web/API/FileReader/loadstart_event)
  - [load](/fr/docs/Web/API/FileReader/load_event)
  - [progress](/fr/docs/Web/API/FileReader/progress_event)

- {{DOMxRef("HTMLCanvasElement")}}

  - [webglcontextcreationerror](/fr/docs/Web/API/HTMLCanvasElement/webglcontextcreationerror_event)
  - [webglcontextlost](/fr/docs/Web/API/HTMLCanvasElement/webglcontextlost_event)
  - [webglcontextrestored](/fr/docs/Web/API/HTMLCanvasElement/webglcontextrestored_event)

- {{DOMxRef("HTMLDetailsElement")}}

  - [toggle](/fr/docs/Web/API/HTMLDetailsElement/toggle_event)

- {{DOMxRef("HTMLDialogElement")}}

  - [cancel](/fr/docs/Web/API/HTMLDialogElement/cancel_event)
  - [close](/fr/docs/Web/API/HTMLDialogElement/close_event)

- {{DOMxRef("HTMLElement")}}

  - [animationcancel](/fr/docs/Web/API/HTMLElement/animationcancel_event)
  - [animationend](/fr/docs/Web/API/HTMLElement/animationend_event)
  - [animationiteration](/fr/docs/Web/API/HTMLElement/animationiteration_event)
  - [animationstart](/fr/docs/Web/API/HTMLElement/animationstart_event)
  - [beforeinput](/fr/docs/Web/API/HTMLElement/beforeinput_event)
  - [change](/fr/docs/Web/API/HTMLElement/change_event)
  - [gotpointercapture](/fr/docs/Web/API/HTMLElement/gotpointercapture_event)
  - [input](/fr/docs/Web/API/HTMLElement/input_event)
  - [lostpointercapture](/fr/docs/Web/API/HTMLElement/lostpointercapture_event)
  - [pointercancel](/fr/docs/Web/API/HTMLElement/pointercancel_event)
  - [pointerdown](/fr/docs/Web/API/HTMLElement/pointerdown_event)
  - [pointerenter](/fr/docs/Web/API/HTMLElement/pointerenter_event)
  - [pointerleave](/fr/docs/Web/API/HTMLElement/pointerleave_event)
  - [pointermove](/fr/docs/Web/API/HTMLElement/pointermove_event)
  - [pointerout](/fr/docs/Web/API/HTMLElement/pointerout_event)
  - [pointerover](/fr/docs/Web/API/HTMLElement/pointerover_event)
  - [pointerup](/fr/docs/Web/API/HTMLElement/pointerup_event)
  - [transitioncancel](/fr/docs/Web/API/HTMLElement/transitioncancel_event)
  - [transitionend](/fr/docs/Web/API/HTMLElement/transitionend_event)
  - [transitionrun](/fr/docs/Web/API/HTMLElement/transitionrun_event)
  - [transitionstart](/fr/docs/Web/API/HTMLElement/transitionstart_event)

- {{DOMxRef("HTMLFormElement")}}

  - [formdata](/fr/docs/Web/API/HTMLFormElement/formdata_event)
  - [reset](/fr/docs/Web/API/HTMLFormElement/reset_event)
  - [submit](/fr/docs/Web/API/HTMLFormElement/submit_event)

- {{DOMxRef("HTMLInputElement")}}

  - [invalid](/fr/docs/Web/API/HTMLInputElement/invalid_event)
  - [search](/fr/docs/Web/API/HTMLInputElement/search_event)

- {{DOMxRef("HTMLMediaElement")}}

  - [abort](/fr/docs/Web/API/HTMLMediaElement/abort_event)
  - [canplaythrough](/fr/docs/Web/API/HTMLMediaElement/canplaythrough_event)
  - [canplay](/fr/docs/Web/API/HTMLMediaElement/canplay_event)
  - [durationchange](/fr/docs/Web/API/HTMLMediaElement/durationchange_event)
  - [emptied](/fr/docs/Web/API/HTMLMediaElement/emptied_event)
  - [ended](/fr/docs/Web/API/HTMLMediaElement/ended_event)
  - [error](/fr/docs/Web/API/HTMLMediaElement/error_event)
  - [loadeddata](/fr/docs/Web/API/HTMLMediaElement/loadeddata_event)
  - [loadedmetadata](/fr/docs/Web/API/HTMLMediaElement/loadedmetadata_event)
  - [loadstart](/fr/docs/Web/API/HTMLMediaElement/loadstart_event)
  - [pause](/fr/docs/Web/API/HTMLMediaElement/pause_event)
  - [playing](/fr/docs/Web/API/HTMLMediaElement/playing_event)
  - [play](/fr/docs/Web/API/HTMLMediaElement/play_event)
  - [progress](/fr/docs/Web/API/HTMLMediaElement/progress_event)
  - [ratechange](/fr/docs/Web/API/HTMLMediaElement/ratechange_event)
  - [seeked](/fr/docs/Web/API/HTMLMediaElement/seeked_event)
  - [seeking](/fr/docs/Web/API/HTMLMediaElement/seeking_event)
  - [stalled](/fr/docs/Web/API/HTMLMediaElement/stalled_event)
  - [suspend](/fr/docs/Web/API/HTMLMediaElement/suspend_event)
  - [timeupdate](/fr/docs/Web/API/HTMLMediaElement/timeupdate_event)
  - [volumechange](/fr/docs/Web/API/HTMLMediaElement/volumechange_event)
  - [waiting](/fr/docs/Web/API/HTMLMediaElement/waiting_event)

- {{DOMxRef("HTMLSlotElement")}}

  - [slotchange](/fr/docs/Web/API/HTMLSlotElement/slotchange_event)

- {{DOMxRef("HTMLTrackElement")}}

  - [cuechange](/fr/docs/Web/API/HTMLTrackElement/cuechange_event)

- {{DOMxRef("HTMLVideoElement")}}

  - [enterpictureinpicture](/fr/docs/Web/API/HTMLVideoElement/enterpictureinpicture_event)
  - [leavepictureinpicture](/fr/docs/Web/API/HTMLVideoElement/leavepictureinpicture_event)

- {{DOMxRef("IDBDatabase")}}

  - [abort](/fr/docs/Web/API/IDBDatabase/abort_event)
  - [close](/fr/docs/Web/API/IDBDatabase/close_event)
  - [error](/fr/docs/Web/API/IDBDatabase/error_event)
  - [versionchange](/fr/docs/Web/API/IDBDatabase/versionchange_event)

- {{DOMxRef("IDBOpenDBRequest")}}

  - [blocked](/fr/docs/Web/API/IDBOpenDBRequest/blocked_event)
  - [upgradeneeded](/fr/docs/Web/API/IDBOpenDBRequest/upgradeneeded_event)

- {{DOMxRef("IDBRequest")}}

  - [error](/fr/docs/Web/API/IDBRequest/error_event)
  - [success](/fr/docs/Web/API/IDBRequest/success_event)

- {{DOMxRef("IDBTransaction")}}

  - [abort](/fr/docs/Web/API/IDBTransaction/abort_event)
  - [complete](/fr/docs/Web/API/IDBTransaction/complete_event)
  - [error](/fr/docs/Web/API/IDBTransaction/error_event)

- {{DOMxRef("MediaDevices")}}

  - [devicechange](/fr/docs/Web/API/MediaDevices/devicechange_event)

- {{DOMxRef("MediaRecorder")}}

  - [error](/fr/docs/Web/API/MediaRecorder/error_event)

- {{DOMxRef("MediaStream")}}

  - [addtrack](/fr/docs/Web/API/MediaStream/addtrack_event)
  - [removetrack](/fr/docs/Web/API/MediaStream/removetrack_event)

- {{DOMxRef("MediaStreamTrack")}}

  - [ended](/fr/docs/Web/API/MediaStreamTrack/ended_event)
  - [mute](/fr/docs/Web/API/MediaStreamTrack/mute_event)
  - [unmute](/fr/docs/Web/API/MediaStreamTrack/unmute_event)

- {{DOMxRef("MessagePort")}}

  - [messageerror](/fr/docs/Web/API/MessagePort/messageerror_event)
  - [message](/fr/docs/Web/API/MessagePort/message_event)

- {{DOMxRef("OfflineAudioContext")}}

  - [complete](/fr/docs/Web/API/OfflineAudioContext/complete_event)

- {{DOMxRef("PaymentRequest")}}

  - [merchantvalidation](/fr/docs/Web/API/PaymentRequest/merchantvalidation_event)
  - [paymentmethodchange](/fr/docs/Web/API/PaymentRequest/paymentmethodchange_event)
  - [shippingaddresschange](/fr/docs/Web/API/PaymentRequest/shippingaddresschange_event)
  - [shippingoptionchange](/fr/docs/Web/API/PaymentRequest/shippingoptionchange_event)

- {{DOMxRef("PaymentResponse")}}

  - [payerdetailchange](/fr/docs/Web/API/PaymentResponse/payerdetailchange_event)

- {{DOMxRef("Performance")}}

  - [resourcetimingbufferfull](/fr/docs/Web/API/Performance/resourcetimingbufferfull_event)

- {{DOMxRef("PictureInPictureWindow")}}

  - [resize](/fr/docs/Web/API/PictureInPictureWindow/resize_event)

- {{DOMxRef("RTCDataChannel")}}

  - [bufferedamountlow](/fr/docs/Web/API/RTCDataChannel/bufferedamountlow_event)
  - [close](/fr/docs/Web/API/RTCDataChannel/close_event)
  - [closing](/fr/docs/Web/API/RTCDataChannel/closing_event)
  - [error](/fr/docs/Web/API/RTCDataChannel/error_event)
  - [message](/fr/docs/Web/API/RTCDataChannel/message_event)
  - [open](/fr/docs/Web/API/RTCDataChannel/open_event)

- {{DOMxRef("RTCDtlsTransport")}}

  - [error](/fr/docs/Web/API/RTCDtlsTransport/error_event)

- {{DOMxRef("RTCDTMFSender")}}

  - [tonechange](/fr/docs/Web/API/RTCDTMFSender/tonechange_event)

- {{DOMxRef("RTCIceTransport")}}

  - [gatheringstatechange](/fr/docs/Web/API/RTCIceTransport/gatheringstatechange_event)
  - [selectedcandidatepairchange](/fr/docs/Web/API/RTCIceTransport/selectedcandidatepairchange_event)
  - [statechange](/fr/docs/Web/API/RTCIceTransport/statechange_event)

- {{DOMxRef("RTCPeerConnection")}}

  - [addstream](/fr/docs/Web/API/RTCPeerConnection/addstream_event)
  - [connectionstatechange](/fr/docs/Web/API/RTCPeerConnection/connectionstatechange_event)
  - [datachannel](/fr/docs/Web/API/RTCPeerConnection/datachannel_event)
  - [icecandidateerror](/fr/docs/Web/API/RTCPeerConnection/icecandidateerror_event)
  - [icecandidate](/fr/docs/Web/API/RTCPeerConnection/icecandidate_event)
  - [iceconnectionstatechange](/fr/docs/Web/API/RTCPeerConnection/iceconnectionstatechange_event)
  - [icegatheringstatechange](/fr/docs/Web/API/RTCPeerConnection/icegatheringstatechange_event)
  - [negotiationneeded](/fr/docs/Web/API/RTCPeerConnection/negotiationneeded_event)
  - [removestream](/fr/docs/Web/API/RTCPeerConnection/removestream_event)
  - [signalingstatechange](/fr/docs/Web/API/RTCPeerConnection/signalingstatechange_event)
  - [track](/fr/docs/Web/API/RTCPeerConnection/track_event)

- {{DOMxRef("ScriptProcessorNode")}}

  - [audioprocess](/fr/docs/Web/API/ScriptProcessorNode/audioprocess_event)

- {{DOMxRef("ServiceWorkerContainer")}}

  - [message](/fr/docs/Web/API/ServiceWorkerContainer/message_event)

- {{DOMxRef("ServiceWorkerGlobalScope")}}

  - [activate](/fr/docs/Web/API/ServiceWorkerGlobalScope/activate_event)
  - [contentdelete](/fr/docs/Web/API/ServiceWorkerGlobalScope/contentdelete_event)
  - [install](/fr/docs/Web/API/ServiceWorkerGlobalScope/install_event)
  - [message](/fr/docs/Web/API/ServiceWorkerGlobalScope/message_event)
  - [notificationclick](/fr/docs/Web/API/ServiceWorkerGlobalScope/notificationclick_event)
  - [pushsubscriptionchange](/fr/docs/Web/API/ServiceWorkerGlobalScope/pushsubscriptionchange_event)
  - [push](/fr/docs/Web/API/ServiceWorkerGlobalScope/push_event)

- {{DOMxRef("SharedWorkerGlobalScope")}}

  - [connect](/fr/docs/Web/API/SharedWorkerGlobalScope/connect_event)

- {{DOMxRef("SpeechRecognition")}}

  - [audioend](/fr/docs/Web/API/SpeechRecognition/audioend_event)
  - [audiostart](/fr/docs/Web/API/SpeechRecognition/audiostart_event)
  - [end](/fr/docs/Web/API/SpeechRecognition/end_event)
  - [error](/fr/docs/Web/API/SpeechRecognition/error_event)
  - [nomatch](/fr/docs/Web/API/SpeechRecognition/nomatch_event)
  - [result](/fr/docs/Web/API/SpeechRecognition/result_event)
  - [soundend](/fr/docs/Web/API/SpeechRecognition/soundend_event)
  - [soundstart](/fr/docs/Web/API/SpeechRecognition/soundstart_event)
  - [speechend](/fr/docs/Web/API/SpeechRecognition/speechend_event)
  - [speechstart](/fr/docs/Web/API/SpeechRecognition/speechstart_event)
  - [start](/fr/docs/Web/API/SpeechRecognition/start_event)

- {{DOMxRef("SpeechSynthesis")}}

  - [voiceschanged](/fr/docs/Web/API/SpeechSynthesis/voiceschanged_event)

- {{DOMxRef("SpeechSynthesisUtterance")}}

  - [boundary](/fr/docs/Web/API/SpeechSynthesisUtterance/boundary_event)
  - [end](/fr/docs/Web/API/SpeechSynthesisUtterance/end_event)
  - [error](/fr/docs/Web/API/SpeechSynthesisUtterance/error_event)
  - [mark](/fr/docs/Web/API/SpeechSynthesisUtterance/mark_event)
  - [pause](/fr/docs/Web/API/SpeechSynthesisUtterance/pause_event)
  - [resume](/fr/docs/Web/API/SpeechSynthesisUtterance/resume_event)
  - [start](/fr/docs/Web/API/SpeechSynthesisUtterance/start_event)

- {{DOMxRef("SVGAnimationElement")}}

  - [beginEvent](/fr/docs/Web/API/SVGAnimationElement/beginEvent_event)
  - [endEvent](/fr/docs/Web/API/SVGAnimationElement/endEvent_event)
  - [repeatEvent](/fr/docs/Web/API/SVGAnimationElement/repeatEvent_event)

- {{DOMxRef("SVGElement")}}

  - [abort](/fr/docs/Web/API/SVGElement/abort_event)
  - [error](/fr/docs/Web/API/SVGElement/error_event)
  - [load](/fr/docs/Web/API/SVGElement/load_event)
  - [resize](/fr/docs/Web/API/SVGElement/resize_event)
  - [scroll](/fr/docs/Web/API/SVGElement/scroll_event)
  - [unload](/fr/docs/Web/API/SVGElement/unload_event)

- {{DOMxRef("SVGGraphicsElement")}}

  - [copy](/fr/docs/Web/API/SVGGraphicsElement/copy_event)
  - [cut](/fr/docs/Web/API/SVGGraphicsElement/cut_event)
  - [paste](/fr/docs/Web/API/SVGGraphicsElement/paste_event)

- {{DOMxRef("TextTrack")}}

  - [cuechange](/fr/docs/Web/API/TextTrack/cuechange_event)

- {{DOMxRef("TextTrackList")}}

  - [addtrack](/fr/docs/Web/API/TextTrackList/addtrack_event)
  - [change](/fr/docs/Web/API/TextTrackList/change_event)
  - [removeTrack](/fr/docs/Web/API/TextTrackList/removeTrack_event)

- {{DOMxRef("VideoTrackList")}}

  - [addtrack](/fr/docs/Web/API/VideoTrackList/addtrack_event)
  - [change](/fr/docs/Web/API/VideoTrackList/change_event)
  - [removetrack](/fr/docs/Web/API/VideoTrackList/removetrack_event)

- {{DOMxRef("VisualViewport")}}

  - [resize](/fr/docs/Web/API/VisualViewport/resize_event)
  - [scroll](/fr/docs/Web/API/VisualViewport/scroll_event)

- {{DOMxRef("WebSocket")}}

  - [close](/fr/docs/Web/API/WebSocket/close_event)
  - [error](/fr/docs/Web/API/WebSocket/error_event)
  - [message](/fr/docs/Web/API/WebSocket/message_event)
  - [open](/fr/docs/Web/API/WebSocket/open_event)

- {{DOMxRef("Window")}}

  - [afterprint](/fr/docs/Web/API/Window/afterprint_event)
  - [animationcancel](/fr/docs/Web/API/Window/animationcancel_event)
  - [animationend](/fr/docs/Web/API/Window/animationend_event)
  - [animationiteration](/fr/docs/Web/API/Window/animationiteration_event)
  - [animationstart](/fr/docs/Web/API/Window/animationstart_event)
  - [appinstalled](/fr/docs/Web/API/Window/appinstalled_event)
  - [beforeprint](/fr/docs/Web/API/Window/beforeprint_event)
  - [beforeunload](/fr/docs/Web/API/Window/beforeunload_event)
  - [blur](/fr/docs/Web/API/Window/blur_event)
  - [copy](/fr/docs/Web/API/Window/copy_event)
  - [cut](/fr/docs/Web/API/Window/cut_event)
  - [devicemotion](/fr/docs/Web/API/Window/devicemotion_event)
  - [deviceorientation](/fr/docs/Web/API/Window/deviceorientation_event)
  - [DOMContentLoaded](/fr/docs/Web/API/Window/DOMContentLoaded_event)
  - [error](/fr/docs/Web/API/Window/error_event)
  - [focus](/fr/docs/Web/API/Window/focus_event)
  - [gamepadconnected](/fr/docs/Web/API/Window/gamepadconnected_event)
  - [gamepaddisconnected](/fr/docs/Web/API/Window/gamepaddisconnected_event)
  - [hashchange](/fr/docs/Web/API/Window/hashchange_event)
  - [languagechange](/fr/docs/Web/API/Window/languagechange_event)
  - [load](/fr/docs/Web/API/Window/load_event)
  - [messageerror](/fr/docs/Web/API/Window/messageerror_event)
  - [message](/fr/docs/Web/API/Window/message_event)
  - [offline](/fr/docs/Web/API/Window/offline_event)
  - [online](/fr/docs/Web/API/Window/online_event)
  - [orientationchange](/fr/docs/Web/API/Window/orientationchange_event)
  - [pagehide](/fr/docs/Web/API/Window/pagehide_event)
  - [pageshow](/fr/docs/Web/API/Window/pageshow_event)
  - [paste](/fr/docs/Web/API/Window/paste_event)
  - [popstate](/fr/docs/Web/API/Window/popstate_event)
  - [rejectionhandled](/fr/docs/Web/API/Window/rejectionhandled_event)
  - [resize](/fr/docs/Web/API/Window/resize_event)
  - [storage](/fr/docs/Web/API/Window/storage_event)
  - [transitioncancel](/fr/docs/Web/API/Window/transitioncancel_event)
  - [transitionend](/fr/docs/Web/API/Window/transitionend_event)
  - [transitionrun](/fr/docs/Web/API/Window/transitionrun_event)
  - [transitionstart](/fr/docs/Web/API/Window/transitionstart_event)
  - [unhandledrejection](/fr/docs/Web/API/Window/unhandledrejection_event)
  - [unload](/fr/docs/Web/API/Window/unload_event)
  - [vrdisplayactivate](/fr/docs/Web/API/Window/vrdisplayactivate_event)
  - [vrdisplayblur](/fr/docs/Web/API/Window/vrdisplayblur_event)
  - [vrdisplayconnect](/fr/docs/Web/API/Window/vrdisplayconnect_event)
  - [vrdisplaydeactivate](/fr/docs/Web/API/Window/vrdisplaydeactivate_event)
  - [vrdisplaydisconnect](/fr/docs/Web/API/Window/vrdisplaydisconnect_event)
  - [vrdisplayfocus](/fr/docs/Web/API/Window/vrdisplayfocus_event)
  - [vrdisplaypointerrestricted](/fr/docs/Web/API/Window/vrdisplaypointerrestricted_event)
  - [vrdisplaypointerunrestricted](/fr/docs/Web/API/Window/vrdisplaypointerunrestricted_event)
  - [vrdisplaypresentchange](/fr/docs/Web/API/Window/vrdisplaypresentchange_event)

- {{DOMxRef("Worker")}}

  - [messageerror](/fr/docs/Web/API/Worker/messageerror_event)
  - [message](/fr/docs/Web/API/Worker/message_event)

- {{DOMxRef("WorkerGlobalScope")}}

  - [languagechange](/fr/docs/Web/API/WorkerGlobalScope/languagechange_event)

- {{DOMxRef("XMLHttpRequest")}}

  - [abort](/fr/docs/Web/API/XMLHttpRequest/abort_event)
  - [error](/fr/docs/Web/API/XMLHttpRequest/error_event)
  - [loadend](/fr/docs/Web/API/XMLHttpRequest/loadend_event)
  - [loadstart](/fr/docs/Web/API/XMLHttpRequest/loadstart_event)
  - [load](/fr/docs/Web/API/XMLHttpRequest/load_event)
  - [progress](/fr/docs/Web/API/XMLHttpRequest/progress_event)
  - [timeout](/fr/docs/Web/API/XMLHttpRequest/timeout_event)

- {{DOMxRef("XRReferenceSpace")}}

  - [reset](/fr/docs/Web/API/XRReferenceSpace/reset_event)

- {{DOMxRef("XRSession")}}

  - [end](/fr/docs/Web/API/XRSession/end_event)
  - [inputsourceschange](/fr/docs/Web/API/XRSession/inputsourceschange_event)
  - [selectend](/fr/docs/Web/API/XRSession/selectend_event)
  - [selectstart](/fr/docs/Web/API/XRSession/selectstart_event)
  - [select](/fr/docs/Web/API/XRSession/select_event)
  - [squeezeend](/fr/docs/Web/API/XRSession/squeezeend_event)
  - [squeezestart](/fr/docs/Web/API/XRSession/squeezestart_event)
  - [squeeze](/fr/docs/Web/API/XRSession/squeeze_event)
  - [visibilitychange](/fr/docs/Web/API/XRSession/visibilitychange_event)

- {{DOMxRef("XRSystem")}}

  - [devicechange](/fr/docs/Web/API/XRSystem/devicechange_event)
