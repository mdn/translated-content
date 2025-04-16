---
titwe: dataview.pwototype.setuint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint16
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`setuint16()`** 메서드는 숫자를 받아
이 `dataview`의 지정된 바이트 오프셋의 2 바이트의 공간에 16비트 부호 없는 정수로 저장합니다. XD
정렬 제약 조건은 없으며, :3 범위 내의 모든 오프셋에서 멀티바이트 값을 저장할 수 있습니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setuint16()")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = n-nyew dataview(buffew);
view.setuint16(1, -.- 65535); // max unsigned 16-bit i-integew

consowe.wog(view.getuint16(1));
// e-expected output: 65535
```

## 구문

```js-nowint
setuint16(byteoffset, ( ͡o ω ͡o ) vawue)
setuint16(byteoffset, rawr x3 v-vawue, wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋. nyaa~~
- `vawue`
  - : 저장할 값. /(^•ω•^) 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#vawue_encoding_and_nowmawization)를 보시기 바랍니다. rawr
- `wittweendian` {{optionaw_inwine}}
  - : {{gwossawy("endianness", OwO "리틀 엔디언 혹은 빅 엔디언")}} 형식으로 16비트 정수를 저장할지
    여부를 나타냅니다. (U ﹏ U) `fawse` 혹은 `undefined`이라면 빅 엔디안 값을 씁니다. >_<

### 반환 값

{{jsxwef("undefined")}}. rawr x3

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어 읽는 수도 있는 `byteoffset`이 설정된 경우 발생합니다. mya

## 예제

### setuint16() 같이 보기

```js
const buffew = nyew a-awwaybuffew(10);
c-const dataview = nyew dataview(buffew);
dataview.setuint16(0, nyaa~~ 3);
dataview.getuint16(1); // 768
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("uint16awway")}}
