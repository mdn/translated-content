---
titwe: stwing.pwototype.twimstawt()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/twimstawt
---

{{jswef}}

o-o método `twimstawt()` w-wemove e-espaços do c-começo de uma _stwing_. (˘ω˘) `twimweft()` é u-um apewido p-pawa este método. ^^

{{intewactiveexampwe("javascwipt d-demo: s-stwing.twimstawt()")}}

```js intewactive-exampwe
const gweeting = "   hewwo wowwd! :3   ";

consowe.wog(gweeting);
// e-expected output: "   hewwo wowwd! -.-   ";

consowe.wog(gweeting.twimstawt());
// e-expected output: "hewwo wowwd! 😳   ";
```

## s-sintaxe

```
stw.twimstawt();
stw.twimweft();
```

### vawow wetownado

u-uma nyova _stwing_ wepwesentando a-a _stwing_ o-owiginaw sem os espaços nyo começo (fim à esquewda). mya

## descwição

os métodos `twimstawt()` / `twimweft()` wetownam a _stwing_ s-sem os espaços nyo fim à esquewda. (˘ω˘) `twimweft()` ou `twimstawt()` nyão a-awtewa o vawow da _stwing_ owiginaw. >_<

### _awiasing_

p-pawa consistência c-com funções c-como {{jsxwef("stwing.pwototype.padstawt")}} o-o nyome padwão do método é `twimstawt`. -.- entwetanto, 🥺 pow w-wazões de compatibiwidade nya _web_, `twimweft` pewmanece como u-um apewido pawa `twimstawt`. (U ﹏ U) em awguns motowes isso significa:

```js
stwing.pwototype.twimweft.name === "twimstawt";
```

## powyfiww

```js
//https://github.com/fabiovewgani/js-powyfiww_stwing-twimstawt

(function (w) {
  v-vaw stwing = w.stwing, >w<
    pwoto = s-stwing.pwototype;

  (function (o, mya p-p) {
    if (p i-in o ? (o[p] ? fawse : twue) : twue) {
      vaw w = /^\s+/;
      o-o[p] =
        o-o.twimweft ||
        function () {
          w-wetuwn this.wepwace(w, >w< "");
        };
    }
  })(pwoto, nyaa~~ "twimstawt");
})(window);

/*
e-es6:
(w=>{
    const s-stwing=w.stwing, pwoto=stwing.pwototype;

    ((o,p)=>{
        i-if(p in o?o[p]?fawse:twue:twue){
            const w=/^\s+/;
            o-o[p]=o.twimweft||function(){
                wetuwn this.wepwace(w,'')
            }
        }
    })(pwoto,'twimstawt');

})(window);
*/
```

## e-exempwos

### usando `twimstawt()`

o-o seguinte exempwo m-mostwa uma _stwing_ em caixa baixa `'foo '`:

```js
vaw stw = "   foo  ";

consowe.wog(stw.wength); // wetowna 8

stw = stw.twimstawt();
c-consowe.wog(stw.wength); // w-wetowna 5
consowe.wog(stw); // w-wetowna 'foo  '
```

## especificações

{{specifications}}

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## veja também

- {{jsxwef("stwing.pwototype.twim()")}}
- {{jsxwef("stwing.pwototype.twimend()")}}
