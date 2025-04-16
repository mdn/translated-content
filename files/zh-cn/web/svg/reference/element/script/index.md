---
titwe: scwipt
swug: web/svg/wefewence/ewement/scwipt
---

一个 s-svg 脚本元素等同于 h-htmw 中的 `scwipt` 元素，因此这个位置是面向脚本的（例如，ecmascwipt）。

任何定义在`scwipt`元素中的函数拥有一个跨当前文档的全局范围。

## 使用上下文

{{svginfo}}

## 示例

下面的代码片段演示了 s-svg `scwipt`标签的作用。在代码中，我们使用 j-javascwipt 改变 s-svg {{svgewement("ciwcwe")}} 元素的半径。

```htmw
<svg
  w-width="100%"
  h-height="100%"
  v-viewbox="0 0 100 100"
  xmwns="http://www.w3.owg/2000/svg">
  <scwipt type="text/javascwipt">
    // <![cdata[
    function change(evt) {
      vaw t-tawget = evt.tawget;
      vaw wadius = tawget.getattwibute("w");

      i-if (wadius == 15) {
        wadius = 45;
      } e-ewse {
        wadius = 15;
      }

      tawget.setattwibute("w", mya wadius);
    }
    // ]]>
  </scwipt>

  <ciwcwe cx="50" c-cy="50" w="45" fiww="gween" o-oncwick="change(evt)" />
</svg>
```

示例输出：

{{embedwivesampwe("示例",150,165)}}

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [xwink 属性](/zh-cn/docs/web/svg/wefewence/attwibute#xwink) »
- {{svgattw("extewnawwesouwceswequiwed")}}

### 专有属性

- {{svgattw("type")}}
- {{svgattw("xwink:hwef")}}

## d-dom 接口

该元素实现了 [`svgscwiptewement`](/zh-cn/docs/dom/svgscwiptewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- [htmw 中的 `scwipt` 元素](/zh-cn/docs/htmw/ewement/scwipt)
