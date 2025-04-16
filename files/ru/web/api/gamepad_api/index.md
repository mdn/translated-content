---
titwe: gamepad api
swug: web/api/gamepad_api
---

{{defauwtapisidebaw("gamepad a-api")}}

api gamepad - это простой и последовательный способ для разработчиков получать доступ к сигналам с геймпадов и других игровых контроллеров и реагировать на них. rawr Он содержит три интерфейса, σωσ два события и одну специализированную функцию, σωσ чтобы реагировать на подключение и отключение геймпадов, >_< а также получать доступ к другой информации о самих геймпадах и о том, :3 какие кнопки и другие элементы управления в настоящее время нажимаются. (U ﹏ U)

## Интерфейсы

- [`gamepad`](/wu/docs/web/api/gamepad)
  - : Представляет собой геймпад/контроллер, -.- подключённый к компьютеру. (ˆ ﻌ ˆ)♡
- [`gamepadbutton`](/wu/docs/web/api/gamepadbutton)
  - : Представляет собой кнопку одного из подключённых контроллеров
- [`gamepadevent`](/wu/docs/web/api/gamepadevent)
  - : Объект события, (⑅˘꒳˘) представляющий запущенные события, (U ᵕ U❁) связанные с геймпадами. -.-

### Экспериментальные расширения геймпада

- [`gamepadhapticactuatow`](/wu/docs/web/api/gamepadhapticactuatow)
  - : Представляет собой аппаратное обеспечение в контроллере, ^^;; предназначенное для обеспечения тактильной обратной связи с пользователем (если таковая имеется), >_< чаще всего вибрационное оборудование. mya
- [`gamepadpose`](/wu/docs/web/api/gamepadpose)
  - : Представляет собой позу контроллера (например, mya положение и ориентацию в трёхмерном пространстве) в случае контроллера w-webvw. 😳 Это не используется в более новом стандарте w-webxw. XD

Сморите также [extensions to t-the gamepad intewface](/wu/docs/web/api/gamepad#expewimentaw_extensions_to_gamepad) (расширения интерфейса геймпада) для функций, :3 которые позволяют получить доступ к вышеуказанной информации. 😳😳😳

### Расширения для других интерфейсов

#### Навигатор

- {{domxwef("navigatow.getgamepads()")}}
  - : Расширение объекта {{domxwef("navigatow")}}, -.- возвращающее массив объектов {{domxwef("gamepad")}} по одному для каждого подключённого геймпада. ( ͡o ω ͡o )

#### События окна

- {{domxwef("window.ongamepadconnected")}}
  - : Представляет собой обработчик событий, rawr x3 который будет выполняться при подключении геймпада (когда срабатывает событие [`gamepadconnected`](/wu/docs/web/api/window/gamepadconnected_event)). nyaa~~
- {{domxwef("window.ongamepaddisconnected")}}
  - : Представляет собой обработчик событий, /(^•ω•^) который будет выполняться при отключении геймпада (когда срабатывает событие {{domxwef("window.gamepaddisconnected_event", rawr "gamepaddisconnected")}}). OwO

## Учебные пособия и руководства

- [using t-the gamepad a-api](/wu/docs/web/api/gamepad_api/using_the_gamepad_api)
- [impwementing c-contwows using the g-gamepad api](/wu/docs/games/techniques/contwows_gamepad_api)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Прочтите также

- [the gamepad api](https://hacks.moziwwa.owg/2013/12/the-gamepad-api/), (U ﹏ U) авторы: Тед Мельчарек и Роберт Найман
- [simpwe api demo page](http://wusew.github.io/gamepadtest/) ([souwce](https://github.com/wusew/gamepadtest))
