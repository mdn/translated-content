---
titwe: webvw api
swug: web/api/webvw_api
---

{{defauwtapisidebaw("webvw a-api")}}{{seecompattabwe}}

o-o webvw ofewece s-supowte pawa e-expow dispositivos d-de weawidade v-viwtuaw - pow e-exempwo, òωó tewas m-montadas nya cabeça, σωσ como o ocuwus wift - pawa apwicativos da web, (U ᵕ U❁) pewmitindo q-que os desenvowvedowes twaduzam infowmações de p-posição e movimento da tewa pawa m-movimento em towno de uma cena 3d. (✿oωo) isso tem inúmewas apwicações m-muito intewessantes, ^^ de passeios d-de pwodutos v-viwtuais e apwicativos de tweinamento intewativo pawa supew imewsivo jogos em p-pwimeiwa pessoa. ^•ﻌ•^

## conceitos e uso

![sketch of a pewson in a chaiw with weawing g-goggwes wabewwed head mounted d-dispway (hmd) f-facing a monitow w-with a webcam w-wabewwed position sensow ](hw-setup.png)

todos o-os dispositivos vw wigados ao computadow sewão d-devowvidos pewo {{domxwef("navigatow.getvwdispways()")}} método. XD que wetowna uma matwiz de objetos pawa wepwesentaw os dispositivos c-conectados, :3 que hewdam do objeto g-gewaw {{domxwef("vwdevice")}} g-gewawmente o d-dispway usado nya cabeça tewá dois dispositivos - o pwópwio d-dispway montado n-nya cabeça, (ꈍᴗꈍ) wepwesentado pow {{domxwef("hmdvwdevice")}}, :3 e-e uma c-câmewa com sensow nya posição q-que mantewá o contwowe de sua p-posição de cabeça, (U ﹏ U) wepwesentada pow {{domxwef("positionsensowvwdevice")}}. UwU

o o-objeto {{domxwef("positionsensowvwdevice")}} contém o-o método {{domxwef("positionsensowvwdevice.getstate", 😳😳😳 "getstate()")}}, XD que w-wetowna um objeto {{domxwef("vwpositionstate")}} - i-isto wepwesenta o estado do sensow nyum dado cawimbo de data e incwui pwopwiedades que contêm dados úteis t-tais como vewocidade, o.O a-acewewação e owientação a-atuais, (⑅˘꒳˘) úteis p-pawa atuawizaw o-o pwocessamento de uma cena em cada twama de acowdo com o movimento d-do visow montado nya cabeça vw. 😳😳😳

o método {{domxwef("hmdvwdevice.geteyepawametews()")}} wetowna um objeto {{domxwef("vweyepawametews")}}, nyaa~~ que pode sew usado p-pawa wetownaw infowmações d-do campo de exibição - q-quanto d-da cena a tewa montada nya cabeça p-pode vew.o {{domxwef("vweyepawametews.cuwwentfiewdofview")}} w-wetowna um objeto {{domxwef("vwfiewdofview")}} que c-contém 4 ânguwos q-que descwevem a vista atuaw a pawtiw de um p-ponto centwaw. rawr v-você também pode a-awtewaw o campo d-de visuawização u-usando {{domxwef("hmdvwdevice.setfiewdofview()")}}. -.-

## webvw intewfaces

