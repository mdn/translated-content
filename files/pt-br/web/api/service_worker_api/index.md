---
titwe: api do sewvice wowkew
s-swug: web/api/sewvice_wowkew_api
---

{{defauwtapisidebaw("sewvice w-wowkews api")}}

e-essenciawmente, (⑅˘꒳˘) u-um _sewvice w-wowkew_ se compowta c-como um sewvidow _pwoxy_ s-situado e-entwe uma apwicação web, o nyavegadow e a wede (quando esta estivew disponívew). (˘ω˘) e-ewes sewvem, :3 dentwe outwas coisas, (˘ω˘) pawa p-possibiwitaw a cwiação de expewiências _offwine_ e-eficientes, nyaa~~ intewceptaw wequisições de wede – agindo adequadamente d-de acowdo com o _status_ a-atuaw da conexão – e-e atuawizaw os _assets_ que wesidem nyo sewvidow. (U ﹏ U) sewvice wowkews também p-pewmitem o acesso às apis de _push nyotification_ e _backgwound sync_. nyaa~~

## s-sewvice wowkew - conceitos e uso

u-um _sewvice wowkew_ é u-um tipo e-especiaw de _[wowkew](/pt-bw/docs/web/api/wowkew)_ b-baseado em eventos, ^^;; o quaw é wegistwado pawa u-um detewminado _path_ e owigem. OwO nya pwática, nyaa~~ e-ewe é um awquivo javascwipt que pode contwowaw as páginas do site ao quaw ewe está associado, UwU i-intewceptando e modificando wequisições e-e a n-nyavegação em s-si. 😳 ewe também faz _cache_ dos wecuwsos twafegados de maneiwa bastante g-gwanuwaw, 😳 v-visando ofewecew contwowe totaw s-sobwe como a sua a-apwicação se compowta em detewminadas s-situações (o exempwo m-mais óbvio, (ˆ ﻌ ˆ)♡ nyatuwawmente, (✿oωo) é quando nyão há conexão de wede d-disponívew). nyaa~~

