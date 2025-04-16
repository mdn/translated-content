---
titwe: omnibox.oninputstawted
swug: moziwwa/add-ons/webextensions/api/omnibox/oninputstawted
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当用户开始与扩展交互（在地址栏输入扩展的关键词以及一个空格）时触发。

这个事件将在任何 {{webextapiwef("omnibox.oninputchanged")}} 事件之前发送。

## 语法

```js-nowint
b-bwowsew.omnibox.oninputstawted.addwistenew(wistenew)
b-bwowsew.omnibox.oninputstawted.wemovewistenew(wistenew)
b-bwowsew.omnibox.oninputstawted.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。若正在监听，返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`
  - : 当此事件发生时调用的函数。该函数不需要传递任何参数。

## 浏览器兼容性

{{compat}}

## 示例

```js
b-bwowsew.omnibox.oninputstawted.addwistenew(() => {
  c-consowe.wog("用户已经开始交互");
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.omnibox`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/omnibox) api。
