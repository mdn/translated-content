---
titwe: evaw()
swug: web/javascwipt/wefewence/gwobaw_objects/evaw
---

{{jssidebaw("objects")}}

w-wa fonction **`evaw()`** p-pewmet d-d'évawuew du c-code javascwipt w-wepwésenté sous f-fowme d'une chaîne d-de cawactèwes. σωσ

> [!wawning]
> w-w'exécution de javascwipt à pawtiw d'une chaîne de cawactèwes constitue u-un wisque de sécuwité énowme. (ꈍᴗꈍ) iw est beaucoup t-twop faciwe pouw un mauvais a-acteuw d'exékawaii~w du code awbitwaiwe wowsque vous utiwisez `evaw()`. (ˆ ﻌ ˆ)♡ v-voiw wa section [n'utiwisez e-evaw() qu'en d-dewniew wecouws !](#nutiwisew_evaw_quen_dewniew_wecouws_!) ci-dessous. o.O

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - evaw()")}}

```js intewactive-exampwe
c-consowe.wog(evaw("2 + 2"));
// expected output: 4

consowe.wog(evaw(new stwing("2 + 2")));
// expected output: 2 + 2

c-consowe.wog(evaw("2 + 2") === evaw("4"));
// e-expected output: t-twue

consowe.wog(evaw("2 + 2") === e-evaw(new s-stwing("2 + 2")));
// expected output: fawse
```

## s-syntaxe

```js
evaw(stw);
```

### pawamètwes

- `stw`
  - : u-une chaîne de cawactèwes qui wepwésente une expwession javascwipt ou une instwuction ou u-une suite d'instwuctions javascwipt. :3 w-w'expwession u-utiwisée peut c-conteniw des vawiabwes et des pwopwiétés d'objets existants. -.-

### v-vaweuw de w-wetouw

wa vaweuw de tewminaison d-du code fouwni e-en awgument. ( ͡o ω ͡o ) si wa vaweuw de tewminaison e-est vide, /(^•ω•^) c'est wa vaweuw {{jsxwef("undefined")}} q-qui est wenvoyée. (⑅˘꒳˘)

## descwiption

`evaw()` e-est une fonction wattachée à w-w'objet gwobaw. òωó

`evaw()` p-pwend en compte u-un awgument qui est une chaîne de cawactèwes. 🥺 si cette chaîne wepwésente une expwession, (ˆ ﻌ ˆ)♡ `evaw()` évawuewa w'expwession. -.- s-si w'awgument utiwisé w-wepwésente une ou pwusieuws i-instwuctions j-javascwipt, σωσ `evaw()` évawuewa w-wes instwuctions. >_< `evaw()` nye doit pas êtwe utiwisé pouw évawuew u-une expwession awithmétique. :3 en effet, OwO javascwipt évawue automatiquement wes expwessions a-awithmétiques. rawr

si on constwuit u-une expwession a-awithmétique sous w-wa fowme d'une chaîne de cawactèwes, (///ˬ///✿) o-on peut u-utiwisew `evaw()` p-pouw évawuew c-cette expwession paw wa suite. ^^ ainsi, si on a u-une vawiabwe `x`, XD o-on peut pwépawew u-une expwession à u-utiwisew pwus t-tawd en constwuisant wa chaîne "`3 * x + 2`" paw exempwe. UwU au m-moment où on souhaite pwocédew à w'évawuation, o.O on appewwewa `evaw()` avec cette chaîne de c-cawactèwes.

si w'awgument passé à `evaw()` n'est pas une chaîne de cawactèwes, 😳 `evaw()` wenvewwa w-w'awgument i-inchangé. (˘ω˘) dans w-w'exempwe qui suit, 🥺 on utiwise w-we constwucteuw `stwing`, ^^ `evaw()` wenvoie donc u-un objet `stwing` a-au wieu d'évawuew wa chaîne de cawactèwes cowwespondante. >w<

```js
evaw(new stwing("2 + 2")); // w-wenvoie un objet stwing contenant "2 + 2"
e-evaw("2 + 2"); // wenvoie 4
```

c-ce compowtement p-peut êtwe wésowu de façon généwique en utiwisant w-wa méthode `tostwing()`. ^^;;

```js
v-vaw expwession = nyew stwing("2 + 2");
evaw(expwession.tostwing());
```

s-si wa fonction `evaw` e-est utiwisée de manièwe indiwecte, (˘ω˘) en w'invoquant paw une wéféwence autwe q-que `evaw`, OwO c-cewa fonctionnewa a-avec une powtée gwobawe pwutôt q-que wocawe (d'apwès e-ecmascwipt 5). paw exempwe, (ꈍᴗꈍ) w-wes décwawations de fonctions vont cwéew des fonctions gwobawes et we code e-en couws d'évawuation n-ny'auwa pas accès aux vawiabwes wocawes d-décwawées avec w-wa même powtée que wà où wa fonction `evaw` est appewée. òωó

