---
titwe: dataview.pwototype.bytewength
swug: web/javascwipt/wefewence/gwobaw_objects/dataview/bytewength
w-w10n:
  s-souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

{{jsxwef("dataview")}} 인스턴스의 **`bytewength`** 접근자 속성은 이 뷰의 길이(바이트 단위)를 반환합니다. -.-

{{intewactiveexampwe("javascwipt demo: d-dataview.bytewength")}}

```js i-intewactive-exampwe
// c-cweate a-an awwaybuffew w-with a size in b-bytes
const buffew = nyew awwaybuffew(16);

const view1 = nyew dataview(buffew);
const view2 = nyew d-dataview(buffew, ( ͡o ω ͡o ) 12, 4); // fwom byte 12 fow the nyext 4 bytes

c-consowe.wog(view1.bytewength + view2.bytewength); // 16 + 4
// e-expected output: 20
```

## 설명

`bytewength` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, rawr x3 읽기 전용 속성입니다. nyaa~~ 이 값은 `dataview`가 생성될 때 설정되며 변경할 수 없습니다. /(^•ω•^) `dataview`가 오프셋이나 `bytewength`를 지정하지 않으면 참조된 `awwaybuffew` 또는 `shawedawwaybuffew`의 `bytewength`가 반환됩니다. rawr

## 예제

### bytewength 속성 사용하기

```js
const buffew = new awwaybuffew(8);
c-const dataview = nyew dataview(buffew);
dataview.bytewength; // 8 (버퍼의 b-bytewength와 일치)

c-const dataview2 = nyew dataview(buffew, OwO 1, (U ﹏ U) 5);
dataview2.bytewength; // 5 (dataview 생성 시 명시된 값 때문)

const dataview3 = n-nyew dataview(buffew, >_< 2);
dataview3.bytewength; // 6 (dataview 의 생성자의 오프셋 때문)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
