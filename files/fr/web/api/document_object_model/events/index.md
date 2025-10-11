---
title: Événements DOM
short-title: Travailler avec des événements
slug: Web/API/Document_Object_Model/Events
original_slug: Web/Events
l10n:
  sourceCommit: 976891fb78ba24cb4ac6e58ae8a903b20eae4337
---

{{DefaultAPISidebar("DOM")}}

Les [événements DOM](/fr/docs/Learn_web_development/Core/Scripting/Events) sont déclenchés pour notifier au code des « changements intéressants » qui peuvent affecter l'exécution du code. Ces changements peuvent résulter d'interactions avec l'utilisateur, comme l'utilisation de la souris ou le redimensionnement d'une fenêtre, de changements dans l'état de l'environnement sous-jacent (par exemple, une batterie faible ou des événements médiatiques provenant du système d'exploitation), et d'autres causes.

Chaque événement est représenté par un objet implémentant l'interface [`Event`](/fr/docs/Web/API/Event), et peut avoir d'autres propriétés et/ou champs, permettant d'obtenir des informations supplémentaires au sujet de ce qui s'est produit. La documentation de chaque événement comporte un tableau (en haut de la page) qui comprend un lien vers l'interface de l'événement associé et d'autres informations pertinentes. Une liste complète des différents types d'événements est donnée dans [Event >Événement `Interfaces basées sur`](/fr/docs/Web/API/Event#introduction).

Cette rubrique fournit un index des principales _sortes_ d'événements qui peuvent vous intéresser (animation, presse-papiers, workers, etc.) ainsi que les principales classes qui implémentent ces sortes d'événements. À la fin se trouve une liste exhaustive de tous les événements documentés.

## Index des événements

<table class="standard-table">
  <tbody>
    <tr>
      <th>Type d'événement</th>
      <th style="width: 50%">Description</th>
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
          <a href="/fr/docs/Web/CSS/CSS_transitions">Transitions CSS</a>.
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
      <td>Mutation du DOM</td>
      <td>
        <p>
          Événements liés aux modifications de la hiérarchie et des nœuds du
          Document Object Model (DOM).
        </p>
      </td>
      <td>
        <div class="notecard warning">
          <p>
            <strong>Avertissement&nbsp;:</strong>
            <a href="/fr/docs/Web/API/MutationEvent">Mutation Events</a> sont
            dépréciés.
            L'API
            <a href="/fr/docs/Web/API/MutationObserver"
              >Mutation Observers</a
            >
            doit être utilisé à la place.
          </p>
        </div>
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
      <td>Ciblage</td>
      <td>
        <p>Les événements liés aux éléments qui gagnent et perdent la sélection.</p>
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
      <td>Gestes</td>
      <td>
        <p>
          <a href="/fr/docs/Web/API/Touch_events">Les événements tactiles</a> sont
          recommandés pour la mise en œuvre des gestes.
        </p>
      </td>
      <td>
        <p>
          Événements déclenchés sur
          <a href="/fr/docs/Web/API/Document#touch_events"
            ><code>Document</code></a
          >,
          <a href="/fr/docs/Web/API/Element#touch_events"
            ><code>Element</code></a
          >.
        </p>
        <p>En outre, il existe un certain nombre d'événements de geste non standard&nbsp;:</p>
        <ul>
          <li>
            Événements spécifiques à WebKit non standard sur
            <a href="/fr/docs/Web/API/Element#touch_events"
              ><code>Element</code></a
            >&nbsp;:
            les événements <a href="/fr/docs/Web/API/Element/gesturestart_event"
              ><code>gesturestart</code></a
            >,
            <a href="/fr/docs/Web/API/Element/gesturechange_event"
              ><code>gesturechange</code></a
            >,
            <a href="/fr/docs/Web/API/Element/gestureend_event"
              ><code>gestureend</code></a
            >.
          </li>
        </ul>
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
          <a href="/fr/docs/Web/HTML/Reference/Elements/input"><code>&#x3C;input></code></a
          >,
          <a href="/fr/docs/Web/HTML/Reference/Elements/select"
            ><code>&#x3C;select></code></a
          >, ou
          <a href="/fr/docs/Web/HTML/Reference/Elements/textarea"
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
      <td>Manifeste</td>
      <td>
        <p>
          Événements liés à l'installation de
          <a href="/fr/docs/Web/Progressive_web_apps/Manifest">Manifeste des applications web</a>.
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
            href="/fr/docs/Web/API/Media_Capture_and_Streams_API#events"
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
        >, <a href="/fr/docs/Web/HTML/Reference/Elements/audio#events">Element/audio</a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/video#events">Element/video</a>.
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
          <a href="/fr/docs/Web/API/Performance_API">Performance API</a>.
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

## Créer et déclencher des événements

En plus des événements déclenchés par les interfaces intégrées, vous pouvez créer et déclencher vous-même des événements DOM. Ces événements sont couramment appelés _événements synthétiques_, par opposition aux événements déclenchés par le navigateur.

### Créer des événements personnalisés

Les événements peuvent être créés avec le constructeur [`Event`](/fr/docs/Web/API/Event) comme suit&nbsp;:

```js
const event = new Event("build");

// Écouter l'événement.
elem.addEventListener("build", (e) => {
  /* … */
});

// Déclencher l'événement.
elem.dispatchEvent(event);
```

Cet exemple utilise la méthode {{domxref("EventTarget.dispatchEvent()")}}.

### Ajouter des données personnalisées - CustomEvent()

Pour ajouter des données à l'objet événement, l'interface [CustomEvent](/fr/docs/Web/API/CustomEvent) existe et la propriété **detail** permet de transmettre des données personnalisées.
Par exemple, l'événement peut être créé ainsi&nbsp;:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Vous pourrez alors accéder à ces données supplémentaires dans l'écouteur d'événement&nbsp;:

```js
function eventHandler(e) {
  console.log(`L'heure est&nbsp;: ${e.detail}`);
}
```

### Ajouter des données personnalisées - sous-classer Event

L'interface [`Event`](/fr/docs/Web/API/Event) peut aussi être sous-classée. Cela est utile pour la réutilisation, pour des données personnalisées plus complexes, ou même pour ajouter des méthodes à l'événement.

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

Ce code définit une classe `BuildEvent` avec une propriété en lecture seule et un type d'événement fixe.

L'événement peut alors être créé ainsi&nbsp;:

```js
const event = new BuildEvent(elem.dataset.time);
```

Les données supplémentaires sont accessibles dans les écouteurs via les propriétés personnalisées&nbsp;:

```js
function eventHandler(e) {
  console.log(`L'heure est&nbsp;: ${e.buildTime}`);
}
```

### Propagation des événements (bubbling)

Il est souvent utile de déclencher un événement depuis un élément enfant et de le capter sur un ancêtre&nbsp;; vous pouvez aussi transmettre des données avec l'événement&nbsp;:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Créer un nouvel événement, autoriser la propagation, et transmettre des données via la propriété "detail"
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// Le formulaire écoute l'événement personnalisé "awesome" et affiche la valeur transmise
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// À chaque saisie, la textarea déclenche l'événement à partir d'elle-même
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Créer et déclencher dynamiquement des événements

Les éléments peuvent écouter des événements qui n'ont pas encore été créés&nbsp;:

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
  // Créer et déclencher un événement à la volée
  // Remarque&nbsp;: on utilise ici une fonction classique pour que "this" représente l'élément
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Déclencher des événements natifs

Cet exemple montre comment simuler un clic (c'est-à-dire générer un événement click par programmation) sur une case à cocher à l'aide des méthodes DOM. [Voir l'exemple en action <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html).

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
    // Un gestionnaire a appelé preventDefault.
    alert("annulé");
  } else {
    // Aucun gestionnaire n'a appelé preventDefault.
    alert("non annulé");
  }
}
```

