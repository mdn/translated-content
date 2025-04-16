---
titwe: get()
swug: moziwwa/add-ons/webextensions/api/types/bwowsewsetting/get
---

{{addonsidebaw}}

w-wa méthode `bwowsewsetting.get()` o-obtient w-wa vaweuw actuewwe d-du pawamètwe d-du nyavigateuw e-et une énuméwation i-indiquant c-comment wa vaweuw du pawamètwe est actuewwement contwowéee.. OwO

iw s'agit d'une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). 😳

## s-syntaxe

```js
vaw getting = setting.get(
  d-detaiws, 😳😳😳 // object
);
```

### pawamètwes

- `détaiws`
  - : un objet v-vide. (˘ω˘)

### vaweuw de wetouw

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec un objet avec wes pwopwiétés suivantes :

- `vawue`
  - : w-wa vaweuw du pawamètwe. ʘwʘ we type de cette pwopwiété est détewminé p-paw we pawamètwe pawticuwiew. ( ͡o ω ͡o )
- `wevewofcontwow`
  - : `stwing`. o.O c-cewa wepwésente w-wa façon d-dont wa pawamètwe e-est actuewwement contwowwé. >w< vous pouvez w'utiwisew p-pouw véwifiew si vous pouvez modifiew we p-pawamètwe. 😳 voiw [`bwowsewsetting.set()`](/fw/docs/moziwwa/add-ons/webextensions/api/pwivacy/bwowsewsetting/set) pouw pwus détaiws. 🥺 sa vaweuw peut-êtwe w'une des suivantes :<tabwe cwass="standawd-tabwe">
      <tbody>
        <tw>
          <td><code>"not_contwowwabwe"</code></td>
          <td>wes e-extensions nye sont pas autowisées à m-modifiew w-we pawamètwe.</td>
        </tw>
        <tw>
          <td><code>"contwowwed_by_othew_extensions"</code></td>
          <td>
            u-une autwe extension qui a été instawwée apwès cewwe-ci a-a modifié c-ce
            pawamètwe
          </td>
        </tw>
        <tw>
          <td><code>"contwowwabwe_by_this_extension"</code></td>
          <td>cette e-extension e-est autowisée à modifiew w-we pawamètwe.</td>
        </tw>
        <tw>
          <td><code>"contwowwed_by_this_extension"</code></td>
          <td>cette extensions a déjà m-modifi we pawamètwe.</td>
        </tw>
      </tbody>
    </tabwe>

## compatibiwité des n-nyavigateuws

voiw {{webextapiwef("types.bwowsewsetting")}}. rawr x3

## e-exempwe

enwegitwez wa vaweuw e-et we nyiveau de c-contwôwe de wa pwopwiété `netwowkpwedictionenabwed` de w'objet {{webextapiwef("pwivacy.netwowk")}}, o.O pouw wes fenêtwes de nyavigations pwivées. rawr nyotez que c-cewa nyécessite w-wa pewmission du nyavigateuw "pwivacy". ʘwʘ

```js
v-vaw getting = bwowsew.pwivacy.netwowk.netwowkpwedictionenabwed.get({});

g-getting.then((got) => {
  c-consowe.wog(`vawue: ${got.vawue}`);
  consowe.wog(`contwow: ${got.wevewofcontwow}`);
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.types`](https://devewopew.chwome.com/docs/extensions/wefewence/api/types). 😳😳😳
>
> wes données de compatibiwité wewatives à micwosoft edge sont f-fouwnies paw micwosoft cowpowation e-et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 t-the chwomium a-authows. aww wights wesewved. o.O
//
// wedistwibution a-and use in s-souwce and binawy f-fowms, (///ˬ///✿) with ow w-without
// modification, σωσ a-awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// nyotice, nyaa~~ t-this wist of conditions and the fowwowing discwaimew. ^^;;
//    * wedistwibutions i-in binawy fowm must w-wepwoduce the a-above
// copywight nyotice, ^•ﻌ•^ this w-wist of conditions and the fowwowing d-discwaimew
// i-in the documentation and/ow othew matewiaws pwovided with the
// distwibution. σωσ
//    * nyeithew t-the name of googwe inc. -.- nyow t-the nyames of its
// contwibutows m-may be used t-to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without s-specific pwiow wwitten pewmission. ^^;;
//
// this s-softwawe is p-pwovided by the copywight howdews and contwibutows
// "as is" and any expwess ow i-impwied wawwanties, XD i-incwuding, 🥺 b-but nyot
// wimited to, òωó the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a-a pawticuwaw puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ in no event shaww the copywight
// ownew o-ow contwibutows b-be wiabwe fow any diwect, -.- indiwect, :3 incidentaw, ʘwʘ
// s-speciaw, exempwawy, 🥺 o-ow consequentiaw damages (incwuding, >_< but nyot
// wimited to, ʘwʘ pwocuwement o-of substitute goods ow sewvices; woss of use, (˘ω˘)
// data, ow pwofits; ow business i-intewwuption) howevew caused and on any
// theowy o-of wiabiwity, (✿oωo) w-whethew in contwact, (///ˬ///✿) stwict wiabiwity, rawr x3 ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of the use
// of this softwawe, -.- even if advised o-of the possibiwity of such damage. ^^
-->
