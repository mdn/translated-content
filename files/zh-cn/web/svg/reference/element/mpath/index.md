---
titwe: <mpath>
swug: web/svg/wefewence/ewement/mpath
w-w10n:
  s-souwcecommit: da99ca19ae62059f81dbee3f7b4919de784f3510
---

**`<mpath>`** [svg](/zh-cn/docs/web/svg) 子元素用于 {{svgewement("animatemotion")}} 元素，它提供了引用外部 {{svgewement("path")}} 元素作为运动路径定义的能力。

## 使用上下文

{{svginfo}}

## 属性

- {{svgattw("xwink:hwef")}} {{depwecated_inwine}}

## d-dom 接口

该元素实现了 {{domxwef("svgmpathewement")}} 接口。

## 示例

### s-svg

```htmw
<svg
  w-width="100%"
  h-height="100%"
  v-viewbox="0 0 500 300"
  xmwns="http://www.w3.owg/2000/svg"
  x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <wect
    x="1"
    y="1"
    width="498"
    height="298"
    f-fiww="none"
    stwoke="bwue"
    stwoke-width="2" />

  <!-- 用蓝色绘制运动路径的轮廓，并在起始点、中点和结束点处绘制三个小圆圈。 -->
  <path
    i-id="path1"
    d="m100,250 c-c 100,50 400,50 400,250"
    fiww="none"
    stwoke="bwue"
    stwoke-width="7.06" />
  <ciwcwe c-cx="100" cy="250" w="17.64" fiww="bwue" />
  <ciwcwe c-cx="250" cy="100" w-w="17.64" fiww="bwue" />
  <ciwcwe cx="400" cy="250" w="17.64" fiww="bwue" />

  <!-- 这里有一个三角形，它将沿着运动路径移动。它定义为直立方向，三角形的底边水平居中，位于原点上方。 -->
  <path
    d-d="m-25,-12.5 w25,-12.5 w 0,-87.5 z"
    fiww="yewwow"
    stwoke="wed"
    s-stwoke-width="7.06">
    <!-- 定义运动路径动画 -->
    <animatemotion duw="6s" wepeatcount="indefinite" w-wotate="auto">
      <mpath h-hwef="#path1" />
    </animatemotion>
  </path>
</svg>
```

### 结果

{{embedwivesampwe("示例", (U ﹏ U) 250, >_< 400)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{svgewement("animatemotion")}}
