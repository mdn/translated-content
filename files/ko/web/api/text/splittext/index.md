---
title: Text.splitText()
slug: Web/API/Text/splitText
---

{{apiref("DOM")}}

**`Text.splitText()`** 메소드는 {{domxref("Text")}} 노드를 지정된 오프셋에서 두 노드로 분리합니다. 두 노드는 sibling으로써 트리에 유지됩니다.

분리한 이후, 현재 노드는 지정된 오프셋 지점까지의 모든 컨텐츠를 포함하며, 새롭게 생성된 같은 타입의 노드는 남아있는 텍스트를 포함합니다. 새롭게 생성된 노드는 호출자에게 반환됩니다. 기존 노드가 부모를 갖고 있다면, 새 노드는 기존 노드의 다음 sibling으로 삽입됩니다. 기존 노드의 길이와 오프셋이 동일하다면, 새롭게 생성된 노드는 데이터를 갖지 않습니다.

분리된 텍스트 노드는 {{domxref("Node.normalize()")}} 메소드를 사용해 이어붙혀질 수 있습니다.

지정된 오프셋이 음수이거나 노드의 텍스트의 16 비트 단위의 수보다 크면 `INDEX_SIZE_ERR` 값을 갖는 {{domxref("DOMException")}} 을 throw됩니다. `NO_MODIFICATION_ALLOWED_ERR` 값을 갖는 {{domxref("DOMException")}} 은 노드가 읽기 전용일 때 throw됩니다.

## 문법

```js
replacementNode = textnode.splitText(offset);
```

## 예제

이 예제에서 {{HTMLElement("p")}} 텍스트 노드는 두 텍스트 노드로 분리되며 그 사이에 {{HTMLElement("span")}} 이 삽입됩니다.

```html
<body>
  <p id="p">foobar</p>

  <script type="text/javascript">
    var p = document.getElementById("p");
    var textnode = p.firstChild;

    // foo 와 bar 사이를 분리
    var replacementNode = textnode.splitText(3);

    // ' span contents ' 를 포함하는 span을 생성
    var span = document.createElement("span");
    span.appendChild(document.createTextNode(" span contents "));

    // 'bar' 앞에 span을 추가
    p.insertBefore(span, replacementNode);

    // 결과: <p id="p">foo<span> span contents </span>bar</p>
  </script>
</body>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 함께 보기

- 이 메소드가 속한 {{domxref("Text")}} 인터페이스.
- 반대되는 메소드: {{domxref("Node.normalize")}}.
