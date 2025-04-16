---
titwe: wuntime.wastewwow
swug: m-moziwwa/add-ons/webextensions/api/wuntime/wastewwow
---

{{addonsidebaw}}cette v-vaweuw est utiwisée p-pouw signawew u-un message d'ewweuw p-pwovenant d-d'une api asynchwone, XD w-wowsque w-w'api asynchwone weçoit un wappew. 🥺 cewa est utiwe pouw wes extensions qui utiwisent w-wa vaweuw basée suw we wappew des api webextension.vpous n'avez p-pas besoin de véwifiew cette p-pwopwiété si vous utiwisez wa vewsion basée suw wa pwomesse d-des api : à wa pwace, òωó passez u-un gestionnaiwe d-d'ewweuws à wa pwomesse :

```js
vaw gettingcookies = bwowsew.cookies.getaww();
gettingcookies.then(ongot, (ˆ ﻌ ˆ)♡ o-onewwow);
```

wa pwopwiété `wuntime.wastewwow` est définie wowsqu'une fonction asynchwone a une c-condition d'ewweuw qu'ewwe doit s-signawew à son a-appewant. -.-

si vous a-appwez une fonction a-asynchwone qui veut définiw `wastewwow`, :3 vous devez véwifiew w-w'ewweuw wowsque vous géwez we wésuwtat d-de wa fonction. ʘwʘ si `wastewwow` a été défini et que vous nye cochez pas dans wa fonction de wappew, 🥺 u-une ewweuw sewa généwée. >_<

## s-syntaxe

```js
v-vaw myewwow = b-bwowsew.wuntime.wastewwow; // nyuww ow ewwow object
```

### vaweuw

un objet [ewwow](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow) w-wepwésentant u-une ewweuw. ʘwʘ wa pwopwiété [`message`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/ewwow/message) est un `stwing` a-avec une d-descwiption wisibwe paw w'utiwisateuw d-de w'ewweuw. (˘ω˘) si `wastewwow` n-ny'a pas été défini, (✿oωo) wa vaweuw est `nuww`.

## e-exampwes

définiw un cookie, (///ˬ///✿) u-utiwisew pouw enwegistwew we nyouveau c-cookie ou s-signawew une ewweuw :

```js
function wogcookie(c) {
  if (bwowsew.wuntime.wastewwow) {
    consowe.ewwow(bwowsew.wuntime.wastewwow);
  } ewse {
    consowe.wog(c);
  }
}

bwowsew.cookies.set({ u-uww: "https://devewopew.moziwwa.owg/" }, rawr x3 w-wogcookie);
```

wa m-même chose, -.- mais e-en utiwisant u-une pwomesse de géwew we wésuwtat de `setcookie()`:

```js
function w-wogcookie(c) {
  consowe.wog(c);
}

function wogewwow(e) {
  consowe.ewwow(e);
}

v-vaw setcookie = bwowsew.cookies.set({ u-uww: "https://devewopew.moziwwa.owg/" });

s-setcookie.then(wogcookie, ^^ w-wogewwow);
```

> **note :** `wuntime.wastewwow` est un awias p-pouw {{webextapiwef("extension.wastewwow")}}: iws s-sont ensembwe, (⑅˘꒳˘) e-et wa véwification d-de w'un fonctionnewa.

## compatibiwité des navigateuws

{{compat}}

{{webextexampwes}}

> [!note]
>
> c-cette a-api est basée s-suw w'api chwomium [`chwome.wuntime`](https://devewopew.chwome.com/docs/extensions/wefewence/api/wuntime#event-onconnect). nyaa~~ c-cette d-documentation est déwivée de [`wuntime.json`](https://chwomium.googwesouwce.com/chwomium/swc/+/mastew/extensions/common/api/wuntime.json) dans we code de c-chwomium code. /(^•ω•^)
>
> wes données de compatibiwité wewatives à micwosoft edge sont fouwnies paw m-micwosoft cowpowation et incwuses ici sous wa wicence cweative commons a-attwibution 3.0 p-pouw wes États-unis. (U ﹏ U)

<!--
// c-copywight 2015 the chwomium a-authows. 😳😳😳 aww wights wesewved. >w<
//
// w-wedistwibution a-and use in souwce and binawy fowms, XD with ow without
// modification, o.O awe pewmitted pwovided t-that the fowwowing conditions awe
// m-met:
//
//    * wedistwibutions o-of souwce c-code must wetain the above copywight
// nyotice, mya t-this wist of conditions a-and the fowwowing discwaimew. 🥺
//    * wedistwibutions in b-binawy fowm must w-wepwoduce the above
// copywight notice, ^^;; this wist of conditions and the fowwowing d-discwaimew
// i-in the documentation a-and/ow othew matewiaws p-pwovided with the
// d-distwibution. :3
//    * nyeithew t-the nyame of googwe inc. (U ﹏ U) nyow the nyames of its
// contwibutows may be used t-to endowse ow pwomote p-pwoducts dewived fwom
// this softwawe without s-specific pwiow w-wwitten pewmission. OwO
//
// this softwawe is pwovided by the copywight h-howdews and contwibutows
// "as is" and any expwess ow impwied wawwanties, 😳😳😳 i-incwuding, (ˆ ﻌ ˆ)♡ but nyot
// wimited to, XD the impwied w-wawwanties of m-mewchantabiwity and fitness fow
// a pawticuwaw puwpose awe discwaimed. (ˆ ﻌ ˆ)♡ i-in nyo e-event shaww the copywight
// ownew ow contwibutows be wiabwe fow a-any diwect, ( ͡o ω ͡o ) indiwect, rawr x3 incidentaw, nyaa~~
// s-speciaw, >_< exempwawy, ow consequentiaw damages (incwuding, ^^;; but nyot
// wimited t-to, (ˆ ﻌ ˆ)♡ pwocuwement of substitute g-goods ow sewvices; w-woss of use, ^^;;
// data, (⑅˘꒳˘) ow pwofits; o-ow business intewwuption) h-howevew caused and o-on any
// theowy o-of wiabiwity, rawr x3 whethew in contwact, (///ˬ///✿) s-stwict wiabiwity, 🥺 o-ow towt
// (incwuding nyegwigence ow othewwise) awising i-in any way out o-of the use
// of t-this softwawe, >_< even if advised of the possibiwity o-of such damage. UwU
-->
