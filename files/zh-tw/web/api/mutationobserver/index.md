---
title: MutationObserver
slug: Web/API/MutationObserver
---

{{APIRef("DOM")}}

`MutationObserver` 提供開發人員一個方法，來對 [DOM](/zh-TW/docs/Web/API/Document_Object_Model) tree 的變動來作反應，這被設計用來替換在 DOM3 事件規範中的 [Mutation Events](/zh-TW/docs/DOM/Mutation_events)。

## 建構式

### `MutationObserver()`

以下舉例為一個新的 DOM mutation observers 建構式。

```plain
new MutationObserver(
  function callback
);
```

#### 參數

- `callback`
  - : 這個函式會在 DOM 有變化時被呼叫，observer 會用兩個參數來呼叫它，第一個是 `MutationRecord` 物件陣列，而第二個參數則是觀察者目標本身。

## Instance methods

| `void observe( {{domxref("Node")}} target, MutationObserverInit options );` |
| --------------------------------------------------------------------------- |
| `void disconnect();`                                                        |
| `Array takeRecords();`                                                      |

> **備註：** {{domxref("Node")}} target should not be confused with [NodeJS](https://nodejs.org/en/).

### `observe()`

Registers the `MutationObserver` instance to receive notifications of DOM mutations on the specified node.

```plain
void observe(
  {{domxref("Node")}} target,
  MutationObserverInit options
);
```

#### Parameters

- `target`
  - : The {{domxref("Node")}} on which to observe DOM mutations.
- `options`
  - : A [`MutationObserverInit`](#mutationobserverinit) object, specifies which DOM mutations should be reported.

> [!NOTE]
> Adding an observer to an element is just like addEventListener, if you observe the element multiple times it does not make a difference. Meaning if you observe element twice, the observe callback does not fire twice, nor will you have to run disconnect() twice. In other words, once an element is observed, observing it again with the same observer instance will do nothing. However if the callback object is different it will of course add another observer to it.

### `disconnect()`

Stops the `MutationObserver` instance from receiving notifications of DOM mutations. Until the [`observe()`](<#observe()>) method is used again, observer's callback will not be invoked.

```plain
void disconnect();
```

### `takeRecords()`

Empties the `MutationObserver` instance's record queue and returns what was in there.

```plain
Array takeRecords();
```

#### Return value

Returns an Array of [`MutationRecord`s](#mutationrecord).

## `MutationObserverInit`

`MutationObserverInit` is an object which can specify the following properties:

> [!NOTE]
> At the very least, `childList`, `attributes`, or `characterData` must be set to `true`. Otherwise, "An invalid or illegal string was specified" error is thrown.

| Property                | Description                                                                                                            |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `childList`             | Set to `true` if additions and removals of the target node's child elements (including text nodes) are to be observed. |
| `attributes`            | Set to `true` if mutations to target's attributes are to be observed.                                                  |
| `characterData`         | Set to `true` if mutations to target's data are to be observed.                                                        |
| `subtree`               | Set to `true` if mutations to not just target, but also target's descendants are to be observed.                       |
| `attributeOldValue`     | Set to `true` if `attributes` is set to `true` and target's attribute value before the mutation needs to be recorded.  |
| `characterDataOldValue` | Set to `true` if `characterData` is set to `true` and target's data before the mutation needs to be recorded.          |
| `attributeFilter`       | Set to an array of attribute local names (without namespace) if not all attribute mutations need to be observed.       |

## `MutationRecord`

`MutationRecord` is the object that will be passed to the observer's callback. It has the following properties:

| Property             | Type                    | Description                                                                                                                                                                                                                                |
| -------------------- | ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `type`               | `String`                | Returns `attributes` if the mutation was an attribute mutation, `characterData` if it was a mutation to a `CharacterData` node, and `childList` if it was a mutation to the tree of nodes.                                                 |
| `target`             | {{domxref("Node")}}     | Returns the node the mutation affected, depending on the `type`. For `attributes`, it is the element whose attribute changed. For `characterData`, it is the `CharacterData` node. For `childList`, it is the node whose children changed. |
| `addedNodes`         | {{domxref("NodeList")}} | Return the nodes added. Will be an empty `NodeList` if no nodes were added.                                                                                                                                                                |
| `removedNodes`       | {{domxref("NodeList")}} | Return the nodes removed. Will be an empty `NodeList` if no nodes were removed.                                                                                                                                                            |
| `previousSibling`    | {{domxref("Node")}}     | Return the previous sibling of the added or removed nodes, or `null`.                                                                                                                                                                      |
| `nextSibling`        | {{domxref("Node")}}     | Return the next sibling of the added or removed nodes, or `null`.                                                                                                                                                                          |
| `attributeName`      | `String`                | Returns the local name of the changed attribute, or `null`.                                                                                                                                                                                |
| `attributeNamespace` | `String`                | Returns the namespace of the changed attribute, or `null`.                                                                                                                                                                                 |
| `oldValue`           | `String`                | The return value depends on the `type`. For `attributes`, it is the value of the changed attribute before the change. For `characterData`, it is the data of the changed node before the change. For `childList`, it is `null`.            |

## Example usage

The following example was taken from [this blog post](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/).

```js
// select the target node
var target = document.querySelector("#some-id");

// create an observer instance
var observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    console.log(mutation.type);
  });
});

// configuration of the observer:
var config = { attributes: true, childList: true, characterData: true };

// pass in the target node, as well as the observer options
observer.observe(target, config);

// later, you can stop observing
observer.disconnect();
```

## Additional reading

- [A brief overview](http://updates.html5rocks.com/2012/02/Detect-DOM-changes-with-Mutation-Observers)
- [A more in-depth discussion](https://hacks.mozilla.org/2012/05/dom-mutationobserver-reacting-to-dom-changes-without-killing-browser-performance/)
- [A screencast by Chromium developer Rafael Weinstein](https://www.youtube.com/watch?v=eRZ4pO0gVWw)
- [The mutation summary library](https://github.com/rafaelw/mutation-summary)
- [The DOM standard](https://dom.spec.whatwg.org/#mutation-observers) which defines the `MutationObserver` interface

## Browser compatibility

{{Compat}}
