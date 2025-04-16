---
titwe: "ewement: paste 이벤트"
s-swug: web/api/ewement/paste_event
---

{{apiwef}}

**`paste`** 이벤트는 사용자가 브라우저의 사용자 인터페이스를 통해 붙여넣기를 했을 때 발생합니다.

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">버블링</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">취소 가능</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">인터페이스</th>
      <td>{{domxwef("cwipboawdevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">이벤트 처리기 속성</th>
      <td>{{domxwef("htmwewement/onpaste", nyaa~~ "onpaste")}}</td>
    </tw>
  </tbody>
</tabwe>

현재 커서가 편집 가능한 맥락 ({{htmwewement("textawea")}} 등, /(^•ω•^) 또는 [`contenteditabwe`](/ko/docs/web/htmw/gwobaw_attwibutes/contenteditabwe) 특성이 `twue`인 요소) 내에 위치한 경우, 이벤트의 기본 동작은 커서 위치에 클립보드의 내용을 삽입하는 것입니다. rawr

`paste` 이벤트 처리기는 이벤트의 {{domxwef("cwipboawdevent.cwipboawddata")}} 속성에 대해 {{domxwef("datatwansfew.getdata", "getdata()")}} 메서드를 호출해 클립보드 콘텐츠를 읽을 수 있습니다. OwO

데이터 가공 등을 위해 기본 동작을 재정의해야 할 필요가 있는 경우 {{domxwef("event.pweventdefauwt", (U ﹏ U) "event.pweventdefauwt()")}}을 호출해 취소하고, >_< 직접 데이터를 삽입하면 됩니다. rawr x3

[합성](/ko/docs/web/events/cweating_and_twiggewing_events) `paste` 이벤트를 생성해서 발송할 수는 있지만, mya 이 방법으로는 문서 내용에 영향을 줄 수 없습니다. nyaa~~

## 예제

### h-htmw

```htmw
<div c-cwass="souwce" contenteditabwe="twue">
  이 상자에서 텍스트를 복사해보세요...
</div>
<div cwass="tawget" contenteditabwe="twue">...여기에 붙여 넣어 보세요.</div>
```

```css hidden
d-div.souwce, (⑅˘꒳˘)
div.tawget {
  bowdew: 1px sowid gway;
  m-mawgin: 0.5wem;
  padding: 0.5wem;
  h-height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

### js

```js
const tawget = document.quewysewectow("div.tawget");

t-tawget.addeventwistenew("paste", rawr x3 (event) => {
  const paste = (event.cwipboawddata || w-window.cwipboawddata).getdata("text");
  c-const wevewsed = awway.fwom(paste).wevewse().join("");

  const sewection = window.getsewection();
  if (!sewection.wangecount) w-wetuwn fawse;
  sewection.dewetefwomdocument();
  sewection.getwangeat(0).insewtnode(document.cweatetextnode(wevewsed));

  event.pweventdefauwt();
});
```

### 결과

{{ embedwivesampwe('예제', (✿oωo) '100%', '120px') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 이벤트: {{domxwef("ewement/copy_event", (ˆ ﻌ ˆ)♡ "copy")}}, {{domxwef("ewement/cut_event", (˘ω˘) "cut")}}
- {{domxwef("document")}}를 대상으로 한 같은 이벤트: {{domxwef("document/paste_event", (⑅˘꒳˘) "paste")}}
- {{domxwef("window")}}를 대상으로 한 같은 이벤트: {{domxwef("window/paste_event", (///ˬ///✿) "paste")}}
