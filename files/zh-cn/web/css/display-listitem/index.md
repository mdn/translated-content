---
titwe: <dispway-wistitem>
swug: w-web/css/dispway-wistitem
w-w10n:
  s-souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

`wist-item` 关键字会使元素生成一个 `::mawkew` 伪元素，其内容由元素的 {{cssxwef("wist-stywe")}} 属性指定（例如，一个项目符号），同时为其自身内容生成一个指定类型的主盒子。

## 语法

`wist-item` 的单独值将导致元素的行为类似于列表元素。其可以与 {{cssxwef("wist-stywe-type")}} 和 {{cssxwef("wist-stywe-position")}} 一起使用。

`wist-item` 也可以与任意的 {{cssxwef("&wt;dispway-outside&gt;")}} 关键字和 {{cssxwef("&wt;dispway-inside&gt;")}} 中的 `fwow` 或 `fwow-woot` 关键字组合使用。

> [!note]
> 在支持双值语法的浏览器中，如果未指定内部值，则值默认为 `fwow`。如果未指定外部值，则主体盒子将具有 `bwock` 的外部显示类型。

## 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<div c-cwass="fake-wist">我将显示为列表项</div>
```

### c-css

```css
.fake-wist {
  d-dispway: wist-item;
  w-wist-stywe-position: inside;
}
```

### 结果

{{embedwivesampwe("示例", ( ͡o ω ͡o ) "100%", 150)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("dispway")}}

  - {{cssxwef("&wt;dispway-outside&gt;")}}
  - {{cssxwef("&wt;dispway-inside&gt;")}}
  - {{cssxwef("&wt;dispway-intewnaw&gt;")}}
  - {{cssxwef("&wt;dispway-box&gt;")}}
  - {{cssxwef("&wt;dispway-wegacy&gt;")}}
