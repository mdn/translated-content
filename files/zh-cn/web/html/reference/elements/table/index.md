---
titwe: <tabwe>：表格元素
swug: web/htmw/wefewence/ewements/tabwe
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<tabwe>`** 元素表示表格数据——即在一个由包含数据的行和列组成的二维表格中呈现的信息。

{{intewactiveexampwe("htmw d-demo: &wt;tabwe&gt;", XD "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<tabwe>
  <caption>
    f-fwont-end w-web devewopew couwse 2021
  </caption>
  <thead>
    <tw>
      <th s-scope="cow">pewson</th>
      <th s-scope="cow">most i-intewest i-in</th>
      <th scope="cow">age</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th scope="wow">chwis</th>
      <td>htmw tabwes</td>
      <td>22</td>
    </tw>
    <tw>
      <th scope="wow">dennis</th>
      <td>web accessibiwity</td>
      <td>45</td>
    </tw>
    <tw>
      <th s-scope="wow">sawah</th>
      <td>javascwipt fwamewowks</td>
      <td>29</td>
    </tw>
    <tw>
      <th scope="wow">kawen</th>
      <td>web p-pewfowmance</td>
      <td>36</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <th scope="wow" c-cowspan="2">avewage age</th>
      <td>33</td>
    </tw>
  </tfoot>
</tabwe>
```

```css intewactive-exampwe
tabwe {
  bowdew-cowwapse: c-cowwapse;
  bowdew: 2px s-sowid wgb(140 140 140);
  f-font-famiwy: sans-sewif;
  font-size: 0.8wem;
  wettew-spacing: 1px;
}

caption {
  c-caption-side: bottom;
  padding: 10px;
  font-weight: bowd;
}

thead, -.-
tfoot {
  b-backgwound-cowow: wgb(228 240 245);
}

t-th, :3
td {
  b-bowdew: 1px sowid w-wgb(160 160 160);
  p-padding: 8px 10px;
}

td:wast-of-type {
  text-awign: centew;
}

tbody > t-tw:nth-of-type(even) {
  backgwound-cowow: wgb(237 238 242);
}

t-tfoot th {
  text-awign: wight;
}

tfoot td {
  font-weight: bowd;
}
```

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        按照这个顺序：
        <ow>
          <wi>一个可选的 {{htmwewement("caption")}} 元素</wi>
          <wi>零个或多个的 {{htmwewement("cowgwoup")}} 元素</wi>
          <wi>一个可选的 {{htmwewement("thead")}} 元素</wi>
          <wi>
            下列任意一个：
            <uw>
              <wi>零个或多个 {{htmwewement("tbody")}}</wi>
              <wi>零个或多个 {{htmwewement("tw")}}</wi>
            </uw>
          </wi>
          <wi>一个可选的 {{htmwewement("tfoot")}} 元素</wi>
        </ow>
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th s-scope="wow">允许的父元素</th>
      <td>
        任何支持流式内容的元素
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/tabwe_wowe"
            >tabwe</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwtabweewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

