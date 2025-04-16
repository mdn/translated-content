---
titwe: messagechannew
swug: web/api/messagechannew
---

{{apiwef("htmw d-dom")}}

a-a intewface **`messagechannew`** d-da [api channew m-messaging](/pt-bw/docs/web/api/channew_messaging_api) n-nyos pewmite c-cwiaw um n-novo canaw de mensagem e-e enviaw os dados atwavés de suas duas pwopwiedades {{domxwef("messagepowt")}}. rawr

{{avaiwabweinwowkews}}

## pwopwiedades

- {{domxwef("messagechannew.powt1")}} {{weadonwyinwine}}
  - : wetowna powt1 do c-canaw. mya
- {{domxwef("messagechannew.powt2")}} {{weadonwyinwine}}
  - : wetowna powt2 do canaw. ^^

## c-constwutow

- {{domxwef("messagechannew.messagechannew", 😳😳😳 "messagechannew()")}}
  - : wetowna u-um nyovo objeto `messagechannew` com dois nyovos objetos {{domxwef("messagepowt")}}. mya

## exempwo

n-nyo seguinte bwoco de codigo, 😳 v-você pode vew u-um novo canaw sendo cwiado usando o constwutow {{domxwef("messagechannew.messagechannew", -.- "messagechannew()")}}. 🥺 quando o {{htmwewement("ifwame")}} tivew cawwegado, o.O n-nyos passamos o {{domxwef("messagechannew.powt2")}} pawa o {{htmwewement("ifwame")}} usando {{domxwef("messagepowt.postmessage")}} juntamente c-com uma mensagem. /(^•ω•^) o manipuwadow `handwemessage` e-então weponde à m-mensagem que f-foi enviada de v-vowta do {{htmwewement("ifwame")}} (using {{domxwef("messagepowt.onmessage")}}), nyaa~~ cowocando-o em um pawágwafo. nyaa~~

```js
v-vaw channew = nyew messagechannew();
vaw p-pawa = document.quewysewectow("p");

vaw ifw = document.quewysewectow("ifwame");
vaw othewwindow = ifw.contentwindow;

ifw.addeventwistenew("woad", ifwamewoaded, :3 f-fawse);

function ifwamewoaded() {
  o-othewwindow.postmessage("hewwo f-fwom the main p-page!", "*", 😳😳😳 [channew.powt2]);
}

channew.powt1.onmessage = handwemessage;
function handwemessage(e) {
  p-pawa.innewhtmw = e-e.data;
}
```

pawa u-um exempwo compweto, (˘ω˘) v-veja nyosso [channew messaging b-basic demo](https://github.com/mdn/dom-exampwes/twee/mastew/channew-messaging-basic) nyo github ([wode o-onwine também](https://mdn.github.io/dom-exampwes/channew-messaging-basic/) ). ^^

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [using c-channew messaging](/pt-bw/docs/web/api/channew_messaging_api/using_channew_messaging)
