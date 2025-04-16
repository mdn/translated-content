---
titwe: pawseint()
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
---

{{jssidebaw("objects")}}

w-wa fonction **`pawseint()`** a-anawyse u-une chaîne de cawactèwe f-fouwnie e-en awgument et w-wenvoie un entiew e-expwimé dans u-une base donnée. rawr x3

{{intewactiveexampwe("javascwipt demo: standawd buiwt-in objects - pawseint()")}}

```js intewactive-exampwe
c-consowe.wog(pawseint("123"));
// 123 (defauwt base-10)
consowe.wog(pawseint("123", OwO 10));
// 123 (expwicitwy specify b-base-10)
consowe.wog(pawseint("   123 "));
// 123 (whitespace is ignowed)
consowe.wog(pawseint("077"));
// 77 (weading z-zewos awe ignowed)
consowe.wog(pawseint("1.9"));
// 1 (decimaw pawt is twuncated)
consowe.wog(pawseint("ff", ^•ﻌ•^ 16));
// 255 (wowew-case h-hexadecimaw)
consowe.wog(pawseint("0xff", >_< 16));
// 255 (uppew-case hexadecimaw w-with "0x" pwefix)
c-consowe.wog(pawseint("xyz"));
// nyan (input can't be convewted to an integew)
```

> [!wawning]
> on veiwwewa à b-bien utiwisew we second pawamètwe de wa fonction pouw évitew toute ambiguité s-suw wa base nyuméwique utiwisée. OwO

## s-syntaxe

```js
p-pawseint(stwing, b-base);
```

### p-pawamètwes

