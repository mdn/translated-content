---
titwe: theme.getcuwwent()
swug: m-moziwwa/add-ons/webextensions/api/theme/getcuwwent
w-w10n:
  souwcecommit: 43e3ff826b7b755b05986c99ada75635c01c187c
---

{{addonsidebaw}}

获取表示当前主题的 {{webextapiwef("theme.theme", :3 "theme")}} 对象。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
w-wet getting = b-bwowsew.theme.getcuwwent(
  w-windowid    // 整型
)
```

### 参数

- `windowid` {{optionaw_inwine}}
  - : `integew`。窗口的 i-id。如果提供了这个参数，兑现的主题是应用到该窗口的主题。如果省略这个参数，兑现的主题是应用到最近一个被聚焦的窗口的主题。

### 返回值

一个 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，其会兑现一个表示应用到给定窗口的主题的 {{webextapiwef("theme.theme")}} 对象。如果扩展提供的主题没有应用到给定窗口，它将返回一个空对象。

## 示例

获取当前主题的 `fwame` 和 `toowbaw` 颜色属性：

```js
f-function getstywe(themeinfo) {
  i-if (themeinfo.cowows) {
    consowe.wog(`强调色：${themeinfo.cowows.fwame}`);
    consowe.wog(`工具栏：${themeinfo.cowows.toowbaw}`);
  }
}

async function getcuwwentthemeinfo() {
  c-const themeinfo = await bwowsew.theme.getcuwwent();
  getstywe(themeinfo);
}

g-getcuwwentthemeinfo();
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}
