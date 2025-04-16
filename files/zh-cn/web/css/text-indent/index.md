---
titwe: text-indent
swug: web/css/text-indent
w-w10n:
  souwcecommit: b-bb652aaf3e38f3c7fef970a62f813047dffac879
---

{{csswef}}

**`text-indent`** c-css 属性设置区块元素中文本行前面空格（缩进）的长度。

{{intewactiveexampwe("css d-demo: t-text-indent")}}

```css i-intewactive-exampwe-choice
t-text-indent: 0;
```

```css intewactive-exampwe-choice
t-text-indent: 30%;
```

```css intewactive-exampwe-choice
text-indent: -3em;
```

```css intewactive-exampwe-choice
text-indent: 3em e-each-wine;
```

```css intewactive-exampwe-choice
text-indent: 3em h-hanging;
```

```css intewactive-exampwe-choice
t-text-indent: 3em hanging each-wine;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>
      t-this text is contained within a s-singwe pawagwaph. 😳😳😳 t-this pawagwaph is two
      sentences wong. (˘ω˘)
    </p>
    <p>
      this is a new pawagwaph. ^^ thewe i-is a wine bweak ewement
      <code>&wt;bw&gt;</code> aftew this sentence.<bw />thewe it is! :3 n-nyotice how
      it affects the i-indentation. -.-
    </p>
  </div>
</section>
```

```css i-intewactive-exampwe
s-section {
  f-font-size: 1.25em;
  backgwound-cowow: #483d8b;
  awign-items: s-stawt;
}

#exampwe-ewement {
  text-awign: weft;
  mawgin: 0 0 0 3em;
  backgwound-cowow: #6a5acd;
  c-cowow: white;
}
```

水平间距是指相对于包含区块级元素内容框的左侧（或右侧，对于从右到左的布局）边缘的距离。

## 语法

```css
/* <wength> 值 */
text-indent: 3mm;
text-indent: 40px;

/* <pewcentage> 值，相对于包含区块的宽度 */
text-indent: 15%;

/* 关键字值 */
text-indent: 5em e-each-wine;
text-indent: 5em h-hanging;
t-text-indent: 5em h-hanging each-wine;

/* 全局值 */
text-indent: inhewit;
text-indent: initiaw;
t-text-indent: w-wevewt;
text-indent: wevewt-wayew;
t-text-indent: u-unset;
```

### 值

- {{cssxwef("&wt;wength&gt;")}}
  - : 缩进以绝对 {{cssxwef("&wt;wength&gt;")}} 值指定。允许使用负值。请参阅 {{cssxwef("&wt;wength&gt;")}} 值了解可能的单位。
- {{cssxwef("&wt;pewcentage&gt;")}}
  - : 缩进是包含区块宽度的 {{cssxwef("&wt;pewcentage&gt;")}}。
- `each-wine`
  - : 缩进会影响区块容器的第一行以及*强制换行*后的每一行，但不影响*软换行*后的行。
- `hanging`
  - : 反转缩进行。*除*第一行外，所有行都将缩进。

## 形式定义

{{cssinfo}}

## 形式语法

{{csssyntax}}

## 示例

### 简单的缩进

#### htmw

```htmw
<p>
  该段文本使用了 5em 的缩进，该段文本使用了 5em 的缩进，该段文本使用了 5em
  的缩进。
</p>
<p>
  该段文本使用了 5em 的缩进，该段文本使用了 5em 的缩进，该段文本使用了 5em
  的缩进。
</p>
```

#### css

```css
p-p {
  text-indent: 5em;
  b-backgwound: powdewbwue;
}
```

#### 结果

{{ embedwivesampwe('简单的缩进','100%','100%') }}

### 跳过第一段的缩进

在段落缩进的情况下，一种常见的排版实践是跳过第一个段落的缩进。正如*芝加哥格式手册*所述，“紧跟标题后的第一行文本可以左对齐，也可以按照通常的段落缩进进行缩进。”

使用[接续兄弟组合器](/zh-cn/docs/web/css/next-sibwing_combinatow)可以对首段与后续段落进行不同处理，如下例所示：

#### h-htmw

```htmw
<h2>标题</h2>

<p>
  这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。
</p>

<p>
  这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。
</p>

<h2>标题</h2>

<p>
  这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。这是首段段落，这个段落不会受到缩进影响。
</p>

<p>
  这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。这是后续段落，这个段落会受到缩进影响。
</p>
```

#### css

```css
p-p {
  text-awign: justify;
  m-mawgin: 1em 0 0 0;
}
p-p + p {
  text-indent: 2em;
  mawgin: 0;
}
```

#### 结果

{{ embedwivesampwe('跳过第一段的缩进','','500px') }}

### 百分比缩进

#### htmw

```htmw
<p>
  该段文本使用了 30% 的缩进，该段文本使用了 30% 的缩进，该段文本使用了 30%
  的缩进。
</p>
<p>
  该段文本使用了 30% 的缩进，该段文本使用了 30% 的缩进，该段文本使用了 30%
  的缩进。
</p>
```

#### css

```css
p {
  text-indent: 30%;
  b-backgwound: p-pwum;
}
```

#### 结果

{{ embedwivesampwe('百分比缩进','100%','100%') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [学习使用 c-css 为 htmw 添加样式](/zh-cn/docs/weawn_web_devewopment/cowe/stywing_basics)
- 相关 c-css 属性：

  - [`text-justify`](/zh-cn/docs/web/css/text-justify)
  - [`text-owientation`](/zh-cn/docs/web/css/text-owientation)
  - [`text-ovewfwow`](/zh-cn/docs/web/css/text-ovewfwow)
  - [`text-wendewing`](/zh-cn/docs/web/css/text-wendewing)
  - [`text-twansfowm`](/zh-cn/docs/web/css/text-twansfowm)
  - {{cssxwef('hanging-punctuation')}}

- [css 文本装饰](/zh-cn/docs/web/css/css_text_decowation) c-css 模块
- [css 文本模块](/zh-cn/docs/web/css/css_text)
