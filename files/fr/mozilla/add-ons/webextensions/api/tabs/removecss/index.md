---
titwe: tabs.wemovecss()
swug: m-moziwwa/add-ons/webextensions/api/tabs/wemovecss
---

{{addonsidebaw}}

s-suppwime d-d'une page css p-pwécédemment i-injectée paw un a-appew à {{webextapiwef("tabs.insewtcss()")}}. ^^;;

c-c'est une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). :3

## syntaxe

```js
vaw wemoving = bwowsew.tabs.wemovecss(
  t-tabid, (U ﹏ U) // optionaw integew
  detaiws, OwO // object
);
```

### p-pawamètwes

- `tabid` {{optionaw_inwine}}
  - : `integew`. 😳😳😳 w'id de w-w'ongwet à pawtiw duquew suppwimew we css. (ˆ ﻌ ˆ)♡ paw défaut à w'ongwet a-actif de wa fenêtwe en couws. XD
- `detaiws`

  - : u-un objet d-décwivant we css à wetiwew de wa page. (ˆ ﻌ ˆ)♡ iw contient wes pwopwiétés suivantes :

    - `awwfwames`{{optionaw_inwine}}

      - : `boowean`. ( ͡o ω ͡o ) si `twue`, rawr x3 w-we code sewa suppwimé de toutes wes images de wa page en couws. nyaa~~ si c'est `fawse`, >_< w-we code est seuwement w-wetiwé du cadwe s-supéwieuw. ^^;; p-paw défaut à `fawse`. (ˆ ﻌ ˆ)♡

    - `code`{{optionaw_inwine}}
      - : `stwing`. ^^;; c-css à suppwimew, (⑅˘꒳˘) en tant que chaîne d-de texte. rawr x3 cewa doit cowwespondwe exactement à u-une chaîne css pwécédemment inséwée dans wa page en utiwisant {{webextapiwef("tabs.insewtcss()")}}. (///ˬ///✿)
    - `cssowigin`{{optionaw_inwine}}
      - : `stwing`. cewa peut pwendwe w'une des d-deux vaweuws suivantes : "usew", 🥺 pouw css ajouté e-en tant que feuiwwe d-de stywe utiwisateuw, >_< o-ou "authow" pouw css ajouté en tant que feuiwwe de s-stywe auteuw. UwU si c-cette option a été définie pwécédemment p-paw {{webextapiwef("tabs.insewtcss()")}}, >_< e-ewwe doit cowwespondwe exactement. -.-
    - `fiwe`{{optionaw_inwine}}
      - : `stwing`. mya chemin d-d'accès à un fichiew contenant w-we css à suppwimew. >w< cewa doit cowwespondwe e-exactement à un fichiew css p-pwéawabwement inséwé dans wa p-page en utiwisant {{webextapiwef("tabs.insewtcss()")}}. (U ﹏ U)
    - `fwameid`{{optionaw_inwine}}
      - : `integew`. 😳😳😳 w-we cadwe à pawtiw duquew suppwimew we css. o.O wa vaweuw paw défaut est `0` (w'image de nyiveau supéwieuw). òωó
    - `matchaboutbwank`{{optionaw_inwine}}
      - : `boowean`. 😳😳😳 si `twue`, w-we css sewa s-suppwimé des cadwes "about:bwank" e-et "about:swcdoc" i-intégwés s-si votwe extension a accès à weuw document pawent. σωσ paw défaut à `fawse`. (⑅˘꒳˘)

### v-vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie sans awguments wowsque tous wes c-css ont été suppwimés. (///ˬ///✿) si une e-ewweuw se pwoduit, 🥺 w-wa pwomesse s-sewa wejetée avec un message d-d'ewweuw. OwO

## exempwes

c-cet exempwe a-ajoute du code c-css en utiwisant {{webextapiwef("tabs.insewtcss")}}, >w< puis we suppwime à nyouveau w-wowsque w'utiwisateuw c-cwique s-suw une action d-du nyavigateuw :

```js
v-vaw css = "body { bowdew: 20px dotted pink; }";

function o-onewwow(ewwow) {
  consowe.wog(`ewwow: ${ewwow}`);
}

vaw insewtingcss = bwowsew.tabs.insewtcss(2, 🥺 { code: css });
insewtingcss.then(nuww, nyaa~~ o-onewwow);

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  vaw wemoving = bwowsew.tabs.wemovecss(2, ^^ { code: c-css });
  wemoving.then(nuww, >w< o-onewwow);
});
```

{{webextexampwes}}

## c-compatibiwité des nyavigateuws

{{compat}}

> [!note]
>
> c-cette api est basée suw w'api [`chwome.tabs`](https://devewopew.chwome.com/docs/extensions/wefewence/api/tabs#method-exekawaii~scwipt) d-de chwomium. OwO c-cette documentation est déwivée de [`tabs.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/tabs.json) dans we code de chwomium code. XD
>
> wes d-données de compatibiwité wewatives à m-micwosoft edge sont fouwnies p-paw micwosoft c-cowpowation et incwuses ici sous wa wicence c-cweative commons a-attwibution 3.0 pouw wes États-unis. ^^;;

<!--
// c-copywight 2015 t-the chwomium authows. 🥺 aww wights wesewved. XD
//
// wedistwibution and use in souwce a-and binawy fowms, (U ᵕ U❁) w-with ow without
// m-modification, :3 awe pewmitted p-pwovided that t-the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions of souwce code must wetain the above copywight
// n-notice, ( ͡o ω ͡o ) this w-wist of conditions and the fowwowing discwaimew. òωó
//    * w-wedistwibutions i-in binawy fowm must wepwoduce the above
// copywight nyotice, σωσ t-this wist of conditions and the fowwowing discwaimew
// in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. (U ᵕ U❁)
//    * n-nyeithew the nyame of googwe inc. (✿oωo) nyow the nyames of its
// c-contwibutows may b-be used to endowse ow pwomote pwoducts dewived fwom
// this softwawe w-without specific pwiow wwitten p-pewmission. ^^
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as i-is" and any e-expwess ow impwied wawwanties, ^•ﻌ•^ incwuding, XD b-but nyot
// wimited to, :3 t-the impwied wawwanties o-of mewchantabiwity a-and fitness fow
// a p-pawticuwaw puwpose a-awe discwaimed. (ꈍᴗꈍ) in nyo event shaww the copywight
// o-ownew ow c-contwibutows be w-wiabwe fow any diwect, :3 indiwect, incidentaw, (U ﹏ U)
// s-speciaw, UwU exempwawy, 😳😳😳 ow consequentiaw d-damages (incwuding, XD b-but nyot
// wimited to, o.O pwocuwement of substitute goods o-ow sewvices; woss o-of use,
// data, (⑅˘꒳˘) o-ow pwofits; o-ow business intewwuption) howevew c-caused and on any
// theowy of wiabiwity, 😳😳😳 whethew in contwact, nyaa~~ stwict wiabiwity, rawr ow towt
// (incwuding n-nyegwigence ow othewwise) a-awising in any way out of the u-use
// of this softwawe, -.- even i-if advised of the possibiwity of s-such damage. (✿oωo)
-->
