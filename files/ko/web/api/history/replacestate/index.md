---
title: History.replaceState()
slug: Web/API/History/replaceState
---

{{APIRef("History API")}}

**`History.replaceState()`** 메서드는 현재 history를 수정해 메소드의 매개 변수에 전달 된 `stateObj`, `title`, `URL`로 대체합니다. 이 방법은 특히 일부 유저의 동작에 대한 응답으로 history 객체의 상태나 현재 history의 URL을 업데이트하려는 경우에 유용합니다.

## 구문

```js
history.replaceState(stateObj, title[, url])
```

### Parameters

- `stateObj`
  - : state 객체는 `replaceState`에 전달된 history 항목과 연관된 JavaScript 객체입니다. state object는 `null`일 수 있습니다.
- `title`
  - : 나중에는 사용할 수도 있지만, [대부분의 브라우저는 현재 이 파라미터를 무시하고 있습니다.](https://github.com/whatwg/html/issues/2174) 이 부분에 빈 String을 전달하면 나중에 메소드가 변화하더라도 안전합니다. 또는, state에 짧은 title을 전달할 수도 있습니다.
- `url` {{optional_inline}}
  - : history 항목의 URL 입니다. 새 URL은 현재 URL과 출처가 동일해야(same origin)합니다. 그렇지 않으면 replaceState에서 예외가 발생합니다.

## 예제

`http://www.mozilla.org/` 에서 아래 JavaScript를 실행한다고 가정합시다:

```js
const stateObj = { foo: "bar" };
history.pushState(stateObj, "", "bar.html");
```

위 두 줄에 대한 설명은 [Working with the History API](/ko/docs/Web/API/History_API/Working_with_the_History_API) 문서의 [Example of `pushState()` method](/ko/docs/Web/API/History_API/Working_with_the_History_API#Example_of_pushState_method)에서 확인할 수 있습니다. 그 다음, `http://www.mozilla.org/bar.html` 에서 아래와 같은 JavaScript를 실행한다고 가정해보세요:

```js
history.replaceState(stateObj, "", "bar2.html");
```

이렇게하면 URL 표시줄에 `http://www.mozilla.org/bar2.html` 이라고 표시되지만, 브라우저가 `bar2.html` 을 로드하거나 `bar2.html`파일이 있는지 확인하지는 않습니다.

이제 사용자가 `http://www.microsoft.com` 으로 이동한 다음, 뒤로가기 버튼을 누른다고 가정해봅시다. 이 때, URL 표시줄에는 `http://www.mozilla.org/bar2.html` 이 표시됩니다. 사용자가 다시 뒤로가기 버튼을 누르면, URL 표시줄에는 `http://www.mozilla.org/foo.html` 이 표시되고, bar.html은 완전히 무시되어 표시되지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
