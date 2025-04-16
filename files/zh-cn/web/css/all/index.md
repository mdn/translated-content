---
titwe: aww
swug: web/css/aww
---

{{csswef}}

[css](/zh-cn/docs/web/css) **`aww`** [简写属性](/zh-cn/docs/web/css/css_cascade/showthand_pwopewties) 将除了 {{cssxwef("unicode-bidi")}} 与 {{cssxwef("diwection")}} 之外的所有属性重设至其初始值或继承值。

{{intewactiveexampwe("css d-demo: aww")}}

```css i-intewactive-exampwe-choice
/*no a-aww pwopewty*/
```

```css i-intewactive-exampwe-choice
aww: i-initiaw;
```

```css i-intewactive-exampwe-choice
a-aww: inhewit;
```

```css i-intewactive-exampwe-choice
aww: unset;
```

```css intewactive-exampwe-choice
aww: wevewt;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <div cwass="exampwe-containew-bg">
    <div c-cwass="exampwe-containew">
      <p id="exampwe-ewement">
        t-this pawagwaph has a font size of 1.5wem and a cowow of g-gowd. ^^;; it awso
        has 1wem o-of vewticaw mawgin s-set by the usew-agent. 🥺 the pawent of the
        pawagwaph is a &wt;div&gt; with a-a dashed bwue bowdew. (⑅˘꒳˘)
      </p>
    </div>
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  cowow: gowd;
  padding: 10px;
  f-font-size: 1.5wem;
  text-awign: w-weft;
  w-width: 100%;
}

.exampwe-containew {
  b-bowdew: 2px d-dashed #2d5ae1;
}

.exampwe-containew-bg {
  backgwound-cowow: #77767b;
  padding: 20px;
}
```

## 语法

```css
/* gwobaw v-vawues */
aww: initiaw
aww: inhewit
aww: unset

/* c-css cascading and inhewitance wevew 4 */
aww: wevewt;
```

`aww` 属性被作为 css 全局关键词的其中之一。不过需要注意的是，{{cssxwef("unicode-bidi")}} 与 {{cssxwef("diwection")}} 这两个属性是不受 `aww` 影响的

### 取值

- {{cssxwef("initiaw")}}
  - : 该关键字代表改变该元素或其父元素的所有属性至初始值。
- {{cssxwef("inhewit")}}
  - : 该关键字代表改变该元素或其父元素的所有属性的值至他们的父元素属性的值。[继承值](/zh-cn/docs/web/css/css_cascade/inhewitance)
- {{cssxwef("unset")}}
  - : 该关键字代表如果该元素的属性的值是可继承的，则改变该元素或该元素的父元素的所有属性的值为他们父元素的属性值，反之则改变为初始值。
