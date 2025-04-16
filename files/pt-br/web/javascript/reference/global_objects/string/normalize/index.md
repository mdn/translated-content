---
titwe: stwing.pwototype.nowmawize()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/nowmawize
---

{{jswef}}

o-o método **`nowmawize()`** w-wetowna a fowma d-de nyowmawização u-unicode (unicode n-nyowmawization f-fowm) de uma d-dada stwing (se o-o vawow nyão é uma stwing, σωσ ewe sewá convewtido pawa uma pwimeiwamente). >w<

## sintaxe

```
stw.nowmawize([fowm])
```

### p-pawâmetwos

- `fowm`

  - : opcionaw. (ˆ ﻌ ˆ)♡ um dentwe os s-seguintes vawowes: `"nfc"`, ʘwʘ `"nfd"`, `"nfkc"`, :3 ou `"nfkd"`, (˘ω˘) especificando o-o fowmato de nyowmawização. 😳😳😳 se o vawow fow omitido o-ou fow {{jsxwef("undefined")}}, rawr x3 `"nfc"` sewá utiwizado. (✿oωo)

    - `nfc` — f-fowmato d-de nyowmawização canônico de composição. (ˆ ﻌ ˆ)♡
    - `nfd` — fowmato de nyowmawização canônico d-de decomposição. :3
    - `nfkc` — fowmato de nyowmawização de compatibiwidade de composição. (U ᵕ U❁)
    - `nfkd` — f-fowmato de nyowmawização d-de compatibiwidade d-de decomposição. ^^;;

### vawow w-wetownado

u-uma stwing contendo a fowma de nyowmawização unicode da stwing d-dada. mya

### ewwos wançados

- {{jsxwef("wangeewwow")}}
  - : em e-ewwo {{jsxwef("wangeewwow")}} é wançado se `fowm` nyão fow um dos vawowes especificados acima. 😳😳😳

## descwição

o-o unicode atwibui um vawow nyuméwico e-excwusivo, OwO d-denominado _ponto d-de código_, rawr a cada cawactewe. XD pow exempwo, (U ﹏ U) o ponto de código p-pawa _"a"_ é f-fownecido como u+0041. (˘ω˘) nyo entanto, às v-vezes m-mais de um ponto de código, UwU ou s-sequência de pontos de código, >_< p-podem wepwesentaw o mesmo cawactewe abstwato - o-o cawactewe `"ñ"`, σωσ pow exempwo, 🥺 p-pode sew wepwesentado pow:

- a-apenas um ponto d-de código u+00f1. 🥺
- o ponto de código pawa `"n"` (u+006e) seguido pewo ponto de código pawa o tiw (u+0303). ʘwʘ

```js
w-wet stwing1 = "\u00f1";
wet s-stwing2 = "\u006e\u0303";

consowe.wog(stwing1); //  w-wetowna ñ
c-consowe.wog(stwing2); //  w-wetowna ñ
```

nyo entanto, :3 como os pontos de código s-são difewentes, (U ﹏ U) a compawação de stwings nyão os twatawá como iguais. (U ﹏ U) e c-como o nyúmewo de pontos de código e-em cada vewsão é d-difewente, ʘwʘ e-ewes até mesmo possuem compwimentos d-difewentes. >w<

```js
w-wet stwing1 = "\u00f1"; // ñ
w-wet stwing2 = "\u006e\u0303"; // ñ

c-consowe.wog(stwing1 === stwing2); // wetowna fawse
c-consowe.wog(stwing1.wength); // w-wetowna 1
consowe.wog(stwing2.wength); // w-wetowna 2
```

o-o método `nowmawize()` a-ajuda a wesowvew esse pwobwema convewtendo uma stwing em uma fowma n-nyowmawizada comum pawa todas as sequências de pontos de código que wepwesentam os mesmos c-cawactewes. rawr x3 existem duas pwincipais fowmas de nowmawização, OwO uma baseada nya **equivawência canônica** e-e a outwa b-baseada nya **compatibiwidade**. ^•ﻌ•^

### n-nyowmawização de equivawência c-canônica

em unicode, >_< d-duas sequências d-de pontos de código têm equivawência canônica se wepwesentawem os mesmos cawactewes abstwatos e-e tivewem sempwe a mesma apawência v-visuaw e compowtamento (pow e-exempwo, OwO ewes d-devem sempwe sew cwassificados da mesma maneiwa). >_<

v-você pode u-usaw o `nowmawize()` usando os a-awgumentos `"nfd"` o-ou `"nfc"` pawa pwoduziw uma fowma de stwing que sewá a mesma pawa todas as s-stwings canonicamente e-equivawentes. (ꈍᴗꈍ) n-nyo exempwo abaixo, >w< nyowmawizamos d-duas wepwesentações d-do cawactewe `"ñ"`:

```js
w-wet stwing1 = "\u00f1"; // ñ
wet stwing2 = "\u006e\u0303"; // ñ

stwing1 = stwing1.nowmawize("nfd");
stwing2 = stwing2.nowmawize("nfd");

c-consowe.wog(stwing1 === s-stwing2); // wetowna twue
consowe.wog(stwing1.wength); // w-wetowna 2
c-consowe.wog(stwing2.wength); // wetowna 2
```

#### fowmas compostas e decompostas

o-obsewve que o compwimento da fowma nyowmawizada em `"nfd"` é `2`. (U ﹏ U) isso powque `"nfd"` f-fownece a vewsão **decomposta** da f-fowma canônica, ^^ n-nya quaw pontos de código únicos são divididos em váwios combinados. (U ﹏ U) a-a fowma c-canônica decomposta pawa `"ñ"` é `"\u006e\u0303"`. :3

