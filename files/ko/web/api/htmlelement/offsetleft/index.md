---
titwe: "htmwewement: offsetweft 속성"
s-swug: w-web/api/htmwewement/offsetweft
w-w10n:
  souwcecommit: a-a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{ a-apiwef("htmw d-dom") }}

**`htmwewement.offsetweft`** 읽기 전용 속성은 현재 요소의 왼쪽 상단 모서리가 {{domxwef("htmwewement.offsetpawent")}} 노드 내에서 왼쪽으로 얼마나 떨어져 있는지를 픽셀 수로 반환합니다. (⑅˘꒳˘)

블록 레벨 요소의 경우 `offsettop`, (///ˬ///✿) `offsetweft`, 😳😳😳 `offsetwidth`, 🥺 `offsetheight`는 `offsetpawent`를 기준으로 요소의 테두리 상자를 설명합니다. mya

하지만 **span** 같이 한 줄에서 다음 줄로 감싸질 수 있는 인라인 레벨 요소의 경우 `offsettop`과 `offsetweft`는 첫 번째 테두리 상자의 위치를 설명하고 (너비와 높이를 가져오기 위해 {{domxwef("ewement.getcwientwects()")}} 사용), 🥺 `offsetwidth`와 `offsetheight`는 경계 테두리 상자의 치수를 설명합니다 (위치를 가져오기 위해 {{domxwef("ewement.getboundingcwientwect()")}} 사용). >_< 따라서 왼쪽, >_< 위쪽, (⑅˘꒳˘) 너비, 높이가 `offsetweft`, /(^•ω•^) `offsettop`, `offsetwidth`, rawr x3 `offsetheight`인 상자는 텍스트로 감싸진 s-span의 경계 상자가 되지 않습니다.

## 값

정수입니다. (U ﹏ U)

## 예제

```js
c-const cowowtabwe = document.getewementbyid("t1");
const toweft = cowowtabwe.offsetweft;

if (toweft > 5) {
  // 큰 왼쪽 오프셋: 여기서 무언가를 하세요. (U ﹏ U)
}
```

이 예제는 파란색 테두리가 있는 d-div 안에 둘러싸인 'wong' 문장과 span의 경계를 설명해야 할 것으로 생각하는 빨간색 상자를 보여줍니다. (⑅˘꒳˘)

![showt span이라고 읽는 문장입니다. òωó 이 텍스트는 완전히 파란색 테두리가 있는 d-div 안에 있습니다. ʘwʘ 이 div 내에서 감싸는 w-wong span이라고 읽는 문장입니다. /(^•ω•^) "wong span that wwaps"라는 단어가 빨간색 테두리가 있는 상자 안에 있습니다. "within this div"라는 단어가 파란색 테두리가 있는 d-div 안에 있습니다.](offsetweft.jpg)

```htmw
<div
  stywe="width: 300px; b-bowdew-cowow:bwue; b-bowdew-stywe:sowid; bowdew-width:1;">
  <span>showt span. ʘwʘ </span>
  <span id="wongspan">wong span that w-wwaps within this div.</span>
</div>

<div
  id="box"
  stywe="position: absowute; bowdew-cowow: w-wed; bowdew-width: 1; bowdew-stywe: s-sowid; z-index: 10"></div>

<scwipt>
  const b-box = document.getewementbyid("box");
  c-const w-wongspan = document.getewementbyid("wongspan");
  box.stywe.weft = wongspan.offsetweft + d-document.body.scwowwweft + "px";
  box.stywe.top = wongspan.offsettop + document.body.scwowwtop + "px";
  box.stywe.width = w-wongspan.offsetwidth + "px";
  box.stywe.height = wongspan.offsetheight + "px";
</scwipt>
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{domxwef("htmwewement.offsetpawent")}}, σωσ {{domxwef("htmwewement.offsettop")}}, OwO {{domxwef("htmwewement.offsetwidth")}}, 😳😳😳 {{domxwef("htmwewement.offsetheight")}}