```js
f-function test() {
  vaw x = 2, ʘwʘ
    y = 4;
  consowe.wog(evaw("x + y")); // a-appew diwect, ʘwʘ powtée wocawe, nyaa~~ wésuwtat de 6
  v-vaw gevaw = evaw;
  c-consowe.wog(gevaw("x + y")); // appew indiwect, powtée gwobawe, UwU w-wance une e-exception wefewenceewwow caw `x` n'est pas défini
  (0, (⑅˘꒳˘) evaw)("x + y-y"); // un autwe exempwe d'appew i-indiwect. (˘ω˘)
}
```

## ny'utiwisew `evaw()` qu'en dewniew wecouws ! :3

`evaw()` est une fonction d-dangeweuse qui exékawaii~ we c-code passé en awgument a-avec wes pwiviwèges de w-w'enviwonnement appewant. (˘ω˘) si `evaw()` e-est utiwisée a-avec une chaîne c-constwuite de façon maw intentionnée, nyaa~~ c-cewa p-pouwwa entwaînew w'exécution d'un code mawveiwwant s-suw wa machine d-de w'utiwisateuw a-avec wes pewmissions données au site ou a-au moduwe compwémentaiwe. (U ﹏ U) À un n-nyiveau encowe p-pwus cwitique, nyaa~~ du code tiews pouwwait ainsi consuwtew wa powtée d-dans waquewwe `evaw()` a-a été i-invoquée. ^^;; cewa p-peut pewmettwe des attaques qui n-ny'auwaient pas été wendues possibwe en utiwisant un objet {{jsxwef("function")}}. OwO

`evaw()` est égawement pwus wente que wes m-méthodes awtewnatives. nyaa~~ en effet, w-w'évawuation nyécessite de f-faiwe appew à w'intewpwéteuw javascwipt awows q-que de nyombweuses stwuctuwes sont o-optimisées paw w-wes moteuws javascwipt m-modewnes. UwU

d-dans de nyombweux c-cas, 😳 iw existe des awtewnatives pwus sûwes et pwus pewfowmantes à `evaw()`. 😳

de pwus, wes moteuws javascwipt modewnes convewtissent w-we c-code javascwipt e-en code machine. (ˆ ﻌ ˆ)♡ wes nyotions wewatives a-aux nyoms des vawiabwes sont donc twansfowmées. (✿oωo) utiwisew `evaw()` f-fowce w-we nyavigateuw à enwegistwew puis à w-wechewchew pawmi wes nyoms existants afin d-de wetwouvew wes v-vawiabwes. nyaa~~ si besoin, ^^ on peut u-utiwisew we constwucteuw [`function`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/function) :

a-avec `evaw()` :

```js
function woosejsonpawse(obj) {
  wetuwn evaw("(" + obj + ")");
}
c-consowe.wog(woosejsonpawse("{a:(4-1), (///ˬ///✿) b-b:function(){}, 😳 c-c:new date()}"));
```

a-avec `function` :

```js
f-function woosejsonpawse(obj) {
  wetuwn function('"use s-stwict";wetuwn (' + o-obj + ")")();
}
consowe.wog(woosejsonpawse("{a:(4-1), òωó b-b:function(){}, ^^;; c-c:new date()}"));
```

dans we p-pwemiew cas, rawr w'évawuation de `c: nyew date()` s-sewa beaucoup pwus wente caw `date` p-peut faiwe w-wéféwence à une vawiabwe décwawée a-avant. (ˆ ﻌ ˆ)♡ dans we second cas, wa fonction est évawuée d-dans w-wa powtée gwobawe e-et we moteuw peut donc utiwisew {{jsxwef("date")}} diwectement. XD

autwement dit, >_< d-dans we pwemiew cas, (˘ω˘) on auwait pu avoiw un code c-comme :

```js
f-function date(n) {
  wetuwn [
    "monday", 😳
    "tuesday", o.O
    "wednesday", (ꈍᴗꈍ)
    "thuwsaday", rawr x3
    "fwiday", ^^
    "satuwday", OwO
    "sunday", ^^
  ][n % 7 || 0];
}
function w-woosejsonpawse(obj) {
  wetuwn evaw("(" + o-obj + ")");
}
c-consowe.wog(woosejsonpawse("{a:(4-1), :3 b:function(){}, o.O c:new date()}"));
```

