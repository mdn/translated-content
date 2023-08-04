---
title: Element.classList
slug: Web/API/Element/classList
---

{{APIRef("DOM")}}

**`Element.classList`** 는 엘리먼트의 클래스 속성의 컬렉션인 활성 {{domxref("DOMTokenList")}}를 반환하는 읽기 전용 프로퍼티이다.

`classList` 사용은 공백으로 구분된 문자열인 {{domxref("element.className")}}을 통해 엘리먼트의 클래스 목록에 접근하는 방식을 대체하는 간편한 방법이다.

## 구문

```
const elementClasses = elementNodeReference.classList;
```

`elementClasses`는 `elementNodeReference`의 클래스 속성을 나타내는 {{domxref("DOMTokenList")}}이다. 만약 클래스 속성이 설정되어 있지 않거나 비어있다면 *elementClasses.length*는 `0`을 반환한다. `element.classList` 그 자체는 읽기 전용 프로퍼티지만 `add()`와 `remove()` 메서드를 이용하여 변형할 수 있다.

## 메서드

<dl><dt><code>add( String [, String [, ...]] )</code></dt><dd>지정한 클래스 값을 추가한다. 만약 추가하려는 클래스가 엘리먼트의 <code>class</code> 속성에 이미 존재한다면 무시한다.</dd><dt><code>remove( String [, String [, ...]] )</code></dt><dd>지정한 클래스 값을 제거한다.</dd><dd><div class="note"><strong>노트:</strong> 존재하지 않는 클래스를 제거하는 것은 <strong>에러를 발생시키지 않습니다.</strong></div></dd><dt><code><strong>item</strong>( Number )</code></dt><dd>콜렉션의 인덱스를 이용하여 클래스 값을 반환한다.</dd><dt><code><strong>toggle</strong>( String [, force] )</code></dt><dd>하나의 인수만 있을 때: 클래스 값을 토글링한다. 즉, 클래스가 존재한다면 제거하고 <code>false</code>를 반환하며, 존재하지 않으면 클래스를 추가하고 <code>true</code>를 반환한다.</dd><dd>두번째 인수가 있을 때: 두번째 인수가 <code>true</code>로 평가되면 지정한 클래스 값을 추가하고 <code>false</code>로 평가되면 제거한다.</dd><dt><code>contains( String )</code></dt><dd>지정한 클래스 값이 엘리먼트의 <code>class</code> 속성에 존재하는지 확인한다.</dd><dt><code>replace( oldClass, newClass )</code></dt><dd>존재하는 클래스를 새로운 클래스로 교체한다.</dd></dl>

## 예제

```js
const div = document.createElement("div");
div.className = "foo";

// our starting state: <div class="foo"></div>
console.log(div.outerHTML);

// use the classList API to remove and add classes
div.classList.remove("foo");
div.classList.add("anotherclass");

// <div class="anotherclass"></div>
console.log(div.outerHTML);

// if visible is set remove it, otherwise add it
div.classList.toggle("visible");

// add/remove visible, depending on test conditional, i less than 10
div.classList.toggle("visible", i < 10);

console.log(div.classList.contains("foo"));

// add or remove multiple classes
div.classList.add("foo", "bar", "baz");
div.classList.remove("foo", "bar", "baz");

// add or remove multiple classes using spread syntax
const cls = ["foo", "bar"];
div.classList.add(...cls);
div.classList.remove(...cls);

// replace class "foo" with class "bar"
div.classList.replace("foo", "bar");
```

> **참고:** 파이어폭스 26 이전의 버전에서는 add/remove/toggle 메서드에서 여러 인수의 사용을 구현하지 않았다. <https://bugzilla.mozilla.org/show_bug.cgi?id=814014> 링크를 참조하라.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 참고

- {{domxref("element.className")}}
- {{domxref("DOMTokenList")}}
