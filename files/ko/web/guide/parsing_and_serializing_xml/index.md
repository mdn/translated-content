---
title: XML 파싱 및 직렬화
slug: Web/Guide/Parsing_and_serializing_XML
---

웹 상에서 XML을 파싱하고 직렬화할 때 사용할 수 있는 객체는 다음과 같습니다.

- **DOM 트리를 문자열로 직렬화**하는 [XMLSerializer](/en/XMLSerializer)
- **XML 문서 상의 각기 다른 부분들을 (비 XML 문법을 사용하여) 문자열로 직렬화**하는 [XPath](/en/XPath)
- XML을 파싱하여 **문자열을 DOM 트리로 변환**하는 [DOMParser](/en/DOM/DOMParser)
- **URL을 사용하여 주소화 가능한(URL-addressable) 리소스를 DOM 트리로** 파싱하는 [XMLHttpRequest](/en/nsIXMLHttpRequest)

## Part 1: XML 문서 생성법

XML 문서 생성법은 다음과 같습니다. (XML 문서는 `Document`의 인스턴스 입니다.)

### 문자열을 DOM 트리로 파싱

```js hidden
var sMyString = '<a id="a"><b id="b">hey!</b></a>';
var oParser = new DOMParser();
var oDOM = oParser.parseFromString(sMyString, "text/xml");
// 루트 요소의 이름, 또는 에러 메시지를 출력합니다.
dump(
  oDOM.documentElement.nodeName == "parsererror"
    ? "error while parsing"
    : oDOM.documentElement.nodeName,
);
```

### 자바스크립트 객체 트리를 시작점으로 하여 XML 문서를 생성(JXON)

