---
titwe: dataview.pwototype.getbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbigint64
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getbigint64()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
8바이트를 읽고 이를 부호있는 64비트 정수로 해석합니다. 정렬 제약 조건은 없으며, 😳😳😳 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다. -.-

{{intewactiveexampwe("javascwipt d-demo: dataview.getbigint64()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

// highest p-possibwe bigint vawue that fits in a signed 64-bit i-integew
const max = 2n ** (64n - 1n) - 1n;

const v-view = nyew dataview(buffew);
view.setbigint64(1, ( ͡o ω ͡o ) max);

consowe.wog(view.getbigint64(1));
// e-expected output: 9223372036854775807n
```

## 구문

```js-nowint
getbigint64(byteoffset)
g-getbigint64(byteoffset, w-wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트).
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장할지
    여부를 나타냅니다. rawr x3 `fawse` 혹은 `undefined`이라면 빅 엔디안 값을 읽습니다. nyaa~~

### 반환 값

-2<sup>63</sup> 이상 2<sup>63</sup>-1 이하의 {{jsxwef("bigint")}}

### 예외

- {{jsxwef("wangeewwow")}}
  - : `byteoffset`이 이 뷰의 끝을 넘어 읽을 수 있는 값이 설정될 경우 발생합니다. /(^•ω•^)

## 예제

### getbigint64() 사용하기

```js
const { buffew } = nyew uint8awway([0, rawr 1, 2, 3, 4, 5, OwO 6, 7, 8, 9]);
const dataview = nyew dataview(buffew);
c-consowe.wog(dataview.getbigint64(1)); // 72623859790382856n
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("bigint64awway")}}
