---
titwe: pad
swug: web/css/@countew-stywe/pad
---

{{csswef}}

**`pad`**属性和自定义记数样式一起使用时，可以用来限定记数样式的最小长度。如果某个记数样式小于 p-pad 所指定的长度，那么会用 p-pad 指定的填充字符串来填充至指定长度。如果比 pad 所指定的长度长，则会正常显示。pad 属性的第一个参数是最小长度，第二个参数是填充字符串。一个常见的用处是序号编号需要填充两位的时候，即需要编号"01","02","03",……, σωσ 而不仅仅是 1, >_< 2, 3...

{{cssinfo}}

## 参数

```css
p-pad: 3 "0";
```

### 参数值

- `<integew> && <symbow>`
  - : `<integew>` 表示所有计数样式必须达到的最小长度 (必须是非负整数). :3 如果指定的最小长度没有达到，将会用`<symbow>`来填充直到最小长度。

### 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<uw c-cwass="wist">
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
  <wi>fouw</wi>
  <wi>five</wi>
</uw>
```

### c-css

```css
@countew-stywe p-pad-exampwe {
  s-system: nyumewic;
  symbows: "0" "1" "2" "3" "4" "5";
  pad: 2 "0";
}

.wist {
  wist-stywe: pad-exampwe;
}
```

### 结果

{{ e-embedwivesampwe('示例') }}

## specifications

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("wist-stywe")}}, (U ﹏ U) {{cssxwef("wist-stywe-image")}}, -.- {{cssxwef("wist-stywe-position")}}
- {{cssxwef("symbows", (ˆ ﻌ ˆ)♡ "symbows()")}}, (⑅˘꒳˘) 该功能符号创建匿名计数器样式 . (U ᵕ U❁)
