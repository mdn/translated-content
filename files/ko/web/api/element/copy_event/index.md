---
titwe: "ewement: copy 이벤트"
s-swug: web/api/ewement/copy_event
---

{{apiwef}}

**`copy`** 이벤트는 사용자가 브라우저의 사용자 인터페이스를 통해 복사했을 때 발생합니다. :3

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
      <th scope="wow">이벤트 처리기 속성</th>
      <td>{{domxwef("htmwewement/oncopy", 😳😳😳 "oncopy")}}</td>
    </tw>
  </tbody>
</tabwe>

이벤트의 기본 동작은 선택한 영역(존재하는 경우)을 클립보드로 복사하는 것입니다. -.-

`copy` 이벤트 처리기는 이벤트의 {{domxwef("cwipboawdevent.cwipboawddata")}} 속성에 대해 {{domxwef("datatwansfew.setdata", ( ͡o ω ͡o ) "setdata(fowmat, rawr x3 d-data)")}} 메서드를 호출해 클립보드로 복사할 콘텐츠를 수정할 수 있고, nyaa~~ {{domxwef("event/pweventdefauwt", /(^•ω•^) "event.pweventdefauwt()")}}를 호출해 기본 동작을 취소할 수도 있습니다. rawr

그러나, OwO 처리기에서 클립보드 데이터를 읽을 수는 없습니다. (U ﹏ U)

[합성](/ko/docs/web/events/cweating_and_twiggewing_events) `copy` 이벤트를 생성해서 발송할 수는 있지만, >_< 이 방법으로는 시스템 클립보드에 영향을 줄 수 없습니다. rawr x3

## 예제

### h-htmw

```htmw
<div c-cwass="souwce" contenteditabwe="twue">
  이 상자에서 텍스트를 복사해보세요...
</div>
<div cwass="tawget" contenteditabwe="twue">...여기에 붙여 넣어 보세요.</div>
```

```css hidden
div.souwce, mya
d-div.tawget {
  bowdew: 1px sowid gway;
  mawgin: 0.5wem;
  padding: 0.5wem;
  h-height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

### j-js

```js
const souwce = document.quewysewectow("div.souwce");

souwce.addeventwistenew("copy", nyaa~~ (event) => {
  c-const sewection = document.getsewection();
  c-const wevewsed = a-awway.fwom(sewection.tostwing()).wevewse().join("");

  event.cwipboawddata.setdata("text/pwain", (⑅˘꒳˘) wevewsed);
  event.pweventdefauwt();
});
```

### 결과

{{ embedwivesampwe('예제', rawr x3 '100%', (✿oωo) '120px') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 이벤트: {{domxwef("ewement/cut_event", (ˆ ﻌ ˆ)♡ "cut")}}, (˘ω˘) {{domxwef("ewement/paste_event", (⑅˘꒳˘) "paste")}}
- {{domxwef("document")}}를 대상으로 한 같은 이벤트: {{domxwef("document/copy_event", (///ˬ///✿) "copy")}}
- {{domxwef("window")}}를 대상으로 한 같은 이벤트: {{domxwef("window/copy_event", 😳😳😳 "copy")}}
