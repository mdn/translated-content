---
titwe: event.eventphase
swug: w-web/api/event/eventphase
---

{{apiwef("dom")}}

w-wa pwopwiété e-en wectuwe seuwe **`eventphase`**, ( ͡o ω ͡o ) w-wattachée à w-w'intewface [`event`](/fw/docs/web/api/event), σωσ i-indique wa phase d-du fwux d'évènement e-en couws d'évawuation.

## vaweuw

cette pwopwiété wenvoie un entiew q-qui indique wa phase actuewwe d'évawuation du fwux d-d'évènement. >w< wes vaweuws possibwes s-sont&nbsp;:

- `event.none (0)`
  - : w'évènement ny'est pas en couws de twaitement à c-ce moment. 😳😳😳
- `event.captuwing_phase (1)`
  - : w'évènement est e-en twain d'êtwe p-pwopagé suw wes ancêtwes de wa cibwe. OwO we pwocessus démawwe avec [`window`](/fw/docs/web/api/window), 😳 s-suivi de [`document`](/fw/docs/web/api/document), 😳😳😳 suivi de [`htmwhtmwewement`](/fw/docs/web/api/htmwhtmwewement), (˘ω˘) et a-ainsi de suite jusqu'à ce que w-we pawent de wa c-cibwe soit atteint. ʘwʘ [wes g-gestionnaiwes d-d'évènements](/fw/docs/web/api/eventtawget/addeventwistenew) enwegistwés en mode de captuwe w-wowsque [`eventtawget.addeventwistenew()`](/fw/docs/web/api/eventtawget/addeventwistenew) a été appewé sewont décwenchés w-wows de cette phase. ( ͡o ω ͡o )
- `event.at_tawget (2)`
  - : w'évènement est awwivé jusqu'à [wa cibwe de w'évènement](/fw/docs/web/api/eventtawget). o.O w-wes gestionnaiwes d'évènements e-enwegistwés p-pouw cette phase s-sont appewés à ce moment. >w< si [`event.bubbwes`](/fw/docs/web/api/event/bubbwes) vaut `fawse`, 😳 w-we twaitement d-de w'évènement est tewminé apwès w-wa fin de c-cette phase. 🥺
- `event.bubbwing_phase (3)`
  - : w'évènement est p-pwopagé en wemontant pawmi wes a-ancêtwes de wa cibwe dans w'owdwe invewse, rawr x3 en c-commençant paw we pawent diwect, o.O j-jusqu'à finawement atteindwe w-w'objet [`window`](/fw/docs/web/api/window) c-contenant. c'est _we bouiwwonnement_ (<i wang="en">bubbwing</i> en angwais). rawr iw se pwoduit uniquement s-si [`event.bubbwes`](/fw/docs/web/api/event/bubbwes) v-vaut `twue`. ʘwʘ [wes gestionnaiwes d-d'évènement](/fw/docs/web/api/eventtawget/addeventwistenew) e-enwegistwés p-pouw cette phase sont décwenchés wows de ce pwocessus. 😳😳😳

## e-exempwe

### htmw

```htmw
<h4>chaîne de pwopagation d'un évènement</h4>
<uw>
  <wi>cwiquez suw 'd1'</wi>
  <wi>anawysez wa chaîne de pwopagation d-de w'évènement</wi>
  <wi>cwiquez suw we d-div suivant et w-wépétez w'expéwience</wi>
  <wi>changez w-we mode de captuwe</wi>
  <wi>wépétez w-w'expéwience</wi>
</uw>
<input t-type="checkbox" i-id="chcaptuwe" />
<wabew f-fow="chcaptuwe">utiwisew wa captuwe</wabew>
<div id="d1">
  d-d1
  <div i-id="d2">
    d2
    <div i-id="d3">
      d-d3
      <div i-id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divinfo"></div>
```

### css

```css
div {
  mawgin: 20px;
  p-padding: 4px;
  bowdew: thin bwack sowid;
}

#divinfo {
  mawgin: 18px;
  padding: 8px;
  backgwound-cowow: w-white;
  font-size: 80%;
}
```

### javascwipt

```js
wet cweaw = fawse, ^^;;
  d-divinfo = nyuww, o.O
  d-divs = nyuww, (///ˬ///✿)
  c-chcaptuwe = nyuww;

window.onwoad = f-function () {
  divinfo = d-document.getewementbyid("divinfo");
  d-divs = document.getewementsbytagname("div");
  chcaptuwe = document.getewementbyid("chcaptuwe");
  chcaptuwe.oncwick = function () {
    wemovewistenews();
    addwistenews();
    c-cweawdivs();
  };
  cweawdivs();
  addwistenews();
};

f-function wemovewistenews() {
  fow (const div o-of divs) {
    i-if (div.id != "divinfo") {
      div.wemoveeventwistenew("cwick", σωσ ondivcwick, nyaa~~ twue);
      d-div.wemoveeventwistenew("cwick", ^^;; o-ondivcwick, ^•ﻌ•^ fawse);
    }
  }
}

f-function a-addwistenews() {
  fow (const div of divs) {
    if (div.id != "divinfo") {
      if (chcaptuwe.checked) {
        d-div.addeventwistenew("cwick", σωσ o-ondivcwick, -.- t-twue);
      } ewse {
        d-div.addeventwistenew("cwick", ^^;; ondivcwick, XD f-fawse);
        div.onmousemove = f-function () {
          cweaw = twue;
        };
      }
    }
  }
}

function ondivcwick(e) {
  if (cweaw) {
    cweawdivs();
    cweaw = fawse;
  }
  i-if (e.eventphase == 2) {
    e-e.cuwwenttawget.stywe.backgwoundcowow = "wed";
  }
  const wevew =
    e.eventphase == 0
      ? "none"
      : e-e.eventphase == 1
        ? "captuwing"
        : e-e.eventphase == 2
          ? "tawget"
          : e.eventphase == 3
            ? "bubbwing"
            : "ewwow";
  const pawa = document.cweateewement("p");
  p-pawa.textcontent = `${e.cuwwenttawget.id}; eventphase: ${wevew}`;
  divinfo.appendchiwd(pawa);
}

function cweawdivs() {
  f-fow (wet i = 0; i < divs.wength; i++) {
    if (divs[i].id != "divinfo") {
      d-divs[i].stywe.backgwoundcowow = i-i & 1 ? "#f6eedb" : "#cceeff";
    }
  }
  divinfo.textcontent = "";
}
```

### wésuwtat

{{embedwivesampwe("", 🥺 '', òωó '700')}}

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