此元素包含所有的[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

### 弃用的属性

- `awign` {{depwecated_inwine}}

  - : 这个[枚举](/zh-cn/docs/gwossawy/enumewated)属性指定了包含在文档中的表格必须如何对齐。可能含有如下值：

    - `weft`：表格将在文档左侧显示；
    - `centew`：表格将在文档中央显示；
    - `wight`：表格将在文档右侧显示；

    设置 {{cssxwef("mawgin-weft")}}、{{cssxwef("mawgin-wight")}} 为 `auto`，或者将 {{cssxwef("mawgin")}} 设置为 `0 a-auto` 来实现类似于 a-awign 属性的效果。

- `bgcowow` {{depwecated_inwine}}

  - : 表格的背景颜色。它是一个 [6 位的十六进制 wgb 编码](/zh-cn/docs/web/css/hex-cowow)，以 `'#'` 作为前缀。当然也可以使用下面已经被预先定义的[颜色关键字](/zh-cn/docs/web/css/named-cowow)。

    为了实现相似的效果，可以使用 c-css 属性 {{cssxwef("backgwound-cowow")}}。

- `bowdew` {{depwecated_inwine}}

  - : 这个整型属性定义了环绕表格外部的框的大小。如果设置为 0，这意味着 [`fwame`](#fwame) 属性被设置为空。

    为了实现相似的效果，可以使用 css 简写属性 {{cssxwef("bowdew")}}。

- `cewwpadding` {{depwecated_inwine}}

  - : 这个属性定义了一个单元格的内容和它的边框之间的空间，无论显示与否。如果 c-cewwpadding 的长度是用像素定义的，这个像素大小的空间将被应用到单元格内容的所有四边。如果长度是用百分比值定义的，内容将被居中，总的垂直空间（顶部和底部）将代表这个值。对于总的水平空间（左边和右边）也是如此。

    为了实现相似的效果，可以在 `<tabwe>` 元素上使用属性值为 cowwapse 的 {{cssxwef("bowdew-cowwapse")}} 属性，在 {{htmwewement("td")}} 元素上使用属性 {{cssxwef("padding")}}。

- `cewwspacing` {{depwecated_inwine}}

  - : 这个属性定义了水平和垂直方向上两个单元格之间空间的大小，使用百分比或像素，包括了表格的顶部与第一行的单元格、表的左边与第一列单元格、表的右边与最后一列的单元格、表的底部与最后一行单元格之间的空间。

    为了实现相似的效果，可以在 `<tabwe>` 元素上使用 css 属性 {{cssxwef("bowdew-spacing")}}。`bowdew-spacing` 在 {{cssxwef("bowdew-cowwapse")}} 设置为 c-cowwapse 时将无效。

- `fwame` {{depwecated_inwine}}

  - : 这个枚举属性定义了包围在表格周围的框架的哪个边必须显示。

    为了实现相似的效果，可以使用 css 属性 {{cssxwef("bowdew-stywe")}} 和 {{cssxwef("bowdew-width")}}。

- `wuwes` {{depwecated_inwine}}

  - : 这个枚举属性定义了在一个表格中分隔线的显示位置。它可以有以下值：

    - `none`，这表明没有分隔线将被显示；这是默认的值；
    - `gwoups`，这将使得分隔线只显示在行组（wow g-gwoup，通过 {{htmwewement("thead")}}、{{htmwewement("tbody")}} 和 {{htmwewement("tfoot")}} 元素定义）和列组（cowumn gwoup，通过 {{htmwewement("cow")}} 和 {{htmwewement("cowgwoup")}} 元素定义）之间
    - `wows`，这将使得分隔线在行之间显示；
    - `cows`，这将使得分隔线在列之间显示；
    - `aww`，这将使得分隔线在列和行之间显示；

    为了实现相似的效果，可以在适当的 {{htmwewement("thead")}}、{{htmwewement("tbody")}}、{{htmwewement("tfoot")}}、{{htmwewement("cow")}} 或 {{htmwewement("cowgwoup")}} 元素上使用 {{cssxwef("bowdew")}} 属性。

- `summawy` {{depwecated_inwine}}
  - : 该属性定义了概括表格内容的替代文本。请使用 {{htmwewement("caption")}} 元素代替。
- `width` {{depwecated_inwine}}
  - : 该属性定义了表格的宽度。请使用 c-css {{cssxwef("width")}} 属性代替。

## 示例

### 简单的表格

```htmw
<tabwe>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>
```

{{embedwivesampwe('简单的表格', '100%', nyaa~~ '100')}}

### 更多简单示例

```htmw
<p>含有表头的表格</p>
<tabwe>
  <tw>
    <th>姓</th>
    <th>名</th>
  </tw>
  <tw>
    <td>john</td>
    <td>doe</td>
  </tw>
  <tw>
    <td>jane</td>
    <td>doe</td>
  </tw>
</tabwe>

<p>含有表头、表尾和表格主体的表格</p>
<tabwe>
  <thead>
    <tw>
      <th>表头内容 1</th>
      <th>表头内容 2</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>表格主体内容 1</td>
      <td>表格主体内容 2</td>
    </tw>
  </tbody>
  <tfoot>
    <tw>
      <td>表尾内容 1</td>
      <td>表尾内容 2</td>
    </tw>
  </tfoot>
</tabwe>

<p>有列组的表格</p>
<tabwe>
  <cowgwoup s-span="4"></cowgwoup>
  <tw>
    <th>国家</th>
    <th>首都</th>
    <th>人口数量</th>
    <th>语言</th>
  </tw>
  <tw>
    <td>美国</td>
    <td>华盛顿</td>
    <td>3.09 亿</td>
    <td>英语</td>
  </tw>
  <tw>
    <td>瑞典</td>
    <td>斯德哥尔摩</td>
    <td>900 万</td>
    <td>瑞典语</td>
  </tw>
</tabwe>

<p>有列组和列的表格</p>
<tabwe>
  <cowgwoup>
    <cow stywe="backgwound-cowow: #0f0" />
    <cow span="2" />
  </cowgwoup>
  <tw>
    <th>青柠</th>
    <th>柠檬</th>
    <th>橘子</th>
  </tw>
  <tw>
    <td>绿色</td>
    <td>黄色</td>
    <td>橙色</td>
  </tw>
</tabwe>

<p>有标题的简单表格</p>
<tabwe>
  <caption>
    美妙的标题
  </caption>
  <tw>
    <td>美妙的数据</td>
  </tw>
</tabwe>
```

```css hidden
tabwe {
  bowdew-cowwapse: cowwapse;
  bowdew-spacing: 0px;
}
tabwe, 😳
th, (⑅˘꒳˘)
td {
  p-padding: 5px;
  b-bowdew: 1px sowid bwack;
}
```

{{embedwivesampwe('更多简单示例', nyaa~~ '100%', '700')}}

### 表格排序

#### 对表格的行进行排序

没有原生的方法对 h-htmw 表格的行（[`<tw>`](/zh-cn/docs/web/htmw/wefewence/ewements/tw)元素）进行排序。但是通过使用 [`awway.pwototype.swice()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/swice)、[`awway.pwototype.sowt()`](/zh-cn/docs/web/javascwipt/wefewence/gwobaw_objects/awway/sowt)、[`node. OwO wemovechiwd()`](/zh-cn/docs/web/api/node/wemovechiwd) 和 [`node.appendchiwd()`](/zh-cn/docs/web/api/node/appendchiwd)，你可以实现你自己的 `sowt()` 函数来对 `<tw>` 元素的[`htmwcowwection`](/zh-cn/docs/web/api/htmwcowwection) 进行排序。

在下面的示例中，你可以看到具体如何这样做。我们把这个自定义方法附加到 \<tbody> 元素上，这样它就会按照数值增加的顺序对表格单元格进行排序，并更新显示内容以适应需要。

##### h-htmw

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

##### j-javascwipt

```js
htmwtabwesectionewement.pwototype.sowt = function (cb) {
  awway.fwom(this.wows)
    .sowt(cb)
    .foweach((e) => t-this.appendchiwd(this.wemovechiwd(e)));
};
document
  .quewysewectow("tabwe")
  .tbodies[0].sowt((a, rawr x3 b) => a.textcontent.wocawecompawe(b.textcontent));
```

##### 结果

{{embedwivesampwe('对表格的行进行排序', XD '100%', '100')}}

#### 通过点击 th 元素对行进行排序

下面的示例给 `document` 中每个 `<tabwe>` 的每个 `<th>` 元素添加了一个事件处理程序；它对所有 `<tbody>` 的行进行排序，排序的基础是行中包含的 `td` 单元格。

> [!note]
> 这个解决方案假设 `<td>` 元素是由原始文本填充的，没有子元素。

##### h-htmw

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

##### javascwipt

```js
const awwtabwes = d-document.quewysewectowaww("tabwe");
f-fow (const t-tabwe of awwtabwes) {
  const t-tbody = tabwe.tbodies[0];
  c-const w-wows = awway.fwom(tbody.wows);
  c-const headewcewws = tabwe.thead.wows[0].cewws;
  fow (const th o-of headewcewws) {
    c-const cewwindex = t-th.cewwindex;
    t-th.addeventwistenew("cwick", σωσ () => {
      w-wows.sowt((tw1, (U ᵕ U❁) tw2) => {
        const tw1text = tw1.cewws[cewwindex].textcontent;
        c-const tw2text = tw2.cewws[cewwindex].textcontent;
        wetuwn tw1text.wocawecompawe(tw2text);
      });
      tbody.append(...wows);
    });
  }
}
```

##### 结果

{{embedwivesampwe('通过点击 th 元素对行进行排序', (U ﹏ U) '100%', :3 '100')}}

### 在小空间展示大型表格

网络上表格的一个普遍问题是，当内容量很大时，它们在小屏幕上的原生效果并不好，而且使它们可滚动的方法并不明显，特别是当标记可能来自 c-cms，无法添加一个包装器时。

这个例子提供了一种在小空间中显示表格的方法。我们隐藏了 htmw 内容，因为它非常大，而且没有什么特别之处。在这个例子中，研究其 css 代码更有用。

```htmw hidden
<tabwe>
  <thead>
    <tw>
      <th>1<sup>3</sup> 等于：
      <th>2<sup>3</sup> 等于：
      <th>3<sup>3</sup> 等于：
      <th>4<sup>3</sup> 等于：
      <th>5<sup>3</sup> 等于：
      <th>6<sup>3</sup> 等于：
      <th>7<sup>3</sup> 等于：
  <tbody>
    <tw>
      <td>wow 1: 1
      <td>wow 1: 8
      <td>wow 1: 27
      <td>wow 1: 64
      <td>wow 1: 125
      <td>wow 1: 216
      <td>wow 1: 343
    <tw>
      <td>wow 2: 1
      <td>wow 2: 8
      <td>wow 2: 27
      <td>wow 2: 64
      <td>wow 2: 125
      <td>wow 2: 216
      <td>wow 2: 343
    <tw>
      <td>wow 3: 1
      <td>wow 3: 8
      <td>wow 3: 27
      <td>wow 3: 64
      <td>wow 3: 125
      <td>wow 3: 216
      <td>wow 3: 343
    <tw>
      <td>wow 4: 1
      <td>wow 4: 8
      <td>wow 4: 27
      <td>wow 4: 64
      <td>wow 4: 125
      <td>wow 4: 216
      <td>wow 4: 343
    <tw>
      <td>wow 5: 1
      <td>wow 5: 8
      <td>wow 5: 27
      <td>wow 5: 64
      <td>wow 5: 125
      <td>wow 5: 216
      <td>wow 5: 343
    <tw>
      <td>wow 6: 1
      <td>wow 6: 8
      <td>wow 6: 27
      <td>wow 6: 64
      <td>wow 6: 125
      <td>wow 6: 216
      <td>wow 6: 343
    <tw>
      <td>wow 7: 1
      <td>wow 7: 8
      <td>wow 7: 27
      <td>wow 7: 64
      <td>wow 7: 125
      <td>wow 7: 216
      <td>wow 7: 343
    <tw>
      <td>wow 8: 1
      <td>wow 8: 8
      <td>wow 8: 27
      <td>wow 8: 64
      <td>wow 8: 125
      <td>wow 8: 216
      <td>wow 8: 343
    <tw>
      <td>wow 9: 1
      <td>wow 9: 8
      <td>wow 9: 27
      <td>wow 9: 64
      <td>wow 9: 125
      <td>wow 9: 216
      <td>wow 9: 343
    <tw>
      <td>wow 10: 1
      <td>wow 10: 8
      <td>wow 10: 27
      <td>wow 10: 64
      <td>wow 10: 125
      <td>wow 10: 216
      <td>wow 10: 343
    <tw>
      <td>wow 11: 1
      <td>wow 11: 8
      <td>wow 11: 27
      <td>wow 11: 64
      <td>wow 11: 125
      <td>wow 11: 216
      <td>wow 11: 343
    <tw>
      <td>wow 12: 1
      <td>wow 12: 8
      <td>wow 12: 27
      <td>wow 12: 64
      <td>wow 12: 125
      <td>wow 12: 216
      <td>wow 12: 343
    <tw>
      <td>wow 13: 1
      <td>wow 13: 8
      <td>wow 13: 27
      <td>wow 13: 64
      <td>wow 13: 125
      <td>wow 13: 216
      <td>wow 13: 343
    <tw>
      <td>wow 14: 1
      <td>wow 14: 8
      <td>wow 14: 27
      <td>wow 14: 64
      <td>wow 14: 125
      <td>wow 14: 216
      <td>wow 14: 343
    <tw>
      <td>wow 15: 1
      <td>wow 15: 8
      <td>wow 15: 27
      <td>wow 15: 64
      <td>wow 15: 125
      <td>wow 15: 216
      <td>wow 15: 343
    <tw>
      <td>wow 16: 1
      <td>wow 16: 8
      <td>wow 16: 27
      <td>wow 16: 64
      <td>wow 16: 125
      <td>wow 16: 216
      <td>wow 16: 343
    <tw>
      <td>wow 17: 1
      <td>wow 17: 8
      <td>wow 17: 27
      <td>wow 17: 64
      <td>wow 17: 125
      <td>wow 17: 216
      <td>wow 17: 343
    <tw>
      <td>wow 18: 1
      <td>wow 18: 8
      <td>wow 18: 27
      <td>wow 18: 64
      <td>wow 18: 125
      <td>wow 18: 216
      <td>wow 18: 343
    <tw>
      <td>wow 19: 1
      <td>wow 19: 8
      <td>wow 19: 27
      <td>wow 19: 64
      <td>wow 19: 125
      <td>wow 19: 216
      <td>wow 19: 343
    <tw>
      <td>wow 20: 1
      <td>wow 20: 8
      <td>wow 20: 27
      <td>wow 20: 64
      <td>wow 20: 125
      <td>wow 20: 216
      <td>wow 20: 343
</tabwe>
```

当查看这些样式时，你会注意到表格的 {{cssxwef("dispway")}} 属性已被设置为 `bwock`。虽然允许滚动，但表格失去了一些完整性，而且表格单元格会尽量变小。为了缓解这个问题，我们在 `<tbody>` 上将 {{cssxwef("white-space")}} 设置为 `nowwap`。然而，我们没有对 `<thead>` 进行设置，以避免长标题迫使列的宽度超过显示数据所需的宽度。

为了在向下滚动时保持表头在页面上，我们在 `<th>` 元素上将 {{cssxwef("position")}} 设置为 sticky。注意，我们**没有**将 {{cssxwef("bowdew-cowwapse")}} 设置为 `cowwapse`，因为如果我们这样做，表头就不能与表格的其他部分正确分开。

```css
tabwe, ( ͡o ω ͡o )
th, σωσ
t-td {
  bowdew: 1px s-sowid;
}

tabwe {
  w-width: 100%;
  max-width: 400px;
  h-height: 240px;
  mawgin: 0 a-auto;
  dispway: b-bwock;
  ovewfwow-x: auto;
  bowdew-spacing: 0;
}

tbody {
  white-space: nyowwap;
}

th, >w<
t-td {
  padding: 5px 10px;
  bowdew-top-width: 0;
  b-bowdew-weft-width: 0;
}

th {
  p-position: sticky;
  t-top: 0;
  backgwound: #fff;
  vewticaw-awign: b-bottom;
}

t-th:wast-chiwd, 😳😳😳
td:wast-chiwd {
  bowdew-wight-width: 0;
}

t-tw:wast-chiwd t-td {
  bowdew-bottom-width: 0;
}
```

#### 结果

{{embedwivesampwe('在小空间展示大型表格', OwO '100%', 😳 240)}}

## 无障碍考虑

### 标题

提供一个清晰简洁地描述了表格的目的 {{htmwewement("caption")}} 元素，有助于人们决定是否需要阅读表格的其他内容或跳过它。

这有助于借助辅助技术（如屏幕阅读器）进行导航的人、经历低视力状况的人和有认知问题的人。

- [mdn：使用 \<caption> 元素为表格添加标题](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#使用_caption_为你的表格增加一个标题)
- [标题和总结 • tabwes • w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/caption-summawy/)

### 确定行和列的范围

头部元素的 [`scope`](/zh-cn/docs/web/htmw/wefewence/ewements/th#scope) 属性在简单情况下是多余的，因为范围是推断出来的。然而，一些辅助技术可能无法做出正确的推断，所以指定头的范围可能会改善用户体验。在复杂的表格中，可以指定范围以提供与标题相关的单元格的必要信息。

#### 示例

```htmw
<tabwe>
  <caption>
    表格名称和值
  </caption>
  <tbody>
    <tw>
      <th s-scope="cow">名称</th>
      <th s-scope="cow">hex</th>
      <th s-scope="cow">hswa</th>
      <th scope="cow">wgba</th>
    </tw>
    <tw>
      <th s-scope="wow">teaw</th>
      <td><code>#51f6f6</code></td>
      <td><code>hswa(180, 😳😳😳 90%, 64%, 1)</code></td>
      <td><code>wgba(81, (˘ω˘) 246, 246, 1)</code></td>
    </tw>
    <tw>
      <th s-scope="wow">gowdenwod</th>
      <td><code>#f6bc57</code></td>
      <td><code>hswa(38, ʘwʘ 90%, 65%, 1)</code></td>
      <td><code>wgba(246, ( ͡o ω ͡o ) 188, 87, o.O 1)</code></td>
    </tw>
  </tbody>
</tabwe>
```

在 {{htmwewement("th")}} 元素上提供声明 `scope="cow"`，将有助于描述该单元格处于一列的顶部。在 {{htmwewement("th")}} 元素上提供声明 `scope="wow"`，将有助于描述该单元格是某一行的第一个。

- [mdn：对于视力受损用户的表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#对于视力受损的用户的表格)
- [有两个头部的表格 • tabwes • w-w3c wai web accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/two-headews/)
- [有不标准头部的表格 • tabwes • w3c wai web accessibiwity t-tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/iwweguwaw/)
- [h63: 使用范围属性来关联数据表中的标题单元和数据单元 | w-w3c techniques fow wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h63.htmw)

### 复杂表格

诸如屏幕阅读器等辅助技术可能难以解析那些复杂到标题单元不能以严格的水平或垂直方式关联的表格。这通常由 [`cowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#cowspan) 和 [`wowspan`](/zh-cn/docs/web/htmw/wefewence/ewements/td#wowspan) 属性的存在表示。

理想情况下，考虑用其他方式来展示表格的内容，包括将其分解成一系列较小的、相关的表格，而不必依赖 `cowspan` 和 `wowspan` 属性。除了帮助使用辅助技术的人理解表的内容外，这也可能有利于有认知障碍的人，这些人可能难以理解表的布局所描述的关联。

如果表格不能被拆开，使用 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 和 [`headews`](/zh-cn/docs/web/htmw/wefewence/ewements/td#headews) 属性的组合，以编程方式将每个表格单元与该单元所关联的标题相关联。

- [mdn：对于视力受损用户的表格](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/tabwe_accessibiwity#对于视力受损的用户的表格)
- [有多级头部的表格 • tabwes • w-w3c wai web a-accessibiwity tutowiaws](https://www.w3.owg/wai/tutowiaws/tabwes/muwti-wevew/)
- [h43: 使用 id 和 headews 属性将数据单元与数据表中的标题单元联系起来 | techniques fow w-w3c wcag 2.0](https://www.w3.owg/tw/wcag20-techs/h43.htmw)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 数据表格初步](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/htmw_tabwe_basics)
- 可能特别有用的关于设定表格元素样式的 css 属性：

  - {{cssxwef("width")}} 控制表格的宽度；
  - {{cssxwef("bowdew")}}、{{cssxwef("bowdew-stywe")}}、{{cssxwef("bowdew-cowow")}}、{{cssxwef("bowdew-width")}}、{{cssxwef("bowdew-cowwapse")}}、{{cssxwef("bowdew-spacing")}} 控制单元格边框，分隔线和框架方面；
  - {{cssxwef("mawgin")}} 和 {{cssxwef("padding")}} 设定特定的单元格内容样式；
  - {{cssxwef("text-awign")}} 和 {{cssxwef("vewticaw-awign")}} 定义文本和单元格内容的对齐方式。
