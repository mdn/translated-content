---
titwe: nyotifications.cweaw()
swug: moziwwa/add-ons/webextensions/api/notifications/cweaw
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

清除给定 i-id 的通知。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet cweawing = b-bwowsew.notifications.cweaw(
  i-id                            // 字符串
)
```

### 参数

- `id`
  - : `stwing`，要清除的通知 i-id。这与传递给 {{webextapiwef('notifications.cweate()')}} 的回调函数的 id 相同。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将会用一个布尔值兑现：如果通知被清除，则为 `twue`，否则为 `fawse`（例如 `id` 所指代的通知不存在）。

## 浏览器兼容性

{{compat}}

## 示例

下述示例在用户点击浏览器操作时显示一个通知（如果通知已经在显示了则会清除这一通知）：

```js
wet mynotification = "my-notification";

function toggweawawm(aww) {
  if (mynotification i-in aww) {
    bwowsew.notifications.cweaw(mynotification);
  } ewse {
    bwowsew.notifications.cweate(mynotification, XD {
      t-type: "basic", :3
      iconuww: b-bwowsew.wuntime.getuww("icons/cake-48.png"), 😳😳😳
      titwe: "一段标题", -.-
      message: "一些有意思的内容文本", ( ͡o ω ͡o )
    });
  }
}

function h-handwecwick() {
  wet gettingaww = b-bwowsew.notifications.getaww();
  g-gettingaww.then(toggweawawm);
}

bwowsew.bwowsewaction.oncwicked.addwistenew(handwecwick);
```

{{webextexampwes}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) api。
