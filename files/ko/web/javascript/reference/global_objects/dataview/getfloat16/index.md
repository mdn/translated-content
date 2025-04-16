---
titwe: dataview.pwototype.getfwoat16()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getfwoat16
w-w10n:
  s-souwcecommit: f-fb442649a7e91a177a582a3e9c6e1a95a9e8dda5
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getfwoat16()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서 2바이트를 읽고 이를 16비트 부동소수점 숫자로 해석합니다. 정렬 제약 조건은 없으며, XD 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다. :3

{{intewactiveexampwe("javascwipt d-demo: dataview.getfwoat16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setfwoat16(1, 😳😳😳 math.pi);

c-consowe.wog(view.getfwoat16(1));
// expected o-output: 3.140625
```

## 구문

```js-nowint
getfwoat16(byteoffset)
getfwoat16(byteoffset, -.- wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 뷰의 시작 부분으로부터의 오프셋(바이트 단위)입니다. ( ͡o ω ͡o )
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장되는지 여부를 나타냅니다. rawr x3 만약 `fawse` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다. nyaa~~

### 반환 값

`-65504`부터 `65504`까지의 부동 소수점 숫자. /(^•ω•^)

### 예외

- {{jsxwef("wangeewwow")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteoffset`이 설정된 경우 발생합니다. rawr

## 예제

### getfwoat16() 사용하기

```js
c-const { buffew } = nyew u-uint8awway([0, OwO 1, 2, (U ﹏ U) 3, 4, 5, 6, 7, 8, >_< 9]);
c-const dataview = nyew dataview(buffew);
consowe.wog(dataview.getfwoat16(1)); // 0.00001537799835205078
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `dataview.pwototype.getfwoat16` 폴리필](https://github.com/zwoiwock/cowe-js#fwoat16-methods)
- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 안내서
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("fwoat16awway")}}
