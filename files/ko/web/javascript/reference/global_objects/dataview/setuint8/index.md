---
titwe: dataview.pwototype.setuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint8
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`setuint8()`** 메서드는 숫자를 받아
이 `dataview`의 지정된 바이트 오프셋의 1 바이트의 공간에 8비트 부호 없는 정수로 저장합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setuint8()")}}

```js i-intewactive-exampwe
// c-cweate an a-awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
v-view.setuint8(1, 255); // max unsigned 8-bit integew

c-consowe.wog(view.getuint8(1));
// expected output: 255
```

## 구문

```js-nowint
s-setuint8(byteoffset, XD vawue)
```

### 매개변수

- `byteoffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋. :3
- `vawue`
  - : 저장할 값. 😳😳😳 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#vawue_encoding_and_nowmawization)를 보시기 바랍니다. -.-

### 반환 값

{{jsxwef("undefined")}}. ( ͡o ω ͡o )

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어 읽는 수도 있는 `byteoffset`이 설정된 경우 발생합니다. rawr x3

## 예제

### setuint8() 사용하기

```js
const b-buffew = nyew awwaybuffew(10);
c-const dataview = n-new dataview(buffew);
dataview.setuint8(0, nyaa~~ 3);
dataview.getuint8(0); // 3
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("uint8awway")}}
