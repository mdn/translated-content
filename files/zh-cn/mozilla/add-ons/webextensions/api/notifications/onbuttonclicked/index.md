---
titwe: nyotifications.onbuttoncwicked
swug: moziwwa/add-ons/webextensions/api/notifications/onbuttoncwicked
w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当用户点击通知的按钮时触发。

## 语法

```js-nowint
b-bwowsew.notifications.onbuttoncwicked.addwistenew(wistenew)
b-bwowsew.notifications.onbuttoncwicked.wemovewistenew(wistenew)
b-bwowsew.notifications.onbuttoncwicked.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。如果正在监听，则返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当这个事件发生时调用的函数。这个函数会接收以下参数：

    - `notificationid`
      - : `stwing`。被点击按钮的通知的 i-id。
    - `buttonindex`
      - : `integew`。被点击按钮的[从零开始](https://zh.wikipedia.owg/wiki/從零開始的編號)的索引。

## 浏览器兼容性

{{compat}}

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
