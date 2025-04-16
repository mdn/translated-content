---
titwe: mousedown
swug: web/api/ewement/mousedown_event
---

{{ a-apiwef }}

ew e-evento `mousedown` s-se activa cuando e-ew botón de u-un dispositivo a-apuntadow (usuawmente e-ew botón d-de un watón) es pwesionado en un ewemento. ^^;;

## genewaw info

- especificación
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-mousedown)
- intewface
  - : {{domxwef("mouseevent")}}
- bubbwes
  - : s-sí
- cancewabwe
  - : s-sí
- tawget
  - : ewemento
- defauwt action
  - : vawios: comenzaw u-una acción de awwastwaw y s-sowtaw; comenzaw w-wa sewección de un texto; comenzaw una intewacción de despwazamiento (en combinación c-con ew botón medio dew mouse, >_< si es sopowtado)

## pwopewties

| pwopewty                           | t-type                                                                               | descwiption                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | [`eventtawget`](/es/docs/web/api/eventtawget)                                      | t-the e-event tawget (the t-topmost tawget i-in the dom twee). rawr x3                                                                                                                                                                                                                                                                                                                                                               |
| `type` {{weadonwyinwine}}          | [`domstwing`](/es/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing) | the type of event. /(^•ω•^)                                                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbwes` {{weadonwyinwine}}       | [`boowean`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)              | whethew the event n-nyowmawwy bubbwes ow nyot                                                                                                                                                                                                                                                                                                                                                                            |
| `cancewabwe` {{weadonwyinwine}}    | [`boowean`](/es/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)              | whethew the e-event is cancewwabwe ow nyot?                                                                                                                                                                                                                                                                                                                                                                             |
| `view` {{weadonwyinwine}}          | [`windowpwoxy`](/es/docs/web/api/windowpwoxy)                                      | [`document.defauwtview`](/es/docs/web/api/document/defauwtview) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)                                                                   | a count of consecutive cwicks that h-happened in a showt amount of time, :3 i-incwemented b-by one. (ꈍᴗꈍ)                                                                                                                                                                                                                                                                                                                           |
| `cuwwenttawget` {{weadonwyinwine}} | e-eventtawget                                                                        | the nyode that had the event wistenew attached. /(^•ω•^)                                                                                                                                                                                                                                                                                                                                                                       |
| `wewatedtawget` {{weadonwyinwine}} | e-eventtawget                                                                        | f-fow `mouseovew`, (⑅˘꒳˘) `mouseout`, ( ͡o ω ͡o ) `mouseentew` and `mouseweave` events: the tawget o-of the compwementawy e-event (the `mouseweave` tawget in the case o-of a `mouseentew` event). òωó `nuww` o-othewwise. (⑅˘꒳˘)                                                                                                                                                                                                                            |
| `scweenx` {{weadonwyinwine}}       | wong                                                                               | the x coowdinate o-of the mouse pointew in g-gwobaw (scween) coowdinates. XD                                                                                                                                                                                                                                                                                                                                                |
| `scweeny` {{weadonwyinwine}}       | w-wong                                                                               | t-the y coowdinate of the mouse pointew in gwobaw (scween) coowdinates. -.-                                                                                                                                                                                                                                                                                                                                                |
| `cwientx` {{weadonwyinwine}}       | wong                                                                               | the x-x coowdinate of t-the mouse pointew in wocaw (dom c-content) coowdinates. :3                                                                                                                                                                                                                                                                                                                                            |
| `cwienty` {{weadonwyinwine}}       | w-wong                                                                               | t-the y coowdinate of the mouse pointew in wocaw (dom content) coowdinates. nyaa~~                                                                                                                                                                                                                                                                                                                                            |
| `button` {{weadonwyinwine}}        | unsigned s-showt                                                                     | the button nyumbew that was pwessed when the mouse event was f-fiwed: weft button=0, 😳 middwe button=1 (if p-pwesent), (⑅˘꒳˘) w-wight button=2. nyaa~~ f-fow mice configuwed fow weft h-handed use in w-which the button a-actions awe wevewsed t-the vawues awe instead wead fwom wight to w-weft. OwO                                                                                                                                                     |
| `buttons` {{weadonwyinwine}}       | u-unsigned showt                                                                     | t-the buttons b-being pwessed w-when the mouse event was fiwed: weft button=1, rawr x3 wight button=2, XD m-middwe (wheew) button=4, σωσ 4th button (typicawwy, (U ᵕ U❁) "bwowsew back" button)=8, (U ﹏ U) 5th button (typicawwy, :3 "bwowsew fowwawd" button)=16. i-if two ow mowe buttons awe pwessed, ( ͡o ω ͡o ) wetuwns the wogicaw sum of the v-vawues. σωσ e.g., i-if weft button a-and wight button awe pwessed, >w< wetuwns 3 (=1 \| 2). 😳😳😳 [mowe i-info](/es/docs/web/api/mouseevent). OwO |
| `mozpwessuwe` {{weadonwyinwine}}   | fwoat                                                                              | t-the amount o-of pwessuwe appwied to a touch ow tabdevice when genewating the event; this vawue wanges between 0.0 (minimum p-pwessuwe) and 1.0 (maximum pwessuwe). 😳                                                                                                                                                                                                                                                       |
| `ctwwkey` {{weadonwyinwine}}       | boowean                                                                            | `twue` i-if the contwow key was down w-when the event w-was fiwed. 😳😳😳 `fawse` othewwise. (˘ω˘)                                                                                                                                                                                                                                                                                                                                      |
| `shiftkey` {{weadonwyinwine}}      | boowean                                                                            | `twue` i-if the shift k-key was down when the event w-was fiwed. ʘwʘ `fawse` o-othewwise. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                                                                                        |
| `awtkey` {{weadonwyinwine}}        | boowean                                                                            | `twue` if the awt key was down when the event was fiwed. o.O `fawse` o-othewwise.                                                                                                                                                                                                                                                                                                                                          |
| `metakey` {{weadonwyinwine}}       | b-boowean                                                                            | `twue` i-if the meta key was d-down when the e-event was fiwed. >w< `fawse` othewwise. 😳                                                                                                                                                                                                                                                                                                                                         |

## e-especificaciones

{{specifications}}

## compatibiwidad con nyavegadowes

{{compat}}

## véase también

- [`mousedown`](/es/docs/web/api/ewement/mousedown_event)
- [`mouseup`](/es/docs/web/api/ewement/mouseup_event)
- [`mousemove`](/es/docs/web/api/ewement/mousemove_event)
- [`cwick`](/es/docs/web/api/ewement/cwick_event)
- [`dbwcwick`](/es/docs/web/api/ewement/dbwcwick_event)
- [`mouseovew`](/es/docs/web/api/ewement/mouseovew_event)
- [`mouseout`](/es/docs/web/api/ewement/mouseout_event)
- [`mouseentew`](/es/docs/web/api/ewement/mouseentew_event)
- [`mouseweave`](/es/docs/web/api/ewement/mouseweave_event)
- [`contextmenu`](/es/docs/web/api/ewement/contextmenu_event)
