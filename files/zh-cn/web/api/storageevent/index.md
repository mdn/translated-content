---
title: StorageEvent
slug: Web/API/StorageEvent
---

{{APIRef("Web Storage API")}}

当前页面使用的 storage 被其他页面修改时会触发 StorageEvent 事件。

\[译者：事件在同一个域下的不同页面之间触发，即在 A 页面注册了 storge 的监听处理，只有在跟 A 同域名下的 B 页面操作 storage 对象，A 页面才会被触发 storage 事件]

{{InheritanceDiagram}}

> **备注：** 尽管这个事件已经早在 Gecko 2.0 时就已存在，但是并不符合规范。老的事件模型直到 `nsIDOMStorageEventObsolete` 确定才被表现出来。

## 方法描述

```
void initStorageEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in DOMString keyArg,
  in DOMString oldValueArg,
  in DOMString newValueArg,
  in DOMString urlArg,
  in nsIDOMStorage storageAreaArg
);
```

## 属性

_除了下面列出的属性以外，`StorageEvent` 还继承了父接口 {{domxref("Event")}} 的属性。_

- {{domxref("StorageEvent.key", "key")}} {{ReadOnlyInline}}
  - : 被修改的键名。当被 `clear()` 方法清除后该属性值为 [`null`](/zh-CN/docs/Web/JavaScript/Reference/Operators/null)。
- {{domxref("StorageEvent.newValue", "newValue")}} {{ReadOnlyInline}}
  - : 修改后的新值。当被 `clear()` 方法清除或者从存储中移除该键值对时，`newValue` 的值为 `null` 。
- {{domxref("StorageEvent.oldValue", "oldValue")}} {{ReadOnlyInline}}
  - : 该键（`key`）在修改前的旧值。在添加新键值对时由于没有原始值，该属性值为 `null`。
- {{domxref("StorageEvent.storageArea", "storageArea")}} {{ReadOnlyInline}}
  - : 被操作的 {{DOMxRef("Storage")}} 对象。
- {{domxref("StorageEvent.url", "url")}} {{ReadOnlyInline}}
  - : `key` 发生改变的对象所在文档的 URL 地址。

## 方法

### initStorageEvent()

类似 DOM 中的初始化事件，即初始化新创建的 Storage 对象的属性。

```
void initStorageEvent(
  in DOMString typeArg,
  in boolean canBubbleArg,
  in boolean cancelableArg,
  in DOMString keyArg,
  in DOMString oldValueArg,
  in DOMString newValueArg,
  in DOMString urlArg,
  in nsIDOMStorage storageAreaArg
);
```

- 参数：

  `typeArg`

  - : 事件名

- `canBubbleArg`
  - : 布尔值，代表是否可以通过 dom 冒泡
- `cancelableArg`
  - : 布尔值，代表是否可以注销事件
- `keyArg`
  - : 事件结果时被改变的值对应的属性名称
- `oldValueArg`
  - : 旧值
- `newValueArg`
  - : 新值
- `urlArg`
  - : 事件初始化时页面的 url
- `storageAreaArg`
  - : 发生在哪个 storage 对象上

## 规范

{{Specifications}}

## 参阅

- [Specification](http://dev.w3.org/html5/webstorage/#the-storage-event)
