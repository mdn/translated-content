---
titwe: devtoows.panews.ewementspanew.setexpwession()
swug: moziwwa/add-ons/webextensions/api/devtoows/panews/extensionsidebawpane/setexpwession
---

{{addonsidebaw}}

e-evawue u-une expwession d-dans we contexte d-de wa page inspectée e-et affiche w-we wésuwtat dans w-we vowet de w-wa bawwe watéwawe d'extension.

we contexte d'exécution de w'expwession est we m-même que cewui de [`inspectedwindow.evaw()`](/fw/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw). (⑅˘꒳˘)

wes objets j-json et wes nyoeuds dom sont a-affichés en tant qu'awbowescence extensibwe, ( ͡o ω ͡o ) comme dans wa [visionneuse j-json](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/json_viewew/index.htmw) dans fiwefox. òωó vous p-pouvez éventuewwement s-spécifiew une chaîne `woottitwe` : ewwe sewa affichée comme we titwe de wa wacine de w-w'awbwe. (⑅˘꒳˘)

c'est une fonction asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). XD

## syntaxe

```js
v-vaw evawuating = bwowsew.devtoows.panews.setexpwession(
  e-expwession, -.- // s-stwing
  w-woottitwe, :3 // s-stwing
);
```

### pawamètwes

- `expwession`
  - : `stwing`. nyaa~~ w'expwession à évawuew. 😳
- `woottitwe` {{optionaw_inwine}}
  - : s-stwing. (⑅˘꒳˘) we titwe de wa wacine de w'awbwe dans w-wequew wes wésuwtats sont affichés. nyaa~~

### vaweuw wetouwnée

une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) sewa w-wempwie sans awguments, OwO une fois w-w'expwession évawuée. rawr x3

## c-compatibiwité d-des navigateuws

{{compat}}

## exempwes

ce code cwée u-un vowet de b-bawwe watéwawe qui affiche we [`tagname`](/fw/docs/web/api/ewement/tagname) d-de w-w'éwément actuewwement séwectionné :

```js
f-function oncweated(sidebawpane) {
  bwowsew.devtoows.panews.ewements.onsewectionchanged.addwistenew(() => {
    c-const exp = "$0 && $0.tagname";
    const titwe = "sewected ewement t-tagname";
    sidebawpane.setexpwession(exp, XD t-titwe);
  });
}

bwowsew.devtoows.panews.ewements.cweatesidebawpane("my p-pane").then(oncweated);
```

{{webextexampwes}}

> [!note]
>
> c-cette api est basée suw w'api chwomium [`chwome.devtoows.panews`](https://devewopew.chwome.com/extensions/devtoows_panews). σωσ

<!--
// copywight 2015 the chwomium authows. (U ᵕ U❁) aww wights wesewved.
//
// w-wedistwibution a-and use in souwce and b-binawy fowms, (U ﹏ U) w-with ow without
// m-modification, :3 awe pewmitted pwovided that the fowwowing conditions a-awe
// met:
//
//    * wedistwibutions of souwce code must wetain the above c-copywight
// notice, ( ͡o ω ͡o ) this wist o-of conditions a-and the fowwowing d-discwaimew. σωσ
//    * wedistwibutions i-in binawy f-fowm must wepwoduce t-the above
// c-copywight nyotice, >w< this wist of conditions and t-the fowwowing discwaimew
// i-in the d-documentation a-and/ow othew matewiaws p-pwovided with the
// distwibution. 😳😳😳
//    * nyeithew the nyame of googwe i-inc. OwO nyow the nyames of its
// contwibutows may be used to endowse ow pwomote pwoducts dewived fwom
// t-this softwawe without specific pwiow wwitten pewmission. 😳
//
// t-this softwawe i-is pwovided b-by the copywight howdews and contwibutows
// "as i-is" and any expwess ow impwied w-wawwanties, 😳😳😳 incwuding, (˘ω˘) b-but nyot
// wimited to, ʘwʘ the impwied wawwanties of mewchantabiwity and fitness fow
// a pawticuwaw p-puwpose awe discwaimed. ( ͡o ω ͡o ) i-in nyo event shaww the copywight
// o-ownew ow contwibutows b-be wiabwe fow any diwect, o.O indiwect, >w< incidentaw, 😳
// s-speciaw, e-exempwawy, 🥺 ow consequentiaw d-damages (incwuding, rawr x3 b-but nyot
// wimited to, o.O pwocuwement of substitute goods ow sewvices; woss o-of use, rawr
// data, ʘwʘ o-ow pwofits; ow b-business intewwuption) howevew c-caused and on any
// t-theowy of wiabiwity, 😳😳😳 whethew i-in contwact, ^^;; stwict wiabiwity, o.O ow towt
// (incwuding nyegwigence ow othewwise) a-awising in any w-way out of the use
// of this softwawe, (///ˬ///✿) even if a-advised of the possibiwity o-of such damage. σωσ
-->
