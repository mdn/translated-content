---
title: DocumentFragment
slug: Web/API/DocumentFragment
---

{{ APIRef("DOM") }}

**`DocumentFragment`** 인터페이스는 아주 작고 부모를 갖지 않는 문서 객체를 나타냅니다.

`DocumentFragment`는 일반 문서처럼 노드로 구성된 문서 구조를 저장할 수 있으므로 {{domxref("Document")}}의 가벼운 버전으로 사용됩니다. `Document`와의 중요한 차이점으로, `DocumentFragment`는 활성화된 문서 트리 구조의 일부가 아니기 때문에 내부의 트리를 변경해도 문서나 성능에 아무 영향도 주지 않으며 {{glossary("reflow", "리플로우")}}도 방지할 수 있습니다.

{{InheritanceDiagram}}

## 생성자

- {{ domxref("DocumentFragment.DocumentFragment()", "DocumentFragment()") }}
  - : 새로운 `DocumentFragment` 객체를 생성하여 반환합니다.

## 속성

부모인 {{domxref("Node")}}의 속성을 상속합니다.

- {{ domxref("DocumentFragment.childElementCount") }} {{readonlyInline}}
  - : `DocumentFragment`가 포함한 자식 {{domxref("Element")}}의 수를 반환합니다.
- {{ domxref("DocumentFragment.children") }} {{readonlyInline}}
  - : `DocumentFragment` 객체의 자식 {{domxref("Element")}}를 전부 포함하는 실시간 {{domxref("HTMLCollection")}}을 반환합니다.
- {{ domxref("DocumentFragment.firstElementChild") }} {{readonlyInline}}
  - : `DocumentFragment` 객체의 첫번째 자식 {{domxref("Element")}}를 반환합니다. 자식이 없으면 `null`을 반환합니다.
- {{ domxref("DocumentFragment.lastElementChild") }} {{readonlyInline}}
  - : `DocumentFragment` 객체의 마지막 자식 {{domxref("Element")}}를 반환합니다. 자식이 없으면 `null`을 반환합니다.

## 메서드

부모인 {{domxref("Node")}}의 메서드를 상속합니다.

- {{DOMxRef("DocumentFragment.append()")}}
  - : `DocumentFragment`의 마지막 자식 뒤에 {{domxref("Node")}} 객체들이나 문자열 객체들을 추가합니다.
- {{DOMxRef("DocumentFragment.prepend()")}}
  - : `DocumentFragment`의 첫 번째 자식 앞에 {{domxref("Node")}} 객체들이나 문자열 객체들을 추가합니다.
- {{domxref("DocumentFragment.querySelector()")}}
  - : `DocumentFragment` 내에서, 주어진 선택자와 일치하는 첫 번째 {{domxref("Element")}} 노드를 반환합니다.
- {{domxref("DocumentFragment.querySelectorAll()")}}
  - : `DocumentFragment` 내에서, 주어진 선택자와 일치하는 모든 {{domxref("Element")}} 노드를 포함한 {{domxref("NodeList")}}를 반환합니다.
- {{DOMxRef("DocumentFragment.replaceChildren()")}}
  - : `DocumentFragment` 내의 자식 하나를 일련의 새로운 자식으로 대체합니다.
- {{domxref("DocumentFragment.getElementById()")}}
  - : `DocumentFragment` 내에서, 주어진 ID와 일치하는 첫 번째 {{domxref("Element")}} 노드를 반환합니다. {{domxref("Document.getElementById()")}}와 기능적으로 동일합니다.

## 사용 일람

`DocumentFragment`의 일반적인 용도는 그 안에 DOM 하위 트리를 조립한 다음, {{domxref("Node")}} 인터페이스의 {{domxref("Node.appendChild", "appendChild()")}}나 {{domxref("Node.insertBefore", "insertBefore()")}}와 같은 메서드로 DOM에 하위 트리를 삽입하는 것입니다. 이 방법을 사용하면 `DocumentFragment`의 노드들이 모두 DOM으로 이동하고 빈 `DocumentFragment`만 남게 됩니다. 이때 모든 노드가 한 번에 문서에 삽입되기 때문에 리플로우도 한 번만 발생합니다. 반면 노드를 각각 하나씩 삽입했다면, 최악의 경우 매 삽입마다 리플로우가 발생했을 겁니다.

`DocumentFragment`는 웹 컴포넌트에서도 유용하게 쓰입니다. 예컨대 {{htmlelement("template")}} 요소의 {{domxref("HTMLTemplateElement.content")}} 속성이 `DocumentFragment`입니다.

{{domxref("document.createDocumentFragment()")}} 메서드나 {{domxref("DocumentFragment.DocumentFragment", "DocumentFragment()")}} 생성자를 사용해서 빈 `DocumentFragment`를 만들 수 있습니다.

## 예제

### HTML

```html
<ul id="list"></ul>
```

### JavaScript

```js
const list = document.querySelector("#list");
const fruits = ["Apple", "Orange", "Banana", "Melon"];

const fragment = new DocumentFragment();

fruits.forEach((fruit) => {
  const li = document.createElement("li");
  li.textContent = fruit;
  fragment.appendChild(li);
});

list.appendChild(fragment);
```

### 결과

{{EmbedLiveSample('예제')}}

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
