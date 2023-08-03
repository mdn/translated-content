---
title: Introduction to using XPath in JavaScript
slug: Web/XPath/Introduction_to_using_XPath_in_JavaScript
---

이 문서는 JavaScript 안, 확장기능, 웹사이트에서 [XPath](/ko/XPath)를 사용하기 위한 인터페이스를 설명합니다. Mozilla는 [DOM 3 XPath](http://www.w3.org/TR/DOM-Level-3-XPath/xpath.html)를 상당량 구현합니다. 이것은 XPath 식이 HTML과 XML 문서 모두에서 잘 돌아간다는 것을 뜻합니다.

XPath를 사용하는 주 인터페이스는 [document](/ko/DOM/document) 개체의 [evaluate](/ko/DOM/document.evaluate) 함수입니다.

## document.evaluate

이 메소드는 [XML](/ko/XML)에 기반을 둔 문서(HTML 문서 포함)에 대해 [XPath](/ko/XPath) 식을 평가하고 단일 노드나 노드 집합일 수 있는 `XPathResult` 개체를 반환합니다. 이 메소드를 다루는 기존 문서는 [여기](/ko/DOM/document.evaluate)에 있지만 당장 우리 필요에 좀 부족하여, 더 이해가 빠른 설명을 아래에 제공합니다.

```
var xpathResult = document.evaluate( xpathExpression, contextNode, namespaceResolver, resultType, result );
```

### 매개변수

[evaluate](/ko/DOM/document.evaluate) 함수는 매개변수를 총 5개 취합니다.

- `xpathExpression`: 평가할 XPath 식을 포함하는 문자열

<!---->

- `contextNode`: `xpathExpression`이 평가될 모든 자식 노드를 포함하는 문서의 노드. [document](/ko/DOM/document) 노드가 가장 흔히 쓰입니다.

<!---->

- `namespaceResolver`: 그 접두사와 관련된 namespace URI를 나타내는 문자열을 반환하는 `xpathExpression` 내에 포함되는 모든 namespace 접두사를 넘겨주는 함수. 이는 XPath 식에 쓰(이)는 접두사와 문서에 쓰(이)는 아마도 다른 접두사 사이에 변환을 가능하게 합니다. 함수는 어느 한쪽일 수 있습니다.

  - [`XPathEvaluator`](http://www.xulplanet.com/references/objref/XPathEvaluator.html) 개체의 [`createNSResolver`](/ko/DOM/document.createNSResolver) 메소드를 써서 [만듭니다](#Implementing_a_Default_Namespace_Resolver). 항상 가상으로 이를 쓰면 좋습니다.
  - HTML 문서를 위해서나 namespace 접두사가 없을 때 쓸 수 있는 `null`. 만약 `xpathExpression`가 namespace 접두사를 포함하면 이는 `NAMESPACE_ERR` 코드를 내는 `DOMException`을 가져옴을 유의하세요.
  - 사용자 정의 맞춤(custom) 함수. 세부 내용은 부록의 [사용자 정의 Namespace Resolver 쓰기](#Implementing_a_User_Defined_Namespace_Resolver) 절을 보세요.

- `resultType`: 평가 결과로 반환되기 바랐던 결과 형을 지정하는 [상수](#XPathResult_Defined_Constants). 가장 흔히 넘겨주는 상수는 가장 자연스러운 형으로 XPath 식의 결과를 반환하는 `XPathResult.ANY_TYPE`입니다. 부록에 [쓸 수 있는 상수](#XPathResult_Defined_Constants) 목록 전체를 포함하는 절이 있습니다. 아래 [반환형 지정](#Specifying_the_Return_Type) 절에서 설명합니다.
- `result`: 결과를 반환하는 데 재사용하는 기존 `XPathResult` 개체나 새 `XPathResult` 개체를 만드는 데 쓸 수 있는 `null` 가운데 하나.

### 반환값

`resultType` 매개변수에서 [지정한](#Specifying_the_Return_Type) 형의 `XPathResult` 개체인 `xpathResult`를 반환합니다. `XPathResult` 인터페이스는 [여기](http://lxr.mozilla.org/seamonkey/source/dom/public/idl/xpath/nsIDOMXPathResult.idl)에서 정의됩니다.

### Default Namespace Resolver 구현

우리는 [document](/ko/DOM/document) 개체의 `createNSResolver` 메소드를 써서 namespace resolver를 만듭니다.

```
var nsResolver = document.createNSResolver( contextNode.ownerDocument == null ? contextNode.documentElement : contextNode.ownerDocument.documentElement );
```

Or alternatively by using the `createNSResolver` method of a `XPathEvaluator` object.

```js
var xpEvaluator = new XPathEvaluator();
var nsResolver = xpEvaluator.createNSResolver(
  contextNode.ownerDocument == null
    ? contextNode.documentElement
    : contextNode.ownerDocument.documentElement,
);
```

그리고 나서 `document.evaluate` 함수에 `namespaceResolver` 매개변수로 `nsResolver` 변수를 넘겨줍니다.

XPath는 null namespace의 단 하나 뿐인 요소와 일치하는 접두사 없는 `QNames`을 정의함을 유의하세요. XPath에는 기본 namespace를 얻는 방법이 없습니다. null이 아닌 namespace의 요소나 속성을 일치시키려면, 접두사 붙은 이름 검사를 쓰고 접두사를 namespace에 매핑하는 namespace resolver를 만들어야 합니다. 아래 [사용자 정의 namespace resolver 만드는](#Implementing_a_User_Defined_Namespace_Resolver) 법을 더 읽으세요.

### 반환형 지정

`document.evaluate`로부터 반환하는 변수 `xpathResult`는 개별 노드 ([단순 형](#Simple_Types))나 노드 모음(collection) ([node-set 형](#Node-Set_Types)) 가운데 하나로 구성할 수 있습니다.

#### 단순 형

`resultType`으로 바랐던 결과형을 어느 한쪽으로 지정할 때,

- `NUMBER_TYPE` - a double
- `STRING_TYPE` - a string
- `BOOLEAN_TYPE` - a boolean

우리는 `XPathResult` 개체의 다음 속성에 각각 접근하여 식의 반환값을 얻습니다.

- `numberValue`
- `stringValue`
- `booleanValue`

##### 예

다음은 HTML 문서의 `<p>` 요소수를 얻기 위해 XPath 식 [`count(//p)`](/ko/XPath/Functions/count)을 씁니다.

```
var paragraphCount = document.evaluate( 'count(//p)', document, null, XPathResult.ANY_TYPE, null );

alert( 'This document contains ' + paragraphCount.numberValue + ' paragraph elements' );
```

비록 Javascript가 표시를 위해 숫자를 문자열로 변환하는 것을 허용하더라도, `stringValue` 속성(property)을 요청하면 XPath 인터페이스는 자동으로 숫자 결과로 변환하지 않습니다. 그래서 다음 코드는 작동하지 않습니다.

```
var paragraphCount = document.evaluate('count(//p)', document, null, XPathResult.ANY_TYPE, null );

alert( 'This document contains ' + paragraphCount.stringValue + ' paragraph elements' );
```

대신 `NS_DOM_TYPE_ERROR` 코드를 갖는 예외(exception)를 반환합니다.

#### Node-Set 형

`XPathResult` 개체는 주요한 3가지 서로 다른 형으로 반환될 node-set을 허용합니다.

- [Iterators](#Iterators)
- [Snapshots](#Snapshots)
- [First Nodes](#First_Nodes)

##### 반복자(훑개)

`resultType` 매개변수로 지정한 결과형이 어느 한쪽일 때,

- `UNORDERED_NODE_ITERATOR_TYPE`
- `ORDERED_NODE_ITERATOR_TYPE`

반환되는 `XPathResult` 개체는 일치하는 노드(`XPathResult`의 `iterateNext()` 메소드를 써서 포함될 개별 노드에 접근함을 허용하는 반복자로 행동할)의 노드 집합입니다.

우리가 모든 일치하는 개별 노드에 반복하고 나면, `iterateNext()`는 `null`을 반환합니다.

그러나 주의하세요, 만약 반복 도중에 문서가 바뀌면 (문서 tree가 변경됨) 그것은 반복을 무효로 만들고(invalidate) `XPathResult`의 `invalidIteratorState` 속성을 `true`로 지정하고 `NS_ERROR_DOM_INVALID_STATE_ERR` 예외를 냅니다.

###### 반복자 예

```js
var iterator = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.UNORDERED_NODE_ITERATOR_TYPE,
  null,
);

try {
  var thisNode = iterator.iterateNext();

  while (thisNode) {
    alert(thisNode.textContent);
    thisNode = iterator.iterateNext();
  }
} catch (e) {
  dump("Error: Document tree modified during iteraton " + e);
}
```

##### Snapshots

`resultType` 매개변수로 지정한 결과형이 어느 한쪽일 때,

- `UNORDERED_NODE_SNAPSHOT_TYPE`
- `ORDERED_NODE_SNAPSHOT_TYPE`

반환되는 `XPathResult` 개체는 일치하는 노드의 static node-set이고, 그것은 `itemNumber`가 검색(retrieve)되는 노드의 index인 `XPathResult` 개체의 `snapshotItem(itemNumber)` 메소드를 통해 각 노드에 접근을 허용합니다. 포함되는 노드의 총수는 `snapshotLength` 속성을 통해 입수할 수 있습니다.

Snapshot은 변환 문서로 바꾸지 않습니다. 그래서 반복자와는 달리 snapshot은 무효로 만들지는 않지만 현재 문서와 들어맞지 않을지도 모릅니다, 예를 들어 노드가 이동됐을지도 모르고, 더 이상 존재하지 않는 노드나 추가될 수 있는 새 노드를 포함할지도 모릅니다.

###### Snapshot 예

```js
var nodesSnapshot = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.ORDERED_NODE_SNAPSHOT_TYPE,
  null,
);

for (var i = 0; i < nodesSnapshot.snapshotLength; i++) {
  dump(nodesSnapshot.snapshotItem(i).textContent);
}
```

##### First Node

`resultType` 매개변수로 지정한 결과형이 어느 한쪽일 때,

- `ANY_UNORDERED_NODE_TYPE`
- `FIRST_ORDERED_NODE_TYPE`

반환되는 `XPathResult` 개체는 XPath 식과 일치하는 오직 처음 발견한 노드입니다. 이는 `XPathResult` 개체의 `singleNodeValue` 속성을 통해 접근할 수 있습니다. 이는 노드 집합이 비면 `null`입니다.

순서 없는 subtype인 경우 반환되는 단일 노드가 문서 순으로 처음이 아닐지도 모르지만 순서 있는 subtype인 경우 문서 순으로 처음 일치하는 노드임을 보장함을 유의하세요.

###### First Node 예

```js
var firstPhoneNumber = document.evaluate(
  "//phoneNumber",
  documentNode,
  null,
  XPathResult.FIRST_ORDERED_NODE_TYPE,
  null,
);

dump(
  "The first phone number found is " +
    firstPhoneNumber.singleNodeValue.textContent,
);
```

#### ANY_TYPE 상수

`resultType` 매개변수에 결과형을 `ANY_TYPE`으로 지정할 때, 반환되는 `XPathResult` 개체는, 식 평가에서 자연스럽게 생긴 어떤 형입니다.

단순 형( `NUMBER_TYPE, STRING_TYPE, BOOLEAN_TYPE` ) 가운데 하나일 수도 있습니다, 하지만, 만약 반환되는 결과형이 node-set이면 오직 `UNORDERED_NODE_ITERATOR_TYPE`입니다.

평가 뒤 형을 결정하기 위해서, 우리는 `XPathResult` 개체의 `resultType` 속성을 씁니다. 이 속성의 [상수](#XPathResult_Defined_Constants)값은 부록에서 정의합니다.

None Yet =====Any_Type 예=====

## 예

### HTML 문서 안에서

다음 코드는 XPath 식이 평가될 HTML 문서 안에서나 문서에 연결(link)된 어떤 JavaScript 조각(fragment)에 놓을 셈입니다.

XPath를 써서 HTML의 모든 `<h2>` heading 요소를 뽑아내면(extract), `xpathExpression` 문자열은 간단히 '`//h2`'입니다. 어떤 점에서, `//`는 요소 트리 어디에서나 노드명 `h2`와 요소를 일치시키는 재귀 내림 연산자(Recursive Descent Operator)입니다. 이를 위한 자세한 코드입니다. link to introductory xpath doc

```
var headings = document.evaluate('//h2', document, null, XPathResult.ANY_TYPE, null );
```

HTML이 namespace가 없기 때문에, 우리는 `namespaceResolver` 매개변수에 `null`을 넘겨줌을 유의하세요.

우리가 문서 전체에서 heading을 찾기를 바라기 때문에, 우리는 `contextNode`로 [document](/ko/DOM/document) 개체 자신을 씁니다.

이 식의 결과는 `XPathResult` 개체입니다. 우리가 반환되는 결과형을 알고 싶다면, 우리는 반환되는 개체의 `resultType` 속성을 평가할지도 모릅니다. 이 경우에는 그것은 값이 `4`인 `UNORDERED_NODE_ITERATOR_TYPE`로 평가합니다. 이는 XPath 식의 결과가 node-set일 때 기본 반환형입니다. 동시에 단일 노드로 접근을 제공하고 특정 순서로 노드를 반환할지도 모릅니다. 반환되는 개체에 접근하기 위해, 우리는 반환되는 개체의 `iterateNext()` 메소드를 씁니다.

```js
var thisHeading = headings.iterateNext();

var alertText = "Level 2 headings in this document are:\n";

while (thisHeading) {
  alertText += thisHeading.textContent + "\n";
  thisHeading = headings.iterateNext();
}
```

우리가 한 노드를 반복하기만 하면, 우리는 그 노드의 모든 표준 [DOM interfaces](/ko/DOM_interfaces)에 접근할 수 있습니다. 우리 식에서 반환된 모든 `h2` 요소를 반복한 뒤에, 더 이상의 `iterateNext()` 호출은 `null`을 반환합니다.

### 확장기능 안에서 XML 문서 평가

다음은 예로 chrome://yourextension/content/peopleDB.xml에 자리한 XML 문서를 씁니다.

```js
<?xml version="1.0"?>
<people xmlns:xul = "http://www.mozilla.org/keymaster/gatekeeper/there.is.only.xul" >
  <person>
    <name first="george" last="bush" />
    <address street="1600 pennsylvania avenue" city="washington" country="usa"/>
    <phoneNumber>202-456-1111</phoneNumber>
  </person>
  <person>
    <name first="tony" last="blair" />
    <address street="10 downing street" city="london" country="uk"/>
    <phoneNumber>020 7925 0918</phoneNumber>
  </person>
</people>
```

확장기능 안에서 XML 문서의 컨텐트를 쓸 수 있게, 우리는 문서를 로드하는 동시에 변수 `xmlDoc`를 우리가 `evaluate` 메소드를 쓸 수 있는 [`XMLDocument`](/ko/XMLDocument) 개체로 문서에 포함하는 [`XMLHttpRequest`](/ko/XMLHttpRequest) 개체를 만듭니다,

JavaScript는 확장기능 xul/js 문서에 씁니다.

```js
var req = new XMLHttpRequest();

req.open("GET", "chrome://yourextension/content/peopleDB.xml", false);
req.send(null);

var xmlDoc = req.responseXML;

var nsResolver = xmlDoc.createNSResolver(
  xmlDoc.ownerDocument == null
    ? xmlDoc.documentElement
    : xmlDoc.ownerDocument.documentElement,
);

var personIterator = xmlDoc.evaluate(
  "//person",
  xmlDoc,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

## 부록

#### 사용자 정의 Namespace Resolver 구현

이는 단지 설명을 위한 예입니다. 이 함수는 `xpathExpression`에서 namespace 접두사를 취할 필요가 있고 그 접두사와 들어맞는 URI를 반환합니다. 예를 들어, 다음 식은

```
'//xhtml:td/mathml:math'
```

(X)HTML 표 데이터 셀 요소의 자식인 모든 [MathML](/ko/MathML) 식을 선택합니다.

`mathml:` 접두사를 namespace URI '[`http://www.w3.org/1998/Math/MathML`](http://www.w3.org/1998/Math/MathML)'와 `html:`을 URI [`http://www.w3.org/1999/xhtml`](http://www.w3.org/1999/xhtml)와 관련시키기 위해 우리는 함수 하나를 제공합니다.

```js
function nsResolver(prefix) {
  var ns = {
    xhtml: "http://www.w3.org/1999/xhtml",
    mathml: "http://www.w3.org/1998/Math/MathML",
  };
  return ns[prefix] || null;
}
```

그러면 `document.evaluate` 호출은 다음과 같습니다.

```js
document.evaluate(
  "//xhtml:td/mathml:math",
  document,
  nsResolver,
  XPathResult.ANY_TYPE,
  null,
);
```

#### XPathResult 정의 상수

| 결과형 정의 상수             | 값  | 설명                                                                                                                                          |
| ---------------------------- | --- | --------------------------------------------------------------------------------------------------------------------------------------------- |
| ANY_TYPE                     | 0   | 식 평가에서 자연스럽게 생긴 어떤 형을 포함하는 결과 집합. 만약 결과가 node-set이면 UNORDERED_NODE_ITERATOR_TYPE이 항상 결과형임을 주의하세요. |
| NUMBER_TYPE                  | 1   | single 숫자를 포함하는 결과. 이는 예를 들어, `count()` 함수를 쓰는 XPath 식에 쓸모가 있습니다.                                                |
| STRING_TYPE                  | 2   | single 문자열을 포함하는 결과.                                                                                                                |
| BOOLEAN_TYPE                 | 3   | single boolean 값을 포함하는 결과. 이는 예를 들어, `not()` 함수를 쓰는 XPath 식에 쓸모가 있습니다.                                            |
| UNORDERED_NODE_ITERATOR_TYPE | 4   | 식과 일치하는 모든 노드를 포함하는 결과 node-set. 노드는 반드시 문서에 나타나는 순서대로가 아닐지도 모릅니다.                                 |
| ORDERED_NODE_ITERATOR_TYPE   | 5   | 식과 일치하는 모든 노드를 포함하는 결과 node-set. 결과 집합의 노드는 문서에 나타나는 순서대로입니다.                                          |
| UNORDERED_NODE_SNAPSHOT_TYPE | 6   | 식과 일치하는 모든 노드의 snapshot을 포함하는 결과 node-set. 노드는 반드시 문서에 나타나는 순서대로가 아닐지도 모릅니다.                      |
| ORDERED_NODE_SNAPSHOT_TYPE   | 7   | 식과 일치하는 모든 노드의 snapshot을 포함하는 결과 node-set. 결과 집합의 노드는 문서에 나타나는 순서대로입니다.                               |
| ANY_UNORDERED_NODE_TYPE      | 8   | 식과 일치하는 어떤 단일 노드를 포함하는 결과 node-set. 노드는 식과 일치하는 문서의 첫 노드일 필요는 없습니다.                                 |
| FIRST_ORDERED_NODE_TYPE      | 9   | 식과 일치하는 문서의 첫 노드를 포함하는 결과 node-set.                                                                                        |

## 원본 문서 정보

- 원본 문서 [Mozilla XPath 입문서](http://www-xray.ast.cam.ac.uk/~jgraham/mozilla/xpath-tutorial.html)를 기반으로 함
- 원본 소스 저자: James Graham.
- 다른 기여자: James Thompson.
- 맨 나중 업데이트: 2006-3-25.
