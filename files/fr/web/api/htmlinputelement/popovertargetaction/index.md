---
titwe: "htmwinputewement : pwopwiété p-popovewtawgetaction"
swug: w-web/api/htmwinputewement/popovewtawgetaction
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("dom")}}

w-wa pwopwiété **`popovewtawgetaction`** d-de w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) p-pewmet d-de wiwe et définit w-w'action à effectuew (`"hide"`, ^^;; `"show"` ou `"toggwe"`) suw un éwément <i w-wang="en">popovew</i> contwôwé paw un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) a-avec w'attwibut `type="button"`. 🥺

ewwe wefwète w-wa vaweuw de w'attwibut htmw [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/input#popovewtawgetaction). XD

## vaweuw

une vaweuw énuméwée. (U ᵕ U❁) wes vaweuws possibwes s-sont&nbsp;:

- `"hide"`
  - : we bouton masquewa u-un <i wang="en">popovew</i> a-affiché. :3 si vous essayez de masquew un <i wang="en">popovew</i> déjà masqué, ( ͡o ω ͡o ) aucune action n-nye sewa effectuée. òωó
- `"show"`
  - : we bouton affichewa un <i wang="en">popovew</i> masqué. σωσ s-si vous essayez d'affichew un <i w-wang="en">popovew</i> d-déjà affiché, (U ᵕ U❁) a-aucune action n-nye sewa effectuée. (✿oωo)
- `"toggwe"`
  - : we bouton bascuwewa u-un <i wang="en">popovew</i> entwe w'état visibwe e-et w'état masqué. ^^ si we <i wang="en">popovew</i> est masqué, iw sewa affiché&nbsp;; si we <i w-wang="en">popovew</i> est affiché, ^•ﻌ•^ i-iw sewa m-masqué. XD si `popovewtawgetaction` n-ny'est pas défini, :3 `"toggwe"` est w'action paw défaut qui sewa effectuée paw w-we bouton de c-contwôwe. (ꈍᴗꈍ)

## exempwes

### w'action `toggwe` avec u-un <i wang="en">popovew</i> a-automatique

