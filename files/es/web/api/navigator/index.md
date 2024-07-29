---
title: Navigator
slug: Web/API/Navigator
l10n:
  sourceCommit: 165b70e57270af4ba85526d92cce74d51d12c39d
---

{{APIRef("DOM")}}

La interfaz **`Navigator`** representa el estado y la identidad del _user agent_. Es completamente consultable y es posible registrar scripts para que ejecuten diversas actividades.

Un objeto `Navigator` puede ser obtenido usando la propiedad de sólo lectura {{domxref("Window.navigator")}}.

## Propiedades de instancia

_No hereda ninguna propiedad._

### Propiedadedes estandard

- {{domxref("Navigator.connection")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Proporciona un objeto {{domxref("NetworkInformation")}} que contiene información sobre la conexión de red de un dispositivo.
- {{domxref("Navigator.cookieEnabled")}} {{ReadOnlyInline}}
  - : Devuelve _false_ si se ignorará la configuración de una _cookie_ y _true_ en caso contrario.
- {{domxref("Navigator.credentials")}} {{ReadOnlyInline}}
  - : Devuelve la interfaz {{domxref("CredentialsContainer")}} que expone métodos para solicitar credenciales y notificar al agente de usuario cuando ocurren eventos interesantes, como iniciar o cerrar sesión correctamente.
- {{domxref("Navigator.deviceMemory")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve la cantidad de memoria del dispositivo en gigabytes. Este valor es una aproximación dada redondeando a la potencia de 2 más cercana y dividiendo ese número por 1024.
- {{domxref("Navigator.geolocation")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("Geolocalización")}} que permite acceder a la ubicación del dispositivo.
- {{domxref("Navigator.hid")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve un objeto {{domxref("HID")}} que proporciona métodos para conectarse a dispositivos HID, listar dispositivos HID conectados y controladores de eventos para dispositivos HID conectados.
- {{domxref("Navigator.hardwareConcurrency")}} {{ReadOnlyInline}}
  - : Devuelve el número de núcleos de procesador lógico disponibles.
- {{domxref('Navigator.keyboard')}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve un objeto {{domxref('Keyboard')}} que brinda acceso a funciones que recuperan mapas de diseño de teclado y alternan la captura de pulsaciones de teclas desde el teclado físico.
- {{domxref("Navigator.language")}} {{ReadOnlyInline}}
  - : Devuelve una cadena que representa el idioma preferido del usuario, generalmente el idioma de la interfaz de usuario del navegador. El valor `null` se devuelve cuando se desconoce.
- {{domxref("Navigator.languages")}} {{ReadOnlyInline}}
  - : Devuelve una matriz de cadenas que representan los idiomas que conoce el usuario, por orden de preferencia.
- {{domxref("Navigator.locks")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("LockManager")}} que proporciona métodos para solicitar un nuevo objeto {{domxref('Lock')}} y consultar un objeto {{domxref('Lock')}} existente.
- {{domxref("Navigator.maxTouchPoints")}} {{ReadOnlyInline}}
  - : Devuelve el número máximo de puntos de contacto táctiles simultáneos admitidos por el dispositivo actual.
- {{domxref("Navigator.mediaCapabilities")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("MediaCapabilities")}} que puede exponer información sobre las capacidades de decodificación y codificación para un formato y capacidades de salida determinados.
- {{domxref("Navigator.mediaDevices")}} {{ReadOnlyInline}}
  - : Devuelve una referencia a un objeto {{domxref("MediaDevices")}} que luego se puede usar para obtener información sobre los dispositivos de medios disponibles ({{domxref("MediaDevices.enumerateDevices()")}}), averiguar qué propiedades restringibles son compatibles con los medios en la computadora del usuario y el agente de usuario ({{domxref("MediaDevices.getSupportedConstraints()")}}) y para solicitar acceso a los medios usando {{domxref("MediaDevices.getUserMedia()")}}.
- {{domxref("Navigator.mediaSession")}} {{ReadOnlyInline}}
  - : Devuelve el objeto {{domxref("MediaSession")}} que se puede usar para proporcionar metadatos que el navegador puede usar para presentar información sobre los medios que se están reproduciendo actualmente al usuario, como en una interfaz de usuario de controles de medios globales.
- {{domxref("Navigator.onLine")}} {{ReadOnlyInline}}
  - : Devuelve un valor booleano que indica si el navegador está funcionando en línea.
- {{domxref("Navigator.pdfViewerEnabled")}} {{ReadOnlyInline}}
  - : Devuelve "verdadero" si el navegador puede mostrar archivos PDF en línea cuando se navega hacia ellos, y "falso" en caso contrario.
- {{domxref("Navigator.permissions")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("Permisos")}} que se puede usar para consultar y actualizar el estado de los permisos de las API cubiertas por la [API de permisos](/es/docs/Web/API/Permissions_API).
- {{domxref("Navigator.presentation")}} {{ReadOnlyInline}}
  - : Devuelve una referencia a la API {{domxref("Presentation")}}.
- {{domxref("Navigator.serial")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve un objeto {{domxref("Serial")}}, que representa el punto de entrada a {{domxref("Web Serial API")}} para habilitar el control de los puertos serie.
- {{domxref("Navigator.serviceWorker")}} {{ReadOnlyInline}}
  - : Devuelve un objeto {{domxref("ServiceWorkerContainer")}}, que proporciona acceso al registro, eliminación, actualización y comunicación con los objetos {{domxref("ServiceWorker")}} para el [documento asociado](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window).
- {{domxref("Navigator.storage")}} {{ReadOnlyInline}}
  - : Devuelve el objeto singleton {{domxref('StorageManager')}} que se usa para administrar los permisos de persistencia y estimar el almacenamiento disponible sitio por sitio y aplicación por aplicación.
- {{domxref("Navigator.userActivation")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve un objeto {{domxref("UserActivation")}} que contiene información sobre el estado de activación del usuario de la ventana actual.
- {{domxref("Navigator.userAgent")}} {{ReadOnlyInline}}
  - : Devuelve la cadena de agente de usuario para el navegador actual.
- {{domxref("Navigator.userAgentData")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve un objeto {{domxref("NavigatorUAData")}}, que da acceso a información sobre el navegador y el sistema operativo del usuario.
- {{domxref("Navigator.webdriver")}} {{ReadOnlyInline}}
  - : Indica si el agente de usuario está controlado por automatización.
- {{domxref("Navigator.windowControlsOverlay")}} {{ReadOnlyInline}}
  - : Devuelve la interfaz {{domxref("WindowControlsOverlay")}} que expone información sobre la geometría de la barra de título en aplicaciones web progresivas de escritorio y un evento para saber cuándo cambia.
- {{domxref("Navigator.xr")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve el objeto {{domxref("XRSystem")}}, que representa el punto de entrada a [WebXR API](/es/docs/Web/API/WebXR_Device_API).

### Propiedades no estandares

- {{domxref("Navigator.buildID")}} {{Non-standard_Inline}}
  - : Devuelve el identificador de compilación del navegador. En los navegadores modernos, esta propiedad ahora devuelve una marca de tiempo fija como medida de privacidad, p. `20181001000000` en Firefox 64 en adelante.
- {{domxref("Navigator.contacts")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve una interfaz {{domxref('ContactsManager')}} que permite a los usuarios seleccionar entradas de su lista de contactos y compartir detalles limitados de las entradas seleccionadas con un sitio web o una aplicación.
- {{domxref("Navigator.globalPrivacyControl")}} {{Non-standard_Inline}} {{Experimental_Inline}}
  - : Devuelve un valor booleano que indica el consentimiento de un usuario para que su información sea compartida o vendida.
- {{domxref("Navigator.securitypolicy")}} {{Non-standard_Inline}}
  - : Devuelve una cadena vacía. En Netscape 4.7x, devuelve "Política nacional de EE. UU. y CA" o "Política de exportación".
- {{domxref("Navigator.standalone")}} {{Non-standard_Inline}}
  - : Devuelve un valor booleano que indica si el navegador se está ejecutando en modo independiente. Disponible solo en iOS Safari de Apple.
- {{domxref("Navigator.wakeLock")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : Devuelve una interfaz {{domxref("WakeLock")}} que puede usar para solicitar bloqueos de activación de pantalla y evitar que la pantalla se atenúe, apague o muestre un protector de pantalla.

### Propiedades obsoletas

- {{domxref("Navigator.appCodeName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Siempre devuelve `'Mozilla'`, en cualquier navegador.
- {{domxref("Navigator.appName")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Siempre devuelve `'Netscape'`, en cualquier navegador.
- {{domxref("Navigator.appVersion")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve la versión del navegador como una cadena. No confíe en esta propiedad para devolver el valor correcto.
- {{domxref("Navigator.activeVRDisplays")}} {{ReadOnlyInline}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Devuelve una matriz que contiene cada objeto {{domxref("VRDisplay")}} que se está presentando actualmente ({{domxref("VRDisplay.ispresenting")}} es `true`).
- {{domxref("Navigator.doNotTrack")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Informa el valor de la preferencia de no rastrear del usuario. Cuando este valor es "sí", su sitio web o aplicación no debe rastrear al usuario.
- {{domxref("Navigator.mimeTypes")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve un {{domxref("MimeTypeArray")}} que enumera los tipos MIME admitidos por el navegador.
- {{domxref("Navigator.oscpu")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve una cadena que representa el sistema operativo actual.
- {{domxref("Navigator.platform")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve una cadena que representa la plataforma del navegador. No confíe en esta función para devolver un valor significativo.
- {{domxref("Navigator.plugins")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve un {{domxref("PluginArray")}} que enumera los complementos instalados en el navegador.
- {{domxref("Navigator.product")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Siempre devuelve `'Gecko'`, en cualquier navegador.
- {{domxref("Navigator.productSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve la cadena `'20030107'`, o `'"20100101'`.
- {{domxref("Navigator.vendor")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Devuelve la cadena vacía, `'Apple Computer Inc.'` o `'Google Inc.'`.
- {{domxref("Navigator.vendorSub")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Siempre devuelve la cadena vacía.

## Metodos de instancia

_No hereda ningun metodo._

- {{domxref("Navigator.canShare()")}}
  - : Devuelve `verdadero` si una llamada a `Navigator.share()` tiene éxito.
- {{domxref("Navigator.clearAppBadge()")}} {{Experimental_Inline}}
  - : Borra una insignia en el ícono de la aplicación actual y devuelve un {{jsxref("Promise")}} que se resuelve con {{jsxref("undefined")}}.
- {{domxref("Navigator.getBattery()")}}
  - : Devuelve una promesa que se resuelve con un objeto {{domxref("BatteryManager")}} que devuelve información sobre el estado de carga de la batería.
- {{domxref("Navigator.registerProtocolHandler()")}}
  - : Permite que los sitios web se registren como un posible controlador para un protocolo determinado.
- {{domxref("Navigator.requestMediaKeySystemAccess()")}}
  - : Devuelve un {{jsxref("Promise")}} para un objeto `MediaKeySystemAccess`.
- {{domxref("Navigator.requestMIDIAccess()")}}
  - : Devuelve un {{jsxref('Promise')}} que representa una solicitud de acceso a dispositivos MIDI en el sistema del usuario.
- {{domxref("Navigator.sendBeacon()")}}
  - : Se utiliza para transferir de forma asíncrona una pequeña cantidad de datos mediante {{Glossary("HTTP")}} desde el agente de usuario a un servidor web.
- {{domxref("Navigator.setAppBadge()")}} {{Experimental_Inline}}
  - : Establece una insignia en el ícono asociado con esta aplicación y devuelve un {{jsxref("Promise")}} que se resuelve con {{jsxref("undefined")}}.
- {{domxref("Navigator.share()")}}
  - : Invoca el mecanismo de uso compartido nativo de la plataforma actual.
- {{domxref("Navigator.vibrate()")}}
  - : Provoca vibración en dispositivos compatibles. No hace nada si el soporte de vibración no está disponible.

### Metodos obsoletos

- {{domxref("Navigator.getVRDisplays()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Devuelve una promesa que se resuelve en una matriz de {{domxref("VRDisplay")}} objetos que representan cualquier dispositivo VR disponible conectado a la computadora.
- {{domxref("Navigator.getUserMedia()")}} {{Deprecated_Inline}}
  - : Después de haber solicitado permiso al usuario, devuelve el flujo de audio o video asociado a una cámara o micrófono en la computadora local.
- {{domxref("Navigator.taintEnabled()")}} {{Deprecated_Inline}}
  - : Devuelve `falso`. Las funciones de corrupción/no corrupción de JavaScript se eliminaron en JavaScript 1.2.
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : Siempre devuelve falso.

## Especificaciones

{{Specifications}}

## Compatibilidad con navegadores

{{Compat}}
