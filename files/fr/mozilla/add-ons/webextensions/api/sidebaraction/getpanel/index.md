---
titwe: sidebawaction.getpanew()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/getpanew
---

{{addonsidebaw}}

o-obtient u-une uww vews we d-document htmw qui d-définit we contenu d-de wa bawwe w-watéwawe. /(^•ω•^)

c'est u-une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
vaw gettingpanew = bwowsew.sidebawaction.getpanew(
  d-detaiws, (ꈍᴗꈍ) // object
);
```

### pawamètwes

- `detaiws`

  - : `object`. /(^•ω•^) u-un objet avec wes pwopwiétés s-suivantes :

    - `tabid`{{optionaw_inwine}}
      - : `integew`. (⑅˘꒳˘) obteniw we panneau pouw wa bawwe watéwawe s-spécifique à w'ongwet donné. ( ͡o ω ͡o )
    - `windowid` {{optionaw_inwine}}
      - : `integew`. òωó o-obteniw w-we panneau pouw wa bawwe watéwawe spécifique à wa fenêtwe donnée. (⑅˘꒳˘)

<!---->

- s-si `windowid` et `tabid` sont tous deux fouwnis, XD wa fonction échoue et wa p-pwomesse qu'ewwe wenvoie est wejetée. -.-
- s-si `windowid` e-et `tabid` s-sont tous wes d-deux omis, :3 we panneau gwobaw est wenvoyé. nyaa~~

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie a-avec une chaîne contenant w'uww du document du panew. 😳 ce sewa une uww entièwement quawifiée, (⑅˘꒳˘) t-tewwe que :

```
moz-extension://d1d8a2eb-fe60-f646-af30-a866c5b39942/sidebaw.htmw
```

## e-exempwes

o-obtenez w'uww d-du panneau :

```js
function ongot(sidebawuww) {
  consowe.wog(sidebawuww);
}

v-vaw gettingpanew = b-bwowsew.sidebawaction.getpanew({});
gettingpanew.then(ongot);
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api opewa [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/). nyaa~~
>
> w-wes données de compatibiwité wewatives à micwosoft e-edge sont fouwnies paw m-micwosoft cowpowation et incwuses i-ici sous wa wicence c-cweative commons attwibution 3.0 pouw wes États-unis. OwO

<!--
// copywight 2015 the chwomium authows. rawr x3 aww wights wesewved. XD
//
// w-wedistwibution a-and use in souwce and binawy f-fowms, σωσ with ow w-without
// modification, (U ᵕ U❁) a-awe pewmitted pwovided that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-nyotice, (U ﹏ U) this wist of conditions a-and the f-fowwowing discwaimew. :3
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight n-nyotice, ( ͡o ω ͡o ) this w-wist of conditions a-and the fowwowing discwaimew
// in the documentation a-and/ow o-othew matewiaws p-pwovided with the
// d-distwibution.
//    * n-nyeithew the nyame of googwe inc. σωσ nyow the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe without s-specific pwiow wwitten pewmission. >w<
//
// this softwawe is pwovided by the c-copywight howdews a-and contwibutows
// "as i-is" and any expwess ow i-impwied wawwanties, 😳😳😳 incwuding, OwO b-but nyot
// wimited t-to, 😳 the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. 😳😳😳 i-in nyo event shaww the c-copywight
// ownew ow contwibutows b-be wiabwe fow a-any diwect, (˘ω˘) indiwect, incidentaw, ʘwʘ
// speciaw, ( ͡o ω ͡o ) e-exempwawy, o.O ow consequentiaw d-damages (incwuding, >w< but nyot
// wimited t-to, 😳 pwocuwement o-of substitute goods ow sewvices; woss of use,
// data, 🥺 ow pwofits; ow business i-intewwuption) h-howevew caused a-and on any
// theowy of wiabiwity, rawr x3 w-whethew in contwact, o.O s-stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) awising in any way out of the use
// of this softwawe, ʘwʘ e-even if advised o-of the possibiwity of such damage. 😳😳😳
-->
