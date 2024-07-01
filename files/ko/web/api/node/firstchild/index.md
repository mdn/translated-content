---
title: element.firstChild
slug: Web/API/Node/firstChild
---

{{ ApiRef() }}

## 요약

트리에서 노드의 첫 번째 자식이나 `null`(노드가 자식이 없으면)을 반환합니다.

## 구문

```js
childNode = node.firstChild;
```

`childNode`는 자식이 있으면 `node`의 첫 번째 자식 참조이고 없으면 `null`입니다.

## 예시

이 예는 `firstChild`의 쓰임과 공백 노드가 어떻게 이 프로퍼티 사용을 방해하는 지 실제로 보입니다. Gecko DOM에서 공백 처리에 관한 더 많은 정보는 [Notes](#notes) 절을 보세요.

```html
<p id="para-01">
  <span>First span</span>
</p>

<script type="text/javascript">
  var p01 = document.getElementById("para-01");
  alert(p01.firstChild.nodeName);
</script>
```

위에서, alert은 텍스트 노드가 여는 태그 \<p>의 끝과 여는 태그 \<span> 사이에 공백을 유지하여 삽입되었기 때문에 '#text'를 보입니다. space 하나에서 여럿, return, tab 등 **어떤** 공백이든 #text 노드에 삽입되게 됩니다.

다른 #text 노드는 닫는 태그 \</span>과 닫는 태그 \</p> 사이에 삽입됩니다.

이 공백을 소스에서 제거하면, #text 노드는 삽입되지 않고 span 요소가 paragraph의 첫 번째 자식이 됩니다.

```html
<p id="para-01"><span>First span</span></p>

<script type="text/javascript">
  var p01 = document.getElementById("para-01");
  alert(p01.firstChild.nodeName);
</script>
```

이제 alert은 'SPAN'을 보입니다.

## 주의

Gecko 기반 브라우저는 소스 마크업에서 공백을 나타내기 위해 문서 내에 텍스트 노드를 삽입합니다.
그러므로 예를 들어 [`Node.firstChild`](/ko/docs/Web/API/Node/firstChild)나 [`Node.previousSibling`](/ko/docs/Web/API/Node/previousSibling)을 통해서 얻은 노드는 작성자가 얻으려 한 실제 요소와는
달리 공백 텍스트 노드를 참조할 지도 모릅니다.

더 많은 정보는 [Whitespace in the DOM](/ko/docs/Whitespace_in_the_DOM)과
[W3C DOM 3 FAQ: Why are some Text nodes empty?](http://www.w3.org/DOM/faq.html#emptytext)를 보세요.

## 명세

{{Specifications}}
