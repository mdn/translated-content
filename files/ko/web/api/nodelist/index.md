---
title: NodeList
slug: Web/API/NodeList
---

{{APIRef("DOM")}}

**`NodeList`** 객체는 일반적으로 {{domxref("element.childNodes")}}와 같은 속성(property)과 {{domxref("document.querySelectorAll")}} 와 같은 메서드에 의해 반환되는 [노드](/ko/docs/Glossary/Node/DOM)의 콜렉션입니다.

> **참고:** `NodeList` 가 `Array` 는 아니지만, `forEach()` 를 사용하여 반복할 수 있습니다. 또한 {{jsxref("Array.from()")}} 을 사용하여 `Array` 로 변환 할 수도 있습니다.그러나 일부 오래된 브라우저는 아직`NodeList.forEach()` 또는 `Array.from()` 를 구현하지 않았습니다. 이것은 {{jsxref("Array.forEach()", "Array.prototype.forEach()")}} 를 사용하여 회피할 수 있습니다. — 이 [문서](#example)의 예제를 참조하세요.

경우에 따라, `NodeList`는 라이브 콜렉션으로, DOM의 변경 사항을 실시간으로 콜렉션에 반영합니다. 예를 들어, {{domxref("Node.childNodes")}} 는 실시간입니다:

```js
var parent = document.getElementById("parent");
var child_nodes = parent.childNodes;
console.log(child_nodes.length); // let's assume "2"
parent.appendChild(document.createElement("div"));
console.log(child_nodes.length); // should output "3"
```

다른 경우 `NodeList`는 정적 콜렉션입니다. DOM을 변경해도 콜렉션 내용에는 영향을 주지 않습니다. {{domxref("document.querySelectorAll()")}} 은 정적 `NodeList`를 반환합니다.

`NodeList`의 항목(items)을 순회(iterate)하거나, 특히 리스트의 길이를 캐시(cache)해야 할 때, 이 구분을 유지하는것이 좋습니다.

## 속성(Properties)

- {{domxref("NodeList.length")}}
  - : `NodeList`의 노드의 개수를 반환합니다.

## 메서드(Methods)

<dl><dt>{{domxref("NodeList.item()")}}</dt><dd>리스트 내 항목(item)의 인덱스를 반환하고, 인덱스가 범위 외의 경우일 땐 <code>null</code>을 반환합니다.</dd><dd><code>nodeList[idx]</code>의 대안으로 사용할 수 있습니다.(<code>i</code> 가범위를 벗어날 때(out-of-bounds) <code>undefined</code> 를 반환합니다.) 이것은 비 자바스크립트 언어 DOM 구현에 유용합니다.</dd><dt>{{domxref("NodeList.entries()")}}</dt><dd>{{jsxref("Iteration_protocols","iterator")}} 를 반환하여 코드가 콜렉션에 포함된 모든 키/값 쌍을 순회할 수 있도록 합니다. (이 경우 키는 0부터 시작하는 숫자이고, 값은 노드가 됩니다.)</dd><dt>{{domxref("NodeList.forEach()")}}</dt><dd><code>NodeList</code>의 요소(element)마다 한 번씩, 인자로 전달 받은 함수를 실행하여 요소를 인수(argument)로 함수에 전달합니다.</dd><dt>{{domxref("NodeList.keys()")}}</dt><dd>{{jsxref("Iteration_protocols", "iterator")}}를 반환하여 콜렉션에 포함된 키/값 쌍의 모든 키를 코드가 순회하도록 합니다. (이 경우 키는 0부터 시작하는 숫자입니다.)</dd><dt>{{domxref("NodeList.values()")}}</dt><dd>콜렉션에 포함된 키/값 쌍의 모든 값(nodes)을 코드가 순회할 수 있게 해주는 {{jsxref("Iteration_protocols", "iterator")}}를 반환합니다.</dd></dl>

## Example

for 루프를 사용하여 `NodeList`의 항목을 반복할 수 있습니다.

```js
for (var i = 0; i < myNodeList.length; ++i) {
  var item = myNodeList[i]; // Calling myNodeList.item(i) isn't necessary in JavaScript
}
```

**리스트의 항목(items)을 열거하기 위해 [for...in](/ko/docs/JavaScript/Reference/Statements/for...in) 또는 [for each...in](/ko/docs/JavaScript/Reference/Statements/for_each...in)를 사용하지 않길 바랍니다.** `NodeList`의 길이와 항목 속성까지 열거합니다. 또한 스크립트가 요소({{domxref("element")}}) 객체만 처리한다고 가정하면 오류가 발생할 수 있습니다. 게다가, `for..in`은 고정된 순서로 각 속성들을 접근한다는 보장이 없습니다.

[`for...of`](/ko/docs/JavaScript/Reference/Statements/for...of) 루프는 `NodeList` 객체를 올바르게 반복합니다.

```js
var list = document.querySelectorAll("input[type=checkbox]");
for (var item of list) {
  item.checked = true;
}
```

최신 브라우저는 반복자(iterator) 메서드인 {{domxref("NodeList.forEach()", "forEach()")}}만이 아니라, {{domxref("NodeList.entries()", "entries()")}}, {{domxref("NodeList.values()", "values()")}}, {{domxref("NodeList.keys()", "keys()")}} 까지도 지원합니다.

인터넷 익스플로러의 호환을 위해서는 {{jsxref("Array.forEach()", "Array.prototype.forEach")}} 를 사용하는 방법도 있습니다.

```js
var list = document.querySelectorAll("input[type=checkbox]");
Array.prototype.forEach.call(list, function (item) {
  item.checked = true;
});
```

## Array로 변환하는 법

NodeList의 컨텐츠를 Array의 메소드를 통해 다루는 것이 더 쉬울 때도 있다. 아래는 NodeList 객체를 Array로 변환하는 기법이다.

```js
var div_list = document.querySelectorAll("div"); // returns NodeList
var div_array = Array.prototype.slice.call(div_list); // converts NodeList to Array
```

## NodeList prototype

NodeList에 프로토타입을 추가할 수도 있다.

```js
var elements = document.querySelectorAll(".suggestions");

NodeList.prototype.addEventListener = function (event, func) {
  this.forEach(function (content, item) {
    content.addEventListener(event, func);
  });
};

function log() {
  console.log(this, " was clicked");
}

elements.addEventListener("click", log);
//or
elements.addEventListener("click", function () {
  console.log(this, "  awas clicked");
});
// 클릭된 요소로부터 출력될 요소는 둘 모두 HTML 요소가 된다.
```

forEach에 대한 자세한 내용은 [Array.prototype.forEach()](/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 를 참조하길 바란다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
