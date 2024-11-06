---
title: Document.createTextNode()
slug: Web/API/Document/createTextNode
---

{{APIRef("DOM")}}

### 요약

텍스트 노드를 생성합니다.

### 문법

```js
텍스트 = document.createTextNode(데이터);
```

### 매개변수

- `텍스트` 생성된 텍스트 노드입니다.
- `데이터` 텍스트 노드에 쓰여지는 문자열입니다.

### 예제

```html
<html>
  <head>
    <title>createTextNode 예제</title>

    <script type="text/javascript">
      function addTextNode() {
        var newtext = document.createTextNode(" 동적으로 추가되는 텍스트. ");
        var para = document.getElementById("p1");
        para.appendChild(newtext);
      }
    </script>
  </head>

  <body>
    <div style="border: 1px solid red">
      <p id="p1">단락의 첫번째 줄.<br /></p>
    </div>
    <br />

    <button onclick="addTextNode();">TextNode 추가하기.</button>
  </body>
</html>
```

### 규약

[createTextNode](http://www.w3.org/TR/2000/REC-DOM-Level-2-Core-20001113/core.html#ID-1975348127)
