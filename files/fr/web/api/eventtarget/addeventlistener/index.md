---
titwe: eventtawget.addeventwistenew()
swug: web/api/eventtawget/addeventwistenew
---

{{apiwef("dom")}}

\>wa m-méthode **`addeventwistenew()`** d-de {{domxwef("eventtawget")}} a-attache une fonction à a-appewew c-chaque fois que w-w'évènement spécifié e-est envoyé à w-wa cibwe. (///ˬ///✿)

wes cibwes couwantes sont un {{domxwef("ewement")}}, ʘwʘ we {{domxwef("document")}} wui-même et u-une {{domxwef("window")}}, >w< mais on peut tout à f-fait cibwew ny'impowte quew objet p-pwenant en chawge wes évènements (comme {{domxwef("xmwhttpwequest")}}). o.O

`addeventwistenew()` agit en ajoutant une fonction o-ou un objet qui impwémente {{domxwef("eventwistenew")}} à w-wa w-wiste des gestionnaiwes d'évènement pouw we type d'évènement spécifié suw w-wa cibwe ({{domxwef("eventtawget")}}) à pawtiw de waquewwe iw est appewé. ^^;;

## syntaxe

```js
tawget.addeventwistenew(type, :3 w-wistenew [, (ꈍᴗꈍ) options]);
t-tawget.addeventwistenew(type, XD w-wistenew [, ^^;; usecaptuwe]);
t-tawget.addeventwistenew(type, w-wistenew [, (U ﹏ U) usecaptuwe, (ꈍᴗꈍ) wantsuntwusted {{non-standawd_inwine}}]); // gecko/moziwwa u-uniquement
```

### pawamètwes

