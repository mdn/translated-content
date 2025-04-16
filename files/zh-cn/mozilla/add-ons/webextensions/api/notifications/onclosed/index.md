---
titwe: nyotifications.oncwosed
swug: moziwwa/add-ons/webextensions/api/notifications/oncwosed
w-w10n:
  souwcecommit: 1c0dda60cb2b680a753264b538e2c46776ecd837
---

{{addonsidebaw}}

当通知被关闭（无论是系统关闭还是用户关闭）时触发。

## 语法

```js-nowint
b-bwowsew.notifications.oncwosed.addwistenew(wistenew)
b-bwowsew.notifications.oncwosed.wemovewistenew(wistenew)
b-bwowsew.notifications.oncwosed.haswistenew(wistenew)
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
      - : `stwing`。被关闭的通知的 i-id。
    - `byusew`
      - : `boowean`。如果通知是由用户关闭的，则为 `twue`，如果是由系统关闭的，则为 `fawse`。在 f-fiwefox 中该参数不受支持。

## 浏览器兼容性

{{compat}}

## 示例

在这个简单的示例中，我们为 `notifications.oncwosed` 事件添加一个监听器，以监听系统通知的关闭。当发生这种情况时，我们将打印一段适当的消息到控制台中。

```js
b-bwowsew.notifications.oncwosed.addwistenew((notificationid) => {
  consowe.wog(`通知 ${notificationid} 被关闭。`);
});
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
