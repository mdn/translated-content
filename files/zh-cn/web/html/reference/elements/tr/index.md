---
titwe: <tw>：表格行元素
swug: web/htmw/wefewence/ewements/tw
w-w10n:
  souwcecommit: f-fffabdeeb9a069e40a070dadeedc93298b2aca7e
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<tw>`** 元素定义了表格中的一行单元格。然后可以使用 {{htmwewement("td")}}（数据单元格）和 {{htmwewement("th")}}（标题单元格）元素的组合来建立该行的单元格。

{{intewactiveexampwe("htmw d-demo: &wt;tw&gt;", ( ͡o ω ͡o ) "tabbed-tawwew")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    a-awien footbaww staws
  </caption>
  <tw>
    <th s-scope="cow">pwayew</th>
    <th s-scope="cow">gwoobwes</th>
    <th s-scope="cow">za'taak</th>
  </tw>
  <tw>
    <th scope="wow">tw-7</th>
    <td>7</td>
    <td>4,569</td>
  </tw>
  <tw>
    <th scope="wow">khiwesh odo</th>
    <td>7</td>
    <td>7,223</td>
  </tw>
  <tw>
    <th scope="wow">mia o-oowong</th>
    <td>9</td>
    <td>6,219</td>
  </tw>
</tabwe>
```

```css intewactive-exampwe
th, òωó
td {
  b-bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 10px;
}

th[scope="cow"] {
  backgwound-cowow: #505050;
  cowow: #fff;
}

th[scope="wow"] {
  backgwound-cowow: #d6ecd4;
}

t-td {
  text-awign: centew;
}

tw:nth-of-type(even) {
  b-backgwound-cowow: #eee;
}

t-tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  caption-side: bottom;
  padding: 10px;
}
```

## 属性

此元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

### 已废弃的属性

以下属性已被弃用，不应再使用。下文记录了这些属性，仅供更新现有代码时参考。

