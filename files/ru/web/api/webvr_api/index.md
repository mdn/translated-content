---
title: WebVR API
slug: Web/API/WebVR_API
---

{{SeeCompatTable}}{{APIRef("WebVR API")}}

WebVR обеспечивает поддержку для использования устройств виртуальной реальности — например, шлемы виртуальной реальности, таких как Oculus Rift или HTC Vive — для веб-приложений, позволяя разработчикам передавать информацию о местоположении и движения с дисплея в движение вокруг 3D-сцены. Это имеет множество интересных приложений, от виртуальных туров продукта и интерактивных обучающих приложений до захватывающих игр от первого лица.

## Концепция и использование

Любые VR-устройства, подключённые к вашему компьютеру, будут возвращены методом {{domxref("Navigator.getVRDisplays()")}}; каждое из которых будет представлено {{domxref("VRDisplay")}} объектом.

![Sketch of a person in a chair with wearing goggles labelled "Head mounted display (HMD)" facing a monitor with a webcam labelled "Position sensor"](hw-setup.png)

{{domxref("VRDisplay")}} является центральным интерфейсом в API WebVR - с помощью его свойств и методов вы получить доступ к функциям:

- Получить полезную информацию, чтобы мы могли идентифицировать дисплей, какие возможности он имеет, контроллеры, связанные с ним и многое другое.
- Получить {{domxref("VRFrameData", "frame data")}} для каждого кадра контента, который вы хотите представить на дисплее, и отправьте эти кадры для отображения с постоянной скоростью.
- Начать и прекратить подачу на дисплей.

Типичное (простое) WebVR приложение будет работать так:

1. {{domxref("Navigator.getVRDisplays()")}} используется для получения ссылки на ваш VR-дисплей.
2. {{domxref("VRDisplay.requestPresent()")}} используется для начала представления на дисплей VR.
3. Выделенный {{domxref("VRDisplay.requestAnimationFrame()")}} WebVR's используется для запуска цикла рендеринга приложения с правильной частотой обновления для отображения.
4. Внутри цикла рендеринга берутся данные, необходимые для отображения текущего кадра ({{domxref("VRDisplay.getFrameData()")}}), дважды нарисуйте отображаемую сцену - один раз для просмотра в каждом глазу, затем отправьте отображаемый вид на дисплей, чтобы показать пользователю ({{domxref("VRDisplay.submitFrame()")}}).

Кроме того, WebVR 1.1 добавляет ряд событий {{domxref("Window")}} объекту, чтобы JavaScript мог реагировать на изменения состояния дисплея.

> [!NOTE]
> Вы можете найти намного больше о том, как работает API в [Using the WebVR API](/ru/docs/Web/API/WebVR_API/Using_the_WebVR_API) и [WebVR Concepts](/ru/docs/Web/API/WebVR_API/Concepts) статьях.

### Использование контроллеров: Объединение WebVR с API-интерфейсом геймпада

