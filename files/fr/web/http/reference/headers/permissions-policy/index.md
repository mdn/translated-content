---
title: Feature-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
original_slug: Web/HTTP/Headers/Permissions-Policy
---

{{HTTPSidebar}}{{SeeCompatTable}}

> [!WARNING]
> Cet en-tête a maintenant été renommé `Permissions-Policy` dans la spécification, et cet article sera mis à jour pour refléter ce changement.

L'en-tête HTTP **`Feature-Policy`** fournit un mécanisme pour permettre ou interdire l'utilisation de fonctionnalités du navigateur pour le document courant et le contenu que ce dernier embarquerait via des éléments [`<iframe>`](/fr/docs/Web/HTML/Reference/Elements/iframe).

Pour plus d'informations, voir l'article principal sur [les règles de gestion des fonctionnalités (<i lang="en">Feature Policy</i>)](/fr/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td><a href="/fr/docs/Glossary/Response_header">En-tête de réponse</a></td>
    </tr>
    <tr>
      <th scope="row"><a href="/fr/docs/Glossary/Forbidden_header_name">Nom d'en-tête interdit</a></th>
      <td>Oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Feature-Policy: <directive> <allowlist>
```

- `<directive>`
  - : La directive de fonctionnalité à laquelle s'applique la liste d'autorisation `allowlist`. Voir [la section Directives](#directives) ci-après pour les noms de directive autorisés.
- `<allowlist>`
  - : Une liste d'autorisation contenant des origines, décrites par une ou plusieurs des valeurs suivantes, et séparées par des espaces&nbsp;:
    - `*`&nbsp;: La fonctionnalité est autorisée pour ce document ainsi que l'ensemble des contextes de navigation imbriqués (via les éléments `<iframe>`) quelles que soient leurs origines.
    - `'self'`&nbsp;: La fonctionnalité sera autorisée dans ce document et pour tous les contextes de navigation imbriqués de la même origine. La fonctionnalité n'est pas autorisée pour les contextes de navigation d'autres origines.
    - `'src'`&nbsp;: Pour l'attribut `allow` d'une <i lang="en">iframe</i> uniquement. La fonctionnalité sera autorisée pour cette <i lang="en">iframe</i> uniquement si le document qui y est chargé provient de la même origine que celle indiquée par l'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/iframe#attributs) de l'élément HTML.

      > [!NOTE]
      > L'origine `'src'` est uniquement utilisée pour la liste `allow` d'une <i lang="en">iframe</i>. Pour ces éléments, il s'agit de la valeur par défaut pour `allowlist`.

    - `'none'`&nbsp;: La fonctionnalité est désactivée pour le document (niveau le plus haut) et les contextes de navigation imbriqués.
    - `<origin(s)>`&nbsp;: La fonctionnalité est autorisée pour des origines distinctes (par exemple, `https://example.com`). Lorsqu'on indique plusieurs origines, celles-ci doivent être séparées par un espace.

    Les valeurs `*` (autorisation pour toutes les origines) ou `'none'` (désactivation pour toutes les origines) peuvent être utilisées seules. `'self'` et `'src'` peuvent, quant à elles, être utilisées avec une ou plusieurs origines.

    Chaque fonctionnalité en question possède une liste d'autorisation par défaut qui est&nbsp;: `*`, `'self'`, ou `'none'`.

## Directives

- [`accelerometer`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy/accelerometer)
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'accélération de l'appareil au moyen de l'interface [`Accelerometer`](/fr/docs/Web/API/Accelerometer).
- [`ambient-light-sensor`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/ambient-light-sensor)
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de la luminosité ambiante de l'appareil au moyen de l'interface [`AmbientLightSensor`](/fr/docs/Web/API/AmbientLightSensor).
- [`autoplay`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/autoplay)
  - : Contrôle si le document courant est autorisé à jouer automatiquement des médias chargés au moyen de l'interface [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement). Quand cette fonctionnalité est désactivée et qu'il n'y a pas eu d'action de la part de l'utilisatrice ou l'utilisateur, la promesse ([`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise)) retournée par [`HTMLMediaElement.play()`](/fr/docs/Web/API/HTMLMediaElement/play) sera rejetée avec une exception [`DOMException`](/fr/docs/Web/API/DOMException). L'attribut `autoplay` sur les éléments [`<audio>`](/fr/docs/Web/HTML/Reference/Elements/audio) et [`<video>`](/fr/docs/Web/HTML/Reference/Elements/video) sera ignoré.
- [`battery`](/fr/docs/Web/HTTP/Headers/Feature-Policy/battery)
  - : Contrôle si l'utilisation de l'[API Battery Status](/fr/docs/Web/API/Battery_Status_API) est autorisé. Quand cette fonctionnalité est désactivée, la promesse retournée par [`Navigator.getBattery()`](/fr/docs/Web/API/Navigator/getBattery) sera rejetée avec une exception [`DOMException`](/fr/docs/Web/API/DOMException) [`NotAllowedError`](/fr/docs/Web/API/DOMException#notallowederror).
- [`camera`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/camera)
  - : Contrôle si le document courant est autorisé à utiliser l'appareil photographique du système. Quand cette fonctionnalité est désactivée, la promesse retournée par [`getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) sera rejetée avec une exception [`DOMException`](/fr/docs/Web/API/DOMException) [`NotAllowedError`](/fr/docs/Web/API/DOMException#notallowederror).
- [`display-capture`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/display-capture)
  - : Contrôle si le document courant est autorisé ou non à utiliser la méthode [`getDisplayMedia()`](/fr/docs/Web/API/MediaDevices/getDisplayMedia) pour effectuer une capture d'écran. Quand cette fonctionnalité est désactivée, la promesse retounrée par `getDisplayMedia()` sera rejetée avec une exception [`NotAllowedError`](/fr/docs/Web/API/DOMException#notallowederror) si la permission de prendre une capture d'écran n'est pas obtenue.
- [`document-domain`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/document-domain)
  - : Contrôle si le document courant est autorisé à définir la propriété [`document.domain`](/fr/docs/Web/API/Document/domain). Quand cette directive est désactivée, tenter de modifier [`document.domain`](/fr/docs/Web/API/Document/domain) échouera et lèvera une exception [`DOMException`](/fr/docs/Web/API/DOMException) [`SecurityError`](/fr/docs/Web/API/DOMException#securityerror).
- [`encrypted-media`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/encrypted-media)
  - : Contrôle si le document courant est autorisé à utiliser l'[API Encrypted Media Extensions](/fr/docs/Web/API/Encrypted_Media_Extensions_API) (EME). Quand cette directive est désactivée, la promesse retournée par [`Navigator.requestMediaKeySystemAccess()`](/fr/docs/Web/API/Navigator/requestMediaKeySystemAccess) sera rejetée avec une exception [`DOMException`](/fr/docs/Web/API/DOMException).
- [`execution-while-not-rendered`](/fr/docs/Web/HTTP/Headers/Feature-Policy/execution-while-not-rendered)
  - : Contrôle si les tâches des cadres doivent être exécutées s'ils ne seront pas rendus à l'écran (par exemple si un élément `<iframe>` est masqué via l'attribut [`hidden`](/fr/docs/Web/HTML/Reference/Global_attributes/hidden) ou `display: none`).
- [`execution-while-out-of-viewport`](/fr/docs/Web/HTTP/Headers/Feature-Policy/execution-while-out-of-viewport)
  - : Contrôle si les tâches des cadres doivent être exécutées quand ils sont en dehors de la zone d'affichage.
- [`fullscreen`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/fullscreen)
  - : Contrôle si le document courant est autorisé à utiliser [`Element.requestFullScreen()`](/fr/docs/Web/API/Element/requestFullscreen). Quand cette directive est désactivée, la promesse retournée sera rejetée avec une exception [`TypeError`](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypeError).
- [`gamepad`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/gamepad)
  - : Contrôle si le document courant peut utiliser l'[API Gamepad](/fr/docs/Web/API/Gamepad_API). Lorsque cette fonctionnalité n'est pas autorisée, [`Navigator.getGamepads()`](/fr/docs/Web/API/Navigator/getGamepads) lèvera une exception ([`DOMException`](/fr/docs/Web/API/DOMException)) `SecurityError`, et les évènements [`gamepadconnected`](/fr/docs/Web/API/Window/gamepadconnected_event) et [`gamepaddisconnected`](/fr/docs/Web/API/Window/gamepaddisconnected_event) ne seront pas déclenchés.
- [`geolocation`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/geolocation)
  - : Contrôle si le document courant est autorisé à utiliser l'interface [`Geolocation`](/fr/docs/Web/API/Geolocation). Quand cette directive est désactivée, les appels à [`getCurrentPosition()`](/fr/docs/Web/API/Geolocation/getCurrentPosition) et [`watchPosition()`](/fr/docs/Web/API/Geolocation/watchPosition) causeront un appel de leurs fonctions de rappel avec une exception [`PositionError`](/fr/docs/Web/API/GeolocationPositionError) dont le code est `PERMISSION_DENIED`.
- [`gyroscope`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/gyroscope)
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'orientation de l'appareil au moyen de l'interface [`Gyroscope`](/fr/docs/Web/API/Gyroscope).
- [`layout-animations`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
  - : Contrôle si le document courant est autorisé à afficher des animations de mise en page.
- [`legacy-image-formats`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
  - : Contrôle si le document courant est autorisé à afficher des images dans des formats historiques.
- [`magnetometer`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/magnetometer)
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'orientation au moyen de l'interface [`Magnetometer`](/fr/docs/Web/API/Magnetometer).
- [`microphone`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/microphone)
  - : Contrôle si le document courant est autorisé à utiliser le microphone de l'appareil. Quand cette fonctionnalité est désactivée, la promesse retournée par [`MediaDevices.getUserMedia()`](/fr/docs/Web/API/MediaDevices/getUserMedia) sera rejetée avec une exception [`NotAllowedError`](/fr/docs/Web/API/DOMException#notallowederror).
- [`midi`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/midi)
  - : Contrôle si le document courant est autorisé à utiliser l'[API Web MIDI](/fr/docs/Web/API/Web_MIDI_API). Quand cette fonctionnalité est désactivée, la promesse retournée par [`Navigator.requestMIDIAccess()`](/fr/docs/Web/API/Navigator/requestMIDIAccess) sera rejetée avec une exception [`DOMException`](/fr/docs/Web/API/DOMException).
- [`navigation-override`](/fr/docs/Web/HTTP/Headers/Feature-Policy/navigation-override)
  - : Contrôle la disponibilité des mécanismes qui permettent à la page de prendre le contrôle sur le comportement de la [navigation spatiale](https://www.w3.org/TR/css-nav/), ou de l'annuler complètement.
- [`oversized-images`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
  - : Contrôle si le document courant est autorisé à télécharger et afficher des images lourdes.
- [`payment`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/payment)
  - : Contrôle si le document courant est autorisé à utiliser l'[API Payment Request](/fr/docs/Web/API/Payment_Request_API). Quand cette directive est désactivée, le constructeur [`PaymentRequest()`](/fr/docs/Web/API/PaymentRequest) lèvera une exception [`DOMException`](/fr/docs/Web/API/DOMException) [`SecurityError`](/fr/docs/Web/API/DOMException#securityerror).
- [`picture-in-picture`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/picture-in-picture)
  - : Contrôle si le document courant peut jouer une vidéo avec l'incrustation vidéo avec l'API correspondante.
- [`publickey-credentials-get`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/publickey-credentials-get)
  - : Contrôle si le document courant est autorisé à utiliser l'[API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) afin de récupérer des informations d'authentification avec clé publique (par exemple avec [`navigator.credentials.get({publicKey: ..., ...})`](/fr/docs/Web/API/CredentialsContainer/get)) déjà enregistrées.
- [`speaker-selection`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/speaker-selection)
  - : Contrôle si le document courant est autorisé à utiliser l'[API Audio Output Devices](/fr/docs/Web/API/Audio_Output_Devices_API) afin d'énumérer et de sélectionner les haut-parleurs.
- [`sync-xhr`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy)
  - : Contrôle si le document courant est autorisé à réaliser des requêtes [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest).
- [`unoptimized-images`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy) {{experimental_inline}}{{Non-standard_Inline}}
  - : Contrôle si le document courant est autorisé à télécharger et à afficher des images qui ne sont pas optimisées.
- [`unsized-media`](/fr/docs/Web/HTTP/Reference/Headers/Permissions-Policy) {{experimental_inline}}{{Non-standard_Inline}}
  - : Contrôle si le document courant est autorisé à modifier la taille des éléments média après que la disposition initiale a été terminée.
- [`usb`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/usb)
  - : Contrôle si le document courant est autorisé à utiliser l'[API WebUSB](https://wicg.github.io/webusb/).
- [`screen-wake-lock`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/screen-wake-lock)
  - : Contrôle si le document courant est autorisé à utiliser l'[API Screen Wake Lock](/fr/docs/Web/API/Screen_Wake_Lock_API) pour indiquer que l'appareil ne devrait pas assombrir ou éteindre l'écran.
- [`web-share`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/web-share)
  - : Contrôle si le document courant est autorisé à utiliser la méthode [`Navigator.share()`](/fr/docs/Web/API/Navigator/share) de l'[API Web Share](/fr/docs/Web/API/Web_Share_API) pour partager du texte, des liens, des images et d'autres contenus vers des cibles arbitraires, par exemple à des applications mobiles.
- [`xr-spatial-tracking`](/fr/docs/Web/HTTP/Headers/Permissions-Policy/xr-spatial-tracking)
  - : Contrôle si le document courant est autorisé à utiliser l'[API WebXR Device](/fr/docs/Web/API/WebXR_Device_API) pour interagir avec une session WebXR.

## Exemple

SecureCorp Inc. souhaite désactiver les API du microphone et de géolocalisation dans son application. Elle peut le faire en délivrant l'en-tête de réponse HTTP suivant pour définir une règle de gestion des fonctionnalités&nbsp;:

```http
Feature-Policy: microphone 'none'; geolocation 'none'
```

En spécifiant la valeur `'none'` pour liste des origines, les fonctionnalités auxquelles la valeur est appliquée seront désactivées pour tous les contextes de navigation (incluant tous les cadres `<iframe>`), quelle que soit leur origine.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Gestion des fonctionnalités](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- [Utiliser la gestion des fonctionnalités](/fr/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- [`Document.featurePolicy`](/fr/docs/Web/API/Document/featurePolicy) and [`FeaturePolicy`](/fr/docs/Web/API/FeaturePolicy)
- [<i lang="en">Feature-Policy Tester</i> (une extension pour les outils de développement Chrome)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- [`Content-Security-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy)
- [`Referrer-Policy`](/fr/docs/Web/HTTP/Reference/Headers/Referrer-Policy)
