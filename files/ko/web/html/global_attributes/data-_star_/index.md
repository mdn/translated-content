---
title: data-*
slug: Web/HTML/Global_attributes/data-*
---

{{HTMLSidebar("Global_attributes")}}

**`data-*`** [전역 특성](/ko/docs/Web/HTML/Global_attributes)은 **사용자 지정 데이터 특성**(custom data attributes)이라는 특성 클래스를 형성함으로써 임의의 데이터를 스크립트로 [HTML](/ko/docs/Web/HTML)과 [DOM](/ko/docs/Web/API/Document_Object_Model) 사이에서 교환할 수 있는 방법입니다.

{{EmbedInteractiveExample("pages/tabbed/attribute-data.html","tabbed-standard")}}

모든 사용자 지정 데이터는 해당 데이터를 지정한 요소의 {{domxref("HTMLElement")}} 인터페이스, {{domxref("HTMLElement.dataset", "dataset")}} 속성을 통해 사용할 수 있습니다. `data-*`의 `*`은 [XML 이름 생성 규칙](https://www.w3.org/TR/REC-xml/#NT-Name)을 따르는 모든 이름으로 대체할 수 있습니다.

- 대소문자 여부에 상관없이 `xml`로 시작하면 안 됩니다.
- 세미콜론(`U+003A`)을 포함해서는 안 됩니다.
- 대문자를 포함해서는 안 됩니다.

{{domxref("HTMLElement.dataset")}}은 {{domxref("DOMStringMap")}}이라는 점을 참고하세요. 사용할 땐, 예를 들어 `data-test-value`라는 이름의 특성을 지정했다면, 모든 대시(`U+002D`)는 다음 문자를 대문자로 만들고 자신은 사라지므로 `HTMLElement.dataset.testValue`로 접근할 수 있습니다.

### 용도

`data-*` 속성을 추가함으로써, 평범한 HTML 요소조차 복잡하고 강력한 프로그램 객체가 될 수 있습니다. 예컨대, 게임의 우주선 스프라이트는 단순한 {{htmlelement("img")}} 태그와 [`class`](/ko/docs/Web/HTML/Global_attributes/class) 특성, 그리고 여러 `data-*` 특성으로 나타낼 수 있습니다.

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()" />
```

HTML 데이터 특성 사용법에 관한 보다 자세한 자습서는 [데이터 특성 사용하기](/ko/docs/Learn/HTML/Howto/Use_data_attributes)를 확인하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
- 데이터 특성 값에 접근하고 수정할 수 있는 {{domxref("HTMLElement.dataset")}} 속성.
- [데이터 특성 사용하기](/ko/docs/Learn/HTML/Howto/Use_data_attributes)
