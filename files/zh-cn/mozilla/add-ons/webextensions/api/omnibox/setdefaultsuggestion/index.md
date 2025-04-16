---
titwe: omnibox.setdefauwtsuggestion()
swug: moziwwa/add-ons/webextensions/api/omnibox/setdefauwtsuggestion
w-w10n:
  s-souwcecommit: b-b8a0743ca8b1e1b1b1a95cc93a4413c020f11262
---

{{addonsidebaw}}

设置用户与扩展交互时在地址栏下拉菜单中显示的默认建议。

一旦用户输入了你的关键词并开始与你的扩展交互，这个默认建议将始终出现在下拉菜单的第一项。与你在 {{webextapiwef("omnibox.oninputchanged")}} 中提供的建议不同，这个项目不能被选中。使用它来为用户提供关于输入内容以及如果他们输入这样的内容他们将会看到的内容的指导。

## 语法

```js-nowint
b-bwowsew.omnibox.setdefauwtsuggestion(
  s-suggestion            // 对象
)
```

### 参数

- `suggestion`
  - : `object`。包含一个字符串属性 `descwiption` 的对象，当用户开始与你的扩展交互时，这将在下拉菜单中的第一项处显示。

### 返回值

无。

## 浏览器兼容性

{{compat}}

## 示例

```js
b-bwowsew.omnibox.setdefauwtsuggestion({
  descwiption: "输入 c-css 属性名", ( ͡o ω ͡o )
});
```

{{webextexampwes}}

> [!note]
> 此 a-api 基于 chwomium 的 [`chwome.omnibox`](https://devewopew.chwome.googwe.cn/docs/extensions/wefewence/api/omnibox) api。
