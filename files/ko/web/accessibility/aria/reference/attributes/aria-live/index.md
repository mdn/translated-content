---
title: aria-live
slug: Web/Accessibility/ARIA/Reference/Attributes/aria-live
original_slug: Web/Accessibility/ARIA/Attributes/aria-live
---

전역 `aria-live` 속성은 요소가 업데이트될 것을 가리키며, 사용자 에이전트, 접근성 기술, 그리고 활성화된 영역에서 사용자가 기대하는 업데이트의 타입을 나타냅니다. 

## 설명

처음 로드된 이후 콘텐츠가 바뀔 때, 접근성 기술 사용자는 바뀐 점을 "알아차리지" 못할 수도 있습니다. 어떤 업데이트는 중요하지만, 어떤 것은 그렇지 않습니다. `aria-live` 속성은 개발자로 하여금 사용자에게 업데이트 정보를 제공하고, 접근성 기술 사용자에게 콘텐츠의 변화를 그 중요도와 긴급도에 따라 즉각적, 능동적, 또는 수동적으로 선택할 수 있도록 해줍니다.

화면의 특정 영역의 스타일링이 눈에 띄는 방식으로 업데이트된다면, 시각을 활용하는 대부분의 사용자는 보통 실시간 업데이트를 알아차립니다. 하지만 스크린 리더의 경우에는 한 번에 페이지의 한 부분에만 포커스됩니다. 그리고 그 영역은 업데이트가 발생한 곳이 아닐 수 있습니다. `aria-live` 속성을 사용하여 이러한 변화들을 사용자가 시작한 이벤트가 아닌 개발자가 설정한 이벤트 트리거에 기반하여 콘텐츠의 변화를 알아차릴 수 있도록 접근성 기술에 반영하는 방법을 제공합니다.

```html
<div id="announce" aria-live="polite"></div>
```

`aria-live` 속성은 **비어 있는** 요소에 설정됩니다. 페이지에 업데이트가 발생하면, 해당 `aria-live` 속성을 포함한 빈 요소는 사용자에게 업데이트가 발생했다는 짧은 메시지를 제공하며 업데이트되어야 합니다.

```html
<div id="announce" aria-live="polite">
  <p>This message is announced.</p>
</div>
```

접근성 API가 현재 라이브 요소에 변화가 발생했다는 것을 알게 되면, 속성 값에 기반하여 해당  라이브 영역의 콘텐츠에 업데이트를 알립니다. 이때 해당 요소는 포커스를 받지 **않습니다**.

라이브 영역의 모든 콘텐츠가 읽히길 원한다면, [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)을 사용하세요. 업데이트가 발생한 몇몇 영역만 사용자에게 다시 읽어주고 싶다면 [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)을 사용하세요. 업데이트가 진행되는 동안 알림을 방지하고 싶다면 [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)를 사용하세요.


### `aria-live` 선택하기

몇몇 접근성 기술 사용자는 실시간 업데이트를 "알아차리지 못하기" 때문에, 업데이트된 정보를 정의하기 위해 `aria-live` 속성을 사용하여 다음을 정의합니다.

- 즉시 알림
- 가능한 경우 알림을 제공
- 능동적으로 정보를 제공하지만 업데이트된 영역에 포커스할 지 여부는 직접 결정

`aria-live`의 값은 사용자 에이전트, 보조 기술, 그리고 사용자가 라이브 영역에서 어떤 종류의 업데이트를 기대할 수 있는지를 설명하며, 동시에 그 중요도의 정도를 표현하는 데 사용됩니다.

`aria-live`를 `polite`로 설정하면, 접근성 기술들은 사용자에게 업데이트를 알리지만, 일반적으로 업데이트를 낮은 순위로 처리하여 현재 작업을 방해하지 않습니다. `aria-live`를 `assertive`로 설정하면, 접근성 기술은 사용자에게 즉시 업데이트를 알리며, 이 과정에서 기존 업데이트 음성 출력 대기 큐를 지워버릴 수도 있습니다. 

스크린 리더는 페이지가 로드될 때 콘텐츠를 버퍼(임시 저장)합니다. 이 때문에, 초기 접근성 트리가 만들어진 이후에 추가된 콘텐츠는 접근성 기술 사용자가 알아차리지 못할 수 있습니다. 다이내믹 위젯이 생성되기 전에 콘텐츠를 받아보기 때문입니다. 즉 사용자는 페이지나 화면 뷰에서 위젯이 로딩 완료되며 업데이트되는 내용을 알지 못할 수 있습니다. 이런 상황에서는 `aria-live="polite"`를 설정하여 사용자에게 페이지가 업데이트되었음을 알릴 수 있습니다.

