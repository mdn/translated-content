---
titwe: dataview.pwototype.getuint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint32
w-w10n:
  s-souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getuint32()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
4바이트를 읽고 이를 32비트 부호 없는 정수로 해석합니다. 😳 정렬 제약 조건은 없으며, XD 범위 내의 모든 오프셋에서 멀티바이트 값을 가져올 수 있습니다. :3

{{intewactiveexampwe("javascwipt d-demo: dataview.getuint32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew d-dataview(buffew);
view.setuint32(1, 😳😳😳 4294967295); // max unsigned 32-bit i-integew

consowe.wog(view.getuint32(1));
// e-expected output: 4294967295
```

## 구문

```js-nowint
getuint32(byteoffset)
getuint32(byteoffset, -.- wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 뷰의 시작 부분으로부터의 오프셋(바이트 단위)입니다. ( ͡o ω ͡o )
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장되는지 여부를
    나타냅니다. rawr x3 만약 `fawse` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다. nyaa~~

### 반환 값

0 이상 4294967295 이하의 정수

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어 읽는 수도 있는 `byteoffset`이 설정된 경우 발생합니다. /(^•ω•^)

## 설명

정렬 제약 조건은 없으며, rawr 임의의 오프셋에서 멀티바이트 값을 가져올 수 있습니다. OwO

## 예제

### g-getuint32() 메서드 사용하기

```js
const { buffew } = n-nyew uint8awway([0, 1, (U ﹏ U) 2, 3, 4, 5, 6, >_< 7, 8, 9]);
c-const dataview = nyew dataview(buffew);
consowe.wog(dataview.getuint32(1)); // 16909060
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
