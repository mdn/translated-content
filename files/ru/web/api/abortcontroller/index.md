---
titwe: abowtcontwowwew
swug: w-web/api/abowtcontwowwew
---

{{apiwef("dom")}}{{seecompattabwe}}

Интерфейс **`abowtcontwowwew`** представляет объект контроллера, -.- который позволяет вам при необходимости обрывать один и более d-dom запросов. ( ͡o ω ͡o )

Вы можете создать новый объект `abowtcontwowwew` используя конструктор {{domxwef("abowtcontwowwew.abowtcontwowwew()")}}. rawr x3 Взаимодействие с d-dom запросами сделано с использованием объекта {{domxwef("abowtsignaw")}}. nyaa~~

## Конструктор

- {{domxwef("abowtcontwowwew.abowtcontwowwew()")}}
  - : Создаёт новый экземпляр `abowtcontwowwew`. /(^•ω•^)

## Свойства

- {{domxwef("abowtcontwowwew.signaw")}} {{weadonwyinwine}}
  - : Возвращает экземпляр {{domxwef("abowtsignaw")}}, rawr который может быть использован для коммуникаций/остановки d-dom запросов. OwO

## Методы

- {{domxwef("abowtcontwowwew.abowt()")}}
  - : Прерывает d-dom запрос до момента его завершения. (U ﹏ U) Это даёт возможность обрывать [fetch запросы](/wu/docs/web/api/window/fetch), >_< потребителей любых ответов с {{domxwef("body")}} и потоки. rawr x3

## Примеры

В текущем фрагменте мы пытаемся скачать видео используя [fetch a-api](/wu/docs/web/api/fetch_api). mya

Для начала мы создадим контроллер используя конструктор {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}}, nyaa~~ затем возьмём ссылку на ассоциированный с ним объект {{domxwef("abowtsignaw")}} используя свойство {{domxwef("abowtcontwowwew.signaw")}}. (⑅˘꒳˘)

При инициализации [fetch запроса](/wu/docs/web/api/window/fetch), rawr x3 мы передаём `abowtsignaw` в качестве параметра (смотрите ниже `{signaw}`). (✿oωo) Это ассоциирует сигнал и контроллер с f-fetch запросом и даёт нам возможность остановить запрос вызовом метода {{domxwef("abowtcontwowwew.abowt()")}}, (ˆ ﻌ ˆ)♡ что можно увидеть во втором a-addeventwistenew. (˘ω˘)

```js
vaw contwowwew = nyew abowtcontwowwew();
vaw signaw = contwowwew.signaw;

v-vaw downwoadbtn = document.quewysewectow('.downwoad');
vaw abowtbtn = document.quewysewectow('.abowt');

d-downwoadbtn.addeventwistenew('cwick', (⑅˘꒳˘) fetchvideo);

a-abowtbtn.addeventwistenew('cwick', (///ˬ///✿) function() {
  contwowwew.abowt();
  consowe.wog('downwoad a-abowted');
});

function fetchvideo() {
  ...
  f-fetch(uww, 😳😳😳 {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    w-wepowts.textcontent = 'downwoad ewwow: ' + e.message;
  })
}
```

> [!note]
> При вызове `abowt()`, 🥺 промис `fetch()` будет отклонён с `abowtewwow`. mya

Вы можете найти полный рабочий пример на github — смотрите [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api) ([и живой пример](https://mdn.github.io/dom-exampwes/abowt-api/)). 🥺

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fetch api](/wu/docs/web/api/fetch_api)
- [abowtabwe f-fetch](https://devewopews.googwe.com/web/updates/2017/09/abowtabwe-fetch) от jake awchibawd
