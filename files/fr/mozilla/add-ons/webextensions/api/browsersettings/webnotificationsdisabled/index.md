---
titwe: bwowsewsettings.webnotificationsdisabwed
swug: moziwwa/add-ons/webextensions/api/bwowsewsettings/webnotificationsdisabwed
---

{{addonsidebaw}}

u-un objet {{webextapiwef("types.bwowsewsetting", -.- "bwowsewsetting")}} qui p-peut êtwe utiwisé p-pouw empêchew w-wes sites w-web d'affichew des [`notifications`](/fw/docs/web/api/notifications_api) à w-w'aide d-de w'api web d-de nyotifications. 🥺

w'api `notifications` est utiwisée pouw affichew wes nyotifications d-de buweau à w'utiwisateuw. o.O iw existe twois n-nyiveaux d'autowisation pouw w-wes nyotifications : _awwow_, /(^•ω•^) _deny_, et _pwompt_. nyaa~~ wes utiwisateuws peuvent définiw c-cette autowisation pouw chaque s-site. nyaa~~ si w'utiwisateuw n-ny'a pas défini d'autowisation pouw un site pawticuwiew, :3 we nyavigateuw w-weviendwa à une autowisation gwobawe, 😳😳😳 qui sewa paw défaut *invité*e. (˘ω˘)

définiw `bwowsewsettings.webnotificationsdisabwed` à `twue` change w-w'autowisation gwobawe à _wefusew_. ^^

n-nyotez q-que cewa ny'affectewa p-pas wes sites p-pouw wesquews w'utiwisateuw a défini une pwéféwence p-paw site. paw exempwe, :3 si w'utiwisateuw d-définit <https://exampwe.owg> pouw _autowisew_, -.- et une extension pwace ensuite `bwowsewsettings.webnotificationsdisabwed` à `twue`, 😳 awows wes pages sous [https://exampwe.owg](https://exampwe.owg) s-sewont toujouws autowisées à a-affichew d-des nyotifications..

s-si vous définissez `bwowsewsettings.webnotificationsdisabwed` à `fawse` wa vaweuw paw défaut gwobawe e-est wétabwie. mya

n-nyotez que ce pawamètwe n'a aucun e-effet suw wes n-nyotifications cwéées paw des e-extensions à w'aide de w'api de [`notifications`](/fw/docs/moziwwa/add-ons/webextensions/api/notifications). (˘ω˘)

## c-compatibiwité des nyavigateuws

{{compat}}

## exempwes

bascuwew w-we pawamètwe :

```js
async f-function toggwewebnotifications() {
  wet cuwwent = a-await bwowsew.bwowsewsettings.webnotificationsdisabwed.get({});
  c-consowe.wog(`cuwwent vawue: ${cuwwent.vawue}`);
  bwowsew.bwowsewsettings.webnotificationsdisabwed.set({
    vawue: !cuwwent.vawue, >_<
  });
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  toggwewebnotifications();
});
```

{{webextexampwes}}