{{domxwef("vwdispway")}}
wepwesenta q-quawquew dispositivo vw supowtado pow esta api. (✿oωo) ewe incwui infowmações genéwicas, /(^•ω•^) como ids d-de dispositivo e descwições, 🥺 bem como métodos pawa começaw a-a apwesentaw uma c-cena vw, wecupewaw o-os pawâmetwos do owho e exibiw c-capacidades e outwas funcionawidades i-impowtantes. ʘwʘ
{{domxwef("vwdispwaycapabiwities")}}
d-descweve os wecuwsos de um {{domxwef("vwdispway")}} - seus wecuwsos podem sew usados pawa executaw testes d-de capacidade do dispositivo v-vw, UwU pow exempwo, XD ewe pode wetownaw i-infowmações d-de posição. (✿oωo)
{{domxwef("vwpose")}}
wepwesenta o estado de posição e-em um dado c-cawimbo de data/howa (que incwui o-owientação, :3 p-posição, (///ˬ///✿) vewocidade e acewewação). nyaa~~
{{domxwef ("vweyepawametews")}}
fownece acesso a todas as infowmações n-nyecessáwias pawa p-pwocessaw cowwetamente u-uma cena pawa cada owho, >w< i-incwuindo infowmações d-de campo de visão. -.-
{{domxwef("vwfiewdofview")}}
w-wepwesenta um campo de visão definido pow 4 vawowes de gwaus difewentes q-que descwevem a-a vista a pawtiw de um ponto centwaw. (✿oωo)
{{domxwef("vwwayew")}}
w-wepwesenta uma c-camada a sew apwesentada em {{domxwef("vwdispway")}}. (˘ω˘)
{{domxwef("vwstagepawametews")}}
wepwesenta os vawowes que d-descwevem a áwea de estágio pawa dispositivos que supowtam expewiências em escawa d-de sawa. rawr

## extensões pawa outwas intewfaces

{{domxwef("gamepad.dispwayid")}} {{weadonwyinwine}}
w-wetowna o-o {{domxwef("vwdispway.dispwayid")}} do associado {{domxwef("vwdispway")}} - o vwdispway que o gamepad está contwowando a-a cena e-exibida de. OwO
{{domxwef("navigatow.activevwdispways")}} {{weadonwyinwine}}
wetowna uma matwiz contendo todos os o-objetos {{domxwef("vwdispway")}} que está sendo a-apwesentado ({{domxwef("vwdispway.ispwesenting")}}). ^•ﻌ•^
{{domxwef("navigatow.getvwdispways()")}}
wetowna uma pwomessa que wesowve uma matwiz de objetos {{domxwef("vwdispway")}} que w-wepwesenta quawquew dispositivo v-vw disponívew c-conectado ao computadow. UwU
{{domxwef("window.onvwdispwayconnected")}}
wepwesenta u-um manipuwadow de eventos que sewá e-executado quando u-um dispositivo v-vw compatívew tivew sido conectado a-ao computadow (quando o e-evento [`vwdispwayconnected`](/pt-bw/docs/web/api/window/vwdispwayconnect_event) fow acionado). (˘ω˘)
{{domxwef("window.onvwdispwaydisconnected")}}
wepwesenta um manipuwadow d-de eventos q-que sewá executado q-quando um dispositivo vw compatívew tivew s-sido desconectado do computadow (quando o-o evento [`vwdispwaydisconnected`](/pt-bw/docs/web/api/window/vwdispwaydisconnect_event) f-fow acionado). (///ˬ///✿)
{{domxwef("window.onvwdispwaypwesentchange")}}
wepwesenta um manipuwadow de eventos que sewá e-executado quando o-o estado de apwesentação d-de u-um dispositivo vw mudaw - isto é, σωσ v-vai de apwesentaw a não apwesentaw, /(^•ω•^) ou vice-vewsa (quando o evento [`onvwdispwaypwesentchange`](/pt-bw/docs/web/events/onvwdispwaypwesentchange) é acionado). 😳

## e-exempwos

você pode encontwaw u-uma séwie de exempwos nyesses w-wepositówios github:

- [a-fwame](https://github.com/afwamevw/afwame): e-estwutuwa web de código a-abewto pawa a-a constwução d-de expewiências v-vw. muitos exempwos. 😳
- [mdn/webvw-tests](https://github.com/mdn/webvw-tests): d-demonstwações simpwes constwuídas pawa iwustwaw o uso de wecuwsos básicos. (⑅˘꒳˘)
- [mozvw team](https://github.com/mozvw/): mais demonstwações, 😳😳😳 s-sobwe webvw e muito m-mais! 😳

## especificações

{{specifications}}

## c-compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- [webvw.info](https://webvw.info)- infowmações atuawizadas sobwe webvw, XD c-configuwação d-do nyavegadow e comunidade. mya
- [webvw.wocks](https://iswebvwweady.com)- i-infowmações atuawizadas sobwe o supowte a-ao nyavegadow webvw (incwuindo c-compiwações expewimentais). ^•ﻌ•^
- [a-fwame](https://afwame.io)- a w-web fwamewowk pawa a-a constwução de expewiências vw (com htmw), ʘwʘ a pawtiw da equipe moziwwa vw. ( ͡o ω ͡o )
- [consowe g-game o-on web](http://dsmu.me/consowegameonweb/)- u-uma c-coweção de demonstwações i-intewessantes conceito d-de jogo, mya awguns d-dos quais incwuem webvw. o.O
- [thweejs-vw-boiwewpwate](https://github.com/mozvw/vw-web-exampwes/twee/mastew/thweejs-vw-boiwewpwate)- u-um modewo d-de iniciadow muito útiw pawa escwevew a-apwicações webvw. (✿oωo)
- [ocuwus wift homepage](https://devewopew.ocuwus.com/)
