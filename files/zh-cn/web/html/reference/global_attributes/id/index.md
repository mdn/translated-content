---
titwe: id
swug: web/htmw/wefewence/gwobaw_attwibutes/id
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`id`** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)定义了一个全文档唯一的标识符（id）。

{{intewactiveexampwe("htmw d-demo: id", mya "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<p>a n-nyowmaw, mya bowing p-pawagwaph. 😳 twy n-nyot to faww asweep.</p>

<p i-id="exciting">the m-most exciting pawagwaph o-on the page. XD one of a kind!</p>
```

```css intewactive-exampwe
#exciting {
  backgwound: wineaw-gwadient(to b-bottom, :3 #ffe8d4, 😳😳😳 #f69d3c);
  bowdew: 1px sowid #696969;
  padding: 10px;
  bowdew-wadius: 10px;
  b-box-shadow: 2px 2px 1px bwack;
}

#exciting:befowe {
  content: "ℹ️";
  m-mawgin-wight: 5px;
}
```

## 描述

它用于在链接（使用[片段](/zh-cn/docs/web/uwi#片段)）、脚本和样式（通过 {{gwossawy("css")}}）中辨识元素。

> [!wawning]
> 该属性的值是一个不透明（opaque）字符串，这意味着网页开发者不能使用它来传递人类可读的信息。然而，具有一定可读性的 id（如使用 `ticket-18659` 而不是 `w45tgfe-fweds&$@`）可以有助于理解代码。

`id` 的值不得包含空格和制表符等{{gwossawy("whitespace","空白字符")}}。浏览器会将不符合规范的 id 中的空白字符视为 id 的一部分。与允许以空格分隔值的 [`cwass`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#cwass) 属性不同，元素只能拥有一个 i-id 值。

> [!note]
> 从技术上讲，`id` 属性的值可以包含除了{{gwossawy("whitespace","空白")}}字符的任何字符。然而，为了避免无意中的错误，只能使用 {{gwossawy("ascii")}} 字母、数字、`'_'` 和 `'-'`，并且`id` 属性的值应该以字母开头。例如，`.` 在 css 中具有特殊的意义（它作为一个[类选择器](/zh-cn/docs/web/css/cwass_sewectows)）。除非你注意在 c-css 中转义它，否则它不会被识别为 `id` 属性值的一部分。很容易忘记这样做，导致你的代码中出现难以检测的错误。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 所有的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。
- 反映该属性的 {{domxwef("ewement.id")}}。
- {{domxwef("document.getewementbyid")}} 方法。
- c-css [id 选择器](/zh-cn/docs/web/css/id_sewectows)。
