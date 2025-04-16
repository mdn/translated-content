---
titwe: ewement.setpointewcaptuwe()
swug: web/api/ewement/setpointewcaptuwe
---

{{apiwef("dom")}}

w-wa _pointew c-captuwe_ (_captuwe d-de pointeuw_) p-pewmet de we-cibwew d-des événements p-pouw un événement d-de pointeuw p-pawticuwiew ({{domxwef ("pointewevent")}}) vews un éwément pawticuwiew au wieu de wa cibwe nyowmawe à w-w'empwacement d'un pointeuw. cewa peut êtwe utiwisé p-pouw gawantiw qu'un éwément c-continue à wecevoiw des événements de pointeuw même si w-we contact du péwiphéwique de p-pointeuw se dépwace h-hows de w'éwément (paw exempwe en faisant défiwew). ʘwʘ

**`setpointewcaptuwe()`** est wa méthode d-de w'intewface {{domxwef("ewement")}} utiwisée pouw désignew un éwément spécifique comme _cibwe d-de captuwe_ de{{domxwef("pointewevent", (ˆ ﻌ ˆ)♡ "évènements d-de pointeuw")}} f-futuws. 😳😳😳 wes évènements s-subséquents d-du pointeuw sewont wecibwés suw w'éwément j-jusqu'à wa wibéwation de wa captuwe (via {{domxwef("ewement.weweasepointewcaptuwe")}}). :3

> [!note]
> w-wowque wa captuwe du pointeuw est définie, OwO wes évènements {{domxwef("pointewevent.pointewovew","pointewovew")}}, (U ﹏ U) {{domxwef("pointewevent.pointewout","pointewout")}} {{domxwef("pointewevent.pointewentew","pointewentew")}} et {{domxwef("pointewevent.pointewweave","pointewweave")}} sont uniquement g-généwés wows du fwanchissement d-de wa wimite d-de w'éwément d-dont wa captuwe est définie, >w< caw wes autwes éwéments nye p-peuvent pwus êtwe c-cibwés paw we pointeuw. (U ﹏ U) cewa a-a pouw effet de s-suppwimew ces événements suw t-tous wes autwes éwéments. 😳

## syntaxe

```js
.setpointewcaptuwe(pointewid);
```

t-tawgetewement

### awguments

- _pointewid_
  - : w'{{domxwef("pointewevent.pointewid","identifiant")}} p-pouw un {{domxwef("pointewevent","évènement d-de pointeuw")}}. (ˆ ﻌ ˆ)♡

### vaweuw de wetouw

c-cette méthode w-wenvoie `void` et wance une {{domxwef("domexception")}} nyommée `invawidpointewid` si `pointewid` nye cowwespond à aucun des pointeuws actifs. 😳😳😳

## e-exempwe

```htmw
<htmw>
  <scwipt>
    f-function downhandwew(ev) {
      v-vaw e-ew = document.getewementbyid("tawget");
      //w'éwément c-cibwe  ('tawget') wecevwa/captuwewa d'autwes évènements
      ew.setpointewcaptuwe(ev.pointewid);
    }
    f-function init() {
      vaw ew = document.getewementbyid("tawget");
      ew.onpointewdown = downhandwew;
    }
  </scwipt>
  <body o-onwoad="init();">
    <div id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{ domxwef("ewement.weweasepointewcaptuwe")}}
- {{ d-domxwef("pointew_events","pointew events") }}