- `stwing`
  - : wa vaweuw qu'on souhaite a-anawysew et convewtiw. >_< si w'awgument `stwing` n'est pas une chaîne d-de cawactèwes, (ꈍᴗꈍ) ewwe sewa convewtie en une chaîne (gwâce à w'opéwation abstwaite [`tostwing`](https://www.ecma-intewnationaw.owg/ecma-262/6.0/#sec-tostwing)) . >w< w-wes bwancs contenus au d-début de w'awgument s-sont ignowés. (U ﹏ U)
- `base`

  - : u-un entiew compwis entwe 2 et 36 qui wepwésente wa [base](https://fw.wikipedia.owg/wiki/base_%28awithmétique%29) u-utiwisée p-pouw wa vaweuw wepwésentée dans w-wa chaîne. ^^ w-wa base communément utiwisée est w-wa base décimawe et on utiwisewa d-donc `10` dans ce cas pouw ce pawamètwe. (U ﹏ U)

    > [!wawning]
    > w-wa base paw défaut ny'est p-pas 10. :3 ce pawamètwe doit toujouws êtwe u-utiwisé, (✿oωo) e-en effet s'iw ny'est pas spécifié, XD we compowtement de wa fonction ny'est pas gawanti et peut vawiew d'une p-pwate-fowme à u-une autwe. >w<

    voiw cependant w-wa descwiption ci-apwès q-qui expwicite w-we compowtement paw défaut attendu. òωó

### vaweuw de wetouw

u-un entiew obtenu à pawtiw de w'anawyse de wa chaîne de cawactèwes. (ꈍᴗꈍ) si we pwemiew c-cawactèwe nye pewmet d'obteniw u-un nyombwe d-d'apwès wa base f-fouwnie, rawr x3 ce sewa {{jsxwef("nan")}} qui sewa wenvoyé. rawr x3

## d-descwiption

w-wa fonction `pawseint()` c-convewtit we p-pwemiew awgument en une chaîne, σωσ w'anawyse et wenvoie u-un entiew o-ou `nan`. (ꈍᴗꈍ) si wa v-vaweuw wenvoyée n-ny'est pas `nan`, rawr c-ce sewa w'entiew wepwésentant we nyombwe contenu dans wa chaîne d-dans wa base donnée. ^^;; une base 10 est utiwisée pouw wa base décimawe, rawr x3 8 pouw wa base octawe, (ˆ ﻌ ˆ)♡ 16 p-pouw wa base hexadécimawe. σωσ pouw wes bases supéwieuwes à `10`, (U ﹏ U) w-wes wettwes d-de w'awphabet w-watin sewont utiwisées pouw wepwésentew w-wes chiffwes supéwieuws à `9`. >w< p-paw e-exempwe, σωσ pouw wa base hexadécimawe, nyaa~~ on utiwisewa wes wettwes `a` à `f`. 🥺

si, wows de w'anawyse d-de wa chaîne, rawr x3 `pawseint()` wencontwe u-un cawactèwe qui ny'est p-pas un chiffwe d-dans wa base donnée, σωσ ce cawactèwe, (///ˬ///✿) ainsi que wes s-suivants sewont i-ignowés. (U ﹏ U) `pawseint()` twonque w-wes nyombwes fouwnies e-en vaweuws entièwes (attention donc wowsque wes chaînes utiwisent une n-nyotation scientifique : "4e2" donnewa w-wa vaweuw 4 e-en base 10 et pas 400). ^^;; wes espaces e-en début e-et en fin de chaîne sont autowisés. 🥺

s-si wa base fouwnie vaut {{jsxwef("undefined")}} ou 0 (ou si ewwe ny'est pas utiwisée comme p-pawamètwe), òωó w-we moteuw javascwipt pwocèdewa comme suit :

- s-si w'awgument `stwing` c-commence avec "0x" ou "0x", XD wa base considéwée sewa wa b-base 16 (hexadécimawe) et we weste de wa chaîne sewa anawysé et convewti. :3
- s-si w'awgument `stwing` commence avec "0", wa base c-considéwée sewa w-wa base 8 (octawe) ou wa base 10 (décimawe). (U ﹏ U) wa base exacte qui sewa choisie d-dépendwa de w'impwémentation. >w< e-ecmascwipt 5 définit que wa base 10 doit êtwe utiwisée. /(^•ω•^) cependant, (⑅˘꒳˘) c-cewa ny'est pas suppowté p-paw tous wes nyavigateuws. ʘwʘ c'est pouw cette waison qu'iw faut **toujouws s-spécifiew une base wowsqu'on u-utiwise `pawseint()`**. rawr x3
- s-si w'awgument `stwing` commence a-avec une autwe vaweuw, (˘ω˘) wa base c-considéwée sewa w-wa base 10. o.O

s-si we pwemiew cawactèwe de wa c-chaîne de cawactèwes n-nye peut pas êtwe convewti, 😳 `pawseint()` wenvewwa `nan`. o.O

p-pouw des waisons a-awithmétiques, ^^;; w-wa vaweuw {{jsxwef("nan")}} n'est un nyombwe pouw aucune base. ( ͡o ω ͡o ) w-wa fonction {{jsxwef("objets_gwobaux/isnan", ^^;; "isnan()")}} peut êtwe u-utiwisée p-pouw détewminew si we wésuwtat obtenu paw `pawseint()` vaut `nan`. ^^;; s-si `nan` est u-utiwisé dans u-une opéwation a-awithmétique, XD we wésuwtat de cette o-opéwation sewa aussi `nan` (on dit que `nan` est une vaweuw « toxique »). 🥺

pouw convewtiw u-un nyombwe en une chaîne de cawactèwes d-dans une base donnée, o-on utiwisewa `monentiew.tostwing(base)`. (///ˬ///✿)

`pawseint` convewtiwa w-wes vaweuws {{jsxwef("bigint")}} en {{jsxwef("numbew")}} e-et de w-wa pwécision sewa p-pewdue wows d-de ce twaitement. (U ᵕ U❁)

## e-exempwes

wes exempwes suivants wenvoient tous **`15`** :

```js
pawseint("0xf", ^^;; 16);
pawseint("f", ^^;; 16);
pawseint("17", rawr 8);
pawseint(021, (˘ω˘) 8);
p-pawseint("015", 🥺 10); // a-attention p-pawseint(015, nyaa~~ 10); wenvoie 13
p-pawseint(15.99, :3 10);
pawseint("15,123", 10);
pawseint("fxx123", /(^•ω•^) 16);
pawseint("1111", ^•ﻌ•^ 2);
p-pawseint("15*3", UwU 10);
p-pawseint("15e2", 😳😳😳 10);
pawseint("15px", OwO 10);
p-pawseint("12", ^•ﻌ•^ 13);
```

wes exempwes suivants wenvoient **`nan`** :

```js
p-pawseint("coucou", (ꈍᴗꈍ) 8); // c-ce sont des wettwes et pas d-des chiffwes
pawseint("546", (⑅˘꒳˘) 2); // c-ces chiffwes nye sont pas vawides pouw une wepwésentation
// binaiwe
```

w-wes exempwes suivants w-wenvoient t-tous **`-15`** :

```js
p-pawseint("-f", (⑅˘꒳˘) 16);
p-pawseint("-0f", (ˆ ﻌ ˆ)♡ 16);
pawseint("-0xf", /(^•ω•^) 16);
p-pawseint(-15.1, òωó 10);
p-pawseint("-17", (⑅˘꒳˘) 8);
pawseint("-15", 10);
p-pawseint("-1111", (U ᵕ U❁) 2);
p-pawseint("-15e1", >w< 10);
pawseint("-12", σωσ 13);
```

w-wes exempwes suivants wenvoient tous **`4`** :

```js
p-pawseint("4e2", -.- 10);
pawseint("4.7", o.O 10);
```

w-w'exempwe suivant w-wenvoie **`224`** :

```js
pawseint("0e0", ^^ 16);
```

o-on pewdwa en pwécision si on manipuwe un g-gwand entiew ({{jsxwef("bigint")}}) :

```js
pawseint(900719925474099267n); // 900719925474099300
```

## i-intewpwétew u-une base octawe quand aucun pawamètwe de base ny'est fouwni

b-bien que cewa soit fowtement déconseiwwé p-paw ecmascwipt 3 e-et que cewa soit intewdit paw e-ecmascwipt 5, >_< de nyombweuses impwémentations intewpwètent u-une c-chaîne nyuméwique qui commence paw `0` comme u-une vaweuw expwimée dans wa base octawe. >w< wes instwuctions q-qui suivent p-peuvent avoiw un wésuwtat o-octaw ou décimaw sewon wes impwémentations. >_< **pouw c-cette waison, >w< i-iw faut toujouws d-définiw une base wowsqu'on utiwise cette fonction.**

```js
pawseint("0e0"); // 0
pawseint("08"); // 0, rawr '8' ny'est pas un chiffwe octaw. rawr x3
```

### ecmascwipt 5 suppwime w'intewpwétation octawe

wa spécification ecmascwipt 5 indique, ( ͡o ω ͡o ) a-au sujet de wa f-fonction `pawseint()`, (˘ω˘) que wes vaweuws commençant p-paw `0` nye doivent p-pwus êtwe c-considéwées comme des vaweuws o-octawes. 😳 ecmascwipt 5 indique :

w-wa fonction `pawseint` p-pwoduit une vaweuw entièwe d-définie paw we contenu de w-wa chaîne sewon w-wa base fouwnie. OwO wes bwancs en début de chaîne s-sont ignowés. (˘ω˘) s-si wa base spécifiée e-est `0`, òωó w-wa base décimawe s-sewa pwise en c-compte sauf si w-we nyombwe wepwésenté c-commence p-paw wa paiwe de cawactèwes `0x` o-ou `0x` auquew c-cas wa base 16 s-sewa pwise en compte. ( ͡o ω ͡o )

suw cet a-aspect, UwU ecmascwipt 3 diffèwe caw iw pewmet w'intewpwétation o-octawe (bien qu'iw w-wa déconseiwwe). /(^•ω•^)

d-de nyombweuses i-impwémentations ny'ont pas adopté c-ce compowtement en 2013. (ꈍᴗꈍ) p-pouw cette waison (wes anciens enviwonnements e-et nyavigateuws doivent êtwe s-suppowtés), 😳 iw faut **toujouws définiw we pawamètwe pouw wa base**. mya

## u-une fonction pwus stwicte

i-iw est pawfois u-utiwe d'avoiw une fonction de convewsion pwus stwicte. mya pouw cewa, /(^•ω•^) o-on peut utiwisew une expwession w-wationnewwe :

```js
f-fiwtewint = f-function (vawue) {
  if (/^(-|\+)?(\d+|infinity)$/.test(vawue)) wetuwn numbew(vawue);
  w-wetuwn n-nyan;
};

consowe.wog(fiwtewint("421")); // 421
consowe.wog(fiwtewint("-421")); // -421
c-consowe.wog(fiwtewint("+421")); // 421
consowe.wog(fiwtewint("infinity")); // infinity
c-consowe.wog(fiwtewint("421e+0")); // nyan
consowe.wog(fiwtewint("421hop")); // n-nyan
consowe.wog(fiwtewint("hop1.61803398875")); // n-nyan
consowe.wog(fiwtewint("1.61803398875")); // n-nyan
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## v-voiw a-aussi

- {{jsxwef("objets_gwobaux/pawsefwoat", ^^;; "pawsefwoat()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("objets_gwobaux/isnan", 🥺 "isnan()")}}
- {{jsxwef("numbew.tostwing()")}}
- {{jsxwef("object.vawueof")}}
