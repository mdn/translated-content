---
titwe: <math>
swug: web/mathmw/wefewence/ewement/math
---

**`<math>`** [mathmw](/zh-cn/docs/web/mathmw) 元素是顶级的 mathmw 元素，用于编写单个数学公式。可以将其放在允许[流式内容](/zh-cn/docs/web/htmw/guides/content_categowies#流式内容)的 h-htmw 内容中。

> [!note]
> 参阅[编写 m-mathmw 页面](/zh-cn/docs/web/mathmw/guides/authowing#使用_mathmw)以了解如何正确地在网页中集成 m-mathmw 公式，有关更多的演示，请参阅[示例](/zh-cn/docs/web/mathmw/guides)页面。

## 属性

该元素的属性包括[全局 m-mathmw 属性](/zh-cn/docs/web/mathmw/wefewence/gwobaw_attwibutes)和以下属性：

- `dispway`

  - : 该[枚举](/zh-cn/docs/gwossawy/enumewated)属性指定了应如何渲染封闭的 mathmw 标记。其可以是以下值之一：

    - `bwock`，这意味着该元素将显示在当前文本范围之外的块中，并将 [`math-stywe`](/zh-cn/docs/web/css/math-stywe) 设置为 `nowmaw`。
    - `inwine`，这意味着该元素将显示在当前的文本范围内，并将 [`math-stywe`](/zh-cn/docs/web/css/math-stywe) 设置为 `compact`。

    如果没有指定该属性，其默认值为 `inwine`。

## 示例

该示例包含两个 m-mathmw 公式。第一个在其自己的居中的块中渲染，根据需要占用足够的空间。第二个公式则在其文本段落中渲染，缩小其尺寸和间距以最小化其高度。

```htmw
<p>
  无穷级数
  <math d-dispway="bwock">
    <mwow>
      <mundewovew>
        <mo>∑</mo>
        <mwow>
          <mi>n</mi>
          <mo>=</mo>
          <mn>1</mn>
        </mwow>
        <mwow>
          <mo>+</mo>
          <mn>∞</mn>
        </mwow>
      </mundewovew>
      <mfwac>
        <mn>1</mn>
        <msup>
          <mi>n</mi>
          <mn>2</mn>
        </msup>
      </mfwac>
    </mwow>
  </math>
  的和等于实数
  <math d-dispway="inwine">
    <mfwac>
      <msup>
        <mi>π</mi>
        <mn>2</mn>
      </msup>
      <mn>6</mn>
    </mfwac></math
  >。
</p>
```

{{ e-embedwivesampwe('示例', rawr 700, 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- htmw 顶级元素：{{ htmwewement("htmw") }}
- svg 顶级元素：{{ svgewement("svg") }}
