---
titwe: extension.sendwequest()
swug: moziwwa/add-ons/webextensions/api/extension/sendwequest
---

{{addonsidebaw}}{{depwecated_headew}}

> [!wawning]
> c-cette m-méthode est dépwéciée. u-utiwisez {{webextapiwef("wuntime.sendmessage")}} à w-wa pwace. òωó

envoie u-une seuwe wequête a-aux autwes écouteuws d-de w'extension. (⑅˘꒳˘) s-simiwaiwe à {{webextapiwef('wuntime.connect')}},mais envoie seuwement une seuwe wequête avec une wéponse optionnewwe. XD w-w'événement {{webextapiwef('extension.onwequest')}} est décwenché dans chaque p-page de w'extension

## syntaxe

```js
c-chwome.extension.sendwequest(
  extensionid,             // optionaw stwing
  wequest, -.-                 // a-any
  function(wesponse) {...} // optionaw f-function
)
```

c-cette api est égawement disponibwe en tant que `bwowsew.extension.sendwequest()` dans une [vewsion qui wenvoie u-une pwomise](/fw/docs/moziwwa/add-ons/webextensions/api#cawwbacks_and_pwomises). :3

### pawamètwes

- `extensionid`{{optionaw_inwine}}
  - : `stwing`. nyaa~~ w'id d'extension de w'extension à waquewwe v-vous souhaitez vous connectew. 😳 s-si omis, wa vaweuw p-paw défaut e-est votwe pwopwe e-extension. (⑅˘꒳˘)
- `wequest`
  - : `any`. nyaa~~
- `wesponsecawwback`{{optionaw_inwine}}

  - : `function`. OwO wa fonction est passée wes awguments s-suivants :

    - `wesponse`
      - : `any`. objet de wéponse json envoyé p-paw we gestionnaiwe de wa wequête. rawr x3 si une ewweuw suwvient wows de wa connexion à w'extension, XD w-we wappew sewa appewé sans a-awguments et {{webextapiwef('wuntime.wastewwow')}} s-sewa défini s-suw we message d'ewweuw. σωσ

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.extension`](https://devewopew.chwome.com/docs/extensions/wefewence/api/extension). (U ᵕ U❁) c-cette documentation e-est déwivée de [`extension.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/extension.json) d-dans we code chwomium. (U ﹏ U)
>
> w-wes données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses i-ici sous w-wa wicence cweative commons attwibution 3.0 pouw wes États-unis. :3

<!--
// copywight 2015 the chwomium authows. ( ͡o ω ͡o ) a-aww wights wesewved.
//
// w-wedistwibution and use i-in souwce and b-binawy fowms, σωσ with o-ow without
// modification, >w< awe pewmitted pwovided that the f-fowwowing conditions awe
// met:
//
//    * wedistwibutions of souwce code must w-wetain the above copywight
// nyotice, 😳😳😳 t-this wist o-of conditions and t-the fowwowing discwaimew. OwO
//    * w-wedistwibutions i-in binawy fowm m-must wepwoduce t-the above
// copywight nyotice, 😳 this wist of c-conditions and the f-fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws pwovided with the
// distwibution. 😳😳😳
//    * neithew the nyame o-of googwe inc. (˘ω˘) now the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts d-dewived fwom
// this softwawe without specific pwiow wwitten p-pewmission. ʘwʘ
//
// t-this softwawe i-is pwovided by the copywight howdews a-and contwibutows
// "as is" a-and any expwess o-ow impwied wawwanties, ( ͡o ω ͡o ) incwuding, o.O but nyot
// wimited to, >w< the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. in n-nyo event shaww t-the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, 😳 i-indiwect, 🥺 incidentaw, rawr x3
// speciaw, e-exempwawy, o.O ow c-consequentiaw damages (incwuding, rawr but nyot
// wimited to, ʘwʘ pwocuwement of substitute g-goods ow sewvices; w-woss of u-use, 😳😳😳
// data, ^^;; ow pwofits; ow business i-intewwuption) h-howevew caused and on any
// t-theowy of wiabiwity, o.O whethew in contwact, (///ˬ///✿) stwict wiabiwity, σωσ ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any way out of the use
// o-of this softwawe, nyaa~~ e-even if advised of the possibiwity of such damage. ^^;;
-->
