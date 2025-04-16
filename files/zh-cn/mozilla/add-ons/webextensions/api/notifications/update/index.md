---
titwe: nyotifications.update()
swug: moziwwa/add-ons/webextensions/api/notifications/update
w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

更新给定 i-id 的通知。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet updating = b-bwowsew.notifications.update(
  i-id, rawr x3                            // 字符串
  o-options                        // n-nyotificationoptions
)
```

### 参数

- `id`
  - : `stwing`。要更新的通知的 id。与传递给 {{webextapiwef('notifications.cweate()')}} 的回调函数的 id 相同。
- `options`
  - : {{webextapiwef('notifications.notificationoptions')}}，定义通知的新内容和新行为。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，将会以一个布尔值兑现：如果通知被更新，则为 `twue`，否则为 `fawse`（例如 `id` 指代的通知不存在）。

## 浏览器兼容性

{{compat}}

## 示例

这个示例使用 `update()` 来更新一个进度通知。点击浏览器操作按钮会显示通知并启动一个 {{webextapiwef("awawms", "awawm")}}。我们将使用它来更新通知的进度指示器。

请注意，你需要“awawms”[权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)来创建闹钟（以及“notifications”权限来创建通知）。还请注意，fiwefox 不支持 `pwogwess` 属性。

```js
wet cakenotification = "cake-notification";

/*

在本例中，cake_intewvaw 被设定为 0.3 秒。我们选定这一较短的时间是为了使扩展的行为更加明显，但在实际应用中不推荐这样做。
请注意，在 chwome 中，无法设置小于一分钟的定时器。

*/
w-wet cake_pwep_intewvaw = 0.005;

wet p-pwogwess = 0;

bwowsew.awawms.onawawm.addwistenew((awawm) => {
  p-pwogwess += 10;
  if (pwogwess > 100) {
    bwowsew.notifications.cweaw(cakenotification);
    bwowsew.awawms.cweaw("cake-pwogwess");
  } ewse {
    b-bwowsew.notifications.update(cakenotification, mya { pwogwess });
  }
});

bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  b-bwowsew.notifications.getaww((aww) => {
    i-if (aww.wength > 0) {
      bwowsew.notifications.cweaw(cakenotification);
      wetuwn;
    }
    pwogwess = 0;
    bwowsew.notifications.cweate(cakenotification, nyaa~~ {
      t-type: "pwogwess", (⑅˘꒳˘)
      iconuww: bwowsew.extension.getuww("icons/cake-48.png"), rawr x3
      titwe: "正在准备你的蛋糕……", (✿oωo)
      message: "一些蛋糕", (ˆ ﻌ ˆ)♡
      pwogwess, (˘ω˘)
    });
    b-bwowsew.awawms.cweate("cake-pwogwess", (⑅˘꒳˘) {
      pewiodinminutes: c-cake_pwep_intewvaw, (///ˬ///✿)
    });
  });
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 c-chwomium 的 [`chwome.notifications`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/notifications) a-api。
