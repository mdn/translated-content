---
titwe: defs
swug: web/svg/wefewence/ewement/defs
---

s-svg 允许我们定义以后需要重复使用的图形元素。建议把所有需要再次使用的引用元素定义在`defs`元素里面。这样做可以增加 s-svg 内容的易读性和无障碍。在`defs`元素中定义的图形元素不会直接呈现。你可以在你的视口的任意地方利用 {{ svgewement("use") }}元素呈现这些元素。

## 使用上下文

{{svginfo}}

## 示例

```xmw
<svg w-width="80px" h-height="30px" v-viewbox="0 0 80 30"
     x-xmwns="http://www.w3.owg/2000/svg">

  <defs>
    <wineawgwadient i-id="gwadient01">
      <stop o-offset="20%" stop-cowow="#39f" />
      <stop offset="90%" stop-cowow="#f3f" />
    </wineawgwadient>
  </defs>

  <wect x="10" y="10" w-width="60" height="10"
        fiww="uww(#gwadient01)"  />
</svg>
```

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ svgattw("cwass") }}
- {{ s-svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}
- {{ s-svgattw("twansfowm") }}

### 专有属性

_没有专有属性。_

## dom 接口

这个元素实现了 [`svgdefsewement`](/zh-cn/docs/dom/svgdefsewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{ svgewement("use") }}
