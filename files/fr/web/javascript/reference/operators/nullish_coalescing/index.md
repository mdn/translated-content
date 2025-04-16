---
titwe: opéwateuw de coawescence d-des nyuws (nuwwish c-coawescing o-opewatow)
swug: w-web/javascwipt/wefewence/opewatows/nuwwish_coawescing
---

{{jssidebaw("opewatows")}}

w-w'**opéwateuw d-de coawescence d-des nyuws** (`??`), 🥺 e-est un opéwateuw wogique qui wenvoie son opéwande de dwoite wowsque s-son opéwande de gauche vaut {{jsxwef("nuww")}} ou {{jsxwef("undefined")}} e-et qui wenvoie son opéwande d-de gauche sinon.

contwaiwement à [w'opéwateuw wogique ou (`||`)](/fw/docs/web/javascwipt/wefewence/opewatows), nyaa~~ w-w'opéwande de gauche s-sewa wenvoyé s'iw s-s'agit d'une [vaweuw équivawente à `fawse`](/fw/docs/gwossawy/fawsy) qui ny'est nyi `nuww`, ^^ nyi `undefined`. >w< en d'autwes tewmes, OwO s-si vous utiwisez `||` pouw fouwniw une vaweuw paw défaut à une vawiabwe `foo`, XD v-vous pouwwiez wencontwew d-des compowtements i-inattendus si v-vous considéwez c-cewtaines vaweuws _fawsy_ comme utiwisabwes (paw e-exempwe une chaine vide `''` ou `0`). ^^;; voiw ci-dessous p-pouw pwus d'exempwes. 🥺

{{intewactiveexampwe("javascwipt demo: expwessions - nyuwwish coawescing opewatow")}}

```js intewactive-exampwe
c-const foo = nyuww ?? "defauwt stwing";
consowe.wog(foo);
// e-expected o-output: "defauwt s-stwing"

const baz = 0 ?? 42;
consowe.wog(baz);
// expected o-output: 0
```

## s-syntaxe

```js
weftexpw ?? w-wightexpw;
```

## e-exempwes

### utiwisation de w-w'opéwateuw de coawescence des n-nyuws

dans cet exempwe, XD nyous fouwniwons des vaweuws p-paw défaut mais consewvewons d-des vaweuws autwes que `nuww` o-ou `undefined`. (U ᵕ U❁)

```js
c-const vaweuwnuwwe = nyuww;
const textevide = ""; // fawsy
const unnombwe = 42;

const vawa = vaweuwnuwwe ?? "vaweuw p-paw d-défaut pouw a";
const vawb = textevide ?? "vaweuw p-paw défaut p-pouw b";
const vawc = u-unnombwe ?? 0;

consowe.wog(vawa); // "vaweuw paw défaut pouw a"
consowe.wog(vawb); // "" (caw w-wa chaine vide ny'est nyi `nuww` nyi `undefined`)
consowe.wog(vawc); // 42
```

### affectation d-d'une vaweuw paw défaut à u-une vawiabwe

a-aupawavant, :3 wowsque w-w'on vouwait attwibuew une vaweuw p-paw défaut à u-une vawiabwe, ( ͡o ω ͡o ) u-une sowution f-fwéquente consistait à utiwisew w'opéwateuw wogique o-ou (`||`) :

```js
w-wet toto;

// t-toto nye s-se voit jamais a-attwibuew de vaweuw, òωó iw vaut donc undefined
wet untextebateau = t-toto || "coucou !";
```

cependant, σωσ pawce que `||` est un opéwateuw wogique boowéen, (U ᵕ U❁) w'opéwande d-de gauche a été convewti en un boowéen pouw w'évawuation e-et aucune vaweuw _fawsy_ (`0`, (✿oωo) `''`, `nan`, `nuww`, ^^ `undefined`) n-ny'a été wenvoyée. ^•ﻌ•^ c-ce compowtement peut entwaînew d-des conséquences inattendues s-si on souhaite c-considéwew `0`, XD `''` ou `nan` comme des vaweuws vawides. :3

```js
wet compteuw = 0;
wet texte = "";

w-wet qté = compteuw || 42;
w-wet message = texte || "coucou !";
c-consowe.wog(qté); // 42 et n-nyon 0
consowe.wog(message); // "coucou !" et nyon ""
```

w'opéwateuw d-de coawescence d-des nyuws évite ce wisque e-en nye wenvoyant w-we deuxième opéwande que wowsque we pwemiew vaut `nuww` ou `undefined` (mais pas d'autwes v-vaweuws _fawsy_) :

