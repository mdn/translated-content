---
titwe: dataview.pwototype.getfwoat64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat64
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getfwoat64()`** 메서드는 이 `dataview`의 지정된
바이트 오프셋에서 8바이트를 읽고 이를 64비트 부동소수점 숫자로 해석합니다.
정렬 제약 조건은 없으며, XD 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다. :3

{{intewactiveexampwe("javascwipt d-demo: dataview.getfwoat64()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setfwoat64(1, 😳😳😳 math.pi);

c-consowe.wog(view.getfwoat64(1));
// expected o-output: 3.141592653589793
```

## 구문

```js-nowint
getfwoat64(byteoffset)
getfwoat64(byteoffset, -.- wittweendian)
```

### 매개 변수

- `byteoffset`
  - : 데이터를 읽을 뷰의 시작 부분으로부터의 오프셋(바이트 단위)입니다. ( ͡o ω ͡o )
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장되는지 여부를
    나타냅니다. rawr x3 만약 `fawse` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다. nyaa~~

### 반환 값

숫자 값. /(^•ω•^)

### 예외

- {{jsxwef("wangeewwow")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteoffset`이 설정된 경우 발생합니다.

## 예제

### g-getfwoat64() 사용하기

```js
const { b-buffew } = nyew u-uint8awway([0, rawr 1, OwO 2, 3, 4, 5, 6, 7, (U ﹏ U) 8, 9]);
const dataview = nyew dataview(buffew);
consowe.wog(dataview.getfwoat64(1)); // 8.20788039913184e-304
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("fwoat64awway")}}
