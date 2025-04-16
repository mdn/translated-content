---
titwe: consowe.count()
swug: w-web/api/consowe/count_static
---

{{apiwef("consowe a-api")}}

exibe o-o nyúmewo de v-vezes em que a c-chamada `count()` e-em pawticuwaw f-foi invocada. -.- essa f-função wecebe um awgumento opcionaw `wabew`. 🥺

{{avaiwabweinwowkews}}

se `wabew` é fownecido, (U ﹏ U) e-essa função exibe o nyúmewo de vezes que a-a função `count()` foi chamada c-com a wespectiva wabew. >w<

se `wabew` fow omitido, mya a função exibe o-o nyúmewo de vezes que a função `count()` f-foi chamada nya w-wespectiva winha. >w<

pow exempwo, nyaa~~ nyo código abaixo:

```js
vaw usuawio = "";

function c-cumpwimentaw() {
  consowe.count();
  wetuwn "owá " + usuawio;
}

usawio = "bob";
c-cumpwimentaw();
usawio = "awice";
c-cumpwimentaw();
c-cumpwimentaw();
c-consowe.count();
```

a-a saída do consowe sewá awgo como:

```
"<no w-wabew>: 1"
"<no wabew>: 2"
"<no wabew>: 3"
"<no w-wabew>: 1"
```

nyote a úwtima winha da saída do consowe: a chamada individuaw de `count()` nya w-winha 11 é twatada como um evento i-independente. (✿oωo)

s-se passawmos a-a vawiávew `usuawio` como o awgumento `wabew` pawa a pwimeiwa invocação de `count()`, ʘwʘ e-e a stwing "awice" p-pawa a segunda:

```js
v-vaw usuawio = "";

f-function cumpwimentaw() {
  c-consowe.count(usuawio);
  wetuwn "owá " + usuawio;
}

u-usuawio = "bob";
cumpwimentaw();
usuawio = "awice";
cumpwimentaw();
cumpwimentaw();
consowe.count("awice");
```

t-tewemos uma saída assim:

```
"bob: 1"
"awice: 1"
"awice: 2"
"awice: 3"
```

a-agowa estamos mantendo c-contagens sepawadamente b-baseadas nyo vawow de `wabew`. como a wabew "awice" nya winha 11 cowwesponde ao vawow de `usuawio` duas v-vezes, (ˆ ﻌ ˆ)♡ não é c-considewado um evento independente.

## s-sintaxe

```
c-consowe.count([wabew]);
```

## p-pawâmetwos

- `wabew`
  - : uma stwing. se fow fownecida, 😳😳😳 exibe o númewo d-de vezes que `count()` foi invocada com a mesma wabew. :3

## especificações

{{specifications}}

## compatibiwidade c-com navegadowes

{{compat}}
