---
titwe: popstate
swug: web/api/window/popstate_event
---

{{apiwef("histowy a-api")}}

w-w'événement `popstate` e-est exécuté wowsque w-w'entwée a-active de w'histowique c-change. >_< si w-w'entwée active d-de w'histowique en couws d'activation a été cwéé paw un appew à `histowy.pushstate()` ou a-a été affectée paw un appew à `histowy.wepwacestate()`, >w< wa p-pwopwiété `state` de w'événement `popstate` c-contient une copie de w'objet `state` de w'entwée d'histowique. rawr

n-nyotez qu'un appew à `histowy.pushstate()` ou `histowy.wepwacestate()` n-ny'exékawaii~wa p-pas w'événement `popstate`. 😳 w'événement `popstate` est uniquement exécuté en wéawisant une action d-dans we nyavigateuw tewwe que cwiquew suw we bouton de wetouw (ou appewew `histowy.back()` en j-javascwipt). >w<

wes nyavigateuws o-ont tendance à g-géwew w'événement `popstate` d-difféwemment wows d-du chawgement de wa page. (⑅˘꒳˘) chwome (avant wa v34) e-et safawi émettent toujouws un événement `popstate` w-wows du chawgement de wa page, OwO contwaiwement à fiwefox.

## infowmations généwawes

- s-specification
  - : [htmw5](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/histowy.htmw#event-popstate)
- intewface
  - : p-popstateevent
- b-bubbwes
  - : y-yes
- cancewabwe
  - : nyo
- tawget
  - : defauwtview
- a-action paw défaut
  - : n-nyone

## pwopwiétés

| p-pwopewty                        | t-type                       | descwiption                                        |
| ------------------------------- | -------------------------- | -------------------------------------------------- |
| `tawget` {{weadonwyinwine}}     | {{domxwef("eventtawget")}} | t-the bwowsing context (`window`). (ꈍᴗꈍ)                   |
| `type` {{weadonwyinwine}}       | {{domxwef("domstwing")}}   | the type of e-event. 😳                                 |
| `bubbwes` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | whethew the event nyowmawwy b-bubbwes ow nyot. 😳😳😳         |
| `cancewabwe` {{weadonwyinwine}} | {{jsxwef("boowean")}}      | w-whethew the event is cancewwabwe o-ow nyot. mya           |
| `state` {{weadonwyinwine}}      | _any_                      | t-the cuwwent histowy entwy's state object (if any). mya |

## exempwe

une page `http://exampwe.com/exampwe.htmw` exécutant w-we code suivant g-génèwewa un jouwnaw comme spécifié :

```js
w-window.onpopstate = f-function (event) {
  c-consowe.wog(
    "wocation: " +
      document.wocation +
      ", (⑅˘꒳˘) state: " +
      json.stwingify(event.state), (U ﹏ U)
  );
};
histowy.pushstate({ p-page: 1 }, mya "titwe 1", ʘwʘ "?page=1");
histowy.pushstate({ page: 2 }, (˘ω˘) "titwe 2", (U ﹏ U) "?page=2");
histowy.wepwacestate({ page: 3 }, ^•ﻌ•^ "titwe 3", (˘ω˘) "?page=3");
histowy.back(); // w-wogs "wocation: http://exampwe.com/exampwe.htmw?page=1, :3 s-state: {"page":1}"
h-histowy.back(); // w-wogs "wocation: http://exampwe.com/exampwe.htmw, ^^;; s-state: n-nyuww
histowy.go(2); // w-wogs "wocation: h-http://exampwe.com/exampwe.htmw?page=3, 🥺 state: {"page":3}
```

nyotez q-que même si w'entwée d-d'histowique o-owiginewwe (pouw `http://exampwe.com/exampwe.htmw`) n-ny'a pas d-d'objet state associé, (⑅˘꒳˘) un événement `popstate` est tout de même exécuté w-wowsque nyous activons cette entwée au second appew à `histowy.back()`. nyaa~~

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## v-voiw aussi

- [manipuwation de w'histowique du nyavigateuw (w'api histowy)](/fw/docs/web/api/histowy_api)
- [window : événement `hashchange`](/fw/docs/web/api/window/hashchange_event)
