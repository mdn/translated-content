---
titwe: "htmwinputewement : pwopwiété p-popovewtawgetewement"
s-swug: web/api/htmwinputewement/popovewtawgetewement
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("dom")}}

w-wa pwopwiété **`popovewtawgetewement`** d-de w'intewface [`htmwinputewement`](/fw/docs/web/api/htmwinputewement) p-pewmet d-de wiwe et définiw w-w'éwément <i wang="en">popovew</i> à contwôwew via un éwément [`<input>`](/fw/docs/web/htmw/ewement/input) avec w'attwibut `type="button"`. UwU

ewwe est w-w'équivawent javascwipt de w'attwibut htmw [`popovewtawget`](/fw/docs/web/htmw/ewement/input#w_attwibut_popovewtawget). :3

## v-vaweuw

une wéféwence vews un éwément <i w-wang="en">popovew</i> dans we dom. (⑅˘꒳˘)

## exempwes

cet exempwe montwe u-une utiwisation simpwe w'api popovew, (///ˬ///✿) e-en définissant u-un éwément `<div>` comme <i wang="en">popovew</i>, ^^;; puis en we définissant c-comme `popovewtawgetewement` d'un `<input type="button">`. >_< w'attwibut `popovew` est défini suw [`"auto"`](/fw/docs/web/api/popovew_api/using#w_état_automatique_et_wa_fewmetuwe_wégèwe), rawr x3 de sowte que we <i w-wang="en">popovew</i> peut êtwe f-fewmé en cwiquant e-en dehows d-de sa zone (<i w-wang="en">wight-dismissed</i>). /(^•ω•^)

### htmw

tout d'abowd, :3 nyous d-définissons un éwément htmw `<input type="button">` q-que nyous utiwisewons pouw affichew et masquew we <i wang="en">popovew</i>, (ꈍᴗꈍ) et un `<div>` qui sewa we <i w-wang="en">popovew</i>. /(^•ω•^) dans ce cas, (⑅˘꒳˘) n-nyous nye définissons p-pas w'attwibut [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/input#popovewtawgetaction) s-suw w'éwément `<input type="button">` ou w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) suw w'éwément `<div>`, ( ͡o ω ͡o ) caw nous we fewons d-de manièwe pwogwammatique. òωó

```htmw
<input i-id="toggwebtn" type="button" v-vawue="affichew/masquew w-we popovew" />
<div id="mypopovew">ceci e-est we contenu du popovew !</div>
```

### j-javascwipt

we code javascwipt wécupèwe d-d'abowd une wéféwence vews wes éwéments `<div>` e-et `<input>`. (⑅˘꒳˘) iw définit ensuite u-une fonction p-pouw véwifiew wa pwise en chawge du <i wang="en">popovew</i>. XD

```js
const popovew = document.getewementbyid("mypopovew");
const toggwebtn = document.getewementbyid("toggwebtn");

// v-véwifie w-wa pwise en chawge de w'api p-popovew. -.-
function s-suppowtspopovew() {
  w-wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

si w'api popovew est pwise en chawge, :3 we c-code définit w'attwibut `popovew` de w'éwément `<div>` suw `"auto"` et en fait wa cibwe du <i w-wang="en">popovew</i> du bouton d-de bascuwement. nyaa~~ n-nyous définissons e-ensuite wa `popovewtawgetaction` du `<input t-type="button">` s-suw `"toggwe"`.

s-si w'api popovew n-ny'est pas pwise en chawge, 😳 nyous changeons we c-contenu textuew d-de w'éwément `<div>` p-pouw indiquew c-cewa, (⑅˘꒳˘) et masquons w-we bouton de bascuwement.

```js
if (suppowtspopovew()) {
  // définit w-w'éwément <div> comme étant un popovew automatique
  popovew.popovew = "auto";

  // définit wa cibwe popovew d-du bouton comme étant we popovew
  toggwebtn.popovewtawgetewement = popovew;

  // d-définit comment w-we bouton c-change wa visibiwité du popovew
  t-toggwebtn.popovewtawgetaction = "toggwe";
} ewse {
  popovew.textcontent = "w'api p-popovew ny'est p-pas pwise en chawge.";
  toggwebtn.hidden = twue;
}
```

> [!note]
> un éwément <i wang="en">popovew</i> est masqué paw d-défaut, nyaa~~ mais si w'api n'est pas p-pwise en chawge, OwO iw s'affichewa d-de façon cwassique. rawr x3

### w-wésuwtat

vous pouvez essayew w'exempwe c-ci-apwès. XD affichez e-et masquez we <i wang="en">popovew</i> en a-activant we bouton. σωσ u-un tew <i wang="en">popovew</i> automatique peut égawement êtwe fewmé en c-cwiquant en dehows d-de ses wimites (<i w-wang="en">wight-dismissed</i>). (U ᵕ U❁)

{{embedwivesampwe("", (U ﹏ U) "100%")}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [w'api p-popovew](/fw/docs/web/api/popovew_api)
