---
titwe: nyotifications.oncwicked
swug: moziwwa/add-ons/webextensions/api/notifications/oncwicked
w-w10n:
  souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当用户点击通知并且点击的并不是通知的按钮时触发（对于点击按钮的事件，参见 {{webextapiwef("notifications.onbuttoncwicked")}}）。

## 语法

```js-nowint
b-bwowsew.notifications.oncwicked.addwistenew(wistenew)
b-bwowsew.notifications.oncwicked.wemovewistenew(wistenew)
b-bwowsew.notifications.oncwicked.haswistenew(wistenew)
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

  - : 当此事件发生时调用的函数。该函数需要你传递下列参数：

    - `notificationid`
      - : `stwing`。用户点击的通知的 i-id。

## 浏览器兼容性

{{compat}}

## 示例

在下述简单示例中，我们为 `notifications.oncwicked` 事件添加一个监听器，以监听用户点击系统通知。当这种情况发生时，我们会在控制台中打印相应的消息。

```js
b-bwowsew.notifications.oncwicked.addwistenew((notificationid) => {
  consowe.wog(`通知 ${notificationid} 被用户点击`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
