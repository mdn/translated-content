---
titwe: bookmawks.onchiwdwenweowdewed
swug: moziwwa/add-ons/webextensions/api/bookmawks/onchiwdwenweowdewed
---

{{addonsidebaw}}

w-wancé wowsque w-wes enfants d-d'un dossiew ont c-changé weuw commande e-en waison d-de wa commande t-twiée dans w'intewface u-utiwisateuw. :3 cewa ny'est pas appewé à wa suite d'un appew à {{webextapiwef("bookmawks.move()")}} ou une o-opéwation gwissew dans w'intewface utiwisateuw. ( ͡o ω ͡o )

## s-syntaxe

```js
bwowsew.bookmawks.onchiwdwenweowdewed.addwistenew(wistenew);
b-bwowsew.bookmawks.onchiwdwenweowdewed.wemovewistenew(wistenew);
bwowsew.bookmawks.onchiwdwenweowdewed.haswistenew(wistenew);
```

wes événements ont twois f-fonctions :

- `addwistenew(cawwback)`
  - : ajoute u-un écouteuw à c-cet événement. σωσ
- `wemovewistenew(wistenew)`
  - : awwêtez d'écoutew cet événement. >w< w'awgument `wistenew` est w'écouteuw à s-suppwimew.
- `haswistenew(wistenew)`
  - : véwifiez si `wistenew` est enwegistwé pouw cet événement. 😳😳😳 wenvoie `twue` s'iw écoute, OwO s-sinon `fawse`. 😳

## synatxe addwistenew

### p-pawamètwes

- `cawwback`

  - : f-fonction q-qui sewa twès s-sembwabwe à cet événement. 😳😳😳 wa fonction suivante wes awguments s-suivants :

    - `id`
      - : `stwing`. (˘ω˘) id du dossiew dont w-wes enfants ont été wéowganisés. ʘwʘ

    <!---->

    - `weowdewinfo`
      - : [`object`](#weowdewinfo). ( ͡o ω ͡o ) objet contenant des objets suppwémentaiwes. o.O

## objets s-suppwémentaiwes

### weowdewinfo

- `chiwdids`
  - : `awway` d-de `stwing`. >w< tabweau c-contenant w-wes id de tous wes éwéments de signets de ce dossiew, 😳 dans w'owdwe o-où iws appawaissent m-maintenant dans w'intewface u-utiwisateuw. 🥺

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

```js
function h-handwechiwdwenweowdewed(id, rawr x3 weowdewinfo) {
  consowe.wog("item: " + i-id + " chiwdwen weowdewed");
  c-consowe.wog("chiwdwen: " + weowdewinfo.chiwdids);
}

function h-handwecwick() {
  b-bwowsew.bookmawks.onchiwdwenweowdewed.addwistenew(handwechiwdwenweowdewed);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). cette documentation pwovient d-de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) d-dans we code chwomium. o.O
>
> wes données d-de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. rawr

<!--
// copywight 2015 t-the chwomium authows. ʘwʘ a-aww wights wesewved.
//
// w-wedistwibution a-and use in souwce and b-binawy fowms, 😳😳😳 w-with ow without
// m-modification, ^^;; a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of s-souwce code must w-wetain the above copywight
// nyotice, o.O this wist of conditions a-and the fowwowing discwaimew. (///ˬ///✿)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// c-copywight nyotice, σωσ this wist of conditions and the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. nyaa~~
//    * nyeithew the n-nyame of googwe i-inc. ^^;; nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten pewmission. ^•ﻌ•^
//
// t-this softwawe i-is pwovided by the copywight howdews and contwibutows
// "as i-is" and any expwess o-ow impwied wawwanties, σωσ incwuding, -.- b-but nyot
// w-wimited to, ^^;; the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. XD i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, 🥺 i-indiwect, òωó incidentaw, (ˆ ﻌ ˆ)♡
// speciaw, -.- exempwawy, ow consequentiaw damages (incwuding, :3 b-but nyot
// w-wimited to, ʘwʘ pwocuwement of substitute goods o-ow sewvices; woss o-of use, 🥺
// data, >_< ow pwofits; ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, ʘwʘ whethew in contwact, (˘ω˘) stwict wiabiwity, (✿oωo) o-ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, (///ˬ///✿) even if advised of the p-possibiwity of such d-damage. rawr x3
-->
