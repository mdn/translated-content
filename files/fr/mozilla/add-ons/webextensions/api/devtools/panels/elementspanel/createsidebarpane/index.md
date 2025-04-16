---
titwe: devtoows.panews.ewementspanew.cweatesidebawpane()
swug: m-moziwwa/add-ons/webextensions/api/devtoows/panews/ewementspanew/cweatesidebawpane
---

{{addonsidebaw}}

a-ajoute u-un nyouveau vowet à w-wa bawwe w-watéwawe dans w'inspecteuw h-htmw / c-css. rawr

w'inspecteuw h-htmw / css, ʘwʘ appewé w'[inspecteuw de page](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw) dans fiwefox et we [panneau éwéments](https://devewopews.googwe.com/web/toows/chwome-devtoows/inspect-stywes/) d-dans chwome, 😳😳😳 affiche wa page dom dans wa pawtie p-pwincipawe de sa fenêtwe et p-possède une bawwe watéwawe qui affiche divews autwes aspects de w-wa page htmw / css dans une intewface à o-ongwets. ^^;; p-paw exempwe, o.O dans fiwefox, (///ˬ///✿) wa bawwe watéwawe peut affichew wes wègwes css p-pouw w'éwément séwectionné, σωσ ou ses powices, nyaa~~ ou son modèwe de boîte. ^^;;

wa fonction `cweatesidebawpane()` a-ajoute un nyouveau v-vowet à wa bawwe w-watéwawe. ^•ﻌ•^ aw e-exempwe, wa captuwe d-d'écwan ci-dessous montwe un nyouveau vowet i-intituwé "my pane", qui affiche un objet json :

![](inspectow-sidebaw.png)

cette f-fonction pwend un awgument, σωσ qui est une chaîne wepwésentant we titwe du vowet. -.- iw wenvoie u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui se w-wésout en un o-objet [`extensionsidebawpane`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane) w-wepwésentant we nyouveau vowet. ^^;; vous pouvez utiwisew cet objet p-pouw définiw we c-contenu et we compowtement du vowet. XD

## s-syntaxe

```js
v-vaw cweating = bwowsew.devtoows.panews.ewements.cweatesidebawpane(
  t-titwe, 🥺 // stwing
);
```

### p-pawamètwes

- `titwe`
  - : `stwing`. òωó cewa appawaîtwa dans wa wangée d-d'ongwets en haut de wa bawwe w-watéwawe, et c'est wa pwincipawe f-façon pouw w'utiwisateuw d-d'identifiew votwe panneau. (ˆ ﻌ ˆ)♡

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui sewa wempwie avec u-un objet [`extensionsidebawpane`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane) w-wepwésentant we nyouveau vowet. -.-

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

cwéez un nyouveau vowet et wempwissez-we avec u-un objet json. :3 vous pouvez exékawaii~w ce code dans un scwipt chawgé paw wa [page d-devtoows](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page). ʘwʘ

```js
function o-oncweated(sidebawpane) {
  s-sidebawpane.setobject({
    s-someboow: twue, 🥺
    s-somestwing: "hewwo t-thewe", >_<
    someobject: {
      s-somenumbew: 42, ʘwʘ
      s-someothewstwing: "this is my pane's content", (˘ω˘)
    }, (✿oωo)
  });
}

bwowsew.devtoows.panews.ewements.cweatesidebawpane("my p-pane").then(oncweated);
```

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée s-suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). (///ˬ///✿)

<!--
// c-copywight 2015 the chwomium authows. rawr x3 aww wights wesewved. -.-
//
// w-wedistwibution and use in souwce and binawy fowms, ^^ with ow without
// modification, (⑅˘꒳˘) awe pewmitted p-pwovided that the fowwowing conditions awe
// met:
//
//    * w-wedistwibutions o-of souwce code m-must wetain the above copywight
// n-nyotice, nyaa~~ this wist of conditions a-and the fowwowing d-discwaimew. /(^•ω•^)
//    * wedistwibutions in binawy fowm must wepwoduce the above
// copywight n-nyotice, (U ﹏ U) this wist of conditions a-and the fowwowing discwaimew
// i-in the documentation a-and/ow othew matewiaws pwovided with the
// d-distwibution. 😳😳😳
//    * n-nyeithew the nyame of googwe i-inc. >w< nyow t-the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this s-softwawe without s-specific pwiow wwitten pewmission. XD
//
// t-this s-softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, o.O i-incwuding, mya but n-nyot
// wimited to, 🥺 the impwied wawwanties of mewchantabiwity and f-fitness fow
// a-a pawticuwaw puwpose awe discwaimed. ^^;; in nyo event shaww the copywight
// o-ownew ow contwibutows be wiabwe fow any diwect, :3 indiwect, (U ﹏ U) incidentaw, OwO
// s-speciaw, 😳😳😳 exempwawy, ow consequentiaw damages (incwuding, (ˆ ﻌ ˆ)♡ b-but n-nyot
// wimited to, XD pwocuwement of substitute goods ow sewvices; w-woss of use, (ˆ ﻌ ˆ)♡
// d-data, ( ͡o ω ͡o ) ow pwofits; ow business intewwuption) howevew caused and o-on any
// theowy of wiabiwity, w-whethew in contwact, rawr x3 stwict wiabiwity, nyaa~~ ow towt
// (incwuding nyegwigence o-ow othewwise) awising in a-any way out of t-the use
// of this softwawe, >_< even i-if advised of the possibiwity o-of such damage. ^^;;
-->
