---
title: Document.open()
slug: Web/API/Document/open
---

{{APIRef("DOM")}}

**`Document.open()`** 메소드는 문서를 {{domxref("Document.write", "쓰기", "", "1")}} 위해 문서를 열 수 있도록 제공한다.

이 메소드 호출 시 몇 가지 부작용이 발생한다. 예를 들면,

- 현재까지 등록된 모든 요소와 문서, 문서에 속한 윈도우 소속 이벤트 리스너가 모두 삭제된다.
- 현존했던 모든 요소가 문서에서 삭제된다.

## 문법

```js
document.open();
```

### 인자

없음.

### Return value반환값

`Document` 객체 인스턴스.

## 예시

이 간단한 코드는 문서를 열면서, 원하는 내용을 작성하여 기존 HTML 문서 구조를 대체하고, 문서를 닫는 예제이다.

```js
document.open();
document.write("<p>Hello world!</p>");
document.write("<p>I am a fish</p>");
document.write("<p>The number is 42</p>");
document.close();
```

## Notes

`document.open()` 메소드는 페이지를 불러온 후 {{domxref("document.write()")}} 메소드 호출 시 자동으로 호출된다.

Firefox 및 Internet Explorer 에서는 기존까지 모든 요소 뿐 만 아니라 자바스크립트 변수까지 제거했었다. 하지만 현재 그런 경우는 없다.document non-spec'ed parameters to document.open

## document.open()의 인자 3개

잘 사용하지 않지만, `document.open()` 메소드는 3 개의 인자를 받을 수 있으며, 호출할 경우 {{domxref("Window.open()")}} 메소드와 동일하게 동작한다(`Window.open()` 메소드 참고).

다음 예제는 Github 웹 사이트를 새 창으로 열게 되며, opener 개체를 `null`로 설정한다.

```js
document.open("https://www.github.com", "", "noopener=true");
```

## document.open()의 인자 2개

브라우저에서는 2개의 인자를 가진 `document.open()` 또한 가지고 있으며, 아래와 같은 구조를 가진다.

```js
document.open(type, replace);
```

Where `type` 인자는 문서를 작성할 MIME 형식을 정의하며(예: `text/html`), 현재 히스토리를 대체(예: `"replace"`) 하는 새 문서 작성을 시작할 수 있다.

하지만 이런 호출은 더 이상 사용할 수 없으며, 예외 또한 발생하지 않는다.대신 인자가 없는 `document.open()` 메소드가 호출되는 효과를 지니며, 대신 브라우저 히스토리 대체는 그대로 작동한다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이보기

- {{domxref("Document")}}
- {{domxref("Window.open()")}}
