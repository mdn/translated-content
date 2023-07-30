---
title: element.attributes
slug: Web/API/Element/attributes
---

{{ ApiRef() }}

## 요약

주어진 요소의 속성 모음(collection)을 반환합니다.

## 구문

```js
var attrs = element.attributes;
```

반환하는 개체는 `Attr` 노드를 포함하는 [NamedNodeMap](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-1780488922) 형입니다. 요소가 지정된 속성이 없으면, 반환하는 개체는 길이가 0입니다. 이 속성은 읽기 전용입니다.

## 예시

```js
// 문서에서 첫 <p> 요소 얻기
var para = document.getElementsByTagName("p")[0];
var atts = para.attributes;
```

## 주의

모음의 항목은 이름과 찾아보기(index)로 접근할 수 있습니다. `NodeList`와는 달리, `NamedNodeMap`은 항목을 어떤 특정 순서로 유지하지 않음을 주의하세요.

여러분은 문서에서 "p1" 요소의 모든 속성값을 찍는 다음 예에서처럼 요소의 속성을 열거(enumerate)할 때 오직 찾아보기로 접근(access by index)을 써야 합니다.

```html
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">

<html>
  <head>
    <title>Attributes example</title>
    <script type="text/javascript">
      function showFirstAttr() {
        var firstPara = document.getElementById("p1");
        var outputText = document.getElementById("result");

        // 먼저, paragraph에 어떤 속성이 있는지 검증
        if (firstPara.hasAttributes()) {
          var attrs = firstPara.attributes;
          var text = "";
          for (var i = attrs.length - 1; i >= 0; i--) {
            text += attrs[i].name + "->" + attrs[i].value;
          }
          outputText.value = text;
        } else {
          outputText.value = "No attributes to show";
        }
      }
    </script>
  </head>

  <body>
    <p id="p1" style="color: green;">Sample Paragraph</p>
    <form action="">
      <p>
        <input
          type="button"
          value="Show first attribute name and value"
          onclick="showFirstAttr();" />
        <input id="result" type="text" value="" />
      </p>
    </form>
  </body>
</html>
```

`NamedNodeMap`은 배열처럼 반복될 수 있지만, `join`, `split` 등과 같은 `Array`에 있는 어떤 특수 메소드는 없습니다.

이름으로 특정 속성에 접근하려면, [getAttribute](/ko/DOM/element.getAttribute) 메소드를 쓰세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
