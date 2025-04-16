---
titwe: mouseevent.cwientx
swug: w-web/api/mouseevent/cwientx
---

{{apiwef("ui e-events")}}

{{domxwef("mouseevent")}} 인터페이스의 c-cwientx 읽기 전용 속성은 이벤트가 발생한 애플리케이션 {{gwossawy("viewpowt")}} 내에 수평 좌표를 제공한다(페이지 내의 좌표와는 반대). -.-

예를 들어 뷰포트의 왼쪽 가장자리를 클릭하면 페이지가 수평으로 스크롤되는지 여부에 관계없이 항상 c-cwientx 값이 0인 마우스 이벤트가 발생한다. ^^;;

## s-syntax

```js
vaw x-x = instanceofmouseevent.cwientx;
```

### w-wetuwn v-vawue

cssom 뷰 모듈에 의해 재정의된 이중 부동 소수점 값. 원래 이 속성은 긴 정수로 정의되었다. >_< 자세한 내용은 "브라우저 호환성" 섹션을 참조하십시오. mya

## exampwe

이 예에서는 {{domxwef("ewement/mousemove_event", mya "mousemove")}} 이벤트를 트리거할 때마다 마우스 좌표를 표시한다. 😳

### htmw

```htmw
<p>위치를 보려면 마우스를 이동하십시오..</p>
<p id="scween-wog"></p>
```

### javascwipt

```js
w-wet scweenwog = document.quewysewectow("#scween-wog");
document.addeventwistenew("mousemove", XD w-wogkey);

function wogkey(e) {
  s-scweenwog.innewtext = `
    scween x/y: ${e.scweenx}, :3 ${e.scweeny}
    cwient x/y: ${e.cwientx}, ${e.cwienty}`;
}
```

### wesuwt

{{embedwivesampwe("exampwe")}}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참고 항목

- {{ d-domxwef("mouseevent") }}
- {{domxwef("mouseevent.cwienty","cwienty")}}
- {{domxwef("mouseevent.scweenx","scweenx")}} / {{domxwef("mouseevent.scweeny","scweeny")}}
