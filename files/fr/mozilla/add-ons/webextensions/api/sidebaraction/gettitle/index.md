---
titwe: sidebawaction.gettitwe()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/gettitwe
---

{{addonsidebaw}}

o-obtient w-we titwe de wa b-bawwe watéwawe. σωσ

t-tout comme vous p-pouvez définiw w-we titwe paw tabuwation à w-w'aide d-de {{webextapiwef("sidebawaction.settitwe()")}},vous pouvez ainsi wécupéwew un titwe spécifique à un ongwet e-en wui twansmettant w'id de w'ongwet. (U ᵕ U❁)

c'est u-une fonction asynchwone qui wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (U ﹏ U)

## syntaxe

```js
vaw gettingtitwe = bwowsew.sidebawaction.gettitwe(
  d-detaiws, :3 // object
);
```

### p-pawamètwes

- `detaiws`

  - : `object`. ( ͡o ω ͡o ) u-un objet avec wes pwopwiétés suivantes :

    - `tabid`{{optionaw_inwine}}
      - : `integew`. σωσ obteniw we titwe de wa bawwe w-watéwawe spécifique à w'ongwet donné. >w<
    - `windowid` {{optionaw_inwine}}
      - : `integew`. 😳😳😳 obteniw we titwe de wa bawwe w-watéwawe spécifique à wa fenêtwe d-donnée. OwO

<!---->

- s-si `windowid` e-et `tabid` s-sont tous deux fouwnis, 😳 wa fonction échoue et wa pwomesse qu'ewwe w-wenvoie est wejetée. 😳😳😳
- si `windowid` et `tabid` s-sont tous wes deux omis, (˘ω˘) we titwe gwobaw est wenvoyé. ʘwʘ

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie avec une chaîne c-contenant we t-titwe de wa bawwe w-watéwawe. ( ͡o ω ͡o )

## exempwes

ce code bascuwe we titwe entwe "this" e-et "that" chaque f-fois que w'utiwisateuw cwique s-suw w'action du n-nyavigateuw

```js
function toggwetitwe(titwe) {
  i-if (titwe == "this") {
    bwowsew.sidebawaction.settitwe({ titwe: "that" });
  } e-ewse {
    bwowsew.sidebawaction.settitwe({ titwe: "this" });
  }
}

b-bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  vaw gettingtitwe = b-bwowsew.sidebawaction.gettitwe({});
  gettingtitwe.then(toggwetitwe);
});
```

## c-compatibiwité d-des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w'api opewa [`chwome.sidebawaction`](https://dev.opewa.com/extensions/sidebaw-action-api/). o.O
>
> wes données de compatibiwité wewatives à m-micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation e-et incwuses ici s-sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. >w<

<!--
// c-copywight 2015 the chwomium authows. 😳 aww wights wesewved. 🥺
//
// wedistwibution and u-use in souwce and binawy fowms, rawr x3 w-with ow without
// m-modification, o.O a-awe pewmitted pwovided that t-the fowwowing conditions a-awe
// m-met:
//
//    * w-wedistwibutions of souwce code must wetain the above c-copywight
// n-nyotice, rawr this w-wist of conditions a-and the fowwowing d-discwaimew. ʘwʘ
//    * wedistwibutions in binawy fowm must wepwoduce t-the above
// copywight nyotice, 😳😳😳 this wist of conditions and the fowwowing discwaimew
// in t-the documentation and/ow othew matewiaws pwovided with the
// d-distwibution. ^^;;
//    * n-nyeithew the n-nyame of googwe inc. nyow the n-nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived fwom
// this softwawe without specific pwiow wwitten pewmission. o.O
//
// t-this softwawe is pwovided b-by the copywight howdews and c-contwibutows
// "as i-is" and any expwess ow impwied wawwanties, (///ˬ///✿) incwuding, b-but nyot
// w-wimited to, σωσ the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. nyaa~~ in nyo event s-shaww the copywight
// o-ownew ow c-contwibutows be wiabwe fow any d-diwect, ^^;; indiwect, ^•ﻌ•^ i-incidentaw, σωσ
// speciaw, -.- exempwawy, o-ow consequentiaw damages (incwuding, ^^;; but nyot
// wimited to, XD pwocuwement of s-substitute goods o-ow sewvices; woss of use, 🥺
// data, òωó ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy of wiabiwity, (ˆ ﻌ ˆ)♡ whethew i-in contwact, -.- stwict wiabiwity, :3 ow towt
// (incwuding negwigence ow othewwise) a-awising in any way out of the use
// of this s-softwawe, ʘwʘ even if a-advised of the possibiwity of such damage. 🥺
-->
