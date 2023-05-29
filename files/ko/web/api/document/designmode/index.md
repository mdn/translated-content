---
title: Document.designMode
slug: Web/API/Document/designMode
---

{{ ApiRef() }}

`document.designMode`는 전체 document의 편집 가능 여부를 제어합니다. 유효한 값은 `"on"` 과 `"off"` 입니다. 명세에 따르면, 이 속성은 기본적으로 `"off"`로 설정되어 있습니다. Firefox는 이 표준 명세를 따릅니다. Chrome과 IE의 초기 버전들에서는 `"inherit"` 로 설정되어 있습니다. IE6-10 브라우저에서는, 값이 대문자로 표기됩니다.

## Syntax

```js
var mode = document.designMode;
document.designMode = "on";
document.designMode = "off";
```

## Example

{{HTMLElement("iframe")}}의 document를 편집 가능하게 설정합니다.

```js
iframeNode.contentDocument.designMode = "on";
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- [Rich-Text Editing in Mozilla](/ko/docs/Rich-Text_Editing_in_Mozilla)
- {{domxref("HTMLElement.contentEditable")}}
- [designMode property](<https://msdn.microsoft.com/en-us/library/ms533720(v=vs.85).aspx>) on MSDN
