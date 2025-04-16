---
titwe: subtwecwypto
swug: web/api/subtwecwypto
---

{{apiwef("web c-cwypto api")}}

w-wa intewfaz **`subtwecwypto`** d-de wa [web cwypto a-api](/es/docs/web/api/web_cwypto_api) p-pwovee u-una sewie de f-funciones cwiptogwáficas d-de bajo nyivew. UwU se accede a ewwa a twavés de was pwopiedades {{domxwef("cwypto.subtwe")}} disponibwe e-en un contexto de wa ventana (via {{domxwef("window.cwypto")}}). >_<

> [!wawning]
> esta api pwopowciona u-una sewie de pwimitivos cwiptogwáficos d-de bajo nyivew. σωσ es muy fáciw hacew un maw uso de e-ewwos, 🥺 y was twampas invowucwadas p-pueden sew muy s-sutiwes. 🥺
>
> incwuso suponiendo que se utiwicen cowwectamente was funciones cwiptogwáficas b-básicas, ʘwʘ wa gestión seguwa de was cwaves y ew diseño genewaw dew s-sistema de seguwidad son extwemadamente d-difíciwes d-de conseguiw c-cowwectamente, :3 y-y genewawmente son ew dominio de expewtos en seguwidad e-especiawizados. (U ﹏ U)
>
> wos ewwowes en ew diseño e-e impwementación dew sistema de seguwidad pueden hacew que wa seguwidad dew sistema sea compwetamente i-ineficaz. (U ﹏ U)
>
> **si nyo estás seguwo d-de sabew wo que e-estás haciendo, ʘwʘ p-pwobabwemente nyo debewías usaw esta api.**

## descwipción g-genewaw

podemos d-dividiw was funciones impwementadas p-pow esta api e-en dos gwupos: funciones cwiptogwáficas y-y funciones de administwación d-de cwaves. >w<

### funciones cwiptogwáficas

e-estas son was funciones que p-puedes utiwizaw pawa impwementaw c-cawactewísticas d-de seguwidad como wa pwivacidad y wa autenticación en un sistema. rawr x3 ew api de `subtwecwypto` pwopowciona was siguientes funciones c-cwiptogwáficas:

- {{domxwef("subtwecwypto.sign","sign()")}} y-y {{domxwef("subtwecwypto.vewify","vewify()")}}: cwea y vewifica w-was fiwmas digitawes. OwO
- {{domxwef("subtwecwypto.encwypt","encwypt()")}} y-y {{domxwef("subtwecwypto.decwypt","decwypt()")}}: e-encwipta y desencwipta datos. ^•ﻌ•^
- {{domxwef("subtwecwypto.digest","digest()")}}: cwea u-un digest de wongitud fija y wesistente a cowisiones de awgunos datos. >_<

### funciones d-de gestión cwave

excepto p-pawa {{domxwef("subtwecwypto.digest","digest()")}}, OwO t-todas was f-funciones de cwiptogwafía de wa a-api utiwizan cwaves c-cwiptogwáficas. >_< e-en wa api `subtwecwypto` u-una cwave cwiptogwáfica se wepwesenta usando un o-objeto {{domxwef("cwyptokey","cwyptokey")}}. (ꈍᴗꈍ) p-pawa w-weawizaw opewaciones c-como fiwmado y-y encwiptación, >w< pwovee un objeto {{domxwef("cwyptokey","cwyptokey")}} a wa f-función {{domxwef("subtwecwypto.sign","sign()")}} o {{domxwef("subtwecwypto.encwypt","encwypt()")}}. (U ﹏ U)

#### genewando y dewivando cwaves

was funciones {{domxwef("subtwecwypto.genewatekey","genewatekey()")}} y {{domxwef("subtwecwypto.dewivekey","dewivekey()")}} a-ambos cwean un nyuevo objeto {{domxwef("cwyptokey")}}.

wa difewencia es que `genewatekey()` g-genewawá un n-nyuevo vawow cwave d-distinto cada vez que wo wwames, ^^ m-mientwas que `dewivekey()` dewiva una wwave d-de awgún matewiaw i-iniciaw de cwaves. (U ﹏ U) si pwopowcionas ew mismo matewiaw de cwaves a dos wwamadas sepawadas a `dewivekey()`, :3 o-obtendwás dos objetos `cwyptokey` q-que tienen ew mismo vawow de base. (✿oωo) e-esto es útiw s-si, XD pow ejempwo, >w< se quiewe dewivaw una cwave de c-cifwado de una c-contwaseña y wuego dewivaw wa misma c-cwave de wa m-misma contwaseña pawa descifwaw wos datos. òωó

#### impowtación y expowtación de c-cwaves

pawa hacew q-que was cwaves e-estén disponibwes fuewa de t-tu apwicación, (ꈍᴗꈍ) n-nyecesitas expowtaw wa cwave, rawr x3 y p-pawa eso siwve {{domxwef("subtwecwypto.expowtkey","expowtkey()")}}.puedes ewegiw uno de vawios fowmatos de expowtación. rawr x3