## Enregistrer des gestionnaires d'événements

Il existe deux méthodes recommandées pour enregistrer des gestionnaires. Le code du gestionnaire peut être exécuté lorsqu'un événement est déclenché soit en l'assignant à la propriété _onevent_ correspondante de l'élément cible, soit en enregistrant le gestionnaire comme écouteur à l'aide de la méthode {{domxref("EventTarget.addEventListener", "addEventListener()")}}. Dans les deux cas, le gestionnaire reçoit un objet conforme à l'[interface `Event`](/fr/docs/Web/API/Event) (ou à une [interface dérivée](/fr/docs/Web/API/Event#interfaces_basées_sur_event)). La principale différence est que plusieurs gestionnaires peuvent être ajoutés (ou supprimés) avec les méthodes d'écouteur d'événements.

> [!WARNING]
> Une troisième méthode, qui consiste à utiliser les attributs HTML onevent, n'est pas recommandée&nbsp;! Ils alourdissent le balisage, le rendent moins lisible et plus difficile à déboguer. Pour plus d'informations, voir [Gestionnaires d'événements en ligne](/fr/docs/Learn_web_development/Core/Scripting/Events#gestionnaires_dévénements_en_ligne_à_éviter).

### Utiliser les propriétés onevent

Par convention, les objets JavaScript qui déclenchent des événements possèdent des propriétés "onevent" (nommées en préfixant "on" au nom de l'événement). Ces propriétés sont appelées pour exécuter le code du gestionnaire associé lorsque l'événement est déclenché, et peuvent aussi être appelées directement par votre code.

Pour définir le code du gestionnaire, il suffit de l'assigner à la propriété onevent appropriée. Un seul gestionnaire peut être assigné pour chaque événement sur un élément. Si besoin, le gestionnaire peut être remplacé en assignant une autre fonction à la même propriété.

L'exemple suivant montre comment définir une fonction `greet()` pour l'événement `click` en utilisant la propriété `onclick`.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Notez qu'un objet représentant l'événement est passé comme premier argument au gestionnaire. Cet objet implémente ou dérive de l'interface {{domxref("Event")}}.

### EventTarget.addEventListener

La façon la plus flexible de définir un gestionnaire d'événement sur un élément est d'utiliser la méthode {{domxref("EventTarget.addEventListener")}}. Cette approche permet d'assigner plusieurs écouteurs à un élément et de les _supprimer_ si besoin, à l'aide de {{domxref("EventTarget.removeEventListener")}}.

> [!NOTE]
> La possibilité d'ajouter et de supprimer des gestionnaires permet, par exemple, d'utiliser le même bouton pour différentes actions selon le contexte. De plus, dans des programmes plus complexes, nettoyer les anciens gestionnaires inutilisés peut améliorer l'efficacité.

L'exemple suivant montre comment une fonction `greet()` peut être définie comme écouteur/gestionnaire pour l'événement `click` (vous pouvez utiliser une fonction anonyme si vous le souhaitez). Notez à nouveau que l'événement est passé comme premier argument au gestionnaire.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

La méthode peut aussi prendre des arguments/options supplémentaires pour contrôler la capture ou la suppression des événements. Plus d'informations sont disponibles sur la page de référence de {{domxref("EventTarget.addEventListener")}}.

#### Utiliser AbortSignal

Une fonctionnalité notable des écouteurs d'événements est la possibilité d'utiliser un signal d'abandon pour supprimer plusieurs gestionnaires en même temps.

Cela se fait en passant le même objet {{domxref("AbortSignal")}} à l'appel de {{domxref("EventTarget/addEventListener()", "addEventListener()")}} pour tous les gestionnaires que vous souhaitez pouvoir supprimer ensemble. Vous pouvez ensuite appeler {{domxref("AbortController/abort()", "abort()")}} sur le contrôleur propriétaire du signal, ce qui supprimera tous les gestionnaires ajoutés avec ce signal. Par exemple, pour ajouter un gestionnaire que l'on pourra supprimer avec un `AbortSignal`&nbsp;:

```js
const controller = new AbortController();

btn.addEventListener(
  "click",
  (event) => {
    console.log("greet:", event);
  },
  { signal: controller.signal },
); // on passe un AbortSignal à ce gestionnaire
```

Ce gestionnaire peut ensuite être supprimé ainsi&nbsp;:

```js
controller.abort(); // supprime tous les gestionnaires associés à ce contrôleur
```

### Interaction de plusieurs gestionnaires d'événements

La propriété IDL `onevent` (par exemple, `element.onclick = ...`) et l'attribut HTML `onevent` (par exemple, `<button onclick="...">`) ciblent tous deux le même emplacement de gestionnaire unique. Le HTML est chargé avant que JavaScript puisse accéder au même élément, donc en général JavaScript remplace ce qui est spécifié dans le HTML. Les gestionnaires ajoutés avec {{domxref("EventTarget.addEventListener", "addEventListener()")}} sont indépendants. Utiliser `onevent` ne supprime ni ne remplace les écouteurs ajoutés avec `addEventListener()`, et inversement.

Lorsqu'un événement est déclenché, les écouteurs sont appelés en plusieurs phases. Il y a deux phases&nbsp;: _capture_ et _bulle_ (bubbling). En phase de capture, l'événement part de l'ancêtre le plus haut et descend l'arbre DOM jusqu'à la cible. En phase de bulle, l'événement remonte en sens inverse. Par défaut, les écouteurs écoutent en phase de bulle, mais ils peuvent écouter en phase de capture en passant `capture: true` à `addEventListener()`. Dans une même phase, les écouteurs sont appelés dans l'ordre où ils ont été enregistrés. Le gestionnaire `onevent` est enregistré la première fois qu'il devient non nul&nbsp;; les réaffectations ultérieures ne changent que sa fonction de rappel, pas sa position dans l'ordre.

Appeler {{domxref("Event.stopPropagation()")}} empêche l'appel des écouteurs sur d'autres éléments plus loin dans la chaîne de propagation. {{domxref("Event.stopImmediatePropagation()")}} empêche aussi l'appel des autres écouteurs sur le même élément.

## Spécifications

{{Specifications}}

## Voir aussi

- [Introduction aux événements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- [Propagation des événements](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling)
