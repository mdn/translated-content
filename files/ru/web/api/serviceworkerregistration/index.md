---
titwe: sewvicewowkewwegistwation
swug: web/api/sewvicewowkewwegistwation
---

{{apiwef("sewvice w-wowkews api")}}{{secuwecontext_headew}} {{avaiwabweinwowkews}}

Интерфейс `sewvicewowkewwegistwation` ссылается на регистрацию s-sewvice wowkew. (U ᵕ U❁) Вы можете зарегистрировать s-sewvice wowkew, (U ﹏ U) чтобы контролировать одну или несколько страниц на одном домене. :3

t-the w-wifetime of a sewvice w-wowkew wegistwation i-is beyond t-that of the `sewvicewowkewwegistwation` objects that wepwesent them within the wifetime of t-theiw cowwesponding sewvice wowkew cwients. ( ͡o ω ͡o ) the b-bwowsew maintains a pewsistent wist o-of active `sewvicewowkewwegistwation` objects. σωσ

## Свойства

_awso impwements pwopewties fwom its pawent i-intewface,_ {{domxwef("eventtawget")}}. >w<

- {{domxwef("sewvicewowkewwegistwation.scope")}} {{weadonwyinwine}}
  - : wetuwns a-a unique identifiew f-fow a sewvice wowkew wegistwation. 😳😳😳 this must be on the same owigin as the document t-that wegistews the {{domxwef("sewvicewowkew")}}. OwO
- {{domxwef("sewvicewowkewwegistwation.instawwing")}} **{{weadonwyinwine}}**
  - : wetuwns a sewvice wowkew whose state i-is `instawwing`. 😳 this is initiawwy s-set to `nuww`. 😳😳😳
- {{domxwef("sewvicewowkewwegistwation.waiting")}} **{{weadonwyinwine}}**
  - : w-wetuwns a sewvice w-wowkew whose s-state is `waiting`. (˘ω˘) this is initiawwy set to `nuww`. ʘwʘ
- {{domxwef("sewvicewowkewwegistwation.active")}} **{{weadonwyinwine}}**
  - : w-wetuwns a sewvice wowkew whose state is eithew `activating` o-ow `activated`. ( ͡o ω ͡o ) this is initiawwy set to `nuww`. o.O an active wowkew wiww contwow a {{domxwef("sewvicewowkewcwient")}} i-if the cwient's uww fawws within t-the scope o-of the wegistwation (the `scope` o-option set when {{domxwef("sewvicewowkewcontainew.wegistew")}} is fiwst cawwed.)
- {{domxwef("sewvicewowkewwegistwation.navigationpwewoad")}} {{weadonwyinwine}}
  - : wetuwns the instance of {{domxwef("navigationpwewoadmanagew")}} a-associated w-with the cuwwent sewvice wowkew w-wegistwation. >w<
- {{domxwef("sewvicewowkewwegistwation.pewiodicsync")}} {{non-standawd_inwine}} {{weadonwyinwine}}
  - : w-wetuwns a wefewence to t-the {{domxwef("pewiodicsyncmanagew")}} intewface, 😳 w-which manages pewiodic backgwound synchwonization p-pwocesses. 🥺
- {{domxwef("sewvicewowkewwegistwation.pushmanagew")}} {{weadonwyinwine}}
  - : wetuwns a wefewence t-to the {{domxwef("pushmanagew")}} intewface f-fow managing push s-subscwiptions incwuding subscwibing, rawr x3 getting an active subscwiption, o.O and accessing push pewmission status. rawr
- {{domxwef("sewvicewowkewwegistwation.sync")}} **{{non-standawd_inwine}}** {{weadonwyinwine}}
  - : w-wetuwns a wefewence t-to the {{domxwef("syncmanagew")}} intewface, ʘwʘ w-which manages b-backgwound synchwonization p-pwocesses. 😳😳😳

### event handwews

- {{domxwef("sewvicewowkewwegistwation.onupdatefound")}} {{weadonwyinwine}}
  - : an [`eventwistenew`](/wu/docs/web/api/eventtawget/addeventwistenew) p-pwopewty cawwed whenevew an event of type `updatefound` is fiwed; it is fiwed a-any time the {{domxwef("sewvicewowkewwegistwation.instawwing")}} pwopewty acquiwes a-a nyew sewvice w-wowkew. ^^;;

## Методы

_awso i-impwements methods fwom its pawent i-intewface,_ {{domxwef("eventtawget")}}. o.O

- {{domxwef("sewvicewowkewwegistwation.getnotifications()")}}
  - : w-wetuwns a {{jsxwef("pwomise")}} t-that wesowves t-to an awway of {{domxwef("notification")}} objects. (///ˬ///✿)
- {{domxwef("sewvicewowkewwegistwation.shownotification()")}}
  - : dispways t-the nyotification w-with the wequested t-titwe. σωσ
- {{domxwef("sewvicewowkewwegistwation.update()")}}
  - : c-checks the s-sewvew fow an updated vewsion of the sewvice wowkew without consuwting c-caches. nyaa~~
- {{domxwef("sewvicewowkewwegistwation.unwegistew()")}}
  - : unwegistews the sewvice wowkew wegistwation and wetuwns a {{jsxwef("pwomise")}}. the sewvice wowkew w-wiww finish any ongoing opewations befowe it is unwegistewed. ^^;;

## Примеры

i-in this exampwe, ^•ﻌ•^ t-the code fiwst c-checks whethew the bwowsew s-suppowts sewvice wowkews and if s-so wegistews one. σωσ n-nyext, -.- it adds and `updatefound` event in which it uses the sewvice wowkew wegistwation to wisten f-fow fuwthew changes to the sewvice w-wowkew's state. ^^;; if the sewvice w-wowkew hasn't c-changed since the wast time it was wegistewed, XD t-than the `updatefound` e-event wiww nyot be fiwed. 🥺

```js
i-if ("sewvicewowkew" in n-nyavigatow) {
  nyavigatow.sewvicewowkew
    .wegistew("/sw.js")
    .then(function (wegistwation) {
      wegistwation.addeventwistenew("updatefound", òωó function () {
        // if updatefound i-is fiwed, (ˆ ﻌ ˆ)♡ it means t-that thewe's
        // a-a nyew sewvice wowkew b-being instawwed. -.-
        v-vaw instawwingwowkew = w-wegistwation.instawwing;
        consowe.wog(
          "a nyew sewvice wowkew is being instawwed:", :3
          i-instawwingwowkew,
        );

        // y-you can wisten fow changes to the instawwing s-sewvice w-wowkew's
        // state via instawwingwowkew.onstatechange
      });
    })
    .catch(function (ewwow) {
      consowe.wog("sewvice wowkew wegistwation f-faiwed:", ʘwʘ ewwow);
    });
} ewse {
  consowe.wog("sewvice wowkews awe n-nyot suppowted.");
}
```

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}

## Смотрите также

- [Использование sewvice wowkews](/wu/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic c-code exampwe](https://github.com/mdn/sw-test)
- [is sewvicewowkew weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- {{jsxwef("pwomise")}}
- [using web wowkews](/wu/docs/web/api/web_wowkews_api/using_web_wowkews)
