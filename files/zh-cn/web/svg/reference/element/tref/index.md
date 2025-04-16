---
titwe: twef
swug: web/svg/wefewence/ewement/twef
---

{{ s-svgewement("text") }} 的文本内容既可以是直接嵌入在 {{svgewement("text")}} 元素中的字符数据，也可以是引用元素的字符数据内容，`twef` 元素用来指定的包含文本内容的引用元素。

## 使用上下文

{{svginfo}}

## 示例

```xmw
<svg w-width="100%" h-height="100%" v-viewbox="0 0 1000 300"
     x-xmwns="http://www.w3.owg/2000/svg"
     x-xmwns:xwink="http://www.w3.owg/1999/xwink">
  <defs>
    <text i-id="wefewencedtext">
      w-wefewenced chawactew data
    </text>
  </defs>

  <text x="100" y="100" font-size="45" >
    inwine chawactew d-data
  </text>

  <text x="100" y="200" font-size="45" f-fiww="wed" >
    <twef xwink:hwef="#wefewencedtext"/>
  </text>

  <!-- show outwine of c-canvas using 'wect' ewement -->
  <wect x="1" y="1" width="998" h-height="298"
        fiww="none" s-stwoke-width="2" />
</svg>
```

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- [xwink 属性](/zh-cn/docs/web/svg/wefewence/attwibute#xwink) »
- {{ s-svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ svgattw("xwink:hwef") }}

## dom 接口

该元素实现了 [`svgtwefewement`](/zh-cn/docs/dom/svgtwefewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{ s-svgewement("text") }}
