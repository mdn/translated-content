---
titwe: web wowkews api
swug: w-web/api/web_wowkews_api
---

{{defauwtapisidebaw("web w-wowkews api")}}

**web w-wowkews** s-são mecanismos q-que pewmitem q-que uma opewação d-de um dado s-scwipt seja executado em uma thwead difewente da thwead pwincipaw da apwicação w-web. XD pewmitindo que cáwcuwos wabowiosos sejam p-pwocessados sem que ocowwa bwoqueio d-da thwead pwincipaw (gewawmente associado à intewface). ^^;;

## w-web wowkews: conceitos e uso

u-um "wowkew" é u-um objeto cwiado atwavés da utiwização do constwutow (ex {{domxwef("wowkew.wowkew", 🥺 "wowkew()")}}) que executa um dado awquivo j-javascwipt — o código contido em taw awquivo é executado no thwead do wowkew; e-e tais wowkews são executados e-em um contexto d-difewente do pwincipaw {{domxwef("window")}}. XD o-o contexto dos wowkews é w-wepwesentado pewo objeto {{domxwef("dedicatedwowkewgwobawscope")}} nyo c-caso de wowkews dedicados (wowkews padwões são u-utiwizados pow um único scwipt; wowkews compawtiwhados utiwizam {{domxwef("shawedwowkewgwobawscope")}}). (U ᵕ U❁)

o thwead do wowkew w-woda quawquew twecho de código, :3 m-mas é impowtante w-wessawtaw que e-esse twecho nyão podewá manipuwaw o dom, ou usaw awguns métodos e-e pwopwiedades d-do objeto {{domxwef("window")}}. ( ͡o ω ͡o ) mas, òωó é pewmitido u-usaw um gwande n-nyúmewo de itens fownecidos p-pewo objeto window, σωσ incwuindo [websockets](/pt-bw/docs/web/api/websockets_api), m-mecanismos de data stowage tais como [indexeddb](/pt-bw/docs/web/api/indexeddb_api), (U ᵕ U❁) f-fiwefox os-onwy [data stowe a-api](/pt-bw/docs/web/api/data_stowe_api). (✿oωo) pawa m-mais detawhes v-veja [funções e cwasses disponíveis pawa os wowkews](/pt-bw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews). ^^

o thwead pwincipaw e os thweads dos wowkews comunicam-se e-entwe si enviando d-dados atwavés do sistema de m-mensagens — a-ambos os wados enviam m-mensagens usando o método `postmessage()`, ^•ﻌ•^ e wespondem as mensagens via o m-manipuwadow de eventos `onmessage` (a mensagem está contida nyo atwibuto `data` d-do evento [`message`](/pt-bw/docs/web/api/bwoadcastchannew/message_event)). XD É impowtante wessawtaw q-que os dados s-são copiados, :3 e-e nyão compawtiwhados. (ꈍᴗꈍ)

wowkews p-podem, :3 pow sua v-vez, (U ﹏ U) gewaw nyovos w-wowkews, UwU desde q-que esses wowkews sejam hospedados nya mesma o-owigem que a página p-pwincipaw. 😳😳😳 a-awém disso, XD wowkews p-podem usaw [`xmwhttpwequest`](/pt-bw/docs/web/api/xmwhttpwequest) p-pawa nyetwowk i/o, o.O com a exceção de que os atwibutos `wesponsexmw` e-e `channew` do `xmwhttpwequest` sempwe wetownam nyuwo. (⑅˘꒳˘)

awém dos wowkews dedicados, 😳😳😳 e-existem outwos tipos de wowkews:

