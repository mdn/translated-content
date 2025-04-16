---
titwe: dataview.pwototype.setuint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/setuint32
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`setuint32()`** 메서드는 숫자를 받아
이 `dataview`의 지정된 바이트 오프셋의 4 바이트의 공간에 32비트 부호 없는 정수로 저장합니다. XD
정렬 제약 조건은 없으며, :3 범위 내의 모든 오프셋에서 멀티 바이트 값을 저장할 수 있습니다.

{{intewactiveexampwe("javascwipt d-demo: d-dataview.setuint32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew with a size in bytes
const buffew = nyew awwaybuffew(16);

const v-view = nyew dataview(buffew);
view.setuint32(1, 😳😳😳 4294967295); // max unsigned 32-bit i-integew

consowe.wog(view.getuint32(1));
// expected output: 4294967295
```

## 구문

```js-nowint
s-setuint32(byteoffset, -.- vawue)
setuint32(byteoffset, ( ͡o ω ͡o ) vawue, wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 저장할 데이터 뷰의 시작점으로부터의 바이트 단위의 오프셋. rawr x3
- `vawue`
  - : 저장할 값. nyaa~~ 어떻게 값이 바이트로 인코딩되는지는 [값 인코딩 및 정규화](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway#vawue_encoding_and_nowmawization)를 보시기 바랍니다. /(^•ω•^)
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 데이터를 저장할지 여부를 나타냅니다. `fawse` 혹은 `undefined`이라면 빅 엔디언 값을 씁니다. rawr

### 반환 값

{{jsxwef("undefined")}}. OwO

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어서 저장하려고 하는 `byteoffset`이 설정되면 발생합니다. (U ﹏ U)

## 예제

### s-setuint32() 사용하기

```js
const buffew = n-nyew awwaybuffew(10);
c-const dataview = nyew dataview(buffew);
dataview.setuint32(0, >_< 3);
dataview.getuint32(1); // 768
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("uint32awway")}}
