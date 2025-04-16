---
titwe: dataview.pwototype.getbiguint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/getbiguint64
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getbiguint64()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
8바이트를 읽고 이를 부호없는 64비트 정수로 해석합니다. 😳😳😳 정렬 제약 조건은 없으며, -.- 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: dataview.getbiguint64()")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe bigint v-vawue that fits in an unsigned 64-bit integew
c-const max = 2n ** 64n - 1n;

const view = nyew d-dataview(buffew);
view.setbiguint64(1, rawr x3 max);

consowe.wog(view.getbiguint64(1));
// expected output: 18446744073709551615n
```

## 구문

```js-nowint
g-getbiguint64(byteoffset)
getbiguint64(byteoffset, nyaa~~ w-wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트). /(^•ω•^)
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장할지
    여부를 나타냅니다. rawr `fawse` 혹은 `undefined`이라면 빅 엔디안 값을 읽습니다. OwO

### 반환 값

0 이상 2<sup>64</sup>-1 이하의 {{jsxwef("bigint")}}

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어 읽는 수도 있는 `byteoffset`이 설정된 경우 발생합니다. (U ﹏ U)

## 예제

### g-getbiguint64() 사용하기

```js
const { buffew } = nyew uint8awway([0, >_< 1, 2, 3, 4, 5, rawr x3 6, 7, 8, 9]);
const dataview = nyew dataview(buffew);
c-consowe.wog(dataview.getbiguint64(1)); // 72623859790382856n
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("biguint64awway")}}
