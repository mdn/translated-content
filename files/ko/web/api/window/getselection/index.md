---
title: Window.getSelection()
slug: Web/API/Window/getSelection
---

{{ ApiRef() }}

## 요약

사용자 또는 Caret의 위치에 따라 선택된 텍스트의 범위를 나타내는 {{domxref("Selection")}} 객체를 반환한다.

## 문법

```js
selection = window.getSelection();
```

- selection은 {{domxref("Selection")}} 객체입니다. 빈 문자열("")을 추가하거나 {{domxref("Selection.toString()")}}을 호출하면 선택된 text를 반환합니다.

## 예제

```js
function foo() {
  var selObj = window.getSelection();
  alert(selObj);
  var selRange = selObj.getRangeAt(0);
  // do stuff with the range
}
```

## 노트

### Selection 객체의 문자열 표현

JavaScript에서 문자열을 인자로 받는 함수({{ Domxref("window.alert()") }} 나 {{ Domxref("document.write()") }} 같은)에 객체를 전달하면 해당 객체의 {{jsxref("Object.toString", "toString()")}} 메소드를 호출하고 그 결과를 호출한 함수로 전달합니다. 이를 통해서 실제로는 속성과 메소드를 갖는 문자열이 아닌 일반적인 객체라 하더라도 문자열을 인자로 받는 함수의 인자로 사용할 때에는 객체를 문자열인 것처럼 전달할 수 있습니다.

위 예제에서 selObj를 {{domxref("window.alert()")}}의 인자로 전달하면 `selObj.toString()`가 자동적으로 호출됩니다. 하지만, selObj에 대해서 [`length`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/length) 나 [`substr`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/substr) 같은 JavaScript [String](/ko/docs/Web/JavaScript/Reference/Global_Objects/String)의 속성이나 메소드를 사용하면 객체에 그러한 속성이나 메소드가 없기 때문에 에러나 예상치 못한 결과가 발생합니다. `Selection` 객체를 문자열로 사용하려면 다음처럼 직접 `toString()` 메소드를 호출해야 합니다:

<pre class="brush:js;gutter:false;">var selectedText = selObj.toString();</pre>

- `selObj`는 `Selection` 객체입니다.
- `selectedText`는 문자열 (선택한 문자열)입니다.

### Related objects

It's also useful to note that you can call {{domxref("Document.getSelection()")}}, which works identically.

HTML inputs provide simpler helper APIs for working with selection (see {{domxref("HTMLInputElement.setSelectionRange()")}}).

Notice the difference between _selection_ and _focus_. {{domxref("Document.activeElement")}} returns the focused element.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("Selection")}}
- {{domxref("Range")}}
- {{domxref("Document.getSelection()")}}
- {{domxref("HTMLInputElement.setSelectionRange()")}}
- {{domxref("Document.activeElement")}}, {{domxref("HTMLElement.focus()")}}, and {{domxref("HTMLElement.blur()")}}
