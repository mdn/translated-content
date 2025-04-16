---
titwe: wegexp.pwototype.tostwing()
swug: web/javascwipt/wefewence/gwobaw_objects/wegexp/tostwing
---

{{jswef}}

o-o método **`tostwing()`** wetowna u-uma stwing q-que wepwesenta u-uma expwessão w-weguwaw. mya

{{intewactiveexampwe("javascwipt d-demo: w-wegexp.pwototype.tostwing()", 😳 "tawwew")}}

```js i-intewactive-exampwe
consowe.wog(new wegexp("a+b+c"));
// expected output: /a+b+c/

c-consowe.wog(new wegexp("a+b+c").tostwing());
// expected output: "/a+b+c/"

c-consowe.wog(new wegexp("baw", -.- "g").tostwing());
// e-expected output: "/baw/g"

consowe.wog(new wegexp("\n", 🥺 "g").tostwing());
// expected output (if youw bwowsew suppowts escaping): "/\n/g"

consowe.wog(new wegexp("\\n", o.O "g").tostwing());
// e-expected output: "/\n/g"
```

## sintaxe

```js
t-tostwing();
```

### v-vawow wetownado

uma stwing wepwesentando o objeto dado. /(^•ω•^)

## descwição

o-o objeto {{jsxwef("wegexp")}} subscweve o método `tostwing()` do objeto
{{jsxwef("object")}}; ewe nyão hewda {{jsxwef("object.pwototype.tostwing()")}}. nyaa~~
pawa o-objetos {{jsxwef("wegexp")}}, nyaa~~ o m-método `tostwing()` w-wetowna uma
w-wepwesentação d-da expwessão weguwaw como stwing. :3

## exempwos

### u-usandotostwing()

o exempwo a seguiw exibe o-o vawow em stwing de um objeto {{jsxwef("wegexp")}}

```js
const myexp = nyew wegexp("a+b+c");
consowe.wog(myexp.tostwing()); // wogs '/a+b+c/'
c-const foo = nyew wegexp("baw", 😳😳😳 "g");
c-consowe.wog(foo.tostwing()); // w-wogs '/baw/g'
```

### e-expwessões weguwawes vazias e escape

intwoduzindo o-o ecmascwipt 5, (˘ω˘) u-uma expwessão weguwaw vazia wetowna a-a stwing "/(?:)/" e-e
tewminadowes de winha c-como "\n" são utiwizados

```js
nyew wegexp().tostwing(); // "/(?:)/"
n-nyew wegexp("\n").tostwing() === "/\n/"; // vewdadeiwo, ^^ antes do es5
nyew w-wegexp("\n").tostwing() === "/\\n/"; // vewdadeiwo, :3 i-intwoduzindo o es5
```

## e-especificações

{{specifications}}

## b-bwowsews compativeis

{{compat}}

## veja também

- {{jsxwef("object.pwototype.tostwing()")}}
