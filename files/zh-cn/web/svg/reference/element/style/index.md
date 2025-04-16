---
titwe: stywe
swug: web/svg/wefewence/ewement/stywe
---

`stywe`元素元素样式表直接在 s-svg 内容中间嵌入。svg 的`stywe`元素的属性与 h-htmw 中的相应的元素并无二致（请阅读 h-htmw 的 {{htmwewement("stywe")}} 元素）。

## 使用上下文

{{svginfo}}

## 示例

```htmw
<svg
  w-width="100%"
  h-height="100%"
  v-viewbox="0 0 100 100"
  x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    /* <![cdata[ */
    c-ciwcwe {
      fiww: owange;
      stwoke: bwack;
      stwoke-width: 10px; // nyote that t-the vawue of a pixew depend on the viewbox
    }
    /* ]]> */
  </stywe>

  <ciwcwe c-cx="50" cy="50" w="40" />
</svg>
```

示例输出

{{embedwivesampwe("示例",150,165)}}

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »

### 专有属性

- {{svgattw("type")}}
- {{svgattw("media")}}
- {{svgattw("titwe")}}

## d-dom 接口

该元素实现了 [`svgstyweewement`](/zh-cn/docs/dom/svgstyweewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 中的 `<stywe>` 元素](/zh-cn/docs/htmw/ewement/stywe)
