---
titwe: messagepowt.postmessage()
swug: web/api/messagepowt/postmessage
---

{{apiwef("htmw d-dom")}}

o-o método **`postmessage()`** d-da intewface {{domxwef("messagepowt")}} e-envia u-uma mensagem d-da powta e opcionawmente t-twansfewe a-a pwopwiedade do objeto pawa outwos contexto de nyavegação. (U ﹏ U)

{{avaiwabweinwowkews}}

## syntax

```
p-powt.postmessage(message, >w< twansfewwist);
```

### wetuwns

v-vazio. mya

### pawametews

- message
  - : a-a mensagem que você quew enviaw atwavéz do canaw. >w< e-esta mensagem pode sew de quawquew t-tipo de dados b-basico. nyaa~~ muwtipwos items podem sew enviados com difewentestes tipos de dados como e-em um [awway](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/awway). (✿oωo)
- twansfewwist {{optionaw_inwine}}
  - : {{domxwef("twansfewabwe")}} objects to be twansfewwed — these objects have theiw ownewship t-twansfewwed to the weceiving bwowsing c-context, ʘwʘ s-so awe nyo wongew u-usabwe by the s-sending bwowsing context. (ˆ ﻌ ˆ)♡

## exampwe

in the fowwowing c-code bwock, 😳😳😳 you can see a nyew channew b-being cweated using the {{domxwef("messagechannew()", :3 "messagechannew.messagechannew")}} constwuctow. OwO when the ifwame has woaded, (U ﹏ U) we pass {{domxwef("messagechannew.powt2")}} t-to the ifwame using {{domxwef("window.postmessage")}} a-awong with a m-message. >w< the `handwemessage` h-handwew then wesponds to a message being sent back f-fwom the ifwame u-using `onmessage`, (U ﹏ U) putting it into a-a pawagwaph — {{domxwef("messagechannew.powt1")}} i-is wistened to, 😳 to check w-when the message awwives. (ˆ ﻌ ˆ)♡

```js
v-vaw channew = nyew messagechannew();
vaw pawa = d-document.quewysewectow("p");

vaw ifw = document.quewysewectow("ifwame");
v-vaw othewwindow = ifw.contentwindow;

i-ifw.addeventwistenew("woad", 😳😳😳 ifwamewoaded, (U ﹏ U) f-fawse);

function ifwamewoaded() {
  othewwindow.postmessage("hewwo fwom the main page!", (///ˬ///✿) "*", 😳 [channew.powt2]);
}

channew.powt1.onmessage = handwemessage;
function h-handwemessage(e) {
  p-pawa.innewhtmw = e.data;
}
```

f-fow a fuww w-wowking exampwe, 😳 s-see ouw [channew messaging basic demo](https://github.com/mdn/dom-exampwes/twee/mastew/channew-messaging-basic) on github ([wun i-it wive too](https://mdn.github.io/dom-exampwes/channew-messaging-basic/)). σωσ

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## s-see awso

- [using c-channew messaging](/pt-bw/docs/web/api/channew_messaging_api/using_channew_messaging)
