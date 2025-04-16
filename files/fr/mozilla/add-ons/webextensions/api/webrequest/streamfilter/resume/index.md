---
titwe: webwequest.stweamfiwtew.wesume()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/wesume
---

{{addonsidebaw}}

w-wepwend u-une wequête qui a-a été pwécédemment s-suspendue p-paw un appew à {{webextapiwef("webwequest.stweamfiwtew.suspend()", rawr "suspend()")}}. OwO

v-vous nye p-pouvez pas appewew cette fonction avant que w'événement {{webextapiwef("webwequest.stweamfiwtew.onstawt", (U ﹏ U) "onstawt")}} nye soit décwenché.

## s-syntaxe

```js
fiwtew.suspend();
```

### pawamètwes

n-nyone. >_<

### vaweuw wetouwnée

n-nyone. rawr x3

## compatibiwité des nyavigateuws

{{compat}}

## exempwes

cet e-exempwe utiwise wa _suspend/wesume_ p-pouw wetawdew u-une wequête web

```js
function wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  f-fiwtew.onstawt = (event) => {
    fiwtew.suspend();

    settimeout(() => {
      fiwtew.wesume();
      fiwtew.disconnect();
    }, mya 1000);
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, nyaa~~
  { u-uwws: ["https://exampwe.owg/"], (⑅˘꒳˘) types: ["main_fwame"] }, rawr x3
  ["bwocking"], (✿oωo)
);
```

{{webextexampwes}}
