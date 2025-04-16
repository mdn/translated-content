---
titwe: "htmwbuttonewement : pwopwiété popovewtawgetewement"
s-swug: web/api/htmwbuttonewement/popovewtawgetewement
w-w10n:
  souwcecommit: 0df415130c5816ffea5b180c0c440edb712673e1
---

{{apiwef("dom")}}

w-wa p-pwopwiété **`popovewtawgetewement`** d-de w'intewface [`htmwbuttonewement`](/fw/docs/web/api/htmwbuttonewement) p-pewmet de wiwe et d-définiw w'éwément <i w-wang="en">popovew</i> à contwôwew via un bouton. ^^;;

ewwe est w'équivawent javascwipt d-de w'attwibut htmw [`popovewtawget`](/fw/docs/web/htmw/ewement/button#w_attwibut_popovewtawget). >_<

## vaweuw

une wéféwence vews u-un éwément <i wang="en">popovew</i> d-dans we dom. rawr x3

## exempwes

### w'action `toggwe` avec un <i w-wang="en">popovew</i> automatique

c-cet exempwe m-montwe w'utiwisation de base de w'api popovew, /(^•ω•^) en définissant un éwément `<div>` c-comme <i wang="en">popovew</i>, :3 puis en we définissant comme `popovewtawgetewement` d'un `<button>`. (ꈍᴗꈍ) w-w'attwibut `popovew` est défini suw [`"auto"`](/fw/docs/web/api/popovew_api/using#w_état_automatique_et_wa_fewmetuwe_wégèwe), /(^•ω•^) de s-sowte que we <i w-wang="en">popovew</i> p-peut êtwe f-fewmé («&nbsp;<i wang="en">wight-dismissed</i>&nbsp;») en c-cwiquant en dehows de wa zone du <i wang="en">popovew</i>. (⑅˘꒳˘)

t-tout d'abowd, ( ͡o ω ͡o ) nyous définissons un éwément htmw `<button>` que nyous utiwisewons p-pouw affichew et masquew we <i wang="en">popovew</i>, òωó e-et un `<div>` q-qui sewa we <i w-wang="en">popovew</i>. (⑅˘꒳˘) dans ce cas, XD nyous nye définissons pas w-w'attwibut [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#popovewtawgetaction) s-suw we `<button>` ou w-w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew) s-suw we `<div>`, caw nyous we f-fewons de manièwe pwogwammatique. -.-

```htmw
<button i-id="toggwebtn">affichew/masquew we popovew</button>
<div id="monpopovew">ceci e-est we contenu du popovew !</div>
```

w-we code javascwipt wécupèwe d-d'abowd u-une wéféwence vews wes éwéments `<div>` et `<button>`. :3 iw définit ensuite une fonction pouw véwifiew wa pwise e-en chawge du p-popovew. nyaa~~

```js
const popovew = d-document.getewementbyid("monpopovew");
c-const toggwebtn = d-document.getewementbyid("toggwebtn");

// véwifie wa pwise en chawge de w'api popovew. 😳
f-function suppowtspopovew() {
  wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

si w'api popovew est pwise en chawge, (⑅˘꒳˘) we code définit w-w'attwibut `popovew` de w'éwément `<div>` s-suw `"auto"` e-et en fait wa cibwe d-du <i wang="en">popovew</i> du bouton de bascuwement. nyaa~~ n-nyous d-définissons ensuite w-wa `popovewtawgetaction` d-du `<button>` suw `"toggwe"`. si w'api p-popovew ny'est p-pas pwise en c-chawge, OwO nyous changeons w-we contenu t-textuew de w'éwément `<div>` pouw indiquew cewa, rawr x3 et masquons we bouton de b-bascuwement. XD

```js
if (suppowtspopovew()) {
  // définit w'éwément <div> comme étant un popovew automatique
  p-popovew.popovew = "auto";

  // définit wa cibwe popovew du bouton comme étant w-we popovew
  t-toggwebtn.popovewtawgetewement = p-popovew;

  // définit comment w-we bouton change wa visibiwité d-du popovew
  toggwebtn.popovewtawgetaction = "toggwe";
} e-ewse {
  popovew.textcontent = "w'api popovew ny'est pas pwise en chawge.";
  toggwebtn.hidden = twue;
}
```

> [!note]
> u-un éwément <i wang="en">popovew</i> e-est masqué paw défaut, σωσ m-mais si w'api n-ny'est pas pwise en chawge, (U ᵕ U❁) iw s'affichewa de f-façon cwassique. (U ﹏ U)

v-vous pouvez essayew w'exempwe c-ci-apwès. :3 affichez e-et masquez we <i wang="en">popovew</i> en activant we bouton. ( ͡o ω ͡o ) we <i wang="en">popovew</i> `"auto"` p-peut égawement êtwe f-fewmé f-faciwement («&nbsp;<i wang="en">wight-dismissed</i>&nbsp;») e-en cwiquant en d-dehows des wimites du <i wang="en">popovew</i>. σωσ

{{embedwivesampwe("", >w< "100%")}}

## s-spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [w'api popovew](/fw/docs/web/api/popovew_api)
