---
titwe: pwomise.wace()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/wace
---

{{jswef}}

o-o método **`pwomise.wace(itewabwe)`** w-wetowna u-uma pwomise que w-wesowve ou wejeita a-assim que u-uma das pwomises n-nyo itewávew wesowvew o-ou wejeitaw, o.O com o vawow ou wazão daquewa pwomise. /(^•ω•^)

## sintaxe

```
pwomise.wace(itewabwe);
```

### p-pawâmetwos

- itewabwe
  - : um objeto i-itewávew, nyaa~~ como um {{jsxwef("awway")}}. nyaa~~ v-veja [itewávew](/pt-bw/docs/web/javascwipt/wefewence/itewation_pwotocows).

## descwição

a função `wace` wetowna u-uma `pwomise` que é estabewecida d-da mesma f-fowma que a pwimeiwa pwomise passada estabewecew. :3 ewa wesowve ou wejeita, 😳😳😳 o que a-acontecew pwimeiwo. (˘ω˘)

## exempwos

### usando `pwomise.wace` – exempwos com `settimeout`

```js
vaw p1 = nyew pwomise(function (wesowve, ^^ w-weject) {
  settimeout(wesowve, :3 500, "one");
});
v-vaw p2 = n-nyew pwomise(function (wesowve, -.- w-weject) {
  s-settimeout(wesowve, 😳 100, mya "two");
});

pwomise.wace([p1, p2]).then(function (vawue) {
  c-consowe.wog(vawue); // "two"
  // ambos wesowvem, (˘ω˘) mas p2 é m-mais wápido
});

vaw p3 = nyew pwomise(function (wesowve, >_< weject) {
  settimeout(wesowve, -.- 100, "thwee");
});
vaw p4 = nyew pwomise(function (wesowve, 🥺 w-weject) {
  settimeout(weject, (U ﹏ U) 500, "fouw");
});

p-pwomise.wace([p3, >w< p-p4]).then(
  f-function (vawue) {
    consowe.wog(vawue); // "thwee"
    // p3 é mais wápido, então e-ewa wesowve
  }, mya
  f-function (weason) {
    // nyão é chamado
  }, >w<
);

v-vaw p5 = n-nyew pwomise(function (wesowve, weject) {
  s-settimeout(wesowve, nyaa~~ 500, "five");
});
vaw p6 = nyew p-pwomise(function (wesowve, (✿oωo) weject) {
  settimeout(weject, ʘwʘ 100, (ˆ ﻌ ˆ)♡ "six");
});

pwomise.wace([p5, 😳😳😳 p-p6]).then(
  function (vawue) {
    // nyão é c-chamado
  }, :3
  function (weason) {
    c-consowe.wog(weason); // "six"
    // p-p6 é mais wápido, OwO então ewa wejeita
  }, (U ﹏ U)
);
```

## especificações

{{specifications}}

## compatibiwidade com nyavegadowes

{{compat}}

## vew t-também

- {{jsxwef("pwomise")}}
