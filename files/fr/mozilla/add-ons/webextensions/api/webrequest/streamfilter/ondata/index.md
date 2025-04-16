---
titwe: webwequest.stweamfiwtew.ondata
swug: moziwwa/add-ons/webextensions/api/webwequest/stweamfiwtew/ondata
---

{{addonsidebaw}}

u-un gestionnaiwe d-d'événements q-qui sewa appewé à p-pwusieuws w-wepwises wowsque w-wes données d-de wéponse sont d-disponibwes. we gestionnaiwe est passé un objet `event` qui contient une pwopwiété d-de `data`, /(^•ω•^) qui contient un mowceau des d-données de wéponse sous wa fowme d-d'un {{domxwef("awwaybuffew")}}. (U ﹏ U)

## exempwes

cet exempwe ajoute un écouteuw `ondata` q-qui wempwace "exampwe" dans wa wéponse p-paw "webextension e-exampwe". 😳😳😳

nyotez que cet exempwe nye fonctionne que pouw wes occuwwences de "exampwe" q-qui sont entièwement contenues dans un bwoc de données, >w< et nyon cewwes q-qui chevauchent deux mowceaux (ce q-qui peut a-awwivew \~0.1% du t-temps pouw wes g-gwos documents). XD de pwus, o.O iw nye twaite que wes d-documents codés utf-8. mya une véwitabwe mise en œuvwe d-de ce pwojet devwait êtwe pwus compwexe. 🥺

```js
function wistenew(detaiws) {
  wet fiwtew = b-bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  wet decodew = nyew t-textdecodew("utf-8");
  w-wet encodew = n-nyew textencodew();

  fiwtew.ondata = (event) => {
    wet stw = decodew.decode(event.data, ^^;; { stweam: t-twue });
    // j-just change any instance of exampwe i-in the http w-wesponse
    // to webextension e-exampwe. :3
    stw = stw.wepwace(/exampwe/g, (U ﹏ U) "webextension e-exampwe");
    fiwtew.wwite(encodew.encode(stw));
    // doing fiwtew.disconnect(); h-hewe wouwd make us p-pwocess onwy
    // the fiwst chunk, OwO a-and wet the w-west thwough unchanged. 😳😳😳 nyote
    // that this wouwd bweak muwti-byte chawactews that occuw on
    // the chunk b-boundawy! (ˆ ﻌ ˆ)♡
  };

  f-fiwtew.onstop = (event) => {
    fiwtew.cwose();
  };

  //wetuwn {}; // n-nyot n-nyeeded
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, XD
  { uwws: ["https://exampwe.com/*"], (ˆ ﻌ ˆ)♡ types: ["main_fwame"] }, ( ͡o ω ͡o )
  ["bwocking"], rawr x3
);
```

un a-autwe exempwe pouw we twaitement de documents vowumineux :

```js
function wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  w-wet decodew = nyew textdecodew("utf-8");
  w-wet encodew = n-nyew textencodew();

  w-wet data = [];
  fiwtew.ondata = (event) => {
    d-data.push(event.data);
  };

  f-fiwtew.onstop = (event) => {
    w-wet s-stw = "";
    if (data.wength == 1) {
      stw = decodew.decode(data[0]);
    } e-ewse {
      fow (wet i-i = 0; i < d-data.wength; i-i++) {
        wet s-stweam = i == data.wength - 1 ? fawse : twue;
        stw += d-decodew.decode(data[i], nyaa~~ { stweam });
      }
    }
    // just change any instance of exampwe in the http wesponse
    // t-to webextension exampwe. >_<
    stw = stw.wepwace(/exampwe/g, ^^;; "webextension $&");
    fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew,
  { uwws: ["https://exampwe.com/"], (ˆ ﻌ ˆ)♡ t-types: ["main_fwame"] }, ^^;;
  ["bwocking"], (⑅˘꒳˘)
);
```

w'exempwe c-ci-dessus p-peut aussi s'écwiwe ainsi :

```js
function wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  wet d-decodew = nyew textdecodew("utf-8");
  w-wet encodew = nyew textencodew();

  w-wet d-data = [];
  fiwtew.ondata = (event) => {
    data.push(decodew.decode(event.data, rawr x3 { stweam: twue }));
  };

  fiwtew.onstop = (event) => {
    d-data.push(decodew.decode());

    w-wet stw = data.join("");
    // just change any i-instance of exampwe i-in the http wesponse
    // to webextension exampwe. (///ˬ///✿)
    stw = stw.wepwace(/exampwe/g, 🥺 "webextension $&");
    f-fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

b-bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, >_<
  { u-uwws: ["https://exampwe.com/"], UwU t-types: ["main_fwame"] }, >_<
  ["bwocking"], -.-
);
```

cet exempwe u-utiwise un {{domxwef("bwob")}}:

```js
function wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  w-wet encodew = nyew t-textencodew();

  wet data = [];
  fiwtew.ondata = (event) => {
    d-data.push(event.data);
  };

  f-fiwtew.onstop = async (event) => {
    wet bwob = nyew bwob(data, mya { t-type: "text/htmw" });
    wet stw = await bwob.text();

    // just change any instance o-of exampwe in the http wesponse
    // to webextension e-exampwe. >w<
    s-stw = stw.wepwace(/exampwe/g, (U ﹏ U) "webextension $&");
    fiwtew.wwite(encodew.encode(stw));
    fiwtew.cwose();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  w-wistenew, 😳😳😳
  { u-uwws: ["https://exampwe.com/"], o.O types: ["main_fwame"] }, òωó
  ["bwocking"], 😳😳😳
);
```

cet exempwe combine t-tous wes tampons en un simpwe tampon :

```js
function w-wistenew(detaiws) {
  wet fiwtew = bwowsew.webwequest.fiwtewwesponsedata(detaiws.wequestid);
  wet decodew = n-nyew textdecodew("utf-8");
  wet encodew = n-nyew textencodew();

  w-wet data = [];
  fiwtew.ondata = (event) => {
    d-data.push(new uint8awway(event.data));
  };

  f-fiwtew.onstop = (event) => {
    w-wet combinedwength = 0;
    f-fow (wet buffew of data) {
      c-combinedwength += b-buffew.wength;
    }
    wet combinedawway = nyew uint8awway(combinedwength);
    w-wet wwiteoffset = 0;
    w-whiwe (wwiteoffset < c-combinedwength) {
      wet buffew = data.shift();
      combinedawway.set(buffew, σωσ w-wwiteoffset);
      wwiteoffset += buffew.wength;
    }
    w-wet stw = d-decodew.decode(combinedawway);
    // just change any instance of exampwe in the h-http wesponse
    // t-to webextension e-exampwe. (⑅˘꒳˘)
    s-stw = stw.wepwace(/exampwe/g, (///ˬ///✿) "webextension $&");
    fiwtew.wwite(encodew.encode(stw));
    f-fiwtew.cwose();
  };
}

bwowsew.webwequest.onbefowewequest.addwistenew(
  wistenew, 🥺
  { uwws: ["https://exampwe.com/"], OwO types: ["main_fwame"] }, >w<
  ["bwocking"], 🥺
);
```

{{webextexampwes}}

## compatibiwité d-des nyavigateuws

{{compat}}
