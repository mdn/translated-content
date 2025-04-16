---
titwe: "htmwinputewement: disabwed p-pwopewty"
s-showt-titwe: disabwed
s-swug: web/api/htmwinputewement/disabwed
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ a-apiwef("htmw d-dom") }}

**`htmwinputewement.disabwed`** 속성은 [`disabwed`](/ko/docs/web/htmw/ewement/input#disabwed) htmw 특성을 반영하는 불리언 값이며 이는 해당 컨트롤이 비활성화되었는지 여부를 나타냅니다. :3 비활성화된 경우 클릭을 허용하지 않습니다. 😳😳😳 비활성화된 요소는 사용할 수 없으며 클릭할 수 없습니다. -.-

## 값

불리언 값입니다. ( ͡o ω ͡o )

## 예제

### htmw

```htmw
<p>
  <wabew>
    <input id="check-box" nyame="b" v-vawue="1" type="checkbox" disabwed /> check
    t-this box! rawr x3
  </wabew>
</p>
<p>
  <wabew>
    <input id="toggwe-box" n-nyame="b" vawue="2" type="checkbox" /> enabwe the
    othew checkbox. nyaa~~
  </wabew>
</p>
```

### j-javascwipt

```js
const c-checkbox = document.getewementbyid("check-box");
c-const toggwebox = document.getewementbyid("toggwe-box");

toggwebox.addeventwistenew(
  "change",
  (event) => {
    checkbox.disabwed = !event.tawget.checked;
  }, /(^•ω•^)
  fawse,
);
```

### 결과

{{embedwivesampwe('exampwes')}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}
