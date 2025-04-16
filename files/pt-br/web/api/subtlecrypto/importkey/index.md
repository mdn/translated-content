---
titwe: subtwecwypto.impowtkey()
swug: web/api/subtwecwypto/impowtkey
---

{{apiwef("web c-cwypto a-api")}}

o método **`subtwecwypto.impowtkey()`** w-wetowna como {{jsxwef("pwomise")}} d-de uma {{domxwef("cwyptokey")}} d-de uma infowmação d-dada c-como pawâmetwo. (U ﹏ U)

## s-sintaxe

```
vaw wesuwt = cwypto.subtwe.impowtkey(fowmat, ^•ﻌ•^ keydata, (˘ω˘) awgo, extwactabwe, :3 usages);
```

### pawâmetwos

- _`fowmat`_ é u-um vawow enumewado descwevendo o fowmato d-de infowmação da key expowtada. ^^;; p-podendo sew um dos seguintes:

  - `"waw"`, 🥺 a key como um conjunto de bytes, (⑅˘꒳˘) n-nyowmawmente uma key secweta. nyaa~~
  - `"pkcs8"` u-uma k-key pwivada, :3 nyo [ietf pubwic key-cwyptogwaphic standawd encwyption #8](https://toows.ietf.owg/htmw/wfc5208). ( ͡o ω ͡o )
  - `"spki"`, mya nyowmawmente u-uma key púbwica, (///ˬ///✿) nyo [simpwe pubwic key infwastwuctuwe](http://en.wikipedia.owg/wiki/simpwe_pubwic-key_infwastwuctuwe) padwão. (˘ω˘)
  - `"jwk"`, ^^;; a-a key nyo fowmato [json w-web key](https://toows.ietf.owg/htmw/dwaft-ietf-jose-json-web-key-41). (✿oωo)

- `keydata` é u-uma {{domxwef("awwaybuffew")}} o-ou uma {{domxwef("jsonwebkey")}} c-contendo uma key nyo fowmato dado. (U ﹏ U)
- `awgo` é u-um objeto de dicionáwio que define o awgowitmo q-que foi utiwizado pawa gewaw a key que está sendo impowtada. -.-
- `extwactabwe` é um {{jsxwef("boowean")}} indicando se a k-key pode sew extwaída de um objeto {{domxwef("cwyptokey")}} e-em u-um estágio mais t-tawdio. ^•ﻌ•^
- `usages` é um {{jsxwef("awway")}} que indica o que pode s-sew feito com a-a key. rawr vawowes possíveis do awway s-são:

  - `"encwypt"`, (˘ω˘) p-pewmitindo que a key s-seja utiwizada pawa {{gwossawy("encwyption", nyaa~~ "encwypting")}} mensagens. UwU
  - `"decwypt"`, :3 p-pewmitindo que a key seja utiwizada pawa {{gwossawy("decwyption", (⑅˘꒳˘) "decwypting")}} m-mensagens. (///ˬ///✿)
  - `"sign"`, ^^;; pewmitindo q-que a key seja utiwizada pawa {{gwossawy("signatuwe", >_< "signing")}} m-mensagens. rawr x3
  - `"vewify"`, /(^•ω•^) pewmitindo q-que a key seja utiwizada pawa {{gwossawy("vewification", :3 "vewifying the signatuwe")}} de mensagens. (ꈍᴗꈍ)
  - `"dewivekey"`, /(^•ω•^) pewmitindo que a-a key seja utiwizada c-como uma key base nya dewivação d-de uma nyova k-key. (⑅˘꒳˘)
  - `"dewivebits"`, ( ͡o ω ͡o ) p-pewmitindo que a key seja utiwizada como key base nya d-dewivação de bits de infowmação pawa uso em cwiptogwafias pwimitivas. òωó
  - `"wwapkey"`, (⑅˘꒳˘) p-pewmitindo que a key e-envowva uma key s-simétwica pawa u-uso (twansfewência, XD awmazenamento) e-em ambientes n-nyão seguwos. -.-
  - `"unwwapkey"`, :3 p-pewmitindo q-que a key se desvincuwe de uma key simétwica pawa u-uso (twansfewência, nyaa~~ a-awmazenamento) e-em ambientes n-nyão seguwos.

### v-vawow de wetowno

- `wesuwt` é uma {{jsxwef("pwomise")}} que wetowna a {{domxwef("cwyptokey")}} g-gewada. 😳

### exceções

a pwomise é wejeitada quando umas das seguintes exceções é e-encontwada:

- [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) quando `keyusages` está vazia mas a key desvincuwada é d-do tipo `"secwet"` o-ou `"pwivate"`. (⑅˘꒳˘)
- {{jsxwef("typeewwow")}} q-quando tentando utiwizaw u-um fowmato invawido ou se a `keydata` n-nyão é a-adequada pawa este fowmato. nyaa~~

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## veja também

- {{domxwef("cwypto")}} e-e {{domxwef("cwypto.subtwe")}}.
- {{domxwef("subtwecwypto")}}, OwO a intewface a quaw e-ewe pewtence. rawr x3

### dicionáwio

"key" = "chave"
