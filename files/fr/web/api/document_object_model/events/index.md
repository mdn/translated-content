---
title: Évènements DOM
short-title: Travailler avec des évènements
slug: Web/API/Document_Object_Model/Events
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("DOM")}}

Les [évènements DOM](/fr/docs/Learn_web_development/Core/Scripting/Events) sont déclenchés pour notifier au code des «&nbsp;changements intéressants&nbsp;» qui peuvent affecter l'exécution du code. Ces changements peuvent résulter d'interactions avec l'utilisateur·ice, comme l'utilisation de la souris ou le redimensionnement d'une fenêtre, de changements dans l'état de l'environnement sous-jacent (par exemple, une batterie faible ou des évènements médiatiques provenant du système d'exploitation), et d'autres causes.

Chaque évènement est représenté par un objet implémentant l'interface {{DOMxRef("Event")}}, et peut avoir d'autres propriétés et/ou champs, permettant d'obtenir des informations supplémentaires au sujet de ce qui s'est produit. La documentation de chaque évènement comporte un tableau (en haut de la page) qui comprend un lien vers l'interface de l'évènement associé et d'autres informations pertinentes. Une liste complète des différents types d'évènements est donnée dans [Event > Interfaces basées sur Event](/fr/docs/Web/API/Event#introduction).

Cette rubrique fournit un index des principales _sortes_ d'évènements qui peuvent vous intéresser (animation, presse-papiers, workers, etc.) ainsi que les principales classes qui implémentent ces sortes d'évènements. À la fin se trouve une liste exhaustive de tous les évènements documentés.

## Index des évènements

<table class="standard-table">
  <tbody>
    <tr>
      <th>Type d'évènement</th>
      <th style="width: 50%">Description</th>
      <th>Documentation</th>
    </tr>
    <tr>
      <td>Animation</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/Web_Animations_API">Web Animation API</a>.
        </p>
        <p>
          Utilisé pour répondre aux changements d'état de l'animation (par
          exemple, lorsqu'une animation commence ou se termine).
        </p>
      </td>
      <td>
        Évènements d'animation déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_danimation"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Window#évènements_danimation"
          ><code>Window</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLElement#évènements_danimation"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Récupération asynchrone des données</td>
      <td><p>Évènements liés à l'extraction des données.</p></td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/AbortSignal#évènements"
          ><code>AbortSignal</code></a
        >,
        <a href="/fr/docs/Web/API/XMLHttpRequest#évènements"
          ><code>XMLHttpRequest</code></a
        >,
        <a href="/fr/docs/Web/API/FileReader#évènements"><code>FileReader</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Presse-papiers</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/Clipboard_API">Clipboard API</a>.
        </p>
        <p>
          Utilisé pour notifier lorsque le contenu est coupé, copié ou collé.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_de_presse-papiers"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#évènements_de_presse-papiers"
          ><code>Element</code></a
        >,
        <a href="/fr/docs/Web/API/Window#évènements_de_presse-papiers"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Composition</td>
      <td>
        <p>
          Évènements liés à la composition&nbsp;; saisie «&nbsp;indirecte&nbsp;» du texte (au
          lieu d'utiliser les touches normales du clavier).
        </p>
        <p>
          Par exemple, un texte saisi par un moteur de conversion de la parole
          en texte, ou l'utilisation de combinaisons de touches spéciales qui
          modifient les pressions sur le clavier pour représenter de nouveaux
          caractères dans une autre langue.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Element#évènements_de_composition"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Transition CSS</td>
      <td>
        <p>
          Évènements liés aux
          <a href="/fr/docs/Web/CSS/Guides/Transitions">Transitions CSS</a>.
        </p>
        <p>
          Fournit des évènements de notification lorsque les transitions CSS
          commencent, s'arrêtent, sont annulées, etc.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_de_transition"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLElement#évènements_de_transition"
          ><code>HTMLElement</code></a
        >,
        <a href="/fr/docs/Web/API/Window#évènements_de_transition"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Base de données</td>
      <td>
        <p>
          Évènements liés aux opérations de la base de données&nbsp;: ouverture,
          fermeture, transactions, erreurs, etc.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/IDBDatabase#évènements"
          ><code>IDBDatabase</code></a
        >,
        <a href="/fr/docs/Web/API/IDBOpenDBRequest#évènements"
          ><code>IDBOpenDBRequest</code></a
        >,
        <a href="/fr/docs/Web/API/IDBRequest#évènements"><code>IDBRequest</code></a
        >,
        <a href="/fr/docs/Web/API/IDBTransaction#évènements"
          ><code>IDBTransaction</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Mutation du DOM</td>
      <td>
        <p>
          Évènements liés aux modifications de la hiérarchie et des nœuds du
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
          Les évènements liés à l'utilisation de l'API
          <a href="/fr/docs/Web/API/HTML_Drag_and_Drop_API">Glisser/Déposer</a>
          et <a href="/fr/docs/Web/API/WheelEvent">WheelEvent</a>.
        </p>
        <p>
          Les évènements Glisser/Déposer et Roue sont dérivés des évènements de
          la souris. Bien qu'ils soient déclenchés lors de l'utilisation de la
          molette de la souris ou du glisser/déposer, ils peuvent également être
          utilisés avec d'autres matériels appropriés.
        </p>
      </td>
      <td>
        <p>
          Les évènements de Glisser/Déposer déclenchés sur
          <a href="/fr/docs/Web/API/Document#évènements_de_glisser_déposer"
            ><code>Document</code></a
          >
        </p>
        <p>
          Les évènements de la Roue déclenchés sur
          <a href="/fr/docs/Web/API/Element#évènements_de_roue"
            ><code>Document</code></a
          >
          et
          <a href="/fr/docs/Web/API/Element#évènements_de_roue"
            ><code>Element</code></a
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>Ciblage</td>
      <td>
        <p>Les évènements liés aux éléments qui gagnent et perdent la sélection.</p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Element#évènements_de_sélection"><code>Element</code></a
        >, <a href="/fr/docs/Web/API/Window#évènements_de_sélection"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Formulaire</td>
      <td>
        <p>
          Évènements liés à la construction, la réinitialisation et la
          soumission de formulaires.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/HTMLFormElement#évènements"
          ><code>HTMLFormElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Plein écran</td>
      <td>
        <p>
          Évènements relatifs à l'API
          <a href="/fr/docs/Web/API/Fullscreen_API">Fullscreen API</a>.
        </p>
        <p>
          Utilisé pour notifier la transition entre le mode plein écran et le
          mode fenêtré, ainsi que les erreurs survenant pendant cette
          transition.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_liés_au_mode_plein_écran"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#évènements_liés_au_mode_plein_écran"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Manette de jeu</td>
      <td>
        <p>
          Évènements relatifs à l'API
          <a href="/fr/docs/Web/API/Gamepad_API">Gamepad API</a>.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Window#évènements_de_manette_de_jeu"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestes</td>
      <td>
        <p>
          <a href="/fr/docs/Web/API/Touch_events">Les évènements tactiles</a> sont
          recommandés pour la mise en œuvre des gestes.
        </p>
      </td>
      <td>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/Document#évènements_tactiles"><code>Document</code></a
          >,
          <a href="/fr/docs/Web/API/Element#évènements_tactiles"
            ><code>Element</code></a
          >.
        </p>
        <p>En outre, il existe un certain nombre d'évènements de geste non standard&nbsp;:</p>
        <ul>
          <li>
            Évènements spécifiques à WebKit non standard sur
            <a href="/fr/docs/Web/API/Element#évènements_tactiles"
              ><code>Element</code></a
            >&nbsp;:
            les évènements <a href="/fr/docs/Web/API/Element/gesturestart_event"
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
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/History_API"
            >de Manipulation de l'historique du navigateur</a
          >.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Window#évènements_liés_à_lhistorique"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Gestion de l'affichage du contenu des éléments HTML</td>
      <td>
        <p>
          Évènements liés à la modification de l'état d'un élément d'affichage
          ou textuel.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/HTMLDetailsElement#évènements"
          ><code>HTMLDetailsElement</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLDialogElement#évènements"
          ><code>HTMLDialogElement</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLSlotElement#évènements"
          ><code>HTMLSlotElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Entrées</td>
      <td>
        <p>
          Évènements liés aux éléments d'entrée HTML, par ex.
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
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/HTMLElement#évènements_liés_à_la_saisie"
          ><code>HTMLElement</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLInputElement#évènements"
          ><code>HTMLInputElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Clavier</td>
      <td>
        <p>
          Évènements liés à l'utilisation d'un
          <a href="/fr/docs/Web/API/KeyboardEvent">clavier</a>.
        </p>
        <p>
          Utilisé pour notifier lorsque les touches sont déplacées vers le haut,
          vers le bas, ou simplement pressées.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_relatifs_au_clavier"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#évènements_relatifs_au_clavier"
          ><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Manifeste</td>
      <td>
        <p>
          Évènements liés à l'installation de
          <a href="/fr/docs/Web/Progressive_web_apps/Manifest">Manifeste des applications web</a>.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Window#évènements_de_manifeste"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Médias</td>
      <td>
        <p>
          Évènements liés à l'utilisation des médias (y compris l'<a
            href="/fr/docs/Web/API/Media_Capture_and_Streams_API#évènements"
            >API de capture et de diffusion de médias</a
          >, <a href="/fr/docs/Web/API/Web_Audio_API#évènements">Web Audio API</a>,
          <a href="/fr/docs/Web/API/Picture-in-Picture_API#évènements"
            >Picture-in-Picture API</a
          >, etc.).
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/ScriptProcessorNode#évènements"
          ><code>ScriptProcessorNode</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLMediaElement#évènements"
          ><code>HTMLMediaElement</code></a
        >,
        <a href="/fr/docs/Web/API/AudioTrackList#évènements"
          ><code>AudioTrackList</code></a
        >,
        <a href="/fr/docs/Web/API/AudioScheduledSourceNode#évènements"
          ><code>AudioScheduledSourceNode</code></a
        >,
        <a href="/fr/docs/Web/API/MediaRecorder#évènements"
          ><code>MediaRecorder</code></a
        >,
        <a href="/fr/docs/Web/API/MediaStream#évènements"
          ><code>MediaStream</code></a
        >,
        <a href="/fr/docs/Web/API/MediaStreamTrack"
          ><code>MediaStreamTrack</code></a
        >,
        <a href="/fr/docs/Web/API/VideoTrackList#évènements"
          ><code>VideoTrackList</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLTrackElement#évènements"
          ><code>HTMLTrackElement</code></a
        >,
        <a href="/fr/docs/Web/API/OfflineAudioContext#évènements"
          ><code>OfflineAudioContext</code></a
        >, <a href="/fr/docs/Web/API/TextTrack#évènements"><code>TextTrack</code></a
        >,
        <a href="/fr/docs/Web/API/TextTrackList#évènements"
          ><code>TextTrackList</code></a
        >, <a href="/fr/docs/Web/HTML/Reference/Elements/audio#évènements">Element/audio</a>,
        <a href="/fr/docs/Web/HTML/Reference/Elements/video#évènements">Element/video</a>.
      </td>
    </tr>
    <tr>
      <td>Messagerie</td>
      <td>
        <p>
          Évènements liés à la réception par une fenêtre d'un message provenant
          d'un autre contexte de navigation.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Window#évènements_de_messagerie"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Souris</td>
      <td>
        <p>
          Évènements liés à l'utilisation d'une
          <a href="/fr/docs/Web/API/MouseEvent">souris d'ordinateur</a>.
        </p>
        <p>
          Utilisé pour notifier le clic de la souris, le double-clic, les
          évènements haut et bas, le clic droit, le déplacement dans et hors
          d'un élément, la sélection de texte, etc.
        </p>
        <p>
          Les évènements de type pointeur constituent une alternative aux
          évènements de type souris, indépendamment du matériel utilisé. Les
          évènements de type "glisser" et "roue" sont dérivés des évènements de
          type "souris".
        </p>
      </td>
      <td>
        Les évènements de souris déclenchés sur
        <a href="/fr/docs/Web/API/Element#évènements_de_souris"><code>Element</code></a>
      </td>
    </tr>
    <tr>
      <td>Réseau/Connexion</td>
      <td>
        <p>
          Évènements liés à l'obtention et à la perte d'une connexion réseau.
        </p>
      </td>
      <td>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/Window#évènements_de_connexion"
            ><code>Window</code></a
          >.
        </p>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/NetworkInformation#gestionnaire_dévènements"
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
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/Payment_Request_API">Payment Request API</a
          >.
        </p>
      </td>
      <td>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/PaymentRequest#évènements"
            ><code>PaymentRequest</code></a
          >,
          <a href="/fr/docs/Web/API/PaymentResponse#évènements"
            ><code>PaymentResponse</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Performance</td>
      <td>
        <p>
          Évènements liés aux APIs
          <a href="/fr/docs/Web/API/Performance_API">Performance API</a>.
        </p>
      </td>
      <td>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/Performance#évènements"
            ><code>Performance</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Pointeur</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/Pointer_events">Pointer Events API</a>.
        </p>
        <p>
          Fournit une notification agnostique du matériel à partir des
          dispositifs de pointage, y compris la souris, la souris tactile, le
          stylo/stylet.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_de_pointeur"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/HTMLElement#évènements_de_pointeur"
          ><code>HTMLElement</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Impression</td>
      <td><p>Évènements liés à l'impression.</p></td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Window#évènements_dimpression"><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Rejet de promesse</td>
      <td>
        <p>
          Évènements envoyés au contexte global du script lorsqu'une promesse
          JavaScript est rejetée.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Window#évènements_de_rejet_de_promesse"
          ><code>Window</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Sockets</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/WebSockets_API">WebSockets API</a>.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/WebSocket#évènements"><code>Websocket</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>SVG</td>
      <td><p>Évènements liés aux images SVG.</p></td>
      <td>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/SVGElement#évènements"
            ><code>SVGElement</code></a
          >,
          <a href="/fr/docs/Web/API/SVGAnimationElement#évènements"
            ><code>SVGAnimationElement</code></a
          >,
          <a href="/fr/docs/Web/API/SVGGraphicsElement#évènements"
            ><code>SVGGraphicsElement</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Sélection de texte</td>
      <td>
        <p>
          Évènements liés à la
          <a href="/fr/docs/Web/API/Selection">sélection du texte</a>.
        </p>
      </td>
      <td>
        <p>
          Évènements déclenchés sur
          <a href="/fr/docs/Web/API/Document#évènements_de_sélection"
            ><code>Document</code></a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>Tactile</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/Touch_events">Évènements tactiles</a>.
        </p>
        <p>
          Fournit des évènements de notification provenant de l'interaction avec
          un écran tactile (c'est-à-dire l'utilisation d'un doigt ou d'un
          stylet). Non lié à l'API
          <a href="/fr/docs/Web/API/Force_Touch_events#évènements"
            >Force Touch API</a
          >.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/Document#évènements_tactiles"
          ><code>Document</code></a
        >,
        <a href="/fr/docs/Web/API/Element#évènements_tactiles"><code>Element</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Réalité virtuelle</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/WebXR_Device_API">WebXR Device API</a>.
        </p>
        <div class="note">
          <p>
            <strong>Note&nbsp;:</strong> L'API
            <a href="/fr/docs/Web/API/WebVR_API">WebVR API</a> (et les
            évènements associés à
            <a href="/fr/docs/Web/API/Window#évènements_de_réalité_virtuelle"
              ><code>Window</code></a
            >) sont dépréciés.
          </p>
        </div>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/XRSystem#évènements"><code>XRSystem</code></a
        >, <a href="/fr/docs/Web/API/XRSession#évènements"><code>XRSession</code></a
        >,
        <a href="/fr/docs/Web/API/XRReferenceSpace#évènements"
          ><code>XRReferenceSpace</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>RTC (communication en temps réel)</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/WebRTC_API">WebRTC API</a>.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/RTCDataChannel#évènements"
          ><code>RTCDataChannel</code></a
        >,
        <a href="/fr/docs/Web/API/RTCDTMFSender#évènements"
          ><code>RTCDTMFSender</code></a
        >,
        <a href="/fr/docs/Web/API/RTCIceTransport#évènements"
          ><code>RTCIceTransport</code></a
        >,
        <a href="/fr/docs/Web/API/RTCPeerConnection#évènements"
          ><code>RTCPeerConnection</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Évènements envoyés par le serveur</td>
      <td>
        <p>
          Les évènements liés à l'<a href="/fr/docs/Web/API/Server-sent_events"
            >API des évènements envoyés par le serveur</a
          >.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/EventSource#évènements"
          ><code>EventSource</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Synthèse vocale</td>
      <td>
        <p>
          Les évènements liés à l'API
          <a href="/fr/docs/Web/API/Web_Speech_API">Web Speech API</a>.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/SpeechSynthesisUtterance#évènements"
          ><code>SpeechSynthesisUtterance</code></a
        >.
      </td>
    </tr>
    <tr>
      <td>Workers</td>
      <td>
        <p>
          Les évènements liés aux APIs
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
          d'autres évènements, notamment les notifications push, les
          utilisateur·ice·s qui cliquent sur les notifications affichées, le fait que
          l'abonnement push a été invalidé, la suppression d'éléments de l'index
          de contenu, etc.
        </p>
      </td>
      <td>
        Évènements déclenchés sur
        <a href="/fr/docs/Web/API/ServiceWorkerGlobalScope#évènements"
          ><code>ServiceWorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/DedicatedWorkerGlobalScope#évènements"
          ><code>DedicatedWorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/SharedWorkerGlobalScope#évènements"
          ><code>SharedWorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/WorkerGlobalScope#évènements"
          ><code>WorkerGlobalScope</code></a
        >, <a href="/fr/docs/Web/API/Worker#évènements"><code>Worker</code></a
        >,
        <a href="/fr/docs/Web/API/WorkerGlobalScope#évènements"
          ><code>WorkerGlobalScope</code></a
        >,
        <a href="/fr/docs/Web/API/BroadcastChannel#évènements"
          ><code>BroadcastChannel</code></a
        >,
        <a href="/fr/docs/Web/API/MessagePort#évènements"
          ><code>MessagePort</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Créer et déclencher des évènements

En plus des évènements déclenchés par les interfaces intégrées, vous pouvez créer et déclencher vous-même des évènements DOM. Ces évènements sont couramment appelés _évènements synthétiques_, par opposition aux évènements déclenchés par le navigateur.

### Créer des évènements personnalisés

Les évènements peuvent être créés avec le constructeur [`Event`](/fr/docs/Web/API/Event) comme suit&nbsp;:

```js
const event = new Event("build");

// Écouter l'évènement.
elem.addEventListener("build", (e) => {
  /* … */
});

// Déclencher l'évènement.
elem.dispatchEvent(event);
```

Cet exemple utilise la méthode {{DOMxRef("EventTarget.dispatchEvent()")}}.

### Ajouter des données personnalisées - CustomEvent()

Pour ajouter des données à l'objet évènement, l'interface [CustomEvent](/fr/docs/Web/API/CustomEvent) existe et la propriété **detail** permet de transmettre des données personnalisées.
Par exemple, l'évènement peut être créé ainsi&nbsp;:

```js
const event = new CustomEvent("build", { detail: elem.dataset.time });
```

Vous pouvez alors accéder à ces données supplémentaires dans l'écouteur d'évènement&nbsp;:

```js
function eventHandler(e) {
  console.log(`L'heure est&nbsp;: ${e.detail}`);
}
```

### Ajouter des données personnalisées - sous-classer Event

L'interface [`Event`](/fr/docs/Web/API/Event) peut aussi être sous-classée. Cela est utile pour la réutilisation, pour des données personnalisées plus complexes, ou même pour ajouter des méthodes à l'évènement.

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

Ce code définit une classe `BuildEvent` avec une propriété en lecture seule et un type d'évènement fixe.

L'évènement peut alors être créé ainsi&nbsp;:

```js
const event = new BuildEvent(elem.dataset.time);
```

Les données supplémentaires sont accessibles dans les écouteurs avec les propriétés personnalisées&nbsp;:

```js
function eventHandler(e) {
  console.log(`L'heure est&nbsp;: ${e.buildTime}`);
}
```

### Propagation des évènements (bubbling)

Il est souvent utile de déclencher un évènement depuis un élément enfant et de le capter sur un ancêtre&nbsp;; vous pouvez aussi transmettre des données avec l'évènement&nbsp;:

```html
<form>
  <textarea></textarea>
</form>
```

```js
const form = document.querySelector("form");
const textarea = document.querySelector("textarea");

// Créer un nouvel évènement, autoriser la propagation, et transmettre des données avec la propriété "detail"
const eventAwesome = new CustomEvent("awesome", {
  bubbles: true,
  detail: { text: () => textarea.value },
});

// Le formulaire écoute l'évènement personnalisé "awesome" et affiche la valeur transmise
form.addEventListener("awesome", (e) => console.log(e.detail.text()));

// À chaque saisie, la textarea déclenche l'évènement à partir d'elle-même
textarea.addEventListener("input", (e) => e.target.dispatchEvent(eventAwesome));
```

### Créer et déclencher dynamiquement des évènements

Les éléments peuvent écouter des évènements qui n'ont pas encore été créés&nbsp;:

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
  // Créer et déclencher un évènement à la volée
  // Remarque&nbsp;: on utilise ici une fonction classique pour que "this" représente l'élément
  this.dispatchEvent(
    new CustomEvent("awesome", {
      bubbles: true,
      detail: { text: () => textarea.value },
    }),
  );
});
```

## Déclencher des évènements natifs

Cet exemple montre comment simuler un clic (c'est-à-dire générer un évènement click par programmation) sur une case à cocher à l'aide des méthodes DOM. [Voir l'exemple en action <sup>(angl.)</sup>](https://mdn.dev/archives/media/samples/domref/dispatchEvent.html).

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

## Enregistrer des gestionnaires d'évènements

Il existe deux méthodes recommandées pour enregistrer des gestionnaires. Le code du gestionnaire peut être exécuté lorsqu'un évènement est déclenché soit en l'assignant à la propriété _onevent_ correspondante de l'élément cible, soit en enregistrant le gestionnaire comme écouteur à l'aide de la méthode {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}. Dans les deux cas, le gestionnaire reçoit un objet conforme à [l'interface `Event`](/fr/docs/Web/API/Event) (ou à une [interface dérivée](/fr/docs/Web/API/Event#interfaces_basées_sur_event)). La principale différence est que plusieurs gestionnaires peuvent être ajoutés (ou supprimés) avec les méthodes d'écouteur d'évènements.

> [!WARNING]
> Une troisième méthode, qui consiste à utiliser les attributs HTML onevent, n'est pas recommandée&nbsp;! Ils alourdissent le balisage, le rendent moins lisible et plus difficile à déboguer. Pour plus d'informations, voir [Gestionnaires d'évènements en ligne](/fr/docs/Learn_web_development/Core/Scripting/Events#gestionnaires_dévènements_en_ligne_à_éviter).

### Utiliser les propriétés onevent

Par convention, les objets JavaScript qui déclenchent des évènements possèdent des propriétés "onevent" (nommées en préfixant "on" au nom de l'évènement). Ces propriétés sont appelées pour exécuter le code du gestionnaire associé lorsque l'évènement est déclenché, et peuvent aussi être appelées directement par votre code.

Pour définir le code du gestionnaire, il suffit de l'assigner à la propriété onevent appropriée. Un seul gestionnaire peut être assigné pour chaque évènement sur un élément. Si besoin, le gestionnaire peut être remplacé en assignant une autre fonction à la même propriété.

L'exemple suivant montre comment définir une fonction `greet()` pour l'évènement `click` en utilisant la propriété `onclick`.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.onclick = greet;
```

Notez qu'un objet représentant l'évènement est passé comme premier argument au gestionnaire. Cet objet implémente ou dérive de l'interface {{DOMxRef("Event")}}.

### EventTarget.addEventListener

La façon la plus flexible de définir un gestionnaire d'évènement sur un élément est d'utiliser la méthode {{DOMxRef("EventTarget.addEventListener")}}. Cette approche permet d'assigner plusieurs écouteurs à un élément et de les _supprimer_ si besoin, à l'aide de {{DOMxRef("EventTarget.removeEventListener")}}.

> [!NOTE]
> La possibilité d'ajouter et de supprimer des gestionnaires permet, par exemple, d'utiliser le même bouton pour différentes actions selon le contexte. De plus, dans des programmes plus complexes, nettoyer les anciens gestionnaires inutilisés peut améliorer l'efficacité.

L'exemple suivant montre comment une fonction `greet()` peut être définie comme écouteur/gestionnaire pour l'évènement `click` (vous pouvez utiliser une fonction anonyme si vous le souhaitez). Notez à nouveau que l'évènement est passé comme premier argument au gestionnaire.

```js
const btn = document.querySelector("button");

function greet(event) {
  console.log("greet:", event);
}

btn.addEventListener("click", greet);
```

La méthode peut aussi prendre des arguments/options supplémentaires pour contrôler la capture ou la suppression des évènements. Plus d'informations sont disponibles sur la page de référence de {{DOMxRef("EventTarget.addEventListener")}}.

#### Utiliser AbortSignal

Une fonctionnalité notable des écouteurs d'évènements est la possibilité d'utiliser un signal d'abandon pour supprimer plusieurs gestionnaires en même temps.

Cela se fait en passant le même objet {{DOMxRef("AbortSignal")}} à l'appel de {{DOMxRef("EventTarget/addEventListener()", "addEventListener()")}} pour tous les gestionnaires que vous souhaitez pouvoir supprimer ensemble. Vous pouvez ensuite appeler {{DOMxRef("AbortController/abort()", "abort()")}} sur le contrôleur propriétaire du signal, ce qui supprime tous les gestionnaires ajoutés avec ce signal. Par exemple, pour ajouter un gestionnaire que l'on peut supprimer avec un `AbortSignal`&nbsp;:

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

### Interaction de plusieurs gestionnaires d'évènements

La propriété IDL `onevent` (par exemple, `element.onclick = ...`) et l'attribut HTML `onevent` (par exemple, `<button onclick="...">`) ciblent tous deux le même emplacement de gestionnaire unique. Le HTML est chargé avant que JavaScript puisse accéder au même élément, donc en général JavaScript remplace ce qui est défini dans le HTML. Les gestionnaires ajoutés avec {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}} sont indépendants. Utiliser `onevent` ne supprime ni ne remplace les écouteurs ajoutés avec `addEventListener()`, et inversement.

Lorsqu'un évènement est déclenché, les écouteurs sont appelés en plusieurs phases. Il y a deux phases&nbsp;: _capture_ et _bulle_ (bubbling). En phase de capture, l'évènement part de l'ancêtre le plus haut et descend l'arbre DOM jusqu'à la cible. En phase de bulle, l'évènement remonte en sens inverse. Par défaut, les écouteurs écoutent en phase de bulle, mais ils peuvent écouter en phase de capture en passant `capture: true` à `addEventListener()`. Dans une même phase, les écouteurs sont appelés dans l'ordre où ils ont été enregistrés. Le gestionnaire `onevent` est enregistré la première fois qu'il devient non nul&nbsp;; les réaffectations ultérieures ne changent que sa fonction de rappel, pas sa position dans l'ordre.

Appeler {{DOMxRef("Event.stopPropagation()")}} empêche l'appel des écouteurs sur d'autres éléments plus loin dans la chaîne de propagation. {{DOMxRef("Event.stopImmediatePropagation()")}} empêche aussi l'appel des autres écouteurs sur le même élément.

## Spécifications

{{Specifications}}

## Voir aussi

- [Introduction aux évènements](/fr/docs/Learn_web_development/Core/Scripting/Events)
- [Propagation des évènements](/fr/docs/Learn_web_development/Core/Scripting/Event_bubbling)
