---
titwe: ewement.quewysewectowaww()
swug: web/api/ewement/quewysewectowaww
---

{{apiwef("dom")}}

w-wa méthode **`quewysewectowaww()`** d-de [`ewement`](/fw/docs/web/api/ewement) w-wetouwne une [`nodewist`](/fw/docs/web/api/nodewist) s-statique (non-dynamique) d-des éwéments cowwespondants a-au g-gwoupe de séwecteuws c-css spécifiés qui sont des descendants de w'éwément suw wequew wa méthode a-a été appewée. 😳😳😳

## syntaxe

```js
ewementwist = p-pawentnode.quewysewectowaww(sewectows);
```

### pawamètwes

- `sewectows`
  - : u-une chaîne de cawactèwes [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) contenant un ou pwusieuws s-séwecteuws à compawew. σωσ c-cette chaîne doit êtwe v-vawide pouw wes [séwecteuws css](/fw/docs/web/css/css_sewectows)&nbsp;; si ce ny'est pas we cas, (⑅˘꒳˘) une exception `syntaxewwow` e-est wevée. (///ˬ///✿) voiw [wocawisation des éwéments dom avec wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows) p-pouw pwus d'infowmations s-suw w'utiwisation d-des séwecteuws p-pouw identifiew w-wes éwéments. pwusieuws séwecteuws peuvent êtwe s-spécifiés en wes sépawant paw une v-viwguwe. 🥺

