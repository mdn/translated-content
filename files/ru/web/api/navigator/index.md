---
title: Navigator
slug: Web/API/Navigator
---

{{APIRef("DOM")}}

Интерфейс `Navigator` представляет состояние и особенности пользовательского агента. Он позволяет скриптам запрашивать их и самостоятельно регистрироваться для выполнения некоторых действий.

Объект `Navigator` можно получить с помощью доступного только для чтения свойства {{domxref("window.navigator")}}.

## Свойства экземпляра

_Не наследует свойства._

### Стандартизированные

- {{domxref("Navigator.appCodeName")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает внутренний "код" текущего браузера. Не полагайтесь на это свойство для получения правильного значения.
- {{domxref("Navigator.appName")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("DOMString")}} с официальным названием браузера. Не полагайтесь на это свойство для получения правильного значения.
- {{domxref("Navigator.appVersion")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает версию браузера как {{domxref("DOMString")}}. Не полагайтесь на это свойство для получения правильного значения.
- {{domxref("Navigator.getBattery")}} {{readonlyInline}}
  - : Возвращает {{domxref ("BatteryManager")}} объект, который вы можете использовать для получения информации о статусе заряда аккумулятора.
- {{domxref("Navigator.connection")}} {{readonlyInline}}{{experimental_inline}}
  - : Предоставляет {{domxref ("Connection")}} с информацией о сетевом подключении устройства.
- {{domxref("NavigatorGeolocation.geolocation")}} {{readonlyInline}}
  - : Возвращает {{domxref("Geolocation")}} объект, позволяющий получить доступ к местоположению устройства.
- {{domxref("Navigator.javaEnabled()")}} {{Deprecated_Inline}}
  - : Возвращает всегда `false`.
- {{domxref("Navigator.language")}} {{readonlyInline}}
  - : Возвращает {{domxref ("DOMString")}}, представляющий предпочитаемый пользователем язык, как правило это язык пользовательского интерфейса браузера. Значение `null` возвращается, когда язык неизвестен.
- {{domxref("Navigator.languages")}} {{readonlyInline}}
  - : Возвращает массив {{domxref("DOMString")}}, представляющий собой языки, известные пользователю, в порядке предпочтения.
- {{domxref("Navigator.mimeTypes")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("MimeTypeArray")}} листинг MIME типов, поддерживаемых браузером.
- {{domxref("Navigator.onLine")}} {{readonlyInline}}
  - : Возвращает булево значение, показывающее имеет ли браузер подключение к сети.
- {{domxref("Navigator.oscpu")}}
  - : Возвращает строку, показывающую имеющуюся операционную систему.
- {{domxref("Navigator.platform")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает строку, показывающую платформу браузера. Не полагайтесь на эту функцию, чтобы получить нужное значение.
- {{domxref("Navigator.plugins")}} {{readonlyInline}}{{experimental_inline}}
  - : Возвращает {{domxref("PluginArray")}} листинг плагинов, установленных в браузере.
- {{domxref("Navigator.product")}} {{readonlyInline}} {{experimental_inline}}
  - : Всегда возвращает `'Gecko'`, в любом браузере. Это свойство сохраняется только для целей совместимости.
- {{domxref("Navigator.userAgent")}} {{readonlyInline}}
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

## Методы экземпляра

_Не наследует методы._

### Стандартизированные

- {{domxref("NavigatorUserMedia.getUserMedia()")}}
  - : После запроса разрешения у пользователя возвращает аудио или видео поток, взаимодействующий с камерой или микрофоном на локальном компьютере.
- {{domxref("navigator.registerProtocolHandler", "navigator.registerProtocolHandler")}}
  - : Разрешает веб-сайту зарегистрировать себя в качестве возможного обработчика для данного протокола.
- {{domxref("Navigator.taintEnabled()")}} {{deprecated_inline}} {{experimental_inline}}
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

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}
