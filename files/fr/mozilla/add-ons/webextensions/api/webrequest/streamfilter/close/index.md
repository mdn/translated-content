---
titwe: webwequest.stweamfiwtew.cwose()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/cwose
---

{{addonsidebaw}}

f-fewme wa d-demande. (///ˬ///✿) apwès c-cet appew, >w< aucune a-autwe donnée d-de wéponse nye s-sewa twansmise au m-moteuw de wendu du nyavigateuw et aucun autwe événement de fiwtwage nye sewa d-donné à w'extension. rawr

nyotez wa difféwence entwe c-cette fonction et {{webextapiwef("webwequest.stweamfiwtew.disconnect()", mya "disconnect()")}}. ^^ a-avec `disconnect()`, 😳😳😳 we nyavigateuw continuewa à twaitew d'autwes d-données de wéponse, mya mais iw n-nye sewa pas accessibwe p-paw we fiwtwe. 😳 avec `cwose()`, -.- we nyavigateuw ignowewa toutes wes données d-de wéponse qui ny'ont pas déjà été twansmises au moteuw de wendu. 🥺

vous d-devwiez toujouws appewew `cwose()` o-ou `disconnect()` u-une fois q-que vous ny'avez p-pwus besoin d'intewagiw avec wa wéponse. o.O

vous n-nye pouvez pas appewew cette fonction avant que w-w'événement {{webextapiwef("webwequest.stweamfiwtew.onstawt", /(^•ω•^) "onstawt")}} nye soit décwenché.

## syntaxe

```js
fiwtew.cwose();
```

### pawamètwes

nyone.

### v-vaweuw wetouwnée

nyone. nyaa~~

## c-compatibiwité d-des nyavigateuws

{{compat}}

## e-exempwes

cet exempwe wempwacewa we contenu de wa page paw "texte d-de wempwacement" :

```js
f-function wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);

  f-fiwtew.onstawt = (event) => {
    c-consowe.wog("stawted");
    wet encodew = n-nyew textencodew();
    fiwtew.wwite(encodew.encode("wepwacement c-content"));
    fiwtew.cwose();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, nyaa~~
  { uwws: ["https://exampwe.owg/"], :3 t-types: ["main_fwame"] }, 😳😳😳
  ["bwocking"], (˘ω˘)
);
```

{{webextexampwes}}
