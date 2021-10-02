---
title: Navigator
slug: Web/API/Navigator
tags:
  - API
  - DOM
  - Interface
  - Navigator
  - Reference
  - Web
  - Web Performance
translation_of: Web/API/Navigator
---
{{APIRef("DOM")}}

L'interface **`Navigator`** représente l'état et l'identité de l'agent utilisateur courant. Elle permet aux scripts de consulter ces informations et de s'enregistrer en vue de certaines activités.

Un objet instanciant `Navigator` peut être récupéré grâce à la propriété en lecture seule [`window.navigator`](/fr/docs/Web/API/Window/navigator).

## Propriétés

_Cette interface n'hérite d'aucune propriété mais implémente celles définies par [`NavigatorID`](/fr/docs/Web/API/NavigatorID), [`NavigatorLanguage`](/fr/docs/Web/API/NavigatorLanguage), [`NavigatorOnLine`](/fr/docs/Web/API/NavigatorOnLine), [`NavigatorContentUtils`](/fr/docs/Web/API/NavigatorContentUtils), [`NavigatorStorage`](/fr/docs/Web/API/NavigatorStorage), [`NavigatorStorageUtils`](/fr/docs/Web/API/NavigatorStorageUtils), [`NavigatorConcurrentHardware`](/fr/docs/Web/API/NavigatorConcurrentHardware), [`NavigatorPlugins`](/fr/docs/Web/API/NavigatorPlugins) et [`NavigatorUserMedia`](/fr/docs/Web/API/NavigatorUserMedia)._

### Propriétés standard

- [`Navigator.connection`](/fr/docs/Web/API/Navigator/connection) {{readonlyInline}} {{experimental_inline}}
  - : Fournit un objet [`NetworkInformation`](/fr/docs/Web/API/NetworkInformation) contenant des informations quant à la connection réseau de l'appareil.
- [`Navigator.cookieEnabled`](/fr/docs/Web/API/Navigator/cookieEnabled) {{readonlyinline}}
  - : Renvoie un booléen indiquant si l'ajout d'un cookie sera pris en compte.
- [`Navigator.credentials`](/fr/docs/Web/API/Navigator/credentials) {{readonlyInline}}
  - : Renvoie l'interface [`CredentialsContainer`](/fr/docs/Web/API/CredentialsContainer) qui expose des méthodes pour la demande d'informations d'authentification et qui notifie l'agent utilisateur lors d'évènements particuliers tels que les connexions ou déconnexions.
- [`Navigator.deviceMemory`](/fr/docs/Web/API/Navigator/deviceMemory) {{readonlyInline}} {{experimental_inline}}
  - : Renvoie la quantité de mémoire de l'appareil, exprimée en gigaoctets. Cette valeur est une approximation calculée en prenant la plus proche puissance de 2 puis en divisant le résultat par 1024.
- [`Navigator.doNotTrack`](/fr/docs/Web/API/Navigator/doNotTrack) {{readonlyInline}} {{experimental_inline}}
  - : Indique le choix de l'utilisateur fournit pour la préférence _do-not-track_. Lorsque cette valeur vaut "1", l'application web ne devrait pas pister l'utilisateur.
- [`Navigator.geolocation`](/fr/docs/Web/API/Navigator/geolocation) {{readonlyInline}}
  - : Renvoie un objet [`Geolocation`](/fr/docs/Web/API/Geolocation) permettant l'accès à l'emplacement géographique de l'appareil.
- [`NavigatorConcurrentHardware.hardwareConcurrency`](/fr/docs/Web/API/NavigatorConcurrentHardware.hardwareConcurrency) {{readonlyInline}}
  - : Renvoie le nombre de cœurs logiques du processeur.
- [`NavigatorPlugins.javaEnabled`](/fr/docs/Web/API/NavigatorPlugins.javaEnabled) {{readonlyInline}}
  - : Renvoie le booléen `false`.
- [`Navigator.keyboard`](/fr/docs/Web/API/Navigator.keyboard) {{readonlyinline}} {{experimental_inline}}
  - : Renvoie un objet [`Keyboard`](/fr/docs/Web/API/Keyboard) qui permet d'accéder à des fonctions pour récupérer des informations sur la disposition du clavier et la capture de touches du clavier physique.
- [`NavigatorLanguage.language`](/fr/docs/Web/API/NavigatorLanguage.language) {{readonlyInline}}
  - : Renvoie une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) indiquant la langue préférée de l'utilisateur (qui correspond généralement à la langue utilisée pour l'interface utilisateur du navigateur). La valeur `null` est renvoyée si cette information est inconnue.
