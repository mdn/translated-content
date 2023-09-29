---
title: Element.hasAttribute()
slug: Web/API/Element/hasAttribute
---

{{APIRef}}

`Elemento.hasAttribute()` 메서드는 특정 요소가 특정 속성을 가지는지 여부를 나타내는 **Boolean** 값을 반환합니다.

## 구문

```js
hasAttribute(name)
```
### 파라미터

- `name`
  - : 속성명을 나타냅니다

### 반환값

불리언 타입의 값을 반환합니다.

## 예시

```js
var foo = document.getElementById("foo");
if (foo.hasAttribute("bar")) {
  // hacer algo
}
```

## Polyfill

```js
(function (prototype) {
  prototype.hasAttribute =
    prototype.hasAttribute ||
    function (name) {
      return !!(this.attributes[name] && this.attributes[name].specified);
    };
})(Element.prototype);
```

## 노트

{{DOMAttributeMethods}}

## 명세사항

{{Specifications}}

## 브라우저 호환성

{{Compat}}