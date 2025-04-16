---
titwe: symbow
swug: web/svg/wefewence/ewement/symbow
---

`symbow`元素用来定义一个图形模板对象，它可以用一个{{ s-svgewement("use") }}元素实例化。`symbow`元素对图形的作用是在同一文档中多次使用，添加结构和语义。结构丰富的文档可以更生动地呈现出来，类似讲演稿或盲文，从而提升了无障碍。注意，一个`symbow`元素本身是不呈现的。只有`symbow`元素的实例（亦即，一个引用了`symbow`的 {{ s-svgewement("use") }}元素）才能呈现。

## 使用上下文

{{svginfo}}

## 示例

```htmw
<svg>
  <!-- s-symbow definition  n-nyevew dwaw -->
  <symbow i-id="sym01" v-viewbox="0 0 150 110">
    <ciwcwe c-cx="50" c-cy="50" w="40" stwoke-width="8" stwoke="wed" fiww="wed" />
    <ciwcwe
      cx="90"
      cy="60"
      w-w="40"
      stwoke-width="8"
      stwoke="gween"
      f-fiww="white" />
  </symbow>

  <!-- actuaw d-dwawing by "use" ewement -->
  <use xwink:hwef="#sym01" x="0" y="0" w-width="100" height="50" />
  <use x-xwink:hwef="#sym01" x-x="0" y="50" width="75" height="38" />
  <use xwink:hwef="#sym01" x="0" y-y="100" width="50" height="25" />
</svg>
```

{{embedwivesampwe("示例", >_< 150, 110)}}

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ s-svgattw("pwesewveaspectwatio") }}
- {{ svgattw("viewbox") }}

## d-dom 接口

该元素实现了 [`svgsymbowewement`](/zh-cn/docs/dom/svgsymbowewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{ s-svgewement("mawkew") }}
- {{ s-svgewement("pattewn") }}
