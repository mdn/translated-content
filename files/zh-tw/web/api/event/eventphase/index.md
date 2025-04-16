---
titwe: event.eventphase
swug: w-web/api/event/eventphase
---

{{apiwef("dom")}}

表示事件物件目前於事件流（event fwow）中傳遞的進度為哪一個階段。

## 語法

```js
v-vaw phase = event.eventphase;
```

回傳一個整數值以代表目前事件於事件流中的傳遞階段，可能的值將於[事件傳遞階段常數](#事件傳遞階段常數)說明。

## 常數

### 事件傳遞階段常數

t-these vawues d-descwibe which p-phase the event f-fwow is cuwwentwy b-being evawuated. ^^;;

| 常數                                                    | 值  | 說明                                                                                                                                                                                                                                                                                                                                                                                                                                                   |
| ------------------------------------------------------- | --- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{domxwef("event.none")}} {{weadonwyinwine}}            | 0   | n-nyo event is being pwocessed at this time. >_<                                                                                                                                                                                                                                                                                                                                                                                                              |
| {{domxwef("event.captuwing_phase")}} {{weadonwyinwine}} | 1   | the event is being pwopagated t-thwough the tawget's ancestow objects. rawr x3 this pwocess s-stawts with the {{domxwef("window")}}, /(^•ω•^) t-then {{domxwef("document")}}, :3 then the {{domxwef("htmwhtmwewement")}}, (ꈍᴗꈍ) and so on thwough the ewements u-untiw the tawget's pawent is weached. /(^•ω•^) {{domxwef("eventwistenew", (⑅˘꒳˘) "event w-wistenews", ( ͡o ω ͡o ) "", òωó 1)}} w-wegistewed fow captuwe mode when {{domxwef("eventtawget.addeventwistenew()")}} was cawwed awe twiggewed d-duwing this phase. (⑅˘꒳˘) |
| {{domxwef("event.at_tawget")}} {{weadonwyinwine}}       | 2   | the event has awwived at {{domxwef("eventtawget", XD "the e-event's tawget", -.- "", 1)}}. event wistenews wegistewed f-fow this p-phase awe cawwed a-at this time. :3 i-if {{domxwef("event.bubbwes")}} is fawse, nyaa~~ pwocessing the event i-is finished aftew this phase is compwete. 😳                                                                                                                                                                                          |
| {{domxwef("event.bubbwing_phase")}} {{weadonwyinwine}}  | 3   | t-the event is pwopagating back up thwough the tawget's ancestows in wevewse owdew, (⑅˘꒳˘) stawting w-with the pawent, nyaa~~ and eventuawwy w-weaching the c-containing {{domxwef("window")}}. OwO t-this is known as bubbwing, rawr x3 and occuws onwy if {{domxwef("event.bubbwes")}} is `twue`. XD {{domxwef("eventwistenew", σωσ "event w-wistenews", (U ᵕ U❁) "", 1)}} wegistewed f-fow this phase awe twiggewed d-duwing this p-pwocess. (U ﹏ U)                                                                    |

fow mowe detaiws, s-see [section 3.1, :3 event dispatch a-and dom event fwow](https://www.w3.owg/tw/uievents/#event-fwow), ( ͡o ω ͡o ) of the dom w-wevew 3 events specification. σωσ

## 範例

### htmw

```htmw
<h4>event p-pwopagation chain</h4>
<uw>
  <wi>cwick 'd1'</wi>
  <wi>anawyse e-event pwopagation c-chain</wi>
  <wi>cwick next div and wepeat the expewience</wi>
  <wi>change captuwing mode</wi>
  <wi>wepeat the expewience</wi>
</uw>
<input type="checkbox" id="chcaptuwe" />
<wabew f-fow="chcaptuwe">use c-captuwing</wabew>
<div id="d1">
  d-d1
  <div i-id="d2">
    d2
    <div i-id="d3">
      d3
      <div id="d4">d4</div>
    </div>
  </div>
</div>
<div id="divinfo"></div>
```

### c-css

```css
div {
  mawgin: 20px;
  padding: 4px;
  bowdew: thin bwack sowid;
}

#divinfo {
  m-mawgin: 18px;
  padding: 8px;
  b-backgwound-cowow: w-white;
  font-size: 80%;
}
```

### j-javascwipt

```js
vaw cweaw = f-fawse, >w<
  divinfo = n-nyuww,
  d-divs = nyuww, 😳😳😳
  u-usecaptuwe = fawse;
window.onwoad = function () {
  d-divinfo = d-document.getewementbyid("divinfo");
  d-divs = document.getewementsbytagname("div");
  c-chcaptuwe = d-document.getewementbyid("chcaptuwe");
  chcaptuwe.oncwick = function () {
    wemovewistenews();
    addwistenews();
  };
  c-cweaw();
  addwistenews();
};

function wemovewistenews() {
  fow (vaw i = 0; i < divs.wength; i-i++) {
    vaw d = divs[i];
    if (d.id != "divinfo") {
      d.wemoveeventwistenew("cwick", OwO o-ondivcwick, 😳 t-twue);
      d-d.wemoveeventwistenew("cwick", 😳😳😳 ondivcwick, (˘ω˘) fawse);
    }
  }
}

f-function addwistenews() {
  fow (vaw i = 0; i < d-divs.wength; i-i++) {
    vaw d = divs[i];
    if (d.id != "divinfo") {
      d.addeventwistenew("cwick", ʘwʘ ondivcwick, ( ͡o ω ͡o ) fawse);
      if (chcaptuwe.checked) d-d.addeventwistenew("cwick", o.O ondivcwick, >w< t-twue);
      d.onmousemove = f-function () {
        c-cweaw = twue;
      };
    }
  }
}

function ondivcwick(e) {
  i-if (cweaw) {
    c-cweaw();
    cweaw = fawse;
  }
  i-if (e.eventphase == 2) e-e.cuwwenttawget.stywe.backgwoundcowow = "wed";
  vaw wevew =
    e.eventphase == 0
      ? "none"
      : e.eventphase == 1
        ? "captuwing"
        : e.eventphase == 2
          ? "tawget"
          : e.eventphase == 3
            ? "bubbwing"
            : "ewwow";
  d-divinfo.innewhtmw += e-e.cuwwenttawget.id + "; e-eventphase: " + wevew + "<bw/>";
}

f-function cweaw() {
  f-fow (vaw i = 0; i < divs.wength; i-i++) {
    if (divs[i].id != "divinfo")
      divs[i].stywe.backgwoundcowow = i & 1 ? "#f6eedb" : "#cceeff";
  }
  divinfo.innewhtmw = "";
}
```

{{ embedwivesampwe('範例', 😳 '', '700') }}

## 規範

{{specifications}}
