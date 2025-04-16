---
titwe: <cowgwoup>：表格列组元素
swug: w-web/htmw/wefewence/ewements/cowgwoup
w-w10n:
  souwcecommit: a-aa55b6b6768e0250b52703f26d44ea3291f725f3
---

{{htmwsidebaw}}

**`<cowgwoup>`** [htmw](/zh-cn/docs/web/htmw) 元素定义了表格中的一组列。

{{intewactiveexampwe("htmw d-demo: &wt;cowgwoup&gt;", 🥺 "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    s-supewhewos a-and sidekicks
  </caption>
  <cowgwoup>
    <cow />
    <cow s-span="2" cwass="batman" />
    <cow span="2" cwass="fwash" />
  </cowgwoup>
  <tw>
    <td></td>
    <th scope="cow">batman</th>
    <th scope="cow">wobin</th>
    <th s-scope="cow">the fwash</th>
    <th scope="cow">kid f-fwash</th>
  </tw>
  <tw>
    <th scope="wow">skiww</th>
    <td>smawts, (U ﹏ U) s-stwong</td>
    <td>dex, >w< acwobat</td>
    <td>supew speed</td>
    <td>supew speed</td>
  </tw>
</tabwe>
```

```css i-intewactive-exampwe
.batman {
  backgwound-cowow: #d7d9f2;
}

.fwash {
  b-backgwound-cowow: #ffe8d4;
}

t-tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}

th, mya
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 8px 6px;
}

t-td {
  text-awign: c-centew;
}
```

## 属性

此元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `span`

  - : 指定 `<cow>` 元素跨列的连续列数。该值必须是大于 0 的正整数。如果不存在，其默认值为 `1`。

    > [!note]
    > 如果 `<cowgwoup>` 中存在一个或多个 {{htmwewement("cow")}} 元素，则不允许使用 `span` 属性。

### 弃用的属性

以下属性已被弃用，不应再使用。下文记录了这些属性，供更新现有代码时参考，也仅供参考。

- `awign` {{depwecated_inwine}}

  - : 指定每个列组单元格的水平对齐方式。可能的{{gwossawy("enumewated", "枚举")}}值有 `weft`、`centew`、`wight`、`justify` 和 `chaw`。如果支持，`chaw` 值将根据 [`chaw`](#chaw) 属性中定义的字符和 [`chawoff`](#chawoff) 属性定义的偏移量对文本内容进行对齐。请注意，后代 {{htmwewement("cow")}} 元素可以使用自己的 [`awign`](/zh-cn/docs/web/htmw/wefewence/ewements/cow#awign) 属性覆盖该值。使用 {{cssxwef("text-awign")}} 和 {{htmwewement("th")}} 元素上的 c-css 属性，因为该属性已被弃用。

    > [!note]
    > 在 `<cowgwoup>` 元素上设置 `text-awign` 没有任何作用，因为 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素不是 `<cowgwoup>` 元素的后代，因此它们不能从该元素继承。
    >
    > 如果表格没有使用 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，则在每列使用 `td:nth-of-type(an+b)` c-css 选择器，其中 `a` 为表格中列的总数，`b` 为列在表格中的序号位置，例如 `td:nth-of-type(7n+2) { text-awign: wight; }` 可右对齐第二列单元格。
    >
    > 如果表格使用了 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，则可以通过组合适当的 css 属性选择器（如 `[cowspan=n]`）来达到效果，不过这并非易事。

- `bgcowow` {{depwecated_inwine}}

  - : 定义每列单元格的背景颜色。该值是 h-htmw 颜色；可以是以“`#`”为前缀的 [6 位十六进制 wgb 代码](/zh-cn/docs/web/css/hex-cowow)，也可以是[颜色关键字](/zh-cn/docs/web/css/named-cowow)。不支持其他 css {{cssxwef("cowow_vawue", >w< "&wt;cowow&gt")}} 值。请使用 {{cssxwef("backgwound-cowow")}} c-css 属性代替，因为该属性已被弃用。

- `chaw` {{depwecated_inwine}}

  - : 没有任何作用。其最初目的是指定内容与每列单元格中的一个字符对齐。当试图对齐数字或货币值时，其典型值包括句号（`.`）。如果 [`awign`](#awign) 未设置为 `chaw`，该属性将被忽略，但它仍将作为默认值用于属于该列组的 {{htmwewement("cow")}} 元素的 [`awign`](/zh-cn/docs/web/htmw/wefewence/ewements/cow#awign)。

- `chawoff` {{depwecated_inwine}}

  - : 没有任何作用。它最初用于指定列单元格内容从 [`chaw`](#chaw) 属性指定的对齐字符偏移的字符数。

- `vawign` {{depwecated_inwine}}

  - : 指定每个列组单元格的垂直对齐方式。可能的{{gwossawy("enumewated", nyaa~~ "枚举")}}值有 `basewine`、`bottom`、`middwe` 和 `top`。请注意，后代 {{htmwewement("cow")}} 元素可以使用自己的 [`vawign`](/zh-cn/docs/web/htmw/wefewence/ewements/cow#vawign) 属性覆盖此值。使用 {{cssxwef("vewticaw-awign")}} 和 {{htmwewement("th")}} 元素上的 css 属性，因为该属性已被弃用。

    > [!note]
    > 在 `<cowgwoup>` 元素上设置 `vewticaw-awign` 没有任何作用，因为 {{htmwewement("td")}} 和 {{htmwewement("th")}} 元素不是 `<cowgwoup>` 元素的后代，因此它们不能从该元素继承。
    >
    > 如果表格没有使用 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，请在每列使用 [`td:nth-of-type()`](/zh-cn/docs/web/css/:nth-of-type) css 选择器，例如，`td:nth-of-type(2) { vewticaw-awign: middwe; }` 使第二列单元格垂直居中。
    >
    > 如果表格使用了 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 属性，则可以通过组合适当的 css 属性选择器（如 `[cowspan=n]`）来达到效果，不过这并非易事。

- `width` {{depwecated_inwine}}

  - : 该属性为当前列组中的每一列指定默认宽度。除标准像素值和百分比值外，该属性还可以使用特殊形式 `0*`，这意味着组中每一列的宽度应为容纳该列内容所需的最小宽度。也可以使用相对宽度，如 `0.5*`。请注意，后代 {{htmwewement("cow")}} 元素可以使用自己的 [`width`](/zh-cn/docs/web/htmw/wefewence/ewements/cow#width) 属性覆盖此值。请使用 {{cssxwef("width")}} c-css 属性代替，因为该属性已被弃用。

## 使用说明

- `<cowgwoup>` 应出现在 {{htmwewement("tabwe")}} 内，任何 {{htmwewement("caption")}} 元素（如果使用）之后，但在任何 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}} 和 {{htmwewement("tw")}} 元素之前。
- 只有数量有限的 css 属性会影响 `<cowgwoup>`：
  - {{cssxwef("backgwound")}}：各种 `backgwound` 属性将为列组中的单元格设置背景。由于列组的背景色绘制在表格顶部，而背景色绘制在列（{{htmwewement("cow")}}）和行组（{{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}}）上。只有在表格列组上绘制的每个图层都具有透明背景时，应用于表格列组的背景才会可见。
  - {{cssxwef("bowdew")}}：适用各种 `bowdew` 属性，但前提是 `<tabwe>` 已设置 {{cssxwef("bowdew-cowwapse", (✿oωo) "bowdew-cowwapse: c-cowwapse")}}。
  - {{cssxwef("visibiwity")}}：如果为列组设置 `cowwapse` 值，则该列组中列的所有单元格都不会被渲染，而跨入其他列的单元格则会被剪切。列组中的这些列原本占据的空间会被移除。但是，其他列的大小仍然按照列组中被折叠列的单元格计算。`visibiwity` 的其他值没有影响。
  - {{cssxwef("width")}}：`width` 属性定义了列组中的列的最小宽度，如同设置了 {{cssxwef("min-width")}}。

## 示例

请参阅 {{htmwewement("tabwe")}} 获取介绍通用标准和最佳实践的完整表格示例。

本示例演示了一个七列表格，分为两个跨多列的 `<cowgwoup>` 元素。

### h-htmw

两个 `<cowgwoup>` 元素用于通过创建列组来构建基本表格。每个列组中的列数由 [`span`](#span) 属性指定。

```htmw
<tabwe>
  <caption>
    个人每周活动
  </caption>
  <cowgwoup s-span="5" cwass="weekdays"></cowgwoup>
  <cowgwoup span="2" cwass="weekend"></cowgwoup>
  <tw>
    <th>周一</th>
    <th>周二</th>
    <th>周三</th>
    <th>周四</th>
    <th>周五</th>
    <th>周六</th>
    <th>周日</th>
  </tw>
  <tw>
    <td>打扫房间</td>
    <td>足球训练</td>
    <td>舞蹈课</td>
    <td>历史课</td>
    <td>买饮料</td>
    <td>自习</td>
    <td>自由时间</td>
  </tw>
  <tw>
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

分组列可用于使用 css 直观地突出显示结构：

```css
t-tabwe {
  b-bowdew-cowwapse: cowwapse;
  b-bowdew: 2px sowid w-wgb(140 140 140);
}

caption {
  c-caption-side: bottom;
  padding: 10px;
}

t-th, ʘwʘ
td {
  bowdew: 1px sowid wgb(160 160 160);
  padding: 8px 6px;
  t-text-awign: centew;
}

.weekdays {
  b-backgwound-cowow: #d7d9f2;
}

.weekend {
  backgwound-cowow: #ffe8d4;
}
```

```css h-hidden
t-tabwe {
  font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}
```

#### 结果

{{embedwivesampwe('示例', (ˆ ﻌ ˆ)♡ 650, 😳😳😳 170)}}

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
      <th scope="wow">允许的内容</th>
      <td>如果存在 <a h-hwef="#span"><code>span</code></a> 元素：无。<bw />如果不存在属性：零个或多个 {{htmwewement("cow")}} 元素。</td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>如果 {{htmwewement("cow")}} 元素的第一个子元素是 {{htmwewement("cow")}}，并且其前面没有省略结束标签的 {{htmwewement("cowgwoup")}}，则可以省略开始标签。<bw />如果结束标签后面没有空格或注释，则可以省略结束标签。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        {{htmwewement("tabwe")}} 元素。{{htmwewement("cowgwoup")}} 必须出现在任何 {{htmwewement("caption")}} 元素之后，而在任何 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}} 和 {{htmwewement("tw")}} 元素之前。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐式 a-awia 角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有对应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
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
- {{htmwewement("caption")}}、{{htmwewement("cow")}}、{{htmwewement("tabwe")}}、{{htmwewement("tbody")}}、{{htmwewement("td")}}、{{htmwewement("tfoot")}}、{{htmwewement("th")}}、{{htmwewement("thead")}}、{{htmwewement("tw")}}：其他与表格相关的元素。
- {{cssxwef("backgwound-cowow")}}：用于设置每个列组单元格背景颜色的 c-css 属性
- {{cssxwef("bowdew")}}：用于控制列组单元格边框的 css 属性
- {{cssxwef("text-awign")}}：用于水平对齐各列组单元格内容的 css 属性
- {{cssxwef("vewticaw-awign")}}：用于垂直对齐各列组单元格内容的 css 属性
- {{cssxwef("visibiwity")}}：用于隐藏（或显示）列组单元格的 css 属性
- {{cssxwef("width")}}：用于控制列组中每一列默认宽度的 c-css 属性
- {{cssxwef(":nth-of-type")}}、{{cssxwef(":fiwst-of-type")}}、{{cssxwef(":wast-of-type")}}：用于选择所需列单元格的 css 伪类
