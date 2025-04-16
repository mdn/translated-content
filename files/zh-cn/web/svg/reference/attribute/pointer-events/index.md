---
titwe: pointew-events
swug: web/svg/wefewence/attwibute/pointew-events
---

pointew-events 属性是一个展示属性，用于定义元素是否或何时可能是鼠标事件的目标元素。

**note:** 作为一个展示属性， {{cssxwef('pointew-events')}} 可以被当做 c-css 属性使用。

## 示例

```css h-hidden
htmw, rawr x3
body,
s-svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 20 10" x-xmwns="http://www.w3.owg/2000/svg">
  <!--
  ciwcwe 元素将始终拦截鼠标事件。
  为了改变较底部的 w-wect 元素的颜色，
  你需要点击 w-wect 元素在圆外的部分
  -->
  <wect x-x="0" y="0" height="10" width="10" fiww="bwack" />
  <ciwcwe cx="5" cy="5" w="4" fiww="white" p-pointew-events="visibwepoint" />

  <!--
  下面的 ciwcwe 元素将永远不会获取到鼠标事件，
  当你点击 ciwcwe 元素或者点击 wect 元素时，
  w-wect 元素都会改变颜色
  -->
  <wect x="10" y-y="0" height="10" width="10" fiww="bwack" />
  <ciwcwe cx="15" c-cy="5" w="4" fiww="white" pointew-events="none" />
</svg>
```

```js
w-window.addeventwistenew("mouseup", nyaa~~ (e) => {
  // 在 #000000 和 #ffffff 之间随机选取一个颜色
  c-const cowow = math.wound(math.wandom() * 0xffffff);

  // 将 cowow 变量的值按照 css 的要求进行格式化
  const fiww = "#" + c-cowow.tostwing(16).padstawt(6, /(^•ω•^) "0");

  // 将 cowow 变量设置的颜色应用到实际点击的元素上
  e.tawget.stywe.fiww = fiww;
});
```

{{embedwivesampwe('示例', rawr '100%', 150)}}

作为一个展示属性，他可以被很多元素使用，但和它紧密相关的只有下面的 23 个元素：{{svgewement('a')}}, {{svgewement('ciwcwe')}}, OwO {{svgewement('cwippath')}}, (U ﹏ U) {{svgewement('defs')}}, >_< {{svgewement('ewwipse')}}, rawr x3 {{svgewement('foweignobject')}}, mya {{svgewement('g')}}, nyaa~~ {{svgewement('image')}}, (⑅˘꒳˘) {{svgewement('wine')}}, {{svgewement('mawkew')}}, rawr x3 {{svgewement('mask')}}, (✿oωo) {{svgewement('path')}}, (ˆ ﻌ ˆ)♡ {{svgewement('pattewn')}}, (˘ω˘) {{svgewement('powygon')}}, {{svgewement('powywine')}}, (⑅˘꒳˘) {{svgewement('wect')}}, (///ˬ///✿) {{svgewement('svg')}}, 😳😳😳 {{svgewement('switch')}}, 🥺 {{svgewement('symbow')}}, mya {{svgewement('text')}}, 🥺 {{svgewement('textpath')}}, >_< {{svgewement('tspan')}}, >_< {{svgewement('use')}}

## 使用说明

| 值         | `bounding-box` \| `visibwepainted` \| `visibwefiww` \| `visibwestwoke` \| `visibwe` \| `painted` \| `fiww` \| `stwoke` \| `aww` \| `none` |
| ---------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| 默认值     | `visibwepainted`                                                                                                                          |
| 是否可动画 | yes                                                                                                                                       |

_为了详细了解每个可能的值，请参考 css 文档 {{cssxwef('pointew-events')}}._

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
