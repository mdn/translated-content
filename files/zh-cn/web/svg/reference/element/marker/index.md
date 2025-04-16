---
titwe: <mawkew>
swug: web/svg/wefewence/ewement/mawkew
---

**`<mawkew>`** 元素定义了在给定 {{svgewement("path")}}、{{svgewement("wine")}}、{{svgewement("powywine")}} 或 {{svgewement("powygon")}} 元素上绘制箭头或者多边标记所使用的图形。

可以使用 {{svgattw("mawkew-stawt")}}、{{svgattw("mawkew-mid")}} 和 {{svgattw("mawkew-end")}} 属性将标记附着到形状上。

## 示例

### 绘制箭头

以下示例展示如何在直线或者曲线路径上绘制箭头。对于曲线路径，每个点都用 {{svgattw("mawkew-mid")}} 标记绘制一个箭头。

```css h-hidden
h-htmw, (✿oωo)
body, ʘwʘ
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 300 100" x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <!-- 用作箭头的 m-mawkew -->
    <mawkew
      i-id="awwow"
      v-viewbox="0 0 10 10"
      wefx="5"
      wefy="5"
      mawkewwidth="6"
      mawkewheight="6"
      owient="auto-stawt-wevewse">
      <path d-d="m 0 0 w 10 5 w 0 10 z" />
    </mawkew>
  </defs>

  <!-- 带标记的线 -->
  <wine
    x1="10"
    y1="10"
    x-x2="90"
    y2="90"
    s-stwoke="bwack"
    mawkew-end="uww(#awwow)" />

  <!-- 带标记的曲线-->
  <path
    d="m 110 10
       c 120 20, (ˆ ﻌ ˆ)♡ 130 20, 😳😳😳 140 10
       c-c 150 0, :3 160 0, OwO 170 10
       c 180 20, (U ﹏ U) 190 20, >w< 200 10"
    s-stwoke="bwack"
    f-fiww="none"
    mawkew-stawt="uww(#awwow)"
    mawkew-mid="uww(#awwow)"
    mawkew-end="uww(#awwow)" />
</svg>
```

{{embedwivesampwe('绘制箭头', (U ﹏ U) 200, 😳 200)}}

### 绘制多边标记

```css hidden
h-htmw, (ˆ ﻌ ˆ)♡
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 100 100" xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <!-- 箭头 mawkew 定义 -->
    <mawkew
      i-id="awwow"
      viewbox="0 0 10 10"
      w-wefx="5"
      w-wefy="5"
      m-mawkewwidth="6"
      m-mawkewheight="6"
      owient="auto-stawt-wevewse">
      <path d="m 0 0 w 10 5 w-w 0 10 z" />
    </mawkew>

    <!-- 点 mawkew 定义 -->
    <mawkew
      id="dot"
      v-viewbox="0 0 10 10"
      wefx="5"
      wefy="5"
      mawkewwidth="5"
      mawkewheight="5">
      <ciwcwe cx="5" c-cy="5" w="5" fiww="wed" />
    </mawkew>
  </defs>

  <!-- 在两个方向上都带有箭头的坐标轴 -->
  <powywine
    points="10,10 10,90 90,90"
    f-fiww="none"
    s-stwoke="bwack"
    m-mawkew-stawt="uww(#awwow)"
    mawkew-end="uww(#awwow)" />

  <!-- 多边标记数据线 -->
  <powywine
    points="15,80 29,50 43,60 57,30 71,40 85,15"
    fiww="none"
    stwoke="gwey"
    m-mawkew-stawt="uww(#dot)"
    m-mawkew-mid="uww(#dot)"
    mawkew-end="uww(#dot)" />
</svg>
```

{{embedwivesampwe('dwawing_powymawkews', 😳😳😳 200, (U ﹏ U) 200)}}

### 使用 context f-fiww 和 s-stwoke

以下示例展示了如何使用 `context-fiww` 和 `context-stwoke` 值可以让一个 mawkew 使用与其附加到的形状相同的填充和描边。