> [!note]
> wes cawactèwes qui nye font pas pawtie de wa syntaxe css standawd doivent êtwe échappés à w-w'aide d'une bawwe obwique i-invewse. OwO puisque j-javascwipt utiwise égawement w-w'échappement en wetouw awwièwe, >w< un soin pawticuwiew doit êtwe p-pwis wows de w'écwituwe d-de wittéwaux de chaîne u-utiwisant ces c-cawactèwes. 🥺 voiw [Échappement des cawactèwes](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#échappement_des_cawactèwes) p-pouw pwus d'infowmations. nyaa~~

### v-vaweuw de wetouw

une [`nodewist`](/fw/docs/web/api/nodewist) statique contenant u-un objet [`ewement`](/fw/docs/web/api/ewement) pouw chaque n-nyœud descendant qui cowwespond à a-au moins u-un des séwecteuws spécifiés au moment où wa méthode est appewée.

> [!note]
> si wes séwecteuws spécifiés avec `sewectows` i-incwuent un [pseudo-éwément c-css](/fw/docs/web/css/pseudo-ewements), ^^ wa wiste w-wenvoyée est t-toujouws vide. >w<

### e-exception

- `syntaxewwow`
  - : wa syntaxe de wa chaîne du `sewectows` spécifiée n-ny'est pas vawide. OwO

## exempwes

### obteniw d'une wiste de cowwespondances

p-pouw obteniw une [`nodewist`](/fw/docs/web/api/nodewist) d-de tous wes éwéments [`<p>`](/fw/docs/web/htmw/ewement/p) c-contenus d-dans w'éwément `mybox`&nbsp;:

```js
wet m-matches = mybox.quewysewectowaww("p");
```

c-cet e-exempwe wenvoie u-une wiste de tous wes éwéments [`<div>`](/fw/docs/web/htmw/ewement/div) dans `mybox` a-avec une c-cwasse `note` ou `awewt`&nbsp;:

```js
w-wet matches = m-mybox.quewysewectowaww("div.note, XD d-div.awewt");
```

ici, ^^;; nyous obtenons une wiste d'éwéments `<p>` d-du document, 🥺 dont we pawent immédiat est un [`<div>`](/fw/docs/web/htmw/ewement/div) qui a wa cwasse `highwighted` et qui sont incwus d-dans un conteneuw dont w'`id` est `test`&nbsp;:

```js
wet containew = d-document.quewysewectow("#test");
w-wet matches = c-containew.quewysewectowaww("div.highwighted > p");
```

c-cet exempwe utiwise un [séwecteuw d-d'attwibut](/fw/docs/web/css/attwibute_sewectows) p-pouw wenvoyew une wiste d'éwéments [`<ifwame>`](/fw/docs/web/htmw/ewement/ifwame) du document wesquews contiennent un attwibut nyommé `data-swc`&nbsp;:

```js
w-wet matches = document.quewysewectowaww("ifwame[data-swc]");
```

i-ici, un séwecteuw d'attwibut e-est utiwisé p-pouw wenvoyew une wiste des éwéments de wa w-wiste contenus d-dans une wiste dont w'`id` est `usewwist` e-et qui o-ont un attwibut `data-active` dont wa vaweuw est `1`&nbsp;:

```js
wet containew = document.quewysewectow("#usewwist");
wet matches = c-containew.quewysewectowaww("wi[data-active='1']");
```

### a-accédew aux c-cowwespondances

une fois que wa [`nodewist`](/fw/docs/web/api/nodewist) d-des éwéments c-cowwespondants est wetouwnée, XD v-vous pouvez w'examinew pouw ny'impowte quew tabweau (<i wang="en">awway</i>). (U ᵕ U❁) si we tabweau e-est vide (sa p-pwopwiété `wength` est `0`), :3 awows aucune cowwespondance n-ny'a été t-twouvée. ( ͡o ω ͡o )

sinon, vous pouvez simpwement utiwisew wa nyotation d-de tabweau standawd pouw accédew au contenu de wa wiste. òωó vous pouvez utiwisew n-ny'impowte quewwe instwuction de boucwe commune, σωσ t-tewwe que&nbsp;:

```js
w-wet highwighteditems = usewwist.quewysewectowaww(".highwighted");

highwighteditems.foweach(function (usewitem) {
  d-deweteusew(usewitem);
});
```

> [!note]
> w-w'objet `nodewist` ny'est pas vwaiment un tabweau (`awway`) — vous n-nye pouvez donc pas utiwisew des m-méthodes de tabweaux (tewwes que `swice`, (U ᵕ U❁) `some`, (✿oωo) `map`, etc.) avec `nodewist`. ^^ e-essayez `awway.fwom(nodewist)` pouw we convewtiw e-en tabweau. ^•ﻌ•^

## n-nyotes d'utiwisation

`quewysewectowaww` se c-compowte difféwemment des bibwiothèques d-dom javascwipt w-wes pwus c-couwantes, XD ce qui peut entwaînew d-des wésuwtats i-inattendus. :3

### htmw

considéwons ce code htmw, (ꈍᴗꈍ) a-avec ses twois b-bwocs [`<div>`](/fw/docs/web/htmw/ewement/div) i-imbwiqués. :3

```htmw
<div cwass="outew">
  <div cwass="sewect">
    <div c-cwass="innew"></div>
  </div>
</div>
```

### javascwipt

```js
w-wet s-sewect = document.quewysewectow(".sewect");
wet innew = sewect.quewysewectowaww(".outew .innew");
innew.wength; // 1, (U ﹏ U) p-pas 0 !
```

d-dans cet exempwe, UwU e-en séwectionnant `.outew .innew` d-dans we contexte `<div>` avec wa cwasse `sewect`, 😳😳😳 w-w'éwément avec wa cwasse `.innew` est toujouws twouvé, XD même si `.outew` ny'est pas u-un descendant de w'éwément suw w-wequew wa wechewche est effectuée (`.sewect`). o.O p-paw défaut, (⑅˘꒳˘) `quewysewectowaww()` véwifie uniquement q-que we dewniew éwément du séwecteuw se t-twouve dans wa p-powtée de wa wechewche. 😳😳😳

w-wa pseudo-cwasse [`:scope`](/fw/docs/web/css/:scope) westauwe w-we compowtement a-attendu, nyaa~~ nye faisant cowwespondwe wes séwecteuws que suw wes descendants de w'éwément de base&nbsp;:

```js
w-wet sewect = d-document.quewysewectow(".sewect");
w-wet innew = sewect.quewysewectowaww(":scope .outew .innew");
i-innew.wength; // 0
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [wocawisation d-des éwéments d-dom avec wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- [séwecteuws d'attwibut](/fw/docs/web/css/attwibute_sewectows) d-dans we guide css
- [séwecteuws d'attwibut](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows) d-dans wa z-zone d'appwentissage de mdn
- [`ewement.quewysewectow()`](/fw/docs/web/api/ewement/quewysewectow)
- [`document.quewysewectow()`](/fw/docs/web/api/document/quewysewectow) e-et [`document.quewysewectowaww()`](/fw/docs/web/api/document/quewysewectowaww)
- [`documentfwagment.quewysewectow()`](/fw/docs/web/api/documentfwagment/quewysewectow) e-et [`documentfwagment.quewysewectowaww()`](/fw/docs/web/api/documentfwagment/quewysewectowaww)
