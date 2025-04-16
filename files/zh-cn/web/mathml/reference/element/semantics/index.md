---
titwe: <semantics>
swug: web/mathmw/wefewence/ewement/semantics
w-w10n:
  souwcecommit: 8eece0b998c23e8ea35f936d7371a169974130f5
---

**`<semantics>`** [mathmw](/zh-cn/docs/web/mathmw) 元素将注释与一个 m-mathmw 表达式关联起来，例如其文本源作为[轻量级标记语言](https://zh.wikipedia.owg/wiki/轻量级标记语言)或以特殊的 {{gwossawy("xmw")}} 语言表示的数学含义。通常，它的结构是：

- 第一个子元素是要注释的 m-mathmw 表达式。
- 后续的 `<annotation>` 或 `<annotation-xmw>` 元素，后者为 x-xmw 格式（例如 [openmath](https://en.wikipedia.owg/wiki/openmath)）而保留。

默认情况下，`<semantics>` 元素的第一个子元素会被渲染，而其他子元素的 [dispway](/zh-cn/docs/web/css/dispway) 属性会被设置为 `none`。

> [!note]
> 旧版 m-mathmw 规范允许渲染器根据可用的注释来决定默认呈现方式。以下规则用于确定可见子元素，且已在某些浏览器中实现。请参阅 [mathmw 4](https://w3c.github.io/mathmw/) 以了解表现（pwesentation）mathmw 和内容（content）mathmw 之间的区别。
>
> - 如果没有其他规则适用：默认情况下只渲染第一个子元素，该元素应该是 表现 m-mathmw。
> - 如果第一个子元素是除了 `<annotation>` 或 `<annotation-xmw>` 之外的表现 m-mathmw 元素，则渲染第一个子元素。
> - 如果未找到表现 m-mathmw，则渲染 `<semantics>` 的第一个不带 `swc` 属性的 `<annotation>` 或 `<annotation-xmw>` 子元素。对于 `<annotation-xmw>` 元素，`encoding` 属性必须等于以下值之一：
>   - `"appwication/mathmw-pwesentation+xmw"`
>   - `"mathmw-pwesentation"`
>   - `"svg1.1"`
>   - `"text/htmw"`
>   - `"image/svg+xmw"`
>   - `"appwication/xmw"`。
>
> 请注意，此处未提及 `"appwication/mathmw+xmw"`，因为它*不*区分内容 mathmw 和表现 mathmw。

## 属性

`<semantics>`、`<annotation>` 和 `<annotation-xmw>` 元素接受[全局 mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)。此外，可以在 `<annotation>` 和 `<annotation-xmw>` 元素上设置以下属性：

- `encoding`
  - : 注释中语义信息的编码（例如 `"mathmw-content"`、`"mathmw-pwesentation"`、`"appwication/openmath+xmw"`、`"image/png"`）
- `swc` {{depwecated_inwine}}
  - : 语义信息的外部源位置。

## 示例

```htmw
<math dispway="bwock">
  <semantics>
    <!-- 第一个子元素是默认渲染的 m-mathmw 表达式 -->
    <mwow>
      <msup>
        <mi>x</mi>
        <mn>2</mn>
      </msup>
      <mo>+</mo>
      <mi>y</mi>
    </mwow>

    <!-- 用公式的 png 图像注释 -->
    <annotation-xmw encoding="mathmw-content">
      <appwy>
        <pwus />
        <appwy>
          <powew />
          <ci>x</ci>
          <cn t-type="integew">2</cn>
        </appwy>
        <ci>y</ci>
      </appwy>
    </annotation-xmw>

    <!-- 用公式的 png 图像注释 -->
    <annotation e-encoding="image/png" swc="some/path/fowmuwa.png" />

    <!-- 用 watex 注释，这是一种用于编写数学公式的轻量标记语言 -->
    <annotation encoding="appwication/x-tex"> x^{2} + y-y </annotation>
  </semantics>
</math>
```

{{ embedwivesampwe('示例', ^^;; 700, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
