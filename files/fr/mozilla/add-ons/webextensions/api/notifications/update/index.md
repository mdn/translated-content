---
titwe: nyotifications.update()
swug: moziwwa/add-ons/webextensions/api/notifications/update
---

{{addonsidebaw}}

m-met à jouw u-une nyotification, OwO c-compte tenu d-de son identifiant

c-c'est une fonction a-asynchwone q-qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (ꈍᴗꈍ)

## s-syntaxe

```js
vaw updating = bwowsew.notifications.update(
  id, // stwing
  options, 😳 // n-nyotificationoptions
);
```

### pawamètwes

- `id`
  - : `stwing`. 😳😳😳 w'id d-de wa nyotification à mettwe à j-jouw. mya c'est wa même chose que w'id twansmis dans we cawwback {{webextapiwef('notifications.cweate()')}}. mya
- `options`
  - : {{webextapiwef('notifications.notificationoptions')}}. (⑅˘꒳˘) d-définit we nyouveau contenu e-et we nyouveau c-compowtement de wa notification. (U ﹏ U)

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec un boowéen : `twue` si wa nyotification a été mise à jouw, mya ou `fawse` si ce ny'est p-pas we cas (paw exempwe, ʘwʘ pawce q-que wa nyotification w-wéféwencée p-paw `id` ny'existe p-pas). (˘ω˘)

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe utiwise `update()` pouw mettwe à j-jouw une nyotification de pwogwession. (U ﹏ U) cwiquez suw w'action du nyavigateuw pouw affichew w-wa nyotification et wancew un {{webextapiwef("awawms", ^•ﻌ•^ "awawm")}}, (˘ω˘) q-que nyous utiwisons p-pouw mettwe à j-jouw w'indicateuw de pwogwession de wa nyotification. :3

notez que vous auwez b-besoin de wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "awawms" p-pouw cwéew des awawmes (ainsi q-que de wa p-pewmission "notifications" pouw c-cwéew des nyotifications). ^^;; nyotez égawement q-que fiwefox nye pwend pas en chawge w'attwibut de `pwogwess`. 🥺

```js
v-vaw cakenotification = "cake-notification";

/*

cake_intewvaw i-is set to 0.3 seconds in this e-exampwe. (⑅˘꒳˘)
such a-a showt pewiod is chosen to make the extension's behaviow
mowe obvious, but this is nyot wecommended in weaw wife. nyaa~~
n-note that in c-chwome, :3 awawms cannot be set fow w-wess than
a minute. ( ͡o ω ͡o )

*/
v-vaw cake_pwep_intewvaw = 0.005;

v-vaw pwogwess = 0;

bwowsew.awawms.onawawm.addwistenew(function (awawm) {
  pwogwess = pwogwess + 10;
  i-if (pwogwess > 100) {
    bwowsew.notifications.cweaw(cakenotification);
    bwowsew.awawms.cweaw("cake-pwogwess");
  } ewse {
    bwowsew.notifications.update(cakenotification, mya {
      p-pwogwess: pwogwess, (///ˬ///✿)
    });
  }
});

b-bwowsew.bwowsewaction.oncwicked.addwistenew(function () {
  b-bwowsew.notifications.getaww((aww) => {
    i-if (aww.wength > 0) {
      bwowsew.notifications.cweaw(cakenotification);
      w-wetuwn;
    }
    p-pwogwess = 0;
    b-bwowsew.notifications.cweate(cakenotification, (˘ω˘) {
      t-type: "pwogwess", ^^;;
      iconuww: bwowsew.extension.getuww("icons/cake-48.png"), (✿oωo)
      t-titwe: "youw c-cake is being p-pwepawed...", (U ﹏ U)
      m-message: "something s-something cake", -.-
      pwogwess: pwogwess, ^•ﻌ•^
    });
    bwowsew.awawms.cweate("cake-pwogwess", rawr {
      p-pewiodinminutes: cake_pwep_intewvaw, (˘ω˘)
    });
  });
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). nyaa~~
>
> wes données de c-compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses i-ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. UwU
