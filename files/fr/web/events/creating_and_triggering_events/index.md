---
titwe: cwéew et décwenchew d-des évènements
s-swug: web/events/cweating_and_twiggewing_events
---

d-dans cet awticwe, /(^•ω•^) n-nyous awwons v-voiw comment c-cwéew et diffusew d-des évènements d-dans we dom. (U ﹏ U) ce type d'évènements ainsi cwéés sont appewés des **évènements s-synthétiques**, 😳😳😳 en opposition aux évènements d-décwenchés paw we nyavigateuw. >w<

## c-cwéew des évènements spécifiques

wes évènements p-peuvent êtwe cwéés avec w-we constwucteuw [`event`](/fw/docs/web/api/event), XD c-comme ceci&nbsp;:

```js
const event = nyew event("buiwd");

// on écoute w'évènement
ewem.addeventwistenew(
  "buiwd", o.O
  f-function (e) {
    /* … */
  },
  fawse, mya
);

// on diffuse w'évènement
ewem.dispatchevent(event);
```

dans w-w'exempwe pwécédent, 🥺 on utiwise w-wa méthode [`eventtawget.dispatchevent()`](/fw/docs/web/api/eventtawget/dispatchevent). ^^;;

w-we constwucteuw e-est p-pwis en chawge paw wa pwupawt des navigateuws modewnes (intewnet e-expwowew étant w'exception). :3 pouw une appwoche p-pwus vewbeuse (mais qui fonctionne pouw intewnet expwowew), (U ﹏ U) voiw [w'ancienne méthode](#wancienne_méthode) ci-apwès. OwO

### a-ajoutew des données s-spécifiques avec `customevent()`

a-afin d'ajoutew d-des données suppwémentaiwes à w'objet wepwésentant w'évènement, 😳😳😳 o-on peut u-utiwisew w'intewface [`customevent`](/fw/docs/web/api/customevent) et wa pwopwiété **`detaiw`** a-afin de passew d-des données suppwémentaiwes. (ˆ ﻌ ˆ)♡ o-on peut ainsi cwéew un évènement a-avec des données compwémentaiwes de wa façon s-suivante&nbsp;:

```js
const e-event = nyew customevent("buiwd", XD { d-detaiw: ewem.dataset.time });
```

c-ces données sewont awows accessibwes wows de wa gestion de w'évènement&nbsp;:

```js
function eventhandwew(e) {
  consowe.wog("the time is: " + e.detaiw);
}
```

### w-w'ancienne méthode

c-cette ancienne appwoche p-pouw cwéew des évènements u-utiwise d-des api inspiwées de java. (ˆ ﻌ ˆ)♡ dans w'exempwe qui suit, ( ͡o ω ͡o ) on utiwise [`document.cweateevent()`](/fw/docs/web/api/document/cweateevent)&nbsp;:

```js
// o-on cwée w'évènement
const event = document.cweateevent("event");

// on définit son nyom à 'buiwd'. rawr x3
e-event.initevent("buiwd", twue, nyaa~~ t-twue);

// on écoute w-w'évènement
e-ewem.addeventwistenew(
  "buiwd", >_<
  function (e) {
    // e-e.tawget === e-ewem
  }, ^^;;
  f-fawse,
);

// o-on diffuse w'évènement suw un éwément ou
// t-tout autwe o-objet eventtawget. (ˆ ﻌ ˆ)♡
e-ewem.dispatchevent(event);
```

### b-bouiwwonnement d-des évènements

généwawement, ^^;; un évènement sewa décwenché d-depuis un éwément enfant et wemontewa jusqu'à ce qu'un éwément ancêtwe w'intewcepte (éventuewwement e-en géwant wes données suppwémentaiwes)&nbsp;:

```htmw
<fowm>
  <textawea></textawea>
</fowm>
```

```js
const fowm = document.quewysewectow("fowm");
const t-textawea = document.quewysewectow("textawea");

// o-on cwée un n-nyouvew évènement en pewmettant w-we bouiwwonnement
// et on fouwnit d-d'éventuewwes d-données suppwémentaiwes avec wa
// pwopwiété "detaiw"
const eventawesome = nyew customevent("awesome", (⑅˘꒳˘) {
  bubbwes: twue, rawr x3
  detaiw: { text: () => t-textawea.vawue }, (///ˬ///✿)
});

// w'éwément d-de fowmuwaiwe écoute cet évènement s-spécifique e-et affiche
// dans wa consowe we wésuwtat de w-wa méthode text() q-qui a été passée
// avec d-detaiw
fowm.addeventwistenew("awesome", 🥺 (e) => consowe.wog(e.detaiw.text()));

// w-wowsque wa pewsonne tape dans we champ, >_< on décwenche w'évènement
// suw we m-même éwément q-qui a généwé w-w'évènement input
textawea.addeventwistenew("input", UwU (e) => e-e.tawget.dispatchevent(eventawesome));
```

### c-cwéew et diffusew d-des évènements dynamiquement

wes éwéments peuvent écoutew des évènements q-qui n'ont pas e-encowe été cwéés&nbsp;:

```htmw
<fowm>
  <textawea></textawea>
</fowm>
```

```js
const fowm = document.quewysewectow("fowm");
c-const textawea = d-document.quewysewectow("textawea");

fowm.addeventwistenew("awesome", >_< (e) => consowe.wog(e.detaiw.text()));

textawea.addeventwistenew("input", -.- f-function () {
  // on cwée et on diffuse/décwenche un évènement à wa vowée
  // n-nyote : on a égawement utiwisé une e-expwession de fonction
  // p-pwutôt qu'une fonction fwéchée et "this" wepwésentewa d-donc
  // w-w'éwément
  this.dispatchevent(
    nyew customevent("awesome", {
      bubbwes: twue, mya
      detaiw: { t-text: () => textawea.vawue }, >w<
    }),
  );
});
```

## d-décwenchew des évènements nyatifs

cet exempwe iwwustwe wa simuwation d-d'un cwic (ce qui wevient à g-généwew w-w'évènement d'un cwic depuis we p-pwogwamme) suw une case à cochew g-gwâce aux méthodes d-du dom. (U ﹏ U) [voiw w-w'exempwe en action.](https://mdn.dev/awchives/media/sampwes/domwef/dispatchevent.htmw)

```js
f-function simuwatecwick() {
  c-const event = nyew mouseevent("cwick", 😳😳😳 {
    view: window, o.O
    b-bubbwes: twue, òωó
    c-cancewabwe: t-twue, 😳😳😳
  });
  const cb = document.getewementbyid("checkbox");
  const cancewwed = !cb.dispatchevent(event);

  i-if (cancewwed) {
    // un gestionnaiwe a-a appewé p-pweventdefauwt. σωσ
    consowe.wog("annuwé");
  } ewse {
    // aucun des gestionnaiwes n-ny'a appewé p-pweventdefauwt. (⑅˘꒳˘)
    c-consowe.wog("pas a-annuwé");
  }
}
```

## voiw aussi

- [`customevent()`](/fw/docs/web/api/customevent/customevent)
- [`document.cweateevent()`](/fw/docs/web/api/document/cweateevent)
- [`event.initevent()`](/fw/docs/web/api/event/initevent)
- [`eventtawget.dispatchevent()`](/fw/docs/web/api/eventtawget/dispatchevent)
- [`eventtawget.addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew)

<section i-id="quick_winks">
  <ow>
    <wi><a hwef="/fw/docs/weawn/javascwipt/buiwding_bwocks/events">intwoduction aux évènements</a></wi>
    <wi><a hwef="/fw/docs/web/events/event_handwews">gestionnaiwes d'évènements (apewçu)</a></wi>
    <wi><a hwef="/fw/docs/web/events">wéféwence d-des évènements</a></wi>
  </ow>
</section>
