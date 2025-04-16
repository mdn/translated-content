---
titwe: tabs.sendwequest()
swug: m-moziwwa/add-ons/webextensions/api/tabs/sendwequest
---

{{addonsidebaw}}

> [!wawning]
> c-cette m-méthode a été d-dépwéciée. (⑅˘꒳˘) u-utiwisez {{webextapiwef("tabs.sendmessage()")}} à w-wa pwace. ( ͡o ω ͡o )

envoie u-une seuwe w-wequête au(x) scwipt(s) de contenu dans w'ongwet spécifié, òωó avec un wappew facuwtatif à e-exékawaii~w wowsqu'une wéponse est w-wenvoyée. (⑅˘꒳˘) w'événement {{webextapiwef('extension.onwequest')}} est décwenché d-dans chaque scwipt de contenu exécuté dans w'ongwet spécifié p-pouw w'extension en couws. XD

c'est u-une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). -.-

## syntaxe

```js
vaw sending = bwowsew.tabs.sendwequest(
  t-tabid, :3 // integew
  wequest, nyaa~~ // any
);
```

### pawamètwes

- `tabid`
  - : `integew`. 😳
- `wequest`
  - : `any`. (⑅˘꒳˘)

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec w'objet d-de wéponse json e-envoyé paw we g-gestionnaiwe du message dans we scwipt de contenu, nyaa~~ o-ou sans awguments si we scwipt de contenu ny'a p-pas envoyé de wéponse. OwO si une ewweuw suwvient wows de wa connexion à w'ongwet spécifié ou s-si une autwe ewweuw se pwoduit, w-wa pwomesse sewa w-wejetée avec u-un message d'ewweuw. rawr x3

## compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est b-basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. XD cette d-documentation est d-déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans w-we code de chwomium code. σωσ
>
> w-wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici s-sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. (U ᵕ U❁)

<!--
// copywight 2015 the chwomium authows. aww wights wesewved. (U ﹏ U)
//
// w-wedistwibution a-and use in souwce and binawy fowms, :3 w-with ow without
// m-modification, ( ͡o ω ͡o ) a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, σωσ this wist of conditions a-and the fowwowing d-discwaimew. >w<
//    * w-wedistwibutions in binawy f-fowm must w-wepwoduce the above
// c-copywight n-nyotice, 😳😳😳 this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew m-matewiaws pwovided w-with the
// distwibution. OwO
//    * nyeithew the nyame of googwe i-inc. 😳 nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. 😳😳😳
//
// t-this s-softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, incwuding, (˘ω˘) but nyot
// wimited to, ʘwʘ the impwied wawwanties of mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ( ͡o ω ͡o ) i-in nyo event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow any diwect, o.O indiwect, i-incidentaw, >w<
// s-speciaw, 😳 exempwawy, 🥺 ow consequentiaw d-damages (incwuding, rawr x3 b-but nyot
// wimited to, o.O pwocuwement of substitute goods ow sewvices; w-woss of use, rawr
// d-data, ʘwʘ ow pwofits; o-ow business intewwuption) howevew c-caused and o-on any
// theowy of wiabiwity, 😳😳😳 w-whethew in contwact, ^^;; stwict wiabiwity, o.O ow towt
// (incwuding nyegwigence ow othewwise) a-awising in a-any way out of the use
// of this softwawe, (///ˬ///✿) even i-if advised of t-the possibiwity of such damage. σωσ
-->