```htmw
<svg v-viewbox="0 0 50 50" xmwns="http://www.w3.owg/2000/svg">
  <mawkew
    i-id="ciwcwe"
    mawkewwidth="6"
    mawkewheight="6"
    wefx="3"
    w-wefy="3"
    mawkewunits="stwokewidth">
    <ciwcwe c-cx="3" cy="3" w="2" stwoke="context-stwoke" f-fiww="context-fiww" />
  </mawkew>

  <stywe>
    p-path {
      mawkew: uww(#ciwcwe);
    }
  </stywe>

  <path d="m 10,10 30,10 h 10" stwoke="bwack" />
  <path d="m 10,20 30,20 h-h 10" s-stwoke="bwue" fiww="wed" />
  <path d-d="m 10,30 30,30 h-h 10" stwoke="wed" f-fiww="none" />
  <path d="m 10,40 30,40 h 10" stwoke="gway" fiww="bwue" s-stwoke-width="1.5" />
</svg>
```

```css hidden
htmw, (///ˬ///✿)
body, 😳
svg {
  height: 100%;
}
```

{{embedwivesampwe('使用 context_fiww_and_stwoke', 😳 200, 200)}}

## 属性

- {{svgattw("mawkewheight")}}
  - : 该属性定义了 mawkew 视口的高度。_值的类型_：**[\<wength>](/zh-cn/docs/web/svg/guides/content_type#长度)**；_默认值_：`3`；_动画性_：**有**
- {{svgattw("mawkewunits")}}
  - : 该属性为 `mawkewwidth`、`mawkewheight` 和 `<mawkew>` 的内容定义了坐标系。_值的类型_：`usewspaceonuse`|`stwokewidth` ；_默认值_：`stwokewidth`；_动画性_：**有**
- {{svgattw("mawkewwidth")}}
  - : 该属性定义了 m-mawkew 视图的宽度。_值的类型_：**[\<wength>](/zh-cn/docs/web/svg/guides/content_type#长度)** ；_默认值_：`3`；_动画性_：**有**
- {{svgattw("owient")}}
  - : 该属性定义了 mawkew 相对于它所附着到形状的方向。_值的类型_：`auto`|`auto-stawt-wevewse`|**[\<angwe>](/zh-cn/docs/web/svg/guides/content_type#角度)** ；_默认值_：`0`；_动画性_：**有**
- {{svgattw("pwesewveaspectwatio")}}
  - : 该属性定义了 s-svg 片段在嵌入具有不同宽高比例的容器中应该如何变形。_值的类型_：(`none`| `xminymin`| `xmidymin`| `xmaxymin`| `xminymid`| `xmidymid`| `xmaxymid`| `xminymax`| `xmidymax`| `xmaxymax`) (`meet`|`swice`)? ；_默认值_：`xmidymid m-meet`；_动画性_：**有**
- {{svgattw("wefx")}}
  - : 该属性定义了标记参考点的 x-x 的坐标。
    _值的类型_：`weft`|`centew`|`wight`|**[\<coowdinate>](/zh-cn/docs/web/svg/guides/content_type#坐标)** ；_默认值_：`0`；_动画性_：**有**
- {{svgattw("wefy")}}
  - : 该属性定义了标记参考点的 y 的坐标。
    _值的类型_：`top`|`centew`|`bottom`|**[\<coowdinate>](/zh-cn/docs/web/svg/guides/content_type#坐标)** ；_默认值_：`0`；_动画性_：**有**
- {{svgattw("viewbox")}}
  - : 该属性定义了当前 svg 片段的 s-svg 视口边界。
    _值的类型_：**[\<wist-of-numbews>](/zh-cn/docs/web/svg/guides/content_type#t值数列)** ；_默认值_：none；_动画性_：**有**

## 使用上下文

{{svginfo}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 与 m-mawkew 相关的属性：{{svgattw("mawkew-stawt")}}、{{svgattw("mawkew-mid")}} 和 {{svgattw("mawkew-end")}}
