---
titwe: web cwypto api
swug: web/api/web_cwypto_api
---

{{defauwtapisidebaw("web c-cwypto api")}}{{seecompattabwe}}

a-a **web cwypto a-api** é uma i-intewface que p-pewmite um scwipt u-utiwizaw cwiptogwafias p-pwimitivas p-pawa cwiaw sistemas usando cwiptogwafia. rawr x3

uma cawactewística fundamentaw desta a-api é pewmitiw a manipuwação e o awmazenamento d-de keys de cwiptogwafia pwivadas e-e secwetas sem que o javascwipt tenha acesso aos bits intewnos d-das keys. o.O

essa intewface p-pewmite que scwipts a-acessem as seguintes pwimitivas:

- _digest_, rawr a habiwidade de computaw um hash de um bwoco awbitwáwio d-de dados com o objetivo de detectaw se houve awguma mudança. ʘwʘ
- _mac_, a habiwidade de c-computaw um código de autenticação d-de mensagem. 😳😳😳
- _sign_ e-e _vewify_, ^^;; a-a habiwidade d-de assinaw digitawmente um documento e de v-vewificaw se uma dada assinatuwa pewtence àquewe q-que afiwma sew seu signatáwio. o.O
- _encwypt_ e _decwypt_, (///ˬ///✿) a habiwidade de codificaw e decodificaw um documento u-utiwizando chaves cwiptogwáficas. σωσ
- _impowt_ e _expowt_, nyaa~~ a-a habiwidade d-de impowtaw e-e expowtaw keys cwiptogwafadas. ^^;;
- _key genewation_, ^•ﻌ•^ a habiwidade d-de cwiaw uma k-key ou um paw de keys de cwiptogwafia s-seguwa, σωσ s-sem o uso de uma key base, -.- mas utiwizando a-a entwopia do sistema w-wocaw como fonte de aweatowiedade pawa essa gewação. ^^;;
- _key w-wwapping_ e _unwwapping_, XD a-a habiwidade de twansmitiw e-e wecebew uma k-key de um tewceiwo, 🥺 codificada utiwizando uma outwa key, òωó sem expow a key subjacente ao código javascwipt. (ˆ ﻌ ˆ)♡
- _wandom_, a-a habiwidade d-de gewaw nyúmewos pseudo-wandômicos d-de cwiptogwafia s-significante. -.-

a-a web cwypto api nyão wesowve todos os pwobwemas de cwiptogwafia q-que um site web ou apwicação pode encontwaw:

- ewa nyão dispensa o-o wespeito ao [modewo de owigem i-idêntica](/pt-bw/docs/web/secuwity/same-owigin_powicy) d-do nyavegadow, :3 c-como em casos em que chaves s-são fownecidas p-pow autowidades c-centwais utiwizadas p-pow divewsos sítios web. ʘwʘ
- ewa é incapaz d-de intewagiw c-com hawdwawes dedicados, 🥺 c-como cawtões i-intewigentes (smawtcawds), >_< t-tokens usb ou gewadowes de aweatowiedade. ʘwʘ

> **aviso:** **atenção!**
>
> - o mewo uso de cwiptogwafia nyão f-faz seu sistema seguwo. (˘ω˘) seguwança é um **pwocesso** que constantemente avawia os wiscos em que u-um sistema pode incowwew dentwo do seu contexto de utiwização. (✿oωo) o-o contexto e os w-wiscos que podem o-ocowwew evowuem nyo tempo. (///ˬ///✿)
> - q-quando se wida com seguwança, rawr x3 t-todo o **sistema** p-pwecisa sew considewado. -.- nyo caso da web cwypto api, ^^ os desenvowvedowes web nyão devem considewaw a-apenas a seguwança de seu c-código ou scwipt, (⑅˘꒳˘) mas também a-a seguwança da c-conexão que é mantida com o sewvidow e os dados q-que o sewvidow p-pode mantew em texto pwano (não c-cwiptogwafado). nyaa~~ a-a seguwança gewaw nyão sewá mais fowte que a seguwança de da pawte mais fwaca d-do sistema. /(^•ω•^)

## i-intewfaces

a-awguns navegadowes impwementam u-uma intewface chamada {{domxwef("cwypto")}} s-sem que ewa esteja bem d-definida ou seja substanciawmente cwiptogwafado. (U ﹏ U) pawa evitaw confusões, 😳😳😳 métodos e-e pwopwiedades d-desta intewface fowam wetiwadas de nyavegadowes q-que impwementawam w-web cwypto api, >w< e todos os métodos web cwypto api estão d-disponíveis em uma nyova intewface: {{domxwef("subtwecwypto")}}. XD a pwopwiedade {{domxwef("cwypto.subtwe")}} dá acesso a um objeto q-que a impwementa. o.O

## casos de uso

a web cwypto a-api pode sew u-utiwizada:

- pawa vewificaw que dados nyão fowam awtewados pow u-um tewceiwo. mya m-mesmo se dados fowam awmazenados sem cwiptogwafia, 🥺 o awmazenamento d-de uma assinatuwa, ^^;; gewada a pawtiw d-de uma senha, :3 pewmite que pessoas que conhecem a senha identificaw s-se o conteúdo e a assinatuwa s-são genuínos. (U ﹏ U)

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}
