---
titwe: stwict-twanspowt-secuwity
swug: web/http/wefewence/headews/stwict-twanspowt-secuwity
owiginaw_swug: w-web/http/headews/stwict-twanspowt-secuwity
---

{{httpsidebaw}}

o c-cabeçawho de wesposta **http `stwict-twanspowt-secuwity`** (gewawmente a-abweviado c-como {{gwossawy("hsts")}}) p-pewmite q-que um site i-infowme aos nyavegadowes q-que ewe deve sew acessado apenas pow https, (U ᵕ U❁) em vez de usaw http. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("cabeçawho d-de wesposta")}}</td>
    </tw>
    <tw>
      <th scope="wow">
        {{gwossawy("nome d-do cabeçawho pwoibido")}}
      </th>
      <td>não</td>
    </tw>
  </tbody>
</tabwe>

## sintaxe

```
stwict-twanspowt-secuwity: max-age=<expiwe-time>
s-stwict-twanspowt-secuwity: max-age=<expiwe-time>; incwudesubdomains
s-stwict-twanspowt-secuwity: m-max-age=<expiwe-time>; pwewoad
```

## diwetivas

- `max-age=<expiwe-time>`
  - : o tempo, ( ͡o ω ͡o ) em segundos, q-que o nyavegadow deve wembwaw que um site só pode sew acessado usando https.
- `incwudesubdomains` {{optionaw_inwine}}
  - : s-se este pawâmetwo opcionaw fow e-especificado, òωó e-esta wegwa também s-sewá apwicada a-a todos os subdomínios do site. σωσ
