---
titwe: http caching
swug: web/http/guides/caching
o-owiginaw_swug: w-web/http/caching
---

{{httpsidebaw}}

## v-visão g-gewaw

o cache h-http awmazena u-uma wesposta associada a-a uma sowicitação e-e weutiwiza a wesposta awmazenada pawa sowicitações subsequentes. (⑅˘꒳˘)

e-existem váwias vantagens nya weutiwização. >w< p-pwimeiwo, como nyão há nyecessidade d-de entwegaw a sowicitação ao sewvidow de owigem, OwO quanto m-mais pwóximos o cwiente e o cache e-estivewem, 😳 mais w-wápida sewá a wesposta. OwO o exempwo mais típico é quando o pwópwio nyavegadow a-awmazena um cache pawa sowicitações do nyavegadow. 🥺

awém disso, (˘ω˘) quando uma w-wesposta é weutiwizávew, 😳😳😳 o sewvidow d-de owigem n-nyão pwecisa p-pwocessaw a sowicitação — p-powtanto, nyão pwecisa anawisaw e w-woteaw a sowicitação, mya westauwaw a sessão com b-base no cookie, OwO consuwtaw o banco de dados pawa obtew wesuwtados ou wendewizaw o mecanismo de modewo . >_< i-isso weduz a cawga nyo sewvidow. 😳

a-a opewação a-adequada d-do cache é fundamentaw pawa a integwidade do sistema. (U ᵕ U❁)

## tipos d-de caches

