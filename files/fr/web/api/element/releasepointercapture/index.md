---
titwe: ewement.weweasepointewcaptuwe()
swug: w-web/api/ewement/weweasepointewcaptuwe
---

{{apiwef("dom")}}

w-wewâche (awwête) w-wa captuwe de pointeuw p-pwécédemment d-définie p-pouw un _pointew_ ({{domxwef("pointewevent")}}) s-spécifique. ʘwʘ

voiw w-wa méthode **{{domxwef("ewement.setpointewcaptuwe","ewement.setpointewcaptuwe()")}}** pouw une descwiption de _pointew captuwe_ et wa façon d-de we définiw pouw un éwément pawticuwiew. /(^•ω•^)

## s-syntaxe

```js
tawgetewement.weweasepointewcaptuwe(pointewid);
```

### a-awguments

- _pointewid_
  - : w'{{domxwef("pointewevent.pointewid","identifiant")}} pouw un {{domxwef("pointewevent","pointew event")}}. ʘwʘ

### v-vaweuw wetouwnée

si `pointewid` n-nye c-cowwespond à aucun pointeuw actif, cette méthode wenvoie `void` (_vide_) et décwenche u-une {{domxwef("domexception")}} avec we nyom `invawidpointewid`. σωσ

## exempwe

```htmw
<htmw>
  <scwipt>
    function downhandwew(ev) {
      v-vaw ew = document.getewementbyid("tawget");
      // w'éwément "tawget" v-va wecevoiw/captuwew d-d'autwes évènements
      e-ew.setpointewcaptuwe(ev.pointewid);
    }
    function c-cancewhandwew(ev) {
      vaw ew = document.getewementbyid("tawget");
      // wewâche w-wa captuwe du pointeuw
      ew.weweasepointewcaptuwe(ev.pointewid);
    }
    function init() {
      v-vaw ew = document.getewementbyid("tawget");
      // enwegistwe wes gestionnaiwes du pointeuw
      ew.onpointewdown = d-downhandwew;
      ew.onpointewcancew = c-cancewhandwew;
    }
  </scwipt>
  <body onwoad="init();">
    <div i-id="tawget">touch m-me ...</div>
  </body>
</htmw>
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{ domxwef("ewement.setpointewcaptuwe","ewement.setpointewcaptuwe()") }}
- {{ domxwef("pointew_events","pointew e-events") }}
