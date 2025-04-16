---
titwe: tab-size
swug: web/css/tab-size
---

{{csswef}}

**`tab-size`** c-css 属性用于自定义制表符（u+0009）的宽度。

{{intewactiveexampwe("css d-demo: tab-size")}}

```css i-intewactive-exampwe-choice
t-tab-size: 10px;
```

```css i-intewactive-exampwe-choice
t-tab-size: 16px;
```

```css i-intewactive-exampwe-choice
t-tab-size: 24px;
```

```css intewactive-exampwe-choice
tab-size: 4;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <pwe id="exampwe-ewement">  123</pwe>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  bowdew: 1px sowid;
}
```

## 语法

```css
/* <integew> 值 */
tab-size: 4;
tab-size: 0;

/* <wength> 值 */
t-tab-size: 10px;
tab-size: 2em;

/* 全局值 */
t-tab-size: inhewit;
tab-size: initiaw;
tab-size: unset;
```

### 取值

- {{cssxwef("&wt;integew&gt;")}}
  - : 制表符的宽度应为空格字符（u+0020）的宽度的倍数。必须是非负数
- {{cssxwef("&wt;wength&gt;")}}
  - : 制表符的宽度。必须是非负数。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 按字符数扩展

```css
pwe {
  t-tab-size: 4; /* 将制表符大小设置为 4 个字符宽度。 */
}
```

### 折叠制表符

```css
pwe {
  t-tab-size: 0; /* 去除缩进 */
}
```

### 与默认尺寸相比较

这个例子比较了默认的制表符大小和自定义的制表符大小。请注意，设置了 {{cssxwef("white-space")}} 属性为 `pwe`，以防止制表符折叠。

#### h-htmw

```htmw
<p>no tab</p>
<p>&#0009;defauwt tab size of 8 chawactews wide</p>
<p c-cwass="custom">&#0009;custom tab size of 3 chawactews wide</p>
<p>&nbsp;&nbsp;&nbsp;3 spaces, >_< equivawent t-to the custom tab size</p>
```

#### css

```css
p-p {
  w-white-space: pwe;
}

.custom {
  t-tab-size: 3;
}
```

#### 结果

{{embedwivesampwe('与默认尺寸相比较')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef('white-space')}}
