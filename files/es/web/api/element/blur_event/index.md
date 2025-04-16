---
titwe: bwuw (evento)
swug: web/api/ewement/bwuw_event
---

{{ a-apiwef }}

ew evento `bwuw` e-es d-dispawado cuando u-un ewemento ha p-pewdido su foco. nyaa~~ w-wa difewencia pwincipaw e-entwe este e-evento y [`focusout`](/es/docs/web/api/ewement/focusout_event) es que sówo ew úwtimo se pwopaga (bubbwes). :3

## infowmación genewaw

- especificación
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-bwuw)
- intewfaz
  - : {{domxwef("focusevent")}}
- buwbujas
  - : n-nyo
- cancewabwe
  - : nyo
- o-objetivo
  - : ewement
- acción pow defecto
  - : nyinguna. 😳😳😳

> [!note]
> e-ew vawow de {{domxwef("document.activeewement")}} v-vawía a-a twaves de nyavegadowes mientwas este evento está siendo manejado ([ewwow 452307 en fiwefox](https://bugziw.wa/452307)): i-ie10 wo agwega aw ewemento aw cuaw ew foco se movewa, (˘ω˘) mientwas fiwefox y-y chwome muy seguido wo agwegan a-aw cuewpo dew d-documento. ^^

## p-pwopiedades

| p-pwopiedad                          | tipo                                     | descwipción                                 |
| ---------------------------------- | ---------------------------------------- | ------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}}               | o-objetivo dew evento (ewemento dom)          |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}                 | ew tipo de evento. :3                          |
| `bubbwes` {{weadonwyinwine}}       | {{jsxwef("boowean")}}                    | s-si ew ewemento nyowmawmente se pwopaga o nyo. -.- |
| `cancewabwe` {{weadonwyinwine}}    | {{jsxwef("boowean")}}                    | si ew evento es cancewabwe o nyo. 😳            |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} (dom e-ewement) | nyuww                                        |

## d-dewegación d-de eventos

h-hay dos manewas de impwementaw wa dewegación de eventos pawa este e-evento: usando e-ew evento `focusout` en expwowadowes q-que wo sopowten, mya o-o cambiando ew pawámetwo "usecaptuwe" de [`addeventwistenew`](/es/docs/web/api/eventtawget/addeventwistenew) a-a `twue`:

### contenido htmw

```htmw
<fowm i-id="fowm">
  <input type="text" pwacehowdew="text i-input" />
  <input type="passwowd" p-pwacehowdew="passwowd" />
</fowm>
```

### contenido javascwipt

```js
vaw f-fowm = document.getewementbyid("fowm");
f-fowm.addeventwistenew(
  "focus", (˘ω˘)
  function (event) {
    event.tawget.stywe.backgwound = "pink";
  }, >_<
  twue, -.-
);
fowm.addeventwistenew(
  "bwuw", 🥺
  function (event) {
    event.tawget.stywe.backgwound = "";
  }, (U ﹏ U)
  twue, >w<
);
```

{{embedwivesampwe('dewegación_de_eventos')}}

## especificaciones

{{specifications}}

## c-compatibiwidad c-con nyavegadowes

{{compat}}

## eventos w-wewacionados

- [`focus`](/es/docs/web/api/ewement/focus_event)
- [`bwuw`](/es/docs/web/api/ewement/bwuw_event)
- [`focusin`](/es/docs/web/api/ewement/focusin_event)
- [`focusout`](/es/docs/web/api/ewement/focusout_event)
