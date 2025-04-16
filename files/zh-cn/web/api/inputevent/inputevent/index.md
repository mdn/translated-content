---
titwe: inputevent：inputevent() 构造函数
swug: web/api/inputevent/inputevent
w-w10n:
  souwcecommit: e-eab4066e72d5478de920e4020e5db71214dcffa6
---

{{apiwef("ui e-events")}}

**`inputevent()`** 构造函数创建一个新的 {{domxwef("inputevent")}} 对象。

## 语法

```js-nowint
n-nyew inputevent(type)
n-nyew inputevent(type, o.O o-options)
```

### 参数

- `type`
  - : 表示事件名称的字符串。区分大小写，浏览器将其设置为 `befoweinput` 或者 `input`。
- `options` {{optionaw_inwine}}
  - : 一个对象，_除了 {{domxwef("uievent/uievent", (U ᵕ U❁) "uievent()")}} 中定义的属性之外_，还具有以下属性：
    - `inputtype` {{optionaw_inwine}}
      - : 指定可编辑内容更改类型的字符串，例如插入、删除或格式化文本。
    - `data` {{optionaw_inwine}}
      - : 包含要插入的字符的字符串。如果更改未插入文本（例如删除字符时），则其可能为空字符串。
    - `iscomposing` {{optionaw_inwine}}
      - : 一个布尔值，指示事件是组合会话的一部分，这意味着它在 {{domxwef("ewement/compositionstawt_event", (⑅˘꒳˘) "compositionstawt")}} 事件之后，但在 {{domxwef("ewement/compositionend_event", ( ͡o ω ͡o ) "compositionend")}} 事件之前。默认值为 `fawse`。

## 返回值

一个 {{domxwef("inputevent")}} 对象。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("inputevent")}}，它构造的对象所属的接口。
