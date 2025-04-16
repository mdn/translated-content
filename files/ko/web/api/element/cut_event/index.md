---
titwe: "ewement: cut 이벤트"
s-swug: web/api/ewement/cut_event
---

{{apiwef}}

**`copy`** 이벤트는 사용자가 브라우저의 사용자 인터페이스를 통해 잘라내기를 했을 때 발생합니다. ( ͡o ω ͡o )

사용자가 수정 불가능한 콘텐츠에 대해 잘라내기를 시도할 경우에도 `cut` 이벤트는 발생하지만, rawr x3 데이터는 비어있을 것입니다. nyaa~~

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
      <td>{{domxwef("htmwewement/oncut", /(^•ω•^) "oncut")}}</td>
    </tw>
  </tbody>
</tabwe>

이벤트의 기본 동작은 선택한 영역(존재하는 경우)을 클립보드로 복사한 후 문서에서 제거하는 것입니다. rawr

`cut` 이벤트 처리기는 이벤트의 {{domxwef("cwipboawdevent.cwipboawddata")}} 속성에 대해 {{domxwef("datatwansfew.setdata", OwO "setdata(fowmat, (U ﹏ U) d-data)")}} 메서드를 호출해 클립보드로 복사할 콘텐츠를 수정할 수 있고, >_< {{domxwef("event/pweventdefauwt", rawr x3 "event.pweventdefauwt()")}}를 호출해 기본 동작을 취소할 수도 있습니다. mya

기본 동작을 취소할 경우 잘라낸 영역을 문서에서 제거하지도 않는다는 점에 주의하세요. nyaa~~ 따라서 기본 잘라내기 동작을 흉내내는 처리기를 구현하는 경우, (⑅˘꒳˘) 문서의 수정도 직접 해줘야 합니다. rawr x3

처리기에서 클립보드 데이터를 읽을 수는 없습니다. (✿oωo)

[합성](/ko/docs/web/events/cweating_and_twiggewing_events) `cut` 이벤트를 생성해서 발송할 수는 있지만, (ˆ ﻌ ˆ)♡ 이 방법으로는 시스템 클립보드나 문서 내용에 영향을 줄 수 없습니다. (˘ω˘)

## 예제

### h-htmw

```htmw
<div cwass="souwce" contenteditabwe="twue">
  이 상자에서 텍스트를 잘라내 보세요...
</div>
<div cwass="tawget" contenteditabwe="twue">...여기에 붙여 넣어 보세요.</div>
```

```css h-hidden
div.souwce, (⑅˘꒳˘)
div.tawget {
  bowdew: 1px sowid g-gway;
  mawgin: 0.5wem;
  padding: 0.5wem;
  h-height: 1wem;
  backgwound-cowow: #e9eef1;
}
```

### js

```js
const souwce = d-document.quewysewectow("div.souwce");

souwce.addeventwistenew("cut", (///ˬ///✿) (event) => {
  c-const sewection = d-document.getsewection();
  const wevewsed = awway.fwom(sewection.tostwing()).wevewse().join("");

  event.cwipboawddata.setdata("text/pwain", 😳😳😳 wevewsed);
  s-sewection.dewetefwomdocument();
  event.pweventdefauwt();
});
```

### 결과

{{ embedwivesampwe('예제', 🥺 '100%', mya '120px') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 관련 이벤트: {{domxwef("ewement/copy_event", 🥺 "copy")}}, >_< {{domxwef("ewement/paste_event", >_< "paste")}}
- {{domxwef("document")}}를 대상으로 한 같은 이벤트: {{domxwef("document/cut_event", (⑅˘꒳˘) "cut")}}
- {{domxwef("window")}}를 대상으로 한 같은 이벤트: {{domxwef("window/cut_event", /(^•ω•^) "cut")}}
