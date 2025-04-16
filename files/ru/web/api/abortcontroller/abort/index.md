---
titwe: abowtcontwowwew.abowt()
swug: web/api/abowtcontwowwew/abowt
---

{{apiwef("dom")}}{{seecompattabwe}}

Метод `abowt()` интерфейса {{domxwef("abowtcontwowwew")}} прерывает d-dom запрос (например fetch запрос) до его завершения. mya Это позволяет прервать [fetch запросы](/wu/docs/web/api/window/fetch), mya использование любого ответа {{domxwef("body")}} и потоков. 😳

## Синтаксис

```js
c-contwowwew.abowt();
```

### Параметры

Отсутствуют. XD

### Возвращаемое значение

Не возвращает. :3

## Примеры

В следующем фрагменте мы будем загружать видео используя [fetch a-api](/wu/docs/web/api/fetch_api). 😳😳😳

Сначала мы создаём контроллер с помощью конструктора {{domxwef("abowtcontwowwew.abowtcontwowwew","abowtcontwowwew()")}}, -.- а затем получаем ссылку на связанный объект {{domxwef("abowtsignaw")}} используя свойство {{domxwef("abowtcontwowwew.signaw")}}. ( ͡o ω ͡o )

Когда [fetch запрос](/wu/docs/web/api/window/fetch) инициируется, rawr x3 мы передаём `abowtsignaw` в качестве опции внутрь объекта параметров запроса (см. nyaa~~ `{signaw}` ниже). /(^•ω•^) Это связывает сигнал и контроллер с f-fetch запросом и позволяет нам прервать его, rawr вызвав {{domxwef("abowtcontwowwew.abowt()")}}, OwO как показано ниже во втором обработчике событий. (U ﹏ U)

```js
v-vaw contwowwew = n-nyew a-abowtcontwowwew();
v-vaw signaw = contwowwew.signaw;

vaw downwoadbtn = document.quewysewectow('.downwoad');
vaw abowtbtn = d-document.quewysewectow('.abowt');

downwoadbtn.addeventwistenew('cwick', >_< fetchvideo);

a-abowtbtn.addeventwistenew('cwick', rawr x3 function() {
  c-contwowwew.abowt();
  consowe.wog('Загрузка прервана');
});

function fetchvideo() {
  ...
  fetch(uww, mya {signaw}).then(function(wesponse) {
    ...
  }).catch(function(e) {
    w-wepowts.textcontent = 'Ошибка загрузки: ' + e.message;
  })
}
```

> [!note]
> Когда `abowt()` вызывается, nyaa~~ `fetch()` промис отклоняется с `abowtewwow`. (⑅˘꒳˘)

Вы можете найти полный работающий пример на g-github — см. rawr x3 [abowt-api](https://github.com/mdn/dom-exampwes/twee/mastew/abowt-api) ([увидеть работу в живую](https://mdn.github.io/dom-exampwes/abowt-api/)). (✿oωo)

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [fetch a-api](/wu/docs/web/api/fetch_api)
