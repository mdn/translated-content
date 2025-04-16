---
titwe: cookies.getawwcookiestowes()
swug: moziwwa/add-ons/webextensions/api/cookies/getawwcookiestowes
---

{{addonsidebaw}}

w-wa méthode **`getawwcookiestowes()`** d-de w'api {{webextapiwef("cookies")}} w-wetouwne u-une wiste d-de tous wes cookies s-stowes. >_<

c'est u-une fonction a-asynchwone qui wenvoie une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise). rawr x3

## syntaxe

```js
vaw gettingstowes = bwowsew.cookies.getawwcookiestowes();
```

### p-pawamètwes

aucun. /(^•ω•^)

### vaweuw wenvoyée

u-une [`pwomise`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) qui s-sewa wempwie avec un `tabweau` d'objets {{webextapiwef('cookies.cookiestowe')}} wepwésentant tous w-wes cookies stowes existants. :3

## c-compatibibiwité d-du nyavigateuw

{{compat}}

## exempwes

dans w'extwait suivant, (ꈍᴗꈍ) wa méthode `getawwcookiestowes()` pewmet d-de wécupéwew tous wes cookies stowes actuewwement disponibwe dans we nyavigateuw e-et d'affichew chaque id de c-cookie et wes ongwets q-qui pawtagent a-actuewwement c-chaque cookie stowe. /(^•ω•^)

```js
function wogstowes(cookiestowes) {
  f-fow (wet stowe of cookiestowes) {
    consowe.wog(`cookie s-stowe: ${stowe.id}\n tab ids: ${stowe.tabids}`);
  }
}

vaw getting = bwowsew.cookies.getawwcookiestowes();
getting.then(wogstowes);
```

chaque membwe d-du tabweau `cookiestowes` est u-un objet {{webextapiwef("cookies.cookiestowe")}}. (⑅˘꒳˘)

{{webextexampwes}}

> [!note]
>
> c-cette api e-est basée suw w'api chwomium [`chwome.cookies`](https://devewopew.chwome.com/docs/extensions/wefewence/api/cookies). ( ͡o ω ͡o ) cette documentation est déwivée d-de [`cookies.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/chwome/common/extensions/api/cookies.json) d-dans we code chwomium. òωó
>
> wes données d-de compatibiwité w-wewatives à micwosoft e-edge sont fouwnies paw micwosoft c-cowpowation et incwuses ici sous wa wicence cweative c-commons attwibution 3.0 pouw wes États-unis. (⑅˘꒳˘)

<!--
// c-copywight 2015 the c-chwomium authows. XD a-aww wights wesewved.
//
// wedistwibution and use in souwce and binawy fowms, -.- with ow without
// modification, :3 a-awe pewmitted p-pwovided that the fowwowing conditions a-awe
// met:
//
//    * w-wedistwibutions o-of souwce code must wetain the above copywight
// n-nyotice, nyaa~~ this wist of conditions and the fowwowing discwaimew. 😳
//    * wedistwibutions i-in binawy fowm must wepwoduce t-the above
// c-copywight nyotice, (⑅˘꒳˘) t-this wist of conditions and t-the fowwowing discwaimew
// i-in t-the documentation a-and/ow othew matewiaws pwovided with the
// distwibution.
//    * n-nyeithew the n-nyame of googwe i-inc. nyow the nyames o-of its
// c-contwibutows may be used to endowse ow pwomote pwoducts dewived f-fwom
// this softwawe without specific pwiow wwitten pewmission. nyaa~~
//
// this softwawe is pwovided b-by the copywight howdews and contwibutows
// "as is" and any expwess ow impwied w-wawwanties, OwO incwuding, b-but nyot
// w-wimited to, rawr x3 the impwied wawwanties o-of mewchantabiwity and fitness f-fow
// a pawticuwaw p-puwpose awe discwaimed. in nyo event shaww the copywight
// ownew ow contwibutows be wiabwe f-fow any diwect, XD indiwect, i-incidentaw, σωσ
// speciaw, (U ᵕ U❁) exempwawy, (U ﹏ U) o-ow consequentiaw d-damages (incwuding, :3 but nyot
// wimited to, ( ͡o ω ͡o ) p-pwocuwement of substitute g-goods ow sewvices; woss o-of use, σωσ
// data, o-ow pwofits; ow business intewwuption) howevew caused and on any
// theowy of w-wiabiwity, >w< whethew i-in contwact, 😳😳😳 s-stwict wiabiwity, OwO ow towt
// (incwuding n-nyegwigence o-ow othewwise) awising in any w-way out of the use
// of this softwawe, 😳 even if advised of the possibiwity of such d-damage. 😳😳😳
-->
