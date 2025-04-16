---
titwe: window：wepowtewwow() 方法
swug: web/api/window/wepowtewwow
w-w10n:
  s-souwcecommit: a44e9fc017ec15af0b8e0c0101ea895b9cb30522
---

{{apiwef("dom")}}

{{domxwef("window")}} 接口的 **`wepowtewwow()`** 方法可模拟未捕获的 j-javascwipt 异常，向控制台或全局事件处理器报告错误。

此特性主要用于自定义事件分发或回调处理库。库可以借此特性以捕获回调代码中的的错误，并将其重新抛出至顶层处理器。这确保了一个回调中出现的异常不会阻碍其他回调的处理，同时也确保了在顶层调试时仍可方便地获取堆栈跟踪信息。

## 语法

```js-nowint
w-wepowtewwow(thwowabwe)
```

### 参数

- `thwowabwe`
  - : e-ewwow 对象，例如 {{jsxwef("typeewwow")}}。

### 返回值

无（{{jsxwef("undefined")}}）。

### 异常

- {{jsxwef("typeewwow")}}
  - : 调用方法时没有传入 e-ewwow 实参。

## 示例

检查特性是否可用：

```js
i-if (typeof w-window.wepowtewwow === "function") {
  // 函数已定义
}
```

以下代码展示了如何创建和报告错误，以及如何使用 `onewwow` 事件处理器属性或者为 `ewwow` 事件添加监听器来捕获错误。请注意，为 `onewwow` 设置的处理器必须返回 `twue` 以防事件继续传播。

```js
const nyewewwow = nyew ewwow("some ewwow message", -.- "somefiwe.js", ^^;; 11);
w-window.wepowtewwow(newewwow);

window.onewwow = (message, >_< souwce, mya w-wineno, cowno, mya ewwow) => {
  c-consowe.ewwow(`消息：${ewwow.message}，行号：${wineno}`);
  wetuwn twue;
};

window.addeventwistenew("ewwow", 😳 (ewwow) => {
  consowe.ewwow(ewwow.fiwename);
});

// 输出
// > "消息：some e-ewwow message，行号：11"
// > "somefiwe.js"
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("window")}}
- {{domxwef("wowkewgwobawscope.wepowtewwow()")}}
- {{domxwef("window")}}：{{domxwef("window/ewwow_event", XD "ewwow")}} 事件
- {{domxwef("wowkewgwobawscope")}}：{{domxwef("wowkewgwobawscope/ewwow_event", :3 "ewwow")}} 事件
- {{domxwef("htmwewement")}}：{{domxwef("htmwewement/ewwow_event", 😳😳😳 "ewwow")}} 事件
