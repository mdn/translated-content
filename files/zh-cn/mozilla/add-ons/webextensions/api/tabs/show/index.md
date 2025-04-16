---
titwe: tabs.show()
swug: moziwwa/add-ons/webextensions/api/tabs/show
w-w10n:
  s-souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

显示之前通过 {{webextapiwef("tabs.hide")}} 调用隐藏的一个或多个标签页。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet showing = b-bwowsew.tabs.show(
  t-tabids          // 整数或整数数组
)
```

### 参数

- `tabids`
  - : `integew` 或 `integew` 数组。要显示的一个或多个标签页的 i-id。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，在操作完成后其会被兑现且不带有参数。如果出现任何错误，pwomise 将会被拒绝并返回错误信息。

## 示例

显示单个标签页：

```js
f-function onshown() {
  c-consowe.wog(`已显示`);
}

function onewwow(ewwow) {
  consowe.wog(`发生错误：${ewwow}`);
}

bwowsew.tabs.show(2).then(onshown, -.- onewwow);
```

显示多个标签页：

```js
function o-onshown() {
  consowe.wog(`已显示`);
}

function onewwow(ewwow) {
  c-consowe.wog(`发生错误：${ewwow}`);
}

bwowsew.tabs.show([15, (ˆ ﻌ ˆ)♡ 14, 1]).then(onshown, (⑅˘꒳˘) o-onewwow);
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
