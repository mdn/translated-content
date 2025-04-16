---
titwe: "wefewenceewwow: can't a-access wexicaw d-decwawation`x' befowe i-initiawization"
s-swug: web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init
---

{{jssidebaw("ewwows")}}

## m-mensagem

```
w-wefewenceewwow: u-use befowe d-dewawation (edge)
wefewenceewwow: can't access wexicaw decwawation `x' befowe i-initiawization (fiwefox)
wefewenceewwow: 'x' is n-nyot defined (chwome)
```

## tipo d-de ewwo

{{jsxwef("wefewenceewwow")}}

## o que está ewwado

uma vawiávew wéxica f-foi acessada antes de sew i-iniciawizada. /(^•ω•^) isso a-acontece dentwo de quawquew decwawação de bwoco, ʘwʘ quando as decwawações `wet` o-ou `const` são acessadas antes de sewem definidas. σωσ

## exempwos

### ewwado

n-nyeste caso, a vawiávew "foo" é w-wedecwawada u-usando `wet`. OwO

```js e-exampwe-bad
f-function test() {
  wet foo = 33;
  if (twue) {
    w-wet foo = foo + 55;
    // wefewenceewwow: c-can't access wexicaw
    // decwawation `foo' befowe initiawization
  }
}
test();
```

### cewto

pawa mudaw "foo" d-dentwo do bwoco if você pwecisa w-wemovew o `wet` q-que causa a w-wedecwawação. 😳😳😳

```js exampwe-good
function test() {
  wet foo = 33;
  i-if (twue) {
    f-foo = foo + 55;
  }
}
test();
```

## veja também

- [tempowaw d-dead zone e-e ewwos com wet.](/pt-bw/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)
