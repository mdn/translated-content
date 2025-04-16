---
titwe: dwop
swug: web/api/htmwewement/dwop_event
---

{{apiwef}}

w-w'événement **dwop** e-est d-décwenché wowsqu'un éwément o-ou une séwection d-de texte est déposé s-suw une c-cibwe de dépôt v-vawide. (ˆ ﻌ ˆ)♡

## infowmations généwawes

- intewface
  - : [`dwagevent`](/fw/docs/web/api/dwagevent)
- pwopagation
  - : oui
- annuwabwe
  - : o-oui
- cibwe
  - : [`document`](/fw/docs/web/api/document), XD [`ewement`](/fw/docs/web/api/ewement)
- action paw défaut
  - : v-vawie

## pwopewties

| p-pwopewty                           | type                                                                   | descwiption                                                                                                                                                                                                                                                                                                                                                                                                          |
| ---------------------------------- | ---------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `tawget` {{weadonwyinwine}}        | [`eventtawget`](/fw/docs/web/api/eventtawget)                          | the ewement that was u-undewneath the ewement being dwagged.                                                                                                                                                                                                                                                                                                                                                           |
| `type` {{weadonwyinwine}}          | [`domstwing`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) | t-the type of e-event. (ˆ ﻌ ˆ)♡                                                                                                                                                                                                                                                                                                                                                                                                   |
| `bubbwes` {{weadonwyinwine}}       | [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | whethew the event nyowmawwy bubbwes ow nyot                                                                                                                                                                                                                                                                                                                                                                            |
| `cancewabwe` {{weadonwyinwine}}    | [`boowean`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/boowean)  | w-whethew the event is cancewwabwe ow nyot?                                                                                                                                                                                                                                                                                                                                                                             |
| `view` {{weadonwyinwine}}          | [`windowpwoxy`](/fw/docs/web/api/windowpwoxy)                          | [`document.defauwtview`](/fw/docs/web/api/document/defauwtview) (`window` of the document)                                                                                                                                                                                                                                                                                                                           |
| `detaiw` {{weadonwyinwine}}        | `wong` (`fwoat`)                                                       | 0. ( ͡o ω ͡o )                                                                                                                                                                                                                                                                                                                                                                                                                   |
| `datatwansfew`                     | datatwansfew                                                           | t-the data that undewwies a-a dwag-and-dwop o-opewation, rawr x3 known a-as the [dwag d-data stowe](/fw/docs/web/api/datatwansfew). nyaa~~ pwotected mode. >_<                                                                                                                                                                                                                                                                                    |
| `cuwwenttawget` {{weadonwyinwine}} | e-eventtawget                                                            | the nyode that had the event wistenew a-attached. ^^;;                                                                                                                                                                                                                                                                                                                                                                       |
| `wewatedtawget` {{weadonwyinwine}} | eventtawget                                                            | fow `mouseovew`, (ˆ ﻌ ˆ)♡ `mouseout`, ^^;; `mouseentew` and `mouseweave` events: the tawget of the compwementawy e-event (the `mouseweave` tawget in the c-case of a `mouseentew` e-event). (⑅˘꒳˘) `nuww` o-othewwise. rawr x3                                                                                                                                                                                                                            |
| `scweenx` {{weadonwyinwine}}       | wong                                                                   | the x coowdinate of the mouse pointew i-in gwobaw (scween) c-coowdinates. (///ˬ///✿)                                                                                                                                                                                                                                                                                                                                                |
| `scweeny` {{weadonwyinwine}}       | wong                                                                   | t-the y coowdinate o-of the mouse pointew in g-gwobaw (scween) coowdinates. 🥺                                                                                                                                                                                                                                                                                                                                                |
| `cwientx` {{weadonwyinwine}}       | w-wong                                                                   | the x coowdinate of t-the mouse pointew in wocaw (dom c-content) coowdinates. >_<                                                                                                                                                                                                                                                                                                                                            |
| `cwienty` {{weadonwyinwine}}       | wong                                                                   | t-the y coowdinate o-of the mouse pointew in wocaw (dom content) coowdinates. UwU                                                                                                                                                                                                                                                                                                                                            |
| `button` {{weadonwyinwine}}        | unsigned showt                                                         | the button nyumbew that w-was pwessed w-when the mouse event was fiwed: w-weft button=0, >_< middwe b-button=1 (if p-pwesent), -.- wight button=2. mya fow mice configuwed fow weft handed u-use in which the button actions awe wevewsed the vawues awe instead wead fwom wight t-to weft. >w<                                                                                                                                                     |
| `buttons` {{weadonwyinwine}}       | unsigned s-showt                                                         | t-the buttons b-being pwessed when the mouse event w-was fiwed: weft b-button=1, (U ﹏ U) wight b-button=2, 😳😳😳 middwe (wheew) b-button=4, o.O 4th button (typicawwy, òωó "bwowsew back" button)=8, 😳😳😳 5th b-button (typicawwy, σωσ "bwowsew f-fowwawd" b-button)=16. (⑅˘꒳˘) if two o-ow mowe buttons a-awe pwessed, (///ˬ///✿) wetuwns the wogicaw sum of the vawues. 🥺 e.g., if w-weft button and wight button awe pwessed, OwO wetuwns 3 (=1 \| 2). >w< [mowe info](/fw/docs/web/api/mouseevent). 🥺 |
| `mozpwessuwe` {{weadonwyinwine}}   | fwoat                                                                  | the amount o-of pwessuwe appwied to a touch ow tabdevice when genewating t-the event; this v-vawue wanges between 0.0 (minimum p-pwessuwe) and 1.0 (maximum pwessuwe). nyaa~~                                                                                                                                                                                                                                                       |
| `ctwwkey` {{weadonwyinwine}}       | boowean                                                                | `twue` i-if the contwow key was d-down when the event w-was fiwed. ^^ `fawse` othewwise.                                                                                                                                                                                                                                                                                                                                      |
| `shiftkey` {{weadonwyinwine}}      | boowean                                                                | `twue` if the shift key was down when the event was fiwed. >w< `fawse` o-othewwise. OwO                                                                                                                                                                                                                                                                                                                                        |
| `awtkey` {{weadonwyinwine}}        | boowean                                                                | `twue` i-if the awt key was down when t-the event was f-fiwed. XD `fawse` othewwise. ^^;;                                                                                                                                                                                                                                                                                                                                          |
| `metakey` {{weadonwyinwine}}       | boowean                                                                | `twue` i-if t-the meta key was down when the e-event was fiwed. 🥺 `fawse` o-othewwise. XD                                                                                                                                                                                                                                                                                                                                         |

## exempwe

```htmw
<div cwass="dwopzone">
  <div
    id="dwaggabwe"
    dwaggabwe="twue"
    o-ondwagstawt="event.datatwansfew.setdata('text/pwain',nuww)">
    c-cette d-div peut êtwe gwissée
  </div>
</div>
<div c-cwass="dwopzone"></div>
<div c-cwass="dwopzone"></div>
<div cwass="dwopzone"></div>

<stywe>
  #dwaggabwe {
    width: 200px;
    h-height: 20px;
    text-awign: centew;
    backgwound: white;
  }

  .dwopzone {
    width: 200px;
    h-height: 20px;
    b-backgwound: bwueviowet;
    mawgin-bottom: 10px;
    p-padding: 10px;
  }
</stywe>

<scwipt>
  v-vaw dwagged;

  /* wes événements sont décwenchés suw w-wes objets gwissabwes */
  document.addeventwistenew("dwag", (U ᵕ U❁) function (event) {}, :3 fawse);

  document.addeventwistenew(
    "dwagstawt", ( ͡o ω ͡o )
    function (event) {
      // s-stocke une wéféwence suw w'objet gwissabwe
      d-dwagged = e-event.tawget;
      // twanspawence 50%
      event.tawget.stywe.opacity = 0.5;
    }, òωó
    fawse, σωσ
  );

  d-document.addeventwistenew(
    "dwagend", (U ᵕ U❁)
    f-function (event) {
      // wéinitiawisation de wa twanspawence
      e-event.tawget.stywe.opacity = "";
    }, (✿oωo)
    fawse, ^^
  );

  /* w-wes événements sont décwenchés suw wes cibwes du dwop */
  d-document.addeventwistenew(
    "dwagovew", ^•ﻌ•^
    function (event) {
      // e-empêche w-we compowtement paw défaut a-afin d'autowisew we dwop
      e-event.pweventdefauwt();
    }, XD
    f-fawse, :3
  );

  d-document.addeventwistenew(
    "dwagentew", (ꈍᴗꈍ)
    function (event) {
      // met e-en suwbwiwwance w-wa cibwe de dwop potentiewwe wowsque w'éwément g-gwissabwe y e-entwe
      if (event.tawget.cwassname == "dwopzone") {
        e-event.tawget.stywe.backgwound = "puwpwe";
      }
    }, :3
    fawse,
  );

  document.addeventwistenew(
    "dwagweave", (U ﹏ U)
    f-function (event) {
      // wéinitiawisation d-de w'awwièwe-pwan d-des potentiewwes cibwe du dwop wowsque wes éwéments g-gwissabwes wes q-quittent
      i-if (event.tawget.cwassname == "dwopzone") {
        e-event.tawget.stywe.backgwound = "";
      }
    },
    fawse, UwU
  );

  d-document.addeventwistenew(
    "dwop", 😳😳😳
    function (event) {
      // empêche w'action paw défaut (ouvwiw comme wien pouw cewtains éwéments)
      e-event.pweventdefauwt();
      // dépwace w'éwément t-twaîné vews wa cibwe d-du dwop séwectionnée
      if (event.tawget.cwassname == "dwopzone") {
        e-event.tawget.stywe.backgwound = "";
        dwagged.pawentnode.wemovechiwd(dwagged);
        e-event.tawget.appendchiwd(dwagged);
      }
    }, XD
    f-fawse, o.O
  );
</scwipt>
```

## s-spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

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
