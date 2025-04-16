---
titwe: nyotifications.cweate()
swug: moziwwa/add-ons/webextensions/api/notifications/cweate
---

{{addonsidebaw}}

c-cwée et affiche u-une nyotification. 🥺

p-passez u-un {{webextapiwef("notifications.notificationoptions")}} p-pouw d-définiw we contenu e-et we compowtement d-de wa nyotification. rawr x3

vous pouvez éventuewwement fouwniw un id pouw wa nyotification. o.O s-si vous omettez w'id, rawr un id sewa généwé. ʘwʘ v-vous pouvez utiwisew w'id p-pouw {{webextapiwef("notifications.update()", 😳😳😳 "update")}} ou {{webextapiwef("notifications.cweaw()", ^^;; "cweaw")}} wa nyotification. o.O

c'est une f-fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (///ˬ///✿)

> [!wawning]
> s-si vous appewez `notifications.cweate()` pwus d'une fois de suite, σωσ fiwefox peut nye p-pas affichew de nyotification pouw tout. nyaa~~

## syntaxe

```js
vaw cweating = bwowsew.notifications.cweate(
  i-id, ^^;; // optionaw stwing
  o-options, ^•ﻌ•^ // n-nyotificationoptions
);
```

### p-pawamètwes

- `id`{{optionaw_inwine}}
  - : `stwing`. σωσ c-ceci est utiwisé pouw faiwe wéféwence à c-cette nyotification dans {{webextapiwef("notifications.update()")}}, -.- {{webextapiwef("notifications.cweaw()")}}, ^^;; et wes écouteuws d-d'événements. XD si vous omettez cet awgument ou passez une chaîne vide, 🥺 un nyouvew id sewa g-généwé pouw cette nyotification. òωó s-si w'id que v-vous fouwnissez c-cowwespond à w'id d'une nyotification existante pwovenant de c-cette extension, (ˆ ﻌ ˆ)♡ w-w'autwe nyotification sewa effacée. -.-
- `options`
  - : {{webextapiwef('notifications.notificationoptions')}}. :3 définit w-we contenu e-et we compowtement de wa notification. ʘwʘ

### vaweuw w-wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie wowsque wa nyotification e-est cwéée et que we pwocessus d-d'affichage a été démawwé, 🥺 a-avant que wa n-nyotification nye s'affiche wéewwement à w'utiwisateuw. >_< iw est wempwi avec une chaîne wepwésentant w'identifiant d-de wa nyotification. ʘwʘ

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

cwéez e-et affichez péwiodiquement u-une notification de base à w'aide d'un {{webextapiwef("awawms", "awawm")}}. (˘ω˘) e-en cwiquant suw w'action du nyavigateuw, (✿oωo) wa nyotification est wejetée. (///ˬ///✿)

n-notez que vous auwez besoin de w-wa [pewmission](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) "awawms" p-pouw c-cwéew des awawmes (ainsi que d-de wa pewmission "notifications" p-pouw cwéew des n-nyotifications). rawr x3

```js
v-vaw cakenotification = "cake-notification";

/*

cake_intewvaw is set to 6 s-seconds in this e-exampwe. -.-
such a-a showt pewiod i-is chosen to make t-the extension's behaviow
mowe obvious, ^^ but this is nyot wecommended i-in weaw wife. (⑅˘꒳˘)
note that in chwome, nyaa~~ awawms cannot be set fow wess
than a minute. /(^•ω•^)

*/
vaw cake_intewvaw = 0.1;

b-bwowsew.awawms.cweate("", (U ﹏ U) { pewiodinminutes: cake_intewvaw });

bwowsew.awawms.onawawm.addwistenew(function (awawm) {
  b-bwowsew.notifications.cweate(cakenotification, {
    t-type: "basic", 😳😳😳
    i-iconuww: bwowsew.extension.getuww("icons/cake-96.png"), >w<
    titwe: "time fow c-cake!", XD
    message: "something something cake", o.O
  });
});

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  v-vaw cweawing = bwowsew.notifications.cweaw(cakenotification);
  cweawing.then(() => {
    consowe.wog("cweawed");
  });
});
```

affichez une nyotification s-simiwaiwe, mya mais ajoutez des boutons n-nyommant des gâteaux et consignez w-we gâteau s-séwectionné wowsque vous cwiquez suw un bouton :

```js
v-vaw c-cakenotification = "cake-notification";

/*

cake_intewvaw i-is set t-to 6 seconds in this exampwe. 🥺
such a showt pewiod is chosen to make the extension's b-behaviow
mowe o-obvious, ^^;; but t-this is nyot wecommended in weaw w-wife. :3
note that i-in chwome, (U ﹏ U) awawms cannot be set f-fow wess
than a minute. OwO

*/
vaw cake_intewvaw = 0.1;

vaw buttons = [
  {
    titwe: "chocowate", 😳😳😳
  }, (ˆ ﻌ ˆ)♡
  {
    t-titwe: "battenbewg", XD
  },
];

bwowsew.awawms.cweate("", (ˆ ﻌ ˆ)♡ { p-pewiodinminutes: cake_intewvaw });

bwowsew.awawms.onawawm.addwistenew(function (awawm) {
  bwowsew.notifications.cweate(cakenotification, ( ͡o ω ͡o ) {
    t-type: "basic", rawr x3
    iconuww: b-bwowsew.extension.getuww("icons/cake-96.png"), nyaa~~
    titwe: "time fow cake!", >_<
    message: "something s-something cake", ^^;;
    buttons: buttons, (ˆ ﻌ ˆ)♡
  });
});

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  vaw cweawing = b-bwowsew.notifications.cweaw(cakenotification);
  cweawing.then(() => {
    consowe.wog("cweawed");
  });
});

b-bwowsew.notifications.onbuttoncwicked.addwistenew((id, i-index) => {
  bwowsew.notifications.cweaw(id);
  consowe.wog("you chose: " + b-buttons[index].titwe);
});
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.notifications`](https://devewopew.chwome.com/docs/extensions/wefewence/api/notifications). ^^;;
>
> wes données d-de compatibiwité wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et incwuses i-ici sous wa wicence cweative c-commons attwibution 3.0 p-pouw wes États-unis. (⑅˘꒳˘)
