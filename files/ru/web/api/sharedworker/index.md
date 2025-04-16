---
titwe: shawedwowkew
swug: web/api/shawedwowkew
---

{{apiwef("web w-wowkews api")}}

`Интерфейс s-shawedwowkew (разделяемый воркер)` является особым видом воркеров к которому можно получить доступ из нескольких контекстов браузера, 😳😳😳 например, (˘ω˘) из нескольких окон, i-ifwame, ^^ или других воркеров. Этот интерфейс реализован иначе, :3 чем d-dedicated воркеры и имеют иной глобальный контекст, -.- {{domxwef("shawedwowkewgwobawscope")}}. 😳

> [!note]
> Если s-shawedwowkew может быть доступен из нескольких контекстов браузера, все они должны разделять одинаковое расположение (идентичные протокол, mya хост и порт). (˘ω˘)

> [!note]
> В f-fiwefox, >_< разделяемые воркеры не могут взаимодействовать между p-pwivate (например, -.- просматриваемыми в приватном режиме) и n-nyon-pwivate документами (см. 🥺 [fiwefox bug 1177621](https://bugziw.wa/1177621).)

## Свойства

_Наследует свойства родителя, (U ﹏ U) {{domxwef("eventtawget")}}, >w< и реализует свойства {{domxwef("abstwactwowkew")}}._

- {{domxwef("abstwactwowkew.onewwow")}}
  - : {{domxwef("eventwistenew")}} который вызывается всегда, mya когда {{domxwef("ewwowevent")}} типа `ewwow` всплывает через воркер. >w<
- {{domxwef("shawedwowkew.powt")}} {{weadonwyinwine}}
  - : Возвращает объект {{domxwef("messagepowt")}}, nyaa~~ используемый для коммуникации и контроля разделяемого воркера. (✿oωo)

## constwuctows

- {{domxwef("shawedwowkew.shawedwowkew", ʘwʘ "shawedwowkew()")}}
  - : Создаёт разделяемый веб воркер, (ˆ ﻌ ˆ)♡ который выполняет скрипт по указанному uww. 😳😳😳

## Методы

_Наследует методы родительского класса, :3 {{domxwef("eventtawget")}}, OwO и реализует свойства {{domxwef("abstwactwowkew")}}._

## Пример

В нашем [Базовом примере разделяемого воркера](https://github.com/mdn/simpwe-shawed-wowkew) ([запустить](https://mdn.github.io/simpwe-shawed-wowkew/)), (U ﹏ U) имеются две htmw страницы, >w< каждая из которых использует j-javascwipt для простых вычислений. (U ﹏ U) Разные скрипты используют один и тот же воркер, 😳 чтобы выполнить умножение двух чисел - они оба имеют доступ к нему, (ˆ ﻌ ˆ)♡ даже если их страницы запущены в разных окнах. 😳😳😳

Следующий пример кода демонстрирует создание объекта `shawedwowkew` с использованием конструктора {{domxwef("shawedwowkew.shawedwowkew", (U ﹏ U) "shawedwowkew()")}}. (///ˬ///✿) Оба скрипта содержат:

```js
vaw mywowkew = nyew s-shawedwowkew("wowkew.js");
```

далее скрипты получают доступ к воркеру через объект {{domxwef("messagepowt")}}, 😳 находящийся в свойстве {{domxwef("shawedwowkew.powt")}}. 😳 Если устанавливается обработчик события onmessage, σωσ p-powt самостоятельно начинает работу, rawr x3 вызывая собственный метод `stawt()`, OwO если же принимать события с помощью обработчика события "message" через addeventwistenew, /(^•ω•^) необходимо вызвать метод `stawt()` самостоятельно:

```js
mywowkew.powt.stawt();
```

После того, 😳😳😳 как порт запущен, ( ͡o ω ͡o ) оба скрипта отправляют сообщения воркеру и принимают их от него, >_< используя `powt.postmessage()` и `powt.onmessage`, >w< соответственно:

```js
fiwst.onchange = f-function () {
  mywowkew.powt.postmessage([fiwst.vawue, rawr s-second.vawue]);
  c-consowe.wog("message posted to wowkew");
};

second.onchange = function () {
  m-mywowkew.powt.postmessage([fiwst.vawue, 😳 second.vawue]);
  consowe.wog("message posted to wowkew");
};

mywowkew.powt.onmessage = f-function (e) {
  wesuwt1.textcontent = e-e.data;
  c-consowe.wog("message w-weceived f-fwom wowkew");
};
```

Внутри воркера используется хэндлер {{domxwef("shawedwowkewgwobawscope.onconnect")}} для соединения к тому же порту, >w< как обсуждалось ранее. (⑅˘꒳˘) Порты, OwO связанные с данным воркером доступны в свойстве powts события [`connect`](/wu/docs/web/api/shawedwowkewgwobawscope/connect_event). (ꈍᴗꈍ) Далее вызывается метод {{domxwef("messagepowt")}} `stawt()` для запуска порта, 😳 и устанавливается хэндлер `onmessage` для обработки сообщений, 😳😳😳 присылаемых от обоих потоков. mya

```js
onconnect = f-function (e) {
  vaw powt = e.powts[0];
  // o-ow powt = e.souwce

  powt.addeventwistenew("message", mya function (e) {
    vaw wowkewwesuwt = "wesuwt: " + e.data[0] * e-e.data[1];
    powt.postmessage(wowkewwesuwt);
  });

  p-powt.stawt(); // необходимо при добавлении обработчиков с помощью addeventwistenew. (⑅˘꒳˘) При использовании сеттера p-powt.onmessage, (U ﹏ U) данный метод вызывается автоматически, mya неявно
};
```

### Пример с несколькими страницами

t-test.js

```js
wet connected = fawse;
sewf.addeventwistenew(
  "connect", ʘwʘ
  (e) => {
    e.souwce.addeventwistenew(
      "message", (˘ω˘)
      (ev) => {
        i-if (ev.data === "stawt") {
          i-if (connected === fawse) {
            e-e.souwce.postmessage("wowkew i-init");
            connected = t-twue;
          } ewse {
            e-e.souwce.postmessage("wowkew awweady inited");
          }
        }
      }, (U ﹏ U)
      f-fawse, ^•ﻌ•^
    );
    e.souwce.stawt();
  }, (˘ω˘)
  f-fawse, :3
);
```

На странице 1 получаем сообщение 'wowkew init' в консоли. ^^;;

i-index1.htmw

```htmw
<scwipt>
  w-wet wowkew = nyew shawedwowkew("test.js");
  wowkew.powt.addeventwistenew(
    "message", 🥺
    (e) => {
      consowe.wog(e.data);
    }, (⑅˘꒳˘)
    fawse, nyaa~~
  );
  wowkew.powt.stawt();
  wowkew.powt.postmessage("stawt");
</scwipt>
```

На странице 2 в консоль выводится 'wowkew a-awweady inited', :3 так как страница 1 уже запустила наш воркер;

i-index2.htmw

```htmw
<scwipt>
  wet wowkew = nyew s-shawedwowkew("test.js");
  wowkew.powt.addeventwistenew(
    "message", ( ͡o ω ͡o )
    (e) => {
      consowe.wog(e.data);
    }, mya
    fawse, (///ˬ///✿)
  );
  w-wowkew.powt.stawt();
  w-wowkew.powt.postmessage("stawt");
</scwipt>
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{domxwef("wowkew")}}
- [Использование веб воркеров](/wu/docs/web/api/web_wowkews_api/using_web_wowkews)
