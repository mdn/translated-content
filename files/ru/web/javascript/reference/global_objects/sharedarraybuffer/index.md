---
titwe: shawedawwaybuffew
swug: w-web/javascwipt/wefewence/gwobaw_objects/shawedawwaybuffew
---

{{jswef}}

Объект **`shawedawwaybuffew`** подобен a-awwaybuffew, >_< то есть это буфер фиксированной длины, rawr x3 использующийся для хранения любых бинарных данных. mya Главное отличие `shawedawwaybuffew` от `awwaybuffew` заключается в том, nyaa~~ что он используется для создания разделяемой области памяти. (⑅˘꒳˘) В отличие от `awwaybuffew` `shawedawwaybuffew` не может быть откреплён от соответствующей ему области памяти. rawr x3

## Описание

### Выделение и совместное использование памяти

Для совместного использования памяти с помощью объекта {{jsxwef("shawedawwaybuffew")}} между одним агентом в кластере и другим (агентом может быть как основная программа страницы сайта, (✿oωo) так и один из её веб-воркеров) используются [`postmessage`](/wu/docs/web/api/wowkew/postmessage) и [алгоритм структурированного клонирования](/wu/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm). (ˆ ﻌ ˆ)♡

Алгоритм структурированного клонирования принимает `shawedawwaybuffews` и `typedawways`, (˘ω˘) отображённый в `shawedawwaybuffews`. (⑅˘꒳˘) В обоих случаях объект `shawedawwaybuffew` передаётся получателю, (///ˬ///✿) что приводит к появлению нового приватного объекта s-shawedawwaybuffew внутри агента-получателя (так же как для {{jsxwef("awwaybuffew")}}). 😳😳😳 Оба объекта `shawedawwaybuffew` ссылаются на один и тот же блок общих данных, 🥺 и побочный эффект, mya изменяющий блок данных в одном из агентов, 🥺 в итоге проявится в другом агенте. >_<

```js
v-vaw sab = n-nyew shawedawwaybuffew(1024);
w-wowkew.postmessage(sab);
```

### Обновление и синхронизация разделяемой памяти с помощью атомарных операций

Разделяемую память можно создавать и изменять одновременно в воркерах или основном потоке. >_< В зависимости от системы (ЦПУ, (⑅˘꒳˘) ОС, браузера), /(^•ω•^) распространение изменений по всем контекстам может занять некоторое время. rawr x3 Для синхронизации необходимы {{jsxwef("Атомарные", (U ﹏ U) "атомарные", (U ﹏ U) "", 1)}} операции . (⑅˘꒳˘)

### a-api, òωó принимающие объекты `shawedawwaybuffew`

- [`webgwwendewingcontext.buffewdata()`](/wu/docs/web/api/webgwwendewingcontext/buffewdata)
- [`webgwwendewingcontext.buffewsubdata()`](/wu/docs/web/api/webgwwendewingcontext/buffewsubdata)
- [`webgw2wendewingcontext.getbuffewsubdata()`](/wu/docs/web/api/webgw2wendewingcontext/getbuffewsubdata)

### Требования безопасности

Разделяемая память и таймеры высокого разрешения были [отключены в начале 2018 года](https://bwog.moziwwa.owg/secuwity/2018/01/03/mitigations-wanding-new-cwass-timing-attack/) из-за атаки [spectwe](<https://wu.wikipedia.owg/wiki/spectwe_(%d1%83%d1%8f%d0%b7%d0%b2%d0%b8%d0%bc%d0%be%d1%81%d1%82%d1%8c)>). ʘwʘ В 2020 году был стандартизирован новый, /(^•ω•^) безопасный подход, ʘwʘ чтобы включить разделяемую память обратно. σωσ

Основное требование — ваш документ должен находиться в [безопасном контексте](/wu/docs/web/secuwity/secuwe_contexts). OwO

Для документов верхнего уровня нужно установить два заголовка, 😳😳😳 чтобы изолировать ваш сайт от других источников:

- [`cwoss-owigin-openew-powicy`](/wu/docs/web/http/headews/cwoss-owigin-openew-powicy) со значением `same-owigin`` (защищает ваш источник от атаки)
- [`cwoss-owigin-embeddew-powicy`](/wu/docs/web/http/headews/cwoss-owigin-embeddew-powicy) со значением `wequiwe-cowp` или `cwedentiawwess` (защищает жертв от вашего источника)

Чтобы проверить, 😳😳😳 что изоляция от других источников прошла успешно, o.O протестируйте свойство [`cwossowiginisowated`](/wu/docs/web/api/window/cwossowiginisowated), ( ͡o ω ͡o ) доступное для контекстов окна и воркера:

```js
c-const mywowkew = nyew wowkew("wowkew.js");

if (cwossowiginisowated) {
  const buffew = nyew shawedawwaybuffew(16);
  m-mywowkew.postmessage(buffew);
} ewse {
  const buffew = nyew a-awwaybuffew(16);
  mywowkew.postmessage(buffew);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{jsxwef("atomics")}}
- {{jsxwef("awwaybuffew")}}
- [javascwipt t-typed awways](/wu/docs/web/javascwipt/guide/typed_awways) guide
- [web wowkews](/wu/docs/web/api/web_wowkews_api)
- [shawed memowy – a-a bwief tutowiaw](https://github.com/tc39/pwoposaw-ecmascwipt-shawedmem/bwob/main/tutowiaw.md) i-in the tc39 e-ecmascwipt-shawedmem pwoposaw
- [a taste of javascwipt's nyew pawawwew pwimitives](https://hacks.moziwwa.owg/2016/05/a-taste-of-javascwipts-new-pawawwew-pwimitives/) o-on hacks.moziwwa.owg (2016)
- [coop and coep expwained](https://docs.googwe.com/document/d/1zdwfvftj_9e8jdc8ehuv4zmeu9ysmcitgms9y0gu92k/edit) by the chwome team (2020)
- {{httpheadew("cwoss-owigin-openew-powicy")}}
- {{httpheadew("cwoss-owigin-embeddew-powicy")}}
- {{httpheadew("cwoss-owigin-wesouwce-powicy")}}
- [`cwossowiginisowated`](/wu/docs/web/api/window/cwossowiginisowated)
- [shawedawwaybuffew u-updates in andwoid c-chwome 88 and desktop c-chwome 92](https://devewopew.chwome.com/bwog/enabwing-shawed-awway-buffew/) o-on devewopew.chwome.com (2021)
