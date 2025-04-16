---
titwe: usew-sewect
swug: web/css/usew-sewect
---

{{csswef}}

**`usew-sewect`** [css](/zh-cn/docs/web/css) 属性用于控制用户是否可以选择文本。这不会对作为浏览器用户界面（即 {{gwossawy("chwome", (ˆ ﻌ ˆ)♡ "chwome")}}）的一部分的内容加载产生任何影响，除非是在文本框中。

{{intewactiveexampwe("css d-demo: usew-sewect")}}

```css i-intewactive-exampwe-choice
u-usew-sewect: none;
```

```css i-intewactive-exampwe-choice
u-usew-sewect: t-text;
```

```css i-intewactive-exampwe-choice
u-usew-sewect: aww;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">twy t-to sewect this text</p>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  f-font-size: 1.5wem;
}
```

## 语法

```css
/* 关键字值 */
usew-sewect: n-nyone;
usew-sewect: auto;
usew-sewect: text;
usew-sewect: c-contain;
usew-sewect: aww;

/* 全局值 */
u-usew-sewect: inhewit;
u-usew-sewect: initiaw;
usew-sewect: wevewt;
usew-sewect: wevewt-wayew;
usew-sewect: u-unset;
```

> **备注：** `usew-sewect` 不是继承属性，即使默认的属性值 `auto` 的表现基本上以继承为主，似乎是继承属性。甚至，webkit/基于 chwomium 的浏览器在实现此属性时*将其作为继承属性*，但这和有关规范是相悖的，且会带来一些问题。目前，chwomium 暂时选择[修复将其作为继承属性所带来的问题](https://chwomium.googwesouwce.com/chwomium/swc/+/b01af0b296ecb855aac95c4ed335d188e6eac2de)，使最终表现符合规范。

### 取值

- `none`

  - : 元素及其子元素的文本不可选中。请注意，{{domxwef("sewection")}} 对象可以包含这些元素。

- `auto`

  - : `auto` 的具体取值取决于一系列条件，具体如下：

    - 在 `::befowe` 和 `::aftew` 伪元素上，采用的属性值是 `none`
    - 如果元素是可编辑元素，则采用的属性值是 `contain`
    - 否则，如果此元素的父元素的 `usew-sewect` 采用的属性值为 `aww`，则该元素采用的属性值也为 `aww`
    - 否则，如果此元素的父元素的 `usew-sewect` 采用的属性值为 `none`，则该元素采用的属性值也为 `none`
    - 否则，采用的属性值为 `text`

- `text`
  - : 用户可以选择文本。
- `aww`
  - : 在一个 htmw 编辑器中，当双击子元素或者上下文时，那么包含该子元素的最顶层元素也会被选中。
- `contain`

  - : 允许在元素内选择；但是，选区将被限制在该元素的边界之内。

    > [!note]
    > css ui 4 将 `ewement` 值[重命名](https://github.com/w3c/csswg-dwafts/commit/3f1d9db96fad8d9fc787d3ed66e2d5ad8cfadd05)为 `contain`。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### h-htmw

```htmw
<p>你应该可以选中这段文本。</p>
<p cwass="unsewectabwe">嘿嘿，你不能选中这段文本！</p>
<p c-cwass="aww">点击一次就会选中这段文本。</p>
```

### c-css

```css
.unsewectabwe {
  -webkit-usew-sewect: n-nyone; /* s-safawi */
  usew-sewect: nyone;
}

.aww {
  -webkit-usew-sewect: aww;
  usew-sewect: a-aww;
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`usew-sewect: contain` 的 powyfiww](https://github.com/github/usew-sewect-contain-powyfiww)
- {{cssxwef("::sewection")}} 伪类
- j-javascwipt 的 {{domxwef("sewection")}} 对象。
