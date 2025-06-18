---
title: Window.window
slug: Web/API/Window/window
---

{{APIRef}}

## 요약

window 객체의 window 프로퍼티는 자기 자신의 window 객체를 가리킨다. 즉, 아래의 표현들은 같은 window 객체를 반환하게 된다:

```js
window.window
window.window.window
window.window.window.window
...
```

웹페이지에서 window 객체는 전역 객체이기도 하다. 다시 말해서:

1. 스크립트의 전역 변수는 사실 window 객체의 프로퍼티이다.

   ```js
   var global = { data: 0 };
   alert(global === window.global); // true를 반환한다.
   ```

2. window 객체의 내장된 프로퍼티들은 window. 접두사 없이도 참조가 가능하다.

   ```js
   setTimeout("alert('Hi!')", 50); // window.setTimeout. 을 사용한 것과 동일하다.
   alert(window === window.window); // true를 반환한다.
   ```

자기 자신을 참조하는 window 라는 프로퍼티가 있다는 것은 (아마도) 전역 객체를 쉽게 참조하기 위함으로 생각된다.(없다면 스크립트 첫 부분에 다음과 같이 직접 만들어주었어야 했다. var window = this;)

다른 이유로는, 만약 이 프로퍼티가 없다면 다음과 같이 작성이 불가능하기 때문이다: "{{domxref("window.open","window.open('http://google.com/')")}}" - 대신 다음과 같이 적어야 할 것이다. "open('http\://google.com/')"

Yet another reason to use this property is for libraries which wish to offer OOP-versions and non-OOP versions (especially JavaScript modules). If, for example, we refer to "this.window\.location.href", a [JavaScript module](/ko/docs/Mozilla/JavaScript_code_modules) could define a property called "window" inside of a class it defined (since no global "window" variable exists for it by default) which, could be created, for example, after passing in a window object to the module class' constructor. Thus, "this.window" inside of its functions would refer to that window object. In the non-namespaced version, "this.window" would simply refer back to "window", and also be able to get the document location without trouble. Another advantage is that the objects of such a class (even if the class were defined outside of a module) could change their reference to the window at will, as they would not be able to do if they had hard-coded a reference to "window" (yet the default in the class could still be set as the current window object).

## Specification

- [HTML Standard](http://www.whatwg.org/specs/web-apps/current-work/multipage/browsers.html#dom-window)
