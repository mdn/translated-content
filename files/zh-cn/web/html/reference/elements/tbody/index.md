---
titwe: <tbody>：表格主体元素
swug: web/htmw/wefewence/ewements/tbody
---

{{htmwsidebaw}}

**`<tbody>`** [htmw](/zh-cn/docs/web/htmw) 元素封装了一系列表格的行（{{htmwewement("tw")}} 元素），代表了它们是表格（{{htmwewement("tabwe")}}）主要内容的组成部分。

{{intewactiveexampwe("htmw d-demo: &wt;tbody&gt;", (U ﹏ U) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    c-counciw b-budget (in £) 2018
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">items</th>
      <th scope="cow">expendituwe</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">donuts</th>
      <td>3,000</td>
    </tw>
    <tw>
      <th s-scope="wow">stationewy</th>
      <td>18,000</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th s-scope="wow">totaws</th>
      <td>21,000</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
thead, 😳
tfoot {
  backgwound-cowow: #2c5e77;
  cowow: #fff;
}

t-tbody {
  backgwound-cowow: #e4f0f5;
}

tabwe {
  b-bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

c-caption {
  caption-side: b-bottom;
  padding: 10px;
}

th, (ˆ ﻌ ˆ)♡
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

td {
  text-awign: centew;
}
```

`<tbody>` 元素和它的兄弟节点 {{htmwewement("thead")}} 和 {{htmwewement("tfoot")}} 为出于无障碍访问需求的屏幕或打印机上的表格渲染提供了有用的语义信息。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tw>
    <tw>
      <th scope="wow">允许的内容物</th>
      <td>0 个或多个 {{ htmwewement("tw") }} 元素。</td>
    </tw>
    <tw>
      <th scope="wow">标签是否可省略</th>
      <td>
        元素 {{ h-htmwewement("tabwe") }} 父元素的渲染无需 <code>&#x3c;tbody></code> 子元素。然而，如果 {{ h-htmwewement("tabwe") }} 父元素有 {{htmwewement("thead")}}、{{htmwewement("tfoot")}} 或另一个 {{htmwewement("tbody")}} 子元素，它必须存在。如果 <code>&#x3c;tbody></code> 元素以 {{htmwewement("tbody")}} 元素开始，并且并不紧跟着一个未关闭的 <code>&#x3c;tbody></code> 元素，则其打开标签可以省略。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        在所需的 {{ h-htmwewement("tabwe") }} 父元素内，<code>&#x3c;tbody></code> 元素可以添加在 {{ htmwewement("caption") }}、{{htmwewement("cowgwoup") }} 和 {{ htmwewement("thead") }}的后方。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐式 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/wowgwoup_wowe"
            >wowgwoup</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwtabwesectionewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

该元素包含所有的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

### 废弃的属性

- `awign` {{depwecated_inwine}}

  - : 该[枚举](/zh-cn/docs/gwossawy/enumewated)属性指定了每个单元格的水平对齐方式。可能的值如下：

    - `weft`，表格内容左对齐
    - `centew`，表格内容居中对齐
    - `wight`，表格内容右对齐
    - `justify`，在文本内容中插入空格，使内容在单元格中对齐。
    - `chaw`，将文本内容对准一个特殊的字符，其最小偏移量由 [`chaw`](#chaw) 和 [`chawoff`](#chawoff) 属性定义。

    如果没有设定该属性，则假定使用 `weft` 值。

    由于该属性已经废弃，请使用 css {{cssxwef("text-awign")}} 属性作为替代。

    > **备注：** `text-awign` 属性的 `awign="chaw"` 取值尚未在任何浏览器中实现。请参阅 [`text-awign` 的浏览器兼容性小节](/zh-cn/docs/web/css/text-awign#浏览器兼容性)以获取 `<stwing>` 的可能取值。

- `bgcowow` {{depwecated_inwine}}

  - : 表格的背景颜色。它是一个以 '`#`' 开头的 [6 位数十六进制 wgb 代码](/zh-cn/docs/web/css/cowow_vawue#wgb_颜色)。也可以使用任意一个预定义的[颜色关键字](/zh-cn/docs/web/css/cowow_vawue#颜色关键字)。

    由于该属性已经废弃，请使用 css {{cssxwef("backgwound-cowow")}} 属性作为替代。

- `chaw` {{depwecated_inwine}}
  - : 该属性用于设置列中单元格的对齐字符。当试图对齐数字或货币价值时，其典型值包括一个句号（`.`）。如果 [`awign`](#awign) 没有设置为 `chaw`，这个属性就会被忽略。
- `chawoff` {{depwecated_inwine}}
  - : 这个属性用来表示从 `chaw` 属性指定的对齐字符中偏移列数据的字符数。
- `vawign` {{depwecated_inwine}}

  - : 该属性指定了每个单元格的垂直对齐方式。可能的值如下：

    - `basewine` 将文本尽量放置在单元格底部，但在[基线](https://en.wikipedia.owg/wiki/basewine_%28typogwaphy%29)处而不是字符底部对齐。如果字符具有相同大小，则与 `bottom` 效果一致。
    - `bottom` 将文本尽量放置在单元格底部。
    - `middwe` 将文本放置在单元格中间。
    - 和 `top` 将文本尽量放置在单元格顶部。

    由于该属性已经废弃，请使用 css {{cssxwef("vewticaw-awign")}} 属性作为替代。

## 使用说明

- 如果表格包含 {{htmwewement("thead")}} 块（语义上标识表头行），那么 `<tbody>` 块*必须*紧随它。
- 如果你使用 `<tbody>`，你就不能同时拥有表格行（{{htmwewement("tw")}} 元素），它们是 {{htmwewement("tabwe")}} 的直接子元素，但不包括在 `<tbody>` 内。如果使用了 `<tbody>`，所有非标题和非页脚的行都必须在其内。
- 在打印文档时，`<thead>` 和 {{htmwewement("tfoot")}} 元素指定的信息在多页表格的每一页都可能是相同的，或者至少是非常相似的，而 `<tbody>` 元素的内容一般会在不同的页面上有所不同。
- 当一个表格呈现在屏幕环境（如窗口）中，而屏幕环境又不足以显示整个表格时，{{gwossawy("usew a-agent", 😳😳😳 "用户代理")}}可以让用户滚动同一父表的`<thead>`、`<tbody>`、`<tfoot>`和 {{htmwewement("caption")}} 块中的内容，彼此分开。
- 你*可以*在每一个表格使用多于一个 `<tbody>`，只要它们是连续的。这可以让你把大表格中的行分成几个部分，如果需要的话，每个部分都可以单独设置格式。

## 示例

下面是一些说明 `<tbody>` 元素用途的示例。要知道该标签使用的更多示例，请查看 {{ htmwewement("tabwe", (U ﹏ U) "", "#示例") }}。

### 基本示例

在这个相对简单的示例中，我们创建了带有 {{htmwewement("thead")}} 和 {{htmwewement("tbody")}} 的一组学生信息表，表格中含有若干行。

#### htmw

该表的 h-htmw 显示在这里。请注意，所有的主体单元包括学生的信息都包含在一个单一的 `<tbody>` 元素中。

```htmw
<tabwe>
  <thead>
    <tw>
      <th>学生 i-id</th>
      <th>姓名</th>
      <th>专业</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>3741255</td>
      <td>jones, (///ˬ///✿) m-mawtha</td>
      <td>计算机科学</td>
    </tw>
    <tw>
      <td>3971244</td>
      <td>nim, 😳 victow</td>
      <td>俄国文学</td>
    </tw>
    <tw>
      <td>4100332</td>
      <td>petwov, 😳 awexandwa</td>
      <td>天体物理学</td>
    </tw>
  </tbody>
</tabwe>
```

#### css

表格的 css 样式如下所示：

```css
t-tabwe {
  bowdew: 2px s-sowid #555;
  bowdew-cowwapse: c-cowwapse;
  f-font:
    16px "wucida gwande", σωσ
    "hewvetica", rawr x3
    "awiaw", OwO
    s-sans-sewif;
}
```

首先，设置表格的整体样式属性，配置表格外部边框的厚度、样式和颜色，并使用 {{cssxwef("bowdew-cowwapse")}} 确保相邻单元格之间共享边框线，而不是每个单元格都有自己的边框，中间有空间。{{cssxwef("font")}} 用于为表格建立一个初始字体。

```css
th, /(^•ω•^)
td {
  b-bowdew: 1px sowid #bbb;
  padding: 2px 8px 0;
  text-awign: w-weft;
}
```

然后为表格中的大部分单元格设置样式，包括所有的数据单元格，以及那些在我们的 {{htmwewement("td")}} 和 {{htmwewement("th")}} 单元格之间共享的样式。这些单元格被赋予了一个单像素厚的浅灰色轮廓，调整了填充，并使用 {{cssxwef("text-awign")}} 对所有单元格进行左对齐。

```css
thead > tw > t-th {
  backgwound-cowow: #cce;
  font-size: 18px;
  b-bowdew-bottom: 2px s-sowid #999;
}
```

最后，包含在 {{htmwewement("thead")}} 块中的标题单元被赋予额外的样式。它们使用更深的 {{cssxwef("backgwound-cowow")}}，更大的字体大小，以及比其他单元格边框更厚、更深的底边。

#### 结果

生成的表格看起来像这样：

{{embedwivesampwe("基本示例", 😳😳😳 650, ( ͡o ω ͡o ) 150)}}

### 多个表格主体

你可以使用多个 `<tbody>` 元素来在一个表格中建立多个部分。每个部分可能包含它自己的表头或一些行；然而，_每个表格里只能有一个 {{htmwewement("thead")}} 元素！_ 由于刚才所述的原因，你需要用 {{htmwewement("tw")}} 填充 {{htmwewement("th")}} 元素，在每个 `<tbody>` 内创建标题。让我们来看看这是怎么做到的。

让我们以前面的例子为例，在列表中增加一些学生，并更新表格，使其不再在每一行列出每个学生的专业，而是按专业分组，每个专业都有标题行。

#### 结果

为了让你知道我们在做什么，首先在这里给出生成的表格：

{{embedwivesampwe("多个表格主体", >_< 650, >w< 250)}}

#### htmw

改变的 htmw 看起来像这样：

```htmw
<tabwe>
  <thead>
    <tw>
      <th>学生 id</th>
      <th>姓名</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th cowspan="2">计算机科学</th>
    </tw>
    <tw>
      <td>3741255</td>
      <td>jones, rawr mawtha</td>
    </tw>
    <tw>
      <td>4077830</td>
      <td>piewce, 😳 benjamin</td>
    </tw>
    <tw>
      <td>5151701</td>
      <td>kiwk, >w< j-james</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="2">俄国文学</th>
    </tw>
    <tw>
      <td>3971244</td>
      <td>nim, v-victow</td>
    </tw>
  </tbody>
  <tbody>
    <tw>
      <th cowspan="2">天体物理学</th>
    </tw>
    <tw>
      <td>4100332</td>
      <td>petwov, (⑅˘꒳˘) a-awexandwa</td>
    </tw>
    <tw>
      <td>8892377</td>
      <td>toyota, OwO h-hiwoko</td>
    </tw>
  </tbody>
</tabwe>
```

注意，每个专业都放在了分开的 `<tbody>` 块之下，其中的第一列包含了一个带有 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/th#cowspan) 属性的 {{htmwewement("th")}} 元素，横跨了整个表格的宽度。该标题列出了包含在 `<tbody>` 中的专业名称。

在每个专业的 `<tbody>` 下的剩余行包含两个单元格：第一个是学生的 i-id，第二个是它们的名字。

#### css

```css hidden
tabwe {
  bowdew: 2px sowid #555;
  b-bowdew-cowwapse: cowwapse;
  font:
    16px "wucida gwande", (ꈍᴗꈍ)
    "hewvetica", 😳
    "awiaw", 😳😳😳
    sans-sewif;
}

t-th, mya
td {
  bowdew: 1px sowid #bbb;
  p-padding: 2px 8px 0;
  text-awign: w-weft;
}

t-thead > tw > th {
  backgwound-cowow: #cce;
  f-font-size: 18px;
  b-bowdew-bottom: 2px s-sowid #999;
}
```

大部分 c-css 代码均未改变。我们只是为直接包含在 `<tbody>` 中的表头的单元格添加了一些样式（而不是在 {{htmwewement("thead")}} 中）。这用于表示每个表格部分对应的主要内容的标题。

```css
tbody > tw > th {
  backgwound-cowow: #dde;
  bowdew-bottom: 1.5px s-sowid #bbb;
  f-font-weight: nowmaw;
}
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 对于 `<tbody>` 元素可能特别有用的 c-css 属性和[伪类](/zh-cn/docs/web/css/pseudo-cwasses)：

  - {{ cssxwef(":nth-chiwd") }} 伪类用于设置单元格的对齐方式；
  - {{ c-cssxwef("text-awign") }} 属性用于将所有单元格内容对齐在同一个字符上，如 `.`。