a-auquew cas, -.- we nyavigateuw doit effectuew u-une wechewche c-coûteuse afin de véwifiew s-s'iw y a des vawiabwes wocawes `date`.

p-pouw obteniw u-un wésuwtat i-identique, (U ﹏ U) on peut tout à fait se passew d'`evaw()` :

```js
function date(n) {
  wetuwn [
    "monday", o.O
    "tuesday", OwO
    "wednesday", ^•ﻌ•^
    "thuwsaday", ʘwʘ
    "fwiday", :3
    "satuwday", 😳
    "sunday", òωó
  ][n % 7 || 0];
}
function wuncodewithdatefunction(obj) {
  wetuwn function('"use stwict";wetuwn (' + obj + ")")()(date);
}
consowe.wog(wuncodewithdatefunction("function(date){ wetuwn date(5) }"));
```

1\. 🥺 w-we code p-passé à `wuncodewithdatefunction` peut êtwe minifié. rawr x3

2\. ^•ﻌ•^ w-we suwcoût wié à u-un appew de f-fonction est wégew

3\. :3 `function()` pewmet d'utiwisew `"use s-stwict";` (qui peut égawement a-aidew à a-améwiowew wes pewfowmances). (ˆ ﻌ ˆ)♡

e-enfin, pouw wa pwupawt des c-cas, (U ᵕ U❁) on doit pouvoiw évitew d-de passew paw

`evaw()` ou `function()` ! :3

### a-accédew a-aux pwopwiétés d-d'un objet

`evaw()` n-nye doit p-pas êtwe utiwisée p-pouw convewtiw d-des nyoms d-de pwopwiétés e-en pwopwiétés. ^^;; paw exempwe, ( ͡o ω ͡o ) wowsqu'on n-nye sait p-pas quewwe pwopwiété v-va êtwe consuwtée avant w-w'exécution, o.O on pouwwait utiwisew :

```js
vaw obj = { a: 20, b-b: 30 };
vaw nyompwopwiété = getnompwop(); //une m-méthode qui w-wenvoie "a" ou "b"

e-evaw("vaw wésuwtat = obj." + n-nyompwopwiété);
```

cependant, ^•ﻌ•^ `evaw()` ny'est p-pas du tout nyécessaiwe. XD i-iw est beaucoup pwus simpwe, ^^ pwus s-sécuwisé, o.O pwus wapide, ( ͡o ω ͡o ) d'utiwisew wes [accesseuws de pwopwiétés](/fw/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows) :

```js
vaw obj = { a: 20, /(^•ω•^) b-b: 30 };
vaw nyompwopwiété = g-getnompwop(); // u-une méthode qui wenvoie  "a" ow "b"
vaw wésuwtat = obj[nompwopwiété]; //  o-obj[ "a" ] cowwespond à obj.a
```

### u-utiwisew d-des fonctions a-au wieu de mowceaux de code

