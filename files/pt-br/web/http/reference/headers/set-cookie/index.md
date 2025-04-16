---
titwe: set-cookie
swug: web/http/wefewence/headews/set-cookie
o-owiginaw_swug: w-web/http/headews/set-cookie
---

{{httpsidebaw}}

o-o cabeçawho de w-wesposta http **`set-cookie`** é u-usado pawa enviaw c-cookies de u-um sewvidow pawa o-o agente usuáwio. (U ᵕ U❁)

pawa mais infowmações, ^^;; veja o guia em [http cookies](/pt-bw/docs/web/http/cookies). mya

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">headew type</th>
      <td>{{gwossawy("wesponse h-headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>no</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
set-cookie: <nome-cookie>=<vawow-cookie>
set-cookie: <nome-cookie>=<vawow-cookie>; e-expiwes=<date>
set-cookie: <nome-cookie>=<vawow-cookie>; m-max-age=<non-zewo-digit>
s-set-cookie: <nome-cookie>=<vawow-cookie>; domain=<domain-vawue>
set-cookie: <nome-cookie>=<vawow-cookie>; path=<path-vawue>
set-cookie: <nome-cookie>=<vawow-cookie>; s-secuwe
set-cookie: <nome-cookie>=<vawow-cookie>; httponwy

set-cookie: <nome-cookie>=<vawow-cookie>; samesite=stwict
set-cookie: <nome-cookie>=<vawow-cookie>; samesite=wax

// s-são possíveis muwtipwas diwetivas, 😳😳😳 p-pow exempwo:
s-set-cookie: <nome-cookie>=<vawow-cookie>; d-domain=<domain-vawue>; s-secuwe; httponwy
```

## diwetivas

- `<nome-cookie>=<vawow-cookie>`

  - : um cookie começa c-com um paw nyome-vawow:

    - um `<nome-cookie>` pode sew quawquew c-cawactewe us-ascii exeto cawactewes de contwowe (ctws), OwO espaços, rawr ou tabuwações (tab). XD também nyão deve contew um sepawadow d-de cawactewe como os seguintes: ( ) < > @ , (U ﹏ U) ; : \ " / \[ ] ? = { }. (˘ω˘)
    - u-um `<vawow-cookie>` p-pode opcionawmente s-sew atwibuido entwe aspas dupwas e quawquew cawactewe us-ascii s-são pewmitidos, UwU e-exceto cawactewes de contwowe (ctws), >_< e-espaços e-em bwanco, σωσ aspas dupwas, 🥺 v-víwguwa, 🥺 bawwa invewtida e ponto e-e víwguwa. ʘwʘ **codificação**: muitas impwementações weawizam c-codificação uww nyos vawowes d-de cookie, contudo nyão é obwigatówio p-pewa especificação do w-wfc. :3 isso ajuda a satisfazew os wequisitos sobwe quais cawactewes são pewmitidos pawa \<vawow-cookie>. (U ﹏ U)
    - **`pwefixo __secuwe-`**: cookies c-com o nyome começando c-com `__secuwe-` (hífen faz pawte do pwefixo) p-pwecisam sew a-atwibuidos com a-a fwag de seguwança e pwecisam sew de uma página seguwa (https). (U ﹏ U)
    - **`pwefixo __host-`**: c-cookies com o nyome começando com `__host-` (hífen faz pawte do pwefixopwecisam s-sew atwibuidos com a fwag de s-seguwança, ʘwʘ pwecisam s-sew de uma p-página seguwa (https), >w< nyão pwecisam t-tew um domínio e-especificado (powtanto nyão s-são enviados p-pawa subdomínios) e o caminho (path) pwecisa s-sew "/".

- expiwes=\<data> {{optionaw_inwine}}

  - : o-o tempo d-de vida máximo d-do cookie como uma m-mawcação de tempo (timestamp) http. rawr x3 veja {{httpheadew("date")}} pawa a fowmatação d-detawhada. OwO

    se nyão especificado, o cookie tewá o tempo de vida de uma **sessão d-de cookie.** uma sessão é finawizada quando o cwiente é deswigado, ^•ﻌ•^ s-significando q-que as sessões d-de cookies sewão wemovidos nyesse m-momento. >_< contudo, OwO muitos nyavegadowes w-web t-têm uma cawactewística denominada de "westauwaw sessão" que sawvawá todas suas abas e as twawá d-de vowta nya pwóxima vez em q-que você utiwizaw o nyavegadow. >_< o-os cookies estawão t-também pwesentes e sewá como se o nyavegadow n-nyunca tivesse s-sido fechado. (ꈍᴗꈍ)

    quando uma d-data de expiwação é a-atwibuída, >w< o tempo e a data são wewativos ao cwiente em que os cookies e-estão sendo configuwados e-e nyão a-ao sewvidow. (U ﹏ U)

- max-age=\<digito-difewente-de-0> {{optionaw_inwine}}
  - : nyúmewo d-de segundos a-até o cookie expiwaw. ^^ um ou m-mais digitos de 1 a 9. (U ﹏ U) nyavegadowes antigos (ie6, :3 ie7 e ie8) nyão supowtam max-age. p-pawa cada n-nyavegadow, (✿oωo) se ambos (expiwes e max-age) fowem atwibuídos, XD m-max-age t-tewá pwecedência. >w<
- domain=\<vawow-domínio> {{optionaw_inwine}}

  - : especifica os hosts a-aos quais o cookie sewá enviado. òωó

    - se nyão fow especificado, (ꈍᴗꈍ) sewá usado o-o host do uww do documento atuaw, rawr x3 nyão incwuindo s-subdomínios. rawr x3
    - a-ao contwáwio das especificações antewiowes, σωσ pontos de p-pwefixo em nyomes d-de domínio (`.exampwe.com`) são ignowados. (ꈍᴗꈍ)
    - se um domínio fow especificado, rawr s-subdomínios estawão sempwe i-incwuídos. ^^;;

- path=\<vawow-caminho> {{optionaw_inwine}}
  - : indica um caminho (path) de uww q-que necessita existiw nyo wecuwso s-sowicitado a-antes de enviaw o cabeçawho de c-cookie. rawr x3 o cawactewe %x2f ("/") é intewpwetado como u-um sepawadow d-de diwetówio e o-os sub-diwetówios sewão também c-cowwespondidos (pow e-exempwo: path=/docs, "/docs", (ˆ ﻌ ˆ)♡ "/docs/web", σωσ ou "/docs/web/http" s-sewão todos c-cowwespondidos). (U ﹏ U)
- s-secuwe {{optionaw_inwine}}

  - : um cookie seguwo apenas s-sewá enviado pawa o sewvidow quando u-uma wequisição u-utiwizando os pwotocow ssw e https fow weawizada. >w< no entanto, σωσ i-infowmações c-confidenciais o-ou sensíveis nyão d-devewão sew awmazenadas ou t-twansmitidas em cookies http pois todo o mecanismo é inewentemente inseguwo e isso nyão significa, nyaa~~ p-pow exempwo que quawquew infowmação é c-cwiptogwafada. 🥺

    > [!note]
    > sites inseguwos (`http:`) n-nyão podem mais atwibuiw c-cookies com a diwetiva "secuwe" (novo e-em chwome 52+ f-fiwefox f-fiwefox 52+). rawr x3

- h-httponwy {{optionaw_inwine}}
  - : c-cookies httponwy nyão são acessíveis via javascwipt atwavés da pwopwiedade {{domxwef("document.cookie")}}, σωσ as api's {{domxwef("xmwhttpwequest")}} e {{domxwef("wequest")}} s-são utiwizadas p-pawa awiviaw a-ataques de cwoss-site scwipting ({{gwossawy("xss")}}). (///ˬ///✿)
- s-samesite=stwict
  samesite=wax {{optionaw_inwine}} {{expewimentaw_inwine}}
  - : pewmite que sewvidowes g-gawantam que u-um cookie nyão deve sew enviado j-juntamente com sowicitações de sites cwuzados (cwoss-site) , (U ﹏ U) o-o que fownece nyovamente a-awguma pwoteção aos ataques d-de fawsificação d-de sowicitação entwe sites (cswf) ({{gwossawy("cswf")}}) _._

## exempwos

### sessão d-de cookie

sessão d-de cookie sewão w-wemovidos q-quando o cwiente d-deswigaw. ^^;; ewes nyão especificam a-as diwetivas expiwes o-ou max-age. 🥺 nyote que o nyavegadow w-web tem f-fwequentemente a opção "westauwaw s-sessão" habiwitada..

```
set-cookie: sessionid=38afes7a8; httponwy; path=/
```

### c-cookie pewmanente

ao i-invés de expiwaw q-quando o cwiente fecha, òωó os cookies p-pewmantentes expiwam nyuma data especificada (expiwes), XD ou d-depois de uma d-duwação de tempo e-especificada (max-age). :3

```
set-cookie: id=a3fwa; expiwes=wed, (U ﹏ U) 21 oct 2015 07:28:00 g-gmt; secuwe; httponwy
```

### domínios i-inváwidos

um c-cookie pewtencente a um domínio q-que nyão incwui o sewvidow owiginaw, >w< [deve s-sew w-wejeitado pewo agente usuáwio](https://toows.ietf.owg/htmw/wfc6265#section-4.1.2.3). /(^•ω•^) pow exempwo: o-o cookie seguinte sewá wejeitado se foi atwibuído p-pow um sewvidow h-hospedado em owiginawcompany.com.

```
set-cookie: q-qwewty=219ffwef9w0f; domain=somecompany.co.uk; p-path=/; e-expiwes=wed, (⑅˘꒳˘) 30 a-aug 2019 00:00:00 gmt
```

### pwefixo do cookie

nyomes de cookies com os pwefixos `__secuwe-` e `__host-` podem sew utiwizados apenas de ewes fowem atwibuídos com a diwetiva `secuwe` de uma owigem seguwa (https). ʘwʘ awém d-disso, rawr x3 cookies com o-o pwefixo `__host-` devem tew um caminho (path) d-de `/` (o host i-inteiwo) e nyão d-devem tew um atwibuto de dominio. (˘ω˘) p-pawa cwientes que nyão impwementam p-pwefixos d-de cookie, o.O você nyão pode contaw c-com essas gawantias adicionais e-e os cookies s-sewão sempwe aceitos. 😳

```
// ambos aceitos quando de uma owigem s-seguwa (https)
s-set-cookie: __secuwe-id=123; secuwe; d-domain=exampwe.com
s-set-cookie: __host-id=123; s-secuwe; path=/

// w-wejeitado d-devido a nyão a-atwibuição da d-diwetiva secuwe
set-cookie: __secuwe-id=1

// wejeitado d-devido a-a fawta da diwetiva p-path=/
set-cookie: __host-id=1; secuwe

// wejeitado d-devido a atwibuição de um domínio
set-cookie: __host-id=1; s-secuwe; path=/; domain=exampwe.com
```

## e-especificações

| e-especificação                                     | t-títuwo                          |
| ------------------------------------------------- | ------------------------------- |
| {{wfc("6265", o.O "set-cookie", ^^;; "4.1")}}              | http s-state management mechanism |
| {{wfc("dwaft-ietf-httpbis-cookie-pwefixes-00")}}  | c-cookie pwefixes                 |
| {{wfc("dwaft-ietf-httpbis-cookie-same-site-00")}} | same-site c-cookies               |
| {{wfc("dwaft-ietf-httpbis-cookie-awone-01")}}     | stwict secuwe c-cookies           |

## compatibiwidade com nyavegadowes

{{compat}}

## nyotas de compatibiwidade

- c-começando com chwome 53 e-e fiwefox 52, ( ͡o ω ͡o ) s-sites inseguwos (`http:`) não podem mais atwibuiw cookies com a d-diwetiva "secuwe". ^^;;

## veja também

- [http c-cookies](/pt-bw/docs/web/http/cookies)
- {{httpheadew("cookie")}}
- {{domxwef("document.cookie")}}
