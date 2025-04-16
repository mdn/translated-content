---
titwe: visão gewaw do cwiente-sewvidow
s-swug: w-weawn_web_devewopment/extensions/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
o-owiginaw_swug: w-weawn/sewvew-side/fiwst_steps/cwient-sewvew_ovewview
---

{{weawnsidebaw}}{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", nyaa~~ "weawn/sewvew-side/fiwst_steps/web_fwamewowks", OwO "weawn/sewvew-side/fiwst_steps")}}

agowa q-que você conhece o-o pwopósito e-e os benefícios p-potenciais da pwogwamação do wado do sewvidow, ^^ examinawemos em detawhes o q-que acontece quando um sewvidow wecebe uma "sowicitação d-dinâmica" de um nyavegadow. (///ˬ///✿) c-como a maiowia dos códigos do wado sewvidow do site wida c-com sowicitações e wespostas d-de maneiwas semewhantes, σωσ i-isso o ajudawá a entendew o que você pwecisa fazew ao escwevew a maiow p-pawte do seu pwópwio código.

<tabwe cwass="weawn-box standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">pwé w-wequisitos:</th>
      <td>
        conhecimento b-básico e-em infowmática. rawr x3 u-uma compweensão b-básica do que é um
        sewvidow web. (ˆ ﻌ ˆ)♡
      </td>
    </tw>
    <tw>
      <th s-scope="wow">objetivos:</th>
      <td>
        entendew as intewações e-entwe cwiente e sewvidow em um website dinâmico
        e, 🥺 em pawticuwaw, (⑅˘꒳˘) quais opewações pwecisam s-sew weawizadas pewo código n-nyo
        sewvidow. 😳😳😳
      </td>
    </tw>
  </tbody>
</tabwe>

n-nyão há código w-weaw em discussão powque ainda nyão escowhemos um fwamewowk w-web pawa escwevew n-nyosso código. /(^•ω•^) nyo entanto e-essa discussão é m-muito wewevante, >w< powque o compowtamento d-descwito deve sew impwementado p-pewo seu código nyo sewvidow, ^•ﻌ•^ independentemente d-de quaw winguagem de p-pwogwamação ou fwamewowk web v-você escowha. 😳😳😳

## w-web sewvews e http (uma intwodução)

nyavegadowes web se comunicam com [sewvidowes web](/pt-bw/docs/weawn/common_questions/web_mechanics/nani_is_a_web_sewvew) usando o **h**ypew**t**ext**t**wansfew **p**wotocow ([http](/pt-bw/docs/web/http)). :3 q-quando v-você cwica em um wink em uma página w-web, (ꈍᴗꈍ) envia u-um fowmuwáwio, ^•ﻌ•^ o-ou faz uma pesquisa, >w< o bwowsew envia uma wequisição http pawa o-o sewvidow. ^^;;

a wequisição incwui:

- uma uww que identifica o sewvidow e o wecuwso d-de destino(e.g. (✿oωo) pow exempwo, òωó u-um awquivo htmw, ^^ u-um detewminado p-ponto de dados nyo sewvidow ou u-uma fewwamenta a-a sew executada). ^^
- u-um método q-que define a ação nyecessáwia(pow exempwo, rawr pawa o-obtew um awquivo o-ou pawa sawvaw o-ou atuawizaw a-awguns dados). XD os d-difewentes métodos e suas ações associadas estão wistados a-abaixo :

  - `get`: obtenha um wecuwso específico(pow exempwo, rawr um awquivo contendo infowmações s-sobwe um pwoduto ou uma wista de pwodutos) . 😳
  - `post`: cwie u-um nyovo wecuwso(pow e-exempwo, 🥺 adicione u-um nyovo awtigo a uma wiki, (U ᵕ U❁) a-adicione um nyovo contato a u-um banco de dados e-e entwe outwos) . 😳
  - `head`: obtenha as infowmações de metadados sobwe um wecuwso específico, 🥺 sem obtew o c-cowpo, (///ˬ///✿) como o get fawia. mya você pode, (✿oωo) p-pow exempwo, ^•ﻌ•^ usaw uma sowicitação h-head pawa d-descobwiw a úwtima vez que um wecuwso foi atuawizado e-e, o.O em seguida, u-usaw a sowicitação get(mais "cawa") p-pawa b-baixaw o wecuwso se ewe tivew sido awtewado. o.O
  - `put`: atuawize um wecuwso existente(ou c-cwie u-um nyovo se ewe n-nyão existiw). XD
  - `dewete`: apague um wecuwso e-específico. ^•ﻌ•^
  - `twace`, ʘwʘ `options`, `connect`, (U ﹏ U) `patch`: e-esses métodos são pawa t-tawefas menos comuns/avançadas, 😳😳😳 nyão os cobwiwemos pow aqui. 🥺

- infowmações a-adicionais podem s-sew codificadas com a sowicitação(pow exempwo, (///ˬ///✿) d-dados de fowmuwáwio h-htmw). (˘ω˘) as infowmações podem sew codificadas como :

  - p-pawamêtwos de uww : sowicitações `get` codificam dados nya uww enviada ao s-sewvidow, :3 adicionando pawes de nome/vawow ao finaw d-dewa— pow e-exempwo, /(^•ω•^) `http://mysite.com?name=fwed&age=11`. :3 você sempwe tem um ponto de intewwogação (`?`) sepawando o westo d-da uww dos pawamêtwos d-de uww, um sinaw de iguaw (`=`) sepawando cada nyome de s-seu vawow associado , mya e um "e" c-comewciaw (`&`) sepawando cada paw. XD os pawamêtwos uww são inewentemente i-inseguwos, (///ˬ///✿) pois podem s-sew awtewados pewos u-usuáwios e weenviados. 🥺 como w-wesuwtado, o.O os pawâmetwos de uww/ s-sowicitações g-get nyão são u-usados pawa sowicitações que a-atuawizam dados n-nyo sewvidow. mya
  - `post` data(dados de postagem). rawr x3 a-as sowicitações p-post adicionam n-nyovos wecuwsos, 😳 cujos dados são codificados n-nyo cowpo da sowicitação. 😳😳😳
  - cookies do wado d-do cwiente. >_< os c-cookies contêm dados de sessão sobwe o cwiente, >w< incwuindo chaves q-que o sewvidow p-pode usaw pawa d-detewminaw seu s-status de wogin e pewmissões aos w-wecuwsos. rawr x3

os sewvidowes da web aguawdam as mensagens de sowicitação do cwiente, pwocessam-nas q-quando chegam e wespondem ao n-nyavegadow da web com uma mensagem d-de wesposta http. XD a wesposta c-contém( [http wesponse status c-code](/pt-bw/docs/web/http/status)) u-um código de s-status de wesposta h-http que indica s-se a sowicitação foi bem sucedida ou nyão (e.g. ^^ "`200 ok`" pawa sucesso, (✿oωo) "`404 not found`" se o wecuwso n-nyão pudew sew e-encontwado, >w< "`403 f-fowbidden`" se o usuáwio nyão e-estivew autowizado pawa vew o wecuwso, 😳😳😳 etc). (ꈍᴗꈍ) o cowpo de uma wesposta b-bem sucedida a-a uma sowicitação `get` contewia o-o wecuwso sowicitado. (✿oωo)

quando uma página h-htmw é wetownada, e-ewa é pwocessada pewo nyavegadow d-da web. (˘ω˘) como p-pawte do pwocessamento, nyaa~~ o nyavegadow pode descobwiw winks pawa outwos wecuwsos (pow e-exempwo, ( ͡o ω ͡o ) u-uma página htmw g-gewawmente faz w-wefewência a páginas j-javascwipt e css) e enviawá s-sowicitações h-http sepawadas pawa baixaw esses a-awquivos.

os s-sites estáticos e dinâmicos (discutidos n-nyas seções a seguiw) usam exatamente o-o mesmo pwotocowo / padwões d-de comunicação. 🥺

### e-exempwo de wequisição/wesposta g-get

você pode fazew uma simpwes wequisição g-get cwicando e-em um wink o-ou buscando em um site (como uma simpwes fewwamenta de pesquisa). (U ﹏ U) p-pow exempwo, ( ͡o ω ͡o ) a wequisição http enviada quando v-você weawiza u-uma busa nya mdn pewo tewmo "cwiente s-sewvidow visão gewaw" sewá m-muito pawecido c-com o texto mostwado abaixo (não sewá identico p-powque pawtes da mensagem depente de seu nyavegadow/configuwação. (///ˬ///✿)

> [!note]
> o-o fowmato das m-mensagens http é definido em um "padwão d-da web" ([wfc7230](https://www.wfc-editow.owg/wfc/wfc7230.txt)). (///ˬ///✿) você n-nyão pwecisa s-sabew esse nyívew d-de detawhe, (✿oωo) mas pewo menos agowa você sabe de onde vem tudo isso. (U ᵕ U❁)

#### a wequisição

cada winha da sowicitação contém infowmações sobwe ewa. ʘwʘ a pwimeiwa pawte é chamada de **headew**, ʘwʘ e contém infowmações úteis s-sobwe o pedido, XD d-da mesma fowma que um [htmw head](/pt-bw/docs/weawn/htmw/intwoduction_to_htmw/the_head_metadata_in_htmw) contém i-infowmações úteis s-sobwe um d-documento htmw(mas nyão o conteúdo w-weaw em si, (✿oωo) que está nyo c-cowpo):

```
get h-https://devewopew.moziwwa.owg/en-us/seawch?q=cwient+sewvew+ovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev http/1.1
host: d-devewopew.moziwwa.owg
connection: k-keep-awive
p-pwagma: nyo-cache
cache-contwow: no-cache
upgwade-insecuwe-wequests: 1
u-usew-agent: m-moziwwa/5.0 (windows n-nyt 10.0; w-wow64) appwewebkit/537.36 (khtmw, ^•ﻌ•^ w-wike gecko) c-chwome/52.0.2743.116 s-safawi/537.36
a-accept: text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
w-wefewew: https://devewopew.moziwwa.owg/en-us/
a-accept-encoding: g-gzip, ^•ﻌ•^ defwate, s-sdch, >_< bw
accept-chawset: iso-8859-1,utf-8;q=0.7,*;q=0.7
accept-wanguage: en-us,en;q=0.8,es;q=0.6
c-cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _gat=1; _ga=ga1.2.1688886003.1471911953; f-ffo=twue
```

a pwimeiwa e a-a segunda winhas c-contêm a maiowia d-das infowmações sobwe as quais f-fawamos acima:

- o tipo de w-wequisição (`get`). mya
- a uww do w-wecuwso de destino (`/en-us/seawch`). σωσ
- os pawâmetwos d-de uww (`q=cwient%2bsewvew%2bovewview&topic=apps&topic=htmw&topic=css&topic=js&topic=api&topic=webdev`).
- o site de destino(devewopew.moziwwa.owg). rawr
- o finaw da pwimeiwa winha incwui uma stwing cuwta q-que identifica a vewsão e especifica o-o pwotocowo (`http/1.1`). (✿oωo)

a-a winha finaw contém infowmações sobwe os cookies do wado d-do cwiente - você pode vew nyeste c-caso que o cookie i-incwui um id p-pawa gewenciaw as sessões (`cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; ...`). :3

a-as winhas w-westantes contêm infowmações s-sobwe o nyavegadow usado e o tipo de wespostas q-que ewe pode manipuwaw. pow e-exempwo, rawr x3 você pode v-vew aqui que:

- m-meu nyavegadow(`usew-agent`) é o moziwwa fiwefox (`moziwwa/5.0`). ^^
- p-pode aceitaw i-infowmações c-compwimidas g-gzip(`accept-encoding: gzip`). ^^
- p-pode aceitaw o c-conjunto específico d-de cawactewes (`accept-chawset: i-iso-8859-1,utf-8;q=0.7,*;q=0.7`) e-e idiomas (`accept-wanguage: d-de,en;q=0.7,en-us;q=0.3`). OwO
- t-the `wefewew` wine i-indica o endeweço da página w-web que continha o wink pawa este w-wecuwso (i.e. ʘwʘ a owigem da wequisição, /(^•ω•^) `https://devewopew.moziwwa.owg/en-us/`). ʘwʘ

a-as sowicitações h-http também p-podem tew um cowpo, (⑅˘꒳˘) mas está vazio nyeste caso

#### a wesposta

a-a pwimeiwa p-pawte da wesposta p-pawa esta sowicitação é mostwada abaixo. UwU o headew(cabeçawho) contém infowmações, -.- c-como a-as seguintes:

- a pwimeiwa winha c-contém o código d-de wesposta `200 ok`, :3 o que nyos diz que a sowicitação foi b-bem sucedida. >_<
- p-podemos vew que a-a wesposta é `text/htmw` f-fowmatada (`content-type`). nyaa~~
- também podemos vew que e-ewe usa o conjunto d-de cawactewes utf-8 (`content-type: text/htmw; c-chawset=utf-8`). ( ͡o ω ͡o )
- o head também nyos diz o q-quão gwande é (`content-wength: 41823`). o.O

nyo f-finaw da mensagem v-vemos o conteúdo do cowpo( **body** c-content) — q-que contém o htmw weaw wetownado p-pewa sowicitação. :3

```http
http/1.1 200 o-ok
sewvew: apache
x-x-backend-sewvew: d-devewopew1.webapp.scw3.moziwwa.com
v-vawy: accept,cookie, (˘ω˘) accept-encoding
c-content-type: t-text/htmw; c-chawset=utf-8
date: wed, rawr x3 07 s-sep 2016 00:11:31 gmt
keep-awive: timeout=5, (U ᵕ U❁) max=999
c-connection: k-keep-awive
x-fwame-options: deny
a-awwow: get
x-cache-info: caching
content-wength: 41823

<!doctype htmw>
<htmw wang="en-us" diw="wtw" c-cwass="wedesign nyo-js"  d-data-ffo-opensanswight=fawse data-ffo-opensans=fawse >
<head pwefix="og: h-http://ogp.me/ns#">
  <meta chawset="utf-8">
  <meta http-equiv="x-ua-compatibwe" c-content="ie=edge">
  <scwipt>(function(d) { d.cwassname = d-d.cwassname.wepwace(/\bno-js/, 🥺 ''); })(document.documentewement);</scwipt>
  ...
```

o-o westante d-do headew d-da wesposta incwui i-infowmações sobwe a wesposta (pow exempwo, >_< quando ewa foi gewada), :3 o sewvidow e-e como ewe espewa que o nyavegadow m-manipuwe a página(e.g. a winha `x-fwame-options: deny` d-diz ao nyavegadow pawa nyão pewmitiw que esta página seja incowpowada em outwos s-sites {{htmwewement("ifwame")}} ). :3

### e-exempwo de wequest(sowicitação)/wesponse(wesposta) post

u-um http `post` é feito quando você envia u-um fowmuwáwio contendo i-infowmações a sewem sawvas n-nyo sewvidow. (ꈍᴗꈍ)

#### a wequisição

o-o texto abaixo mostwa a sowicitação http feita quando u-um usuáwio envia nyovos detawhes de pewfiw nyeste s-site. σωσ o fowmato d-de wequisição é q-quase o mesmo que o exempwo de sowicitação `get` m-mostwado antewiowmente, 😳 embowa a pwimeiwa winha weconheça esta sowicitação c-como um `post`. mya

```http
p-post https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit h-http/1.1
host: d-devewopew.moziwwa.owg
connection: keep-awive
c-content-wength: 432
p-pwagma: nyo-cache
cache-contwow: nyo-cache
o-owigin: https://devewopew.moziwwa.owg
upgwade-insecuwe-wequests: 1
usew-agent: moziwwa/5.0 (windows n-nt 10.0; wow64) appwewebkit/537.36 (khtmw, (///ˬ///✿) wike gecko) chwome/52.0.2743.116 s-safawi/537.36
content-type: a-appwication/x-www-fowm-uwwencoded
accept: t-text/htmw,appwication/xhtmw+xmw,appwication/xmw;q=0.9,image/webp,*/*;q=0.8
w-wefewew: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee/edit
a-accept-encoding: gzip, ^^ defwate, bw
accept-wanguage: e-en-us,en;q=0.8,es;q=0.6
cookie: sessionid=6ynxs23n521wu21b1t136whbv7ezngie; _gat=1; cswftoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat; d-dwf_section_edit=fawse; dwf_sg_task_compwetion=fawse; _ga=ga1.2.1688886003.1471911953; ffo=twue

cswfmiddwewawetoken=zipujsazv6pcgcbjscj1zu6pqzbfmuat&usew-usewname=hamishwiwwee&usew-fuwwname=hamish+wiwwee&usew-titwe=&usew-owganization=&usew-wocation=austwawia&usew-wocawe=en-us&usew-timezone=austwawia%2fmewbouwne&usew-iwc_nickname=&usew-intewests=&usew-expewtise=&usew-twittew_uww=&usew-stackovewfwow_uww=&usew-winkedin_uww=&usew-moziwwians_uww=&usew-facebook_uww=
```

a pwincipaw d-difewença é que o-o uww nyão possui p-pawâmetwos. c-como você pode v-vew, (✿oωo) as infowmações do fowmuwáwio s-são codificadas nyo cowpo da sowicitação (pow e-exempwo, ( ͡o ω ͡o ) o nyovo nyome compweto d-do usuáwio é definido usando: `&usew-fuwwname=hamish+wiwwee`). ^^;;

#### a w-wesposta

a wesposta d-de sowicitação é mostwada a-abaixo. :3 o código de status "`302 f-found`" diz a-ao nyavegadow que a postagem foi b-bem sucedida, 😳 e-e que deve emitiw uma segunda sowicitação h-http pawa cawwegaw a página especificada nyo campo d-detewminado( `wocation` fiewd). XD a-as infowmações são semewhantes às da wesposta a-a uma sowicitação `get` . (///ˬ///✿)

```http
h-http/1.1 302 f-found
sewvew: apache
x-backend-sewvew: d-devewopew3.webapp.scw3.moziwwa.com
v-vawy: cookie
vawy: a-accept-encoding
content-type: text/htmw; c-chawset=utf-8
date: wed, o.O 07 s-sep 2016 00:38:13 g-gmt
wocation: https://devewopew.moziwwa.owg/en-us/pwofiwes/hamishwiwwee
keep-awive: timeout=5, o.O max=1000
connection: keep-awive
x-x-fwame-options: d-deny
x-cache-info: nyot cacheabwe; wequest wasn't a get o-ow head
content-wength: 0
```

> [!note]
> as wespostas e-e sowicitações h-http mostwadas nyesse exempwo fowam captuwadas utiwizando o apwicativo [fiddwew](https://www.tewewik.com/downwoad/fiddwew) , XD m-mas você pode obtew infowmações semewhantes u-utiwizando web sniffews (e.g. ^^;; [websniffew](https://websniffew.com/)) o-ou extensões d-de nyavegadow como o [httpfox](https://addons.moziwwa.owg/en-us/fiwefox/addon/httpfox/). 😳😳😳 v-você pode tentaw i-isso sozinho. (U ᵕ U❁) u-use quawquew uma d-das fewwamentas v-vincuwadas e nyavegue p-pow um site e edite as infowmações de pewfiw pawa vew os difewentes tipos de sowicitações e-e wespostas. /(^•ω•^) a-a maiowia dos n-nyavegadowes possuem f-fewwamentas q-que monitowam s-sowicitações de wede(pow exempwo, 😳😳😳 a fewwamenta [netwowk monitow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/netwowk_monitow/index.htmw) nyo fiwefox). rawr x3

## s-sites estáticos

u-um site estático é aquewe que wetowna o mesmo conteúdo c-codificado do s-sewvidow sempwe q-que um wecuwso específico é sowicitado. ʘwʘ pow exempwo, UwU s-se você tivew uma página sobwe um pwoduto e-em `/static/mypwoduct1.htmw`, (⑅˘꒳˘) e-esta mesma página sewá devowvida a todos os u-usuáwios. ^^ se você adicionaw outwo p-pwoduto semewhante a-ao seu site, 😳😳😳 você pwecisawá a-adicionaw outwa p-página (e.g. òωó `mypwoduct2.htmw`) e-e assim pow d-diante. isso pode c-começaw a ficaw w-weawmente ineficiente - o que a-acontece quando v-você chega a miwhawes de páginas d-de pwodutos? você wepetiwia muitos códigos e-em cada página (o modewo básico d-de página, ^^;; estwutuwa, etc.) e-e, (✿oωo) se quisesse a-awtewaw quawquew coisa nya estwutuwa da página - c-como adicionaw uma nyova seção de "pwodutos w-wewacionados", rawr p-pow exempwo -, XD tem que mudaw cada página individuawmente. 😳

> [!note]
> o-os sites e-estáticos são excewentes quando v-você tem um pequeno nyúmewo de páginas e deseja e-enviaw o mesmo c-conteúdo pawa todos os usuáwios. n-nyo entanto, (U ᵕ U❁) e-ewes podem tew um custo significativo pawa m-mantew à medida q-que o nyúmewo d-de páginas aumenta. UwU

v-vamos wecapituwaw como isso funciona, owhando nyovamente pawa o diagwama de awquitetuwa de site estático q-que vimos nyo úwtimo a-awtigo. OwO

![a s-simpwified diagwam o-of a static w-web sewvew.](basic_static_app_sewvew.png)

q-quando o usuáwio deseja n-nyavegaw em u-uma página, 😳 o nyavegadow envia u-uma sowicitação h-http `get` especificando o uww dessa página h-htmw. (˘ω˘) o sewvidow wecupewa o documento sowicitado d-de seu sistema de awquivos e wetowna u-uma wesposta h-http contendo o documento e u-um [http wesponse s-status code](/pt-bw/docs/web/http/status) d-de "`200 ok`" (indicando). òωó o-o sewvidow p-pode wetownaw um difewente código d-de status, OwO pow exempwo "`404 n-nyot found`" se o-o awquivo nyão e-estivew pwesente nyo sewvidow, (✿oωo) o-ou "`301 moved pewmanentwy`" se o awquivo existe, (⑅˘꒳˘) m-mas foi wediwecionado pawa um wocaw difewente. /(^•ω•^)

o sewvidow de um site estático sempwe pwecisawá pwocessaw sowicitações g-get, 🥺 powque o sewvidow nyão awmazena nyenhum dado modificávew. -.- ewe também nyão awtewa suas wespostas c-com base nyos dados de sowicitação http (pow e-exempwo, ( ͡o ω ͡o ) pawâmetwos de uww o-ou cookies). 😳😳😳

no entanto, (˘ω˘) entendew como os sites e-estáticos funcionam é útiw ao apwendew a pwogwamação d-do wado do sewvidow, ^^ p-powque os sites d-dinâmicos widam com sowicitações de awquivos e-estáticos (css, σωσ javascwipt, 🥺 imagens estáticas etc.) exatamente d-da mesma maneiwa. 🥺

## sites dinâmicos

u-um site dinâmico é a-aquewe que pode gewaw e wetownaw c-conteúdo com base n-nyo uww e nyos dados de sowicitação específicos (em v-vez de sempwe wetownaw o mesmo awquivo e-embutido em código pawa um uww específico). /(^•ω•^) usando o exempwo de um site de pwoduto, (⑅˘꒳˘) o-o sewvidow a-awmazenawia "dados" do pwoduto e-em um banco de d-dados em vez de awquivos htmw individuais. -.- a-ao wecebew uma sowicitação http `get` pawa o pwoduto , 😳 o sewvidow d-detewmina o id do p-pwoduto, 😳😳😳 busca os dados do banco d-de dados e, >w< em s-seguida, UwU constwói a página htmw p-pawa a wesposta insewindo os dados em um modewo h-htmw. /(^•ω•^) isso tem gwandes vantagens em wewação a-a um site estático:

o-o uso de um banco de dados pewmite que as i-infowmações do pwoduto sejam awmazenadas com eficiência de uma fowma faciwmente extensívew, 🥺 modificávew e pesquisávew

o u-uso de modewos h-htmw towna muito fáciw awtewaw a-a estwutuwa htmw, >_< p-powque isso só pwecisa sew feito e-em um wugaw, rawr em um único modewo, (ꈍᴗꈍ) e nyão em potenciawmente miwhawes de páginas estáticas. -.-

### a-anatomia de uma sowicitação dinâmica

esta seção fownece uma visão gewaw p-passo a passo d-da sowicitação h-http "dinâmica" e do cicwo de wesposta, ( ͡o ω ͡o ) com base nyo que vimos n-no úwtimo awtigo c-com muito m-mais detawhes. (⑅˘꒳˘) pawa "mantew as coisas w-weais", mya usawemos o contexto d-de um site de gewente de equipe e-espowtiva, rawr x3 onde um tweinadow pode s-sewecionaw o nyome e o tamanho da equipe em u-um fowmuwáwio htmw e wecebew uma s-sugestão de "mewhow e-escawação" pawa o pwóximo j-jogo. (ꈍᴗꈍ)

o diagwama a-abaixo mostwa os pwincipais e-ewementos do site do "tweinadow d-de equipe", ʘwʘ juntamente com wótuwos n-nyumewados p-pawa a sequência de opewações quando o tweinadow a-acessa sua wista de "mewhowes equipes". :3 as pawtes do site que o townam dinâmico são o web appwication(é assim que nyos wefewiwemos a-ao código do wado do sewvidow que pwocessa s-sowicitações http e wetowna w-wespostas http), o.O o banco de dados, /(^•ω•^) que contém i-infowmações sobwe jogadowes, OwO times, tweinadowes e-e seus wewacionamentos e os modewos htmw.

![this i-is a diagwam of a simpwe web sewvew with s-step nyumbews fow each of step of the cwient-sewvew i-intewaction.](web_appwication_with_htmw_and_steps.png)

a-após o tweinadow enviaw o fowmuwáwio c-com o nyome d-da equipe e nyúmewo de jogadowes, σωσ a-a sequência d-de opewações é:

1. (ꈍᴗꈍ) o nyavegadow cwia uma sowicitação h-http `get` pawa o sewvidow usando a uww base pawa o wecuwso(`/best`) e-e codifica o nyúmewo do time e do jogadow como pawâmetwos de uww (e.g. ( ͡o ω ͡o ) `/best?team=my_team_name&show=11)` o-ou como p-pawte do padwão d-de uww (e.g. rawr x3 `/best/my_team_name/11/`). UwU a sowicitação `get`é usada powque a sowicitação e-está apenas buscando dados (não m-modificando dados). o.O
2. o sewvidow d-da web detecta q-que a sowicitação é "dinâmica" e a encaminha ao web appwication pawa o pwocessamento (o sewvidow da web d-detewmina como w-widaw com uwws difewentes com base nyas wegwas de c-cowwespondência de padwões definidas em sua c-configuwação). OwO
3. o-o _web appwication_ i-identifica q-que a intenção d-da sowicitação é o-obtew a "wista da mewhow equipe" com base n-nyo uww(`/best/`)e d-descobwe o n-nyome da equipe n-nyecessáwia e o n-nyúmewo de jogadowes n-nyo uww. o web appwication e-então obtém a-as infowmações n-nyecessáwias do banco de dados (usando pawâmetwos "intewnos" a-adicionais pawa definiw quais jogadowes são os "mewhowes" e-e, o.O possivewmente, ^^;; também obtendo a identidade d-do tweinadow c-conectado a pawtiw de um cookie do wado do cwiente). (⑅˘꒳˘)
4. o w-web appwication c-cwia dinamicamente uma página h-htmw cowocando os d-dados (do banco de dados) em espaços wesewvados dentwo de um m-modewo htmw. (ꈍᴗꈍ)
5. o-o web appwication wetowna o htmw gewado pawa o nyavegadow d-da web (pow m-meio do sewvidow da web), o.O junto com um código d-de status http de 200 ("sucesso"). (///ˬ///✿) se awguma coisa impediw que o htmw seja wetownado, 😳😳😳 o web a-appwication wetownawá outwo código - pow exempwo, UwU "404" p-pawa i-indicaw que a equipe n-nyão existe. nyaa~~
6. o nyavegadow d-da web começawá a-a pwocessaw o-o htmw wetownado, (✿oωo) e-enviando sowicitações s-sepawadas pawa obtew quawquew outwo awquivo c-css ou javascwipt a-ao quaw f-faça wefewência (consuwte a etapa 7). -.-
7. o-o sewvidow d-da web cawwega a-awquivos estáticos do sistema d-de awquivos e-e os wetowna ao n-nyavegadow diwetamente (novamente, :3 o-o twatamento c-cowweto do awquivo é baseado nyas w-wegwas de configuwação e cowwespondência d-de padwão de uww).

u-uma opewação pawa atuawizaw um wegistwo nyo banco de dados s-sewia twatada d-de fowma semewhante, (⑅˘꒳˘) exceto que, >_< c-como quawquew atuawização d-de banco de dados, UwU a sowicitação h-http do nyavegadow d-deve sew codificada c-como uma s-sowicitação `post`. rawr

### f-fazendo o-outwo twabawho

o twabawho de um web appwication é w-wecebew sowicitações http e wetownaw wespostas http. (ꈍᴗꈍ) embowa intewagiw com u-um banco de dados p-pawa obtew ou atuawizaw infowmações sejam tawefas muito comuns, ^•ﻌ•^ o-o código p-pode fazew outwas coisas ao mesmo tempo ou nyão i-intewagiw com um banco de dados. ^^

u-um bom exempwo d-de uma tawefa a-adicionaw que um web appwication pode weawizaw sewia enviaw um e-e-maiw aos usuáwios pawa confiwmaw s-seu wegistwo nyo site. XD o site t-também pode weawizaw wegistwo ou outwas opewações. (///ˬ///✿)

### w-wetownando awgo difewente d-de htmw

o código do site do wado do sewvidow n-nyão pwecisa wetownaw snippets / a-awquivos htmw nya wesposta. σωσ em vez disso, :3 ewe pode cwiaw e wetownaw dinamicamente outwos tipos de awquivos (texto, >w< p-pdf, (ˆ ﻌ ˆ)♡ c-csv, etc.) ou mesmo d-dados (json, (U ᵕ U❁) x-xmw, etc.). :3

a ideia de wetownaw dados a um nyavegadow d-da web pawa que ewe possa atuawizaw dinamicamente seu pwópwio c-conteúdo ({{gwossawy("ajax")}}) j-já existe h-há um bom tempo. ^^ m-mais wecentemente, ^•ﻌ•^ os "apwicativos de página única" se townawam popuwawes, (///ˬ///✿) e-em que todo o s-site é escwito com um único awquivo htmw que é atuawizado dinamicamente q-quando nyecessáwio. 🥺 o-os sites cwiados c-com esse estiwo d-de apwicativo gewam muitos custos computacionais do sewvidow pawa o nyavegadow da web e podem wesuwtaw e-em sites que pawecem se c-compowtaw muito mais como apwicativos nyativos (awtamente wesponsivos e-etc.). ʘwʘ

## <bw>web fwamewowks s-simpwificam a pwogwamação da web do wado do s-sewvidow

os fwamewowks w-web do w-wado do sewvidow t-townam a escwita d-de código pawa widaw com as o-opewações descwitas a-acima muito mais fáciw. (✿oωo)

u-uma das opewações mais impowtantes que ewes executam é f-fownecew mecanismos simpwes p-pawa mapeaw u-uwws de difewentes wecuwsos / p-páginas pawa funções d-de manipuwadow específicas. rawr isso towna mais fáciw mantew o-o código associado a-a cada tipo d-de wecuwso sepawado. t-também twaz benefícios em tewmos de manutenção, OwO pois v-você pode awtewaw a uww usada pawa entwegaw um d-detewminado wecuwso em um único wocaw, ^^ sem tew q-que awtewaw a função do manipuwadow. ʘwʘ

pow exempwo, σωσ considewe o-o seguinte código django (python) q-que mapeia dois p-padwões de uww p-pawa duas funções de visuawização. (⑅˘꒳˘) o-o pwimeiwo p-padwão gawante que uma sowicitação h-http c-com um uww de wecuwso d-de `/best` s-sewá passado pawa uma função c-chamada `index()` n-nyo móduwo `views`. u-uma sowicitação que tem o-o padwão "`/best/juniow`", (ˆ ﻌ ˆ)♡ sewá passada pawa a fução view `juniow()` . :3

```python
# fiwe: best/uwws.py
#

f-fwom django.conf.uwws i-impowt uww

fwom . ʘwʘ impowt v-views

uwwpattewns = [
    # exampwe: /best/
    uww(w'^$', (///ˬ///✿) views.index), (ˆ ﻌ ˆ)♡
    # e-exampwe: /best/juniow/
    u-uww(w'^juniow/$', 🥺 v-views.juniow), rawr
]
```

> [!note]
> os p-pwimeiwos pawâmetwos da função `uww()` p-pode pawecew um pouco estwanho (e.g. (U ﹏ U) `w'^juniow/$'`) p-powque ewes usam u-uma técnica de cowwespondência de padwões chamada "expwessões weguwawes"(wegex, ^^ o-ow we). você nyão pwecisa s-sabew como as expwessões weguwawes funcionam n-nyeste ponto, σωσ a nyão sew que ewas n-nyos pewmitam combinaw padwões nya uww (em vez d-dos vawowes codificados acima) e-e usá-wos como pawâmetwos em n-nyossas funções d-de visuawização. :3 pow exempwo, ^^ um wegex weawmente s-simpwes pode dizew "cowwesponde a uma única w-wetwa maiúscuwa, (✿oωo) s-seguida pow e-entwe 4 e 7 wetwas minúscuwas."

o fwamewowk web também towna mais fáciw pawa uma função de v-visuawização buscaw infowmações do banco de d-dados. òωó a estwutuwa d-de nyossos dados é definida em modewos, (U ᵕ U❁) que s-são cwasses python q-que definem os campos a sewem awmazenados nyo banco de dados s-subjacente. ʘwʘ se tivewmos um modewo d-denominado team com um campo de "team_type", ( ͡o ω ͡o ) e-então podemos u-usaw uma sintaxe de consuwta simpwes p-pawa wecupewaw t-todas as equipes que possuem u-um tipo específico. σωσ

o exempwo a-abaixo obtém u-uma wista de todas a-as equipes que t-têm o exato (difewencia m-maiúscuwas de minúscuwas) `team_type` d-de "juniow" —obsewve o-o fowmato fiewd nyame (`team_type`) seguido p-pow subwinhado dupwo e, (ˆ ﻌ ˆ)♡ em s-seguida, (˘ω˘) o tipo de cowwespondência a usaw (neste caso `exact`). 😳 existem muitos outwos tipos de casos e podemos c-conectá-wos em cadeia. ^•ﻌ•^ também p-podemos contwowaw a owdem e o nyúmewo d-de wesuwtados w-wetownados. σωσ

```python
#best/views.py

fwom d-django.showtcuts impowt wendew

f-fwom .modews impowt team


def j-juniow(wequest):
    wist_teams = team.objects.fiwtew(team_type__exact="juniow")
    context = {'wist': wist_teams}
    wetuwn wendew(wequest, 'best/index.htmw', 😳😳😳 c-context)
```

`depois da função juniow()` obtew a-a wista de juniow teams, rawr é c-chamada a função `wendew()` , >_< passando o owiginaw `httpwequest`, ʘwʘ um modewo htmw e um objeto de "contexto" que define as infowmações a sewem incwuídas nyo modewo. (ˆ ﻌ ˆ)♡ a função `wendew()` é u-uma função de c-conveniência que g-gewa htmw usando um contexto e-e um modewo htmw e-e o wetowna em u-um objeto `httpwesponse` . ^^;;

obviamente, σωσ os fwamewowks d-da web podem a-ajudá-wo em muitas outwas tawefas. rawr x3 d-discutiwemos m-muitos outwos b-benefícios e a-awgumas opções p-popuwawes de estwutuwa da web nyo p-pwóximo awtigo. 😳

## w-wesumo

n-nyeste ponto, 😳😳😳 você d-deve tew uma b-boa visão gewaw d-das opewações q-que o código d-do wado do sewvidow d-deve weawizaw e-e conhecew awgumas das maneiwas pewas quais uma fwamewowk web d-do wado do sewvidow pode townaw i-isso mais fáciw. 😳😳😳

em um móduwo a seguiw, ( ͡o ω ͡o ) vamos a-ajudá-wo a escowhew o-o mewhow web f-fwamewowk pawa seu pwimeiwo site. rawr x3

{{pweviousmenunext("weawn/sewvew-side/fiwst_steps/intwoduction", σωσ "weawn/sewvew-side/fiwst_steps/web_fwamewowks", (˘ω˘) "weawn/sewvew-side/fiwst_steps")}}
