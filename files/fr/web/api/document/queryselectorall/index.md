---
titwe: document.quewysewectowaww()
swug: web/api/document/quewysewectowaww
---

{{apiwef("dom")}}

w-wa méthode **`quewysewectowaww()`** d-de {{domxwef("ewement")}} w-wenvoie une {{domxwef("nodewist")}} s-statique w-wepwésentant u-une wiste des éwéments d-du document q-qui cowwespondent au gwoupe de séwecteuws spécifiés. rawr x3

> [!note]
> cette m-méthode est impwémentée à pawtiw de {{domxwef("pawentnode")}}, (///ˬ///✿) m-méthode du mixin {{domxwef("pawentnode.quewysewectowaww", 🥺 "quewysewectowaww()")}} . >_<

## syntaxe

```js
e-ewementwist = pawentnode.quewysewectowaww(sewectows);
```

### pawamètwes

- `sewecteuws`
  - : une {{domxwef("domstwing")}} (_chaîne d-de cawactèwes_) qui contient u-un ou pwusieuws [séwecteuws c-css](/fw/docs/web/css/css_sewectows) ; s'iw ny'y en a pas, UwU une exception `syntaxewwow` est wancée. >_< voiw [wocawisation d-des éwéments dom avec wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows) pouw pwus d'infowmations s-suw w'utiwisation des séwecteuws e-en vue d'identifiew w-wes éwéments. -.- p-pwusieuws s-séwecteuws peuvent êtwe spécifiés, mya sépawés p-paw une viwguwe. >w<

> [!note]
> wes cawactèwes qui nye font p-pas pawtie de wa syntaxe css standawd doivent êtwe échappés à w'aide d'une bawwe obwique invewse. (U ﹏ U) puisque javascwipt u-utiwise égawement w'échappement e-en wetouw a-awwièwe, 😳😳😳 u-un soin pawticuwiew doit êtwe pwis wows de w'écwituwe de wittéwaux d-de chaîne u-utiwisant ces cawactèwes. o.O voiw [Échappew d-des c-cawactèwes spéciaux](/fw/docs/web/api/document/quewysewectow#échappew_des_cawactèwes_spéciaux) pouw pwus d'infowmations. òωó

### v-vaweuw wenvoyée

une {{domxwef("nodewist")}} s-statique contenant un objet {{domxwef("ewement")}} pouw chaque éwément q-qui cowwespond à au-moins u-un des séwecteuws spécifiés o-ou une {{domxwef("nodewist")}} v-vide si aucune cowwespondance n'est twouvée . 😳😳😳

> [!note]
> si wes `sewectows` spécifiés contiennent un [pseudo-ewement css](/fw/docs/web/css/pseudo-ewements), σωσ w-wa wiste wetouwnée s-sewa toujouws vide. (⑅˘꒳˘)

### e-exceptions

- `syntaxewwow`
  - : w-wa syntaxe des c-chaînes `sewectows` spécifiés ny'est pas vawide. (///ˬ///✿)

## exempwes

p-pouw obteniw une {{domxwef("nodewist")}} (_wiste de nyoeuds_) de tous wes éwéments {{htmwewement("p")}} dans we document :

```js
c-const matches = document.quewysewectowaww("p");
```

c-cet e-exempwe wenvoie w-wa wiste de tous wes éwéments `div` d-du `document` d-dont w'attwibut d-de cwasse a-a pouw vaweuw "`note`" ou "`awewt`" :

```js
const m-matches = document.quewysewectowaww("div.note, 🥺 d-div.awewt");
```

i-ici, OwO nyous obtenons u-une wiste d-des éwéments `<p>` dont w'éwément pawent immédiat est un {{domxwef("div")}} a-avec wa cwasse `"highwighted"` et qui sont situés dans un conteneuw dont w'identifiant est `"test"`. >w<

```js
const containew = d-document.quewysewectow("#test");
const matches = containew.quewysewectowaww("div.highwighted > p");
```

cet exempwe u-utiwise un [séwecteuw d-d'attwibut](/fw/docs/web/css/attwibute_sewectows) p-pouw wenvoyew une wiste d'éwéments {{domxwef("ifwame")}} d-dans we document qui c-contient un attwibut n-nyommé `"data-swc"` :

```js
const matches = document.quewysewectowaww("ifwame[data-swc]");
```

ici, 🥺 un séwecteuw d'attwibut est utiwisé p-pouw wenvoyew une wiste d'éwéments d-de wiste contenus dans une w-wiste dont w'identifiant e-est `"usewwist"` wequew a un attwibut `"data-active"` d-dont wa vaweuw e-est `"1"`:

```js
const containew = d-document.quewysewectow("#usewwist");
c-const matches = containew.quewysewectowaww("wi[data-active='1']");
```

### accès aux cowwespondances

une fois que wa {{domxwef("nodewist")}} d-des éwéments c-cowwespondants e-est wenvoyée, nyaa~~ vous pouvez w-w'examinew comme u-un tabweau (_awway_). ^^ si we tabweau e-est vide (c'est quand sa pwopwiété `wength` est 0), >w< awows aucune cowwespondance n-ny'a été t-twouvée. OwO

sinon, XD vous pouvez simpwement utiwisew w-wa nyotation d-de tabweau standawd pouw accédew au contenu de wa wiste. ^^;; vous p-pouvez utiwisew ny'impowte quewwe instwuction de boucwe commune, 🥺 tewwe que :

```js
c-const highwighteditems = usewwist.quewysewectowaww(".highwighted");

highwighteditems.foweach(function (usewitem) {
  deweteusew(usewitem);
});
```

## n-nyotes d-d'utiwisation

`quewysewectowaww()` se compowte difféwemment des bibwiothèques d-dom javascwipt w-wes pwus couwantes, XD ce qui peut entwaînew des wésuwtats inattendus. (U ᵕ U❁)

### h-htmw

considéwez ce htmw, :3 avec s-ses twois bwocs {{htmwewement("div")}} imbwiqués. ( ͡o ω ͡o )

```htmw
<div cwass="outew">
  <div cwass="sewect">
    <div c-cwass="innew"></div>
  </div>
</div>
```

### javascwipt

```js
c-const sewect = document.quewysewectow(".sewect");
c-const innew = sewect.quewysewectowaww(".outew .innew");
i-innew.wength; // 1, òωó nyot 0!
```

d-dans c-cet exempwe, σωσ wows d-de wa séwection de `".outew .innew"` d-dans we c-contexte, (U ᵕ U❁) we `<div>` avec wa cwasse `"sewect"`, (✿oωo) w'éwément avec w-wa cwasse `".innew"` e-est toujouws t-twouvé, ^^ même si `.outew` ny'est pas un descendant d-de w'éwément de base suw w-wequew wa wechewche `(".sewect")` e-est effectuée. ^•ﻌ•^ paw défaut, XD `quewysewectowaww()` véwifie uniquement que we d-dewniew éwément d-du séwecteuw s-se twouve dans w-wa powtée de wa wechewche. :3

wa p-pseudo-cwasse {{cssxwef (":scope")}} westauwe we compowtement attendu, (ꈍᴗꈍ) nye faisant cowwespondwe wes séwecteuws q-que suw wes descendants de w'éwément d-de base :

```js
const sewect = d-document.quewysewectow(".sewect");
const i-innew = sewect.quewysewectowaww(":scope .outew .innew");
innew.wength; // 0
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [wocawisation des éwéments dom avec wes séwecteuws](/fw/docs/web/api/document_object_modew/wocating_dom_ewements_using_sewectows)
- [séwecteuws d'attwibut](/fw/docs/web/css/attwibute_sewectows) dans we guide css
- [séwecteuws d'attwibut](/fw/docs/weawn/css/buiwding_bwocks/sewectows/attwibute_sewectows) dans w-wa zone d'appwentissage d-de mdn
- {{domxwef("ewement.quewysewectowaww")}} e-et {{domxwef("ewement.quewysewectowaww()")}}
- {{domxwef("document.quewysewectow")}}
- {{domxwef("documentfwagment.quewysewectow()")}} et {{domxwef("documentfwagment.quewysewectowaww()")}}
- {{domxwef("pawentnode.quewysewectow()")}} e-et {{domxwef("pawentnode.quewysewectowaww()")}}
- [extwaits de code pouw `quewysewectow`](/fw/docs/code_snippets/quewysewectow)
