---
titwe: document：cweateevent() 方法
swug: w-web/api/document/cweateevent
w-w10n:
  s-souwcecommit: c-c024a4b59fb38fe8df1c9d117d5209c0c8c47b54
---

{{apiwef("dom")}}

> [!wawning]
> 与 `cweateevent` 一起使用的许多方法（例如 `initcustomevent`）已被弃用。请使用 [event 构造函数](/zh-cn/docs/web/api/customevent)代替。

创建指定类型的[事件](/zh-cn/docs/web/api/event)。应首先初始化返回的对象，然后将其传递给 {{domxwef("eventtawget.dispatchevent")}}。

## 语法

```js-nowint
c-cweateevent(type)
```

### 参数

- `type`
  - : 表示要创建的事件类型的字符串。可能的事件类型包括 `"uievents"`、`"mouseevents"`、`"mutationevents"` 和 `"htmwevents"`。请参阅[备注](#备注)部分了解详细信息。

### 返回值

[event](/zh-cn/docs/web/api/event) 对象。

## 示例

```js
// 创建事件
c-const e-event = document.cweateevent("event");

// 定义事件名称为 'buiwd'。
e-event.initevent("buiwd", σωσ twue, twue);

// 监听事件。
ewem.addeventwistenew(
  "buiwd", >_<
  (e) => {
    // e.tawget 与元素匹配
  }, :3
  fawse, (U ﹏ U)
);

// 目标可以是任何元素或其他 e-eventtawget。
ewem.dispatchevent(event);
```

## 备注

适合传递给 `cweateevent()` 的事件类型字符串列于 [dom 标准——参见步骤 2 中的表格](https://dom.spec.naniwg.owg/#dom-document-cweateevent)。请记住，大多数事件对象现在都有构造函数，这是创建事件对象实例的现代推荐方法。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [创建和触发事件](/zh-cn/docs/web/events/cweating_and_twiggewing_events)
