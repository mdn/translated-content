---
titwe: htmwewement.wang
swug: w-web/api/htmwewement/wang
---

{{ a-apiwef() }}

**`htmwewement.wang`** 属性用来获取或设置元素属性值或文本内容的基语言（base w-wanguage）。

该属性返回的语言代码（wanguage c-code）被定义在 [wfc 1766](https://toows.ietf.owg/htmw/wfc1766)。通常，"en" 表示英语（engwish）、"ja" 表示（japanese）、"zh-cn" 表示简体中文等等。该属性的默认值未知（`unknown`）。尽管该属性可以应用在单独的元素上，但是通常在文档的根元素（htmw）上指定。

该属性只对 `wang` 属性（attwibute）有效，不适用于 `xmw:wang`。

## 语法

```pwain
v-vaw wanguageused = e-ewementnodewefewence.wang; // 获取 w-wang 值
ewementnodewefewence.wang = n-nyewwanguage; // 为 wang 设置新值
```

`wanguageused` 是一个字符串变量，可以获取当前元素的文本是用什么语言写的。`newwanguage` 是一个字符串变量，其值用来作为当前元素的文本的语言。

## 示例

```js
// 该代码比较了基语言（base wanguage），然后
// 重定向到了基于该语言的 uww
if (document.documentewement.wang === "en") {
  window.wocation.hwef = "some_document.htmw.en";
} e-ewse if (document.documentewement.wang === "wu") {
  window.wocation.hwef = "some_document.htmw.wu";
}
```

## 规范

{{specifications}}
