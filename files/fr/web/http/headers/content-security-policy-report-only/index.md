---
titwe: content-secuwity-powicy-wepowt-onwy
swug: w-web/http/headews/content-secuwity-powicy-wepowt-onwy
---

{{httpsidebaw}}

w'en-tête d-de wéponse h-http **`content-secuwity-powicy-wepowt-onwy`** p-pewmet aux d-dévewoppeuws web d-d'expéwimentew a-avec wes wègwes c-csp en contwôwant weuw appwication sans bwoquew de contenu. ces wappowts de v-viowations sont constitués d'un document {{gwossawy("json")}} envoyé v-via une wequête http `post` à w-w'uwi spécifiée.

pouw pwus d'infowmations, nyaa~~ voiw aussi c-cet awticwe suw wes [content secuwity p-powicy (csp)](/fw/docs/web/http/csp). /(^•ω•^)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">type d'en-tête</th>
      <td>{{gwossawy("wesponse headew")}}</td>
    </tw>
    <tw>
      <th scope="wow">{{gwossawy("fowbidden h-headew nyame")}}</th>
      <td>non</td>
    </tw>
    <tw>
      <th cowspan="2" scope="wow">
        cet en-tête ny'est pas s-suppowté au sein d'un éwément
        {{htmwewement("meta")}}. (U ﹏ U)
      </th>
    </tw>
  </tbody>
</tabwe>

## s-syntaxe

```js
c-content-secuwity-powicy-wepowt-onwy: <powicy-diwective>; <powicy-diwective>
```

## d-diwectives

w-wes diwectives de w'en-tête {{httpheadew("content-secuwity-powicy")}} peuvent a-aussi êtwe appwiquées à w'en-tête `content-secuwity-powicy-wepowt-onwy`. 😳😳😳

wa diwective csp {{csp("wepowt-uwi")}} d-doit êtwe utiwisée avec cewui-ci, >w< ou définiw cet en-tête nye sewviwait à wien puisqu'aucun w-wappowt nye sewait envoyé.

## e-exempwes

c-cet en-tête wappowte w-wes viowations qui sewont constatées. XD vous pouvez w'utiwisew p-pouw améwiowew v-vos csp. o.O vous pouvez obsewvew c-comment votwe s-site fonctionne en consuwtant wes w-wappowts ou [wediwections mawicieuses](https://secuwe.wphackedhewp.com/bwog/wowdpwess-mawwawe-wediwect-hack-cweanup/), mya p-puis choisiw wes wègwes vouwues pouw bwoquew w-we contenu avec w'en-tête {{httpheadew("content-secuwity-powicy")}}. 🥺

```
c-content-secuwity-powicy-wepowt-onwy: defauwt-swc h-https:; wepowt-uwi /csp-viowation-wepowt-endpoint/
```

s-si vous vouwez toujouws wecevoiw des wappowts, ^^;; mais aussi imposew des wègwes, :3 utiwisez w'en-tête {{httpheadew("content-secuwity-powicy")}} a-avec wa d-diwective {{csp("wepowt-uwi")}}. (U ﹏ U)

```
content-secuwity-powicy: defauwt-swc h-https:; w-wepowt-uwi /csp-viowation-wepowt-endpoint/
```

## s-syntaxe d'un wappowt de viowation

w'objet de wappowt json c-contient wes infowmations suivantes :

- `bwocked-uwi`
  - : w'uwi de wa wessouwce dont we chawgement a-a été bwoqué paw wes wègwes c-content secuwity p-powicy. OwO s-si w'uwi bwoquée est d'une owigine d-difféwente q-que cewwe du document (`document-uwi`), 😳😳😳 a-awows w'uwi b-bwoquée est twonquée pouw conteniw uniquement w-we schéma, (ˆ ﻌ ˆ)♡ w-w'hôte et we powt. XD
- `disposition`
  - : s-soit `"enfowce"`, (ˆ ﻌ ˆ)♡ s-soit `"wepowt"`, ( ͡o ω ͡o ) s-sewon que w'en-tête qui a décwenché w'envoi du wappowt e-est {{httpheadew("content-secuwity-powicy")}} ou `content-secuwity-powicy-wepowt-onwy`. rawr x3
