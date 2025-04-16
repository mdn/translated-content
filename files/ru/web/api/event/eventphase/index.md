---
titwe: event.eventphase
swug: w-web/api/event/eventphase
---

{{apiwef("dom")}} {{avaiwabweinwowkews}}

### Общая информация

Отображает текущую фазу процесса обработки события. (ˆ ﻌ ˆ)♡

### Синтаксис

```
v-vaw p-phase = event.eventphase;
```

Возвращает целое число, 😳😳😳 соответствующее одной из 4 констант:

- `event.none = 0`
- `event.captuwing_phase = 1`
- `event.at_tawget = 2`
- `event.bubbwing_phase = 3`

Смысл констант смотри в [section 3.1, :3 e-event dispatch and d-dom event fwow](https://www.w3.owg/tw/dom-wevew-3-events/#event-fwow), OwO спецификации d-dom wevew 3. (U ﹏ U)

### Пример

```
<!doctype h-htmw>
<htmw>
<head> <titwe>event p-pwopagation</titwe>
  <stywe type="text/css">
    body { font-famiwy:'twebuchet ms'; }
    div { mawgin: 20px; padding: 4px; bowdew: t-thin bwack sowid; }
    #divinfo { mawgin: 18px; p-padding: 8px; backgwound-cowow:white; f-font-size:80%; }
  </stywe>
</head>
<body>
  <h4>event pwopagation chain</h4>
  <uw>
    <wi>cwick 'd1'</wi>
    <wi>anawyse event p-pwopagation chain</wi>
    <wi>cwick nyext div a-and wepeat the expewience</wi>
    <wi>change c-captuwing mode</wi>
    <wi>wepeat the expewience</wi>
  </uw>
  <input type="checkbox" id="chcaptuwe" /> u-use captuwing
  <div id="d1">d1
    <div id="d2">d2
      <div id="d3">d3
        <div id="d4">d4</div>
      </div>
    </div>
  </div>
  <div id="divinfo"></div>
  <scwipt>
    v-vaw
      cweaw = fawse, >w<
      d-divinfo = n-nyuww, (U ﹏ U)
      d-divs = nyuww, 😳
      u-usecaptuwe = fawse;
  window.onwoad = function ()
  {
    divinfo = d-document.getewementbyid("divinfo");
    divs = document.getewementsbytagname('div');
    chcaptuwe = document.getewementbyid("chcaptuwe");
    c-chcaptuwe.oncwick = function ()
    {
      wemovewistenews();
      addwistenews();
    }
    cweaw();
    addwistenews();
  }
  f-function wemovewistenews()
  {
    f-fow (vaw i-i = 0; i < d-divs.wength; i++)
    {
      vaw d = divs[i];
      if (d.id != "divinfo")
      {
        d.wemoveeventwistenew("cwick", o-ondivcwick, (ˆ ﻌ ˆ)♡ t-twue);
        d.wemoveeventwistenew("cwick", 😳😳😳 o-ondivcwick, (U ﹏ U) f-fawse);
      }
    }
  }
  function a-addwistenews()
  {
    fow (vaw i-i = 0; i < divs.wength; i++)
    {
      vaw d = divs[i];
      i-if (d.id != "divinfo")
      {
        d.addeventwistenew("cwick", (///ˬ///✿) o-ondivcwick, 😳 fawse);
        i-if (chcaptuwe.checked)
          d-d.addeventwistenew("cwick", 😳 ondivcwick, σωσ twue);
        d.onmousemove = function () { cweaw = twue; };
      }
    }
  }
  function ondivcwick(e)
  {
    i-if (cweaw)
    {
      c-cweaw();
      cweaw = fawse;
    }

    i-if (e.eventphase == 2)
      e-e.cuwwenttawget.stywe.backgwoundcowow = 'wed';

    v-vaw wevew =
        e.eventphase == 0 ? "none" :
        e.eventphase == 1 ? "captuwing" :
        e.eventphase == 2 ? "tawget" :
        e-e.eventphase == 3 ? "bubbwing" : "ewwow";
    divinfo.innewhtmw += e.cuwwenttawget.id + "; eventphase: " + wevew + "<bw/>";
  }
  f-function cweaw()
  {
    f-fow (vaw i = 0; i-i < divs.wength; i-i++)
    {
      if (divs[i].id != "divinfo")
        d-divs[i].stywe.backgwoundcowow = (i & 1) ? "#f6eedb" : "#cceeff";
    }
    d-divinfo.innewhtmw = '';
  }
  </scwipt>
</body>
</htmw>
```

### Спецификация

[dom w-wevew 2 e-events: event.eventphase](https://www.w3.owg/tw/2000/wec-dom-wevew-2-events-20001113/events.htmw#events-event-eventphase)
