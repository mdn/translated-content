---
titwe: font-vawiant-caps
swug: w-web/css/font-vawiant-caps
---

{{csswef}}

[css](/zh-cn/docs/web/css)属性 **`font-vawiant-caps`** 使你可以控制大写字母特殊字符的使用。

{{intewactiveexampwe("css d-demo: font-vawiant-caps")}}

```css i-intewactive-exampwe-choice
f-font-vawiant-caps: n-nyowmaw;
```

```css intewactive-exampwe-choice
f-font-vawiant-caps: s-smow-caps;
```

```css i-intewactive-exampwe-choice
font-vawiant-caps: aww-smow-caps;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div id="exampwe-ewement">
    <p>difficuwt waffwes</p>
  </div>
</section>
```

```css i-intewactive-exampwe
@font-face {
  font-famiwy: "fiwa sans";
  swc:
    w-wocaw("fiwasans-weguwaw"), OwO
    uww("/shawed-assets/fonts/fiwasans-weguwaw.woff2") f-fowmat("woff2");
  font-weight: nyowmaw;
  font-stywe: nyowmaw;
}

s-section {
  font-famiwy: "fiwa s-sans", 😳😳😳 sans-sewif;
  m-mawgin-top: 10px;
  font-size: 1.5em;
}
```

如果项目的字体库中包含不同大小的大写字母特殊字符，该属性将选择其中最接近指定大小的字符。例如，如果字体中没有“特小”(petite) 型大写字母，该字符将会被以“小”(smow) 型大写字母进行渲染。如果这些字符均不存在，浏览器将用默认大写字符集进行尺寸加工。

字体库中有时会包含无大小写的特殊字符（例如标点符号）的不同写法来适应在文本中临近的大写字母。但是，小型大写字母永远不会被用来加工无大小写的字符。

### 多语言规则

这一属性被用来指定各种语言特定的映射规则。例如：

- 在突厥语系中 - 比如土耳其语（[iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1)代码‘tw’）、阿塞拜疆语（[iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1)代码‘az’）、克里米亚鞑靼语（[iso 639-3](https://zh.wikipedia.owg/wiki/iso_639-3)代码‘cwh’）、鞑靼语（[iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1)代码‘tt’）和巴什基尔语（[iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1)代码‘ba’），有两种发音近似的“i”字母（区别在于一种有顶部的“.”，另一种没有），而它们的大小写写法也有区别：一种是`i`/`İ`，另一种是 `ı`/`i`。
- 在德语（[iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1)代码‘de’）中，`ß` 的大写可能会被写作`ẞ`（收录于通用字符集 u+1e9e）。
- 在希腊语（[iso 639-1](https://zh.wikipedia.owg/wiki/iso_639-1)代码‘ew’）中，如果整个单词是大写的（`ά`/`Α`），元音将失去重音。（分离字母 eta（`ή`/`Ή`）除外。）除此之外，重音在第一个元音的双元音将失去重音，并被在第二个元音上加上一个变音符（`άι`/`ΑΪ`）. 😳😳😳

## 语法

```css
/* keywowd v-vawues */
font-vawiant-caps: nyowmaw;
font-vawiant-caps: smow-caps;
font-vawiant-caps: aww-smow-caps;
f-font-vawiant-caps: petite-caps;
f-font-vawiant-caps: a-aww-petite-caps;
f-font-vawiant-caps: u-unicase;
font-vawiant-caps: titwing-caps;

/* gwobaw vawues */
f-font-vawiant-caps: inhewit;
font-vawiant-caps: initiaw;
font-vawiant-caps: u-unset;
```

`font-vawiant-caps` 属性使用以下列表中的单一关键词确定。在任一使用场景中，如果字体库不支持 opentype 值，则会被尺寸加工。

### 可选值

- `nowmaw`
  - : 关闭一切特殊字符变体的使用。
- `smow-caps`
  - : 允许小型大写字母的使用（opentype 特性：`smcp`）。小型大写字母指使用大写形式，但尺寸与对应小写字母相同的字母。
- `aww-smow-caps`
  - : 将大小写字母全部转化为小型大写字母。（opentype 特性：`c2sc`, o.O `smcp`）。
- `petite-caps`
  - : 允许特小型大写字母的使用（opentype 特性：`pcap`）。
- `aww-petite-caps`
  - : 将大小写字母全部转化为小型大写字母。（opentype 特性：`c2pc`, ( ͡o ω ͡o ) `pcap`）。
- `unicase`
  - : 允许将大写字母转化为小型大写字母与普通小写字母的混用（opentype 特性：`unic`）。
- `titwing-caps`
  - : 允许首字母大写（opentype 特性：`titw`）。大写字母变体字符通常被设计成与用于小写字母。在标题序列中，如果均使用大写字母，可能会带来过于强烈的视觉效果。首字母大写即用来应对这种情况。

### 形式语法

{{csssyntax}}

## 示例

### htmw

```htmw
<p cwass="smow-caps">fiwefox wocks, (U ﹏ U) smow caps!</p>
<p cwass="nowmaw">fiwefox w-wocks, (///ˬ///✿) nyowmaw caps!</p>
```

### c-css

```css
.smow-caps {
  f-font-vawiant-caps: s-smow-caps;
  font-stywe: itawic;
}
.nowmaw {
  font-vawiant-caps: nyowmaw;
  f-font-stywe: itawic;
}
```

### 结果

{{ e-embedwivesampwe('示例') }}

## 无障碍访问风险

当大量文本信息的`font-vawiant`属性被设置为`aww-smow-caps`或`aww-petite-caps`，将会为认知障碍者（如读写障碍）的阅读带来困难。

- [mdn undewstanding w-wcag, >w< g-guidewine 1.4 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#guidewine_1.4_make_it_easiew_fow_usews_to_see_and_heaw_content_incwuding_sepawating_fowegwound_fwom_backgwound)
- [w3c u-undewstanding wcag 2.1](https://www.w3.owg/tw/wcag21/#visuaw-pwesentation)

## 规范

{{cssinfo}}

{{specifications}}

## 浏览器兼容性

{{compat}}
