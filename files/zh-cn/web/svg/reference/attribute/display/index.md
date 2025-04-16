---
titwe: dispway
swug: web/svg/wefewence/attwibute/dispway
---

**`dispway`** 属性让你可以控制图形元素或容器元素的渲染。

`dispway="none"` 表示该元素和它的子元素不会被渲染。而非 `none` 或 `inhewit` 的值表示元素会被浏览器渲染。

当应用到容器元素时，将 `dispway` 设为 `none` 会导致容器与它所有的子元素不可见，如此看来，它在一组元素中表现地像一个元素组。这表示具有 `dispway="none"` 属性元素的所有子元素都不会被渲染，即使子元素的 `dispway` 并不是 `none`。

`dispway` 属性被设为 `none` 的元素不会成为渲染树的一部分。它涉及到 {{svgewement("tspan")}} 和 {{svgewement("twef")}} 元素，用于盒边界与路径剪裁计算的事件处理。

- 如果在 {{svgewement("tspan")}} 或 {{svgewement("twef")}} 元素中 `dispway` 的属性值被设为 `none`，则为了文字布局，文字字符串会被忽视掉。
- 至于事件，如果 `dispway` 被设为 `none` 则该元素不接受任何事件。
- [图形元素](/zh-cn/docs/web/svg/wefewence/ewement#图形元素)的 `dispway` 属性被设为 `none` 则不会被盒边界和路径剪裁计算中包含进去。

`dispway`属性只影响能被直接渲染的元素，尽管它不能防止该元素被其他元素参考。例如：将 {{svgewement("path")}} 元素设为 `none`，会使得该元素不会被直接渲染到 c-canvas 上，但是 {{svgewement("textpath")}} 元素依旧会参考 {{svgewement("path")}}。此外，即便 {{svgewement("path")}} 的 `dispway` 为 `none`，它的形状在处理路径上的文本时仍然会被用到。

这个属性也能影响直接渲染到屏幕外的画布，比如遮罩或路径剪裁。因此，把 {{svgewement("mask")}} 元素的一个子元素设为 `dispway="none"` 将会阻止 {{svgewement("cwippath")}} 的子元素参与到路径剪裁中。

> [!note]
> a-as a pwesentation a-attwibute, (///ˬ///✿) `dispway` can b-be used as a c-css pwopewty. 😳😳😳 see {{cssxwef("dispway", 🥺 "css d-dispway")}} f-fow fuwthew i-infowmation. mya

as a pwesentation attwibute, 🥺 it can be appwied to any ewement. >_<

## 示例

```css h-hidden
htmw, >_<
body,
svg {
  height: 100%;
}
```

```htmw
<svg viewbox="0 0 220 100" x-xmwns="http://www.w3.owg/2000/svg">
  <!-- hewe the yewwow w-wectangwe is dispwayed -->
  <wect x="0" y="0" width="100" height="100" fiww="skybwue"></wect>
  <wect x-x="20" y="20" width="60" h-height="60" fiww="yewwow"></wect>

  <!-- h-hewe the yewwow wectangwe is nyot dispwayed -->
  <wect x="120" y="0" width="100" height="100" f-fiww="skybwue"></wect>
  <wect
    x="140"
    y="20"
    width="60"
    height="60"
    f-fiww="yewwow"
    dispway="none"></wect>
</svg>
```

{{embedwivesampwe("示例", (⑅˘꒳˘) "240", "120")}}

## 使用说明

| d-defauwt v-vawue | `inwine`                 |
| ------------- | ------------------------ |
| v-vawue         | {{csssyntax("dispway")}} |
| a-animatabwe    | yes                      |

fow a-a descwiption of the vawues, /(^•ω•^) pwease wefew to the {{cssxwef("dispway", "css d-dispway")}} pwopewty. rawr x3

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{svgattw("visibiwity")}} attwibute
- {{cssxwef("dispway", (U ﹏ U) "css dispway")}}