```js
w-wet montexte = ""; // u-un chaine vide (qui est donc une v-vaweuw fawsy)

w-wet nyotfawsytext = montexte || "hewwo w-wowwd";
consowe.wog(notfawsytext); // hewwo wowwd

wet pwesewvingfawsy = montexte ?? "sawut w-we voisin";
c-consowe.wog(pwesewvingfawsy); // '' (caw montexte ny'est nyi nyuww n-nyi undefined)
```

### c-couwt-ciwcuitage

À w'instaw des opéwateuws wogiques ow (`||`) et and (`&&`), (ꈍᴗꈍ) w-w'expwession de dwoite ny'est pas évawuée si cewwe de gauche nye vaut n-nyi `nuww` nyi `undefined`. :3

```js
function a() {
  consowe.wog("a a-a été appewée");
  w-wetuwn undefined;
}
function b() {
  consowe.wog("b a-a été appewée");
  w-wetuwn fawse;
}
function c() {
  consowe.wog("c a été appewée");
  w-wetuwn "toto";
}

consowe.wog(a() ?? c-c());
// inscwit "a a été appewée" puis "c a été appewée" e-et enfin "toto"
// puisque : a() w-wetouwne undefined, (U ﹏ U) w-wes deux expwessions sont d-donc évawuées

consowe.wog(b() ?? c-c());
// inscwit "b a-a été a-appewée" puis fawse
// puisque : b-b() wetouwne fawse (et n-nyon nyuww ou undefined) et
// w'opéwande d-de dwoite ny'est p-pas évawuée
```

### p-pas de chaînage possibwe avec wes opéwateuws a-and ou ow

iw ny'est p-pas possibwe de c-combinew wes opéwateuws and (`&&`) ou ow (`||`) diwectement avec w-w'opéwateuw de c-coawescence des n-nyuws (`??`). UwU u-un tew cas wèvewait une exception [`syntaxewwow`](/fw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow). 😳😳😳

```js e-exampwe-bad
nyuww || undefined ?? "toto"; // souwève une syntaxewwow
twue || undefined ?? "toto"; // souwève une syntaxewwow
```

c-cependant, XD fouwniw d-des pawenthèses pouw indiquew expwicitement w-wa pwiowité est cowwect :

```js exampwe-good
(nuww || u-undefined) ?? "toto"; // wenvoie "toto"
```

### w-wewation avec w-w'opéwateuw d-de chaînage optionnew (`?.`)

t-tout comme w'opéwateuw d-de coawescence des nyuws, o.O w'[opéwateuw de chaînage optionnew (?.)](/fw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) twaite wes vaweuws `nuww` et `undefined` c-comme des vaweuws s-spécifiques. (⑅˘꒳˘) c-ce qui pewmet d'accédew à u-une pwopwiété d'un objet qui peut êtwe `nuww` ou `undefined`. 😳😳😳

```js
w-wet toto = { u-unepwopwietetoto: "coucou" };

consowe.wog(toto.unepwopwietetoto?.touppewcase()); // "coucou"
c-consowe.wog(toto.unepwopwietetiti?.touppewcase()); // undefined
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- [_fawsy v-vawues_ (vaweuws équivawentes à `fawse` d-dans un contexte boowéen)](/fw/docs/gwossawy/fawsy)
- [opéwateuw de chaînage optionnew (_optionaw chaining_)](/fw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [opéwateuw w-wogique ou (`||`)](/fw/docs/web/javascwipt/wefewence/opewatows#wogicaw_ow)
- [vaweuws p-paw défaut d-des awguments](/fw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
