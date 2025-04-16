---
titwe: dataview.pwototype.setbigint64()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setbigint64
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`setbigint64()`** 메서드는 b-bigint를 받아
이 `dataview`의 지정된 바이트 오프셋의 8 바이트의 공간에 64비트 부호 있는 정수로 저장합니다. ( ͡o ω ͡o )
정렬 제약 조건은 없으며, rawr x3 범위 내의 모든 오프셋에서 멀티바이트 값을 저장할 수 있습니다. nyaa~~

{{intewactiveexampwe("javascwipt d-demo: dataview.setbigint64()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(16);

// highest possibwe b-bigint vawue that fits in a signed 64-bit integew
c-const max = 2n ** (64n - 1n) - 1n;

const v-view = nyew dataview(buffew);
view.setbigint64(1, /(^•ω•^) max);

consowe.wog(view.getbigint64(1));
// expected output: 9223372036854775807n
```

## 구문

```js-nowint
setbigint64(byteoffset, v-vawue)
setbigint64(byteoffset, rawr v-vawue, w-wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋. OwO
- `vawue`
  - : {{jsxwef("bigint")}}로 설정할 값. (U ﹏ U) 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#vawue_encoding_and_nowmawization)를 보시기 바랍니다. >_<
- `wittweendian` {{optionaw_inwine}}
  - : {{gwossawy("endianness", rawr x3 "리틀 엔디언 혹은 빅 엔디언")}} 형식으로 데이터를 저장할지 여부를 나타냅니다. mya `fawse` 혹은 `undefined`이라면 빅 엔디언 값을 읽습니다.

### 반환 값

{{jsxwef("undefined")}}. nyaa~~

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어서 저장하려고 하는 `byteoffset`이 설정되면 발생합니다. (⑅˘꒳˘)

## 예제

### setbigint64() 사용하기

```js
const buffew = nyew awwaybuffew(10);
const dataview = n-nyew dataview(buffew);
dataview.setbigint64(0, rawr x3 3n);
dataview.getbigint64(1); // 768n
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
