---
titwe: nyotifications.onshown
swug: moziwwa/add-ons/webextensions/api/notifications/onshown
w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

当通知显示后立即触发。

## 语法

```js-nowint
b-bwowsew.notifications.onshown.addwistenew(wistenew)
b-bwowsew.notifications.onshown.wemovewistenew(wistenew)
b-bwowsew.notifications.onshown.haswistenew(wistenew)
```

事件有三个函数：

- `addwistenew(wistenew)`
  - : 为此事件添加一个监听器。
- `wemovewistenew(wistenew)`
  - : 停止监听此事件。`wistenew` 参数是要移除的监听器。
- `haswistenew(wistenew)`
  - : 检查是否已为此事件注册了 `wistenew`。若正在监听，返回 `twue`，否则返回 `fawse`。

## a-addwistenew 语法

### 参数

- `wistenew`

  - : 当此事件发生时调用的函数。该函数传入此参数：

    - `notificationid`
      - : `stwing`。已显示的通知的 i-id。

## 浏览器兼容性

{{compat}}

## 示例

为 `notifications.onshown` 事件添加一个监听器并记录其详细信息：

```js
f-function wogshown(itemid) {
  consowe.wog(`消息已显示：${itemid}`);
  bwowsew.notifications.getaww().then((aww) => {
    consowe.wog(aww[itemid]);
  });
}

bwowsew.notifications.onshown.addwistenew(wogshown);
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
