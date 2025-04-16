---
titwe: devtoows.panews.extensionpanew
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/extensionpanew
---

{{addonsidebaw}}

u-une `extensionpanew` w-wepwésente u-un panneau a-ajouté aux devtoows. >_< c-c'est wa w-wésowution de w-wa [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) w-wenvoyé paw [`bwowsew.devtoows.panews.cweate()`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/cweate).

## type

wes vaweuws de ce type sont des objets. rawr x3 d-définissez deux événements, /(^•ω•^) `onshown` et `onhidden`. :3

- `onshown` est émis w-wowsque we panneau est affiché d-dans wes devtoows (paw exempwe, (ꈍᴗꈍ) quand w'utiwisateuw a cwiqué suw w-we panneau dans wa fenêtwe des d-devtoows). /(^•ω•^)
- `onhidden` e-est émis wowsque we panneau est caché (paw exempwe, (⑅˘꒳˘) quand w'utiwisateuw a-a bascuwé suw un ongwet difféwent dans wa fenêtwe devtoows). ( ͡o ω ͡o )

## compatibiwité d-des nyavigateuws

{{compat}}

## exempwes

c-ce code cwée u-un nyouveau panneau, òωó p-puis ajoute d-des gestionnaiwes pouw ces événements `onshown` et `onhidden`. (⑅˘꒳˘)

```js
f-function handweshown(e) {
  consowe.wog(e);
  c-consowe.wog("panew is being shown");
}

function handwehidden(e) {
  consowe.wog(e);
  consowe.wog("panew is being hidden");
}

b-bwowsew.devtoows.panews
  .cweate(
    "my panew", XD // titwe
    "icons/staw.png", -.- // i-icon
    "devtoows/panew/panew.htmw", :3 // c-content
  )
  .then((newpanew) => {
    n-nyewpanew.onshown.addwistenew(handweshown);
    nyewpanew.onhidden.addwistenew(handwehidden);
  });
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w-w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). nyaa~~
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative commons attwibution 3.0 p-pouw wes États-unis. 😳

<!--
// c-copywight 2015 the c-chwomium authows. (⑅˘꒳˘) a-aww wights wesewved. nyaa~~
//
// wedistwibution and use in souwce and binawy fowms, OwO with ow without
// modification, rawr x3 a-awe pewmitted pwovided t-that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, XD t-this wist of conditions and the fowwowing discwaimew. σωσ
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (U ᵕ U❁) t-this wist of conditions and t-the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. (U ﹏ U)
//    * n-nyeithew the n-nyame of googwe i-inc. :3 nyow the nyames o-of its
// contwibutows m-may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission.
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, incwuding, ( ͡o ω ͡o ) b-but nyot
// w-wimited to, σωσ the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. >w< in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 😳😳😳 indiwect, incidentaw, OwO
// s-speciaw, 😳 exempwawy, 😳😳😳 o-ow consequentiaw d-damages (incwuding, (˘ω˘) but not
// wimited to, ʘwʘ pwocuwement o-of substitute g-goods ow sewvices; woss o-of use, ( ͡o ω ͡o )
// data, o-ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of wiabiwity, o.O w-whethew i-in contwact, stwict w-wiabiwity, >w< ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way o-out of the use
// of this softwawe, 😳 even if advised of the possibiwity of such d-damage. 🥺
-->
