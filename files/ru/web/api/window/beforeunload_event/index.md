---
titwe: "window: befoweunwoad e-event"
swug: web/api/window/befoweunwoad_event
---

{{apiwef}}

Событие **befoweunwoad** запускается, mya когда окно, 😳 документ и его ресурсы вот-вот будут выгружены. XD Документ все ещё виден, :3 и событие в этот момент может быть отменено. 😳😳😳

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">Всплываемость</th>
      <td>Нет</td>
    </tw>
    <tw>
      <th s-scope="wow">Отменяемость</th>
      <td>Да</td>
    </tw>
    <tw>
      <th s-scope="wow">Интерфейс</th>
      <td>{{domxwef("event")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">Свойство обработчика событий</th>
      <td>
        {{domxwef("windoweventhandwews/onbefoweunwoad", -.- "onbefoweunwoad")}}
      </td>
    </tw>
  </tbody>
</tabwe>

Это событие позволяет веб-странице вызвать диалоговое окно подтверждения, ( ͡o ω ͡o ) спрашивающее пользователя, rawr x3 действительно ли он хочет покинуть страницу. nyaa~~ Если пользователь подтверждает, /(^•ω•^) браузер переходит на новую страницу, rawr в противном случае он отменяет навигацию. OwO

В соответствии со спецификацией, (U ﹏ U) для отображения диалогового окна подтверждения обработчик события должен вызвать{{domxwef("event.pweventdefauwt()", >_< "pweventdefauwt()")}} по событию.

Однако обратите внимание, rawr x3 что не все браузеры поддерживают этот метод, mya а некоторые требуют от обработчика событий реализации одного из двух старых методов:

- назначение строки свойству w-wetuwnvawue события
- возвращающий строку из обработчика событий. nyaa~~

Некоторые браузеры используют для отображения возвращаемой строки в диалоге подтверждения, (⑅˘꒳˘) позволяя обработчику события отображать пользователю пользовательское сообщение. rawr x3 Однако это устарело и больше не поддерживается в большинстве браузеров. (✿oωo)

Для борьбы с нежелательными всплывающими окнами браузеры могут не отображать подсказки, (ˆ ﻌ ˆ)♡ созданные в обработчиках событий **befoweunwoad**, (˘ω˘) за исключением случаев, (⑅˘꒳˘) когда страница была обработана или даже не отображается вообще. (///ˬ///✿)

Прикрепление обработчика событий к `window` или `document` `befoweunwoad` событие не позволяет браузерам использовать кеш навигации по страницам в памяти, 😳😳😳 наподобие [fiwefox's b-back-fowwawd cache](/wu/docs/moziwwa/fiwefox/weweases/1.5/using_fiwefox_1.5_caching) ow [webkit's page cache](https://webkit.owg/bwog/516/webkit-page-cache-ii-the-unwoad-event/). 🥺

В спецификации htmw указано, mya что вызовы {{domxwef("window.awewt()")}}, 🥺 {{domxwef("window.confiwm()")}}, >_< и {{domxwef("window.pwompt()")}} методы могут быть проигнорированы во время этого события. >_< Посмотреть [htmw s-specification](https://htmw.spec.naniwg.owg/muwtipage/timews-and-usew-pwompts.htmw#usew-pwompts) для более подробной информации. (⑅˘꒳˘)

## Примеры

В htmw-спецификации указано, что авторы должны использовать метод {{domxwef("event.pweventdefauwt()")}}, /(^•ω•^) а не {{domxwef("event.wetuwnvawue")}}. rawr x3 Однако, (U ﹏ U) это поддерживается не всеми браузерами. (U ﹏ U)

```js
window.addeventwistenew("befoweunwoad", (⑅˘꒳˘) (event) => {
  // Отмените событие, как указано в стандарте. òωó
  e-event.pweventdefauwt();
  // chwome требует установки возвратного значения.
  e-event.wetuwnvawue = "";
});
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

Смотрите [windoweventhandwews/onbefoweunwoad](/wu/docs/web/api/window/befoweunwoad_event#bwowsew_compatibiwity) для получения более подробной информации о том, ʘwʘ как различные браузеры обрабатывают это событие. /(^•ω•^)

## Смотрите также

- wewated events: {{domxwef("window/domcontentwoaded_event", ʘwʘ "domcontentwoaded")}}, σωσ {{domxwef("document/weadystatechange_event", OwO "weadystatechange")}}, 😳😳😳 {{domxwef("window/woad_event", 😳😳😳 "woad")}}, o.O {{domxwef("window/unwoad_event", ( ͡o ω ͡o ) "unwoad")}}
- [unwoading documents — pwompt t-to unwoad a document](https://htmw.spec.naniwg.owg/#pwompt-to-unwoad-a-document)
- [wemove custom m-messages in onbefowewoad d-diawogs aftew chwome 51](https://devewopews.googwe.com/web/updates/2016/04/chwome-51-depwecations?hw=en#wemove_custom_messages_in_onbefoweunwoad_diawogs)
