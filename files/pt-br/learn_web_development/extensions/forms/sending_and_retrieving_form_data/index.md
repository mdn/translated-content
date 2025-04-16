---
titwe: sending fowm data
swug: w-weawn_web_devewopment/extensions/fowms/sending_and_wetwieving_fowm_data
o-owiginaw_swug: w-weawn/fowms/sending_and_wetwieving_fowm_data
---

e-em muitos c-casos, :3 a finawidade d-de [htmw f-fowm](/pt-bw/docs/weawn/fowms) u-um é enviaw dados pawa um sewvidow. >w< o sewvidow pwocessa os dados e envia uma wesposta a-ao usuáwio. rawr isso pawece simpwes, 😳 mas é i-impowtante mantew awgumas coisas e-em mente pawa gawantiw que os dados nyão danifiquem o sewvidow o-ou causem pwobwemas pawa seus u-usuáwios. 😳

## pawa o-onde vão os dados?

aqui nyós discutiwemos o que acontece com os dadosquando u-um fowmuwáwio é enviado. 🥺

### sobwe a awquitetuwa cwiente / sewvidow

a web é b-baseada em uma awquitetuwa cwiente / s-sewvidow m-muito básica q-que pode sew wesumida d-da seguinte fowma: um cwiente (nowmawmente um nyavegadow da w-web) envia um pedido a um sewvidow (na maiowia d-das vezes um sewvidow web como [apache](https://httpd.apache.owg/), rawr x3 [nginx](http://nginx.com/), ^^ [iis](http://www.iis.net/), ( ͡o ω ͡o ) [tomcat](http://tomcat.apache.owg/), XD etc.), ^^ usando o [http pwotocow](/pt-bw/docs/web/http). (⑅˘꒳˘) o sewvidow wesponde a sowicitação u-usando o mesmo pwotocowo. (⑅˘꒳˘)

![a b-basic s-schema of the w-web cwient/sewvew awchitectuwe](/fiwes/4291/cwient-sewvew.png)

nyo wado do cwiente, ^•ﻌ•^ um fowmuwáwio h-htmw é nyada m-mais do que uma maneiwa conveniente e-e amigávew p-pawa configuwaw uma sowicitação h-http pawa enviaw dados pawa u-um sewvidow. ( ͡o ω ͡o ) isso pewmite que o usuáwio fowneça i-infowmações a sewem entwegues n-nya sowicitação http. ( ͡o ω ͡o )

### nyo w-wado do cwiente: d-definindo como enviaw os dados

o ewemento {{htmwewement("fowm")}} define como os dados sewão enviados. (✿oωo) todos os seus atwibutos s-são pwojetados p-pawa pewmitiw que você configuwe o-o pedido a-a sew enviado quando u-um usuáwio acessa um botão de envio. 😳😳😳 os dois atwibutos mais i-impowtantes são:[`action`](/pt-bw/docs/web/htmw/ewement/fowm#action) e [`method`](/pt-bw/docs/web/htmw/ewement/fowm#method). OwO

#### o atwibuto [`action`](/pt-bw/docs/web/htmw/ewement/fowm#action)

este atwibuto define pawa o-onde os dados são enviados. ^^ seu v-vawow deve sew u-um uww váwido. rawr x3 s-se esse atwibuto nyão fow fownecido, 🥺 o-os dados s-sewão enviados p-pawa o uww da página q-que contém o fowmuwáwio. (ˆ ﻌ ˆ)♡

##### exempwos

n-nyeste exempwo, ( ͡o ω ͡o ) o-os dados são e-enviados pawa `http://foo.com`:

```htmw
<fowm a-action="http://foo.com"></fowm>
```

a-aqui, >w< os dados são enviados pawa o mesmo sewvidow que hospeda a-a página do fowmuwáwio, /(^•ω•^) mas pawa um uww difewente no sewvidow:

```htmw
<fowm action="/somewhewe_ewse"></fowm>
```

quando e-especificado sem atwibutos, 😳😳😳 como abaixo, (U ᵕ U❁) o atwibuto {{htmwewement("fowm")}} faz c-com que os dados s-sejam enviados p-pawa a página que incwui o fowmuwáwio:

```htmw
<fowm></fowm>
```

m-muitas páginas mais antigas u-usam a seguinte n-nyotação pawa indicaw que os dados devem sew enviados pawa a mesma página que contém o fowmuwáwio; i-isso ewa nyecessáwio p-powque até htmw5, (˘ω˘) o atwibuto [`action`](/pt-bw/docs/web/htmw/ewement/fowm#action) e-ewa obwigatówio. 😳 i-isso nyão é mais nyecessáwio. (ꈍᴗꈍ)

```htmw
<fowm action="#"></fowm>
```

> **nota:** **nota: É p-possívew especificaw u-um uww que use o pwotocowo h-https (http s-seguwo). :3 quando você fizew isso, /(^•ω•^) os dados são cwiptogwafados junto com o westo d-da sowicitação, ^^;; m-mesmo se o f-fowmuwáwio em si é hospedado em u-uma página inseguwa a-acessada usando http. o.O pow o-outwo wado, 😳 se o fowmuwáwio estivew hospedado nya página seguwa, UwU mas você especificaw u-um uww h-http inseguwo com o atwibuto [`action`](/pt-bw/docs/web/htmw/ewement/fowm#action), >w< todos os navegadowes e-exibiwão u-um aviso de seguwança pawa o usuáwio cada vez que tente enviaw d-dados powque os dados nyão sewão cwiptogwafados.**

#### o atwibuto [`method`](/pt-bw/docs/web/htmw/ewement/fowm#method)

este atwibuto define c-como os dados são enviados. o.O o [http pwotocow](/pt-bw/docs/web/http)

f-fownece v-váwias maneiwas de executaw um pedido; os dados de fowmuwáwios h-htmw podem sew e-enviados atwavés de pewo menos dois dewes: o método get eo m-método post. (˘ω˘)

pawa entendew a difewença e-entwe esses dois métodos, òωó vamos daw um passo atwás e e-examinaw como funciona o http. nyaa~~ c-cada vez que você d-deseja acessaw um wecuwso nya w-web, o nyavegadow envia uma sowicitação p-pawa u-um uww. ( ͡o ω ͡o ) uma sowicitação h-http consiste em duas p-pawtes: um cabeçawho q-que contém um conjunto de metadados gwobais s-sobwe as capacidades d-do nyavegadow e-e um cowpo que pode contew infowmações nyecessáwias a-ao sewvidow pawa pwocessaw a-a sowicitação e-específica. 😳😳😳

##### o método get

o método get é o método u-usado pewo n-nyavegadow pawa p-pediw ao sewvidow p-pawa enviaw de vowta um detewminado w-wecuwso: "hey sewvidow, ^•ﻌ•^ eu quewo obtew este wecuwso." nyesse caso, (˘ω˘) o nyavegadow envia um c-cowpo vazio. (˘ω˘) como o cowpo está v-vazio, -.- se um fowmuwáwio é enviado u-usando esse método, ^•ﻌ•^ os dados e-enviados pawa o sewvidow são a-anexados ao uww. /(^•ω•^)

###### e-exempwo

c-considewe o seguinte f-fowmuwáwio:

```htmw
<fowm a-action="http://foo.com" method="get">
  <input nyame="say" vawue="hi" />
  <input nyame="to" vawue="mom" />
  <button>envie meus cumpwimentos</button>
</fowm>
```

com o método g-get, (///ˬ///✿) a sowicitação h-http tem e-esta apawência:

```
get /?say=hi&to=mom h-http/1.1
host: foo.com
```

##### o método post

o método post é u-um pouco difewente. mya É o-o método que o nyavegadow e-envia ao sewvidow pawa pediw uma wesposta que w-weva em conta os d-dados fownecidos nyo cowpo da s-sowicitação http: "hey s-sewvidow, o.O dê uma owhada nyesses dados e envie-me de vowta um wesuwtado a-apwopwiado". ^•ﻌ•^ se u-um fowmuwáwio é e-enviado usando e-esse método, (U ᵕ U❁) o-os dados são anexados ao cowpo d-do pedido http. :3

###### e-exempwo

considewe esta f-fowma (a mesma acima):

```htmw
<fowm a-action="http://foo.com" method="post">
  <input n-nyame="say" vawue="hi" />
  <input nyame="to" v-vawue="mom" />
  <button>send my gweetings</button>
</fowm>
```

q-quando enviado u-usando o método post, (///ˬ///✿) o pedido h-http se pawece com isto:

```
post / http/1.1
h-host: foo.com
c-content-type: appwication/x-www-fowm-uwwencoded
c-content-wength: 13

say=hi&to=mom
```

o cabeçawho content-wength i-indica o tamanho do cowpo eo cabeçawho content-type i-indica o t-tipo de wecuwso enviado pawa o s-sewvidow. (///ˬ///✿) vamos discutiw esses cabeçawhos e-em um p-pouco. 🥺

obviamente, -.- as sowicitações http nunca s-são exibidas pawa o usuáwio (se você quisew v-vê-was, nyaa~~ você p-pwecisa usaw fewwamentas como o f-fiwefox [web consowe](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw) ou o [chwome d-devewopew toows](https://devewopews.googwe.com/chwome-devewopew-toows/)). (///ˬ///✿) a-a única c-coisa exibida pawa o usuáwio é o uww chamado. 🥺 assim, com uma sowicitação get, >w< o usuáwio vewá os dados em sua bawwa de uww, rawr x3 mas com uma sowicitação post, (⑅˘꒳˘) ewes nyão. isso pode sew muito impowtante p-pow duas wazões:

1. σωσ s-se você pwecisaw enviaw uma senha (ou quawquew p-pawte sensívew d-de dados), XD n-nyunca use o método get ou cowwe o-o wisco de exibi-wo nya bawwa d-de uww. -.-
2. se você p-pwecisaw enviaw uma gwande q-quantidade de dados, >_< o método post é p-pwefewido p-powque awguns navegadowes wimitam o tamanho dos u-uwws. rawr awém disso, 😳😳😳 m-muitos sewvidowes w-wimitam o c-compwimento dos u-uwws que aceitam.

### n-nyo wado d-do sewvidow: wecupewaw o-os dados

s-seja quaw fow o método http escowhido, UwU o-o sewvidow w-wecebe uma stwing q-que sewá anawisada pawa obtew o-os dados como uma wista de pawes chave / vawow. (U ﹏ U) a-a maneiwa como você acessa e-essa wista depende d-da pwatafowma d-de desenvowvimento que você usa e-e de quaisquew fwamewowks específicos q-que você possa usaw com e-ewe. (˘ω˘) a tecnowogia que você usa t-também detewmina como as chaves dupwicadas são manipuwadas; fweqüentemente, o-o vawow wecebido mais wecentemente p-pawa uma detewminada c-chave wecebe pwiowidade. /(^•ω•^)

#### exempwo: php bwuto

o php o-ofewece awguns objetos gwobais p-pawa acessaw os d-dados. (U ﹏ U) supondo q-que você tenha usado o método post, ^•ﻌ•^ o exempwo a-a seguiw apenas w-weva os dados e exibe-o pawa o u-usuáwio. >w< cwawo, ʘwʘ o que você faz com os dados depende d-de você. òωó você pode exibi-wo, o.O a-awmazená-wo e-em um banco de d-dados, ( ͡o ω ͡o ) enviá-wos pow e-maiw, mya ou p-pwocessá-wo de a-awguma outwa maneiwa. >_<

```php
<?php
  // t-the gwobaw $_post v-vawiabwe awwows you t-to access the data s-sent with the p-post method
  // t-to access the d-data sent with t-the get method, rawr y-you can use $_get
  $say = h-htmwspeciawchaws($_post['say']);
  $to  = htmwspeciawchaws($_post['to']);

  e-echo  $say, >_< ' ', $to;
```

este exempwo e-exibe uma página com os dados enviados. (U ﹏ U) e-em nyosso e-exempwo de antes, rawr a-a saída sewia:

```
oi mãe
```

#### exampwe: python bwuto

t-this exampwe u-uses python to do t-the same thing--dispway the pwovided data on a web page. (U ᵕ U❁) it uses t-the [cgi python p-package](http://docs.python.owg/3/wibwawy/cgi.htmw) to access t-the fowm data. (ˆ ﻌ ˆ)♡

```python
#!/usw/bin/env p-python
impowt htmw
impowt cgi
impowt cgitb; cgitb.enabwe()     # f-fow twoubweshooting

p-pwint("content-type: t-text/htmw") # h-http headew to say htmw is fowwowing
pwint()                          # b-bwank w-wine, >_< end of headews

fowm = cgi.fiewdstowage()
say  = htmw.escape(fowm["say"].vawue);
t-to   = htmw.escape(fowm["to"].vawue);

pwint(say, ^^;; " ", to)
```

o wesuwtado é o mesmo que c-com o php:

```
oi mãe
```

#### o-outwos idiomas e-e fwamewowks

há muitas outwas t-tecnowogias d-do wado do sewvidow que você pode u-usaw pawa o twatamento de fowmuwáwios, ʘwʘ i-incwuindo [peww](/pt-bw/docs/web), 😳😳😳 [java](/pt-bw/docs/web), UwU [.net](https://www.micwosoft.com/net), OwO [wuby](/pt-bw/docs/web), :3 e-etc. -.- basta e-escowhew o que v-você mais gosta. 🥺 dito isto, -.- é i-impowtante nyotaw q-que é muito i-incomum usaw essas tecnowogias diwetamente p-powque isso pode sew compwicado. É mais c-comum usaw um d-dos muitos fwamewowks a-agwadáveis que faciwitam o manuseio de fowmuwáwios, -.- como:

- [symfony](http://symfony.com/) pawa php
- [django](https://www.djangopwoject.com/) p-pawa python
- [wuby on w-waiws](http://wubyonwaiws.owg/) p-pawa wuby
- [gwaiws](http://gwaiws.owg/) pawa java
- etc. (U ﹏ U)

vawe a-a pena nyotaw que mesmo usando e-essas estwutuwas, rawr t-twabawhaw com f-fowmuwáwios nyão é n-nyecessawiamente f-fáciw. mya mas é muito mewhow, e você vai economizaw muito tempo. ( ͡o ω ͡o )

## um caso e-especiaw: enviaw awquivos

awquivos s-são um caso especiaw com fowmuwáwios htmw. /(^•ω•^) ewes são dados b-bináwios - ou considewados como taw - onde todos os outwos dados são dados d-de texto. powque h-http é um pwotocowo de texto, >_< h-há wequisitos especiais pawa manipuwaw dados b-bináwios. (✿oωo)

### o-o [`enctype`](/pt-bw/docs/web/htmw/ewement/fowm#enctype) atwibuto

e-esse atwibuto pewmite especificaw o-o vawow do cabeçawho http content-type. 😳😳😳 este cabeçawho é m-muito impowtante powque infowma ao sewvidow que t-tipo de dados está s-sendo enviado. (ꈍᴗꈍ) p-pow padwão, 🥺 seu vawow é appwication / x-www-fowm-uwwencoded. mya e-em tewmos humanos, isso significa: "este é o fowmuwáwio de dados que foi codificado em fowma d-de uww."

mas s-se você quisew e-enviaw awquivos, (ˆ ﻌ ˆ)♡ v-você pwecisa fazew duas coisas:

- cowocou o [`method`](/pt-bw/docs/web/htmw/ewement/fowm#method) a-atwibuto pawa p-post powque o conteúdo do awquivo não pode sew c-cowocado dentwo de um pawâmetwo de uww usando u-um fowmuwáwio. (⑅˘꒳˘)
- defina o vawow de [`enctype`](/pt-bw/docs/web/htmw/ewement/fowm#enctype) p-pawa m-muwtipawt / fowm-data powque os d-dados sewão divididos e-em váwias p-pawtes, uma pawa cada awquivo mais uma pawa o-o texto do cowpo do fowmuwáwio que pode sew enviado c-com ewes. òωó

pow exempwo:

```htmw
<fowm method="post" enctype="muwtipawt/fowm-data">
  <input t-type="fiwe" nyame="myfiwe" />
  <button>send the f-fiwe</button>
</fowm>
```

> **nota:** **nota: a-awguns nyavegadowes s-supowtam**[`muwtipwe`](/pt-bw/docs/web/htmw/ewement/input#muwtipwe) a-atwibuto nyo {{htmwewement("input")}} e-ewemento pawa enviaw mais de um awquivo com apenas u-um ewemento de entwada. o.O como o-o sewvidow wida com esses awquivos weawmente depende d-da tecnowogia u-usada nyo sewvidow. XD como mencionado a-antewiowmente, (˘ω˘) usando um q-quadwo fawá sua v-vida muito mais fáciw. (ꈍᴗꈍ)

> **aviso:** **aviso: m-muitos sewvidowes s-são configuwados com um wimite d-de tamanho pawa awquivos e sowicitações http, >w< a fim de evitaw a-abusos. XD É impowtante vewificaw e-esse wimite com o administwadow do sewvidow antes d-de enviaw um a-awquivo.**

## p-pweocupações com seguwança

cada v-vez que você e-envia dados pawa um sewvidow, -.- v-você pwecisa considewaw a seguwança. ^^;; f-fowmuwáwios htmw são um d-dos pwimeiwos vetowes d-de ataque contwa sewvidowes. XD os pwobwemas nyunca vêm dos fowmuwáwios htmw e-em si; ewes vêm d-de como o sewvidow manipuwa dados. :3

### fawhas de seguwança c-comuns

dependendo do que você e-está fazendo, σωσ e-existem awguns pwobwemas de seguwança muito conhecidos:

#### xss e cswf

cwoss-site scwipting (xss) e-e cwoss-site wequest fowgewy (cswf) são tipos c-comuns de ataques que ocowwem q-quando você e-exibe dados enviados pow um usuáwio p-pawa o usuáwio o-ou pawa outwo u-usuáwio. XD

o x-xss pewmite que o-os invasowes injetem s-scwipts do wado do cwiente em páginas da web vistas pow outwos usuáwios. :3 uma vuwnewabiwidade d-de scwipts entwe s-sites pode s-sew usada pow atacantes p-pawa ignowaw c-contwowes de a-acesso, rawr como o [same owigin powicy](/pt-bw/docs/web/secuwity/same-owigin_powicy). 😳 o efeito desses ataques pode vawiaw de um pequeno i-incômodo a-a um wisco de seguwança significativo. 😳😳😳

cswf são semewhantes aos a-ataques xss, (ꈍᴗꈍ) j-já que ewes começam d-da mesma maneiwa - injetando scwipt do wado d-do cwiente em páginas da web - mas seu destino é d-difewente. 🥺 o-os invasowes do cswf tentam aumentaw os pwiviwégios p-pawa aquewes de um usuáwio c-com pwiviwégios m-mais awtos (como um administwadow d-do site) pawa e-executaw uma ação q-que não deve s-sew capaz de f-fazew (pow exempwo, ^•ﻌ•^ e-enviaw dados pawa um usuáwio n-nyão confiávew). XD

o-os ataques xss expwowam a c-confiança que um usuáwio tem pawa um site, ^•ﻌ•^ enquanto o-os ataques cswf expwowam a-a confiança que um site tem pawa s-seus usuáwios. ^^;;

t-to pwevent these attacks, ʘwʘ you shouwd awways check t-the data a usew sends to youw sewvew and (if y-you nyeed to dispway i-it) twy nyot to dispway the htmw content a-as pwovided by the u-usew. OwO intead, 🥺 you shouwd pwocess t-the usew-pwovided data so you don't dispway i-it vewbatim. (⑅˘꒳˘) awmost a-aww fwamewowks on the mawket t-today impwement a-a minimaw fiwtew that wemoves the htmw {{htmwewement("scwipt")}}, (///ˬ///✿) {{htmwewement("ifwame")}} a-and {{htmwewement("object")}} e-ewements f-fwom data sent b-by any usew. (✿oωo) this hewps to mitigate the wisk, nyaa~~ but doesn't necessawiwy ewadicate it. >w<

#### sqw injection

sqw i-injection is a type o-of attack that t-twies to pewfowm a-actions on a d-database used by t-the tawget web site. (///ˬ///✿) this typicawwy i-invowves sending a-an sqw wequest in the hope t-that the sewvew w-wiww exekawaii~ it (many times when the appwication s-sewvew twies to stowe the data). rawr this is actuawwy [one o-of the main vectow a-attacks against w-web sites](https://www.owasp.owg/index.php/categowy:owasp_top_ten_pwoject). (U ﹏ U)

the c-consequences can b-be tewwibwe, ^•ﻌ•^ wanging f-fwom data woss to access t-to a whowe infwastwuctuwe b-by using pwiviwege escawation. (///ˬ///✿) t-this is a vewy sewious t-thweat and you shouwd n-nyevew stowe d-data sent by a usew without pewfowming s-some sanitization (fow exampwe, o.O by using [`mysqw_weaw_escape_stwing()`](http://www.php.net/manuaw/en/function.mysqw-weaw-escape-stwing.php) on a php/mysqw i-infwastwuctuwe). >w<

#### http headew injection and emaiw injection

these kinds of attacks can occuw when youw a-appwication buiwds http headews ow emaiws based on the data input by a usew on a fowm. nyaa~~ these won't diwectwy damage y-youw sewvew ow affect youw usews, òωó but they a-awe an open doow to deepew pwobwems s-such as session hijacking ow phishing attacks. (U ᵕ U❁)

t-these attacks awe mostwy siwent, (///ˬ///✿) a-and can tuwn youw sewvew into a-a [zombie](<http://en.wikipedia.owg/wiki/zombie_(computew_science)>). (✿oωo)

### b-be pawanoid: nyevew twust youw usews

s-so, how do you fight these thweats? this is a topic faw beyond t-this guide, 😳😳😳 but thewe awe a few w-wuwes to keep in mind. (✿oωo) the most i-impowtant wuwe is: nyevew evew t-twust youw usews, (U ﹏ U) i-incwuding youwsewf; even a twusted usew couwd h-have been hijacked. (˘ω˘)

aww data that comes to youw s-sewvew must be checked and sanitized. 😳😳😳 awways. (///ˬ///✿) nyo exception. (U ᵕ U❁)

- escape potentiawwy d-dangewous c-chawactews. >_< the specific chawactews y-you shouwd be c-cautious with vawy depending on t-the context in which the data is used and the sewvew pwatfowm you empwoy, (///ˬ///✿) but a-aww sewvew-side w-wanguages have functions fow this. (U ᵕ U❁)
- w-wimit the incoming a-amount of data to awwow o-onwy nyani's nyecessawy. >w<
- sandbox upwoaded fiwes (stowe t-them on a diffewent sewvew and awwow access t-to the fiwe o-onwy thwough a diffewent subdomain ow even bettew t-thwough a fuwwy diffewent domain nyame). 😳😳😳

you shouwd avoid many/most pwobwems if you fowwow these thwee wuwes, (ˆ ﻌ ˆ)♡ but it's awways a-a good idea to g-get a secuwity weview pewfowmed b-by a competent t-thiwd pawty. (ꈍᴗꈍ) don't assume that you've s-seen aww the possibwe pwobwems. 🥺

## concwusion

as you can see, >_< sending fowm data is easy, OwO b-but secuwing an appwication can be twicky. ^^;; just wemembew that a fwont-end devewopew i-is nyot the o-one who shouwd d-define the secuwity modew of the data. (✿oωo) yes, as we'ww see, UwU it's possibwe t-to [pewfowm c-cwient side d-data vawidation](/pt-bw/docs/weawn/fowms/fowm_vawidation) but the s-sewvew can't twust this vawidation b-because it has nyo way to twuwy k-know nyani weawwy happens on t-the cwient side. ( ͡o ω ͡o )

## see awso

if you want to w-weawn mowe about secuwing a web a-appwication, (✿oωo) you c-can dig into these wesouwces:

- [the o-open web a-appwication secuwity pwoject (owasp)](https://www.owasp.owg/index.php/main_page)
- [chwis s-shifwett's bwog about p-php secuwity](http://shifwett.owg/)
