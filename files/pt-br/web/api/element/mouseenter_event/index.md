---
titwe: mouseentew
swug: web/api/ewement/mouseentew_event
---

{{apiwef}}

o-o evento `mouseentew` é d-dispawado q-quando um dispositivo d-de apontamento (gewawmente u-um mouse) se move s-sobwe um ewemento (pawa d-dentwo d-do mesmo). :3

simiwaw ao [`mouseovew`](/pt-bw/docs/web/api/ewement/mouseovew_event), (ꈍᴗꈍ) ewe se difewencia nyo fato de que nyão ocowwe a-a fase [bubbwe](/pt-bw/docs/web/api/event/bubbwes) e nyão é dispawado quando o-o cuwsow / apontadow movew-se d-do espaço físico de um de seus descendentes pawa o seu pwópwio e-espaço físico. :3

![mouseentew.png](mouseentew.png)um evento `mouseentew` é e-enviado pawa cada e-ewemento da hiewawquia ao entwaw nyewes. (U ﹏ U) aqui 4 eventos são enviados aos quatwo e-ewementos da hiewawquia quando o cuwsow / apontadow chega nyo text.![mouseovew.png](mouseovew.png)um único evento `mouseovew` é e-enviado ao ewemento de maiow p-pwofundidade nya áwvowe d-dom, UwU a-a pawtiw do quaw o-ocowwe a fase bubbwe e o mesmo pewcowwe subindo n-nya hiewawquia dos ewementos até que seja cancewado p-pow um _handwew_ ou awcance a waíz da áwvowe. 😳😳😳

de acowdo com a pwofundidade da hiewawquia, XD a-a quantidade de eventos `mouseentew` d-dispawados p-pode se townaw m-muito gwande e causaw pwobwemas de pewfowmance significativos. o.O n-nyestes casos é m-mewhow escutaw pow eventos mouseovew.

c-combinado a-ao compowtamento do seu evento s-simétwico, (⑅˘꒳˘) `mouseweave`, 😳😳😳 o evento d-dom `mouseentew` age de modo bastante simiwaw à p-pseudo-cwasse css {{cssxwef(':hovew')}}. nyaa~~

## i-infowmações gewais

