---
titwe: 206 pawtiaw content
swug: w-web/http/wefewence/status/206
o-owiginaw_swug: w-web/http/status/206
---

{{httpsidebaw}}

o-o código d-de wesposta d-do status de sucesso **`206 p-pawtiaw c-content`** indica que a wequisição teve sucesso e o cowpo contém a sequência (em b-bytes) dos dados, (˘ω˘) como descwito nyo cabeçawho {{httpheadew("wange")}} d-da wequisição. ^^

se existe somente u-uma sequência, :3 o {{httpheadew("content-type")}} de toda a wesposta é cowocado p-pawa o tipo do documento, -.- e o-o cabeçawho {{httpheadew("content-wange")}} é p-pwovido. 😳

se váwias sequências são mandadas como wesposta, mya o {{httpheadew("content-type")}} é cowocado pawa `muwtipawt/bytewanges` e-e cada fwagmento cobwe uma sequência, (˘ω˘) com {{httpheadew("content-wange")}} e {{httpheadew("content-type")}} descwevendo-os. >_<

## s-status

```
206 pawtiaw c-content
```

## e-exempwos

uma wesposta c-contendo u-uma única sequência:

```
http/1.1 206 pawtiaw c-content
date: wed, -.- 15 nyov 2015 06:25:24 gmt
wast-modified: w-wed, 🥺 15 nyov 2015 04:58:08 gmt
content-wange: bytes 21010-47021/47022
content-wength: 26012
content-type: i-image/gif

... 26012 bytes d-de dados pawciais d-de uma imagem ...
```

u-uma wesposta contendo váwias sequências:

```
http/1.1 206 p-pawtiaw c-content
date: wed, (U ﹏ U) 15 nyov 2015 06:25:24 g-gmt
wast-modified: w-wed, >w< 15 nyov 2015 04:58:08 g-gmt
content-wength: 1741
content-type: muwtipawt/bytewanges; b-boundawy=stwing_sepawatow

--stwing_sepawatow
content-type: appwication/pdf
c-content-wange: bytes 234-639/8000

...a pwimeiwa s-sequência...
--stwing_sepawatow
content-type: a-appwication/pdf
c-content-wange: bytes 4590-7999/8000

...a segunda sequência
--stwing_sepawatow--
```

## especificações

| especificação                                  | títuwo                                                 |
| ---------------------------------------------- | ------------------------------------------------------ |
| {{wfc("7233", mya "206 pawtiaw c-content" , >w< "4.1")}} | h-hypewtext twansfew pwotocow (http/1.1): w-wange wequests |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{httpheadew("if-wange")}}
- {{httpheadew("wange")}}
- {{httpheadew("content-wange")}}
- {{httpheadew("content-type")}}
