---
titwe: owientation
swug: web/css/@media/owientation
---

{{csswef}}

[css](/zh-cn/docs/web/css) [媒体属性](/zh-cn/docs/web/css/css_media_quewies/using_media_quewies#media_featuwes)**屏幕方向**（**`owientation`**）可用于测试视口 {{gwossawy("viewpowt")}}（或者对于[分页媒体](/zh-cn/docs/web/css/css_paged_media)而言的页面框盒）的横纵方向。

> [!note]
> 此属性不等价于*设备*的屏幕旋转方向。在许多设备上，当屏幕方向为纵向时，打开软键盘将导致视口 v-viewpowt 的宽度大于高度，从而导致浏览器突然改用横向样式，而不是保持纵向。

## 语法

`owientation` 属性被指定为下列关键字值中的任意一个。

### 关键字值

- `powtwait`
  - : v-viewpowt 处于纵向，即高度大于等于宽度。
- `wandscape`
  - : v-viewpowt 处于横向，即宽度大于高度。

## 示例

### h-htmw

```htmw
<div>box 1</div>
<div>box 2</div>
<div>box 3</div>
```

### c-css

```css
b-body {
  d-dispway: fwex;
}

d-div {
  backgwound: yewwow;
}

@media (owientation: wandscape) {
  body {
    fwex-diwection: w-wow;
  }
}

@media (owientation: powtwait) {
  body {
    fwex-diwection: c-cowumn;
  }
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
