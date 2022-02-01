---
title: Feature-Policy
slug: Web/HTTP/Headers/Feature-Policy
tags:
  - Authorization
  - Experimental
  - Feature Policy
  - Feature-Policy
  - HTTP
  - Permissions
  - Reference
  - Security
  - Web
  - header
translation_of: Web/HTTP/Headers/Feature-Policy
---
{{HTTPSidebar}}

L'en-tête HTTP **`Feature-Policy`** est un mécanisme permettant de permettre ou d'interdire l'utilisation de fonctionnalités du navigateur dans son propre cadre et dans ceux de tous les éléments {{HTMLElement("iframe")}} que le document contient.

> **Note :** Cet en-tête est toujours au stade expérimental, et est sujet à être modifié à tout moment. Méfiez-vous en si vous souhaitez l'implanter sur vos sites. Il a maintenant été renommé `Permissions-Policy` dans la spécification, et cet article sera mis à jour pour refléter ce changement.

Pour plus d'informations, vour l'article principal sur [Feature Policy](/docs/Web/HTTP/Feature_Policy).

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">Type d'en-tête</th>
      <td>{{Glossary("Response header")}}</td>
    </tr>
    <tr>
      <th scope="row">{{Glossary("Forbidden header name")}}</th>
      <td>oui</td>
    </tr>
  </tbody>
</table>

## Syntaxe

    Feature-Policy: <directive> <allowlist>

- `<directive>`
  - : La directive de Feature Policy sur laquelle appliquer la liste de permissions `allowlist`. Voir {{anch("Directives")}} ci-dessous pour une liste des noms de directives autorisés.
- `<allowlist>`
  - : {{page("Web/HTTP/Feature_Policy/Using_Feature_Policy", "allowlist")}}

## Directives

- {{httpheader('Feature-Policy/accelerometer','accelerometer')}}
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'accélération de l'appareil au moyen de l'interface {{DOMxRef("Accelerometer")}}.
- {{httpheader('Feature-Policy/ambient-light-sensor','ambient-light-sensor')}}
  - : Contrôle si le le document courant est autorisé à recueillir des informations à propos de la luminosité ambiante de l'appareil au moyen de l'interface {{DOMxRef("AmbientLightSensor")}}.
- {{httpheader('Feature-Policy/autoplay','autoplay')}}
  - : Contrôle si le document courant est autorisé à jouer automatiquement des médias chargés au moyen de l'interface {{domxref("HTMLMediaElement")}}. Quand cette fonctionnalité est désactivée et qu'il n'y a pas eu d'action de la part de l'utilisateur, la promesse ({{jsxref("Promise")}}) retournée par {{domxref("HTMLMediaElement.play()")}} sera rejetée avec une exception {{domxref("DOMException")}}. L'attribut `autoplay` sur les éléments {{HTMLELement("audio")}} et {{HTMLElement("video")}} sera ignoré.
- {{httpheader('Feature-Policy/battery','battery')}}
  - : Contrôle si l'utilisation de l'[API Battery Status](/docs/Web/API/Battery_Status_API) est autorisé. Quand cette fonctionnalité est désactivée, la promesse retournée par {{DOMxRef("Navigator.getBattery","Navigator.getBattery()")}} sera rejetée avec une {{DOMxRef("DOMException")}} {{Exception("NotAllowedError")}}.
- {{httpheader('Feature-Policy/camera', 'camera')}}
  - : Contrôle si le document courant est autorisé à utiliser l'appareil photographique du système. Quand cette fonctionnalité est désactivée, la promesse retournée par {{domxref("MediaDevices.getUserMedia", "getUserMedia()")}} sera rejetée avec une {{DOMxRef("DOMException")}} {{Exception("NotAllowedError")}}.
- {{HTTPHeader('Feature-Policy/display-capture', 'display-capture')}}
  - : Contrôle si le document courant est autorisé ou non à utiliser la méthode {{domxref("MediaDevices.getDisplayMedia", "getDisplayMedia()")}} pour effectuer une capture d'écran. Quand cette fonctionnalité est désactivée, la promesse retounrée par `getDisplayMedia()` sera rejetée avec une exception {{Exception("NotAllowedError")}} si la permission de prendre une capture d'écran n'est pas obtenue.
