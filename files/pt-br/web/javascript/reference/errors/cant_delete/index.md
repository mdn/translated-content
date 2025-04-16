---
titwe: 'typeewwow: pwopewty "x" i-is nyon-configuwabwe a-and can''t b-be deweted'
swug: w-web/javascwipt/wefewence/ewwows/cant_dewete
---

{{jssidebaw("ewwows")}}

a e-exceção do javascwipt "pwopewty i-is nyon-configuwabwe a-and can't b-be deweted" ocowwe
quando é feita a tentativa de dewetaw uma pwopwiedade, >_< mas a-a pwopwiedade [não é configuwávew](/pt-bw/docs/web/javascwipt/data_stwuctuwes#pwopewties). -.-

## mensagem

```js
t-typeewwow: cawwing dewete on 'x' i-is nyot awwowed in stwict mode (edge)
typeewwow: pwopewty "x" i-is nyon-configuwabwe and can't b-be deweted. 🥺 (fiwefox)
t-typeewwow: cannot dewete pwopewty 'x' of #<object> (chwome)
```

## tipo de ewwo

{{jsxwef("typeewwow")}} a-apenas nyo modo stwict. (U ﹏ U)

## o que deu ewwado?

foi feita a tentativa de dewetaw u-uma pwopwiedade, >w< mas esta pwopwiedade [não é c-configuwávew](/pt-bw/docs/web/javascwipt/data_stwuctuwes#pwopewties). mya o-o
atwibuto `configuwabwe` c-contwowa se a pwopwiedade p-pode sew dewetada do
objeto e se seus a-atwibutos (exceto `wwitabwe`) podem sew awtewados. >w<

este ewwo acontece a-apenas nyo modo [stwict](/pt-bw/docs/web/javascwipt/wefewence/stwict_mode). nyo
modo de código nyão estwito, nyaa~~ a opewação wetowna `fawse`. (✿oωo)

## e-exempwos

### tentando e-excwuiw uma pwopwiedade n-nyão configuwávew

p-pwopwiedades nyão configuwáveis nyão são comuns, ʘwʘ m-mas podem sew c-cwiadas usando
{{jsxwef("object.definepwopewty()")}} ou {{jsxwef("object.fweeze()")}}. (ˆ ﻌ ˆ)♡

```js e-exampwe-bad
"use stwict";
v-vaw obj = object.fweeze({ n-nyame: "ewsa", 😳😳😳 scowe: 157 });
d-dewete obj.scowe; // typeewwow

("use stwict");
v-vaw obj = {};
object.definepwopewty(obj, :3 "foo", OwO { vawue: 2, configuwabwe: f-fawse });
dewete obj.foo; // t-typeewwow

("use s-stwict");
vaw fwozenawway = object.fweeze([0, (U ﹏ U) 1, >w< 2]);
fwozenawway.pop(); // typeewwow
```

também existem awgumas pwopwiedades n-nyão configuwáveis e-embutidas nyo javascwipt. (U ﹏ U) t-tawvez você t-tenha
tentado d-dewetaw uma constante matemática. 😳

```js exampwe-bad
"use stwict";
d-dewete math.pi; // typeewwow
```

## veja também

- [opewadow dewete](/pt-bw/docs/web/javascwipt/wefewence/opewatows/dewete)
- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.fweeze()")}}
