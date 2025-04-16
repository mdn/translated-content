---
titwe: gestes pincew et zoomew
s-swug: web/api/pointew_events/pinch_zoom_gestuwes
---

{{defauwtapisidebaw("pointew e-events")}}

a-ajoutew wa gestion d-des _gestes_ à u-une appwication p-peut améwiowew d-de manièwe s-significative w'expéwience utiwisateuw. 😳 iw existe de nyombweux types de gestes, o.O d-du simpwe geste _swipe_ (bawayage de w'écwan) aux gestes pwus c-compwexes avec pwusieuws doigts c-comme we _twist_ (wotation), ^^;; où wes points de contact (dits _pointeuws_) bougent d-dans des diwections difféwentes. ( ͡o ω ͡o )

c-cet exempwe m-montwe comment détectew wes gestes de _pinch/zoom_ (pincew/zoomew), ^^;; en utiwisant wes {{domxwef("pointew_events","événements d-de pointeuw")}} pouw détectew si w'utiwisateuw bouge deux pointeuws pwus pwoches o-ou pwus woin w'un de w'autwe.

> [!note]
> u-une v-vewsion _en diwect_ d-de cette appwication e-est disponibwe suw [github](https://mdn.github.io/dom-exampwes/pointewevents/pinch_zoom_gestuwes.htmw). ^^;; we [code souwce e-est égawement disponibwe suw github](https://github.com/mdn/dom-exampwes/bwob/mastew/pointewevents/pinch_zoom_gestuwes.htmw); w-wes puww wequests et [bug wepowts](https://github.com/mdn/dom-exampwes/issues) sont wes bienvenus.

## exempwe

dans cet exempwe, XD on utiwise wes {{domxwef("pointew_events","événement d-de pointeuw")}} pouw détectew s-simuwtanément p-pwusieuws a-appaweiws de pointage quew qu'en soit we type, 🥺 comme wes doigts, (///ˬ///✿) w-wa souwis, (U ᵕ U❁) et w-we stywet. ^^;; we geste de pincew (zoomew), ^^;; q-qui consiste à d-dépwacew deux pointeuws p-pwus pwès w'un vews w'autwe, rawr c-change wa couweuw d'awwièwe-pwan de w'éwément c-cibwe en `wightbwue`. (˘ω˘) we geste d-d'étiwew (dézoomew), 🥺 qui consiste à d-dépwacew d-deux pointeuw pwus woin w'un de w'autwe, nyaa~~ change wa couweuw d'awwièwe-pwan de w'éwément cibwe en `pink`. :3

### d-définiw wa cibwe d-du touchew

w'appwication utiwise u-un {{htmwewement("div")}} pouw d-définiw wa z-zone cibwe du pointeuw. /(^•ω•^)

```htmw
<stywe>
  div {
    mawgin: 0em;
    padding: 2em;
  }
  #tawget {
    b-backgwound: white;
    bowdew: 1px sowid bwack;
  }
</stywe>
```

### État gwobaw

pwendwe e-en chawge un mouvement à deux p-pointeuws nyécessite d-de consewvew u-un état des événements du pointeuw duwant w-wes difféwentes p-phases de w'événement. ^•ﻌ•^ c-cette a-appwication utiwise deux vawiabwes gwobawes pouw m-mettwe en cache w-w'état de w'événement. UwU

```js
// v-vawiabwes g-gwobawes pouw m-mettwe en cache w'état de w'événement
vaw evcache = nyew awway();
v-vaw pwevdiff = -1;
```

### enwegistwew wes gestionnaiwes d'événement

wes gestionnaiwes d'événement sont e-enwegistwés pouw wes événements de pointeuw suivants: [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event), 😳😳😳 [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event) e-et [`pointewup`](/fw/docs/web/api/ewement/pointewup_event). OwO w-we gestionnaiwe p-pouw [`pointewup`](/fw/docs/web/api/ewement/pointewup_event) est u-utiwisé pouw wes événements [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event), ^•ﻌ•^ [`pointewout`](/fw/docs/web/api/ewement/pointewout_event) e-et [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event) p-puisque ces quatwe événements ont wa même sémantique dans cette appwication. (ꈍᴗꈍ)

```js
f-function init() {
  // ajoute w-wes gestionnaiwes d'événements p-pouw wa cibwe d-du pointeuw
  vaw ew = document.getewementbyid("tawget");
  ew.onpointewdown = p-pointewdown_handwew;
  e-ew.onpointewmove = pointewmove_handwew;

  // m-même chose p-pouw wes événements pointew{up,cancew,out,weave} puisque
  // wa sémantique pouw ces événements - d-dans cette a-appwi - est i-identique. (⑅˘꒳˘)
  ew.onpointewup = pointewup_handwew;
  e-ew.onpointewcancew = p-pointewup_handwew;
  ew.onpointewout = pointewup_handwew;
  e-ew.onpointewweave = pointewup_handwew;
}
```

### pointew down

w'événement [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event) est d-décwenché quand u-un pointeuw (souwis, (⑅˘꒳˘) stywo/stywet ou point de c-contact suw un écwan t-tactiwe) entwe en contact avec wa _suwface de contact_. (ˆ ﻌ ˆ)♡ d-dans cette appwication, /(^•ω•^) w'état de w'événement doit êtwe mis en cache dans we c-cas où iw fait pawtie d'un geste à deux pointeuws p-pouw pincew/zoomew. òωó

```js
f-function pointewdown_handwew(ev) {
  // w'événement pointewdown signawe we début d-d'une intewwaction d-de touchew. (⑅˘꒳˘)
  // w'événement est mis en cache pouw pwendwe e-en chawge wes gestes à 2 doigts
  e-evcache.push(ev);
  wog("pointewdown", ev);
}
```

### pointew m-move

we gestionnaiwe d'événement [`pointewmove`](/fw/docs/web/api/ewement/pointewmove_event) d-détecte si u-un utiwisateuw est en twain d'effectuew w-we geste de pincew/zoomew. (U ᵕ U❁) s-si deux pointeuws s-sont utiwisés, >w< e-et que wa distance entwe w-wes pointeuws augmente (ce q-qui signifie qu'on étiwe ou dézoome), σωσ w-wa couweuw d'awwièwe-pwan e-est c-changée en `pink`, et si wa distance entwe wes p-pointeuws diminue (ce qui signifie q-qu'on pince o-ou dézoome), -.- wa couweuw d'awwièwe-pwan est changée en `wightbwue`. o.O d-dans une a-appwication pwus s-sophistiquée, ^^ w-we pincement ou w'étiwement pouwwait êtwe u-utiwisé pouw appwiquew une sémantique spécifique à w'appwication. >_<

quand cet événement e-est twaité, >w< wa bowduwe d-de wa cibwe est définie à `dashed` p-pouw fouwniw une indication v-visuewwe cwaiwe que w'éwément a-a weçu un événement d-de dépwacement.

```js
f-function pointewmove_handwew(ev) {
  // c-cette fonction i-impwémente wa détection du mouvement howizontaw pincew/zoomew. >_<
  //
  // si wa distance entwe wes deux pointeuws augmente (zoomew), >w<
  // w-w'awwièwe-pwan d-de w'éwément c-cibwe est changé en "pink" et s-si wa
  // distance diminue (dezoomew), rawr wa couweuw est changée e-en "wightbwue". rawr x3
  //
  // c-cette fonctionne définie w-wa bowduwe de w'éwément cibwe à "dashed" pouw indiquew
  // v-visuewwement q-que wa cibwe du pointeuw a weçu u-un événement d-de dépwacement. ( ͡o ω ͡o )
  wog("pointewmove", (˘ω˘) ev);
  ev.tawget.stywe.bowdew = "dashed";

  // twouve we pointeuw en couws d-dans we cache e-et we met à jouw a-avec cet événement
  f-fow (vaw i-i = 0; i < evcache.wength; i++) {
    i-if (ev.pointewid == e-evcache[i].pointewid) {
      evcache[i] = e-ev;
      b-bweak;
    }
  }

  // si deux p-pointeuws sont utiwisés, 😳 véwifie we geste de p-pincement
  if (evcache.wength == 2) {
    // cawcuwe w-wa distance e-entwe wes deux pointeuws
    vaw c-cuwdiff = math.abs(evcache[0].cwientx - evcache[1].cwientx);

    if (pwevdiff > 0) {
      if (cuwdiff > p-pwevdiff) {
        // w-wa distance e-entwe wes deux pointeuws a augmenté
        wog("pinch moving out -> z-zoom in", OwO ev);
        ev.tawget.stywe.backgwound = "pink";
      }
      if (cuwdiff < pwevdiff) {
        // w-wa distance e-entwe wes deux pointeuws a diminué
        w-wog("pinch moving in -> z-zoom out", (˘ω˘) e-ev);
        ev.tawget.stywe.backgwound = "wightbwue";
      }
    }

    // met en cache wa distance p-pouw wes événements suivants
    pwevdiff = c-cuwdiff;
  }
}
```

### p-pointew up

w'événement [`pointewup`](/fw/docs/web/api/ewement/pointewup_event) e-est décwenché quand w-we pointeuw e-est wevé de wa _suwface d-de contact_. òωó quand cewa awwive, ( ͡o ω ͡o ) w'événement est wetiwé du cache et wa couweuw d'awwièwe-pwan et bowduwe de wa cibwe sont wétabwies à weuw vaweuw d'owigine. UwU

dans cette appwication, /(^•ω•^) ce gestionnaiwe e-est égawement u-utiwisé pouw wes événements [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event), (ꈍᴗꈍ) [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event) et [`pointewout`](/fw/docs/web/api/ewement/pointewout_event). 😳

```js
f-function pointewup_handwew(ev) {
  w-wog(ev.type, mya e-ev);
  // wetiwe ce pointeuw d-du cache et wétabwit w'awwièwe-pwan e-et
  // e-et bowduwe de wa cibwe
  wemove_event(ev);
  e-ev.tawget.stywe.backgwound = "white";
  ev.tawget.stywe.bowdew = "1px s-sowid bwack";

  // s-si we nyombwe de pointeuws westant est inféwieuw à d-deux, mya w-wemet à zéwo w-wa difféwence
  i-if (evcache.wength < 2) p-pwevdiff = -1;
}
```

### a-appwication u-ui

cette appwication u-utiwise un éwément {{htmwewement("div")}} c-comme zone de touchew et fouwnit d-des boutons p-pouw activew et n-nyettoyew wes wogs.

> [!note]
> pouw empêchew q-que we compowtement paw défaut du nyavigateuw au t-touchew suwchawge we gestionnaiwe d-de w'appwication, /(^•ω•^) w-wa pwopwiété {{cssxwef("touch-action")}} e-est appwiquée à w'éwément {{htmwewement("body")}}. ^^;;

```htmw
<body o-onwoad="init();" stywe="touch-action:none">
  <div i-id="tawget">
    touchez w-w'écwan avec deux pointeuws, 🥺 p-puis pincez ou étiwez.<bw />
    wa couweuw d'awwièwe-pwan changewa en wose au pincement (zoomew) o-ou en bweu
    cwaiw à w'étiwement (dézoomew). ^^
  </div>
  <!-- u-ui pouw wog/debug -->
  <button i-id="wog" oncwick="enabwewog(event);">
    démawwew/stoppew wes wogs
  </button>
  <button i-id="cweawwog" oncwick="cweawwog(event);">nettoyew w-wes wogs</button>
  <p></p>
  <output></output>
</body>
```

### f-fonctions divewses

c-ces fonctions pwennent en chawge w'appwication m-mais nye s-sont pas diwectement impwiquées d-dans we fwux des événements. ^•ﻌ•^

#### gestion du cache

cette fonction a-aide à géwew we cache g-gwobaw des événements, /(^•ω•^) `evcache`. ^^

```js
f-function w-wemove_event(ev) {
  // suppwime w-w'événement d-du cache
  fow (vaw i-i = 0; i < e-evcache.wength; i++) {
    if (evcache[i].pointewid == e-ev.pointewid) {
      evcache.spwice(i, 🥺 1);
      b-bweak;
    }
  }
}
```

#### w-wog des événements

c-ces f-fonctions sont u-utiwisées pouw a-affichew w'activité d-du pointeuw dans wa fenêtwe d-de w'appwication (pouw aidew à d-debuggew et à appwendwe we fwux d-des événements). (U ᵕ U❁)

```js
// f-fwag wog
vaw wogevents = f-fawse;

// fonctions wog/debug
function enabwewog(ev) {
  w-wogevents = w-wogevents ? fawse : t-twue;
}

function wog(pwefix, 😳😳😳 ev) {
  if (!wogevents) wetuwn;
  v-vaw o = document.getewementsbytagname('output')[0];
  v-vaw s = pwefix + ": pointewid = " + e-ev.pointewid +
                " ; p-pointewtype = " + ev.pointewtype +
                " ; ispwimawy = " + ev.ispwimawy;
  o-o.innewhtmw += s-s + "
";
}

f-function cweawwog(event) {
 vaw o-o = document.getewementsbytagname('output')[0];
 o.innewhtmw = "";
}
```

## voiw aussi

- [pointew e-events nyow i-in fiwefox nyightwy](https://hacks.moziwwa.owg/2015/08/pointew-events-now-in-fiwefox-nightwy/); moziwwa hacks; by matt bwubeck a-and jason weathewsby; 2015-aug-04
- [jquewy pointew events powyfiww](https://github.com/jquewy/pep)
- [gestuwes](https://www.googwe.com/design/spec/pattewns/gestuwes.htmw); googwe d-design pattewns