- {{httpheader('Feature-Policy/document-domain','document-domain')}}
  - : Contrôle si le document courant est autorisé à définir la propriété {{domxref("document.domain")}}. Quand cette directive est désactivée, tenter de modifier {{domxref("document.domain")}} échouera et lèvera une {{domxref("DOMException")}} {{Exception("SecurityError")}}.
- {{httpheader('Feature-Policy/encrypted-media', 'encrypted-media')}}
  - : Contrôle si le document courant est autorisé à utiliser l'API [Encrypted Media Extensions](/en-US/docs/Web/API/Encrypted_Media_Extensions_API) (EME). Quand cette directive est désactivée, la promesse retournée par {{domxref("Navigator.requestMediaKeySystemAccess()")}} sera rejecté avec une {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/execution-while-not-rendered', 'execution-while-not-rendered')}}
  - : Contrôle si les tâches des cadres doivent être exécutées s'ils ne seront pas rendus à l'écran (par exemple si un `<iframe>` est [`hidden`](/en-US/docs/Web/HTML/Global_attributes/hidden) ou `display: none`).
- {{httpheader('Feature-Policy/execution-while-out-of-viewport', 'execution-while-out-of-viewport')}}
  - : Contrôle si les tâches des cadres doivent être exécutées quand ils sont en dehors du cadre visible.

<!---->

- {{httpheader('Feature-Policy/fullscreen','fullscreen')}}
  - : Contrôle si le document courant est autorisé à utiliser {{DOMxRef("Element.requestFullScreen()")}}. Quand cette directive est désactivée, la promesse retournée sera rejetée avec une exception {{JSxRef("TypeError")}}.
- {{httpheader('Feature-Policy/geolocation','geolocation')}}
  - : Contrôle si le document courant est autorisé à utiliser l'interface {{domxref('Geolocation')}}. Quand cette directive est désactivée, les appels à {{domxref('Geolocation.getCurrentPosition','getCurrentPosition()')}} et {{domxref('Geolocation.watchPosition','watchPosition()')}} causeront un appel de leurs fonctions de rappel avec une exception {{domxref('PositionError')}} dont le code est `PERMISSION_DENIED`.
- {{httpheader('Feature-Policy/gyroscope','gyroscope')}}
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'orientation de l'appareil au moyen de l'interface {{DOMxRef("Gyroscope")}}.
- {{httpheader('Feature-Policy/layout-animations','layout-animations')}}
  - : Contrôle si le document courant est autorisé à afficher des animations de mise en page.

<!---->

- {{httpheader('Feature-Policy/legacy-image-formats','legacy-image-formats')}}
  - : Contrôle si le document courant est autorisé à afficher des images dans des formats du passé.

<!---->

- {{httpheader('Feature-Policy/magnetometer','magnetometer')}}
  - : Contrôle si le document courant est autorisé à recueillir des informations à propos de l'orientation au moyen de l'interface {{DOMxRef("Magnetometer")}}.
- {{httpheader('Feature-Policy/microphone','microphone')}}
  - : Contrôle si le document courant est autorisé à utiliser le microphone de l'appareil. Quand cette fonctionnalité est désactivée, la promesse retournée par {{domxref("MediaDevices.getUserMedia()")}} sera rejetée avec une exception {{Exception("NotAllowedError")}}.
- {{httpheader('Feature-Policy/midi', 'midi')}}
  - : Contrôle si le document courant est autorisé à utiliser l'[API Web MIDI](/en-US/docs/Web/API/Web_MIDI_API). Quand cette fonctionnalité est désactivée, la promesse retournée par {{domxref("Navigator.requestMIDIAccess()")}} sera rejetée avec une exception {{domxref("DOMException")}}.
- {{httpheader('Feature-Policy/navigation-override','navigation-override')}}
  - : Contrôle la disponibilité des mécanismes qui permettent à l'auteur de la page de prendre le contrôle sur le comportment de la [navigation spatiale](https://www.w3.org/TR/css-nav/), ou de l'annuler complètement.
- {{httpheader('Feature-Policy/oversized-images','oversized-images')}}
  - : Contrôle si le document courant est autorisé à télécharger et afficher des images lourdes.
- {{httpheader('Feature-Policy/payment', 'payment')}}
  - : Contrôle si le document courant est autorisé à utiliser l'[API Payment Request](/en-US/docs/Web/API/Payment_Request_API). Quand cette directive est désactivée, le constructeur {{domxref("PaymentRequest","PaymentRequest()")}} lèvera une {{domxref("DOMException")}} {{Exception("SecurityError")}}.