- [`NavigatorLanguage.languages`](/fr/docs/Web/API/NavigatorLanguage.languages) {{readonlyInline}} {{experimental_inline}}
  - : Renvoie un tableau de chaînes [`DOMString`](/fr/docs/Web/API/DOMString) qui représente les langues connues de l'utilisateur, triées par ordre de préférence.
- [`Navigator.locks`](/fr/docs/Web/API/Navigator/locks) {{readonlyinline}} {{experimental_inline}}
  - : Renvoie un objet [`LockManager`](/fr/docs/Web/API/LockManager) qui fournit des méthodes pour demander un nouvel objet [`Lock`](/fr/docs/Web/API/Lock) ou s'enquérir d'un objet [`Lock`](/fr/docs/Web/API/Lock) existant.
- [`Navigator.maxTouchPoints`](/fr/docs/Web/API/Navigator/maxTouchPoints) {{readonlyInline}}
  - : Renvoie le nombre maximum de points de toucher simultanés possible pour l'appareil courant.
- [`Navigator.mediaCapabilities`](/fr/docs/Web/API/Navigator/mediaCapabilities) {{readonlyinline}} {{experimental_inline}}
  - : Renvoie un objet [`MediaCapabilities`](/fr/docs/Web/API/MediaCapabilities) qui peut exposer des informations sur le décodage/l'encodage d'un format donné.
- [`Navigator.mediaDevices`](/fr/docs/Web/API/Navigator/mediaDevices) {{readonlyinline}}
  - : Renvoie une référence vers un objet [`MediaDevices`](/fr/docs/Web/API/MediaDevices) permettant d'obtenir des informations à propos des appareils médias disponibles ([`MediaDevices.enumerateDevices()`](</fr/docs/Web/API/MediaDevices.enumerateDevices()>)), de déterminer les propriétés et contraintes prises en charge pour les médias sur cet agent utilisateur et cet ordinateur ([`MediaDevices.getSupportedConstraints()`](</fr/docs/Web/API/MediaDevices.getSupportedConstraints()>)), de demander l'accès au média via [`MediaDevices.getUserMedia()`](</fr/docs/Web/API/MediaDevices.getUserMedia()>).
- [`Navigator.mediaSession`](/fr/docs/Web/API/Navigator/mediaSession) {{readonlyinline}} {{experimental_inline}}
  - : Renvoie un objet [`MediaSession`](/fr/docs/Web/API/MediaSession) pouvant être utilisé afin de fournir des métadonnées utilisées par le navigateur afin de présenter des informations sur le média en cours de lecture (par exemple pour les interfaces utilisateurs générales de contrôle des médias).
- [`NavigatorPlugins.mimeTypes`](/fr/docs/Web/API/NavigatorPlugins.mimeTypes) {{readonlyInline}}{{deprecated_inline}}
  - : Renvoie une liste [`MimeTypeArray`](/fr/docs/Web/API/MimeTypeArray) des types MIME pris en charge par le navigateur.
- [`NavigatorOnLine.onLine`](/fr/docs/Web/API/NavigatorOnLine.onLine) {{readonlyInline}}
  - : Renvoie un booléen indiquant si le navigateur est en ligne.
- [`Navigator.permissions`](/fr/docs/Web/API/Navigator/permissions) {{readonlyinline}} {{experimental_inline}}
  - : Renvoie un objet [`Permissions`](/fr/docs/Web/API/Permissions) pouvant être utilisé pour demander ou mettre à jour les informations de permissions pour les API couvertes par l'API [Permissions](/en-US/docs/Web/API/Permissions_API).
- [`NavigatorPlugins.plugins`](/fr/docs/Web/API/NavigatorPlugins.plugins) {{readonlyInline}}{{deprecated_inline}}
  - : Renvoie une liste [`PluginArray`](/fr/docs/Web/API/PluginArray) indiquant les plugins installés sur le navigateur.
- [`Navigator.presentation`](/fr/docs/Web/API/Navigator/presentation) {{readonlyInline}} {{experimental_inline}}
  - : Renvoie une référence à l'API [`Presentation`](/fr/docs/Web/API/Presentation) .
- [`Navigator.serial`](/fr/docs/Web/API/Navigator/serial) {{readonlyInline}}
  - : Renvoie un objet [`Serial`](/fr/docs/Web/API/Serial) représentant le point d'entrée vers l'API [`Web Serial`](</fr/docs/Web/API/Web Serial API>) qui permet de contrôler les ports série.
