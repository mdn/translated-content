---
title: Gamepad API
slug: Web/API/Gamepad_API
---

{{DefaultAPISidebar("Gamepad API")}}

API Gamepad - это простой и последовательный способ для разработчиков получать доступ к сигналам с геймпадов и других игровых контроллеров и реагировать на них. Он содержит три интерфейса, два события и одну специализированную функцию, чтобы реагировать на подключение и отключение геймпадов, а также получать доступ к другой информации о самих геймпадах и о том, какие кнопки и другие элементы управления в настоящее время нажимаются.

## Интерфейсы

- [`Gamepad`](/ru/docs/Web/API/Gamepad)
  - : Представляет собой геймпад/контроллер, подключённый к компьютеру.
- [`GamepadButton`](/ru/docs/Web/API/GamepadButton)
  - : Представляет собой кнопку одного из подключённых контроллеров
- [`GamepadEvent`](/ru/docs/Web/API/GamepadEvent)
  - : Объект события, представляющий запущенные события, связанные с геймпадами.

### Экспериментальные расширения геймпада

- [`GamepadHapticActuator`](/ru/docs/Web/API/GamepadHapticActuator)
  - : Представляет собой аппаратное обеспечение в контроллере, предназначенное для обеспечения тактильной обратной связи с пользователем (если таковая имеется), чаще всего вибрационное оборудование.
- [`GamepadPose`](/ru/docs/Web/API/GamepadPose)
  - : Представляет собой позу контроллера (например, положение и ориентацию в трёхмерном пространстве) в случае контроллера WebVR. Это не используется в более новом стандарте WebXR.

Сморите также [extensions to the Gamepad interface](/ru/docs/Web/API/Gamepad#Experimental_extensions_to_Gamepad) (расширения интерфейса геймпада) для функций, которые позволяют получить доступ к вышеуказанной информации.

### Расширения для других интерфейсов

#### Навигатор

- {{domxref("Navigator.getGamepads()")}}
  - : Расширение объекта {{domxref("Navigator")}}, возвращающее массив объектов {{domxref("Gamepad")}} по одному для каждого подключённого геймпада.

#### События окна

- {{domxref("Window.ongamepadconnected")}}
  - : Представляет собой обработчик событий, который будет выполняться при подключении геймпада (когда срабатывает событие {{event('gamepadconnected')}}).
- {{domxref("Window.ongamepaddisconnected")}}
  - : Представляет собой обработчик событий, который будет выполняться при отключении геймпада (когда срабатывает событие {{event('gamepaddisconnected')}}).

<!---->

## Учебные пособия и руководства

- [Using the Gamepad API](/ru/docs/Web/API/Gamepad_API/Using_the_Gamepad_API)
- [Implementing controls using the Gamepad API](/ru/docs/Games/Techniques/Controls_Gamepad_API)

## Спецификации

{{Specifications}}

## Совместимость с браузерами

{{Compat}}

## Прочтите также

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/), авторы: Тед Мельчарек и Роберт Найман
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
