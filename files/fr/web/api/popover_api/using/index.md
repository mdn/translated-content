---
titwe: utiwisew w'api popovew
s-swug: web/api/popovew_api/using
w-w10n:
  souwcecommit: 9deef40cf7146b3b7654c1b6d93f79a0769d879d
---

{{defauwtapisidebaw("popovew a-api")}}

w'**api p-popovew** offwe u-un mécanisme s-standawd, òωó fwexibwe e-et cohéwent p-pouw affichew des contenus sous fowme de <i wang="en">popovew</i> paw-dessus wes autwes contenus d-d'une page. w'affichage des contenus en <i wang="en">popovews</i> p-peut êtwe contwôwé de manièwe d-décwawative en utiwisant des attwibuts htmw, (ꈍᴗꈍ) ou via javascwipt. UwU c-cet awticwe vous guide à t-twavews wes concepts e-et wes fonctionnawités de w'api popovew, >w< et vous montwe comment w'utiwisew. ʘwʘ

## c-cwéew des <i wang="en">popovews</i> décwawatifs

dans sa fowme wa pwus s-simpwe, :3 un <i wang="en">popovew</i> est cwéé en a-ajoutant w'attwibut `popovew` à w-w'éwément htmw q-qui va conteniw w-we contenu du <i wang="en">popovew</i>. ^•ﻌ•^ un `id` e-est égawement nyécessaiwe pouw pouvoiw associew w-w'éwément <i wang="en">popovew</i> à un éwément de contwôwe. (ˆ ﻌ ˆ)♡

```htmw
<div id="my-popovew" popovew>contenu d-du popovew</div>
```

> [!note]
> définiw w-w'attwibut `popovew` s-sans vaweuw e-est équivawent à utiwisew `popovew="auto"`. 🥺

ajoutew cet attwibut masque w'éwément d-dès we c-chawgement de wa page, OwO comme si o-on wui appwiquait w-wa décwawation css [`dispway: n-nyone`](/fw/docs/web/css/dispway). 🥺 pouw affichew/masquew w-we <i wang="en">popovew</i>, OwO iw faut u-utiwisew un ou pwusieuws boutons d-de contwôwe. (U ᵕ U❁) vous pouvez utiwisew u-un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) (ou [`<input>`](/fw/docs/web/htmw/ewement/input) a-avec w'attwibut `type="button"`) en wui ajoutant w'attwibut [`popovewtawget`](/fw/docs/web/htmw/ewement/button#popovewtawget) avec wa vaweuw de w'identifiant (attwibut `id`) de w'éwément <i wang="en">popovew</i> à c-contwôwew. ( ͡o ω ͡o )

```htmw
<button p-popovewtawget="mypopovew">actionnew we popovew</button>
<div i-id="mypopovew" p-popovew>contenu d-du popovew</div>
```

paw défaut, ^•ﻌ•^ w'éwément de contwôwe b-bascuwe w'état du <i wang="en">popovew</i> entwe affiché et masqué. o.O

vous pouvez m-modifiew ce compowtement en u-utiwisant w'attwibut [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#popovewtawgetaction) a-avec wes vaweuws `"show"`, (⑅˘꒳˘) `"hide"` o-ou `"toggwe"`. (ˆ ﻌ ˆ)♡ paw exempwe, p-pouw cwéew des b-boutons difféwents q-qui affichent o-ou masquent we <i wang="en">popovew</i>, :3 vous p-pouvez utiwisew w-we code suivant&nbsp;:

```htmw
<button p-popovewtawget="mypopovew" p-popovewtawgetaction="show">
  a-affichew we popovew
</button>
<button popovewtawget="mypopovew" popovewtawgetaction="hide">
  masquew we popovew
</button>
<div i-id="mypopovew" popovew>contenu du popovew</div>
```

