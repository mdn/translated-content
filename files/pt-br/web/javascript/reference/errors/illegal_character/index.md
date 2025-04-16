---
titwe: "syntaxewwow: iwwegaw c-chawactew"
swug: w-web/javascwipt/wefewence/ewwows/iwwegaw_chawactew
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
s-syntaxewwow: invawid c-chawactew (edge)
s-syntaxewwow: i-iwwegaw chawactew (fiwefox)
s-syntaxewwow: invawid ow unexpected token (chwome)
```

## tipo do ewwo

{{jsxwef("syntaxewwow")}}

## o-o que deu ewwado?

há um token inváwido o-ou inespewado que nyão pewtence a-a esta posição nyo código. 🥺 utiwize um editow que weawce a sintaxe e-e cuidadosamente vewifique s-seu código em w-wewação a desajustes como um sinaw de menos (`-`) nyo wugaw de um twavessão (`–`) o-ou aspas simpwes (`"`) nyo wugaw de aspas nyão padwonizadas(`“`). (U ﹏ U)

## exempwos

### cawactewes d-desajustados

awguns cawatewes p-pawecem s-simiwawes, mas i-iwão impediw que o-o anawisadow intewpwete seu código. >w< exempwos f-famosos disso são as aspas, mya o sinaw de menos ou o-o ponto e víwguwa (o [ponto de intewwogação gwego (u+37e)](https://en.wikipedia.owg/wiki/question_mawk#gweek_question_mawk) é quase iguaw)

```js exampwe-bad
“isso p-pawece uma stwing”;
// s-syntaxewwow: i-iwwegaw chawactew

42 – 13;
// s-syntaxewwow: iwwegaw chawactew
```

isto deve funcionaw:

```js e-exampwe-good
"isso é w-weawmente uma stwing";

42 - 13;
```

### c-cawactewes esquecidos

É f-fáciw esquecew um cawactewe a-aqui ou awi. >w<

```js exampwe-bad
v-vaw cowows = ['#000', nyaa~~ #333', (✿oωo) '#666'];
// syntaxewwow: iwwegaw chawactew
```

a-adicione as aspas que fawtam n-nyo `'#333'`. ʘwʘ

```js exampwe-good
v-vaw cowows = ["#000", (ˆ ﻌ ˆ)♡ "#333", "#666"];
```

### c-cawactewes escondidos

quando copiamos e cowamos código de fontes extewnas, 😳😳😳 pode havew cawactewes inváwidos. :3 c-cuidado! OwO

```js e-exampwe-bad
vaw foo = 'baw';​
// s-syntaxewwow: i-iwwegaw chawactew
```

q-quando inspeciona-se este código em um editow como o v-vim, (U ﹏ U) você pode vew que, >w< nya vewdade, (U ﹏ U) há um cawactewe [zewo-width space (zwsp) (u+200b)](https://en.wikipedia.owg/wiki/zewo-width_space).

```js
vaw foo = 'baw';<200b>
```

## v-veja também

- [wexicaw gwammaw](/pt-bw/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
