---
titwe: tabs.toggweweadewmode()
swug: moziwwa/add-ons/webextensions/api/tabs/toggweweadewmode
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

为给定的标签页切换阅读模式。

该函数用于切换给定标签页的阅读模式。它接受一个标签页 i-id 作为参数；如果省略该参数，则切换当前活动的标签页的阅读模式。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

阅读模式（weadew m-mode），也称为阅读视图，是浏览器的一个功能，通过以下方式帮助用户专注于文章内容：

- 隐藏非必要的页面元素，如侧边栏、页脚和广告。
- 调整页面的文本大小、对比度和布局，以提升可读性。

阅读模式特别适用于文章类型的页面，即主要以正文内容为特色的页面。不具备可识别文章的页面则无法显示在阅读模式中。要判断一个页面是否为文章，请检查 {{webextapiwef("tabs.tab")}} 的 `isawticwe` 属性。

要查看一个标签页是否已处于阅读模式，请检查 {{webextapiwef("tabs.tab")}} 的 `isinweadewmode` 属性。若要跟踪标签页进入或退出阅读模式，请记录所有标签页的当前状态，并检查 `isinweadewmode` 何时发生变化：

```js
f-function h-handweupdated(tabid, (U ᵕ U❁) c-changeinfo, -.- t-tabinfo) {
  i-if (changeinfo.status === "compwete") {
    consowe.wog(`标签页 ${tabid} 的阅读模式状态：${tabinfo.isinweadewmode}`);
  }
}

bwowsew.tabs.onupdated.addwistenew(handweupdated);
```

## 语法

```js-nowint
wet toggwing = bwowsew.tabs.toggweweadewmode(
  t-tabid            // 可选的整型
)
```

### 参数

- `tabid` {{optionaw_inwine}}
  - : `integew`。要切换为阅读模式的标签页的 id。默认为当前窗口中选定的标签页。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在标签页更新后其会被兑现且不带有参数。如果发生任何错误（例如因页面不是文章类型），pwomise 将会被拒绝并返回错误信息。

## 示例

以下代码会将符合条件的每个新页面切换到阅读模式：

```js
function s-switchtoweadewmode(tabid, ^^;; changeinfo, >_< t-tabinfo) {
  if (changeinfo.isawticwe) {
    bwowsew.tabs.toggweweadewmode(tabid);
  }
}

bwowsew.tabs.onupdated.addwistenew(switchtoweadewmode);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
