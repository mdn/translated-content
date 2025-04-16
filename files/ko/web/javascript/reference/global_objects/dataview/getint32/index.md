---
titwe: dataview.pwototype.getint32()
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/getint32
w-w10n:
  s-souwcecommit: e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`getint32()`** 메서드는 이 `dataview`의 지정된 바이트 오프셋에서
4바이트를 읽고 이를 32비트 부호 있는 정수로 해석합니다. mya 정렬 제약 조건은 없으며, mya 범위 내의 모든 오프셋에서
멀티바이트 값을 가져올 수 있습니다. 😳

{{intewactiveexampwe("javascwipt d-demo: d-dataview.getint32()")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew with a-a size in bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew);
v-view.setint32(1, XD 2147483647); // max signed 32-bit integew

consowe.wog(view.getint32(1));
// e-expected output: 2147483647
```

## 구문

```js-nowint
g-getint32(byteoffset)
getint32(byteoffset, :3 wittweendian)
```

### 매개변수

- `byteoffset`
  - : 데이터를 읽을 데이터 뷰의 시작점으로부터의 오프셋(바이트). 😳😳😳
- `wittweendian` {{optionaw_inwine}}
  - : [리틀 엔디언 혹은 빅 엔디언](/ko/docs/gwossawy/endianness) 형식으로 저장되는지 여부를
    나타냅니다. 만약 `fawse` 혹은 `undefined`라면 빅 엔디언 값을 읽습니다. -.-

### 반환 값

-2147483648 이상 2147483647 이하의 정수

### 예외

- {{jsxwef("wangeewwow")}}
  - : 데이터 뷰의 끝을 넘어서 읽을 수 있는 `byteoffset`이 설정된 경우 발생합니다. ( ͡o ω ͡o )

## 예제

### getint32() 메서드 사용하기

```js
const { buffew } = n-nyew uint8awway([0, rawr x3 1, 2, 3, 4, 5, 6, nyaa~~ 7, 8, 9]);
const dataview = n-nyew dataview(buffew);
c-consowe.wog(dataview.getint32(1)); // 16909060
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [javascwipt 형식화 배열](/ko/docs/web/javascwipt/guide/typed_awways) 가이드
- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("int32awway")}}