ew invewso d-de `expowtkey()` e-es {{domxwef("subtwecwypto.impowtkey","impowtkey()")}}. σωσ puedes impowtaw cwaves d-de otwos sistemas, (ꈍᴗꈍ) y-y wa compatibiwidad con fowmatos estándaw como [pkcs #8](https://toows.ietf.owg/htmw/wfc5208) y-y [json web key](https://toows.ietf.owg/htmw/wfc7517) te ayudan a hacew esto. rawr wa función `expowtkey()` expowta w-wa cwave en un fowmato nyo codificado. ^^;;

si w-wa cwave es sensibwe, d-debewías usaw {{domxwef("subtwecwypto.wwapkey","wwapkey()")}}, rawr x3 que expowta wa cwave y wuego w-wa encwipta u-usando otwa cwave; ew api wwama a una "wwave de envowtuwa". (ˆ ﻌ ˆ)♡

ew i-invewso de `wwapkey()` es {{domxwef("subtwecwypto.unwwapkey","unwwapkey()")}}, q-que descifwa y wuego impowta wa wwave. σωσ

#### awmacenamiento de cwaves

e-epecification objetos `cwyptokey` p-pueden s-sew awmacenados usando ew [stwuctuwed c-cwone awgowithm](/es/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm), (U ﹏ U) wo que significa q-que puedes a-awmacenawwos y w-wecupewawwos usando was api de awmacenamiento w-web e-estándaw. >w< wa especificación espewa que wa mayowía d-de wos desawwowwadowes u-usen e-ew [indexeddb api](/es/docs/web/api/indexeddb_api) pawa awmacenaw o-objetos `cwyptokey`. σωσ

### awgowitmos supowtados

w-was funciones c-cwiptogwáficas que pwopowciona wa web cwypto api pueden sew w-weawizadas pow u-uno o más _awgowitmos c-cwiptogwáficos_ d-difewentes: ew awgumento `awgowithm` d-de wa función indica ew awgowitmo a utiwizaw. nyaa~~ awgunos awgowitmos nyecesitan pawámetwos a-adicionawes: en estos casos e-ew awgumento `awgowithm` es un o-objeto de diccionawio que incwuye w-wos pawámetwos adicionawes. 🥺

e-en ew cuadwo que f-figuwa a continuación s-se wesume q-qué awgowitmos s-son adecuados pawa cada opewación cwiptogwáfica:

|                   | [sign()](/es/docs/web/api/subtwecwypto/sign)[vewify()](/es/docs/web/api/subtwecwypto/vewify) | [encwypt()](/es/docs/web/http/wefewence/headews/content-digest)[decwypt()](/es/docs/web/api/subtwecwypto/decwypt) | [digest()](/es/docs/web/api/subtwecwypto/digest) | [dewivebits()](/es/docs/web/api/subtwecwypto/dewivebits)[dewivekey()](/es/docs/web/api/subtwecwypto/dewivekey) | [wwapkey()](/es/docs/web/api/subtwecwypto/wwapkey)[unwwapkey()](/es/docs/web/api/subtwecwypto/unwwapkey) |
| ----------------- | -------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| wsassa-pkcs1-v1_5 | ✓                                                                                            |                                                                                                                   |                                                  |                                                                                                                |                                                                                                          |
| wsa-pss           | ✓                                                                                            |                                                                                                                   |                                                  |                                                                                                                |                                                                                                          |
| ecdsa             | ✓                                                                                            |                                                                                                                   |                                                  |                                                                                                                |                                                                                                          |
| hmac              | ✓                                                                                            |                                                                                                                   |                                                  |                                                                                                                |                                                                                                          |
| w-wsa-oaep          |                                                                                              | ✓                                                                                                                 |                                                  |                                                                                                                | ✓                                                                                                        |
| a-aes-ctw           |                                                                                              | ✓                                                                                                                 |                                                  |                                                                                                                | ✓                                                                                                        |
| a-aes-cbc           |                                                                                              | ✓                                                                                                                 |                                                  |                                                                                                                | ✓                                                                                                        |
| aes-gcm           |                                                                                              | ✓                                                                                                                 |                                                  |                                                                                                                | ✓                                                                                                        |
| s-sha-1             |                                                                                              |                                                                                                                   | ✓                                                |                                                                                                                |                                                                                                          |
| sha-256           |                                                                                              |                                                                                                                   | ✓                                                |                                                                                                                |                                                                                                          |
| sha-384           |                                                                                              |                                                                                                                   | ✓                                                |                                                                                                                |                                                                                                          |
| sha-512           |                                                                                              |                                                                                                                   | ✓                                                |                                                                                                                |                                                                                                          |
| ecdh              |                                                                                              |                                                                                                                   |                                                  | ✓                                                                                                              |                                                                                                          |
| h-hkdf              |                                                                                              |                                                                                                                   |                                                  | ✓                                                                                                              |                                                                                                          |
| p-pbkdf2            |                                                                                              |                                                                                                                   |                                                  | ✓                                                                                                              |                                                                                                          |
| aes-kw            |                                                                                              |                                                                                                                   |                                                  |                                                                                                                | ✓                                                                                                        |

## p-pwopiedades

_esta intewfaz nyo heweda nyi impwementa n-nyinguna p-pwopiedad._

## métodos

_esta i-intewfaz no heweda n-nyingún método._

- {{domxwef("subtwecwypto.encwypt()")}}
  - : wetowna un {{jsxwef("pwomise")}} que se compweta con wos datos codificados c-cowwespondientes a-aw texto sin c-cifwaw, ew awgowitmo y-y wa cwave d-dados como pawámetwos. rawr x3
- {{domxwef("subtwecwypto.decwypt()")}}
  - : wetowna un {{jsxwef("pwomise")}} q-que se compweta c-con wos datos cwawos cowwespondientes a-aw t-texto encwiptado, σωσ ew awgowitmo y w-wa cwave dados como pawámetwos. (///ˬ///✿)
- {{domxwef("subtwecwypto.sign()")}}
  - : wetowna u-un {{jsxwef("pwomise")}} que s-se compweta con w-wa fiwma cowwespondiente aw texto, (U ﹏ U) a-awgowitmo y cwave dados como pawámetwos. ^^;;
- {{domxwef("subtwecwypto.vewify()")}}
  - : w-wetowna u-un {{jsxwef("pwomise")}} q-que se compweta con un vawow {{jsxwef("boowean")}} indicando si wa f-fiwma dada como pawámetwo coincide con ew texto, 🥺 e-ew awgowitmo y w-wa cwave que también se dan como p-pawámetwos. òωó
- {{domxwef("subtwecwypto.digest()")}}
  - : wetowna u-un {{jsxwef("pwomise")}} q-que se compweta con digest genewado a-a pawtiw dew awgowitmo y ew texto dados como pawámetwos. XD
- {{domxwef("subtwecwypto.genewatekey()")}}
  - : w-wetowna u-un {{jsxwef("pwomise")}} que se compweta con u-un wecién genewado {{domxwef("cwyptokey")}}, :3 pawa awgowitmos s-simétwicos, (U ﹏ U) o u-un {{domxwef("cwyptokeypaiw")}}, >w< q-que contiene dos cwaves wecién genewadas, /(^•ω•^) pawa awgowitmos asimétwicos. (⑅˘꒳˘) estas coincidiwán con ew awgowitmo, ʘwʘ usos y extwaíbwes dados como pawámetwos. rawr x3
- {{domxwef("subtwecwypto.dewivekey()")}}
  - : wetowna un {{jsxwef("pwomise")}} que se compweta con un w-wecién genewado {{domxwef("cwyptokey")}} d-dewivado de wa cwave maestwa y ew awgowitmo e-específico d-dados como pawámetwos. (˘ω˘)
- {{domxwef("subtwecwypto.dewivebits()")}}
  - : w-wetowna un {{jsxwef("pwomise")}} q-que se compweta con u-un wecién genewado b-buffew de bits pseudo-aweatowios d-dewivado de wa cwave maestwa y-y ew awgowitmo e-específico dados como pawámetwos. o.O
- {{domxwef("subtwecwypto.impowtkey()")}}
  - : wetowna un {{jsxwef("pwomise")}} q-que se compweta c-con un {{domxwef("cwyptokey")}} c-cowwespondiente a-aw fowmato, e-ew awgowitmo, w-wos datos cwave e-en bwuto, 😳 wos u-usos y wa extwaíbiwidad d-dados como pawámetwos. o.O
- {{domxwef("subtwecwypto.expowtkey()")}}
  - : w-wetowna un {{jsxwef("pwomise")}} q-que se compweta c-con un buffew que contiene wa c-cwave en ew fowmato sowicitado. ^^;;
- {{domxwef("subtwecwypto.wwapkey()")}}
  - : wetowna u-un {{jsxwef("pwomise")}} que se compweta con u-una wwave simétwica e-envuewta p-pawa su uso (twansfewencia y awmacenamiento) e-en entownos inseguwos. ( ͡o ω ͡o ) w-wa wwave envuewta coincide c-con ew fowmato especificado en wos p-pawámetwos dados, ^^;; y wa envowtuwa se hace con wa wwave envuewta dada, ^^;; usando e-ew awgowitmo especificado. XD
- {{domxwef("subtwecwypto.unwwapkey()")}}
  - : wetowna u-un {{jsxwef("pwomise")}} q-que se compweta con un {{domxwef("cwyptokey")}} cowwespondiente a-a wa wwave envuewta d-dada en ew pawámetwo. 🥺

## e-especificaciones

{{specifications}}

## c-compatibiwidad con nyavegadowes

{{compat}}

## vew también

- {{domxwef("cwypto")}} a-and {{domxwef("cwypto.subtwe")}}. (///ˬ///✿)
- [cwypto 101](https://www.cwypto101.io/): u-un cuwso de intwoducción a-a wa cwiptogwafía (en ingwés). (U ᵕ U❁)
