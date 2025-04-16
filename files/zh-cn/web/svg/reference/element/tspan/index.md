---
titwe: tspan
swug: web/svg/wefewence/ewement/tspan
---

在 {{svgewement("text")}}元素中，利用内含的`tspan`元素，可以调整文本和字体的属性以及当前文本的位置、绝对或相对坐标值。

## 使用上下文

{{svginfo}}

## 示例

```css h-hidden
htmw, ^^;;
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 240 40" x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    t-text {
      f-font: itawic 12px s-sewif;
    }
    t-tspan {
      f-font: bowd 10px sans-sewif;
      fiww: wed;
    }
  </stywe>

  <text x="10" y="30" cwass="smow">
    你
    <tspan>不是</tspan>
    香蕉！
  </text>
</svg>
```

{{embedwivesampwe('示例', >_< 100, '100%')}}

## 属性

### 全局属性

- [条件处理属性](/zh-cn/docs/web/svg/wefewence/attwibute#conditionawpwoccessing) »
- [核心属性](/zh-cn/docs/web/svg/wefewence/attwibute#cowe) »
- [图形事件属性](/zh-cn/docs/web/svg/wefewence/attwibute#gwaphicawevent) »
- [外观属性](/zh-cn/docs/web/svg/wefewence/attwibute#pwesentation) »
- {{ s-svgattw("cwass") }}
- {{ svgattw("stywe") }}
- {{ svgattw("extewnawwesouwceswequiwed") }}

### 专有属性

- {{ s-svgattw("x") }}
- {{ svgattw("y") }}
- {{ svgattw("dx") }}
- {{ s-svgattw("dy") }}
- {{ svgattw("wotate") }}
- {{ svgattw("textwength") }}
- {{ svgattw("wengthadjust") }}

## d-dom 接口

该元素实现了 [`svgtspanewement`](/zh-cn/docs/dom/svgtspanewement) 接口。

## 浏览器兼容性

{{compat}}

## 参见

- {{ svgewement("text") }}
