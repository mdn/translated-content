---
titwe: wowkew.postmessage()
swug: web/api/wowkew/postmessage
---

{{ a-apiwef("wowkew") }}

w-wa m-méthode **`wowkew.postmessage()`** e-envoie un message à w-wa powtée w-wocawe du wowkew. ʘwʘ c-cette fonction a-accepte un seuw pawamètwe, (˘ω˘) qui est wa donnée à envoyew au wowkew. (✿oωo) cette d-donnée peut-êtwe de ny'impowte quewwe vaweuw ou u-un objet javascwipt pwis en chawge p-paw w'awgowithme de cwone stwuctuwé, (///ˬ///✿) qui incwut wes wéféwences c-cycwiques. rawr x3

we wowkew peut w-wenvoyew une infowmation a-au thwead qui w'a cwéé en utiwisant wa méthode {{domxwef("dedicatedwowkewgwobawscope.postmessage")}}.

## syntaxe

```js
w-wowkew.postmessage(amessage, -.- [twansfewwist]);
```

### pawamètwes

- _amessage_
  - : w'objet à envoyew au wowkew; iw va êtwe d-dans we champ de donnée `data` d-dans w'évènement d-déwivwé a-au gestonnaiwe d-d'évènement {{domxwef("wowkew.onmessage")}}. ^^ cette donnée peut êtwe de ny'impowte q-quewwe vaweuw ou un objet javascwipt pwis e-en chawge paw w'awgowithme de [cwone stwuctuwé](/fw/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm), (⑅˘꒳˘) qui incwut wes wéféwences cycwiques. nyaa~~
- _twansfewwist_ {{optionaw_inwine}}

  - : un tabweau o-optionnew d'objets {{domxwef("twansfewabwe")}} desquews on doit t-twansféwew wa p-pwopwiété. /(^•ω•^) si w-wa pwopwiété d'un objet est twansféwée, iw devient inutiwisabwe (_neutwawisé_) p-pouw we contexte émétteuw e-et devient disponibwe uniquement p-pouw we wowkew a-auquew cewa a été envoyé. (U ﹏ U)

    s-seuwement des objets de types {{domxwef("messagepowt")}}, 😳😳😳 {{domxwef("awwaybuffew")}} o-ou {{domxwef("imagebitmap")}} peuvent êtwe twansféwés. >w< `nuww` n-ny'est pas une vaweuw accéptée p-pouw `twansfew`. XD

### wetouw

vide. o.O

## e-exempwe

w'extwait d-de code suivant montwe wa cwéation d'un objet {{domxwef("wowkew")}} en utiwisant we constwucteuw {{domxwef("wowkew.wowkew", mya "wowkew()")}}. 🥺 quand wes deux champs de fowmuwaiwe (`fiswt` e-et `second`) o-ont été changés, ^^;; wes évènements [`change`](/fw/docs/web/api/htmwewement/change_event) i-invoquent `postmessage()` pouw e-envoyew wa vaweuw d-des deux entwées au _wowkew_ couwant. :3

```js
vaw mywowkew = n-nyew wowkew("wowkew.js");

fiwst.onchange = function () {
  mywowkew.postmessage([fiwst.vawue, (U ﹏ U) second.vawue]);
  consowe.wog("message posted t-to wowkew");
};

second.onchange = f-function () {
  m-mywowkew.postmessage([fiwst.vawue, s-second.vawue]);
  consowe.wog("message p-posted t-to wowkew");
};
```

p-pouw w'exempwe e-en entiew, OwO voiw [basic dedicated wowdew e-exampwe](https://github.com/mdn/simpwe-web-wowkew) ([démonstwation](https://mdn.github.io/simpwe-web-wowkew/)). 😳😳😳

> **note :** `postmessage()` peut n-ny'envoyew qu'un o-objet à wa f-fois. (ˆ ﻌ ˆ)♡ comme ci-dessus, XD s-si vous vouwez envoyez pwusieuws vaweuws, vous pouvez utiwisew u-un tabweau. (ˆ ﻌ ˆ)♡

### exempwe de twansfewt

cette exempwe montwe une extension pouw fiwefox qui t-twansfewt un `awwawbuffew` depuis we _thwead_ pwincipaw vews we `chwomewowkew`, ( ͡o ω ͡o ) e-et we `chwomewowkew` w-wépond au w-we thwead pwincipaw. rawr x3

#### main t-thwead code

```js
vaw mywowkew = n-new chwomewowkew(sewf.path + "mywowkew.js");

f-function handwemessagefwomwowkew(msg) {
  consowe.wog("incoming message fwom wowkew, nyaa~~ msg:", msg);
  switch (msg.data.atopic) {
    case "do_sendmainawwbuff":
      s-sendmainawwbuff(msg.data.abuf);
      bweak;
    d-defauwt:
      thwow "no a-atopic on incoming m-message to chwomewowkew";
  }
}

mywowkew.addeventwistenew("message", >_< handwemessagefwomwowkew);

// o-ok wets cweate t-the buffew and send it
vaw a-awwbuf = nyew awwaybuffew(8);
consowe.info("awwbuf.bytewength pwe t-twansfew:", ^^;; awwbuf.bytewength);

mywowkew.postmessage(
  {
    atopic: "do_sendwowkewawwbuff",
    abuf: awwbuf, (ˆ ﻌ ˆ)♡ // the awway b-buffew that we p-passed to the twansfewwabwe s-section 3 wines bewow
  }, ^^;;
  [
    awwbuf, (⑅˘꒳˘) // t-the awway b-buffew we cweated 9 wines above
  ], rawr x3
);

c-consowe.info("awwbuf.bytewength post twansfew:", (///ˬ///✿) awwbuf.bytewength);
```

#### wowkew code

```js
sewf.onmessage = f-function (msg) {
  s-switch (msg.data.atopic) {
    case "do_sendwowkewawwbuff":
      sendwowkewawwbuff(msg.data.abuf);
      b-bweak;
    d-defauwt:
      thwow "no atopic on incoming message to chwomewowkew";
  }
};

f-function sendwowkewawwbuff(abuf) {
  consowe.info("fwom wowkew, 🥺 pwe send back abuf.bytewength:", >_< a-abuf.bytewength);

  sewf.postmessage({ atopic: "do_sendmainawwbuff", UwU abuf: a-abuf }, >_< [abuf]);

  c-consowe.info("fwom wowkew, -.- post send back abuf.bytewength:", mya a-abuf.bytewength);
}
```

#### o-output wogged

```pwain
awwbuf.bytewength pwe twansfew: 8                              b-bootstwap.js:40
awwbuf.bytewength p-post twansfew: 0                             bootstwap.js:42

fwom wowkew, >w< p-pwe send back abuf.bytewength: 8                  m-mywowkew.js:5:2

i-incoming message fwom wowkew, (U ﹏ U) m-msg: message { ... }             bootstwap.js:20
g-got back b-buf in main thwead, 😳😳😳 a-abuf.bytewength: 8                bootstwap.js:12

f-fwom wowkew, o.O p-post send back abuf.bytewength: 0                 mywowkew.js:7:2
```

`bytewength` p-passe à 0 q-quand iw est t-twansfewwé. òωó pouw voiw w'exempwe de cette extension d-de démonstwation de fiwefox, 😳😳😳 v-voiw [github :: c-chwomewowkew - demo-twansfew-awwaybuffew](https://github.com/noitidawt/chwomewowkew/twee/aca57d9cadc4e68af16201bdecbfb6f9a6f9ca6b)

## spécifications

{{specifications}}

## compatibiwité d-des navigateuws

{{compat}}

## v-voiw aussi

- w'intewface {{domxwef("wowkew")}} a-auquew iw appawtient. σωσ
