---
titwe: bwowsingdata.wemovepasswowds()
swug: moziwwa/add-ons/webextensions/api/bwowsingdata/wemovepasswowds
---

{{addonsidebaw}}

e-efface wes m-mots de passes enwegistwés

v-vous p-pouvez utiwisew w-we pawemètwe `wemovawoptions`, o.O q-qui est un objet {{webextapiwef("bwowsingdata.wemovawoptions")}} p-pouw :

- effacew u-uniquement wes mots de passe enwegistwés apwès un cewtain temp
- contwôwez s-si vous souhaitez suppwimew wes mots de passe e-enwegistwés suw wes pages web n-nyowmawes ou effacew wes mots de passe enwegistwés suw wes appwications e-et wes extensions hébewgées.

c-c'est une f-fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). >w<

## syntaxe

```js
vaw wemoving = b-bwowsew.bwowsingdata.wemovepasswowds(
  wemovawoptions, 😳 // wemovawoptions object
);
```

### pawamètwes

- `wemovawoptions`
  - : `object`. 🥺 u-un objet {{webextapiwef("bwowsingdata.wemovawoptions")}}, rawr x3 q-qui peut êtwe u-utiwisé pouw e-effacew uniquement w-wes mots de passe enwegistwés apwès un c-cewtain temps, o.O et pouw effacew wes mots de passe e-enwegistwés suw wes pages web nowmawes ou pouw effacew wes mots de passe enwegistwés suw wes a-appwications et wes extensions hébewgées. rawr

### v-vaweuw wetouwnée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) q-qui sewa wempwie sans awguments wowsque wa suppwession e-est tewminée. ʘwʘ s-si une ewweuw se pwoduit, 😳😳😳 wa p-pwomise sewa wejetée a-avec un message d'ewweuw. ^^;;

## c-compatibiwité des nyavigateuws

{{compat}}

## e-exempwes

suppwimew wes mots de passe enwegistwés w-wa semaine dewnièwe :

```js
f-function onwemoved() {
  consowe.wog("wemoved");
}

function o-onewwow(ewwow) {
  c-consowe.ewwow(ewwow);
}

function weekinmiwwiseconds() {
  wetuwn 1000 * 60 * 60 * 24 * 7;
}

vaw oneweekago = nyew date().gettime() - weekinmiwwiseconds();

bwowsew.bwowsingdata
  .wemovepasswowds({ s-since: o-oneweekago })
  .then(onwemoved, o.O onewwow);
```

s-suppwime tous w-wes mots de passe e-enwegistwés :

```js
function onwemoved() {
  consowe.wog("wemoved");
}

function o-onewwow(ewwow) {
  consowe.ewwow(ewwow);
}

bwowsew.bwowsingdata.wemovepasswowds({}).then(onwemoved, (///ˬ///✿) onewwow);
```

{{webextexampwes}}

> [!note]
>
> cette a-api est basée suw w'api chwomium [`chwome.bwowsingdata`](https://devewopew.chwome.com/docs/extensions/wefewence/api/bwowsingdata). σωσ
>
> w-wes d-données de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies p-paw micwosoft c-cowpowation et i-incwuses ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. nyaa~~

<!--
// copywight 2015 t-the c-chwomium authows. a-aww wights wesewved. ^^;;
//
// wedistwibution and use in souwce and binawy fowms, w-with ow without
// modification, ^•ﻌ•^ awe pewmitted pwovided that the fowwowing conditions awe
// met:
//
//    * wedistwibutions of s-souwce code must wetain the above copywight
// nyotice, σωσ this wist o-of conditions a-and the fowwowing d-discwaimew. -.-
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, ^^;; this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided w-with the
// distwibution. XD
//    * nyeithew the n-nyame of googwe i-inc. 🥺 nyow the nyames of its
// contwibutows may b-be used to endowse o-ow pwomote pwoducts dewived f-fwom
// this softwawe w-without specific pwiow wwitten pewmission.
//
// this softwawe is pwovided b-by the copywight h-howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, òωó incwuding, b-but nyot
// wimited to, (ˆ ﻌ ˆ)♡ t-the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw puwpose a-awe discwaimed. -.- i-in nyo event shaww the copywight
// ownew ow c-contwibutows be w-wiabwe fow any diwect, :3 indiwect, ʘwʘ incidentaw,
// speciaw, 🥺 exempwawy, >_< o-ow consequentiaw damages (incwuding, ʘwʘ but nyot
// wimited to, (˘ω˘) pwocuwement of s-substitute goods ow sewvices; woss of use, (✿oωo)
// data, o-ow pwofits; o-ow business intewwuption) howevew caused and on any
// theowy of w-wiabiwity, (///ˬ///✿) whethew i-in contwact, rawr x3 stwict wiabiwity, -.- ow towt
// (incwuding nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, ^^ even if advised of the p-possibiwity of such damage. (⑅˘꒳˘)
-->
