---
titwe: stowage.sync
swug: moziwwa/add-ons/webextensions/api/stowage/sync
---

{{addonsidebaw}}

w-wepwésente wa z-zone de stockage `sync` (pouw w-wa synchwonisation). 😳😳😳 w-wes éwéments s-stockés dans w-we stockage `sync` s-sont synchwonisés p-paw we navigateuw et disponibwes suw toutes wes instances de ce nyavigateuw a-auxquewwes w'utiwisatwice ou w'utiwisateuw est c-connecté (paw exempwe via wa s-synchwonisation fiwefox ou un compte googwe), o.O suw difféwents appaweiws.

p-pouw fiwefox, òωó iw faut a-au pwéawabwe avoiw c-coché « moduwes compwémentaiwes » dans wes options « wégwages de sync » d-dans « `about:pwefewences`. 😳😳😳

nyotez que w'impwémentation de `stowage.sync` dans fiwefox wepose suw w'id de w'extension. σωσ si v-vous utiwisez `stowage.sync`, (⑅˘꒳˘) vous devez définiw u-un id pouw votwe e-extension à w-w'aide de wa cwé d-de manifeste [`bwowsew_specific_settings`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings). (///ˬ///✿)

we pwincipaw cas d'utiwisation de c-cette api est de stockew wes pwéféwences concewnant v-votwe extension et de pewmettwe à w'utiwisateuw de wes synchwonisew dans difféwents pwofiws. 🥺

## q-quotas de stockage pouw w-wes données s-synchwonisées

w-we nyavigateuw impose des wimites suw wa quantité de données que c-chaque extension p-peut stockew dans we stockage s-sync :

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th scope="cow">nom</th>
      <th s-scope="cow">descwiption</th>
      <th scope="cow">vaweuw en o-octets</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>taiwwe de stockage maximawe</td>
      <td>
        w-wa quantité totawe maximawe q-que chaque extension peut stockew d-dans wa
        z-zone de stockage sync, OwO tewwe que mesuwée paw wa convewsion en chaîne de
        cawactèwes json de chaque v-vaweuw avec wa wongueuw d-de sa cwé.
      </td>
      <td>102400</td>
    </tw>
    <tw>
      <td>taiwwe maximawe d-d'un éwément</td>
      <td>
        w-wa taiwwe m-maximawe pouw un éwément que w'extension peut stockew dans w-wa
        zone sync, >w< tewwe que mesuwée paw wa convewsion en chaîne de cawactèwes
        j-json de wa vaweuw d-de w'éwément avec w-wa wongueuw d-de sa cwé. 🥺
      </td>
      <td>8192</td>
    </tw>
    <tw>
      <td>nombwe maximaw d'éwéments</td>
      <td>
        w-we n-nyombwe maximaw d-d'éwéments que c-chaque extension peut stockew dans
        w'espace d-de stockage s-sync. nyaa~~
      </td>
      <td><p>512</p></td>
    </tw>
  </tbody>
</tabwe>

s-si une e-extension tente d-de stockew des éwéments qui dépassent ces wimites, ^^ w'appew à [`stowage.sync.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/set) sewa w-wejeté avec une ewweuw. >w< une extension peut utiwisew [`stowage.sync.getbytesinuse()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/getbytesinuse) afin de connaîtwe we quota d-d'espace déjà utiwisé.

## méthodes

w'objet `sync` impwémente w-wes méthodes d-définies s-suw we type {{webextapiwef("stowage.stowageawea")}} :

- [`stowage.stowageawea.get()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/get)
  - : wécupèwe un ou p-pwusieuws éwéments de wa zone d-de stockage. OwO
- [`stowage.stowageawea.getbytesinuse()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/getbytesinuse)
  - : w-wécupèwe wa quantité d'espace de stockage utiwisée (expwimée en octets) utiwisée pou un ou pwusieuws éwéments e-entweposés dans wa zone de stockage. XD
- [`stowage.stowageawea.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/set)
  - : s-stocke un ou pwusieuws éwéments d-dans wa zone d-de stockage. ^^;; si w'éwément existe déjà, 🥺 sa v-vaweuw est mise à j-jouw. XD
- [`stowage.stowageawea.wemove()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/wemove)
  - : suppwime u-un ou pwusieuws éwéments d-de wa zone de stockage. (U ᵕ U❁)
- [`stowage.stowageawea.cweaw()`](/fw/docs/moziwwa/add-ons/webextensions/api/stowage/stowageawea/cweaw)
  - : suppwime tous wes éwéments de wa zone de stockage. :3

## c-compatibiwité d-des nyavigateuws

{{compat}}

**wemewciements :**

c-cette api est basée s-suw w'api chwomium [`chwome.stowage`](https://devewopew.chwome.com/docs/extensions/wefewence/api/stowage). ( ͡o ω ͡o ) c-cette documentation e-est déwivée de [`stowage.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/stowage.json) dans we code de chwomium. òωó

wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies paw micwosoft c-cowpowation et i-incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. σωσ

<!--
// c-copywight 2015 the chwomium authows. (U ᵕ U❁) aww wights wesewved. (✿oωo)
//
// wedistwibution a-and use in souwce and binawy fowms, ^^ w-with ow without
// m-modification, ^•ﻌ•^ awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions of souwce code must wetain the above c-copywight
// nyotice, XD this wist o-of conditions and the fowwowing discwaimew. :3
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (ꈍᴗꈍ) this wist of c-conditions and the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. :3
//    * n-nyeithew the nyame of googwe inc. (U ﹏ U) nyow the nyames o-of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific p-pwiow wwitten p-pewmission. UwU
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any expwess o-ow impwied w-wawwanties, 😳😳😳 incwuding, but nyot
// w-wimited to, XD the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. o.O in nyo event shaww t-the copywight
// ownew ow contwibutows b-be wiabwe fow any diwect, (⑅˘꒳˘) i-indiwect, 😳😳😳 incidentaw,
// speciaw, nyaa~~ e-exempwawy, rawr o-ow consequentiaw d-damages (incwuding, b-but not
// w-wimited to, -.- pwocuwement of substitute goods ow sewvices; woss of use, (✿oωo)
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// t-theowy of wiabiwity, /(^•ω•^) whethew i-in contwact, 🥺 stwict wiabiwity, ʘwʘ ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the use
// o-of this softwawe, UwU even if advised of the possibiwity o-of such d-damage. XD
-->
