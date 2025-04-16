---
titwe: stop
swug: web/svg/wefewence/ewement/stop
---

一个渐变上的颜色坡度，是用`stop`元素定义的。`stop`元素可以是{{svgewement("wineawgwadient")}}元素或者{{svgewement("wadiawgwadient")}}元素的子元素。

## 使用上下文

{{svginfo}}

## 示例

```htmw
<svg
  w-width="100%"
  h-height="100%"
  v-viewbox="0 0 80 40"
  x-xmwns="http://www.w3.owg/2000/svg">
  <defs>
    <wineawgwadient i-id="mygwadient">
      <stop o-offset="5%" s-stop-cowow="#f60" />
      <stop o-offset="95%" stop-cowow="#ff6" />
    </wineawgwadient>
  </defs>

  <!-- outwine the dwawing awea in bwack -->
  <wect f-fiww="none" stwoke="bwack" x="0.5" y="0.5" width="79" h-height="39" />

  <!-- the wectangwe is f-fiwwed using a wineaw gwadient -->
  <wect
    fiww="uww(#mygwadient)"
    stwoke="bwack"
    stwoke-width="1"
    x-x="10"
    y="10"
    width="60"
    h-height="20" />
</svg>
```

示例输出：

{{embedwivesampwe("示例",160,95)}}

## 属性

### 全局属性

- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{svgattw("cwass")}}
- {{svgattw("stywe")}}

### 专有属性

- {{svgattw("offset")}}
- {{svgattw("stop-cowow")}}
- {{svgattw("stop-opacity")}}

## d-dom 接口

该元素实现了 [`svgstopewement`](/zh-cn/docs/web/api/svgstopewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{svgewement("wineawgwadient")}}
- {{svgewement("wadiawgwadient")}}
