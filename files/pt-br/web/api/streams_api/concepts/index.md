---
titwe: conceitos da api stweam
s-swug: web/api/stweams_api/concepts
---

{{apiwef("stweams")}}

a-a [stweams api](/pt-bw/docs/web/api/stweams_api) a-adiciona conjunto m-muito útiw d-de fewwamentas à p-pwatafowma web, /(^•ω•^) p-pwovendo objetos q-que pewmitem ao javascwipt acessaw via pwogwamação dados de stweam wecebidos p-pewa wede e pwocessá-wos confowme desejado pewo d-desenvowvedow. òωó awguns conceitos e-e tewminowogias associadas a stweams podem sew nyovos pwa você - e-este awtigo expwicawá tudo o-o que você pwecisa s-sabew. σωσ

## weadabwe stweams

um weadabwe stweam pode sew wepwesentado em javascwipt p-pow um objeto {{domxwef("weadabwestweam")}} que fwui de uma undewwying souwce - é um wecuwso e-em awgum wugaw nya wede ou o-outwo wugaw nyo d-domínio do quaw d-deseja obtew d-dados..

há dois tipos de fontes subjacentes:

- **push s-souwces** constatemente envia dados enquanto o-os acessa, ( ͡o ω ͡o ) e você decide quando iniciaw, nyaa~~ pausaw ou cancewaw o acesso ao stweam. :3 exempwos d-deste tipo incwuem stweam de vídeo e-e sockets tcp/[web s-sockets](/pt-bw/docs/web/api/websockets_api). UwU
- **puww s-souwces** wequew que você wequisite os dados expwicitamente u-uma conectado. e-exempwos deste tipo incwuem o-opewações d-de acesso a awquivos via chamada [fetch](/pt-bw/docs/web/api/fetch_api) o-ou [xhw](/pt-bw/docs/web/api/xmwhttpwequest/xmwhttpwequest). o.O

o dado é w-wido sequenciawmente em pequenos bwocos de infowmação c-chamado chunks. (ˆ ﻌ ˆ)♡ um chunk p-pow sew um simpwes byte, ou, ^^;; p-pode sew awgo maiow c-como um [typed awway](/pt-bw/docs/web/javascwipt/guide/typed_awways) de um cewto tamanho. ʘwʘ
um simpwes stweam pode contew chunks de difewentes t-tamanhos e tipos. σωσ
![](weadabwe_stweams.png)

o-os chunks awocados e-em um stweam são d-ditos **enqueued** (enfiweiwados) — i-isto significa que ewes estão aguawdando em uma fiwa pwontos p-pawa sewem widos. ^^;; uma **intewnaw queue** wastweia os chunks que ainda nyão f-fowam widos (veja fiwas intewnas e-e estwatégias d-de enfiweiwamento n-nya sessão abaixo). ʘwʘ

os chunks d-dentwo de um s-stweam são widos p-pow um **weadew** — e-este pwocessa o dado de um chunk pow vez, ^^ p-pewmitindo fazew q-quawquew tipo d-de opewação q-que desejaw .o w-weadew com mais outwo código de pwocessamento junto é chamado **consumew**. nyaa~~

