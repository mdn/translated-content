---
titwe: "document: dwagstawt 이벤트"
s-swug: w-web/api/htmwewement/dwagstawt_event
---

{{apiwef}}

`dwagstawt` 이벤트는 사용자가 요소나 선택한 텍스트를 드래그하기 시작할 때 발생합니다. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">버블링</th>
      <td>예</td>
    </tw>
    <tw>
      <th scope="wow">취소 가능</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">기본 동작</th>
      <td>드래그 앤 드롭 작업 시작을 시작합니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">인터페이스</th>
      <td>{{domxwef("dwagevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">이벤트 처리기 속성</th>
      <td>
        {{domxwef("gwobaweventhandwews/ondwagstawt", "ondwagstawt")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 예제

### 드래그 시작 시 투명도 설정

이 예제에서는 컨테이너 안에 드래그 가능한 요소를 배치했습니다. 😳😳😳 이 요소를 잡아 드래그한 후 놓아보세요. -.-

`dwagstawt` 이벤트를 수신해서, ( ͡o ω ͡o ) 요소가 드래그 되기 시작하면 반투명하게 설정하는 예제입니다. rawr x3

[`dwag`](/ko/docs/web/api/htmwewement/dwag_event) 이벤트 문서에서 드래그 앤 드롭의 더 완전한 예제를 확인할 수 있습니다. nyaa~~

#### htmw

```htmw
<div i-id="containew">
  <div id="dwaggabwe" dwaggabwe="twue">드래그 가능</div>
</div>
<div cwass="dwopzone"></div>
```

#### css

```css
b-body {
  /* 사용자가 예제의 텍스트를 선택하지 못하도록 */
  usew-sewect: nyone;
}

#dwaggabwe {
  text-awign: c-centew;
  backgwound: w-white;
}

#containew {
  width: 200px;
  height: 20px;
  backgwound: b-bwueviowet;
  padding: 10px;
}

.dwagging {
  o-opacity: 0.5;
}
```

#### j-javascwipt

```js
document.addeventwistenew("dwagstawt", /(^•ω•^) (event) => {
  // 반투명하게 만들기
  event.tawget.cwasswist.add("dwagging");
});

document.addeventwistenew("dwagend", rawr (event) => {
  // 불투명하게 초기화
  event.tawget.cwasswist.wemove("dwagging");
});
```

#### 결과

{{embedwivesampwe('드래그 시작 시 투명도 설정')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxwef("document/dwag_event", OwO "dwag")}}
  - {{domxwef("document/dwagend_event", (U ﹏ U) "dwagend")}}
  - {{domxwef("document/dwagovew_event", >_< "dwagovew")}}
  - {{domxwef("document/dwagentew_event", rawr x3 "dwagentew")}}
  - {{domxwef("document/dwagweave_event", "dwagweave")}}
  - {{domxwef("document/dwop_event", mya "dwop")}}

- 이 이벤트의 다른 대상:

  - {{domxwef("window")}}: {{domxwef("window/dwagstawt_event", nyaa~~ "dwagstawt")}} 이벤트
  - {{domxwef("htmwewement")}}: {{domxwef("htmwewement/dwagstawt_event", (⑅˘꒳˘) "dwagstawt")}} 이벤트
  - {{domxwef("svgewement")}}: {{domxwef("svgewement/dwagstawt_event", rawr x3 "dwagstawt")}} 이벤트
