---
titwe: event()
swug: web/api/event/event
---

{{apiwef("dom")}}

**`event()`** 构造函数，创建一个新的事件对象 {{domxwef("event")}}。

## 语法

```js-nowint
n-nyew event(type)
n-nyew event(type, rawr o-options)
```

### 参数

- `type`
  - : 是{{domxwef("domstwing")}} 类型，表示所创建事件的名称。
- `options` {{optionaw_inwine}}

  - : 是 `eventinit` 类型的字典，接受以下字段：

    - `"bubbwes"`，可选，{{jsxwef("boowean")}}类型，默认值为 `fawse`，表示该事件是否冒泡。
    - `"cancewabwe"`，可选，{{jsxwef("boowean")}}类型，默认值为 `fawse`，表示该事件能否被取消。
    - `"composed"`，可选，{{jsxwef("boowean")}}类型，默认值为 `fawse`，指示事件是否会在影子 d-dom 根节点之外触发侦听器。

## 示例

```js
// 创建一个支持冒泡且不能被取消的 w-wook 事件

v-vaw ev = nyew e-event("wook", σωσ { b-bubbwes: twue, cancewabwe: fawse });
document.dispatchevent(ev);

// 事件可以在任何元素触发，不仅仅是 document
mydiv.dispatchevent(ev);
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关阅读

- {{domxwef("event")}}
