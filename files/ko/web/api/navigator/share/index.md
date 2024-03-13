---
title: Navigator.share
slug: Web/API/Navigator/share
---

{{APIRef("HTML DOM")}}{{SeeCompatTable}}

**`Navigator.share()`** 메소드는 Web Share API 의 부분으로서 디바이스의 네이티브 공유하기 메커니즘을 작동시킨다. Web Share API 가 지원되지 않는다면, 이 메소드는 `undefined` 일 것이다.

## Syntax

```js
var sharePromise = window.navigator.share(data);
```

### Parameters

- _data_
  - : 공유할 데이터가 담긴 객체. 아래의 필드들 중 적어도 하나는 명시되어야 한다. 사용 가능한 옵션들은:
- `url`: 공유될 URL을 나타내는 {{domxref("USVString")}}.
- `text`: 공유될 본문을 나타내는 {{domxref("USVString")}}.
- `title`: 공유될 제목을 나타내는 {{domxref("USVString")}}.

### Return value

사용자가 공유하기 액션을 완료하면 resolve 될 {{domxref("Promise")}}. _data_ 파라메터가 정확하게 명시되지 않는다면 즉시 reject 될 것이다.

예를 들어, 안드로이드용 크롬에서 반환되는 `Promise` 는 사용자가 공유할 애플리케이션을 선택한 후에 resolve 될 것이다.

## Examples

```js
navigator.share({
  title: document.title,
  text: "Hello World",
  url: "https://developer.mozilla.org",
}); // share the URL of MDN
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
