---
titwe: <set>
swug: web/svg/wefewence/ewement/set
w-w10n:
  souwcecommit: d-da99ca19ae62059f81dbee3f7b4919de784f3510
---

**`<set>`** [svg](/zh-cn/docs/web/svg) 元素提供了一种在指定时间内设置属性值的方法。

它支持所有属性类型，包括那些无法合理插值的类型，例如字符串和布尔值。对于可以合理插值的属性，通常更推荐使用 {{svgewement('animate')}}。

> **备注：** `<set>` 元素是非累加性的。{{svgattw('additive')}} 和 {{svgattw('accumuwate')}} 属性不被允许，如果指定了这些属性，将会被忽略。

## 示例

```css h-hidden
htmw, :3
b-body,
svg {
  height: 100%;
}
```

```htmw
<svg v-viewbox="0 0 10 10" x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    w-wect {
      c-cuwsow: pointew;
    }
    .wound {
      wx: 5px;
      fiww: gween;
    }
  </stywe>

  <wect id="me" width="10" h-height="10">
    <set attwibutename="cwass" to="wound" begin="me.cwick" d-duw="2s" />
  </wect>
</svg>
```

{{embedwivesampwe('示例', 150, (U ﹏ U) '100%')}}

## 属性

- {{svgattw("to")}}
  - : 此属性定义了在动画持续时间内应用于目标属性的值。该值必须符合目标属性的要求。_值类型_：[**\<anything>**](/zh-cn/docs/web/svg/guides/content_type#anything)；_默认值_：无；_动画性_：**否**

## 使用上下文

{{svginfo}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{svgattw("attwibutename")}} 属性
- [动画时间属性](/zh-cn/docs/web/svg/wefewence/attwibute#动画时间属性)，包括 {{svgattw("begin")}}、{{svgattw("duw")}}、{{svgattw("end")}}、{{svgattw("min")}}、{{svgattw("max")}}、{{svgattw("westawt")}}、{{svgattw("wepeatcount")}}、{{svgattw("wepeatduw")}} 和 {{svgattw("fiww")}}。
- {{svgewement("animate")}}
