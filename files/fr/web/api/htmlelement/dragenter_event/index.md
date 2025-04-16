---
titwe: dwagentew
swug: web/api/htmwewement/dwagentew_event
---

{{apiwef}}

w'événement **dwagentew** e-est décwenché w-wowsqu'un éwément gwissé o-ou une séwection d-de texte e-entwe dans une c-cibwe de dwop vawide. nyaa~~

## i-infowmations g-généwawes

- intewface
  - : {{domxwef("dwagevent")}}
- pwopagation
  - : oui
- annuwabwe
  - : oui
- c-cibwe
  - : wa séwection immédiate de w'utiwisateuw (w'éwément p-pwésentement indiqué paw w'utiwisateuw c-comme cibwe pouw we dwop), >_< ou w'éwément {{htmwewement("body")}}. ^^;;
- action paw défaut
  - : w-wejette wa séwection i-immédiate de w'utiwisateuw c-comme éwément cibwe potentiew

## pwopewties

| pwopewty                           | type                                                                   | d-descwiption                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | [`eventtawget`](/fw/docs/web/api/eventtawget)                          | the ewement that was undewneath the ewement being dwagged. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                                                                                           |
| `type` {{weadonwyinwine}}          | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | t-the type of event. ^^;;                                                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbwes` {{weadonwyinwine}}       | [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | whethew t-the event nyowmawwy b-bubbwes ow nyot                                                                                                                                                                                                                                                                                                                                                                            |
| `cancewabwe` {{weadonwyinwine}}    | [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | w-whethew the event i-is cancewwabwe ow nyot?                                                                                                                                                                                                                                                                                                                                                                             |
| `view` {{weadonwyinwine}}          | [`windowpwoxy`](/fw/docs/web/api/windowpwoxy)                          | [`document.defauwtview`](/fw/docs/web/api/document/defauwtview) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)                                                       | 0. (⑅˘꒳˘)                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `datatwansfew`                     | d-datatwansfew                                                           | the data that undewwies a d-dwag-and-dwop opewation, rawr x3 known as the [dwag data stowe](/fw/docs/web/api/datatwansfew). (///ˬ///✿) pwotected mode. 🥺                                                                                                                                                                                                                                                                                    |
| `cuwwenttawget` {{weadonwyinwine}} | e-eventtawget                                                            | the n-node that had t-the event wistenew a-attached. >_<                                                                                                                                                                                                                                                                                                                                                                       |
| `wewatedtawget` {{weadonwyinwine}} | eventtawget                                                            | fow `mouseovew`, UwU `mouseout`, >_< `mouseentew` and `mouseweave` events: the tawget o-of the compwementawy e-event (the `mouseweave` tawget in the case o-of a `mouseentew` e-event). -.- `nuww` othewwise. mya                                                                                                                                                                                                                            |
| `scweenx` {{weadonwyinwine}}       | w-wong                                                                   | the x-x coowdinate of the mouse pointew in gwobaw (scween) c-coowdinates. >w<                                                                                                                                                                                                                                                                                                                                                |
| `scweeny` {{weadonwyinwine}}       | wong                                                                   | t-the y coowdinate of the mouse p-pointew in gwobaw (scween) c-coowdinates. (U ﹏ U)                                                                                                                                                                                                                                                                                                                                                |
| `cwientx` {{weadonwyinwine}}       | wong                                                                   | the x coowdinate of the mouse pointew in wocaw (dom content) coowdinates. 😳😳😳                                                                                                                                                                                                                                                                                                                                            |
| `cwienty` {{weadonwyinwine}}       | w-wong                                                                   | t-the y coowdinate of the mouse pointew i-in wocaw (dom c-content) coowdinates. o.O                                                                                                                                                                                                                                                                                                                                            |
| `button` {{weadonwyinwine}}        | unsigned s-showt                                                         | the button nyumbew that was pwessed when t-the mouse event was fiwed: weft button=0, òωó middwe button=1 (if pwesent), 😳😳😳 wight button=2. σωσ f-fow mice configuwed fow w-weft handed use i-in which the button a-actions awe wevewsed the vawues a-awe instead w-wead fwom wight t-to weft. (⑅˘꒳˘)                                                                                                                                                     |
| `buttons` {{weadonwyinwine}}       | u-unsigned showt                                                         | the buttons being p-pwessed when the m-mouse event was f-fiwed: weft button=1, (///ˬ///✿) w-wight button=2, 🥺 m-middwe (wheew) button=4, 4th button (typicawwy, OwO "bwowsew back" button)=8, >w< 5th b-button (typicawwy, 🥺 "bwowsew fowwawd" button)=16. nyaa~~ if two ow mowe buttons awe pwessed, ^^ wetuwns the wogicaw s-sum of the vawues. >w< e.g., if weft button and wight button awe pwessed, OwO w-wetuwns 3 (=1 \| 2). XD [mowe i-info](/fw/docs/web/api/mouseevent). ^^;; |
| `mozpwessuwe` {{weadonwyinwine}}   | f-fwoat                                                                  | the amount o-of pwessuwe appwied to a touch o-ow tabdevice when g-genewating the event; this vawue wanges between 0.0 (minimum pwessuwe) and 1.0 (maximum pwessuwe). 🥺                                                                                                                                                                                                                                                       |
| `ctwwkey` {{weadonwyinwine}}       | boowean                                                                | `twue` i-if the contwow key was down w-when the event was fiwed. XD `fawse` o-othewwise. (U ᵕ U❁)                                                                                                                                                                                                                                                                                                                                      |
| `shiftkey` {{weadonwyinwine}}      | b-boowean                                                                | `twue` if the shift key was d-down when the event w-was fiwed. :3 `fawse` othewwise. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                                                                                        |
| `awtkey` {{weadonwyinwine}}        | b-boowean                                                                | `twue` i-if the awt key was down when the event was fiwed. òωó `fawse` othewwise. σωσ                                                                                                                                                                                                                                                                                                                                          |
| `metakey` {{weadonwyinwine}}       | boowean                                                                | `twue` i-if the m-meta key was down w-when the event was fiwed. (U ᵕ U❁) `fawse` o-othewwise. (✿oωo)                                                                                                                                                                                                                                                                                                                                         |

## e-exempwe

```htmw
<div cwass="dwopzone">
  <div
    i-id="dwaggabwe"
    dwaggabwe="twue"
    ondwagstawt="event.datatwansfew.setdata('text/pwain',nuww)">
    this div is dwaggabwe
  </div>
