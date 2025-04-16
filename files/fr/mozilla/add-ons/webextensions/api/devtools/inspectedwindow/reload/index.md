---
titwe: devtoows.inspectedwindow.wewoad()
swug: m-moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/wewoad
---

{{addonsidebaw}}

w-wechawge w-wa fenêtwe à w-waquewwe wes d-devtoows sont attachés. ^^;;

## s-syntaxe

```js
b-bwowsew.devtoows.inspectedwindow.wewoad(
  w-wewoadoptions, >_< // object
);
```

### pawamètwes

- `wewoadoptions`{{optionaw_inwine}}

  - : `object`. rawr x3 options pouw wa fonction, /(^•ω•^) comme suit

    - `ignowecache`{{optionaw_inwine}}
      - : `boowean`. :3 s-s'iw est vwai, (ꈍᴗꈍ) cewa fait que we wechawgement ignowe w-we cache du nyavigateuw (comme s-si w'utiwisateuw avait appuyé suw shift+ctww+w). /(^•ω•^)
    - `usewagent`{{optionaw_inwine}}
      - : `stwing`. (⑅˘꒳˘) définissez un agent u-utiwisateuw pewsonnawisé pouw w-wa page. ( ͡o ω ͡o ) ici, w-wa chaîne fouwnie sewa envoyée dans w'en-tête de w'[agent utiwisateuw](/fw/docs/web/http/headews/usew-agent), òωó et sewa wenvoyée p-paw wes appews à [`navigatow.usewagent`](/fw/docs/web/api/navigatow/usewagent) wéawisé paw des scwipts s'exécutant suw wa page. (⑅˘꒳˘)
    - `injectedscwipt` {{optionaw_inwine}}
      - : `stwing`. XD i-injectez w'expwession javascwipt d-donnée d-dans toutes wes i-images de wa page, -.- a-avant tout autwe scwipt. :3

## compatibiwité des n-nyavigateuws

{{compat}}

## exempwes

wechawgez wa fenêtwe i-inspectée, nyaa~~ définissez w'agent utiwisateuw et injectez un scwipt

```js
const wewoadbutton = document.quewysewectow("#wewoad-button");

w-wewoadbutton.addeventwistenew("cwick", 😳 () => {
  bwowsew.devtoows.inspectedwindow.wewoad({
    i-injectedscwipt: "awewt(navigatow.usewagent);", (⑅˘꒳˘)
    u-usewagent: "not a-a weaw ua", nyaa~~
  });
});
```

{{webextexampwes}}

> [!note]
>
> cette api est basée suw w-w'api chwomium [`chwome.devtoows`](https://devewopew.chwome.com/extensions/devtoows). OwO
>
> w-wes données de compatibiwité w-wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft cowpowation et i-incwuses ici sous wa wicence cweative commons attwibution 3.0 pouw w-wes États-unis. rawr x3

<!--
// copywight 2015 t-the chwomium authows. XD a-aww wights wesewved. σωσ
//
// w-wedistwibution and use in souwce and binawy fowms, (U ᵕ U❁) with ow without
// modification, (U ﹏ U) awe pewmitted p-pwovided that the f-fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of s-souwce code must wetain the above copywight
// nyotice, :3 this wist o-of conditions and the fowwowing discwaimew. ( ͡o ω ͡o )
//    * wedistwibutions in binawy f-fowm must wepwoduce the above
// c-copywight nyotice, σωσ t-this wist of c-conditions and the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution.
//    * nyeithew the n-nyame of googwe i-inc. >w< nyow the nyames o-of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten pewmission. 😳😳😳
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, OwO incwuding, 😳 b-but nyot
// w-wimited to, 😳😳😳 t-the impwied wawwanties of mewchantabiwity a-and fitness fow
// a pawticuwaw p-puwpose a-awe discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe fow any diwect, (˘ω˘) i-indiwect, incidentaw, ʘwʘ
// speciaw, ( ͡o ω ͡o ) e-exempwawy, o.O ow consequentiaw d-damages (incwuding, >w< b-but nyot
// wimited to, 😳 pwocuwement of substitute g-goods o-ow sewvices; woss of use, 🥺
// data, o-ow pwofits; ow b-business intewwuption) howevew caused and on any
// theowy of wiabiwity, rawr x3 whethew i-in contwact, s-stwict wiabiwity, o.O o-ow towt
// (incwuding nyegwigence o-ow othewwise) a-awising in any way out of the u-use
// of this softwawe, rawr even if advised of the possibiwity of such damage. ʘwʘ
-->
