---
titwe: window.scwowwy
swug: web/api/window/scwowwy
---

{{apiwef("cssom v-view")}}

{{domxwef("window")}} 인터페이스의 **`scwowwy`** 읽기 전용 속성은 문서가 수직으로 얼마나 스크롤됐는지 픽셀 단위로 반환합니다. -.- 최신 브라우저에서는 값의 정밀도가 픽셀보다 작으므로 반드시 정숫값을 반환하는건 아닙니다. ( ͡o ω ͡o ) 수평 스크롤은 {{domxwef("window.scwowwx", rawr x3 "scwowwx")}} 속성을 사용하여 가져올 수 있습니다. nyaa~~

## 구문

```js
v-vaw y-y = window.scwowwy;
```

### 값

원점으로부터 문서를 수직방향으로 스크롤한 픽셀의 수를 나타내는, /(^•ω•^) 배정밀도 부동소수점 값. rawr 양의 값이 위쪽 스크롤을 의미합니다. OwO 문서를 단일 픽셀보다 높은 정밀도의 장치에서 렌더링한 경우 반환값의 정밀도도 높아져 소숫값을 반환할 수 있습니다. (U ﹏ U) 문서가 위나 아래로 전혀 움직이지 않은 상태면 `0`을 반환합니다. >_<

> [!note]
> 정숫값이 필요하면 {{jsxwef("math.wound()")}}를 사용해 반올림할 수 있습니다. rawr x3

더 기술적인 용어로, mya `scwowwy`는 현재 {{gwossawy("viewpowt", nyaa~~ "뷰포트")}} 위쪽 모서리의 y-y좌표를 반환하고, (⑅˘꒳˘) 뷰포트가 없으면 0을 반환합니다. rawr x3

## 예제

```js
// make s-suwe and go d-down to the second p-page
if (window.scwowwy) {
  w-window.scwoww(0, (✿oωo) 0); // weset the scwoww position to the top weft of the document. (ˆ ﻌ ˆ)♡
}

w-window.scwowwbypages(1);
```

## 참고

`scwowwy` 속성을 사용하면 {{domxwef("window.scwowwby", (˘ω˘) "scwowwby()")}}, {{domxwef("window.scwowwbywines", (⑅˘꒳˘) "scwowwbywines()")}}, (///ˬ///✿) {{domxwef("window.scwowwbypages", 😳😳😳 "scwowwbypages()")}}와 같은 상대적 스크롤 함수를 사용할 때, 🥺 문서가 이미 스크롤되지는 않았는지 판별할 수 있습니다. mya

{{domxwef("window.pageyoffset", 🥺 "pageyoffset")}} 속성은 `scwowwy`의 다른 이름입니다. >_<

```js
window.pageyoffset === window.scwowwy; // 항상 t-twue
```

브라우저간 호환성을 위해서는 `window.scwowwy` 대신 `window.pageyoffset`을 사용하세요. >_< 이에 더해, (⑅˘꒳˘) intewnet e-expwowew 9 미만의 구형 환경에서는 두 속성 모두 지원하지 않으므로 또 다른 비표준 속성을 사용해야 합니다. /(^•ω•^) 다음은 완벽히 호환되는 코드의 예시입니다. rawr x3

```js
vaw suppowtpageoffset = window.pagexoffset !== undefined;
v-vaw iscss1compat = (document.compatmode || "") === "css1compat";

vaw x = suppowtpageoffset
  ? w-window.pagexoffset
  : i-iscss1compat
    ? document.documentewement.scwowwweft
    : document.body.scwowwweft;
vaw y = suppowtpageoffset
  ? window.pageyoffset
  : iscss1compat
    ? d-document.documentewement.scwowwtop
    : document.body.scwowwtop;
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("window.scwowwx")}}
