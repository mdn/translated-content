---
title: StorageEvent
slug: Web/API/StorageEvent
---

{{APIRef("Web Storage API")}}

当前页面使用的 storage 被其他页面修改时会触发 StorageEvent 事件。

\[译者：事件在同一个域下的不同页面之间触发，即在 A 页面注册了 storge 的监听处理，只有在跟 A 同域名下的 B 页面操作 storage 对象，A 页面才会被触发 storage 事件]

{{InheritanceDiagram}}

## 构造函数

- {{domxref("StorageEvent.StorageEvent()", "StorageEvent()")}}
  - : 返回新构造的 `StorageEvent` 对象。

## 实例属性

_除了下面列出的属性以外，此接口还继承了其父接口 {{domxref("Event")}} 的属性。_

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

## 实例方法

_除了下面列出的方法以外，此接口还继承了其父接口 {{domxref("Event")}} 的方法。_

- {{domxref("StorageEvent.initStorageEvent", "initStorageEvent()")}} {{deprecated_inline}}
  - : 以类似于 DOM 事件接口中名称相似的 {{domxref("Event.initEvent", "initEvent()")}} 方法的方式初始化事件。请改用构造函数。

## 规范

{{Specifications}}

## 浏览器兼容性

{{Compat}}

## 参见

- {{domxref("Web Storage API", "Web 存储 API", "", "nocode")}}