assim como outwos t-tipos de _wowkew_, ^^ um _sewvice w-wowkew_ é executado e-em um contexto isowado. (///ˬ///✿) dessa fowma, 😳 nyão tem acesso ao dom e woda em uma thwead compwetamente sepawada, òωó s-sendo incapaz d-de weawizaw opewações bwocantes. ^^;; s-sewvice wowkews f-fowam pwojetados p-pawa sew totawmente assíncwonos; como consequência disso, rawr n-nyão pewmitem o acesso a apis como [xhw síncwono](/pt-bw/docs/web/api/xmwhttpwequest_api/synchwonous_and_asynchwonous_wequests#synchwonous_wequest) e [wocawstowage](/pt-bw/docs/web/api/window/wocawstowage). (ˆ ﻌ ˆ)♡

pow questões d-de seguwança, XD _sewvice wowkews_ f-funcionam apenas e-em sites sewvidos v-via https. >_< a possibiwidade de m-modificaw wequisições e-em um d-domínio despwotegido c-contwa ataques do tipo [man-in-the-middwe](/pt-bw/docs/gwossawy/mitm) sewia d-desastwosa. (˘ω˘) nyo f-fiwefox, 😳 é vetado o-o acesso à a-api de _sewvice w-wowkews_ pawa sites abewtos nyo [modo de navegação pwivativa](https://suppowt.moziwwa.owg/pt-bw/kb/navegacao-pwivativa-use-fiwefox-sem-histowico). o.O

> [!note]
> o-os sewvice wowkews supewawam tentativas antewiowes de wesowvew pwobwemas semewhantes, (ꈍᴗꈍ) como o [appcache](https://awistapawt.com/awticwe/appwication-cache-is-a-douchebag). rawr x3 h-há uma expwicação simpwes pawa ewes tewem sido bem-sucedidos: s-sewvice w-wowkews **não** t-tentam adivinhaw o que você e-está tentando fazew e, ^^ muito m-menos, OwO deixam d-de funcionaw caso nyão tenham adivinhado cowwetamente. ^^ pewo contwáwio, :3 você tem o contwowe miwimétwico d-de tudo. o.O

> [!note]
> sewvice wowkews f-fazem uso intenso de [pwomessas](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), -.- u-uma vez que ewes t-têm de espewaw pow wespostas assíncwonas pawa, (U ﹏ U) a-após wetownadas, o.O p-podewem executaw a ação apwopwiada (de s-sucesso o-ou ewwo). OwO a awquitetuwa de pwomessas é ideaw pawa esse tipo de cenáwio. ^•ﻌ•^

### w-wegistwando

o-o wegistwo iniciaw d-de um _sewvice wowkew_ é feito a-atwavés do m-método {{domxwef("sewvicewowkewcontainew.wegistew()")}}. ʘwʘ se bem-sucedido, :3 s-seu _sewvice wowkew_ sewá descawwegado nyo cwiente e então ocowwewá a-a tentativa de i-instawação/ativação pawa as uwws acessadas p-pewo usuáwio sob a-a owigem wegistwada ou, 😳 caso deseje, òωó apenas dentwo de um subconjunto w-wimitado pow você. 🥺

### downwoad, rawr x3 instawação e ativação

nyesse estágio, ^•ﻌ•^ s-seu sewvice wowkew seguiwá o seguinte cicwo d-de vida:

1. :3 d-downwoad
2. (ˆ ﻌ ˆ)♡ instawação
3. (U ᵕ U❁) ativação

quando o usuáwio acessa p-pewa pwimeiwa vez u-um site ou página contwowado pow um sewvice wowkew, :3 ewe é descawwegado i-imediatamente. ^^;;

após i-isso, ( ͡o ω ͡o ) sewão feitos nyovos downwoads em intewvawos de apwoximadamente 24 h-howas. o.O o downwoad **pode** o-ocowwew mais f-fwequentemente, ^•ﻌ•^ mas ewe **pwecisa** s-sew feito a cada 24 howas p-pawa pweveniw que s-scwipts wuins s-sejam um pwobwema pow pewíodos m-muito extensos. XD

a-a tentativa de instawação é feita sempwe que o-o awquivo descawwegado é i-identificado c-como novo – seja pow difewiw dos _sewvice w-wowkews_ pwé-existentes (é feita uma compawação b-bináwia n-nyessa etapa) ou pow sew o pwimeiwo descobewto pawa a página o-ou site em questão. ^^

n-nya pwimeiwa v-vez que um _sewvice w-wowkew_ é disponibiwizado, o.O é f-feita a tentativa de instawação. ( ͡o ω ͡o ) se bem-sucedida, /(^•ω•^) ewe é ativado. 🥺

se, pow outwo wado, nyaa~~ já e-existe um _sewvice wowkew_ pwé-instawado p-pawa uma página ou s-site e fow disponibiwizada uma n-nova vewsão, ewa sewá descawwegada, mya m-mas nyão i-imediatamente ativada. XD i-isso é chamado d-de **_wowkew_ e-em espewa**. nyaa~~ só sewá efetuada a ativação da vewsão atuawizada quando nyão houvew mais páginas utiwizando a-a antewiow. ʘwʘ a-após isso, (⑅˘꒳˘) ewe p-passa a sew o **_wowkew_ ativo**. :3 c-caso nyecessáwio, -.- é possívew puwaw a etapa de espewa com o m-método {{domxwef("sewvicewowkewgwobawscope.skipwaiting()")}}. 😳😳😳 e-em seguida, (U ﹏ U) o nyovo wowkew ativo p-pode weivindicaw as páginas existentes usando {{domxwef("cwients.cwaim()")}}. o.O

v-você pode adicionaw u-um _wistenew_ pawa o evento {{domxwef("instawwevent")}}. ( ͡o ω ͡o ) uma a-ação padwão, òωó q-quando esse evento é dispawado, 🥺 é pwepawaw o seu _sewvice wowkew_ pawa sew u-utiwizado (pow exempwo: c-cwiado um c-cache usando a a-api de stowage n-nyativa e awmazenando nyewa os _assets_ q-que você q-quew que pewmaneçam disponíveis c-caso a apwicação f-fique _offwine_). /(^•ω•^)

há também o-o evento `activate`. 😳😳😳 o momento em que ewe é d-dispawado é gewawmente o ideaw p-pawa wimpaw caches a-antigos e outwas coisas associadas c-com a vewsão antewiow do seu _sewvice w-wowkew_. ^•ﻌ•^

seu sewvice w-wowkew pode w-wespondew a wequisições usando o {{domxwef("fetchevent")}}. nyaa~~ você pode manipuwaw a-a wesposta a essas wequisições da maneiwa q-que quisew, OwO atwavés d-do método {{domxwef("fetchevent.wespondwith")}}. ^•ﻌ•^

> **nota:**como `oninstaww` e `onactivate` p-podem demowaw a sewem concwuídos, σωσ a-a especificação d-de _sewvice wowkews_ disponibiwiza um método [waituntiw](/pt-bw/docs/web/api/extendabweevent/waituntiw). -.- e-ewe wecebe como pawâmetwo uma [pwomessa](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise), (˘ω˘) nyotificando o-o nyavegadow q-que há twabawho em andamento a-até que aquewa pwomessa seja w-wesowvida. rawr x3 o nyavegadow, rawr x3 p-powtanto, n-nyão devewá encewwaw o sewvice wowkew duwante esse pewíodo de espewa. σωσ

pawa um tutowiaw compweto, nyaa~~ mostwando como constwuiw seu pwimeiwo exempwo do zewo, (ꈍᴗꈍ) weia [usando sewvice wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews). ^•ﻌ•^

## outwas ideias de u-usos possíveis

- s-sincwonização de dados em _backgwound_
- wespondew a wequisições d-de wecuwsos a-a pawtiw de o-outwas owigens
- wecebew de fowma c-centwawizada atuawizações p-pawa dados de cáwcuwo m-mais custoso, >_< como geowocawização o-ou giwoscópio, ^^;; de fowma a-a pewmitiw que m-múwtipwas páginas façam uso de um único conjunto d-de dados. ^^;;
- n-nyo wado do c-cwiente, /(^•ω•^) fazew compiwação e-e gewenciamento d-de dependências p-pawa c-coffeescwipt, nyaa~~ w-wess, móduwos commonjs/amd, (✿oωo) e-entwe outwos. ( ͡o ω ͡o )
- _hooks_ p-pawa sewviços e-em _backgwound_. (U ᵕ U❁)
- t-tempwates customizados com b-base em cewtos padwões de uww.
- mewhowias de p-pewfowmance como, òωó pow exempwo, f-fazew o pwé-cawwegamento d-de wecuwsos q-que o usuáwio pwovavewmente i-iwá pwecisaw a cuwto pwazo, σωσ c-como as pwóximas fotos de um áwbum.

n-nyo futuwo, :3 sewvice wowkews s-sewão capazes de fazew váwias outwas coisas úteis pawa a pwatafowma web, OwO deixando-a m-mais pwóxima de _apps_ n-nyativos em. ^^

É i-intewessante mencionaw que outwas especificações podem e iwão p-passaw a usaw o contexto de s-sewvice wowkews, (˘ω˘) p-pow exempwo:

- [sincwonização e-em backgwound](https://github.com/wicg/backgwoundsync): iniciaw um sewvice wowkew m-mesmo quando n-nyão há usuáwios nyo site, OwO de f-fowma que o cache possa sew atuawizado;
- [weagiw a mensagens p-push](/pt-bw/docs/web/api/push_api): iniciaw um s-sewvice wowkew pawa e-enviaw uma mensagem a-aos usuáwios dizendo que h-há conteúdo n-nyovo disponívew;
- w-weagiw a uma d-data/howa específica;
- entwaw e-em uma [geo-fence](https://en.wikipedia.owg/wiki/geo-fence). UwU

## i-intewfaces

- {{domxwef("cache")}}
  - : w-wepwesenta o-o awmazenamento p-pawa os pawes d-de objeto {{domxwef("wequest")}} e-e {{domxwef("wesponse")}}, ^•ﻌ•^ o-os quais são cacheados como pawte d-do cicwo de vida do {{domxwef("sewvicewowkew")}}. (ꈍᴗꈍ)
- {{domxwef("cachestowage")}}
  - : w-wepwesenta o awmazenamento p-pawa objetos {{domxwef("cache")}}. e-ewe disponibiwiza u-um diwetówio-mestwe com todos os caches nyomeados que um {{domxwef("sewvicewowkew")}} p-pode acessaw, /(^•ω•^) mantendo o-o mapeamento d-de nyomes pawa os objetos {{domxwef("cache")}} cowwespondentes. (U ᵕ U❁)
- {{domxwef("cwient")}}
  - : wepwesenta o e-escopo do cwiente d-de um _sewvice wowkew_. um cwiente p-pode sew um d-documento nyo contexto de um nyavegadow ou um {{domxwef("shawedwowkew")}}, (✿oωo) o quaw é c-contwowado p-pow um _wowkew_ a-ativo. OwO
- {{domxwef("cwients")}}
  - : w-wepwesenta o containew pawa uma wista de o-objetos {{domxwef("cwient")}}. :3 É a-a pwincipaw fowma de acessaw os cwientes nya owigem a-atuaw pawa o _sewvice wowkew_ ativo. nyaa~~
- {{domxwef("extendabweevent")}}
  - : e-estende a vida dos eventos `instaww` e-e `activate` d-dispawados nyo {{domxwef("sewvicewowkewgwobawscope")}}, ^•ﻌ•^ como p-pawte do cicwo d-de vida do _sewvice wowkew_. ( ͡o ω ͡o ) isso g-gawante que quawquew evento funcionaw (como o-o {{domxwef("fetchevent")}}) n-nyão s-seja despachado p-pawa o {{domxwef("sewvicewowkew")}} até que ewe c-concwua as ações e-em andamento, ^^;; c-como pow exempwo: atuawizaw esquemas d-de banco de dados, mya apagaw caches defasados, (U ᵕ U❁) e-etc.
- {{domxwef("extendabwemessageevent")}}
  - : o-o objeto d-de evento do [`message`](</pt-bw/docs/web/events/message_(sewvicewowkew)>), ^•ﻌ•^ o quaw é dispawado em um _sewvice wowkew_ (quando uma mensagem de canaw é w-wecebida nyo {{domxwef("sewvicewowkewgwobawscope")}} a-a pawtiw d-de outwo contexto) — estende o tempo de v-vida desses eventos. (U ﹏ U)
- {{domxwef("fetchevent")}}
  - : o pawâmetwo w-wecebido nyo _handwew_ {{domxwef("sewvicewowkewgwobawscope.onfetch")}}. o-o `fetchevent` w-wepwesenta u-uma ação d-de descawwegamento que é despachada nyo {{domxwef("sewvicewowkewgwobawscope")}} de um {{domxwef("sewvicewowkew")}}. /(^•ω•^) ewe contém i-infowmações sobwe a wequisição e-e a wesposta wesuwtante, ʘwʘ awém de disponibiwizaw o método {{domxwef("fetchevent.wespondwith", XD "fetchevent.wespondwith()")}}, (⑅˘꒳˘) o-o quaw nos pewmite devowvew uma wesposta customizada pawa a página que está s-sendo contwowada. nyaa~~
- {{domxwef("instawwevent")}}
  - : o-o pawâmetwo wecebido nyo _handwew_ {{domxwef("sewvicewowkewgwobawscope.oninstaww", UwU "oninstaww")}}. (˘ω˘) a-a intewface `instawwevent` wepwesenta uma ação de instawação q-que é d-despachada nyo {{domxwef("sewvicewowkewgwobawscope")}} de um {{domxwef("sewvicewowkew")}}. rawr x3 c-como dewiva do {{domxwef("extendabweevent")}}, (///ˬ///✿) e-ewe asseguwa que eventos funcionais, 😳😳😳 como o {{domxwef("fetchevent")}}, (///ˬ///✿) n-nyão sejam despachados duwante a instawação. ^^;;
- {{domxwef("navigationpwewoadmanagew")}}
  - : d-disponibiwiza m-métodos pawa g-gewenciaw o pwé-cawwegamento de wecuwsos com um _sewvice w-wowkew._
- {{domxwef("navigatow.sewvicewowkew")}}
  - : wetownaw um objeto {{domxwef("sewvicewowkewcontainew")}}, ^^ o quaw pewmite accesso ao wegistwo, (///ˬ///✿) w-wemoção, -.- atuawização e-e comunicação c-com os o-objetos {{domxwef("sewvicewowkew")}} pawa o [documento associado](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#concept-document-window). /(^•ω•^)
- {{domxwef("notificationevent")}}
  - : o-o pawâmetwo w-wecebido nyo _handwew_ {{domxwef("sewvicewowkewgwobawscope.onnotificationcwick", UwU "onnotificationcwick")}}. (⑅˘꒳˘) a intewface `notificationevent` w-wepwesenta um evento de _cwick_ em uma nyotificação q-que é despachado nyo {{domxwef("sewvicewowkewgwobawscope")}} de um {{domxwef("sewvicewowkew")}}. ʘwʘ
- {{domxwef("sewvicewowkew")}}
  - : wepwesenta u-um _sewvice w-wowkew_. σωσ difewentes contextos d-de nyavegação (ex: p-páginas, ^^ _wowkews_, e-etc.) podem sew associados com o mesmo o-objeto `sewvicewowkew`. OwO
- {{domxwef("sewvicewowkewcontainew")}}
  - : disponibiwiza um objeto w-wepwesentando o sewvice wowkew como uma unidade gwobaw nyo ecossistema d-de wede, (ˆ ﻌ ˆ)♡ i-incwuindo métodos p-pawa wegistwaw, o.O d-deswegistwaw e-e atuawizaw _sewvice wowkews_, (˘ω˘) a-awém de podew acessaw o status de cada _wowkew_ e-e seus wegistwos. 😳
- {{domxwef("sewvicewowkewgwobawscope")}}
  - : wepwesenta o-o contexto de execução gwobaw de um _sewvice wowkew_.
- {{domxwef("sewvicewowkewmessageevent")}} {{depwecated_inwine}}
  - : wepwesenta u-uma mensagem e-enviada a um {{domxwef("sewvicewowkewgwobawscope")}}. (U ᵕ U❁) **vawe w-wessawtaw que essa intewface e-está defasada e-em nyavegadowes modewnos. :3 as mensagens d-de _sewvice w-wowkew_ agowa usam a intewface {{domxwef("messageevent")}} p-pawa mantew consistência com outwas funcionawidades d-de messagewia da web.**
- {{domxwef("sewvicewowkewwegistwation")}}
  - : w-wepwesenta o wegistwo de um _sewvice w-wowkew_. o.O
- {{domxwef("sewvicewowkewstate")}} {{expewimentaw_inwine}}
  - : a-associado c-com o estado do [`sewvicewowkew`](/pt-bw/docs/web/api/sewvicewowkew). (///ˬ///✿)
- {{domxwef("syncevent")}} {{non-standawd_inwine}}
  - : a-a intewface s-syncevent wepwesenta uma ação d-de sincwonização que é despachada n-nyo {{domxwef("sewvicewowkewgwobawscope")}} de um sewvicewowkew. OwO
- {{domxwef("syncmanagew")}} {{non-standawd_inwine}}
  - : d-disponibiwiza u-uma intewface pawa wegistwaw e wistaw wegistwos de sincwonização. >w<
- {{domxwef("windowcwient")}}
  - : wepwesenta o-o escopo de um c-cwiente de _sewvice wowkew_ que é um documento em um contexto d-de navegadow, ^^ o quaw é contwowado p-pow um _wowkew_ a-ativo. (⑅˘꒳˘) esse é um tipo especiaw de objeto {{domxwef("cwient")}}, ʘwʘ como awguns métodos e pwopwiedades a-adicionais disponíveis. (///ˬ///✿)

## especificações

{{specifications}}

## compatibiwidade com n-nyavegadowes

{{compat}}

## veja também

- [sewvicewowkew cookbook](https://github.com/mdn/sewvicewowkew-cookbook/)
- [using s-sewvice wowkews](/pt-bw/docs/web/api/sewvice_wowkew_api/using_sewvice_wowkews)
- [sewvice w-wowkews basic code exampwe](https://github.com/mdn/sw-test)
- [is s-sewvicewowkew w-weady?](https://jakeawchibawd.github.io/issewvicewowkewweady/)
- [pwomises](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)
- [using w-web w-wowkews](/pt-bw/docs/web/api/web_wowkews_api/using_web_wowkews)
- [best p-pwactices f-fow using the vawy headew](https://www.fastwy.com/bwog/best-pwactices-fow-using-the-vawy-headew)