완전히 로드된 페이지들도 업데이트가 발생할 수 있다. 실시간 스포츠 중계 점수, 뉴스 크롤러, 주식 티커 등이 그 예시다. 이러한 업데이트들이 페이지의 주요 기능이 아니라면, 업데이트가 발생할 때마다 사용자에게 알리는 것은 바람직하지 않을 수 있습니다. 다만 해당 위젯이 업데이트되었다는 사실은 사용자가 알 수 있어야 합니다. 이때 `aria-live="off"`를 설정할 수 있습니다. 이 경우 사용자가 라이브 영역에 포커스를 두었을 때만 업데이트를 확인할 수 있고, 그렇지 않은 경우에는 굳이 업데이트를 알릴 필요가 없습니다.

어떤 실시간 업데이트는 중요하고 시간에 민감합니다. 예를 들어, 콘서트 티켓을 판매하는 상황에서 사용자가 제한된 시간 내에 구매해야 한다면, 사용자에게 시간이 거의 끝났다(혹은 이미 지났다)는 사실을 사용자 활동이 잠시 멈출 때까지 기다렸다가 알려주는 것은 바람직하지 않습니다. 이처럼 즉시 알림을 받아야 하는 상황에서는, `aria-live="assertive"`를 사용할 수 있습니다. 업데이트된 정보가 [`alert`](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role) 요소라면, `aria-live` 속성은 별도로 필요하지 않습니다.

이런 시간이 제한된 경우에서, 접근성을 위해 [사용자에게 남은 시간을 연장하거나 아예 타이머를 끌 수 있는 방법](https://www.w3.org/WAI/WCAG21/Understanding/timing-adjustable.html) 또한 제공해야 합니다.

### `aria-live`의 사용

라이브 영역은 해당 요소와 그 모든 자식 요소들을 포함합니다. 업데이트되는 콘텐츠에 `aria-live`가 적용되지 않았다면, `aria-live` 값은 가장 가까운 부모 요소에서 유효한 `aria-live` 속성값을 찾습니다. `aria-live`가 `off`로 설정되었거나, 업데이트되는 요소와 DOM 트리의 모든 부모 요소에서 빠져있다면, 사용자는 알림을 받지 못합니다. 하지만 사용자가 라이브 영역으로 직접 포커스를 이동한다면 여전히 업데이트를 받을 수 있습니다.

> [!WARNING]
> 인터럽션(interruption)이 사용자를 헷갈리게 하거나 현재 수행 중인 작업을 완료하지 못하게 할 수 있습니다. 따라서 인터럽션(interruption)이 불가피한 경우에만 `assertive` 요소를 사용해야 합니다.

## Values

- `assertive`
  - 해당 영역의 업데이트가 가장 높은 우선순위임을 나타내며, 사용자에게 즉시 전달되어야 합니다.
- `off` (기본값)
  - 해당 영역의 업데이트는 사용자가 현재 그 영역에 포커스를 두었을 때만 전달됩니다.
- `polite`
  - 해당 영역의 업데이트는 사용자가 현재 작업을 방해받지 않는 시점에 전달됩니다. (예: 현재 문장을 다 읽은 후, 사용자가 입력을 잠시 멈췄을 때 등 자연스러운 타이밍에 알림)

## Associated interfaces

- {{domxref("Element.ariaLive")}}
  - {{domxref("Element")}} 인터페이스의 일부인 [`ariaLive`](/en-US/docs/Web/API/Element/ariaLive) 속성은 `aria-live` 속성의 값을 반영합니다.
- {{domxref("ElementInternals.ariaLive")}}
  - {{domxref("ElementInternals")}} 인터페이스의 일부인 [`ariaLive`](/en-US/docs/Web/API/ElementInternals/ariaLive) 속성은 `aria-live` 속성의 값을 반영합니다.

## 관련 역할

**모든** 역할에 사용됩니다.

## 명세

{{Specifications}}

## 같이 보기

- [`aria-atomic`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-atomic)
- [`aria-relevant`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-relevant)
- [`aria-busy`](/en-US/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-busy)
- [`alert` role](/en-US/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role)
