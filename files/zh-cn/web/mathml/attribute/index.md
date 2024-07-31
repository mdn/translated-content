---
title: 属性
slug: Web/MathML/Attribute
l10n:
  sourceCommit: 4d5e2c11f4b8cc32e54d2527d9576ed26ced9458
---

{{MathMLRef}}

此页面是 MathML 属性的字母表。要了解每个属性的更多详细信息，请参见 [MathML 元素页面](/zh-CN/docs/Web/MathML/Element)和[全局属性页面](/zh-CN/docs/Web/MathML/Global_attributes)。[值](/zh-CN/docs/Web/MathML/Values)页面也介绍了有关 MathML 属性常用值的一些说明。

> [!NOTE]
> 就像 [MathML](/zh-CN/docs/Web/MathML) 主页所解释的那样，MDN 使用 [MathML 核心](https://w3c.github.io/mathml-core/)作为参考规范。不过，一些浏览器仍在使用的遗留特性也被记录在案。你可以在 [MathML 4](https://w3c.github.io/mathml/) 中找到有关这些特性和其他特性的更多详细信息。

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
         一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，表示在作为下标或上标使用时，运算符是否应着重表示。
      </td>
    </tr>
    <tr>
      <td><code>accent</code></td>
      <td>
        {{ MathMLElement("mover") }}、{{ MathMLElement("munderover") }}
      </td>
      <td>
         一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml-特定类型"><code>&lt;boolean&gt;</code></a> 值，表示下标是否应着重表示。
      </td>
    </tr>
    <tr>
      <td><code>accentunder</code></td>
      <td>
        {{ MathMLElement("munder") }}、{{ MathMLElement("munderover") }}
      </td>
      <td>
         一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，表示上标是否应着重表示。
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
        请使用 CSS <a href="/zh-CN/docs/Web/CSS/background-color"><code>background-color</code></a> 代替。
      </td>
    </tr>
    <tr>
      <td><code>close</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>用于结尾分隔符的字符串。</td>
    </tr>
    <tr>
      <td><code>color</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>请使用 CSS <a href="/zh-CN/docs/Web/CSS/color"><code>color</code></a> 代替。</td>
    </tr>
    <tr>
      <td><code>columnalign</code></td>
      <td>
        {{ MathMLElement("mtable") }}、{{ MathMLElement("mtd") }}、{{ MathMLElement("mtr") }}
      </td>
      <td>指定表格单元格的水平对齐方式。</td>
    </tr>
    <tr>
      <td><code>columnlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>指定表格列边框。</td>
    </tr>
    <tr>
      <td><code>columnspacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>指定表格列间距。</td>
    </tr>
    <tr>
      <td><code>columnspan</code></td>
      <td>{{ MathMLElement("mtd") }}</td>
      <td>
        一个非负整数值，表示单元格扩展到多少表格列。
      </td>
    </tr>
    <tr>
      <td><code>denomalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>分数下分母的对齐方式。</td>
    </tr>
    <tr>
      <td><code>depth</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>
       一个 {{cssxref("length-percentage")}} 值，表示所需的深度（基线以下）。
      </td>
    </tr>
    <tr>
      <td><code>dir</code></td>
      <td>
        <a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a>
      </td>
      <td>
        文本方向，可能的值为 <code>ltr</code>（从左到右）或 <code>rtl</code>（从右到左）。
      </td>
    </tr>
    <tr>
      <td><code>display</code></td>
      <td>{{ MathMLElement("math") }}</td>
      <td>
        指定渲染模式，允许的值为 <code>block</code> 和 <code>inline</code>。
      </td>
    </tr>
    <tr>
      <td><code>displaystyle</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>
        <p>
        一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，指定是否将 <a href="/zh-CN/docs/Web/CSS/math-style">math-style</a> 设置为 <code>normal</code>（如果为真）或 <code>compact</code>（其他情况下）。
        </p>
      </td>
    </tr>
    <tr>
      <td><code>fence</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，指定运算符是否为分隔符（如括号）。该属性没有视觉效果。
      </td>
    </tr>
    <tr>
      <td><code>fontfamily</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        请使用 CSS <a href="/zh-CN/docs/Web/CSS/font-family"><code>font-family</code></a> 代替。
      </td>
    </tr>
    <tr>
      <td><code>fontsize</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        请使用 CSS <a href="/zh-CN/docs/Web/CSS/font-size"><code>font-size</code></a> 代替。
      </td>
    </tr>
    <tr>
      <td><code>fontstyle</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        请使用 CSS <a href="/zh-CN/docs/Web/CSS/font-style"><code>font-style</code></a> 代替。
      </td>
    </tr>
    <tr>
      <td><code>fontweight</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mstyle") }}</td>
      <td>
        请使用 CSS <a href="/zh-CN/docs/Web/CSS/font-weight"><code>font-weight</code></a> 代替。
      </td>
    </tr>
    <tr>
      <td><code>frame</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        指定整个 {{ MathMLElement("mtable") }} 的边框显示。可能的值为 <code>none</code>（默认）、<code>solid</code> 和 <code>dashed</code>。
      </td>
    </tr>
    <tr>
      <td><code>framespacing</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>
        指定在表格和 <code>frame</code> 之间添加的额外空间。
      </td>
    </tr>
    <tr>
      <td><code>height</code></td>
      <td>
        {{ MathMLElement("mpadded") }}、{{ MathMLElement("mspace") }}
      </td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示所需的高度（基线之上）。
      </td>
    </tr>
    <tr>
      <td><code>href</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>用于设置指向指定 URI 的超链接。</td>
    </tr>
    <tr>
      <td><code>id</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>设置与元素相关的唯一标识符。</td>
    </tr>
    <tr>
      <td><code>linethickness</code></td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>一个 {{cssxref("length-percentage")}} 值，表示水平分数线的宽度。</td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mo") }}
      </td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示运算符前的空间大小。
      </td>
    </tr>
    <tr>
      <td><code>lspace</code></td>
      <td>
        {{ MathMLElement("mpadded") }}
      </td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示子内容的定位点相对于元素定位点的水平位置。
      </td>
    </tr>
    <tr>
      <td><code>lquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        包含内容的起始引号，默认值为 <code>&amp;quot;</code>。
      </td>
    </tr>
    <tr>
      <td><code>mathbackground</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>
        元素的 <a href="/zh-CN/docs/Web/CSS/background-color">background-color</a> 值。
      </td>
    </tr>
    <tr>
      <td><code>mathcolor</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>
        元素的 <a href="/zh-CN/docs/Web/CSS/color">color</a> 值。
      </td>
    </tr>
    <tr>
      <td><code>mathsize</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，作为元素的 <a href="/zh-CN/docs/Web/CSS/font-size"><code>font-size</code></a> 值。
      </td>
    </tr>
    <tr>
      <td><code>mathvariant</code></td>
      <td><a href="/zh-CN/docs/Web/MathML/Global_attributes">所有 MathML 元素</a></td>
      <td>标记元素的逻辑类别，在排版上有所不同。</td>
    </tr>
    <tr>
      <td><code>maxsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>一个 {{cssxref("length-percentage")}} 值，表示运算符在拉伸状态下的最大尺寸。</td>
    </tr>
    <tr>
      <td><code>minsize</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>一个 {{cssxref("length-percentage")}} 值，表示运算符在拉伸状态下的最小尺寸。</td>
    </tr>
    <tr>
      <td><code>movablelimits</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，表示当 <a href="/zh-CN/docs/Web/CSS/math-style">math-style</a> 设置为 <code>compact</code> 时，所附的下标和上标是否移动到下角标和上角标的位置。
      </td>
    </tr>
    <tr>
      <td><code>notation</code></td>
      <td>{{ MathMLElement("menclose") }}</td>
      <td>
        应用于子元素的符号列表，以空白符分隔。
      </td>
    </tr>
    <tr>
      <td><code>numalign</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfrac") }}</td>
      <td>分数中分子的对齐方式。</td>
    </tr>
    <tr>
      <td><code>open</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("mfenced") }}</td>
      <td>用于起始分隔符的字符串。</td>
    </tr>
    <tr>
      <td><code>rowalign</code></td>
      <td>
        {{ MathMLElement("mtable") }}、{{ MathMLElement("mtd") }}、{{ MathMLElement("mtr") }}
      </td>
      <td>指定单元格的垂直对齐方式。</td>
    </tr>
    <tr>
      <td><code>rowlines</code></td>
      <td>{{ MathMLElement("mtable") }}</td>
      <td>指定表格行的边框大小。</td>
    </tr>
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
      <td>一个 {{cssxref("length-percentage")}} 值，表示运算符后的空格大小。</td>
    </tr>
    <tr>
      <td><code>rquote</code> {{deprecated_inline}}</td>
      <td>{{ MathMLElement("ms") }}</td>
      <td>
        包含内容的结尾引号，默认值为 <code>&amp;quot;</code>。
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
      一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，指定了该运算符是否为分割符（如逗号）。这个属性没有视觉效果。
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
        一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，表示运算符是否拉伸到相邻元素的大小。
      </td>
    </tr>
    <tr>
      <td><code>subscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msub") }}、{{ MathMLElement("msubsup") }}、{{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示下标基线下移的最小量。
      </td>
    </tr>
    <tr>
      <td><code>superscriptshift</code> {{deprecated_inline}}</td>
      <td>
        {{ MathMLElement("msup") }}、{{ MathMLElement("msubsup") }}、{{ MathMLElement("mmultiscripts") }}
      </td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示上标基线上移的最小量。
      </td>
    </tr>
    <tr>
      <td><code>symmetric</code></td>
      <td>{{ MathMLElement("mo") }}</td>
      <td>
        一个 <a href="/zh-CN/docs/Web/MathML/Values#mathml_特定类型"><code>&lt;boolean&gt;</code></a> 值，表示拉伸运算符是否应围绕数学虚轴（居中分数线）垂直对称。
      </td>
    </tr>
    <tr>
      <td><code>voffset</code></td>
      <td>{{ MathMLElement("mpadded") }}</td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示子内容的定位点相对于元素定位点的垂直位置。
      </td>
    </tr>
    <tr>
      <td><code>width</code></td>
      <td>
        {{ MathMLElement("mpadded") }}、{{ MathMLElement("mspace") }}、{{ MathMLElement("mtable") }}
      </td>
      <td>
        一个 {{cssxref("length-percentage")}} 值，表示所需的宽度。
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
