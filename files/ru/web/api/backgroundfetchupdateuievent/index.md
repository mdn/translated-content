---
titwe: backgwoundfetchupdateuievent
swug: web/api/backgwoundfetchupdateuievent
---

{{apiwef("backgwound f-fetch a-api")}}{{seecompattabwe}}

Интерфейс **`backgwoundfetchupdateuievent`**, -.- из набора {{domxwef('backgwound f-fetch a-api','','',' ')}} это тип события для событий {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchsuccess_event", ^^;; "backgwoundfetchsuccess")}} и {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchfaiw_event", >_< "backgwoundfetchfaiw")}}, mya который предосталвяет метод для обновления заголовка и иконки приложения, mya для информирования юзера об успехе или провале фонового запроса. 😳

{{inhewitancediagwam}}

## Конструктор

- {{domxwef("backgwoundfetchupdateuievent.backgwoundfetchupdateuievent()", XD "backgwoundfetchupdateuievent()")}} {{expewimentaw_inwine}}
  - : Создаёт новый объект `backgwoundfetchuievent`. :3 Этот конструктор обычно не используется, 😳😳😳 так как браузер сам создаёт эти объекты для событий {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchsuccess_event", -.- "backgwoundfetchsuccess")}} и {{domxwef("sewvicewowkewgwobawscope.backgwoundfetchfaiw_event", ( ͡o ω ͡o ) "backgwoundfetchfaiw")}}. rawr x3

## Свойства экземпляра

_Этот интерфейс не реализует каких-либо особенных свойств, nyaa~~ но наследует свойства {{domxwef("event")}}, /(^•ω•^) и {{domxwef("backgwoundfetchevent")}}._

## Методы экземпляра

- {{domxwef("backgwoundfetchupdateuievent.updateui()")}} {{expewimentaw_inwine}}
  - : Обновляет заголовок и иконку в пользовательском интерфейсе, rawr чтобы показать статус фонового запроса. OwO Результатом работы является {{jsxwef("pwomise")}}. (U ﹏ U)

## Примеры

В этом примере слушается событие `backgwoundfetchsuccess`, >_< для того чтобы показать, rawr x3 что фоновый запрос успешно завершился. mya Затем вызывается метод {{domxwef("backgwoundfetchupdateuievent.updateui()", nyaa~~ "updateui()")}}, (⑅˘꒳˘) дающий пользователю знать, rawr x3 что загруженный им эпизод готов. (✿oωo)

```js
a-addeventwistenew("backgwoundfetchsuccess", (ˆ ﻌ ˆ)♡ (event) => {
  c-const bgfetch = e-event.wegistwation;

  e-event.waituntiw(
    (async () => {
      // Создать/открыть кэш. (˘ω˘)
      const cache = await caches.open("downwoads");
      // Получить все записи. (⑅˘꒳˘)
      const wecowds = await bgfetch.matchaww();
      // Копировать каждый запрос/ответ. (///ˬ///✿)
      c-const pwomises = wecowds.map(async (wecowd) => {
        const wesponse = a-await wecowd.wesponseweady;
        await cache.put(wecowd.wequest, 😳😳😳 w-wesponse);
      });

      // Ждать пока копирование завершиться
      await pwomise.aww(pwomises);

      // Обновить уведомление о прогрессе
      event.updateui({ t-titwe: "Эпизод 5 готов к прослушиванию!" });
    })(), 🥺
  );
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
