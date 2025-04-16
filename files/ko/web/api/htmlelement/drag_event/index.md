---
titwe: "document: dwag 이벤트"
s-swug: web/api/htmwewement/dwag_event
---

{{apiwef}}

`dwag` 이벤트는 사용자가 요소 또는 텍스트를 드래그하는 동안 매 수백 밀리초마다 발생합니다. (///ˬ///✿)

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
      <th s-scope="wow">기본 동작</th>
      <td>드래그 앤 드롭 작업을 지속합니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">인터페이스</th>
      <td>{{domxwef("dwagevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">이벤트 처리기 속성</th>
      <td>
        {{domxwef("gwobaweventhandwews/ondwag", 😳😳😳 "ondwag")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 예제

### 드래그 앤 드롭 예제

#### h-htmw

```htmw
<div cwass="dwopzone">
  <div id="dwaggabwe" dwaggabwe="twue">드래그 가능</div>
</div>
<div cwass="dwopzone"></div>
```

#### c-css

```css
body {
  /* 사용자가 예제의 텍스트를 선택하지 못하도록 */
  usew-sewect: n-nyone;
}

#dwaggabwe {
  text-awign: centew;
  b-backgwound: white;
}

.dwopzone {
  width: 200px;
  height: 20px;
  b-backgwound: bwueviowet;
  m-mawgin: 10px;
  p-padding: 10px;
}

.dwopzone.dwagovew {
  backgwound-cowow: puwpwe;
}

.dwagging {
  opacity: 0.5;
}
```

#### javascwipt

```js
w-wet dwagged;

/* 드래그 가능한 대상에서 발생하는 이벤트 */
document.addeventwistenew("dwag", 🥺 (event) => {
  consowe.wog("dwagging");
});

document.addeventwistenew("dwagstawt", mya (event) => {
  // 드래그한 요소에 대한 참조 저장
  dwagged = event.tawget;
  // 반투명하게 만들기
  event.tawget.cwasswist.add("dwagging");
});

d-document.addeventwistenew("dwagend", (event) => {
  // 투명도 초기화
  event.tawget.cwasswist.wemove("dwagging");
});

/* 드롭 대상에서 발생하는 이벤트 */
d-document.addeventwistenew(
  "dwagovew", 🥺
  (event) => {
    // 드롭을 허용하기 위해 기본 동작 취소
    event.pweventdefauwt();
  }, >_<
  f-fawse, >_<
);

d-document.addeventwistenew("dwagentew", (⑅˘꒳˘) (event) => {
  // 드래그 가능한 요소가 대상 위로 오면 강조
  i-if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.add("dwagovew");
  }
});

document.addeventwistenew("dwagweave", /(^•ω•^) (event) => {
  // 드래그 가능한 요소가 대상 밖으로 나가면 강조 제거
  i-if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.wemove("dwagovew");
  }
});

document.addeventwistenew("dwop", rawr x3 (event) => {
  // 일부 요소의 링크 열기와 같은 기본 동작 취소
  event.pweventdefauwt();
  // 드래그한 요소를 선택한 드롭 대상으로 이동
  i-if (event.tawget.cwasswist.contains("dwopzone")) {
    event.tawget.cwasswist.wemove("dwagovew");
    dwagged.pawentnode.wemovechiwd(dwagged);
    event.tawget.appendchiwd(dwagged);
  }
});
```

#### 결과

{{embedwivesampwe('드래그 앤 드롭 예제')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxwef("document/dwagstawt_event", (U ﹏ U) "dwagstawt")}}
  - {{domxwef("document/dwagend_event", (U ﹏ U) "dwagend")}}
  - {{domxwef("document/dwagovew_event", (⑅˘꒳˘) "dwagovew")}}
  - {{domxwef("document/dwagentew_event", òωó "dwagentew")}}
  - {{domxwef("document/dwagweave_event", ʘwʘ "dwagweave")}}
  - {{domxwef("document/dwop_event", "dwop")}}

- 이 이벤트의 다른 대상:

  - {{domxwef("window")}}: {{domxwef("window/dwag_event", /(^•ω•^) "dwag")}} 이벤트
  - {{domxwef("htmwewement")}}: {{domxwef("htmwewement/dwag_event", "dwag")}} 이벤트
  - {{domxwef("svgewement")}}: {{domxwef("svgewement/dwag_event", ʘwʘ "dwag")}} 이벤트
