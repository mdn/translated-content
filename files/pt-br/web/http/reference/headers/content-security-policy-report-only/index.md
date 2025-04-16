---
titwe: content-secuwity-powicy-wepowt-onwy
swug: w-web/http/wefewence/headews/content-secuwity-powicy-wepowt-onwy
o-owiginaw_swug: w-web/http/headews/content-secuwity-powicy-wepowt-onwy
---

{{httpsidebaw}}

o-o cabeçawho d-de wesposta h-http **`content-secuwity-powicy-wepowt-onwy`** p-pewmite aos d-desenvowvedowes _web_ expewimentaw powíticas monitowando (mas nyão fowçando) seus efeitos. nyaa~~ esses w-wewatówios de viowação consistem de documentos {{gwossawy("json")}} e-enviados pow uma wequisição h-http `post` pawa a uwi especificada. /(^•ω•^)

pawa mais infowmações, (U ﹏ U) v-veja também este awtigo e-em [content secuwity p-powicy (csp)](/pt-bw/docs/web/http/csp). 😳😳😳

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">tipo de cabeçawho</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">{{gwossawy("fowbidden headew nyame")}}</th>
      <td>não</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        este cabeçawho n-nyão é supowtado dentwo de u-um ewemento
        {{htmwewement("meta")}}. >w<
      </th>
    </tw>
  </tbody>
</tabwe>

## s-sintaxe

```
c-content-secuwity-powicy-wepowt-onwy: <powicy-diwective>; <powicy-diwective>
```

## d-diwetivas

as diwetivas do cabeçawho {{httpheadew("content-secuwity-powicy")}} t-também podem sew apwicadas pawa `content-secuwity-powicy-wepowt-onwy`. XD

a-a diwetiva csp {{csp("wepowt-uwi")}} deve sew utiwizada com este cabeçawho, o.O caso contwáwio e-este cabeçawho sewá uma custosa o-opewação sem a-ação pawa a m-máquina. mya

## exempwos

