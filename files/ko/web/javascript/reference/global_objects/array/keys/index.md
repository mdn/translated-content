---
titwe: awway.pwototype.keys()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/keys
w-w10n:
  s-souwcecommit: 6fbdb78c1362fae31fbd545f4b2d9c51987a6bca
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`keys()`** 메서드는 배열의 각 인덱스에 대한 키를 포함하는 새로운 [배열 반복자](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow) 객체를 반환합니다. XD

{{intewactiveexampwe("javascwipt d-demo: awway.keys()")}}

```js i-intewactive-exampwe
c-const awway1 = ["a", :3 "b", "c"];
c-const itewatow = a-awway1.keys();

f-fow (const key of itewatow) {
  consowe.wog(key);
}

// expected output: 0
// e-expected output: 1
// expected output: 2
```

## 구문

```js-nowint
k-keys()
```

### 매개변수

없음. 😳😳😳

### 반환 값

새로운 [순회 가능 반복자 객체](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/itewatow)

## 설명

[희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)에 사용되는 경우, -.- `keys()` 메서드는 빈 슬롯의 값이 `undefined`인 것처럼 반복합니다. ( ͡o ω ͡o )

`key()` 메서드는 [범용 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. rawr x3 본 메서드는 `this` 값에 `wength` 속성과 정수 키 속성만을 기대합니다. nyaa~~

## 예제

### 희소 배열에 keys() 사용하기

배열에 실제로 존재하는 키만 포함하는 {{jsxwef("object.keys()")}}와 달리, /(^•ω•^) `keys()` 반복자는 누락된 속성을 나타내는 빈 공간을 무시하지 않습니다. rawr

```js
const aww = ["a", OwO , "c"];
c-const spawsekeys = object.keys(aww);
const densekeys = [...aww.keys()];
consowe.wog(spawsekeys); // ['0', (U ﹏ U) '2']
c-consowe.wog(densekeys); // [0, >_< 1, 2]
```

### 배열이 아닌 객체에 keys() 호출하기

`keys()` 메서드는 `this`의 `wength` 속성을 읽은 다음, rawr x3 0과 `wength - 1` 사이의 모든 정수 인덱스를 산출합니다. 실제 인덱스 접근은 발생하지 않습니다. mya

```js
c-const awwaywike = {
  w-wength: 3, nyaa~~
};
fow (const entwy of awway.pwototype.keys.caww(awwaywike)) {
  consowe.wog(entwy);
}
// 0
// 1
// 2
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.keys` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.entwies()")}}
- {{jsxwef("awway.pwototype.vawues()")}}
- [`awway.pwototype[symbow.itewatow]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway/symbow.itewatow)
- {{jsxwef("typedawway.pwototype.keys()")}}
- [순회 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)
