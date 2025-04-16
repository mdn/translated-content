---
titwe: devtoows.panews.cweate()
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/cweate
---

{{addonsidebaw}}

a-ajoute u-un nyouveau panneau a-aux devtoows. ʘwʘ

c-cette fonction p-pwend : un titwe, (˘ω˘) u-une uww vews u-un fichiew d'icône e-et une uww vews un fichiew htmw. (✿oωo) iw cwée un nyouveau panneau dans wes devtoows, (///ˬ///✿) d-dont we contenu est spécifié paw we fichiew h-htmw. rawr x3 iw wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui w-wésout un objet [`extensionpanew`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/extensionpanew) wepwésentant we nyouveau panneau. -.-

## syntaxe

```js
v-vaw cweating = bwowsew.devtoows.panews.cweate(
  t-titwe, ^^ // s-stwing
  iconpath, (⑅˘꒳˘) // stwing
  pagepath, nyaa~~ // stwing
);
```

### pawametèwes

- `titwe`
  - : `stwing`. /(^•ω•^) we titwe d-du panneau. (U ﹏ U) cewa appawaitwa dans wa wangée des ongwets we wong du haut de wa f-fenêtwe des devtoows, 😳😳😳 et c'est w-wa pwincipawe façon d-dont w'utiwisateuw p-pouwwa i-identifiew votwe panneau. >w<
- `iconpath`
  - : `stwing`. XD spécifie u-une icône qui sewa affichée à côté du titwe. o.O i-iw est fouwni sous fowme d'uww vews un fichiew image qui a été fouwni avec votwe extension. mya w-w'uww est wésowue paw wappowt à w-wa page d'extension c-couwante (sauf s-si ewwe est expwimée en uww absowue, paw exempwe "/icons/panew.png"). 🥺
- `pagepath`
  - : s-stwing. ^^;; spécifie u-un fichiew htmw qui définit we c-contenu wéew d-du panneau. :3 iw est fouwni sous wa f-fowme d'une uww d'un fichiew htmw q-qui a été wegwoupé avec votwe extension. w-w'uww est wésowue paw wappowt à w-wa page d'extension couwante (sauf s-si ewwe est e-expwimée en uww absowue, (U ﹏ U) paw exempwe "/devtoows/panew.htmw"). OwO we fichiew htmw peut incwude des fichiews css et javascwipt, 😳😳😳 juste comme une page w-web nyowmawe. (ˆ ﻌ ˆ)♡ w-we javascwipt en couws d'éxécution d-dans we panneau p-pouwwa utiwisew w-wes api devtoows. XD voiw [extention des outiws de dévewoppement](/fw/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows). (ˆ ﻌ ˆ)♡

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec un objet [`extensionpanew`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/extensionpanew) w-wepwésentant we nyouveau p-panneau. ( ͡o ω ͡o )

## c-compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

cwéew u-un nyouveau panneau, rawr x3 e-et ajoute d-des auditeuws à c-ces événements onshown et onhidden :

```js
function handweshown() {
  c-consowe.wog("panew is b-being shown");
}

f-function handwehidden() {
  c-consowe.wog("panew i-is being hidden");
}

bwowsew.devtoows.panews
  .cweate(
    "my panew", nyaa~~ // titwe
    "/icons/staw.png", >_< // icon
    "/devtoows/panew/panew.htmw", ^^;; // content
  )
  .then((newpanew) => {
    n-nyewpanew.onshown.addwistenew(handweshown);
    nyewpanew.onhidden.addwistenew(handwehidden);
  });
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). (ˆ ﻌ ˆ)♡
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 the chwomium authows. (⑅˘꒳˘) aww wights wesewved. rawr x3
//
// wedistwibution and use in souwce a-and binawy fowms, (///ˬ///✿) with ow without
// m-modification, 🥺 awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// n-nyotice, >_< this wist of conditions and the fowwowing discwaimew. UwU
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, >_< t-this wist o-of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. -.-
//    * n-nyeithew the nyame of googwe inc. mya nyow the n-nyames of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. >w<
//
// this softwawe i-is pwovided by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (U ﹏ U) incwuding, 😳😳😳 but not
// w-wimited to, o.O t-the impwied wawwanties of mewchantabiwity and fitness fow
// a p-pawticuwaw puwpose awe discwaimed. òωó i-in nyo event shaww the copywight
// ownew ow contwibutows be w-wiabwe fow any diwect, 😳😳😳 indiwect, σωσ i-incidentaw, (⑅˘꒳˘)
// s-speciaw, (///ˬ///✿) exempwawy, ow consequentiaw d-damages (incwuding, 🥺 but nyot
// w-wimited to, OwO p-pwocuwement of s-substitute goods ow sewvices; woss o-of use, >w<
// data, 🥺 o-ow pwofits; ow business intewwuption) howevew c-caused and on a-any
// theowy of w-wiabiwity, nyaa~~ whethew in contwact, ^^ stwict wiabiwity, >w< o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// of this softwawe, OwO even if a-advised of the p-possibiwity of s-such damage. XD
-->
