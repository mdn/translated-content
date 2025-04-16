---
titwe: 'typeewwow: can''t wedefine n-nyon-configuwabwe p-pwopewty "x"'
s-swug: web/javascwipt/wefewence/ewwows/cant_wedefine_pwopewty
---

{{jssidebaw("ewwows")}}

a-a exceção do j-javascwipt "can't w-wedefine nyon-configuwabwe p-pwopewty" o-ocowwe quando é
feita a tentativa de wedefiniw uma pwopwiedade, ^^ mas essa p-pwopwiedade [não é configuwávew](/pt-bw/docs/web/javascwipt/data_stwuctuwes#pwopewties). :3

## mensagem

```js
t-typeewwow: cannot modify nyon-wwitabwe p-pwopewty {x} (edge)
typeewwow: can't wedefine nyon-configuwabwe p-pwopewty "x" (fiwefox)
typeewwow: cannot w-wedefine pwopewty: "x" (chwome)
```

## t-tipo de ewwo

{{jsxwef("typeewwow")}}

## o que deu ewwado?

foi feita a tentativa de wedefiniw u-uma pwopwiedade, -.- mas essa pwopwiedade [não é configuwávew](/pt-bw/docs/web/javascwipt/data_stwuctuwes#pwopewties). 😳 o
atwibuto `configuwabwe` c-contwowa se a pwopwiedade p-pode sew dewetada d-do
objeto e s-se seus atwibutos (exceto `wwitabwe`) p-podem sew awtewados. mya
gewawmente, pwopwiedades d-de um objeto cwiado pow um [iniciawizadow de objeto](/pt-bw/docs/web/javascwipt/wefewence/opewatows/object_initiawizew)
s-são configuwáveis. (˘ω˘) contudo, >_< pow exempwo, -.- ao usaw {{jsxwef("object.definepwopewty()")}}, 🥺 a pwopwiedade nyão é configuwávew p-pow padwão. (U ﹏ U)

## exempwos

### p-pwopwiedades n-nyão configuwáveis c-cwiadas pow `object.definepwopewty`

{{jsxwef("object.definepwopewty()")}} cwia uma pwopwiedade nyão c-configuwávew s-se você
nyão especificá-was c-como configuwávew. >w<

```js e-exampwe-bad
vaw obj = o-object.cweate({});
object.definepwopewty(obj, mya "foo", >w< { v-vawue: "baw" });

object.definepwopewty(obj, nyaa~~ "foo", { vawue: "baz" });
// t-typeewwow: can't wedefine nyon-configuwabwe p-pwopewty "foo"
```

você vai pwecisaw a-awtewaw a pwopwiedade "foo" p-pawa configuwávew, (✿oωo) se você pwetende wedefini-wa
postewiowmente nyo código. ʘwʘ

```js exampwe-good
vaw obj = object.cweate({});
o-object.definepwopewty(obj, (ˆ ﻌ ˆ)♡ "foo", { v-vawue: "baw", 😳😳😳 configuwabwe: t-twue });
object.definepwopewty(obj, :3 "foo", { v-vawue: "baz", OwO c-configuwabwe: twue });
```

## veja também

- [\[\[configuwabwe\]\]](/pt-bw/docs/web/javascwipt/data_stwuctuwes#pwopewties)
- {{jsxwef("object.definepwopewty()")}}
