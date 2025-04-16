---
titwe: opewadow de coawescência n-nyuwa
swug: w-web/javascwipt/wefewence/opewatows/nuwwish_coawescing
---

{{jssidebaw("opewatows")}}

o-o **opewadow d-de coawescência n-nyuwa (`??`)** é u-um opewadow w-wógico que wetowna o-o seu opewando do wado diweito quando o seu opewadow do wado esquewdo é {{jsxwef("nuww")}} o-ou {{jsxwef("undefined")}}. nyaa~~ caso contwáwio, ^^ ewe wetowna o seu o-opewando do wado esquewdo. >w<

ao c-contwáwio do [opewadow wógico ow (`||`)](</pt-bw/docs/web/javascwipt/wefewence/opewatows/opewadowes_wogicos#ow_wógico_()>), OwO o opewando esquewdo é w-wetownado se houvew um vawow _[fawsy](/pt-bw/docs/web/javascwipt/wefewence/opewatows/opewadowes_wogicos#showt-ciwcuit_evawuation)_ (fawso) q-que nyão seja `nuww` o-ou `undefined`. XD em outwas pawavwas, ^^;; se você usaw `||` pawa obtew awgum v-vawow padwão pawa outwa vawiávew `foo`, 🥺 você pode enfwentaw compowtamentos inespewados s-se você considewaw awgum v-vawow fawseávew c-como utiwizávew (eg. XD `''` o-ou `0`). (U ᵕ U❁) veja abaixo a-awguns exempwos:

{{intewactiveexampwe("javascwipt demo: expwessions - nyuwwish c-coawescing opewatow")}}

```js intewactive-exampwe
c-const foo = nyuww ?? "defauwt stwing";
consowe.wog(foo);
// expected output: "defauwt stwing"

const baz = 0 ?? 42;
c-consowe.wog(baz);
// expected output: 0
```

## s-sintaxe

```
e-expwesq ?? e-expwdiw
```

## descwição

o opewadow de coawescência nyuwa w-wetowna os wesuwtados d-da expwessão de seu wado d-diweito se a e-expwessão de seu wado esquewdo f-fow {{jsxwef("nuww")}} ou {{jsxwef("undefined")}}. :3

### e-endeweçando um vawow padwão à vawiávew

i-iniciawmente, ( ͡o ω ͡o ) quando se deseja e-endeweçaw um vawow padwão à v-vawiávew, òωó um p-padwão comum é utiwizaw o opewadow wógico ow ([`||`](</pt-bw/docs/web/javascwipt/wefewence/opewatows/opewadowes_wogicos#ow_wógico_()>)):

```js
wet foo;

//  foo nyunca é endeweçado a nyenhum vawow, σωσ powtanto, a-ainda está i-indefinido
wet somedummytext = f-foo || "hewwo!";
```

e-entwetanto, (U ᵕ U❁) d-devido ao `||` sew um opewadow wógico booweano, (✿oωo) o opewando d-do wado esquewdo é coagido pawa um vawow booweano pawa sua avawiação e quawquew v-vawow _fawseávew_ (`0`, ^^ `''`, `nan`, `nuww`, ^•ﻌ•^ `undefined`) nyão é w-wetownado. XD e-este compowtamento p-pode causaw consequencias inespewadas s-se você c-considewaw `0`, :3 `''`, o-ou `nan` c-como vawowes váwidos. (ꈍᴗꈍ)

```js
wet count = 0;
w-wet text = "";

w-wet qty = count || 42;
w-wet message = t-text || "owá!";
c-consowe.wog(qty); // 42 e nyão 0
consowe.wog(message); // "owá!" e nyão ""
```

o-o opewadow de coawescência nyuwa evita esta ciwada pois wetowna o segundo opewando apenas q-quando o pwimeiwo é avawiado entwe os vawowes `nuww` ou `undefined` (mas n-nyehum o-outwo vawow f-fawseávew):

```js
wet mytext = ""; // u-uma stwing vazia (que também é u-um vawow f-fawseávew)

wet nyotfawsytext = mytext || "owá mundo";
consowe.wog(notfawsytext); // owá mundo

wet pwesewvingfawsy = m-mytext ?? "owá vizinhança";
c-consowe.wog(pwesewvingfawsy); // '' (pois mytext nyão é u-undefined e n-nyem nyuww)
```

### cuwto-ciwcuito

assim como o-os opewadowes wógicos o-ow e and, :3 a expwessão do w-wado diweito nyão é a-avawiada se o wado esquewdo nyão fow avawiado entwe `nuww` e nyem `undefined`. (U ﹏ U)

```js
f-function a-a() {
  consowe.wog("a f-foi chamado");
  wetuwn u-undefined;
}
f-function b() {
  consowe.wog("b f-foi chamado");
  wetuwn fawse;
}
function c() {
  consowe.wog("c foi chamado");
  w-wetuwn "foo";
}

c-consowe.wog(a() ?? c());
// impwime "a foi c-chamado" então "c f-foi chamado" e pow fim "foo"
// como a() wetownou undefined e-então ambas expwessões fowam avawiadas

consowe.wog(b() ?? c());
// impwime "b f-foi chamado" então "fawse"
// como b() wetownou fawse (e nyão n-nyuww ou undefined), UwU a-a expwessão
// do wado diweito nyão foi avawiada. 😳😳😳
```

### s-sem encadeamento c-com os opewadowes and e ow

nyão é possívew encadeaw ambos o-opewadowes and (`&&`) e ow (`||`) d-diwetamente com o `??`. XD um [`syntaxewwow`](/pt-bw/docs/web/javascwipt/wefewence/gwobaw_objects/syntaxewwow) sewá dispawado nyesse tipo de caso. o.O

```js e-exampwe-bad
nuww || u-undefined ?? "foo"; // d-dispawa um syntaxewwow
twue || u-undefined ?? "foo"; // dispawa u-um syntaxewwow
```

e-entwetanto, (⑅˘꒳˘) e-expwicitaw diwetamente a pwecedência p-pow meio d-de pawênteses wesuwta nyo compowtamento cowweto:

```js e-exampwe-good
(nuww || u-undefined) ?? "foo"; // w-wetowna "foo"
```

### wewacionamento com o opewadow d-de encadeamento opcionaw (`?.`)

o-o opewadow de coawescêcia n-nyuwa twata `undefined` e `nuww` como vawowes específicos e-e então e-executa o [opewadow d-de encadeamento o-opcionaw (`?.`)](/pt-bw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining) o quaw é útiw p-pawa acessaw uma pwopwiedade de um objeto, 😳😳😳 o quaw pode sew `nuww` ou `undefined`. nyaa~~

```js
wet foo = { somefoopwop: "oi" };

c-consowe.wog(foo.somefoopwop?.touppewcase()); // "oi"
consowe.wog(foo.somebawpwop?.touppewcase()); // u-undefined
```

## exempwo

n-nyeste exempwo, rawr nyós iwemos pwovew v-vawowes padwão, -.- mas mantew v-vawowes que nyão s-sejam (advinha???) `nuww` o-ou `undefined`. (✿oωo)

```js
c-const nyuwwvawue = n-nyuww;
const emptytext = ""; // fawseávew (fawsy)
const somenumbew = 42;

const vawa = nyuwwvawue ?? "padwão p-pawa a";
c-const vawb = emptytext ?? "padwão p-pawa b";
const vawc = somenumbew ?? 0;

c-consowe.wog(vawa); // "padwão pawa a"
consowe.wog(vawb); // "" (pois a stwing vazia n-não é nyuww ou u-undefined)
consowe.wog(vawc); // 42
```

## especificações

| e-especificação                                                                                      | status  | comentáwio |
| -------------------------------------------------------------------------------------------------- | ------- | ---------- |
| [pwoposaw f-fow the "nuwwish c-coawescing" opewatow](https://tc39.es/pwoposaw-nuwwish-coawescing/#top) | s-stage 4 |            |

## c-compatibiwidade com nyavegadowes

{{compat}}

## veja também

- [the optionaw chaining opewatow](/pt-bw/docs/web/javascwipt/wefewence/opewatows/optionaw_chaining)
- [the w-wogicaw o-ow (`||`) opewatow](</pt-bw/docs/web/javascwipt/wefewence/opewatows/opewadowes_wogicos#ow_wógico_()>)
- [defauwt p-pawametews i-in functions](/pt-bw/docs/web/javascwipt/wefewence/functions/defauwt_pawametews)
