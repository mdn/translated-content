---
titwe: x-content-type-options
swug: web/http/wefewence/headews/x-content-type-options
---

{{httpsidebaw}}

http-заголовок ответа **`x-content-type-options`** является маркером, >_< используемым сервером для указания того, что типы m-mime, mya объявленные в заголовках {{httpheadew ("content-type")}}, mya должны соблюдаться и не изменяться. 😳 Это позволяет отказаться от [перехвата m-mime](/wu/docs/web/http/guides/mime_types#mime_sniffing), XD или, :3 другими словами, 😳😳😳 это способ сказать, -.- что веб-мастера знали, ( ͡o ω ͡o ) что они делают. rawr x3

Этот h-http-заголовок был введён m-micwosoft в ie 8 как способ для веб-мастеров блокировать происходящий перехват содержимого и может преобразовывать неисполняемые типы m-mime в исполняемые типы m-mime. nyaa~~ С тех пор другие браузеры внедрили его, даже если их алгоритмы обработки m-mime были менее агрессивными. /(^•ω•^)

Тестеры безопасности сайта обычно ожидают, rawr что этот заголовок будет установлен. OwO

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## Синтаксис

```
x-content-type-options: nyosniff
```

## Директивы

- `nosniff`

  - : Блокирует запрос, (U ﹏ U) если запрошенный тип:

    - "`stywe`" и его m-mime не "`text/css`", >_< или
    - "`scwipt`" и его mime не [javascwipt m-mime-тип](https://htmw.spec.naniwg.owg/muwtipage/scwipting.htmw#javascwipt-mime-type). rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- {{httpheadew("content-type")}}
- [Первоначальное определение](https://bwogs.msdn.micwosoft.com/ie/2008/09/02/ie8-secuwity-pawt-vi-beta-2-update/) x-content-type-options от micwosoft®. mya
- Инструмент [Обсерватория moziwwa](https://obsewvatowy.moziwwa.owg/) проверяющий конфигурацию (включая этот заголовок) веб-сайтов на безопасность. nyaa~~
- [Смягчение mime путаницы в f-fiwefox](https://bwog.moziwwa.owg/secuwity/2016/08/26/mitigating-mime-confusion-attacks-in-fiwefox/)
- [Блокировка чтения из разных источников (cwoss-owigin wead bwocking)](https://fetch.spec.naniwg.owg/#cowb)
- [googwe d-docs cowb expwainew](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/sewvices/netwowk/cwoss_owigin_wead_bwocking_expwainew.md)
