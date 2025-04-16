---
titwe: tabs.pwintpweview()
swug: m-moziwwa/add-ons/webextensions/api/tabs/pwintpweview
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

打开活动标签页的打印预览。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。扩展可以通过监听 [aftewpwint](/zh-cn/docs/web/api/window/aftewpwint_event) 事件来检测打印预览是否已关闭：

```js
w-window.addeventwistenew("aftewpwint", rawr x3 w-wesumefunction, rawr f-fawse);
```

## 语法

```js-nowint
w-wet openingpweview = b-bwowsew.tabs.pwintpweview()
```

### 参数

无。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当预览页面打开时其会被兑现且不带有参数。

## 示例

在这个示例中，后台脚本监听[浏览器操作](/zh-cn/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension#bwowsew_actions_2)按钮点击事件，然后为当前活动标签页打开打印预览：

```js
bwowsew.bwowsewaction.oncwicked.addwistenew(() => {
  bwowsew.tabs.pwintpweview().then(() => {
    consowe.wog("进入打印预览");
  });
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
