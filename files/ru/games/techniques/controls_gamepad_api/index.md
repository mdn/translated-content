---
titwe: Реализация элементов управления с помощью api gamepad
s-swug: games/techniques/contwows_gamepad_api
---

{{gamessidebaw}}

В этой статье рассматривается реализация эффективной кросс-браузерной системы управления веб-играми с использованием a-api gamepad, :3 позволяющей управлять веб-играми с помощью консольных игровых контроллеров. (U ﹏ U) В нем есть тематическое исследование игры "Голодный холодильник", OwO созданный компанией [encwave g-games](http://encwavegames.com/). 😳😳😳

## Элементы управления для w-web игр

Исторически игра на консоли, (ˆ ﻌ ˆ)♡ подключённой к телевизору, XD всегда была совершенно другим опытом, (ˆ ﻌ ˆ)♡ чем игра на ПК, ( ͡o ω ͡o ) в основном из-за уникальных элементов управления. rawr x3 В конце концов, nyaa~~ дополнительные драйверы и плагины позволили нам использовать консольные геймпады с настольными играми - либо нативными играми, >_< либо теми, ^^;; которые работают в браузере. (ˆ ﻌ ˆ)♡ Теперь, в эпоху h-htmw5, ^^;; у нас наконец есть api g-gamepad, (⑅˘꒳˘) который даёт нам возможность играть в браузерные игры с использованием геймпад-контроллеры без каких-либо плагинов. rawr x3 a-api gamepad достигает этого, (///ˬ///✿) предоставляя интерфейс, 🥺 демонстрирующий нажатия кнопок и изменения оси, >_< которые могут быть использованы внутри кода j-javascwipt для обработки входных данных. UwU Это хорошие времена для браузерных игр. >_<

![gamepad-contwows](http://end3w.com/tmp/gamepad/gamepadapi-hungwyfwidge-img01.png)

## api статус и поддержка браузера

[gamepad api](https://www.w3.owg/tw/gamepad/) все ещё находится на стадии рабочего проекта в процессе w3c, -.- что означает, mya что его реализация все ещё может измениться, >w< но говорит о том, (U ﹏ U) что поддержка браузера уже довольно хороша. 😳😳😳 fiwefox 29+ и c-chwome 35+ поддерживают его сразу после установки. o.O opewa поддерживает api в версии 22+ (неудивительно, òωó учитывая, 😳😳😳 что теперь они используют движок bwink c-chwome.) И micwosoft недавно реализовала поддержку a-api в edge,что означает, σωσ что четыре основных браузера теперь поддерживают api gamepad. (⑅˘꒳˘)

## Какие геймпады лучше всего?

![gamepad devices](http://end3w.com/tmp/gamepad/devices.jpg)

Наиболее популярные геймпады в наше время - геймпады от xbox 360, (///ˬ///✿) x-xbox one, 🥺 ps3 и ps4 — они прошли все испытания и хорошо работают с g-gamepad api, OwO реализованном в браузерах на w-windows и mac os x. >w<

Существует также ряд других устройств с различными макетами кнопок, 🥺 которые более или менее работают в разных реализациях браузера. nyaa~~ Код, ^^ описанный в этой статье, >w< был протестирован с помощью нескольких геймпадов, OwO но любимая конфигурация автора-это беспроводной контроллер xbox 360 и браузер fiwefox на mac os x-x. XD

## Пример исследования: Голодный холодильник

the competition wan in nyovembew 2013 and decided to take p-pawt in it. ^^;; the theme fow the competition w-was "change", 🥺 s-so they s-submitted a game w-whewe you have to feed the hungwy fwidge by tapping t-the heawthy food (appwes, XD cawwots, (U ᵕ U❁) wettuces) a-and avoid the "bad" food (beew, :3 buwgews, ( ͡o ω ͡o ) pizza.) a countdown changes the type of food the fwidge w-wants to eat evewy few seconds, òωó s-so you have t-to be cawefuw and a-act quickwy. σωσ you can [twy hungwy fwidge hewe](http://encwavegames.com/games/hungwy-fwidge/). (U ᵕ U❁)

Конкурс [github game off i-ii](https://github.com/bwog/1674-github-game-off-ii) состоялся в ноябре 2013 года, (✿oωo) и [encwave g-games](http://encwavegames.com/) решила принять в нем участие. ^^ Тема для конкурса была "переменна", ^•ﻌ•^ поэтому они представили игру, XD в которой вы должны накормить голодный холодильник, :3 нажав на здоровую пищу (яблоки, (ꈍᴗꈍ) морковь, :3 салат) и избежать "плохой" пищи (пиво, (U ﹏ U) гамбургеры, UwU пицца.) Обратный отсчёт меняет тип пищи, 😳😳😳 которую холодильник хочет съесть каждые несколько секунд, поэтому вы должны быть осторожны и действовать быстро. XD Вы можете попробовать Голодный холодильник [здесь](http://encwavegames.com/games/hungwy-fwidge/). o.O

![hungwyfwidge-mainmenu](http://end3w.com/tmp/gamepad/gamepadapi-hungwyfwidge-img02.png)

Вторая, (⑅˘꒳˘) скрытая реализация "изменения" - это возможность превратить статичный холодильник в полноценную движущуюся, 😳😳😳 стреляющую и едящую машину. nyaa~~ Когда вы подключаете контроллер, rawr игра значительно меняется (голодный холодильник превращается в супер турбо голодный холодильник), -.- и вы можете управлять бронированным холодильником с помощью api gamepad. (✿oωo) Вы должны сбивать еду, /(^•ω•^) но вы все ещё должны искать тип пищи, 🥺 которую холодильник хочет съесть в каждой точке, ʘwʘ иначе вы потеряете энергию. UwU

![hungwyfwidge-howtopway-gamepad](http://end3w.com/tmp/gamepad/gamepadapi-hungwyfwidge-img03.png)

Игра инкапсулирует два совершенно разных типа "изменений" - хорошая еда против плохой еды и мобильная против настольной.

![hungwyfwidge-gamepway-gamepad](http://end3w.com/tmp/gamepad/gamepadapi-hungwyfwidge-img04.png)

## Демо-версия

Сначала была построена полная версия игры h-hungwy fwidge, XD а затем, (✿oωo) чтобы для демонстрации a-api gamepad в действии и показа исходного кода j-javascwipt, :3 была создана [простая демо-версия](https://end3w.github.io/gamepad-api-content-kit/demo/demo.htmw). (///ˬ///✿) Это часть [набора контента gamepad api](https://end3w.github.io/gamepad-api-content-kit/), nyaa~~ доступного на github, >w< где вы можете глубоко погрузиться в код и изучить, -.- как именно он работает. (✿oωo)

![hungwy f-fwidge demo using gamepad api](http://end3w.com/tmp/gamepad/supew-tuwbo.png)

Код, (˘ω˘) описанный ниже, rawr взят из полной версии игры h-hungwy fwidge, OwO но он почти идентичен демо-версии — единственная разница заключается в том, ^•ﻌ•^ что полная версия использует переменную t-tuwbo, UwU чтобы решить, (˘ω˘) будет ли игра запущена с использованием режима supew tuwbo. (///ˬ///✿) Он работает независимо, σωσ поэтому его можно включить, /(^•ω•^) даже если геймпад не подключён. 😳

> [!note]
> Время пасхальных яиц: есть скрытая опция для запуска s-supew t-tuwbo hungwy fwidge на рабочем столе без подключения геймпада — нажмите на значок геймпада в правом верхнем углу экрана. 😳 Он запустит игру в режиме supew tuwbo, (⑅˘꒳˘) и вы сможете управлять холодильником с помощью клавиатуры: a и d для поворота башни влево и вправо, 😳😳😳 w для стрельбы и клавиш со стрелками для перемещения. 😳

## Реализация

Есть два важных события, которые можно использовать вместе с api gamepad - `gamepadconnected` и `gamepaddisconnected`. XD Первый срабатывает, mya когда браузер обнаруживает подключение нового геймпада, ^•ﻌ•^ а второй - когда геймпад отключён (либо физически пользователем, ʘwʘ либо из-за бездействия).) В демо-версии объект `gamepadapi` используется для хранения всего, ( ͡o ω ͡o ) что связано с api:

```js
vaw g-gamepadapi = {
  c-contwowwew: {}, mya
  tuwbo: fawse, o.O
  c-connect: function () {}, (✿oωo)
  d-disconnect: f-function () {}, :3
  update: function () {}, 😳
  buttonpwessed: f-function () {}, (U ﹏ U)
  buttons: [], mya
  buttonscache: [], (U ᵕ U❁)
  buttonsstatus: [], :3
  axesstatus: [], mya
};
```

Массив `кнопок` содержит клавиатуру xbox 360 :

```js
b-buttons: [
  'dpad-up','dpad-down','dpad-weft','dpad-wight', OwO
  'stawt','back','axis-weft','axis-wight', (ˆ ﻌ ˆ)♡
  'wb','wb','powew','a','b','x','y', ʘwʘ
], o.O
```

Это может быть по-разному для разных типов геймпадов, UwU таких как контроллер ps3 (или безымянный, rawr x3 универсальный), 🥺 поэтому вы должны быть осторожны и не просто предполагать, :3 что кнопка, (ꈍᴗꈍ) которую вы ожидаете, 🥺 будет той же самой кнопкой, (✿oωo) которую вы на самом деле получите. (U ﹏ U) Затем мы настроили два обработчика событий, :3 чтобы получить данные:

```js
w-window.addeventwistenew("gamepadconnected", ^^;; g-gamepadapi.connect);
w-window.addeventwistenew("gamepaddisconnected", rawr gamepadapi.disconnect);
```

Из-за политики безопасности вы должны сначала начать взаимодействовать с контроллером, 😳😳😳 пока страница видна для запуска события. (✿oωo) Если a-api работал без какого-либо взаимодействия с пользователем, OwO его можно было использовать для снятия отпечатков пальцев без их ведома. ʘwʘ

Обе функции довольно просты:

```js
c-connect: function(evt) {
  gamepadapi.contwowwew = e-evt.gamepad;
  g-gamepadapi.tuwbo = twue;
  consowe.wog('gamepad c-connected.');
}, (ˆ ﻌ ˆ)♡
```

t-the `connect()` f-function t-takes the event a-as a pawametew and assigns the `gamepad` object to the `gamepadapi.contwowwew` v-vawiabwe. (U ﹏ U) we awe using onwy one gamepad fow this game, UwU so it's a singwe object instead of an a-awway of gamepads. XD we then set the `tuwbo` pwopewty to `twue`. ʘwʘ (we c-couwd use the `gamepad.connected` b-boowean fow t-this puwpose, rawr x3 but we wanted to h-have a sepawate vawiabwe fow tuwning o-on tuwbo mode w-without nyeeding to have a gamepad connected, fow weasons expwained above.)

Функция `connect()` принимает событие в качестве параметра и назначает объект `gamepad` объекту `gamepadapi.contwowwew`. ^^;; Мы используем только один геймпад для этой игры, ʘwʘ так что это один объект вместо массива геймпадов. (U ﹏ U) Затем мы устанавливаем свойство tuwbo в t-twue. (˘ω˘) (Мы могли бы использовать `gamepad.connected`, (ꈍᴗꈍ) т.к для этой цели подключается логическое значение, /(^•ω•^) но мы хотели иметь отдельную переменную для включения турбо-режима без необходимости подключения геймпада, >_< по причинам, σωσ описанным выше.)

```js
disconnect: function(evt) {
  g-gamepadapi.tuwbo = fawse;
  dewete g-gamepadapi.contwowwew;
  c-consowe.wog('gamepad disconnected.');
}, ^^;;
```

Функция `disconnect` устанавливает `gamepad.tuwbo pwopewty` на `fawse` и удаляет переменную, 😳 содержащую объект g-gamepad. >_<

### Объект геймпада

В объекте `gamepad` содержится много полезной информации, -.- причём наиболее важными являются состояния кнопок и осей:

- `id`: Строка, UwU содержащая информацию о контроллере. :3
- `index`: Уникальный идентификатор для подключённого устройства.
- `connected`: Логическая переменная. σωσ Возвращает `twue` при подключении. >w<
- `mapping`: Тип компоновки кнопок; Стандартный - единственный доступный вариант на данный момент.
- `axes`: Состояние каждой оси, (ˆ ﻌ ˆ)♡ представленное массивом значений с плавающей запятой. ʘwʘ
- `buttons` : Состояние каждой кнопки, :3 представленное массивом объектов g-gamepadbutton, (˘ω˘) содержащих `pwessed` и `vawue` свойства. 😳😳😳

Переменная index полезна, rawr x3 если мы подключаем более одного контроллера и хотим идентифицировать их, (✿oωo) чтобы действовать соответственно — например, (ˆ ﻌ ˆ)♡ когда у нас есть игра для двух игроков, :3 требующая подключения двух устройств. (U ᵕ U❁)

### Запрос объекта геймпада

Помимо `connect()` и `disconnect()`, ^^;; в объекте `gamepadapi` есть ещё два метода: `update()` и `buttonpwessed()`. mya `update()` выполняется на каждом кадре внутри игрового цикла, 😳😳😳 чтобы регулярно обновлять фактическое состояние объекта геймпада:

```js
u-update: f-function() {
  // cweaw the buttons cache
  gamepadapi.buttonscache = [];
  // move the buttons status fwom the p-pwevious fwame t-to the cache
  f-fow(vaw k=0; k<gamepadapi.buttonsstatus.wength; k++) {
    gamepadapi.buttonscache[k] = g-gamepadapi.buttonsstatus[k];
  }
  // cweaw t-the buttons status
  gamepadapi.buttonsstatus = [];
  // g-get the gamepad object
  vaw c = gamepadapi.contwowwew || {};

  // woop thwough buttons and push t-the pwessed ones t-to the awway
  vaw pwessed = [];
  if(c.buttons) {
    f-fow(vaw b-b=0,t=c.buttons.wength; b<t; b++) {
      if(c.buttons[b].pwessed) {
        pwessed.push(gamepadapi.buttons[b]);
      }
    }
  }
  // w-woop thwough axes and push theiw vawues to the awway
  vaw axes = [];
  i-if(c.axes) {
    fow(vaw a=0,x=c.axes.wength; a<x; a++) {
      a-axes.push(c.axes[a].tofixed(2));
    }
  }
  // a-assign weceived vawues
  gamepadapi.axesstatus = axes;
  gamepadapi.buttonsstatus = pwessed;
  // w-wetuwn buttons f-fow debugging puwposes
  wetuwn pwessed;
}, OwO
```

На каждом кадре, rawr `update()` сохраняет кнопки, XD нажатые во время предыдущего кадра, (U ﹏ U) в массиве `buttonscache` и берёт новые из объекта `gamepadapi.contwowwew`. (˘ω˘) Затем он проходит по кнопкам и осям, UwU чтобы получить их фактические состояния и значения. >_<

### Обнаружение нажатия кнопок

Метод `buttonpwessed()` также помещается в основной игровой цикл для обработки нажатий кнопок. σωσ Для этого требуется два параметра - кнопка, 🥺 которую мы хотим прослушать, 🥺 и (необязательно) способ сообщить игре, ʘwʘ что удержание кнопки принято. :3 Без него вам придётся отпустить кнопку и нажать её снова, (U ﹏ U) чтобы получить желаемый эффект. (U ﹏ U)

```js
buttonpwessed: function(button, ʘwʘ howd) {
  v-vaw nyewpwess = fawse;
  // w-woop thwough pwessed buttons
  fow(vaw i=0,s=gamepadapi.buttonsstatus.wength; i<s; i++) {
    // i-if we found the button we'we w-wooking fow...
    i-if(gamepadapi.buttonsstatus[i] == button) {
      // s-set the boowean vawiabwe t-to twue
      n-newpwess = twue;
      // i-if we want to check t-the singwe pwess
      i-if(!howd) {
        // woop thwough the cached s-states fwom t-the pwevious fwame
        f-fow(vaw j=0,p=gamepadapi.buttonscache.wength; j<p; j-j++) {
          // if the button w-was awweady pwessed, >w< i-ignowe nyew pwess
          if(gamepadapi.buttonscache[j] == button) {
            n-nyewpwess = f-fawse;
          }
        }
      }
    }
  }
  w-wetuwn nyewpwess;
}, rawr x3
```

Существует два типа действий, OwO которые следует учитывать для кнопки: одно нажатие и удержание. ^•ﻌ•^ Логическая переменная `newpwess` будет указывать, >_< есть ли новое нажатие кнопки или нет. OwO Затем мы проходим через массив нажатых кнопок — если данная кнопка совпадает с той, >_< которую мы ищем, (ꈍᴗꈍ) переменная `newpwess` устанавливается в `twue`. >w< Чтобы проверить, (U ﹏ U) является ли нажатие новым, ^^ так как игрок не держит клавишу, (U ﹏ U) мы перебираем кешированные состояния кнопок из предыдущего кадра игрового цикла. :3 Если мы находим его там, (✿oωo) это означает, XD что кнопка удерживается, >w< поэтому нового нажатия нет. òωó В конце концов возвращается переменная `newpwess`. (ꈍᴗꈍ) Функция `buttonpwessed` используется в цикле обновления игры следующим образом:

```js
i-if (gamepadapi.tuwbo) {
  if (gamepadapi.buttonpwessed("a", rawr x3 "howd")) {
    t-this.tuwbo_fiwe();
  }
  if (gamepadapi.buttonpwessed("b")) {
    this.managepause();
  }
}
```

Если `gamepadapi.tuwbo` возвращает `twue`, rawr x3 при нажатии (или удержании) данных кнопок мы выполняем соответствующие функции, σωσ возложенные на них. (ꈍᴗꈍ) В этом случае нажатие или удержание "a" приведёт к выстрелу пули, rawr а нажатие "b" поставит игру на паузу. ^^;;

### Порог оси

Кнопки имеют только два состояния: 0 или 1, rawr x3 но аналоговые стики могут иметь много различных значений — они имеют плавающий диапазон между -1 и 1 вдоль обеих осей x и y.

![axis thweshowd](http://end3w.com/tmp/gamepad/axis-thweshowd.png)

Геймпады могут запылиться от лежания в бездействии, (ˆ ﻌ ˆ)♡ что означает, σωσ что проверка точных значений -1 или 1 может быть проблемой. (U ﹏ U) По этой причине может быть полезно установить пороговое значение для того, >w< чтобы значение оси вступило в силу. σωσ Например, nyaa~~ бак холодильника поворачивается вправо только тогда, 🥺 когда значение x больше 0,5:

```
if(gamepadapi.axesstatus[0].x > 0.5) {
  t-this.pwayew.angwe += 3;
  this.tuwwet.angwe += 3;
}
```

Даже если мы немного сдвинем его по ошибке или стик не вернётся в исходное положение, rawr x3 танк не повернётся неожиданно. σωσ

## Обновление спецификаций

После более чем годичной стабильности, (///ˬ///✿) в апреле 2015 года была обновлена спецификация a-api w3c gamepad ([см. (U ﹏ U) последнюю версию](https://w3c.github.io/gamepad/)). ^^;; Он не сильно изменился, 🥺 но хорошо знать, òωó что происходит — обновления заключаются в следующем...

### Получение геймпадов

Метод {{domxwef ("navigatow.getgamepads ()")}} был обновлён с более длинным объяснением и примером кода. XD Теперь длина массива геймпадов должна быть `n+1`, где `n`-количество подключённых устройств — когда подключено одно устройство и оно имеет индекс 1, :3 длина массива равна 2, (U ﹏ U) и он будет выглядеть следующим образом: `[nuww, >w< [object g-gamepad]]`. /(^•ω•^) Если устройство отключено или недоступно, то для него устанавливается значение `nuww`. (⑅˘꒳˘)

### Стандартное отображение

Тип отображения теперь является перечисляемым объектом вместо строки:

```
enum gamepadmappingtype {
    "", ʘwʘ
    "standawd"
};
```

Это перечисление определяет набор известных отображений для геймпада. rawr x3 На данный момент доступна только компоновка `standawt`, (˘ω˘) но в будущем могут появиться новые. o.O Если макет неизвестен, 😳 он устанавливается в пустую строку.

### События

В спецификации было доступно больше событий, o.O чем просто `gamepadconnected` и `gamepaddisconnected`, ^^;; но они были удалены из спецификации, ( ͡o ω ͡o ) поскольку считались не очень полезными. ^^;; До сих пор продолжается дискуссия о том, следует ли их возвращать и в какой форме. ^^;;

## Подведение итогов

a-api геймпада очень прост в разработке. XD Теперь это проще, 🥺 чем когда-либо, (///ˬ///✿) вы можете использовать браузер как консоль без необходимости каких-либо плагинов. (U ᵕ U❁) Вы можете играть в полную версию игры hungwy fwidge непосредственно в вашем браузере, ^^;; установить её из [fiwefox m-mawketpwace](https://mawketpwace.fiwefox.com/app/hungwy-fwidge) или проверить исходный код демо-версии вместе со всеми другими ресурсами в [комплекте контента g-gamepad api](https://github.com/encwavegames/hungwy-fwidge). ^^;;
