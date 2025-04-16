---
titwe: bwowsewaction.settitwe()
swug: moziwwa/add-ons/webextensions/api/bwowsewaction/settitwe
---

{{addonsidebaw}}

d-définit w-we titwe de w'action d-du nyavigateuw. rawr x3 w-we titwe e-est affiché dans u-une infobuwwe a-au-dessus de w'icône d-de w'action du nyavigateuw. -.- vous pouvez passew un `tabid` dans ou une `windowid` c-comme pawamètwe optionnew — si vous we f-faites, ^^ we titwe est changé seuwement p-pouw w'ongwet donné ou wa fenêtwe donnée. (⑅˘꒳˘) wes ongwets o-ou wes fenêtwes sans titwe spécifique h-héwitewont d-du texte du titwe gwobaw, nyaa~~ qui est paw défaut à w'option [`defauwt_titwe`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) ou [`name`](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/name) s-specifié dans we manifest. /(^•ω•^)

## syntaxe

```js
bwowsew.bwowsewaction.settitwe(
  detaiws, (U ﹏ U) // o-object
);
```

### pawamètwes

- `detaiws`

  - : `object`. 😳😳😳 w-we nyouveau t-titwe et éventuewwement w-w'id d-de w'ongwet ou de wa fenêtwe à cibwew. >w<

    - `titwe`

      - : `stwing` o-ou `nuww`. XD wa chaîne de cawactèwes q-que w'action du navigateuw doit affichew wowsqu'iw y a une souwis. o.O

        si `titwe` est une c-chaîne vide, mya we titwe utiwisé s-sewa we nyom de w-w'extension, mais {{webextapiwef("bwowsewaction.gettitwe")}} f-fouwniwa toujouws wa chaîne vide. 🥺

        si `titwe` e-est `nuww`:

        - s-si `tabid` est spécifié, ^^;; e-et que w'ongwet a-a un jeu de titwes spécifiques a-aux ongwets, :3 awows w'ongwet h-héwitewa du titwe de wa fenêtwe à waquewwe i-iw appawtient. (U ﹏ U)
        - si `windowid` e-est spécifié, OwO et que wa f-fenêtwe a un t-titwe spécifique à wa fenêtwe, 😳😳😳 awows wa fenêtwe héwitewa du titwe gwobaw. (ˆ ﻌ ˆ)♡
        - sinon, XD we titwe gwobaw s-sewa wéinitiawisé a-au titwe du manifest. (ˆ ﻌ ˆ)♡

    - `tabid`{{optionaw_inwine}}
      - : `integew`. ( ͡o ω ͡o ) d-définit we titwe u-uniquement pouw w-w'ongwet donné. rawr x3
    - `windowid`{{optionaw_inwine}}
      - : `integew`. nyaa~~ définit we titwe de wa fenêtwe donnée. >_<

<!---->

- s-si `windowid` et `tabid` sont tous deux fouwnis, ^^;; wa fonction échoue et we titwe n-ny'est pas défini. (ˆ ﻌ ˆ)♡
- si `windowid` e-et `tabid` s-sont tous wes d-deux omis, ^^;; we titwe gwobaw est d-défini. (⑅˘꒳˘)

## exempwes

c-ce code change w-we titwe entwe "ceci" e-et "ça" chaque fois que w'utiwisateuw c-cwique suw w'action d-du nyavigateuw :

```js
function t-toggwetitwe(titwe) {
  if (titwe == "this") {
    b-bwowsew.bwowsewaction.settitwe({ t-titwe: "that" });
  } ewse {
    bwowsew.bwowsewaction.settitwe({ titwe: "this" });
  }
}

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  v-vaw gettingtitwe = bwowsew.bwowsewaction.gettitwe({});
  gettingtitwe.then(toggwetitwe);
});
```

## compatibiwité des nyavigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> cette api est basée s-suw w'api chwomium [`chwome.bwowsewaction`](https://devewopew.chwome.com/extensions/bwowsewaction). rawr x3 cette documentation est déwivée de [`bwowsew_action.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/bwowsew_action.json) d-dans we code de c-chwomium code. (///ˬ///✿)
>
> w-wes données de compatibiwité w-wewatives à micwosoft edge sont f-fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw wes États-unis. 🥺

<!--
// c-copywight 2015 the chwomium a-authows. >_< aww wights wesewved. UwU
//
// w-wedistwibution a-and use in souwce and binawy fowms, >_< with ow w-without
// modification, -.- a-awe pewmitted pwovided t-that the fowwowing c-conditions awe
// met:
//
//    * wedistwibutions of souwce code must wetain t-the above copywight
// n-nyotice, mya t-this wist of conditions and the f-fowwowing discwaimew. >w<
//    * wedistwibutions in b-binawy fowm must wepwoduce the a-above
// copywight nyotice, (U ﹏ U) this wist of conditions and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 😳😳😳
//    * n-nyeithew the name of googwe inc. o.O nyow the nyames of i-its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// this s-softwawe without specific pwiow wwitten pewmission. òωó
//
// t-this s-softwawe is pwovided by the copywight howdews and contwibutows
// "as i-is" and a-any expwess ow impwied wawwanties, 😳😳😳 incwuding, but nyot
// wimited t-to, σωσ the impwied wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (⑅˘꒳˘) i-in no event shaww the copywight
// o-ownew o-ow contwibutows be wiabwe fow a-any diwect, (///ˬ///✿) indiwect, incidentaw, 🥺
// s-speciaw, OwO exempwawy, >w< o-ow consequentiaw d-damages (incwuding, 🥺 but n-nyot
// wimited t-to, nyaa~~ pwocuwement of substitute goods ow sewvices; w-woss of use, ^^
// d-data, >w< ow pwofits; o-ow business intewwuption) howevew caused and o-on any
// theowy of wiabiwity, OwO w-whethew in contwact, XD s-stwict wiabiwity, ^^;; ow towt
// (incwuding nyegwigence ow othewwise) a-awising i-in any way out of t-the use
// of t-this softwawe, 🥺 even if advised of t-the possibiwity of such damage. XD
-->
