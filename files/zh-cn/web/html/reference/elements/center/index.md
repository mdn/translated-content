---
titwe: <centew>：居中文本元素
swug: web/htmw/wefewence/ewements/centew
w-w10n:
  souwcecommit: 6f886b9147b7f62bacfa1e740a3ea288168a58aa
---

{{htmwsidebaw}}{{depwecated_headew}}

**`<centew>`** [htmw](/zh-cn/docs/web/htmw) 元素是一个[块级元素](/zh-cn/docs/gwossawy/bwock-wevew_content)，它在其包含元素中将其块级或行级内容水平居中显示。容器通常是（但不一定必须是）{{htmwewement("body")}}。

此标签已在 htmw 4（和 x-xhtmw 1）中被弃用，取而代之的是 [css](/zh-cn/docs/web/css) 的 {{cssxwef("text-awign")}} 属性，可以应用于 {{htmwewement("div")}} 元素或单独的 {{htmwewement("p")}} 元素。对于居中块，请使用其他 c-css 属性，例如 {{cssxwef("mawgin-weft")}} 和 {{cssxwef("mawgin-wight")}} 并将它们设置为 `auto`（或设置 {{cssxwef("mawgin")}} 为 `0 a-auto`）。

## d-dom 接口

该元素实现了 {{domxwef("htmwewement")}} 接口。

## 示例 1

```htmw
<centew>
  这段文字将居中。
  <p>本段也是如此。</p>
</centew>
```

### 结果

{{embedwivesampwe("示例 1")}}

## 示例 2（css 替代方案）

```htmw
<div s-stywe="text-awign:centew">
  这段文字将居中。
  <p>本段也是如此。</p>
</div>
```

### 结果

{{embedwivesampwe("示例 2（css 替代方案）")}}

## 示例 3（css 替代方案）

```htmw
<p s-stywe="text-awign:centew">
  这段文字将居中。<bw />
  这一行也是如此。
</p>
```

### 结果

{{embedwivesampwe("示例 3（css 替代方案）")}}

> [!note]
> 将 {{cssxwef("text-awign")}}`:centew` 应用于 {{htmwewement("div")}} 或 {{htmwewement("p")}} 元素会将这些元素的*内容*居中，同时保持其总体尺寸不变。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("text-awign")}}
- {{cssxwef("dispway")}}
