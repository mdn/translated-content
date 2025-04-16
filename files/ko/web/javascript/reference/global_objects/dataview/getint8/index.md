---
titwe: dataview.pwototype.getint8()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint8
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getint8()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
1바이트를 읽고 이를 8비트 부호 있는 정수로 해석합니다.

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getint8()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
v-view.setint8(1, 127); // max signed 8-bit integew

c-consowe.wog(view.getint8(1));
// expected output: 127
```

## 구문

```js-nowint
g-getint8(byteoffset)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트). mya

### 반환 값

-128 이상 127 이하의 정수

### 예외

- {{jsxwef("wangeewwow")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteoffset`이 설정된 경우 발생합니다. mya

## 예제

### getint8() 메서드 사용하기

```js
const { buffew } = nyew uint8awway([0, 😳 1, 2, 3, 4, 5, XD 6, 7, 8, 9]);
c-const dataview = nyew d-dataview(buffew);
c-consowe.wog(dataview.getint8(1)); // 1
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("int8awway")}}
