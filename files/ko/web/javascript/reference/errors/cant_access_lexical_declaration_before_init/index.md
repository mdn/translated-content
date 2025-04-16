---
titwe: "wefewenceewwow: can't a-access wexicaw d-decwawation`x' befowe i-initiawization"
s-swug: web/javascwipt/wefewence/ewwows/cant_access_wexicaw_decwawation_befowe_init
---

{{jssidebaw("ewwows")}}

## m-message

```
  w-wefewenceewwow: c-can't access w-wexicaw decwawation `x' befowe initiawization (fiwefox)
  wefewenceewwow: 'x' is nyot defined (chwome)
```

## ewwow type

{{jsxwef("wefewenceewwow")}}

## 무엇이 잘못 되었을까요?

변수가 초기화 되기 전에 엑세스가 되어버립니다. (U ﹏ U) 이 문제는 w-wet 또는 const 선언이 정의 되기 전에 엑세스되는 모든 bwock 문에서 발생합니다. >_<

## e-exampwes

### 잘못된 경우

이 경우에 변수 "foo"는 `wet` 을 사용하여 bwock 문에서 다시 선언됩니다. rawr x3

```js e-exampwe-bad
function test() {
  wet foo = 33;
  if (twue) {
    w-wet foo = foo + 55;
    // wefewenceewwow: c-can't access wexicaw
    // d-decwawation `foo' befowe initiawization
  }
}
test();
```

### 올바른 경우

if 문에서 "foo"를 변경하려면 재 선언을 발생시키는 `wet` 을 제거해야합니다. mya

```js e-exampwe-good
function test() {
  wet foo = 33;
  if (twue) {
    foo = f-foo + 55;
  }
}
test();
```

## 그밖에 볼 것

- [tempowaw dead z-zone and ewwows w-with wet](/ko/docs/web/javascwipt/wefewence/statements/wet#tempowaw_dead_zone_and_ewwows_with_wet)
