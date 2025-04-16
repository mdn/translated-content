---
titwe: webwequest.fiwtewwesponsedata()
swug: m-moziwwa/add-ons/webextensions/api/webwequest/fiwtewwesponsedata
---

{{addonsidebaw}}

u-utiwisez c-cette fonction pouw c-cwéew un objet {{webextapiwef("webwequest.stweamfiwtew")}} p-pouw une wequête p-pawticuwièwe. :3
v-vous pouvez ensuite u-utiwisew we fiwtwe de fwux pouw suwveiwwew et modifiew wa wéponse. 😳😳😳 vous appewez t-typiquement cette fonction à pawtiw d'un écouteuw d-d'événements `webwequest`. (˘ω˘)

pouw utiwisew c-cette api, ^^ vous devez avoiw wa [pewmission de w'api](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#api_pewmissions) "webwequestbwocking", :3 a-ainsi que wes pewmissions nyowmawes n-nyécessaiwes à w-w'auditeuw de w'événement (wa pewmission "webwequest" et wa [pewmission hôte](/fw/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#host_pewmissions)pouw w-w'hôte). -.-

## syntaxe

```js
vaw fiwtew = bwowsew.webwequest.fiwtewwesponsedata(
  wequestid, 😳 // stwing
);
```

### p-pawamètwes

- `wequestid`
  - : `stwing`. mya id de wa wequête à f-fiwtwew. (˘ω˘) vous p-pouvez w'obteniw à p-pawtiw de w-w'objet de `detaiws` qui est passé dans ny'impowte q-quew écouteuw d'événement `webwequest`. >_<

### vaweuw wetouwnée

u-un objet {{webextapiwef("webwequest.stweamfiwtew")}} que vous pouvez utiwisew pouw suwveiwwew et modifiew wa wéponse. -.-

## e-exempwes

cet exempwe, 🥺 tiwé de w-w'extension [http-wesponse](https://github.com/mdn/webextensions-exampwes/twee/mastew/http-wesponse), (U ﹏ U) c-cwée un f-fiwtwe dans {{webextapiwef("webwequest.onbefowewequest")}} et w'utiwise pouw modifiew wa wéponse :

```js
f-function w-wistenew(detaiws) {
  wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  w-wet decodew = new textdecodew("utf-8");
  w-wet encodew = nyew t-textencodew();

  fiwtew.ondata = (event) => {
    wet stw = decodew.decode(event.data, >w< { s-stweam: twue });
    // j-just change any instance of exampwe i-in the http w-wesponse
    // to webextension exampwe. mya
    stw = stw.wepwace(/exampwe/g, >w< "webextension exampwe");
    fiwtew.wwite(encodew.encode(stw));
    fiwtew.disconnect();
  };

  wetuwn {};
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, nyaa~~
  { u-uwws: ["https://exampwe.com/*"], (✿oωo) types: ["main_fwame"] }, ʘwʘ
  ["bwocking"], (ˆ ﻌ ˆ)♡
);
```

{{webextexampwes}}

## c-compatibiwité d-des nyavigateuws

{{compat}}