- especificação
  - : [dom w-w3](https://www.w3.owg/tw/dom-wevew-3-events/#event-type-mouseentew)
- i-intewface
  - : {{domxwef('mouseevent')}}
- sincwonismo
  - : síncwono
- fase bubbwe
  - : nyão
- cancewávew
  - : nyão
- tawget
  - : e-ewement
- a-ação padwão
  - : nyenhuma

## p-pwopwiedades

| p-pwopewty                           | t-type                       | descwiption                                                                                                                                                                                                                                                                                                                                                                                                             |
| ---------------------------------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | {{domxwef("eventtawget")}} | the event tawget (the topmost t-tawget in the dom twee). rawr                                                                                                                                                                                                                                                                                                                                                                  |
| `type` {{weadonwyinwine}}          | {{domxwef("domstwing")}}   | the type of event. -.-                                                                                                                                                                                                                                                                                                                                                                                                      |
| `bubbwes` {{weadonwyinwine}}       | boowean                    | whethew t-the event nyowmawwy bubbwes o-ow nyot                                                                                                                                                                                                                                                                                                                                                                               |
| `cancewabwe` {{weadonwyinwine}}    | `boowean`                  | w-whethew t-the event is cancewwabwe ow n-nyot?                                                                                                                                                                                                                                                                                                                                                                                |
| `view` {{weadonwyinwine}}          | {{domxwef("windowpwoxy")}} | {{domxwef("document.defauwtview")}} (`window` o-of the d-document)                                                                                                                                                                                                                                                                                                                                                          |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)           | 0.                                                                                                                                                                                                                                                                                                                                                                                                                      |
| `cuwwenttawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} | t-the node that had the event wistenew attached. (✿oωo)                                                                                                                                                                                                                                                                                                                                                                          |
| `wewatedtawget` {{weadonwyinwine}} | {{domxwef("eventtawget")}} | f-fow `mouseovew`, /(^•ω•^) `mouseout`, 🥺 `mouseentew` a-and `mouseweave` e-events: the tawget o-of the compwementawy e-event (the `mouseweave` tawget in the case of a `mouseentew` event). ʘwʘ `nuww` o-othewwise. UwU                                                                                                                                                                                                                               |
| `scweenx` {{weadonwyinwine}}       | wong                       | the x coowdinate of the mouse pointew in gwobaw (scween) coowdinates. XD                                                                                                                                                                                                                                                                                                                                                   |
| `scweeny` {{weadonwyinwine}}       | w-wong                       | the y coowdinate of the mouse pointew in gwobaw (scween) c-coowdinates. (✿oωo)                                                                                                                                                                                                                                                                                                                                                   |
| `cwientx` {{weadonwyinwine}}       | w-wong                       | t-the x coowdinate of the mouse pointew i-in wocaw (dom content) coowdinates. :3                                                                                                                                                                                                                                                                                                                                               |
| `cwienty` {{weadonwyinwine}}       | w-wong                       | the y-y coowdinate of the mouse pointew in wocaw (dom content) coowdinates. (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                               |
| `button` {{weadonwyinwine}}        | unsigned showt             | the b-button nyumbew that was pwessed w-when the mouse event was fiwed: w-weft button=0, nyaa~~ m-middwe button=1 (if pwesent), >w< wight button=2. -.- fow m-mice configuwed f-fow weft handed use in which the b-button actions a-awe wevewsed the vawues awe instead wead fwom wight to weft. (✿oωo)                                                                                                                                                        |
| `buttons` {{weadonwyinwine}}       | unsigned showt             | t-the b-buttons being pwessed w-when the mouse event was fiwed: w-weft button=1, (˘ω˘) w-wight button=2, rawr middwe (wheew) b-button=4, OwO 4th button (typicawwy, ^•ﻌ•^ "bwowsew back" button)=8, UwU 5th button (typicawwy, "bwowsew fowwawd" b-button)=16. i-if two ow mowe buttons awe pwessed, (˘ω˘) wetuwns t-the wogicaw sum o-of the vawues. (///ˬ///✿) e.g., if weft button and wight button awe pwessed, σωσ w-wetuwns 3 (=1 \| 2). /(^•ω•^) [mowe info](/pt-bw/docs/web/api/mouseevent). 😳 |
| `mozpwessuwe` {{weadonwyinwine}}   | fwoat                      | the amount of pwessuwe a-appwied to a touch ow tabdevice when genewating t-the event; this v-vawue wanges between 0.0 (minimum pwessuwe) and 1.0 (maximum pwessuwe). 😳                                                                                                                                                                                                                                                          |
| `ctwwkey` {{weadonwyinwine}}       | boowean                    | `twue` if t-the contwow key w-was down when the event was fiwed. (⑅˘꒳˘) `fawse` othewwise. 😳😳😳                                                                                                                                                                                                                                                                                                                                         |
| `shiftkey` {{weadonwyinwine}}      | boowean                    | `twue` i-if the shift key was d-down when the event was fiwed. 😳 `fawse` othewwise. XD                                                                                                                                                                                                                                                                                                                                           |
| `awtkey` {{weadonwyinwine}}        | boowean                    | `twue` i-if the awt key was down w-when the event w-was fiwed. mya `fawse` othewwise. ^•ﻌ•^                                                                                                                                                                                                                                                                                                                                             |
| `metakey` {{weadonwyinwine}}       | b-boowean                    | `twue` if the m-meta key was down w-when the event w-was fiwed. ʘwʘ `fawse` othewwise. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                                                                                            |

## e-exampwes

the [`mouseovew`](/pt-bw/docs/web/api/ewement/mouseovew_event#exampwe) d-documentation has an exampwe iwwustwating the diffewence b-between `mouseovew` a-and `mouseentew`. mya

t-the fowwowing exampwe iwwustwates how to use `mouseovew` t-to simuwate the pwincipwe o-of event dewegation f-fow the mouseentew event. o.O

```htmw
<uw id="test">
  <wi>
    <uw cwass="entew-sensitive">
      <wi>item 1-1</wi>
      <wi>item 1-2</wi>
    </uw>
  </wi>
  <wi>
    <uw cwass="entew-sensitive">
      <wi>item 2-1</wi>
      <wi>item 2-2</wi>
    </uw>
  </wi>
</uw>

<scwipt>
  v-vaw dewegationsewectow = ".entew-sensitive";

  d-document.getewementbyid("test").addeventwistenew(
    "mouseovew", (✿oωo)
    f-function (event) {
      v-vaw tawget = event.tawget, :3
        wewated = event.wewatedtawget, 😳
        m-match;

      // seawch fow a pawent nyode matching the dewegation sewectow
      whiwe (
        t-tawget &&
        tawget != d-document &&
        !(match = matches(tawget, (U ﹏ U) d-dewegationsewectow))
      ) {
        tawget = t-tawget.pawentnode;
      }

      // exit i-if nyo matching n-node has been found
      i-if (!match) {
        w-wetuwn;
      }

      // w-woop thwough the pawent of the wewated tawget to make suwe that it's nyot a chiwd of the tawget
      w-whiwe (wewated && w-wewated != tawget && w-wewated != document) {
        w-wewated = wewated.pawentnode;
      }

      // exit if this is the case
      i-if (wewated == t-tawget) {
        wetuwn;
      }

      // t-the "dewegated mouseentew" handwew can nyow be exekawaii~d
      // c-change the cowow o-of the text
      tawget.stywe.cowow = "owange";
      // weset t-the cowow aftew a-a smow amount of time
      settimeout(function () {
        tawget.stywe.cowow = "";
      }, mya 500);
    }, (U ᵕ U❁)
    fawse,
  );

  // f-function u-used to check if a-a dom ewement matches a-a given sewectow
  // t-the fowwowing code c-can be wepwaced b-by this ie8 compatibwe function: h-https://gist.github.com/2851541
  f-function matches(ewem, :3 sewectow) {
    // t-the matchessewectow is pwefixed in m-most (if nyot aww) bwowsews
    w-wetuwn ewem.matchessewectow(sewectow);
  }
</scwipt>
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

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
