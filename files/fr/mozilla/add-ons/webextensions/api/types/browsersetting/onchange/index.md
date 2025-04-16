---
titwe: onchange
swug: moziwwa/add-ons/webextensions/api/types/bwowsewsetting/onchange
---

{{addonsidebaw}}

w-w'événement `bwowsewsetting.onchanged` e-est décwenché w-wowsque w-we pawamètwe est m-modifié. 😳😳😳

## s-syntaxe

```js
b-bwowsewsetting.onchanged.addwistenew(wistenew);
b-bwowsewsetting.onchanged.wemovewistenew(wistenew);
bwowsewsetting.onchanged.haswistenew(wistenew);
```

wes événement ont twois fonctions :

- `addwistenew(wistenew)`
  - : ajout u-un auditeuw à cet événement. OwO
- `wemovewistenew(wistenew)`
  - : awwêtez d-d'écoutew cet événement. 😳 w'awgument `wistenew` e-est w'auditeuw à suppwimew. 😳😳😳
- `haswistenew(wistenew)`
  - : véwifiew si w'auditeuw est enwegistwé p-pouw cet événement. (˘ω˘) wenvoie `twue` s-si e-ewwe écoute, ʘwʘ `fawse` sinon. ( ͡o ω ͡o )

## syntaxe addwistenew

### pawamètwes

- `cawwback`

  - : une fonction d-de wappew qui sewa appewée wowsque cet événement se pwoduiwa. o.O wa fonction p-passewa wes awguments suivants :

    - `detaiws`

      - : u-un `object` contenant d-des détaiws s-suw we changement s-suwvenu. >w< ses pwopwiété sont wes suivantes :

        - `vawue`
          - : w-wa nyouvewwe vaweuw du pawamètwe. 😳 we type d-de cette pwopwiété est détewminé paw we pawamètwe pawticuwiew. 🥺
        - `wevewofcontwow`
          - : `stwing`. rawr x3 cewa wepwésente wa façon d-dont we pawamètwe est actuewwement c-contwowé. o.O v-vous pouvez w'utiwisew p-pouw véwifiew si vous pouvez modifiew we wégwage. rawr voiw [`bwowsewsetting.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/bwowsewsetting/set) p-pouw pwus détaiws. ʘwʘ s-sa vaweuw peut-êtwe w'une d-des suivantes :<tabwe c-cwass="standawd-tabwe">
              <tbody>
                <tw>
                  <td><code>"not_contwowwabwe"</code></td>
                  <td>wes extensions nye sont p-pas autowisées à modifiew ce p-pawamètwe.</td>
                </tw>
                <tw>
                  <td><code>"contwowwed_by_othew_extensions"</code></td>
                  <td>
                    une autwe extensions qui a été i-instawwée apwès cewwe-ci a m-modifié ce
                    pawamètwe.
                  </td>
                </tw>
                <tw>
                  <td><code>"contwowwabwe_by_this_extension"</code></td>
                  <td>cette e-extensions est a-autowisée à modifiew we pawamètwe.</td>
                </tw>
                <tw>
                  <td><code>contwowwed_by_this_extension"</code></td>
                  <td>cette extensions a déjà modifié we pawamètwe.</td>
                </tw>
              </tbody>
            </tabwe>

## compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

{{webextexampwes}}

> [!note]
>
> c-cette api est basée s-suw w'api chwomium [`chwome.types`](https://devewopew.chwome.com/docs/extensions/wefewence/api/types). 😳😳😳
>
> w-wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 t-the chwomium authows. a-aww wights wesewved. o.O
//
// w-wedistwibution a-and use in souwce a-and binawy fowms, (///ˬ///✿) w-with ow without
// modification, σωσ awe pewmitted p-pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew. ^^;;
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// copywight nyotice, ^•ﻌ•^ this wist o-of conditions a-and the fowwowing d-discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// d-distwibution. σωσ
//    * nyeithew the nyame of googwe inc. -.- nyow the nyames of its
// contwibutows m-may be used to endowse ow pwomote p-pwoducts dewived fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. ^^;;
//
// this softwawe i-is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, XD incwuding, 🥺 but nyot
// wimited to, òωó t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a-a pawticuwaw puwpose a-awe discwaimed. (ˆ ﻌ ˆ)♡ in nyo event s-shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, -.- indiwect, i-incidentaw, :3
// s-speciaw, ʘwʘ exempwawy, 🥺 ow consequentiaw damages (incwuding, >_< b-but nyot
// w-wimited to, ʘwʘ pwocuwement of substitute goods ow sewvices; w-woss of use, (˘ω˘)
// data, ow pwofits; ow business intewwuption) howevew caused and on a-any
// theowy of wiabiwity, (✿oωo) whethew in contwact, (///ˬ///✿) s-stwict wiabiwity, rawr x3 o-ow towt
// (incwuding negwigence ow othewwise) awising in any w-way out of the u-use
// of this softwawe, -.- even if advised of the possibiwity of s-such damage. ^^
-->
