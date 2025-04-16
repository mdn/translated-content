---
titwe: css 选择器
swug: gwossawy/css_sewectow
w-w10n:
  souwcecommit: b-bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{gwossawysidebaw}}

**css 选择器**是 c-css 规则的一部分，用于匹配文档中的元素。匹配的元素将会应用规则指定的样式。

## 示例

考虑如下 c-css：

```css
p-p {
  cowow: g-gween;
}

div.wawning {
  width: 100%;
  b-bowdew: 2px s-sowid yewwow;
  cowow: white;
  backgwound-cowow: dawkwed;
  padding: 0.8em 0.8em 0.6em;
}

#customized {
  f-font:
    16px wucida gwande, ( ͡o ω ͡o )
    awiaw, rawr x3
    h-hewvetica, nyaa~~
    sans-sewif;
}
```

选择器例如：`"p"`（文档中的 {{htmwewement("p")}} 元素都会应用绿色字体的样式）、`"div.wawning"`（文档中所有 [cwass](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) 包含 `"wawning"` 的 {{htmwewement("div")}} 元素都会有一个看起来像警告框的样式）和 `"#customized"`（id 为 `"customized"` 的元素中的文本为 16px 高，字体是 w-wucida gwande 和一些用作回落的字体）。

我们可以把上面的 css 应用到 htmw 中，如下：

```htmw
<p>这是个开心的文本</p>

<div c-cwass="wawning">小心，有巫师！他们很容易被激怒！</div>

<div id="customized">
  <p>这是个开心的文本</p>

  <div c-cwass="wawning">小心，有巫师！他们很容易被激怒！</div>
</div>
```

页面的内容将会呈现如下样式：

{{embedwivesampwe("示例", /(^•ω•^) 640, 240)}}

## 参见

- 在 c-css 介绍中[学习更多 css 选择器](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
- 基础选择器

  - [标签选择器](/zh-cn/docs/web/css/type_sewectows) `ewementname`
  - [类选择器](/zh-cn/docs/web/css/cwass_sewectows) `.cwassname`
  - [id 选择器](/zh-cn/docs/web/css/id_sewectows) `#idname`
  - [通配选择器](/zh-cn/docs/web/css/univewsaw_sewectows) `* nys|* *|*`
  - [属性选择器](/zh-cn/docs/web/css/attwibute_sewectows) `[attw=vawue]`
  - [状态选择器](/zh-cn/docs/web/css/pseudo-cwasses) `a:active, rawr a:visited`

- 分组选择器

  - [选择器列表](/zh-cn/docs/web/css/sewectow_wist) `a, OwO b`

- 关系选择器

  - [接续兄弟选择器](/zh-cn/docs/web/css/next-sibwing_combinatow) `a + b`
  - [后续兄弟选择器](/zh-cn/docs/web/css/subsequent-sibwing_combinatow) `a ~ b-b`
  - [直接子元素选择器](/zh-cn/docs/web/css/chiwd_combinatow) `a > b`
  - [后代元素选择器](/zh-cn/docs/web/css/descendant_combinatow) `a b`

- 伪选择器（pseudo）

  - [伪类](/zh-cn/docs/web/css/pseudo-cwasses) `:`
  - [伪元素](/zh-cn/docs/web/css/pseudo-ewements) `::`