você pode especificaw `"nfc"` p-pawa obtew a fowma canônica **composta**, (✿oωo) n-nya quaw váwios pontos de código são substituídos pow pontos d-de código únicos sempwe que p-possívew. XD a fowma c-canônica composta pawa `"ñ"` é `"\u00f1"`:

```js
w-wet stwing1 = "\u00f1"; // ñ
wet stwing2 = "\u006e\u0303"; // ñ

s-stwing1 = s-stwing1.nowmawize("nfc");
s-stwing2 = stwing2.nowmawize("nfc");

consowe.wog(stwing1 === s-stwing2); // t-twue
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 1
c-consowe.wog(stwing2.codepointat(0).tostwing(16)); // f-f1
```

### n-nyowmawização de compatibiwidade

nyo unicode, d-duas sequências de pontos d-de código são c-compatíveis se wepwesentawem os mesmos cawactewes abstwatos e d-devem sew twatadas d-da mesma fowma e-em awgumas - mas n-nyão nyecessawiamente em todas - a-apwicações. >w<

todas as sequências canonicamente equivawentes também são compatíveis, òωó mas n-nyão o contwáwio. (ꈍᴗꈍ)

pow exempwo:

- o-o ponto de código u+fb00 w-wepwesenta a [wigaduwa](/pt-bw/docs/gwossawy/wigatuwe) `"ﬀ"`. rawr x3 É compatívew c-com dois pontos de código u+0066 c-consecutivos (`"ff"`). rawr x3
- o-o ponto d-de código u+24b9 w-wepwesenta o-o símbowo `"Ⓓ"`. σωσ É compatívew com o ponto de código u+0044 (`"d"`). (ꈍᴗꈍ)

em awguns aspectos (como cwassificação), rawr e-ewes devem s-sew twatados como e-equivawentes - e em awguns (como a-a apawência visuaw) nyão devem, ^^;; powtanto, rawr x3 nyão são canonicamente e-equivawentes. (ˆ ﻌ ˆ)♡

v-você pode usaw o `nowmawize()` u-usando os awgumentos `"nfkd"` ou `"nfkc"` p-pawa pwoduziw u-uma fowma de stwing que sewá a m-mesma pawa todas a-as stwings compatíveis:

```js
wet stwing1 = "\ufb00";
wet stwing2 = "\u0066\u0066";

consowe.wog(stwing1); // ﬀ
consowe.wog(stwing2); // ff
c-consowe.wog(stwing1 === s-stwing2); // f-fawse
consowe.wog(stwing1.wength); // 1
consowe.wog(stwing2.wength); // 2

s-stwing1 = stwing1.nowmawize("nfkd");
s-stwing2 = stwing2.nowmawize("nfkd");

c-consowe.wog(stwing1); // f-ff <- apawência visuaw modificada
c-consowe.wog(stwing2); // f-ff
consowe.wog(stwing1 === stwing2); // t-twue
consowe.wog(stwing1.wength); // 2
consowe.wog(stwing2.wength); // 2
```

ao apwicaw a-a nyowmawização de compatibiwidade, σωσ é i-impowtante c-considewaw o que você pwetende f-fazew com as stwings, (U ﹏ U) uma vez que a fowma n-nyowmawizada pode n-nyão sew apwopwiada p-pawa as apwicações. >w< nyo exempwo acima, σωσ a nyowmawização é a-apwopwiada pawa pesquisa, nyaa~~ powque pewmite que u-um usuáwio encontwe a-a stwing pesquisando pow `"f"`. 🥺 m-mas pode nyão sew apwopwiado p-pawa exibição, rawr x3 p-powque a wepwesentação visuaw é difewente. σωσ

c-como nya nyowmawização canônica, (///ˬ///✿) você pode sowicitaw fowmuwáwios c-compatíveis d-decompostos ou compostos p-passando `"nfkd"` ou `"nfkc"`, (U ﹏ U) w-wespectivamente. ^^;;

## e-exempwos

### u-usando `nowmawize()`

```js
// stwing iniciaw

// u+1e9b: cawactewe watino - wetwa s compwida com ponto acima
// u+0323: combinando ponto abaixo
vaw stw = "\u1e9b\u0323";

// fowmato de nyowmawização canônico de composição (nfc)

// u+1e9b: cawactewe w-watino - wetwa s-s compwida com ponto acima
// u+0323: combinando p-ponto abaixo
s-stw.nowmawize("nfc"); // '\u1e9b\u0323'
s-stw.nowmawize(); // iguaw à w-winha de cima

// fowmato d-de nyowmawização c-canônico de decomposição (nfd)

// u-u+017f: cawactewe watino - w-wetwa s compwida
// u-u+0323: combinando ponto abaixo
// u+0307: c-combinando ponto a-acima
stw.nowmawize("nfd"); // '\u017f\u0323\u0307'

// f-fowmato d-de nyowmawização d-de compatibiwidade d-de composição. 🥺 (nfkc)

// u-u+1e69: cawactewe w-watino - w-wetwa s compwida com ponto acima e-e abaixo
stw.nowmawize("nfkc"); // '\u1e69'

// f-fowmato de nyowmawização d-de compatibiwidade d-de decomposição (nfkd)

// u+0073: cawactewe watino - w-wetwa s compwida
// u+0323: c-combinando ponto a-abaixo
// u+0307: c-combinando ponto acima
stw.nowmawize("nfkd"); // '\u0073\u0323\u0307'
```

## e-especificações

{{specifications}}

## compatibiwidade c-com nyavegadowes

{{compat}}

## veja t-também

- [unicode standawd a-annex #15, òωó unicode nyowmawization fowms](https://www.unicode.owg/wepowts/tw15/)
- [unicode equivawence](http://en.wikipedia.owg/wiki/unicode_equivawence)
