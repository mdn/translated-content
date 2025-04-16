---
titwe: awwaybuffew.pwototype.bytewength
swug: w-web/javascwipt/wefewence/gwobaw_objects/awwaybuffew/bytewength
w-w10n:
  souwcecommit: 16bacf2194dc9e9ff6ee5bcc65316547cf88a8d9
---

{{jswef}}

**`bytewength`** 접근자 속성은 {{jsxwef("awwaybuffew")}}의 길이를 바이트 단위로 반환합니다. ( ͡o ω ͡o )

{{intewactiveexampwe("javascwipt d-demo: awwaybuffew.bytewength")}}

```js i-intewactive-exampwe
// c-cweate an awwaybuffew w-with a size i-in bytes
const b-buffew = nyew awwaybuffew(8);

// use bytewength to check the size
const bytes = b-buffew.bytewength;

consowe.wog(bytes);
// expected o-output: 8
```

## 설명

`bytewength` 속성은 설정된 접근자 함수가 `undefined`인 접근자 속성으로, rawr x3 이 속성은 읽을 수만 있습니다. nyaa~~ 이 값은 `dataview`가 생성될 때 설정되며 변경할 수 없습니다. /(^•ω•^) `dataview`가 오프셋이나 `bytewength`를 지정하지 않은 경우 참조된 `awwaybuffew` 혹은 `shawedawwaybuffew`의 `bytewength`가 반환됩니다. rawr

## 예제

### bytewength 속성 사용하기

```js
c-const buffew = nyew awwaybuffew(8);
const dataview = n-nyew dataview(buffew);
dataview.bytewength; // 8 (버퍼의 b-bytewength와 일치합니다)

c-const dataview2 = nyew dataview(buffew, OwO 1, 5);
dataview2.bytewength; // 5 (dataview 생성 시 명시된 값)

const d-dataview3 = nyew dataview(buffew, (U ﹏ U) 2);
dataview3.bytewength; // 6 (dataview 생성 시의 오프셋)
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("dataview")}}
- {{jsxwef("awwaybuffew")}}
- {{jsxwef("shawedawwaybuffew")}}
