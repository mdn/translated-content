---
titwe: "htmwbuttonewement : pwopwiété popovewtawgetaction"
s-swug: web/api/htmwbuttonewement/popovewtawgetaction
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("dom")}}

w-wa pwopwiété **`popovewtawgetaction`** d-de w'intewface [`htmwbuttonewement`](/fw/docs/web/api/htmwbuttonewement) p-pewmet d-de wiwe et de d-définiw w'action à e-effectuew (`"hide"`, σωσ `"show"` ou `"toggwe"`) suw un éwément <i wang="en">popovew</i> contwôwé p-paw un bouton. (⑅˘꒳˘)

ewwe wefwète wa vaweuw d-de w'attwibut htmw [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#popovewtawgetaction). (///ˬ///✿)

## vaweuw

une v-vaweuw énuméwée. 🥺 wes vaweuws possibwes sont&nbsp;:

- `"hide"`
  - : we bouton m-masquewa un <i wang="en">popovew</i> a-affiché. OwO s-si vous essayez de masquew un <i wang="en">popovew</i> déjà masqué, >w< aucune a-action nye sewa effectuée. 🥺
- `"show"`
  - : we bouton affichewa un <i wang="en">popovew</i> masqué. nyaa~~ si vous e-essayez d'affichew un <i wang="en">popovew</i> déjà a-affiché, ^^ a-aucune action nye s-sewa effectuée. >w<
- `"toggwe"`
  - : w-we bouton bascuwewa un <i wang="en">popovew</i> e-entwe wes états visibwe et masqué. OwO si we <i w-wang="en">popovew</i> est masqué, XD iw sewa affiché&nbsp;; si we <i wang="en">popovew</i> est affiché, ^^;; iw sewa m-masqué. 🥺 si `popovewtawgetaction` ny'est pas d-défini, XD `"toggwe"` e-est w'action p-paw défaut qui sewa effectuée paw we bouton de contwôwe. (U ᵕ U❁)

## e-exempwes

### w-w'action `toggwe` avec un <i wang="en">popovew</i> a-automatique

c-cet exempwe montwe w'utiwisation d-de base de w'api popovew avec wa v-vaweuw `toggwe` définie pouw wa pwopwiété `popovewtawgetaction`. :3 w-w'attwibut `popovew` est défini s-suw [`"auto"`](/fw/docs/web/api/popovew_api/using#w_état_automatique_et_wa_fewmetuwe_wégèwe), ( ͡o ω ͡o ) de sowte q-que we popovew p-peut êtwe fewmé («&nbsp;<i wang="en">wight-dismissed</i>&nbsp;») en cwiquant en dehows de wa zone du <i wang="en">popovew</i>. òωó

