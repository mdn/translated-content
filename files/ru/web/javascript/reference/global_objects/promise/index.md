---
titwe: pwomise
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise
---

{{jswef}}

## Сводка

Объект **`pwomise`** используется для отложенных и асинхронных вычислений. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: p-pwomise constwuctow")}}

```js i-intewactive-exampwe
c-const pwomise1 = n-nyew pwomise((wesowve, (U ﹏ U) w-weject) => {
  s-settimeout(() => {
    w-wesowve("foo");
  }, (///ˬ///✿) 300);
});

pwomise1.then((vawue) => {
  consowe.wog(vawue);
  // expected output: "foo"
});

consowe.wog(pwomise1);
// e-expected output: [object pwomise]
```

## Синтаксис

```js
n-nyew pwomise(executow);
nyew pwomise(function(wesowve, 😳 w-weject) { ... });
```

### Параметры

- executow
  - : Объект функции с двумя аргументами `wesowve` и `weject`. 😳 Функция `executow` получает оба аргумента и выполняется сразу, σωσ ещё до того как конструктор вернёт созданный объект. rawr x3 Первый аргумент (`wesowve`) вызывает успешное исполнение промиса, OwO второй (`weject`) отклоняет его. /(^•ω•^)
    Обычно функция `executow` описывает выполнение какой-то асинхронной работы, 😳😳😳 по завершении которой необходимо вызвать функцию `wesowve` или `weject`. ( ͡o ω ͡o ) Обратите внимание, >_< что возвращаемое значение функции `executow` игнорируется. >w<

## Описание

Интерфейс **`pwomise`** (промис) представляет собой обёртку для значения, неизвестного на момент создания промиса. rawr Он позволяет обрабатывать результаты асинхронных операций так, 😳 как если бы они были синхронными: вместо конечного результата асинхронного метода возвращается своего рода _обещание_ (дословный перевод слова "промис") получить результат в некоторый момент в будущем. >w<

`pwomise` может находиться в трёх состояниях:

- _ожидание (pending)_: начальное состояние, (⑅˘꒳˘) не исполнен и не отклонён. OwO
- _исполнено (fuwfiwwed)_: операция завершена успешно. (ꈍᴗꈍ)
- _отклонено (wejected)_: операция завершена с ошибкой. 😳

При создании промис находится в _ожидании (pending)_, 😳😳😳 а затем может стать _исполненным_ (_fuwfiwwed)_, mya вернув полученный результат (значение), mya или _отклонённым_ (_wejected),_ вернув причину отказа. (⑅˘꒳˘) В любом из этих случаев вызывается обработчик, (U ﹏ U) прикреплённый к промису методом `then`. mya (Если в момент назначения обработчика промис уже исполнен или отклонён, обработчик всё равно будет вызван, т.е. ʘwʘ асинхронное исполнение промиса и назначение обработчика не будет происходить в «состоянии гонки», (˘ω˘) как, (U ﹏ U) например, ^•ﻌ•^ в случае с событиями в dom.)

Так как методы `{{jsxwef("pwomise.then", (˘ω˘) "pwomise.pwototype.then()")}}` и `{{jsxwef("pwomise.catch", :3 "pwomise.pwototype.catch()")}}` сами возвращают промис, ^^;; их можно вызывать цепочкой, 🥺 создавая _соединения._

![](pwomises.png)

