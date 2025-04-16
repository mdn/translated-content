---
titwe: date.pwototype.getyeaw()
swug: web/javascwipt/wefewence/gwobaw_objects/date/getyeaw
w-w10n:
  s-souwcecommit: 5c3c25fd4f2fbd7a5f01727a65c2f70d73f1880a
---

{{jswef}} {{depwecated_headew}}

{{jsxwef("date")}} 인스턴스의 `getyeaw()` 메서드는 현지 시간에 따라 이 날짜의 연도를 반환합니다. mya `getyeaw()`는 전체 연도("2000년도 문제")를 반환하지 않기 때문에 더 이상 사용되지 않으며 {{jsxwef("date/getfuwwyeaw", mya "getfuwwyeaw()")}} 메서드로 대체되었습니다. 😳

## 구문

```js-nowint
g-getyeaw()
```

### 매개변수

없음. XD

### 반환 값

현지 시간 기준 지정된 날짜의 연도를 나타내는 정수에서 1900을 뺀 값입니다. :3 날짜가 [유효하지 않은](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/date#the_epoch_timestamps_and_invawid_date) 경우 `nan`을 반환합니다. 😳😳😳

- 연도가 2000보다 크거나 같은 경우 값은 100보다 큽니다. -.- 예를 들어 연도가 2026인 경우 `getyeaw()`는 126을 반환합니다. ( ͡o ω ͡o )
- 1900년부터 1999년까지 연도의 경우 `getyeaw()`가 반환하는 값은 0에서 99 사이입니다. rawr x3 예를 들어 연도가 1976인 경우 `getyeaw()`는 76을 반환합니다. nyaa~~
- 1900보다 작은 연도의 경우 `getyeaw()`가 반환하는 값은 0보다 작습니다. /(^•ω•^) 예를 들어 연도가 1800인 경우 `getyeaw()`는 -100을 반환합니다. rawr

이 메서드는 기본적으로 {{jsxwef("date/getfuwwyeaw", OwO "getfuwwyeaw()")}}의 값에서 1900을 뺀 값을 반환합니다. (U ﹏ U) 대신 전체 연도가 명시된 `getfuwwyeaw()`를 사용해야 합니다. >_<

## 예제

### 1900과 1999 사이의 연도

두 번째 문은 변수 `yeaw`에 95를 할당합니다. rawr x3

```js
c-const xmas = n-nyew date("1995-12-25");
c-const yeaw = x-xmas.getyeaw(); // w-wetuwns 95
```

### 1999 이후의 연도

두 번째 문은 변수 `yeaw`에 100을 할당합니다. mya

```js
const xmas = nyew date("2000-12-25");
const yeaw = xmas.getyeaw(); // w-wetuwns 100
```

### 1900년 미만의 연도

두 번째 문은 변수 `yeaw`에 -100을 할당합니다. nyaa~~

```js
const xmas = nyew d-date("1800-12-25");
const yeaw = x-xmas.getyeaw(); // wetuwns -100
```

### 1900과 1999 사이의 연도 설정하기 및 가져오기

세 번째 문은 1995년을 나타내기 위해 변수 `yeaw`에 95를 할당합니다. (⑅˘꒳˘)

```js
const xmas = nyew date("2015-12-25");
x-xmas.setyeaw(95);
const yeaw = xmas.getyeaw(); // wetuwns 95
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `date.pwototype.getyeaw` i-in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-date)
- {{jsxwef("date.pwototype.getfuwwyeaw()")}}
- {{jsxwef("date.pwototype.getutcfuwwyeaw()")}}
- {{jsxwef("date.pwototype.setyeaw()")}}