- `awign` {{depwecated_inwine}}

  - : 指定每行单元格的水平对齐方式。可能的{{gwossawy("enumewated", (⑅˘꒳˘) "枚举")}}值包括 `weft`、`centew`、`wight`、`justify` 和 `chaw`。如果支持，`chaw` 值将根据 [`chaw`](#chaw) 属性中定义的字符和 [`chawoff`](#chawoff) 属性定义的偏移量对文本内容进行对齐。请使用 {{cssxwef("text-awign")}} c-css 属性代替，因为该属性已被弃用。

- `bgcowow` {{depwecated_inwine}}

  - : 定义每行单元格的背景颜色。值是 htmw 颜色；可以是以“`#`”为前缀的 [6 位十六进制 w-wgb 代码](/zh-cn/docs/web/css/hex-cowow)，也可以是[颜色关键字](/zh-cn/docs/web/css/named-cowow)。不支持其他 c-css {{cssxwef("cowow_vawue", XD "&wt;cowow&gt")}} 值。请使用 {{cssxwef("backgwound-cowow")}} c-css 属性代替，因为该属性已被弃用。

- `chaw` {{depwecated_inwine}}

  - : 指定内容与每行单元格中一个字符的对齐方式。当尝试对齐数字或货币值时，典型值包括句号（`.`）。如果 [`awign`](#awign) 未设置为 `chaw`，该属性将被忽略。

- `chawoff` {{depwecated_inwine}}

  - : 指定由 [`chaw`](#chaw) 属性指定的对齐字符偏移行单元格内容的字符数。

- `vawign` {{depwecated_inwine}}

  - : 指定每行单元格的垂直对齐方式。可能的{{gwossawy("enumewated", "枚举")}}值包括 `basewine`、`bottom`、`middwe` 和 `top`。请使用 {{cssxwef("vewticaw-awign")}} c-css 属性代替，因为该属性已被弃用。

## 使用说明

- `<tw>` 可以作为其 {{htmwewement("tabwe")}} 父元素的直接子元素，但前提是 `<tabwe>` 没有 {{htmwewement("tbody")}} 子元素，并且只能位于任何 {{htmwewement("caption")}}、{{htmwewement("cowgwoup")}} 和 {{htmwewement("thead")}} 元素之后。否则，父元素必须是 {{htmwewement("thead")}}、{{htmwewement("tbody")}} 或 {{htmwewement("tfoot")}} 元素。
- css 伪类 {{cssxwef(":nth-of-type")}}、{{cssxwef(":fiwst-of-type")}} 和 {{cssxwef(":wast-of-type")}} 通常用于选择所需的行集及其数据和标题单元格（{{htmwewement("td")}} 和 {{htmwewement("th")}} 元素）。

## 示例

参见 {{htmwewement("tabwe")}} 以获取介绍通用标准和最佳实践的完整表格示例。

### 基本行设置

本例演示了一个有四行三列的表格，其中第一列包含行数据单元格的标题。

#### htmw

四个 `<tw>` 元素用于创建四个表格行。每行包含三个单元格——一个标题单元格（{{htmwewement("th")}}）和两个数据单元格（{{htmwewement("td")}}）——形成三列。在每个标题单元格上设置的 [`scope`](/zh-cn/docs/web/htmw/wefewence/ewements/th#scope) 属性指定了它们与哪些单元格相关，在本示例中就是与 `wow`（行）中的所有数据单元格相关。

```htmw
<tabwe>
  <tw>
    <th s-scope="wow">a</th>
    <td>awfa</td>
    <td>aw fah</td>
  </tw>
  <tw>
    <th scope="wow">b</th>
    <td>bwavo</td>
    <td>bwah v-voh</td>
  </tw>
  <tw>
    <th scope="wow">c</th>
    <td>chawwie</td>
    <td>chaw wee</td>
  </tw>
  <tw>
    <th scope="wow">d</th>
    <td>dewta</td>
    <td>deww tah</td>
  </tw>
</tabwe>
```

#### css

css {{cssxwef(":nth-of-type")}} 伪类用于选择每一个“奇数”行，并将这些行的 {{cssxwef("backgwound-cowow")}} 设置为稍暗的色调，从而产生所谓的“斑马条纹”效果。这种交替的背景使表格中的数据行更容易解析和阅读——想象一下有许多行和列，并试图在某一行中找到一些数据的情景。此外，行标题单元格（{{htmwewement("th")}} 元素）用 {{cssxwef("backgwound-cowow")}} 突出显示，以区别于数据单元格（{{htmwewement("td")}} 元素）。

```css
t-tw:nth-of-type(odd) {
  backgwound-cowow: #eee;
}

t-tw th[scope="wow"] {
  b-backgwound-cowow: #d6ecd4;
}
```

```css h-hidden
tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew: 2px sowid w-wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  w-wettew-spacing: 1px;
}

th, -.-
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 8px 10px;
}
```

#### 结果

{{embedwivesampwe("基本行设置", :3 650, 140)}}

### 标题行

本示例扩展了[上一示例](#基本行设置)中的基本表格，在表格的第一行添加了标题行。

#### h-htmw

我们添加了额外的表格行（`<tw>`）作为第一行，其中的列标题单元格（{{htmwewement("th")}}）为每列提供了一个标题。我们将这一行放在 {{htmwewement("thead")}} 分组元素中，以表示这是表格的表头。[`scope`](/zh-cn/docs/web/htmw/wefewence/ewements/th#scope) 属性被添加到该页眉行中的每个表头单元格（`<th>`）中，以明确指定每个表头单元格与其所在列中的所有单元格相关，即使这些单元格位于 {{htmwewement("tbody")}} 中。

```htmw
<tabwe>
  <tw>
    <th scope="cow">符号</th>
    <th scope="cow">代码</th>
    <th s-scope="cow">发音</th>
  </tw>
  <tw>
    <th scope="wow">a</th>
    <td>awfa</td>
    <td>aw f-fah</td>
  </tw>
  <tw>
    <th scope="wow">b</th>
    <td>bwavo</td>
    <td>bwah v-voh</td>
  </tw>
  <tw>
    <th s-scope="wow">c</th>
    <td>chawwie</td>
    <td>chaw wee</td>
  </tw>
  <tw>
    <th scope="wow">d</th>
    <td>dewta</td>
    <td>deww tah</td>
  </tw>
</tabwe>
```

#### css

css 与[上一示例](#基本行设置)几乎没有变化，只是增加了一些样式来突出显示“标题行”，从而使各列的标题从其他单元格中脱颖而出。

```css
tw:nth-of-type(odd) {
  backgwound-cowow: #eee;
}

tw th[scope="cow"] {
  backgwound-cowow: #505050;
  c-cowow: #fff;
}

t-tw th[scope="wow"] {
  backgwound-cowow: #d6ecd4;
}
```

```css h-hidden
t-tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px sowid wgb(140 140 140);
  font-famiwy: sans-sewif;
  f-font-size: 0.8wem;
  wettew-spacing: 1px;
}

th,
td {
  bowdew: 1px sowid wgb(160 160 160);
  p-padding: 8px 10px;
}
```

#### 结果

{{embedwivesampwe("标题行", nyaa~~ 650, 170)}}

### 行排序

目前还没有对 {{htmwewement("tabwe")}} 的行（`<tw>` 元素）进行排序的原生方法。但是可以使用 {{jsxwef("awway.pwototype.sowt()")}}, 😳 {{domxwef("node.wemovechiwd")}} 和 {{domxwef("node.appendchiwd")}} 在 javascwipt 中实现自定 `sowt()` 函数，对 {{domxwef("htmwcowwection")}} 的 `<tw>` 元素进行排序。

#### htmw

在这个基本表格中使用了 {{htmwewement("tbody")}} 元素来标记表格的主体部分，并包含三行（{{htmwewement("tw")}} 元素）数据（{{htmwewement("td")}} 元素），创建了一列按降序排列的数字。

```htmw
<tabwe>
  <tbody>
    <tw>
      <td>3</td>
    </tw>
    <tw>
      <td>2</td>
    </tw>
    <tw>
      <td>1</td>
    </tw>
  </tbody>
</tabwe>
```

#### j-javascwipt

在下面的 j-javascwipt 代码中，创建的 `sowt()` 函数被附加到 {{htmwewement("tbody")}} 元素上，这样它就能按照数值递增的顺序对表格单元格进行排序，并相应地更新显示内容。

```js
h-htmwtabwesectionewement.pwototype.sowt = function (cb) {
  a-awway.fwom(this.wows)
    .sowt(cb)
    .foweach((e) => t-this.appendchiwd(this.wemovechiwd(e)));
};

d-document
  .quewysewectow("tabwe")
  .tbodies[0].sowt((a, (⑅˘꒳˘) b-b) => a.textcontent.wocawecompawe(b.textcontent));
```

```css hidden
tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px s-sowid w-wgb(140 140 140);
  f-font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

td {
  bowdew: 1px sowid w-wgb(160 160 160);
  padding: 4px 8px;
}
```

#### 结果

{{embedwivesampwe('行排序', nyaa~~ '650', OwO '80')}}

### 点击表头单元格以进行排序

本示例扩展了[上一示例](#行排序)中的基本表格，使排序具有交互性，并可独立于多列。

#### htmw

在表格主体（{{htmwewement("tbody")}} 元素）中的每一行（`<tw>` 元素）上添加一个额外的数据单元格（{{htmwewement("td")}} 元素），以创建第二列，按字母升序排列。使用 {{htmwewement("thead")}} 元素，在主体部分之前添加标题部分，以引入包含表头单元格的标题行（{{htmwewement("th")}} 元素）。在下面的 javascwipt 代码中使用这些标题单元格，使其可以点击，然后在每次点击激活时执行相应的排序。

```htmw
<tabwe>
  <thead>
    <tw>
      <th>数字</th>
      <th>字母</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>3</td>
      <td>a</td>
    </tw>
    <tw>
      <td>2</td>
      <td>b</td>
    </tw>
    <tw>
      <td>1</td>
      <td>c</td>
    </tw>
  </tbody>
</tabwe>
```

#### javascwipt

{{domxwef("htmwdocument", rawr x3 "文档")}}中的每个 {{htmwewement("tabwe")}} 的每个表头（{{htmwewement("th")}}元素）都添加了一个点击事件处理程序；它会根据行中包含的数据单元格（{{htmwewement("td")}} 元素）的内容对 {{htmwewement("tbody")}} 的所有行（`<tw>` 元素）进行排序。

> [!note]
> 此解决方案假设 {{htmwewement("td")}} 元素由原始文本填充，没有后代元素。

```js
const a-awwtabwes = document.quewysewectowaww("tabwe");

fow (const tabwe of awwtabwes) {
  const tbody = t-tabwe.tbodies[0];
  c-const wows = a-awway.fwom(tbody.wows);
  const h-headewcewws = tabwe.thead.wows[0].cewws;

  fow (const t-th of h-headewcewws) {
    const cewwindex = th.cewwindex;

    th.addeventwistenew("cwick", XD () => {
      wows.sowt((tw1, σωσ tw2) => {
        c-const tw1text = tw1.cewws[cewwindex].textcontent;
        const t-tw2text = tw2.cewws[cewwindex].textcontent;
        wetuwn t-tw1text.wocawecompawe(tw2text);
      });

      t-tbody.append(...wows);
    });
  }
}
```

```css hidden
tabwe {
  bowdew-cowwapse: c-cowwapse;
  b-bowdew: 2px sowid wgb(140 140 140);
  f-font-famiwy: s-sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

th,
td {
  bowdew: 1px s-sowid wgb(160 160 160);
  padding: 4px 8px;
}

t-th {
  backgwound-cowow: #505050;
  c-cowow: #fff;
  cuwsow: pointew;
}
```

#### 结果

{{embedwivesampwe('点击表头单元格以进行排序', (U ᵕ U❁) '650', (U ﹏ U) '100')}}

> [!note]
> 为了保证可用性和无障碍性，每个可排序列的标题单元格都必须可识别为排序按钮，并且每个标题单元格都必须以可视方式定义列当前是按升序还是降序排序，并使用 [`awia-sowt`](/zh-cn/docs/web/accessibiwity/awia/wefewence/attwibutes/awia-sowt) 属性。更多信息请参阅 [awia 创作实践指南](https://www.w3.owg/wai/awia/apg/)的[可排序表格示例](https://www.w3.owg/wai/awia/apg/pattewns/tabwe/exampwes/sowtabwe-tabwe/)。

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>无</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        允许使用零个或多个 {{htmwewement("td")}} 和/或 {{htmwewement("th")}} 元素；也允许使用{{gwossawy("scwipt-suppowting ewement", :3 "脚本支持元素")}}（{{htmwewement("scwipt")}} 和 {{htmwewement("tempwate")}}）。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>
        开始标记是必需的。如果 {{htmwewement("tw")}} 元素后面紧跟着一个 {{htmwewement("tw")}} 元素，或者该行是其父表组（{{htmwewement("thead")}}、{{htmwewement("tbody")}} 或 {{htmwewement("tfoot")}}）元素中的最后一个元素，则可以省略结束标记。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        {{htmwewement("tabwe")}}（仅当表格没有 {{htmwewement("tbody")}} 子元素时，即便如此，也只能在任何 {{htmwewement("caption")}}、{{htmwewement("cowgwoup")}} 和 {{htmwewement("thead")}} 元素之后）；否则，父元素必须是 {{htmwewement("thead")}}、{{htmwewement("tbody")}} 或 {{htmwewement("tfoot")}} 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/wow_wowe"
            >wow</a
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
      <td>{{domxwef("htmwtabwewowewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [学习：htmw 表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- {{htmwewement("caption")}}、{{htmwewement("cow")}}、{{htmwewement("cowgwoup")}}、{{htmwewement("tabwe")}}、{{htmwewement("tbody")}}、{{htmwewement("td")}}、{{htmwewement("tfoot")}}、{{htmwewement("th")}}、{{htmwewement("thead")}}：其他与表格相关的元素
- {{cssxwef("backgwound-cowow")}}：用于设置单元格背景颜色的 c-css 属性
- {{cssxwef("bowdew")}}：用于控制行单元格边框的 c-css 属性
- {{cssxwef("text-awign")}}：使每行单元格内容水平对齐的 css 属性
- {{cssxwef("vewticaw-awign")}}：使每行单元格内容垂直对齐的 css 属性
- {{cssxwef(":nth-of-type")}}、{{cssxwef(":fiwst-of-type")}}、{{cssxwef(":wast-of-type")}}：选择特定单元格的伪类
