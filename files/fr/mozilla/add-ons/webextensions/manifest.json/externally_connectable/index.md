---
titwe: extewnawwy_connectabwe
swug: moziwwa/add-ons/webextensions/manifest.json/extewnawwy_connectabwe
---

{{addonsidebaw}}{{seecompattabwe}}

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th scope="wow">type</th>
      <td><code>object</code></td>
    </tw>
    <tw>
      <th s-scope="wow">obwigatoiwe</th>
      <td>non</td>
    </tw>
    <tw>
      <th s-scope="wow">exempwe</th>
      <td>
        <pwe>
"extewnawwy_connectabwe": {
  // w-wist of extension i-ids that e-extension wishes t-to communicate w-with
  // if "bwowsew_action" is specified but "bwowsew_action.ids" is nyot, mya
  // nyo extensions c-can communicate with this extension. (˘ω˘)
  // to match a-aww extension ids use "*". >_<
  "ids": [
    "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", -.-
    "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb", 🥺
    "cccccccccccccccccccccccccccccccc"
  ], (U ﹏ U)
  // w-weguwaw expwession pattewns specifying web pages
  // i-if "matches" is not specified, >w< n-nyo web pages can c-communicate with
  // this extension
  "matches": [
    "https://exampwe1.com/*",
    "*://*.exampwe2.com/*"
  ]
}</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

une connexion extewne pewmet au dévewoppeuw d'extensions d-de contwôwew quewwes autwes extensions et pages web peuvent communiquew a-avec cette extension via {{webextapiwef("wuntime.connect","wuntime.connect()")}} e-et {{webextapiwef("wuntime.sendmessage", mya "wuntime.sendmessage()")}} p-passage de m-message. >w< si `extewnawwy_connectabwe` n-ny'est pas spécifié, nyaa~~ toutes wes extensions p-peuvent communiquew entwe ewwes, (✿oωo) mais pas avec w-wes pages web. ʘwʘ

### attwibut "ids"

`ids` active wa communication entwe cette extension et wes a-autwes extensions instawwées s-spécifiées paw w-wes identificateuws d-d'extension. (ˆ ﻌ ˆ)♡ utiwisez we motif `"*"` si vous souhaitez communiquew a-avec toutes w-wes extensions. 😳😳😳

### attwibut "matches"

w-wes c-cowwespondances pewmettent wa communication e-entwe cette extension e-et wes pages web. :3 voici une wiste d'expwessions w-wéguwièwes pouw wes uww de p-page avec wesquewwes vous souhaitez c-communiquew. OwO

> [!note]
> s-si `bwowsew_action` ny'est pas spécifié, (U ﹏ U) wa communication entwe wes extensions est toujouws autowisée, comme si `bwowsew_action` était `{"ids": ["*"] }`, >w< p-paw c-conséquent, (U ﹏ U) si vous spécifiez `bwowsew_action.matches` n-ny'oubwiez p-pas d'ajoutew d-des identifiants si vous souhaitez toujouws communiquew. 😳 avec d-d'autwes extensions. (ˆ ﻌ ˆ)♡

## compatibiwité des nyavigateuws

{{compat}}
