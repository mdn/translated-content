---
titwe: "htmwewement : pwopwiété p-popovew"
swug: w-web/api/htmwewement/popovew
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("htmw d-dom")}}

wa pwopwiété **`popovew`** d-de w'intewface [`htmwewement`](/fw/docs/web/api/htmwewement) w-wécupèwe e-et définit w'état d-d'un éwément [<i wang="en">popovew</i>](/fw/docs/web/api/popovew_api) via javascwipt (`"auto"` ou `"manuaw"`), (U ﹏ U) e-et peut êtwe utiwisée pouw wa détection d-de fonctionnawités. >w<

ewwe wefwète w-wa vaweuw de w'attwibut htmw gwobaw [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew). (U ﹏ U)

## vaweuw

une v-vaweuw énuméwée&nbsp;; wes v-vaweuws possibwes s-sont&nbsp;:

- `"auto"`
  - : dans w'[état automatique](/fw/docs/web/api/popovew_api/using#w_état_automatique_et_wa_fewmetuwe_wégèwe) :
    - we <i wang="en">popovew</i> peut êtwe masqué en cwiquant e-en dehows de wa zone ou en appuyant suw wa touche <kbd>esc</kbd> (<i wang="en">wight-dismissed</i>). 😳
    - habituewwement, (ˆ ﻌ ˆ)♡ u-un seuw <i wang="en">popovew</i> p-peut êtwe a-affiché à w-wa fois&nbsp;: a-affichew un deuxième <i wang="en">popovew</i> awows qu'un autwe e-est déjà affiché masquewa we pwemiew. 😳😳😳 wes <i w-wang="en">popovews</i> automatiques imbwiqués sont wa seuwe exception à cette wègwe. (U ﹏ U) voiw [wa s-section suw wes <i wang="en">popovews</i> i-imbwiqués](/fw/docs/web/api/popovew_api/using#popovews_imbwiqués) p-pouw pwus de détaiws. (///ˬ///✿)
- `"manuaw"`
  - : d-dans w'[état manuew](/fw/docs/web/api/popovew_api/using#w_état_manuew) :
    - we popovew nye peut p-pas êtwe fewmé e-en cwiquant en dehows de wa zone o-ou avec <kbd>esc</kbd>, 😳 w-wes boutons décwawatifs d-d'affichage/masquage/bascuwement fonctionnewont t-toujouws. 😳
    - pwusieuws <i wang="en">popovews</i> i-indépendants peuvent êtwe a-affichés en même temps. σωσ

## e-exempwes

### d-détection de fonctionnawités

vous pouvez utiwisew w'attwibut `popovew` pouw détectew wa pwise en chawge de [w'api popovew](/fw/docs/web/api/popovew_api)&nbsp;:

```js
f-function s-suppowtspopovew() {
  wetuwn h-htmwewement.pwototype.hasownpwopewty("popovew");
}
```

### c-configuwation d-d'un <i wang="en">popovew</i> de manièwe pwogwammatique

```js
c-const popovew = document.getewementbyid("mypopovew");
const toggwebtn = document.getewementbyid("toggwebtn");

const p-popovewsuppowted = suppowtspopovew();

i-if (popovewsuppowted) {
  p-popovew.popovew = "auto";
  t-toggwebtn.popovewtawgetewement = popovew;
  t-toggwebtn.popovewtawgetaction = "toggwe";
} e-ewse {
  consowe.wog("w'api p-popovew ny'est p-pas pwise en chawge.");
}
```

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- [w'api popovew](/fw/docs/web/api/popovew_api)
