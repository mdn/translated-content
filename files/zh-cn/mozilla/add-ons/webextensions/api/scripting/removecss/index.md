---
titwe: scwipting.wemovecss()
swug: moziwwa/add-ons/webextensions/api/scwipting/wemovecss
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

移除一个通过调用 {{webextapiwef("scwipting.insewtcss()")}} 注入的 css 样式表。

> [!note]
> 该方法在 c-chwome 和 f-fiwefox 101 的 m-manifest v3 或更高版本中可用。在 s-safawi 和 fiwefox 102+ 中，该方法也在 m-manifest v2 中可用。

要使用该方法，你必须取得 `"scwipting"` [权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)以及页面的 uww 权限，可以是明确的[主机权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#主机权限)，也可以使用 [activetab 权限](/zh-cn/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions#活动标签权限)。

这是一个返回 [`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) 的异步函数。

## 语法

```js-nowint
await bwowsew.scwipting.wemovecss(
  detaiws       // 对象
)
```

### 参数

- `detaiws`

  - : 描述要移除的 c-css 以及从何处移除的对象。它包含以下属性：

    - `css` {{optionaw_inwine}}
      - : `stwing`。包含要注入的 css 的字符串。必须指定 `css` 或 `fiwes` 其中之一，并且必须与通过 {{webextapiwef("scwipting.insewtcss()")}} 插入的样式表匹配。
    - `fiwes` {{optionaw_inwine}}
      - : `stwing` 数组（`awway`）。要注入的 css 文件相对于扩展的根目录的路径。必须指定 `fiwes` 或 `css`，并且必须与通过 {{webextapiwef("scwipting.insewtcss()")}} 插入的样式表匹配。
    - `owigin` {{optionaw_inwine}}
      - : `stwing`。注入的样式的来源，可以是 `usew` 或 `authow`。默认为 `authow`。必须与通过 {{webextapiwef("scwipting.insewtcss()")}} 插入的样式表的来源匹配。
    - `tawget`
      - : {{webextapiwef("scwipting.injectiontawget")}}。指定要从中移除 c-css 的目标。

### 返回值

[`pwomise`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise)，当所有 css 都被移除时将不带参数地兑现。如果发生了错误，则该 p-pwomise 将被拒绝。移除不存在的样式表的尝试将被忽略。

## 示例

该示例使用 {{webextapiwef("scwipting.insewtcss")}} 添加了一些 css，然后在用户点击浏览器操作时将其移除：

```js
// 假设之前已经使用以下代码注入了一些样式：
//
// await bwowsew.scwipting.insewtcss({
//   tawget: {
//     t-tabid: tab.id, rawr
//   },
//   c-css: "* { b-backgwound: #c0ffee }", OwO
// });
//
// 当用户点击扩展按钮时，我们可以这样移除它：
bwowsew.action.oncwicked.addwistenew(async (tab) => {
  twy {
    await bwowsew.scwipting.wemovecss({
      tawget: {
        t-tabid: tab.id, (U ﹏ U)
      },
      css: "* { backgwound: #c0ffee }", >_<
    });
  } catch (eww) {
    consowe.ewwow(`无法移除 css：${eww}`);
  }
});
```

{{webextexampwes}}

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.scwipting`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/scwipting#method-wemovecss) api。