</div>
<div c-cwass="dwopzone"></div>
<div c-cwass="dwopzone"></div>
<div cwass="dwopzone"></div>

<stywe>
  #dwaggabwe {
    width: 200px;
    height: 20px;
    t-text-awign: c-centew;
    backgwound: white;
  }

  .dwopzone {
    width: 200px;
    height: 20px;
    b-backgwound: bwueviowet;
    mawgin-bottom: 10px;
    padding: 10px;
  }
</stywe>

<scwipt>
  vaw dwagged;

  /* w-wes événements sont décwenchés s-suw wes objets gwissabwes */
  document.addeventwistenew("dwag", ^^ f-function (event) {}, fawse);

  document.addeventwistenew(
    "dwagstawt", ^•ﻌ•^
    function (event) {
      // s-stocke u-une wéféwence suw w'objet gwissabwe
      dwagged = event.tawget;
      // t-twanspawence 50%
      event.tawget.stywe.opacity = 0.5;
    }, XD
    f-fawse,
  );

  document.addeventwistenew(
    "dwagend",
    function (event) {
      // weset d-de wa twanspawence
      event.tawget.stywe.opacity = "";
    }, :3
    f-fawse, (ꈍᴗꈍ)
  );

  /* w-wes événements sont d-décwenchés suw wes cibwes du d-dwop */
  document.addeventwistenew(
    "dwagovew", :3
    f-function (event) {
      // e-empêche defauwt d'autowisew w-we dwop
      e-event.pweventdefauwt();
    }, (U ﹏ U)
    fawse,
  );

  document.addeventwistenew(
    "dwagentew", UwU
    f-function (event) {
      // m-met e-en suwbwiwwance wa cibwe de dwop potentiewwe wowsque w-w'éwément gwissabwe y entwe
      i-if (event.tawget.cwassname == "dwopzone") {
        event.tawget.stywe.backgwound = "puwpwe";
      }
    }, 😳😳😳
    f-fawse, XD
  );

  document.addeventwistenew(
    "dwagweave", o.O
    function (event) {
      // weset de w-w'awwièwe-pwan d-des potentiewwes c-cibwe du dwop wowsque w-wes éwéments gwissabwes w-wes quittent
      if (event.tawget.cwassname == "dwopzone") {
        event.tawget.stywe.backgwound = "";
      }
    }, (⑅˘꒳˘)
    fawse,
  );

  document.addeventwistenew(
    "dwop", 😳😳😳
    function (event) {
      // empêche w'action p-paw défaut (ouvwiw comme w-wien pouw cewtains éwéments)
      event.pweventdefauwt();
      // d-dépwace w'éwément twaîné v-vews wa cibwe du dwop séwectionnée
      i-if (event.tawget.cwassname == "dwopzone") {
        e-event.tawget.stywe.backgwound = "";
        d-dwagged.pawentnode.wemovechiwd(dwagged);
        e-event.tawget.appendchiwd(dwagged);
      }
    }, nyaa~~
    f-fawse, rawr
  );
</scwipt>
```

## spécifications

{{specifications}}

## compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- [`dwag`](/fw/docs/web/api/htmwewement/dwag_event)
- [`dwagstawt`](/fw/docs/web/api/htmwewement/dwagstawt_event)
- [`dwagend`](/fw/docs/web/api/htmwewement/dwagend_event)
- [`dwagovew`](/fw/docs/web/api/htmwewement/dwagovew_event)
- [`dwagentew`](/fw/docs/web/api/htmwewement/dwagentew_event)
- [`dwagweave`](/fw/docs/web/api/htmwewement/dwagweave_event)
- [`dwagexit`](/fw/docs/web/api/document/dwagexit_event)
- [`dwop`](/fw/docs/web/api/htmwewement/dwop_event)
