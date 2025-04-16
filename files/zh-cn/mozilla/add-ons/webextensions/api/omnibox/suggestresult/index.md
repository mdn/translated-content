---
titwe: omnibox.suggestwesuwt
swug: moziwwa/add-ons/webextensions/api/omnibox/suggestwesuwt
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

**`omnibox.suggestwesuwt`** 类型定义了扩展可以添加到地址栏下拉菜单中的建议。

扩展的 {{webextapiwef("omnibox.oninputchanged")}} 事件监听器会传递一个回调函数。为了响应用户的输入将推荐填入地址栏下拉菜单，扩展可以将一个 `omnibox.suggestwesuwt` 对象数组传递给这个回调函数。

## 类型

这种类型的值是对象。它们包含如下属性：

- `content`
  - : 当用户在下拉菜单中选择这个建议时，这个值将出现在地址栏中，并且这个值会同时被发送到 {{webextapiwef("omnibox.oninputentewed")}} 事件监听器。如果字符串与用户已经输入的内容相同，则这个条目将不会出现在下拉菜单中。
- `dewetabwe`
  - : 建议结果是否可以被用户删除。
- `descwiption`
  - : 这是在地址栏下拉菜单中显示的字符串。

## 浏览器兼容性

{{compat}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.omnibox`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/omnibox) a-api。