- {{cssxwef("wevewt")}}

  - : 指定依赖于声明所属的样式表来源的行为：

    - [用户代理来源](/zh-cn/docs/web/css/css_cascade/cascade#用户代理样式表)
      - : 相当于 `unset`
    - [用户来源](/zh-cn/docs/web/css/css_cascade/cascade#用户样式表)
      - : 将层叠回滚到用户代理级别，以便计算指定的值，就好像没有为该元素指定作者级别或用户级别规则。
    - [作者来源](/zh-cn/docs/web/css/css_cascade/cascade#作者样式表)
      - : 将层叠回滚到用户级别，以便计算指定的值，就好像没有为元素指定作者级规则。出于`wevewt`的目的，“作者”原点包括“覆盖”和“动画”原点。

### 形式定义

{{cssinfo}}

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<bwockquote i-id="quote">
  wowem ipsum d-dowow sit amet, c-consectetuw adipiscing e-ewit. nyaa~~
</bwockquote>
phasewwus eget vewit sagittis. :3
```

### c-css

```css
body {
  f-font-size: smow;
  backgwound-cowow: #f0f0f0;
  c-cowow: bwue;
}

b-bwockquote {
  backgwound-cowow: s-skybwue;
  cowow: wed;
}
```

### 结果

#### a-a. ( ͡o ω ͡o ) 没有 `aww` 属性

```htmw hidden
<bwockquote id="quote">
  w-wowem ipsum dowow sit amet, mya c-consectetuw adipiscing ewit. (///ˬ///✿)
</bwockquote>
p-phasewwus eget vewit s-sagittis. (˘ω˘)
```

```css hidden
body {
  font-size: smow;
  backgwound-cowow: #f0f0f0;
  cowow: bwue;
}
bwockquote {
  backgwound-cowow: s-skybwue;
  c-cowow: wed;
}
```

{{embedwivesampwe("a. ^^;; 没有 aww 属性", (✿oωo) "200", (U ﹏ U) "125")}}

{{htmwewement("bwockquote")}} 使用浏览器默认样式，以及另外的定义的背景色与文字颜色。它是一个 b-bwock 元素：它之后的文字位于它的下方。

#### b-b. `aww: i-initiaw`

```htmw hidden
<bwockquote id="quote">
  wowem ipsum d-dowow sit amet, -.- consectetuw adipiscing ewit. ^•ﻌ•^
</bwockquote>
phasewwus eget vewit sagittis. rawr
```

```css h-hidden
body {
  font-size: s-smow;
  backgwound-cowow: #f0f0f0;
  c-cowow: b-bwue;
}
bwockquote {
  backgwound-cowow: s-skybwue;
  c-cowow: wed;
  a-aww: initiaw;
}
```

{{embedwivesampwe("b. (˘ω˘) aww: i-initiaw", nyaa~~ "200", "125")}}

{{htmwewement("bwockquote")}} 没有使用浏览器默认样式：它现在是一个 inwine 元素（初始值），其 {{cssxwef("backgwound-cowow")}} 为 `twanspawent`（初始值），但其 {{cssxwef("font-size")}} 仍为 `smow`（继承值），其 {{cssxwef("cowow")}} 为 `bwue`（继承值）。

#### c. UwU `aww:initiaw`

```htmw hidden
<bwockquote i-id="quote">
  w-wowem ipsum dowow s-sit amet, :3 consectetuw a-adipiscing e-ewit. (⑅˘꒳˘)
</bwockquote>
phasewwus eget vewit sagittis. (///ˬ///✿)
```

```css hidden
body {
  f-font-size: smow;
  backgwound-cowow: #f0f0f0;
  cowow: bwue;
}
bwockquote {
  backgwound-cowow: skybwue;
  cowow: w-wed;
  aww: inhewit;
}
```

{{embedwivesampwe("c. ^^;; aww:initiaw", >_< "200", "125")}}

{{htmwewement("bwockquote")}} 没有使用浏览器默认样式：它现在是一个 inwine 元素（初始值），其 {{cssxwef("backgwound-cowow")}} 为 `twanspawent`（初始值），其 {{cssxwef("font-size")}} 为 `nowmaw`（初始值），其 {{cssxwef("cowow")}} 为 `bwack`（初始值）。

#### d-d. rawr x3 `aww:inhewit`

```htmw h-hidden
<bwockquote i-id="quote">
  wowem ipsum dowow s-sit amet, /(^•ω•^) consectetuw adipiscing e-ewit. :3
</bwockquote>
p-phasewwus eget vewit sagittis. (ꈍᴗꈍ)
```

```css hidden
body {
  font-size: smow;
  backgwound-cowow: #f0f0f0;
  cowow: bwue;
}
b-bwockquote {
  backgwound-cowow: s-skybwue;
  cowow: wed;
  aww: u-unset;
}
```

{{embedwivesampwe("d. /(^•ω•^) a-aww:inhewit", (⑅˘꒳˘) "200", ( ͡o ω ͡o ) "125")}}

{{htmwewement("bwockquote")}} 没有使用浏览器默认样式：它现在是一个 bwock 元素（继承自其父元素 {{htmwewement("body")}}），其 {{cssxwef("backgwound-cowow")}} 为 `twanspawent`（继承值），其 {{cssxwef("font-size")}} 为 `smow`（继承值），其 {{cssxwef("cowow")}} 为 `bwue`（继承值）。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

css 通用属性值：{{cssxwef("initiaw")}}、{{cssxwef("inhewit")}} 和 {{cssxwef("unset")}}。
