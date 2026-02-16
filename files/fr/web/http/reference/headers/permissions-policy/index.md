---
title: En-tête Permissions-Policy
short-title: Permissions-Policy
slug: Web/HTTP/Reference/Headers/Permissions-Policy
l10n:
  sourceCommit: 2dcdbed09ec5ca28a73d82e259601459c468508c
---

{{SeeCompatTable}}

L'{{Glossary("response header", "en-tête de réponse")}} HTTP **`Permissions-Policy`** fournit un mécanisme pour autoriser ou refuser l'utilisation de fonctionnalités du navigateur dans un document ou dans tout élément HTML {{HTMLElement("iframe")}} du document.

Pour plus d'informations, consultez l'article principal [Politique d'autorisations](/fr/docs/Web/HTTP/Guides/Permissions_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header", "En-tête de réponse")}}</td>
    </tr>
  </tbody>
</table>

## Syntaxe

```http
Permissions-Policy: <directive>=<allowlist>
```

- `<directive>`
  - : La directive de la politique d'autorisations à laquelle appliquer la liste d'autorisations `allowlist`. Voir [Directives](#directives) ci-dessous pour la liste des noms de directives autorisés.
- `<allowlist>`
  - : Une liste d'autorisations est une liste d'origines qui prend une ou plusieurs des valeurs suivantes, contenues entre parenthèses et séparées par des espaces&nbsp;:
    - `*` (joker)
      - : La fonctionnalité sera autorisée dans ce document, ainsi que dans tous les contextes de navigation imbriqués (`<iframe>`) quelle que soit leur origine.
    - `()` (liste d'autorisations vide)
      - : La fonctionnalité est désactivée dans les contextes de navigation principaux et imbriqués. L'équivalent pour l'attribut `allow` d'un `<iframe>` est `'none'`.
    - `self`
      - : La fonctionnalité sera autorisée dans ce document, ainsi que dans tous les contextes de navigation imbriqués (`<iframe>`) de même origine uniquement. La fonctionnalité n'est pas autorisée dans les documents d'origine croisée dans les contextes imbriqués. `self` peut être considéré comme un raccourci pour `https://votre-site.exemple.com`. L'équivalent pour l'attribut `allow` d'un `<iframe>` est `self`.
    - `src`
      - : La fonctionnalité sera autorisée dans ce `<iframe>`, tant que le document chargé provient de la même origine que l'URL de son attribut `{{HTMLElement('iframe','src','#attributs')}}`. Cette valeur n'est utilisée que dans l'attribut `allow` d'un `<iframe>`, et est la valeur _par défaut_ de `allowlist` dans les `<iframe>`.
    - `"<origin>"`
      - : La fonctionnalité est autorisée pour des origines spécifiques (par exemple, `"https://a.exemple.com"`). Les origines doivent être séparées par des espaces. Notez que les origines dans les attributs `allow` de `<iframe>` ne sont pas entre guillemets.

    Les valeurs `*` et `()` ne peuvent être utilisées qu'isolément, tandis que `self` et `src` peuvent être utilisées en combinaison avec une ou plusieurs origines.

    > [!NOTE]
    > Les directives ont une liste d'autorisations par défaut, qui est toujours l'une de `*`, `self` ou `none` pour l'en-tête HTTP `Permissions-Policy`, et détermine le comportement par défaut si elles ne sont pas explicitement listées dans une politique.
    > Celles-ci sont précisées sur les différentes [pages de référence des directives](#directives). Pour les attributs `allow` de `<iframe>`, le comportement par défaut est toujours `src`.

Lorsque cela est pris en charge, vous pouvez inclure des jokers dans les origines de la politique d'autorisations. Cela signifie qu'au lieu de devoir définir explicitement plusieurs sous-domaines différents dans une liste d'autorisations, vous pouvez tous les définir en une seule origine avec un joker.

Ainsi, au lieu de

```http
("https://exemple.com" "https://a.exemple.com" "https://b.exemple.com" "https://c.exemple.com")
```

Vous pouvez définir

```http
("https://exemple.com" "https://*.exemple.com")
```

> [!NOTE]
> `"https://*.exemple.com"` ne correspond pas à `"https://exemple.com"`.

## Directives

- {{HTTPHeader('Permissions-Policy/accelerometer','accelerometer')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'accélération de l'appareil au moyen de l'interface {{DOMxRef("Accelerometer")}}.

- {{HTTPHeader('Permissions-Policy/ambient-light-sensor','ambient-light-sensor')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de la luminosité ambiante de l'appareil au moyen de l'interface {{DOMxRef("AmbientLightSensor")}}.

- {{HTTPHeader("Permissions-Policy/aria-notify", "aria-notify")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser la méthode {{DOMxRef("Document.ariaNotify", "ariaNotify()")}} pour déclencher des annonces pour {{Glossary("screen reader", "lecteur d'écran")}}.

- {{HTTPHeader('Permissions-Policy/attribution-reporting','attribution-reporting')}} {{Deprecated_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Attribution Reporting](/fr/docs/Web/API/Attribution_Reporting_API).

- {{HTTPHeader('Permissions-Policy/autoplay','autoplay')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à lire automatiquement des médias demandés via l'interface {{DOMxRef("HTMLMediaElement")}}. Lorsque cette politique est désactivée et qu'il n'y a pas eu de geste de la part de l'utilisateur·ice, la {{JSxRef("Promise")}} retournée par {{DOMxRef("HTMLMediaElement.play()")}} sera rejetée avec une erreur `NotAllowedError` {{DOMxRef("DOMException")}}. L'attribut autoplay sur les éléments HTML {{HTMLElement("audio")}} et {{HTMLElement("video")}} sera ignoré.

- {{HTTPHeader('Permissions-Policy/bluetooth','bluetooth')}} {{Experimental_Inline}}
  - : Contrôle si l'utilisation de [l'API Web Bluetooth](/fr/docs/Web/API/Web_Bluetooth_API) est autorisée. Lorsque cette politique est désactivée, les méthodes de l'objet {{DOMxRef("Bluetooth")}} retourné par {{DOMxRef("Navigator.bluetooth")}} retourneront soit `false`, soit rejeteront la {{JSxRef("Promise")}} retournée avec une erreur `SecurityError` {{DOMxRef("DOMException")}}.

- {{HTTPHeader('Permissions-Policy/browsing-topics','browsing-topics')}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Contrôle l'accès à [l'API Topics](/fr/docs/Web/API/Topics_API). Lorsqu'une politique interdit explicitement l'utilisation de l'API Topics, toute tentative d'appel à la méthode {{DOMxRef("Document.browsingTopics()")}} ou d'envoi d'une requête avec un en-tête {{HTTPHeader("Sec-Browsing-Topics")}} échouera avec une erreur `NotAllowedError` {{DOMxRef("DOMException")}}.

- {{HTTPHeader('Permissions-Policy/camera', 'camera')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser des dispositifs d'entrée vidéo.
    La {{JSxRef("Promise")}} retournée par {{DOMxRef("MediaDevices.getUserMedia", "getUserMedia()")}} sera rejetée avec une erreur `NotAllowedError` {{DOMxRef("DOMException")}} si l'autorisation n'est pas accordée.

- {{HTTPHeader('Permissions-Policy/captured-surface-control', 'captured-surface-control')}} {{Experimental_Inline}}
  - : Contrôle si le document est autorisé à utiliser [l'API Captured Surface Control](/fr/docs/Web/API/Screen_Capture_API/Captured_Surface_Control).
    La promesse retournée par les principales méthodes de l'API sera rejetée avec une erreur `NotAllowedError` {{DOMxRef("DOMException")}} si l'autorisation n'est pas accordée.

- {{HTTPHeader('Permissions-Policy/ch-ua-high-entropy-values', 'ch-ua-high-entropy-values')}} {{Experimental_Inline}}
  - : Contrôle si le document est autorisé à utiliser la méthode {{DOMxRef("NavigatorUAData.getHighEntropyValues()")}} pour récupérer des données de user-agent à haute entropie.
    Si l'autorisation n'est pas accordée, la méthode ne retourne que les données à faible entropie `brands`, `mobile` et `platform`.

- {{HTTPHeader('Permissions-Policy/compute-pressure','compute-pressure')}} {{Experimental_Inline}}
  - : Contrôle l'accès à [l'API Compute Pressure](/fr/docs/Web/API/Compute_Pressure_API).

- {{HTTPHeader('Permissions-Policy/cross-origin-isolated','cross-origin-isolated')}} {{Experimental_Inline}}
  - : Contrôle si le document courant peut être traité comme {{DOMxRef("Window.crossOriginIsolated", "isolé d'origine croisée", "", 1)}}.

- {{HTTPHeader('Permissions-Policy/deferred-fetch', 'deferred-fetch')}} {{Experimental_Inline}}
  - : Contrôle l'allocation du quota [`fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) de l'origine principale.

- {{HTTPHeader('Permissions-Policy/deferred-fetch-minimal', 'deferred-fetch-minimal')}} {{Experimental_Inline}}
  - : Contrôle l'allocation du quota partagé [`fetchLater()`](/fr/docs/Web/API/Fetch_API/Using_Deferred_Fetch#quotas) pour les sous-cadres inter-origines.

- {{HTTPHeader('Permissions-Policy/display-capture', 'display-capture')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser la méthode {{DOMxRef("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} pour capturer le contenu de l'écran. Lorsque cette politique est désactivée, la promesse retournée par `getDisplayMedia()` sera rejetée avec une erreur `NotAllowedError` {{DOMxRef("DOMException")}} si l'autorisation de capturer l'écran n'est pas obtenue.

- {{HTTPHeader('Permissions-Policy/encrypted-media', 'encrypted-media')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Encrypted Media Extensions](/fr/docs/Web/API/Encrypted_Media_Extensions_API) (EME). Lorsque cette politique est désactivée, la {{JSxRef("Promise")}} retournée par {{DOMxRef("Navigator.requestMediaKeySystemAccess()")}} sera rejetée avec une erreur `SecurityError` {{DOMxRef("DOMException")}}.

- {{HTTPHeader('Permissions-Policy/fullscreen','fullscreen')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser {{DOMxRef("Element.requestFullscreen()")}}. Lorsque cette politique est désactivée, la {{JSxRef("Promise")}} retournée est rejetée avec une {{JSxRef("TypeError")}}.

- {{HTTPHeader('Permissions-Policy/gamepad','gamepad')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Gamepad](/fr/docs/Web/API/Gamepad_API).
    Lorsque cette politique est désactivée, les appels à {{DOMxRef('Navigator.getGamepads()')}} lèveront une `SecurityError` {{DOMxRef('DOMException')}}, et les évènements {{DOMxRef("Window.gamepadconnected_event", "gamepadconnected")}} et {{DOMxRef("Window.gamepaddisconnected_event", "gamepaddisconnected")}} ne seront pas déclenchés.

- {{HTTPHeader('Permissions-Policy/geolocation','geolocation')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser l'interface {{DOMxRef('Geolocation')}}. Lorsque cette politique est désactivée, les appels à {{DOMxRef('Geolocation.getCurrentPosition','getCurrentPosition()')}} et {{DOMxRef('Geolocation.watchPosition','watchPosition()')}} provoqueront l'invocation des callbacks avec un code d'erreur {{DOMxRef('GeolocationPositionError')}} `PERMISSION_DENIED`.

- {{HTTPHeader('Permissions-Policy/gyroscope','gyroscope')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à recueillir des informations sur l'orientation de l'appareil via l'interface {{DOMxRef("Gyroscope")}}.

- {{HTTPHeader('Permissions-Policy/hid','hid')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser {{DOMxRef("WebHID API", "l'API WebHID", "", "nocode")}} pour se connecter à des périphériques d'interface humaine peu courants ou exotiques, comme des claviers alternatifs ou des manettes.

- {{HTTPHeader('Permissions-Policy/identity-credentials-get','identity-credentials-get')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Federated Credential Management (FedCM)](/fr/docs/Web/API/FedCM_API).

- {{HTTPHeader('Permissions-Policy/idle-detection','idle-detection')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser {{DOMxRef("Idle Detection API", "l'API Idle Detection", "", "nocode")}} pour détecter les interactions des utilisatrices et utilisateurs avec leurs appareils, par exemple pour indiquer l'état «&nbsp;disponible&nbsp;»/«&nbsp;absent&nbsp;» dans des applications de chat.

- {{HTTPHeader("Permissions-Policy/language-detector", "language-detector")}} {{Experimental_Inline}}
  - : Contrôle l'accès à la fonctionnalité de détection de langue de [l'API Translator and Language Detector](/fr/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{HTTPHeader('Permissions-Policy/local-fonts','local-fonts')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à collecter des informations sur les polices installées localement via la méthode {{DOMxRef("Window.queryLocalFonts()")}} (voir aussi {{DOMxRef("Local Font Access API", "l'API Local Font Access", "", "nocode")}}).

- {{HTTPHeader('Permissions-Policy/magnetometer','magnetometer')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à recueillir des informations sur l'orientation de l'appareil via l'interface {{DOMxRef("Magnetometer")}}.

- {{HTTPHeader('Permissions-Policy/microphone','microphone')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser des dispositifs d'entrée audio. Lorsque cette politique est désactivée, la {{JSxRef("Promise")}} retournée par {{DOMxRef("MediaDevices.getUserMedia()")}} sera rejetée avec une erreur `NotAllowedError` {{DOMxRef("DOMException")}}.

- {{HTTPHeader('Permissions-Policy/midi', 'midi')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Web MIDI](/fr/docs/Web/API/Web_MIDI_API). Lorsque cette politique est désactivée, la promesse ({{JSxRef("Promise")}}) retournée par {{DOMxRef("Navigator.requestMIDIAccess()")}} sera rejetée avec une erreur `SecurityError` {{DOMxRef("DOMException")}}.

- {{HTTPHeader("Permissions-Policy/on-device-speech-recognition", "on-device-speech-recognition")}} {{Experimental_Inline}}
  - : Contrôle l'accès à la fonctionnalité de [reconnaissance vocale locale](/fr/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API#on-device_speech_recognition) de [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API).

- {{HTTPHeader("Permissions-Policy/otp-credentials", "otp-credentials")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API WebOTP](/fr/docs/Web/API/WebOTP_API) pour demander un mot de passe à usage unique (OTP) depuis un SMS au format spécial envoyé par le serveur de l'application, via {{DOMxRef("CredentialsContainer.get", "navigator.credentials.get({otp: ..., ...})")}}.

- {{HTTPHeader('Permissions-Policy/payment', 'payment')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Payment Request](/fr/docs/Web/API/Payment_Request_API). Lorsque cette politique est désactivée, le constructeur {{DOMxRef("PaymentRequest","PaymentRequest()")}} retournera une `SecurityError` {{DOMxRef("DOMException")}}.

- {{HTTPHeader('Permissions-Policy/picture-in-picture', 'picture-in-picture')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à lire une vidéo en mode Image dans l'image via l'API correspondante.

- {{HTTPHeader('Permissions-Policy/private-state-token-issuance','private-state-token-issuance')}} {{Experimental_Inline}}
  - : Contrôle l'utilisation des opérations de demande de jeton (`token-request`) de [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API).

- {{HTTPHeader('Permissions-Policy/private-state-token-redemption','private-state-token-redemption')}} {{Experimental_Inline}}
  - : Contrôle l'utilisation des opérations `token-redemption` et `send-redemption-record` de [l'API Private State Token](/fr/docs/Web/API/Private_State_Token_API).

- {{HTTPHeader("Permissions-Policy/publickey-credentials-create", "publickey-credentials-create")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) pour créer de nouvelles informations d'identification asymétriques, par exemple via {{DOMxRef("CredentialsContainer.create", "navigator.credentials.create({publicKey: ..., ...})")}}.

- {{HTTPHeader("Permissions-Policy/publickey-credentials-get", "publickey-credentials-get")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Web Authentication](/fr/docs/Web/API/Web_Authentication_API) pour récupérer des informations d'identification par clé publique déjà stockées, par exemple via {{DOMxRef("CredentialsContainer.get", "navigator.credentials.get({publicKey: ..., ...})")}}.

- {{HTTPHeader('Permissions-Policy/screen-wake-lock', 'screen-wake-lock')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Screen Wake Lock](/fr/docs/Web/API/Screen_Wake_Lock_API) pour indiquer que l'appareil ne doit pas s'éteindre ou diminuer la luminosité de l'écran.

- {{HTTPHeader('Permissions-Policy/serial','serial')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser {{DOMxRef("Web Serial API", "l'API Web Serial", "", "nocode")}} pour communiquer avec des dispositifs série, soit connectés directement via un port série, soit via des dispositifs USB ou Bluetooth émulant un port série.

- {{HTTPHeader("Permissions-Policy/speaker-selection", "speaker-selection")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Audio Output Devices](/fr/docs/Web/API/Audio_Output_Devices_API) pour lister et sélectionner des haut-parleurs.

- {{HTTPHeader("Permissions-Policy/storage-access", "storage-access")}} {{Experimental_Inline}}
  - : Contrôle si un document chargé dans un contexte tiers (c.-à-d. intégré dans un {{HTMLElement("iframe")}}) est autorisé à utiliser {{DOMxRef("Storage Access API", "l'API Storage Access", "", "nocode")}} pour demander l'accès aux cookies non partitionnés.

- {{HTTPHeader("Permissions-Policy/translator", "translator")}} {{Experimental_Inline}}
  - : Contrôle l'accès à la fonctionnalité de traduction [des API Translator and Language Detector](/fr/docs/Web/API/Translator_and_Language_Detector_APIs).

- {{HTTPHeader("Permissions-Policy/summarizer", "summarizer")}} {{Experimental_Inline}}
  - : Contrôle l'accès à [l'API Summarizer](/fr/docs/Web/API/Summarizer_API).

- {{HTTPHeader('Permissions-Policy/usb', 'usb')}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API WebUSB](/fr/docs/Web/API/WebUSB_API).

- {{HTTPHeader("Permissions-Policy/web-share", "web-share")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser {{DOMxRef("Navigator.share","Navigator.share()")}} de [l'API Web Share](/fr/docs/Web/API/Web_Share_API) pour partager du texte, des liens, des images et d'autres contenus vers des destinations arbitraires choisies par l'utilisateur·ice (par exemple, des applications mobiles).

- {{HTTPHeader("Permissions-Policy/window-management", "window-management")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API Window Management](/fr/docs/Web/API/Window_Management_API) pour gérer des fenêtres sur plusieurs écrans.

- {{HTTPHeader("Permissions-Policy/xr-spatial-tracking", "xr-spatial-tracking")}} {{Experimental_Inline}}
  - : Contrôle si le document courant est autorisé à utiliser [l'API WebXR Device](/fr/docs/Web/API/WebXR_Device_API) pour interagir avec une session WebXR.

## Exemples

### Utilisation simple

#### En-tête `Permissions-Policy`

Pour autoriser tous les domaines à accéder à la géolocalisation&nbsp;:

```http
Permissions-Policy: geolocation=*
```

Pour autoriser l'accès à une partie des domaines&nbsp;:

```http
Permissions-Policy: geolocation=(self "https://a.exemple.com" "https://b.exemple.com")
```

Plusieurs fonctionnalités peuvent être contrôlées en même temps en envoyant l'en-tête avec une liste de politiques séparées par des virgules, ou en envoyant un en-tête distinct pour chaque politique.

Par exemple, les exemples suivants sont équivalents&nbsp;:

```http
Permissions-Policy: picture-in-picture=(), geolocation=(self https://exemple.com/), camera=*

Permissions-Policy: picture-in-picture=()
Permissions-Policy: geolocation=(self https://exemple.com/)
Permissions-Policy: camera=*
```

#### Cadres intégrés

Pour qu'une fonctionnalité soit activée dans un `<iframe>`, son domaine autorisé doit aussi être présent dans la liste d'autorisation de la page parente. En raison de ce [comportement d'héritage](/fr/docs/Web/HTTP/Guides/Permissions_Policy#héritage_des_politiques_pour_le_contenu_intégré), il est conseillé de définir le support le plus large possible pour une fonctionnalité dans l'en-tête HTTP, puis de définir le sous-ensemble de support nécessaire dans chaque `<iframe>`.

Pour autoriser tous les domaines à accéder à la géolocalisation&nbsp;:

```html
<iframe src="https://exemple.com" allow="geolocation *"></iframe>
```

Pour appliquer une politique au domaine courant et à d'autres&nbsp;:

```html
<iframe
  src="https://exemple.com"
  allow="geolocation 'self' https://a.exemple.com https://b.exemple.com"></iframe>
```

Important&nbsp;: Par défaut, si un `<iframe>` navigue vers un autre domaine, la politique n'est pas appliquée au domaine vers lequel l'`<iframe>` navigue. En listant le domaine cible dans l'attribut `allow`, la politique de permissions appliquée à l'`<iframe>` d'origine sera appliquée au domaine cible.

Plusieurs fonctionnalités peuvent être contrôlées en même temps en incluant une liste de directives de politique séparées par des points-virgules dans l'attribut `allow`.

```html
<iframe
  src="https://exemple.com"
  allow="geolocation 'self' https://a.exemple.com https://b.exemple.com; fullscreen 'none'"></iframe>
```

Il est utile de mentionner la valeur `src`. Comme indiqué plus haut, utiliser cette valeur dans la liste d'autorisation signifie que la fonctionnalité associée sera autorisée dans cet `<iframe>`, tant que le document chargé provient du même domaine que l'URL dans son attribut `{{HTMLElement('iframe','src','#attributs')}}`. Cette valeur est le _valeur par défaut_ de la liste d'autorisation pour les fonctionnalités listées dans `allow`, donc les exemples suivants sont équivalents&nbsp;:

```html
<iframe src="https://exemple.com" allow="geolocation 'src'"></iframe>
<iframe src="https://exemple.com" allow="geolocation"></iframe>
```

### Refuser l'accès aux fonctionnalités puissantes

La société SecureCorp Inc. souhaite désactiver les API Microphone (par exemple {{DOMxRef("MediaDevices.getUserMedia()")}}) et {{DOMxRef("Geolocation")}} dans son application. Elle peut le faire en utilisant l'en-tête de réponse suivant&nbsp;:

```http
Permissions-Policy: microphone=(), geolocation=()
```

En définissant `()` pour la liste des domaines, les fonctionnalités indiquées seront désactivées pour tous les contextes de navigation (y compris tous les `<iframe>`), quel que soit leur domaine.

### Combiner l'en-tête HTTP et les politiques de `<iframe>`

Par exemple, supposons que vous souhaitez activer la géolocalisation sur votre propre domaine, ainsi que dans du contenu embarqué provenant de votre réseau publicitaire de confiance. Vous pouvez définir la politique de permissions globale de la page ainsi&nbsp;:

```http
Permissions-Policy: geolocation=(self https://trusted-ad-network.com)
```

Dans vos `<iframe>` publicitaires, vous pouvez autoriser l'accès au domaine `https://trusted-ad-network.com` ainsi&nbsp;:

```html
<iframe src="https://trusted-ad-network.com" allow="geolocation"></iframe>
```

Si un autre domaine est chargé dans l'`<iframe>`, il n'aura pas accès à la géolocalisation&nbsp;:

```html
<iframe src="https://rogue-origin-exemple.com" allow="geolocation"></iframe>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Politique de permissions](/fr/docs/Web/HTTP/Guides/Permissions_Policy)
- La propriété {{DOMxRef("Document.featurePolicy")}} et l'interface {{DOMxRef("FeaturePolicy")}}
- L'en-tête {{HTTPHeader("Content-Security-Policy")}}
- L'en-tête {{HTTPHeader("Referrer-Policy")}}
