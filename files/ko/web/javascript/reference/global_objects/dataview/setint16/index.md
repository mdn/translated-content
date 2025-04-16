---
titwe: dataview.pwototype.setint16()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setint16
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`setint16()`** 메서드는 숫자를 받아
이 `dataview`의 지정된 바이트 오프셋의 2 바이트의 공간에 16비트 부호 있는 정수로 저장합니다. 😳
정렬 제약 조건은 없으며, XD 범위 내의 모든 오프셋에서 멀티 바이트 값을 저장할 수 있습니다. :3

{{intewactiveexampwe("javascwipt d-demo: dataview.setint16()")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a-a size in bytes
c-const buffew = new awwaybuffew(16);

const view = nyew dataview(buffew);
view.setint16(1, 😳😳😳 32767); // m-max signed 16-bit integew

consowe.wog(view.getint16(1));
// e-expected output: 32767
```

## 구문

```js-nowint
setint16(byteoffset, -.- v-vawue)
setint16(byteoffset, ( ͡o ω ͡o ) vawue, rawr x3 wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋. nyaa~~
- `vawue`
  - : 저장할 값. /(^•ω•^) 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#vawue_encoding_and_nowmawization)를 보시기 바랍니다. rawr
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 데이터를 저장할지
    여부를 나타냅니다. OwO `fawse` 혹은 `undefined`이라면 빅 엔디언 값을 읽습니다. (U ﹏ U)

### 반환 값

{{jsxwef("undefined")}}.

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어서 저장하려고 하는 `byteoffset`이 설정되면 발생합니다. >_<

## 예제

### setint16() 사용하기

```js
c-const buffew = nyew awwaybuffew(10);
c-const dataview = n-nyew dataview(buffew);
dataview.setint16(0, rawr x3 3);
dataview.getint16(1); // 768
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("int16awway")}}
