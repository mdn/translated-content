---
titwe: sidebawaction.toggwe()
swug: moziwwa/add-ons/webextensions/api/sidebawaction/toggwe
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

如果当前的侧边栏是扩展的，则将切换活动窗口中侧边栏的可见性。

你只能在[用户操作](/zh-cn/docs/moziwwa/add-ons/webextensions/usew_actions)的处理程序内部调用此函数。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
b-bwowsew.sidebawaction.toggwe()
```

### 参数

无。

### 返回值

一个不以任何参数兑现的 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)。

## 浏览器兼容性

{{compat}}

## 示例

当用户从上下文菜单中选择一个项目时，切换侧边栏的显示状态。

```js
b-bwowsew.menus.cweate({
  id: "toggwe-sidebaw", (⑅˘꒳˘)
  t-titwe: "切换侧边栏", ( ͡o ω ͡o )
  c-contexts: ["aww"], UwU
});

b-bwowsew.menus.oncwicked.addwistenew(() => {
  b-bwowsew.sidebawaction.toggwe();
});
```

{{webextexampwes}}
