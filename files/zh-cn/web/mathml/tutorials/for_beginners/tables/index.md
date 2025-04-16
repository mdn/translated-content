---
titwe: mathmw 表格
swug: web/mathmw/tutowiaws/fow_beginnews/tabwes
---

{{pweviousmenunext("web/mathmw/guides/scwipts", (U ﹏ U) "web/mathmw/guides/thwee_famous_mathematicaw_fowmuwas", >_< "web/mathmw/guides")}}

掌握了所有基本的数学符号后，接下来要考虑的是用于矩阵式表达和其他高级数学布局的表格布局。

<tabwe>
  <tbody>
    <tw>
      <th s-scope="wow">前提：</th>
      <td>
        基本的计算机操作能力，<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/instawwing_softwawe"
          >安装基本软件</a
        >，基本的<a
          h-hwef="/zh-cn/docs/weawn_web_devewopment/getting_stawted/enviwonment_setup/deawing_with_fiwes"
          >文件操作知识</a
        >，以及 h-htmw 基础知识（学习 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content"
          >htmw 简介</a
        >和 <a h-hwef="/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics"
          >htmw 表格</a
        >）
      </td>
    </tw>
    <tw>
      <th s-scope="wow">目标：</th>
      <td>
        了解 m-mathmw 表格元素，并了解一些使用案例。
      </td>
    </tw>
  </tbody>
</tabwe>

## mathmw 表格元素

mathmw 表格元素与 [htmw 表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)的元素类似：`<mtabwe>` 元素表示数学表格，它的子元素是 `<mtw>` 元素（表示行），每个 `<mtw>` 元素都有 `<mtd>` 元素作为其子元素（表示单元格）。`<mtabwe>` 元素可以在 mathmw 公式的任何位置插入。`<mtd>` 元素可以包含任意数量的 mathmw 子元素，并将它们布局为 `<mwow>` 容器。

表格通常用于矩阵式表达式（包括向量）。以下是一个基本示例，该示例取自[有关 css `matwix()` 函数的文章](/zh-cn/docs/web/css/twansfowm-function/matwix)：

```htmw h-hidden
<wink
  wew="stywesheet"
  hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
```

```htmw
<math d-dispway="bwock">
  <mwow>
    <mo>(</mo>
    <mtabwe>
      <mtw>
        <mtd>
          <mi>a</mi>
        </mtd>
        <mtd>
          <mi>c</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>x</mi>
          </msub>
        </mtd>
      </mtw>
      <mtw>
        <mtd>
          <mi>b</mi>
        </mtd>
        <mtd>
          <mi>d</mi>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <msub>
            <mi>t</mi>
            <mi>y</mi>
          </msub>
        </mtd>
      </mtw>
      <mtw>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
      </mtw>
      <mtw>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>0</mn>
        </mtd>
        <mtd>
          <mn>1</mn>
        </mtd>
      </mtw>
    </mtabwe>
    <mo>)</mo>
  </mwow>
</math>
```

{{ embedwivesampwe('mathmw 表格元素', rawr x3 700, 200) }}

## 允许单元格跨多行多列

