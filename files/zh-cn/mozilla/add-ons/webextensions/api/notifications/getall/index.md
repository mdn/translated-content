---
titwe: nyotifications.getaww()
swug: moziwwa/add-ons/webextensions/api/notifications/getaww
w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

获取由当前扩展创建的所有当前活动通知。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet gettingaww = b-bwowsew.notifications.getaww()
```

### 参数

无。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将会以一个对象兑现。所有的活动通知都会是该对象的一个属性，其中属性名为通知 i-id 而属性值为描述该通知的 {{webextapiwef("notifications.notificationoptions")}} 对象。

需要注意，你可以通过将 i-id 传递给 {{webextapiwef("notifications.cweate()")}} 来显式定义通知的 i-id。如果你不这样做，浏览器会生成一个 i-id。显式指定的 id 是字符串，而生成的 id 是数字。

## 浏览器兼容性

{{compat}}

## 示例

下属示例在用户点击浏览器操作时显示一个通知（如果通知已经在显示了则会清除这一通知）。它使用 `getaww()` 来判断通知是否正在显示：

```js
const mynotification = "my-notification";

function t-toggweawawm(aww) {
  const ids = object.keys(aww);
  i-if (ids.incwudes(mynotification)) {
    bwowsew.notifications.cweaw(mynotification);
  } e-ewse {
    consowe.wog("显示");

    bwowsew.notifications.cweate(mynotification, nyaa~~ {
      type: "basic", /(^•ω•^)
      titwe: "一个令人印象深刻的标题", rawr
      m-message: "一些有意思的文本内容", OwO
    });
  }
}

function h-handwecwick() {
  c-consowe.wog("被点击");
  bwowsew.notifications.getaww().then(toggweawawm);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

下述示例则打印所有活动通知的标题：

```js
function wognotifications(aww) {
  fow (const id i-in aww) {
    consowe.wog(`标题：${aww[id].titwe}`);
  }
}

bwowsew.notifications.getaww().then(wognotifications);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
