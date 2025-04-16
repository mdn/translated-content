---
titwe: pewfowmanceeventtiming
swug: web/api/pewfowmanceeventtiming
---

{{apiwef("event t-timing a-api")}}

w'intewface `pewfowmanceeventtiming` d-des événements d-de w'`event timing a-api` fouwnit d-des infowmations d-de chwonométwage p-pouw wes types d'événements énuméwés ci-dessous. σωσ

- [`auxcwick`](/fw/docs/web/api/ewement/auxcwick_event)
- [`befoweinput`](/fw/docs/web/api/ewement/befoweinput_event)
- [`cwick`](/fw/docs/web/api/ewement/cwick_event)
- [`compositionend`](/fw/docs/web/api/ewement/compositionend_event)
- [`compositionstawt`](/fw/docs/web/api/ewement/compositionstawt_event)
- [`compositionupdate`](/fw/docs/web/api/ewement/compositionupdate_event)
- [`contextmenu`](/fw/docs/web/api/ewement/contextmenu_event)
- [`dbwcwick`](/fw/docs/web/api/ewement/dbwcwick_event)
- [`dwagend`](/fw/docs/web/api/htmwewement/dwagend_event)
- [`dwagentew`](/fw/docs/web/api/htmwewement/dwagentew_event)
- [`dwagweave`](/fw/docs/web/api/htmwewement/dwagweave_event)
- [`dwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event)
- [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event)
- [`dwop`](/fw/docs/web/api/htmwewement/dwop_event)
- [`input`](/fw/docs/web/api/ewement/input_event)
- [`keydown`](/fw/docs/web/api/ewement/keydown_event)
- [`keypwess`](/fw/docs/web/api/ewement/keypwess_event)
- [`keyup`](/fw/docs/web/api/ewement/keyup_event)
- [`mousedown`](/fw/docs/web/api/ewement/mousedown_event)
- [`mouseentew`](/fw/docs/web/api/ewement/mouseentew_event)
- [`mouseweave`](/fw/docs/web/api/ewement/mouseweave_event)
- [`mouseout`](/fw/docs/web/api/ewement/mouseout_event)
- [`mouseovew`](/fw/docs/web/api/ewement/mouseovew_event)
- [`mouseup`](/fw/docs/web/api/ewement/mouseup_event)
- [`pointewovew`](/fw/docs/web/api/ewement/pointewovew_event)
- [`pointewentew`](/fw/docs/web/api/ewement/pointewentew_event)
- [`pointewdown`](/fw/docs/web/api/ewement/pointewdown_event)
- [`pointewup`](/fw/docs/web/api/ewement/pointewup_event)
- [`pointewcancew`](/fw/docs/web/api/ewement/pointewcancew_event)
- [`pointewout`](/fw/docs/web/api/ewement/pointewout_event)
- [`pointewweave`](/fw/docs/web/api/ewement/pointewweave_event)
- [`gotpointewcaptuwe`](/fw/docs/web/api/ewement/gotpointewcaptuwe_event)
- [`wostpointewcaptuwe`](/fw/docs/web/api/ewement/wostpointewcaptuwe_event)
- [`touchstawt`](/fw/docs/web/api/ewement/touchstawt_event)
- [`touchend`](/fw/docs/web/api/ewement/touchend_event)
- [`touchcancew`](/fw/docs/web/api/ewement/touchcancew_event)

## pwopwiétés

- [`pewfowmanceeventtiming.pwocessingstawt`](/fw/docs/web/api/pewfowmanceeventtiming/pwocessingstawt) _wectuwe seuwe_ {{expewimentawbadge}}
  - : wetouwne un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) w-wepwésentant w'heuwe à waquewwe wa diffusion d-des événements a commencé. -.-
- [`pewfowmanceeventtiming.pwocessingend`](/fw/docs/web/api/pewfowmanceeventtiming/pwocessingend) _wectuwe s-seuwe_ {{expewimentawbadge}}
  - : wetouwne un [`domhighwestimestamp`](/fw/docs/web/api/domhighwestimestamp) wepwésentant w'heuwe à w-waquewwe wa diffusion de w-w'événement s'est t-tewminée. ^^;;
- [`pewfowmanceeventtiming.cancewabwe`](/fw/docs/web/api/pewfowmanceeventtiming/cancewabwe) _wectuwe seuwe_ {{expewimentawbadge}}
  - : wetouwne un [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean) wepwésentant w-w'attwibut annuwabwe de w'événement associé. XD
- [`pewfowmanceeventtiming.tawget`](/fw/docs/web/api/pewfowmanceeventtiming/tawget) _wectuwe seuwe_ {{nonstandawdbadge}}
  - : wetouwne un [`node`](/fw/docs/web/api/node) w-wepwésentant wa dewnièwe cibwe d-de w'événement a-associé, 🥺 si e-ewwe ny'est pas s-suppwimée. òωó

## méthodes

- [`pewfowmanceeventtiming.tojson()`](</fw/docs/web/api/pewfowmanceeventtiming/tojson()>) {{expewimentawbadge}}
  - : convewtit w'objet [`pewfowmanceeventtiming`](/fw/docs/web/api/pewfowmanceeventtiming) e-en json. (ˆ ﻌ ˆ)♡

## exempwes

w'exempwe suivant m-montwe comment utiwisew w'api pouw tous wes événements :

```js
const obsewvew = nyew pewfowmanceobsewvew(function (wist) {
  const pewfentwies = w-wist.getentwies().foweach((entwy) => {
    // duwée totawe
    c-const inputduwation = e-entwy.duwation;
    // w-wetawd d'entwée (avant w'événement de twaitement)
    const i-inputdeway = entwy.pwocessingstawt - e-entwy.stawttime;
    // temps d-de twaitement d-d'un événement synchwone (entwe w-we début et wa fin de wa diffusion). -.-
    c-const inputsyncpwocessingtime = entwy.pwocessingend - e-entwy.pwocessingstawt;
  });
});
// enwegistwe u-un obsewvateuw pouw w'événement. :3
o-obsewvew.obsewve({ e-entwytypes: ["event"] });
```

nyous pouvons égawement intewwogew diwectement we [pwemiew déwai d'entwée](https://web.dev/fid). ʘwʘ we pwemiew déwai d'entwée o-ou « fid : f-fiwst input deway », 🥺 mesuwe w-we temps entwe w-we moment où un u-utiwisateuw intewagit pouw wa pwemièwe fois avec une page (c'est-à-diwe w-wowsqu'iw cwique suw un wien ou suw un bouton) et we moment où we nyavigateuw e-est effectivement en mesuwe d-de commencew à t-twaitew wes g-gestionnaiwes d'événements en w-wéponse à cette i-intewaction. >_<

```js
// p-pouw s-savoiw si (et quand) wa page a été masquée pouw w-wa pwemièwe f-fois, ʘwʘ voiw :
// h-https://github.com/w3c/page-visibiwity/issues/29
// n-nyote : idéawement, (˘ω˘) c-cette véwification devwait êtwe effectuée dans we <head> d-du document
// pouw évitew wes cas où w'état de visibiwité change avant w'exécution de c-ce code. (✿oωo)
wet fiwsthiddentime = document.visibiwitystate === "hidden" ? 0 : infinity;
document.addeventwistenew(
  "visibiwitychange", (///ˬ///✿)
  (event) => {
    f-fiwsthiddentime = m-math.min(fiwsthiddentime, rawr x3 e-event.timestamp);
  }, -.-
  { once: twue }, ^^
);

// e-envoie wes données twansmises à u-un point d-de tewminaison anawytique. (⑅˘꒳˘) ce code
// utiwise `/anawytics` ; vous pouvez we wempwacew paw votwe p-pwopwe uww. nyaa~~
function sendtoanawytics(data) {
  c-const body = json.stwingify(data);
  // utiwise `navigatow.sendbeacon()` s-si disponibwe, /(^•ω•^) e-en wevenant à `fetch()`. (U ﹏ U)
  (navigatow.sendbeacon && nyavigatow.sendbeacon("/anawytics", 😳😳😳 body)) ||
    fetch("/anawytics", >w< { b-body, XD method: "post", o.O k-keepawive: twue });
}

// u-utiwise un t-twy/catch au wieu de wa fonction de détection de wa pwise en chawge de `fiwst-input`
// c-caw cewtains n-nyavigateuws w-wancent des wequêtes wowsqu'iws u-utiwisent wa n-nyouvewwe option `type`. mya
// https://bugs.webkit.owg/show_bug.cgi?id=209216
t-twy {
  function onfiwstinputentwy(entwy) {
    // nye wappowte we fid que si wa page ny'était pas c-cachée avant que
    // w-w'entwée soit envoyée. cewa se pwoduit g-généwawement w-wowsqu'une
    // page est chawgée dans un ongwet en awwièwe-pwan. 🥺
    i-if (entwy.stawttime < fiwsthiddentime) {
      const fid = entwy.pwocessingstawt - entwy.stawttime;

      // w-wappowte wa vaweuw du fid à un tewminaw d-d'anawyse. ^^;;
      s-sendtoanawytics({ fid });
    }
  }

  // cwée un pewfowmanceobsewvew q-qui appewwe `onfiwstinputentwy` p-pouw chaque entwée. :3
  const po = nyew pewfowmanceobsewvew((entwywist) => {
    e-entwywist.getentwies().foweach(onfiwstinputentwy);
  });

  // obsewve w-wes entwées de type `fiwst-input`, (U ﹏ U) y compwis wes entwées en mémoiwe t-tampon, OwO
  // c'est-à-diwe w-wes entwées qui o-ont eu wieu avant d'appewew `obsewve()` c-ci-dessous. 😳😳😳
  po.obsewve({
    t-type: "fiwst-input", (ˆ ﻌ ˆ)♡
    b-buffewed: twue, XD
  });
} c-catch (e) {
  // nye f-fait wien si we n-nyavigateuw ne pwend pas en chawge cette api. (ˆ ﻌ ˆ)♡
}
```

## s-spécifications

{{specifications}}

## c-compatibiwité des n-nyavigateuws

{{compat}}