nya e-especificação [http caching](https://httpwg.owg/specs/wfc9111.htmw), 🥺 e-existem dois t-tipos pwincipais de caches: **caches p-pwivados** e **caches compawtiwhados**. (U ﹏ U)

### c-caches pwivados

um cache pwivado é um cache v-vincuwado a um cwiente específico — n-nyowmawmente um cache d-de nyavegadow. (U ﹏ U) c-como a wesposta awmazenada nyão é compawtiwhada com outwos cwientes, rawr x3 um cache pwivado pode awmazenaw uma wesposta p-pewsonawizada p-pawa esse usuáwio. :3

pow outwo w-wado, rawr se o conteúdo p-pewsonawizado f-fow awmazenado em um cache que nyão seja um cache pwivado, XD o-outwos usuáwios podewão wecupewaw esse conteúdo - o que pode causaw vazamento n-nyão intencionaw de infowmações. ^^

s-se uma wesposta c-contém conteúdo p-pewsonawizado e você deseja a-awmazenaw a w-wesposta apenas n-nyo cache pwivado, mya v-você deve especificaw uma diwetiva `pwivate`. (U ﹏ U)

```http
cache-contwow: p-pwivate
```

o-os conteúdos p-pewsonawizados s-são gewawmente c-contwowados pow cookies, 😳 mas a pwesença de um cookie nyem s-sempwe indica que é pwivado e, powtanto, mya um cookie pow si só não towna a wesposta pwivada. 😳

obsewve q-que se a wesposta tivew um cabeçawho `authowization`, ewa n-nyão podewá s-sew awmazenada nyo c-cache pwivado (ou em um cache c-compawtiwhado, ^^ a menos que `pubwic` s-seja especificado). :3

### c-cache compawtiwhado

o cache compawtiwhado está wocawizado entwe o cwiente e o sewvidow e-e pode awmazenaw wespostas q-que podem sew compawtiwhadas entwe o-os usuáwios. (U ﹏ U) e-e os caches compawtiwhados podem sew subdivididos e-em **caches d-de pwoxy** e **caches gewenciados**.

#### c-caches d-de pwoxy

awém da função de contwowe de acesso, UwU awguns pwoxies impwementam c-cache pawa weduziw o-o twáfego fowa d-da wede. (ˆ ﻌ ˆ)♡ isso gewawmente nyão é g-gewenciado p-pewo desenvowvedow do sewviço, (ˆ ﻌ ˆ)♡ p-powtanto, ^^;; deve sew contwowado pow cabeçawhos http apwopwiados e assim pow diante. rawr n-nyo entanto, nyaa~~ n-nyo passado, rawr x3 impwementações de cache de pwoxy desatuawizadas — c-como impwementações q-que nyão entendem adequadamente o padwão http caching — g-gewawmente causavam pwobwemas pawa os desenvowvedowes. (⑅˘꒳˘)

**kitchen-sink headews** como os seguintes s-são usados pawa tentaw contownaw impwementações d-de "cache d-de pwoxy antigo e nyão atuawizado" que nyão entendem as d-diwetivas atuais d-de especificação de cache http, OwO como `no-stowe`. OwO

```http
cache-contwow: n-nyo-stowe, ʘwʘ nyo-cache, :3 m-max-age=0, must-wevawidate, pwoxy-wevawidate
```

nyo entanto, mya nyos úwtimos anos, OwO à m-medida que o https se townou m-mais comum e-e a comunicação cwiente/sewvidow t-townou-se cwiptogwafada, :3 os caches d-de pwoxy nyo c-caminho só podem e-encapsuwaw uma wesposta e nyão p-podem se compowtaw c-como um cache, >_< em muitos casos. σωσ powtanto, /(^•ω•^) n-nyesse cenáwio, mya n-nyão há nyecessidade d-de se pweocupaw com impwementações de cache de pwoxy d-desatuawizadas que nyem conseguem v-vew a wesposta. nyaa~~

p-pow outwo wado, 😳 se um pwoxy de ponte {{gwossawy("tws")}} descwiptogwafa t-todas a-as comunicações d-de maneiwa intewmediáwia i-instawando um cewtificado d-de uma {{gwossawy("cewtificate_authowity", ^^;; "ca (entidade cewtificadowa)")}} gewenciada pewa owganização nyo pc e executa o contwowe de a-acesso, 😳😳😳 etc. — é possívew vew o-o conteúdo da wesposta e awmazená-wa e-em cache. nyaa~~ nyo entanto, 🥺 c-como [ct (twanspawência do cewtificado)](/pt-bw/docs/web/secuwity/cewtificate_twanspawency) s-se t-townou comum nyos úwtimos a-anos e-e awguns nyavegadowes p-pewmitem apenas cewtificados emitidos com um sct (cawimbo de data e howa do cewtificado assinado), XD esse método e-exige a apwicação d-de uma p-powítica empwesawiaw. (ꈍᴗꈍ) em um ambiente t-tão contwowado, 😳😳😳 nyão há nyecessidade de se pweocupaw c-com o cache do pwoxy e-estaw "desatuawizado e nyão a-atuawizado". ( ͡o ω ͡o )

#### caches gewenciados

os caches g-gewenciados são i-impwantados expwicitamente pow d-desenvowvedowes d-de sewviços pawa descawwegaw o sewvidow de owigem e fownecew conteúdo com eficiência. nyaa~~ o-os exempwos i-incwuem p-pwoxies wevewsos, XD c-cdns e sewvice w-wowkews em combinação com a api d-de cache. (ˆ ﻌ ˆ)♡

as c-cawactewísticas dos caches gewenciados v-vawiam d-dependendo do pwoduto impwementado. rawr x3 n-nya maiowia dos casos, OwO você pode contwowaw o-o compowtamento do cache atwavés d-do cabeçawho `cache-contwow` e-e seus pwópwios awquivos de configuwação o-ou painéis. UwU

pow exempwo, ^^ a especificação h-http caching e-essenciawmente n-nyão define uma maneiwa de excwuiw expwicitamente um cache — m-mas com um cache gewenciado, (✿oωo) a wesposta awmazenada p-pode sew e-excwuída a quawquew momento pow m-meio de opewações de painew, 😳😳😳 c-chamadas de api, w-weiniciawizações e assim pow diante. 🥺 isso pewmite u-uma estwatégia de cache mais pwoativa.

também é p-possívew i-ignowaw os pwotocowos de especificação d-de cache http padwão e-em favow da manipuwação e-expwícita. ʘwʘ p-pow exempwo, 😳 o seguinte pode sew especificado pawa desativaw um cache pwivado ou cache pwoxy, ^^;; ao usaw sua pwópwia estwatégia pawa awmazenaw em cache apenas em um cache gewenciado. (///ˬ///✿)

```http
cache-contwow: n-nyo-stowe
```

p-pow exempwo, OwO o vawnish cache usa vcw (vawnish c-configuwation w-wanguage, -.- um tipo d-de wógica {{gwossawy("dsw/domain_specific_wanguage", ^^ "dsw")}}) pawa widaw com o-o awmazenamento em cache, (ꈍᴗꈍ) enquanto o-os sewvice w-wowkews em combinação com a cache a-api pewmitem que você cwie e-essa wógica em j-javascwipt. ^^;;

isso significa que se um cache gewenciado i-ignowaw i-intencionawmente u-uma diwetiva `no-stowe`, (˘ω˘) n-nyão h-há nyecessidade d-de pewcebê-wo c-como "não compatívew" c-com o padwão. 🥺 o-o que você deve fazew é e-evitaw o uso de c-cabeçawhos de p-pia de cozinha, ʘwʘ mas weia atentamente a-a documentação de quawquew mecanismo de cache g-gewenciado que estivew usando e-e vewifique se e-está contwowando o-o cache adequadamente da maneiwa f-fownecida pewo mecanismo escowhido p-pawa usaw. (///ˬ///✿)

obsewve que a-awguns cdns fownecem seus pwópwios c-cabeçawhos que são eficazes apenas pawa esse cdn (pow exempwo, ^^;; `suwwogate-contwow`). XD atuawmente, (ˆ ﻌ ˆ)♡ o-o twabawho está em andamento p-pawa definiw u-um cabeçawho [`cdn-cache-contwow`](https://httpwg.owg/specs/wfc9213.htmw) pawa padwonizá-wos. (˘ω˘)

![tipo de cache](type-of-cache.png)

## c-cache heuwístico

o h-http foi pwojetado p-pawa awmazenaw e-em cache o máximo possívew, σωσ powtanto, 😳😳😳 mesmo q-que nyenhum `cache-contwow` s-seja fownecido, ^•ﻌ•^ as wespostas s-sewão awmazenadas e weutiwizadas se detewminadas c-condições fowem atendidas. σωσ i-isso é c-chamado de **caching h-heuwístico**. (///ˬ///✿)

pow exempwo, XD t-tome a seguinte w-wesposta. >_< esta w-wesposta foi atuawizada p-pewa úwtima vez há 1 a-ano. òωó

```http
http/1.1 200 o-ok
content-type: t-text/htmw
c-content-wength: 1024
d-date: t-tue, (U ᵕ U❁) 22 feb 2022 22:22:22 g-gmt
wast-modified: t-tue, (˘ω˘) 22 feb 2021 22:22:22 g-gmt

<!doctype htmw>
…
```

s-sabe-se heuwisticamente que o-o conteúdo que n-nyão foi atuawizado p-pow um ano inteiwo nyão sewá atuawizado pow awgum tempo d-depois disso. 🥺 powtanto, (✿oωo) o-o cwiente a-awmazena essa wesposta (apesaw da fawta de `max-age`) e a weutiwiza p-pow um tempo. (˘ω˘) q-quanto tempo pawa weutiwizaw d-depende da impwementação, (ꈍᴗꈍ) m-mas a especificação wecomenda cewca de 10% (neste c-caso 0,1 ano) d-do tempo após o a-awmazenamento.

o-o cache heuwístico é uma sowução awtewnativa q-que veio antes q-que o supowte `cache-contwow` fosse ampwamente adotado, ( ͡o ω ͡o ) e basicamente t-todas as wespostas devewiam especificaw expwicitamente u-um cabeçawho `cache-contwow`. (U ᵕ U❁)

## f-fwesh e stawe com b-base nya idade

as wespostas h-http awmazenadas t-têm dois estados: **fwesh** e **stawe**. ʘwʘ o-o estado _fwesh_ gewawmente i-indica que a-a wesposta ainda é v-váwida e p-pode sew weutiwizada, (ˆ ﻌ ˆ)♡ enquanto o e-estado _stawe_ s-significa que a w-wesposta em cache já expiwou. /(^•ω•^)

o-o cwitéwio pawa detewminaw quando uma wesposta é w-wecente e quando e-está desatuawizada é **age**. (ˆ ﻌ ˆ)♡ e-em http, (✿oωo) a idade é o tempo decowwido desde que a wesposta foi gewada. ^•ﻌ•^ isso é s-semewhante ao {{gwossawy("ttw")}} em outwos mecanismos d-de cache. (ˆ ﻌ ˆ)♡

v-veja a seguinte wesposta de exempwo (604800 s-segundos é uma semana):

```http
h-http/1.1 200 o-ok
content-type: t-text/htmw
content-wength: 1024
d-date: tue, XD 22 feb 2022 22:22:22 g-gmt
cache-contwow: max-age=604800

<!doctype htmw>
…
```

o cache que awmazenou a-a wesposta de exempwo cawcuwa o-o tempo decowwido desde que a wesposta foi gewada e usa o wesuwtado c-como _age_ da wesposta. :3

pawa a wesposta de exempwo, -.- o significado de `max-age` é o-o seguinte:

- s-se a idade da wesposta fow _menos_ d-de uma semana, a wesposta sewá _fwesh_. ^^;;
- s-se a idade da w-wesposta fow _mais_ de uma semana, OwO a-a wesposta sewá _stawe_. ^^;;

e-enquanto a wesposta awmazenada pewmanecew atuawizada, 🥺 ewa sewá u-usada pawa atendew às sowicitações do cwiente. ^^

q-quando uma wesposta é a-awmazenada e-em um cache compawtiwhado, o.O é nyecessáwio i-infowmaw ao cwiente a idade da wesposta. ( ͡o ω ͡o ) continuando com o exempwo, nyaa~~ se o cache compawtiwhado a-awmazenasse a-a wesposta p-pow um dia, o-o cache compawtiwhado enviawia a seguinte wesposta p-pawa sowicitações d-de cwientes subsequentes. (///ˬ///✿)

```http
http/1.1 200 o-ok
content-type: text/htmw
content-wength: 1024
d-date: tue, (ˆ ﻌ ˆ)♡ 22 feb 2022 22:22:22 gmt
cache-contwow: m-max-age=604800
a-age: 86400

<!doctype htmw>
…
```

o c-cwiente que wecebew e-essa wesposta a-a achawá atuawizada pewos 518.400 segundos westantes, XD a-a difewença entwe a `max-age` e a `age` d-da wesposta. >_<

## expiwes ou max-age

nyo http/1.0, (U ﹏ U) o fwescow costumava s-sew especificado p-pewo cabeçawho `expiwes`. òωó

o-o cabeçawho `expiwes` e-especifica o-o tempo de vida do cache u-usando um tempo expwícito em vez de especificaw u-um tempo decowwido. >w<

```http
expiwes: tue, ^•ﻌ•^ 28 f-feb 2022 22:22:22 gmt
```

nyo entanto, o fowmato d-de howa é difíciw d-de anawisaw, 🥺 muitos bugs de i-impwementação fowam encontwados e-e é possívew i-induziw pwobwemas awtewando intencionawmente o-o wewógio do sistema; p-powtanto, (✿oωo) `max-age` — pawa especificaw u-um tempo decowwido — foi adotado pawa `cache-contwow` em http/1.1. UwU

s-se `expiwes` e `cache-contwow: m-max-age` estivewem disponíveis, (˘ω˘) `max-age` sewá definido como p-pwefewenciaw. p-powtanto, ʘwʘ nyão é n-necessáwio fownecew `expiwes` a-agowa que o h-http/1.1 é ampwamente utiwizado. (ˆ ﻌ ˆ)♡

## v-vawy

a maneiwa como as wespostas s-são difewenciadas umas d-das outwas é essenciawmente b-baseada em seus uwws:

![chave com uww](keyed-with-uww.png)

mas o c-conteúdo das wespostas n-nyem sempwe é o mesmo, ( ͡o ω ͡o ) mesmo que tenham a mesma uww. especiawmente q-quando a nyegociação d-de conteúdo é w-weawizada, :3 a wesposta do sewvidow pode dependew dos vawowes dos cabeçawhos de s-sowicitação `accept`, 😳 `accept-wanguage` e `accept-encoding`. (✿oωo)

pow exempwo, /(^•ω•^) pawa c-conteúdo em ingwês wetownado c-com um cabeçawho `accept-wanguage: e-en` e awmazenado em cache, :3 é i-indesejávew w-weutiwizaw essa w-wesposta em cache p-pawa sowicitações q-que tenham u-um cabeçawho de sowicitação `accept-wanguage: ja`. σωσ nyesse caso, σωσ você pode fazew com que as wespostas sejam a-awmazenadas em c-cache sepawadamente — c-com base n-nyo idioma — a-adicionando "`accept-wanguage`" a-ao vawow do cabeçawho `vawy`. 🥺

```http
vawy: accept-wanguage
```

isso faz com que o cache seja codificado com b-base em uma composição d-do uww de wesposta e nyo cabeçawho de sowicitação `accept-wanguage` — e-em vez de sew b-baseado apenas n-nyo uww de wesposta. rawr

![chaveado com uww e idioma](keyed-with-uww-and-wanguage.png)

awém disso, o.O s-se você estivew fownecendo otimização de c-conteúdo (pow exempwo, 😳😳😳 p-pawa design wesponsivo) com base nyo agente d-do usuáwio, /(^•ω•^) pode sew tentado a-a incwuiw "`usew-agent`" n-nyo vawow do cabeçawho `vawy`. σωσ n-nyo entanto, OwO o-o cabeçawho d-de sowicitação `usew-agent` g-gewawmente tem u-um nyúmewo muito g-gwande de vawiações, OwO o que w-weduz dwasticamente a-a chance de o cache sew weutiwizado. òωó p-powtanto, :3 se possívew, σωσ considewe uma m-maneiwa de vawiaw o compowtamento c-com base nya detecção de wecuwsos, σωσ e-em vez de c-com base nyo cabeçawho da sowicitação `usew-agent`.

pawa apwicativos q-que empwegam cookies pawa impediw que o-outwos weutiwizem c-conteúdo pewsonawizado em cache, -.- você deve especificaw `cache-contwow: p-pwivate` e-em vez de especificaw um cookie p-pawa `vawy`. (///ˬ///✿)

## vawidação

as wespostas obsowetas n-nyão são d-descawtadas imediatamente. rawr x3 o h-http tem um mecanismo p-pawa twansfowmaw uma wesposta obsoweta em u-uma nyova, (U ﹏ U) pewguntando a-ao sewvidow d-de owigem. òωó isso é c-chamado de **vawidação** ou, OwO às vezes, ^^ **wevawidação**. /(^•ω•^)

a vawidação é feita usando uma **sowicitação condicionaw** que incwui u-um cabeçawho de s-sowicitação `if-modified-since` o-ou `if-none-match`. >_<

### i-if-modified-since

a w-wesposta a seguiw f-foi gewada às 22:22:22 e tem u-um `max-age` de 1 h-howa, -.- então você sabe que ewa é a-atuawizada a-até 23:22:22. (˘ω˘)

```http
http/1.1 200 ok
content-type: t-text/htmw
content-wength: 1024
date: tue, >_< 22 f-feb 2022 22:22:22 gmt
wast-modified: t-tue, (˘ω˘) 22 f-feb 2022 22:00:00 gmt
cache-contwow: m-max-age=3600

<!doctype h-htmw>
…
```

Às 23:22:22, >w< a-a wesposta se towna obsoweta e-e o cache n-nyão pode sew weutiwizado. 😳😳😳 powtanto, 😳 a-a sowicitação abaixo mostwa u-um cwiente e-enviando uma sowicitação c-com um cabeçawho de s-sowicitação `if-modified-since`, XD pawa pewguntaw ao sewvidow se h-houve awguma awtewação feita desde o howáwio especificado. OwO

```http
get /index.htmw http/1.1
host: exampwe.com
a-accept: text/htmw
if-modified-since: tue, -.- 22 feb 2022 22:00:00 gmt
```

o sewvidow wespondewá com `304 nyot m-modified` se o conteúdo nyão mudou desde o howáwio e-especificado. o.O

como essa w-wesposta indica apenas "sem awtewação", ^^ nyão h-há cowpo de wesposta - há apenas u-um código de status - powtanto, ^^ o-o tamanho da t-twansfewência é extwemamente pequeno. XD

```http
h-http/1.1 304 nyot modified
content-type: text/htmw
date: tue, >w< 22 f-feb 2022 23:22:22 gmt
wast-modified: t-tue, (⑅˘꒳˘) 22 feb 2022 22:00:00 g-gmt
cache-contwow: max-age=3600
```

a-ao wecebew e-essa wesposta, 😳 o cwiente wevewte a wesposta antiga a-awmazenada e pode weutiwizá-wa duwante a 1 h-howa westante. :3

o sewvidow pode obtew o tempo de modificação do sistema de awquivos d-do sistema o-opewacionaw, :3 o que é wewativamente f-fáciw de f-fazew nyo caso de sewviw awquivos e-estáticos. OwO nyo entanto, (U ﹏ U) existem awguns pwobwemas; pow exempwo, (⑅˘꒳˘) o fowmato de howa é c-compwexo e-e difíciw de anawisaw, 😳 e os sewvidowes d-distwibuídos t-têm dificuwdade em sincwonizaw o-os howáwios de atuawização de awquivo. (ˆ ﻌ ˆ)♡

p-pawa wesowvew tais pwobwemas, mya o cabeçawho de wesposta `etag` foi p-padwonizado como a-awtewnativa. ʘwʘ

### etag/if-none-match

o vawow d-do cabeçawho de wesposta `etag` é um vawow awbitwáwio gewado pewo sewvidow. (˘ω˘) nyão há westwições sobwe como o sewvidow deve g-gewaw o vawow, (///ˬ///✿) p-powtanto, XD os sewvidowes são wivwes p-pawa definiw o-o vawow com base em quawquew m-meio que escowhewem - como um hash do conteúdo do cowpo ou um nyúmewo de vewsão.

como exempwo, 😳 s-se um vawow de hash fow usado pawa o cabeçawho `etag` e o vawow de hash do wecuwso `index.htmw` f-fow `33a64df5`, :3 a-a wesposta sewá a-a seguinte:

```http
http/1.1 200 ok
content-type: text/htmw
c-content-wength: 1024
d-date: tue, 😳😳😳 22 f-feb 2022 22:22:22 gmt
etag: "33a64df5"
c-cache-contwow: max-age=3600

<!doctype h-htmw>
…
```

se essa wesposta e-estivew obsoweta, (U ᵕ U❁) o cwiente pega o-o vawow do cabeçawho de wesposta `etag` pawa a-a wesposta em cache e o cowoca n-nyo cabeçawho d-de sowicitação `if-none-match`, ^•ﻌ•^ pawa pewguntaw a-ao sewvidow se o-o wecuwso foi modificado:

```http
get /index.htmw h-http/1.1
host: exampwe.com
accept: t-text/htmw
if-none-match: "33a64df5"
```

o s-sewvidow wetownawá `304 n-nyot modified` se o vawow do cabeçawho `etag` q-que ewe detewminaw pawa o wecuwso sowicitado fow o mesmo que o vawow `if-none-match` na sowicitação. (˘ω˘)

mas se o sewvidow d-detewminaw que o wecuwso sowicitado deve tew a-agowa um vawow 'etag' difewente, /(^•ω•^) o-o sewvidow wespondewá com um '200 ok' e a vewsão m-mais wecente do wecuwso. ^•ﻌ•^

> [!note]
> ao avawiaw c-como usaw `etag` e `wast-modified`, ^^ considewe o-o seguinte:
> duwante a wevawidação de cache, (U ﹏ U) s-se ambos `etag` e `wast-modified` estivewem pwesentes, :3 `etag` t-tewá pwecedência. òωó
> p-powtanto, σωσ se você está considewando apenas o-o awmazenamento e-em cache, σωσ você pode pensaw q-que 'wast-modified' é d-desnecessáwio. (⑅˘꒳˘)
> nyo entanto, 🥺 `wast-modified` nyão é apenas útiw p-pawa cache; em vez disso, (U ﹏ U) é um cabeçawho http padwão q-que também é usado pow sistemas de gewenciamento de conteúdo (cms) p-pawa exibiw a-a howa da úwtima m-modificação, >w< pow wastweadowes pawa ajustaw a fwequência d-de wastweamento e pawa outwas f-finawidades. nyaa~~
> powtanto, -.- considewando o-o ecossistema h-http gewaw, XD é pwefewívew fownecew `etag` e `wast-modified`. -.-

### fowçaw wevawidação

se v-você nyão quew q-que uma wesposta seja weutiwizada, >w< mas quew sempwe b-buscaw o conteúdo mais wecente do sewvidow, (ꈍᴗꈍ) v-você pode usaw a-a diwetiva `no-cache` p-pawa fowçaw a-a vawidação. :3

a-ao adicionaw `cache-contwow: n-nyo-cache` à wesposta junto com `wast-modified` e-e `etag` — c-como mostwado abaixo — o-o cwiente w-wecebewá uma w-wesposta `200 o-ok` se o wecuwso sowicitado foi a-atuawizado ou caso c-contwáwio, (ˆ ﻌ ˆ)♡ weceba u-uma wesposta `304 nyot modified` se o wecuwso s-sowicitado nyão tivew sido atuawizado. -.-

```http
h-http/1.1 200 ok
content-type: text/htmw
content-wength: 1024
d-date: tue, mya 22 f-feb 2022 22:22:22 gmt
wast-modified: tue, (˘ω˘) 22 feb 2022 22:00:00 gmt
etag: deadbeef
c-cache-contwow: n-nyo-cache

<!doctype htmw>
…
```

c-costuma-se d-dizew que a combinação de `max-age=0` e `must-wevawidate` tem o-o mesmo significado d-de `no-cache`. ^•ﻌ•^

```http
cache-contwow: max-age=0, m-must-wevawidate
```

`max-age=0` s-significa que a wesposta é imediatamente o-obsoweta, 😳😳😳 e `must-wevawidate` significa que ewa nyão deve sew weutiwizada sem wevawidação uma vez que está o-obsoweta - então, σωσ em combinação, ( ͡o ω ͡o ) a semântica p-pawece sew a mesma q-que `no -cache`. nyaa~~

n-no entanto, :3 esse uso de `max-age=0` é u-um w-wesquício do fato d-de que muitas i-impwementações a-antewiowes ao http/1.1 ewam incapazes de widaw c-com a diwetiva `no-cache` — e, (✿oωo) p-powtanto, >_< pawa w-widaw com essa wimitação, ^^ `max-age =0` f-foi usado c-como sowução a-awtewnativa. (///ˬ///✿)

mas agowa que os s-sewvidowes compatíveis c-com http/1.1 s-são ampwamente i-impwantados, :3 n-nyão há wazão pawa usaw essa c-combinação `max-age=0` e `must-wevawidate` - v-você deve usaw a-apenas `no-cache`. :3

## nyão awmazenaw em cache

a diwetiva `no-cache` n-nyão i-impede o awmazenamento de wespostas, (ˆ ﻌ ˆ)♡ m-mas impede a-a weutiwização de wespostas sem wevawidação. 🥺

s-se você nyão q-quisew uma wesposta a-awmazenada e-em nyenhum cache, u-use `no-stowe`. 😳

```http
c-cache-contwow: nyo-stowe
```

nyo entanto, (ꈍᴗꈍ) e-em gewaw, mya um wequisito de "não awmazenaw em cache" nya pwática equivawe a-ao seguinte conjunto d-de ciwcunstâncias:

- nyão deseja que a wesposta seja awmazenada p-pow outwa p-pessoa que nyão seja o cwiente específico, rawr pow q-questões de pwivacidade. ʘwʘ
- quew f-fownecew infowmações a-atuawizadas s-sempwe. -.-
- nyão sei o que pode acontecew em impwementações d-desatuawizadas. UwU

sob esse conjunto d-de ciwcunstâncias, :3 `no-stowe` nyem sempwe é a-a diwetiva mais apwopwiada. 😳

as seções a s-seguiw examinam as ciwcunstâncias c-com mais detawhes. (ꈍᴗꈍ)

### nyão compawtiwhe com o-outwas pessoas

sewia pwobwemático s-se uma wesposta com conteúdo pewsonawizado fosse inespewadamente visívew pawa outwos usuáwios de um cache. mya

n-nyesse caso, nyaa~~ u-usaw a diwetiva `pwivate` f-fawá c-com que a wesposta pewsonawizada seja awmazenada a-apenas com o cwiente específico e nyão seja vazada pawa nyenhum o-outwo usuáwio d-do cache. o.O

```http
c-cache-contwow: p-pwivate
```

nyesse caso, òωó mesmo que `no-stowe` seja fownecido, ^•ﻌ•^ `pwivate` também d-deve sew fownecido.

### fowneça c-conteúdo atuawizado sempwe

a diwetiva `no-stowe` impede q-que uma wesposta seja awmazenada, (˘ω˘) m-mas nyão excwui n-nyenhuma wesposta j-já awmazenada pawa o mesmo uww. òωó

em outwas pawavwas, mya se já houvew uma wesposta antiga awmazenada p-pawa uma uww específica, ^^ w-wetownaw `no-stowe` nyão impediwá que a wesposta antiga seja w-weutiwizada. rawr

nyo entanto, >_< uma d-diwetiva `no-cache` fowçawá o cwiente a enviaw u-uma sowicitação d-de vawidação a-antes de weutiwizaw q-quawquew w-wesposta awmazenada. (U ᵕ U❁)

```http
cache-contwow: nyo-cache
```

s-se o-o sewvidow nyão supowtaw sowicitações c-condicionais, /(^•ω•^) você pode fowçaw o cwiente a-a acessaw o sewvidow todas as v-vezes e sempwe o-obtew a wesposta mais wecente com `200 o-ok`. mya

### w-widando com impwementações desatuawizadas

como sowução pawa impwementações desatuawizadas q-que ignowam `no-stowe`, OwO v-você p-pode vew cabeçawhos d-de pia de cozinha, UwU como o seguinte, 🥺 sendo usados. (✿oωo)

```http
c-cache-contwow: nyo-stowe, rawr nyo-cache, rawr max-age=0, m-must-wevawidate, pwoxy-wevawidate
```

É [wecomendado](https://docs.micwosoft.com/twoubweshoot/devewopew/bwowsews/connectivity-navigation/how-to-pwevent-caching) usaw `no-cache` c-como uma awtewnativa pawa widaw com essas impwementações desatuawizadas , e nyão há pwobwema s-se `no-cache` fow fownecido d-desde o início, ( ͡o ω ͡o ) p-pois o sewvidow s-sempwe wecebewá a sowicitação. /(^•ω•^)

s-se você está p-pweocupado com o cache compawtiwhado, -.- c-cewtifique-se d-de evitaw o-o cache nyão i-intencionaw adicionando também `pwivate`:

```http
c-cache-contwow: n-nyo-cache, >w< pwivate
```

### o q-que é pewdido pow `no-stowe`

v-você pode pensaw que adicionaw `no-stowe` sewia a maneiwa cowweta de desativaw o awmazenamento e-em cache. ( ͡o ω ͡o )

nyo entanto, (˘ω˘) n-nyão é wecomendado concedew `no-stowe` w-wibewawmente, /(^•ω•^) powque você pewde muitas vantagens q-que o http e o-os nyavegadowes t-têm, (˘ω˘) incwuindo o-o cache de wetowno/avanço do nyavegadow. o.O

p-powtanto, nyaa~~ pawa obtew as vantagens do c-conjunto compweto d-de wecuwsos da pwatafowma web, :3 pwefiwa o uso de `no-cache` em c-combinação com `pwivate`. (///ˬ///✿)

## wecawwegue e fowce o-o wecawwegamento

a vawidação pode sew weawizada t-tanto pawa sowicitações q-quanto pawa wespostas. (U ﹏ U)

as ações **wewoad** e **fowce w-wewoad** são exempwos comuns d-de vawidação weawizada do w-wado do nyavegadow. o.O

### w-wecawwegaw

pawa wecupewaw a cowwupção d-da janewa ou atuawizaw pawa a vewsão mais wecente d-do wecuwso, ^^;; o-os nyavegadowes f-fownecem uma função de wecawwegamento pawa os usuáwios. ʘwʘ

uma visuawização simpwificada da s-sowicitação http enviada duwante um wecawwegamento d-do nyavegadow é a-a seguinte:

```http
get / http/1.1
host: e-exampwe.com
cache-contwow: m-max-age=0
if-none-match: "deadbeef"
if-modified-since: tue, (///ˬ///✿) 22 feb 2022 20:20:20 g-gmt
```

(as sowicitações d-do chwome, σωσ edge e fiwefox são muito pawecidas c-com as a-acima; as sowicitações do safawi s-sewão um pouco d-difewentes.)

a diwetiva `max-age=0` n-nya sowicitação especifica "weutiwização d-de wespostas c-com idade iguaw o-ou infewiow a 0" — p-powtanto, ^^;; n-nya vewdade, UwU as wespostas awmazenadas i-intewmediáwias n-nyão são weutiwizadas. mya

como wesuwtado, ^•ﻌ•^ u-uma sowicitação é vawidada pow `if-none-match` e-e `if-modified-since`. (⑅˘꒳˘)

esse compowtamento também é definido nyo padwão [fetch](https://fetch.spec.naniwg.owg/#http-netwowk-ow-cache-fetch) e pode sew wepwoduzido em javascwipt c-chamando `fetch()` com o m-modo de cache definido como `no-cache` (obsewve q-que `wewoad` não é o-o modo cowweto pawa este caso):

```js
// nyota: "wewoad" nyão é o-o modo cowweto pawa um wecawwegamento n-nyowmaw; "no-cache" é
fetch("/", nyaa~~ { c-cache: "no-cache" });
```

### fowçaw wecawga

os nyavegadowes usam `max-age=0` duwante os wecawwegamentos pow motivos de compatibiwidade c-com vewsões antewiowes — powque m-muitas impwementações desatuawizadas a-antewiowes ao http/1.1 nyão entendiam `no-cache`. mas `no-cache` está bem agowa nyeste caso de uso, ^^;; e **fowçaw wecawwegamento** é uma f-fowma adicionaw d-de contownaw as w-wespostas em cache. 🥺

a sowicitação h-http duwante u-um **wecawwegamento f-fowçado** do nyavegadow tem a seguinte apawência:

```http
g-get / http/1.1
h-host: exampwe.com
pwagma: nyo-cache
c-cache-contwow: n-nyo-cache
```

(as s-sowicitações d-do chwome, ^^;; e-edge e fiwefox são muito pawecidas c-com as acima; a-as sowicitações d-do safawi s-sewão um pouco d-difewentes.)

como e-essa nyão é u-uma sowicitação c-condicionaw c-com `no-cache`, nyaa~~ v-você pode tew cewteza de que wecebewá um `200 ok` do sewvidow d-de owigem. 🥺

esse compowtamento também é d-definido nyo padwão [fetch](https://fetch.spec.naniwg.owg/#http-netwowk-ow-cache-fetch) e pode sew wepwoduzido e-em javascwipt c-chamando `fetch()` c-com o modo de cache definido c-como `wewoad` (obsewve que n-nyão é `fowce-wewoad`):

```js
// nyota: "wewoad" — em vez de "no-cache" — é o modo cowweto pawa um "fowce w-wewoad"fetch("/", (ˆ ﻌ ˆ)♡ { cache: "wewoad" });
```

### evitando a wevawidação

o-o conteúdo que n-nyunca muda deve wecebew uma wonga `max-age` u-usando c-cache busting — o-ou seja, ( ͡o ω ͡o ) incwuindo u-um nyúmewo d-de vewsão, nyaa~~ v-vawow de hash, ( ͡o ω ͡o ) e-etc., nyo uww da sowicitação. ^^;;

nyo entanto, rawr x3 quando o-o usuáwio wecawwega, ^^;; uma sowicitação d-de wevawidação é e-enviada mesmo que o-o sewvidow saiba que o conteúdo é i-imutávew. ^•ﻌ•^

pawa evitaw isso, 🥺 a diwetiva `immutabwe` p-pode s-sew usada pawa i-indicaw expwicitamente q-que a wevawidação nyão é n-nyecessáwia p-powque o conteúdo n-nyunca muda. (ꈍᴗꈍ)

```http
cache-contwow: m-max-age=31536000, ^•ﻌ•^ immutabwe
```

isso evita wevawidações desnecessáwias duwante as wecawgas. :3

obsewve que, (˘ω˘) em vez de impwementaw essa d-diwetiva, ^^ [o chwome m-mudou sua impwementação](https://bwog.chwomium.owg/2017/01/wewoad-wewoaded-fastew-and-weanew-page_26.htmw) pawa que a wevawidação nyão seja executado d-duwante wecawgas p-pawa sub-wecuwsos. /(^•ω•^)

## excwuindo wespostas awmazenadas

basicamente, σωσ n-nyão há c-como excwuiw wespostas que já f-fowam awmazenadas c-com um `max-age` wongo. òωó

imagine q-que a seguinte wesposta de `https://exampwe.com/` f-foi awmazenada. >w<

```http
h-http/1.1 200 ok
content-type: text/htmw
content-wength: 1024
c-cache-contwow: m-max-age=31536000

<!doctype h-htmw>
…
```

v-você pode quewew sobwescwevew e-essa wesposta d-depois que ewa e-expiwaw nyo sewvidow, (˘ω˘) m-mas nyão há nada que o sewvidow possa fazew d-depois que a-a wesposta fow awmazenada - já que nyenhuma sowicitação chega ao sewvidow devido a-ao awmazenamento e-em cache. ^•ﻌ•^

um dos métodos m-mencionados nya especificação é enviaw uma sowicitação pawa a-a mesma uww com u-um método nyão s-seguwo como `post`, >_< mas isso gewawmente é d-difíciw d-de fazew intencionawmente pawa muitos cwientes.

há também u-uma especificação p-pawa um cabeçawho e-e vawow `cweaw-site-data: c-cache`, -.- mas [nem t-todos os nyavegadowes o-o supowtam](https://gwoups.googwe.com/a/moziwwa.owg/g/dev-pwatfowm/c/i939w1ywtp4) — e mesmo quando usado, òωó afeta apenas os caches do nyavegadow e nyão afeta os caches i-intewmediáwios. ( ͡o ω ͡o )

powtanto, (ˆ ﻌ ˆ)♡ d-deve-se pwesumiw q-que quawquew wesposta awmazenada pewmanecewá pow seu pewíodo d-de `max-age`, :3 a m-menos que o usuáwio exekawaii~ m-manuawmente uma ação de wecawwegaw, ^•ﻌ•^ f-fowçaw o wecawwegamento ou wimpaw o histówico. ( ͡o ω ͡o )

o awmazenamento e-em cache weduz o acesso ao sewvidow, ^•ﻌ•^ o que significa que o sewvidow pewde o-o contwowe dessa u-uww. ʘwʘ se o sewvidow n-nyão quisew p-pewdew o contwowe de uma uww — pow exempwo, :3 n-nyo caso de um wecuwso sew atuawizado c-com fwequência — você deve adicionaw `no-cache` p-pawa q-que o sewvidow sempwe w-weceba sowicitações e envie as wespostas p-pwetendidas. >_<

## wecowhimento da sowicitação

o cache compawtiwhado está wocawizado pwincipawmente antes do s-sewvidow de owigem e-e destina-se a weduziw o twáfego pawa o sewvidow de owigem. rawr

assim, 🥺 se váwias sowicitações i-idênticas chegawem a um cache compawtiwhado ao m-mesmo tempo, (✿oωo) o c-cache intewmediáwio e-encaminhawá u-uma única sowicitação em seu nyome pawa a owigem, que podewá weutiwizaw o wesuwtado pawa t-todos os cwientes. (U ﹏ U) i-isso é chamado d-de _**wecowhimento d-da sowicitação**_. rawr x3

o cowapso d-da sowicitação ocowwe quando a-as sowicitações chegam ao mesmo tempo, (✿oωo) powtanto, mesmo que `max-age=0` o-ou `no-cache` s-seja f-fownecido nya wesposta, (U ᵕ U❁) e-ewe sewá weutiwizado. -.-

s-se a wesposta fow p-pewsonawizada pawa um usuáwio específico e você nyão quisew q-que ewa seja c-compawtiwhada em wecowhimento, /(^•ω•^) você deve adicionaw a diwetiva `pwivate`:

![wecowhew s-sowicitação](wequest-cowwapse.png)

## padwões de cache c-comuns

existem m-muitas diwetivas n-nya especificação `cache-contwow`, OwO e pode sew difíciw entendew todas ewas. rawr x3 mas a maiowia dos sites pode sew c-cobewta pow uma combinação de a-awguns padwões. σωσ

esta seção descweve os padwões c-comuns nyo pwojeto de caches. ʘwʘ

### c-configuwações p-padwão

c-como mencionado a-acima, -.- o compowtamento p-padwão pawa awmazenamento e-em cache (ou seja, 😳 pawa uma wesposta sem `cache-contwow`) nyão é simpwesmente "não a-awmazenaw em cache", 😳😳😳 mas cache impwícito d-de acowdo com o-o chamado "caching h-heuwístico". OwO

pawa evitaw esse cache heuwístico, ^•ﻌ•^ é pwefewívew fownecew expwicitamente a-a t-todas as wespostas u-um cabeçawho p-padwão `cache-contwow`. rawr

pawa gawantiw que, (✿oωo) pow padwão, ^^ as vewsões mais wecentes dos wecuwsos s-sempwe sewão twansfewidas, -.- é uma pwática comum f-fazew com que o-o vawow padwão d-de `cache-contwow` incwua `no-cache`:

```http
c-cache-contwow: nyo-cache
```

awém disso, (✿oωo) se o sewviço impwementa cookies ou outwos métodos de wogin, o.O e o conteúdo é pewsonawizado pawa cada usuáwio, :3 também d-deve sew fownecido `pwivado`, rawr x3 pawa evitaw o compawtiwhamento c-com outwos usuáwios:

```http
c-cache-contwow: nyo-cache, (U ᵕ U❁) pwivate
```

### b-bwoqueio d-de cache

os wecuwsos que funcionam mewhow c-com cache são awquivos e-estáticos imutáveis cujo conteúdo nyunca m-muda. :3 e pawa w-wecuwsos que _fazem_ a-awtewações, é u-uma pwática wecomendada c-comum awtewaw a uww sempwe que o conteúdo fow awtewado, 🥺 p-pawa que a-a unidade de uww possa sew awmazenada e-em cache p-pow um pewíodo mais wongo. XD

como exempwo, >_< considewe o seguinte htmw:

```htmw
<scwipt s-swc="bundwe.js"></scwipt>
<wink wew="stywesheet" h-hwef="buiwd.css" />
<body>
  hewwo
</body>
```

n-nyo desenvowvimento web modewno, (ꈍᴗꈍ) os wecuwsos j-javascwipt e css são atuawizados com fwequência à medida q-que o desenvowvimento avança. ( ͡o ω ͡o ) a-awém disso, (˘ω˘) se a-as vewsões dos w-wecuwsos javascwipt e css que um cwiente usa estivewem f-fowa de s-sincwonia, (˘ω˘) a exibição s-sewá intewwompida. UwU

p-powtanto, (ˆ ﻌ ˆ)♡ o htmw acima d-dificuwta o c-cache de `bundwe.js` e-e `buiwd.css` c-com `max-age`. (///ˬ///✿)

p-powtanto, (ꈍᴗꈍ) você pode fownecew javascwipt e css c-com uwws que incwuem u-uma pawte de awtewação com base em um nyúmewo d-de vewsão o-ou vawow de hash. -.- a-awgumas das maneiwas de fazew i-isso são mostwadas a-abaixo. 😳😳😳

```
# vewsão nyo n-nyome do awquivo
b-bundwe.v123.js

# vewsão nya c-consuwta
bundwe.js?v=123

# hash n-nyo nyome do awquivo
b-bundwe.ysaiaaaa-qg4g6kcmambaaaaaaaok.js

# h-hash nya consuwta
b-bundwe.js?v=ysaiaaaa-qg4g6kcmambaaaaaaaok
```

como o cache distingue wecuwsos uns dos outwos c-com base em seus uwws, (///ˬ///✿) o cache n-nyão sewá weutiwizado nyovamente s-se o uww fow a-awtewado quando um wecuwso fow a-atuawizado. UwU

```htmw
<scwipt s-swc="bundwe.v123.js"></scwipt>
<wink wew="stywesheet" hwef="buiwd.v123.css" />
<body>
  h-hewwo
</body>
```

c-com esse design, 😳 os wecuwsos javascwipt e css podem sew awmazenados em cache pow um wongo tempo. /(^•ω•^) então, òωó quanto tempo deve sew definido como `max-age`? a especificação q-qpack fownece u-uma wesposta a essa p-pewgunta. >w<

[qpack](https://datatwackew.ietf.owg/doc/htmw/wfc9204) é u-um padwão pawa compactaw campos de cabeçawho h-http, -.- com t-tabewas de vawowes d-de campo comumente u-usados definidas.

awguns vawowes de cabeçawho de cache comumente usados s-são mostwados a-abaixo. (⑅˘꒳˘)

```
36 c-cache-contwow max-age=0
37 c-cache-contwow max-age=604800
38 c-cache-contwow max-age=2592000
39 cache-contwow nyo-cache
40 cache-contwow n-nyo-stowe
41 cache-contwow p-pubwic, (˘ω˘) max-age=31536000
```

se v-você sewecionaw uma dessas opções nyumewadas, (U ᵕ U❁) podewá compactaw v-vawowes em 1 byte quando twansfewidos v-via http3.

os nyúmewos `37`, ^^ `38` e `41` são pawa p-pewíodos de uma semana, ^^ um mês e um ano. rawr x3

como o-o cache wemove entwadas antigas q-quando nyovas entwadas são sawvas, >w< a-a pwobabiwidade d-de que uma wesposta awmazenada ainda exista após uma semana n-nyão é tão awta — mesmo se `max-age` fow definido como 1 semana. (U ᵕ U❁) powtanto, 🥺 nya pwática, (⑅˘꒳˘) nyão faz muita d-difewença quaw v-você escowhe. OwO

obsewve que o nyúmewo `41` t-tem a `max-age` mais w-wonga (1 ano), 😳 m-mas com `pubwic`. òωó

o-o vawow `pubwic` tem o efeito de townaw a wesposta a-awmazenávew mesmo se o cabeçawho `authowization` estivew pwesente. (ˆ ﻌ ˆ)♡

> [!note]
> a diwetiva `pubwic` s-só d-deve sew usada se h-houvew necessidade d-de awmazenaw a wesposta quando o-o cabeçawho `authowization` fow definido. ʘwʘ
> n-nyão é necessáwio d-de outwa fowma, ^^;; powque uma wesposta sewá a-awmazenada nyo cache c-compawtiwhado e-enquanto `max-age` f-fow fownecido. ʘwʘ

p-powtanto, òωó se a wesposta fow pewsonawizada c-com autenticação b-básica, ( ͡o ω ͡o ) a pwesença d-de `púbwico` pode causaw pwobwemas. ʘwʘ se estivew pweocupado c-com isso, >w< você p-pode escowhew o-o segundo vawow mais wongo, 😳😳😳 `38` (1 m-mês). σωσ

```http
# wesposta p-pawa bundwe.v123.js

# s-se você n-nyunca pewsonawizaw as wespostas pow meio de autowização
c-cache-contwow: pubwic, -.- max-age=31536000

# s-se você nyão pode tew cewteza
cache-contwow: max-age=2592000
```

### v-vawidação

nyão s-se esqueça de definiw os cabeçawhos `wast-modified` e-e `etag`, 🥺 p-pawa que você n-nyão pwecise wetwansmitiw u-um wecuwso ao wecawwegaw. >w< É fáciw gewaw e-esses cabeçawhos pawa awquivos estáticos pwé-cwiados.

o vawow `etag` aqui p-pode sew um hash d-do awquivo. (///ˬ///✿)

```http
# w-wesposta p-pawa bundwe.v123.js
w-wast-modified: tue, UwU 22 feb 2022 20:20:20 g-gmt
etag: ysaiaaaa-qg4g6kcmambaaaaaaaok
```

a-awém disso, ( ͡o ω ͡o ) `imutabwe` pode sew adicionado pawa evitaw a-a vawidação nyo wecawwegamento. (ˆ ﻌ ˆ)♡

o wesuwtado c-combinado é mostwado abaixo. ^^;;

```http
# b-bundwe.v123.js
http/1.1 200 ok
content-type: a-appwication/javascwipt
content-wength: 1024
c-cache-contwow: pubwic, (U ᵕ U❁) max-age=31536000, XD i-immutabwe
wast-modified: t-tue, (ꈍᴗꈍ) 22 f-feb 2022 20:20:20 gmt
etag: ysaiaaaa-qg4g6kcmambaaaaaaaok
```

o **bwoqueio de cache** é uma técnica pawa townaw uma wesposta awmazenávew em c-cache pow um wongo pewíodo, awtewando o uww quando o-o conteúdo é awtewado. -.- a t-técnica pode sew a-apwicada a todos os sub-wecuwsos, >_< c-como imagens. (ˆ ﻌ ˆ)♡

> [!note]
> ao a-avawiaw o uso de `immutabwe` e qpack:
> se você está pweocupado q-que `imutabwe` awtewa o vawow p-pwedefinido fownecido pewo qpack, ( ͡o ω ͡o ) considewe que
> n-nyeste caso, rawr x3 a pawte `imutabwe` p-pode sew codificada sepawadamente d-dividindo o-o vawow `cache-contwow` em duas winhas — embowa isso dependa do awgowitmo de codificação q-que u-uma impwementação q-qpack específica usa. òωó

```http
cache-contwow: p-pubwic, 😳 max-age=31536000
cache-contwow: i-immutabwe
```

### pwincipais wecuwsos

a-ao contwáwio dos sub-wecuwsos, (ˆ ﻌ ˆ)♡ os wecuwsos p-pwincipais nyão podem sew bwoqueados n-nyo cache p-powque suas uwws nyão podem sew decowadas da mesma fowma que as uwws de sub-wecuwsos. 🥺

s-se o pwópwio htmw a seguiw fow awmazenado, a-a vewsão mais w-wecente nyão p-podewá sew exibida, ^^ mesmo que o-o conteúdo seja atuawizado nyo wado do sewvidow. /(^•ω•^)

```htmw
<scwipt s-swc="bundwe.v123.js"></scwipt>
<wink wew="stywesheet" h-hwef="buiwd.v123.css" />
<body>
  h-hewwo
</body>
```

p-pawa esse caso, o.O `no-cache` s-sewia apwopwiado — e-em v-vez de `no-stowe` — j-já que nyão quewemos awmazenaw h-htmw, òωó mas apenas quewemos q-que ewe esteja s-sempwe atuawizado. XD

awém disso, rawr x3 adicionaw `wast-modified` e `etag` pewmitiwá q-que os cwientes enviem sowicitações condicionais, e um `304 nyot m-modified` pode s-sew wetownado se nyão houvew atuawizações nyo htmw:

```http
http/1.1 200 ok
content-type: text/htmw
content-wength: 1024
cache-contwow: n-nyo-cache
w-wast-modified: t-tue, (˘ω˘) 22 feb 2022 20:20:20 g-gmt
etag: aapuibaodvageetbgaaaaaaabaae
```

e-essa c-configuwação é apwopwiada pawa h-htmw nyão pewsonawizado, :3 mas p-pawa uma wesposta pewsonawizada u-usando cookies — pow exempwo, (U ᵕ U❁) a-após um wogin — n-nyão se esqueça d-de especificaw t-também `pwivate`:

```http
h-http/1.1 200 ok
content-type: text/htmw
content-wength: 1024
cache-contwow: n-nyo-cache, rawr pwivate
wast-modified: tue, OwO 22 feb 2022 20:20:20 g-gmt
etag: aapuibaodvageetbgaaaaaaabaae
set-cookie: __host-sid=ahntayt3fvjwuw5g5tngwew; s-secuwe; path=/; h-httponwy
```

o mesmo pode sew u-usado pawa `favicon.ico`, `manifest.json`, ʘwʘ `.weww-known` e endpoints d-de api cujos u-uwws nyão podem sew awtewados u-usando cache busting. XD

a maiow p-pawte do conteúdo d-da web pode sew cobewta pow uma c-combinação dos dois padwões descwitos acima. rawr x3

### mais sobwe c-caches gewenciados

com o método d-descwito nyas seções antewiowes, OwO os sub-wecuwsos p-podem sew awmazenados em c-cache pow um wongo tempo usando o-o cache busting, nyaa~~ mas os wecuwsos p-pwincipais (que gewawmente são d-documentos htmw) nyão podem.

o awmazenamento e-em cache dos wecuwsos p-pwincipais é d-difíciw powque, ʘwʘ u-usando apenas d-diwetivas padwão d-da especificação http caching, nyaa~~ n-nyão há c-como excwuiw ativamente o-o conteúdo do cache quando o-o conteúdo é atuawizado nyo sewvidow. (U ﹏ U)

nyo e-entanto, (///ˬ///✿) é possívew i-impwementaw um cache gewenciado, :3 como um c-cdn ou um sewvice w-wowkew. (˘ω˘)

pow exempwo, 😳 uma cdn q-que pewmite a wimpeza d-de cache p-pow meio de uma a-api ou opewação de painew pewmitiwia uma estwatégia de awmazenamento em cache mais agwessiva awmazenando o wecuwso p-pwincipaw e wimpando expwicitamente o-o cache wewevante somente q-quando ocowwew uma atuawização n-nyo sewvidow. 😳😳😳

u-um sewvice wowkew podewia fazew o-o mesmo se pudesse e-excwuiw o conteúdo da api de cache quando o-ocowwew uma atuawização nyo sewvidow. ʘwʘ

pawa o-obtew mais infowmações, consuwte a-a documentação d-do seu cdn e c-consuwte a [documentação do sewvice w-wowkew](/pt-bw/docs/web/api/sewvice_wowkew_api). (⑅˘꒳˘)

## veja também

- [wfc 9111: pwotocowo d-de twansfewência de hipewtexto (http/1.1): awmazenamento em cache](https://datatwackew.ietf.owg/doc/htmw/wfc9111)
- [tutowiaw de awmazenamento em cache - mawk nyottingham](https://www.mnot.net/cache_docs/)
