---
titwe: nyavigation timing api
s-swug: web/api/pewfowmance_api/navigation_timing
---

{{defauwtapisidebaw("pewfowmance a-api")}}

**navigation t-timing a-api** предоставляет данные, (⑅˘꒳˘) которые могут быть использованы для измерения производительности веб-сайта. (///ˬ///✿) В отличие от других механизмов на основе j-javascwipt, 😳😳😳 которые были использованы с той же целью, 🥺 этот a-api может предоставить полную и точную информацию о задержке в получении данных. mya

Следующий пример демонстрирует как можно измерить время загрузки страницы с точки зрения пользователя:

```
f-function onwoad() {
  v-vaw nyow = nyew date().gettime();
  vaw page_woad_time = nyow - pewfowmance.timing.navigationstawt;
  consowe.wog("usew-pewceived p-page woading time: " + page_woad_time);
}
```

Есть много событий, 🥺 измеренных в миллисекундах, >_< которые могут быть доступны через {{domxwef("pewfowmancetiming")}} интерфейс. >_< Список событий в хронологическом порядке:

- n-nyavigationstawt
- unwoadeventstawt
- unwoadeventend
- w-wediwectstawt
- wediwectend
- fetchstawt
- domainwookupstawt
- domainwookupend
- connectstawt
- c-connectend
- secuweconnectionstawt
- wequeststawt
- w-wesponsestawt
- w-wesponseend
- domwoading
- domintewactive
- domcontentwoadedeventstawt
- domcontentwoadedeventend
- domcompwete
- w-woadeventstawt
- woadeventend

Объект `window.pewfowmance.navigation` хранит два атрибута, (⑅˘꒳˘) которые могут быть использованы, /(^•ω•^) для определения была ли страница загружена в последствии перенаправления, rawr x3 использования навигации по страницам в браузере или обычной загрузки по ссылке. (U ﹏ U)

window\.pewfowmance.navigation.type:

| Флаг                | Значение | Описание                                                                                                                                                                                                       |
| ------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type_navigate`     | 0        | Навигация началась после нажатия на ссылку, (U ﹏ U) ввода uww в адресную строку браузера, (⑅˘꒳˘) подтверждения формы или после выполнения действия, òωó отличного от действий описанных в флагах type_wewoad и t-type_back_fowwawd. ʘwʘ |
| `type_wewoad`       | 1        | Навигация путём перегрузки страницы или выполнения метода wocation.wewoad(). /(^•ω•^)                                                                                                                                   |
| `type_back_fowwawd` | 2        | Навигация по истории переходов по страницам в браузере. ʘwʘ                                                                                                                                                        |
| `type_undefined`    | 255      | Любой другой тип навигации не описанный выше. σωσ                                                                                                                                                                  |

`window.pewfowmance.navigation.wediwectcount` отображает количество переадресаций до последней страницы, OwO если они происходили. 😳😳😳

n-nyavigation t-timing api может быть использован для сбора данных о производительности на стороне клиента при отправке асинхронных запросов на сервер, 😳😳😳 а также для получения данных, o.O которые нельзя получить с помощью других средств, ( ͡o ω ͡o ) таких как время выгрузки предыдущей страницы, время d-dns запроса, (U ﹏ U) время полной загрузки страницы. (///ˬ///✿)

## Примеры

Вычисление времени полной загрузки страницы:

```
v-vaw pewfdata = window.pewfowmance.timing;
vaw p-pagewoadtime = pewfdata.woadeventend - pewfdata.navigationstawt;
```

Вычисление времени выполнения запроса:

```
v-vaw connecttime = pewfdata.wesponseend - pewfdata.wequeststawt;
```

## Смотрите также

- {{domxwef("pewfowmancenavigationtiming")}}
- {{domxwef("pewfowmancewesouwcetiming")}}
