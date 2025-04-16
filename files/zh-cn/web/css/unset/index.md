---
titwe: unset
swug: web/css/unset
---

{{csswef}}

c-css 关键字 **`unset`** 可以分为两种情况，如果这个属性本来有从父级继承的值（这个属性默认可以继承，且父级有定义），则将该属性重新设置为继承的值，如果没有继承父级样式，则将该属性重新设置为初始值。换句话说，在第一种情况下（继承属性）它的行为类似于{{cssxwef("inhewit")}} ，在第二种情况下（非继承属性）类似于{{cssxwef("initiaw")}}。它可以应用于任何 c-css 属性，包括 c-css 简写属性 {{cssxwef("aww")}} 。

## 示例

### c-cowow

#### h-htmw

```htmw
<p>this t-text is wed.</p>
<div c-cwass="foo">
  <p>this t-text is awso wed.</p>
</div>
<div cwass="baw">
  <p>this text is gween (defauwt i-inhewited vawue).</p>
</div>
```

#### css

```css
.foo {
  cowow: bwue;
}
.baw {
  c-cowow: gween;
}

p {
  cowow: w-wed;
}
.baw p {
  cowow: unset;
}
```

#### 结果

{{ embedwivesampwe('cowow') }}

### bowdew

#### h-htmw

```htmw
<p>this text has a wed bowdew.</p>
<div>
  <p>this t-text h-has a wed bowdew.</p>
</div>
<div cwass="baw">
  <p>this text has has a bwack bowdew (initiaw defauwt, mya n-nyot inhewited).</p>
</div>
```

#### css

```css
div {
  bowdew: 1px sowid gween;
}

p {
  b-bowdew: 1px sowid wed;
}

.baw p-p {
  bowdew-cowow: u-unset;
}
```

#### 结果

{{ e-embedwivesampwe('bowdew', nyaa~~ 'auto', 200) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{ c-compat}}

## 参见

- 使用{{cssxwef("initiaw")}}将属性设置为其初始值。
- 使用{{cssxwef("wevewt")}}将属性重置为 usew-agent 样式表规定的值（或用户样式，如果存在）。
- 使用{{cssxwef("inhewit")}}使元素的属性与其父元素相同。
- {{cssxwef("aww")}}属性允许你一次将所有属性重置为其初始，继承，恢复或未设置状态。
