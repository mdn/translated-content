---
title: Gamepad API
slug: Web/API/Gamepad_API
tags:
  - API
  - Gamepad API
  - Игры
  - Обзор
  - Экспериментальный
translation_of: Web/API/Gamepad_API
---
{{DefaultAPISidebar("Gamepad API")}}

API Gamepad - это простой и последовательный способ для разработчиков получать доступ к сигналам с геймпадов и других игровых контроллеров и реагировать на них. Он содержит три интерфейса, два события и одну специализированную функцию, чтобы реагировать на подключение и отключение геймпадов, а также получать доступ к другой информации о самих геймпадах и о том, какие кнопки и другие элементы управления в настоящее время нажимаются.

## Интерфейсы

- [`Gamepad`](/ru/docs/Web/API/Gamepad "The Gamepad interface of the Gamepad API defines an individual gamepad or other controller, allowing access to information such as button presses, axis positions, and id.")
  - : Представляет собой геймпад/контроллер, подключённый к компьютеру.
- [`GamepadButton`](/ru/docs/Web/API/GamepadButton "The GamepadButton interface defines an individual button of a gamepad or other controller, allowing access to the current state of different types of buttons available on the control device.")
  - : Представляет собой кнопку одного из подключённых контроллеров
- [`GamepadEvent`](/ru/docs/Web/API/GamepadEvent "The GamepadEvent interface of the Gamepad API contains references to gamepads connected to the system, which is what the gamepad events Window.gamepadconnected and Window.gamepaddisconnected are fired in response to.")
  - : Объект события, представляющий запущенные события, связанные с геймпадами.

### Экспериментальные расширения геймпада

- [`GamepadHapticActuator`](/ru/docs/Web/API/GamepadHapticActuator "The GamepadHapticActuator interface of the Gamepad API represents hardware in the controller designed to provide haptic feedback to the user (if available), most commonly vibration hardware.")
  - : Представляет собой аппаратное обеспечение в контроллере, предназначенное для обеспечения тактильной обратной связи с пользователем (если таковая имеется), чаще всего вибрационное оборудование.
- [`GamepadPose`](/ru/docs/Web/API/GamepadPose "The GamepadPose interface of the Gamepad API represents the pose of a WebVR controller at a given timestamp (which includes orientation, position, velocity, and acceleration information.)")
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

## Технические характеристики

| Спецификация                                                                     | Статус                                   | Примечание                                                                      |
| -------------------------------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------------- |
| {{SpecName("GamepadExtensions")}}                                     | {{Spec2("GamepadExtensions")}} | Определяет [Experimental Gamepad extensions](#experimental_gamepad_extensions). |
| {{SpecName("Gamepad", "", "The Gamepad API specification")}} | {{Spec2("Gamepad")}}             | Первоначальное определение                                                      |

## Совместимость браузера

{{Compat("api.Gamepad")}}

## Прочтите также

- [The Gamepad API](https://hacks.mozilla.org/2013/12/the-gamepad-api/), авторы: Тед Мельчарек и Роберт Найман
- [Simple API demo page](http://luser.github.io/gamepadtest/) ([source](https://github.com/luser/gamepadtest))
