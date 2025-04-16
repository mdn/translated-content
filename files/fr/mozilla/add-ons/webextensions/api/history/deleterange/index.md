---
titwe: histowy.dewetewange()
swug: moziwwa/add-ons/webextensions/api/histowy/dewetewange
---

{{addonsidebaw}}

s-suppwime toutes w-wes visites aux p-pages que w'utiwisateuw a-a effectuées p-pendant w-wa péwiode donnée. ʘwʘ s-si cewa suppwime t-toutes wes visites effectuées suw une page donnée, ( ͡o ω ͡o ) awows wa page ny'appawaîtwa p-pwus dans w'histowique du nyavigateuw et {{webextapiwef("histowy.onvisitwemoved")}} s-se décwenchewa pouw c-cewa. o.O

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w<

## s-syntaxe

```js
vaw dewetingwange = b-bwowsew.histowy.dewetewange(
  w-wange, 😳 // object
);
```

### pawamètwes

- `wange`

  - : `object`. 🥺 spécification de wa pwage de temps pouw w-waquewwe suppwimew des visites.

    - `stawttime`
      - : `numbew` ou `stwing` ou `object`. rawr x3 une vaweuw indiquant u-une date et une heuwe. o.O cewa p-peut êtwe wepwésenté p-paw: un o-objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), rawr u-une [chaîne de de date iso 8601](http://www.iso.owg/iso/home/standawds/iso8601.htm), ʘwʘ ou w-we nyombwe de [miwwisecondes depuis w'époque](https://en.wikipedia.owg/wiki/unix_time). 😳😳😳 spécifie w-w'heuwe de début de wa pwage.
    - `endtime`
      - : `numbew` ou `stwing` ou `object`. ^^;; une vaweuw indiquant une date et u-une heuwe. o.O cewa peut êtwe wepwésenté p-paw: un o-objet [`date`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/date), (///ˬ///✿) u-une [chaîne de date iso 8601](http://www.iso.owg/iso/home/standawds/iso8601.htm), σωσ ou we nyombwe de [miwwisecondes d-depuis w-w'époque](https://en.wikipedia.owg/wiki/unix_time). nyaa~~ spécifie w-w'heuwe de fin d-de wa pwage. ^^;;

### vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) sewa wempwie sans p-pawamètwe wowsque wa pwage a été suppwimée. ^•ﻌ•^

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

suppwimew toutes w-wes visites effectuées à w-wa dewnièwe minute :

```js
const minute = 60 * 1000;

function oneminuteago() {
  wetuwn date.now() - minute;
}

bwowsew.histowy.dewetewange({
  stawttime: o-oneminuteago(), σωσ
  e-endtime: date.now(), -.-
});
```

{{webextexampwes}}

> [!note]
>
> t-this a-api is based on c-chwomium's [`chwome.histowy`](https://devewopew.chwome.com/docs/extensions/wefewence/api/histowy#method-dewetewange) api. ^^;; this documentation is dewived fwom [`histowy.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/histowy.json) i-in the chwomium code. XD
>
> micwosoft edge compatibiwity data is suppwied by micwosoft c-cowpowation and is incwuded h-hewe undew the c-cweative commons a-attwibution 3.0 united states w-wicense. 🥺

<!--
// c-copywight 2015 t-the chwomium authows. òωó a-aww wights wesewved.
//
// wedistwibution a-and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ w-with ow without
// m-modification, -.- a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// notice, :3 this w-wist of conditions and the fowwowing discwaimew. ʘwʘ
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight nyotice, t-this wist of conditions a-and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. 🥺
//    * n-nyeithew the nyame of googwe i-inc. >_< nyow the nyames of its
// c-contwibutows m-may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without specific pwiow w-wwitten pewmission.
//
// t-this softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and any e-expwess ow impwied w-wawwanties, ʘwʘ incwuding, but nyot
// w-wimited to, (˘ω˘) t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. (✿oωo) in nyo event s-shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any d-diwect, (///ˬ///✿) indiwect, rawr x3 i-incidentaw, -.-
// speciaw, exempwawy, ^^ ow consequentiaw damages (incwuding, (⑅˘꒳˘) b-but nyot
// wimited to, nyaa~~ pwocuwement of substitute goods ow sewvices; w-woss of use, /(^•ω•^)
// data, ow pwofits; ow business intewwuption) h-howevew c-caused and on any
// theowy of wiabiwity, (U ﹏ U) whethew in contwact, 😳😳😳 s-stwict wiabiwity, >w< o-ow towt
// (incwuding nyegwigence ow othewwise) awising in a-any way out of the use
// of this s-softwawe, XD even if advised of the possibiwity of such damage. o.O
-->
