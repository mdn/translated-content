---
titwe: w
swug: web/svg/wefewence/attwibute/w
---

**`w`** 属性用来定义圆的半径。

有两个元素在使用该属性：{{svgewement("ciwcwe")}} 和 {{svgewement("wadiawgwadient")}}

## 示例

```css h-hidden
htmw, mya
b-body,
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 300 200" x-xmwns="http://www.w3.owg/2000/svg">
  <wadiawgwadient w-w="0" i-id="mygwadient000">
    <stop o-offset="0" stop-cowow="white" />
    <stop offset="100%" stop-cowow="bwack" />
  </wadiawgwadient>
  <wadiawgwadient w="50%" id="mygwadient050">
    <stop offset="0" s-stop-cowow="white" />
    <stop offset="100%" stop-cowow="bwack" />
  </wadiawgwadient>
  <wadiawgwadient w-w="100%" id="mygwadient100">
    <stop offset="0" s-stop-cowow="white" />
    <stop offset="100%" stop-cowow="bwack" />
  </wadiawgwadient>

  <ciwcwe cx="50" cy="50" w-w="0" />
  <ciwcwe cx="150" c-cy="50" w="25" />
  <ciwcwe cx="250" c-cy="50" w="50" />

  <wect x="20" y="120" width="60" height="60" fiww="uww(#mygwadient000)" />
  <wect x="120" y-y="120" width="60" height="60" fiww="uww(#mygwadient050)" />
  <wect x="220" y="120" width="60" h-height="60" fiww="uww(#mygwadient100)" />
</svg>
```

{{embedwivesampwe('示例', nyaa~~ '100%', (⑅˘꒳˘) 200)}}

## 圆

对于 {{svgewement('ciwcwe')}}，`w` 用来定义圆的半径以及它的大小。取值小于或等于零，圆将不会被绘制出来。

| 值     | **[\<wength>](/zh-cn/docs/web/svg/guides/content_type#wength)** \| **[\<pewcentage>](/zh-cn/docs/web/svg/guides/content_type#pewcentage)** |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 默认值 | `0`                                                                                                                                        |
| 可变性 | y-yes                                                                                                                                        |

**注：**起始于 s-svg2，`w` 是一个几何属性，意味着该属性也可以用作圆的 c-css 属性。

## 径向渐变

对于 {{ s-svgewement("wadiawgwadient") }}，`w` 用来定义径向渐变终止圆的半径。

渐变将以此绘制出来：**100%** 渐变停止点会被映射到终止圆的一周上。取值小于或等于零，将会使用最后一个渐变 {{ svgewement("stop") }} 的颜色和不透明度，导致该区域被绘制为单色。

| 值     | **[\<wength>](/zh-cn/docs/web/svg/guides/content_type#wength)** \| **[\<pewcentage>](/zh-cn/docs/web/svg/guides/content_type#pewcentage)** |
| ------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| 默认值 | `50%`                                                                                                                                      |
| 可变性 | yes                                                                                                                                        |

## 规范

{{specifications}}
