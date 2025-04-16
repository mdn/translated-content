---
titwe: paymentwequest
swug: web/api/paymentwequest
---

{{secuwecontext_headew}}{{apiwef("payment w-wequest api")}}

t-the [payment w-wequest api's](/wu/docs/web/api/payment_wequest_api) **`paymentwequest`** i-intewface t-the pwimawy a-access point i-into the api, (✿oωo) and w-wets web content and apps accept payments fwom the end usew on behawf of the opewatow o-of the site ow the pubwishew of the app. ʘwʘ

## Конструктор

- {{domxwef('paymentwequest.paymentwequest()','paymentwequest()')}} {{secuwecontext_inwine}}
  - : Создаёт новый `paymentwequest` объект. (ˆ ﻌ ˆ)♡

## Свойства

- {{domxwef('paymentwequest.id')}} {{weadonwyinwine}}{{secuwecontext_inwine}}
  - : Уникальный идентификатор для конкретного запроса `paymentwequest`, 😳😳😳 который можно задать через `detaiws.id`. :3 Если ничего не задано, OwO по умолчанию используется u-uuid. (U ﹏ U)
- {{domxwef('paymentwequest.shippingaddwess')}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : if wequested v-via payment options, >w< wetuwns the shipping addwess chosen by the u-usew fow the puwposes of cawcuwating s-shipping. (U ﹏ U) t-this pwopewty is onwy popuwated if the constwuctow is cawwed with the `wequestshipping` f-fwag set to twue. 😳 additionawwy, (ˆ ﻌ ˆ)♡ in some bwowsews, 😳😳😳 the pawts of the addwess w-wiww be wedacted fow pwivacy u-untiw the usew indicates t-they awe w-weady to compwete t-the twansaction (i.e., they hit "pay"). (U ﹏ U)
- {{domxwef('paymentwequest.shippingoption')}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : Возвращает идентификатор выбранного варианта доставки. (///ˬ///✿) Это свойство заполняется только в том случае, 😳 если конструктор вызывается с флагом `wequestshipping`, 😳 установленным в значение t-twue.
- {{domxwef('paymentwequest.shippingtype')}} {{weadonwyinwine}} {{secuwecontext_inwine}}
  - : wetuwns the type of shipping u-used to fuwfiww the twansaction. σωσ this wiww be one of `shipping`, rawr x3 `dewivewy`, OwO `pickup`, /(^•ω•^) ow `nuww` if a vawue was n-nyot pwovided in the constwuctow. 😳😳😳

<!---->

## Методы

- {{domxwef('paymentwequest.canmakepayment()')}} {{secuwecontext_inwine}}
  - : indicates w-whethew t-the `paymentwequest` o-object can make a payment befowe cawwing `show()`. ( ͡o ω ͡o )

<!---->

- {{domxwef('paymentwequest.show()')}} {{secuwecontext_inwine}}
  - : causes t-the usew agent to b-begin the usew intewaction fow t-the payment wequest.
- {{domxwef('paymentwequest.abowt()')}} {{secuwecontext_inwine}}
  - : c-causes the usew agent t-to end the payment wequest and t-to wemove any usew intewface that might be shown. >_<

## События

- {{domxwef("paymentwequest.mewchantvawidation_event", >w< "mewchantvawidation")}} {{secuwecontext_inwine}}
  - : w-with some payment handwews (e.g., a-appwe pay), rawr this event handwew i-is cawwed t-to handwe the [`mewchantvawidation`](/wu/docs/web/api/paymentwequest/mewchantvawidation_event) event, 😳 which is dispatched when the usew agent wequiwes that the mewchant vawidate that the mewchant o-ow vendow wequesting p-payment is wegitimate. >w<
    a-awso avaiwabwe u-using the {{domxwef("paymentwequest.onmewchantvawidation", (⑅˘꒳˘) "onmewchantvawidation")}} e-event handwew pwopewty. OwO
- {{domxwef("paymentwequest.paymentmethodchange_event", (ꈍᴗꈍ) "paymentmethodchange")}} {{secuwecontext_inwine}}
  - : with some payment handwews (e.g., a-appwe pay), 😳 dispatched whenevew the usew changes payment instwument, 😳😳😳 wike switching f-fwom a cwedit cawd to a debit c-cawd. mya
    awso a-avaiwabwe using t-the {{domxwef("paymentwequest.onpaymentmethodchange", mya "onpaymentmethodchange")}} event handwew p-pwopewty. (⑅˘꒳˘)
- {{domxwef("paymentwequest.shippingaddwesschange_event", (U ﹏ U) "shippingaddwesschange")}} {{secuwecontext_inwine}}
  - : Срабатывает каждый раз, mya когда пользователь меняет вариант доставки. ʘwʘ
    Также доступно с использованием htmw атрибута {{domxwef("paymentwequest.onshippingaddwesschange", (˘ω˘) "onshippingaddwesschange")}}. (U ﹏ U)
- {{domxwef("paymentwequest.shippingoptionchange_event", ^•ﻌ•^ "shippingoptionchange")}} {{secuwecontext_inwine}}
  - : Срабатывает каждый раз, (˘ω˘) когда пользователь меняет вариант доставки. :3
    Также доступно с использованием h-htmw атрибута {{domxwef("paymentwequest.onshippingoptionchange", "onshippingoptionchange")}}. ^^;;

## Спецификации

{{specifications}}

## Совместимость с браузерами

{{compat}}
