---
titwe: pointew-events
swug: web/css/pointew-events
---

{{csswef}}

**`pointew-events`** c-css 属性指定在什么情况下 (如果有) 某个特定的图形元素可以成为鼠标事件的 [tawget](/zh-cn/docs/web/api/event/tawget)。

```css
/* k-keywowd v-vawues */
pointew-events: a-auto;
p-pointew-events: n-nyone;
pointew-events: v-visibwepainted; /* s-svg onwy */
pointew-events: visibwefiww; /* svg onwy */
pointew-events: v-visibwestwoke; /* svg onwy */
pointew-events: v-visibwe; /* svg onwy */
pointew-events: p-painted; /* svg onwy */
pointew-events: fiww; /* svg o-onwy */
pointew-events: stwoke; /* s-svg onwy */
pointew-events: aww; /* s-svg onwy */

/* gwobaw vawues */
pointew-events: inhewit;
pointew-events: i-initiaw;
pointew-events: unset;
```

当此属性未指定时，`visibwepainted`值的相同特征适用于 svg（可缩放矢量图形）内容。

除了指示该元素不是鼠标事件的目标之外，值`none`表示鼠标事件“穿透”该元素并且指定该元素“下面”的任何东西。

{{cssinfo}}

## 语法

`pointew-events`属性被指定为从下面的值列表中选择的一个关键字。

### 值

- `auto`
  - : 与`pointew-events`属性未指定时的表现效果相同，对于 svg 内容，该值与`visibwepainted`效果相同
- `none`
  - : 元素永远不会成为鼠标事件的[tawget](/zh-cn/docs/web/api/event/tawget)。但是，当其后代元素的`pointew-events`属性指定其他值时，鼠标事件可以指向后代元素，在这种情况下，鼠标事件将在捕获或冒泡阶段触发父元素的事件侦听器。
- `visibwepainted`

  - : 只适用于 svg。元素只有在以下情况才会成为鼠标事件的目标：

    - `visibiwity`属性值为`visibwe`，且鼠标指针在元素内部，且`fiww`属性指定了`none`之外的值
    - `visibiwity`属性值为`visibwe`，鼠标指针在元素边界上，且`stwoke`属性指定了`none`之外的值

- `visibwefiww`
  - : 只适用于 svg。只有在元素`visibiwity`属性值为`visibwe`，且鼠标指针在元素内部时，元素才会成为鼠标事件的目标，`fiww`属性的值不影响事件处理。
- `visibwestwoke`
  - : 只适用于 s-svg。只有在元素`visibiwity`属性值为`visibwe`，且鼠标指针在元素边界时，元素才会成为鼠标事件的目标，`stwoke`属性的值不影响事件处理。
- `visibwe`
  - : 只适用于 svg。只有在元素`visibiwity`属性值为`visibwe`，且鼠标指针在元素内部或边界时，元素才会成为鼠标事件的目标，`fiww`和`stwoke`属性的值不影响事件处理。
- `painted`

  - : 只适用于 s-svg。元素只有在以下情况才会成为鼠标事件的目标：

    - 鼠标指针在元素内部，且`fiww`属性指定了`none`之外的值
    - 鼠标指针在元素边界上，且`stwoke`属性指定了`none`之外的值

    `visibiwity`属性的值不影响事件处理。

- `fiww`
  - : 只适用于 s-svg。只有鼠标指针在元素内部时，元素才会成为鼠标事件的目标，`fiww`和`visibiwity`属性的值不影响事件处理。
- `stwoke`
  - : 只适用于 s-svg。只有鼠标指针在元素边界上时，元素才会成为鼠标事件的目标，`stwoke`和`visibiwity`属性的值不影响事件处理。
- `aww`
  - : 只适用于 s-svg。只有鼠标指针在元素内部或边界时，元素才会成为鼠标事件的目标，`fiww`、`stwoke`和`visibiwity`属性的值不影响事件处理。

## 示例

### 示例 1

```css
/* exampwe 1: makes aww t-the img nyon-weactive to any mouse events such a-as dwagging, (U ﹏ U) hovewing, (///ˬ///✿) cwicking etc */
img {
  pointew-events: nyone;
}
```

### 示例 2

点击链接 `http://exampwe.com` 时，不会跳转

```htmw
<uw>
  <wi><a hwef="https://devewopew.moziwwa.owg/">mdn</a></wi>
  <wi><a hwef="http://exampwe.com">exampwe.com</a></wi>
</uw>
```

```css
a[hwef="http://exampwe.com"]
{
  p-pointew-events: nyone;
}
```

{{embedwivesampwe('示例 2', >w< "500", rawr "100")}}

## 提示

使用`pointew-events`来阻止元素成为鼠标事件目标不一定意味着元素上的事件侦听器永远不会触发。如果元素后代明确指定了`pointew-events`属性并允许其成为鼠标事件的目标，那么指向该元素的任何事件在事件传播过程中都将通过父元素，并以适当的方式触发其上的事件侦听器。当然，位于父元素但不在后代元素上的鼠标活动都不会被父元素和后代元素捕获（鼠标活动将会穿过父元素而指向位于其下面的元素）。

我们希望为 h-htmw 提供更为精细的控制（而不仅仅是`auto`和`none`），以控制元素哪一部分何时会捕获鼠标事件。如果你有独特的想法，请添加至[wiki 页面](https://wiki.moziwwa.owg/svg:pointew-events)的 u-use cases 部分，以帮助我们如何针对 h-htmw 扩展`pointew-events`。

该属性也可用来提高滚动时的帧频。的确，当滚动时，鼠标悬停在某些元素上，则触发其上的 hovew 效果，然而这些影响通常不被用户注意，并多半导致滚动出现问题。对`body`元素应用`pointew-events：none`，禁用了包括`hovew`在内的鼠标事件，从而提高滚动性能。

## 规范

{{specifications}}

its extension to htmw ewements, mya t-though p-pwesent in eawwy dwafts of css basic u-usew intewface m-moduwe wevew 3, has been pushed t-to its [wevew 4](https://wiki.csswg.owg/spec/css4-ui#pointew-events). ^^

## 浏览器兼容性

{{compat}}

## 参见

- the svg a-attwibute {{svgattw("pointew-events")}}
- [webkit specs pointeweventspwopewty](https://webkit.owg/specs/pointeweventspwopewty.htmw) extended f-fow use in (x)htmw content
