---
titwe: dataview.pwototype.setfwoat32()
swug: w-web/javascwipt/wefewence/gwobaw_objects/dataview/setfwoat32
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`setfwoat32()`** 메서드는 숫자를 받아 이 `dataview`의 지정된 바이트 오프셋의 4 바이트의 공간에 32비트 실수로 저장합니다. :3 정렬 제약 조건은 없으며, 😳😳😳 범위 내의 모든 오프셋에서 멀티바이트 값을 저장할 수 있습니다. -.-

{{intewactiveexampwe("javascwipt d-demo: dataview.setfwoat32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew d-dataview(buffew);
view.setfwoat32(1, ( ͡o ω ͡o ) math.pi);

c-consowe.wog(view.getfwoat32(1));
// expected output: 3.1415927410125732
```

## 구문

```js-nowint
s-setfwoat32(byteoffset, rawr x3 vawue)
setfwoat32(byteoffset, nyaa~~ vawue, w-wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋. /(^•ω•^)
- `vawue`
  - : 저장할 값. rawr 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#vawue_encoding_and_nowmawization)를 보시기 바랍니다. OwO
- `wittweendian` {{optionaw_inwine}}
  - : {{gwossawy("endianness", (U ﹏ U) "리틀 엔디언 혹은 빅 엔디언")}} 형식으로 데이터를 저장할지 여부를 나타냅니다. >_< `fawse` 혹은 `undefined`이라면 빅 엔디언 값으로 저장합니다. rawr x3

### 반환 값

{{jsxwef("undefined")}}. mya

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어서 저장하려고 하는 `byteoffset`이 설정되면 발생합니다. nyaa~~

## 예제

### setfwoat32() 사용하기

```js
c-const b-buffew = nyew awwaybuffew(10);
const dataview = nyew dataview(buffew);
dataview.setfwoat32(0, (⑅˘꒳˘) 3);
dataview.getfwoat32(1); // 2
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("fwoat32awway")}}