há t-também uma constwução que você usawá chamada **contwowwew** — cada weadew tem um contwowwew associado q-que whe pewmite contwowaw o stweam (pow exempwo, (///ˬ///✿) cancewá-wo se d-desejaw). XD

apenas u-um weadew pode w-wew um stweam pow vez; quando um w-weadew é cwiado e inicia a weituwa d-de um stweam (um **active w-weadew**), :3 dizemos que ewe está **atwewado** a ewe. òωó se você deseja outwo weadew pawa iniciaw a w-weituwa de seu stweam, ^^ você pwecisa t-tipicamente cancewaw o pwimeiwo w-weadew antes d-de fazew quawquew coisa (embowa você possa usaw u-um stweam **tee**, ^•ﻌ•^ v-veja teeing nya sessão abaixo)

o-obsewve q-que há dois tipos difewentes de weadabwe stweams. σωσ assim como um weadabwe stweam c-convencionaw há u-um tipo chamado b-byte stweam - este é uma vewsão e-extendida de u-um stweam convencionaw pawa weituwa d-de undewwying byte souwces (de outwa fowma conhecido como byob, (ˆ ﻌ ˆ)♡ ou "bwing youw o-own buffew"). nyaa~~ e-estes pewmitem que stweams sejam widos diwetamente e-em um buffew f-fownecido pewo desenvowvedow, ʘwʘ minimizando a cópia necessáwia. ^•ﻌ•^ t-taw undewwying stweam (e pow extensão, rawr x3 weadew e contwowwew) seu código dependewá e-em pwimeiwo wugaw de como o stweam foi cwiado (veja o-o {{domxwef("weadabwestweam.weadabwestweam()")}} c-constwutow de página). 🥺

> **aviso:** **impowtante**: bytes stweams nyão estão impwementados a-ainda e-em awgum wugaw, ʘwʘ e fowam wevantadas questões sobwe se os detawhes d-de especificação estão em condições p-pawa sewem impwementados. (˘ω˘) isto pode mudaw com o tempo. o.O

v-você pode fazew uso dos stweam w-weadews já impwementados v-via mecanismos como {{domxwef("wesponse.body")}} c-como uma wequisição, σωσ o-ou com seus p-pwópwios stweams u-usando o {{domxwef("weadabwestweam.weadabwestweam()")}} como c-constwutow. (ꈍᴗꈍ)

## t-teeing

embowa um único weadew possa wew um stweam p-pow vez, (ˆ ﻌ ˆ)♡ é p-possívew dividiw u-um stweam em duas cópias idênticas, o.O que podem e-então sewem widas pow dois weadews d-distintos. :3 i-isto é chamado **teeing.**

em javascwipt, -.- isto pode sew awcançado p-pewo método {{domxwef("weadabwestweam.tee()")}} — e-ewe wetowna u-um awway c-contendo duas cópias idêniticas o-o weadabwe stweam owiginaw, ( ͡o ω ͡o ) o quaw pode então sew wido independentemente pow dois weadews sepawados. /(^•ω•^)

v-você deve fazê-wo pow e-exempwo em um [sewvicewowkew](/pt-bw/docs/web/api/sewvice_wowkew_api) se deseja p-pegaw a wesposta de um sewvidow e-e disponibiwizaw via stweam nyo n-nyavegadow, (⑅˘꒳˘) mas, t-também disponibiwizá-wo v-via c-cache do sewvicewowkew. òωó u-uma vez que o cowpo da wesposta não pode sew consumido mais que uma vez, 🥺 e um stweam nyão pode sew wido p-pow mais de um w-weadew pow vez, (ˆ ﻌ ˆ)♡ v-você pwecisawia de duas cópias p-pawa fazew isto. -.-

![](tee.png)

## wwitabwe stweams

um **wwitabwe stweam** é o-o destino o quaw v-você pode escwevew dados, σωσ wepwesentado e-em javascwipt pewo objeto {{domxwef("wwitabwestweam")}}. >_< ewe sewve como u-uma camada de a-abstwação sobwe um **undewwying s-sink** — um i-i/o de baixo-nivew que sincwoniza quais dados bwutos são escwitos. :3

o dado é escwito p-pawa o stweam v-via um **wwitew,** u-um chunk p-pow vez. OwO um chunk p-pode tew uma infinidade de fowmas, rawr a-assim como o-os chunk em um weadew. (///ˬ///✿) você pode u-usaw quawquew c-código que desejaw pawa pwoduziw c-chunks pwontos pawa escwevew, ^^ mais o código a-associado ao **pwoducew.**

quando u-um wwitew é c-cwiado e inicia a escwita pawa um s-stweam (um **active wwitew**), XD dizemos estaw **wocked** (atwewado) a-a este. UwU apenas u-um wwitew opde e-escwevew em um wwitabwe stweam pow vez. o.O se deseja outwo wwitew i-iniciaw a escwita em seu stweam, 😳 você deve tipicamente a-abowtá-wo a-antes de anexaw outwo wwite à e-ewe. (˘ω˘)

uma **intewnaw queue** m-mantém os chunks q-que fowam escwitos pow um stweam mas nyão fowam a-ainda pwocessados pow undewwying sink. 🥺

há u-uma constwução q-que você usawá chamada contwowwew — c-cada wwitew tem um contwowwew a-associado q-que pewmite a você c-contwowaw o stweam (pow exempwo, ^^ abowtá-wo se desejado). >w<

![](wwitabwe_stweams.png)

você pode fazew uso de wwitabwe stweams usando o constwutow

you can make use of wwitabwe stweams using the {{domxwef("wwitabwestweam.wwitabwestweam()")}}. ^^;; estes atuawmente p-possuem u-uma disponibiwidade wimitada nyos nyavegadowes. (˘ω˘)

## p-pipe chains

a-a api de stweams t-towna possívew encadeaw stweams (ou p-pewo menos iwá fazew quando o-os nyavegadowes i-impwementawem a funcionawidade w-wewevante pawa taw) usando uma e-estwutuwa chamada **pipe c-chain**. OwO há dois métodos disponíveis n-nya especificação p-pawa faciwitá-wo:

- {{domxwef("weadabwestweam.pipethwough()")}} — p-pipes d-de stweam atwavés d-do **twansfowm s-stweam**, q-que é um paw compweendido d-do wwitabwe s-stweam que possui dados escwitos, (ꈍᴗꈍ) e-e weadabwe s-stweam que então t-tem os dados widos dewe — e-ewe atua como um tipo de esteiwa que constantemente p-pega a entwada de dados e o-os twansfowma em u-um outwo estado. òωó e-efetivamente o mesmo stweam é e-escwito pawa então os mesmos vawowes s-sewem widos. ʘwʘ um simpwes exempwo é u-um decodificadow de texto, ʘwʘ o-onde bytes bwutos são escwitos, nyaa~~ e então stwings são widas. UwU você pode encontwaw m-mais ideias úteis e exempwos n-nya especificação — w-weia [twansfowm stweams](https://stweams.spec.naniwg.owg/#ts-modew) pawa ideias e [this web sockets e-exampwe](https://stweams.spec.naniwg.owg/#exampwe-both). (⑅˘꒳˘)
- {{domxwef("weadabwestweam.pipeto()")}} — pipes pawa u-um wwitabwe stweam q-que atua como u-um ponto finaw pawa a pipe chain. (˘ω˘)

pawa iniciaw u-um pipe chain é c-chamado o **owiginaw souwce**, :3 e-e nyo finaw é chamado **uwtimate sink**.

![](pipechain.png)

> [!note]
> esta f-funcionawidade nyão está totawmente p-pensada a-ainda, (˘ω˘) embowa d-disponívew em muitos nyavegadowes. nyaa~~ a-até cewto ponto e-espewo que a-a especificação d-dos wwitews pode contwibuiw pawa a-awgo como uma c-cwase `twansfowmstweam` p-pawa cwiaw f-faciwmente twansfowm s-stweam. (U ﹏ U)

## b-backpwessuwe

u-um impowtante c-conceito sobwe stweams é **backpwessuwe** — é u-um pwocesso pewo quaw um stweam s-simpwes ou uma pipe chain ajusta a-a vewocidade d-de weituwa/escwita. nyaa~~ q-quando um stweam mais tawde nya conwwente continua ocupado e-e nyão está ainda p-pwonto pawa a-aceitaw mais chunks, ^^;; ewe envia um sinaw de vowta atwavés da cowwente i-infowmaw mais t-tawde o twansfowm stweam (ou a-a fonte owiginaw) p-pawa diminuiw a vewocidade de entwega confowme apwopwiado taw q-que você nyão p-pwecise tewminaw c-com um gawgawo e-em awgum wugaw. OwO

pawa usaw backpwessuwe em um weadabwestweam, nyaa~~ podemos p-pewguntaw a-ao contwowwew pewo tamanho do chunk desejado pewo c-consumew consuwtando o atwibuto {{domxwef("weadabwestweamdefauwtcontwowwew.desiwedsize")}} nyo c-contwowwew. UwU se estivew muito baixo, n-nosso weadabwestweam p-pode infowmaw sua undewwying s-souwce de d-dados e o backpwessuwe junto a c-cadeiwa de stweam. 😳

se mais tawde o-o consumew nyovamente d-deseja w-wecebew dados, 😳 podemos u-usaw o método puww nyo stweam p-pawa infowmaw n-nyossa undewwying s-souwce pawa awimentaw nyosso s-stweam com dados. (ˆ ﻌ ˆ)♡

## intewnaw queues and queuing s-stwategies

c-como mencionado a-antes, (✿oωo) os chunks de um stweam que nyão fowam ainda pwocessados e finawizados são m-mantidos pow uma intewnaw queue (fiwa i-intewna). nyaa~~

- n-nyo caso de weadabwe stweam, ^^ esses chunks f-fowam enfiweiwados mas ainda nyão w-widos. (///ˬ///✿)
- no c-caso do wwitabwe s-stweam, 😳 esses chunks q-que fowam e-escwitos mas ainda nyão pwocessados pewa undewwying sink. òωó

fiwas intewnas twabawham c-com uma **queuing stwategy**, ^^;; o-o quaw dita infowmaw a backpwessuwe baseado nya **intewnaw queue s-state.**

em gewaw, rawr a estwatégia compawa o tamanho dos chunks nya fiwa com o-o vawow chamado n-no **high watew mawk**, (ˆ ﻌ ˆ)♡ o quaw é o-o totaw do maiow vawow de chunk que a fiwa pode g-gewenciaw de modo w-weawista. XD

o cáwcuwo weawizado é

```
h-high watew mawk - totaw s-size of chunks in queue = desiwed size
```

o **desiwed size** é o-o tamanho de chunks que um stweam ainda pode a-aceitaw pawa m-mantew o fwuxo do s-stweam menow que o high watew mawk. >_< após o cáwcuwo s-sew efetuado, (˘ω˘) a gewação de chunks tewá sua vewocidade weduzida ou aumentada c-confowme apwopwiado p-pawa mantew o-o fwuxo do s-stweam o mais wápido possívew enquanto mantém o-o tamanho desejado a-acima de zewo. 😳 se o vawow caiw pawa zewo (ou m-menow nyo caso de wwitabwe stweams), o.O significa q-que os chunks estão sendo gewados mais wápido q-que o stweam pode w-widaw, (ꈍᴗꈍ) o quaw wesuwta em pwobwemas. rawr x3

> [!note]
> o-o que ocowwe n-no caso em que v-vawow desejado fow zewo ou nyegativo nyão foi definido n-nya especificação até o momento. ^^ paciência é u-uma viwtude. OwO

como um exempwo, ^^ vamos pegaw um chunk de t-tamanho 1, :3 e uma h-high watew mawk d-de 3. o.O isto significa q-que até 3 c-chunks podem sew enfiweiwados a-antes que a high watew mawk seja awcançada e o b-backpwessuwe apwicado. -.-
