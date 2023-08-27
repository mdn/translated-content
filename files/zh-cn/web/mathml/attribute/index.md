---
title: 属性
slug: Web/MathML/Attribute
---

{{MathMLRef}}

此页面是 MathML 属性的字母表。要了解每个属性的更多详细信息，请参见 [MathML 元素页面](/zh-CN/docs/Web/MathML/Element)和[全局属性页面](/zh-CN/docs/Web/MathML/Global_attributes)。[值](/zh-CN/docs/Web/MathML/Values)页面也介绍了有关 MathML 属性常用值的一些说明。

> **备注：** 就像 [MathML](/zh-CN/docs/Web/MathML) 主页所解释的那样，MDN 使用 [MathML 核心](https://w3c.github.io/mathml-core/)作为参考规范。不过，一些浏览器仍在使用的传统功能也被记录在案。你可以在 [MathML 4](https://w3c.github.io/mathml/) 中找到有关这些功能和其他功能的更多详细信息。

<table class="standard-table">
  <thead>
    <tr>
      <th>名称</th>
      <th>接受该属性的元素</th>
      <th>描述</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
         一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示在作为下标或上标使用时，运算符是否应着重表示。
      </td>
    </tr>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mover") }}、{{ MathMLElement("munderover") }}
      </td>
      <td>
         一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示下标是否应着重表示。
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }}、{{ MathMLElement("munderover") }}
      </td>
      <td>
         一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示上标是否应着重表示。
      </td>
    </tr>
    <tr>
      <td><code>actiontype</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>一个字符串值，用于指定此元素发生的操作。</td>
    </tr>
    <tr>
      <td><code>align</code></td>
      <td>
        {{ MathMLElement("mtable") }}
      </td>
      <td>
        指定表格相对于环境的垂直对齐方式。
      </td>
    </tr>
    <tr>
      <td><code>background</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        请使用 CSS <a href="/zh-CN/docs/Web/CSS/background-color"><code>background-color</code></a> 属性。
      </td>
    </tr>
    <tr>
      <td><code>close</code>  {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>用于结尾分隔符的字符串。</td>
    <tr>
      <td><code>rowspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>指定表格行间距。</td>
    </tr>
    <tr>
      <td><code>rowspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        一个非负整数值，表示单元格扩展到多少行。
      </td>
    </tr>
    <tr>
      <td><code>rspace</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>一个 <a href="/zh-CN/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> 值，表示运算符后的空格大小。</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        结尾引语，用于包含内容。默认值为 <code>&amp;quot;</code>。
      </td>
    </tr>
    <tr>
      <td><code>scriptlevel</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>
        指定了元素的 <a href="/zh-CN/docs/Web/CSS/math-depth">math-depth</a> 值。参见 <a href="/zh-CN/docs/Web/MathML/Global_attributes/scriptlevel#values">scriptlevel 页面</a>以了解接受的值和映射。
      </td>
    </tr>
    <tr>
      <td><code>scriptminsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        指定由于 <code>scriptlevel</code> 的更改而允许的最小字体大小。
      </td>
    </tr>
    <tr>
      <td><code>scriptsizemultiplier</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        指定倍数，用于根据 <code>scriptlevel</code> 的变化调整字体大小。
      </td>
    </tr>
    <tr>
      <td><code>selection</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("maction") }}</td>
      <td>子元素可见，仅在某些 <code>actiontype</code> 值中被考虑。</td>
    </tr>
    <tr>
      <td><code>separator</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
      一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，指定了该运算符是否为分割符（如逗号）。这个属性没有视觉效果。
      </td>
    </tr>
    <tr>
      <td><code>separators</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>
        用于不同分隔符的零个或多个字符的序列。
      </td>
    </tr>
    <tr>
      <td><code>stretchy</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示运算符是否拉伸到相邻元素的大小。
      </td>
    </tr>
    <tr>
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msub") }}、{{ MathMLElement("msubsup") }}、{{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示下标基线下移的最小量。
      </td>
    </tr>
    <tr>
      <td><code>superscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msup") }}、{{ MathMLElement("msubsup") }}、{{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        一个 <a href="/zh-CN/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> 值，表示上标基线上移的最小量。
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        一个 <a href="/zh-CN/docs/Web/MathML/Attribute/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示拉伸运算符是否应围绕数学虚轴（居中分数线）垂直对称。
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>一个 <a href="/zh-CN/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> 值，表示子内容的定位点相对于元素定位点的垂直位置。
</td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }}、{{ MathMLElement("mspace") }}】{{ MathMLElement("mtable") }}
      </td>
      <td>
        一个 <a href="/zh-CN/docs/Web/CSS/length-percentage"><code>&lt;length-percentage&gt;</code></a> 值，表示所需的宽度。
      </td>
    </tr>
    <tr>
      <td><code>xmlns</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        指定 MathML 命名空间的 URI（<code
          ><a href="https://www.w3.org/1998/Math/MathML"
            >http://www.w3.org/1998/Math/MathML</a
          ></code
        >）
      </td>
    </tr>
  </tbody>
</table>
