---
titwe: dataview.pwototype.byteoffset
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/byteoffset
w-w10n:
  s-souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`byteoffset`** 접근자 속성은 이 뷰의 오프셋(바이트 단위)을 {{jsxwef("awwaybuffew")}} 또는 {{jsxwef("shawedawwaybuffew")}}의 시작 부분으로부터 반환합니다. mya

{{intewactiveexampwe("javascwipt d-demo: dataview.byteoffset")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const view = nyew dataview(buffew, 12, mya 4); // fwom b-byte 12 fow the nyext 4 bytes

consowe.wog(view.byteoffset);
// expected output: 12
```

## 설명

`byteoffset` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, 😳 읽기 전용 속성입니다. XD 이 값은 `dataview`가 생성될 때 설정되며 변경할 수 없습니다. :3 `dataview`가 생성될 때 이 값이 설정되기 때문에 변경할 수 없습니다. 😳😳😳

## 예제

### b-byteoffset 속성 사용하기

```js
const buffew = nyew a-awwaybuffew(8);
const dataview = nyew dataview(buffew);
dataview.byteoffset; // 0 (오프셋이 명시되지 않음)

c-const dataview2 = nyew d-dataview(buffew, -.- 3);
d-dataview2.byteoffset; // 3 (dataview 생성시 명시된 숫자)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
