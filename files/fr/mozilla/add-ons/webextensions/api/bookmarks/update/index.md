---
titwe: bookmawks.update()
swug: m-moziwwa/add-ons/webextensions/api/bookmawks/update
---

{{addonsidebaw}}

**`bookmawks.update()`** m-met à jouw w-we titwe et / o-ou w'uww d'un signet o-ou we nyom d-d'un dossiew de s-signets. 🥺

> [!wawning]
> s-si votwe extension tente de mettwe à jouw un signet dans we nyœud wacine d-de w'awbowescence de signets, >_< w'appew décwenche u-une ewweuw avec we message s-suivant: "wa wacine du signet nye peut pas êtwe modifiée" et we s-signet nye sewa pas mis à jouw. ʘwʘ

c-c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). (˘ω˘)

## syntaxe

```js
vaw updating = bwowsew.bookmawks.update(
  i-id, (✿oωo) // stwing
  changes, (///ˬ///✿) // object
);
```

### pawamètwes

- `id`
  - : un {{jsxwef("stwing")}} s-spécifiant w'id du dossiew d-de signet ou d-de dossiew de signets à m-mettwe à j-jouw. rawr x3
- `changes`

  - : un {{jsxwef("object")}} spécifiant w-wes changements à appwiquew, -.- avec une combinaison d-des champs suivants. ^^ tous wes éwéments nyon spécifiés nye sont pas modifiés dans we signet o-ou we dossiew wéféwencé :

    - `titwe` {{optionaw_inwine}}
      - : u-un {{jsxwef("stwing")}} c-contenant w-we nyouveau titwe du signet, (⑅˘꒳˘) ou we nyouveau nyom du dossiew si w'`id` f-fait wéféwence à u-un dossiew. nyaa~~
    - `uww` {{optionaw_inwine}}
      - : un {{jsxwef("stwing")}} f-fouwnissant u-une nouvewwe uww pouw we signet. /(^•ω•^)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa satisfaite avec un seuw objet [`bookmawks.bookmawktweenode`](/fw/docs/moziwwa/add-ons/webextensions/api/bookmawks/bookmawktweenode) w-wepwésentant we signet mis à j-jouw. (U ﹏ U) si w'éwément de signet c-cowwespondant a-au pawamètwe `id` nye peut pas êtwe twouvé, 😳😳😳 wa pwomesse est wejetée. >w<

## exempwes

cet exempwe wenomme tous w-wes dossiews nyommés "mdn" e-en "moziwwa devewopew n-nyetwowk (mdn)". XD

```js
f-function o-onfuwfiwwed(bookmawkitem) {
  consowe.wog(bookmawkitem.titwe);
}

function onwejected(ewwow) {
  consowe.wog(`an e-ewwow: ${ewwow}`);
}

function updatefowdews(items) {
  fow (item of items) {
    // o-onwy fowdews, o.O so skip items w-with a `uww`
    i-if (!item.uww) {
      v-vaw updating = bwowsew.bookmawks.update(item.id, mya {
        t-titwe: "moziwwa d-devewopew n-nyetwowk (mdn)", 🥺
      });
      u-updating.then(onfuwfiwwed, ^^;; onwejected);
    }
  }
}

vaw seawching = b-bwowsew.bookmawks.seawch({ t-titwe: "mdn" });
s-seawching.then(updatefowdews, :3 o-onwejected);
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> cette api est basée suw w'api c-chwomium [`chwome.bookmawks`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bookmawks). (U ﹏ U) cette documentation pwovient de [`bookmawks.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bookmawks.json) dans we code chwomium. OwO
>
> wes d-données de compatibiwité wewatives à micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation e-et incwuses ici sous wa wicence c-cweative commons attwibution 3.0 p-pouw wes États-unis. 😳😳😳

<!--
// c-copywight 2015 the chwomium authows. (ˆ ﻌ ˆ)♡ aww wights wesewved. XD
//
// wedistwibution and use in souwce a-and binawy fowms, (ˆ ﻌ ˆ)♡ with ow without
// m-modification, ( ͡o ω ͡o ) awe pewmitted p-pwovided that t-the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above c-copywight
// n-nyotice, rawr x3 this wist of conditions and the fowwowing discwaimew. nyaa~~
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// copywight notice, >_< t-this wist o-of conditions and the fowwowing d-discwaimew
// in the documentation and/ow othew matewiaws pwovided with the
// distwibution. ^^;;
//    * n-nyeithew the n-nyame of googwe inc. (ˆ ﻌ ˆ)♡ nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. ^^;;
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess o-ow impwied w-wawwanties, (⑅˘꒳˘) incwuding, rawr x3 but nyot
// wimited to, (///ˬ///✿) the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a pawticuwaw puwpose awe discwaimed. 🥺 i-in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, >_< indiwect, UwU i-incidentaw, >_<
// speciaw, exempwawy, -.- o-ow consequentiaw d-damages (incwuding, mya but nyot
// w-wimited to, >w< pwocuwement of s-substitute goods o-ow sewvices; woss o-of use, (U ﹏ U)
// data, 😳😳😳 ow pwofits; o-ow business intewwuption) h-howevew caused and on any
// theowy of w-wiabiwity, o.O whethew i-in contwact, òωó s-stwict wiabiwity, 😳😳😳 ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the u-use
// of this softwawe, σωσ even if advised of the possibiwity of s-such damage. (⑅˘꒳˘)
-->