- {{httpheader('Feature-Policy/picture-in-picture', 'picture-in-picture')}}
  - : Controls whether the current document is allowed to play a video in a Picture-in-Picture mode via the corresponding API.
- {{httpheader("Feature-Policy/publickey-credentials-get", "publickey-credentials-get")}}
  - : Contrôle si le document courant est autorisé à use the [Web Authentication API](/en-US/docs/Web/API/Web_Authentication_API) to retreive already stored public-key credentials, i.e. via {{domxref("CredentialsContainer.get","navigator.credentials.get({publicKey: ..., ...})")}}.
- {{httpheader('Feature-Policy/sync-xhr', 'sync-xhr')}}
  - : Contrôle si le document courant est autorisé à make synchronous {{DOMxRef("XMLHttpRequest")}} requests.
- {{httpheader('Feature-Policy/usb', 'usb')}}
  - : Contrôle si le document courant est autorisé à use the [WebUSB API](https://wicg.github.io/webusb/).
- {{httpheader('Feature-Policy/vr', 'vr')}} {{deprecated_inline}}
  - : Contrôle si le document courant est autorisé à use the [WebVR API](/en-US/docs/Web/API/WebVR_API). Quand cette directive est désactivée, la promesse retournée par {{domxref("Navigator.getVRDisplays","Navigator.getVRDisplays()")}} sera rejetée avec une {{domxref("DOMException")}}. Gardez en tête que la norme WebVR est en cours de remplacement au profit de [WebXR](/en-US/docs/Web/API/WebXR_Device_API).
- {{httpheader('Feature-Policy/wake-lock', 'wake-lock')}}
  - : Contrôle si le document courant est autorisé à utiliser l'[API Wake Lock](https://www.w3.org/TR/wake-lock/) pour indiquer que l'appareil ne devrait se mettre en veille.
- {{httpheader('Feature-Policy/screen-wake-lock', 'screen-wake-lock')}}
  - : Contrôle si le document courant est autorisé à utiliser l'[API Screen Wake Lock](/en-US/docs/Web/API/Screen_Wake_Lock_API) pour indiquer que l'appareil ne devrait pas assombrir ou éteindre l'écran.
- {{httpheader("Feature-Policy/web-share", "web-share")}}
  - : Contrôle si le document courant est autorisé à utiliser la méthode {{domxref("Navigator.share","Navigator.share()")}} de l'API Web Share pour partager du texte, des liens, des images et d'autres contenus à des destinations arbitraires sur le choix de l'utilisateur, par exemple à des applications mobiles.
- {{httpheader("Feature-Policy/xr-spatial-tracking", "xr-spatial-tracking")}}
  - : Contrôle si le document courant est autorisé à utiliser l'[API WebXR Device](/en-US/docs/Web/API/WebXR_Device_API) pour interagir avec une WebXR.

## Exemple

SecureCorp Inc. souhaite désactiver les API du microphone et de géolocalisation dans son application. Elle peut le faire en délivrant l'en-tête de réponse HTTP suivant pour définir une réglementation des fonctionnalités :

    Feature-Policy: microphone 'none'; geolocation 'none'

En spécifiant la valeur `'none'` pour liste des origines, les fonctionnalités auquel la valeur est appliquée seront désactivées pour tous les contextes de navigation (incluant tout les cadres `<iframe>`), quelle que soit leur origine.

## Spécifications

| Spécification                                                                                                  |
| -------------------------------------------------------------------------------------------------------------- |
| [Permissions Policy](https://w3c.github.io/webappsec-permissions-policy/#permissions-policy-http-header-field) |

## Compatibilité des navigateurs

{{Compat("http.headers.Feature-Policy")}}

## Voir aussi

- [Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy)
- [Utiliser Feature Policy](/en-US/docs/Web/HTTP/Feature_Policy/Using_Feature_Policy)
- {{DOMxRef("Document.featurePolicy")}} and {{DOMxRef("FeaturePolicy")}}
- [Feature-Policy Tester (Chrome Developer Tools extension)](https://chrome.google.com/webstore/detail/feature-policy-tester-dev/pchamnkhkeokbpahnocjaeednpbpacop)
- {{HTTPHeader("Content-Security-Policy")}}
- {{HTTPHeader("Referrer-Policy")}}
