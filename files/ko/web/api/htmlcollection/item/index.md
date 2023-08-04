---
title: HTMLCollection.item
slug: Web/API/HTMLCollection/item
---

{{APIRef("HTML DOM")}}

{{domxref("HTMLCollection")}} 의 메소드 `item()` 은 컬렉션 안의 특정 인덱스에 위치한 노드를 반환합니다.

> **참고:**`HTMLCollection`은 실시간이기 때문에, DOM을 변경하면 컬렉션 내의 노드도 변경됩니다. 따라서, 한 노드의 인덱스 값이 항상 일정하지는 않습니다.

## Syntax

```js
var element = HTMLCollection.item(index);
```

### 파라미터

- `index`
  - : 반환받을 {{domxref("Node")}}의 위치. `HTMLCollection`에 들어있는 요소들은 도큐먼트에 나타나는 순서와 동일합니다.

### 반환값

주어진 인덱스의 {{domxref("Node")}}. `index`가 0보다 작거나 length 속성보다 크다면 `null`을 반환합니다.

## 참고사항

`item()` 메소드는 `HTMLCollection`으로부터 순서가 매겨진 하나의 요소를 반환합니다. 자바스크립트에서, `HTMLCollection`을 배열처럼 다루는건 아주 쉽습니다. 아래의 [예시](#example)를 보세요.

## Example

```js
var c = document.images; // HTMLCollection입니다
var img0 = c.item(0); // 이렇게 item() 메소드를 이용할 수 있지만
var img1 = c[1]; // 이렇게 표기하는게 쉽고 더 보편적입니다
```

## 브라우저 호환성

{{Compat}}

## See also

- {{domxref("NodeList.item()")}}
