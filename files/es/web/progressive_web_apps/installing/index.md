---
title: Instalar y desinstalar aplicaciones web
slug: Web/Progressive_web_apps/Installing
tags:
  - Android
  - Apps
  - Chrome
  - Desinstalar
  - Firefox
  - Guía
  - Lanzar
  - PWA
  - Pantalla de inicio
  - Principiante
  - Samsung
  - Web
  - aplicaciones
  - aplicaciones web progresivas
  - instalar
translation_of: Web/Progressive_web_apps/Developer_guide/Installing
original_slug: Web/Progressive_web_apps/Developer_guide/Installing
---
La instalación de aplicaciones web es una función disponible en los navegadores modernos que permite a los usuarios elegir "instalar" fácil y cómodamente una aplicación web en su dispositivo para que puedan acceder a ella de la misma manera que lo harían con cualquier otra aplicación. Dependiendo del dispositivo y las características del sistema operativo y el navegador, esto puede resultar en lo que esencialmente es una aplicación con todas las funciones (por ejemplo, usando [WebAPK](https://developers.google.com/web/fundamentals/integration/webapks) en Android) o como un acceso directo agregado a la pantalla de tu dispositivo. Esta guía explica cómo se realiza la instalación, qué significa y qué debes hacer como desarrollador para que los usuarios la aprovechen.

## ¿Por qué la instalación?

La opción de instalar una aplicación web es parte de la filosofía {{web.link("/es/docs/Web/Progressive_web_apps", "Aplicación web progresiva")}}, que proporciona a las aplicaciones web las mismas ventajas de experiencia de usuario que las aplicaciones nativas para que puedan ser competitivas. Las aplicaciones instaladas se invocan de manera más conveniente ya que tienen presencia en la pantalla de inicio de un dispositivo o en la lista o barra de aplicaciones. Esto facilita que un usuario utilice un gesto para acceder a una aplicación tocando o haciendo clic en su icono. La aplicación en sí misma, se puede manifestar como en una vista sin bordes (sin el navegador Chrome completo) pero, no obstante, se está ejecutando de manera efectiva como una pestaña dentro del navegador.

Para los usuarios, la experiencia de una PWA aparentemente nativa es más cómoda y conveniente que un sitio web típico. Al reducir la diferencia de experiencia del usuario entre la aplicación web y las aplicaciones nativas en el dispositivo del usuario, reduce tanto la pérdida de cualquier memoria muscular que tenga relacionada con la interfaz nativa del dispositivo como la sensación de que "algo no va del todo bien" que los usuarios pueden experimentar al cambiar entre aplicaciones nativas y basadas en web.

## ¿Qué navegadores admiten la instalación?

La instalación es compatible con Chrome para Android y Android WebView versión 31 y posteriores, Opera para Android 32 en adelante, Samsung Internet a partir de la versión 4 y Firefox para Android {{web.link("/es/docs/Mozilla/Firefox/Releases/58", "versión 58")}} y posteriores.

Safari en iOS es un poco diferente. Algunas partes del ecosistema de PWA son compatibles, mientras que otras no. iOS 13 introdujo una experiencia de instalación mucho más comparable, que también se describe aquí.

## La instalación en la experiencia del usuario

Hemos escrito un sitio web de ejemplo muy simple ([ve nuestra demostración en vivo](https://mdn.github.io/pwa-examples/a2hs/), y también [ve el código fuente](https://github.com/mdn/pwa-examples/tree/master/a2hs)) que no hace mucho, pero fue desarrollado con el código necesario para permitir su instalación, así como un servicio _worker> para permitir su uso sin conexión. El ejemplo muestra una serie de imágenes de zorros. Si tienes un dispositivo compatible con la aplicación web disponible, utilízalo para navegar a nuestra demostración en `https://mdn.github.io/pwa-examples/a2hs/`. Verás imágenes de zorros, pero lo que es más importante, habrá alguna forma de interfaz de usuario disponible para permitirte instalar el sitio como una aplicación web._

_La interfaz de usuario para esto varía de un navegador a otro, pero la idea general es la misma. Desafortunadamente, no existe un estándar para los iconos y símbolos utilizados para operaciones como esta._

### _Firefox para Android_

_En un dispositivo Android que usa Firefox, verás un ícono de "inicio" con un ícono más (+) en su interior; este es el ícono "Agregar a la pantalla de inicio" que se muestra para cualquier sitio que tenga las características necesarias en su lugar._

_**![Una captura de pantalla de un navegador web que muestra el ícono Agregar a la pantalla de inicio en la parte superior](<https://mdn.mozillademos.org/files/17158/android-a2hs-icon.png >)**_

_Al tocar este, se mostrará un pasquín de confirmación; al presionar el botón grande "+ AGREGAR A LA PANTALLA DE INICIO", se completa la acción y se agrega la aplicación a la pantalla de inicio. Ten en cuenta que en Android 8 y versiones posteriores, se mostrará primero un cuadro de diálogo de permiso "Agregar a la pantalla de inicio" a nivel del sistema._

_![Una captura de pantalla de Firefox para Android que solicita confirmación antes de instalar una aplicación web](https://mdn.mozillademos.org/files/17160/fx-a2hs-banner.png)_

### _Navegador de Internet Samsung_

_Si tiene Samsung Internet en tu dispositivo móvil, verás un icono diferente._

_![Una captura de pantalla del navegador de Internet de Samsung que muestra su icono Agregar a la pantalla de inicio](https://mdn.mozillademos.org/files/17161/samsung-internet-add-app.png)_

_Tocar ese ícono debería llevarte al mismo pasquín de confirmación que se muestra en Firefox arriba._

### _Google Chrome para Android_

_Si tienes Google Chrome para Android disponible, la experiencia es ligeramente diferente; al cargar nuestro sitio, verás un mensaje de instalación emergente que te preguntará si deseas agregar esta aplicación a tu pantalla de inicio._

_![Captura de pantalla de un pasquín de Chrome que solicita permiso para instalar la aplicación de muestra Foxes](https://mdn.mozillademos.org/files/17159/chrome-a2hs-banner.png)_

> **Nota:** Puedes obtener más información sobre los mensajes de instalación de Chrome en el artículo [Mensajes de instalación de aplicaciones web](https://developers.google.com/web/fundamentals/app-install-banners/)._

_Si eliges no agregarlo a tu pantalla de inicio en este momento, los puedes hacer más tarde usando el ícono "Agregar a la pantalla de inicio" en el menú principal de Chrome._

### _Safari para iOS/iPhoneOS/iPadOS_

_En iOS de Apple (incluidos iPhoneOS y iPadOS), el navegador Safari integrado en el dispositivo tiene cierto soporte para aplicaciones web, incluido el soporte para agregar a la función de pantalla de inicio. Para agregar una aplicación web a la pantalla de inicio (también conocida como lanzador o trampolín), toca el botón para compartir (![Icono de compartir cuadrado y flecha desde iOS y macOS](https://mdn.mozillademos.org/files/17156/square.svg)) en la parte inferior de la pantalla:_

_![Captura de pantalla que muestra la ubicación del botón Compartir en Safari en iOS 13](https://mdn.mozillademos.org/files/17163/safari-ios-a2hs-icon.png)_

_Esto llama al panel para compartir. Entre las opciones debe estar la opción "Agregar a la pantalla de inicio", a menos que el usuario la haya eliminado específicamente de la lista al editar las opciones mostradas:_

_![Captura de pantalla del panel para compartir de Safari iOS, que muestra la opción](https://mdn.mozillademos.org/files/17165/safari-ios-share-menu.png)_

_Al elegir "Agregar a la pantalla de inicio" aquí se presenta el cuadro de diálogo de confirmación, que no solo confirma que el usuario desea agregar la aplicación a la pantalla de inicio, sino que también le permite personalizar su nombre._

_![Una captura de pantalla de iOS Safari que muestra su panel de configuración y confirmación "Agregar a la pantalla de inicio"](https://mdn.mozillademos.org/files/17167/safari-ios-a2hs-banner.png)_

_Al hacer clic en "Agregar", la aplicación se incluye en la pantalla de inicio._

### _La aplicación web instalada_

_Independientemente del navegador y el dispositivo que estés utilizando, cuando eliges agregar la aplicación a tu pantalla de inicio o al iniciador de aplicaciones, aparecerá allí con el mismo aspecto que cualquier aplicación. Normalmente, esto significa que verás el icono de la aplicación junto con un título corto._

_![Captura de pantalla de una pantalla de inicio de Android con la aplicación "Foxes" mostrada](https://mdn.mozillademos.org/files/17157/a2hs-on-home-screen.png)_

_Cuando tocas el icono de la aplicación web en la pantalla de inicio, se abre en un entorno web de pantalla completa, sin la interfaz de usuario del navegador a su alrededor._
