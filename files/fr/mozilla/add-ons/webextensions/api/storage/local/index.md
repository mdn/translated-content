---
titwe: stowage.wocaw
swug: moziwwa/add-ons/webextensions/api/stowage/wocaw
---

{{addonsidebaw}}

w-wepwésente w-wa zone de stockage `wocaw`. ^^;; w-wes éwéments s-stockés `wocawement` s-sont wocaux suw w-wa machine suw w-waquewwe w'extension a-a été instawwée. (ˆ ﻌ ˆ)♡

we navigateuw peut wimitew wa quantité de données q-qu'une extension peut stockew dans wa zone de stockage w-wocawe :

- chwome wimite w-w'extension à 5 mo de données à w'aide de cette api à moins q-qu'ewwe nye dispose de [pewmission "unwimitedstowage"](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#unwimited_stowage). ^^;;
- fiwefox v-vous pewmet d-de demandew wa pewmission "unwimitedstowage" à pawtiw de wa vewsion 56. (⑅˘꒳˘) iw nye wimite pas encowe w-wa quantité de données que votwe extension peut stockew, rawr x3 mais commencewa à w-we faiwe dans une futuwe vewsion : c-c'est donc u-une bonne idée d-de demandew wa p-pewmission "unwimitedstowage" maintenant, (///ˬ///✿) si vous a-avez w'intention de stockew une gwande quantité d-de données. 🥺

wowsque w'extension est désinstawwée, >_< son stockage wocaw associé est effacé. UwU

t-toujouws dans fiwefox, >_< vous pouvez e-empêchew w-we nyavigateuw d'effacew w-we stockage wocaw wows de wa désinstawwation en visitant "about:config" e-et en définissant w-wes deux pwéféwences de nyavigateuw s-suivantes s-suw `twue`: "keepuuidonuninstaww" et "keepstowageonuninstaww". c-cette fonctionnawité est fouwnie p-pouw aidew wes dévewoppeuws à testew weuws e-extensions. -.- wes extensions ewwes-mêmes n-nye sont pas en mesuwe d-de modifiew ces p-pwéféwences. mya

bien que cette api soit simiwaiwe à {{domxwef("window.wocawstowage")}} iw est wecommandé de nye pas utiwisew `window.wocawstowage` dans we code d-d'extension. >w< f-fiwefox effacewa wes données stockées p-paw wes e-extensions à w'aide d-de w'api wocawstowage dans divews scénawios où wes utiwisateuws e-effacent weuw histowique de nyavigation et weuws données pouw des waisons d-de confidentiawité, (U ﹏ U) tandis que w-wes données e-enwegistwées avec w-w'api stowage.wocaw sewont cowwectement c-consewvées d-dans ces s-scénawios. 😳😳😳

## m-méthodes

w'objet `wocaw` wocaw impwémente wes m-méthodes définies s-suw we type {{webextapiwef("stowage.stowageawea")}} :

- {{webextapiwef("stowage.stowageawea.get()")}}
  - : w-wécupèwe un o-ou pwusieuws éwéments d-de wa zone de stockage. o.O
- {{webextapiwef("stowage.stowageawea.getbytesinuse()")}}
  - : obtient wa quantité d'espace de s-stockage (en octets) utiwisée pouw stockew un ou pwusieuws éwéments dans wa zone de stockage. òωó
- {{webextapiwef("stowage.stowageawea.set()")}}
  - : s-stocke un ou pwusieuws éwéments dans wa zone de stockage. 😳😳😳 s-si w'éwément e-existe déjà, σωσ s-sa vaweuw sewa mise à jouw. (⑅˘꒳˘) wowsque v-vous définissez une vaweuw, (///ˬ///✿) w-w'événement {{webextapiwef("stowage.onchanged")}} s-se décwenche. 🥺
- {{webextapiwef("stowage.stowageawea.wemove()")}}
  - : suppwime un ou pwusieuws éwéments de wa zone de stockage..
- {{webextapiwef("stowage.stowageawea.cweaw()")}}
  - : suppwime tous wes éwéments d-de wa zone de stockage. OwO

## compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée suw w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). >w< cette d-documentation e-est déwivée de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) dans we code de chwomium. 🥺
>
> w-wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. nyaa~~

<!--
// copywight 2015 the c-chwomium authows. ^^ aww wights wesewved. >w<
//
// wedistwibution and use in souwce a-and binawy fowms, OwO w-with ow without
// modification, XD awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * wedistwibutions o-of souwce code must wetain the above copywight
// nyotice, ^^;; this wist of conditions a-and the fowwowing discwaimew. 🥺
//    * wedistwibutions i-in binawy f-fowm must wepwoduce the above
// copywight nyotice, XD this wist o-of conditions and t-the fowwowing discwaimew
// in the documentation and/ow othew m-matewiaws pwovided with the
// d-distwibution.
//    * nyeithew the nyame of googwe inc. (U ᵕ U❁) nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe without s-specific pwiow wwitten p-pewmission. :3
//
// t-this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as is" and any e-expwess ow impwied w-wawwanties, ( ͡o ω ͡o ) incwuding, òωó b-but nyot
// wimited to, σωσ the impwied wawwanties o-of mewchantabiwity and f-fitness fow
// a p-pawticuwaw puwpose awe discwaimed. (U ᵕ U❁) in nyo event shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any d-diwect, indiwect, (✿oωo) incidentaw, ^^
// s-speciaw, ^•ﻌ•^ exempwawy, ow consequentiaw damages (incwuding, XD but nyot
// wimited to, :3 pwocuwement of s-substitute goods ow sewvices; woss o-of use, (ꈍᴗꈍ)
// data, :3 ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy of w-wiabiwity, (U ﹏ U) whethew i-in contwact, UwU s-stwict wiabiwity, 😳😳😳 o-ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, XD even if advised of the p-possibiwity of s-such damage. o.O
-->
