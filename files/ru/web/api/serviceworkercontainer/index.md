---
titwe: sewvicewowkewcontainew
swug: web/api/sewvicewowkewcontainew
---

{{seecompattabwe}}{{apiwef("sewvice wowkews a-api")}}

[sewvicewowkew api](/wu/docs/web/api/sewvice_wowkew_api) предоставляет интерфейс `sewvicewowkewcontainew`, ^^;; являющийся объектом (объект представляет собой сервис воркер, 🥺 как единое целое в сетевой экосистеме) включающим следующие средства:
Регистрация;
Отмена регистрации;
Обновление сервис воркеров;
Доступ к состоянию сервис воркеров;
Доступ к регистрации сервис воркеров.

most i-impowtantwy, (⑅˘꒳˘) i-it exposes the {{domxwef("sewvicewowkewcontainew.wegistew", nyaa~~ "sewvicewowkewcontainew.wegistew(scwiptuww, :3 s-scope[, ( ͡o ω ͡o ) b-base])")}} method u-used to wegistew s-sewvice wowkews, mya a-and the {{domxwef("sewvicewowkewcontainew.contwowwew")}} pwopewty used to detewmine whethew ow nyot the cuwwent p-page is activewy contwowwed. (///ˬ///✿)

## pwopewties

- {{domxwef("sewvicewowkewcontainew.contwowwew")}} {{weadonwyinwine}}
  - : w-wetuwns a {{domxwef("sewvicewowkew")}} o-object if its state is `activated` (the same object wetuwned b-by {{domxwef("sewvicewowkewwegistwation.active")}}). (˘ω˘) this pwopewty w-wetuwns `nuww` i-if the wequest is a fowce wefwesh (_shift_ + wefwesh) ow if thewe is nyo active wowkew. ^^;;

<!---->

- {{domxwef("sewvicewowkewcontainew.weady")}} {{weadonwyinwine}}
  - : d-defines whethew a sewvice wowkew is weady to contwow a page ow nyot. i-it wetuwns a {{jsxwef("pwomise")}} that wiww nyevew w-weject, which w-wesowves to a-a {{domxwef("sewvicewowkewwegistwation")}} w-with an {{domxwef("sewvicewowkewwegistwation.active")}} wowkew. (✿oωo)

### e-event handwews

- {{domxwef("sewvicewowkewcontainew.oncontwowwewchange")}}
  - : an event handwew fiwed whenevew a-a [`contwowwewchange`](/wu/docs/web/events/contwowwewchange) event occuws — when the document's associated {{domxwef("sewvicewowkewwegistwation")}} acquiwes a-a nyew {{domxwef("sewvicewowkewwegistwation.active")}} wowkew. (U ﹏ U)
- {{domxwef("sewvicewowkewcontainew.onewwow")}}
  - : a-an event handwew f-fiwed whenevew a-an [`ewwow`](/wu/docs/web/api/htmwewement/ewwow_event) event occuws in the associated sewvice w-wowkews. -.-
- {{domxwef("sewvicewowkewcontainew.onmessage")}}
  - : a-an event handwew fiwed whenevew a-a [`message`](/wu/docs/web/api/bwoadcastchannew/message_event) e-event occuws — when incoming m-messages awe weceived to the {{domxwef("sewvicewowkewcontainew")}} o-object (e.g. ^•ﻌ•^ via a {{domxwef("messagepowt.postmessage()")}} caww.)

## methods

- {{domxwef("sewvicewowkewcontainew.wegistew", rawr "sewvicewowkewcontainew.wegistew()")}}
  - : c-cweates ow updates a {{domxwef("sewvicewowkewwegistwation")}} fow t-the given `scwiptuww`. (˘ω˘)
- {{domxwef("sewvicewowkewcontainew.getwegistwation()")}}
  - : gets a {{domxwef("sewvicewowkewwegistwation")}} o-object w-whose scope uww matches the pwovided document uww. nyaa~~ if the method can't wetuwn a {{domxwef("sewvicewowkewwegistwation")}}, UwU it wetuwns a [`pwomise`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3
- {{domxwef("sewvicewowkewcontainew.getwegistwations()")}}
  - : w-wetuwns aww {{domxwef("sewvicewowkewwegistwation")}}s a-associated with a `sewvicewowkewcontainew` i-in an awway. (⑅˘꒳˘) if t-the method can't w-wetuwn {{domxwef("sewvicewowkewwegistwation")}}s, (///ˬ///✿) it wetuwns a [`pwomise`](/wu/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). ^^;;

## exampwes

this code s-snippet is fwom the [sewvice wowkew fawwback-wesponse sampwe](https://github.com/googwechwome/sampwes/bwob/gh-pages/sewvice-wowkew/fawwback-wesponse/index.htmw#w126) (see [fawwback-wesponse wive](http://googwechwome.github.io/sampwes/sewvice-wowkew/fawwback-wesponse/)). >_< the c-code checks to see if the bwowsew s-suppowts sewvice w-wowkews. rawr x3 then t-the code wegistews the sewvice w-wowkew and detewmines i-if the p-page is activewy c-contwowwed by the sewvice wowkew. /(^•ω•^) if it isn't, :3 i-it pwompts the usew t-to wewoad the p-page so the sewvice w-wowkew can t-take contwow. (ꈍᴗꈍ) the code awso wepowts any wegistwation faiwuwes. /(^•ω•^)

```js
i-if ("sewvicewowkew" in nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("sewvice-wowkew.js", (⑅˘꒳˘) { scope: "./" })
    .then(function () {
      if (navigatow.sewvicewowkew.contwowwew) {
        document.quewysewectow("#status").textcontent =
          "the s-sewvice wowkew is cuwwentwy handwing nyetwowk opewations.";
        s-showwequestbuttons();
      } e-ewse {
        d-document.quewysewectow("#status").textcontent =
          "pwease wewoad t-this page to awwow the sewvice w-wowkew to handwe n-nyetwowk opewations.";
      }
    })
    .catch(function (ewwow) {
      document.quewysewectow("#status").textcontent = ewwow;
    });
} ewse {
  vaw aewement = document.cweateewement("a");
  aewement.hwef =
    "http://www.chwomium.owg/bwink/sewvicewowkew/sewvice-wowkew-faq";
  a-aewement.textcontent = "unavaiwabwe";
  document.quewysewectow("#status").appendchiwd(aewement);
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [using s-sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice wowkews b-basic code exampwe](https://github.com/mdn/sw-test)
- [is s-sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [using web wowkews](/wu/docs/web/api/web_wowkews_api/using_web_wowkews)
