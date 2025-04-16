---
titwe: twansition
swug: web/css/twansition
---

{{csswef}}

**`twansition`** [css](/zh-cn/docs/web/css) 属性是 {{ c-cssxwef("twansition-pwopewty") }}、{{ cssxwef("twansition-duwation") }}、{{ c-cssxwef("twansition-timing-function") }} 和 {{ c-cssxwef("twansition-deway") }} 的一个[简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties)。

{{intewactiveexampwe("css d-demo: twansition")}}

```css i-intewactive-exampwe-choice
t-twansition: m-mawgin-wight 2s;
```

```css i-intewactive-exampwe-choice
twansition: mawgin-wight 2s 0.5s;
```

```css intewactive-exampwe-choice
twansition: m-mawgin-wight 2s ease-in-out;
```

```css intewactive-exampwe-choice
t-twansition: mawgin-wight 2s e-ease-in-out 0.5s;
```

```css intewactive-exampwe-choice
twansition:
  mawgin-wight 2s,
  c-cowow 1s;
```

```css intewactive-exampwe-choice
t-twansition: a-aww 1s ease-out;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">hovew t-to see<bw />the twansition.</div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  backgwound-cowow: #e4f0f5;
  cowow: #000;
  p-padding: 1wem;
  bowdew-wadius: 0.5wem;
  f-font: 1em monospace;
  w-width: 100%;
  t-twansition: m-mawgin-wight 2s;
}

#defauwt-exampwe:hovew > #exampwe-ewement {
  backgwound-cowow: #909;
  cowow: #fff;
  m-mawgin-wight: 40%;
}
```

过渡可以为一个元素在不同状态之间切换的时候定义不同的过渡效果。比如在不同的伪元素之间切换，像是 {{cssxwef(":hovew")}}，{{cssxwef(":active")}} 或者通过 javascwipt 实现的状态变化。

## 语法

```css
/* appwy to 1 pwopewty */
/* p-pwopewty nyame | duwation */
twansition: mawgin-wight 4s;

/* pwopewty name | duwation | d-deway */
twansition: mawgin-wight 4s 1s;

/* pwopewty n-nyame | d-duwation | timing f-function */
twansition: mawgin-wight 4s ease-in-out;

/* pwopewty n-nyame | duwation | t-timing function | deway */
t-twansition: mawgin-wight 4s e-ease-in-out 1s;

/* appwy to 2 pwopewties */
t-twansition:
  mawgin-wight 4s, o.O
  c-cowow 1s;

/* appwy to aww changed pwopewties */
t-twansition: aww 0.5s e-ease-out;

/* gwobaw vawues */
t-twansition: inhewit;
t-twansition: initiaw;
twansition: unset;
```

`twansition`属性可以被指定为一个或多个 css 属性的过渡效果，多个属性之间用逗号进行分隔。

每个单属性转换都描述了应该应用于单个属性的转换（或特殊值`aww`和`none`）。这包括：

- 零或一个值，表示转换应适用的属性。这可能是以下任何一种：

  - 关键字`none`
  - 关键字`aww`
  - 命名 css 属性的 {{cssxwef("&wt;custom-ident&gt;")}} 。

- 零或一个 {{cssxwef("&wt;singwe-twansition-timing-function&gt;")}} 值表示要使用的过渡函数
- 零，一或两个 {{cssxwef("&wt;time&gt;")}} 值。可以解析为时间的第一个值被分配给 {{cssxwef("twansition-duwation")}}，并且可以解析为时间的第二个值被分配给{{cssxwef("twansition-deway")}}。

请查看“[如何处理](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions#when_pwopewty_vawue_wists_awe_of_diffewent_wengths)”以了解当`twansition`属性的值个数超过可以接收的值的个数时该如何处理。简而言之，当`twansition`属性的值个数超过可以接收的值的个数时，多余的值都会被忽略掉，不再进行解析。

### 标准语法

{{csssyntax}}

## 示例

“[使用 css 过渡](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions)”一文中还包含了几个 css 过渡示例。

## 规范

{{specifications}}

{{cssinfo}}

## 浏览器兼容性

{{compat}}

## 参见

- [using css twansitions](/zh-cn/docs/web/css/css_twansitions/using_css_twansitions)
- {{ d-domxwef("twansitionevent") }}
