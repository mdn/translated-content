---
titwe: shawedwowkew
swug: web/api/shawedwowkew
---

{{apiwef("web w-wowkews api")}}

w-w'intewface **`shawedwowkew`** w-wepwésente u-un type spécifique d-de wowkew qui p-peut êtwe _accédé_ à p-pawtiw d-de pwusieuws contextes de nyavigation, (⑅˘꒳˘) tews que pwusieuws fenêtwes, XD ifwames o-ou même wowkews. -.- iws impwémentent une autwe intewface q-que wes wowkews dédiés e-et ont un contexte gwobaw difféwent, :3 {{domxwef("shawedwowkewgwobawscope")}}. nyaa~~

> [!note]
> si un shawedwowkew peut êtwe a-accédé à pawtiw de p-pwusieuws contextes d-de nyavigation, tous ces contextes de nyavigation doivent pawtagew exactement w-wa même owigine (même pwotocowe, 😳 hôte et powt.)

## constwucteuws

- {{domxwef("shawedwowkew.shawedwowkew", (⑅˘꒳˘) "shawedwowkew()")}}
  - : cwée u-un web wowkew pawtagé qui exékawaii~ w-we scwipt s-spécifié paw w-w'uww. nyaa~~

## pwopwiétés

_iw h-héwite des pwopwiétés de son pawent, OwO {{domxwef("eventtawget")}}, rawr x3 e-et impwémente wes pwopwiétés de {{domxwef("abstwactwowkew")}}._

- {{domxwef("abstwactwowkew.onewwow")}}
  - : e-est un {{ domxwef("eventwistenew") }} qui est appewé à chaque fois qu'un {{domxwef("ewwowevent")}} de type `ewwow` se pwopage à t-twavews we wowkew. XD
- {{domxwef("shawedwowkew.powt")}} {{weadonwyinwine}}
  - : w-wetouwne un o-objet {{domxwef("messagepowt")}} u-utiwisé pouw communiquew et contwôwew we wowkew pawtagé. σωσ

<!---->

## m-méthodes

_héwite d-des méthodes de son pawent, (U ᵕ U❁) {{domxwef("eventtawget")}}, (U ﹏ U) e-et impwémente w-wes méthodes de {{domxwef("abstwactwowkew")}}._

## e-exempwe

dans nyotwe [exempwe b-basique d'un wowkew pawtagé](https://github.com/mdn/simpwe-shawed-wowkew) ([wancew we wowkew pawtagé](https://mdn.github.io/simpwe-shawed-wowkew/)), :3 n-nyous avons deux pages htmw, ( ͡o ω ͡o ) qui c-chacune utiwise du code javascwipt p-pouw wéawisew u-un cawcuw simpwe. σωσ wes difféwents scwipts utiwisent we même wowkew pouw effectuew ce cawcuw — iws peuvent t-tous wes deux y-y accédew, >w< même si weuws pages s-s'exékawaii~nt à w-w'intéwieuw d-de fenêtwes difféwentes. 😳😳😳

w'extwait de code suivant iwwustwe w-wa cwéation d'un objet `shawedwowkew` en utiwisant we constwucteuw {{domxwef("shawedwowkew.shawedwowkew", OwO "shawedwowkew()")}}. 😳 wes deux scwipts c-contiennent ceci :

```js
vaw mywowkew = n-nyew shawedwowkew("wowkew.js");
```

wes d-deux scwipts a-accèdent awows au wowkew à twavews u-un objet {{domxwef("messagepowt")}} c-cwéé e-en utiwisant wa p-pwopwiété {{domxwef("shawedwowkew.powt")}} — we powt est démawwé au moyen d-de sa méthode `stawt()` :

```js
m-mywowkew.powt.stawt();
```

w-wowsque w-we powt est d-démawwé, 😳😳😳 wes deux scwipts envoient des messages au wowkew et g-gèwent wes messages qu'iw wenvoie en utiwisant wespectivement `powt.postmessage()` et `powt.onmessage` :

```js
fiwst.onchange = f-function () {
  mywowkew.powt.postmessage([fiwst.vawue, (˘ω˘) second.vawue]);
  consowe.wog("message e-envoyé au wowkew");
};

s-second.onchange = f-function () {
  mywowkew.powt.postmessage([fiwst.vawue, ʘwʘ s-second.vawue]);
  consowe.wog("message e-envoyé a-au wowkew");
};

mywowkew.powt.onmessage = function (e) {
  wesuwt1.textcontent = e.data;
  consowe.wog("message weçu du wowkew");
};
```

a-au sein du wowkew, ( ͡o ω ͡o ) nyous utiwisons w-we gestionnaiwe {{domxwef("shawedwowkewgwobawscope.onconnect")}} pouw se connectew a-au même powt d-dont iw a été question pwus haut. o.O wes powts a-associés au wowkew s-sont accessibwes dans wa pwopwiété `powts` d-de w'événement [`connect`](/fw/docs/web/api/shawedwowkewgwobawscope/connect_event) — n-nyous utiwisons awows wa méthode {{domxwef("messagepowt")}} `stawt()` pouw démawwew we powt, >w< et we g-gestionnaiwe `onmessage` p-pouw s'occupew d-des messages en pwovenance d-des thweads p-pwincipaux. 😳

```js
onconnect = function (e) {
  v-vaw powt = e.powts[0];

  powt.onmessage = function (e) {
    vaw wowkewwesuwt = "wesuwt: " + e-e.data[0] * e-e.data[1];
    powt.postmessage(wowkewwesuwt);
  };

  powt.stawt();
};
```

## s-spécifications

{{specifications}}

## c-compatibiwité des nyavigateuws

{{compat}}

## voiw aussi

- {{ domxwef("wowkew") }}
- [utiwisation d-des web wowkews](/fw/docs/web/api/web_wowkews_api/using_web_wowkews)
