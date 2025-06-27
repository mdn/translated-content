---
title: Using the Mozilla JavaScript interface to XSL Transformations
slug: Web/API/XSLTProcessor
---

{{APIRef("XSLT")}}

이 문서는 Mozilla 1.2의 JavaScript 인터페이스부터 XSLT 처리 엔진(TransforMiiX)까지 설명합니다.

### XSLTProcessor 만들기

시작하기 위해, [XSLTProcessor](/ko/XSLTProcessor) 개체 만들기가 필요합니다.

```
var processor = new XSLTProcessor();
```

### 스타일시트 지정하기

쓸 수 있으려면 그 전에 `importStylesheet()` 함수로 스타일시트를 가져와야(import) 합니다. 가져올 XSLT 스타일시트의 DOM 노드인 매개변수가 하나 있습니다. 가져오기는 동적임을 (가져온 뒤로 스타일시트 DOM을 바꾸면, 이는 처리에 반영됨을 뜻함) 주의하세요. 그러나 DOM 수정 대신 스타일시트 매개변수 사용을 권장합니다. 이는 보통 더 쉽고 더 나은 성능을 줄 수 있습니다.

```
var testTransform = document.implementation.createDocument("", "test", null);
// just an example to get a transform into a script as a DOM
// XMLDocument.load is asynchronous, so all processing happens in the
// onload handler
testTransform.addEventListener("load", onload, false);
testTransform.load("test-transform.xml");
function onload() {
  processor.importStylesheet(testTransform);
}
```

`importStylesheet`는 DOM 노드인 인수가 하나 필요합니다. 그 노드가 문서 노드면 전체 XSL Transform이나 [literal result element transform](https://www.w3.org/TR/xslt#result-element-stylesheet)에 넘길 수 있습니다, 그렇지 않으면 `xsl:stylesheet`나 `xsl:transform` 요소이어야 합니다.

### 문서 변환하기

지정한 XSLT 스타일시트를 써서 문서를 변환하기 위해 [`transformToDocument()`](#transformtodocument)나 [`transformToFragment()`](#transformtofragment) 메소드를 쓸 수 있습니다.

#### transformToDocument

`transformToDocument()`는 변환할 소스 노드인 인수를 하나 취하고 변환 결과를 갖는 새 DOM `Document`를 반환합니다.

```
var newDocument = processor.transformToDocument(domToBeTransformed);
```

결과 개체는 스타일시트의 [output 메소드](https://www.w3.org/TR/xslt#output)가 `html`이면 `HTMLDocument`, `xml`이면 `XMLDocument`, `text`이면 자식이 text인 단일 루트 요소 `<transformiix:result>`를 갖는 `XMLDocument`입니다.

#### transformToFragment

또한 DOM `DocumentFragment` 노드를 반환하는 `transformToFragment()`를 쓸 수 있습니다. 이는 조각(fragment)을 다른 노드에 투명하게 추가함이 그 조각의 자손 모두를 추가하고 조각 자체는 합치지(merge) 않기 때문에 편리합니다. 그러므로 조각은 여기저기 노드 옮기기와 전체 문서 개체의 overhead 없이 저장하기에 쓸모가 있습니다.

`transformToFragment`는 인수 둘을 취합니다. 변환할 소스 문서(위와 같이)와 조각(조각 모두는 문서가 소유해야 합니다)를 소유하는 `Document` 개체.

```
var ownerDocument = document.implementation.createDocument("", "test", null);
var newFragment = processor.transformToFragment(domToBeTransformed, ownerDocument);
```

`transformToFragment`는 소유자 문서 자신이 `HTMLDocument`이거나 스타일시트의 output 메소드가 HTML이면 오직 HTML DOM 개체를 만들어냅니다. 다만 결과의 최상위 요소가 `transformToFragment`로 이 요소를 만드는 데 좀처럼 쓰지 않는 `<html>`이면 HTML DOM 개체를 만들어내지 **않**습니다. 이를 재정의(override)하고 싶으면, 보통은 표준 방식으로 output 메소드를 설정할 수 있습니다.

### 매개변수 설정

`setParameter`, `getParameter`, `removeParameter` 메소드를 써서 [parameters for the stylesheet](https://www.w3.org/TR/xslt#variables)를 조절할 수 있습니다. 이들은 모두 `setParameter` 메소드는 세 번째도 취하면서 처음 두 매개변수로 이름공간 URI와 지역명을 설정한 매개변수 값을 취합니다.

### 재설정

`XSLTProcessor` 개체는 또한 모든 스타일시트와 매개변수를 제거하고 처리기(processor)를 초기 상태로 되돌리는 데 쓸 수 있는 `reset()` 메소드를 구현합니다. 이 메소드는 [Mozilla](/ko/Gecko) 1.3과 그 뒤에 구현됩니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [XSLT](/ko/docs/Web/XML/XSLT)
- [XSLT 튜토리얼](https://www.zvon.org/xxl/XSLTutorial/Books/Book1/index.html)
- [XPath 튜토리얼](https://www.zvon.org/xxl/XPathTutorial/General/examples.html)
