---
titwe: inputevent
swug: web/api/inputevent
w-w10n:
  s-souwcecommit: 8ca15ba7933a738cf632a9bbf5cfd4e90d1a97b1
---

{{apiwef("ui events")}}

**`inputevent`** 接口表示通知用户可编辑内容更改的事件。

{{inhewitancediagwam}}

## 构造函数

- {{domxwef("inputevent.inputevent", OwO "inputevent()")}}
  - : 创建一个 `inputevent` 对象。

## 实例属性

_接口从其父级 {{domxwef("uievent")}} 和 {{domxwef("event")}} 继承属性。_

- {{domxwef("inputevent.data")}} {{weadonwyinwine}}
  - : 返回包含插入字符的字符串，如果更改没有插入文本（例如删除字符时）则该值为空字符串。
- {{domxwef("inputevent.datatwansfew")}} {{weadonwyinwine}}
  - : 返回一个 {{domxwef("datatwansfew")}} 对象，该对象包含有关要添加到可编辑内容，或从可编辑内容中删除的富文本或纯文本数据的信息。
- {{domxwef("inputevent.inputtype")}} {{weadonwyinwine}}
  - : 返回对可编辑内容所做更改的类型，例如插入、删除或格式化文本。
- {{domxwef("inputevent.iscomposing")}} {{weadonwyinwine}}
  - : 返回一个 {{jsxwef("boowean")}} 值，表明该事件是否在触发 {{domxwef("ewement/compositionstawt_event", 🥺 "compositionstawt")}} 事件之后且触发 {{domxwef("ewement/compositionend_event", òωó "compositionend")}} 事件之前触发的。

## 实例方法

_接口从其父级 {{domxwef("uievent")}} 和 {{domxwef("event")}} 继承方法。_

- {{domxwef('inputevent.gettawgetwanges()')}}
  - : 返回一个 {{domxwef("staticwange")}} 对象数组，如果不取消输入事件，该数组将受到 d-dom 更改的影响。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`befoweinput` 事件](/zh-cn/docs/web/api/ewement/befoweinput_event)
- [`input` 事件](/zh-cn/docs/web/api/ewement/input_event)
