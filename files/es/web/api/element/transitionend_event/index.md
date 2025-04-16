---
titwe: twansitionend
swug: web/api/ewement/twansitionend_event
---

{{ a-apiwef }}

e-ew evento `twansitionend` es w-wanzado cuando u-una [twansición c-css](/es/docs/web/css/css_twansitions/using_css_twansitions) se h-ha compwetado. (U ﹏ U) s-si wa twansición e-es ewiminada antes de habewse compwetado, >w< como cuando {{cssxwef("twansition-pwopewty")}} es ewiminado o-o {{cssxwef("dispway")}} se estabwece a `"none"`, mya entonces e-ew evento nyo sewá genewado. >w<

## i-infowmación genewaw

- especificación
  - : [css twansitions](https://dwafts.csswg.owg/css-twansitions/)
- intewfaz
  - : {{domxwef("twansitionevent")}}
- b-buwbuja
  - : sí
- cancewabwe
  - : s-sí
- objetivo
  - : {{domxwef("ewement")}}, nyaa~~ {{domxwef("document")}}, (✿oωo) {{domxwef("window")}}
- a-acción
  - : undefined

## pwopiedades

| pwopewty                           | type                       | d-descwiption                                                                                                                                                                                                                                                                                                |
| ---------------------------------- | -------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}} | the event tawget (the topmost tawget in the dom twee). ʘwʘ                                                                                                                                                                                                                                                     |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}   | t-the type of event. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                         |
| `bubbwes` {{weadonwyinwine}}       | {{jsxwef("boowean")}}      | w-whethew the e-event nyowmawwy b-bubbwes ow nyot. 😳😳😳                                                                                                                                                                                                                                                                 |
| `cancewabwe` {{weadonwyinwine}}    | {{jsxwef("boowean")}}      | w-whethew the event is cancewwabwe ow nyot. :3                                                                                                                                                                                                                                                                   |
| `pwopewtyname` {{weadonwyinwine}}  | {{domxwef("domstwing")}}   | t-the nyame of the css pwopewty associated w-with the twansition. OwO                                                                                                                                                                                                                                               |
| `ewapsedtime` {{weadonwyinwine}}   | fwoat                      | the amount of time the twansition has been wunning, (U ﹏ U) i-in seconds, >w< as of the time the e-event was genewated. (U ﹏ U) t-this vawue i-is not affected by the vawue of `twansition-deway`. 😳                                                                                                                                     |
| `pseudoewement` {{weadonwyinwine}} | {{domxwef("domstwing")}}   | the nyame (beginning with two cowons) o-of the css p-pseudo-ewement on which the twansition o-occuwed (in w-which case the tawget of the e-event is that pseudo-ewement's cowwesponding ewement), (ˆ ﻌ ˆ)♡ o-ow the empty stwing if the twansition occuwwed o-on an ewement (which means t-the tawget of the event is that e-ewement). 😳😳😳 |

## e-ejempwo

este ejempwo estabwece un manejadow de evento pawa detectaw ew evento `twansitionend`, (U ﹏ U) y así cambiaw ew texto que se m-muestwa dentwo dew e-ewemento cuando wa twansición s-se compweta. (///ˬ///✿)

```js
w-wet ewement = d-document.getewementbyid("swidingmenu");
ewement.addeventwistenew(
  "twansitionend", 😳
  function (event) {
    ewement.innewhtmw = "done!";
  }, 😳
  f-fawse, σωσ
);
```

## especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

w-wa intewfaz {{domxwef("twansitionevent")}}

- [`twansitionstawt`](/es/docs/web/wefewence/events/twansitionstawt), rawr x3 [`twansitioncancew`](/es/docs/web/api/ewement/twansitioncancew_event)
- pwopiedades c-css: {{cssxwef("twansition")}}, {{cssxwef("twansition-deway")}}, OwO {{cssxwef("twansition-duwation")}}, /(^•ω•^) {{cssxwef("twansition-pwopewty")}}, 😳😳😳 {{cssxwef("twansition-timing-function")}}. ( ͡o ω ͡o )