- [`Navigator.serviceWorker`](/fr/docs/Web/API/Navigator/serviceWorker) {{readonlyInline}}
  - : Renvoie un objet [`ServiceWorkerContainer`](/fr/docs/Web/API/ServiceWorkerContainer) qui permet d'enregistrer, de supprimer, de mettre à jour ou de communiquer avec des objets [`ServiceWorker`](/fr/docs/Web/API/ServiceWorker) pour le [document associé](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- [`NavigatorStorage.storage`](/fr/docs/Web/API/NavigatorStorage.storage) {{readonlyinline}}
  - : Renvoie le singleton [`StorageManager`](/fr/docs/Web/API/StorageManager) utilisé pour la persistence des permissions et la gestion du stockage disponible site par site/application par application.
- [`NavigatorID.userAgent`](/fr/docs/Web/API/NavigatorID/userAgent) {{readonlyInline}}
  - : Renvoie la chaîne de caractères de l'agent utilisateur pour le navigateur courant.
- [`Navigator.vendor`](/fr/docs/Web/API/Navigator/vendor) {{readonlyInline}}
  - : Renvoie le nom de l'éditeur du navigateur courant (par exemple "Netscape6").
- [`Navigator.webdriver`](/fr/docs/Web/API/Navigator/webdriver) {{readonlyInline}} {{experimental_inline}}
  - : Indique si l'agent utilisateur est contrôlé par un outil automatisé.
- [`Navigator.xr`](/fr/docs/Web/API/Navigator/xr) {{readonlyInline}} {{experimental_inline}}
  - : Renvoie un objet [`XRSystem`](/fr/docs/Web/API/XRSystem) qui représente le point d'entrée sur l'API [WebXR](/en-US/docs/Web/API/WebXR_Device_API).

### Propriétés non-standard

- [`Navigator.buildID`](/fr/docs/Web/API/Navigator/buildID) {{non-standard_inline}}
  - : Renvoie l'identifiant de build du navigateur. Les navigateurs renvoient un horodatage fixe pour éviter le pistage (par exemple `20181001000000` à partir de Firefox 64).
- [`Navigator.contacts`](/fr/docs/Web/API/Navigator/contacts) {{readonlyInline}} {{non-standard_inline}}
  - : Renvoie une interface [`ContactsManager`](/fr/docs/Web/API/ContactsManager) qui permet à l'utilisateur de sélectionner certaines entrées dans la liste des contacts afin de partager certains détails limités avec une application web.
- [`Navigator.securitypolicy`](/fr/docs/Web/API/Navigator/securitypolicy) {{non-standard_inline}}
  - : Renvoie une chaîne de caractères vide. Netscape 4.7x renvoyait "US & CA domestic policy" ou "Export policy".
- [`Navigator.standalone`](/fr/docs/Web/API/Navigator/standalone) {{non-standard_inline}}
  - : Renvoie un booléen indiquant si le navigateur s'exécute en mode _standalone_. Uniquement disponible sur Safari pour iOS.
- [`Navigator.wakeLock`](/fr/docs/Web/API/Navigator/wakeLock) {{readonlyInline}} {{non-standard_inline}}
  - : Renvoie une interface [`WakeLock`](/fr/docs/Web/API/WakeLock) pouvant être utilisée afin de demander un verrou sur l'écran afin de l'empêcher d'entrer en veille, de s'estomper ou de s'éteindre.

### Propriétés dépréciées

