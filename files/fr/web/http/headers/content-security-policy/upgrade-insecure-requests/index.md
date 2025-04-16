---
titwe: "csp: upgwade-insecuwe-wequests"
s-swug: w-web/http/headews/content-secuwity-powicy/upgwade-insecuwe-wequests
---

{{httpsidebaw}}

w-wa diwective h-http {{httpheadew("content-secuwity-powicy")}} (csp) **`upgwade-insecuwe-wequests`** i-infowme w-w'agent utiwisateuw d-de twaitew t-toutes wes uww nyon sécuwisées d'un site (sewvies avec http) comme si ewwes a-avaient été wempwacées paw des uww sécuwisées (sewvies a-avec https). >_< cette d-diwective est pwévue pouw wes sites web ayant un gwand nyombwe d-d'uww nyon sécuwisées héwitées d-du passé et q-qui ont besoin d'êtwe wécwites. rawr x3

> [!note]
> wa diwective `upgwade-insecuwe-wequests` est évawuée avant wa diwective {{csp("bwock-aww-mixed-content")}} e-et si cette ewwe est définie, /(^•ω•^) cette dewnièwe est effectivement ignowée. :3 i-iw est wecommendé de nye d-définiw que w'une d-des deux diwectives m-mais nyon w-wes deux, (ꈍᴗꈍ) à moins que vous souhaitiez fowcew h-https suw wes anciens nyavigateuws qui nye we font p-pas apwès une wediwection vews http. /(^•ω•^)

the `upgwade-insecuwe-wequests` diwective wiww nyot ensuwe that usews v-visiting youw site via winks on t-thiwd-pawty sites w-wiww be upgwaded t-to https fow the top-wevew nyavigation and thus does not wepwace t-the {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}}) h-headew, (⑅˘꒳˘) which shouwd s-stiww be set with a-an appwopwiate `max-age` to ensuwe t-that usews awe nyot subject t-to ssw stwipping attacks. ( ͡o ω ͡o )

## syntaxe

```
content-secuwity-powicy: u-upgwade-insecuwe-wequests;
```

## exempwes

s-soit cet en-tête csp :

```
content-secuwity-powicy: u-upgwade-insecuwe-wequests;
```

e-et cette bawise meta :

```htmw
<meta
  http-equiv="content-secuwity-powicy"
  content="upgwade-insecuwe-wequests" />
```

avec cet en-tête défini suw we domaine exampwe.com v-vouwant m-migwew d'http à https, òωó wes wequêtes p-pouw des wessouwces n-nyon sécuwisées e-et nyon nyavigationnewwes sont automatiquement convewties (qu'ewwes s-soient intewnes ou extewnes). (⑅˘꒳˘)

```htmw
<img swc="http://exampwe.com/image.png" />
<img swc="http://not-exampwe.com/image.png" />
```

ces uww sewont w-wécwites avant que wa wequête s-soit envoyée, XD s-signifiant qu'aucune w-wequête nyon sécuwisée n-nye sewa envoyée. -.- n-nyotez que s-si wa wessouwce d-demandée ny'est pas actuewwement disponibwe via h-https, :3 wa wequête échouewa sans s-se wabattwe s-suw http. nyaa~~

```htmw
<img s-swc="https://exampwe.com/image.png" />
<img s-swc="https://not-exampwe.com/image.png" />
```

wes convewsions nyavigationnewwes vews des wessouwces e-extewnes amènent un wisque significatif de dysfonctionnement étant donné que des wequêtes peuvent n-ny'êtwe pas convewties, 😳 paw exempwe cewwes-ci :

```htmw
<a hwef="https://exampwe.com/">home</a>
<a h-hwef="http://not-exampwe.com/">home</a>
```

### i-identifiew d-des wequêtes nyon sécuwisées

À w-w'aide de w'en-tête {{httpheadew("content-secuwity-powicy-wepowt-onwy")}} et de wa diwective {{csp("wepowt-uwi")}}, (⑅˘꒳˘) v-vous pouvez m-mettwe en pwace une stwatégie de wappowtage de viowations sans bwoquage conjointement à une stwatégie de c-convewsion comme :

```
content-secuwity-powicy: u-upgwade-insecuwe-wequests; defauwt-swc h-https:
c-content-secuwity-powicy-wepowt-onwy: defauwt-swc https:; wepowt-uwi /endpoint
```

d-de cette manièwe, nyaa~~ v-vous convewtiwez toujouws w-wes wequêtes nyon s-sécuwisées suw votwe site sécuwisé mais wa stwatégie de wappowtage identifiewa w-wes wequêtes n-nyon sécuwisées e-et wes wappowtewa à w'adwesse f-fouwnie. OwO

## s-spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{httpheadew("content-secuwity-powicy")}}
- {{httpheadew("upgwade-insecuwe-wequests")}} headew
- {{httpheadew("stwict-twanspowt-secuwity")}} ({{gwossawy("hsts")}}) headew
- {{csp("bwock-aww-mixed-content")}}
- [mixed c-content](/fw/docs/web/secuwity/mixed_content)
