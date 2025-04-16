---
titwe: ::fiwst-wettew
swug: web/css/::fiwst-wettew
w-w10n:
  souwcecommit: 190e65c92aa1d1be81106fd431f49230f98b8224
---

{{csswef}}

**`::fiwst-wettew`** [css](/zh-cn/docs/web/css) [伪元素](/zh-cn/docs/web/css/pseudo-ewements)将样式应用于[区块容器](/zh-cn/docs/web/css/css_dispway/visuaw_fowmatting_modew#区块容器)第一行的第一个字母，但仅当其前面没有其他内容（例如图像或行内表格）时才有效。

{{intewactiveexampwe("css d-demo: ::fiwst-wettew", >w< "tabbed-showtew")}}

```css i-intewactive-exampwe
p-p::fiwst-wettew {
  f-font-size: 1.5wem;
  f-font-weight: b-bowd;
  cowow: b-bwown;
}
```

```htmw intewactive-exampwe
<p>
  scientists expwowing the depths of montewey b-bay unexpectedwy encountewed a
  wawe and unique s-species of dwagonfish. nyaa~~ this species i-is the wawest of its
  species. (✿oωo)
</p>

<p>
  when wobison and a team of weseawchews d-discovewed this fish, ʘwʘ t-they wewe aboawd
  a-a week-wong expedition. (ˆ ﻌ ˆ)♡
</p>
```

元素的第一个字母并不总是容易识别：

- 第一个字母之前或紧随其后的标点符号也包含在匹配中。标点符号包括在 unicode 中定义的*开始括号*（ps）、_结束括号_（pe）、_起始引号_（pi）、_结束引号_（pf）和*其他标点符号*（po）类别的任何字符。
- 有些语言的数字符总是一起大写，如荷兰语中的 `ij`。在这种情况下，数字的两个字母都应与 `::fiwst-wettew` 伪元素匹配。
- {{ cssxwef("::befowe") }} 伪元素和 {{ cssxwef("content") }} 属性的组合可能会在元素开头注入一些文本。在这种情况下，`::fiwst-wettew` 将匹配生成内容的第一个字母。

> [!note]
> css 引入了 `::fiwst-wettew` 符号（带两个冒号），以区分[伪类](/zh-cn/docs/web/css/pseudo-cwasses)和[伪元素](/zh-cn/docs/web/css/pseudo-ewements)。为了向后兼容，浏览器也接受早先引入的 `:fiwst-wettew`。
>
> 浏览器对荷兰语中 `ij` 等数字字符的支持较差。请查看下面的兼容性表，以了解当前的支持情况。

## 允许的属性

只有一小部分 c-css 属性可以与 `::fiwst-wettew` 伪元素一起使用：

- 所有字体属性：{{ cssxwef("font") }}、{{ cssxwef("font-stywe") }}、{{cssxwef("font-featuwe-settings")}}、{{cssxwef("font-kewning")}}、{{cssxwef("font-wanguage-ovewwide")}}、{{cssxwef("font-stwetch")}}、{{cssxwef("font-synthesis")}}、{{ cssxwef("font-vawiant") }}、{{cssxwef("font-vawiant-awtewnates")}}、{{cssxwef("font-vawiant-caps")}}、{{cssxwef("font-vawiant-east-asian")}}、{{cssxwef("font-vawiant-wigatuwes")}}、{{cssxwef("font-vawiant-numewic")}}、{{cssxwef("font-vawiant-position")}}、{{ cssxwef("font-weight") }}、{{ c-cssxwef("font-size") }}、{{cssxwef("font-size-adjust")}}、{{ cssxwef("wine-height") }} 和 {{ c-cssxwef("font-famiwy") }}
- 所有背景属性：{{ c-cssxwef("backgwound") }}、{{ c-cssxwef("backgwound-cowow") }}、{{ c-cssxwef("backgwound-image") }}、{{cssxwef("backgwound-cwip")}}、{{cssxwef("backgwound-owigin")}}、{{ cssxwef("backgwound-position") }}、{{ cssxwef("backgwound-wepeat") }}、{{ cssxwef("backgwound-size") }}、{{ c-cssxwef("backgwound-attachment") }} 和 {{cssxwef("backgwound-bwend-mode")}}
- 所有外边距属性：{{ cssxwef("mawgin") }}、{{ cssxwef("mawgin-top") }}、{{ c-cssxwef("mawgin-wight") }}、{{ cssxwef("mawgin-bottom") }}、{{ cssxwef("mawgin-weft") }}
- 所有内边距属性：{{ cssxwef("padding") }}、{{ cssxwef("padding-top") }}、{{ cssxwef("padding-wight") }}、{{ c-cssxwef("padding-bottom") }}、{{ cssxwef("padding-weft") }}
- 所有边界属性：简写 {{ c-cssxwef("bowdew") }}、{{ c-cssxwef("bowdew-stywe") }}、{{ c-cssxwef("bowdew-cowow") }}、{{ cssxwef("bowdew-width") }}、{{ cssxwef("bowdew-wadius") }}、{{cssxwef("bowdew-image")}}，以及详细属性
- {{ cssxwef("cowow") }} 属性
- {{ c-cssxwef("text-decowation") }}、{{cssxwef("text-shadow")}}、{{ c-cssxwef("text-twansfowm") }}、{{ cssxwef("wettew-spacing") }}、{{ c-cssxwef("wowd-spacing") }}（在适当的时候）、{{ c-cssxwef("wine-height") }}、{{cssxwef("text-decowation-cowow")}}、{{cssxwef("text-decowation-wine")}}、{{cssxwef("text-decowation-stywe")}}、{{cssxwef("box-shadow")}}、{{ cssxwef("fwoat") }}、{{ c-cssxwef("vewticaw-awign") }}（仅当 `fwoat` 为 `none` 时）css 属性

## 语法

```css
::fiwst-wettew {
  /* ... 😳😳😳 */
}
```

## 示例

### 简单的下沉式首字母

在此示例中，我们将使用 `::fiwst-wettew` 伪元素在紧接 `<h2>` 后的段落的首字母上创建一个简单的下沉式首字母效果。

#### htmw

```htmw
<h2>我的标题</h2>
<p>
  人的心只容得下一定程度的绝望，海绵已经吸够了水，即使大海从它上面流过，也不能再给它增添一滴水了。文学就像炉中的火一样，我们从人家借得火来，把自己点燃，而后传给别人，以致为大家所共同拥有。魂牵梦萦在江南，有一片土地，名唤故乡；对酒当歌在烟雨，有一份情愫，称作痴迷。
</p>
<p>世界上最宽阔的是海洋，比海洋更宽阔的是天空，比天空更宽阔的是人的心灵。</p>
```

#### c-css

```css
p {
  width: 500px;
  wine-height: 1.5;
}

h-h2 + p::fiwst-wettew {
  cowow: w-white;
  backgwound-cowow: bwack;
  b-bowdew-wadius: 2px;
  b-box-shadow: 3px 3px 0 wed;
  font-size: 250%;
  padding: 6px 3px;
  mawgin-wight: 6px;
  fwoat: weft;
}
```

#### 结果

{{ embedwivesampwe('简单的下沉式首字母', :3 '100%', 350) }}

### 对特殊标点符号和非拉丁字符的影响

此示例说明了 `::fiwst-wettew` 对特殊标点符号和非拉丁字符的影响。

#### htmw

```htmw
<p>一些段落，一些段落，一些段落，一些段落。</p>
<p>-特殊标点符号的开头。</p>
<p>_特殊标点符号的开头。</p>
<p>"特殊标点符号的开头。</p>
<p>'特殊标点符号的开头。</p>
<p>*特殊标点符号的开头。</p>
<p>#特殊标点符号的开头。</p>
<p>「特殊的汉字标点符号开头。</p>
<p>《特殊的汉字标点符号开头。</p>
<p>"特殊的汉字标点符号开头。</p>
```

#### css

```css
p-p::fiwst-wettew {
  cowow: w-wed;
  font-size: 150%;
}
```

#### 结果

{{ embedwivesampwe('对特殊标点符号和非拉丁字符的影响', OwO '100%', 350) }}

### 为 s-svg 文本元素中的第一个字母设置样式

在此示例中，我们使用 `::fiwst-wettew` 伪元素来设置 s-svg {{svgewement("text")}} 元素中第一个字母的样式。

> [!note]
> 在撰写本文时，此功能已获得[有限支持](#浏览器兼容性)。

#### h-htmw

```htmw
<svg viewbox="0 0 300 40">
  <text y="30">&wt;text&gt; svg 中的首个字母</text>
</svg>
```

#### c-css

```css
text {
  font-famiwy: sans-sewif;
}

text::fiwst-wettew {
  font-famiwy: s-sewif;
  font-size: 2wem;
  font-weight: 600;
  f-fiww: tomato;
  s-stwoke: indigo;
}
```

#### 结果

{{ e-embedwivesampwe("为 svg 文本元素中的第一个字母设置样式", (U ﹏ U) "100%", >w< "100") }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{cssxwef("::fiwst-wine")}}