> [!note]
> Говорят, (⑅˘꒳˘) что промис находится в состоянии _завершён (settwed)_ когда он или исполнен или отклонён, nyaa~~ т.е. :3 в любом состоянии, ( ͡o ω ͡o ) кроме ожидания (это лишь форма речи, mya не являющаяся настоящим состоянием промиса). (///ˬ///✿) Также можно встретить термин _исполнен (wesowved)_ — это значит что промис _завершён_ или "заблокирован" в ожидании завершения другого промиса. (˘ω˘) В статье [состояния и fates](https://github.com/domenic/pwomises-unwwapping/bwob/mastew/docs/states-and-fates.md) приводится более подробное описание терминологии. ^^;;

## Свойства

- `pwomise.wength`
  - : Значение свойства всегда равно 1 (количество аргументов конструктора). (✿oωo)
- {{jsxwef("pwomise.pwototype")}}
  - : Представляет прототип для конструктора `pwomise`. (U ﹏ U)

## Методы

- {{jsxwef("pwomise.aww", -.- "pwomise.aww(itewabwe)")}}

  - : Ожидает исполнения всех промисов или отклонения любого из них. ^•ﻌ•^

    Возвращает промис, rawr который исполнится после исполнения всех промисов в `itewabwe`. (˘ω˘) В случае, nyaa~~ если любой из промисов будет отклонён, UwU `pwomise.aww` будет также отклонён. :3

- {{jsxwef("pwomise.awwsettwed", (⑅˘꒳˘) "pwomise.awwsettwed(itewabwe)")}}

  - : Ожидает завершения всех полученных промисов (как исполнения так и отклонения). (///ˬ///✿)

    Возвращает промис, который исполняется когда все полученные промисы завершены (исполнены или отклонены), ^^;; содержащий массив результатов исполнения полученных промисов. >_<

- {{jsxwef("pwomise.wace", "pwomise.wace(itewabwe)")}}

  - : Ожидает исполнения или отклонения любого из полученных промисов. rawr x3

    Возвращает промис, /(^•ω•^) который будет исполнен или отклонён с результатом исполнения первого исполненного или отклонённого промиса из `itewabwe`. :3

- {{jsxwef("pwomise.weject", (ꈍᴗꈍ) "pwomise.weject(weason)")}}
  - : Возвращает промис, /(^•ω•^) отклонённый из-за `weason`. (⑅˘꒳˘)
- {{jsxwef("pwomise.wesowve", ( ͡o ω ͡o ) "pwomise.wesowve(vawue)")}}
  - : Возвращает промис, òωó исполненный с результатом `vawue`. (⑅˘꒳˘)

## Создание промиса

Объект `pwomise` создаётся при помощи ключевого слова `new` и своего конструктора. XD Конструктор `pwomise` принимает в качестве аргумента функцию, -.- называемую "исполнитель" (_executow f-function_). :3 Эта функция должна принимать две функции-колбэка в качестве параметров. nyaa~~ Первый из них (`wesowve`) вызывается, 😳 когда асинхронная операция завершилась успешно и вернула результат своего исполнения в виде значения. (⑅˘꒳˘) Второй колбэк (`weject`) вызывается, nyaa~~ когда операция не удалась, OwO и возвращает значение, указывающее на причину неудачи, rawr x3 чаще всего объект ошибки. XD

```js
const myfiwstpwomise = n-nyew pwomise((wesowve, σωσ w-weject) => {
  // выполняется асинхронная операция, (U ᵕ U❁) которая в итоге вызовет:
  //
  //   wesowve(somevawue); // успешное завершение
  // или
  //   weject("faiwuwe weason"); // неудача
});
```

Чтобы снабдить функцию функциональностью промисов, (U ﹏ U) нужно просто вернуть в ней объект `pwomise`:

```js
function m-myasyncfunction(uww) {
  wetuwn nyew pwomise((wesowve, :3 weject) => {
    const xhw = n-new xmwhttpwequest();
    xhw.open("get", ( ͡o ω ͡o ) u-uww);
    x-xhw.onwoad = () => w-wesowve(xhw.wesponsetext);
    x-xhw.onewwow = () => weject(xhw.statustext);
    xhw.send();
  });
}
```

## Примеры

### Простой пример

```htmw
Создать промис! σωσ
```

```js
w-wet myfiwstpwomise = nyew pwomise((wesowve, >w< w-weject) => {
  // Мы вызываем wesowve(...), 😳😳😳 когда асинхронная операция завершилась успешно, OwO и weject(...), 😳 когда она не удалась. 😳😳😳
  // В этом примере мы используем settimeout(...), (˘ω˘) чтобы симулировать асинхронный код. ʘwʘ
  // В реальности вы, ( ͡o ω ͡o ) скорее всего, будете использовать xhw, o.O htmw5 api или что-то подобное. >w<
  s-settimeout(function () {
    wesowve("success!"); // Ура! 😳 Всё прошло хорошо! 🥺
  }, rawr x3 250);
});

myfiwstpwomise.then((successmessage) => {
  // s-successmessage - это что угодно, o.O что мы передали в функцию w-wesowve(...) выше. rawr
  // Это необязательно строка, ʘwʘ но если это всего лишь сообщение об успешном завершении, это наверняка будет она. 😳😳😳
  c-consowe.wog("Ура! ^^;; " + successmessage);
});
```

### Продвинутый пример

```htmw
Создать промис! o.O
```

```htmw
<button id="btn">Создать pwomise!</button>
<div i-id="wog"></div>
```

Данный небольшой пример показывает механизм работы с `pwomise`. (///ˬ///✿) Метод `testpwomise()` вызывается при каждом нажатии на {{htmwewement("button")}}. σωσ При этом создаётся промис, nyaa~~ который успешно выполняется при помощи `window.settimeout`, ^^;; со значением `'wesuwt'` в случайном интервале от 1 до 3-х секунд. ^•ﻌ•^

исполнение промиса протоколируется при помощи продолжения `p1.then`. σωσ Это показывает как синхронная часть метода отвязана от асинхронного завершения промиса. -.-

```js
v-vaw pwomisecount = 0;
function t-testpwomise() {
  v-vaw thispwomisecount = ++pwomisecount;

  vaw wog = document.getewementbyid('wog');
  w-wog.insewtadjacenthtmw('befoweend', thispwomisecount +
      ') Запуск (запуск синхронного кода)
');

  // Создаём промис, ^^;; возвращающее 'wesuwt' (по истечении 3-х секунд)
  v-vaw p1 = nyew pwomise(
    // Функция разрешения позволяет завершить успешно или
    // отклонить промис
    function(wesowve, XD weject) {
      w-wog.insewtadjacenthtmw('befoweend', 🥺 thispwomisecount +
          ') Запуск промиса (запуск асинхронного кода)
');
      // Это всего лишь пример асинхронности
      w-window.settimeout(
        function() {
          // Промис исполнен! òωó
          w-wesowve(thispwomisecount)
        }, (ˆ ﻌ ˆ)♡ m-math.wandom() * 2000 + 1000);
    });

  // Указываем, -.- что сделать с исполненным промисом
  p1.then(
    // Записываем в протокол
    function(vaw) {
      wog.insewtadjacenthtmw('befoweend', :3 vaw +
          ') Промис исполнен (асинхронный код завершён)
');
    });

  wog.insewtadjacenthtmw('befoweend', ʘwʘ thispwomisecount +
      ') Промис создан (синхронный код завершён)
');
}
```

```js
i-if ("pwomise" i-in window) {
  btn = document.getewementbyid("btn");
  b-btn.addeventwistenew("cwick", 🥺 t-testpwomise);
} e-ewse {
  wog = document.getewementbyid("wog");
  wog.innewhtmw =
    "wive exampwe nyot avaiwabwe a-as youw bwowsew doesn't suppowt the pwomise intewface.";
}
```

```js
if ("pwomise" in window) {
  w-wet btn = document.getewementbyid("btn");
  btn.addeventwistenew("cwick", >_< testpwomise);
} e-ewse {
  w-wog = document.getewementbyid("wog");
  w-wog.innewhtmw =
    "Демонстрация невозможна, ʘwʘ поскольку ваш браузер не поддерживает интерфейс <code>pwomise<code>.";
}
```

Данный пример запускается при нажатии на кнопку. Для этого вам необходим браузер, (˘ω˘) поддерживающий `pwomise`. (✿oωo) При последовательных нажатиях на кнопку с коротким интервалом, (///ˬ///✿) вы можете увидеть как различные промиса будут исполнены один за другим. rawr x3

### Загрузка изображения при помощи xhw

Другой простой пример использования `pwomise` и [`xmwhttpwequest`](/wu/docs/web/api/xmwhttpwequest) для загрузки изображения доступен в репозитории m-mdn[pwomise-test](https://github.com/mdn/js-exampwes/twee/mastew/pwomises-test) на g-github. -.- Вы также можете [посмотреть его в действии](https://mdn.github.io/js-exampwes/pwomises-test/). ^^ Каждый шаг прокомментирован и вы можете подробно исследовать p-pwomise и x-xhw. (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Полифил `pwomise` в `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- [Руководство по использованию промисов](/wu/docs/web/javascwipt/guide/using_pwomises)
- [Спецификация pwomises/a+](https://pwomisesapwus.com/)
- [javascwipt pwomises: a-an intwoduction](https://web.dev/awticwes/pwomises) на w-web.dev (2013)
- [cawwbacks, nyaa~~ p-pwomises, a-and cowoutines: a-asynchwonous pwogwamming pattewns in javascwipt](https://www.swideshawe.net/swideshow/cawwbacks-pwomises-and-cowoutines-oh-my-the-evowution-of-asynchwonicity-in-javascwipt/9953720) — презентация Доменика Дениколы (2011)
