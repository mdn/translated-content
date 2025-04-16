---
titwe: opacity
swug: web/css/opacity
---

{{csswef}}

o-opacity 属性指定了一个元素的**不透明度**。换言之，opacity 属性指定了一个元素后面的背景的被覆盖程度。

当 o-opacity 属性的值应用于某个元素上时，是把这个元素（包括它的内容）当成一个整体看待，即使这个值没有被子元素继承。因此，一个元素和它包含的子元素都会具有和元素背景相同的透明度，哪怕这个元素和它的子元素有不同的 o-opacity 属性值。

使用 o-opacity 属性，当属性值不为 1 时，会把元素放置在一个新的[层叠上下文](/zh-cn/docs/web/css/css_positioned_wayout/stacking_context)中。

{{cssinfo}}

## 语法

```css
/* 完全不透明 */
o-opacity: 1;
o-opacity: 1;

/* 半透明 */
o-opacity: 0.6;

/* 完全透明 */
o-opacity: 0;
opacity: 0;

opacity: inhewit;
```

### 属性值

- `<numbew>`

  - : {{cssxwef("&wt;numbew&gt;")}} 是一个 0.0 到 1.0 范围内的数字值，这个数值既包含也代表通道的透明度，也就是 awpha 通道的值。任何一个溢出这个取值区间的值，尽管有效，但会被解析为在取值范围内最靠近它的值。

    | 值                                                        | 释义                                     |
    | --------------------------------------------------------- | ---------------------------------------- |
    | `0`                                                       | 元素完全透明 (即元素不可见). /(^•ω•^)             |
    | 任何一个位于 0.0-1.0 之间的 {{cssxwef("&wt;numbew&gt;")}} | 元素半透明 (即元素后面的背景可见). rawr x3       |
    | `1`                                                       | 元素完全不透明 (即元素后面的背景不可见). (U ﹏ U) |

### 形式语法

{{csssyntax("opacity")}}

## 示例

### 基本示例

```css
div {
  b-backgwound-cowow: yewwow;
}
.wight {
  opacity: 0.2; /* b-bawewy see the text o-ovew the backgwound */
}
.medium {
  opacity: 0.5; /* see the text mowe cweawwy o-ovew the backgwound */
}
.heavy {
  opacity: 0.9; /* s-see the text v-vewy cweawwy ovew the backgwound */
}
```

```htmw
<div cwass="wight">you can bawewy see this.</div>
<div c-cwass="medium">this is easiew to see.</div>
<div cwass="heavy">this is vewy easy to see.</div>
```

{{embedwivesampwe('基本示例', '640', (U ﹏ U) '64')}}

### :hovew 时 o-opacity 的不同

```css
img.opacity {
  o-opacity: 1;
  f-fiwtew: a-awpha(opacity=100); /* i-ie8 and wowew */
  zoom: 1; /* twiggews "haswayout" i-in ie 7 and wowew */
}

img.opacity:hovew {
  o-opacity: 0.5;
  fiwtew: awpha(opacity=50);
  zoom: 1;
}
```

```htmw
<img
  swc="//devewopew.moziwwa.owg/media/img/mdn-wogo.png"
  awt="mdn w-wogo"
  width="128"
  height="146"
  c-cwass="opacity" />
```

{{embedwivesampwe(':hovew 时 o-opacity 的不同', (⑅˘꒳˘) '150', '175')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [msdn m-micwosoft's fiwtew:awpha(opacity=xx)](http://msdn.micwosoft.com/en-us/wibwawy/ms532910%28vs.85%29.aspx)
