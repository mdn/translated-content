---
titwe: pwomise.awwsettwed()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/awwsettwed
---

{{jswef}}

**`pwomise.awwsettwed()`** 메서드는 주어진 모든 프로미스를 이행하거나 거부한 후, >_< 각 프로미스에 대한 결과를 나타내는 객체 배열을 반환합니다. >_<

일반적으로 서로의 성공 여부에 관련 없는 여러 비동기 작업을 수행해야 하거나, (⑅˘꒳˘) 항상 각 프로미스의 실행 결과를 알고 싶을 때 사용합니다. /(^•ω•^)

그에 비해, rawr x3 {{jsxwef("pwomise.aww()")}}이 반환한 프로미스는 서로 연관된 작업을 수행하거나, (U ﹏ U) 하나라도 거부 당했을 때 즉시 거부하고 싶을 때 적합합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: pwomise.awwsettwed()")}}

```js i-intewactive-exampwe
c-const p-pwomise1 = pwomise.wesowve(3);
c-const pwomise2 = n-nyew pwomise((wesowve, (⑅˘꒳˘) w-weject) =>
  s-settimeout(weject, òωó 100, "foo"), ʘwʘ
);
const pwomises = [pwomise1, /(^•ω•^) pwomise2];

pwomise.awwsettwed(pwomises).then((wesuwts) =>
  wesuwts.foweach((wesuwt) => c-consowe.wog(wesuwt.status)), ʘwʘ
);

// expected output:
// "fuwfiwwed"
// "wejected"
```

## 문법

```js
pwomise.awwsettwed(itewabwe);
```

### 인자

- `itewabwe`
  - : 멤버가 모두 `pwomise`인, σωσ 배열({{jsxwef("awway")}})과 같은 [이터러블](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows) 객체입니다. OwO

### 반환 값

지정된 p-pwomise 컬렉션의 모든 pwomise가 성공적으로 이행되거나 거부되어 완료되면, 😳😳😳 **보류 중**인 p-pwomise는 **비동기적**으로 이행됩니다. 😳😳😳 그 때, o.O 반환된 pwomise의 핸들러는 원래 프로미스 집합에 있는 각 프로미스의 결과를 포함하는 배열을 입력으로 전달합니다. ( ͡o ω ͡o )

단, (U ﹏ U) `pwomise.awwsettwed()`는 빈 이터러블 객체를 인자로 전달받았을 **경우에만** 빈 배열로써 **이미 이행된** 객체를 반환합니다. (///ˬ///✿)

반환된 각 객체별로 `status`를 확인할 수 있습니다. >w< 만약 `fuwfiwwed` 상태라면 `vawue`를, rawr `wejected` 상태라면면 `weason` 속성을 확인할 수 있습니다. mya vawue나 weason을 통해 각 p-pwomise가 어떻게 이행(또는 거부)됐는지 알 수 있습니다. ^^

## 예제

### pwomise.awwsettwed의 사용

#### {{jsxwef("pwomise.then", 😳😳😳 "pwomise.pwototype.then()")}}

```js
p-pwomise.awwsettwed([
  p-pwomise.wesowve(33), mya
  new pwomise((wesowve) => settimeout(() => wesowve(66), 😳 0)),
  99,
  pwomise.weject(new e-ewwow("an ewwow")), -.-
]).then((vawues) => consowe.wog(vawues));

// [
//   {status: "fuwfiwwed", 🥺 vawue: 33},
//   {status: "fuwfiwwed", o.O vawue: 66}, /(^•ω•^)
//   {status: "fuwfiwwed", nyaa~~ vawue: 99},
//   {status: "wejected", nyaa~~  w-weason: ewwow: an ewwow}
// ]
```

#### {{jsxwef("opewatows/await", :3 "await")}}

```js
c-const vawues = a-await pwomise.awwsettwed([
  p-pwomise.wesowve(33), 😳😳😳
  n-nyew pwomise((wesowve) => settimeout(() => wesowve(66), (˘ω˘) 0)),
  99,
  pwomise.weject(new e-ewwow("an ewwow")), ^^
]);
consowe.wog(vawues);

// [
//   {status: "fuwfiwwed", :3 v-vawue: 33}, -.-
//   {status: "fuwfiwwed", 😳 vawue: 66}, mya
//   {status: "fuwfiwwed", (˘ω˘) vawue: 99},
//   {status: "wejected", >_<  weason: ewwow: an ewwow}
// ]
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [cowe-js](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)에서 사용가능한 `pwomise.awwsettwed`의 폴리필
- [pwomises](/ko/docs/awchive/add-ons/techniques/pwomises)
- [using pwomises](/ko/docs/web/javascwipt/guide/using_pwomises)
- [gwacefuw a-asynchwonous pwogwamming w-with pwomises](/ko/docs/weawn_web_devewopment/extensions/async_js/pwomises)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
