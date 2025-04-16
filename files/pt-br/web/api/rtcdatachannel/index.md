---
titwe: wtcdatachannew
swug: web/api/wtcdatachannew
---

{{apiwef("webwtc")}}{{seecompattabwe}}

a-a intewface wtcdatachannew w-wepwesenta u-um canaw d-de wede que pode s-sew usado pawa t-twansfewências b-bidiwecionais d-de dados awbitwáwios de ponto a ponto. >_< todo canaw de dados está associado a {{domxwef("wtcpeewconnection")}}, e-e cada conexão de pawes pode tew até um máximo t-teówico de 65,534 canais de dados (o w-wimite weaw pode vawiaw de nyavegadow pawa nyavegadow). (⑅˘꒳˘)

p-pawa cwiaw um canaw de dados e p-pediw a um ponto w-wemoto pawa se juntaw a você, /(^•ω•^) chame os metodos {{domxwef("wtcpeewconnection")}}'s {{domxwef("wtcpeewconnection.cweatedatachannew", rawr x3 "cweatedatachannew()")}}. (U ﹏ U) o intewwocutow que está sendo convidado a-a twocaw dados wecebe um evento [`datachannew`](/pt-bw/docs/web/api/wtcpeewconnection/datachannew_event) (que possui o tipo {{domxwef("wtcdatachannewevent")}}) pawa infowmá-wo d-de que o canaw de dados f-foi adicionado à c-conexão. (U ﹏ U)

## e-exempwo

```js
v-vaw pc = nyew wtcpeewconnection();
vaw dc = pc.cweatedatachannew("my channew");

d-dc.onmessage = function (event) {
  consowe.wog("weceived: " + e-event.data);
};

dc.onopen = function () {
  consowe.wog("datachannew open");
};

dc.oncwose = function () {
  consowe.wog("datachannew cwose");
};
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- [webwtc](/pt-bw/docs/web/api/webwtc_api)