- [`NavigatorID.appCodeName`](/fr/docs/Web/API/NavigatorID/appCodeName) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie le nom de code interne du navigateur. Ne vous attendez pas à ce que cette propriété renvoie une valeur correcte.
- [`NavigatorID.appName`](/fr/docs/Web/API/NavigatorID/appName) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie une chaîne [`DOMString`](/fr/docs/Web/API/DOMString) contenant le nom officiel du navigateur. Ne vous attendez pas à ce que cette propriété renvoie une valeur correcte.
- [`NavigatorID.appVersion`](/fr/docs/Web/API/NavigatorID/appVersion) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie la version du navigateur sous la forme d'une chaîne [`DOMString`](/fr/docs/Web/API/DOMString). Ne vous attendez pas à ce que cette propriété renvoie une valeur correcte.
- [`Navigator.activeVRDisplays`](/fr/docs/Web/API/Navigator/activeVRDisplays) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie un tableau contenant chaque objet [`VRDisplay`](/fr/docs/Web/API/VRDisplay) actuellement utilisé pour afficher (autrement dit, pour chaque objet où [`VRDisplay.ispresenting`](/fr/docs/Web/API/VRDisplay.ispresenting) vaut `true`).
- [`Navigator.battery`](/fr/docs/Web/API/Navigator/battery) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie un objet [`BatteryManager`](/fr/docs/Web/API/BatteryManager) permettant d'avoir des informations sur le statut de charge de la batterie.
- [`Navigator.oscpu`](/fr/docs/Web/API/Navigator/oscpu) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie une chaîne de caractères qui représente le système d'exploitation courant.
- [`NavigatorID.platform`](/fr/docs/Web/API/NavigatorID/platform) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie une chaîne de caractères représentant la plateforme du navigateur. N'utilisez pas cette fonction afin d'obtenir une valeur significative.
- [`NavigatorID.product`](/fr/docs/Web/API/NavigatorID/product) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie toujours `'Gecko'` quel que soit le navigateur. Cette propriété est uniquement conservée à des fins de compatibilité.
- [`Navigator.productSub`](/fr/docs/Web/API/Navigator/productSub) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie le numéro de _build_ précis du navigateur (par exemple "20060909").
- [`Navigator.vendorSub`](/fr/docs/Web/API/Navigator/vendorSub) {{readonlyInline}} {{deprecated_inline}}
  - : Renvoie le numéro de version de l'éditeur (e.g. "6.1").

## Méthodes

_Cette interface n'hérite d'aucune méthode mais implémente celles définies par [`NavigatorID`](/fr/docs/Web/API/NavigatorID), [`NavigatorContentUtils`](/fr/docs/Web/API/NavigatorContentUtils), [`NavigatorUserMedia`](/fr/docs/Web/API/NavigatorUserMedia), and [`NavigatorStorageUtils`](/fr/docs/Web/API/NavigatorStorageUtils)._

- [`Navigator.canShare()`](</fr/docs/Web/API/Navigator/canShare()>)
  - : Renvoie `true` si un appel à `Navigator.share()` réussirait.
- [`Navigator.registerProtocolHandler()`](</fr/docs/Web/API/Navigator/registerProtocolHandler()>)
  - : Permet aux sites web de s'enregistrer afin de gérer un protocole donné.
- [`Navigator.requestMediaKeySystemAccess()`](</fr/docs/Web/API/Navigator/requestMediaKeySystemAccess()>)
  - : Renvoie une promesse ([`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)) qui se résout en un objet `MediaKeySystemAccess`.
- [`Navigator.sendBeacon()`](</fr/docs/Web/API/Navigator/sendBeacon()>)
  - : Transfère, de façon asynchrone, une petite quantité de donnée avec HTTP depuis l'agent utilisateur vers un serveur web.
- [`Navigator.share()`](</fr/docs/Web/API/Navigator/share()>)
  - : Invoque la fonctionnalité native de partage pour la plateforme courant.
- [`Navigator.vibrate()`](</fr/docs/Web/API/Navigator/vibrate()>)
  - : Permet de faire vibrer l'appareil si celui-ci prend en charge cette fonctionnalité. Aucun effet n'est produit s'il n'y a pas de compatibilité.

### Méthodes dépréciées

- [`Navigator.getVRDisplays()`](</fr/docs/Web/API/Navigator/getVRDisplays()>) {{deprecated_inline}}
  - : Renvoie une promesse qui se résout en un tableau d'objets [`VRDisplay`](/fr/docs/Web/API/VRDisplay) représentant chacun un appareil de réalité virtuelle connecté à l'ordinateur.
- [`Navigator.getUserMedia()`](</fr/docs/Web/API/Navigator/getUserMedia()>) {{deprecated_inline}}
  - : Après avoir demandé la permission à l'utilisateur, renvoie le flux audio ou vidéo associé à une caméra ou à un micro sur l'ordinateur local.
- [`Navigator.registerContentHandler()`](</fr/docs/Web/API/Navigator/registerContentHandler()>) {{deprecated_inline}}
  - : Permet aux sites web de s'enregistrer pour gérer certains types MIME.
- [`NavigatorID.taintEnabled()`](</fr/docs/Web/API/NavigatorID/taintEnabled()>) {{deprecated_inline}}
  - : Renvoie `false`. Les fonctions JavaScript jouant sur cet aspect ont été retirées avec JavaScript 1.2.

## Spécifications

| Spécification                                                                                        | Statut                           | Commentaires |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------------ |
| {{SpecName('HTML WHATWG', '#the-navigator-object', 'the Navigator object')}} | {{Spec2('HTML WHATWG')}} |              |

## Compatibilité des navigateurs

{{Compat("api.Navigator")}}
