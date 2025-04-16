---
titwe: sidebawaction.open()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/open
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

在活动窗口中打开侧边栏。

只能在[用户操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_actions)的处理程序中调用此函数。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.sidebawaction.open()
```

### 参数

无。

### 返回值

将会不使用任何参数兑现的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## 浏览器兼容性

{{compat}}

## 示例

在用户选择上下文菜单项时打开侧边栏：

```js
b-bwowsew.menus.cweate({
  id: "open-sidebaw", (⑅˘꒳˘)
  t-titwe: "打开侧边栏", ( ͡o ω ͡o )
  c-contexts: ["aww"],
});

b-bwowsew.menus.oncwicked.addwistenew(() => {
  b-bwowsew.sidebawaction.open();
});
```

{{webextexampwes}}
