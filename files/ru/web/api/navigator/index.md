---
title: Navigator
slug: Web/API/Navigator
---

{{ apiref() }}

Интерфейс Navigator представляет собой состояние и особенности(свойства) пользовательского агента. Это позволяет скриптам узнавать их и самостоятельно регистрироваться для выполнения некоторых действий.

Объект Navigator может быть вызван свойством {{domxref ("Window.navigator")}}, только для чтения.

## Свойства

Не наследует никаких других свойств, но реализует те, которые определены в _{{domxref("NavigatorID")}}, {{domxref("NavigatorLanguage")}}, {{domxref("NavigatorOnLine")}}, {{domxref("NavigatorPlugins")}}, {{domxref("NavigatorUserMedia")}}, и {{domxref("NetworkInformation")}}._

### Стандартизированные

- {{domxref("NavigatorID.appCodeName")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает внутренний "код" текущего браузера. Не полагайтесь на это свойство для получения правильного значения.
- {{domxref("NavigatorID.appName")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("DOMString")}} с официальным названием браузера. Не полагайтесь на это свойство для получения правильного значения.
- {{domxref("NavigatorID.appVersion")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает версию браузера как {{domxref("DOMString")}}. Не полагайтесь на это свойство для получения правильного значения.
- {{domxref("Navigator.battery")}} {{readonlyInline}}
  - : Возвращает {{domxref ("BatteryManager")}} объект, который вы можете использовать для получения информации о статусе заряда аккумулятора.
- {{domxref("NetworkInformation.connection")}} {{readonlyInline}}{{experimental_inline}}
  - : Предоставляет {{domxref ("Connection")}} с информацией о сетевом подключении устройства.
- {{domxref("NavigatorGeolocation.geolocation")}} {{readonlyInline}}
  - : Возвращает {{domxref("Geolocation")}} объект, позволяющий получить доступ к местоположению устройства.
- {{domxref("NavigatorPlugins.javaEnabled")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("Boolean")}} флаг, показывающий включён ли в браузере java или нет.
- {{domxref("NavigatorLanguage.language")}} {{readonlyInline}}
  - : Возвращает {{domxref ("DOMString")}}, представляющий предпочитаемый пользователем язык, как правило это язык пользовательского интерфейса браузера. Значение `null` возвращается, когда язык неизвестен.
- {{domxref("NavigatorLanguage.languages")}} {{readonlyInline}}
  - : Возвращает массив {{domxref("DOMString")}}, представляющий собой языки, известные пользователю, в порядке предпочтения.
- {{domxref("NavigatorPlugins.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("MimeTypeArray")}} листинг MIME типов, поддерживаемых браузером.
- {{domxref("NavigatorOnLine.onLine")}} {{readonlyInline}}
  - : Возвращает {{domxref("Boolean")}}, показывающий работает ли браузер в сети.
- {{domxref("Navigator.oscpu")}}
  - : Возвращает строку, показывающую имеющуюся операционную систему.
- {{domxref("NavigatorID.platform")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает строку, показывающую платформу браузера. Не полагайтесь на эту функцию, чтобы получить нужное значение.
- {{domxref("NavigatorPlugins.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("PluginArray")}} листинг плагинов, установленных в браузере.
- {{domxref("NavigatorID.product")}} {{readonlyInline}} {{experimental_inline}}
  - : Всегда возвращает `'Gecko'`, в любом браузере. Это свойство сохраняется только для целей совместимости.
- {{domxref("NavigatorID.userAgent")}} {{readonlyInline}}
  - : Возвращает строку агента пользователя для данного браузера.
- {{domxref("Navigator.serviceWorker")}} {{readonlyInline}}
  - : Возвращает {{domxref("ServiceWorkerContainer")}} объект, который обеспечивает доступ к регистрации, удалению, обновлению и связи с {{domxref("ServiceWorker")}} объектами для [соответствующего документа.](https://html.spec.whatwg.org/multipage/browsers.html#concept-document-window)

### Не стандартизированные

- {{domxref("window.navigator.buildID", "navigator.buildID")}} {{non-standard_inline}}
  - : Возвращает идентификатор сборки браузера(например: "2006090803").
- {{domxref("Navigator.cookieEnabled")}} {{non-standard_inline}}
  - : Возвращает логическое значение (boolean), показывающее включены ли куки в браузере или нет.
- {{domxref("navigator.doNotTrack")}} {{non-standard_inline}}
  - : Значение сообщает о предпочтении пользователя не отслеживать его действия. Когда это значение "да", ваш веб сайт или приложение не должны отслеживать действия пользователя.
- {{domxref("navigator.id")}} {{non-standard_inline}}
  - : Возвращает {{domxref("window.navigator.id", "id")}} объект, который вы можете использовать для добавления поддержки [BrowserID](/ru/docs/BrowserID) на свой сайт.
- {{domxref("window.navigator.mozApps", "navigator.mozApps")}} {{non-standard_inline}}
  - : Возвращает {{domxref("window.navigator.mozApps", "Apps")}} объект, который вы можете использовать для установки, управления и контроля [Open Web apps](/Open_Web_Apps).
- {{domxref("Navigator.mozAudioChannelManager", "navigator.mozAudioChannelManager")}} {{non-standard_inline}}
  - : Объект `navigator.mozAudioChannelManager` обеспечивает доступ к {{domxref("mozAudioChannelManager")}} интерфейсу, который используется для управления аудио-каналами этого Firefox OS устройства, включая настройку громкости канала, когда кнопка громкости нажата внутри конкретного приложения.
- {{domxref("window.navigator.mozNotification","navigator.mozNotification")}} {{deprecated_inline}} {{non-standard_inline}}
  {{domxref("window.navigator.webkitNotification","navigator.webkitNotification")}}
  - : Возвращает {{domxref("navigator.mozNotification", "notification")}} объект, который можно использовать для доставки уведомлений пользователю из вашего веб-приложения.
- {{domxref("navigator.mozSocial")}} {{non-standard_inline}}
  - : Объект, возвращающий `navigator.mozSocial` свойство, доступное в панели провайдера социальных медиа для для обеспечения требуемой функциональности.
- {{domxref("window.navigator.productSub", "navigator.productSub")}} {{non-standard_inline}}
  - : Возвращает номер сборки текущего браузера(например: "20060909" ).
- {{domxref("window.navigator.securitypolicy", "navigator.securitypolicy")}} {{non-standard_inline}}
  - : Возвращает пустую строку. В Netscape 4.7x, возвращает "US & CA domestic policy" или "Export policy".
- {{domxref("window.navigator.standalone", "navigator.standalone")}} {{non-standard_inline}}
  - : Возвращает логическое значение (boolean), показывающее работает ли браузер в автономном режиме. Доступно только в IOS Safari от Apple.
- {{domxref("window.navigator.vendor", "navigator.vendor")}} {{non-standard_inline}}
  - : Возвращает имя поставщика текущего браузера (например, "Netscape6").
- {{domxref("window.navigator.vendorSub", "navigator.vendorSub")}} {{non-standard_inline}}
  - : Возвращает номер версии поставщика (например, "6.1").
- [`navigator.webkitPointer`](/ru/docs/API/Pointer_Lock_API) {{non-standard_inline}}
  - : Возвращает объект PointerLock для [Mouse Lock API](/ru/docs/API/Pointer_Lock_API).

## Методы

Не наследует никаких других свойств, но реализует те, которые определены в _{{domxref("NavigatorID")}}, {{domxref("NavigatorContentUtils")}}, _{{domxref("NavigatorUserMedia")}}, и* {{domxref("NavigatorStorageUtils")}}.*

### Стандартизированные

- {{domxref("NavigatorUserMedia.getUserMedia()")}}
  - : После запроса разрешения у пользователя возвращает аудио или видео поток, взаимодействующий с камерой или микрофоном на локальном компьютере.
- {{domxref("window.navigator.registerContentHandler", "navigator.registerContentHandler")}}
  - : Разрешает веб-сайту зарегистрировать себя в качестве возможного обработчика для данного MIME типа.
- {{domxref("navigator.registerProtocolHandler", "navigator.registerProtocolHandler")}}
  - : Разрешает веб-сайту зарегистрировать себя в качестве возможного обработчика для данного протокола.
- {{domxref("NavigatorID.taintEnabled()")}} {{deprecated_inline}} {{experimental_inline}}
  - : Возвращает `false`. JavaScript taint/untaint функции отключены в JavaScript 1.2.
- {{domxref("Navigator.vibrate()")}}
  - : Причина вибрации устройства с поддержкой её. Не делает ничего, если нет поддержки вибрации.

### Не стандартизированные

- {{domxref("window.navigator.mozIsLocallyAvailable", "navigator.mozIsLocallyAvailable")}} {{non-standard_inline}}
  - : Позволяет коду проверить, есть ли документ в данном URI без использования сети.
- {{domxref("window.navigator.mozPay", "navigator.mozPay")}} {{non-standard_inline}}
  - : Разрешает оплату в приложении.
- {{domxref("window.navigator.preference", "navigator.preference")}} {{non-standard_inline}}
  - : Устанавливает предпочтение пользователя. Этот метод доступен [только для привилегированного кода](http://www.faqts.com/knowledge_base/view.phtml/aid/1608/fid/125/lang/en) и является устаревшим; вы должны использовать вместо него XPCOM [Preferences API](/ru/docs/Preferences_API).
- {{domxref("window.navigator.requestWakeLock", "navigator.requestWakeLock")}} {{non-standard_inline}}
  - : Запрос установки блокировки пробуждения для ресурса. Блокировка пробуждения препятствует определённой части устройства включится автоматически.
