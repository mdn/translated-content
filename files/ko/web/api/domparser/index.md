---
title: DOMParser
slug: Web/API/DOMParser
translation_of: Web/API/DOMParser
---
{{APIRef("DOM")}}

The **`DOMParser`** 인터페이스는 DOM {{domxref("Document")}} 문서에 맞는 {{Glossary("XML")}} 및 {{Glossary("HTML")}} 소스 코드를 해석할 수 있는 기반을 제공한다 .

> **참고:** {{domxref("XMLHttpRequest")}} 객체로도 인식 가능한 URL 주소로부터 직접 XML 및 HTML 문서를 해석하여 {{domxref("XMLHttpRequest.response", "response")}} 속성을 통해 `Document` 객체로 제공한다.

반대로 DOM 구조를 XML 및 HTML 소스 코드로 제공하는 방식은 {{domxref("XMLSerializer")}} 인터페이스를 참고하도록 한다.

HTML 문서의 경우, {{domxref("Element.innerHTML")}} 속성과 {{domxref("Element.outerHTML", "outerHTML")}} 속성을 통해 DOM 구조를 새로운 방식으로 변경할 수 있다. 또한 이들 속성을 통해 HTML 구조의 하위에 있는 HTML 구조도 불러올 수 있다.

## 문법

```js
let domparser = new DOMParser()​​
```

## 메소드

### {{domxref("DOMParser.parseFromString()", "", "", "1")}}

#### 문법

```js
let doc = domparser.parseFromString(string, mimeType)
```

#### 반환

**[`mimeType`](#Argument02)** 인자를 통해 정의한 형식에 따른 {{domxref("Document")}} 또는{{domxref("XMLDocument")}} 문서를 반환한다.

#### 인자

이 메소드에는 2개의 인자가 제공되는데, 모두 필수값이다.

- `string`
  - : 해석할 {{domxref("DOMString")}} 문자열. 반드시 {{Glossary("HTML")}}, {{Glossary("xml")}}, {{Glossary("xhtml+xml")}} 또는 {{Glossary("svg")}} 문서 형식에 맞아야 한다.
- `mimeType`
  - | : 아래 표에 정의한 형식을 반환 값으로 제공할 {{domxref("DOMString")}} 문자열. | `mimeType`                             | `doc.constructor` |
    | ------------------------------------------------------------------------------------- | -------------------------------------- | ----------------- |
    | `text/html`                                                                           | `{{domxref("Document")}}`     |
    | `text/xml`                                                                            | `{{domxref("XMLDocument")}}` |
    | `application/xml`                                                                     | `{{domxref("XMLDocument")}}` |
    | `application/xhtml+xml`                                                               | `{{domxref("XMLDocument")}}` |
    | `image/svg+xml`                                                                       | `{{domxref("XMLDocument")}}` |

## 예제

### XML 해석

parser 변수를 통해 새로이 해석할 객체를 만들었다면, 이제 `parseFromString()` 메소드를 통해 XML 문서를 해석할 수 있다.

```js
let parser = new DOMParser()
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml")
```

#### 오류 대응

만약 해석에 실패할 경우, `DOMParser` 객체는 예외를 발생시키지 않고, 아래와 같은 오류 문서를 반환한다.

```xml
<parsererror xmlns="http://www.mozilla.org/newlayout/xml/parsererror.xml">
  (영문 오류 내용)
  <sourcetext>(오류가 발생한 XML 소스 조각)</sourcetext>
</parsererror>
```

또한 해석 오류를 [오류 콘솔](/ko/docs/Error_Console)에서도 볼 수 있으며, 여기에 후술할(역주: geckoRelease) 문서 URI도 포함된다

### SVG 및 HTML 해석

The `DOMParser` 객체는 {{geckoRelease("10.0")}} 규격에 맞는 SVG 문서도 해석할 수 있으며,{{geckoRelease("12.0")}} 규격에 맞는 HTML 문서를 해석할 수 있다. MIME 형식에 따라 아래와 같이 다른 객체가 반환될 수 있다.

1. IME 형식이 `text/xml`이면, `XMLDocument` 객체가 반환된다.
2. MIME 형식이 `image/svg+xml`이면, `SVGDocument` 객체가 반환된다.
3. MIME 형식이 `text/html`이면, `HTMLDocument` 객체가 반환된다.

```js
let parser = new DOMParser()
let doc = parser.parseFromString(stringContainingXMLSource, "application/xml")
// Document 객체가 반환되지만, SVGDocument 및 HTMLDocument 객체가 아니다.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingSVGSource, "image/svg+xml")
// SVGDocument 객체가 반환되며, 이 또한 Document 객체이기도 하다.

parser = new DOMParser();
doc = parser.parseFromString(stringContainingHTMLSource, "text/html")
// HTMLDocument 객체가 반환되며, 이 또한 Document 객체이기도 하다.
```

## DOMParser HTML 확장

```js
/*
 * DOMParser HTML 확장
 * 2012-09-04
 *
 * By Eli Grey, http://eligrey.com
 * Public domain.
 * 이 구현체에 대한 보증이 없으므로 주의해서 사용할 것.
 */

/*! @source https://gist.github.com/1129031 */
/*global document, DOMParser*/

(function(DOMParser) {
    "use strict";

    var proto = DOMParser.prototype,
        nativeParse = proto.parseFromString;

    // Firefox/Opera/IE 에서 지원하지 않는 형식에 오류 발생
    try {
        // WebKit returns null on unsupported types
        if ((new DOMParser()).parseFromString("", "text/html")) {
            // text/html parsing is natively supported
            return;
        }
    } catch (ex) {}

    proto.parseFromString = function(markup, type) {
        if (/^\s*text\/html\s*(?:;|$)/i.test(type)) {
            var
              doc = document.implementation.createHTMLDocument("")
            ;
                  if (markup.toLowerCase().indexOf('<!doctype') > -1) {
                    doc.documentElement.innerHTML = markup;
                  }
                  else {
                    doc.body.innerHTML = markup;
                  }
            return doc;
        } else {
            return nativeParse.apply(this, arguments);
        }
    };
}(DOMParser));
```

## 규격

| Specification                                                                                        | Status                           | Comment |
| ---------------------------------------------------------------------------------------------------- | -------------------------------- | ------- |
| {{SpecName('HTML WHATWG', '#dom-parsing-and-serialization', 'DOM parsing')}} | {{Spec2('HTML WHATWG')}} |         |

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [XML 문서 직렬화와 해석](/ko/docs/Parsing_and_serializing_XML)
- {{domxref("XMLHttpRequest")}}
- {{domxref("XMLSerializer")}}
- {{jsxref("JSON.parse()")}} - {{jsxref("JSON")}} 문서에 대해 같은 역할을 제공한다.
