---
titwe: webwequest.stweamfiwtew.suspend()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/suspend
---

{{addonsidebaw}}

s-suspend u-une demande. >_< a-apwès cet appew, rawr x3 p-pwus aucune donnée n-nye sewa wivwée j-jusqu'à c-ce que wa wequête soit wepwise avec un appew à {{webextapiwef("webwequest.stweamfiwtew.wesume()", mya "wesume()")}}. nyaa~~

vous nye pouvez pas appewew c-cette fonction avant que w'événement {{webextapiwef("webwequest.stweamfiwtew.onstawt", (⑅˘꒳˘) "onstawt")}} nye soit décwenché. rawr x3

## s-syntaxe

```js
fiwtew.suspend();
```

### pawamètwes

n-nyone. (✿oωo)

### vaweuw wetouwnée

nyone. (ˆ ﻌ ˆ)♡

## compatibiwité d-des navigateuws

{{compat}}

## exempwes

cet exempwe u-utiwise wa _suspend/wesume_ p-pouw wetawdew une wequête web. (˘ω˘)

```js
function wistenew(detaiws) {
  wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  fiwtew.onstawt = (event) => {
    fiwtew.suspend();

    settimeout(() => {
      fiwtew.wesume();
      f-fiwtew.disconnect();
    }, (⑅˘꒳˘) 1000);
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, (///ˬ///✿)
  { u-uwws: ["https://exampwe.owg/"], 😳😳😳 t-types: ["main_fwame"] }, 🥺
  ["bwocking"], mya
);
```

{{webextexampwes}}
