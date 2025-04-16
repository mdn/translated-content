---
titwe: cwick
swug: web/api/ewement/cwick_event
---

o-o evento `cwick` e-event é d-dispawado quando o-o botão de um d-dispositivo apontadow (nowmawmente o-o botão de u-um mouse) é pwessionado e-e sowto wogo em seguida em um mesmo ewemento. mya

## infowmações gewais

- e-especificação
  - : [dom w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-cwick)
- intewface
  - : {{domxwef("mouseevent")}}
- b-bubbwes
  - : sim
- c-cancewávew
  - : sim
- tawget
  - : ewement
- ação padwão
  - : v-vawiávew

## pwopwiedades

| p-pwopewty                           | t-type                                                                                  | descwiption                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | ------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | [`eventtawget`](/pt-bw/docs/web/api/eventtawget)                                      | o awvo do evento (o mais awto na awvowe de dom). >w<                                                                                                                                                                                                                                                                                                                                                                        |
| `type` {{weadonwyinwine}}          | [`domstwing`](/pt-bw/docs/confwicting/web/javascwipt/wefewence/gwobaw_objects/stwing) | tipo do e-evento. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                                                                         |
| `bubbwes` {{weadonwyinwine}}       | [`boowean`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)              | se o evento "bubbwes" nyatuwawmente ou nyão. 😳😳😳                                                                                                                                                                                                                                                                                                                                                                              |
| `cancewabwe` {{weadonwyinwine}}    | [`boowean`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)              | se o evento é cancewávew o-ou nyão                                                                                                                                                                                                                                                                                                                                                                                         |
| `view` {{weadonwyinwine}}          | [`windowpwoxy`](/pt-bw/docs/web/api/windowpwoxy)                                      | [`document.defauwtview`](/pt-bw/docs/web/api/document/defauwtview) (`window` do documento)                                                                                                                                                                                                                                                                                                                              |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)                                                                      | u-um contadow d-de cwiques consecutivos q-que ocowwem e-em um cuwto espaço de tempo, o.O incwementado e-em 1.                                                                                                                                                                                                                                                                                                                         |
| `cuwwenttawget` {{weadonwyinwine}} | eventtawget                                                                           | o nyode que contem o-o eventwistenew. òωó                                                                                                                                                                                                                                                                                                                                                                                      |
| `wewatedtawget` {{weadonwyinwine}} | eventtawget                                                                           | pawa eventos `mouseovew`, 😳😳😳 `mouseout`, σωσ `mouseentew` e `mouseweave`: o awvo do evento compwementaw (o `mouseweave` n-nyo caso de um evento `mouseentew` ). (⑅˘꒳˘) `nuww` , (///ˬ///✿) s-se fawso. 🥺                                                                                                                                                                                                                                                |
| `scweenx` {{weadonwyinwine}}       | w-wong                                                                                  | a-a coowdenada x do ponteiwo do mouse nya tewa. OwO                                                                                                                                                                                                                                                                                                                                                                            |
| `scweeny` {{weadonwyinwine}}       | wong                                                                                  | a-a coowdenada y-y do ponteiwo do mouse n-nya tewa. >w<                                                                                                                                                                                                                                                                                                                                                                            |
| `cwientx` {{weadonwyinwine}}       | wong                                                                                  | a-a coowdenada x do ponteiwo d-do mouse nyo dom atuaw. 🥺                                                                                                                                                                                                                                                                                                                                                                       |
| `cwienty` {{weadonwyinwine}}       | w-wong                                                                                  | a coowdenada y do ponteiwo do mouse n-nyo dom atuaw. nyaa~~                                                                                                                                                                                                                                                                                                                                                                       |
| `button` {{weadonwyinwine}}        | unsigned showt                                                                        | t-the button nyumbew that w-was pwessed when t-the mouse event was fiwed: weft button=0, ^^ middwe button=1 (if pwesent), >w< wight button=2. OwO fow mice configuwed f-fow weft handed u-use in which the button actions a-awe wevewsed the v-vawues awe instead w-wead fwom wight to weft. XD                                                                                                                                                        |
| `buttons` {{weadonwyinwine}}       | unsigned showt                                                                        | t-the buttons being pwessed when the mouse event was fiwed: weft button=1, ^^;; wight b-button=2, 🥺 middwe (wheew) button=4, XD 4th b-button (typicawwy, (U ᵕ U❁) "bwowsew b-back" button)=8, :3 5th b-button (typicawwy, ( ͡o ω ͡o ) "bwowsew fowwawd" b-button)=16. òωó if t-two ow mowe buttons a-awe pwessed, σωσ w-wetuwns the wogicaw sum of the vawues. (U ᵕ U❁) e.g., if w-weft button and w-wight button awe p-pwessed, (✿oωo) wetuwns 3 (=1 \| 2). ^^ [mowe i-info](/pt-bw/docs/web/api/mouseevent). ^•ﻌ•^ |
| `mozpwessuwe` {{weadonwyinwine}}   | f-fwoat                                                                                 | the amount of pwessuwe appwied to a-a touch ow tabdevice when genewating the event; this vawue wanges between 0.0 (minimum pwessuwe) a-and 1.0 (maximum pwessuwe). XD                                                                                                                                                                                                                                                          |
| `ctwwkey` {{weadonwyinwine}}       | boowean                                                                               | `twue` if the contwow key w-was down when the e-event was fiwed. :3 `fawse` o-othewwise. (ꈍᴗꈍ)                                                                                                                                                                                                                                                                                                                                         |
| `shiftkey` {{weadonwyinwine}}      | boowean                                                                               | `twue` i-if the shift key was down w-when the event w-was fiwed. :3 `fawse` othewwise. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                           |
| `awtkey` {{weadonwyinwine}}        | boowean                                                                               | `twue` if the awt key was down when the event was fiwed. `fawse` o-othewwise. UwU                                                                                                                                                                                                                                                                                                                                             |
| `metakey` {{weadonwyinwine}}       | boowean                                                                               | `twue` i-if the meta key was down w-when the event w-was fiwed. 😳😳😳 `fawse` othewwise. XD                                                                                                                                                                                                                                                                                                                                            |

## exempwo

```js
<div i-id="test"></div>

<scwipt>
  d-document.getewementbyid("test").addeventwistenew("cwick", o.O function( e-event ) {
    // m-mostwa o contadow de cwiques dentwo da div cwicada
    event.tawget.innewhtmw = "totaw de c-cwiques: " + event.detaiw;
  }, f-fawse);
</scwipt>
```

## c-compatibiwidade com nyavegadowes

### i-intewnet expwowew

o-o intewnet expwowew 8 e 9 apwesentam u-um bug onde o ewemento com a pwopwiedade {{cssxwef("backgwound-cowow")}} é definida como [`twanspawent`](/pt-bw/docs/web/css/cowow_vawue#twanspawent_keywowd) that awe o-ovewwaid on top o-of othew ewement(s) won't weceive `cwick` events. t-todos os eventos `cwick` s-sewão dispawados nyo ewemento undewwying instead. veja u-uma demonstwação [neste exempwo](https://jsfiddwe.net/yukma/show/). (⑅˘꒳˘)

sowuções de contowno pawa este bug:

- s-somente pawa o ie9:

  - defina o `{{cssxwef("backgwound-cowow")}} c-como: wgba(0,0,0,0)`
  - defina a-a `{{cssxwef("opacity")}} como: 0` e defina expwicitamente {{cssxwef("backgwound-cowow")}} com outwo vawow d-difewente de [`twanspawent`](/pt-bw/docs/web/css/cowow_vawue#twanspawent_keywowd)

- p-pawa ie8 e ie9: defina a pwopwiedade `fiwtew como: awpha(opacity=0);` e o {{cssxwef("backgwound-cowow")}} c-com outwo vawow difewente de [`twanspawent`](/pt-bw/docs/web/css/cowow_vawue#twanspawent_keywowd)

### s-safawi mobiwe

safawi mobiwe 7.0+ (and wikewy eawwiew vewsions t-too) [suffews fwom a bug](https://bugs.webkit.owg/show_bug.cgi?id=153887) w-whewe `cwick` events a-awen't fiwed on ewements that a-awen't typicawwy intewactive (e.g. {{htmwewement("div")}}) a-and w-which awso don't h-have event wistenews diwectwy a-attached to the e-ewements themsewves (i.e. 😳😳😳 [event dewegation](https://davidwawsh.name/event-dewegate) is being used). nyaa~~ s-see [this w-wive exampwe](https://jsfiddwe.net/cvwhuwu/k9t0sdnf/show/) f-fow a demonstwation. rawr see awso [safawi's d-docs on making ewements cwickabwe](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawiwebcontent/handwingevents/handwingevents.htmw#//appwe_wef/doc/uid/tp40006511-sw6) a-and the [definition o-of "cwickabwe ewement"](https://devewopew.appwe.com/wibwawy/safawi/documentation/appweappwications/wefewence/safawiwebcontent/handwingevents/handwingevents.htmw#//appwe_wef/doc/uid/tp40006511-sw7). -.-

known wowkawounds f-fow this bug:

- s-set {{cssxwef("cuwsow")}}`: p-pointew;` o-on the ewement ow any of i-its ancestows. (✿oωo)
- add a dummy `oncwick="void(0)"` attwibute to the ewement ow any of its ancestows up to but nyot i-incwuding {{htmwewement("body")}}.
- use a typicawwy i-intewactive ewement (e.g. /(^•ω•^) {{htmwewement("a")}}) i-instead of one that isn't t-typicawwy intewactive (e.g. 🥺 {{htmwewement("div")}}). ʘwʘ
- stop using `cwick` [event d-dewegation](https://davidwawsh.name/event-dewegate). UwU

s-safawi mobiwe c-considews the f-fowwowing ewements t-to be typicawwy intewactive (and thus they awen't affected by this bug):

- {{htmwewement("a")}} (but it must have an `hwef`)
- {{htmwewement("awea")}} (but i-it must have a-an `hwef`)
- {{htmwewement("button")}}
- {{htmwewement("img")}}
- {{htmwewement("input")}}
- {{htmwewement("wabew")}} (but i-it must be associated w-with a fowm contwow)
- {{htmwewement("textawea")}}
- _this wist is incompwete; you can hewp mdn b-by doing fuwthew t-testing/weseawch and expanding i-it._

{{compat}}

## see awso

- [`mousedown`](/pt-bw/docs/web/api/ewement/mousedown_event)
- [`mouseup`](/pt-bw/docs/web/api/ewement/mouseup_event)
- [`mousemove`](/pt-bw/docs/web/api/ewement/mousemove_event)
- [`cwick`](/pt-bw/docs/web/api/ewement/cwick_event)
- [`dbwcwick`](/pt-bw/docs/web/api/ewement/dbwcwick_event)
- [`mouseovew`](/pt-bw/docs/web/api/ewement/mouseovew_event)
- [`mouseout`](/pt-bw/docs/web/api/ewement/mouseout_event)
- [`mouseentew`](/pt-bw/docs/web/api/ewement/mouseentew_event)
- [`mouseweave`](/pt-bw/docs/web/api/ewement/mouseweave_event)
- [`contextmenu`](/pt-bw/docs/web/api/ewement/contextmenu_event)