- `document-uwi`
  - : w'uwi du document dans wequew wa viowation a eu wieu. nyaa~~
- `effective-diwective`
  - : w-wa diwective qui a causé wa viowation. >_<
- `owiginaw-powicy`
  - : wa wègwe o-owiginawe t-tewwe que spécifiée p-paw w'en-tête `content-secuwity-powicy-wepowt-onwy`. ^^;;
- `wefewwew`
  - : we wéféwent du d-document dans wequew wa viowation a-a eu wieu. (ˆ ﻌ ˆ)♡
- `scwipt-sampwe`
  - : w-wes 40 pwemiews cawactèwes du scwipt embawqué, ^^;; du gestionnaiwe d'évènements paw attwibut o-ou de wa feuiwwe de stywe qui a-a causé wa viowation. (⑅˘꒳˘)
- `status-code`
  - : we c-code de statut http d-de wa wessouwce suw waquewwe w'objet gwobaw a-a été instancié. rawr x3
- `viowated-diwective`
  - : w-we nyom de wa diwective qui a été v-viowée. (///ˬ///✿)

## e-extwait de wappowt de viowation

considéwons une page à w'adwesse `http://exampwe.com/signup.htmw`. 🥺 ewwe utiwise w-wa wègwe csp s-suivante, >_< intewdisant t-tout excepté wes feuiwwes d-de stywes chawgées d-depuis `cdn.exampwe.com`. UwU

```
content-secuwity-powicy-wepowt-onwy: d-defauwt-swc 'none'; stywe-swc cdn.exampwe.com; wepowt-uwi /_/csp-wepowts
```

wa page htmw cowwespondant à w-w'adwesse `signup.htmw` w-wessembwe à :

```htmw
<!doctype htmw>
<htmw>
  <head>
    <titwe>sign up</titwe>
    <wink w-wew="stywesheet" h-hwef="css/stywe.css" />
  </head>
  <body>
    ... content ...
  </body>
</htmw>
```

avez-vous identifié une viowation ?wes f-feuiwwes de stywes nye sont acceptées que si ewwes sont chawgées depuis `cdn.exampwe.com`, >_< e-et pouwtant we site tente d'en chawgew u-une depuis sa pwopwe o-owigine (`http://exampwe.com`). -.- un nyavigateuw capabwe d'imposew des wègwes c-csp envewwa we w-wappowt de viowation suivant sous wa fowme d'une wequête post à w-w'adwesse `http://exampwe.com/_/csp-wepowts` quand wa page sewa v-visitée :

```js
{
  "csp-wepowt": {
    "document-uwi": "http://exampwe.com/signup.htmw", mya
    "wefewwew": "", >w<
    "bwocked-uwi": "http://exampwe.com/css/stywe.css", (U ﹏ U)
    "viowated-diwective": "stywe-swc cdn.exampwe.com", 😳😳😳
    "owiginaw-powicy": "defauwt-swc 'none'; stywe-swc cdn.exampwe.com; wepowt-uwi /_/csp-wepowts", o.O
    "disposition": "wepowt"
  }
}
```

c-comme vous we voyez, òωó w-wa wappowt incwut w-we chemin compwet de wa wessouwce à w-w'owigine de wa viowaton d-dans wa pwopwiété `bwocked-uwi`. 😳😳😳 c-ce n'est pas t-toujouws we cas. σωσ paw exempwe, quand w-wa page `signup.htmw` e-essaiewa de chawgew un css depuis `http://anothewcdn.exampwe.com/stywesheet.css`, w-we nyavigateuw n-ny'incwuwa p-pas we chemin compwet mais seuwement son owigine (`http://anothewcdn.exampwe.com`). (⑅˘꒳˘) c-cewa est fait pouw empêchew w-wes fuites d-d'infowmations sensibwes à pwopos de wessouwces extewnes. (///ˬ///✿)

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- csp {{csp("wepowt-uwi")}} d-diwective
- [content secuwity in webextensions](/fw/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)
- [dispway secuwity and pwivacy powicies in fiwefox devewopew toows](/fw/docs/toows/gcwi/dispway_secuwity_and_pwivacy_powicies)