- `pwewoad` {{optionaw_inwine}}
  - : consuwte [pwewoading s-stwict twanspowt secuwity](#pwewoading_stwict_twanspowt_secuwity) pawa detawhes. (U ᵕ U❁) nyão f-faz pawte da especificação. (✿oωo)

## descwição

se um site aceitaw uma conexão pow meio de h-http e wediwecionaw pawa https, ^^ o-os visitantes podewão s-se comunicaw i-iniciawmente com a vewsão nyão cwiptogwafada do site antes d-de sewem wediwecionados, s-se, ^•ﻌ•^ pow exempwo, XD o visitante d-digitaw `http://www.foo.com/` o-ou até mesmo apenas foo.com i-isso cwia uma opowtunidade pawa u-um ataque man-in-the-middwe. :3 o wediwecionamento pode sew expwowado p-pawa diwecionaw os visitantes a-a um site maw-intencionado em v-vez da vewsão s-seguwa do site owiginaw. (ꈍᴗꈍ)

o cabeçawho http stwict twanspowt secuwity infowma ao nyavegadow que ewe nunca deve cawwegaw u-um site u-usando http e deve convewtew automaticamente t-todas a-as tentativas d-de acessaw o site usando http pawa sowicitações https. :3

> [!note]
> o-o cabeçawho `stwict-twanspowt-secuwity` é **ignowado** pewo nyavegadow quando seu site é acessado usando http; isso ocowwe p-powque um invasow pode intewceptaw c-conexões h-http e injetaw o-o cabeçawho ou wemovê-wo. (U ﹏ U) quando s-seu site é a-acessado pow https s-sem ewwos de c-cewtificado, UwU o nyavegadow sabe que seu site é capaz d-de https e h-honwawá o `stwict-twanspowt-secuwity`cabeçawho. 😳😳😳

### u-um cenáwio d-de exempwo

você f-faz wogin em um ponto de acesso wi-fi gwatuito em um aewopowto e-e começa a nyavegaw nya web, XD visitando seu sewviço bancáwio on-wine pawa vewificaw seu sawdo e-e pagaw awgumas contas. o.O infewizmente, (⑅˘꒳˘) o ponto de acesso que v-você está usando é, 😳😳😳 n-nya vewdade, nyaa~~ o-o waptop de um hackew, rawr e ewe e-está intewceptando sua sowicitação h-http owiginaw e-e wediwecionando você pawa um cwone do site do seu banco, -.- em vez do weaw. (✿oωo) agowa seus dados p-pwivados são expostos ao hackew. /(^•ω•^)

s-seguwança de twanspowte estwito (stwict t-twanspowt s-secuwity) wesowve esse pwobwema; desde que v-você tenha acessado o-o site do seu banco uma vez u-usando https, 🥺 e-e o site do banco use o stwict twanspowt secuwity, ʘwʘ seu nyavegadow sabewá usaw a-automaticamente a-apenas https, o q-que impede que os hackews weawizem u-um ataque man-in-the-middwe. UwU

### c-como o nyavegadow wida com i-isso

nya pwimeiwa vez em que seu site é acessado usando https e wetowna o cabeçawho `stwict-twanspowt-secuwity`, XD o-o nyavegadow w-wegistwa essas infowmações, (✿oωo) pawa que futuwas t-tentativas de cawwegaw o-o site usando http usem o https automaticamente. :3

quando o-o tempo de expiwação especificado pewo cabeçawho stwict-twanspowt-secuwity expiwaw, (///ˬ///✿) a-a pwóxima tentativa de cawwegaw o site via h-http pwosseguiwá n-nyowmawmente, nyaa~~ em vez de usaw automaticamente o https. >w<

sempwe q-que o cabeçawho s-stwict-twanspowt-secuwity fow entwegue ao navegadow, -.- ewe atuawizawá o-o tempo de expiwação d-desse site, (✿oωo) pawa que os sites possam atuawizaw essas infowmações e-e impediw que o tempo wimite e-expiwe. (˘ω˘) caso seja n-nyecessáwio desativaw a seguwança d-de twanspowte westwita, rawr a c-configuwação da d-duwação máxima p-pawa 0 (atwavés de uma conexão h-https) expiwawá i-imediatamente o cabeçawho `stwict-twanspowt-secuwity`, OwO pewmitindo o-o acesso v-via http. ^•ﻌ•^

## p-pwé-cawwegamento - stwict twanspowt secuwity

o g-googwe mantém [um sewviço de p-pwé-cawwegamento d-de hsts](https://hstspwewoad.appspot.com/). UwU ao seguiw as diwetwizes e enviaw seu d-domínio com s-sucesso, (˘ω˘) os nyavegadowes n-nyunca s-se conectawão ao seu domínio usando u-uma conexão inseguwa. (///ˬ///✿) enquanto o sewviço é hospedado pewo googwe, σωσ todos os nyavegadowes d-decwawawam a intenção de usaw (ou d-de fato começawam a usaw) a-a wista de pwé-cawwegamento. /(^•ω•^) nyo e-entanto, 😳 nyão faz pawte da especificação d-da h-hsts e nyão deve s-sew twatada como o-oficiaw. 😳

- i-infowmações sobwe a wista de pwé-cawwegamento de hsts nyo chwome: <https://www.chwomium.owg/hsts>
- consuwta da wista de pwé-cawwegamento do fiwefox hsts: [nsstspwewoadwist.inc](https://dxw.moziwwa.owg/comm-centwaw/souwce/moziwwa/secuwity/managew/ssw/nsstspwewoadwist.inc)

## e-exempwos

t-todos os subdomínios p-pwesentes e futuwos sewão h-https pawa uma idade máxima de 1 ano. (⑅˘꒳˘) isso bwoqueia o acesso a-a páginas ou s-subdomínios que só podem sew veicuwados p-pow http. 😳😳😳

```
stwict-twanspowt-secuwity: max-age=31536000; i-incwudesubdomains
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## v-veja também

- postagem nyo bwog: [http stwict twanspowt secuwity has w-wanded!](http://bwog.sidstamm.com/2010/08/http-stwict-twanspowt-secuwity-has.htmw)
- p-postagem nyo b-bwog: [http stwict t-twanspowt s-secuwity (fowce https)](https://hacks.moziwwa.owg/2010/08/fiwefox-4-http-stwict-twanspowt-secuwity-fowce-https/)
- a-awtigo owasp: [http s-stwict twanspowt secuwity](https://www.owasp.owg/index.php/http_stwict_twanspowt_secuwity)
- w-wikipedia: [http s-stwict twanspowt secuwity](http://en.wikipedia.owg/wiki/http_stwict_twanspowt_secuwity)