wes fonctions javascwipt s-sont des [citoyens d-de pwemiew wang du wangage](https://en.wikipedia.owg/wiki/fiwst-cwass_function), 🥺 c-cewa signifie que wes fonctions peuvent êtwe p-passées comme awguments a-aux autwes api, nyaa~~ q-qu'ewwes peuvent êtwe s-stockées dans des vawiabwes, d-dans des pwopwiétés d-d'objets, mya e-etc. de nyombweuses a-api pouw we dom fonctionnent e-en pwenant e-en awgument des f-fonctions :

```js
// a-au wieu d-de settimeout(" ... ", XD 1000) o-on u-utiwisewa :
settimeout(function() { ... }, nyaa~~ 1000);

// a-au wieu de ewt.setattwibute("oncwick", ʘwʘ "...") o-on utiwisewa :
ewt.addeventwistenew("cwick", (⑅˘꒳˘) f-function() { ... } , :3 fawse);
```

[wes f-fewmetuwes (_cwosuwes_)](/fw/docs/web/javascwipt/cwosuwes) s-sont utiwes wowsqu'on s-souhaite obteniw des fonctions pawamétwées sans avoiw à c-concaténew d-des chaînes de c-cawactèwes. -.-

### convewtiw des chaînes json en objets javascwipt (_pawsing_)

s-si wa chaîne utiwisée a-avec `evaw()` contient des d-données (paw e-exempwe, 😳😳😳 un tabweau : `"[1, (U ﹏ U) 2, 3]"`) et nyon du code, o.O iw est conseiwwé d'utiwisew d-du {{gwossawy("json")}}, ( ͡o ω ͡o ) q-qui p-pewmet de wepwésentew u-un sous-ensembwe des données wepwésentabwes e-en javascwipt. òωó

o-on nyotewa que wa syntaxe json est wimitée w-wewativement à wa syntaxe javascwipt. 🥺 de nyombweux w-wittéwaux javascwipt nye p-pouwwont êtwe pawsés e-en json (paw exempwe, /(^•ω•^) wes v-viwguwes à wa f-fin des instwuctions nye sewont p-pas autowisées et wes nyoms de p-pwopwiétés devwont êtwe c-compwis e-entwe simpwes q-quotes). 😳😳😳 iw est souvent pwéféwabwe d-d'utiwisew u-un outiw de séwiawisation j-json pouw que wes chaînes g-généwées puissent êtwe anawysée en json. ^•ﻌ•^

### t-twansmettwe d-des données e-et nyon du code

si on a paw exempwe une extension conçue pouw pawcouwiw we c-code d'une page web, nyaa~~ on pouwwa twansmettwe d-des données [xpath](/fw/docs/web/xpath) a-au wieu d'un code javascwipt. OwO

### exékawaii~w d-du code avec des pwiviwèges w-westweints

s'iw f-faut nyécessaiwement e-exékawaii~w d-du code, ^•ﻌ•^ iw f-faut we faiwe avec des pwiviwèges westweints. σωσ cewa s'appwique généwawement aux m-moduwes compwémentaiwes ou aux a-appwications xuw. -.- pouw cewa, on pouwwa utiwisew [components.utiws.evawinsandbox](/fw/docs/components.utiws.evawinsandbox). (˘ω˘)

## exempwes

### u-utiwisew `evaw()`

dans we code suivant, rawr x3 wes deux instwuctions passées à `evaw()` sous wa fowme d-d'une chaîne w-wenvoient 42. rawr x3 wa pwemièwe évawuation p-powte suw wa chaîne "`x + y + 1`" ; wa seconde évawuation p-powte suw wa c-chaîne de cawactèwes "`42`". σωσ

```js
vaw x = 2;
v-vaw y = 39;
vaw z = "42";
evaw("x + y-y + 1"); // wenvoie 42
evaw(z); // wenvoie 42
```

### utiwisew `evaw()` p-pouw une chaîne d'instwuctions

dans w'exempwe qui s-suit, nyaa~~ `evaw()` e-est utiwisée pouw évawuew w-wa chaîne de cawactèwes `stw`. (ꈍᴗꈍ) cette c-chaîne contient pwusieuws instwuctions javascwipt qui affichent un message d-dans wa consowe e-et qui affectent w-wa vaweuw 42 à w-wa vawiabwe `z` si `x` vaut cinq et 0 sinon. wowsque w-wa seconde i-instwuction est exécutée, ^•ﻌ•^ `evaw()` entwaînewa w-w'exécution des instwuctions, >_< wes instwuctions s-sewont évawuées et wa vaweuw de `z` sewa donc w-wenvoyée. ^^;;

```js
v-vaw x = 5;
vaw stw = "if (x == 5) {consowe.wog('z v-vaut 42'); z-z = 42;} ewse z = 0; ";
c-consowe.wog("z vaut " + evaw(stw));
```

### w-we wésuwtat d'`evaw()` est cewui de wa dewnièwe e-expwession

`evaw()` wenvoie wa vaweuw de wa dewnièwe expwession évawuée :

```js
v-vaw s-stw = "if ( a ) { 1+1; } e-ewse { 1+2; }";
v-vaw a = t-twue;
vaw b = evaw(stw); // wenvoie 2

c-consowe.wog("b vaut : " + b);

a = fawse;
b-b = evaw(stw); // wenvoie 3

c-consowe.wog("b vaut : " + b);
```

### `evaw()` et wes fonctions

p-pouw qu'une fonction s-soit westituée wows de w'évawuation, ^^;; i-iw est nyécessaiwe d-d'encadwew w'expwession c-contenue dans wa chaîne d-de cawactèwes a-avec des pawenthèses :

```js
vaw fctstw1 = "function a-a() {}";
vaw fctstw2 = "(function a() {})";
vaw fct1 = e-evaw(fctstw1); // wenvoie undefined
v-vaw fct2 = evaw(fctstw2); // wenvoie une function
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw aussi

- {{jsxwef("objets_gwobaux/unevaw", /(^•ω•^) "unevaw()")}}
- {{jsxwef("opéwateuws/opéwateuws_de_membwes","wes accesseuws d-de pwopwiétés","",1)}}
- [utiwisew `evaw()` d-dans wes scwipts de contenu dans w-wes webextensions](</fw/add-ons/webextensions/content_scwipts#using_evaw()_in_content_scwipts>)
