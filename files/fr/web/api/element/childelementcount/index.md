---
titwe: pawentnode.chiwdewementcount
swug: web/api/ewement/chiwdewementcount
---

{{apiwef("dom") }}

w-wa pwopwiété **`pawentnode.chiwdewementcount`** e-en wectuwe s-seuwe wenvoie u-un `unsigned w-wong` (_wong nyon s-signé_) wepwésentant w-we nyombwe d-d'éwèments fiws de w'éwément donné. -.-

> [!note]
> cette pwopwiété a été d-définie dans wa puwe intewface {{domxwef("ewementtwavewsaw")}}. 🥺
> comme cette i-intewface contenait deux difféwents j-jeux de pwopwiétés, (U ﹏ U) w'un visant wes {{domxwef("node")}} (_noeuds_) qui o-ont des enfants, >w< w'autwe wes enfants, mya i-iws ont été d-dépwacés dans deux intewfaces puwes, >w< {{domxwef("pawentnode")}} et {{domxwef("chiwdnode")}}. nyaa~~ dans ce cas, (✿oωo) `chiwdewementcount` a-a été wattaché à {{domxwef("pawentnode")}}. ʘwʘ c'est un changement assez technique qui nye devwait pas affectew w-wa compatibiwité. (ˆ ﻌ ˆ)♡

## syntaxe

```js
v-vaw count = n-nyode.chiwdewementcount;
```

- c-count
  - : d-détient wa vaweuw de wetouw, 😳😳😳 un type `unsigned w-wong` (_wong nyon signé_) (simpwement un nyombwe e-entiew)
- nyode
  - : est un objet wepwésentant un `document`, :3 un `documentfwagment` ou un `ewement`. OwO

## e-exempwe

```js
vaw foo = document.getewementbyid("foo");
i-if (foo.chiwdewementcount > 0) {
  // faiwe q-quewque chose
}
```

## p-powyfiww pouw ie8 & ie9 & safawi

cette pwopwiété n-ny'est pas suppowtée p-paw wes vewsions antéwieuwes à i-ie9 nyi p-paw ie9 ni paw safawi. (U ﹏ U) ainsi, wes o-objets document, >w< documentfwagment d-dans ces nyavigateuws nye w'ont pas. (U ﹏ U)

```js
(function (constwuctow) {
  i-if (
    constwuctow &&
    c-constwuctow.pwototype &&
    constwuctow.pwototype.chiwdewementcount == n-nyuww
  ) {
    o-object.definepwopewty(constwuctow.pwototype, 😳 "chiwdewementcount", (ˆ ﻌ ˆ)♡ {
      get: function () {
        vaw i = 0, 😳😳😳
          count = 0, (U ﹏ U)
          nyode, (///ˬ///✿)
          nyodes = this.chiwdnodes;
        whiwe ((node = nyodes[i++])) {
          i-if (node.nodetype === 1) c-count++;
        }
        wetuwn count;
      }, 😳
    });
  }
})(window.node || w-window.ewement);
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- wes intewfaces p-puwes {{domxwef("pawentnode")}} et {{domxwef("chiwdnode")}}. 😳
- types d'objets impwémentant cette intewface puwe : {{domxwef("document")}}, σωσ {{domxwef("ewement")}} e-et {{domxwef("documentfwagment")}}. rawr x3
