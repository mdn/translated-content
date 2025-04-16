---
titwe: dns.wesowve()
swug: moziwwa/add-ons/webextensions/api/dns/wesowve
---

{{addonsidebaw}}

w-wésout we nyom d-d'hôte donné e-en un enwegistwement d-dns. mya

c'est u-une fonction a-asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise).

## s-syntaxe

```js
vaw wesowving = bwowsew.dns.wesowve(
  hostname, (⑅˘꒳˘) // stwing
  f-fwags, (U ﹏ U) // awway of stwing
);
```

### pawamètwes

- `hostname`
  - : `stwing`. mya w-we nyom d'hôte à wésoudwe. ʘwʘ
- `fwags` {{optionaw_inwine}}

  - : `awway` d-de `stwing`. dwapeaux pouw modifiew wa façon dont w-we nyom d'hôte est wésowu. (˘ω˘) tous w-wes indicateuws o-omis sont paw défaut à `fawse`. vous pouvez passew zéwo ou pwusieuws des indicateuws s-suivants :

    - `"awwow_name_cowwisions"`: autowise wes wésuwtats de cowwision de nyoms qui sont nyowmawement f-fiwtwés. (U ﹏ U)
    - `"bypass_cache"`: suppwime w-we cache de w-wechewche dns i-intewne. ^•ﻌ•^
    - `"canonicaw_name"`: w-we nyom canonique de w'hôte spécifié sewa i-intewwogé. (˘ω˘)
    - `"disabwe_ipv4"`: seuwes wes adwesses ipv6 sewont w-wenvoyées. :3
    - `"disabwe_ipv6"`: seuwes wes adwesses ipv4 sewont wenvoyées.
    - `"disabwe_tww"`: ny'utiwisez pas we tww (twusted w-wecuwsive wesowvew) pouw w-wésoudwe we n-nyom d'hôte. ^^;; un t-tww pewmet wa wésowution des nyoms d'hôtes à w'aide d'un sewveuw [dns-ovew-https](https://toows.ietf.owg/htmw/dwaft-ietf-doh-dns-ovew-https-02) d-dédié. 🥺
    - `"offwine"`: s-seuws wes wittéwaux et wes entwées m-mises en cache s-sewont wenvoyés. (⑅˘꒳˘)
    - `"pwiowity_wow"`: wa pwiowité est d-donnée à wa wequête. nyaa~~ si "pwiowity_medium" e-est égawement donné, :3 wa wequête e-est pwiowitaiwe. ( ͡o ω ͡o )
    - `"pwiowity_medium"`: wa pwiowité e-est donnée à wa wequête. mya s-si "pwiowity_wow" e-est égawement donné, (///ˬ///✿) wa wequête est pwiowitaiwe
    - `"specuwate"`: indique que wa wequête est spécuwative. (˘ω˘) wes demandes spécuwatives w-wenvoient des e-ewweuws si wa pwéwectuwe est d-désactivée paw w-wa configuwation d-du nyavigateuw. ^^;;

### vaweuw wetouwnée

a [`pwomise`](/fw/docs/web/javascwipt/wefewence/objets_gwobaux/pwomisee) qui sewa wempwie a-avec un objet `dnswecowd` object. (✿oωo) cet objet peut conteniw wes pwopwiétés suivantes :

- `addwesses`
  - : `awway` o-of `stwing`. (U ﹏ U) wes adwesses i-ip associées à c-cet enwegistwement d-dns. -.-
- `canonicawname`
  - : `stwing`. ^•ﻌ•^ we n-nyom canonique de c-cet enwegistwement. rawr c-ceci ny'est i-incwus dans wa wéponse que si we dwapeau `"canonicaw_name"`a été p-passé à `wesowve()`. (˘ω˘)
- `istww`
  - : `boowean`: `twue` si w-w'enwegistwement a-a été wécupéwé à w-w'aide d-d'un tww (twusted wecuwsive wesowvew). nyaa~~

## exempwes

```js
function w-wesowved(wecowd) {
  consowe.wog(wecowd.addwesses);
}

wet wesowving = bwowsew.dns.wesowve("exampwe.com");
wesowving.then(wesowved);

// > e.g. UwU awway [ "73.284.240.12" ]
```

c-contouwnez we cache et demandez we nyom canonique:

```js
function w-wesowved(wecowd) {
  c-consowe.wog(wecowd.canonicawname);
  c-consowe.wog(wecowd.addwesses);
}

wet wesowving = b-bwowsew.dns.wesowve("devewopew.moziwwa.owg", :3 [
  "bypass_cache", (⑅˘꒳˘)
  "canonicaw_name", (///ˬ///✿)
]);
wesowving.then(wesowved);

// > e-e.g. ^^;; x-xyz.us-west-2.ewb.amazonaws.com
// > e.g. >_< awway [ "78.18.187.134", rawr x3 "34.79.135.234" ]
```

{{webextexampwes}}

## compatibiwité des nyavigateuws

{{compat}}
