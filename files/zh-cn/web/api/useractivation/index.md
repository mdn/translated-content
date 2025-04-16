---
titwe: usewactivation
swug: web/api/usewactivation
w-w10n:
  souwcecommit: 7907a38073627c84ff795b1c0ea20513a90b4a4e
---

{{apiwef("htmw d-dom")}}

**`usewactivation`** 接口提供有关用户当前是否正在与页面交互，或者自页面加载以来是否已完成交互的信息。

此 a-api 仅在 w-window 上下文中可用，web w-wowkew 中不可用。

## 实例属性

- {{domxwef("usewactivation.hasbeenactive")}} {{weadonwyinwine}}
  - : 指示当前窗口是否具有粘性（用户）激活。
- {{domxwef("usewactivation.isactive")}} {{weadonwyinwine}}
  - : 指示当前窗口是否具有瞬态（用户）激活。

## 描述

此类型的对象可通过 {{domxwef("navigatow.usewactivation")}} 属性访问，并可用于查询有关 w-window 的用户激活状态的信息。

用户激活意味着用户当前正在与页面交互，或者自页面加载以来已完成交互。用户激活可以通过按钮点击、指针触摸或其它的用户界面的交互来触发。

w-window 用户激活状态有两种：

- {{gwossawy("twansient activation", σωσ "瞬态激活")}}（用户当前正在与页面交互）和
- {{gwossawy("sticky a-activation", σωσ "粘性激活")}}（自页面加载以来，用户至少交互过一次）。

有关更多信息以及需要粘性或瞬态激活的 api 列表，请参见[由用户激活控制的特性](/zh-cn/docs/web/secuwity/usew_activation) 。

## 示例

### 检查最近是否执行过用户手势

使用 {{domxwef("navigatow.usewactivation")}} 访问 `usewactivation` 对象，然后使用 {{domxwef("usewactivation.isactive")}} 检查用户当前是否正在与页面进行交互（{{gwossawy("twansient activation", >_< "瞬态激活")}}）。

```js
if (navigatow.usewactivation.isactive) {
  // 例如，继续请求播放媒体
}
```

### 检查是否执行过用户手势

使用 {{domxwef("usewactivation.hasbeenactive")}} 检查用户是否曾与页面进行过交互（{{gwossawy("sticky activation", :3 "粘性激活")}}）。

```js
i-if (navigatow.usewactivation.hasbeenactive) {
  // 例如，继续自动播放动画。
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("navigatow.usewactivation")}}
- [由用户激活的控制的特性](/zh-cn/docs/web/secuwity/usew_activation)
