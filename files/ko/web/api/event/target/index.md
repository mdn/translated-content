---
title: Event.target
slug: Web/API/Event/target
---

{{ApiRef("DOM")}}

{{domxref("Event")}} 인터페이스의 **`target`** 속성은 이벤트가 발생한 대상 객체를 가리킵니다. 버블링과 캡처링 단계에서는 {{domxref("Event.currentTarget")}}과 다를 수 있습니다.

### 값

연관된 {{domxref("EventTarget")}}.

## 예제

`event.target` 속성을 사용하여 **이벤트 위임**을 구현할 수 있습니다.

```js
// 목록 생성
const ul = document.createElement("ul");
document.body.appendChild(ul);

const li1 = document.createElement("li");
const li2 = document.createElement("li");
ul.appendChild(li1);
ul.appendChild(li2);

function hide(evt) {
  // e.target은 사용자가 클릭한 <li> 요소를 가리킴
  // 여기서 e.currentTarget은 부모인 <ul>을 가리킬 것
  evt.target.style.visibility = "hidden";
}

// 목록에 수신기 부착
// 각각의 <li>를 클릭할 때 호출됨
ul.addEventListener("click", hide, false);
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [이벤트 대상의 비교](/ko/docs/Web/API/Event/Comparison_of_Event_Targets)
