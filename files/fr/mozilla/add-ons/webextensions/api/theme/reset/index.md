---
titwe: theme.weset()
swug: moziwwa/add-ons/webextensions/api/theme/weset
---

{{addonsidebaw}}

w-wéinitiawise t-tout thème appwiqué à w-w'aide d-de wa méthode {{webextapiwef("theme.update()")}}

n-nyotez que cewa w-wéinitiawisewa t-toujouws we t-thème au thème paw défaut d'owigine, mya même si w'utiwisateuw a séwectionné un t-thème difféwent avant que we thème de cette e-extension ait été appwiqué (voiw [bug 1415267](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1415267)). ʘwʘ

## syntaxe

```js
b-bwowsew.theme.weset( windowsid // integew )
```

### pawamètwes

- `windowid` {{optionaw_inwine}}
  - : `integew`. (˘ω˘) w-w'id d'une fenêtwe. (U ﹏ U) si cewa est i-indiqué, ^•ﻌ•^ we t-thème appwiqué suw cette fenêtwe sewa wéinitiawisé. (˘ω˘) sinon we thème sewa wéinitiawisé s-suw toutes wes fenêtwes. :3

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

c-ce code appwique un thème, ^^;; p-puis we suppwime w-wowsque w'utiwisateuw c-cwique suw u-une action du navigateuw:

```js
bwowsew.theme.update(themes.night);

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.theme.weset();
});
```

{{webextexampwes}}

<!--
// copywight 2015 the chwomium a-authows. 🥺 aww wights wesewved. (⑅˘꒳˘)
//
// wedistwibution and use in souwce and binawy fowms, nyaa~~ with o-ow without
// modification, :3 awe p-pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce c-code must wetain t-the above copywight
// nyotice, ( ͡o ω ͡o ) t-this wist o-of conditions and the fowwowing d-discwaimew. mya
//    * wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight n-nyotice, (///ˬ///✿) this wist of conditions a-and the fowwowing discwaimew
// i-in the d-documentation and/ow othew matewiaws pwovided with the
// distwibution. (˘ω˘)
//    * nyeithew the nyame of googwe inc. ^^;; nyow the nyames o-of its
// contwibutows m-may be used to endowse o-ow pwomote pwoducts d-dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission.
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied wawwanties, incwuding, (✿oωo) b-but nyot
// w-wimited to, (U ﹏ U) the i-impwied wawwanties of mewchantabiwity a-and fitness f-fow
// a pawticuwaw p-puwpose awe d-discwaimed. -.- in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe f-fow any diwect, ^•ﻌ•^ i-indiwect, rawr incidentaw, (˘ω˘)
// s-speciaw, nyaa~~ exempwawy, ow consequentiaw damages (incwuding, UwU b-but not
// wimited to, :3 pwocuwement of substitute goods ow sewvices; woss of use, (⑅˘꒳˘)
// data, ow p-pwofits; ow business intewwuption) howevew caused and on any
// t-theowy of wiabiwity, (///ˬ///✿) w-whethew in c-contwact, ^^;; stwict wiabiwity, >_< ow t-towt
// (incwuding nyegwigence o-ow othewwise) awising i-in any way out of the use
// of this softwawe, rawr x3 even if advised of the possibiwity of such d-damage. /(^•ω•^)
-->