Многие аппаратные настройки WebVR оснащены контроллерами, которые сочетаются с гарнитурой. Они могут быть использованы в WebVR приложениях через [Gamepad API](/ru/docs/Web/API/Gamepad_API), и, в частности, [Gamepad расширения API](/ru/docs/Web/API/Gamepad_API#Experimental_Gamepad_extensions), которые добавляют API функции для доступа к [позе контроллера](/ru/docs/Web/API/GamepadPose), [haptic actuators](/ru/docs/Web/API/GamepadHapticActuator), и многое другое.

> [!NOTE]
> Наша [Using VR controllers with WebVR](/ru/docs/Web/API/WebVR_API/Using_VR_controllers_with_WebVR) статья объясняет основы использования VR-контроллеров в приложениях WebVR.

## WebVR Интерфейс

- {{domxref("VRDisplay")}}
  - : Представляет любое устройство VR, поддерживаемое этим API. VRDisplay включает в себя общую информацию, такую как идентификаторы устройств и описания, а также методы для начала представления сцены VR, получения параметров глаз и возможностей отображения и других важных функций.
- {{domxref("VRDisplayCapabilities")}}
  - : описывает возможности {{domxref("VRDisplay")}} — его функции могут использоваться для тестирования возможностей устройства VR, например, может ли он возвращать информацию о местоположении.
- {{domxref("VRDisplayEvent")}}
  - : Возвращает объект события (event) связанного с WebVR-событием (см. [window object extensions](#window) , перечисленных ниже).
- {{domxref("VRFrameData")}}
  - : Представляет всю информацию, необходимую для создания одного кадра сцены VR; созданный от {{domxref("VRDisplay.getFrameData()")}}.
- {{domxref("VRPose")}}
  - : Представляет состояние позиции на заданной временной отметке (которая включает в себя ориентацию, положение, скорость и ускорение).
- {{domxref("VREyeParameters")}}
  - : Предоставляет доступ ко все информации, необходимой для корректного отображения сцены для каждого заднего глаза, включая информацию о поле зрения.
- {{domxref("VRFieldOfView")}}
  - : Представляет поле зрения, определённое четырьмя различными значениями степени, описывающими представление из центральной точки.
- {{domxref("VRLayerInit")}}
  - : Представляет слой, который должен быть представлен в {{domxref("VRDisplay")}}.
- {{domxref("VRStageParameters")}}
  - : Представляет значения, описывающие область сцены для устройств, поддерживающих опыт в помещении.

### Расширения для других интерфейсов

WebVR API расширяет следующие API, добавляя перечисленные функции.

#### Геймпад

- {{domxref("Gamepad.displayId")}} {{readonlyInline}}
  - : _Возвращает {{domxref("VRDisplay.displayId")}} связанного с {{domxref("VRDisplay")}} — `VRDisplay` , которым геймпад управляет отображаемой сценой._

#### Навигатор

- {{domxref("Navigator.activeVRDisplays")}} {{readonlyInline}}
  - : Возвращает массив, содержащий каждый {{domxref("VRDisplay")}} объект, который в настоящее время отображается ({{domxref("VRDisplay.ispresenting")}} является `true`).
- {{domxref("Navigator.getVRDisplays()")}}
  - : Возвращает промис, который преобразуется в массив {{domxref("VRDisplay")}} объектов, представляющих любые доступные VR-дисплеи, подключённые к компьютеру.

#### Window события

- {{domxref("Window.onvrdisplaypresentchange")}}
  - : Представляет обработчик событий, который будет выполняться, при изменении состояния отображения VR-дисплея — т.е. идёт от отображения до неотображения, или наоборот (когда [`vrdisplaypresentchange`](/ru/docs/Web/Events/vrdisplaypresentchange) событие срабатывает).
- {{domxref("Window.onvrdisplayconnect")}}
  - : Представляет обработчик событий, который будет запускаться, когда к компьютеру подключён совместимый VR-дисплей (когда [`vrdisplayconnect`](/ru/docs/Web/Events/vrdisplayconnect) событие срабатывает).
- {{domxref("Window.onvrdisplaydisconnect")}}
  - : Представляет обработчик событий, который будет запускаться, когда совместимый VR-дисплей был отключён от компьютера (когда [`vrdisplaydisconnect`](/ru/docs/Web/Events/vrdisplaydisconnect) событие срабатывает).
- {{domxref("Window.onvrdisplayactivate")}}
  - : Представляет обработчик событий, который будет выполняться, когда дисплей может быть представлен (когда [`vrdisplayactivate`](/ru/docs/Web/Events/vrdisplayactivate)событие срабатывает), например, HMD (Head Mounted Display) был перемещён, чтобы вывести его из режима ожидания, или проснулся, будучи перемещённым.
- {{domxref("Window.onvrdisplaydeactivate")}}
  - : Представляет обработчик событий, который будет запускаться, когда дисплей больше не будет отображаться (когда [`vrdisplaydeactivate`](/ru/docs/Web/Events/vrdisplaydeactivate) событие срабатывает), например, HMD (Head Mounted Display) перешёл в режим ожидания или спящий режим из-за периода бездействия.

#### Невыполненные window события

Следующие события перечислены в спецификации, but do not currently seem to be implemented anywhere as yet.

- {{domxref("Window.onvrdisplayblur")}}
  - : Представляет обработчик событий, который будет выполняться, когда презентация на дисплей была приостановлена по какой-то причине в браузере, ОС или оборудованием VR (когда [`vrdisplayblur`](/ru/docs/Web/Events/vrdisplayblur) событие срабатывает) — например, в то время как пользователь взаимодействует с системным меню или браузером, чтобы предотвратить отслеживание или потерю опыта.
- {{domxref("Window.onvrdisplayfocus")}}
  - : Представляет обработчик событий, который будет выполняться, когда презентация на дисплей возобновляется после потери фокуса (когда [`vrdisplayfocus`](/ru/docs/Web/Events/vrdisplayfocus) событие срабатывает).

## Примеры

Вы можете найти несколько примеров в этих местах:

- [webvr-tests](https://github.com/mdn/webvr-tests) — очень простые примеры для сопровождения MDM WebVR документации.
- [Carmel starter kit](https://github.com/facebook/Carmel-Starter-Kit) — простые, хорошо прокомментированные примеры, которые идут вместе с Carmel,браузером WebVR от Facebook's .
- [WebVR.info samples](https://webvr.info/samples/) — несколько более подробных примеров плюс исходный код
- [WebVR.rocks Firefox demos](https://webvr.rocks/firefox#demos) — демонстрация примеров
- [A-Frame homepage](https://aframe.io/) — примеры использования A-Frame

## Совместимость с браузерами

{{Compat}}

## Смотрите также

- [vr.mozilla.org](https://vr.mozilla.org) — Основная посадочная площадка Mozilla для WebVR с демонстрационными материалами, утилитами и другой информацией.
- [A-Frame](https://aframe.io/) — Веб-платформа с открытым исходным кодом для создания опыта VR.
- [webvr.info](https://webvr.info) — Актуальная информация о WebVR, настройке браузера и сообществе.
- [threejs-vr-boilerplate](https://github.com/MozVR/vr-web-examples/tree/master/threejs-vr-boilerplate) — Полезный стартовый шаблон для написания приложений WebVR.
- [Web VR polyfill](https://github.com/googlevr/webvr-polyfill/) — JavaScript-реализация WebVR.