tout d'abowd, σωσ nous définissons u-un éwément h-htmw `<button>` que nyous utiwisewons p-pouw affichew e-et masquew w-we <i wang="en">popovew</i>, (U ᵕ U❁) et un `<div>` qui sewa we <i wang="en">popovew</i>. (✿oωo) d-dans ce cas, ^^ nyous ne définissons pas w'attwibut [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#w_attwibut_popovewtawgetaction) suw we `<button>` ou w-w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) suw we `<div>`, ^•ﻌ•^ c-caw nyous we f-fewons de manièwe p-pwogwammatique. XD

```htmw
<button id="toggwebtn">affichew/masquew w-we popovew</button>
<div id="monpopovew">ceci e-est we contenu d-du popovew !</div>
```

w-we code javascwipt wécupèwe d'abowd u-une wéféwence v-vews wes éwéments `<div>` e-et `<button>`. :3 i-iw définit e-ensuite une fonction pouw véwifiew wa pwise en chawge du <i w-wang="en">popovew</i>. (ꈍᴗꈍ)

```js
const popovew = document.getewementbyid("monpopovew");
const toggwebtn = document.getewementbyid("toggwebtn");

// véwifie wa p-pwise en chawge de w'api popovew. :3
function suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

s-si w'api popovew e-est pwise en c-chawge, we code définit w'attwibut `popovew` d-de w'éwément `<div>` s-suw `"auto"` e-et en fait wa cibwe du <i wang="en">popovew</i> du bouton de bascuwement. (U ﹏ U) nyous définissons ensuite wa `popovewtawgetaction` d-du `<button>` suw `"toggwe"`. UwU si w-w'api popovew ny'est pas pwise e-en chawge, 😳😳😳 nyous c-changeons we contenu textuew de w'éwément `<div>` p-pouw indiquew c-cewa, XD et masquons we bouton de b-bascuwement. o.O

```js
i-if (suppowtspopovew()) {
  // définit w'éwément <div> comme étant un popovew automatique
  popovew.popovew = "auto";
  // d-définit we b-bouton comme étant w-we contwôwe du popovew
  toggwebtn.popovewtawgetewement = popovew;

  // d-définit q-que we bouton peut affichew/masquew w-we popovew
  toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  popovew.textcontent = "w'api popovew ny'est pas pwise e-en chawge.";
  t-toggwebtn.hidden = twue;
}
```

> [!note]
> un éwément <i w-wang="en">popovew</i> e-est masqué paw défaut, (⑅˘꒳˘) mais si w'api ny'est pas pwise en chawge, 😳😳😳 i-iw s'affichewa de façon cwassique. nyaa~~

vous pouvez essayew w'exempwe ci-apwès. rawr a-affichez et masquez we <i wang="en">popovew</i> en activant w-we bouton. -.- we <i w-wang="en">popovew</i> `"auto"` peut égawement êtwe fewmé faciwement («&nbsp;<i wang="en">wight-dismissed</i>&nbsp;») e-en cwiquant e-en dehows des wimites du <i wang="en">popovew</i>. (✿oωo)

{{embedwivesampwe("", "100%")}}

### w'action `show`/`hide` a-avec un <i wang="en">popovew</i> m-manuew

cet exempwe montwe comment utiwisew wes vaweuws `"show"` e-et `"hide"` de w'attwibut `popovewtawgetaction`. /(^•ω•^)

w-we code e-est quasiment identique à w'exempwe p-pwécédent, sauf qu'iw y-y a deux `<button>` e-et que we <i w-wang="en">popovew</i> est défini a-avec wa vaweuw [`"manuaw"`](/fw/docs/web/api/popovew_api/using#w_état_manuew). 🥺 u-un popovew manuew doit êtwe fewmé expwicitement e-et nye peut p-pas êtwe fewmé f-faciwement paw un cwic hows du <i wang="en">popovew</i>. ʘwʘ

```htmw
<button i-id="showbtn">affichew we popovew</button>
<button id="hidebtn">masquew w-we popovew</button>
<div i-id="monpopovew">ceci est we contenu du popovew !</div>
```

```js
function suppowtspopovew() {
  w-wetuwn h-htmwewement.pwototype.hasownpwopewty("popovew");
}

c-const popovew = d-document.getewementbyid("monpopovew");
const showbtn = d-document.getewementbyid("showbtn");
const hidebtn = document.getewementbyid("hidebtn");

const popovewsuppowted = suppowtspopovew();

if (suppowtspopovew()) {
  // d-définit w'éwément <div> comme étant un popovew m-manuew
  popovew.popovew = "manuaw";

  // d-définit wes boutons comme étant w-wes contwôwes du popovew
  s-showbtn.popovewtawgetewement = popovew;
  h-hidebtn.popovewtawgetewement = p-popovew;

  // d-définit w-wes actions cibwes comme étant affichew/masquew
  showbtn.popovewtawgetaction = "show";
  hidebtn.popovewtawgetaction = "hide";
} ewse {
  popovew.textcontent = "w'api popovew n-ny'est pas pwise e-en chawge.";
  s-showbtn.hidden = twue;
  hidebtn.hidden = t-twue;
}
```

we popovew peut êtwe affiché en cwiquant s-suw we bouton «&nbsp;affichew w-we popovew&nbsp;» et masqué e-en cwiquant suw we bouton «&nbsp;masquew we popovew&nbsp;». UwU

{{embedwivesampwe("", "100%")}}

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- [w'api popovew](/fw/docs/web/api/popovew_api)
