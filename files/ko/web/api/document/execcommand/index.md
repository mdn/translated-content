---
title: Document.execCommand()
slug: Web/API/Document/execCommand
---

{{ApiRef("DOM")}}{{deprecated_header}}

HTML 문서가 `designMode`로 전환되면 문서에서 `execCommand` 메서드를 사용할 수 있게 되는데 이것을 이용해서 문서의 편집 가능한 영역을 변경할 수 있습니다. 대부분의 명령어는 문서의 선택 영역에 영향(_볼드, 이탤릭 등_)을 미치고 나머지는 새 요소를 추가(링크 추가)하거나 전체 줄에 영향(들여쓰기)을 미칩니다. `contentEditable`을 사용할 때에 `execCommand()`를 호출하면 현재 활성화된 편집 요소에 영향을 미칩니다.

## 문법

```js
bool = document.execCommand(aCommandName, aShowDefaultUI, aValueArgument);
```

### 반환값

명령어가 지원되지 않거나 활성화되어 있지 않으면 `false` {{jsxref('Boolean')}} 값을 반환합니다.

### 매개 변수

- `aCommandName`
  - : 실행해야할 명령어 이름 {{domxref("DOMString")}}을 나타냅니다. 사용 가능한 명령어 목록은 [Commands](#commands)를 참고하세요.
- `aShowDefaultUI`
  - : 기본 사용자 UI가 나타나야하는지를 보여주는 {{jsxref("Boolean")}} 값입니다. Mozilla에서는 구현되어 있지 않습니다.
- `aValueArgument`
  - : 입력 변수가 필요한 명령어(`insertImage`와 같이 삽입할 이미지의 URL이 필요한)의 경우 이 {{domxref("DOMString")}}으로 정보를 전달합니다. 변수가 필요하지 않으면 `null`을 표기합니다.

### 명령어

- `backColor`
  - : 문서의 배경색을 변경합니다. `styleWithCss` 모드에서는 대신 상위 요소의 배경색에 영향을 미칩니다. 변수 값으로 {{cssxref("&lt;color&gt;")}} 값을 넘겨야 합니다. Internet Explorer는 이 명령어를 텍스트 배경색을 변경하는데 사용합니다.
- `bold`
  - : 선택 영역이나 입력 위치에 볼드를 온/오프합니다. Internet Explorer는 {{HTMLElement("b")}} 대신 {{HTMLElement("strong")}} 태그를 사용합니다.
- `contentReadOnly`
  - : 내용 문서를 읽기 전용으로 하거나 편집 가능하게 합니다. boolean true/false 값을 변수로 넘겨주어야 합니다. (Internet Explorer는 지원하지 않습니다.)
- `copy`
  - : 클립보드에 현재 선택 영역의 내용을 복사합니다. 브라우저마다 이 기능이 활성화되는 조건이 다르고 계속해서 변경됩니다. 상황에 따라서 이 기능을 사용할 수 있을지 호환성 표를 참고하세요.
- `createLink`
  - : 선택 영역이 있을 때 선택 영역에 링크 요소를 만듭니다. 변수 값으로 HREF URI 문자열이 필요합니다. URI는 최소 한글자 이상이어야 하고 공백문자여도 됩니다. (Internet Explorer는 null URI 값으로 링크를 생성합니다.)
- `cut`
  - : 현재 선택 영역을 잘라내어서 클립보드에 복사합니다. 브라우저마다 이 기능이 활성화되는 조건이 다르고 계속해서 변경됩니다. 상황에 따라서 이 기능을 사용할 수 있을지 호환성 표를 참고하세요.
- `decreaseFontSize`
  - : 선택 영역이나 입력 위치에 {{HTMLElement("small")}} 태그를 추가합니다. (Internet Explorer는 지원하지 않습니다.)
- `delete`
  - : 현재 선택 영역을 지웁니다.
- `enableInlineTableEditing`
  - : 표의 행과 열을 추가 삭제하는 명령 도구를 활성화하거나 비활성화합니다. (Internet Explorer는 지원하지 않습니다.)
- `enableObjectResizing`
  - : 이미지나 다른 크기 조정이 가능한 객체의 크기 조정 도구를 활성화하거나 비활성화합니다.
- `fontName`
  - : 선택 영역이나 입력 위치의 서체 이름을 변경합니다. 변수 값으로 서체 이름 문자열(`예를 드러 "Arial"`)을 넘겨야 합니다.
- `fontSize`
  - : 선택 영역이나 입력 위치의 서체 크기를 변경합니다. 변수 값으로 HTML 서체 크기(`1`-`7`)을 넘겨야 합니다.
- `foreColor`
  - : 선택 영역이나 입력 위치의 서체 색상을 변경합니다. 변수 값으로 색상 값 문자열을 넘겨야 합니다.
- `formatBlock`
  - : 현재 선택 영역이 있는 줄을 포함하는 HTML 요소를 추가하고 줄을 포함하는 요소가 있을 경우 요소을 변경합니다(Firefox에서는 BLOCKQUOTE가 예외적으로 상위 요소를 감쌉니다). 변수 값으로 태그 이름 문자열을 넘겨야 합니다. 실질적으로 모든 블록 요소를 사용할 수 있습니다(예 "H1", "P", "DL", "BLOCKQUOTE"). (Internet Explorer는 제목 태그 H1 - H6와 ADDRESS, PRE만 지원하고 태그 구분자 < >를 써서 "\<H1>"와 같이 사용해야 합니다.)
- `forwardDelete`
  - : [커서](http://en.wikipedia.org/wiki/Cursor_%28computers%29) 위치 앞의 글자를 지웁니다. delete 키를 누른 것과 동일합니다.
- `heading`
  - : 선택 영역이나 입력 위치 줄에 제목 태그를 추가합니다. 변수 값으로 제목 이름 문자열(예 "H1", "H6")을 넘겨야 합니다. (Internet Explorer와 Safari는 지원하지 않습니다.)
- `hiliteColor`
  - : 선택 영역이나 입력 위치의 배경 색상을 변경합니다. 변수 값으로 생상 값 문자열을 넘겨야 합니다. 이 함수는 UseCSS가 반드시 켜져 있어야 합니다. (Internet Explorer는 지원하지 않습니다.)
- `increaseFontSize`
  - : 선택 영역이나 입력 위치에 BIG 태그를 추가합니다. (Internet Explorer는 지원하지 않습니다.)
- `indent`
  - : 선택 영역이나 입력 위치를 포함하는 줄을 들여쓰기 합니다. Firefox에서는 선택 영역이 여러줄에 걸처 서로 다른 들여쓰기 값을 가지고 있으면 제일 조금 들여쓰기된 줄만 들여쓰기가 됩니다.
- `insertBrOnReturn`
  - : 엔터키를 눌렀을 때 br 태그를 넣을지 현재의 블록 요소를 두개로 나줄지 제어합니다. (Internet Explorer는 지원하지 않습니다.)
- `insertHorizontalRule`
  - : 입력 위치에 가로줄을 넣습니다(선택 영역은 지워집니다).
- `insertHTML`
  - : 입력 위치에 HTML 문자열을 넣습니다(선택 영역을 지워집니다). 변수 값으로 유효한 HTML 문자열을 넘겨야 합니다. (Internet Explorer는 지원하지 않습니다.)
- `insertImage`
  - : 입력 위치에 이미지를 넣습니다(선택 영역을 지워집니다). 변수 값으로 이미지의 SRC URI 문자열을 넘겨야 합니다. URI는 최소 한글자 이상이어야 하고 공백문자여도 됩니다. (Internet Explorer는 null URI 값으로 링크를 생성합니다.)
- `insertOrderedList`
  - : 선택 영역이나 입력 위치에 번호 순서가 있는 목록을 넣습니다.
- `insertUnorderedList`
  - : 선택 영역이나 입력 위치에 번호 순서가 없는 목록을 넣습니다.
- `insertParagraph`
  - : 선택 영역이나 현재 줄에 문단 태그를 추가합니다. (Internet Explorer는 입력 위치에 문단을 삽입하고 선택 영역은 삭제합니다.)
- `insertText`
  - : 입력 위치에 지정된 텍스트를 입력합니다(선택 영역은 지워집니다).
- `italic`
  - : 선택 영역이나 입력 위치에 이탤릭을 온/오프합니다. (Internet Explorer는 I 대신 EM 태그를 사용합니다.)
- `justifyCenter`
  - : 선택 영역이나 입력 위치를 가운데 정렬합니다.
- `justifyFull`
  - : 선택 영역이나 입력 위치를 양쪽 정렬합니다.
- `justifyLeft`
  - : 선택 영역이나 입력 위치를 좌측 정렬합니다.
- `justifyRight`
  - : 선택 영역이나 입력 위치를 우측 정렬합니다.
- `outdent`
  - : 선택 영역이나 입력 위치의 줄을 내어쓰기 합니다.
- `paste`
  - : 입력 위치에 클립보드의 내용을 붙여넣기 합니다(현재의 선택 영역을 교체합니다). user.js 설정 파일에서 클립보드가 활성화 되어 있어야 합니다. 참고 \[1].
- `redo`
  - : 이전에 실행 취소된 명령을 다시 실행합니다.
- `removeFormat`
  - : 현재 선택 영역의 모든 문서 형식을 제거합니다.
- `selectAll`
  - : 편집 가능 영역의 모든 내용을 선택합니다.
- `strikeThrough`
  - : 선택 영역이나 입력 위치의 가로줄을 온/오프 합니다.
- `subscript`
  - : 선택 영역이나 입력 위치의 아랫첨자를 온/오프 합니다.
- `superscript`
  - : 선택 영역이나 입력 위치의 윗첨자를 온/오프 합니다.
- `underline`
  - : 선택 영역이나 입력 위치의 밑줄을 온/오프 합니다.
- `undo`
  - : 직전에 실행된 명령을 취소합니다.
- `unlink`
  - : 선택된 링크에서 링크 태그를 제거합니다.
- `useCSS` {{Deprecated_inline}}
  - : 생성된 마크업의 HTML 태그나 CSS 사용을 토글합니다. 변수 값으로 boolean true/false 값을 넘겨야 합니다. 주의: 이 값은 논리적으로 반대입니다(CSS를 사용하기 위해서는 false를 HTML을 사용하기 위해서는 true). (Internet Explorer는 지원하지 않습니다.) 이 명령은 더이상 사용하지 않습니다. 대신 _styleWithCSS_ 명령어를 사용하세요.
- `styleWithCSS`
  - : _useCSS_ 명령어를 대체합니다. 변수 값은 예상한대로 작동합니다. 예를 들어서 마크업에서 _style_ 속성을 수정하거나 생성하려면 true를, false는 포매팅 요소를 생성합니다.

## 예제

CodePen의 [how to use](http://codepen.io/netsi1964/full/QbLLGW/)를 참고하세요.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{domxref("HTMLElement.contentEditable")}}
- {{domxref("document.designMode")}}
- [Rich-Text Editing in Mozilla](/ko/docs/Rich-Text_Editing_in_Mozilla)
- [Scribe's "Browser Inconsistencies" documentation](https://github.com/guardian/scribe/blob/master/BROWSERINCONSISTENCIES.md) with bugs related to `document.execCommand`.