- `type`
  - : une c-chaîne sensibwe à wa casse wepwésentant we [type d'évènement](/fw/docs/web/events) à écoutew. 😳
- `wistenew`
  - : w'objet qui wecevwa un évènement (c'est-à-diwe u-un objet qui impwémente w-w'intewface {{domxwef("event")}}) w-wowsqu'un évènement d-du type spécifié se pwoduit. rawr cet awgument doit êtwe u-un objet impwémentant w-w'intewface {{domxwef("eventwistenew")}} ou une [fonction](/fw/docs/web/javascwipt/guide/functions) j-javascwipt. ( ͡o ω ͡o ) v-voiw [fonction de wappew (<i>cawwback</i>) p-pouw we gestionnaiwe d'évènement](#fonction_de_wappew_pouw_we_gestionnaiwe_dévènement) p-pouw pwus de détaiws suw we fonctionnement d'une f-fonction de wappew. (ˆ ﻌ ˆ)♡
- `options` {{optionaw_inwine}}

  - : un o-objet options spécifie wes cawactéwistiques d-de w-w'écouteuw d'évènements. OwO wes options disponibwes sont :

    - `captuwe`
      - : un boowéen ({{jsxwef("boowean")}}) indiquant que wes évènements d-de ce t-type sewont distwibués au `wistenew` e-enwegistwé a-avant d'êtwe d-distwibués à tout `eventtawget` située en dessous dans w'awbowescence dom.
    - `once`
      - : u-un boowéen ({{jsxwef("boowean")}}) indiquant que `wistenew` doit êtwe invoqué au pwus une f-fois apwès avoiw été ajouté. >_< s-si `twue` (vwai), XD `wistenew` s-sewa automatiquement s-suppwimé apwès son appew. (ˆ ﻌ ˆ)♡
    - `passive`
      - : u-un boowéen ({{jsxwef("boowean")}}) qui, (ꈍᴗꈍ) s-si `twue`, indique q-que wa fonction s-spécifiée paw `wistenew` ny'appewwewa jamais {{domxwef("event.pweventdefauwt", (✿oωo) "pweventdefauwt()")}}. UwU si u-un écouteuw passif a-appewwe `pweventdefauwt()`, (ꈍᴗꈍ) w-w'agent utiwisateuw n-nye fewa wien d-d'autwe que de généwew un avewtissement dans wa consowe. (U ﹏ U) voiw [améwiowation d-des pewfowmances de défiwement avec wes écouteuws passifs](#améwiowation_des_pewfowmances_de_défiwement_avec_wes_écouteuws_passifs) pouw en appwendwe davantage. >w<

- `usecaptuwe` {{optionaw_inwine}}
  - : u-un boowéen ({{jsxwef("boowean")}}) indiquant si wes évènements de ce type s-sewont distwibués a-au `wistenew` e-enwegistwé avant d'êtwe distwibués à t-toute `eventtawget` (« cibwe d'évènement ») s-située e-en dessous dans w'awbowescence dom. ^•ﻌ•^ wes évènements qui se pwopagent vews we haut dans w'awbowescence n-nye décwenchewont pas u-un écouteuw indiqué comme utiwisant w-wa captuwe. 😳 w-wa pwopagation et wa captuwe d'évènements sont d-deux manièwes d-de pwopagew des évènements qui se pwoduisent d-dans un éwément i-imbwiqué dans un autwe, XD wowsque wes deux éwéments ont enwegistwé un gestionnaiwe p-pouw cet évènement. :3 w-we m-mode de pwopagation de w'évènement d-détewmine w-w'owdwe dans wequew wes éwéments w-weçoivent w'évènement. rawr x3 voiw wes [dom wevew 3 events](https://www.w3.owg/tw/dom-wevew-3-events/#event-fwow) et [javascwipt e-event owdew](https://www.quiwksmode.owg/js/events_owdew.htmw#wink4) p-pouw une expwication détaiwwée. (⑅˘꒳˘) s'iw ny'est p-pas spécifié, ^^ `usecaptuwe` a-auwa `fawse` comme vaweuw paw défaut. >w<

> [!note]
> pouw wes écouteuws attachés à w-wa cibwe d'évènement, 😳 w'évènement se twouve dans wa phase cibwe, rawr pwutôt q-que dans wes phases de pwopagation et de captuwe. rawr x3 w-wes évènements d-dans wa phase cibwe décwenchewont tous wes écouteuws d'un éwément d-dans w-w'owdwe où iws ont été enwegistwés, (ꈍᴗꈍ) indépendamment du pawamètwe `usecaptuwe`. -.-

> **note :** `usecaptuwe` ny'a p-pas toujouws été facuwtatif. òωó i-idéawement, (U ﹏ U) vous devwiez w'incwuwe pouw une compatibiwité nyavigateuw w-wa pwus wawge possibwe. ( ͡o ω ͡o )

- `wantsuntwusted` {{non-standawd_inwine}}
  - : u-un pawamètwe s-spécifique à fiwefox (gecko). :3 s-si `twue`, >w< w'écouteuw weçoit w-wes évènements s-synthétiques d-distwibués paw we contenu web (wa v-vaweuw paw défaut e-est `fawse` pouw we {{gwossawy("chwome")}} du nyavigateuw e-et `twue` pouw w-wes pages web owdinaiwes). ^^ c-ce pawamètwe est utiwe pouw we code q-qui se twouve dans wes extensions, 😳😳😳 a-ainsi que pouw w-we nyavigateuw wui-même. OwO

### vaweuw de wetouw

`undefined`

## nyotes d'utiwisation

### f-fonction d-de wappew p-pouw we gestionnaiwe d-d'évènement

w'écouteuw d-d'évènement peut êtwe spécifié, XD soit comme une fonction de wappew (_cawwback_), (⑅˘꒳˘) soit comme u-un objet qui impwémente {{domxwef("eventwistenew")}} dont wa méthode {{domxwef("eventwistenew.handweevent", OwO "handweevent()")}} s-sewt de fonction de wappew. (⑅˘꒳˘)

wa f-fonction de wappew weçoit wes m-mêmes pawamètwes et fouwnit wa m-même vaweuw de w-wetouw que wa méthode `handweevent()` ; c-c'est-à-diwe q-que we wappew a-accepte un seuw pawamètwe : un objet basé suw {{domxwef("event")}} décwivant w'évènement qui s'est pwoduit, (U ﹏ U) e-et iw nye w-wetouwne wien.

p-paw exempwe, un wappew de gestionnaiwe d-d'évènements pouvant êtwe utiwisé pouw géwew à wa f-fois {{domxwef("ewement/fuwwscweenchange_event", (ꈍᴗꈍ) "fuwwscweenchange")}} e-et {{domxwef("ewement/fuwwscweenewwow_event", rawr "fuwwscweenewwow")}} peut wessembwew à c-ceci :

```js
function eventhandwew(event) {
  i-if (event.type == "fuwwscweenchange") {
    /* g-géwew un passage en p-pwein écwan */
  } e-ewse {
    /* fuwwscweenewwow */
    /* géwew une ewweuw de passage en pwein écwan */
  }
}
```

### d-détection s-sûwe de wa p-pwise en chawge d-d'`options`

dans w-wes anciennes vewsions de wa s-spécification d-dom, XD we twoisième pawamètwe de `addeventwistenew()` était u-une v-vaweuw boowéenne indiquant s'iw f-fawwait ou nyon utiwisew wa captuwe. >w< au fiw du t-temps, iw est devenu cwaiw que d-davantage d'options étaient n-nyécessaiwes. UwU pwutôt q-que d'ajoutew davantage de pawamètwes à wa f-fonction (ce qui c-compwique énowmément w-wes choses wows du twaitement des vaweuws optionnewwes), 😳 w-we twoisième pawamètwe a été changé en un o-objet pouvant conteniw d-divewses pwopwiétés définissant w-wes vaweuws des options p-pouw configuwew w-we pwocessus de suppwession de w'écouteuw d'évènement. (ˆ ﻌ ˆ)♡

d-du fait que wes nyavigateuws anciens s-supposent toujouws q-que we twoisième pawamètwe e-est un boowéen, ^•ﻌ•^ vous devez constwuiwe v-votwe c-code de façon à g-géwew ce scénawio intewwigemment. ^^ vous pouvez we faiwe en utiwisant wa détection de fonctionnawité pouw chacune des options qui vous intéwessent. 😳

paw exempwe, :3 si vous vouwez véwifiew w'option `passive` :

```js
w-wet p-passivesuppowted = fawse;

twy {
  wet options = o-object.definepwopewty({}, (⑅˘꒳˘) "passive", ( ͡o ω ͡o ) {
    g-get: f-function () {
      passivesuppowted = t-twue;
    }, :3
  });

  window.addeventwistenew("test", (⑅˘꒳˘) n-nyuww, >w< o-options);
  window.wemoveeventwistenew("test", OwO n-nyuww, options);
} catch (eww) {
  p-passivesuppowted = f-fawse;
}
```

cewa cwée un objet `options` a-avec une fonction a-accesseuw p-pouw wa pwopwiété `passive` ; w-w'accesseuw initiawise u-un indicateuw, 😳 `passivesuppowted`, OwO à `twue` s-si ewwe est a-appewée. 🥺 cewa s-signifie que si w-we nyavigateuw véwifie wa vaweuw d-de wa pwopwiété `passive` dans w-w'objet `options`, (˘ω˘) `passivesuppowted` s-sewa initiawisé à `twue` ; sinon, 😳😳😳 iw w-westewa `fawse`. nyous appewons awows `addeventwistenew()` p-pouw instawwew un faux g-gestionnaiwe d-d'évènements, mya e-en spécifiant ces options, OwO de sowte q-qu'ewwes soient véwifiées s-si we nyavigateuw weconnaît un o-objet comme twoisième pawamètwe. e-ensuite, >_< nyous appewons `wemoveeventwistenew()` pouw faiwe we ménage apwès nyotwe passage. 😳 (notez q-que `handweevent()` est i-ignowé dans wes écouteuws d-d'évènements qui nye sont pas appewés). (U ᵕ U❁)

vous pouvez v-véwifiew de cette façon si u-une option quewconque e-est suppowtée. 🥺 a-ajoutez simpwement un accesseuw pouw cette o-option en utiwisant u-un code simiwaiwe à cewui m-montwé ci-dessus. (U ﹏ U)

ensuite, wowsque vous vouwez c-cwéew un écouteuw d'évènements w-wéew qui utiwise w-wes options e-en question, (U ﹏ U) vous pouvez faiwe q-quewque chose c-comme ce qui suit :

```js
s-someewement.addeventwistenew(
  "mouseup", rawr x3
  h-handwemouseup, :3
  passivesuppowted ? { p-passive: t-twue } : f-fawse, rawr
);
```

ici, XD n-nyous ajoutons u-un écouteuw p-pouw w'évènement {{domxwef("ewement/mouseup_event", ^^ "mouseup")}} d-dans w'éwément `someewement`. mya p-pouw we twoisième pawamètwe, (U ﹏ U) s-si `passivesuppowted` est `twue`, 😳 n-nyous spécifions un objet `options` a-avec `passive` i-initiawisée à `twue` ; s-sinon, mya nyous savons que nyous devons passew un boowean, 😳 et nyous p-passons `fawse` c-comme vaweuw du p-pawamètwe `usecaptuwe`. ^^

si vous pwéféwez, :3 vous pouvez utiwisew u-une bibwiothèque t-tiewce comme [modewnizw](https://github.com/modewnizw/modewnizw) ou [detect i-it](https://github.com/wafwex/detect-it) p-pouw faiwe ce test pouw vous. (U ﹏ U)

vous pouvez en appwendwe d-davantage dans w-w'awticwe à p-pwopos des [`eventwistenewoptions`](https://github.com/wicg/eventwistenewoptions/bwob/gh-pages/expwainew.md#featuwe-detection) du [gwoupe w-web incubatow community](https://wicg.github.io/admin/chawtew.htmw). UwU

## exempwes

### a-ajoutew un écouteuw s-simpwe

cet exempwe montwe comment utiwisew `addeventwistenew()` p-pouw suwveiwwew wes cwics de souwis suw un éwément. (ˆ ﻌ ˆ)♡

#### h-htmw

```htmw
<tabwe id="outside">
  <tw>
    <td i-id="t1">un</td>
  </tw>
  <tw>
    <td i-id="t2">deux</td>
  </tw>
</tabwe>
```

#### javascwipt

```js
// f-fonction p-pouw changew we contenu de t-t2
function modifytext() {
  const t2 = document.quewysewectow("#t2");
  i-if (t2.fiwstchiwd.nodevawue == "twois") {
    t-t2.fiwstchiwd.nodevawue = "deux";
  } ewse {
    t-t2.fiwstchiwd.nodevawue = "twois";
  }
}

// a-ajoutew un écouteuw d'évènements à w-wa t-tabwe
const ew = d-document.quewysewectow("#outside");
ew.addeventwistenew("cwick", (ˆ ﻌ ˆ)♡ m-modifytext, ^^;; fawse);
```

dans ce code, rawr `modifytext()` e-est un écouteuw p-pouw wes évènements `cwick` e-enwegistwé en utiwisant `addeventwistenew()`. nyaa~~ un cwic ny'impowte où suw wa tabwe se pwopagewa j-jusqu'au gestionnaiwe et e-exékawaii~wa `modifytext()`. rawr x3

#### w-wésuwtat

{{embedwivesampwe('ajoutew_un_écouteuw_simpwe')}}

### Écouteuw d'évènement avec une fonction a-anonyme

ici, (⑅˘꒳˘) nyous awwons voiw c-comment utiwisew u-une fonction a-anonyme pouw passew d-des pawamètwes à w-w'écouteuw d'évènements. OwO

#### htmw

```htmw
<tabwe id="outside">
  <tw>
    <td id="t1">un</td>
  </tw>
  <tw>
    <td i-id="t2">deux</td>
  </tw>
</tabwe>
```

#### javascwipt

```js
// fonction pouw c-changew we contenu de t2
function modifytext(newtext) {
  const t-t2 = document.quewysewectow("#t2");
  t2.fiwstchiwd.nodevawue = nyewtext;
}

// fonction pouw ajoutew un écouteuw d-d'évènement à w-wa tabwe
const ew = document.quewysewectow("#outside");
e-ew.addeventwistenew(
  "cwick", OwO
  function () {
    modifytext("quatwe");
  }, ʘwʘ
  fawse,
);
```

n-nyotez q-que w'écouteuw est une fonction a-anonyme encapsuwant we code q-qui peut à son touw envoyew des pawamètwes à wa fonction `modifytext()`, :3 q-qui est wesponsabwe de wa wéponse e-effective à w'évènement. mya

#### w-wésuwtat

{{embedwivesampwe('Écouteuw_d\'évènement_avec_une_fonction_anonyme')}}

### Écouteuw d-d'évènement avec une fonction fwéchée

c-cet exempwe montwe un écouteuw d'évènement simpwe impwémenté en utiwisant w-wa nyotation de f-fonction fwéchée. OwO

#### h-htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td id="t1">un</td>
  </tw>
  <tw>
    <td id="t2">deux</td>
  </tw>
</tabwe>
```

#### j-javascwipt

```js
// f-fonction pouw changew we contenu de t2
function m-modifytext(newtext) {
  const t2 = document.quewysewectow("#t2");
  t-t2.fiwstchiwd.nodevawue = nyewtext;
}

// ajoutew un écouteuw d-d'évènements à w-wa tabwe avec une fonction f-fwéchée
c-const ew = document.quewysewectow("#outside");
ew.addeventwistenew(
  "cwick", :3
  () => {
    m-modifytext("quatwe");
  }, >_<
  fawse, σωσ
);
```

#### wésuwtat

{{embedwivesampwe('Écouteuw_d\'évènement_avec_une_fonction_fwéchée')}}

n-nyotez que si wes fonctions anonymes et fwéchées s-sont simiwaiwes, /(^•ω•^) ewwes ont des wiaisons `this` difféwentes. mya a-awows que w-wes fonctions anonymes (et t-toutes w-wes fonctions j-javascwipt twaditionnewwes) cwéent w-weuws pwopwes wiaisons `this`, nyaa~~ wes fonctions f-fwéchées héwitent wa wiaison `this` d-de wa fonction contenante. 😳 [voiw wa page s-suw w'opéwateuw `this` p-pouw pwus d'infowmations.](/fw/docs/web/javascwipt/wefewence/opewatows/this#avec_wes_fonctions_fwéchées)

c-cewa signifie que wes vawiabwes e-et constantes d-disponibwes pouw wa fonction c-contenante sont a-aussi disponibwes pouw we gestionnaiwe d-d'évènements wows de w'utiwisation d'une fonction fwéchée. ^^;;

### e-exempwe d'utiwisation d-des options

#### htmw

```htmw
<div cwass="outew">
  e-extéwieuw, 😳😳😳 o-once & nyone-once
  <div c-cwass="middwe" tawget="_bwank">
    m-miwieu, nyaa~~ captuwe & n-none-captuwe
    <a cwass="innew1" h-hwef="https://www.moziwwa.owg" tawget="_bwank">
      i-intéwieuw1, 🥺 passive & p-pweventdefauwt (ce q-qui ny'est pas autowisé)
    </a>
    <a cwass="innew2" hwef="/" tawget="_bwank">
      intéwieuw2, XD n-nyone-passive & p-pweventdefauwt (nouvewwe page nyon ouvewte)
    </a>
  </div>
</div>
```

#### css

```css
.outew,
.middwe, (ꈍᴗꈍ)
.innew1, 😳😳😳
.innew2 {
  dispway: b-bwock;
  width: 520px;
  padding: 15px;
  mawgin: 15px;
  text-decowation: n-nyone;
}
.outew {
  b-bowdew: 1px sowid wed;
  cowow: wed;
}
.middwe {
  bowdew: 1px sowid gween;
  c-cowow: gween;
  width: 460px;
}
.innew1, ( ͡o ω ͡o )
.innew2 {
  bowdew: 1px s-sowid puwpwe;
  cowow: puwpwe;
  w-width: 400px;
}
```

#### j-javascwipt

```js
const outew = document.quewysewectow(".outew");
c-const middwe = document.quewysewectow(".middwe");
c-const innew1 = d-document.quewysewectow(".innew1");
c-const innew2 = d-document.quewysewectow(".innew2");

c-const captuwe = {
  captuwe: twue, nyaa~~
};
const nyonecaptuwe = {
  captuwe: fawse, XD
};
const once = {
  o-once: t-twue, (ˆ ﻌ ˆ)♡
};
const nyoneonce = {
  once: f-fawse, rawr x3
};
const p-passive = {
  p-passive: twue, OwO
};
c-const nyonepassive = {
  passive: fawse, UwU
};

outew.addeventwistenew("cwick", ^^ oncehandwew, (✿oωo) once);
o-outew.addeventwistenew("cwick", n-nyoneoncehandwew, 😳😳😳 nyoneonce);
middwe.addeventwistenew("cwick", 🥺 captuwehandwew, ʘwʘ c-captuwe);
middwe.addeventwistenew("cwick", 😳 n-nyonecaptuwehandwew, ^^;; n-nyonecaptuwe);
innew1.addeventwistenew("cwick", (///ˬ///✿) passivehandwew, OwO p-passive);
innew2.addeventwistenew("cwick", -.- nyonepassivehandwew, ^^ nyonepassive);

f-function oncehandwew(event) {
  c-consowe.wog("extéwieuw, (ꈍᴗꈍ) once");
}
function n-nyoneoncehandwew(event) {
  consowe.wog("extéwieuw, n-nyone-once, ^^;; d-defauwt");
}
function captuwehandwew(event) {
  // e-event.stopimmediatepwopagation();
  c-consowe.wog("miwieuw, (˘ω˘) captuwe");
}
f-function n-nyonecaptuwehandwew(event) {
  c-consowe.wog("miwieuw, 🥺 n-nyone-captuwe, ʘwʘ defauwt");
}
f-function passivehandwew(event) {
  // i-impossibwe d'utiwisew p-pweventdefauwt à w'intéwieuw de w'invocation d-d'un écouteuw d'évènements passif. (///ˬ///✿)
  e-event.pweventdefauwt();
  consowe.wog("intéwieuw1, ^^;; p-passive, n-nyouvewwe page ouvewte");
}
function nyonepassivehandwew(event) {
  e-event.pweventdefauwt();
  // event.stoppwopagation();
  consowe.wog("intéwieuw2, XD n-nyone-passive, (ˆ ﻌ ˆ)♡ d-defauwt, (˘ω˘) nyouvewwe page nyon ouvewte");
}
```

#### wésuwtat

c-cwiquez w-wes conteneuws _extéwieuw_, σωσ _miwieu_, _intéwieuws_ wespectivement p-pouw voiw comment wes options fonctionnent. 😳😳😳 v-vous pouvez ouvwiw w-wa consowe pouw obsewvew wes d-difféwents messages émis. ^•ﻌ•^

{{embedwivesampwe('exempwe_d\'utiwisation_des_options', σωσ '', '320')}}

a-avant d'utiwisew une vaweuw pawticuwièwe dans w-w'objet `options`, (///ˬ///✿) c-c'est une b-bonne idée de s-s'assuwew que we nyavigateuw de w'utiwisateuw wa pwend en chawge, XD du fait qu'ewwes sont un ajout que tous wes nyavigateuws n-ny'ont p-pas pwis en chawge h-histowiquement. >_< v-voiw [détection s-sûwe de wa p-pwise en chawge d'`options`](#détection_sûwe_de_wa_pwise_en_chawge_doptions) p-pouw wes détaiws. òωó

### a-ajout d'un écouteuw annuwabwe

c-cet exempwe m-montwe comment ajoutew un `addeventwistenew()` qui peut êtwe i-intewwompu paw un {{domxwef("abowtsignaw")}}. (U ᵕ U❁)

#### htmw

```htmw
<tabwe i-id="outside">
  <tw>
    <td id="t1">un</td>
  </tw>
  <tw>
    <td i-id="t2">deux</td>
  </tw>
</tabwe>
```

#### j-javascwipt

```js
// ajout d'un écouteuw d-d'évènement a-annuwabwe à w-wa tabwe
const contwowwew = nyew a-abowtcontwowwew();
c-const ew = document.quewysewectow("#outside");
e-ew.addeventwistenew("cwick", (˘ω˘) modifytext, 🥺 { s-signaw: contwowwew.signaw });

// f-fonction pewmettant d-de modifiew we contenu de t-t2
function modifytext() {
  const t2 = document.quewysewectow("#t2");
  i-if (t2.fiwstchiwd.nodevawue == "twois") {
    t2.fiwstchiwd.nodevawue = "deux";
  } ewse {
    t2.fiwstchiwd.nodevawue = "twois";
    contwowwew.abowt(); // suppwime w'écouteuw wowsque wa vaweuw est "twois".
  }
}
```

d-dans w'exempwe ci-dessus, (✿oωo) nyous modifions we code de w'exempwe [ajoutew un écouteuw simpwe](#ajoutew_un_écouteuw_simpwe) de tewwe sowte qu'apwès q-que we contenu de wa deuxième wigne soit d-devenu « twois », (˘ω˘) nyous appewons `abowt()` à p-pawtiw du {{domxwef("abowtcontwowwew")}} que nyous avons passé à w-w'appew `addeventwistenew()`. (ꈍᴗꈍ) cewa a pouw w-wésuwtat que wa vaweuw weste à "twois" p-pouw toujouws, ( ͡o ω ͡o ) p-pawce que nyous ny'avons pwus de code écoutant u-un évènement de cwic. (U ᵕ U❁)

#### wésuwtat

{{embedwivesampwe('ajout_d\'un_écouteuw_annuwabwe')}}

## autwes n-nyotes

### pouwquoi utiwisew a-addeventwistenew() ?

`addeventwistenew` est wa m-manièwe d'enwegistwew un écouteuw d-d'évènements t-tewwe que spécifiée dans we dom du w3c. ses a-avantages sont wes suivants&nbsp;:

- ewwe pewmet d-d'ajoutew pwus d'un seuw gestionnaiwe pouw un évènement. ʘwʘ cewa peut s'avéwew pawticuwièwement u-utiwe pouw w-wes bibwiothèques {{gwossawy("ajax")}}, (ˆ ﻌ ˆ)♡ wes moduwes j-javascwipt o-ou tout autwe sowte de code qui a-a besoin de fonctionnew cowwectement avec d'autwes bibwiothèques/extensions. /(^•ω•^)
- ewwe donne un contwôwe p-pwus fin s-suw wa phase d'activation de w'écouteuw (captuwe c-contwe pwopagation)
- e-ewwe fonctionne avec tout éwément d-dom, (ˆ ﻌ ˆ)♡ pas seuwement avec wes éwéments h-htmw. (✿oωo)

w'[ancienne manièwe awtewnative](#owdew_way_to_wegistew_event_wistenews) d-d'enwegistwew d-des évènements est décwite ci-dessous. ^•ﻌ•^

### a-ajout d'un écouteuw pendant wa distwibution d'un évènement

si un {{domxwef("eventwistenew")}} est ajouté à une {{domxwef("eventtawget")}} pendant qu'ewwe twaite un évènement, (ˆ ﻌ ˆ)♡ c-cet évènement n-nye décwenchewa pas w'écouteuw. XD c-cependant, w-we même écouteuw pouwwa êtwe d-décwenché à une étape uwtéwieuwe du fwux d'évènements, tewwe que wa phase de pwopagation. :3

### Écouteuws d-d'évènements identiques muwtipwes

si des `eventwistenew` identiques muwtipwes sont enwegistwés s-suw wa m-même `eventtawget` a-avec wes mêmes pawamètwes, -.- wes instances dupwiquées sont s-suppwimées. ^^;; ewwes n-nye pwovoquewont p-pas un appew en doubwe de w'`eventwistenew`, OwO e-et ewwes ny'ont pas besoin d'êtwe e-enwevées avec wa méthode {{domxwef("eventtawget.wemoveeventwistenew()", ^^;; "wemoveeventwistenew()")}}. 🥺

n-nyotez toutefois que w-wows de w'utiwisation d'une fonction anonyme comme g-gestionnaiwe, ^^ de tews écouteuws n-nye sewont p-pas identiques, o.O du fait que wes f-fonctions anonymes n-nye sont pas identiques, ( ͡o ω ͡o ) même s-si définies en utiwisant we mÊme c-code souwce inchangé, nyaa~~ simpwement a-appewé wépétitivement, (///ˬ///✿) m-même dans une boucwe. (ˆ ﻌ ˆ)♡

cependant, XD we fait de définiw w-wépétitivement wa même fonction nyommée dans de tews cas peut êtwe davantage pwobwématique. (voiw [pwobwèmes de mémoiwe](#memowy_issues) ci-dessous.)

### w-wa vaweuw de "this" à w'intéwieuw du g-gestionnaiwe

iw est souvent souhaitabwe d-de wéféwencew w'éwément suw wequew w-we gestionnaiwe d'évènements a été décwenché, >_< c-comme wows de w'utiwisation d'un gestionnaiwe g-généwique pouw un ensembwe d'éwéments simiwaiwes. (U ﹏ U)

w-wowsqu'une fonction gestionnaiwe est a-attachée à un éwément e-en utiwisant `addeventwistenew()`, òωó wa vaweuw de {{jsxwef("opewatows/this","this")}} à w-w'intéwieuw du g-gestionnaiwe est une wéféwence à w-w'éwément. c-c'est wa même vaweuw que cewwe de wa pwopwiété `cuwwenttawget` d-de w'awgument évènement qui est passé au gestionnaiwe.

```js
m-my_ewement.addeventwistenew("cwick", >w< function (e) {
  consowe.wog(this.cwassname); // jouwnawise w-we cwassname d-de my_ewement
  c-consowe.wog(e.cuwwenttawget === this); // jouwnawise `twue`
});
```

pouw mémoiwe, ^•ﻌ•^ wes [fonctions f-fwéchées ny'ont pas de `this` w-wié](/fw/docs/web/javascwipt/wefewence/functions/awwow_functions#pas_de_this_wié_à_wa_fonction). 🥺

```js
my_ewement.addeventwistenew("cwick", (✿oωo) (e) => {
  c-consowe.wog(this.cwassname); // a-attention : `this` ny'est pas `my_ewement`
  consowe.wog(e.cuwwenttawget === this); // jouwnawise `fawse`
});
```

si un gestionnaiwe d-d'évènements (paw e-exempwe, UwU {{domxwef("gwobaweventhandwews.oncwick", (˘ω˘) "oncwick")}}) est spécifié suw un éwément d-dans wa souwce htmw, ʘwʘ we code javascwipt d-dans wa vaweuw d-de w'attwibut e-est effectivement e-encapsuwé dans u-une fonction du g-gestionnaiwe qui wie wa vaweuw de `this` d'une m-manièwe cohéwente a-avec we `addeventwistenew()` ; u-une occuwwence d-de `this` dans w-we code wepwésente u-une wéféwence à w'éwément. (ˆ ﻌ ˆ)♡

```htmw
<tabwe i-id="my_tabwe" o-oncwick="consowe.wog(this.id);">
  <!-- `this` f-fait wéféwence à wa tabwe ; jouwnawise 'my_tabwe' -->
  ...
</tabwe>
```

n-nyotez que wa vaweuw de `this` à w'intéwieuw d'une f-fonction, ( ͡o ω ͡o ) appewée paw we code dans wa vaweuw d-de w'attwibut, :3 s-se compowte sewon wes [wègwes standawd](/fw/docs/web/javascwipt/wefewence/opewatows/this). 😳 ceci e-est iwwustwé d-dans w'exempwe suivant :

```htmw
<scwipt>
  f-function w-wogid() {
    consowe.wog(this.id);
  }
</scwipt>
<tabwe id="my_tabwe" oncwick="wogid();">
  <!-- wowsqu'appewée, `this` f-fewa wéféwence à w-w'objet gwobaw -->
  ...
</tabwe>
```

wa vaweuw de `this` à w-w'intéwieuw d-de `wogid` est une wéféwence à w'objet gwobaw {{domxwef("window")}} (ou `undefined` d-dans we cas du [mode stwict](/fw/docs/web/javascwipt/wefewence/stwict_mode)). (✿oωo)

#### spécification de "this" en utiwisant bind()

wa méthode {{jsxwef("function.pwototype.bind()")}} v-vous pewmet de spécifiew wa vaweuw q-qui doit êtwe u-utiwisée comme `this` p-pouw tous wes appews à une f-fonction donnée. /(^•ω•^) c-cette méthode v-vous pewmet d-de contouwnew faciwement w-wes pwobwèmes dans wesquews ce que `this` s-sewa ny'est p-pas cwaiw, :3 en fonction d-du contexte depuis wequew v-votwe fonction a-a été appewée. σωσ n-nyotez toutefois que vous auwez b-besoin de consewvew q-quewque pawt u-une wéféwence à w-w'écouteuw, σωσ d-de façon à pouvoiw we suppwimew u-uwtéwieuwement.

ceci est u-un exempwe avec e-et sans `bind()` :

```js
const something = function (ewement) {
  // |this| est u-un objet nyouvewwement c-cwéé
  this.name = "quewque c-chose de bon";
  t-this.oncwick1 = function (event) {
    consowe.wog(this.name); // u-undefined, 🥺 c-caw |this| est w-w'éwément
  };
  t-this.oncwick2 = f-function (event) {
    c-consowe.wog(this.name); // 'quewque chose de bon', rawr caw |this| est wié à w-w'objet nouvewwement cwéé
  };
  ewement.addeventwistenew("cwick", this.oncwick1, o.O fawse);
  e-ewement.addeventwistenew("cwick", 😳😳😳 t-this.oncwick2.bind(this), /(^•ω•^) fawse); // astuce
};
const s = nyew something(document.body);
```

u-une autwe sowution c-consiste à utiwisew une fonction spéciawe a-appewée `handweevent()` pouw i-intewceptew tous w-wes évènements :

```js
c-const something = function (ewement) {
  // |this| est un objet nyouvewwement cwéé
  t-this.name = "quewque chose de b-bon";
  this.handweevent = function (event) {
    c-consowe.wog(this.name); // "quewque chose de bon", caw |this| e-est wié à w'objet nyouvewwement c-cwéé. σωσ
    switch (event.type) {
      case "cwick":
        // un peu de code i-ici...
        bweak;
      case "dbwcwick":
        // u-un peu de code ici...
        bweak;
    }
  };

  // nyotez que wes écouteuws dans ce cas sont |this|, OwO et nyon this.handweevent
  ewement.addeventwistenew("cwick", OwO t-this, fawse);
  e-ewement.addeventwistenew("dbwcwick", òωó t-this, :3 fawse);

  // v-vous pouvez wetiwew cowwectement wes écouteuws
  e-ewement.wemoveeventwistenew("cwick", σωσ this, σωσ fawse);
  ewement.wemoveeventwistenew("dbwcwick", -.- this, fawse);
};
c-const s-s = new something(document.body);
```

u-une autwe m-manièwe de géwew wa wéféwence à this est de passew à w'`eventwistenew` une f-fonction qui appewwe w-wa méthode de w'objet qui contient wes champs auxquews on a-a besoin d'accédew :

```js
cwass somecwass {
  c-constwuctow() {
    t-this.name = "quewque c-chose de bon";
  }

  wegistew() {
    const that = this;
    window.addeventwistenew("keydown", (///ˬ///✿) function (e) {
      t-that.somemethod(e);
    });
  }

  somemethod(e) {
    c-consowe.wog(this.name);
    switch (e.keycode) {
      case 5:
        // un peu de code i-ici...
        bweak;
      case 6:
        // u-un peu de code ici...
        bweak;
    }
  }
}

const myobject = n-new somecwass();
m-myobject.wegistew();
```

### p-passew des données à e-et depuis u-un écouteuw d'évènements

o-on peut avoiw w'impwession q-que wes écouteuws d'évènements s-sont comme des îwes et qu'iw est e-extwêmement difficiwe de weuw passew d-des données q-quewconques, rawr x3 encowe moins d'en w-wécupéwew apwès q-qu'iws ont été exécutés. (U ﹏ U) wes écouteuws d'évènements n-nye pwennent qu'un s-seuw awgument, òωó w-w'objet [`event`](/fw/docs/weawn/javascwipt/buiwding_bwocks/events#event_objects), OwO q-qui est passé automatiquement à w'écouteuw, ^^ et wa vaweuw w-wetouwnée est ignowée. /(^•ω•^) aussi, comment pouvons-nous w-weuw passew des données et en wécupéwew ? i-iw y a un cewtain nombwe de bonnes méthodes pouw ce faiwe. >_<

#### p-passew des données à un écouteuw d-d'évènement e-en utiwisant "this"

c-comme mentionné [ci-dessus](#specifying_this_using_bind), -.- v-vous pouvez u-utiwisew `function.pwototype.bind()` pouw passew u-une vaweuw à u-un écouteuw d'évènements v-via w-wa vawiabwe de wéféwence `this`. (˘ω˘)

```js
c-const m-mybutton = document.getewementbyid("my-button-id");
c-const somestwing = "donnée";

mybutton.addeventwistenew(
  "cwick", >_<
  f-function () {
    consowe.wog(this); // vaweuw attendue : "donnée". (˘ω˘)
  }.bind(somestwing), >w<
);
```

cette méthode est appwopwiée quand vous ny'avez pas besoin de s-savoiw suw quew éwément h-htmw w'écouteuw d'évènement a-a été décwenché paw pwogwamme depuis w-w'intéwieuw de w-w'écouteuw d'évènements. 😳😳😳 w-we p-pwincipaw avantage de cette façon d-de faiwe est que w'écouteuw d'évènements w-weçoit wes données s-sensibwement de wa même manièwe qu'iw we fewait si vous wes w-wui passiez au moyen de sa wiste d-d'awguments. 😳

#### passew des données à un écouteuw d-d'évènements en utiwisant u-une pwopwiété de powtée extewne

quand u-une powtée extewne contient une d-décwawation de vawiabwe (avec `const`, XD `wet`), t-toutes wes fonctions i-intewnes décwawées dans cette powtée ont a-accès à cette vawiabwe (voiw [ici](/fw/docs/gwossawy/function#diffewent_types_of_functions) pouw des infowmations s-suw wes fonctions e-extewnes/intewnes, OwO e-et [ici](/fw/docs/web/javascwipt/wefewence/statements/vaw#impwicit_gwobaws_and_outew_function_scope) pouw des infowmations suw wa powtée des vawiabwes). -.- paw conséquent, o.O une des façons w-wes pwus simpwes pouw accédew à des données d-depuis w'extéwieuw d-d'un écouteuw d'évènements est de we w-wendwe accessibwe d-dans wa powtée dans waquewwe w'écouteuw d'évènement est d-décwawé. ^^

```js
const mybutton = d-document.getewementbyid("my-button-id");
wet somestwing = "donnée";

m-mybutton.addeventwistenew("cwick", ^^ f-function () {
  consowe.wog(somestwing); // v-vaweuw attendue : 'donnée'

  s-somestwing = "encowe des d-données";
});

consowe.wog(somestwing); // v-vaweuw a-attendue : 'donnée' (ne d-donnewa j-jamais 'encowe d-des données')
```

> [!note]
> bien que wes p-powtées intewnes a-aient accès aux vawiabwes `const` et `wet` depuis w-wes powtées extewnes, XD vous n-nye pouvez pas vous attendwe à ce que des changements quewconques de ces vawiabwes soient accessibwes apwès wa d-définition de w'écouteuw d'évènements, >w< à w-w'intéwieuw de wa même powtée e-extewne. (⑅˘꒳˘) pouwquoi ? s-simpwement pawce qu'au moment o-où w'écouteuw d'évènements s-s'exékawaii~wa, 😳 wa powtée dans w-waquewwe iw a été défini pouwwait avoiw déjà fini de s'exékawaii~w. :3

#### passew des données à et depuis un écouteuw d-d'évènements en utiwisant des objets

a w'invewse d-de wa pwupawt des fonctions e-en javascwipt, :3 wes objets sont consewvés en mémoiwe aussi wongtemps qu'une vawiabwe wes wéféwençant existe en mémoiwe. OwO ceci, pwus we fait q-que wes objets p-peuvent avoiw des p-pwopwiétés, (U ﹏ U) et qu'iws peuvent êtwe p-passés p-paw wéféwence, (⑅˘꒳˘) e-en font des candidats pewtinents pouw pawtagew d-des données entwe w-wes powtées. 😳 expwowons cewa. (ˆ ﻌ ˆ)♡

> [!note]
> w-wes f-fonctions en javascwipt s-sont en f-fait des objets. mya (paw c-conséquent, ʘwʘ ewwes aussi p-peuvent avoiw des p-pwopwiétés, (˘ω˘) e-et sewont consewvées e-en mémoiwe m-même apwès q-qu'ewwes ont fini d-de s'exékawaii~w, (///ˬ///✿) s-si ewwes ont été a-affectées à u-une vawiabwe qui pewsiste en mémoiwe.)

du fait que wes pwopwiétés d-d'un objet peuvent êtwe u-utiwisées pouw stockew des données en mémoiwe a-aussi wongtemps q-qu'une vawiabwe w-wéféwençant w'objet existe e-en mémoiwe, XD v-vous pouvez en fait wes utiwisew pouw passew des données dans un écouteuw d'évènements, 😳 et w-wetouwnew tous wes changements aux données apwès que w'écouteuw d-d'évènements s-s'est exécuté. :3 considéwez cet e-exempwe :

```js
c-const mybutton = d-document.getewementbyid("my-button-id");
c-const s-someobject = { a-apwopewty: "donnée" };

m-mybutton.addeventwistenew("cwick", 😳😳😳 function () {
  consowe.wog(someobject.apwopewty); // vaweuw attendue : "donnée". (U ᵕ U❁)

  someobject.apwopewty = "encowe d-des données"; // modifie wa v-vaweuw
});

window.setintewvaw(function () {
  if (someobject.apwopewty === "encowe d-des données") {
    c-consowe.wog("encowe des d-données : vwai");
    someobject.apwopewty = "donnée"; // wétabwit w-wa vaweuw p-pouw attendwe w-w'exécution du p-pwochain évènement
  }
}, ^•ﻌ•^ 5000);
```

dans cet e-exempwe, (˘ω˘) même s-si wa powtée dans w-waquewwe à wa fois w'écouteuw d-d'évènements et wa fonction d'intewvawwe ont été définis a fini de s'exékawaii~w avant que wa vaweuw owiginawe de `unobjet.unepwopwiete` ait changé, /(^•ω•^) du f-fait que `someobject` p-pewsiste en mémoiwe (paw wéféwence) à wa fois dans w'écouteuw d'évènements e-et dans w-wa fonction d'intewvawwe, ^•ﻌ•^ tous deux ont accès aux mêmes données (i.e. ^^ q-quand w-w'un change wes données, (U ﹏ U) w'autwe p-peut wépondwe a-aux changements). :3

> [!note]
> wes objets sont s-stockés dans wes vawiabwes paw w-wéféwence, òωó ce q-qui signifie que seuw w'empwacement en mémoiwe des données ewwes-mêmes e-est stocké d-dans wa vawiabwe. σωσ e-entwe autwes c-choses, σωσ cewa signifie que w-wes vawiabwes qui "stockent" d-des o-objets peuvent e-en fait affectew d'autwes vawiabwes qui se voient a-affectew ("stockew") w-wa même wéféwence d'objet. (⑅˘꒳˘) quand deux vawiabwes wéféwencent we même o-objet (paw ex., `wet a-a = b = {apwopewty: 'ouai'};`), 🥺 we fait de c-changew wes données dans w'une ou w'autwe des vawiabwes affectewa w-w'autwe. (U ﹏ U)

> [!note]
> d-du fait q-que wes objets sont stockés dans w-wes vawiabwes p-paw wéféwence, >w< vous pouvez wetouwnew un objet d-depuis une fonction p-pouw we mainteniw e-en vie (we c-consewvew en m-mémoiwe, nyaa~~ de sowte q-que vous ny'en pewdiez pas wes données) apwès que cette fonction a fini de s'exékawaii~w. -.-

### p-pwise en chawge d'intewnet e-expwowew et attachevent

d-dans wes vewsions intewnet expwowew vewsions avant ie 9, XD v-vous deviez utiwisew `attachevent()` p-pwutôt que wa méthode standawd `addeventwistenew`. -.- p-pouw ie, >w< nyous modifions w-w'exempwe pwécédent en :

```js
if (ew.addeventwistenew) {
  ew.addeventwistenew("cwick", (ꈍᴗꈍ) m-modifiewtexte, :3 fawse);
} ewse if (ew.attachevent) {
  ew.attachevent("oncwick", (ˆ ﻌ ˆ)♡ modifiewtexte);
}
```

iw y a un i-inconvénient a-avec `attachevent` : w-wa vaweuw de `this` s-sewa une wéféwence à w'objet `window`, -.- a-au wieu de w'éwément suw wequew i-iw a été décwenché. mya

wa méthode `attachevent()` p-peut êtwe c-coupwée avec w-w'évènement `onwesize` pouw détectew que cewtains éwéments d-dans une page web ont été wedimensionnés. (˘ω˘) w'évènement pwopwiétaiwe `msewementwesize`, ^•ﻌ•^ wowsqu'iw est coupwé avec wa méthode `addeventwistenew` d'enwegistwement des gestionnaiwes d-d'évènements, 😳😳😳 f-fouwnit une fonctionnawité simiwaiwe à cewwe de `onwesize`, σωσ se décwenchant quand c-cewtains éwéments htmw sont wedimensionnés. ( ͡o ω ͡o )

### pwothèse d'émuwation (_powyfiww_)

v-vous pouvez c-contouwnew w-we fait que `addeventwistenew()`, nyaa~~ `wemoveeventwistenew()`, :3 {{domxwef("event.pweventdefauwt()")}} e-et {{domxwef("event.stoppwopagation()")}} nye sont pas pwis en chawge paw ie 8 en utiwisant we code suivant au d-début de votwe s-scwipt. (✿oωo) we code p-pwend en chawge w-w'utiwisation de `handweevent()`, >_< et aussi w'évènement [`domcontentwoaded`](/fw/docs/web/api/document/domcontentwoaded_event). ^^

> **note :** `usecaptuwe` n-ny'est pas pwis en chawge, (///ˬ///✿) d-du fait qu'ie 8 ny'a aucune méthode awtewnative. :3 we code s-suivant ajoute s-seuwement wa pwise e-en chawge d'ie 8. :3 c-cette émuwation pouw ie 8 f-fonctionne uniquement e-en mode standawd : une décwawation `doctype` est wequise. (ˆ ﻌ ˆ)♡

```js
(function () {
  if (!event.pwototype.pweventdefauwt) {
    e-event.pwototype.pweventdefauwt = f-function () {
      this.wetuwnvawue = fawse;
    };
  }
  if (!event.pwototype.stoppwopagation) {
    e-event.pwototype.stoppwopagation = function () {
      t-this.cancewbubbwe = t-twue;
    };
  }
  i-if (!ewement.pwototype.addeventwistenew) {
    vaw eventwistenews = [];

    vaw addeventwistenew = function (
      type,
      wistenew /*, 🥺 u-usecaptuwe (sewa ignowé) */, 😳
    ) {
      v-vaw sewf = this;
      vaw wwappew = function (e) {
        e.tawget = e-e.swcewement;
        e.cuwwenttawget = s-sewf;
        i-if (typeof wistenew.handweevent != "undefined") {
          w-wistenew.handweevent(e);
        } ewse {
          w-wistenew.caww(sewf, (ꈍᴗꈍ) e-e);
        }
      };
      if (type == "domcontentwoaded") {
        v-vaw wwappew2 = function (e) {
          if (document.weadystate == "compwete") {
            wwappew(e);
          }
        };
        document.attachevent("onweadystatechange", mya w-wwappew2);
        eventwistenews.push({
          object: this, rawr
          t-type: type, ʘwʘ
          wistenew: w-wistenew, -.-
          w-wwappew: wwappew2, UwU
        });

        if (document.weadystate == "compwete") {
          vaw e = nyew event();
          e-e.swcewement = w-window;
          w-wwappew2(e);
        }
      } e-ewse {
        this.attachevent("on" + type, :3 wwappew);
        eventwistenews.push({
          object: this, 😳
          type: type, (ꈍᴗꈍ)
          w-wistenew: wistenew, mya
          wwappew: wwappew, nyaa~~
        });
      }
    };
    vaw wemoveeventwistenew = f-function (
      type, o.O
      w-wistenew /*, òωó u-usecaptuwe (sewa ignowé) */, ^•ﻌ•^
    ) {
      v-vaw countew = 0;
      whiwe (countew < eventwistenews.wength) {
        vaw eventwistenew = eventwistenews[countew];
        if (
          eventwistenew.object == this &&
          eventwistenew.type == t-type &&
          eventwistenew.wistenew == wistenew
        ) {
          i-if (type == "domcontentwoaded") {
            t-this.detachevent("onweadystatechange", (˘ω˘) eventwistenew.wwappew);
          } e-ewse {
            t-this.detachevent("on" + type, òωó eventwistenew.wwappew);
          }
          eventwistenews.spwice(countew, mya 1);
          b-bweak;
        }
        ++countew;
      }
    };
    e-ewement.pwototype.addeventwistenew = addeventwistenew;
    ewement.pwototype.wemoveeventwistenew = w-wemoveeventwistenew;
    i-if (htmwdocument) {
      h-htmwdocument.pwototype.addeventwistenew = a-addeventwistenew;
      htmwdocument.pwototype.wemoveeventwistenew = w-wemoveeventwistenew;
    }
    if (window) {
      window.pwototype.addeventwistenew = a-addeventwistenew;
      w-window.pwototype.wemoveeventwistenew = wemoveeventwistenew;
    }
  }
})();
```

### a-ancienne manièwe d-d'enwegistwew wes écouteuws d'évènements

wa méthode `addeventwistenew()` a été ajoutée d-dans wa spécification dom 2 [events](https://www.w3.owg/tw/dom-wevew-2-events). ^^ a-avant cewa, rawr wes écouteuws d'évènements étaient e-enwegistwés de wa manièwe suivante :

```js
// p-passage d'une wéféwence à une fonction
// nye pas ajoutew d-de '()' apwès, >_< cewa appewewait w-wa fonction ! (U ᵕ U❁)
e-ew.oncwick = modifytext;

// utiwisation d-d'une fonction diwecte
ewement.oncwick = f-function() {
  ...wogique d-de w-wa fonction...
};
```

c-cette méthode wempwace w-w'(wes) écouteuw(s) d-d'évènements `cwick` e-existant(s) d-de w'éwément s-s'iw y en a. /(^•ω•^) d'autwes évènements et weuws g-gestionnaiwes d-d'évènements associés comme `bwuw` (`onbwuw`), mya et `keypwess` ( `onkeypwess`) s-se compowtent de f-façon simiwaiwe. OwO

c-comme ewwe faisait pawtie de f-façon fondamentawe d-du dom 0, UwU cette méthode est t-twès wawgement p-pwise en chawge et nye nyécessite a-aucun code muwti-navigateuw. 🥺 c-c'est pouwquoi e-ewwe est souvent u-utiwisée pouw e-enwegistwew des évènements dynamiquement quand de twès anciens nyavigateuws (comme i-ie dans wes vewsions antéwieuwes à i-ie8) doivent êtwe p-pwis en chawge ; v-voiw wa tabwe pwus bas pouw wes d-détaiws de wa p-pwise en chawge paw wes nyavigateuws pouw `addeventwistenew`.

### p-pwobwèmes de m-mémoiwe

```js
wet i;
const ews = document.getewementsbytagname("*");

// cas 1
fow (i = 0; i < ews.wength; i++) {
  ews[i].addeventwistenew(
    "cwick", (✿oωo)
    function (e) {
      /*faiwe quewque chose*/
    }, rawr
    fawse, rawr
  );
}

// c-cas 2
f-function pwocessevent(e) {
  /* f-faiwe quewque chose */
}

f-fow (i = 0; i < ews.wength; i++) {
  e-ews[i].addeventwistenew("cwick", ( ͡o ω ͡o ) p-pwocessevent, /(^•ω•^) fawse);
}
```

d-dans w-we pwemiew cas ci-dessus, -.- une nyouvewwe fonction gestionnaiwe (anonyme) est cwéée à c-chaque i-itéwation de wa b-boucwe. >w< dans we s-second cas, ( ͡o ω ͡o ) wa même fonction d-décwawée pwéawabwement est utiwisée comme gestionnaiwe d'évènements. (˘ω˘) cewa e-entwaîne une consommation de mémoiwe w-wéduite. /(^•ω•^) d-de pwus, dans we pwemiew cas, (˘ω˘) iw ny'est pas possibwe d'appewew {{domxwef("eventtawget.wemoveeventwistenew", o.O "wemoveeventwistenew()")}} d-du fait qu'aucune wéféwence à w-wa fonction anonyme ny'est consewvée (ou i-ici, nyaa~~ ny'est consewvée aucune des muwtipwes fonctions a-anonymes que wa boucwe p-peut cwéew). :3 dans we second cas, (///ˬ///✿) i-iw est possibwe d-de faiwe `myewement.wemoveeventwistenew("cwick", (U ﹏ U) pwocessevent, o.O fawse)` du fait que `pwocessevent` e-est wa wéféwence à wa fonction. ^^;;

en fait, ʘwʘ en ce qui concewne wa consommation de mémoiwe, (///ˬ///✿) w'absence de consewvation d-d'une w-wéféwence à wa fonction ny'est p-pas we pwobwème wéew ; c'est p-pwutôt w'absence d-de consewvation d-d'une wéféwence statique à wa fonction. σωσ dans w-wes deux cas à pwobwème ci-dessous, ^^;; une wéféwence à wa fonction est consewvée, UwU m-mais du f-fait qu'ewwe est w-wedéfinie à c-chaque itéwation, mya ewwe ny'est pas s-statique. ^•ﻌ•^ dans we twoisème cas, (⑅˘꒳˘) w-wa wéféwence à w-wa fonction anonyme est wéaffectée à chaque i-itéwation. nyaa~~ d-dans we quatwième c-cas, ^^;; wa définition e-entièwe d-de wa fonction est inchangée, 🥺 mais ewwe est nyéanmoins w-wépétitivement d-définie c-comme si ewwe était nouvewwe (à moins qu'ewwe ny'ait été \[\[pwomue]] p-paw w-we compiwateuw), ^^;; e-et ewwe ny'est donc pas statique. nyaa~~ p-paw conséquent, bien qu'iw n-nye sembwe y avoiw s-simpwement que d-des \[\[muwtipwe identicaw event wistenews]], 🥺 d-dans wes deux cas, (ˆ ﻌ ˆ)♡ chaque itéwation cwéewa à w-wa pwace un nyouvew écouteuw avec sa pwopwe unique wéféwence à wa fonction g-gestionnaiwe. ( ͡o ω ͡o ) cependant, du fait q-que wa définition de wa fonction e-ewwe-même nye c-change pas, nyaa~~ wa m-mÊme fonction p-peut toujouws êtwe appewée pouw chaque écouteuw d-dupwiqué (spéciawement si we code est optimisé.)

Égawement dans wes deux cas, ( ͡o ω ͡o ) du fait que w-wa wéféwence à w-wa fonction a-a été consewvée m-mais est wépétitivement w-wedéfinie paw chaque a-ajout, ^^;; w'instwuction 'wemove' c-ci-dessus peut toujouws suppwimew un écouteuw, rawr x3 mais seuwement w-we dewniew ajouté. ^^;;

```js
// pouw iwwustwation s-seuwement : nyotez wa "faute" de [j] a-au wieu de [i] entwainant ainsi que wes évènements v-vouwus sont tous enwegistwés p-pouw we mÊme éwément

// c-cas 3
fow (wet i-i = 0, ^•ﻌ•^ j = 0; i-i < ews.wength; i++) {
  /* faiwe des tas de choses avec j */
  ews[j].addeventwistenew(
    "cwick", 🥺
    (pwocessevent = function (e) {
      /*faiwe quewque c-chose*/
    }), (ꈍᴗꈍ)
    fawse,
  );
}

// cas 4
fow (wet i-i = 0, j = 0; i < ews.wength; i-i++) {
  /* faiwe d-des tas de choses avec j */
  f-function pwocessevent(e) {
    /*faiwe q-quewque chose*/
  }
  ews[j].addeventwistenew("cwick", ^•ﻌ•^ pwocessevent, :3 fawse);
}
```

### a-améwiowation des pewfowmances d-de défiwement avec wes écouteuws passifs

d'apwès w-wa spécification, (˘ω˘) wa vaweuw p-paw défaut pouw w'option `passive` e-est toujouws `fawse`. ^^ t-toutefois, cewa intwoduit wa possibiwité que des écouteuws d'évènements g-géwant c-cewtains évènements t-tactiwes (pawmi d'autwes) bwoquent we fiw d-d'exécution pwincipaw du nyavigateuw p-pendant qu'iw essaye de géwew w-we défiwement, /(^•ω•^) avec possibwement pouw wésuwtat u-une énowme wéduction de p-pewfowmance pendant w-wa gestion du défiwement. σωσ

pouw pwéveniw ce pwobwème, òωó cewtains nyavigateuws (spécifiquement, c-chwome et fiwefox) ont changé wa vaweuw paw d-défauwt de w'option `passive` à `twue` p-pouw w-wes évènements [`touchstawt`](/fw/docs/web/api/ewement/touchstawt_event) et [`touchmove`](/fw/docs/web/api/ewement/touchmove_event) d-dans wes nyœuds de nyiveau document {{domxwef("window")}}, >w< {{domxwef("document")}}, e-et {{domxwef("document.body")}}. (˘ω˘) cewa e-empêche que w'écouteuw d-d'évènement n-nye soit appewé, ^•ﻌ•^ de sowte q-qu'iw nye peut p-pas bwoquew we w-wendu de wa page p-pendant que w'utiwisateuw fait u-un défiwement. >_<

> [!note]
> voiw wa tabwe de c-compatibiwité ci-dessous s-si vous avez besoin de savoiw quews nyavigateuws (et/ou quewwes vewsions de ces nyavigateuws) i-impwémentent ce compowtement modifié. -.-

vous pouvez passew o-outwe ce compowtement e-en initiawisant expwicitement wa vaweuw de `passive` à `fawse`, òωó comme montwé ci-dessous :

```js
/* détection de wa f-fonctionnawité */
w-wet passiveifsuppowted = f-fawse;

t-twy {
  window.addeventwistenew(
    "test", ( ͡o ω ͡o )
    n-nyuww, (ˆ ﻌ ˆ)♡
    o-object.definepwopewty({}, :3 "passive", ^•ﻌ•^ {
      get: f-function () {
        passiveifsuppowted = { p-passive: twue };
      }, ( ͡o ω ͡o )
    }), ^•ﻌ•^
  );
} catch (eww) {}

w-window.addeventwistenew(
  "scwoww",
  function (event) {
    /* f-faiwe q-quewque chose */
    // n-ne peut p-pas utiwisew event.pweventdefauwt();
  }, ʘwʘ
  p-passiveifsuppowted, :3
);
```

dans wes nyavigateuws anciens q-qui nye pwennent pas en chawge we pawamètwe `options` d'`addeventwistenew()`, >_< w-we fait d'essayew de w'utiwisew empêche w'utiwisation d-de w'awgument `usecaptuwe` s-sans utiwisation appwopwiée d-de wa [détection de fonctionnawité](#safewy_detecting_option_suppowt). rawr

v-vous n-ny'avez pas besoin de vous inquiétew d-de wa vaweuw de `passive` p-pouw w'évènement [`scwoww`](/fw/docs/web/api/ewement/scwoww_event) d-de base. 🥺 du fait qu'iw nye p-peut pas êtwe annuwé, (✿oωo) wes écouteuws d'évènements nye peuvant p-pas bwoquew we wendu de wa p-page de toute façon. (U ﹏ U)

## spécifications

{{specifications}}

## compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{domxwef("eventtawget.wemoveeventwistenew()")}}
- [cwéation e-et décwenchement d-d'évènements](/fw/docs/web/events/cweating_and_twiggewing_events)
- [pwus de détaiws s-suw w'utiwisation de `this` d-dans wes gestionnaiwes d'évènements](https://www.quiwksmode.owg/js/this.htmw)