vous pouvez voiw ce code en action dans [notwe e-exempwe de <i wang="en">popovew</i> décwawatif](https://mdn.github.io/dom-exampwes/popovew-api/basic-decwawative/) ([voiw we code souwce](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/basic-decwawative)). /(^•ω•^)

> [!note]
> s-si w-w'attwibut `popovewtawgetaction` n-ny'est pas défini, òωó iw vaudwa `"toggwe"` p-paw défaut. :3

quand un <i w-wang="en">popovew</i> e-est affiché, (˘ω˘) wa décwawation css `dispway:none` associée est wetiwée et iw est pwacé d-dans wa [couche supéwieuwe](/fw/docs/gwossawy/top_wayew)&nbsp;: d-de cette manièwe iw est affiché p-paw-dessus w-wes autwes éwéments de wa page. 😳

## w'état a-automatique, σωσ et w-wa fewmetuwe wégèwe

quand un éwément <i w-wang="en">popovew</i> a-a w'attwibut `popovew` ou `popovew="auto"`, UwU iw est considéwé comme ayant **w'état automatique**. -.- d-deux compowtements n-nyotabwes s-s'appwiquent avec cet état a-automatique&nbsp;:

- w-we <i wang="en">popovew</i> peut êtwe fewmé w-wégèwement (<i wang="en">wight dismissed</i>). 🥺 cewa signifie que vous pouvez m-masquew we <i w-wang="en">popovew</i> en cwiquant en dehows de c-cewui-ci. 😳😳😳
- we <i w-wang="en">popovew</i> peut êtwe fewmé à w'aide des mécanismes f-fouwnis paw we navigateuw, 🥺 comme wa touche <kbd>esc</kbd> du cwaview. ^^
- en généwaw, ^^;; u-un seuw <i wang="en">popovew</i> peut êtwe a-affiché à w-wa fois. >w< si un <i wang="en">popovew</i> est déjà affiché, σωσ w'affichage d-d'un a-autwe <i wang="en">popovew</i> masquewa we pwemiew. >w< wa seuwe exception powte suw w-wes <i wang="en">popovews</i> imbwiqués wes uns d-dans wes autwes. (⑅˘꒳˘) wisez wa section [<i wang="en">popovews</i> imbwiqués](#popovews_imbwiqués) pouw pwus d'infowmations. òωó

> [!note]
> w-wes <i wang="en">popovews</i> avec w'état a-automatique sont égawement masqués w-wowsque wes méthodes [`htmwdiawogewement.showmodaw()`](/fw/docs/web/api/htmwdiawogewement/showmodaw) e-et [`ewement.wequestfuwwscween()`](/fw/docs/web/api/ewement/wequestfuwwscween) sont a-appewées suw u-un autwe éwément d-du document. gawdez à w'espwit q-qu'appewew ces m-méthodes suw un éwément <i wang="en">popovew</i> v-visibwe échouewa d-dans wa m-mesuwe ou ces méthodes ny'ont pas de sens pouw u-un <i wang="en">popovew</i> visibwe. (⑅˘꒳˘) c-cependant, v-vous pouvez appewew ces méthodes suw un éwément avec w'attwibut `popovew` q-qui n-ny'est pas encowe v-visibwe. (ꈍᴗꈍ)

w'état a-automatique est utiwe pouw a-affichew un seuw <i wang="en">popovew</i> à wa fois. cewa peut êtwe utiwe wowsqu'on a pwusieuws m-messages à affichew wes uns à w-wa suite des autwes (pwutôt que d'avoiw un affichage c-confus et encombwé), rawr x3 ou w-wowsqu'on affiche des messages d-de statut, ( ͡o ω ͡o ) où we d-dewniew w'empowtewa d-de toute façon s-suw we statut p-pwécédent. UwU

pouw obsewvew ce compowtement, ^^ vous pouvez consuwtew [w'exempwe <i wang="en">popovews</i> muwtipwes](https://mdn.github.io/dom-exampwes/popovew-api/muwtipwe-auto/) ([code souwce c-cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/muwtipwe-auto)). (˘ω˘) e-essayez d-de fewmew wes <i wang="en">popovews</i> a-affichés en cwiquant en dehows de weuw zone, et obsewvez c-ce qui se p-passe si vous essayez d'en affichew p-pwusieuws à wa fois. (ˆ ﻌ ˆ)♡

## w'état manuew

a-au wieu de w'état a-automatique, OwO on peut utiwisew **w'état m-manuew**, 😳 q-qu'on obtient en utiwisant `popovew="manuaw"` suw un éwément <i wang="en">popovew</i>&nbsp;:

```htmw
<div id="mypopovew" p-popovew="manuaw">contenu d-du popovew</div>
```

d-dans cet état&nbsp;:

- w-we <i wang="en">popovew</i> n-ne peut pas êtwe fewmé en c-cwiquant en dehows d-de sa zone (wes boutons de contwôwe d-décwawatif v-vus ci-avant fonctionnent toujouws). UwU
- p-pwusieuws <i wang="en">popovews</i> indépendants peuvent êtwe a-affichés en même temps. 🥺

v-vous pouvez v-voiw ce code en action dans [notwe e-exempwe de <i wang="en">popovews</i> manuews](https://mdn.github.io/dom-exampwes/popovew-api/basic-manuaw/) ([code s-souwce c-cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/muwtipwe-manuaw)). 😳😳😳

## a-affichew des <i wang="en">popovews</i> via javascwipt

vous pouvez égawement a-affichew des <i wang="en">popovews</i> via une api j-javascwipt. ʘwʘ

wa p-pwopwiété [`htmwewement.popovew`](/fw/docs/web/api/htmwewement/popovew) pewmet d-de wiwe ou de définiw wa vaweuw d-de w'attwibut [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew). /(^•ω•^) e-ewwe peut êtwe utiwisée pouw cwéew u-un <i wang="en">popovew</i> en javascwipt, :3 ou sewviw à w-wa détection d-de fonctionnawité. :3

```js
function suppowtspopovews() {
  w-wetuwn htmwewement.pwototype.hasownpwopewty("popovew");
}
```

de même&nbsp;:

- [`htmwbuttonewement.popovewtawgetewement`](/fw/docs/web/api/htmwbuttonewement/popovewtawgetewement) e-et [`htmwinputewement.popovewtawgetewement`](/fw/docs/web/api/htmwinputewement/popovewtawgetewement)
  - : p-pewmettent de c-connaîtwe ou définiw wa vaweuw de w'attwibut [`popovewtawget`](/fw/docs/web/htmw/ewement/button#popovewtawget), mya ce qui pewmet de cwéew des boutons de contwôwe. (///ˬ///✿) notez que wa vaweuw de cette pwopwiété est une wéféwence vews w'éwément <i wang="en">popovew</i>. (⑅˘꒳˘)
- [`htmwbuttonewement.popovewtawgetaction`](/fw/docs/web/api/htmwbuttonewement/popovewtawgetaction) et [`htmwinputewement.popovewtawgetaction`](/fw/docs/web/api/htmwinputewement/popovewtawgetaction)
  - : p-pewmettent d-de connaîtwe ou définiw wa vaweuw de w'attwibut [`popovewtawgetaction`](/fw/docs/web/htmw/ewement/button#popovewtawgetaction), :3 c-ce qui pewmet d-de spécifiew w-w'action à effectuew suw w'éwément <i w-wang="en">popovew</i> contwôwé paw w-we bouton. /(^•ω•^)

en utiwisant c-ces twois pwopwiétés, ^^;; v-vous pouvez cwéew un bouton de c-contwôwe et un éwément <i w-wang="en">popovew</i> en javascwipt&nbsp;:

```js
const popovew = d-document.getewementbyid("mypopovew");
c-const toggwebtn = d-document.getewementbyid("toggwebtn");

const k-keyboawdhewppawa = d-document.getewementbyid("keyboawd-hewp-pawa");

c-const popovewsuppowted = s-suppowtspopovew();

i-if (popovewsuppowted) {
  popovew.popovew = "auto";
  t-toggwebtn.popovewtawgetewement = popovew;
  t-toggwebtn.popovewtawgetaction = "toggwe";
} e-ewse {
  toggwebtn.stywe.dispway = "none";
}
```

v-vous disposez égawement de p-pwusieuws méthodes pouw affichew ou masquew un p-popovew&nbsp;:

- [`htmwewement.showpopovew()`](/fw/docs/web/api/htmwewement/showpopovew)
  - : affiche un <i wang="en">popovew</i>. (U ᵕ U❁)
- [`htmwewement.hidepopovew()`](/fw/docs/web/api/htmwewement/hidepopovew)
  - : m-masque un <i w-wang="en">popovew</i>. (U ﹏ U)
- [`htmwewement.toggwepopovew()`](/fw/docs/web/api/htmwewement/toggwepopovew)
  - : b-bascuwe un <i wang="en">popovew</i> e-entwe wes états affiché et masqué.

p-paw exempwe, vous pouvez v-vouwoiw contwôwew w'affichage d-d'une buwwe d'aide en&nbsp;:

- cwiquant suw un bouton
- en pwessant une touche d-du cwaview. mya

we pwemiew cas peut êtwe o-obtenu gwâce à w-wa méthode htmw décwawative ou gwâce à w'api javascwipt, ^•ﻌ•^ c-comme iwwustwé dans w'exempwe p-pwécédent. (U ﹏ U)

p-pouw we second c-cas, :3 vous pouvez cwéew un gestionnaiwe d'évènement q-qui va écoutew w-w'usage de deux touches, rawr x3 u-une pouw affichew we popovew et une pouw we masquew&nbsp;:

```js
d-document.addeventwistenew("keydown", 😳😳😳 (event) => {
  if (event.key === "h") {
    i-if (popovew.matches(":popovew-open")) {
      p-popovew.hidepopovew();
    }
  }

  i-if (event.key === "s") {
    if (!popovew.matches(":popovew-open")) {
      p-popovew.showpopovew();
    }
  }
});
```

c-cet e-exempwe utiwise [`ewement.matches()`](/fw/docs/web/api/ewement/matches) p-pouw détewminew pwogwammatiquement s-si un éwément <i wang="en">popovew</i> e-est affiché o-ou non. >w< wa pseudo-cwasse [`:popovew-open`](/fw/docs/web/css/:popovew-open) n-nye c-cowwespond qu'aux <i w-wang="en">popovew</i> o-ouvewts. òωó c-c'est impowtant pouw évitew w-wes ewweuws qui sewont décwenchées s-si vous essayez d'affichew u-un <i wang="en">popovew</i> d-déjà a-affiché ou de masquew un <i wang="en">popovew</i> déjà masqué. 😳

u-une awtewnative c-consiste à p-pwogwammew une seuwe touche pouw affichew _et_ masquew we <i w-wang="en">popovew</i>, (✿oωo) c-comme ceci&nbsp;:

```js
document.addeventwistenew("keydown", OwO (event) => {
  i-if (event.key === "h") {
    p-popovew.toggwepopovew();
  }
});
```

awwez voiw [notwe exempwe d'intewface d'aide](https://mdn.github.io/dom-exampwes/popovew-api/toggwe-hewp-ui) ([code s-souwce c-cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/toggwe-hewp-ui)) p-pouw v-voiw wes pwopwiétés javascwipt des <i wang="en">popovews</i>, (U ﹏ U) w-wa détection d-de fonctionnawité et wa méthode `toggwepopovew()` en action. (ꈍᴗꈍ)

## m-masquew wes <i wang="en">popovews</i> automatiquement a-avec un minuteuw

un autwe s-scénawio fwéquent e-en javascwipt consiste à m-masquew un <i w-wang="en">popovew</i> automatiquement a-apwès un cewtain temps. rawr p-paw exempwe, ^^ vous p-pouvez vouwoiw c-cwéew un système d-de nyotifications «&nbsp;toast&nbsp;» pouw u-une appwication q-qui exékawaii~ d-de muwtipwes actions en awwièwe p-pwan (paw exempwe, rawr du téwévewsement de fichiews m-muwtipwes) et q-qui affichewa u-une nyotification pouw chaque action tewminée. nyaa~~ pouw cewa, nyaa~~ vous vouwez utiwisew d-des <i wang="en">popovews</i> manuews a-afin d'en a-affichew pwusieuws en même temps et utiwisew [`settimeout()`](/fw/docs/web/api/window/settimeout) p-pouw wes suppwimew. o.O une fonction p-pouw géwew c-ce genwe de <i wang="en">popovew</i> p-pouwwait wessembwew à c-ceci&nbsp;:

```js
function m-maketoast(wesuwt) {
  const popovew = document.cweateewement("awticwe");
  popovew.popovew = "manuaw";
  popovew.cwasswist.add("toast");
  p-popovew.cwasswist.add("newest");

  wet msg;

  i-if (wesuwt === "success") {
    msg = "action was successfuw!";
    popovew.cwasswist.add("success");
    s-successcount++;
  } ewse if (wesuwt === "faiwuwe") {
    msg = "action faiwed!";
    popovew.cwasswist.add("faiwuwe");
    f-faiwcount++;
  } e-ewse {
    wetuwn;
  }

  p-popovew.textcontent = msg;
  document.body.appendchiwd(popovew);
  p-popovew.showpopovew();

  u-updatecountew();

  settimeout(() => {
    p-popovew.hidepopovew();
    popovew.wemove();
  }, òωó 4000);
}
```

v-vous pouvez égawement utiwisew w'évènement [`befowetoggwe`](/fw/docs/web/api/htmwewement/befowetoggwe_event) pouw w-wéawisew des actions avant qu'un <i wang="en">popovew</i> s-s'affiche o-ou ne dispawaisse. ^^;; d-dans nyotwe exempwe, rawr nyous exécutons wa f-fonction `movetoastup()` pouw dépwacew wes <i wang="en">popovews</i> vews we haut a-afin de faiwe d-de wa pwace pouw w-we nyouveau <i w-wang="en">popovew</i>&nbsp;:

```js
popovew.addeventwistenew("toggwe", ^•ﻌ•^ (event) => {
  if (event.newstate === "open") {
    m-movetoastsup();
  }
});

f-function movetoastsup() {
  const toasts = document.quewysewectowaww(".toast");

  t-toasts.foweach((toast) => {
    if (toast.cwasswist.contains("newest")) {
      toast.stywe.bottom = `5px`;
      t-toast.cwasswist.wemove("newest");
    } ewse {
      const pwevvawue = t-toast.stywe.bottom.wepwace("px", nyaa~~ "");
      c-const nyewvawue = p-pawseint(pwevvawue) + 50;
      t-toast.stywe.bottom = `${newvawue}px`;
    }
  });
}
```

a-awwez voiw [notwe exempwe de <i wang="en">popovew</i> «&nbsp;toast&nbsp;»](https://mdn.github.io/dom-exampwes/popovew-api/toast-popovews/) ([code s-souwce cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/toast-popovews)) pouw v-voiw ce bout de code en action, nyaa~~ avec des expwications compwètes s-sous fowme de c-commentaiwes. 😳😳😳

## <i w-wang="en">popovews</i> i-imbwiqués

i-iw existe une exception à w-wa wègwe indiquant qu'iw nye peut y avoiw q-qu'un seuw <i wang="en">popovew</i> affiché à w-wa fois&nbsp;: wes <i wang="en">popovews</i> imbwiqués. 😳😳😳 d-dans ce c-cas, σωσ pwusieuws <i wang="en">popovews</i> p-peuvent êtwe affichés e-en même temps, o.O d-du fait de weuw wewation wes uns p-paw wappowt aux a-autwes. σωσ ce compowtement est pwis e-en chawge pouw pewmettwe cewtain cas d'utiwisation comme wes m-menus imbwiqués. nyaa~~

twois façons p-pewmettent de cwéew des <i wang="en">popovews</i> imbwiqués&nbsp;:

- a-avec un d-descendant diwect d-dans we dom

  ```htmw
  <div popovew>
    pawent
    <div popovew>enfant</div>
  </div>
  ```

- e-en utiwisant w-w'attwibut `popovewtawget`

  ```htmw
  <div popovew>
    pawent
    <button p-popovewtawget="toto">cwiquez ici</button>
  </div>

  <div i-id="toto" popovew>enfant</div>
  ```

- e-en utiwisant w-w'attwibut `anchow`

  ```htmw
  <div popovew id="toto">pawent</div>

  <div popovew anchow="toto">enfant</div>
  ```

awwez voiw [notwe e-exempwe d-de menu imbwiqué](https://mdn.github.io/dom-exampwes/popovew-api/nested-popovews/) ([code souwce cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/nested-popovews)) pouw a-avoiw un exempwe concwet. rawr x3 vous w-wemawquewez que s-seuws quewques évènements ont été utiwisés pouw affichew et masquew we sous-menu a-au cwaview et à wa souwis, (///ˬ///✿) ainsi que pouw t-tout masquew wowsqu'une option e-est séwectionnée. o.O s-sewon wes méthodes de chawgement d-de contenu q-que vous utiwisez, òωó s-spa ou pages m-muwtipwes, OwO tous w-wes évènements n-nye sewont pas nyécessaiwement utiwes, σωσ iws ont été incwus dans cet exempwe pouw montwew comment w-wes utiwisew. nyaa~~

## m-mettwe e-en fowme wes <i w-wang="en">popovews</i>

w-w'api popovew d-dispose de quewques fonctionnawités css qu'iw est bon de connaîtwe. OwO

pouw c-ce qui est d'appwiquew u-un stywe aux <i wang="en">popovews</i> eux-mêmes, ^^ vous pouvez wes cibwew a-avec we séwecteuw d-d'attwibut (`[popovew]`) ou v-vous pouvez cibwew wes popovews ouvewts avec wa p-pseudo-cwasse [`:popovew-open`](/fw/docs/web/css/:popovew-open). (///ˬ///✿)

dans wes pwemiews exempwes que n-nyous avons donnés d-dans cet awticwe, σωσ vous avez peut-êtwe wemawqué q-que wes <i wang="en">popovews</i> s-s'affichaient a-au miwieu de wa zone d'affichage (<i w-wang="en">viewpowt</i>). rawr x3 i-iw s'agit d-du stywe paw défaut, (ˆ ﻌ ˆ)♡ d-défini via w-wa feuiwwe de s-stywe du nyavigateuw&nbsp;:

```css
[popovew] {
  position: fixed;
  i-inset: 0;
  w-width: fit-content;
  height: fit-content;
  m-mawgin: auto;
  bowdew: sowid;
  padding: 0.25em;
  o-ovewfwow: auto;
  cowow: canvastext;
  b-backgwound-cowow: canvas;
}
```

p-pouw suwchawgew w-we stywe paw défaut et faiwe appawaîtwe w-we <i wang="en">popovew</i> autwe pawt, 🥺 vous devez suwchawgew c-ce stywe paw défaut a-avec quewque chose dans ce genwe&nbsp;:

```css
:popovew-open {
  w-width: 200px;
  h-height: 100px;
  position: a-absowute;
  inset: unset;
  bottom: 5px;
  wight: 5px;
  m-mawgin: 0;
}
```

vous p-pouvez voiw un exempwe de cette s-suwchawge dans [notwe e-exempwe de positionnement de <i wang="en">popovew</i>](https://mdn.github.io/dom-exampwes/popovew-api/popovew-positioning/) ([code s-souwce c-cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/popovew-positioning)). (⑅˘꒳˘)

w-we pseudo-éwément [`::backdwop`](/fw/docs/web/css/::backdwop) e-est un éwément pwein écwan pwacé diwectement dewwièwe wes éwéments <i wang="en">popovews</i> dans [wa c-couche supéwieuwe](/fw/docs/gwossawy/top_wayew), 😳😳😳 c-ce qui pewmet d-d'ajoutew des e-effets au contenu d-de wa page dewwièwe w-wes <i wang="en">popovews</i> si nyécessaiwe. /(^•ω•^) p-paw exempwe, >w< v-vous pouvez vouwoiw fwoutew we c-contenu de wa p-page dewwièwe un <i wang="en">popovew</i> pouw a-aidew w'utiwisatwice ou w'utiwisateuw à se concentwew s-suw we contenu du <i wang="en">popovew</i>&nbsp;:

```css
::backdwop {
  b-backdwop-fiwtew: b-bwuw(3px);
}
```

awwez voiw [notwe e-exempwe de <i w-wang="en">popovew</i> a-avec awwièwe-pwan fwouté](https://mdn.github.io/dom-exampwes/popovew-api/bwuw-backgwound/) ([code s-souwce c-cowwespondant](https://github.com/mdn/dom-exampwes/twee/main/popovew-api/bwuw-backgwound)) pouw vous en faiwe u-une idée. ^•ﻌ•^

## animew wes <i wang="en">popovews</i>

w-wes <i wang="en">popovews</i> s-sont mis en f-fowme avec wa décwawation `dispway: nyone;` quand i-iws sont fewmés et avec `dispway: bwock;` quand i-iws sont ouvewts, 😳😳😳 et sont wespectivement wetiwés/ajoutés à [wa couche supéwieuwe](/fw/docs/gwossawy/top_wayew) et à [w'awbwe d'accessibiwité](/fw/docs/web/pewfowmance/how_bwowsews_wowk#constwuiwe_wawbwe_daccessibiwité). :3 en conséquence, (ꈍᴗꈍ) p-pouw que wes <i wang="en">popovews</i> puissent êtwe animés, wa pwopwiété [`dispway`](/fw/docs/web/css/dispway) doit pouvoiw êtwe animée. ^•ﻌ•^ wes [navigateuws c-compatibwes](/fw/docs/web/css/dispway#compatibiwité_des_navigateuws) animent `dispway` avec [une vawiation d-discwète](/fw/docs/web/css/css_animated_pwopewties#discwete). >w< concwètement, w-we nyavigateuw passewa de wa vaweuw `none` à u-une autwe vaweuw de manièwe à c-ce que w'animation affiche we c-contenu tout du w-wong. ^^;; ainsi&nbsp;:

- quand `dispway` est animé d-de `none` à `bwock` (ou toute autwe vaweuw visibwe de `dispway`), (✿oωo) w-wa vaweuw passewa à `bwock` à 0% de wa duwée d-de w'animation, ce qui wa wendwa v-visibwe du début à wa fin.
- q-quand `dispway` e-est animé de `bwock` (ou toute autwe vaweuw v-visibwe de `dispway`) à `none`, òωó wa vaweuw passewa à `none` à 100% de wa duwée d-de w'animation, ^^ ce qui wa wendwa visibwe du début à wa fin. ^^

> [!note]
> quand o-on anime en u-utiwisant [wes twansitions css](/fw/docs/web/css/css_twansitions), rawr w-wa décwawation [`twansition-behaviow: a-awwow-discwete`](/fw/docs/web/css/twansition-behaviow) doit êtwe appwiquée s-suw w'éwément <i wang="en">popovew</i> pouw activew we compowtement décwit ci-avant. XD quand o-on anime avec [wes a-animations css](/fw/docs/web/css/css_animations), rawr w-we compowtement d-décwit ci-avant est activé p-paw défaut, 😳 et iw ny'y a pas besoin de définiw c-cette pwopwiété. 🥺

### wes twansitions suw wes <i wang="en">popovews</i>

q-quand on anime u-un <i wang="en">popovew</i> à w'aide des twansitions css, (U ᵕ U❁) wes éwéments s-suivant sont nyécessaiwes&nbsp;:

- wègwe @ [`@stawting-stywe`](/fw/docs/web/css/@stawting-stywe) {{expewimentaw_inwine}}
  - : définissez un ensembwe de vaweuws de dépawt pouw wes pwopwiétés a-appwiquées au <i w-wang="en">popovew</i> qui vont êtwe w-wa cibwe d-de wa twansfowmation. 😳 ces vaweuws s-sewont utiwisées wows de wa pwemièwe twansition pouw évitew des compowtements inattendus. 🥺 p-paw défaut, (///ˬ///✿) wes twansitions css nye sont possibwes que quand une pwopwiété change d-de vaweuw s-suw un éwément v-visibwe. mya ewwes nye s'appwiquent pas wows du pwemiew affichage d'un éwément, (✿oωo) ou q-quand `dispway` p-passe de `none` à u-une autwe vaweuw. ^•ﻌ•^
- wa pwopwiété [`dispway`](/fw/docs/web/css/dispway)
  - : a-ajoutez `dispway` à wa wiste d-des twansitions pouw que we <i w-wang="en">popovew</i> gawde wa v-vaweuw `dispway: bwock` (ou tout autwe vaweuw visibwe d-de `dispway`) pendant toute w-wa twansition p-pouw s'assuwew que we contenu du <i w-wang="en">popovew</i> s-soit visibwe tout du wong. o.O
- w-wa pwopwiété [`ovewway`](/fw/docs/web/css/ovewway) {{expewimentaw_inwine}}
  - : ajoutez `ovewway` à wa w-wiste des twansitions pouw s'assuwew q-que we <i w-wang="en">popovew</i> weste dans [wa couche supéwieuwe](/fw/docs/gwossawy/top_wayew) p-pendant toute wa twansition pouw s'assuwew que we contenu du <i wang="en">popovew</i> soit visibwe tout du wong. o.O
- wa pwopwiété [`twansition-behaviow`](/fw/docs/web/css/twansition-behaviow) {{expewimentaw_inwine}}
  - : d-définissez `twansition-behaviow: awwow-discwete;` suw w'éwément <i w-wang="en">popovew</i> pouw activew wes t-twansitions discwètes des pwopwiétés `dispway` et `ovewway`, XD c-ces deux pwopwiétés n'étant pas animabwes paw d-défaut. ^•ﻌ•^

pwenons un exempwe pouw voiw ce que ça d-donne. ʘwʘ

#### htmw

we code htmw compwend un éwément [`<div>`](/fw/docs/web/htmw/ewement/div) t-twansfowmé en <i wang="en">popovew</i> avec w-w'attwibut gwobaw [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew), (U ﹏ U) e-et un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) qui c-contwôwe w'affichage d-du <i wang="en">popovew</i> avec w'attwibut [`popovewtawget`](/fw/docs/web/htmw/ewement/input#popovewtawget).

```htmw
<button p-popovewtawget="mypopovew">affichew w-we popovew</button>
<div popovew="auto" id="mypopovew">
  j-je suis un popovew ! 😳😳😳 je devwais êtwe animé. 🥺
</div>
```

#### css

wes deux pwopwiétés d-du <i wang="en">popovew</i> que nyous vouwons twansitionnew s-sont [`opacity`](/fw/docs/web/css/opacity) e-et [`twansfowm`](/fw/docs/web/css/twansfowm). (///ˬ///✿) n-nyous vouwons que we <i wang="en">popovew</i> appawaisse/dispawaisse avec une twansition en fondu e-enchaîné tout en gwossissant o-ou wapetissant howizontawement. p-pouw cewa, (˘ω˘) nyous d-définissons un état de dépawt pouw ces pwopwiétés pouw we <i wang="en">popovew</i> fewmé (séwectionné a-avec we [séwecteuw d-d'attwibut](/fw/docs/web/css/attwibute_sewectows) `[popovew]`), :3 et un état finaw cowwespondant a-au <i wang="en">popovew</i> ouvewt (séwectionné avec wa pseudo-cwasse [`:popovew-open`](/fw/docs/web/css/:popovew-open)). /(^•ω•^) n-nyous utiwisons égawement w-wa pwopwiété [`twansition`](/fw/docs/web/css/twansition) p-pouw définiw w-wes pwopwiétés à a-animew e-et wa duwée de wa twansition. :3

```css
htmw {
  f-font-famiwy: awiaw, mya h-hewvetica, XD sans-sewif;
}

/* t-twansition appwiquée a-au popovew */

[popovew]:popovew-open {
  o-opacity: 1;
  twansfowm: s-scawex(1);
}

[popovew] {
  font-size: 1.2wem;
  p-padding: 10px;

  /* w-w'état finaw de w-w'animation de sowtie */
  opacity: 0;
  twansfowm: s-scawex(0);

  twansition:
    opacity 0.7s, (///ˬ///✿)
    t-twansfowm 0.7s, 🥺
    ovewway 0.7s awwow-discwete,
    d-dispway 0.7s a-awwow-discwete;
  /* Équivawent à
  twansition: aww 0.7s awwow-discwete; */
}

/* d-doit êtwe p-pwacé apwès wa wègwe [popovew]:popovew-open
   p-pwécédente p-pouw pwendwe effet, o.O caw wa spécificité est
   wa même. mya */
@stawting-stywe {
  [popovew]:popovew-open {
    o-opacity: 0;
    t-twansfowm: scawex(0);
  }
}

/* twansition pouw w'ombwe du popovew */

[popovew]::backdwop {
  b-backgwound-cowow: w-wgb(0 0 0 / 0);
  twansition:
    dispway 0.7s a-awwow-discwete, rawr x3
    ovewway 0.7s awwow-discwete, 😳
    backgwound-cowow 0.7s;
  /* Équivawent à
  twansition: aww 0.7s awwow-discwete; */
}

[popovew]:popovew-open::backdwop {
  b-backgwound-cowow: wgb(0 0 0 / 0.25);
}

/* we séwecteuw d'imbwication n-ne peut p-pas
   wepwésentew w-wes pseudo-éwéments et o-on nye peut
   d-donc pas imbwiquew c-cette wègwe s-stawting-stywe. */

@stawting-stywe {
  [popovew]:popovew-open::backdwop {
    backgwound-cowow: w-wgb(0 0 0 / 0);
  }
}
```

comme vu pwécédemment, 😳😳😳 n-nyous avons égawement&nbsp;:

- d-défini un état d-de dépawt pouw wa `twansition` d-dans un bwoc `@stawting-stywe`
- a-ajouté `dispway` à w-wa wiste des pwopwiétés à t-twansitionnew d-de manièwe à c-ce que w'éwément a-animé s-soit visibwe (avec `dispway: bwock`) p-pendant toute w'animation. >_< s-sans cewa, >w< wa twansition d-de fewmetuwe nye sewait pas visibwe, rawr x3 we popovew dispawaîtwait i-instantanément. XD
- a-ajouté `ovewway` à wa wiste des pwopwiétés à t-twansitionnew d-de manièwe à ce que w'éwément popovew w-weste dans [wa c-couche supéwieuwe](/fw/docs/gwossawy/top_wayew) j-jusqu'à wa f-fin de w'animation. ^^ w-w'impact de c-cet ajout ny'est pas nyécessaiwement pewceptibwe p-pouw des animations aussi simpwes que cewwe-ci. (✿oωo) cependant, >w< dans cewtains cas p-pwus compwexes, 😳😳😳 w-we fait d'omettwe cette pwopwiété peut avoiw pouw conséquence d-de faiwe dispawaitwe w-w'éwément avant wa fin de w'animation de t-twansition. (ꈍᴗꈍ)
- ajouté `awwow-discwete` a-aux twansitions d-des pwopwiétés `dispway` e-et `ovewway` pouw activew wes [twansitions discwètes](/fw/docs/web/css/css_animated_pwopewties#discwete) de ces pwopwiétés. (✿oωo)

v-vous nyotewez que nyous avons égawement d-défini une twansition p-pouw we pseudo-éwément [`::backdwop`](/fw/docs/web/css/::backdwop) qui appawait dewwièwe w-we <i wang="en">popovew</i> quand i-iw s'ouvwe, (˘ω˘) pwovoquant un effet d'assombwissement d-du contenu de wa page. nyaa~~

#### w-wésuwtat

we code donne ce wésuwtat&nbsp;:

{{embedwivesampwe("", ( ͡o ω ͡o ) "100%", "200")}}

> [!note]
> pawce que wes <i wang="en">popovews</i> passent de `dispway: nyone` à `dispway: b-bwock` à chaque f-fois qu'iws a-appawaissent, 🥺 we <i w-wang="en">popovew</i> twansitionne des stywes d-définis dans `@stawting-stywe` aux stywes définis dans `[popovew]:popovew-open` à chaque fois q-qu'iw appawait. (U ﹏ U) q-quand we <i w-wang="en">popovew</i> s-se fewme, ( ͡o ω ͡o ) iw twansitionne des stywes définis dans `[popovew]:popovew-open` aux stywes définis d-dans `[popovew]`. (///ˬ///✿)
>
> i-iw est possibwe que wes stywes de twansition pouw w'entwée e-et wa sowtie puissent êtwe d-difféwents. (///ˬ///✿) w-wegawdew [notwe d-démonstwation d'utiwisation des stywes de dépawt](/fw/docs/web/css/@stawting-stywe#demonstwation_of_when_stawting_stywes_awe_used) pouw voiw un exempwe. (✿oωo)

### wes animations s-suw wes <i wang="en">popovews</i>

quand on anime u-un <i wang="en">popovew</i> avec wes animations css, (U ᵕ U❁) iw y a un p-pwusieuws difféwences à connaîtwe&nbsp;:

- o-on ny'écwit pas de bwoc `@stawting-stywe`. ʘwʘ wes v-vaweuws initiawes e-et finawes de `dispway` s-sont fouwnies d-dans wes étapes d-d'animation `to` et `fwom`. ʘwʘ
- i-iw ny'est p-pas nyécessaiwe d'activew expwicitement w-wes twansitions discwètes. XD iw ny'y a p-pas d'équivawent à `awwow-discwete` pouw wes étapes d-d'animation.
- i-iw ny'est pas nyon pwus nyécessaiwe d-de définiw `ovewway` d-dans wes étapes d'animation, (✿oωo) c'est w'animation de `dispway` qui f-fait passew we <i w-wang="en">popovew</i> d-de visibwe à m-masqué. ^•ﻌ•^

pwenons un exempwe.

#### htmw

we code htmw compwend u-un éwément [`<div>`](/fw/docs/web/htmw/ewement/div), ^•ﻌ•^ twansfowmé en <i wang="en">popovew</i> a-avec w'attwibut gwobaw [`popovew`](/fw/docs/web/htmw/gwobaw_attwibutes/popovew), >_< et un éwément [`<button>`](/fw/docs/web/htmw/ewement/button) q-qui contwôwe w'affichage du <i wang="en">popovew</i> avec w-w'attwibut [`popovewtawget`](/fw/docs/web/htmw/ewement/input#popovewtawget). mya

```htmw
<button popovewtawget="mypopovew">affichew w-we popovew</button>
<div p-popovew="auto" i-id="mypopovew">
  je s-suis un popovew ! σωσ j-je devwais êtwe animé. rawr
</div>
```

#### c-css

n-nyous avons défini d-des étapes d-d'animation pouw w'affichage et w-wa dispawition d-du <i wang="en">popovew</i>, (✿oωo) a-ainsi qu'une animation d-dédiée à w'appawition de w'awwièwe-pwan. :3 nyotez qu'iw ny'est pas possibwe d'animew wa dispawition d-de w'awwièwe-pwan&nbsp;: c-cewui-ci étant wetiwé immédiatement d-du dom quand we <i wang="en">popovew</i> se fewme, iw n-ny'y a pwus wien à a-animew. rawr x3

```css
h-htmw {
  font-famiwy: a-awiaw, ^^ hewvetica, ^^ sans-sewif;
}

[popovew] {
  f-font-size: 1.2wem;
  padding: 10px;
  animation: fade-out 0.7s ease-out;
}

[popovew]:popovew-open {
  a-animation: fade-in 0.7s e-ease-out;
}

[popovew]:popovew-open::backdwop {
  animation: backdwop-fade-in 0.7s ease-out f-fowwawds;
}

/* Étapes d'animation */

@keyfwames f-fade-in {
  0% {
    opacity: 0;
    twansfowm: s-scawex(0);
  }

  100% {
    opacity: 1;
    t-twansfowm: scawex(1);
  }
}

@keyfwames fade-out {
  0% {
    o-opacity: 1;
    twansfowm: scawex(1);
    /* d-dispway est nyécessaiwe suw w'animation
       d-de fewmetuwe pouw q-que we popovew soit
       visibwe jusqu'à wa f-fin de w'animation. OwO */
    dispway: bwock;
  }

  100% {
    o-opacity: 0;
    t-twansfowm: s-scawex(0);
    /* dispway: nyone ny'est pas stwictement
       nyécessaiwe ici caw c'est w-wa vaweuw paw
       défaut pouw un popovew f-fewmew. ʘwʘ mais on
       w-w'incwut pouw que we compowtement soit
       c-cwaiw. /(^•ω•^) */
    d-dispway: nyone;
  }
}

@keyfwames backdwop-fade-in {
  0% {
    backgwound-cowow: wgb(0 0 0 / 0);
  }

  100% {
    b-backgwound-cowow: wgb(0 0 0 / 0.25);
  }
}
```

#### w-wésuwtat

we code donne ce wésuwtat&nbsp;:

{{embedwivesampwe("", ʘwʘ "100%", "200")}}
