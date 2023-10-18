---
title: 웹 컴포넌트
slug: Web/API/Web_components
---

{{DefaultAPISidebar("Web Components")}}

웹 컴포넌트는 그 기능을 나머지 코드로부터 캡슐화하여 재사용 가능한 커스텀 엘리먼트를 생성하고 웹 앱에서 활용할 수 있도록 해주는 다양한 기술들의 모음입니다.

## 개념 및 사용

개발자로서 우리 모두는 가능한 한 코드를 재사용하는 것이 좋은 생각이라는 것을 알고 있습니다. 이는 전통적으로 커스텀 마크업 구조에선 쉽지 않았습니다. 커스텀 UI 컨트롤을 렌더링하기위해 작성해야하는 복잡한 HTML (및 관련된 스타일과 스크립트)을 생각해보십시오. 여러번 사용할 때 조심하지 않으면 페이지가 엉망이 될 수 있습니다.

웹 컴포넌트는 다음 문제들을 해결하는 것을 목표로 합니다 — 세 가지 주요 기술들로 구성되며, 재사용을 원하는 어느곳이든 코드 충돌에 대한 걱정이 없는 캡슐화된 기능을 갖춘 다용도의 커스텀 엘리먼트를 생성하기 위해 함께 사용될 수 있습니다.

**커스텀 엘리먼트**: 커스텀 엘리먼트와 그 동작을 정의할 수 있도록 해주는 JavaScript API 의 집합으로, 사용자 인터페이스에서 원했던대로 사용될 수 있습니다.

- **Custom elements**: 사용자 인터페이스에서 원하는대로 사용할 수있는 사용자 정의 요소 및 해당 동작을 정의 할 수있는 JavaScript API 세트입니다.
- **Shadow DOM**: 캡슐화된 "그림자" DOM 트리를 엘리먼트 — 메인 다큐먼트 DOM 으로부터 독립적으로 렌더링 되는 — 를 추가하고 연관된 기능을 제어하기 위한 JavaScript API 의 집합. 이 방법으로 엘리먼트의 기능을 프라이빗하게 유지할 수 있어, 다큐먼트의 다른 부분과의 충돌에 대한 걱정 없이 스크립트와 스타일을 작성할 수 있습니다.
- **HTML 템플릿**: {{HTMLElement("template")}} 과 {{HTMLElement("slot")}} 엘리먼트는 렌더링된 페이지에 나타나지 않는 마크업 템플릿을 작성할 수 있게 해줍니다. 그 후, 커스텀 엘리먼트의 구조를 기반으로 여러번 재사용할 수 있습니다.

웹 컴포넌트를 구현하기 위한 기본 접근법은 일반적으로 다음과 같습니다.

1. ECMAScript 2015 클래스 문법(자세한 내용은 [Classes](/ko/docs/Web/JavaScript/Reference/Classes)에서 확인)을 사용해 웹 컴포넌트 기능을 명시하는 클래스를 생성합니다.
2. {{domxref("CustomElementRegistry.define()")}} 메소드를 사용해 새로운 커스텀 엘리먼트를 등록하고, 정의할 엘리먼트 이름, 기능을 명시하고 있는 클래스, (선택적으로) 상속받은 엘리먼트를 전달합니다.
3. 필요한 경우, {{domxref("Element.attachShadow()")}} 메소드를 사용해 shadow DOM 을 커스텀 엘리먼트에 추가합니다. 일반적인 DOM 메소드를 사용해 자식 엘리먼트, 이벤트 리스너 등을 shadow DOM 에 추가합니다.
4. 필요한 경우, {{htmlelement("template")}} 과 {{htmlelement("slot")}} 을 사용해 HTML 템플릿을 정의합니다. 다시 일반적인 DOM 메소드를 사용해 템플릿을 클론하고 shadow DOM 에 추가합니다.
5. 일반적인 HTML 엘리먼트처럼, 페이지의 원하는 어느곳이든 커스텀 엘리먼트를 사용할 수 있습니다.

## 튜토리얼

- [커스텀 엘리먼트 사용하기](/ko/docs/Web/Web_Components/Using_custom_elements)
  - : 간단한 웹 컴포넌트를 생성하는 커스텀 엘리먼트의 기능을 사용하는 방법과 라이프사이클 콜백 및 그 외 고급 기능들을 보여주는 가이드입니다.
- [shadow DOM 사용하기](/ko/docs/Web/Web_Components/Using_shadow_DOM)
  - : shadow DOM 기본을 살펴보고, shadow DOM 을 엘리먼트에 추가하고, shadow DOM 트리를 추가하고 스타일링하는 방법 등을 보여주는 가이드입니다.
- [템플릿과 슬롯 사용하기](/ko/docs/Web/Web_Components/Using_templates_and_slots)
  - : {{htmlelement("template")}} 과 {{htmlelement("slot")}} 엘리먼트를 사용해 재사용가능한 HTML 구조를 정의하는 방법과 웹 컴포넌트 내에서 그 구조를 사용하는 방법을 보여주는 가이드입니다.

