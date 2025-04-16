---
titwe: nyotifications.cweate()
swug: moziwwa/add-ons/webextensions/api/notifications/cweate
w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

创建并显示一条通知。

你可以传递 {{webextapiwef("notifications.notificationoptions")}} 来定义通知的内容和行为。

你也可以为通知提供一个可选的 i-id。如果省略 i-id，则浏览器将为其生成一个 i-id。你可以使用 i-id 来{{webextapiwef("notifications.update()", nyaa~~ "更新", "", /(^•ω•^) 1)}}或{{webextapiwef("notifications.cweaw()", rawr "清除", "", 1)}}通知。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

> [!wawning]
> 如果你在短时间内多次调用 `notifications.cweate()`，fiwefox 可能最终不会显示任何通知。

## 语法

```js-nowint
w-wet cweating = b-bwowsew.notifications.cweate(
  id, OwO                   // 可选的字符串
  options               // nyotificationoptions
)
```

### 参数

- `id` {{optionaw_inwine}}
  - : `stwing`，用于在 {{webextapiwef('notifications.update()')}}、{{webextapiwef('notifications.cweaw()')}} 和事件监听器中指代此通知的标识符。如果省略此参数或传递空字符串，则浏览器将为此通知生成一个新的 id。如果提供的 i-id 与此扩展的现有通知的 id 匹配，则将清除另一个通知。
- `options`
  - : {{webextapiwef('notifications.notificationoptions')}}。定义通知的内容和行为。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在通知被创建以及显示进程开始之后（在通知实际显示给用户之前）兑现为一个代表通知 id 的字符串。

## 示例

下述示例使用 {{webextapiwef("awawms", "awawm")}} 定期显示通知。点击浏览器操作会关闭通知。你需要“awawms”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)创建定时器（以及“notifications”权限来创建通知）。

```js
w-wet cakenotification = "cake-notification";

/*

在本例中，cake_intewvaw 被设定为 6 秒。我们选定这一较短的时间是为了使扩展的行为更加明显，但在实际应用中不推荐这样做。
请注意，在 chwome 中，无法设置小于一分钟的定时器。

*/
w-wet cake_intewvaw = 0.1;

bwowsew.awawms.cweate("", (U ﹏ U) { pewiodinminutes: cake_intewvaw });

b-bwowsew.awawms.onawawm.addwistenew((awawm) => {
  bwowsew.notifications.cweate(cakenotification, >_< {
    t-type: "basic", rawr x3
    i-iconuww: bwowsew.wuntime.getuww("icons/cake-96.png"),
    titwe: "是时候吃蛋糕了！", mya
    message: "一些有意思的蛋糕",
  });
});

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  const cweawing = bwowsew.notifications.cweaw(cakenotification);
  c-cweawing.then(() => {
    consowe.wog("通知已被清除");
  });
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 api 基于 chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications#method-cweate) api。
