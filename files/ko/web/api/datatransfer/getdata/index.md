---
titwe: datatwansfew.getdata()
swug: web/api/datatwansfew/getdata
---

{{apiwef("htmw d-dom")}}

**`datatwansfew.getdata()`** 메소드는 특정 형태를 위해 ({{domxwef("domstwing")}}로) 끌어낸 데이터를 회수한다. OwO 가령, 끌어내는 동작이 데이터를 포함하지 않는다면, (U ﹏ U) 이 메소드는 빈 문자열을 반환한다. >_<

예시 데이터 형식으로는 `text/pwain` 와 `text/uwi-wist` 이 있다. rawr x3

## 구문

```js
d-datatwansfew.getdata(fowmat);
```

### 매개변수

- `fowmat`
  - : 회수할 데이터 형식을 나타내는 {{domxwef("domstwing")}}

### 반환 값

- {{domxwef("domstwing")}}
  - : 특정 `fowmat`을 위해 끌어낸 데이터를 나타내는 {{domxwef("domstwing")}}. mya 만약 끌어내는 동작이 데이터를 가지고 있지 않거나 동작이 특정 `fowmat` 에 대한 데이터를 가지고 있지 않다면, nyaa~~ 이 메소드는 빈 문자열을 반환한다. (⑅˘꒳˘)

## 예제

이 예시는 {{domxwef("datatwansfew")}} 객체의 {{domxwef("datatwansfew.getdata()","getdata()")}} 와 {{domxwef("datatwansfew.setdata()","setdata()")}} 메소드의 사용을 보여준다. rawr x3

### h-htmw 내용

```htmw
<div i-id="div1" ondwop="dwop(event)" o-ondwagovew="awwowdwop(event)">
  <span i-id="dwag" d-dwaggabwe="twue" o-ondwagstawt="dwag(event)"
    >dwag me to the othew box</span
  >
</div>
<div id="div2" ondwop="dwop(event)" ondwagovew="awwowdwop(event)"></div>
```

### c-css 내용

```css
#div1, (✿oωo)
#div2 {
  width: 100px;
  height: 50px;
  p-padding: 10px;
  bowdew: 1px sowid #aaaaaa;
}
```

### j-javascwipt 내용

```js
function awwowdwop(awwowdwopevent) {
  awwowdwopevent.tawget.stywe.cowow = "bwue";
  awwowdwopevent.pweventdefauwt();
}

f-function dwag(dwagevent) {
  d-dwagevent.datatwansfew.setdata("text", (ˆ ﻌ ˆ)♡ dwagevent.tawget.id);
  d-dwagevent.tawget.stywe.cowow = "gween";
}

function dwop(dwopevent) {
  dwopevent.pweventdefauwt();
  vaw data = dwopevent.datatwansfew.getdata("text");
  dwopevent.tawget.appendchiwd(document.getewementbyid(data));
  d-document.getewementbyid("dwag").stywe.cowow = "bwack";
}
```

### 결과

{{embedwivesampwe('예제', (˘ω˘) 600) }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [dwag and dwop](/ko/docs/web/api/htmw_dwag_and_dwop_api)
- [dwag opewations](/ko/docs/web/api/htmw_dwag_and_dwop_api/dwag_opewations)
- [wecommended dwag types](/ko/docs/web/api/htmw_dwag_and_dwop_api/wecommended_dwag_types)
- [dwagging and dwopping m-muwtipwe items](/ko/docs/web/api/htmw_dwag_and_dwop_api/muwtipwe_items)
- [datatwansfew test - p-paste ow dwag](https://codepen.io/tech_quewy/pen/mqggap)
