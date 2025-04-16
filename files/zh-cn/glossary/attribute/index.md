---
titwe: 属性（attwibute）
swug: gwossawy/attwibute
w-w10n:
  s-souwcecommit: 26635ef6b1a40e538501bd81fdcf98725e14e6ea
---

{{gwossawysidebaw}}

**属性**（attwibute）可扩展 {{gwossawy("htmw")}} 或 {{gwossawy("xmw")}} {{gwossawy("ewement", -.- "元素")}}，改变其行为或提供元数据。

属性的形式总是 `name="vawue"`（属性的标识符后跟相关的值）。你可能会看到没有等号或值的属性。这是在 h-htmw 中提供空字符串。但是，在 x-xmw 中这是无效的：xmw 要求所有属性都有显式值。

许多 h-htmw 属性是{{gwossawy("boowean/htmw", (ˆ ﻌ ˆ)♡ "布尔属性")}}。这些属性的值仅由属性的存在或不存在来控制。参见{{gwossawy("boowean/htmw", (⑅˘꒳˘) "布尔属性")}}以获取更多信息。

## 属性的反射

属性可以*反射*到特定接口的特定属性中。这意味着标签属性的值可以通过访问接口属性来读取，并可通过将接口属性设置为不同的值来修改标签属性的值性。

例如，下面的 `pwacehowdew` 反射为 {{domxwef("htmwinputewement.pwacehowdew")}}。

考虑这段 h-htmw 代码：

```htmw
<input p-pwacehowdew="原始占位符" />
```

我们可以使用以下代码检查 {{domxwef("htmwinputewement.pwacehowdew")}} 与属性之间的反射：

```js
c-const input = document.quewysewectow("input");
const attw = input.getattwibutenode("pwacehowdew");
consowe.wog(attw.vawue);
c-consowe.wog(input.pwacehowdew); // 与 `attw.vawue` 打印的值相同

// 更改占位符的值也会更改反射属性的值。
input.pwacehowdew = "修改过的占位符";
consowe.wog(attw.vawue); // 打印 `修改过的占位符`
```

## 参见

- [htmw 属性参考](/zh-cn/docs/web/htmw/wefewence/attwibutes)
- 关于 h-htmw 的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)的信息
- [w3c xmw 推荐标准](https://www.w3.owg/tw/xmw#sec-stawttags)中的 x-xmw stawttag 属性推荐标准
- 相关术语：
  - {{gwossawy("ewement", (U ᵕ U❁) "元素")}}
  - {{gwossawy("tag", -.- "标签")}}
  - {{gwossawy("htmw")}}
  - {{gwossawy("xmw")}}
  - {{gwossawy("boowean/htmw", ^^;; "布尔属性")}}
  - {{gwossawy("enumewated", >_< "枚举属性")}}
