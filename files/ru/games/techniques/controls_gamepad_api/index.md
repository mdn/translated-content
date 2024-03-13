---
title: Реализация элементов управления с помощью API Gamepad
slug: Games/Techniques/Controls_Gamepad_API
---

{{GamesSidebar}}

В этой статье рассматривается реализация эффективной кросс-браузерной системы управления веб-играми с использованием API Gamepad, позволяющей управлять веб-играми с помощью консольных игровых контроллеров. В нем есть тематическое исследование игры "Голодный холодильник", созданный компанией [Enclave Games](http://enclavegames.com/).

## Элементы управления для web игр

Исторически игра на консоли, подключённой к телевизору, всегда была совершенно другим опытом, чем игра на ПК, в основном из-за уникальных элементов управления. В конце концов, дополнительные драйверы и плагины позволили нам использовать консольные геймпады с настольными играми - либо нативными играми, либо теми, которые работают в браузере. Теперь, в эпоху HTML5, у нас наконец есть API Gamepad, который даёт нам возможность играть в браузерные игры с использованием геймпад-контроллеры без каких-либо плагинов. API Gamepad достигает этого, предоставляя интерфейс, демонстрирующий нажатия кнопок и изменения оси, которые могут быть использованы внутри кода JavaScript для обработки входных данных. Это хорошие времена для браузерных игр.

![gamepad-controls](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img01.png)

## API статус и поддержка браузера

[Gamepad API](http://www.w3.org/TR/gamepad/) все ещё находится на стадии рабочего проекта в процессе W3C, что означает, что его реализация все ещё может измениться, но говорит о том, что поддержка браузера уже довольно хороша. Firefox 29+ и Chrome 35+ поддерживают его сразу после установки. Opera поддерживает API в версии 22+ (неудивительно, учитывая, что теперь они используют движок Blink Chrome.) И Microsoft недавно реализовала поддержку API в Edge,что означает, что четыре основных браузера теперь поддерживают API Gamepad.

## Какие геймпады лучше всего?

![gamepad devices](http://end3r.com/tmp/gamepad/devices.jpg)

Наиболее популярные геймпады в наше время - геймпады от Xbox 360, Xbox One, PS3 и PS4 — они прошли все испытания и хорошо работают с Gamepad API, реализованном в браузерах на Windows и Mac OS X.

Существует также ряд других устройств с различными макетами кнопок, которые более или менее работают в разных реализациях браузера. Код, описанный в этой статье, был протестирован с помощью нескольких геймпадов, но любимая конфигурация автора-это беспроводной контроллер Xbox 360 и браузер Firefox на Mac OS X.

## Пример исследования: Голодный холодильник

The competition ran in November 2013 and decided to take part in it. The theme for the competition was "change", so they submitted a game where you have to feed the Hungry Fridge by tapping the healthy food (apples, carrots, lettuces) and avoid the "bad" food (beer, burgers, pizza.) A countdown changes the type of food the Fridge wants to eat every few seconds, so you have to be careful and act quickly. You can [try Hungry Fridge here](http://enclavegames.com/games/hungry-fridge/).

Конкурс [GitHub Game Off II](https://github.com/blog/1674-github-game-off-ii) состоялся в ноябре 2013 года, и [Enclave Games](http://enclavegames.com/) решила принять в нем участие. Тема для конкурса была "переменна", поэтому они представили игру, в которой вы должны накормить голодный холодильник, нажав на здоровую пищу (яблоки, морковь, салат) и избежать "плохой" пищи (пиво, гамбургеры, пицца.) Обратный отсчёт меняет тип пищи, которую холодильник хочет съесть каждые несколько секунд, поэтому вы должны быть осторожны и действовать быстро. Вы можете попробовать Голодный холодильник [здесь](http://enclavegames.com/games/hungry-fridge/).

![hungryfridge-mainmenu](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img02.png)

Вторая, скрытая реализация "изменения" - это возможность превратить статичный холодильник в полноценную движущуюся, стреляющую и едящую машину. Когда вы подключаете контроллер, игра значительно меняется (голодный холодильник превращается в супер турбо голодный холодильник), и вы можете управлять бронированным холодильником с помощью API Gamepad. Вы должны сбивать еду, но вы все ещё должны искать тип пищи, которую холодильник хочет съесть в каждой точке, иначе вы потеряете энергию.

![hungryfridge-howtoplay-gamepad](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img03.png)

Игра инкапсулирует два совершенно разных типа "изменений" - хорошая еда против плохой еды и мобильная против настольной.

![hungryfridge-gameplay-gamepad](http://end3r.com/tmp/gamepad/gamepadapi-hungryfridge-img04.png)

## Демо-версия

Сначала была построена полная версия игры Hungry Fridge, а затем, чтобы для демонстрации API Gamepad в действии и показа исходного кода JavaScript, была создана [простая демо-версия](https://end3r.github.io/Gamepad-API-Content-Kit/demo/demo.html). Это часть [набора контента Gamepad API](https://end3r.github.io/Gamepad-API-Content-Kit/), доступного на GitHub, где вы можете глубоко погрузиться в код и изучить, как именно он работает.

![Hungry Fridge demo using Gamepad API](http://end3r.com/tmp/gamepad/super-turbo.png)

Код, описанный ниже, взят из полной версии игры Hungry Fridge, но он почти идентичен демо-версии — единственная разница заключается в том, что полная версия использует переменную turbo, чтобы решить, будет ли игра запущена с использованием режима Super Turbo. Он работает независимо, поэтому его можно включить, даже если геймпад не подключён.

> **Примечание:** время пасхальных яиц: есть скрытая опция для запуска Super Turbo Hungry Fridge на рабочем столе без подключения геймпада — нажмите на значок геймпада в правом верхнем углу экрана. Он запустит игру в режиме Super Turbo, и вы сможете управлять холодильником с помощью клавиатуры: A и D для поворота башни влево и вправо, W для стрельбы и клавиш со стрелками для перемещения.

## Реализация

Есть два важных события, которые можно использовать вместе с API Gamepad - `gamepadconnected` и `gamepaddisconnected`. Первый срабатывает, когда браузер обнаруживает подключение нового геймпада, а второй - когда геймпад отключён (либо физически пользователем, либо из-за бездействия).) В демо-версии объект `gamepadAPI` используется для хранения всего, что связано с API:

```js
var gamepadAPI = {
  controller: {},
  turbo: false,
  connect: function () {},
  disconnect: function () {},
  update: function () {},
  buttonPressed: function () {},
  buttons: [],
  buttonsCache: [],
  buttonsStatus: [],
  axesStatus: [],
};
```

Массив `кнопок` содержит клавиатуру Xbox 360 :

```js
buttons: [
  'DPad-Up','DPad-Down','DPad-Left','DPad-Right',
  'Start','Back','Axis-Left','Axis-Right',
  'LB','RB','Power','A','B','X','Y',
],
```

Это может быть по-разному для разных типов геймпадов, таких как контроллер PS3 (или безымянный, универсальный), поэтому вы должны быть осторожны и не просто предполагать, что кнопка, которую вы ожидаете, будет той же самой кнопкой, которую вы на самом деле получите. Затем мы настроили два обработчика событий, чтобы получить данные:

```js
window.addEventListener("gamepadconnected", gamepadAPI.connect);
window.addEventListener("gamepaddisconnected", gamepadAPI.disconnect);
```

Из-за политики безопасности вы должны сначала начать взаимодействовать с контроллером, пока страница видна для запуска события. Если API работал без какого-либо взаимодействия с пользователем, его можно было использовать для снятия отпечатков пальцев без их ведома.

Обе функции довольно просты:

```js
connect: function(evt) {
  gamepadAPI.controller = evt.gamepad;
  gamepadAPI.turbo = true;
  console.log('Gamepad connected.');
},
```

The `connect()` function takes the event as a parameter and assigns the `gamepad` object to the `gamepadAPI.controller` variable. We are using only one gamepad for this game, so it's a single object instead of an array of gamepads. We then set the `turbo` property to `true`. (We could use the `gamepad.connected` boolean for this purpose, but we wanted to have a separate variable for turning on Turbo mode without needing to have a gamepad connected, for reasons explained above.)

Функция `connect()` принимает событие в качестве параметра и назначает объект `gamepad` объекту `gamepadAPI.controller`. Мы используем только один геймпад для этой игры, так что это один объект вместо массива геймпадов. Затем мы устанавливаем свойство turbo в true. (Мы могли бы использовать `gamepad.connected`, т.к для этой цели подключается логическое значение, но мы хотели иметь отдельную переменную для включения турбо-режима без необходимости подключения геймпада, по причинам, описанным выше.)

```js
disconnect: function(evt) {
  gamepadAPI.turbo = false;
  delete gamepadAPI.controller;
  console.log('Gamepad disconnected.');
},
```

Функция `disconnect` устанавливает `gamepad.turbo property` на `false` и удаляет переменную, содержащую объект gamepad.

### Объект геймпада

В объекте `gamepad` содержится много полезной информации, причём наиболее важными являются состояния кнопок и осей:

- `id`: Строка, содержащая информацию о контроллере.
- `index`: Уникальный идентификатор для подключённого устройства.
- `connected`: Логическая переменная. Возвращает `true` при подключении.
- `mapping`: Тип компоновки кнопок; Стандартный - единственный доступный вариант на данный момент.
- `axes`: Состояние каждой оси, представленное массивом значений с плавающей запятой.
- `buttons` : Состояние каждой кнопки, представленное массивом объектов GamepadButton, содержащих `pressed` и `value` свойства.

Переменная index полезна, если мы подключаем более одного контроллера и хотим идентифицировать их, чтобы действовать соответственно — например, когда у нас есть игра для двух игроков, требующая подключения двух устройств.

### Запрос объекта геймпада

Помимо `connect()` и `disconnect()`, в объекте `gamepadAPI` есть ещё два метода: `update()` и `buttonPressed()`. `update()` выполняется на каждом кадре внутри игрового цикла, чтобы регулярно обновлять фактическое состояние объекта геймпада:

```js
update: function() {
  // clear the buttons cache
  gamepadAPI.buttonsCache = [];
  // move the buttons status from the previous frame to the cache
  for(var k=0; k<gamepadAPI.buttonsStatus.length; k++) {
    gamepadAPI.buttonsCache[k] = gamepadAPI.buttonsStatus[k];
  }
  // clear the buttons status
  gamepadAPI.buttonsStatus = [];
  // get the gamepad object
  var c = gamepadAPI.controller || {};

  // loop through buttons and push the pressed ones to the array
  var pressed = [];
  if(c.buttons) {
    for(var b=0,t=c.buttons.length; b<t; b++) {
      if(c.buttons[b].pressed) {
        pressed.push(gamepadAPI.buttons[b]);
      }
    }
  }
  // loop through axes and push their values to the array
  var axes = [];
  if(c.axes) {
    for(var a=0,x=c.axes.length; a<x; a++) {
      axes.push(c.axes[a].toFixed(2));
    }
  }
  // assign received values
  gamepadAPI.axesStatus = axes;
  gamepadAPI.buttonsStatus = pressed;
  // return buttons for debugging purposes
  return pressed;
},
```

На каждом кадре, `update()` сохраняет кнопки, нажатые во время предыдущего кадра, в массиве `buttonsCache` и берёт новые из объекта `gamepadAPI.controller`. Затем он проходит по кнопкам и осям, чтобы получить их фактические состояния и значения.

### Обнаружение нажатия кнопок

Метод `buttonPressed()` также помещается в основной игровой цикл для обработки нажатий кнопок. Для этого требуется два параметра - кнопка, которую мы хотим прослушать, и (необязательно) способ сообщить игре, что удержание кнопки принято. Без него вам придётся отпустить кнопку и нажать её снова, чтобы получить желаемый эффект.

```js
buttonPressed: function(button, hold) {
  var newPress = false;
  // loop through pressed buttons
  for(var i=0,s=gamepadAPI.buttonsStatus.length; i<s; i++) {
    // if we found the button we're looking for...
    if(gamepadAPI.buttonsStatus[i] == button) {
      // set the boolean variable to true
      newPress = true;
      // if we want to check the single press
      if(!hold) {
        // loop through the cached states from the previous frame
        for(var j=0,p=gamepadAPI.buttonsCache.length; j<p; j++) {
          // if the button was already pressed, ignore new press
          if(gamepadAPI.buttonsCache[j] == button) {
            newPress = false;
          }
        }
      }
    }
  }
  return newPress;
},
```

Существует два типа действий, которые следует учитывать для кнопки: одно нажатие и удержание. Логическая переменная `newPress` будет указывать, есть ли новое нажатие кнопки или нет. Затем мы проходим через массив нажатых кнопок — если данная кнопка совпадает с той, которую мы ищем, переменная `newPress` устанавливается в `true`. Чтобы проверить, является ли нажатие новым, так как игрок не держит клавишу, мы перебираем кешированные состояния кнопок из предыдущего кадра игрового цикла. Если мы находим его там, это означает, что кнопка удерживается, поэтому нового нажатия нет. В конце концов возвращается переменная `newPress`. Функция `buttonPressed` используется в цикле обновления игры следующим образом:

```js
if (gamepadAPI.turbo) {
  if (gamepadAPI.buttonPressed("A", "hold")) {
    this.turbo_fire();
  }
  if (gamepadAPI.buttonPressed("B")) {
    this.managePause();
  }
}
```

Если `gamepadAPI.turbo` возвращает `true`, при нажатии (или удержании) данных кнопок мы выполняем соответствующие функции, возложенные на них. В этом случае нажатие или удержание "A" приведёт к выстрелу пули, а нажатие "B" поставит игру на паузу.

### Порог оси

Кнопки имеют только два состояния: 0 или 1, но аналоговые стики могут иметь много различных значений — они имеют плавающий диапазон между -1 и 1 вдоль обеих осей X и Y.

![axis threshold](http://end3r.com/tmp/gamepad/axis-threshold.png)

Геймпады могут запылиться от лежания в бездействии, что означает, что проверка точных значений -1 или 1 может быть проблемой. По этой причине может быть полезно установить пороговое значение для того, чтобы значение оси вступило в силу. Например, бак холодильника поворачивается вправо только тогда, когда значение X больше 0,5:

```
if(gamepadAPI.axesStatus[0].x > 0.5) {
  this.player.angle += 3;
  this.turret.angle += 3;
}
```

Даже если мы немного сдвинем его по ошибке или стик не вернётся в исходное положение, танк не повернётся неожиданно.

## Обновление спецификаций

После более чем годичной стабильности, в апреле 2015 года была обновлена спецификация API W3C Gamepad ([см. последнюю версию](https://w3c.github.io/gamepad/)). Он не сильно изменился, но хорошо знать, что происходит — обновления заключаются в следующем...

### Получение геймпадов

Метод {{domxref ("Navigator.getGamepads ()")}} был обновлён с более длинным объяснением и примером кода. Теперь длина массива геймпадов должна быть `n+1`, где `n`-количество подключённых устройств — когда подключено одно устройство и оно имеет индекс 1, длина массива равна 2, и он будет выглядеть следующим образом: `[null, [object Gamepad]]`. Если устройство отключено или недоступно, то для него устанавливается значение `null`.

### Стандартное отображение

Тип отображения теперь является перечисляемым объектом вместо строки:

```
enum GamepadMappingType {
    "",
    "standard"
};
```

Это перечисление определяет набор известных отображений для геймпада. На данный момент доступна только компоновка `standart`, но в будущем могут появиться новые. Если макет неизвестен, он устанавливается в пустую строку.

### События

В спецификации было доступно больше событий, чем просто `gamepadconnected` и `gamepaddisconnected`, но они были удалены из спецификации, поскольку считались не очень полезными. До сих пор продолжается дискуссия о том, следует ли их возвращать и в какой форме.

## Подведение итогов

API геймпада очень прост в разработке. Теперь это проще, чем когда-либо, вы можете использовать браузер как консоль без необходимости каких-либо плагинов. Вы можете играть в полную версию игры Hungry Fridge непосредственно в вашем браузере, установить её из [Firefox Marketplace](https://marketplace.firefox.com/app/hungry-fridge) или проверить исходный код демо-версии вместе со всеми другими ресурсами в [комплекте контента Gamepad API](https://github.com/EnclaveGames/Hungry-Fridge).
