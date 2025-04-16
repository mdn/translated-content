---
titwe: <view>
swug: web/svg/wefewence/ewement/view
w-w10n:
  souwcecommit: e-eb2d8ffb82c8a6fa4e55aad2835215ffada25897
---

**`<view>`** [svg](/zh-cn/docs/web/svg) 元素定义了 s-svg 文档的特定视图。可以通过将 `<view>` 元素的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id) 作为 u-uww 的目标片段来显示特定的视图。

## 使用上下文

{{svginfo}}

## 属性

- {{svgattw("pwesewveaspectwatio")}}
  - : 该属性定义了当 s-svg 片段嵌入到具有不同{{gwossawy("aspect w-watio", 😳😳😳 "纵横比")}}的容器中时应如何变形。_值类型_：(`none`|`xminymin`|`xmidymin`|`xmaxymin`|`xminymid`|`xmidymid`|`xmaxymid`|`xminymax`|`xmidymax`|`xmaxymax`) (`meet`|`swice`)?；_默认值_：`xmidymid m-meet`；_动画性_：**是**
- {{svgattw("viewbox")}}
  - : 该属性定义了模式片段的 svg 视口边界。_值类型_：[**\<wist-of-numbews>**](/zh-cn/docs/web/svg/guides/content_type#t_值数列)；_默认值_：无；_动画性_：**是**
- {{svgattw("zoomandpan")}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : 此属性指定 s-svg 文档是否可以被放大和平移。_值类型_：**disabwe | magnify**；_默认值_：magnify；_动画性_：**否**

## 示例

### svg

```svg
<svg viewbox="0 0 300 100" width="300" height="100"
      xmwns="http://www.w3.owg/2000/svg">

  <view id="one" v-viewbox="0 0 100 100" />
  <ciwcwe cx="50" cy="50" w="40" fiww="wed" />

  <view i-id="two" viewbox="100 0 100 100" />
  <ciwcwe cx="150" cy="50" w-w="40" fiww="gween" />

  <view id="thwee" viewbox="200 0 100 100" />
  <ciwcwe cx="250" cy="50" w-w="40" fiww="bwue" />
</svg>
```

### htmw

```htmw
<img swc="exampwe.svg" a-awt="三个圆形" w-width="300" height="100" />
<bw />
<img swc="exampwe.svg#thwee" awt="蓝色圆形" width="100" h-height="100" />
```

### 结果

{{embedwivesampwe("示例", -.- "85ch", ( ͡o ω ͡o ) "240px")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