## 레퍼런스

### 커스텀 엘리먼트

- {{domxref("CustomElementRegistry")}}
  - : 커스텀 엘리먼트와 관련된 기능을 포함하며, 새로운 커스텀 엘리먼트를 등록하여 다큐먼트에서 사용할 수 있도록 해주는 {{domxref("CustomElementRegistry.define()")}} 메소드가 가장 주요합니다.
- {{domxref("Window.customElements")}}
  - : `CustomElementRegistry` 객체에 대한 참조를 반환합니다.
- [라이프 사이클 콜백](/ko/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

  - : 커스텀 엘리먼트의 클래스 정의 내에 정의되어 동작에 영향을 주는 특별한 콜백 함수입니다.

    - `connectedCallback`: 커스텀 엘리먼트가 처음으로 다큐먼트의 DOM 에 연결되었을 때 호출됩니다.
    - `disconnectedCallback`: 커스텀 엘리먼트가 다큐먼트의 DOM 으로부터 연결 해제되었을 때 호출됩니다.
    - `adoptedCallback`: 커스텀 엘리먼트가 새로운 다큐먼트로 이동되었을 때 호출됩니다.
    - `attributeChangedCallback`: 커스텀 엘리먼트의 어트리뷰트가 추가, 제거 또는 변경되었을 때 호출됩니다.

- 커스텀 내장 엘리먼트 생성을 위한 확장 기능

  - : The following extensions are defined:

    - [`is`](/ko/docs/Web/HTML/Global_attributes#is) 전역 HTML 어트리뷰트: 표준 HTML 엘리먼트가 등록된 커스텀 내장 엘리먼트처럼 동작하도록 지정을 허용합니다.
    - {{domxref("Document.createElement()")}} 메소드의 "is" 옵션: 주어진 등록된 커스텀 내장 엘리먼트처럼 동작하는 표준 HTML 엘리먼트의 인스턴스를 생성하는 것을 허용합니다.

- CSS 수도(pseudo) 클래스

  - : 커스텀 엘리먼트에 관련된 수도 클래스입니다.

    - {{cssxref(":defined")}}: 내장 엘리먼트와 `CustomElementRegistry.define()` 으로 정의된 커스텀 엘리먼트를 포함해, 정의된 모든 엘리먼트와 일치합니다.
    - {{cssxref(":host")}}: 대상 CSS 를 내부에 포함하고 있는 [shadow DOM](/ko/docs/Web/Web_Components/Using_shadow_DOM) 의 shadow 호스트를 선택합니다.
    - {{cssxref(":host()")}}: 대상 CSS 를 내부에 포함하고 있는 [shadow DOM](/ko/docs/Web/Web_Components/Using_shadow_DOM) 의 shadow 호스트를 선택합니다(따라서 shadow DOM 내부에서 커스텀 엘리먼트를 선택할 수 있습니다) — 함수의 파라미터로써 주어진 셀렉터가 shadow 호스트에 일치하는 경우에만 해당합니다.
    - {{cssxref(":host-context()")}}: 대상 CSS 를 내부에 포함하고 있는 [shadow DOM](/ko/docs/Web/Web_Components/Using_shadow_DOM) 의 shadow 호스트를 선택합니다(따라서 shadow DOM 내부에서 커스텀 엘리먼트를 선택할 수 있습니다) — 함수의 파라미터로써 주어진 셀렉터가 DOM 계층 내에 위치한 shadow 호스트의 조상에 일치하는 경우에만 해당합니다.

### Shadow DOM

- {{domxref("ShadowRoot")}}
  - : shadow DOM 하위 트리의 루트 노드를 나타냅니다.
- {{domxref("DocumentOrShadowRoot")}}
  - : 다큐먼트와 shadow 루트 모두에서 사용가능한 기능을 정의하는 믹스인
- {{domxref("Element")}} 확장 기능

  - : shadow DOM 에 관련된 `Element` 인터페이스의 확장 기능입니다.

    - {{domxref("Element.attachShadow()")}} 메소드는 shadow DOM 트리를 지정된 엘리먼트에 추가합니다.
    - {{domxref("Element.shadowRoot")}} 프로퍼티는 지정된 엘리먼트에 추가된 shadow 루트를 반환합니다. 추가된 shadow 루트가 없을 경우 `null` 을 반환합니다.

- {{domxref("Node")}} 추가 관련

  - : shadow DOM 과 관련된 `Node` 인터페이스에 추가

    - {{domxref("Node.getRootNode()")}} 메소드는 사용 가능한 shadow 루트가 있을 경우 선택적으로 이를 포함하는 컨텍스트의 객체의 루트를 반환합니다.
    - {{domxref("Node.isConnected")}} 프로퍼티는 노드가 직접 또는 간접적으로 컨텍스트 객체(예를 들면, 일반 DOM 의 경우 {{domxref("Document")}} 객체, shadow DOM 의 경우 {{domxref("ShadowRoot")}})에 연결되었는지를 나타내는 boolean 을 반환합니다.

- {{domxref("Event")}} 확장 기능

  - : shadow DOM 과 관련된 `Event` 인터페이스의 확장 기능

    - {{domxref("Event.composed")}}: 이벤트가 shadow DOM 영역을 거쳐 일반 DOM 으로 전파 되는지를 나타내는 {{jsxref("Boolean")}} 을 반환합니다(전파되면 `true`, 그렇지 않으면 `false`)
    - {{domxref("Event.composedPath")}}: 이벤트의 패스(이벤트가 호출될 객체)를 반환합니다. shadow 루트가 {{domxref("ShadowRoot.mode")}} closed 로 생성된경우 shadow 트리의 노드를 포함하지 않습니다.

### HTML 템플릿

- {{htmlelement("template")}}
  - : 다큐먼트가 처음 로드될 때 렌더링되지 않지만 JavaScript를 사용하는 런타임에 나타나는 HTML 조각을 포함합니다. 주로 커스텀 엘리먼트 구조의 기본으로 사용됩니다. 관련된 DOM 인터페이스로 {{domxref("HTMLTemplateElement")}} 가 있습니다.
- {{htmlelement("slot")}}
  - : 자신만의 마크업으로 채울 수 있는 웹 컴포넌트 내부의 placeholder 입니다. 별도의 DOM 트리로 생성하고 함께 보여줄 수 있게 해줍니다. 관련된 DOM 인터페이스로 {{domxref("HTMLSlotElement")}} 가 있습니다.
- [`slot`](/ko/docs/Web/HTML/Global_attributes/slot) 전역 HTML 어트리뷰트
  - : shadow DOM shadow 트리내의 slot을 엘리먼트로 할당합니다.
- {{domxref("Slotable")}}

  - : {{domxref("Element")}} 와 {{domxref("Text")}} 노드로 구현된 믹스인입니다. {{htmlelement("slot")}} 엘리먼트의 컨텐츠로 만들기 위한 기능들을 정의합니다. 믹스인은 노드가 삽입된 슬롯의 참조를 반환하는 하나의 어트리뷰트 {{domxref("Slotable.assignedSlot")}} 을 정의합니다.

- {{domxref("Element")}} 확장 기능

  - : 슬롯과 관련된 `Element` 인터페이스 확장 기능

    - {{domxref("Element.slot")}}: 엘리먼트에 추가된 shadow DOM 슬롯의 이름을 반환합니다.

- CSS 수도(pseudo) 엘리먼트

  - : 슬롯과 관련된 수도 엘리먼트입니다.

    - {{cssxref("::slotted")}}: 슬롯으로 삽입된 모든 컨텐츠와 일치합니다.

- {{event("slotchange")}} 이벤트
  - : 슬롯에 포함된 노드가 변경될 때 {{domxref("HTMLSlotElement")}} 인스턴스({{htmlelement("slot")}} 엘리먼트)에서 실행됩니다.

## 예제

[web-components-examples](https://github.com/mdn/web-components-examples) GitHub 저장소에 많은 예제를 생성하였습니다. 더 많은 예제가 추가될 예정입니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

일반적인 경우,

- 웹 컴포넌트는 기본적으로 Firefox (버전 63), Chrome, 및 Opera 에서 지원됩니다.
- Safari 는 많은 웹 컴포넌트 기능을 지원하지만 위 브라우저들만큼은 아닙니다.
- Edge 는 구현 작업중입니다.

특정 기능들의 브라우저 지원에 대한 상세 내용은, 위에 나열된 레퍼런스 페이지들에서 찾아보시기 바랍니다.

## 함께 보기

- [webcomponents.org](https://www.webcomponents.org/) — 웹 컴포넌트 예제, 튜토리얼 등의 정보를 포함하는 사이트.
- [Hybrids](https://github.com/hybridsjs/hybrids) — 오픈 소스 웹 컴포넌트 라이브러리. `class` 와 this 문법보다 일반 객체와 순수 함수를 선호합니다. 커스텀 엘리먼트 생성을 위한 간단한 함수형 API 를 제공합니다.
- [Polymer](https://www.polymer-project.org/) — 구글의 웹 컴포넌트 프레임워크 — 폴리필, 확장 및 예제의 집합. 현재 크로스 브라우징 웹 컴포넌트를 사용하는 가장 쉬운 방법.
- [Snuggsi.es](https://github.com/devpunks/snuggsi#readme) — 폴리필 포함 \~1kB 크기의 쉬운 웹 컴포넌트 — 브라우저와 HTML, CSS, JavaScript 클래스에 대한 기본 이해만으로 생산성을 높일 수 있습니다.
- [Slim.js](https://github.com/slimjs/slim.js) — 오픈 소스 웹 컴포넌트 라이브러리 — 빠르고 쉬운 컴포넌트 작성을 위한 고성능 라이브러리; 확장 가능하며 플러거블하고 크로스 프레임워크와 호환됩니다.
