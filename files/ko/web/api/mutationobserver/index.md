---
title: MutationObserver
slug: Web/API/MutationObserver
---
{{APIRef("DOM")}}

`MutationObserver` 는 개발자들에게 [DOM](/ko/docs/DOM) 변경 감시를 제공합니다. DOM3 이벤트 기술 설명서에 정의된 [Mutation Events](/ko/docs/DOM/Mutation_events) 를 대체합니다.

## 생성자

### `MutationObserver()`

새 DOM 변경 감시자의 인스턴스화에 대한 생성자.

```
new MutationObserver(
  function callback
);
```

## Parameters

- `callback`
  - : 콜백 함수는 각 DOM 변경시 마다 호출될 것입니다. 감시자는 두 인자와 함께 이 함수를 호출할 것입니다. 첫째 인자는 오브젝트들의 배열이며, 오브젝트의 각 형식은 {{domxref("MutationRecord")}} 입니다. 둘째 인자는 이 `MutationObserver` 인스턴스 입니다.

## 인스턴스 함수들

| `void observe( {{domxref("Node")}} target, MutationObserverInit options );` |
| -------------------------------------------------------------------------------- |
| `void disconnect();`                                                             |
| `Array takeRecords();`                                                           |

> **참고:** **주**: {{domxref("Node")}}의 대상은 [NodeJS](https://nodejs.org/en/) 와 혼동되지 말아야 합니다.

### `observe()`

특정 노드에서 DOM 변경의 알림을 받을 수 있도록 `MutationObserver` 인스턴스를 등록.

```
void observe(
  {{domxref("Node")}} target,
  MutationObserverInit options
);
```

## 파라미터

- `target`
  - : DOM 변경을 감시할 {{domxref("Node")}}.
- `options`
  - : DOM 변경이 보고되어야 할 특정 [`MutationObserverInit`](#MutationObserverInit) 객체.

> **참고:** 주: observer를 element에 추가하는 것은 addEventListner와 비슷하며, 여러 번 element를 관찰하더라도 차이가 나지 않습니다. element를 두번 관찰한다고해서 observe callback이 두 번 발생하지 않으며, disconnect()를 두번 실행하지 않아도 됩니다. 다시 말해서, 한번 element를 관찰하면 동일한 observer instance로 다시 관찰하더라도 아무 일이 발생하지 않습니다. 물론 callback object가 다르다면 다른 observer를 추가합니다.

### `disconnect()`

DOM 변경 알림을 받는 `MutationObserver` 인스턴스 중지. [`observe()`](<#observe()>) 재사용시까지 감시 콜백은 발동되지 않을 것입니다.

```
void disconnect();
```

### `takeRecords()`

`MutationObserver` 인스턴스의 레코드 큐를 비우고 안에 든것을 반환합니다.

```
Array takeRecords();
```

## 반환값

{{domxref("MutationRecord")}}들의 배열을 반환.

## `MutationObserverInit`

`MutationObserverInit` 는 다음 속성들을 가진 객체입니다:

> **참고:** 주: 최소한 `childList`, `attributes`, 또는 `characterData`는 `true`로 설정해야합니다. 그렇지 않으면 'An invalid or ilegal string was specified' 오류가 발생합니다.

| 속성                    | 설명                                                                                                                   |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `childList`             | Set to `true` if additions and removals of the target node's child elements (including text nodes) are to be observed. |
| `attributes`            | Set to `true` if mutations to target's attributes are to be observed.                                                  |
| `characterData`         | Set to `true` if mutations to target's data are to be observed.                                                        |
| `subtree`               | Set to `true` if mutations to target and target's descendants are to be observed.                                      |
| `attributeOldValue`     | Set to `true` if `attributes` is set to `true` and target's attribute value before the mutation needs to be recorded.  |
| `characterDataOldValue` | Set to `true` if `characterData` is set to `true` and target's data before the mutation needs to be recorded.          |
| `attributeFilter`       | Set to an array of attribute local names (without namespace) if not all attribute mutations need to be observed.       |

## 사용 예

다음 예제는 [이 블로그 글](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)에서 발췌했습니다.

```js
// 대상 node 선택
var target = document.getElementById('some-id');

// 감시자 인스턴스 만들기
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    console.log(mutation.type);
  });
});

// 감시자의 설정:
var config = { attributes: true, childList: true, characterData: true };

// 감시자 옵션 포함, 대상 노드에 전달
observer.observe(target, config);

// 나중에, 감시를 중지 가능
observer.disconnect();
```

## 더 보기

- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](http://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](http://www.youtube.com/watch?v=eRZ4pO0gVWw)
- [The mutation summary library](http://code.google.com/p/mutation-summary/)

## 규격

{{Specifications}}

## 브라우저 호환성

{{Compat}}
