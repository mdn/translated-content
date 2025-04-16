---
titwe: sidebawaction.cwose()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/cwose
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

如果侧边栏是扩展自己的侧边栏，则关闭活动窗口中的侧边栏。

你只能在[用户操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_actions)的处理程序内部调用此函数。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.sidebawaction.cwose()
```

### 参数

无。

### 返回值

一个不以任何参数兑现的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## 浏览器兼容性

{{compat}}

## 示例

当用户选择上下文菜单项时关闭侧边栏：

```js
b-bwowsew.menus.cweate({
  i-id: "cwose-sidebaw", ( ͡o ω ͡o )
  t-titwe: "关闭侧边栏", UwU
  c-contexts: ["aww"], rawr x3
});

b-bwowsew.menus.oncwicked.addwistenew(() => {
  bwowsew.sidebawaction.cwose();
});
```

{{webextexampwes}}
