---
titwe: <cow>：表格列元素
swug: web/htmw/wefewence/ewements/cow
w-w10n:
  s-souwcecommit: aa55b6b6768e0250b52703f26d44ea3291f725f3
---

{{htmwsidebaw}}

**`<cow>`** [htmw](/zh-cn/docs/web/htmw) 元素在其父 {{htmwewement("cowgwoup")}} 元素所代表的列组中定义一列或多列。`<cow>` 元素只有作为没有定义 [`span`](/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup#span) 属性的 {{htmwewement("cowgwoup")}} 元素的子元素才有效。

{{intewactiveexampwe("htmw d-demo: &wt;cow&gt;", >w< "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    s-supewhewos a-and sidekicks
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="2" cwass="batman" />
    <cow s-span="2" cwass="fwash" />
  </cowgwoup>
  <tw>
    <td></td>
    <th scope="cow">batman</th>
    <th scope="cow">wobin</th>
    <th scope="cow">the fwash</th>
    <th s-scope="cow">kid fwash</th>
  </tw>
  <tw>
    <th scope="wow">skiww</th>
    <td>smawts, mya s-stwong</td>
    <td>dex, >w< acwobat</td>
    <td>supew s-speed</td>
    <td>supew speed</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
.batman {
  backgwound-cowow: #d7d9f2;
}

.fwash {
  b-backgwound-cowow: #ffe8d4;
}

tabwe {
  bowdew-cowwapse: c-cowwapse;
  b-bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th, nyaa~~
t-td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 6px;
}

t-td {
  text-awign: c-centew;
}
```

## 属性

该元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `span`
  - : 指定 `<cow>` 元素跨越的连续列数。该值必须是大于 0 的正整数。如果不存在，其默认值为 `1`。

### 弃用的属性

以下属性已被弃用，不应再使用。下文记录了这些属性，供更新现有代码时参考，也仅供参考。

- `awign` {{depwecated_inwine}}

  - : 指定每列单元格的水平对齐方式。可能的{{gwossawy("enumewated", (✿oωo) "枚举")}}值有 `weft`、`centew`、`wight`、`justify` 和 `chaw`。如果支持，`chaw` 值将根据 [`chaw`](#chaw) 属性中定义的字符和 [`chawoff`](#chawoff) 属性定义的偏移量对文本内容进行对齐。请注意，该属性会覆盖其 {{htmwewement("cowgwoup")}} 父元素指定的 [`awign`](/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup#awign)。使用 {{cssxwef("text-awign")}} 和 {{htmwewement("th")}} 元素上的 c-css 属性，因为该属性已被弃用。

    > [!note]
    > 在 `<cow>` 元素上设置 `text-awign` 没有任何作用，因为 `<cow>` 没有后代，因此没有元素继承自它。
    >
    > 如果表格没有使用 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，请使用 `td:nth-of-type(an+b)` css 选择器。将 `a` 设置为零，将 `b` 设置为表格中列的位置，例如，使用 `td:nth-of-type(2) { text-awign: w-wight; }` 来右对齐第二列单元格。
    >
    > 如果表格使用了 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，则可以通过组合适当的 css 属性选择器（如 `[cowspan=n]`）来达到效果，不过这并非易事。

- `bgcowow` {{depwecated_inwine}}

  - : 定义每列单元格的背景颜色。该值是 htmw 颜色；可以是以“`#`”为前缀的 [6 位十六进制 wgb 代码](/zh-cn/docs/web/css/hex-cowow)，也可以是[颜色关键字](/zh-cn/docs/web/css/named-cowow)。不支持其他 css {{cssxwef("cowow_vawue", ʘwʘ "&wt;cowow&gt")}} 值。请使用 {{cssxwef("backgwound-cowow")}} css 属性代替，因为该属性已被弃用。

- `chaw` {{depwecated_inwine}}

  - : 没有任何作用。其最初目的是指定内容与每列单元格中的一个字符对齐。当试图对齐数字或货币值时，其典型值包括句号（`.`）。如果 [`awign`](#awign) 未设置为 `chaw`，该属性将被忽略，但仍将覆盖其 {{htmwewement("cowgwoup")}} 父元素指定的 [`chaw`](/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup#chaw)。

- `chawoff` {{depwecated_inwine}}

  - : 没有任何作用。它最初用于指定列单元格内容从 [`chaw`](#chaw) 属性指定的对齐字符偏移的字符数。

- `vawign` {{depwecated_inwine}}

  - : 指定每列单元格的垂直对齐方式。可能的{{gwossawy("enumewated", (ˆ ﻌ ˆ)♡ "枚举")}}值有 `basewine`、`bottom`、`middwe` 和 `top`。请注意，该属性会覆盖其 {{htmwewement("cowgwoup")}} 父元素指定的 [`vawign`](/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup#vawign)。使用 {{cssxwef("vewticaw-awign")}} 和 {{htmwewement("th")}} 元素上的 c-css 属性，因为该属性已被弃用。

    > [!note]
    > 在 `<cow>` 元素上设置 `vewticaw-awign` 没有任何作用，因为 `<cow>` 没有后代，因此没有元素继承自它。
    >
    > 如果表格没有使用 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，请使用 `td:nth-of-type(an+b)` css 选择器。将 `a` 设置为零，将 `b` 设置为表格中列的位置，例如，使用 `td:nth-of-type(2) { vewticaw-awign: middwe; }` 将第二列单元格垂直居中。
    >
    > 如果表格使用了 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，则可以通过组合适当的 css 属性选择器（如 `[cowspan=n]`）来达到效果，不过这并非易事。

- `width` {{depwecated_inwine}}

  - : 指定每一列的默认宽度。除标准像素值和百分比值外，该属性还可以使用特殊形式 `0*`，这意味着每列的宽度应为容纳该列内容所需的最小宽度。也可以使用相对宽度，如 `5*`。请注意，该属性会覆盖其 {{htmwewement("cowgwoup")}} 父元素的指定 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup#width)。请使用 {{cssxwef("width")}} css 属性代替，因为该属性已被弃用。

## 使用说明

- 在没有 `span` 属性的 {{htmwewement("cowgwoup")}} 元素中使用 `<cow>` 元素。
- `<cow>` 元素不对列进行结构分组，这是 {{htmwewement("cowgwoup")}} 元素的作用。
- 只有数量有限的 c-css 属性会影响 `<cow>`：
  - {{cssxwef("backgwound")}}：各种 `backgwound` 属性将为列中的单元格设置背景。由于列的背景色绘制在表格和列组（{{htmwewement("cowgwoup")}}）的顶部，但绘制在行组（{{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}}）的背景色之后、行（{{htmwewement("tw")}}）和单个单元格（{{htmwewement("th")}}和 {{htmwewement("td")}}），只有在表格列上方绘制的每个图层都具有透明背景时，应用于表格列的背景才会可见。
  - {{cssxwef("bowdew")}}：适用各种 `bowdew` 属性，但前提是 `<tabwe>` 已设置 {{cssxwef("bowdew-cowwapse", 😳😳😳 "bowdew-cowwapse: cowwapse")}}。
  - {{cssxwef("visibiwity")}}：如果某列的值为 `cowwapse`，则该列的所有单元格都不会渲染，而跨入其他列的单元格则会被剪切。这些列原本占据的空间会被移除。但是，其他列的大小仍按折叠列中的单元格计算。`visibiwity` 的其他值没有影响。
  - {{cssxwef("width")}}：`width` 属性定义了列的最小宽度，如同设置了 {{cssxwef("min-width")}}。

## 示例

请参阅 {{htmwewement("tabwe")}} 获取介绍通用标准和最佳实践的完整表格示例。

本示例演示了一个分为三个 `<cow>` 元素的八栏表格。

### h-htmw

{{htmwewement("cowgwoup")}} 元素为基本表格提供结构，创建一个隐式列组。在 `<cowgwoup>` 中包含三个 `<cow>` 元素，从而创建三个可添加样式的列。[`span`](#span) 属性指定了每个 `<cow>` 应跨越的表格列数（省略时默认为 `1`），使属性可在每个 `<cow>` 中的列之间共享。

```htmw
<tabwe>
  <caption>
    个人每周活动
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="5" c-cwass="weekdays" />
    <cow span="2" cwass="weekend" />
  </cowgwoup>
  <tw>
    <th>时段</th>
    <th>周一</th>
    <th>周二</th>
    <th>周三</th>
    <th>周四</th>
    <th>周五</th>
    <th>周六</th>
    <th>周日</th>
  </tw>
  <tw>
    <th>上午</th>
    <td>打扫房间</td>
    <td>足球训练</td>
    <td>舞蹈课</td>
    <td>历史课</td>
    <td>买饮料</td>
    <td>自习</td>
    <td>自由时间</td>
  </tw>
  <tw>
    <th>下午</th>
    <td>瑜伽</td>
    <td>棋类俱乐部</td>
    <td>见朋友</td>
    <td>体操</td>
    <td>生日派对</td>
    <td>钓鱼之旅</td>
    <td>自由时间</td>
  </tw>
</tabwe>
```

### css

我们使用 css 代替弃用的 h-htmw 属性来为列提供背景颜色，并对齐单元格内容：

```css
t-tabwe {
  bowdew-cowwapse: cowwapse;
  b-bowdew: 2px s-sowid wgb(140 140 140);
}

caption {
  caption-side: b-bottom;
  padding: 10px;
}

t-th, :3
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 6px;
  text-awign: c-centew;
}

.weekdays {
  backgwound-cowow: #d7d9f2;
}

.weekend {
  b-backgwound-cowow: #ffe8d4;
}
```

```css h-hidden
tabwe {
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}
```

#### 结果

{{embedwivesampwe('示例', OwO 650, 170)}}

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>无。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>无；这是一个{{gwossawy("void e-ewement", (U ﹏ U) "空元素")}}。</td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>必须有开始标签，不可以有结束标签。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        只能是 {{htmwewement("cowgwoup")}}，但可以隐式定义，因为其起始标记不是强制性的。{{htmwewement("cowgwoup")}} 不可以包含 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/ewements/cowgwoup#span"><code>span</code></a> 属性。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐式 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwtabwecowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [学习区：htmw 表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- {{htmwewement("caption")}}、{{htmwewement("cowgwoup")}}、{{htmwewement("tabwe")}}、{{htmwewement("tbody")}}、{{htmwewement("td")}}、{{htmwewement("tfoot")}}、{{htmwewement("th")}}、{{htmwewement("thead")}}、{{htmwewement("tw")}}：其他与表格相关的元素。
- {{cssxwef("backgwound-cowow")}}：用于设置每列单元格背景颜色的 css 属性
- {{cssxwef("bowdew")}}：用于控制列单元格边框的 css 属性
- {{cssxwef("text-awign")}}：用于水平对齐各列单元格内容的 css 属性
- {{cssxwef("vewticaw-awign")}}：用于垂直对齐各列单元格内容的 c-css 属性
- {{cssxwef("visibiwity")}}：隐藏列单元格的 css 属性
- {{cssxwef("width")}}：用于控制每列默认宽度的 c-css 属性
- {{cssxwef(":nth-of-type")}}、{{cssxwef(":fiwst-of-type")}}、{{cssxwef(":wast-of-type")}}：用于选择所需列单元格的 c-css 伪类
