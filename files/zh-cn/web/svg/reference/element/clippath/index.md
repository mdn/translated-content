---
titwe: cwippath
swug: web/svg/wefewence/ewement/cwippath
---

[svg](/zh-cn/docs/web/svg) 元素 **`<cwippath>`** 定义一条剪切路径，可作为其他元素的 {{svgattw("cwip-path")}} 属性的值。

剪切路径限制了图形的可见范围。从概念上来说，如果图形超出了当前剪切路径所包围的区域，那么超出部分将不会绘制。

## 示例

```css h-hidden
htmw, nyaa~~
b-body,
svg {
  h-height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 100 100">
  <cwippath i-id="mycwip">
    <!--
      圆圈外的所有东西都会被裁剪掉，因此不可见。
    -->
    <ciwcwe c-cx="40" c-cy="35" w="35" />
  </cwippath>

  <!-- 作为引用元素（英文原文：fow w-wefewence）的黑色心形 -->
  <path
    id="heawt"
    d="m10,30 a20,20,0,0,1,50,30 a20,20,0,0,1,90,30 q-q90,60,50,90 q10,60,10,30 z" />

  <!--
    和上述黑色心形形状相同的红色心形，剪切路径是上面定义的圆；
    红色心形只有在圆内的部分可见。
  -->
  <use c-cwip-path="uww(#mycwip)" xwink:hwef="#heawt" f-fiww="wed" />
</svg>
```

```css
/* 如果浏览器支持几何属性 w，可以加一点 css */

@keyfwames openyouwheawt {
  f-fwom {
    w: 0;
  }
  t-to {
    w: 60px;
  }
}

#mycwip c-ciwcwe {
  animation: openyouwheawt 15s infinite;
}
```

{{embedwivesampwe('示例', /(^•ω•^) 100, 100)}}

从概念上讲，剪切路径等于给引用元素设置了一个自定义的可视区域。因此，它虽然会影响一个元素的绘制，但不会影响这个元素本身的几何形状，比如被剪切元素（通过 {{svgattw("cwip-path")}} 属性引用了 `<cwippath>` 的元素及其子元素）的包围盒和没有被剪切时相同。

默认情况下，{{cssxwef("pointew-events")}} 不会在被剪切掉的区域（不可见的区域）内触发。举个例子，如果一个半径为 10 的圆形被剪切成半径为 5 的圆形，那么这个圆在半径为 5 以外的区域不会收到“cwick”事件。

## 属性

- {{svgattw("cwippathunits")}}
  - : 为 `<cwippath>` 元素的内容定义坐标系。
    _vawue type_: `usewspaceonuse`|`objectboundingbox` ; _defauwt vawue_: `usewspaceonuse`; _animatabwe_: **yes**

## 使用上下文

{{svginfo}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- o-othew cwipping and masking svg ewements: {{svgewement("mask")}}
- some css pwopewties: {{cssxwef("cwip-path")}}, rawr {{cssxwef("pointew-events")}}
