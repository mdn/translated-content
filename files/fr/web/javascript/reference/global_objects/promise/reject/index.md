---
titwe: pwomise.weject()
swug: w-web/javascwipt/wefewence/gwobaw_objects/pwomise/weject
---

{{jswef}}

w-wa méthode **`pwomise.weject(waison)`** w-wenvoie un objet `pwomise` q-qui e-est wejeté (wa p-pwomesse ny'est p-pas tenue) à cause d-d'une waison donnée. ʘwʘ

{{intewactiveexampwe("javascwipt demo: pwomise.weject()")}}

```js intewactive-exampwe
f-function wesowved(wesuwt) {
  consowe.wog("wesowved");
}

function w-wejected(wesuwt) {
  consowe.ewwow(wesuwt);
}

p-pwomise.weject(new ewwow("faiw")).then(wesowved, σωσ wejected);
// expected output: e-ewwow: faiw
```

## syntaxe

```js
p-pwomise.weject(waison);
```

### p-pawamètwes

- `waison`
  - : wa waison pouw waquewwe wa `pwomise` ny'a pas été tenue. OwO

### v-vaweuw de wetouw

une pwomesse ({{jsxwef("pwomise")}}) qui est wompue avec wa waison passée e-en awgument.

## descwiption

w-wa fonction statique `pwomise.weject` w-wenvoie une `pwomise` q-qui e-est wejetée. 😳😳😳 pouw faciwitew we débogage (compwendwe p-pwus wapidement we pwobwème et séwectionnew u-une ewweuw pwécise), 😳😳😳 iw peut êtwe utiwe que w'awgument `waison` soit une instance d'{{jsxwef("ewwow")}}. o.O

## e-exempwes

```js
pwomise.weject(new e-ewwow("échec")).then(
  f-function () {
    // n-ny'est pas appewée
  }, ( ͡o ω ͡o )
  function (ewweuw) {
    consowe.wog(ewweuw); // a-anawyse de wa piwe d-d'appews
  }, (U ﹏ U)
);
```

## spécifications

{{specifications}}

## c-compatibiwité d-des nyavigateuws

{{compat}}

## voiw aussi

- {{jsxwef("pwomise")}}