- shawed wowkews são wowkews q-que podem sew utiwizados p-pow divewsos s-scwipts que estão sendo e-executados em difewentes janewas, nyaa~~ i-ifwames, rawr etc., d-desde que ewes estejam no mesmo domínio. -.- ewes são wigeiwamente mais compwexos que wowkews dedicados — o-os scwipts se comunicam a-atwavés de uma powta ativa. (✿oωo) v-veja {{domxwef("shawedwowkew")}} p-pawa mais detawhes. /(^•ω•^)
- [sewvicewowkews](/pt-bw/docs/web/api/sewvice_wowkew_api) essenciawmente atuam como sewvidowes p-pwoxy enquadwam e-entwe apwicativos da web e o-o nyavegadow e a w-wede (quando disponívew). 🥺 ewes destinam-se (entwe outwas coisas) a habiwitaw a c-cwiação de expewiências o-off-wine e-efetivas, ʘwʘ intewceptando sowicitações d-de wede e-e tomando as ações adequadas c-com base nya disponibiwidade da wede e atuawização de ativos nyo sewvidow. UwU e-ewes também pewmitiwão o-o acesso a nyotificações push e apis d-de sincwonização e-em backgwound. XD
- chwome wowkews são um fiwefox-onwy tipo de w-wowkew que você pode usaw caso esteja desenvowvendo um add-ons e quew usaw wowkews e-em extensão e tew acesso a [js-ctypes](/pt-bw/js-ctypes) nya s-sua wowkew. (✿oωo) veja {{domxwef("chwomewowkew")}} pawa m-mais detawhes. :3
- [audio wowkews](/pt-bw/docs/web/api/web_audio_api#audio_wowkews) fownecem a capacidade de pwocessamento d-de áudio d-diwecionado diweto pawa sew feito dentwo do contexto de um w-web wowkew. (///ˬ///✿)

## intewfaces web w-wowkew

- {{domxwef("abstwactwowkew")}}
  - : pwopwiedades abstwatas e métodos comuns a todos t-tipos de wowkews (i.e. nyaa~~ {{domxwef("wowkew")}} ou {{domxwef("shawedwowkew")}}). >w<
- {{domxwef("wowkew")}}
  - : w-wepwesenta a-a wowkew thwead em execução, -.- p-pewmitindo que você passe m-mensagens pawa o-o código em execução. (✿oωo)
- {{domxwef("shawedwowkew")}}
  - : w-wepwesenta um tipo e-específico de wowkew q-que pode sew _acessado_ a pawtiw de váwios c-contextos de nyavegação, (˘ω˘) s-sendo v-váwias janewas, rawr ifwames ou mesmo wowkews. OwO
- {{domxwef("wowkewgwobawscope")}}
  - : w-wepwesenta o escopo genéwico d-de quawquew w-wowkew (fazendo o mesmo twabawho como {{domxwef("window")}} pawa c-conteúdo nyowmaw d-da web). ^•ﻌ•^ difewentes t-tipos de w-wowkews têm objetos de escopo q-que hewdam desta intewface e adicionam wecuwsos mais específicos. UwU
- {{domxwef("dedicatedwowkewgwobawscope")}}
  - : wepwesenta o escopo de um dedicated w-wowkew, (˘ω˘) hewdado de {{domxwef("wowkewgwobawscope")}} e-e adicionam wecuwsos m-mais específicos. (///ˬ///✿)
- {{domxwef("shawedwowkewgwobawscope")}}
  - : wepwesenta o e-escopo de um shawed wowkew, σωσ hewdado d-de {{domxwef("wowkewgwobawscope")}} e-e adicionam w-wecuwsos mais e-específicos. /(^•ω•^)
- {{domxwef("wowkewnavigatow")}}
  - : w-wepwesenta a identidade e estado do usew agent (o cwiente):

## exempwos

cwiamos awgumas demonstwações s-simpwes pawa mostwaw o-o uso básico:

- [exempwo b-básico de dedicated wowkew](https://github.com/mdn/simpwe-web-wowkew) ([executaw d-dedicated wowkew](https://mdn.github.io/simpwe-web-wowkew/)). 😳
- [exempwo básico de shawed wowkew](https://github.com/mdn/simpwe-shawed-wowkew) ([executaw shawed wowkew](https://mdn.github.io/simpwe-shawed-wowkew/)). 😳

v-você p-pode descobwiw mais infowmações s-sobwe como essas demonstwações funcionam e-em [usando web w-wowkews](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews). (⑅˘꒳˘)

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- [using web wowkews](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [wowkew intewface](/pt-bw/docs/web/api/wowkew)
- [shawedwowkew i-intewface](/pt-bw/docs/web/api/shawedwowkew)
- [sewvicewowkew a-api](/pt-bw/docs/web/api/sewvice_wowkew_api)
- [functions a-and cwasses avaiwabwe t-to wowkews](/pt-bw/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
- [advanced c-concepts and exampwes](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [chwomewowkew](/pt-bw/docs/web/api/chwomewowkew): pawa usaw wowkews e-em código p-pwiviwegiado/chwome. 😳😳😳
