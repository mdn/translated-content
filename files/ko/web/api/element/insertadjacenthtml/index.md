---
title: Element.insertAdjacentHTML()
slug: Web/API/Element/insertAdjacentHTML
---

{{APIRef("DOM")}}

**`insertAdjacentHTML()`** 메서드는 HTML or XML 같은 특정 텍스트를 파싱하고, 특정 위치에 DOM tree 안에 원하는 node들을 추가 한다. 이미 사용중인 element 는 다시 파싱하지 않는다. 그러므로 element 안에 존재하는 element를 건드리지 않는다. (innerHtml과는 좀 다름). innerHtml보다 작업이 덜 드므로 빠르다.

## 구문

```js
element.insertAdjacentHTML(position, text);
```

position은 아래 있는 단어만 사용 가능하다.

- `'beforebegin'`
  - : element 앞에
- `'afterbegin'`
  - : element 안에 가장 첫번째 child
- `'beforeend'`
  - : element 안에 가장 마지막 child
- `'afterend'`
  - : element 뒤에

`text(인자)는 HTML 또는 XML로 해석될 수 있는 문자열이고(html code), (DOM) tree에 삽입할 수 있다.`

### position 의 예시 그림

```html
<!-- beforebegin -->
<p>
<!-- afterbegin -->
foo
<!-- beforeend -->
</p>
<!-- afterend -->
```

> **참고:** `beforebegin` , `afterend position은 element의 부모가 존재해야 하고, node가 tree 안에 있어야 한다.`

## 예시

```js
// <div id="one">one</div>
var d1 = document.getElementById('one');
d1.insertAdjacentHTML('afterend', '<div id="two">two</div>');

// At this point, the new structure is:
// <div id="one">one</div><div id="two">two</div>
```

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{domxref("Node.insertBefore()")}}
- {{domxref("Node.appendChild()")}} ((position)beforeend 와 같은 효과를 갖는다.)
- [hacks.mozilla.org guest post](http://hacks.mozilla.org/2011/11/insertadjacenthtml-enables-faster-html-snippet-injection/) by Henri Sivonen including benchmark showing that insertAdjacentHTML can be way faster in some cases.