[JXON 역(reverse) 알고리즘](/en/JXON#Reverse_Algorithms)을 참고하세요.

### URL 주소화 가능한(URL-addressable) 리소스를 DOM 트리로 파싱

#### XMLHttpRequest를 사용합니다

다음은 URL 주소화 가능한 XML 파일을 DOM 트리로 읽어들인 후 파싱하는 예시 코드입니다.

```js
var xhr = new XMLHttpRequest();
xhr.onload = function () {
  dump(xhr.responseXML.documentElement.nodeName);
};
xhr.onerror = function () {
  dump("Error while getting XML.");
};
xhr.open("GET", "example.xml");
xhr.responseType = "document";
xhr.send();
```

`xhr.responseXML는` {{domxref("Document")}}의 인스턴스입니다.

## Part 2: 특정 XML 문서의 콘텐츠를 직렬화하는 방법

Part 1에서 생성한 XML 문서의 콘텐츠를 직렬화할 수 있는 방법은 다음과 같습니다.

### DOM 트리를 문자열로 직렬화

제일 먼저 [DOM 트리 생성법](/en/How_to_create_a_DOM_tree)에 나와 있는 대로 DOM 트리를 생성합니다. 다른 방법으로는 {{ domxref("XMLHttpRequest") }}에서 얻어낸 DOM 트리를 사용하는 방법이 있습니다.

이제 `doc`(DOM 트리)를 문자열로 직렬화 해 봅시다.

```js
var oSerializer = new XMLSerializer();
var sXML = oSerializer.serializeToString(doc);
```

`new XMLSerializer()` 생성자는 JS XPCOM 컴포넌트(혹은 [JS module](/en/JavaScript_code_modules)) 내에서는 사용이 불가능합니다. 대신, 다음과 같은 코드를 작성하세요.

```js
var oSerializer = Components.classes[
  "@mozilla.org/xmlextras/xmlserializer;1"
].createInstance(Components.interfaces.nsIDOMSerializer);
var sXML = oSerializer.serializeToString(doc);
```

#### DOM 트리를 문자열로 "예쁘게(pretty)" 직렬화

`XMLSerializer와` [E4X](/en/E4X)를 사용하면 DOM 트리를 [예쁘게 출력(pretty print](http://en.wikipedia.org/wiki/Pretty-print) 할 수 있습니다. 우선, [DOM 트리 생성법](/en/How_to_create_a_DOM_tree) 글을 참고하여 DOM 트리를 생성합니다. 혹은 {{ domxref("XMLHttpRequest") }}를 통해 DOM 트리를 뽑아내는 방법도 있습니다. 아래 코드에서 변수 `doc`는 DOM 트리를 가지고 있습니다.

```js
var oSerializer = new XMLSerializer();
var sPrettyXML = XML(oSerializer.serializeToString(doc)).toXMLString();
```

들여쓰기는 두 번 스페이스가 들어간 것과 같게 되어 있습니다. 좀 더 효율적인 코드를 작성하거나 들여쓰기 문자열을 임의로 설정하고 싶다면 {{ domxref("treeWalker") }}를 사용하십시오.

> **참고:** E4X `toXMLString` 메소드를 쓴다면, **CDATA 요소가 없어지거나**, 요소 안에 담긴 텍스트만 남을 수 있습니다. 그러므로 만약 XML 내에 CDATA 요소가 들어 있다면, 위에 나온 메소드는 그다지 유용하지 않을 수도 있습니다.

```xml
<content><![CDATA[This is the content]]></content>
```

위의 코드는 다음과 같이 변환됩니다.

```xml
<content>This is the content</content>
```

### DOM 트리를 자바스크립트 객체 트리로 직렬화 (JXON)

[JXON](/en/JXON) (lossless **J**avaScript **X**ML **O**bject **N**otation, 무손실 자바스크립트 XML 객체 표기법)은 XML을 사용하여 자바스크립트 객체를 표현하는 방법입니다. XML 문서의 일부분만 나오게 하고 싶다면, 문서 전체를 JSON으로 변환하지 말고 [XPath](/en/XPath)를 사용하세요! 이 외의 상황이라면 [JSON에 관한 글](/en/JXON)을 참조하세요.

### DOM 트리를 파일로 직렬화

먼저, [DOM 트리 생성법](/en/How_to_create_a_DOM_tree) 글에 나와 있는 대로 DOM 트리를 생성하세요. 만약 {{ domxref("XMLHttpRequest") }}를 사용하여 이미 DOM 트리가 존재한다면 이 절의 마지막 부분으로 건너 뛰십시오.

이제 DOM 트리인 `doc`를 파일로 직렬화 해봅시다. 파일에 대해 더 알아보고 싶다면, [모질라에서 파일 사용과 관련하여](/en/Code_snippets/File_I//O)를 참조하세요.

```js
var oFOStream = Components.classes[
  "@mozilla.org/network/file-output-stream;1"
].createInstance(Components.interfaces.nsIFileOutputStream);
var oFile = Components.classes["@mozilla.org/file/directory_service;1"]
  .getService(Components.interfaces.nsIProperties)
  .get("ProfD", Components.interfaces.nsILocalFile); // get profile folder
oFile.append("extensions"); // extensions sub-directory
oFile.append("{5872365E-67D1-4AFD-9480-FD293BEBD20D}"); // GUID of your extension
oFile.append("myXMLFile.xml"); // filename
oFOStream.init(oFile, 0x02 | 0x08 | 0x20, 0664, 0); // write, create, truncate
new XMLSerializer().serializeToStream(doc, oFOStream, ""); // rememeber, doc is the DOM tree
oFOStream.close();
```

### XMLHttpRequest 객체를 파일로 직렬화

이미 {{ domxref("XMLHttpRequest") }}를 사용하여 DOM 트리를 보유한 상태라면, 위의 코드를 사용하되 `serializer.serializeToStream(doc, oFOStream, "")` `부분을` `serializer.serializeToStream(xmlHttpRequest.responseXML.documentElement, oFOStream, "")`로 대체하십시오. `xmlHttpRequest은` `XMLHttpRequest`의 인스턴스입니다.

위 코드는 서버에서 XML을 찾아낸 후 문자열 스트림으로 재직렬화(re-serialize)한다는 것을 알아두세요. 필요에 따라 `xmlHttpRequest.responseText`를 곧장 건너뛸 수 있습니다.

### HTML 문서를 직렬화

만약 보유한 DOM이 HTML 문서라면 다음과 같이 간단하게 직렬화할 수 있습니다.

```js
var serialized = document.documentElement.innerHTML;
```

## 참고 자료

- [XPath](/en/XPath)
- [XMLHttpRequest](/en/nsIXMLHttpRequest)
- [JXO](/en/JXON)
