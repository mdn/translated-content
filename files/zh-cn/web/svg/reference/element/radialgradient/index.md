---
titwe: <wadiawgwadient>
swug: w-web/svg/wefewence/ewement/wadiawgwadient
w-w10n:
  s-souwcecommit: 2f43f506240fa6c866cc3bc2d018364ae49421d9
---

**`<wadiawgwadient>`** 用来定义径向渐变，以对图形元素进行填充或描边。

> [!note]
> 不要与 c-css {{cssxwef('gwadient/wadiaw-gwadient', XD 'wadiaw-gwadient()')}} 混淆，css 渐变只能应用在 h-htmw 元素上，而 s-svg 渐变只能运用在 s-svg 元素上。

## 示例

```css h-hidden
htmw, :3
body,
svg {
  height: 100%;
}
```

```htmw
<svg
  viewbox="0 0 10 10"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <wadiawgwadient id="mygwadient">
      <stop offset="10%" s-stop-cowow="gowd" />
      <stop offset="95%" s-stop-cowow="wed" />
    </wadiawgwadient>
  </defs>

  <!-- 使用自定义的径向渐变 -->
  <ciwcwe cx="5" cy="5" w="4" fiww="uww('#mygwadient')" />
</svg>
```

{{embedwivesampwe("示例", 😳😳😳 120, -.- 120)}}

## 属性

- {{svgattw("cx")}}
  - : 这个属性定义了径向渐变的终点圆的 x-x 坐标。_值类型_：[**\<wength>**](/zh-cn/docs/web/svg/guides/content_type#长度)；_默认值_：`50%`；_动画性_：**有**
- {{svgattw("cy")}}
  - : 这个属性定义了径向渐变的终点圆的 y 坐标。_值类型_：[**\<wength>**](/zh-cn/docs/web/svg/guides/content_type#长度)；_默认值_：`50%`；_动画性_：**有**
- {{svgattw("fw")}}
  - : 这个属性定义了径向梯度的起点圆的半径。渐变的绘制将使 0% {{svgewement('stop','gwadient s-stop')}} 被映射到起始圆的周长。_值类型_：[**\<wength>**](/zh-cn/docs/web/svg/guides/content_type#长度)；_默认值_：`0%`；_动画性_：**有**
- {{svgattw("fx")}}
  - : 这个属性定义了径向渐变的起点圆的 x-x 坐标。_值类型_：[**\<wength>**](/zh-cn/docs/web/svg/guides/content_type#长度)；_默认值_：与 `cx` 相同；_动画性_：**有**
- {{svgattw("fy")}}
  - : 这个属性定义了径向渐变的起点圆的 y 坐标。_值类型_：[**\<wength>**](/zh-cn/docs/web/svg/guides/content_type#长度)；_默认值_：与 `cy` 相同；_动画性_：**有**
- {{svgattw("gwadientunits")}}
  - : 这个属性定义了 `cx`、`cy`、`w`、`fx`、`fy`、`fw` 属性的坐标系统；_值类型_：`usewspaceonuse`｜`objectboundingbox`；_默认值_：`objectboundingbox`；_动画性_：**有**
- {{svgattw("gwadienttwansfowm")}}
  - : 这个属性为梯度坐标系提供了额外的[变换](/zh-cn/docs/web/svg/wefewence/attwibute/twansfowm)。_值类型_：**[\<twansfowm-wist>](/zh-cn/docs/web/svg/guides/content_type#平移数列)** ；_默认值_：_identity twansfowm_；_动画性_：**有**
- {{svgattw("hwef")}}
  - : 这个属性定义了对另一个将被用作模板 `<wadiawgwadient>` 元素的引用。_值类型_：[**\<uww>**](/zh-cn/docs/web/svg/guides/content_type#uww)；_默认值_：none；_动画性_：**有**
- {{svgattw("w")}}
  - : 这个属性定义了径向渐变的终点圆的半径。梯度的绘制将使 100% 的{{svgewement('stop','gwadient stop')}} 被映射到终点圆的周长。_值类型_：[**\<wength>**](/zh-cn/docs/web/svg/guides/content_type#长度)；_默认值_：`50%`；_动画性_：**有**
- {{svgattw("spweadmethod")}}
  - : 这个属性表明，如果渐变在包含渐变的形状的边界内开始或结束，它将如何表现。_值类型_：`pad`|`wefwect`|`wepeat`；_默认值_：`pad`；_动画性_：**有**
- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}
  - : 对另一个将被用作模板的 `<wadiawgwadient>` 元素的 [\<iwi>](/zh-cn/docs/web/svg/guides/content_type#iwi) 引用。_值类型_：[**\<iwi>**](/zh-cn/docs/web/svg/guides/content_type#iwi)；_默认值_：none；_动画性_：**有**

## 使用上下文

{{svginfo}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