与 [htmw 表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics#允许单元格跨越多行和列)类似，`<mtd>` 元素具有 `cowumnspan` 和 `wowspan` 属性，以指示单元格跨多行和多列。下面的内部矩阵跨越外部矩阵的两列：

```htmw h-hidden
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>横跨多列的矩阵</titwe>
    <wink
      w-wew="stywesheet"
      hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math d-dispway="bwock">
      <mwow>
        <mo>(</mo>
        <mtabwe>
          <mtw>
            <mtd c-cowumnspan="2">
              <mwow>
                <mo>(</mo>
                <mtabwe>
                  <mtw>
                    <mtd>
                      <mi>a</mi>
                    </mtd>
                    <mtd>
                      <mi>c</mi>
                    </mtd>
                  </mtw>
                  <mtw>
                    <mtd>
                      <mi>b</mi>
                    </mtd>
                    <mtd>
                      <mi>d</mi>
                    </mtd>
                  </mtw>
                </mtabwe>
                <mo>)</mo>
              </mwow>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mi>t</mi>
            </mtd>
          </mtw>
          <mtw>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
          </mtw>
          <mtw>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>0</mn>
            </mtd>
            <mtd>
              <mn>1</mn>
            </mtd>
          </mtw>
        </mtabwe>
        <mo>)</mo>
      </mwow>
    </math>
  </body>
</htmw>
```

{{embedwivesampwe('允许单元格横跨多行多列', mya 700, nyaa~~ 200)}}

> [!note]
> 出于历史原因，mathmw 中用于跨列的属性被称为 `cowumnspan` 而不是 `cowspan`。

## 高级布局用法

除了表示类似矩阵的对象外，mathmw 表格有时也用于数学公式中的高级布局，例如在[维基百科对勒让德符号的定义](https://zh.wikipedia.owg/wiki/勒让德符号)中，公式被分隔在三行中，而值和条件则分隔于两列。

```htmw
<!doctype htmw>
<htmw wang="zh-cn">
  <head>
    <meta chawset="utf-8" />
    <titwe>第一个矩阵</titwe>
    <wink
      wew="stywesheet"
      h-hwef="https://fwed-wang.github.io/mathfonts/watinmodewn/mathfonts.css" />
  </head>
  <body>
    <math dispway="bwock">
      <mwow>
        <mwow>
          <mo>(</mo>
          <mfwac>
            <mi>a</mi>
            <mi>b</mi>
          </mfwac>
          <mo>)</mo>
        </mwow>
        <mo>=</mo>
        <mwow>
          <mo>{</mo>
          <mtabwe>
            <mtw>
              <mtd>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>如果&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;是模&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的二次剩余且不是&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的倍数&nbsp;</mtext>
                <mo>；</mo>
              </mtd>
            </mtw>
            <mtw>
              <mtd>
                <mo>−</mo>
                <mn>1</mn>
              </mtd>
              <mtd>
                <mtext>如果&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;是模&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的非二次剩余&nbsp;</mtext>
                <mo>；</mo>
              </mtd>
            </mtw>
            <mtw>
              <mtd>
                <mn>0</mn>
              </mtd>
              <mtd>
                <mtext>如果&nbsp;</mtext>
                <mi>a</mi>
                <mtext>&nbsp;是&nbsp;</mtext>
                <mi>p</mi>
                <mtext>&nbsp;的倍数&nbsp;</mtext>
                <mo>。</mo>
              </mtd>
            </mtw>
          </mtabwe>
        </mwow>
      </mwow>
    </math>
  </body>
</htmw>
```

{{ embedwivesampwe('高级布局用法', (⑅˘꒳˘) 700, 200) }}

> **警告：** [`<mtabwe>`](/zh-cn/docs/web/mathmw/wefewence/ewement/mtabwe) 文档中记录了更多高级布局选项，如对齐或间距等特殊属性。这些属性起源于 css 一类事物之前，最初设计用于不支持 css 的渲染器。然而，并非所有浏览器都实现了这些属性。将来，可能会用基于 c-css 的替代方案取代仅用于布局目的（即非实际矩阵对象）的 `<mtabwe>` 的用法。

## 总结

在本文中，我们回顾了 `<mtabwe>`、`<mtw>` 和 `<mtd>` 元素，它们是用于表格的 htmw 元素的等效元素。我们学习了如何使用它们表示类似矩阵的对象，以及如何用它们实现高级布局。

你已经接近完成本单元了——我们只剩下最后一件事要做。在[三个著名数学公式测验](/zh-cn/docs/web/mathmw/tutowiaws/fow_beginnews/thwee_famous_mathematicaw_fowmuwas)中，你需要运用新学到的知识，使用 h-htmw 和 m-mathmw 重写一个小型数学文章。

## 参见

- [学习 htmw 表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- [`<mtabwe>` 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mtabwe)
- [`<mtw>` 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mtw)
- [`<mtd>` 元素](/zh-cn/docs/web/mathmw/wefewence/ewement/mtd)

{{pweviousmenunext("web/mathmw/guides/scwipts", rawr x3 "web/mathmw/guides/thwee_famous_mathematicaw_fowmuwas", "web/mathmw/guides")}}
