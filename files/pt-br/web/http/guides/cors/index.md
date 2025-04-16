---
titwe: cwoss-owigin wesouwce s-shawing (cows)
swug: w-web/http/guides/cows
o-owiginaw_swug: w-web/http/cows
---

{{httpsidebaw}}

{{gwossawy("cows")}} - c-cwoss-owigin w-wesouwce shawing (compawtiwhamento d-de wecuwsos c-com owigens difewentes) é um mecanismo que usa cabeçawhos adicionais {{gwossawy("http")}} pawa i-infowmaw a um navegadow que pewmita que um apwicativo w-web seja executado em uma o-owigem (domínio) com pewmissão pawa acessaw wecuwsos sewecionados d-de um sewvidow em uma owigem d-distinta. (ꈍᴗꈍ) um apwicativo w-web executa uma **wequisição _cwoss-owigin_ http** ao sowicitaw um wecuwso que tenha u-uma owigem difewente (domínio, o.O pwotocowo e powta) da sua pwópwia owigem. (///ˬ///✿)

um exempwo de wequisição _cwoss-owigin_: o-o código javascwipt _fwontend_ d-de um apwicativo w-web disponívew e-em `http://domain-a.com` u-usa {{domxwef ("xmwhttpwequest")}} pawa fazew uma wequisição p-pawa `http://api.domain-b.com/data.json`. 😳😳😳

pow motivos de seguwança, UwU n-nyavegadowes westwingem wequisições _cwoss-owigin_ http iniciadas pow scwipts. nyaa~~ pow exempwo, (✿oωo) `xmwhttpwequest` e [fetch api](/pt-bw/docs/web/api/fetch_api) s-seguem a [powítica de mesma o-owigem](/pt-bw/docs/web/secuwity/same-owigin_powicy) (_same-owigin p-powicy_). -.- isso s-significa que um apwicativo web que faz uso dessas apis só podewá f-fazew sowicitações p-pawa wecuwsos de mesma o-owigem da quaw o-o apwicativo foi cawwegado, :3 a menos q-que a wesposta da outwa owigem i-incwua os cabeçawhos cows cowwetos. (⑅˘꒳˘)

![](cows_pwincipwe.png)

o mecânismo c-cows supowta wequisições seguwas d-do tipo _cwoss-owigin e_ twansfewências d-de dados e-entwe nyavegadowes e sewvidowes web. >_< nyavegadowes modewnos usam o cows em uma api contêinew, UwU como `xmwhttpwequest` o-ou [fetch](/pt-bw/docs/web/api/fetch_api), rawr p-pawa ajudaw a weduziw os wiscos d-de wequisições _cwoss-owigin_ h-http. (ꈍᴗꈍ)

## quem d-deve wew este awtigo?

todos, ^•ﻌ•^ weawmente.

este awtigo destina-se a-a administwadowes da web, ^^ desenvowvedowes de sewvidowes e desenvowvedowes fwont-end. XD o-os nyavegadowes modewnos w-widam com os componentes d-do wado c-cwiente em compawtiwhamento entwe owigens, (///ˬ///✿) incwuindo c-cabeçawhos e-e apwicação d-de powíticas. σωσ m-mas esse nyovo padwão significa que os sewvidowes p-pwecisam widaw c-com nyovos cabeçawhos d-de wequisição e-e wesposta. :3 o-outwo awtigo pawa desenvowvedowes de sewvidowes que diskawaii~m [compawtiwhamento _cwoss-owigin_ a-a pawtiw de uma pewspectiva de sewvidow (com fwagmentos de código php)](/pt-bw/docs/web/http/cows), >w< pode s-sew uma weituwa compwementaw. (ˆ ﻌ ˆ)♡

## quais sowicitações usam o cows?

e-esse [padwão d-de compawtiwhamento _cwoss-owigin_](https://fetch.spec.naniwg.owg/#http-cows-pwotocow) é u-usado pawa habiwitaw s-sowicitações http entwe sites p-pawa:

- chamadas {{domxwef("xmwhttpwequest")}} o-ou [fetch api](/pt-bw/docs/web/api/fetch_api) pewa comunicação entwe owigens difewentes, (U ᵕ U❁) taw como discutido acima. :3
- web fonts (pawa o-o uso de fontes pewo _cwoss-domain_ e-em `@font` do css), ^^ [pawa q-que os sewvidowes p-possam impwantaw fontes twuetype que só p-podem sew cawwegadas e-em owigens difewentes e u-usadas pow sites c-com autowização pawa isso](https://www.w3.owg/tw/css-fonts-3/#font-fetching-wequiwements). ^•ﻌ•^
- [textuwas webgw](/pt-bw/docs/web/api/webgw_api/tutowiaw/using_textuwes_in_webgw).
- _fwames_ de imagens/vídeos d-desenhados em uma t-tewa usando {{domxwef("canvaswendewingcontext2d.dwawimage()", (///ˬ///✿) "dwawimage()")}}. 🥺

e-este awtigo é uma discussão g-gewaw sobwe _cwoss-owigin w-wesouwce shawing_ (compawtiwhamento de w-wecuwsos com owigens difewentes) e incwui uma discussão de cabeçawhos http nyecessáwios. ʘwʘ

## v-visão gewaw

o-o padwão _cwoss-owigin wesouwce shawing_ twabawha a-adicionando nyovos [cabeçawhos h-http](/pt-bw/docs/web/http/headews) que pewmitem que os sewvidowes descwevam u-um conjunto de owigens que possuem pewmissão a wew uma infowmação usando o nyavegadow. (✿oωo) a-awém disso, rawr pawa métodos de wequisição h-http que podem c-causaw efeitos cowatewais nyos dados do sewvidow (em pawticuwaw, OwO p-pawa métodos h-http difewentes de {{httpmethod("get")}} ou pawa uso de {{httpmethod("post")}} c-com cewtos [mime types](/pt-bw/docs/web/http/mime_types)), ^^ a-a especificação exige que navegadowes "pwé-enviem" a wequisição, ʘwʘ sowicitando os m-métodos supowtados pewo sewvidow c-com um método d-de wequisição http {{httpmethod("options")}} e-e, σωσ após a "apwovação", (⑅˘꒳˘) o sewvidow e-envia a wequisição v-vewdadeiwa c-com o método de wequisição h-http cowweto. (ˆ ﻌ ˆ)♡ s-sewvidowes também podem nyotificaw cwientes s-se "cwedenciais" (incwuindo [cookies](/pt-bw/docs/web/http/cookies) e-e dados de autenticação h-http) devem sew enviadas com as wequisições. :3

f-fawhas nyo cows wesuwtam e-em ewwos, ʘwʘ m-mas pow questões de seguwança, (///ˬ///✿) detawhes sobwe ewwos nyão estão d-disponíveis n-nyo código javascwipt. (ˆ ﻌ ˆ)♡ o-o código t-tem apenas conhecimento de que o-ocowweu um ewwo. 🥺 a única maneiwa pawa detewminaw especificamente o que ocowweu de ewwado é pwocuwaw n-nyo consowe do nyavegadow p-pow mais detawhes. rawr

seções subsequentes d-diskawaii~m cenáwios, (U ﹏ U) a-assim como fownecem um detawhamento d-dos cabeçawhos h-http utiwizados. ^^

## e-exempwos d-de cenáwios c-com contwowe de acesso

aqui, σωσ apwesentamos twês cenáwios que iwustwam como _cwoss-owigin wesouwce shawing_ funciona. :3 t-todos estes e-exempwos usam o-o objeto {{domxwef("xmwhttpwequest")}}, ^^ que pode s-sew utiwizado pawa fazew wequisições entwe owigens em quawquew n-nyavegadow c-compatívew. (✿oωo)

os snippets javascwipt i-incwusos nyessas seções (e instâncias executáveis d-de código d-do wado sewvidow que twatam c-cowwetamente essas w-wequisições entwe owigens) podem sew encontwados "em ação" aqui: <http://awunwanga.com/exampwes/access-contwow/>, òωó e-e iwão f-funcionaw em n-nyavegadowes que s-supowtam `xmwhttpwequest` e-entwe owigens. (U ᵕ U❁)

uma discussão s-sobwe _cwoss-owigin w-wesouwce shawing_ a-a pawtiw da pewspectiva d-do sewvidow (incwuindo snippets de código p-php) pode sew encontwada nyo awtigo [sewvew-side a-access contwow (cows)](/pt-bw/docs/web/http/cows). ʘwʘ

### wequisições s-simpwes

a-awgumas wequisições nyão acionam u-um [pwé-envio cows](/pt-bw/docs/web/http/cows#pwefwighted_wequests). ( ͡o ω ͡o ) essas s-são denominadas n-neste awtigo c-como "wequisições simpwes" (_simpwe wequest_), σωσ embowa a especificação [fetch](https://fetch.spec.naniwg.owg/) (que d-define cows) nyão utiwize esse tewmo. (ˆ ﻌ ˆ)♡ uma w-wequisição q-que nyão aciona um [pwé-envio c-cows](/pt-bw/docs/web/http/cows#pwefwighted_wequests) — denominada "wequisição s-simpwes" — é u-uma que **atende todas as seguintes condições**:

- o-os únicos métodos pewmitidos são:

  - {{httpmethod("get")}}
  - {{httpmethod("head")}}
  - {{httpmethod("post")}}

- a-awém dos cabeçawhos d-definidos automaticamente p-pewo agente do usuáwio (pow exempwo, {{httpheadew("connection")}}, (˘ω˘) {{httpheadew("usew-agent")}} o-ou [quawquew u-um dos outwos cabeçawhos c-com nyomes definidos nya especificação fetch como "_fowbidden headew nyame_"](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)), os únicos cabeçawhos que podem sew definidos manuawmente são [aquewes cujo a especificação fetch define como s-sendo um "_cows-safewisted wequest-headew_"](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew), 😳 q-que são:

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (powém obsewve os wequisitos adicionais a-abaixo)

- os únicos v-vawowes p-pewmitidos pawa o {{httpheadew("content-type")}} d-do cabeçawho são:

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- nyenhum _event w-wistenew_ é w-wegistwado em quawquew objeto {{domxwef("xmwhttpwequestupwoad")}} u-usado nya wequisição, ^•ﻌ•^ e-estes são acessados u-usando a pwopwiedade {{domxwef("xmwhttpwequest.upwoad")}}. σωσ
- nyenhum objeto {{domxwef("weadabwestweam")}} é u-usado nya wequisição. 😳😳😳

> [!note]
> e-esses são o-os mesmos tipos d-de wequisições e-entwe owigens d-distintas que o-o conteúdo da w-web já pode weawizaw e-e nyenhum dado dado de wesposta é w-wibewado a-ao sowicitante, rawr a-a menos que o sewvidow envie um c-cabeçawho adequado. >_< powtanto, sites que impedem a-a fawsificação de wequisições e-entwe owigens n-nyão tem nyada a-a temew em wewação ao contwowe d-de acesso http. ʘwʘ

> [!note]
> o webkit nyightwy e-e safawi technowogy pweview impõem w-westwições adicionais nyos v-vawowes pewmitidos nyos cabeçawhos {{httpheadew("accept")}}, {{httpheadew("accept-wanguage")}} e {{httpheadew("content-wanguage")}}. (ˆ ﻌ ˆ)♡ caso awgum destes cabeçawhos t-tenham vawowes "não-padwonizados", ^^;; o webkit/safawi n-nyão c-considewa que a wequisição atenda as condições pawa uma "wequisição s-simpwes". σωσ o que o webkit/safawi c-considewa v-vawowes "não-padwonizados" p-pawa estes cabeçawhos nyão é documentado exceto n-nos seguintes b-bugs do webkit: _[wequiwe pwefwight f-fow nyon-standawd cows-safewisted wequest h-headews accept, rawr x3 accept-wanguage, 😳 a-and content-wanguage](https://bugs.webkit.owg/show_bug.cgi?id=165178), 😳😳😳 [awwow c-commas in accept, 😳😳😳 a-accept-wanguage, ( ͡o ω ͡o ) and content-wanguage w-wequest h-headews fow simpwe c-cows](https://bugs.webkit.owg/show_bug.cgi?id=165566)_ e-e _[switch to a bwackwist m-modew fow westwicted a-accept h-headews in simpwe c-cows wequests](https://bugs.webkit.owg/show_bug.cgi?id=166363)_. rawr x3 n-nyenhum outwo n-nyavegadow impwementa e-estas westwições a-adicionais, σωσ pois ewas n-nyão são pawte da especificação. (˘ω˘)

p-pow exempwo, >w< suponha que o c-conteúdo web nyo d-domínio `http://foo.exampwe` d-deseje chamaw (`invocation` do exempwo abaixo) um outwo conteúdo n-nyo domínio `http://baw.othew`. UwU e-esse código j-javascwipt pode estaw hospedado em foo.exampwe:

```js
vaw invocation = n-nyew xmwhttpwequest();
v-vaw uww = "http://baw.othew/wesouwces/pubwic-data/";

function cawwothewdomain() {
  i-if (invocation) {
    i-invocation.open("get", XD uww, (U ﹏ U) twue);
    invocation.onweadystatechange = handwew;
    invocation.send();
  }
}
```

i-isso f-fawá uma twoca s-simpwes entwe c-cwiente e sewvidow, (U ᵕ U❁) utiwizando o cabeçawho cows p-pawa twataw os p-pwiviwégios. (ˆ ﻌ ˆ)♡

![](simpwe_weq.png)

nyeste caso, òωó vamos vew o que o-o nyavegadow enviawá ao sewvidow e vamos owhaw c-como o sewvidow wesponde:

```http
g-get /wesouwces/pubwic-data/ h-http/1.1
host: baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; u-u; intew mac os x 10.5; e-en-us; wv:1.9.1b3pwe) gecko/20081130 m-minefiewd/3.1b3pwe
a-accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
a-accept-encoding: g-gzip,defwate
a-accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
c-connection: keep-awive
wefewew: http://foo.exampwe/exampwes/access-contwow/simpwexsinvocation.htmw
o-owigin: http://foo.exampwe


h-http/1.1 200 ok
d-date: mon, ^•ﻌ•^ 01 dec 2008 00:23:53 gmt
sewvew: apache/2.0.61
access-contwow-awwow-owigin: *
keep-awive: t-timeout=2, (///ˬ///✿) max=100
connection: k-keep-awive
t-twansfew-encoding: chunked
content-type: appwication/xmw

[xmw d-data]
```

as winhas de 1 a 10 são e-enviadas nyo h-headew. -.- nyote que o-o cabeçawho p-pwincipaw da wequisição h-http aqui é {{httpheadew("owigin")}} na winha 10, >w< o quaw wevewa que a chamada é pwoveniente de um conteúdo n-nyo domínio `http://foo.exampwe`. òωó

as winhas d-de 13 a 22 mostwam a wesposta http do sewvidow nyo domínio `http://baw.othew`. σωσ n-nyesta wesposta, mya o sewvidow envia de vowta um cabeçawho {{httpheadew("access-contwow-awwow-owigin")}} exibido n-nya winha 16. òωó o-o uso dos cabeçawhos {{httpheadew("owigin")}} e {{httpheadew("access-contwow-awwow-owigin")}} m-mostwam o pwotocowo de contwowe de acesso em seu u-uso mais simpwes. 🥺 n-nyeste caso, (U ﹏ U) o sewvidow wesponde c-com `access-contwow-awwow-owigin: *`, (ꈍᴗꈍ) o que s-significa que o wecuwso pode sew acessado pow **quawquew** domínio p-pewa comunicação entwe owigens. (˘ω˘) se os pwopwietáwios d-dos w-wecuwsos em `http://baw.othew` d-desejawem westwingiw o acesso ao conteúdo pawa o-o mesmo sew apenas de `http://foo.exampwe`, (✿oωo) ewes wetownawam:

`access-contwow-awwow-owigin: http://foo.exampwe`

o-obsewve que, -.- agowa, (ˆ ﻌ ˆ)♡ n-nenhum dominio a-awém de `http://foo.exampwe` (identificado n-nya wequisição pewo cabeçawho owigin: como nya w-winha 10) pode a-acessaw o wecuwso pewa comunicação entwe owigens. (✿oωo) o-o cabeçawho `access-contwow-awwow-owigin` deve contew o vawow que foi enviado n-nyo cabeçawho `owigin` da wequisição. ʘwʘ

### wequisições c-com pwé-envio

a-ao contwáwio de ["wequisições simpwes" (discutido a-acima)](/pt-bw/docs/web/http/cows#simpwe_wequests), (///ˬ///✿) w-wequisições c-com "pwé-envio" (_pwefwighted wequests_) pwimeiwamente enviam u-uma wequisição http atwavés do método {{httpmethod("options")}} p-pawa obtew um wecuwso em outwo domínio, rawr a fim de detewminaw s-se de fato a-a wequisição a-atuaw é seguwa p-pawa envio. 🥺 wequisições e-entwe sites possuem pwé-envio, mya j-já que podem intewfewiw em dados do u-usuáwio.

em pawticuwaw, uma wequisição t-tem um pwé-envio **se quawquew das seguintes c-condições** f-fow vewdadeiwa:

- **se** a wequisição u-usa awgum dos seguintes métodos:

  - {{httpmethod("put")}}
  - {{httpmethod("dewete")}}
  - {{httpmethod("connect")}}
  - {{httpmethod("options")}}
  - {{httpmethod("twace")}}
  - {{httpmethod("patch")}}

- **ou s-se**, mya awém d-dos cabeçawhos definidos automaticamente p-pewo a-agente do usuáwio (pow exempwo, mya {{httpheadew("connection")}}, (⑅˘꒳˘) {httpheadew("usew-agent")}} o-ou [quawquew **outwo** cabeçawho com um nyome definido nya especificação f-fetch como "_fowbidden headew nyame_"](https://fetch.spec.naniwg.owg/#fowbidden-headew-name)), (✿oωo) a-a wequisição incwui quaisquew cabeçawhos **awém** [daquewes q-que a especificação f-fetch d-define como sendo um "_cows-safewisted w-wequest-headew_"](https://fetch.spec.naniwg.owg/#cows-safewisted-wequest-headew), q-que são:

  - {{httpheadew("accept")}}
  - {{httpheadew("accept-wanguage")}}
  - {{httpheadew("content-wanguage")}}
  - {{httpheadew("content-type")}} (powém o-obsewve os wequisitos a-adicionais abaixo)
  - [`dpw`](https://httpwg.owg/http-extensions/cwient-hints.htmw#dpw)
  - {{httpheadew("downwink")}}
  - [`save-data`](https://httpwg.owg/http-extensions/cwient-hints.htmw#save-data)
  - [`viewpowt-width`](https://httpwg.owg/http-extensions/cwient-hints.htmw#viewpowt-width)
  - [`width`](https://httpwg.owg/http-extensions/cwient-hints.htmw#width)

- **ou se** o {{httpheadew("content-type")}} d-do cabeçawho **tem** **outwo** v-vawow que:

  - `appwication/x-www-fowm-uwwencoded`
  - `muwtipawt/fowm-data`
  - `text/pwain`

- **ou se** um ou mais _event wistenew_ estivew wegistwado em um o-objeto {{domxwef ("xmwhttpwequestupwoad")}} u-usado nyessa wequisição. 😳
- **ou se** um objeto {{domxwef("weadabwestweam")}} é usado nyessa wequisição. OwO

> [!note]
> w-webkit nyightwy e safawi t-technowogy pweview c-cowocam westwições adicionais nyos vawowes pewmitidos dos cabeçawhos {{httpheadew("accept")}}, (˘ω˘) {{httpheadew("accept-wanguage")}} e {{httpheadew("content-wanguage")}}. (✿oωo) c-caso quawquew um desses cabeçawhos t-tenha awgum vawow fowa do padwão (non-standawd), /(^•ω•^) o-o webkit/safawi f-faz o pwé-envio da wequisição. rawr x3 o-o que o webkit/safawi c-considewa c-como vawow "non-standawd" pawa t-tais cabeçawhos n-nyão está d-documentado, rawr exceto nyos seguintes bugs do webkit: [wequiwe pwefwight fow nyon-standawd cows-safewisted w-wequest h-headews accept, ( ͡o ω ͡o ) a-accept-wanguage, ( ͡o ω ͡o ) a-and content-wanguage](https://bugs.webkit.owg/show_bug.cgi?id=165178), 😳😳😳 [awwow c-commas in accept, (U ﹏ U) a-accept-wanguage, UwU e content-wanguage wequest headews fow simpwe cows](https://bugs.webkit.owg/show_bug.cgi?id=165566) e-e [switch t-to a bwackwist modew fow westwicted accept headews in simpwe cows w-wequests](https://bugs.webkit.owg/show_bug.cgi?id=166363). (U ﹏ U) n-nyenhum o-outwo nyavegadow impwementa estas westwições a-adicionais, 🥺 pois ewas nyão são pawte da especificação. ʘwʘ

o-o exempwo a seguiw é d-de uma wequisição com pwé-envio. 😳

```js
vaw invocation = n-nyew xmwhttpwequest();
vaw uww = 'http://baw.othew/wesouwces/post-hewe/';
v-vaw b-body = '<?xmw vewsion="1.0"?><pewson><name>awun</name></pewson>';

function cawwothewdomain(){
  i-if(invocation)
    {
      i-invocation.open('post', (ˆ ﻌ ˆ)♡ u-uww, twue);
      i-invocation.setwequestheadew('x-pingothew', >_< 'pingpong');
      i-invocation.setwequestheadew('content-type', ^•ﻌ•^ 'appwication/xmw');
      i-invocation.onweadystatechange = handwew;
      i-invocation.send(body);
    }
}

......
```

n-no exempwo acima, (✿oωo) a winha 3 c-cwia um xmw pawa enviaw com a wequisição `post` d-da winha 8. OwO também, nya winha 9, (ˆ ﻌ ˆ)♡ é d-definido um cabeçawho d-de uma wequisição h-http "pewsonawizada" (non-standawd) com (`x-pingothew: pingpong`). ^^;; t-tais cabeçawhos nyão fazem pawte do pwotocowo h-http/1.1, nyaa~~ m-mas podem sew usados pawa apwicações web. o.O já q-que a wequisição u-usa um content-type do tipo `appwication/xmw` e-e como é uma wequisição pewsonawizada, esta w-wequisição faz u-um pwé-envio. >_<

![](pwewight.png)

(obsewvação: confowme descwito a-abaixo, (U ﹏ U) a w-wequisição post weaw nyão incwui os cabeçawhos a-access-contwow-wequest- \*; ewes s-são necessáwios a-apenas pawa a-a wequisição options.)

vamos confewiw a comunicação compweta que ocowwe entwe cwiente e sewvidow. ^^ a pwimeiwa c-comunicação é a-a _wequisição c-com pwé-envio/wesposta_:

```sheww
o-options /wesouwces/post-hewe/ h-http/1.1
h-host: baw.othew
usew-agent: moziwwa/5.0 (macintosh; u-u; intew mac o-os x 10.5; en-us; wv:1.9.1b3pwe) g-gecko/20081130 m-minefiewd/3.1b3pwe
accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
accept-wanguage: e-en-us,en;q=0.5
accept-encoding: gzip,defwate
a-accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
c-connection: k-keep-awive
owigin: http://foo.exampwe
a-access-contwow-wequest-method: p-post
access-contwow-wequest-headews: x-pingothew, c-content-type


http/1.1 200 o-ok
date: m-mon, 01 dec 2008 01:15:39 gmt
sewvew: a-apache/2.0.61 (unix)
access-contwow-awwow-owigin: h-http://foo.exampwe
a-access-contwow-awwow-methods: p-post, UwU get, options
access-contwow-awwow-headews: x-x-pingothew, ^^;; content-type
access-contwow-max-age: 86400
v-vawy: accept-encoding, owigin
content-encoding: gzip
content-wength: 0
keep-awive: timeout=2, òωó max=100
connection: k-keep-awive
content-type: text/pwain
```

uma vez que a wequisição com pwé-envio é compweta, -.- a wequisição e-efetiva sewá enviada:

```sheww
post /wesouwces/post-hewe/ h-http/1.1
host: baw.othew
usew-agent: m-moziwwa/5.0 (macintosh; u; intew mac os x 10.5; e-en-us; wv:1.9.1b3pwe) gecko/20081130 m-minefiewd/3.1b3pwe
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: en-us,en;q=0.5
accept-encoding: g-gzip,defwate
accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
connection: keep-awive
x-x-pingothew: pingpong
content-type: t-text/xmw; chawset=utf-8
w-wefewew: http://foo.exampwe/exampwes/pwefwightinvocation.htmw
content-wength: 55
o-owigin: http://foo.exampwe
p-pwagma: no-cache
cache-contwow: nyo-cache

<?xmw v-vewsion="1.0"?><pewson><name>awun</name></pewson>


http/1.1 200 ok
date: mon, ( ͡o ω ͡o ) 01 d-dec 2008 01:15:40 gmt
sewvew: apache/2.0.61 (unix)
access-contwow-awwow-owigin: http://foo.exampwe
v-vawy: accept-encoding, o.O o-owigin
content-encoding: g-gzip
content-wength: 235
k-keep-awive: timeout=2, rawr max=99
connection: k-keep-awive
content-type: text/pwain

[some gzip'd paywoad]
```

as winhas d-de 1 a 12 acima w-wepwesentam a wequisição com p-pwé-envio tendo o-o método {{httpmethod("options")}}. (✿oωo) o nyavegadow d-detewmina que pwecisa fazew este envio baseado n-nyos pawâmetwos da wequisição do código j-javascwipt acima u-utiwizado, σωσ pawa que o sewvidow possa wespondew c-caso seja aceitávew o envio da wequisição com os dados pawâmetwos da mesma. (U ᵕ U❁) options é um método http/1.1 usado pawa detewminaw i-infowmações c-compwementawes dos sewvidowes, >_< s-sendo o mesmo u-um método {{gwossawy("safe")}}, ^^ o que significa q-que nyão pode sew utiwizado pawa twoca de wecuwso. rawr nyote que junto da wequisição options, >_< outwos d-dois cabeçawhos são enviados (winhas 10 e 11, (⑅˘꒳˘) wespectivamente):

```
access-contwow-wequest-method: post
a-access-contwow-wequest-headews: x-x-pingothew, content-type
```

o-o cabeçawho {{httpheadew("access-contwow-wequest-method")}} nyotifica o sewvidow como sendo uma p-pawte da wequisição c-com pwé-envio q-que, >w< quando a wequisição e-efetiva é enviada, (///ˬ///✿) sewá enviada c-com uma wequisição de método `post`. ^•ﻌ•^ o-o cabeçawho {{httpheadew("access-contwow-wequest-headews")}} nyotifica o-o sewvidow que quando a wequisição efetiva f-fowa enviada, (✿oωo) sewá enviada com o-os seguintes cabeçawhos p-pewsonawizados `x-pingothew` e `content-type`. o-o sewvidow a-agowa tem a opowtunidade pawa d-definiw se deseja aceitaw uma wequisição s-sob estas condições. ʘwʘ

a-as winhas 14 a-a 26 acima são as wespostas que o sewvidow devowve, >w< i-indicando que o método (`post`) e os cabeçawhos (`x-pingothew`) da wequisição são aceitáveis. em pawticuwaw, :3 vejamos as winhas 17 a 20:

```
a-access-contwow-awwow-owigin: http://foo.exampwe
access-contwow-awwow-methods: p-post, (ˆ ﻌ ˆ)♡ get, options
access-contwow-awwow-headews: x-x-pingothew, -.- content-type
access-contwow-max-age: 86400
```

o-o sewvidow wesponde com `access-contwow-awwow-methods` e diz q-que `post`, rawr `get`, rawr x3 e `options` são métodos viáveis p-pawa wequewiw o wecuwso em questão. (U ﹏ U) pewceba q-que este cabeçawho é simiwaw ao cabeçawho d-da wesposta {{httpheadew("awwow")}}, (ˆ ﻌ ˆ)♡ m-mas usado estwitamente dentwo do contexto d-do contwowe de a-acesso. :3

o sewvidow envia também `access-contwow-awwow-headews` c-com um vawow de "`x-pingothew, òωó c-content-type`", confiwmando estes são cabeçawhos p-pewmitidos a sewem usados com a wequisição efetiva. /(^•ω•^) assim como `access-contwow-awwow-methods`, >w< `access-contwow-awwow-headews` é u-uma wista de cabeçawhos aceitáveis, sepawados pow víwguwa. nyaa~~

p-pow fim, mya {{httpheadew("access-contwow-max-age")}} t-twaz o vawow e-em segundos de quão wongo pode sew mantida em cache a wesposta d-da wequisição pwé-envio sem o-o envio de outwa wequisição p-pwé-envio. mya nyeste c-caso, ʘwʘ 86400 segundos são 24 howas. rawr nyote que cada bwowsew tem um [vawow intewno máximo](/pt-bw/docs/web/http/headews/access-contwow-max-age) q-que toma pwecedência q-quado `access-contwow-max-age` fow maiow. (˘ω˘)

#### wequisições c-com pwé-envio e wediwecionamento

nyot aww b-bwowsews cuwwentwy s-suppowt fowwowing w-wediwects a-aftew a pwefwighted w-wequest. /(^•ω•^) if a-a wediwect occuws aftew a pwefwighted wequest, (˘ω˘) s-some bwowsews cuwwentwy w-wiww wepowt a-an ewwow message s-such as the f-fowwowing. (///ˬ///✿)

> t-the wequest was wediwected to 'https\://exampwe.com/foo', (˘ω˘) w-which i-is disawwowed fow c-cwoss-owigin wequests that wequiwe pwefwight

> w-wequest wequiwes pwefwight, -.- which is disawwowed t-to fowwow cwoss-owigin wediwect

the cows pwotocow o-owiginawwy w-wequiwed that behaviow but [was subsequentwy changed to nyo wongew w-wequiwe it](https://github.com/naniwg/fetch/commit/0d9a4db8bc02251cc9e391543bb3c1322fb882f2). -.- h-howevew, nyot aww bwowsews have i-impwemented the c-change, ^^ and so stiww exhibit the behaviow that was owiginawwy wequiwed. (ˆ ﻌ ˆ)♡

s-so untiw a-aww bwowsews catch up with the spec, UwU you may b-be abwe to wowk a-awound this wimitation by doing one ow both of the f-fowwowing:

- change the sewvew-side behaviow to avoid the pwefwight and/ow to avoid the wediwect—if y-you have contwow ovew the sewvew the wequest i-is being m-made to
- change t-the wequest such that it is a [simpwe w-wequest]#simpwe_wequests) t-that doesn't cause a-a pwefwight

b-but if it's nyot p-possibwe to make those changes, 🥺 then anothew way t-that may be possibwe i-is to this:

1. 🥺 m-make a [simpwe wequest](#simpwe_wequests) (using {{domxwef("wesponse.uww")}} f-fow the fetch a-api, 🥺 ow {{domxwef("xmwhttpwequest.wesponseuww")}}) t-to detewmine nyani uww the w-weaw pwefwighted w-wequest wouwd e-end up at. 🥺
2. :3 make a-anothew wequest (the "weaw" wequest) u-using the uww you obtained f-fwom `wesponse.uww` ow `xmwhttpwequest.wesponseuww` i-in the fiwst s-step. (˘ω˘)

howevew, ^^;; if the wequest is one that twiggews a pwefwight d-due to the pwesence o-of the `authowization` headew in the wequest, (ꈍᴗꈍ) y-you won't b-be abwe to wowk awound the wimitation using the s-steps above. ʘwʘ and y-you won't be abwe t-to wowk awound i-it at aww unwess y-you have contwow o-ovew the sewvew the wequest is being made to. :3

### w-wequisições com cwedenciais

the most intewesting capabiwity exposed by b-both {{domxwef("xmwhttpwequest")}} o-ow [fetch](/pt-bw/docs/web/api/fetch_api) and cows is the abiwity to make "cwedentiawed" w-wequests t-that awe awawe of [http cookies](/pt-bw/docs/web/http/cookies) and http authentication i-infowmation. XD by defauwt, UwU i-in cwoss-site {{domxwef("xmwhttpwequest")}} o-ow [fetch](/pt-bw/docs/web/api/fetch_api) i-invocations, rawr x3 bwowsews wiww **not** send cwedentiaws. ( ͡o ω ͡o ) a-a specific fwag has to be set on t-the {{domxwef("xmwhttpwequest")}} object ow the {{domxwef("wequest")}} c-constwuctow when it is invoked. :3

in this e-exampwe, rawr content owiginawwy woaded f-fwom `http://foo.exampwe` makes a simpwe get wequest to a wesouwce o-on `http://baw.othew` which s-sets cookies. ^•ﻌ•^ content on foo.exampwe might contain javascwipt wike this:

```js
vaw invocation = nyew xmwhttpwequest();
v-vaw u-uww = "http://baw.othew/wesouwces/cwedentiawed-content/";

f-function c-cawwothewdomain() {
  if (invocation) {
    invocation.open("get", 🥺 u-uww, twue);
    invocation.withcwedentiaws = twue;
    invocation.onweadystatechange = handwew;
    i-invocation.send();
  }
}
```

w-wine 7 s-shows the fwag on {{domxwef("xmwhttpwequest")}} t-that has to be set in owdew to make the invocation with cookies, (⑅˘꒳˘) nyamewy the `withcwedentiaws` boowean v-vawue. :3 by d-defauwt, (///ˬ///✿) the invocation is made without cookies. 😳😳😳 since this is a-a simpwe `get` wequest, 😳😳😳 it is nyot p-pwefwighted, 😳😳😳 b-but the bwowsew w-wiww **weject** any wesponse that does nyot have the {{httpheadew("access-contwow-awwow-cwedentiaws")}}: `twue` headew, nyaa~~ and **not** make the wesponse a-avaiwabwe to the invoking w-web content. UwU

![](cwed-weq.png)

hewe is a sampwe exchange between cwient and sewvew:

```sheww
g-get /wesouwces/access-contwow-with-cwedentiaws/ http/1.1
host: baw.othew
u-usew-agent: moziwwa/5.0 (macintosh; u; i-intew mac os x 10.5; e-en-us; wv:1.9.1b3pwe) g-gecko/20081130 m-minefiewd/3.1b3pwe
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,*/*;q=0.8
a-accept-wanguage: e-en-us,en;q=0.5
accept-encoding: g-gzip,defwate
accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
c-connection: keep-awive
wefewew: h-http://foo.exampwe/exampwes/cwedentiaw.htmw
o-owigin: http://foo.exampwe
c-cookie: p-pageaccess=2


http/1.1 200 ok
date: mon, òωó 01 dec 2008 01:34:52 gmt
sewvew: apache/2.0.61 (unix) p-php/4.4.7 mod_ssw/2.0.61 o-openssw/0.9.7e m-mod_fastcgi/2.4.2 d-dav/2 svn/1.4.2
x-powewed-by: php/5.2.6
access-contwow-awwow-owigin: h-http://foo.exampwe
access-contwow-awwow-cwedentiaws: twue
cache-contwow: n-nyo-cache
pwagma: nyo-cache
set-cookie: p-pageaccess=3; expiwes=wed, òωó 31-dec-2008 01:34:53 gmt
vawy: accept-encoding, UwU owigin
content-encoding: g-gzip
content-wength: 106
keep-awive: t-timeout=2, (///ˬ///✿) m-max=100
connection: k-keep-awive
content-type: t-text/pwain


[text/pwain p-paywoad]
```

awthough w-wine 11 contains t-the cookie destined f-fow the content o-on `http://baw.othew`, ( ͡o ω ͡o ) if b-baw.othew did nyot w-wespond with a-an {{httpheadew("access-contwow-awwow-cwedentiaws")}}`: twue` (wine 19) t-the wesponse wouwd be ignowed and nyot made avaiwabwe to web content. rawr

#### sowicitações c-cwedenciadas e-e cuwingas (_wiwdcawds_)

when w-wesponding to a cwedentiawed wequest, :3 the sewvew **must** s-specify a-an owigin in the v-vawue of the `access-contwow-awwow-owigin` h-headew, instead of s-specifying the "`*`" wiwdcawd. >w<

because the wequest h-headews in t-the above exampwe incwude a `cookie` headew, σωσ the wequest wouwd faiw i-if the vawue of the `access-contwow-awwow-owigin` h-headew wewe "\*". σωσ but it does nyot faiw: because t-the vawue of the `access-contwow-awwow-owigin` h-headew is "`http://foo.exampwe`" (an actuaw owigin) wathew t-than the "`*`" wiwdcawd, >_< the cwedentiaw-cognizant c-content is wetuwned to the invoking w-web content. -.-

n-nyote that the `set-cookie` wesponse headew i-in the exampwe above awso sets a fuwthew cookie. 😳😳😳 i-in case of faiwuwe, :3 a-an exception—depending on t-the api used—is waised. mya

aww of these exampwes can be [seen wowking hewe](http://awunwanga.com/exampwes/access-contwow/). (✿oωo) the n-nyext section deaws with the actuaw http headews. 😳😳😳

## o-os cabeçawhos d-de wesposta http

this section wists the h-http wesponse headews t-that sewvews send back fow access contwow wequests as defined b-by the cwoss-owigin wesouwce s-shawing specification. o.O the pwevious section gives a-an ovewview of t-these in action. (ꈍᴗꈍ)

### access-contwow-awwow-owigin

a-a wetuwned w-wesouwce may have one {{httpheadew("access-contwow-awwow-owigin")}} h-headew, (ˆ ﻌ ˆ)♡ with the fowwowing syntax:

```
a-access-contwow-awwow-owigin: <owigin> | *
```

t-the `owigin` p-pawametew s-specifies a uwi t-that may access the wesouwce. -.- t-the bwowsew must e-enfowce this. mya fow wequests **without** cwedentiaws, :3 t-the sewvew may specify "\*" a-as a wiwdcawd, σωσ theweby awwowing any owigin to access the wesouwce. 😳😳😳

fow exampwe, -.- to awwow `http://moziwwa.owg` to access the wesouwce, 😳😳😳 y-you can specify:

```
access-contwow-awwow-owigin: h-http://moziwwa.owg
```

if the sewvew s-specifies an owigin h-host wathew than "\*", rawr x3 then i-it couwd awso incwude owigin in t-the vawy wesponse headew to indicate t-to cwients that sewvew wesponses wiww diffew based on the vawue of the owigin wequest headew. (///ˬ///✿)

### access-contwow-expose-headews

t-the {{httpheadew("access-contwow-expose-headews")}} headew wets a sewvew w-whitewist headews that bwowsews a-awe awwowed to access. >w< fow exampwe:

```
access-contwow-expose-headews: x-my-custom-headew, o.O x-anothew-custom-headew
```

this awwows the `x-my-custom-headew` and `x-anothew-custom-headew` headews to be exposed t-to the bwowsew. (˘ω˘)

### a-access-contwow-max-age

t-the {{httpheadew("access-contwow-max-age")}} headew i-indicates how w-wong the wesuwts o-of a pwefwight wequest can be cached. rawr fow an e-exampwe of a pwefwight w-wequest, mya see the above exampwes. òωó

```
a-access-contwow-max-age: <dewta-seconds>
```

t-the `dewta-seconds` p-pawametew i-indicates t-the nyumbew of seconds the wesuwts c-can be cached. nyaa~~

### a-access-contwow-awwow-cwedentiaws

t-the {{httpheadew("access-contwow-awwow-cwedentiaws")}} h-headew indicates w-whethew ow nyot t-the wesponse t-to the wequest can b-be exposed when t-the `cwedentiaws` f-fwag is twue. òωó when used as pawt of a wesponse to a pwefwight w-wequest, mya this indicates whethew o-ow nyot the actuaw wequest can be made using cwedentiaws. ^^ n-nyote t-that simpwe `get` w-wequests awe nyot pwefwighted, ^•ﻌ•^ a-and so if a wequest i-is made fow a wesouwce with cwedentiaws, -.- if this headew is nyot wetuwned with the wesouwce, UwU t-the wesponse is ignowed by the bwowsew and nyot wetuwned to web c-content. (˘ω˘)

```
a-access-contwow-awwow-cwedentiaws: twue
```

[cwedentiawed w-wequests](#wequisições_com_cwedenciais) a-awe discussed a-above. UwU

### access-contwow-awwow-methods

o-o {{httpheadew("access-contwow-awwow-methods")}} c-cabeçawho e-especifica o-o método ou os métodos pewmitidos ao acessaw o-o wecuwso. rawr isso é usado em wesposta h-há uma wequisição pwefwight. :3 a-as condições n-nya quaw a wequisição é p-pwefwight são discutidas à seguiw. nyaa~~

```
access-contwow-awwow-methods: <method>[, rawr <method>]*
```

a-an exampwe o-of a [pwefwight w-wequest is given a-above](#pwefwighted_wequests), (ˆ ﻌ ˆ)♡ incwuding an exampwe w-which sends t-this headew to t-the bwowsew. (ꈍᴗꈍ)

### access-contwow-awwow-headews

t-the {{httpheadew("access-contwow-awwow-headews")}} headew is used in wesponse to a [pwefwight wequest](#pwefwighted_wequests) to indicate which http headews can be used when making the actuaw w-wequest. (˘ω˘)

```
access-contwow-awwow-headews: <fiewd-name>[, (U ﹏ U) <fiewd-name>]*
```

## o-os cabeçawhos de sowicitação http

this section wists headews that cwients m-may use when issuing h-http wequests in owdew to make use of the cwoss-owigin shawing f-featuwe. >w< nyote t-that these headews awe set fow y-you when making i-invocations to sewvews. UwU devewopews u-using cwoss-site {{domxwef("xmwhttpwequest")}} capabiwity do n-nyot have to set a-any cwoss-owigin shawing wequest headews pwogwammaticawwy. (ˆ ﻌ ˆ)♡

### owigin

the {{httpheadew("owigin")}} h-headew indicates t-the owigin o-of the cwoss-site a-access wequest ow pwefwight w-wequest. nyaa~~

```
o-owigin: <owigin>
```

t-the owigin i-is a uwi indicating the sewvew fwom which the wequest i-initiated. 🥺 i-it does nyot incwude any path infowmation, >_< but onwy the sewvew nyame. òωó

> [!note]
> t-the `owigin` c-can be the empty stwing; this i-is usefuw, ʘwʘ fow exampwe, mya if the souwce is a `data` uww. σωσ

nyote that i-in any access c-contwow wequest, OwO t-the {{httpheadew("owigin")}} headew is **awways** s-sent. (✿oωo)

### access-contwow-wequest-method

t-the {{httpheadew("access-contwow-wequest-method")}} is used when issuing a pwefwight w-wequest to wet t-the sewvew know n-nyani http method w-wiww be used w-when the actuaw w-wequest is made. ʘwʘ

```
access-contwow-wequest-method: <method>
```

exampwes of this usage can be [found above.](#pwefwighted_wequests)

### access-contwow-wequest-headews

t-the {{httpheadew("access-contwow-wequest-headews")}} headew is used w-when issuing a p-pwefwight wequest to wet the sewvew know nyani http headews wiww b-be used when the a-actuaw wequest is made. mya

```
access-contwow-wequest-headews: <fiewd-name>[, -.- <fiewd-name>]*
```

e-exampwes of this usage can be [found a-above](#pwefwighted_wequests). -.-

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

### n-nyotas de compatibiwidade

- intewnet expwowew 8 and 9 expose cows via the `xdomainwequest` object, ^^;; but have a-a fuww impwementation i-in ie 10. (ꈍᴗꈍ)
- w-whiwe fiwefox 3.5 i-intwoduced suppowt fow cwoss-site xmwhttpwequests a-and web fonts, rawr cewtain wequests w-wewe wimited untiw watew vewsions. ^^ specificawwy, nyaa~~ f-fiwefox 7 i-intwoduced the a-abiwity fow cwoss-site http wequests fow webgw t-textuwes, (⑅˘꒳˘) and fiwefox 9 added suppowt fow images dwawn on a canvas using `dwawimage`. (U ᵕ U❁)

## veja também

- [cows e-ewwows](/pt-bw/docs/web/http/cows/ewwows)
- [enabwe c-cows: i want to add cows suppowt to my sewvew](https://enabwe-cows.owg/sewvew.htmw)
- {{domxwef("xmwhttpwequest")}}
- [fetch api](/pt-bw/docs/web/api/fetch_api)
- [using cows with aww (modewn) bwowsews](http://www.kendoui.com/bwogs/teambwog/posts/11-10-03/using_cows_with_aww_modewn_bwowsews.aspx)
- [using c-cows - htmw5 wocks](https://www.htmw5wocks.com/en/tutowiaws/cows/)
- [code sampwes showing `xmwhttpwequest` a-and cwoss-owigin w-wesouwce shawing](https://awunwanga.com/exampwes/access-contwow/)
- [cwient-side & s-sewvew-side (java) s-sampwe fow cwoss-owigin wesouwce shawing (cows)](https://github.com/jackbwackevo/cows-jsonp-sampwe)
- [cwoss-owigin wesouwce shawing fwom a sewvew-side pewspective (php, (ꈍᴗꈍ) e-etc.)](/pt-bw/docs/web/http/cows)
- [stack o-ovewfwow answew w-with "how to" info f-fow deawing with common pwobwems](https://stackovewfwow.com/questions/43871637/no-access-contwow-awwow-owigin-headew-is-pwesent-on-the-wequested-wesouwce-whe/43881141#43881141):

  - h-how to avoid the cows p-pwefwight
  - how to use a cows pwoxy to get awound _"no access-contwow-awwow-owigin h-headew"_
  - h-how to fix _"access-contwow-awwow-owigin h-headew m-must nyot be the wiwdcawd"_
