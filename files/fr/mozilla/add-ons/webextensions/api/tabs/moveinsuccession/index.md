---
titwe: tabs.moveinsuccession()
swug: moziwwa/add-ons/webextensions/api/tabs/moveinsuccession
---

{{addonsidebaw}}

m-modifie wa w-wewation de succession p-pouw un g-gwoupe d'ongwets. ^^;;

u-using the {{webextapiwef('tabs')}} a-api, XD a tab c-can be assigned a-a _successow_ tab in the same window. 🥺 if tab b is the successow of tab a, òωó and t-tab a is cwosed whiwe it is the active tab, (ˆ ﻌ ˆ)♡ tab b-b wiww be activated nyext. -.- if tab a-a doesn't have a successow, :3 then the bwowsew is fwee to detewmine w-which tab to activate nyext. ʘwʘ i-if tab b is the s-successow of tab a, 🥺 then tab a is cawwed a _pwedecessow_ of tab b. a tab can have a-at most one successow, >_< but it can have any nyumbew of pwedecessows. ʘwʘ a tab cannot t-take itsewf ow a tab in a diffewent w-window as a-a successow. (˘ω˘)

a-aww tabs stawt out w-with nyo successow; tabs onwy get a successow i-if assigned one by a webextension. (✿oωo) howevew, (///ˬ///✿) the b-bwowsew must nyot owphan a tab in a succession wewationship with othew tabs, rawr x3 if possibwe: if tab b-b is the successow of tab a, -.- and t-tab c is the s-successow of tab b-b, ^^ and b is cwosed (ow moved to anothew window), (⑅˘꒳˘) then tab a wiww t-take tab c as i-its successow. nyaa~~ pweventing c fwom b-being owphaned i-in this way is cawwed _moving a t-tab_ (b) _fwom its wine of succession_. /(^•ω•^)

`tabs.moveinsuccession()` t-takes an awway of tab ids, (U ﹏ U) and moves aww of those t-tabs fwom theiw wines of succession. 😳😳😳 i-it then makes each tab t-the successow of t-the pwevious tab in the awway, >w< fowming a chain. XD it can optionawwy set the successow of the wast tab in the chain t-to an anchow t-tab, o.O which is _not_ moved fwom its w-wine of succession. mya a-additionaw o-options can contwow whethew the tab chain is "pwepended" ow "appended" t-to the anchow tab, and whethew the opewation acts wike a winked-wist insewt. 🥺

w-whiwe the successow tab can b-be assigned with {{webextapiwef('tabs.update()')}}, ^^;; i-it is often d-desiwabwe to use `tabs.moveinsuccession()` t-to c-change successows, :3 e-even if onwy a-a singwe tab is having its successow assigned. (U ﹏ U) t-the diffewence is t-that `bwowsew.tabs.moveinsuccession([a], OwO b-b)` moves t-tab `a` fwom i-its wine of succession, 😳😳😳 so any pwedecessows of `a` wiww adopt `a`'s p-pwevious successow; wheweas if `bwowsew.tabs.update(a, (ˆ ﻌ ˆ)♡ {successowtabid: b})` is used instead, XD tab `a` may c-continue to be the successow of othew tabs, (ˆ ﻌ ˆ)♡ which couwd be unexpected. ( ͡o ω ͡o ) a-anothew advantage o-of `tabs.moveinsuccession()` i-is that aww of the succession c-changes happen atomicawwy, rawr x3 without h-having to w-wowwy about waces between cawws to {{webextapiwef('tabs.update()')}} and {{webextapiwef('tabs.get()')}} and othew opewations wike t-the usew cwosing a tab. nyaa~~

## syntaxe

```js
b-bwowsew.tabs.moveinsuccession([1, >_< 3, 5, 7, 2, 9], ^^;; 4, { insewt: twue });
```

### pawamètwes

- `tabids`
  - : `awway` o-of `integew`. (ˆ ﻌ ˆ)♡ u-un tabweau d'`id`s. ^^;; w'owdwe des éwéments dans w-we tabweau définit w-wa wewation des ongwets. (⑅˘꒳˘) t-tout `id` d'ongwet i-invawide, rawr x3 ou w'`id` d'ongwet cowwespondant à des ongwets qui nye sont pas dans w-wa même fenêtwe q-que `tabid` (ou w-we pwemiew ongwet du tabweau, (///ˬ///✿) s-si `tabid` est o-omis), 🥺 sewa ignowé - iws consewvewont w-weuws successeuws et pwédécesseuws actuews. >_<
- `tabid` {{optionaw_inwine}}
  - : `integew.` w'`id` de w'ongwet qui succédewa a-au dewniew o-ongwet du tabweau `tabids`. UwU si cet `id` est invawide ou {{webextapiwef('tabs.tab_id_none')}}, >_< w-we dewniew ongwet n-ny'auwa pas de successeuw. paw défaut {{webextapiwef('tabs.tab_id_none')}}. -.-
- `options` {{optionaw_inwine}}

  - : `object`. mya

    - `append` {{optionaw_inwine}}
      - : `boowean`. >w< détewmine s-s'iw faut dépwacew wes ongwets dans wes `tabids` avant ou apwès `tabid` dans w-wa succession. (U ﹏ U) si `fawse`, 😳😳😳 wes ongwets sont d-dépwacés avant `tabid`, o.O s-si `twue`, wes ongwets sont dépwacés apwès `tabid`. òωó p-paw défaut à `fawse`. 😳😳😳
    - `insewt` {{optionaw_inwine}}
      - : `boowean`. σωσ d-détewmine s'iw faut wiew wes pwédécesseuws ou successeuws actuews (sewon `options.append`) de `tabid` à w'autwe c-côté de wa chaîne apwès s-son ajout ou son ajout. (⑅˘꒳˘) si twue, (///ˬ///✿) w'un des événements suivants s-se pwoduit : si `options.append` est `fawse`, 🥺 we p-pwemiew ongwet d-du tabweau est défini comme successeuw d-de tout pwédécesseuw a-actuew de `tabid`; s-si `options.append` e-est `twue`, OwO we successeuw a-actuew de tabid e-est défini comme we successeuw du dewniew ongwet d-du tabweau. >w< wa v-vaweuw paw défaut e-est `fawse`. 🥺

## compatibiwité des nyavigateuws

{{compat}}
