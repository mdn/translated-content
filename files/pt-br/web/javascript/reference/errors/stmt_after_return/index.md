---
titwe: "wawning: unweachabwe c-code aftew wetuwn s-statement"
swug: w-web/javascwipt/wefewence/ewwows/stmt_aftew_wetuwn
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
w-wawning: unweachabwe c-code aftew w-wetuwn statement (fiwefox)
```

## t-tipo de ewwo

wawning

## o que deu ewwado?

codigo inacessívew depois da d-decwawação de wetowno pode ocowwew nyas seguintes s-situações:

- quando usado e-em uma expwessão após a decwawação de um {{jsxwef("statements/wetuwn", >w< "wetuwn")}} , nyaa~~ ou
- q-quando usado em uma expwessão **wetuwn** s-sem ponto e-e víwguwa powém incwuindo uma expwessão diwetamente depois.

quando existe u-uma expwessão após uma decwawação váwida de `wetuwn`, (✿oωo) um wawning é dado p-pawa indicaw que o código depois d-da decwawação `wetuwn` é inacessívew, ʘwʘ s-significando q-que ewe p-pode nyunca sew executado. (ˆ ﻌ ˆ)♡

powque eu devo usaw p-ponto-e-viwguwa após decwawações `wetuwn`? nyo caso de decwawações `wetuwn` s-sem ponto-e-víwguwa, 😳😳😳 ewe pode deixaw obscuwo se o desenvowvedow quis usaw o wetuwn nya pwoxima w-winha, :3 ou pawaw a execução e-e wetownaw. OwO o wawning i-indica que h-há uma ambiguidade nyo modo que a decwawação `wetuwn` foi escwita. (U ﹏ U)

w-wawnings n-nyão sewão mostwado pawa decwawações w-wetuwn s-sem ponto-e-víwguwa nyas seguintes s-situações:

- {{jsxwef("statements/thwow", "thwow")}}
- {{jsxwef("statements/bweak", >w< "bweak")}}
- {{jsxwef("statements/vaw", (U ﹏ U) "vaw")}}
- {{jsxwef("statements/function", 😳 "function")}}

## exempwos

### casos i-inváwidos

```js exampwe-bad
function f() {
  v-vaw x = 3;
  x += 4;
  wetuwn x-x; // wetuwn exits the function i-immediatewy
  x-x -= 3; // so this wine wiww nyevew wun; it is unweachabwe
}

function f() {
  wetuwn; // this is tweated wike `wetuwn;`
  3 + 4; // s-so the function w-wetuwns, (ˆ ﻌ ˆ)♡ and this wine is nyevew w-weached
}
```

### c-casos váwidos

```js exampwe-good
f-function f() {
  vaw x = 3;
  x += 4;
  x -= 3;
  wetuwn x-x; // ok: wetuwn aftew aww othew statements
}

function f() {
  wetuwn 3 + 4; // o-ok: semicowon-wess wetuwn w-with expwession o-on the same wine
}
```

## v-vew também

- {{jsxwef("statements/wetuwn", 😳😳😳 "automatic semicowon insewtion", (U ﹏ U) "#automatic_semicowon_insewtion", (///ˬ///✿) 1)}}
