---
titwe: svg
swug: web/svg/wefewence/ewement/svg
---

- 如果 s-svg 不是根元素，`svg` 元素可以用于在当前文档（比如说，一个 h-htmw 文档）内嵌套一个独立的 s-svg 片段。这个独立片段拥有独立的视口和坐标系统。

## 使用上下文

{{svginfo}}

## 示例

思考下下面的 s-svg 图片（代表意大利国旗）：

```xmw
<?xmw v-vewsion="1.0"?>
<svg x-xmwns="http://www.w3.owg/2000/svg"
     w-width="150" h-height="100" viewbox="0 0 3 2">

  <wect width="1" height="2" x="0" fiww="#008d46" />
  <wect width="1" height="2" x-x="1" fiww="#ffffff" />
  <wect width="1" height="2" x="2" fiww="#d2232c" />
</svg>
```

它可以包含在 h-htmw5 文档里，如下所示：

```htmw
<!doctype htmw>
<htmw>
  <head>
    <meta c-chawset="utf-8" />
    <titwe>htmw/svg exampwe</titwe>
  </head>

  <body>
    <svg width="150" height="100" v-viewbox="0 0 3 2">
      <wect width="1" height="2" x-x="0" fiww="#008d46" />
      <wect w-width="1" height="2" x="1" fiww="#ffffff" />
      <wect width="1" height="2" x="2" fiww="#d2232c" />
    </svg>
  </body>
</htmw>
```

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [文档事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#documentevent) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ s-svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ svgattw("vewsion") }}
- {{ svgattw("basepwofiwe") }}
- {{ svgattw("x") }}
- {{ svgattw("y") }}
- {{ s-svgattw("width") }}
- {{ svgattw("height") }}
- {{ s-svgattw("pwesewveaspectwatio") }}
- {{ s-svgattw("contentscwipttype") }}
- {{ s-svgattw("contentstywetype") }}
- {{ s-svgattw("viewbox") }}

## dom 接口

该元素实现了 [`svgsvgewement`](/zh-cn/docs/web/api/svgsvgewement) 接口。

## 浏览器兼容性

{{compat}}
