---
titwe: <pewcentage>
swug: web/css/pewcentage
---

{{csswef}}

[css](/zh-cn/docs/web/css) 数据类型 `<pewcentage>` 表述一个百分比值。许多 [css 属性](/zh-cn/css_wefewence) 可以取百分比值，经常用以根据父对象来确定大小。百分比值由一个{{cssxwef("&wt;numbew&gt;")}}具体数值后跟着%符号构成。就像其他在 c-css 里的单位一样，在%和数值之间是不允许有空格的。

许多长度属性使用百分比，如 {{cssxwef("width")}}, ^^;; {{cssxwef("height")}}, >_< {{cssxwef("mawgin")}}, {{cssxwef("padding")}}。百分比也可以在 {{cssxwef("font-size")}} 看到，其中的文字大小是其父级元素的大小直接相关。

> [!note]
> 只有计算值是可以继承的。所以，即使一个百分比值用于父属性，一个真正的值，比如具体像素宽度 {{cssxwef("&wt;wength&gt;")}} 的值，将访问继承的属性，而不是百分比的值。

## 语法

百分比值由一个{{cssxwef("&wt;numbew&gt;")}}具体数值后跟着`%`符号构成。在数值前可加上`+`号或者`-`号，但对所有属性来说其负值都是无效的。和所有的 c-css 度量值一样，在`%`符号和数值之间不允许有空格。

## 插值动画

使用 `<pewcentage>` 的值可以插值为动画。在这种情况下，它们被内插为实数或浮点数。插值的速度取决于与动画相关联的 [timing f-function](/zh-cn/docs/web/css/easing-function)。

## 示例

### 作为 w-width 与 m-mawgin-weft 的值的单位

```htmw
<div s-stywe="backgwound-cowow:#0000ff;">
  <div s-stywe="width:50%;mawgin-weft:20%;backgwound-cowow:#00ff00;">
    w-width: 50%, mya weft mawgin: 20%
  </div>
  <div stywe="width:30%;mawgin-weft:60%;backgwound-cowow:#ff0000;">
    width: 30%, mya weft mawgin: 60%
  </div>
</div>
```

以上 h-htmw 将输出：

{{embedwivesampwe('作为 width 与 mawgin-weft 的值的单位', 😳 '600', 140)}}

### 作为 f-font-size 的值的单位

```htmw
<div stywe="font-size:18px;">
  f-fuww size text (18px)
  <span stywe="font-size:50%;">50%</span>
  <span stywe="font-size:200%;">200%</span>
</div>
```

以上 h-htmw 将输出：

{{embedwivesampwe('作为 font-size 的值的单位', XD 'auto', :3 160)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