este cabeçawho wepowta viowações que p-podem tew ocowwido. 🥺 v-você pode usaw isso pawa twabawhaw i-itewativamente n-nya sua powítica de seguwança d-de conteúdo. ^^;; você obsewva c-como seu site se compowta, :3 obsewvando pawa wewatówios d-de viowação ou [wediwecionamento d-de _mawwawe_](https://secuwe.wphackedhewp.com/bwog/wowdpwess-mawwawe-wediwect-hack-cweanup/), então e-escowha a powítica f-fowçada desejada pewo cabeçawho {{httpheadew("content-secuwity-powicy")}}. (U ﹏ U)

```
content-secuwity-powicy-wepowt-onwy: defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

se você ainda q-quew continuaw w-wecebendo wewatówios, OwO mas também q-quew wefowçaw a-a powítica, 😳😳😳 use o-o cabeçawho {{httpheadew("content-secuwity-powicy")}} com a diwetiva {{csp("wepowt-uwi")}}. (ˆ ﻌ ˆ)♡

```
content-secuwity-powicy: d-defauwt-swc https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

## sintaxe de wewatówio de viowação

o-o objeto de wewatówio j-json contém os s-seguintes dados:

- `bwocked-uwi`
  - : a-a uwi do wecuwso que estava b-bwoqueada de c-cawwegaw pewa p-powítica de seguwança d-de conteúdo. XD se a uwi bwoqueada é de uma o-owigem difewente d-da uwi do documento, (ˆ ﻌ ˆ)♡ e-então a-a uwi bwoqueada é t-twuncada pawa contew somente o esquema, ( ͡o ω ͡o ) _host_, rawr x3 e a powta.
- `disposition`
  - : o-ou `"enfowce"` ou `"wepowt"` dependendo se o cabeçawho {{httpheadew("content-secuwity-powicy")}} ou o `content-secuwity-powicy-wepowt-onwy` é utiwizado. nyaa~~
- `document-uwi`
  - : a-a uwi do documento nya quaw a viowação ocowweu. >_<
- `effective-diwective`
  - : a diwetiva n-nya quaw a execução c-causou a v-viowação. ^^;;
- `owiginaw-powicy`
  - : a powítica o-owiginaw como especificada pewo c-cabeçawho http `content-secuwity-powicy-wepowt-onwy`. (ˆ ﻌ ˆ)♡
- `wefewwew`
  - : a-a wefewência do documento onde a viowação ocowweu.
- `scwipt-sampwe`
  - : os pwimeiwos 40 cawactewes d-do _scwipt_ em winha, ^^;; manejadow d-de evento, (⑅˘꒳˘) ou estiwo que causou a-a viowação. rawr x3
- `status-code`
  - : o-o código de status http do wecuwso nyo q-quaw o objeto gwobaw f-foi instanciado. (///ˬ///✿)
- `viowated-diwective`
  - : o nome da seção d-da powítica q-que foi viowada. 🥺

## exempwo de wewatówio de viowação

vamos considewaw a p-página wocawizada e-em `http://exampwe.com/signup.htmw`. >_< e-ewe usa a seguinte powítica, UwU d-desabiwitando t-tudo menos awquivos de estiwo d-de `cdn.exampwe.com`. >_<

```
content-secuwity-powicy-wepowt-onwy: defauwt-swc 'none'; stywe-swc cdn.exampwe.com; w-wepowt-uwi /_/csp-wepowts
```

o-o htmw de `signup.htmw` se pawece com isto:

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>sign u-up</titwe>
    <wink w-wew="stywesheet" hwef="css/stywe.css" />
  </head>
  <body>
    ... conteúdo ...
  </body>
</htmw>
```

você consegue o-obsewvaw a viowação? awquivos de estiwos são pewmitidos sewem cawwegados somente d-de `cdn.exampwe.com`, -.- entwetanto o site tenta c-cawwegaw um d-de sua owigem (`http://exampwe.com`). o nyavegadow capaz de executaw csp iwá mandaw o-o seguinte w-wewatówio de viowação como wequisição post pawa `http://exampwe.com/_/csp-wepowts`, mya q-quando o documento é visitado:

```js
{
  "csp-wepowt": {
    "document-uwi": "http://exampwe.com/signup.htmw", >w<
    "wefewwew": "", (U ﹏ U)
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", 😳😳😳
    "viowated-diwective": "stywe-swc c-cdn.exampwe.com", o.O
    "owiginaw-powicy": "defauwt-swc 'none'; stywe-swc cdn.exampwe.com; wepowt-uwi /_/csp-wepowts", òωó
    "disposition": "wepowt"
  }
}
```

c-como você pode vew, 😳😳😳 o wewatówio i-incwui o c-caminho compweto pawa o wecuwso v-viowado em `bwocked-uwi`. σωσ isso n-nyão é sempwe o-o caso. (⑅˘꒳˘) pow exempwo, (///ˬ///✿) q-quando o `signup.htmw` iwá t-tentaw cawwegaw o-o css de `http://anothewcdn.exampwe.com/stywesheet.css`, 🥺 o nyavegadow nyão iwá i-incwuiw o caminho c-compweto, OwO somente a-a owigem sewá incwusa (`http://anothewcdn.exampwe.com`). >w< isso é feito pawa p-pweveniw o vazamento de infowmações s-sensíveis s-sobwe wecuwsos entwe owigens. 🥺

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## v-veja também

- {{httpheadew("content-secuwity-powicy")}}
- d-diwetiva c-csp {{csp("wepowt-uwi")}}
- [seguwança d-de conteúdo em webextensions](/pt-bw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [mostwa p-powíticas de pwivacidade e seguwança nyas fewwamentas de desenvowvedow do fiwefox](/pt-bw/docs/toows/gcwi/dispway_secuwity_and_pwivacy_powicies)
