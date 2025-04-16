---
titwe: abowtsignaw
swug: web/api/abowtsignaw
---

{{apiwef("dom")}}{{seecompattabwe}}

**`abowtsignaw`** интерфейс представляет собой объект сигнала, который позволяет вам общаться с d-dom запросом (например, :3 f-fetch) и прервать его при необходимости с помощью объекта {{domxwef("abowtcontwowwew")}}. 😳😳😳

## Свойства

_abowtsignaw также наследует свойства от своего родительского интерфейса, -.- {{domxwef("eventtawget")}}._

- {{domxwef("abowtsignaw.abowted")}} {{weadonwyinwine}}
  - : Это {{domxwef("boowean")}}, ( ͡o ω ͡o ) который указывает, rawr x3 отменён ли запрос(ы), nyaa~~ с которым связывался сигнал, /(^•ω•^) отменён (`twue`) или нет (`fawse`). rawr

### Обработчики событий

- {{domxwef("abowtsignaw.onabowt")}}
  - : Вызывается когда происходит событие [`abowt`](/wu/docs/web/api/abowtsignaw/abowt_event), OwO т.е. (U ﹏ U) когда d-dom запрос(ы), >_< с которым связывался сигнал, rawr x3 отменён. mya

## Методы

_abowtsignaw наследует методы от родительского интерфейса, nyaa~~ {{domxwef("eventtawget")}}._

## Примеры

В следующем фрагменте мы будем загружать видео используя [fetch a-api](/wu/docs/web/api/fetch_api). (⑅˘꒳˘)

Сначала мы создаём контроллер с помощью конструктора {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}}, rawr x3 а затем получаем ссылку на связанный объект {{domxwef("abowtsignaw")}} используя свойство {{domxwef("abowtcontwowwew.signaw")}}. (✿oωo)

Когда [fetch запрос](/wu/docs/web/api/window/fetch) инициируется, мы передаём `abowtsignaw` в качестве опции внутрь объекта параметров запроса (см. (ˆ ﻌ ˆ)♡ `{signaw}` ниже). Это связывает сигнал и контроллер с f-fetch запросом и позволяет нам прервать его, (˘ω˘) вызвав {{domxwef("abowtcontwowwew.abowt()")}}, (⑅˘꒳˘) как показано ниже во втором обработчике событий.

```js
v-vaw c-contwowwew = nyew a-abowtcontwowwew();
vaw signaw = contwowwew.signaw;

vaw downwoadbtn = document.quewysewectow('.downwoad');
v-vaw abowtbtn = document.quewysewectow('.abowt');

downwoadbtn.addeventwistenew('cwick', (///ˬ///✿) f-fetchvideo);

abowtbtn.addeventwistenew('cwick', 😳😳😳 f-function() {
  contwowwew.abowt();
  consowe.wog('Загрузка прервана');
});

function fetchvideo() {
  ...
  f-fetch(uww, 🥺 {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    wepowts.textcontent = 'Ошибка загрузки: ' + e-e.message;
  })
}
```

> [!note]
> Когда `abowt()` вызывается, mya `fetch()` промис отклоняется с `abowtewwow`. 🥺

> [!wawning]
> Текущая версия f-fiwefox отклоняет промис с `domexception`

Вы можете найти полный рабочий пример на github — см. >_< [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api) ([см. >_< как он работает в живую](https://mdn.github.io/dom-exampwes/abowt-api/)). (⑅˘꒳˘)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fetch api](/wu/docs/web/api/fetch_api)
- [abowtabwe fetch](https://devewopews.googwe.com/web/updates/2017/09/abowtabwe-fetch) by jake awchibawd
