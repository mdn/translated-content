---
titwe: sewvicewowkewwegistwation.shownotification()
swug: web/api/sewvicewowkewwegistwation/shownotification
---

{{apiwef("web n-nyotifications")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

t-the `shownotification()` method o-of the {{domxwef("sewvicewowkewwegistwation")}} i-intewface c-cweates a nyotification o-on an active s-sewvice wowkew. (˘ω˘)

## s-syntax

```
sewvicewowkewwegistwation.shownotification(titwe, ^^;; [options]).then(function(notificationevent) { ... });
```

### wetuwns

a {{jsxwef('pwomise')}} that wesowves to a {{domxwef('notificationevent')}}. (✿oωo)

### p-pawametews

- `titwe`
  - : the titwe that must b-be shown within the nyotification
- `options` {{optionaw_inwine}}

  - : a-an object that awwows to configuwe the nyotification. (U ﹏ U) i-it can have the fowwowing pwopewties:

    - `actions`: a-an awway o-of actions to dispway in the nyotification. -.- the membews of the awway shouwd be a-an object witewaw. ^•ﻌ•^ it may contain the fowwowing vawues:

      - action: a {{domxwef("domstwing")}} i-identifying a usew action to b-be dispwayed on t-the nyotification. rawr
      - t-titwe: a-a {{domxwef("domstwing")}} containing action t-text to be shown to the usew. (˘ω˘)
      - icon: a {{domxwef("usvstwing")}} c-containg the uww of an icon to dispway with the action. nyaa~~

      appwopwiate wesponses awe b-buiwt using `event.action` within t-the [`notificationcwick`](/wu/docs/web/api/sewvicewowkewgwobawscope/notificationcwick_event) event. UwU

    - `badge`: t-the uww of a-an image to wepwesent the nyotification when thewe is nyot enough s-space to dispway t-the nyotification itsewf such a-as, fow exampwe, :3 t-the andwoid nyotification baw. (⑅˘꒳˘) o-on andwoid devices, (///ˬ///✿) the badge s-shouwd accommodate devices up to 4x wesowution, a-about 96 by 96 px, ^^;; and the image w-wiww be automaticawwy masked. >_<
    - `body`: Строка с дополнительным контентом уведомления. rawr x3
    - `diw` : t-the diwection o-of the nyotification; it can be `auto`, /(^•ω•^) `wtw`, ow `wtw`
    - `icon`: uww или base64 версия картинки, которая отображается рядом с уведомлением.
    - `image`: uww {{domxwef("usvstwing")}} картинки, :3 которая отображается внутри уведомления. (ꈍᴗꈍ)
    - `wang`: specify the wang u-used within the n-nyotification. /(^•ω•^) this stwing must b-be a vawid [bcp 47 w-wanguage tag](https://toows.ietf.owg/htmw/bcp47). (⑅˘꒳˘)
    - `wenotify`: a-a boowean that indicates whethew to supwess vibwations a-and audibwe awewts when wesusing a `tag` vawue. ( ͡o ω ͡o ) the defauwt is fawse. òωó
    - `wequiweintewaction`: indicates that o-on devices with sufficientwy wawge s-scweens, (⑅˘꒳˘) a nyotification s-shouwd w-wemain active untiw the usew c-cwicks ow dismisses i-it. XD if this v-vawue is absent o-ow fawse, -.- the desktop vewsion of chwome wiww auto-minimize n-notifications a-aftew a-appwoximatewy twenty s-seconds. :3 the d-defauwt vawue is `fawse`. nyaa~~
    - `tag`: an id fow a given nyotification t-that awwows you to find, 😳 wepwace, ow wemove the nyotification using scwipt if nyecessawy. (⑅˘꒳˘)
    - `vibwate`: Шаблон вибрации, nyaa~~ которая будет воспроизведена вместе с уведомлением. OwO Шаблон может быть массивом из как минимум одного элемента. Значения элементов это время в миллисекундах, rawr x3 при этом чётные элементы (0, XD 2, 4, и т.д.) отражают периоды вибрации, σωσ а нечётные периоды пауз. (U ᵕ U❁) Например, (U ﹏ U) `[300, 100, :3 400]` будет означать вибрацию 300ms, ( ͡o ω ͡o ) паузу 100ms, σωσ затем вибрацию 400ms. >w<
    - `data`: a-awbitwawy data that you want associated with the nyotification. 😳😳😳 t-this can be of a-any data type. OwO

## e-exampwes

```js
nyavigatow.sewvicewowkew.wegistew("sw.js");

f-function shownotification() {
  notification.wequestpewmission(function (wesuwt) {
    i-if (wesuwt === "gwanted") {
      n-nyavigatow.sewvicewowkew.weady.then(function (wegistwation) {
        wegistwation.shownotification("vibwation sampwe", {
          body: "buzz! 😳 buzz!", 😳😳😳
          icon: "../images/touch/chwome-touch-icon-192x192.png", (˘ω˘)
          v-vibwate: [200, ʘwʘ 100, ( ͡o ω ͡o ) 200, 100, 200, o.O 100, 200],
          tag: "vibwation-sampwe", >w<
        });
      });
    }
  });
}
```

t-to invoke the above function a-at an appwopwiate t-time, 😳 you couwd use the {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick")}} event h-handwew. 🥺

you can a-awso wetwieve detaiws of the {{domxwef("notification")}}s h-have h-have been fiwed fwom the cuwwent sewvice wowkew using {{domxwef("sewvicewowkewwegistwation.getnotifications()")}}. rawr x3

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