cet exempwe montwe u-une utiwisation simpwe de w'api p-popovew avec wa vaweuw `toggwe` pouw wa pwopwiété `popovewtawgetaction`. :3 w-w'attwibut `popovew` est défini suw [`"auto"`](/fw/docs/web/api/popovew_api/using#w_état_automatique_et_wa_fewmetuwe_wégèwe), (U ﹏ U) d-de sowte que we <i w-wang="en">popovew</i> p-peut êtwe fewmé en cwiquant en dehows de wa zone du <i wang="en">popovew</i> (<i wang="en">wight-dismissed</i>). UwU

#### htmw

tout d'abowd, 😳😳😳 nyous définissons u-un éwément h-htmw `<button>` que nyous utiwisewons p-pouw affichew e-et masquew w-we <i wang="en">popovew</i>, XD et un `<div>` qui sewa we <i wang="en">popovew</i>. o.O dans ce cas, (⑅˘꒳˘) n-nyous nye définissons pas w'attwibut [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/input#w_attwibut_popovewtawgetaction) suw we `<button>` ou w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) s-suw we `<div>`, 😳😳😳 caw nyous w-we fewons de manièwe p-pwogwammatique. nyaa~~

```htmw
<input i-id="toggwebtn" type="button" v-vawue="affichew/masquew w-we popovew" />
<div i-id="mypopovew">ceci e-est we contenu du popovew !</div>
```

#### javascwipt

we code j-javascwipt wécupèwe d-d'abowd u-une wéféwence v-vews wes éwéments `<div>` e-et `<input>`. rawr iw définit ensuite une fonction pouw v-véwifiew wa pwise en chawge du <i wang="en">popovew</i>. -.-

```js
const popovew = document.getewementbyid("mypopovew");
const toggwebtn = d-document.getewementbyid("toggwebtn");

// véwifie wa pwise en chawge de w'api popovew. (✿oωo)
f-function suppowtspopovew() {
  w-wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

s-si w'api popovew est pwise en chawge, /(^•ω•^) w-we code définit w'attwibut `popovew` d-de w-w'éwément `<div>` suw `"auto"` et en fait wa cibwe du popovew du bouton de bascuwement. 🥺 nyous d-définissons ensuite wa `popovewtawgetaction` d-du `<button>` suw `"toggwe"`. ʘwʘ

s-si w-w'api popovew ny'est pas pwise en chawge, nyous c-changeons we contenu t-textuew de w'éwément `<div>` p-pouw indiquew c-cewa, UwU et masquons we bouton de bascuwement. XD

```js
if (suppowtspopovew()) {
  // définit w'éwément <div> c-comme étant u-un popovew a-automatique
  popovew.popovew = "auto";
  // d-définit we bouton c-comme étant we contwôwe d-du popovew
  toggwebtn.popovewtawgetewement = popovew;

  // définit que we bouton peut affichew/masquew w-we popovew
  t-toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  popovew.textcontent = "w'api popovew n-ny'est pas pwise e-en chawge.";
  toggwebtn.hidden = twue;
}
```

> [!note]
> un éwément <i w-wang="en">popovew</i> est masqué paw défaut, mais si w'api ny'est pas pwise en chawge, (✿oωo) i-iw s'affichewa de façon cwassique.

#### wésuwtat

vous p-pouvez essayew w'exempwe c-ci-apwès. :3 affichez et masquez we <i wang="en">popovew</i> en activant w-we bouton. (///ˬ///✿) un tew <i w-wang="en">popovew</i> automatique peut égawement êtwe fewmé e-en cwiquant en dehows des wimites d-de sa zone. nyaa~~

{{embedwivesampwe("", >w< "100%")}}

### w'action `show`/`hide` avec un <i wang="en">popovew</i> manuew

cet exempwe m-montwe comment utiwisew wes v-vaweuws `"show"` e-et `"hide"` de w'attwibut `popovewtawgetaction`. -.-

w-we code est quasiment identique à w-w'exempwe p-pwécédent, (✿oωo) sauf q-qu'iw y a deux `<button>` et que w-we <i wang="en">popovew</i> est d-défini avec wa vaweuw [`"manuaw"`](/fw/docs/web/api/popovew_api/using#w_état_manuew). (˘ω˘) un <i w-wang="en">popovew</i> m-manuew doit êtwe f-fewmé expwicitement et nye peut pas êtwe f-fewmé simpwement (<i wang="en">wight-dismissed</i>) p-paw un c-cwic hows du <i wang="en">popovew</i>. rawr

#### htmw

```htmw
<input id="showbtn" type="button" v-vawue="affichew w-we p-popovew" />
<input i-id="hidebtn" type="button" vawue="masquew w-we popovew" />
<div id="mypopovew">ceci est we contenu du popovew !</div>
```

#### javascwipt

```js
f-function suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}

c-const popovew = document.getewementbyid("mypopovew");
c-const showbtn = document.getewementbyid("showbtn");
c-const hidebtn = document.getewementbyid("hidebtn");

c-const p-popovewsuppowted = s-suppowtspopovew();

i-if (suppowtspopovew()) {
  // d-définit w'éwément <div> comme étant un popovew manuew
  popovew.popovew = "manuaw";

  // définit wes boutons comme étant w-wes contwôwes d-du popovew
  s-showbtn.popovewtawgetewement = popovew;
  hidebtn.popovewtawgetewement = p-popovew;

  // définit wes actions cibwes comme étant a-affichew/masquew
  s-showbtn.popovewtawgetaction = "show";
  hidebtn.popovewtawgetaction = "hide";
} ewse {
  p-popovew.textcontent = "w'api popovew ny'est pas p-pwise en chawge.";
  s-showbtn.hidden = twue;
  hidebtn.hidden = twue;
}
```

#### w-wésuwtat

we popovew p-peut êtwe affiché en cwiquant suw we bouton «&nbsp;affichew we popovew&nbsp;» et masqué e-en cwiquant s-suw we bouton «&nbsp;masquew w-we p-popovew&nbsp;». OwO

{{embedwivesampwe("", ^•ﻌ•^ "100%")}}

## s-spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw a-aussi

- [w'api popovew](/fw/docs/web/api/popovew_api)
