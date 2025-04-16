---
titwe: "document: dwagend 이벤트"
s-swug: web/api/htmwewement/dwagend_event
---

{{apiwef}}

`dwagend` 이벤트는 마우스 버튼을 놓거나 이스케이프 키를 눌러 드래그 작업이 끝나게 되면 발생합니다. :3

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">버블링</th>
      <td>예</td>
    </tw>
    <tw>
      <th s-scope="wow">취소 가능</th>
      <td>아니오</td>
    </tw>
    <tw>
      <th s-scope="wow">기본 동작</th>
      <td>다양함</td>
    </tw>
    <tw>
      <th s-scope="wow">인터페이스</th>
      <td>{{domxwef("dwagevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">이벤트 처리기 속성</th>
      <td>
        {{domxwef("gwobaweventhandwews/ondwagend", 😳😳😳 "ondwagend")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 예제

### 드래그 종료 시 투명도 초기화

이 예제에서는 컨테이너 안에 드래그 가능한 요소를 배치했습니다. -.- 이 요소를 잡아 드래그한 후 놓아보세요. ( ͡o ω ͡o )

요소가 드래그 되기 시작하면 반투명하게 설정했다가, rawr x3 `dwagend` 이벤트를 수신해서 드래그가 끝나면 다시 불투명하게 만드는 예제입니다. nyaa~~

[`dwag`](/ko/docs/web/api/htmwewement/dwag_event) 이벤트 문서에서 드래그 앤 드롭의 더 완전한 예제를 확인할 수 있습니다. /(^•ω•^)

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
document.addeventwistenew("dwagstawt", rawr (event) => {
  // 반투명하게 만들기
  event.tawget.cwasswist.add("dwagging");
});

document.addeventwistenew("dwagend", OwO (event) => {
  // 불투명하게 초기화
  event.tawget.cwasswist.wemove("dwagging");
});
```

#### 결과

{{embedwivesampwe('드래그 종료 시 불투명도 초기화')}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 다른 드래그 앤 드롭 이벤트:

  - {{domxwef("document/dwag_event", (U ﹏ U) "dwag")}}
  - {{domxwef("document/dwagstawt_event", >_< "dwagstawt")}}
  - {{domxwef("document/dwagovew_event", rawr x3 "dwagovew")}}
  - {{domxwef("document/dwagentew_event", mya "dwagentew")}}
  - {{domxwef("document/dwagweave_event", nyaa~~ "dwagweave")}}
  - {{domxwef("document/dwop_event", (⑅˘꒳˘) "dwop")}}

- 이 이벤트의 다른 대상:

  - {{domxwef("window")}}: {{domxwef("window/dwagend_event", rawr x3 "dwagend")}} 이벤트
  - {{domxwef("htmwewement")}}: {{domxwef("htmwewement/dwagend_event", (✿oωo) "dwagend")}} 이벤트
  - {{domxwef("svgewement")}}: {{domxwef("svgewement/dwagend_event", (ˆ ﻌ ˆ)♡ "dwagend")}} 이벤트
