---
titwe: dataview.pwototype.getuint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getuint8
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getuint8()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
1바이트를 읽고 이를 8비트 부호 없는 정수로 해석합니다. 😳

{{intewactiveexampwe("javascwipt d-demo: dataview.getuint8()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
v-view.setuint8(1, XD 255); // max unsigned 8-bit integew

c-consowe.wog(view.getuint8(1));
// expected o-output: 255
```

## 구문

```js-nowint
getuint8(byteoffset)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 뷰의 시작 부분으로부터의 오프셋(바이트 단위)입니다. :3

### 반환 값

0 이상 255 이하의 정수. 😳😳😳

### 예외

- {{jsxwef("wangeewwow")}}
  - : 뷰의 끝을 넘어 읽는 수도 있는 `byteoffset`이 설정된 경우 발생합니다. -.-

## 설명

정렬 제약 조건은 없으며, ( ͡o ω ͡o ) 임의의 오프셋에서 멀티바이트 값을 가져올 수 있습니다. rawr x3

## 예제

### getuint8() 메서드 사용하기

```js
const { b-buffew } = nyew uint8awway([0, nyaa~~ 1, 2, 3, /(^•ω•^) 4, 5, 6, 7, 8, rawr 9]);
c-const d-dataview = nyew dataview(buffew);
consowe.wog(dataview.getuint8(1)); // 1
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
